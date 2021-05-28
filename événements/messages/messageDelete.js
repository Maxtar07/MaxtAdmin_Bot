const Discord = require('discord.js');

module.exports = async (client, message) => {

    await Discord.Util.delayFor(900);

    let author = message.author
    let babacool
    let babacool2

    if(message.channel.id === '726428190024925212') return;
    if(message.content === null){
        babacool = 'c\'est un embed'
        author = "Surement un bot"
    }else{
        babacool = message.content
        if (message.content.startsWith('/')) return;
    }
    if(message.attachments.size > 0){
        babacool2 = message.attachments.first().url
    }else{
        babacool2 = "pas d'image"
    }

    const logchannel = message.guild.channels.cache.find(c => c.id == "726428190024925212")

    const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`**Nouveau message supprimé !** \n **Auteur du message**: ${author}\n**Contenu du message**: ${babacool}\n${babacool2}\n**Salon du message**: <#${message.channel.id}>`)
        .setTimestamp()
    logchannel.send(embed);
}