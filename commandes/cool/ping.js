const { MESSAGES } = require('../../util/constantes');
const Discord = require('discord.js')

module.exports.run = async (client, message) => {

  const msg = await message.channel.send("Ping!").catch()
  console.log(msg.id)
  const embed = new Discord.MessageEmbed()
  .setTitle('Ping-Pong !')
  .setDescription('Calcul de la latence du bot et de l\'api')
  .addField("Latence du bot :", `${msg.createdTimestamp - message.createdTimestamp} ms`)
  .addField("Latence de l'api", `${Math.round(client.ws.ping)} ms`)
  msg.edit("", embed).catch()



};

module.exports.help = MESSAGES.COMMANDES.COOL.PING;