const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require('../../util/constantes');

module.exports.run = async (client, message, args) => {
  let user = message.guild.member(message.mentions.users.first());
  if (isNaN(args[1]) || (args[1] < 1 || args[1] > 100)) return message.reply("il faut spécifier un nombre entre 1 et 100.")

  const messages = (await message.channel.messages.fetch({
    limit: 100,
    before: message.id,
  })).filter(a => a.author.id === user.id).array();

  messages.length = Math.min(args[1], messages.length);

  if (messages.length === 0 || !user) return message.reply('aucun message trouvé pour ce membre sur ce salon.');

  if (message.length === 1) await messages[0].delete();
  else await message.channel.bulkDelete(messages).then((messages) => {
    const embed = new MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setColor("#dc143c")
      .setDescription(`**Action**: prune\n**Nombre de messages**: ${messages.size}\n**Salon**: ${message.channel}\n**membre**:${args[0]}`)

    const log_channel = client.channels.cache.get('726428190024925212');
    log_channel.send(embed);
  });
}

module.exports.help = MESSAGES.COMMANDES.MODÉRATION.PRUNE;