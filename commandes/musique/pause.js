const { MESSAGES } = require('../../util/constantes');

module.exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Veuillez rejoindre le salon vocal musique !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aucune musique n'est actuellement en cours de lecture !`);

    client.player.pause(message);

    message.channel.send(`${client.emotes.success} - La musique \`${client.player.getQueue(message).playing.title}\` à été mise en **pause** !`);

};

module.exports.help = MESSAGES.COMMANDES.MUSIQUE.PAUSE;