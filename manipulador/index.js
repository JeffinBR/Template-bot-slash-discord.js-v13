
const { glob } = require("glob");
const { promisify } = require("util");
const { Client } = require("discord.js");

const globPromise = promisify(glob);


module.exports = async (client) => {
 
 
    const eventFiles = await globPromise(`${process.cwd()}/events/*.js`);
    eventFiles.map((value) => require(value));

 
    const slashCommands = await globPromise(
        `${process.cwd()}/SlashCommands/*/*.js`
    );

    const buzina = [];
    slashCommands.map((value) => {
        const file = require(value);
        if (!file?.name) return;
        client.slashCommands.set(file.name, file);

        if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
        buzina.push(file);
    });
    client.on("ready", async () => {


//coloque o id do seu server de testes, para que os comandos slash apareçam lá primeiro, pois pra atualizar em todos os servers demora serca de 2horas, então isso abaixo apenas agiliza isso no server de testes
        await client.guilds.cache
            .get("ID DO SEU SERVER DE TESTES")
            .commands.set(buzina);
           

        // await client.application.commands.set(buzina); (tire isso de citação para deixar os comandos globais, basta fazer isso uma vez e reniciar o bot, em seguida coloque as barras dnv para rvitar gastar muita ram)
   
   module.exports ={
buzina: buzina.length
   }
   console.log(`${buzina.length} comandos`)
    });
    
};
