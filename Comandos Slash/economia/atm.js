const db = require("quick.db");

const Discord = require("discord.js");
const c = require("../../infs")
module.exports = {
	name: "atm",
	description: "[ 💰 Economia] » Veja todas as suas moedas.",
	type: 'CHAT_INPUT',


	run: async (client, interaction, args) => {

		let money = await db.fetch(`money_${interaction.user.id}`)
		if (money === null) money = 0
		let banco = await db.fetch(`bank_${interaction.user.id}`)
		if (banco === null) banco = 0
		
		let em = await db.fetch(`emprego_${interaction.user.id}`)
		if(em === null) em = 0
		
		let emprego = `Não escolhido.`
		
		if(em === 1) emprego = `Faxineiro(a)`
		if(em === 2) emprego = `Mecânico(a)`
		if(em === 3) emprego = `Repositor(a)`
		if(em === 4) emprego = `Secretário(a)`
		
		let lvl = await db.fetch(`lvl_${interaction.user.id}`)
		if(lvl === null) lvl = 1
		
		let xp = await db.fetch(`xp_${interaction.user.id}`)
		if(xp === null) xp = 1
		
		let hard = await db.fetch(`hard_${interaction.user.id}`)
		if(hard === null) hard = 250
		
		const embed = new Discord.MessageEmbed()
		.setColor(c.color)
		.setFooter(interaction.user.tag, interaction.user.displayAvatarURL())
		.setTitle(`**__💸 Inventário __**`)
		.setDescription(`:moneybag: **» Moedas: __${money}__**\n**🏦 » Dinheiro no banco __${banco}__**\n📥 **» Total: __${banco+money}__**\n💼 **» Emprego: __${emprego}__**\n🌟 **» Nível: __${lvl}__**\n🎉 **» XP: __${xp}/${hard}__**`)
		interaction.followUp({
			embeds: [embed]})

	}
  }
