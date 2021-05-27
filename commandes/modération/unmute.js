const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require('../../util/constantes');

module.exports.run = (client, message) => {
  const user = message.guild.member(message.mentions.users.first());
  let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');

  if (!user.roles.cache.has(muteRole.id)) return message.reply("le membre n'est pas muté")
  user.roles.remove(muteRole.id);
  message.guild.channels.cache.forEach(async (channel) => {
    await channel.updateOverwrite(user, {
      SEND_MESSAGES: null,
      ADD_REACTIONS: null,
      CONNECT: null
    })
  })
  message.channel.send(`<@${user.id}> n'est plus muté.`);

  const embed = new MessageEmbed()
    .setAuthor(`${user.user.username} (${user.id})`, user.user.avatarURL())
    .setColor("ffa500")
    .setDescription(`**Action**: unmute`)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL())

  const log_channel = client.channels.cache.get('726428190024925212');
  log_channel.send(embed);

};
module.exports.help = MESSAGES.COMMANDES.MODÉRATION.UNMUTE;