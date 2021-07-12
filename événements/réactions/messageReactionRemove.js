module.exports = async (client, messageReaction, user) => {
  const message = messageReaction.message;
  const member = message.guild.members.cache.get(user.id);
  const emoji = messageReaction.emoji.name;

  //listes des channels
  const choixrolesacceuilchannel = message.guild.channels.cache.find(c => c.id === '726428190427447365')
  const choixjeuxchannel = message.guild.channels.cache.find(c => c.id === '726428191568298008')
  const choixjeuxnintendochannel = message.guild.channels.cache.find(c => c.id === '726428192146980922')

  //listes des rôles

  var notiftwitch = message.guild.roles.cache.find(nt => nt.id === "756243894894854294");
  var notifgenerales = message.guild.roles.cache.find(ng => ng.id === "756244388413440171");

  var detente = message.guild.roles.cache.find(d => d.id === "726428190012211215");
  var music = message.guild.roles.cache.find(m => m.id === "726428189978787879");
  var adult = message.guild.roles.cache.find(a => a.id === "726428189978787878");
  var pubrole = message.guild.roles.cache.find(p => p.id === "726428189978787874");
  var gameur = message.guild.roles.cache.find(g => g.id === "726428190012211213");
  var gameuse = message.guild.roles.cache.find(gs => gs.id === "726428190012211214");

  var playstation = message.guild.roles.cache.find(x => x.id === "726428190012211211");
  var pc = message.guild.roles.cache.find(x => x.id === "726428190012211212");
  var switchrole = message.guild.roles.cache.find(x => x.id === "726428189991108677");
  var xbox = message.guild.roles.cache.find(x => x.id === "726428190012211210");
  var telephone = message.guild.roles.cache.find(x => x.id === "726428189991108676");

  var games = message.guild.roles.cache.find(x => x.id === "844990506744152074");
  var minecraft = message.guild.roles.cache.find(x => x.id === "726428189991108674");
  var maxcraft = message.guild.roles.cache.find(x => x.id === '738476660235698279')
  var rocket = message.guild.roles.cache.find(x => x.id === "726428189991108671");
  var gtav = message.guild.roles.cache.find(x => x.id === "726428189991108669");

  var nintendo = message.guild.roles.cache.find(x => x.id === "726428189978787881");
  var animal = message.guild.roles.cache.find(x => x.id === "726428189978787880");

  if (member.user.bot) return;

  if (messageReaction.partial) {
    await messageReaction.fetch();
    return;
  }

  if (['🛏', '🎮', '🎵', '🔞', 'pub'].includes(emoji) && message.channel.id === choixrolesacceuilchannel.id) {
    switch (emoji) {
      case '🛏':
        if (member.roles.cache.find(x => x.id === "726428190012211215")) {
          member.roles.remove(detente);
          member.send(`Tu n'as plus le rôle ${detente.name}.`).catch(console.error);
        }
        break;
      case '🎮':
        if (member.roles.cache.find(x => x.id === "726428190012211214")) {
          member.roles.remove(gameuse);
          member.roles.remove(games);
          member.roles.remove(playstation);
          member.roles.remove(pc);
          member.roles.remove(switchrole);
          member.roles.remove(xbox);
          member.roles.remove(telephone);
          member.roles.remove(minecraft);
          member.roles.remove(maxcraft);
          member.roles.remove(rocket);
          member.roles.remove(gtav);
          member.roles.remove(nintendo);
          member.roles.remove(animal);
          member.send(`Tu n'as plus le rôle ${gameuse.name} ainsi que tous les rôles en rapport avec cette catégorie.`).catch(console.error);
        }
        if (member.roles.cache.find(x => x.id === "726428190012211213")) {
          member.roles.remove(gameur);
          member.roles.remove(games);
          member.roles.remove(playstation);
          member.roles.remove(pc);
          member.roles.remove(switchrole);
          member.roles.remove(xbox);
          member.roles.remove(telephone);
          member.roles.remove(minecraft);
          member.roles.remove(maxcraft);
          member.roles.remove(rocket);
          member.roles.remove(gtav);
          member.roles.remove(nintendo);
          member.roles.remove(animal);
          member.send(`Tu n'as plus le rôle ${gameur.name} ainsi que tous les rôles en rapport avec cette catégorie.`).catch(console.error);
        }
        break;
      case '🎵':
        if (member.roles.cache.find(x => x.id === "726428189978787879")) {
          member.roles.remove(music);
          member.send(`Tu n'as plus le rôle ${music.name}.`).catch(console.error);
        }
        break;
      case '🔞':
        if (member.roles.cache.find(x => x.id === "726428189978787878")) {
          member.roles.remove(adult);
          member.send(`Tu n'as plus le rôle ${adult.name}.`).catch(console.error);
        }
        break;
      case 'pub':
        if (member.roles.cache.find(x => x.id === "726428189978787874")) {
          member.roles.remove(pubrole);
          member.send(`Tu n'as plus le rôle ${pubrole.name}.`).catch(console.error);
        }
        break;
    };
  }

  if (['twitch', '🔔'].includes(emoji) && message.channel.id === choixrolesacceuilchannel.id) {
    switch (emoji) {
      case 'twitch':
        if (member.roles.cache.find(x => x.id === "756243894894854294")) {
          member.roles.remove(notiftwitch).then(() => {
            member.send(`Tu n'as plus le rôle ${notiftwitch.name}.`).catch(console.error)
          });
        }
        break;
      case '🔔':
        if (member.roles.cache.find(x => x.id === "756244388413440171")) {
          member.roles.remove(notifgenerales).then(() => {
            member.send(`Tu n'as plus le rôle ${notifgenerales.name}.`).catch(console.error)
          });
        }
        break;
    };
  };




  if (['playstation', 'pc', 'switch', 'xbox', 'smartphone'].includes(emoji) && message.channel.id === choixjeuxchannel.id) {
    switch (emoji) {
      case 'playstation':
        if (member.roles.cache.find(x => x.id === "726428190012211211")) {
          member.roles.remove(playstation);
          member.send(`Tu n'as plus le rôle ${playstation.name}.`).catch(console.error);
        }
        break;
      case 'pc':
        if (member.roles.cache.find(x => x.id === "726428190012211212")) {
          member.roles.remove(pc);
          member.send(`Tu n'as plus le rôle ${pc.name}.`).catch(console.error);
        }
        break;
      case 'switch':
        if (member.roles.cache.find(x => x.id === "726428189991108677")) {
          member.roles.remove(switchrole);
          member.send(`Tu n'as plus le rôle ${switchrole.name}.`).catch(console.error);
        }
        break;
      case 'xbox':
        if (member.roles.cache.find(x => x.id === "726428190012211210")) {
          member.roles.remove(xbox);
          member.send(`Tu n'as plus le rôle ${xbox.name}.`).catch(console.error);
        }
        break;
      case 'smartphone':
        if (member.roles.cache.find(x => x.id === "726428189991108676")) {
          member.roles.remove(telephone);
          member.send(`Tu n'as plus le rôle ${telephone.name}.`).catch(console.error);
        }
        break;
    };
  };

  if (['minecraft', 'maxcraft', 'rocketleague', 'gtav', 'nintendo'].includes(emoji) && message.channel.id === choixjeuxchannel.id) {
    switch (emoji) {
      case 'minecraft':
        if (member.roles.cache.find(x => x.id === "726428189991108674")) {
          member.roles.remove(minecraft);
          member.send(`Tu n'as plus le rôle ${minecraft.name}.`).catch(console.error);
        }
        break;
      case 'maxcraft':
        if (member.roles.cache.find(x => x.id === "738476660235698279")) {
          member.roles.remove(maxcraft);
          member.send(`Tu n'as plus le rôle ${maxcraft.name}.`).catch(console.error);
        }
        break;
      case 'rocketleague':
        if (member.roles.cache.find(x => x.id === "726428189991108671")) {
          member.roles.remove(rocket);
          member.send(`Tu n'as plus le rôle ${rocket.name}.`).catch(console.error);
        }
        break;
      case 'gtav':
        if (member.roles.cache.find(x => x.id === "726428189991108669")) {
          member.roles.remove(gtav);
          member.send(`Tu n'as plus le rôle ${gtav.name}.`).catch(console.error);
        }
        break;
      case 'nintendo':
        if (member.roles.cache.find(x => x.id === "726428189978787881")) {
          member.roles.remove(nintendo);
          member.roles.remove(animal);
          member.send(`Tu n'as plus le rôle ${nintendo.name} ainsi que tous les rôles en rapport avec cette catégorie.`).catch(console.error);
        }
        break;
    };
  };

  if (['animalcrossing'].includes(emoji) && message.channel.id === choixjeuxnintendochannel.id) {
    switch (emoji) {
      case 'animalcrossing':
        if (member.roles.cache.find(x => x.id === "726428189978787880")) {
          member.roles.remove(animal);
          member.send(`Tu n'as plus le rôle ${animal.name}.`).catch(console.error);
        }
        break;
    };
  };

}