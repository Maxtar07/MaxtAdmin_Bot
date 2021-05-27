const { MESSAGES } = require('../../util/constantes');

module.exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Veuillez rejoindre le salon vocal musique !`);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Vous devez être dans le même salon vocal que moi !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aucune musique n'est actuellement en cours de lecture !`);

    if (client.player.getQueue(message).loopMode) {
        client.player.setLoopMode(message, false);
        return message.channel.send(`${client.emotes.success} - La liste de lecture n'est plus **jouée en boucle** !`);
    } else {
        client.player.setLoopMode(message, true);
        return message.channel.send(`${client.emotes.success} - La liste de lecture est maintenant **jouée en boucle** !`);
    };

};

module.exports.help = MESSAGES.COMMANDES.MUSIQUE.LOOPQUEUE;