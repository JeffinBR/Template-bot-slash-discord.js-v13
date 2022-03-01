const config = require('./config.json')
const botclient = require('./structutes/client/base.js')
const bot = new botclient()
require('./server')

//Carregando slash commands
bot.loadslash()
//Carregando comandos de prefix
bot.loadcommon()
//Careegando eventos
bot.loadevents()
//Fazendo login
bot.login(config.token)
