const Discord = require("discord.js");
const { MESSAGES } = require('../../util/constantes');

module.exports.run = async (client, message, args) => {
  const user = await client.users.fetch(args[0]);
  if (!user) return message.reply('l\'utilisateur spécifié n\'existe pas');
  message.guild.members.unban(user)

  const embed = new Discord.MessageEmbed()
    .setAuthor(`${user.username} (${user.id})`, user.avatarURL())
    .setColor("#dc143c")
    .setDescription(`**Action**: unban`)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL())

  const log_channel = client.channels.cache.get('726428190024925212');
  log_channel.send(embed);
}

module.exports.help = MESSAGES.COMMANDES.MODÉRATION.UNBAN;