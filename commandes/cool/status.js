const { MESSAGES } = require('../../util/constantes');
const Discord = require('discord.js')

module.exports.run = (client, message) => {

  message.guild.members.fetch().then(fetchAll => {
    const offline = fetchAll.filter(m => m.presence.status === "offline")
    const online = fetchAll.filter(m => m.presence.status === "online")
    const idle = fetchAll.filter(m => m.presence.status === "idle")
    const dnd = fetchAll.filter(m => m.presence.status === "dnd")
    const invisible = fetchAll.filter(m => m.presence.status === "invisible")
    var invisibles = "invisible"
    var inactifs = "inactif"
    if (invisible.size > 1) invisibles = "invisibles"
    if (idle.size > 1) inactifs = "inactifs"

    const embed = new Discord.MessageEmbed()
    .setTitle("Status discord")
    .setDescription(`Voici la liste des status discord et le nombre de membres (actuellement ${fetchAll.size} membres sur le discord) ayant chaque status`)
    .addFields(
      {
        name: `Membres en ligne (online)`, value: `${online.size}`, inline: false
      },
      {
        name: 'Membres hors ligne (offline)', value: `${offline.size}`, inline: false
      },
      {
        name: 'Membres invisibles (invisible)', value: `${invisible.size}`, inline: false
      },
      {
        name: 'Membres inactifs (idle)', value: `${idle.size}`, inline: false
      },
      {
        name: 'Membres à ne pas déranger (dnd)', value: `${dnd.size}`, inline: false
      },
    )

    message.channel.send(embed)
  })
}

module.exports.help = MESSAGES.COMMANDES.COOL.STATUS;