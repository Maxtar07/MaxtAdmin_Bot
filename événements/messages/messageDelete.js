const Discord = require('discord.js');

module.exports = async (client, message) => {

    await Discord.Util.delayFor(900);

    let babacool

    if (message.content.startsWith('/') || message.channel.id === '726428190024925212' || message.content.includes("Redémarrage en cours...")) return;

    const logchannel = message.guild.channels.cache.find(c => c.id == "726428190024925212")

    if(message.embeds.length === 0){
        babacool = message.content
    }else{
        babcool = 'c\'est un embed'
    }

    const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`**Nouveau message supprimé !** \n **Auteur du message**: ${message.author} \n**Contenu du message**: ${babacool} \n**Salon du message**: <#${message.channel.id}>`)
        .setTimestamp()
    if (!logchannel) return;
    logchannel.send(embed); 
}