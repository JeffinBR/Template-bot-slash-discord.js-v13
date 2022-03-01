const Event = require('../../structures/event/event.js')

module.exports = class extends Event {
  constructor(client) {
    super(client, {
      name: 'ready'
    })
  }

  execute = async () => {
    
    process.on('unhandledRejection', (reason, p) => {
      console.log('SCRIPT REJEITADO');
      console.log(reason, p)
    });

    process.on('uncaughtExceptionMonitor', (err, origin) => {
      console.log('BLOQUEADO');
      console.log(err, origin)
    });

    process.on('multipleResolves', (type, promise, reason) => {
      console.log('VÁRIOS ERROS');
      console.log(type, promise, reason)
    });

    process.on("uncaughtException", (err, origin) => {
      console.log('CATCH ERROR');
      console.log(err, origin)
    });

    this.client.user.setActivity('Eu sou um bot!', { type: "PLAYING" })
    this.client.user.setStatus('online')
    console.log(`Bot ${this.client.user.username} logado com sucesso em ${this.client.guilds.cache.size} servidores.`)
    try {
      //Use apenas para setar novos comandos 
      this.client.setslash()
      //Use para setar instantaneamente 
      this.client.settemp("COLOQUE O ID DO SEU SERVIDOR DE TESTES")

    } catch (e) {
      console.log('Slash: ' + e)
    }
  }
}