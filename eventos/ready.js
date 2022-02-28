
const client = require("../index");
client.on('ready', () => {

    
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

    console.log(`${client.user.tag} Kuzin verder estou funcionando carai!`)

})
