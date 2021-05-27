const { MESSAGES } = require('../../util/constantes');
const Discord = require('discord.js')

module.exports.run = async (client, message, args, dbUser) => {

  let user

  if(message.mentions.members.first()) {
    user = message.guild.member(message.mentions.users.first())
  }else{
    user = message.author
  }

  const mentionnedUser = await client.getUser(user);
  const embed = new Discord.MessageEmbed()
    .setTitle(`Expérience de ${mentionnedUser.userName}`)
    .setColor('RANDOM')
    .setTimestamp()
    .setFooter("infos d'exp d'un membre")
    .addField("Points d'expérience", `${mentionnedUser.experience}`)
    .addField("Niveau", `${mentionnedUser.level}`)
  message.channel.send(embed)
}

module.exports.help = MESSAGES.COMMANDES.EXPÉRIENCE.USEREXPERIENCE;