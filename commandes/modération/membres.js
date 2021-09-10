const { MESSAGES } = require('../../util/constantes');
const Discord = require('discord.js');

module.exports.run = async (client, message) => {

  var members = message.guild.roles.cache.find(m => m.id === "726428189978787873");
  var girls = message.guild.roles.cache.find(g => g.id === "726428190012211217");
  var boys = message.guild.roles.cache.find(b => b.id === "726428190012211216");
  var no_binary = message.guild.roles.cache.find(o => o.id === "824740975242117191");

  var rappel_embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`Petit rappel pour les nouveaux`)
    .addField(`Si tu n'as pas encore fait ton choix et si tu veux accéder au reste du serveur, il te suffit de réagir avec ce qui te convient :`,
`
👧 - pour obtenir le rôle ${girls}
👦 - pour obtenir le rôle ${boys}
🏳️‍🌈 - Pour obtenir le rôle ${no_binary}


Pour découvrir les différentes catégories disponibles sur le serveur, aller dans <#726428190427447365> pour voir quelques petites explications en plus.`)
    .setFooter(`nous te souhaitons que du bonheur !!`)
  client.channels.cache.get("726428190427447361").bulkDelete(100)
  client.channels.cache.get("726428190427447361").send(`${members}`).then(() => {
    client.channels.cache.get("726428190427447361").send(rappel_embed).then(function (rappel_embed) {//salon bienvenue, catégorie acceuil
      rappel_embed.react('👧').then(() => {
        rappel_embed.react('👦').then(() => {
          rappel_embed.react('🏳️‍🌈')
        })
      })
    })
  })

}

module.exports.help = MESSAGES.COMMANDES.MODÉRATION.MEMBRES;