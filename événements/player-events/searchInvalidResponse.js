module.exports = (client, message, query, tracks, content, collector) => {

    const log_music = client.channels.cache.get('726428192403095625');
    log_music.send(`${client.emotes.error} - Veuillez envoyer un nombre entre **1** et **${tracks.length}** !`);
    
};