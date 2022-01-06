const ms = require("ms");
const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require('../../util/constantes');

module.exports.run = async (client, message, args) => {
  const user = message.guild.member(message.mentions.users.first());
  let muteTime = (args[1] || '60s');
  let muteReason = (args.slice(2).join(" ") || 'aucune raison spécifiée');
  let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');

  if (!user) {
    return message.channel.send("Je ne trouve pas le membre sur le serveur, veille à bien écrire le nom").then((message) => {
      message.delete({ timeout: 5000 })
    });
  }

  user.roles.add(muteRole.id);
  message.guild.channels.cache.forEach(async (channel) => {
    await channel.updateOverwrite(user, {
      SEND_MESSAGES: false,
      ADD_REACTIONS: false,
      CONNECT: false
    })
  })

  message.channel.send(`<@${user.id}> est muté pour ${ms(ms(muteTime))} pour la raison : ${muteReason}.`);

  setTimeout(() => {
    user.roles.remove(muteRole.id);
    message.guild.channels.cache.forEach(async (channel) => {
      await channel.permissionOverwrites.get(user.id).delete();
    })
    message.channel.send(`<@${user.id}> n'est plus muté.`);
  }, ms(muteTime));

  const embed = new MessageEmbed()
    .setAuthor(`${user.user.username} (${user.id})`, user.user.avatarURL())
    .setColor("ffa500")
    .setDescription(`**Action**: mute\n**Temps**: ${ms(ms(muteTime))}\n**Raison**: ${muteReason}`)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL())

  const log_channel = client.channels.cache.get('738813876505935933');
  log_channel.send(embed);

};
module.exports.help = MESSAGES.COMMANDES.MODÉRATION.MUTE;