const { MESSAGES } = require('../../util/constantes');

module.exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Veuillez rejoindre le salon vocal musique !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aucune musique n'est actuellement en cours de lecture !`);

    const repeatMode = client.player.getQueue(message).repeatMode;

    if (repeatMode) {
        client.player.setRepeatMode(message, false);
        return message.channel.send(`${client.emotes.success} - La musique \`${client.player.getQueue(message).playing.title}\` n'est plus **jouée en boucle** !`);
    } else {
        client.player.setRepeatMode(message, true);
        return message.channel.send(`${client.emotes.success} - La musique \`${client.player.getQueue(message).playing.title}\` est maintenant **jouée en boucle** !`);
    };

};

module.exports.help = MESSAGES.COMMANDES.MUSIQUE.LOOP;