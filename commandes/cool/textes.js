const { MESSAGES } = require('../../util/constantes');
const Discord = require('discord.js');

module.exports.run = async (client, message) => {



  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle("Voici la liste des textes moddés")
  .setDescription(`Pour écrire en texte moddé, il faut copier/coller le code et remplacer "Votre message" par ce que vous voulez écrire !!`)
  .addFields(
    {
      name: `Italique :`, value: "`*Votre message*`", inline: true
    },
    {
      name: 'Gras :', value: "`**Votre message**`", inline: true
    },
    {
      name: 'Barré :', value: "`~~Votre message~~`", inline: true
    },
    {
      name: '\u200b', value: `\u200b`, inline: false
    },
    {
      name: `Souligné :`, value: "`__Votre message__`", inline: true
    },
    {
      name: 'Italique + Gras :', value: "`***Votre message***`", inline: true
    },
    {
      name: 'Italique + Barré :', value: "`~~*Votre message*~~`", inline: true
    },
    {
      name: '\u200b', value: `\u200b`, inline: false
    },
    {
      name: `Italique + Souligné :`, value: "`__*Votre message*__`", inline: true
    },
    {
      name: 'Gras + Barré :', value: "`~~**Votre message**~~`", inline: true
    },
    {
      name: 'Gras + Souligné :', value: "`__**Votre message**__`", inline: true
    },
    {
      name: '\u200b', value: `\u200b`, inline: false
    },
    {
      name: `Barré + Souligné :`, value: "`__~~Votre message~~__`", inline: true
    },
    {
      name: 'Italique + Gras + Barré :', value: "`~~***Votre message***~~`", inline: true
    },
    {
      name: '\u200b', value: `\u200b`, inline: false
    },
    {
      name: 'Italique + Gras + Souligné :', value: "`__***Votre message***__`", inline: true
    },
    {
      name: `Italique + Barré + Souligné :`, value: "`__~~*Votre message*~~__`", inline: true
    },
    {
      name: '\u200b', value: `\u200b`, inline: false
    },
    {
      name: 'Gras + Barré + Souligné :', value: "`__~~**Votre message**~~__`", inline: true
    },
    {
      name: 'Italique + Gras + Barré + Souligné :', value: "`__~~***Votre message***~~__`", inline: true
    },
  )
  .setFooter("Menu des textes moddés")

message.channel.send(embed)
};

module.exports.help = MESSAGES.COMMANDES.COOL.TEXTES;