const Discord = require("discord.js");
const { MESSAGES } = require('../../util/constantes');

module.exports.run = (client, message, args) => {
  const user = message.mentions.users.first();
  const reason = (args.splice(1).join(" ") || 'Aucune raison spécifiée');
  user ? message.guild.member(user).send(`tu as été kick du serveur ${message.guild.name} pour : ${reason}`) && message.guild.member(user).kick(reason) : message.channel.send('le membre spécifié n\'existe pas sur le serveur.')

  const embed = new Discord.MessageEmbed()
    .setAuthor(`${user.username} (${user.id})`, user.avatarURL())
    .setColor("ffa500")
    .setDescription(`**Action**: kick\n**Raison**: ${reason}`)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL())

  client.channels.cache.get('726428190024925212').send(embed);
}

module.exports.help = MESSAGES.COMMANDES.MODÉRATION.KICK;