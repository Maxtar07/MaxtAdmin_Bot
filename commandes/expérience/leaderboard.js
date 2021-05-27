const { MESSAGES } = require('../../util/constantes');
const Discord = require('discord.js');

module.exports.run = async (client, message) => {

  const embed = new Discord.MessageEmbed()
  .setTitle("Top 10 des utilisateurs sur le serveur")
  .setColor('RANDOM')
  .setTimestamp()
  .setFooter("Expérience")

await client.getUsers(message.guild).then(p => {
  p.sort((a, b) => (a.experience < b.experience) ? 1 : -1).splice(0, 10).forEach(e => {
    embed.addField(e.userName, `Niveau ${e.level} | ${e.experience} points d'expérience`);
  })
})

message.channel.send(embed);
}

module.exports.help = MESSAGES.COMMANDES.EXPÉRIENCE.LEADERBOARD;