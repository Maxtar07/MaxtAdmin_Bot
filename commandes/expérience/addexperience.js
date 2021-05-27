const { MESSAGES } = require('../../util/constantes');

module.exports.run = (client, message, args) => {

  const user = message.guild.member(message.mentions.users.first());
  const expToAdd = parseInt(args[1]);
  if (isNaN(expToAdd)) return message.reply("Il faut rentrer un nombre.");
  client.addExp(client, user, expToAdd);
  message.channel.send(`Vous avez ajouter avec succcès ${expToAdd} points d'expériences à ${user}!`)
}

module.exports.help = MESSAGES.COMMANDES.EXPÉRIENCE.ADDEXPERIENCE;