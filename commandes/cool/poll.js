const { MESSAGES } = require('../../util/constantes');
const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setColor('RANDOM')
  .setDescription(args.join(" "))
  .addField("Répondre à la question ci-dessus à l'aide d'une des réactions:",
    `👍 - Pour (Oui)
➖ - Neutre
👎 - Contre (Non)
`)
  .setTimestamp()

const poll = await client.channels.cache.get('796397401384419349').send(embed);

await poll.react("👍");
await poll.react("➖");
await poll.react("👎");
};

module.exports.help = MESSAGES.COMMANDES.COOL.POLL;