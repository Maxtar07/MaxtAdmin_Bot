const Discord = require('discord.js')

module.exports = (client, message, queue, track, playlist) => {

    const log_music = client.channels.cache.get('726428192403095625');
    const image = "https://s1.qwant.com/thumbr/474x474/0/2/21d88c7b18df71c8c6d766f46a4eacb776ccbc7d38f830d8cfe2916aad14dd/th.jpg?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.p1CqQd_7U6rzm3u2RmuNXQHaHa%26pid%3DApi&q=0&b=1&p=0&a=0"
    const embed = new Discord.MessageEmbed()
    .setAuthor("Nouvelle musique ajoutée à la liste de lecture", image)
    .setDescription(`${track.title}`)
    .setColor("BLUE")
    log_music.send(embed);
    //log_music.send(`${client.emotes.music} | Musique ajoutée à la liste de lecture ${track.title} à été ajouté à la liste de lecture !`);

};