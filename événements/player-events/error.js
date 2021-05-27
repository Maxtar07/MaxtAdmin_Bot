module.exports = (client, error, message) => {

    const log_music = client.channels.cache.get('726428192403095625');

    switch (error) {
        case 'NotPlaying':
            log_music.send(`${client.emotes.error} - La liste de lecture est vide, plus de musiques en cours de lecture !`);
            break;
        case 'NotConnected':
            log_music.send(`${client.emotes.error} - Vous n'êtes pas dans un salon vocal !`);
            break;
        case 'UnableToJoin':
            log_music.send(`${client.emotes.error} - Il m'es impossible de rejoindre votre salon vocal, veuillez vérifier mes permissions !`);
            break;
        default:
            log_music.send(`${client.emotes.error} - Quelque chose ne va pas... Error : ${error}`);
    };

};