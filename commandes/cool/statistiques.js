const { MESSAGES } = require("../../util/constantes");
const Discord = require("discord.js");
const moment = require("moment");
moment.locale('fr');

module.exports.run = async (client, message) => {

  const member = message.mentions.members.first() || message.member;
  const game = member.user.presence.activities.length === 0 ? 'rien' : member.user.presence.activities
  const userxp = await client.getUser(member);

  let exp
  let lvl

  if(!userxp){
    exp = "0"
    lvl = "0"
  }else{
    exp = userxp.experience
    lvl = userxp.level
  }


  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setThumbnail(member.user.displayAvatarURL())
  .addFields(
    {
      name: `Voici quelques infos et statistiques sur ${member.user.username} ${member.nickname === null ? '' : `aka **${member.nickname}**`}`, value: `\u200b`, inline: false
    },
    {
      name: 'BOT ?', value: `${member.user.bot ? 'OUI' : 'NON'}`, inline: true
    },
    {
      name: 'Status', value: `${member.user.presence.status.toUpperCase()}`, inline: true
    },
    {
      name: 'joue actuellement à', value: `${game}`, inline: true
    },
    {
      name: 'Compte Discord créé le', value: `${moment(member.user.createdAt).format('DD/MM/YYYY à hh:mm:ss')}`, inline: true
    },
    {
      name: 'À rejoin le serveur le', value: `${moment(member.joinedAt).format('DD/MM/YYYY à hh:mm:ss')}`, inline: true
    },
    {
      name: 'expérience', value: `${member.user.username} à ${exp} points d'expérience et est au niveau ${lvl}`, inline: false
    },
    {
      name: 'Rôles possédés', value: `${member.roles.cache.sort((a, b) => b.position - a.position).map(roles => `${roles}`).join(",\n")}`, inline: true
    },
    //{
    //name: '\u200b', value: `\u200b`, inline: true
    //}, permet de laisser un field blanc
  )
  .setFooter(`statistiques et infos d'un membre`)

  message.channel.send(embed);
}

module.exports.help = MESSAGES.COMMANDES.COOL.STATISTIQUES;