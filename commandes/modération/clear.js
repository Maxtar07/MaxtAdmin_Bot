const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require('../../util/constantes');

module.exports.run = async (client, message, args) => {
  if (isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.reply("il faut spécifier un nombre entre 1 et 100.")

  const messages = await message.channel.messages.fetch({
    limit: Math.min(args[0], 100),
    before: message.id,
  });

  await message.channel.bulkDelete(messages).then((messages) => {
    const embed = new MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setColor("#dc143c")
      .setDescription(`**Action**: clear\n**Nombre de messages**: ${messages.size}\n**Salon**: ${message.channel}`)

    const log_channel = client.channels.cache.get('726428190024925212');
    log_channel.send(embed);
  })
}

module.exports.help = MESSAGES.COMMANDES.MODÉRATION.CLEAR;