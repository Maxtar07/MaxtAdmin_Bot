const { MESSAGES } = require('../../util/constantes');

module.exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Veuillez rejoindre le salon vocal musique !`);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Vous devez être dans le même channel vocal que moi !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aucune musique n'est actuellement en cours de lecture !`);

    const filtersStatuses = [[], []];

    client.filters.forEach((filterName) => {
        const array = filtersStatuses[0].length > filtersStatuses[1].length ? filtersStatuses[1] : filtersStatuses[0];
        array.push(filterName.charAt(0).toUpperCase() + filterName.slice(1) + " : " + (client.player.getQueue(message).filters[filterName] ? client.emotes.success : client.emotes.error));
    });

    message.channel.send({
        embed: {
            color: 'ORANGE',
            fields: [
                { name: 'Filtres', value: filtersStatuses[0].join('\n'), inline: true },
                { name: '** **', value: filtersStatuses[1].join('\n'), inline: true },
            ],
            timestamp: new Date(),
            description: `Liste de tous les filtres disponibles et si ils sont actif ou non.\nUtilisez \`/filter <filtre>\` pour ajouter ou enlever un filtre.`,
        },
    });

};

module.exports.help = MESSAGES.COMMANDES.MUSIQUE.FILTERS;