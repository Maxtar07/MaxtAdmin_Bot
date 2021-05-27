const { MESSAGES } = require('../../util/constantes');
const Discord = require('discord.js');

module.exports.run = async (client, message) => {

  var embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle("Voici la liste des couleurs")
  .setDescription(`Pour écrire en couleur, il faut copier/coller le code et remplacer "Votre message" par ce que vous voulez écrire.`)
  .addFields(
    {
      name: `Rouge :`, value: "\` \`\`\`diff\n-Votre message\n\`\`\` \`", inline: true
    },
    {
      name: 'Bleu', value: "\` \`\`\`markdown\n#Votre message\n\`\`\` \`", inline: true
    },
    {
      name: 'Jaune', value: "\` \`\`\`fix\n#Votre message\n\`\`\` \`", inline: true
    },
    {
      name: '\u200b', value: `\u200b`, inline: false
    },
    {
      name: `Orange`, value: "\` \`\`\`css\n[Votre message]\n\`\`\` \`", inline: true
    },
    {
      name: 'Gris', value: "\` \`\`\`\nVotre message\n\`\`\` \`", inline: true
    },
    {
      name: 'Vert', value: "\` \`\`\`css\nVotre message\n\`\`\` \`", inline: true
    },
  )

message.channel.send(embed)
};

module.exports.help = MESSAGES.COMMANDES.COOL.COULEURS;