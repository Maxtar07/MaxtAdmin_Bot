const { MESSAGES } = require('../../util/constantes');
const math = require('mathjs');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    let resp;
    try {
        resp = math.evaluate(args.join(' '));
    } catch (e) {
        return message.channel.send('Veuillez entrer un calcul correct')
    }

    const math_embed = new Discord.MessageEmbed()
    .setColor(0xffffff)
    .setTitle('Calcul Mathématique')
    .addField('Calcul', `\`\`\`js\n${args.join('')}\`\`\``)
    .addField('Résultat', `\`\`\`js\n${resp}\`\`\``)
    .setFooter(`calcul demandé par : ${message.author.tag}`)

    message.channel.send(math_embed)
}

module.exports.help = MESSAGES.COMMANDES.COOL.MATH;