const { MESSAGES } = require('../../util/constantes');

module.exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Veuillez rejoindre le salon vocal musique !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Il n'y a actuellement aucune musique dans la liste de lecture !`);

    client.player.skip(message);

    message.channel.send(`${client.emotes.success} - La musique actuelle à été **passée** !`);

};

module.exports.help = MESSAGES.COMMANDES.MUSIQUE.SKIP;