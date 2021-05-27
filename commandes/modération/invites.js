const Discord = require("discord.js");
const { MESSAGES } = require('../../util/constantes');

module.exports.run = (client, message, args) => {
    const {guild} = message

    guild.fetchInvites().then((invites) => {
        const inviteCounter = {}

        invites.forEach((invite) => {
            const {uses, inviter} = invite
            const {username, discriminator} = inviter

            const name = `${username}#${discriminator}`

            inviteCounter[name] = (inviteCounter[name] || 0) + uses   
        });

        let replyText = 'Invitations:'

        const sortedInvites = Object.keys(inviteCounter).sort((a, b) => inviteCounter[b] - inviteCounter[a])

        for (const invite in sortedInvites){
            const count = inviteCounter[invite]
            let bullshit
            if(count > 1){
                bullshit = "membres"
            }else{
                bullshit = "membre"
            }
            replyText += `\n${invite} à invité ${count} ${bullshit} sur le serveur`
        }
        message.channel.send(replyText)
    })
}


module.exports.help = MESSAGES.COMMANDES.MODÉRATION.INVITES;