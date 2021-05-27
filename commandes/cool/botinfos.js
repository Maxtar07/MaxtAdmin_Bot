const { MESSAGES } = require("../../util/constantes");
const Discord = require("discord.js");
const moment = require('moment');
moment.locale('fr');

module.exports.run = async (client, message) => {

  const user = message.guild.member(client.user.id)
  const userxp = await client.getUser(user)
  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setAuthor(`${client.user.username} Infos`, client.user.avatarURL())
  .addFields(
    {
      name: 'Nom du bot', value: `${client.user.username}`, inline: true
    },
    //{
    //name: '\u200b', value: `\u200b`, inline: true
    //}, permet de laisser un field blanc
    {
      name: 'Bot créer le', value: `${moment.utc(client.user.createdAt).format("LL")}`, inline: true
    },
    {
      name: 'Status', value: `${client.user.presence.status}`, inline: true
    },
    {
      name: 'XP du bot', value: `Le bot à ${userxp.experience} points d'expériences et est au niveau ${userxp.level}`, inline: false
    },
    {
      name: 'Mémoire', value: `${(process.memoryUsage().heapUsed / 1024 / 1204).toFixed(2)} MB`, inline: true
    },
    {
      name: 'Uptime', value: `${Math.floor(client.uptime / 1000 / 60).toString()} minutes`, inline: true
    },
    {
      name: 'Lien utile !', value: `[Twitch](https://twitch.tv/maxtar07)`, inline: true
    },

  )
message.channel.send(embed);

}

module.exports.help = MESSAGES.COMMANDES.COOL.BOTINFOS;