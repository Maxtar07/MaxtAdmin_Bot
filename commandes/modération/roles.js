const { MESSAGES } = require('../../util/constantes');
const Discord = require('discord.js');

module.exports.run = async (client, message) => {

  var detente = message.guild.roles.cache.find(x => x.id === "726428190012211215");
  var music = message.guild.roles.cache.find(x => x.id === "726428189978787879");
  var adult = message.guild.roles.cache.find(x => x.id === "726428189978787878");
  var pubrole = message.guild.roles.cache.find(x => x.id === "726428189978787874");
  var gameur = message.guild.roles.cache.find(x => x.id === "726428190012211213");
  var gameuse = message.guild.roles.cache.find(x => x.id === "726428190012211214");

  var detenteclean = message.guild.roles.cache.find(x => x.id === "867519988520976385");
  var musicclean = message.guild.roles.cache.find(x => x.id === "867520012582518814");
  var adultclean = message.guild.roles.cache.find(x => x.id === "867520038768345088");
  var pubroleclean = message.guild.roles.cache.find(x => x.id === "867520064495288340");
  var gameurclean = message.guild.roles.cache.find(x => x.id === "867519905947320351");
  var gameuseclean = message.guild.roles.cache.find(x => x.id === "867519870324310036");

  var playstation = message.guild.roles.cache.find(x => x.id === "726428190012211211");
  var pc = message.guild.roles.cache.find(x => x.id === "726428190012211212");
  var switchrole = message.guild.roles.cache.find(x => x.id === "726428189991108677");
  var xbox = message.guild.roles.cache.find(x => x.id === "726428190012211210");
  var telephone = message.guild.roles.cache.find(x => x.id === "726428189991108676");

  var minecraft = message.guild.roles.cache.find(x => x.id === "726428189991108674");
  var maxcraft = message.guild.roles.cache.find(x => x.id === "738476660235698279")
  var rocket = message.guild.roles.cache.find(x => x.id === "726428189991108671");
  var gtav = message.guild.roles.cache.find(x => x.id === "726428189991108669");

  var nintendo = message.guild.roles.cache.find(x => x.id === "726428189978787881");

  var animal = message.guild.roles.cache.find(x => x.id === "726428189978787880");

  const pubemoji = client.emojis.cache.find(emoji => emoji.name === "pub")
  const minecraftemoji = client.emojis.cache.find(emoji => emoji.name === "minecraft")
  const maxcraftemoji = client.emojis.cache.find(emoji => emoji.name === "maxcraft")
  const rocketemoji = client.emojis.cache.find(emoji => emoji.name === "rocketleague")
  const gtavemoji = client.emojis.cache.find(emoji => emoji.name === "gtav")
  const nintendoemoji = client.emojis.cache.find(emoji => emoji.name === "nintendo")
  const animalemoji = client.emojis.cache.find(emoji => emoji.name === "animalcrossing")
  const playstationemoji = client.emojis.cache.find(emoji => emoji.name === "playstation")
  const pcemoji = client.emojis.cache.find(emoji => emoji.name === "pc")
  const switchemoji = client.emojis.cache.find(emoji => emoji.name === "switch")
  const xboxemoji = client.emojis.cache.find(emoji => emoji.name === "xbox")
  const smartphoneemoji = client.emojis.cache.find(emoji => emoji.name === "smartphone")
  const twitchemoji = client.emojis.cache.find(emoji => emoji.name === "twitch")




  var roles_embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(`Voici la liste des r??les disponibles sur le serveur.`)
    .setThumbnail(client.user.displayAvatarURL)
    .setDescription(`Gr??ce ?? ces r??les tu va pouvoir acc??der ?? diff??rentes cat??gories du serveur...fais tes choix et amuse-toi bien !`)
    .addField(`Pour t'ajouter ou t'enlever un r??le, il te suffit de r??agir avec l'emoji qui correspond...`,
      `
    ???? - Pour obtenir le r??le ${detenteclean} qui te donneras acc??s ?? la cat??gorie D??tente o?? tu pourras raconter des <#726428191186485387>, poser des <#726428191186485386>, jouer ?? des jeux propos??s par les bots et pleins d'autres choses amusantes...

    ???? - Pour obtenir le r??le ${gameuseclean} ou ${gameurclean} qui te donneras acc??s ?? la cat??gorie Gaming o?? tu pourras discuter de jeux vid??os et autres.Tu auras aussi la possibilit?? de <#726428191568298008> pour avoir acc??s ?? des salons sp??ciaux pour chaque jeu et t'identifier pour savoir sur quelle(s) plateforme(s) tu joue.
    Si tu veux jouer sur mon serveur ${maxcraft}, c'est aussi via cette cat??gorie.

    ???? - Pour obtenir le r??le ${musicclean} qui te donneras acc??s ?? la cat??gorie musique (<#726428192403095624>) o?? tu pourras discuter de chansons, d'artistes, etc... Il y a aussi un salon vocal pour ??couter les musiques que tu veux.
    `)
    .addField(`\u200b`,
      `
    ???? - Pour obtenir le r??le ${adultclean} qui te donneras acc??s ?? la cat??gorie Coin des grands (<#726428194705768490>) o?? tu pourras discuter de diverses choses plus ou moins r??serv??es aux adultes comme la <#726428194705768491> par exemple.

    ${pubemoji} - Pour obtenir le r??le ${pubroleclean} qui te donneras acc??s ?? la cat??gorie Publicit??s o?? tu auras la possibilit?? de faire de la pub pour tout ce que tu veux (serveurs, chaines YT ou Twitch, etc...) mais cela te permettras de voir les pubs des autres et ainsi tu pourras faire des d??couvertes int??ressantes.
    `)
  client.channels.cache.get("726428190427447365").bulkDelete(100)
  client.channels.cache.get("726428190427447365").send(roles_embed).then(function (message) {//salon choix des r??les, cat??gorie acceuil
    message.react('????').then(() => {
      message.react('????').then(() => {
        message.react('????').then(() => {
          message.react('????').then(() => {
            message.react(pubemoji)
          })
        })
      })
    })
  })








  var notifs_embed = new Discord.MessageEmbed()
  .setColor('GREEN')
  .setTitle(`Voici la liste des r??les de notifs disponibles sur le serveur.`)
  .setThumbnail(client.user.displayAvatarURL)
  .setDescription(`Gr??ce ?? ces r??les tu va pouvoir choisir quelles sortes de notifications tu veux recevoir et si tu ne veux rien, tu ne recevra aucunes notification de mention.
  Si vous n'avez pas ces r??les, vous avez tout de m??me acc??s aux salons d'annonces mais ne serez pas notifier lorsqu'un message y sera ??crit. Cependant l'??quipe de mod??ration se r??serve le droit de mentionner here ou everyone en cas d'annonce vraiment importante.`)
  .addField(`Pour t'ajouter ou t'enlever un r??le, il te suffit de r??agir avec l'emoji qui correspond...`,
    `
  ${twitchemoji} - Si tu veux ??tre inform?? des streams ou toute annonce importante concernant Twitch.
  ???? - Si tu veux recevoir les notifications de mention pour les annonces g??n??rales concernant le discord (??quivalent ?? here ou everyone, mais ??vite de mentionner les gens qui ne veulent pas l'??tre.)
  `)
client.channels.cache.get("726428190427447365").send(notifs_embed).then(function (message) {//salon choix-des-notifs, cat??gorie accueil
  message.react(twitchemoji).then(() => {
    message.react('????')
  })
})







  var games_embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(`Voici la liste des jeux disponibles sur le serveur.`)
    .setThumbnail(client.user.displayAvatarURL)
    .setDescription(`Gr??ce ?? ces r??les tu va pouvoir acc??der ?? diff??rentes cat??gories pour parler sp??cifiquement de chaque jeu...fais tes choix et amuse-toi bien !
    Si tu veux rajouter des jeux, fait ta demande dans le salon <#726428191568298006>.`)
    .addField(`Pour t'ajouter ou t'enlever un r??le, il te suffit de r??agir avec l'emoji qui correspond...`,
      `
    ${minecraftemoji} - Si tu es un joueur de ${minecraft}
    ${maxcraftemoji} - Si tu veux jouer sur mon serveur ${maxcraft} (<#738492340519436349>)
    ${rocketemoji} - Si tu es un joueur de ${rocket}
    ${gtavemoji} - Si tu es un joueur de ${gtav}
    ${nintendoemoji} - Si tu es un joueur de jeux ${nintendo}
    `)
  client.channels.cache.get("726428191568298008").bulkDelete(100)
  client.channels.cache.get("726428191568298008").send(games_embed).then(function (message) {//salon choisir ses jeux, cat??gorie gaming
    message.react(minecraftemoji).then(() => {
      message.react(maxcraftemoji).then(() => {
        message.react(rocketemoji).then(() => {
          message.react(gtavemoji).then(() => {
            message.react(nintendoemoji)
          })
        })
      })
    })
  })





  var plateform_embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(`Voici la liste des plateformes de jeux disponibles sur le serveur.`)
    .setThumbnail(client.user.displayAvatarURL)
    .setDescription(`Gr??ce ?? ces r??les tu va pouvoir montrer aux autres membres du serveur sur quelle(s) plateforme(s) tu joue aux jeux vid??os...fais tes choix et amuse-toi bien !
Si vous pensez ?? d'autres plateformes de jeux n'h??sitez pas ?? faire vos <#726428191568298006> pour que l'on puisse les rajouter.`)
    .addField(`Pour t'ajouter ou t'enlever un r??le, il te suffit de r??agir avec l'emoji qui correspond...`,
      `
      ${playstationemoji} - Si tu joue sur ${playstation}
      ${pcemoji} - Si tu joue sur ${pc}
      ${switchemoji} - Si tu joue sur ${switchrole}
      ${xboxemoji} - Si tu joue sur ${xbox}
      ${smartphoneemoji} - Si tu joue sur ${telephone}
        `)
  client.channels.cache.get("726428191568298008").send(plateform_embed).then(function (message) {//salon choisir sa plateforme, cat??gorie gaming
    message.react(playstationemoji).then(() => {
      message.react(pcemoji).then(() => {
        message.react(switchemoji).then(() => {
          message.react(xboxemoji).then(() => {
            message.react(smartphoneemoji)
          })
        })
      })
    })
  })




  var nintendo_embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(`Voici la liste des jeux nintendo disponibles.`)
    .setDescription(`Gr??ce ?? ces r??les tu va pouvoir acc??der ?? diff??rents salon sp??cifiques pour chaque jeu...fais tes choix et amuse-toi bien !
    Si tu veux rajouter des jeux de la gamme nintendo, fait ta demande dans le salon <#726428192146980921>`)
    .addField(`Pour t'ajouter ou t'enlever un r??le, il te suffit de r??agir avec l'emoji qui correspond...`,
      `
    ${animalemoji} - Si tu es un joueur de ${animal}
    `)
  client.channels.cache.get("726428192146980922").bulkDelete(100)
  client.channels.cache.get("726428192146980922").send(nintendo_embed).then(function (message) {//salon choisir-ses-jeux, cat??gorie nintendo
    message.react(animalemoji)
  })

}

module.exports.help = MESSAGES.COMMANDES.MOD??RATION.ROLES;