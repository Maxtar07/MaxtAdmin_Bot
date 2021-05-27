module.exports = (client) => {

    const log_music = client.channels.cache.get('726428192403095625');
    log_music.send(`${client.emotes.error} - Vous n'avez pas donné de réponse valide ... Veuillez éxécuter de nouveau la commande !`);

};