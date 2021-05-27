const db = require('../../models/warns')
const { Message, MessageEmbed } = require('discord.js')
const { MESSAGES } = require('../../util/constantes');

module.exports.run = async(client, message, args) => {

    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!user) return message.channel.send('Le membre n\'as pas été trouvé !')
    let reason
    const modoreason = args.slice(1).join(" ")
    if (!modoreason) reason = "Le modérateur n'a spécifié aucune raison"
    db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
        if(err) throw err;
        if(!data) {
            data = new db({
                guildid: message.guild.id,
                user : user.user.id,
                content : [
                    {
                        guild_name : message.guild.name,
                        moderator_id : message.author.id,
                        moderator_name : message.author.username,
                        warn_member : user.user.username,
                        warn_member_tag : user.user.tag,
                        reason : reason
                    }
                ]
            })
        } else {
            const obj = {
                guild_name : message.guild.name,
                moderator_id: message.author.id,
                moderator_name : message.author.username,
                warn_member : user.user.username,
                warn_member_tag : user.user.tag,
                reason : reason
            }
            data.content.push(obj)
        }
        data.save()
    });
    user.send(new MessageEmbed()
        //.setDescription(`Tu as reçu un avertissement sur le serveur ${message.guild} de ${message.author.tag} pour la raison suivante : ${reason}`)
        .setTitle(`Warn reçu sur le serveur ${message.guild.name}`)
        .setDescription(`**Auteur du warn**: ${message.author.tag}\n**Raison du warn**: ${reason}`)
        .setColor("RED")
    )
    message.channel.send(new MessageEmbed()
    .setTitle(`Warn !`)
    .setDescription(`${user} à reçu un avertissement !\n**Modérateur:** ${message.author}\n**Raison:** ${reason}`)
    .setColor('BLUE')
    .setFooter(`/warns @${user.user.username} pour voir la liste de ses warns`)
    )

}

module.exports.help = MESSAGES.COMMANDES.MODÉRATION.WARN;