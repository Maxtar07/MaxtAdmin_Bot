const Discord = require("discord.js");

module.exports = (client, member) => {

  if (member.roles.cache.find(x => x.id === "726428190012211217")) {
    const embed = new Discord.MessageEmbed()
      .setAuthor(`${member.displayName}`, member.user.displayAvatarURL())
      .setColor('RANDOM')
      .setDescription(`Dommage, ${member.displayName} nous a quittés, elle reviendra peut-être un jour...`)
      .setTimestamp()
    client.channels.cache.get('726428190427447362').send(embed);
  }
  if (member.roles.cache.find(x => x.id === "726428190012211216") || member.roles.cache.find(x => x.id === "824740975242117191")) {
    const embed = new Discord.MessageEmbed()
      .setAuthor(`${member.displayName}`, member.user.displayAvatarURL())
      .setColor('RANDOM')
      .setDescription(`Dommage, ${member.displayName} nous a quittés, il reviendra peut-être un jour...`)
      .setTimestamp()
    client.channels.cache.get('726428190427447362').send(embed);
  }
  if (member.roles.cache.find(x => x.id === "726428189978787873")) {
    const embed = new Discord.MessageEmbed()
      .setAuthor(`${member.displayName}`, member.user.displayAvatarURL())
      .setColor('RANDOM')
      .setDescription(`Vas-y casse toi ! ${member.displayName} n'as même pas pris le temps de découvrir le serveur...`)
      .setTimestamp()
    client.channels.cache.get('726428190427447362').send(embed);
  }
}