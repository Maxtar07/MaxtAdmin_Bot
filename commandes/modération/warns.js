const db = require('../../models/warns')
const { Message, MessageEmbed } = require('discord.js')
const { MESSAGES } = require('../../util/constantes');

module.exports.run = async(client, message, args) => {
    
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!user) return message.channel.send('Le membre n\'as pas été trouvé !')
    db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
        if(err) throw err;
        if(data) {
            message.channel.send(new MessageEmbed()
                .setTitle(`Avertissements de ${user.user.tag}`)
                .setDescription(
                    data.content.map(
                        (w, i) => 
                        `\`${i + 1}\` | Modérateur : ${message.guild.members.cache.get(w.moderator_id).user.tag}\nRaison : ${w.reason}`
                    )
                )
                .setColor("BLUE")
            )
        } else {
            message.channel.send('Ce membre n\'as aucun avertissement !')
        }

    })

}

module.exports.help = MESSAGES.COMMANDES.MODÉRATION.WARNS;