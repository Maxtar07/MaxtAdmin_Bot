const db = require('../../models/warns')
const { MESSAGES } = require('../../util/constantes');

module.exports.run = async(client, message, args) => {

    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!user) return message.channel.send('Le membre n\'as pas été trouvé !')
    db.findOne({ guildid : message.guild.id, user: user.user.id}, async(err,data) => {
        if(err) throw err;
        if(data) {
            let number
            if (!args[1]){
                number = 0
            }else{
                number = parseInt(args[1]) - 1
            }
            data.content.splice(number, 1)
            message.channel.send(`l\'avertissement numéro ${number +1} de \`${user.user.tag}\` à été supprimé !`)
            data.save()
        } else {
            message.channel.send(`\`${user.user.tag}\` n\'as aucun avertissement !`)
        }
    })

}

module.exports.help = MESSAGES.COMMANDES.MODÉRATION.UNWARN;