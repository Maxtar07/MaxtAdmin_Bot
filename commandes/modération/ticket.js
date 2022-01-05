const { MESSAGES } = require('../../util/constantes');
const Discord = require('discord.js');

module.exports.run = async (client, message) => {

  let ticket = new Discord.MessageEmbed()
  .setTitle('Ouverture d\'un salon privé avec l\'équipe de gestion (admins, modos, etc.)')
  .setDescription('Réagir avec 📩 pour ouvrir un salon privé avec l\'équipe de gestion')

  let server = client.guilds.cache.get('726428189978787872')
  let sendchannel = server.channels.cache.get('726428195187851317')
  sendchannel.bulkDelete(1).then(() => {
    sendchannel.send(ticket)
    .then(msg => msg.react('📩'))
  })

}

module.exports.help = MESSAGES.COMMANDES.MODÉRATION.TICKET;