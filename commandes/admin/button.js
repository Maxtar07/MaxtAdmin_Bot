const { MESSAGES } = require('../../util/constantes');
const axios = require('axios');

module.exports.run = async (client, message, args) => {
    client.config = require("./config");
    const headers = {
        'Authorization': `Bot NDc4NTk3MDc3NzIzNjQzOTA1.W3GuQw.JyFRpcEvlphof2OCodr0IzNq1wM`
    };

    await axios.post(`https://discord.com/api/v9/channels/${message.channel.id}/messages`, {
        "embed": {
            title: "commande d'aide",
            description: "Cliquer sur le bouton pour accéder aux commandes d'aide",
        },
        "components": [
            {
                "type": 1,
                "components": [
                    {
                        "type": 2,
                        "label": "Accéder aux commandes",
                        "style": 1,
                        "custom_id": "click_one",
                        "emoji": {
                            "name": "🤖"
                        }
                    }
                ]
            }
        ]
    },{headers})

};

module.exports.help = MESSAGES.COMMANDES.ADMIN.BUTTON;