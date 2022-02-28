
const client = require("../index");
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const i = require('../infs.js')

client.on("interactionCreate", async (interaction) => {
//11112006
//config colors
function anali(){
//arays
let arrayy= [`#FF3800`,'#0078FF','#FF8A00','#C24CFF']
let arrayyy = [`#008EFF`,`#7500FF`,`#FF8F33`]
//rands
let rand = arrayy[Math.floor(Math.random() * arrayy.length)]
let rand2 = arrayyy[Math.floor(Math.random() * arrayyy.length)]
//export
i.color = rand
i.color2 = rand2
}


//config 0
if (interaction.isCommand()) {
	const cmd = client.slashCommands.get(interaction.commandName);

//interaction.followUp
await interaction.deferReply({ ephemeral: false }).catch(() => {});

anali()

//lets doidas
const args = [];
let a = 0
let a2 = `Sem opções escolhidas`
//sub commands configs and options
for (let option of interaction.options.data) {
if (option.type === "SUB_COMMAND") {
if (option.name) args.push(option.name);
option.options?.forEach((x) => {
if (x.value) args.push(x.value);
});
} else if (option.value) args.push(option.value);
a = option.type
a2 = option.name
}
interaction.member = interaction.guild.members.cache.get(interaction.user.id);

console.log(args)
//f ms
function ms(ms) {
const seconds = ~~(ms/1000)
const minutes = ~~(seconds/60)
const hours = ~~(minutes/60) 
const days = ~~(hours/24)
const meses = ~~(days/30)
const anos = ~~(meses/12)
return {anos, meses: meses%12, days: days%30, hours: hours%24, minutes: minutes%60, seconds: seconds%60}
}
cmd.run(client, interaction, args, ms);



}

if (interaction.isContextMenu()) {
await interaction.deferReply({ ephemeral: false });
const command = client.slashCommands.get(interaction.commandName);
if (command) command.run(client, interaction);

}
});
