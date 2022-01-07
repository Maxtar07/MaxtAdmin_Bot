const { Message, DiscordAPIError, MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const dbticket = require('../../models/tickets');
const dbreclam = require('../../models/reclams');

module.exports = async (client, messageReaction, user) => {
  const message = messageReaction.message;
  const member = message.guild.members.cache.get(user.id);
  const emoji = messageReaction.emoji.name;


  //listes des channels
  const welcomechannel = message.guild.channels.cache.find(c => c.id === '726428190427447360')
  const annoncesmembreschannel = message.guild.channels.cache.find(c => c.id === '726428190427447361')
  const reglementchannel = message.guild.channels.cache.find(c => c.id === '737211778072707153')
  const choixrolesacceuilchannel = message.guild.channels.cache.find(c => c.id === '726428190427447365')
  const choixjeuxchannel = message.guild.channels.cache.find(c => c.id === '726428191568298008')
  const choixjeuxnintendochannel = message.guild.channels.cache.find(c => c.id === '726428192146980922')
  const demandedeprivechannel = message.guild.channels.cache.find(c => c.id === '726428195187851317')
  const reclamchannel = message.guild.channels.cache.find(c => c.id === '777492656427237406')




  //listes des rôles

  var girls = member.guild.roles.cache.find(gi => gi.id === "726428190012211217");
  var boys = member.guild.roles.cache.find(b => b.id === "726428190012211216");
  var no_binary = member.guild.roles.cache.find(o => o.id === "824740975242117191");
  var members = member.guild.roles.cache.find(m => m.id === "726428189978787873");


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

  if (['👧', '👦', '🏳️‍🌈'].includes(emoji) && message.channel.id === welcomechannel.id && member.roles.cache.find(m => m.id === "726428189978787873")) {
    switch (emoji) {
      case '👧':
        messageReaction.users.remove(user);
        member.roles.add(girls);
        member.roles.remove(members).then(() => {
          member.send(`Tu as bien obtenu le rôle ${girls.name}.`).catch(console.error)
        });
        message.reactions.removeAll()
        break;
      case '👦':
        messageReaction.users.remove(user);
        member.roles.add(boys);
        member.roles.remove(members).then(() => {
          member.send(`Tu as bien obtenu le rôle ${boys.name}.`).catch(console.error)
        }
        );
        message.reactions.removeAll()
        break;
        case '🏳️‍🌈':
          messageReaction.users.remove(user);
          member.roles.add(no_binary);
          member.roles.remove(members).then(() => {
            member.send(`Tu as bien obtenu le rôle ${no_binary.name}.`).catch(console.error)
          }
          );
          message.reactions.removeAll()
          break;
    };
  };

  if (['👧', '👦', '🏳️‍🌈'].includes(emoji) && message.channel.id === annoncesmembreschannel.id && member.roles.cache.find(m => m.id === "726428189978787873")) {
    switch (emoji) {
      case '👧':
        messageReaction.users.remove(user);
        member.roles.add(girls);
        member.roles.remove(members).then(() => {
          member.send(`Tu as bien obtenu le rôle ${girls.name}.`).catch(console.error)
        });
        break;
      case '👦':
        messageReaction.users.remove(user);
        member.roles.add(boys);
        member.roles.remove(members).then(() => {
          member.send(`Tu as bien obtenu le rôle ${boys.name}.`).catch(console.error)
        });
        break;
        case '🏳️‍🌈':
          messageReaction.users.remove(user);
          member.roles.add(no_binary);
          member.roles.remove(members).then(() => {
            member.send(`Tu as bien obtenu le rôle ${no_binary.name}.`).catch(console.error)
          });
          break;
    };
  };

  if ((member.roles.cache.find(m => m.id === "726428190012211216") || member.roles.cache.find(m => m.id === "726428190012211217") || member.roles.cache.find(m => m.id === "824740975242117191"))) {
    if (['twitch', '🔔'].includes(emoji) && message.channel.id === choixrolesacceuilchannel.id) {
      switch (emoji) {
        case 'twitch':
          member.roles.add(notiftwitch).then(() => {
            member.send(`Tu as bien obtenu le rôle ${notiftwitch.name}.`).catch(console.error)
          });
          break;
        case '🔔':
          member.roles.add(notifgenerales).then(() => {
            member.send(`Tu as bien obtenu le rôle ${notifgenerales.name}.`).catch(console.error)
          });
          break;
      };
    };
  } else {
    if (['twitch', '🔔'].includes(emoji) && message.channel.id === choixrolesacceuilchannel.id) {
      message.channel.send("Va dans le salon <#726428190427447360> ou <#726428190427447361> pour choisir ton genre avant de choisir les notifs que tu veux !!").then((msg) => {
        msg.delete({ timeout: 10000 });
      })
    }
  }

  if ((member.roles.cache.find(m => m.id === "726428190012211216") || member.roles.cache.find(m => m.id === "726428190012211217") || member.roles.cache.find(m => m.id === "824740975242117191"))) {

    if (['🛏', '🎮', '🎵', '🔞', 'pub'].includes(emoji) && message.channel.id === choixrolesacceuilchannel.id) {
      switch (emoji) {
        case '🛏':
          if (!member.roles.cache.find(x => x.id === "726428190012211215")) {
            member.roles.add(detente).then(() => {
              member.send(`Tu as bien obtenu le rôle ${detente.name}.`).catch(console.error)
            });
          }
          break;
        case '🎮':
          if (!member.roles.cache.find(x => x.id === "726428190012211213") || !member.roles.cache.find(x => x.id === "726428190012211214")) {
            if (member.roles.cache.find(x => x.id === "726428190012211217")) {
              member.roles.add(gameuse).then(() => {
                member.roles.add(games).then(() => {
                  member.send(`Tu as bien obtenu le rôle ${gameuse.name}.`).catch(console.error)
                });
              });
            }
            if (member.roles.cache.find(x => x.id === "726428190012211216") || member.roles.cache.find(x => x.id === "824740975242117191")) {
              member.roles.add(gameur).then(() => {
                member.roles.add(games).then(() => {
                  member.send(`Tu as bien obtenu le rôle ${gameur.name}.`).catch(console.error)
                });
              });
            }
            break;
          }
        case '🎵':
          if (!member.roles.cache.find(x => x.id === "726428189978787879")) {
            member.roles.add(music).then(() => {
              member.send(`Tu as bien obtenu le rôle ${music.name}.`).catch(console.error)
            });
          }
          break;
        case '🔞':
          if (!member.roles.cache.find(x => x.id === "726428189978787878")) {
            member.roles.add(adult).then(() => {
              member.send(`Tu as bien obtenu le rôle ${adult.name}.`).catch(console.error)
            });
          }
          break;
        case 'pub':
          if (!member.roles.cache.find(x => x.id === "726428189978787874")) {
            member.roles.add(pubrole).then(() => {
              member.send(`Tu as bien obtenu le rôle ${pubrole.name}.`).catch(console.error)
            });
          }
          break;
      };
    };

    if (['playstation', 'pc', 'switch', 'xbox', 'smartphone'].includes(emoji) && message.channel.id === choixjeuxchannel.id) {
      switch (emoji) {
        case 'playstation':
          if (!member.roles.cache.find(x => x.id === "726428190012211211")) {
            member.roles.add(playstation).then(() => {
              member.send(`Tu as bien obtenu le rôle ${playstation.name}.`).catch(console.error)
            });
          }
          break;
        case 'pc':
          if (!member.roles.cache.find(x => x.id === "726428190012211212")) {
            member.roles.add(pc).then(() => {
              member.send(`Tu as bien obtenu le rôle ${pc.name}.`).catch(console.error)
            });
          }
          break;
        case 'switch':
          if (!member.roles.cache.find(x => x.id === "726428189991108677")) {
            member.roles.add(switchrole).then(() => {
              member.send(`Tu as bien obtenu le rôle ${switchrole.name}.`).catch(console.error)
            });
          }
          break;
        case 'xbox':
          if (!member.roles.cache.find(x => x.id === "726428190012211210")) {
            member.roles.add(xbox).then(() => {
              member.send(`Tu as bien obtenu le rôle ${xbox.name}.`).catch(console.error)
            });
          }
          break;
        case 'smartphone':
          if (!member.roles.cache.find(x => x.id === "726428189991108676")) {
            member.roles.add(telephone).then(() => {
              member.send(`Tu as bien obtenu le rôle ${telephone.name}.`).catch(console.error)
            });
          }
          break;
      };
    };

    if (['minecraft', 'maxcraft', 'rocketleague', 'gtav', 'nintendo'].includes(emoji) && message.channel.id === choixjeuxchannel.id) {
      switch (emoji) {
        case 'minecraft':
          if (!member.roles.cache.find(x => x.id === "726428189991108674")) {
            member.roles.add(minecraft).then(() => {
              member.send(`Tu as bien obtenu le rôle ${minecraft.name}.`).catch(console.error)
            });
          }
          break;
        case 'maxcraft':
          if (!member.roles.cache.find(x => x.id === "738476660235698279")) {
            member.roles.add(maxcraft).then(() => {
              member.send(`Tu as bien obtenu le rôle ${maxcraft.name}.`).catch(console.error)
            });
          }
          break;
        case 'rocketleague':
          if (!member.roles.cache.find(x => x.id === "726428189991108671")) {
            member.roles.add(rocket).then(() => {
              member.send(`Tu as bien obtenu le rôle ${rocket.name}.`).catch(console.error)
            });
          }
          break;
        case 'gtav':
          if (!member.roles.cache.find(x => x.id === "726428189991108669")) {
            member.roles.add(gtav).then(() => {
              member.send(`Tu as bien obtenu le rôle ${gtav.name}.`).catch(console.error)
            });
          }
          break;
        case 'nintendo':
          if (!member.roles.cache.find(x => x.id === "726428189978787881")) {
            member.roles.add(nintendo).then(() => {
              member.send(`Tu as bien obtenu le rôle ${nintendo.name}.`).catch(console.error)
            });
          }
          break;
      };
    };

    if (['animalcrossing'].includes(emoji) && message.channel.id === choixjeuxnintendochannel.id) {
      switch (emoji) {
        case 'animalcrossing':
          if (!member.roles.cache.find(x => x.id === "726428189978787880")) {
            member.roles.add(animal).then(() => {
              member.send(`Tu as bien obtenu le rôle ${animal.name}.`).catch(console.error)
            });
          }
          break;
      };
    };
  } else {
    if (['🛏', '🎮', '🎵', '🔞', 'pub', 'animalcrossing', 'minecraft', 'maxcraft', 'rocketleague', 'gtav', 'nintendo', 'playstation', 'pc', 'switch', 'xbox', 'smartphone'].includes(emoji) && message.channel.id === choixrolesacceuilchannel.id){
      message.channel.send("Va dans le salon <#726428190427447360> ou <#726428190427447361> pour choisir ton genre avant de choisir les catégories que tu veux !!").then((msg) => {
        msg.delete({ timeout: 10000 });
      })
    }
  }


  if (['📩'].includes(emoji) && message.channel.id === demandedeprivechannel.id) {
    switch (emoji) {
      case '📩':
        messageReaction.users.remove(user);
        let ticketusername = user.username;
        let ticketcategoryID = '726428195187851316'
        let ticketchannel = await message.guild.channels.create(`Ticket-${ticketusername}`, {type: 'text', parent: message.guild.channels.cache.get(ticketcategoryID)});

        ticketchannel.updateOverwrite(message.guild.roles.everyone, {'VIEW_CHANNEL': false});
        ticketchannel.updateOverwrite(member, {
          'VIEW_CHANNEL': true,
          'SEND_MESSAGES': true,
          'ATTACH_FILES': true,
          'READ_MESSAGE_HISTORY': true
        });
        ticketchannel.updateOverwrite(message.guild.roles.cache.find(role => role.id == '738812943613034566'), {'VIEW_CHANNEL': true, 'SEND_MESSAGES': true, 'ATTACH_FILES': true, 'READ_MESSAGE_HISTORY': true})
        ticketchannel.updateOverwrite(message.guild.roles.cache.find(role => role.id == '726428190024925207'), {'VIEW_CHANNEL': true, 'SEND_MESSAGES': true, 'ATTACH_FILES': true, 'READ_MESSAGE_HISTORY': true})

        var closeticket = new Discord.MessageEmbed()
        .setTitle('Voici votre salon privé pour parler tranquillement avec les admins/modos')
        .setDescription(`Veuillez expliquer votre problème dans ce salon, un admin ou un modo vous répondras dans les plus brefs délais.
        Si vous souhaitez ajouter un membre quelconque au ticket car il est concerné par celui-ci veuillez le mentionner, il y sera ajouté automatiquement.`)
        .setFooter('Réagir avec 🔒 pour fermer ce salon !')
        ticketchannel.send(`${member}`)
        ticketchannel.send(closeticket).then(async msg => msg.react('🔒'))

        const openticketembed = new Discord.MessageEmbed()
        .setTitle(`${ticketusername} à ouvert un ticket !`)
        .setColor('GREEN')
        .setDescription(`Voici le salon : ${ticketchannel}`)
        .setTimestamp()

        let logchannel = message.guild.channels.cache.find(c => c.id == "787998388208533504")
        if(!logchannel) return
        let infoticket = await logchannel.send(openticketembed)

        dbticket.findOne({ NewTicket: `ouverture d'un nouveau ticket(${ticketchannel.id}) par ${ticketusername}`}, async(err, data) => {
          if(err) throw err;
          if(!data) {
            data = new dbticket({
              NewTicket: `ouverture d'un nouveau ticket(${ticketchannel.id}) par ${ticketusername}`,
              content : [
                {
                  channelId: ticketchannel.id,
                  messageId: infoticket.id,
                  opennerId: user.id
                }
              ]
            })
          } else {
              const obj = {
                channelId: ticketchannel.id,
                messageId: infoticket.id,
                opennerId: user.id
              }
              data.content.push(obj)
          }
          data.save()
        });
      break;
    };
  };

  if (['📩'].includes(emoji) && message.channel.id === reclamchannel.id) {
    switch (emoji) {
      case '📩':
        messageReaction.users.remove(user);
        let reclamusername = user.username;
        let reclamcategoryID = '738480267932729356'
        let reclamchannel = await message.guild.channels.create(`réclam-${reclamusername}`, {type: 'text', parent: message.guild.channels.cache.get(reclamcategoryID)});

        reclamchannel.updateOverwrite(message.guild.roles.everyone, {'VIEW_CHANNEL': false});
        reclamchannel.updateOverwrite(member, {
          'VIEW_CHANNEL': true,
          'SEND_MESSAGES': true,
          'ATTACH_FILES': true,
          'READ_MESSAGE_HISTORY': true
        });
        reclamchannel.updateOverwrite(message.guild.roles.cache.find(role => role.id == '738812943613034566'), {'VIEW_CHANNEL': true, 'SEND_MESSAGES': true, 'READ_MESSAGE_HISTORY': true})
        reclamchannel.updateOverwrite(message.guild.roles.cache.find(role => role.id == '726428190024925207'), {'VIEW_CHANNEL': true, 'SEND_MESSAGES': true, 'READ_MESSAGE_HISTORY': true})

        var closereclam = new Discord.MessageEmbed()
        .setTitle('Voici votre salon de réclam pour expliquer le problème que vous rencontrez sur le serveur Minecraft')
        .setDescription(`Dans votre message vous devez fournir un screen de la zone, les coordonnées exact du bloc cassé, ou du coffre volé pour que je puisse le trouver facilement si je vais régler le problème quand vous n'êtes pas connecté.
        Merci de votre compréhension.
        Un admin ou un modo vous répondras dans les plus brefs délais.
        Si vous souhaitez ajouter un membre quelconque à la réclam car il est concerné par celle-ci veuillez le mentionner, il y sera ajouté automatiquement.`)
        .setFooter('Réagir avec 🔒 pour fermer ce salon !')
        reclamchannel.send(`${member}`)
        reclamchannel.send(closereclam).then(async msg => msg.react('🔒'))

        const openreclamembed = new Discord.MessageEmbed()
        .setTitle(`${reclamusername} à ouvert une réclam !`)
        .setColor('GREEN')
        .setDescription(`Voici le salon : ${reclamchannel}`)
        .setTimestamp()

        let logchannel = message.guild.channels.cache.find(c => c.id == "787998388208533504")
        if(!logchannel) return
        let inforeclam = await logchannel.send(openreclamembed)

        dbreclam.findOne({ NewReclam: `ouverture d'une nouvelle reclam(${reclamchannel.id}) par ${reclamusername}`}, async(err, data) => {
          if(err) throw err;
          if(!data) {
            data = new dbreclam({
              NewReclam: `ouverture d'une nouvelle reclam(${reclamchannel.id}) par ${reclamusername}`,
              content : [
                {
                  channelId: reclamchannel.id,
                  messageId: inforeclam.id,
                  opennerId: user.id
                }
              ]
            })
          } else {
              const obj = {
                channelId: reclamchannel.id,
                messageId: infosreclam.id,
                opennerId: user.id
              }
              data.content.push(obj)
          }
          data.save()
        });

      break;
    };
  };

  if (['🔒'].includes(emoji) && message.channel.name.startsWith('ticket')) {
    switch (emoji) {
      case '🔒':
        dbticket.findOne({ NewTicket: `ouverture d'un nouveau ticket(${message.channel.id}) par ${user.username}`}, async(err, data) => {
          if(err) throw err
          if(data){
            const infoTicketId = await data.content[0].messageId
              const openticketembed2 = new Discord.MessageEmbed()
              .setTitle(`${user.username} à fermé son ticket !`)
              .setColor('RED')
              .setTimestamp()
              const openticketedit = await client.channels.cache.get('787998388208533504').messages.fetch(infoTicketId)
              openticketedit.edit(openticketembed2)
              await dbticket.findOneAndDelete({ NewTicket: `ouverture d'un nouveau ticket(${message.channel.id}) par ${user.username}`})
              await message.channel.delete()
          }else{
            return;
          }
        });
      break;
    }
  }

  if (['🔒'].includes(emoji) && message.channel.name.startsWith('réclam')) {
    switch (emoji) {
      case '🔒':
        dbreclam.findOne({ NewReclam: `ouverture d'une nouvelle reclam(${message.channel.id}) par ${user.username}`}, async(err, data) => {
          if(err) throw err
          if(data){
            const infoReclamId = await data.content[0].messageId
              const openreclamembed2 = new Discord.MessageEmbed()
              .setTitle(`${user.username} à fermé sa réclam !`)
              .setColor('RED')
              .setTimestamp()
              const openreclamedit = await client.channels.cache.get('787998388208533504').messages.fetch(infoReclamId)
              openreclamedit.edit(openreclamembed2)
              await dbreclam.findOneAndDelete({ NewReclam: `ouverture d'une nouvelle reclam(${message.channel.id}) par ${user.username}`})
              await message.channel.delete()
          }else{
            return;
          }
        });
      break;
    }
  }

};