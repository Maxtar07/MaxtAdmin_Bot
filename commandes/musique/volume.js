const { MESSAGES } = require('../../util/constantes');

module.exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Veuillez rejoindre le salon vocal musique !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aucune musique n'est actuellement en cours de lecture !`);

    if (!args[0]) return message.channel.send(`${client.emotes.error} - Merci d'entrer un nombre entre **1** et **100** !`);

    if (isNaN(args[0]) || 100 < args[0] || args[0] <= 0) return message.channel.send(`${client.emotes.error} - Veuillez entrer un nombre entre **1** et **100** !`);

    if (message.content.includes('-') || message.content.includes('+') || message.content.includes(',') || message.content.includes('.')) return message.channel.send(`${client.emotes.error} - Please enter a valid number !`);

    client.player.setVolume(message, parseInt(args[0]));

    message.channel.send(`${client.emotes.success} - Le volume à été changé pour **${args.join(" ")}%** !`);

};

module.exports.help = MESSAGES.COMMANDES.MUSIQUE.VOLUME;