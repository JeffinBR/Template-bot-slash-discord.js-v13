const Command = require('../../../structures/command/slash.js')
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {
  constructor(client) {
    super(client, {
      name: 'ping',
      description: 'Mostra meu ping'
    })
  }
  execute = async (interaction) => {
    let pingembed = new MessageEmbed()
    pingembed.setTitle('🏓 Pong')
    pingembed.setDescription(`Meu ping está em \`${this.client.ws.ping}\`ms`)
    interaction.reply({
      embeds: [pingembed]
    })
  }
}