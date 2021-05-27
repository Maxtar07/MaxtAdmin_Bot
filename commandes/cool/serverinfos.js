const { MESSAGES } = require("../../util/constantes");
const Discord = require("discord.js");
const moment = require("moment");
moment.locale('fr');

module.exports.run = (client, message) => {

  const guild = message.guild;
  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setThumbnail(guild.iconURL())
  .addField(`Plus d'infos à propos du serveur __** ${guild.name} **__:`,
      `
- **ID du serveur:** ${guild.id}
- **Boss:** Le boss du serveur est ${guild.owner.user.tag}
- **Rôles:** Il y à ${guild.roles.cache.size} rôles.
- **Serveur créé le:** ${moment.utc(guild.createdAt).format('LL')}
- **Nombre de bots:** ${guild.members.cache.filter(m => m.user.bot).size}
- **Nombre de membres:** ${guild.members.cache.filter(m => !m.user.bot).size}
- **Nombre de membres en ligne:** ${guild.members.cache.filter(m => m.presence.status === 'online').filter(m => !m.user.bot).size}
- **Nombre de filles:** ${guild.roles.cache.find(r => r.id === '726428190012211217').members.size}
- **Nombre de filles en ligne:** ${guild.roles.cache.find(r => r.id === '726428190012211217').members.filter(m => m.presence.status === 'online').size}
- **Nombre de garçons :** ${guild.roles.cache.find(r => r.id === '726428190012211216').members.size}
- **Nombre de garçons en ligne:** ${guild.roles.cache.find(r => r.id === '726428190012211216').members.filter(m => m.presence.status === 'online').size}
- **Nombre de membres hors ligne:** ${guild.members.cache.filter(m => m.presence.status === 'offline').filter(m => !m.user.bot).size}
- **Nombre de catégories:** ${guild.channels.cache.filter(chan => chan.type === 'category').size}
- **Nombre de salons textuels:** ${guild.channels.cache.filter(chan => chan.type === 'text').size}
- **Nombre de salons vocaux:** ${guild.channels.cache.filter(chan => chan.type === 'voice').size}
    `)

  message.channel.send(embed);
}

module.exports.help = MESSAGES.COMMANDES.COOL.SERVERINFOS;