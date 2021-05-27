const { MESSAGES } = require('../../util/constantes');
const Discord = require("discord.js");

module.exports.run = async (client, message) => {

  const slots = [':grapes:', ':cherries:', ':lemon:', ':apple:'];
  const slotOne = slots[Math.floor(Math.random() * slots.length)];
  const slotTwo = slots[Math.floor(Math.random() * slots.length)];
  const slotThree = slots[Math.floor(Math.random() * slots.length)];
  const slotFour = slots[Math.floor(Math.random() * slots.length)];
  const slotFive = slots[Math.floor(Math.random() * slots.length)];
  const slotSix = slots[Math.floor(Math.random() * slots.length)];
  const slotSeven = slots[Math.floor(Math.random() * slots.length)];
  const slotEight = slots[Math.floor(Math.random() * slots.length)];
  const slotNine = slots[Math.floor(Math.random() * slots.length)];

  if (slotOne === slotTwo && slotOne === slotThree || slotFour === slotFive && slotFour === slotSix || slotSeven === slotEight && slotSeven === slotNine || slotOne === slotFour && slotOne === slotSeven || slotTwo === slotFive && slotTwo === slotEight || slotThree === slotSix && slotThree === slotNine || slotOne === slotFive && slotOne === slotNine || slotThree === slotFive && slotThree === slotSeven) {
    const won = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .addField(`
|${slotOne}|${slotTwo}|${slotThree}|
|${slotFour}|${slotFive}|${slotSix}|
|${slotSeven}|${slotEight}|${slotNine}|`,
        `Félicitation ${message.author.username}, tu as réussi à aligner 3 fruits identiques.`)
    message.channel.send(won);
  } else {
    const lost = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .addField(`
|${slotOne}|${slotTwo}|${slotThree}|
|${slotFour}|${slotFive}|${slotSix}|
|${slotSeven}|${slotEight}|${slotNine}|`,
        `Dommage ${message.author.username}, tu auras plus de chance la prochaine fois.`)
    message.channel.send(lost);
  };
};

module.exports.help = MESSAGES.COMMANDES.COOL.SLOTS;