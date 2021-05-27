const { MESSAGES } = require('../../util/constantes');

module.exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Veuillez rejoindre le salon vocal musique !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aucune musique n'est actuellement en pause !`);

    client.player.resume(message);

    message.channel.send(`${client.emotes.success} - La musique \`${client.player.getQueue(message).playing.title}\` à été **remise en lecture** !`);

};

module.exports.help = MESSAGES.COMMANDES.MUSIQUE.RESUME;