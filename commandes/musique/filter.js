const { MESSAGES } = require('../../util/constantes');

module.exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Veuillez rejoindre le salon vocal musique !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aucune musique n'est actuellement en cours de lecture !`);

    if (!args[0]) return message.channel.send(`${client.emotes.error} - Veuillez spécifier un filtre à activer ou désactiver !`);

    const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

    if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - Ce filtre n'existe pas, veuillez vérifier la liste disponible dans le message épinglé !`);

    const filtersUpdated = {};

    filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

    client.player.setFilters(message, filtersUpdated);

    if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - J'**ajoute** le filtre ${filterToUpdate} à la musique, veuillez patienter...`);
    else message.channel.send(`${client.emotes.music} - J'**enlève** le filtre ${filterToUpdate} de la musique, veuillez patienter...`);

};

module.exports.help = MESSAGES.COMMANDES.MUSIQUE.FILTER;