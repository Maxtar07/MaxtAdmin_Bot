const { MESSAGES } = require('../../util/constantes');

module.exports.run = async (client, message, args) => {



    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Veuillez rejoindre le salon vocal musique`);

    if (!args[0]) return message.channel.send(`${client.emotes.error} - Merci d'indiquer un titre de musique ou un lien YouTube`);
    
    client.player.play(message, args.join(" "), { firstResult: true });


};

module.exports.help = MESSAGES.COMMANDES.MUSIQUE.PLAY;