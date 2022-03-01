const Event = require('../../structures/event/event.js')
const config = require('../../config.json')
module.exports = class extends Event {
  constructor(client) {
    super(client, {
      name: 'messageCreate'
    })
  }
  execute = async (message) => {
    let prefix = config.prefix
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase()

    if (message.author.bot) return;
    if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (cmd.length === 0) return;
    let command = this.client.common.get(cmd)
    if (!command) command = this.client.common.get(this.client.aliases.get(cmd))

    try {
      command.execute(this.client, message, args)
    } catch (err) {
      console.error('Erro:' + err);
    }
  }
}
