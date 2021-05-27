const { MESSAGES } = require('../../util/constantes');

module.exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Veuillez rejoindre le salon vocal musique !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aucune musique n'est actuellement en cours de lecture !`);

    const track = await client.player.nowPlaying(message);
    const filters = [];

    Object.keys(client.player.getQueue(message).filters).forEach((filterName) => {
        if (client.player.getQueue(message).filters[filterName]) filters.push(filterName);
    });

    message.channel.send({
        embed: {
            color: 'RED',
            author: { name: track.title },
            fields: [
                { name: 'Chaine YouTube', value: track.author, inline: true },
                { name: 'Demandée par', value: track.requestedBy.username, inline: true },
                { name: 'Dans une playlist ?', value: track.fromPlaylist ? 'Oui' : 'Non', inline: true },

                { name: 'Nombres de vues', value: track.views, inline: true },
                { name: 'Durée', value: track.duration, inline: true },
                { name: 'Filtres activés', value: filters.length, inline: true },

                { name: 'Progress bar', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
            ],
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        },
    });

};

module.exports.help = MESSAGES.COMMANDES.MUSIQUE.NP;