const fs = require('fs')
const path = require('path')
const { Collection, Client } = require('discord.js');

class botclient extends Client {
  constructor(opts) {
    super({
      intents: 32767,
      allowedMentions: {
        parse: ["users", "roles"],
        repliedUser: false
      },
      ...opts
    })
    this.commands = []
    this.cluster = new Cluster.Client(this, true);
    this.common = new Collection();
    this.aliases = new Collection();
  }
  loadslash() {
    try {
      let folder = 'src/commands/slash'
      const categories = fs.readdirSync(folder)

      for (const category of categories) {
        const commands = fs.readdirSync(`${folder}/${category}`)

        for (const command of commands) {
          const commandClass = require(path.join(process.cwd(), `${folder}/${category}/${command}`))
          const cmd = new(commandClass)(this)

          this.commands.push(cmd)
        }
      }
      console.log('✅[Slash]: Comandos carregados!')
    } catch (e) {
      console.log('❌[Slash]: Erro ao carregar os comandos: ' + e)
    }
  }
  loadcommon() {
    try {
      const commands_path = path.join(__dirname, "..", "..", "commands", "common");

      fs.readdirSync(commands_path).forEach(local => {
        const files = fs.readdirSync(path.join(commands_path, local));

        let common;
        for (let file of files) {

          if (file.endsWith(".js")) {
            common = require(path.join(commands_path, local, file));
            this.common.set(common.name, common);

            for (let aliase of common.aliases)
              this.aliases.set(aliase, common.name);
          }
        }
      });
      console.log('✅[Prefix]: Comandos carregados!')
    } catch (e) {
      console.log('❌[Prefix]: Erro ao carregar os comandos: ' + e)
    }
  }
  loadevents() {
    try {
      let folder = 'src/events'
      const categories = fs.readdirSync(folder)

      for (const category of categories) {
        const events = fs.readdirSync(`${folder}/${category}`)

        for (const event of events) {
          const eventClass = require(path.join(process.cwd(), `${folder}/${category}/${event}`))
          const evt = new(eventClass)(this)

          this.on(evt.name, evt.execute)
        }
      }
      console.log('✅[Events]: Eventos carregados!')
    } catch (e) {
      console.log('❌[Events]: Erro ao carregar os eventos: ' + e)
    }
  }
  setslash() {
    this.application.commands.set(this.commands)
  }
  /**
   * @param {string} id coloque o id do seu servidor de testes
   */
  settemp(id) {
    this.guilds.cache.get(id).commands.set(this.commands)

  }

}

module.exports = botclient
