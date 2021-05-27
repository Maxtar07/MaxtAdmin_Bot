const { MESSAGES } = require('../../util/constantes');
const Discord = require('discord.js');
const diceImg = new Discord.MessageAttachment('./assets/img/dice.png');
const randomDice = () => Math.floor(Math.random() * 6) + 1;

module.exports.run = (client, message) => {

  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle("random dice")
  .attachFiles(diceImg)
  .setThumbnail('attachment://dice.png')
  .addFields(
    { name: 'D#1', value: randomDice(), inline: true },
    { name: 'D#2', value: randomDice(), inline: true },
    { name: 'D#3', value: randomDice(), inline: true }
  )
  .addFields(
    { name: 'D#4', value: randomDice(), inline: true },
    { name: 'D#5', value: randomDice(), inline: true },
    { name: 'D#6', value: randomDice(), inline: true }
  )
embed.addField("Total", embed.fields.reduce((total, obj) => parseInt(obj.value) + total, 0));
message.channel.send(embed)
};

module.exports.help = MESSAGES.COMMANDES.COOL.DICE;