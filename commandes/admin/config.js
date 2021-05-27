const { MESSAGES } = require('../../util/constantes');

module.exports.run = async (client, message, args, settings) => {
  const getSettings = args[0];
  const newSetting = args.slice(1).join(" ");

  switch (getSettings) {
    case "prefix": {
      if (newSetting) {
        await client.updateGuild(message.guild, { prefix: newSetting });
        return message.channel.send(`préfix mis à jour: \`${settings.prefix}\`-> \`${newSetting}\``);
      }
      message.channel.send(`Prefix actuel: \`${settings.prefix}\``)
      break;
    }
    case "logChannel": {
      if (newSetting) {
        await client.updateGuild(message.guild, { logChannel: newSetting });
        return message.channel.send(`salon de logs mis à jour: \`${settings.logChannel}\`-> \`${newSetting}\``);
      }
      message.channel.send(`logChannel actuel: \`${settings.logChannel}\``)
      break;
    }
    case "welcomeMessage": {
      if (newSetting) {
        await client.updateGuild(message.guild, { welcomeMessage: newSetting });
        return message.channel.send(`message d'acceuil mis à jour: \`${settings.welcomeMessage}\`-> \`${newSetting}\``);
      }
      message.channel.send(`welcomeMessage actuel: \`${settings.welcomeMessage}\``)
      break;
    }
  }
};

module.exports.help = MESSAGES.COMMANDES.ADMIN.CONFIG;