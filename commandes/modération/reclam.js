const { MESSAGES } = require('../../util/constantes');
const Discord = require('discord.js');

module.exports.run = async (client, message) => {

  let reclam = new Discord.MessageEmbed()
  .setTitle('Ouverture d\'un salon privé pour expliquer un problème sur MaxCraft')
  .setDescription(`Si vous pensez que vous vous êtes fait grief, ou volé, ou si vous avez un problème quelconque sur le serveur minecraft, vous pouvez ouvrir une réclam ici.\nRéagir avec 📩 pour ouvrir un salon privé.`)

  let server = client.guilds.cache.get('726428189978787872')
  let sendchannel = server.channels.cache.get('777492656427237406')
  sendchannel.bulkDelete(1).then(() => {
    sendchannel.send(reclam)
    .then(msg => msg.react('📩'))
  })

}

module.exports.help = MESSAGES.COMMANDES.MODÉRATION.RECLAM;