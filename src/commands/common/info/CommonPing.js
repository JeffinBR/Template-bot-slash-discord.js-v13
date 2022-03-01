const Command = require('../../../structures/command/common.js')
const { MessageEmbed } = require('discord.js')

module.exports = CommonPing = new Command({
  name: 'ping',
  description: 'Mostra meu ping',
  execute: async (client, message, args) => {
    let pingembed = new MessageEmbed()
    pingembed.setTitle('🏓 Pong')
    pingembed.setDescription(`Meu ping está em \`${this.client.ws.ping}\`ms`)

    message.reply({
      embeds: [pingembed]
    })
  }
})