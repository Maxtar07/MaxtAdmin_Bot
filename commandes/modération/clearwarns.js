const db = require('../../models/warns')
const { MESSAGES } = require('../../util/constantes');

module.exports.run = async(client, message, args) => {

    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!user) return message.channel.send('Le membre n\'as pas été trouvé !')
    db.findOne({ guildid : message.guild.id, user: user.user.id}, async(err,data) => {
        if(err) throw err;
        if(data) {
            await db.findOneAndDelete({ user : user.user.id, guildid: message.guild.id})
            message.channel.send(`Tous les avertissements de \`${user.user.tag}\` ont été supprimés !`)
        } else {
            message.channel.send(`\`${user.user.tag}\` n\'as aucun avertissement !`)
        }
    })
}

module.exports.help = MESSAGES.COMMANDES.MODÉRATION.CLEARWARNS;