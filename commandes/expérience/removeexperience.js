const { MESSAGES } = require('../../util/constantes');

module.exports.run = (client, message, args) => {

  const user = message.guild.member(message.mentions.users.first());
  const expToRemove = parseInt(args[1]);
  if (isNaN(expToRemove)) return message.reply("Il faut rentrer un nombre.");
  client.removeExp(client, user, expToRemove);
  message.channel.send(`Vous avez enlevé avec succcès ${expToRemove} points d'expériences à ${user}!`)
}

module.exports.help = MESSAGES.COMMANDES.EXPÉRIENCE.REMOVEEXPERIENCE;