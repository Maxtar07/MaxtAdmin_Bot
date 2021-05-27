const { MESSAGES } = require('../../util/constantes');
const Discord = require("discord.js")

module.exports.run = (client, message, args) => {

  const replies = ["Oui", "Non", "Peut-être","J'en sais rien moi...débrouille toi !", "J'suis un robot enfait...je peux pas savoir"];
  const question = args.join(" ");
  const response = Math.floor(Math.random() * replies.length)

  const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor('RANDOM')
    .addField(question, replies[response]);

  message.channel.send(embed)

};

module.exports.help = MESSAGES.COMMANDES.COOL.EIGHTBALL;