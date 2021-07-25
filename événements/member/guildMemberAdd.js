const Discord = require("discord.js");

module.exports = async (client, member) => {

  const dbUser = await client.getUser(member);

  if (!dbUser) await client.createUser({
    guildID: member.guild.id,
    guildName: member.guild.name,
    userID: member.id,
    userName: member.user.tag,
  });

  var girls = member.guild.roles.cache.find(g => g.id === "726428190012211217");
  var boys = member.guild.roles.cache.find(b => b.id === "726428190012211216");
  var no_binary = member.guild.roles.cache.find(o => o.id === "824740975242117191");

  if (member.displayName.toLocaleLowerCase().includes("discord.gg")) {
    member.send("Ton pseudo ne respècte pas les règles du serveur, tu as donc été expulsé du serveur, reviens quand ton pseudo sera moins publicitaire !!!").catch(console.error).then(() => {
      member.kick()
    })
  }

  if (member.user.bot) {
    var bot = member.guild.roles.cache.find(bot => bot.id === "726428190012211219")
    var botcat = member.guild.roles.cache.find(botcat => botcat.id === "844992566789013575")
    member.roles.add(bot).then(()=> {
      member.roles.Add(botcat)
    })
  } else {

    var firstrole = member.guild.roles.cache.find(f => f.id === "726428189978787873")
    var things = member.guild.roles.cache.find(x => x.id === "844994305558577198");
    var grades = member.guild.roles.cache.find(gr => gr.id === "844991577650888778");
    var notifs = member.guild.roles.cache.find(n => n.id === "844991782596509726");
    var welcome_embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle(`Bienvenue ${member.user.username}`)
      .setThumbnail(member.user.displayAvatarURL())
      .addField(
        "Réagit avec une des réactions ci-dessous selon ce qu'il te correspond pour pouvoir accéder au reste du serveur :",
        `
        
👧 - Pour obtenir le rôle ${girls.toString()}
👦 - Pour obtenir le rôle ${boys.toString()}
🏳️‍🌈 - Pour obtenir le rôle ${no_binary.toString()}

Pour découvrir les différentes catégories disponibles sur le serveur, aller dans <#726428190427447365> pour voir quelques petites explications en plus.`
      )
      .setTimestamp()
      .setFooter(`nous te souhaitons que du bonheur !!`)
    member.roles.add(firstrole).then(()=> {
      member.roles.add(things).then(()=> {
        member.roles.add(grades).then(()=> {
          member.roles.add(notifs).then(()=> {
          })
        })
      })
    })
    client.channels.cache.get("726428190427447360").send(welcome_embed).then(async msg => { //salon bienvenue, catégorie acceuil
      await msg.react('👧');
      await msg.react('👦');
      await msg.react('🏳️‍🌈');
    })
  }

}