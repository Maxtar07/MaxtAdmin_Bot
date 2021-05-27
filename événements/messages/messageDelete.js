const Discord = require('discord.js');

module.exports = async (client, message) => {

    await Discord.Util.delayFor(900);

    if (message.content.startsWith('/') || message.channel.id === '726428190024925212' || message.content.includes("Redémarrage en cours...")) return;

    const logchannel = message.guild.channels.cache.find(c => c.id == "726428190024925212")

    const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`**Nouveau message supprimé !** \n **Auteur du message**: ${message.author} \n**Contenu du message**: ${message.content} \n**Salon du message**: <#${message.channel.id}>`)
        .setTimestamp()
    if (!logchannel) return;
    logchannel.send(embed);
}