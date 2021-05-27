const { MESSAGES } = require('../../util/constantes');
const Discord = require('discord.js')

module.exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Veuillez rejoindre le salon vocal musique !`);

    const queue = client.player.getQueue(message);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Il n'y a actuellement aucune musique dans la liste de lecture !`);

    //message.channel.send(`**__Liste de lecture ${client.emotes.queue}__**\nMusique actuelle : \`${queue.playing.title} | ${queue.playing.author}\`\n\n` + (queue.tracks.map((track, i) => {
    //    return `**#${i + 1}** - ${track.title} | ${track.author} (demandée par : ${track.requestedBy.username})`
    //}).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `Et **${queue.tracks.length - 5}** autres musiques...` : `Il y a **${queue.tracks.length}** musiques dans la liste de lecture...`}`));

    const log_music = client.channels.cache.get('726428192403095625');
    const image = "https://s1.qwant.com/thumbr/474x474/0/2/21d88c7b18df71c8c6d766f46a4eacb776ccbc7d38f830d8cfe2916aad14dd/th.jpg?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.p1CqQd_7U6rzm3u2RmuNXQHaHa%26pid%3DApi&q=0&b=1&p=0&a=0"
    const cheh = queue.tracks.length > 1 ? `musiques` : `musique`
    const cheh2 = (queue.tracks.length - 6) > 1 ? `autres musiques` : `autre musique`
    const number = queue.tracks.length > 6 ? `Et ${queue.tracks.length - 6} ${cheh2}... Donc un total de ${queue.tracks.length} ${cheh}` : `Il y a ${queue.tracks.length} ${cheh} dans la liste de lecture...`
    const embed = new Discord.MessageEmbed()
    .setAuthor("Liste des prochaines musiques", image)
    //.setDescription(`__**Musique actuelle :**__ \`${queue.playing.title} | ${queue.playing.author}\``)
    //.setDescription(`__**Musique actuelle :**__ \`${queue.playing.title} | ${queue.playing.author}\`\n\n` + (queue.tracks.map((track, i) => {
    //    return `**#${i + 1}** - ${track.title} | ${track.author}\n(demandée par : ${track.requestedBy.username})`
    //}).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `Et **${queue.tracks.length - 5}** autres musiques...` : `Il y a **${queue.tracks.length}** musiques dans la liste de lecture...`}`))
    .addField(`#1 - Musique actuelle`,`${queue.playing.title} | ${queue.playing.author}`)
    .setColor("BLUE")
    .setFooter(`${number}`)
    const trackList = queue.tracks.map((track, i) => {return `**#${i + 1}** - ${track.title} | ${track.author}\n(demandée par : ${track.requestedBy.username})`}).slice(1, 6)
    for (const track2 of trackList) {
        embed.addField(
          `${track2}`,
          `\u200b`
        );
      };



    log_music.send(embed);
};

module.exports.help = MESSAGES.COMMANDES.MUSIQUE.QUEUE;