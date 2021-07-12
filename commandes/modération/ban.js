const Discord = require("discord.js");
const { MESSAGES } = require('../../util/constantes');

module.exports.run = (client, message, args) => {
  const user = message.mentions.users.first();
  let reason = (args.splice(1).join(" ") || 'Aucune raison spécifiée');

  if(!user) return message.channel.send('le membre spécifié n\'existe pas sur le serveur')

  message.guild.member(user).send(`tu as été ban du serveur ${message.guild.name} pour : ${reason}`)
  message.guild.member(user).ban({ reason: reason })

  const embed = new Discord.MessageEmbed()
    .setAuthor(`${user.username} (${user.id})`, user.avatarURL())
    .setColor("#dc143c")
    .setDescription(`**Action**: ban\n**Raison**: ${reason}`)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL())

  client.channels.cache.get('726428190024925212').send(embed);
}

module.exports.help = MESSAGES.COMMANDES.MODÉRATION.BAN;