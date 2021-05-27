const Discord = require('discord.js');

module.exports = (client, message) => {

  if (message.author.bot) return

  if (message.attachments.size > 0) {
    const url = message.attachments.first().url
    const embed = new Discord.MessageEmbed()
      .setAuthor(`${message.author.username} (${message.author.id})`, message.author.avatarURL())
      .setColor("ffa500")
      .setThumbnail(url)
      .setDescription(`**Action**: envoi d'un message privé au bot\n**contenu du message**: \`"${message.content}"\`\n${url}\n**Auteur**: ${message.author}`)
      .setTimestamp()

    const log_channel = client.channels.cache.get('726428190024925212');
    log_channel.send(embed);
  } else {
    const url = "pas d'image envoyée !"
    const embed = new Discord.MessageEmbed()
      .setAuthor(`${message.author.username} (${message.author.id})`, message.author.avatarURL())
      .setColor("ffa500")
      .setDescription(`**Action**: envoi d'un message privé au bot\n**contenu du message**: \`"${message.content}"\`\n${url}\n**Auteur**: ${message.author}`)
      .setTimestamp()

    const log_channel = client.channels.cache.get('726428190024925212');
    log_channel.send(embed);
  }

}