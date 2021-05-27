const Discord = require("discord.js");
const fs = require("fs");
const categoryList = fs.readdirSync('./commandes');
const { MESSAGES } = require('../../util/constantes');

module.exports.run = (client, message, args, settings) => {

  if (!args.length) {
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .addField("Listes des commandes", `Voici une liste de toutes les sous-catégories disponibles et leurs commandes.\nPour plus d'infos sur une commande tapez \`${settings.prefix}help <nom de la commande>\`==> par exemple pour voir les différents aliases utilisables pour chaque commande (/userexperience = /lvl = /rank etc...)`)

    for (const category of categoryList) {
      embed.addField(
        `${category}`,
        `${client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join(", ")}`
      );
    };

    return message.channel.send(embed)
  } else {
    const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));
    if (!command) return message.reply("Cette commande n'existe pas !");

    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`\`${command.help.name}\``)
      .addField("Description", `${command.help.description} (cd: ${command.help.cooldown} secs)`)
      .addField("Utilisation:", command.help.usage ? `${settings.prefix}${command.help.name} ${command.help.usage}` : `${settings.prefix}${command.help.name}`, true)

    if (command.help.aliases.length > 1) embed.addField("Alias", `${command.help.aliases.join(", ")}`, true);
    return message.channel.send(embed);
  }
};

module.exports.help = MESSAGES.COMMANDES.UTILITAIRES.HELP;