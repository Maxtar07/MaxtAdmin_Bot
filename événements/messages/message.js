const Discord = require("discord.js");
const moment = require('moment');
moment.locale('fr');

module.exports = async (client, message) => {

  if (message.channel.type === "dm") return client.emit("directMessage", message);

  let logchannel = message.guild.channels.cache.find(c => c.id == "726428190024925212")

  const settings = await client.getGuild(message.guild);
  const dbUser = await client.getUser(message.member);

  //système d'xp
  if (!dbUser) await client.createUser({
    guildID: message.member.guild.id,
    guildName: message.member.guild.name,
    userID: message.member.id,
    userName: message.member.user.tag,
  });

  const expCd = Math.floor(Math.random() * 19) + 1;
  const expToAdd = Math.floor(Math.random() * 25) + 10;

  if (expCd >= 8 && expCd <= 12) {
    await client.addExp(client, message.member, expToAdd);
  };

  const userLevel = Math.floor(0.15 * Math.sqrt(dbUser.experience));

  if (dbUser.level < userLevel) {
    const levelupembed = new Discord.MessageEmbed()
    .setAuthor("⏫ Niveau supérieur !", message.author.avatarURL())
    .setDescription(`${message.author.username} viens de passer niveau ***${userLevel}*** !`)
    .setColor('WHITE')
    message.channel.send(levelupembed)
    client.updateUser(message.member, { level: userLevel });
  }


  //anti-mention de maxtar + warn du membre

  if(message.content.toLocaleLowerCase().includes('399136754130485248')){
    if(message.member.roles.cache.find(m => m.id === "738812943613034566") || message.member.roles.cache.find(b => b.id === "726428190012211219")){
      const rien = 'rien'
    }else{
      if (message.channel.id === '735813289488941076'){
        message.channel.send(`/warn ${message.member.user} En effectuant cette commande tu mentionne le BOSS.`)
      }else{
        message.delete({ timeout: 0 }).then(() => {
          message.channel.send(`/warn ${message.member.user} Attention ! Ne pas mentionner le BOSS SVP !!`)
        })
      }
    }
  }


  //message d'aide à la mention du bot

  if(!message.content.startsWith('/') && message.content.toLocaleLowerCase().includes('478597077723643905')){
    if (message.author.bot) return
    message.channel.send("Pour avoir toutes les commandes disponibles avec le bot rendez-vous dans <#735813289488941076> et faites la commande /help").then((message) => {
      message.delete({ timeout: 20000 });
    })
  }


  //antipub discord
  if ((!(message.channel.id === '726428195187851321' ||
    message.channel.id === '726428195636903966' ||
    message.channel.id === '726428195636903968' ||
    message.channel.id === '726428195636903969' ||
    message.channel.id === '741061694909972510' ||
    message.channel.id === '726428195636903970' ||
    message.member.roles.cache.find(m => m.id === "726428190024925208"))) && (message.content.toLocaleLowerCase().includes('discord.gg'))) {
      if(!logchannel) return
      logchannel.send(`${message.member.user.tag} à mis une pub de serveur discord dans le salon ${message.channel.name}`);
      message.delete({ timeout: 0 }).then(() => {
        message.channel.send(':x: Attention, les pubs pour discord c\'est pas ici !').then((message) => {
          message.delete({ timeout: 5000 });
          
        })
      })
    }

  //antipub youtube
  if ((!(message.channel.id === '726428195636903971' ||
    message.member.roles.cache.find(m => m.id === "726428190024925208"))) && (message.content.toLocaleLowerCase().includes('youtube.com/channel'))) {
      if(!logchannel) return
      logchannel.send(`${message.member.user.tag} à mis une pub de chaine YouTube dans le salon ${message.channel.name}`);
      message.delete({ timeout: 0 }).then(() => {
        message.channel.send(':x: Attention, les pubs pour youtube c\'est pas ici !').then((message) => {
          message.delete({ timeout: 5000 });
        })
      })
  }
  //antipub twitch
  if ((!(message.channel.id === '726428195636903972' ||
    message.member.roles.cache.find(m => m.id === "726428190024925208"))) && (message.content.toLocaleLowerCase().includes('twitch.tv'))) {
      if(!logchannel) return
      logchannel.send(`${message.member.user.tag} à mis une pub de chaine twitch dans le salon ${message.channel.name}`);
      message.delete({ timeout: 0 }).then(() => {
        message.channel.send(':x: Attention, les pubs pour twitch c\'est pas ici !').then((message) => {
          message.delete({ timeout: 5000 });
        })
      })
  }

  //ajouter membre à un ticket
  if(message.channel.name.startsWith('ticket-')){
    const user = message.mentions.users.first();
    if(!user){
      return
    }else{
      message.channel.updateOverwrite(user, {
        'VIEW_CHANNEL': true,
        'SEND_MESSAGES': true,
        'READ_MESSAGE_HISTORY': true
      })
    }
  }


  //début des commandes
  if (!message.content.startsWith(settings.prefix)) return;      //if (!message.content.startsWith(settings.prefix) || message.author.bot) return;

  const args = message.content.slice(settings.prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const user = message.mentions.users.first();

  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
  if (!command) return;


  //définition des perms pour chaque commande

  if (command.help.admin && !message.member.hasPermission('ADMINISTRATOR')) {
    message.delete()
    return message.reply("tu n'as pas les permissions pour utiliser cette commande !");
  }

  if (command.help.modo && !message.member.roles.cache.find(x => x.id === "738812943613034566")) {
    message.delete()
    return message.reply("tu n'as pas les permissions pour utiliser cette commande !");
  }

  if (command.help.ban && !message.member.hasPermission('BAN_MEMBERS')) {
    message.delete()
    return message.reply("tu n'as pas les permissions pour utiliser cette commande !");
  }

  if (command.help.mute && !message.member.hasPermission('MUTE_MEMBERS')) {
    message.delete()
    return message.reply("tu n'as pas les permissions pour utiliser cette commande !");
  }

  if (command.help.kick && !message.member.hasPermission('KICK_MEMBERS')) {
    message.delete()
    return message.reply("tu n'as pas les permissions pour utiliser cette commande !");
  }

  if (command.help.managemessages && !message.member.hasPermission('MANAGE_MESSAGES')) {
    message.delete()
    return message.reply("tu n'as pas les permissions pour utiliser cette commande !");
  }

  if (command.help.dj && !message.member.roles.cache.find(x => x.id === "827181449551544371")) {
    message.delete()
    return message.reply("Tu dois être DJ pour pouvoir utiliser cette commande !");
  }

  if (command.help.args && !args.length) {
    message.delete()
    let noArgsReply = `Mauvais usage de la commande ${message.author}!`;
    if (command.help.usage) noArgsReply += `\nVoici comment utiliser la commande: \`${settings.prefix}${command.help.name} ${command.help.usage}\``
    return message.channel.send(noArgsReply)
  }

  if (command.help.isUserAdmin && !user) {
    message.reply('il faut mentionner un membre du serveur')
  }else{
    if (command.help.isUserAdmin && message.guild.member(user).hasPermission('ADMINISTRATOR')) {
      message.delete()
      return message.reply("Tu ne peux pas utiliser cette commande sur ce membre !");
    }
  }

  if (command.help.isUserModo && !user) {
    message.reply('il faut mentionner un membre du serveur')
  }else{
    if (command.help.isUserModo && message.guild.member(user).roles.cache.find(x => x.id === "738812943613034566") && message.member.roles.cache.find(x => x.id === "738812943613034566")) return message.reply("Tu ne peux pas utiliser cette commande sur un membre du même rang que toi !");
  }

  if (command.help.command && (!(message.channel.id === '735813289488941076' || message.member.roles.cache.find(x => x.id === "738812943613034566")))) {
    message.delete()
    return message.reply(`Pour les commandes c'est ici : <#735813289488941076>`).then((message) => {
      message.delete({ timeout: 5000 });
    })
  }

  if (command.help.musiccommand && (!(message.channel.id === '726428192403095625' || message.member.roles.cache.find(x => x.id === "738812943613034566")))) {
    message.delete()
    return message.reply(`Pour les commandes de musique c'est ici : <#726428192403095625>`).then((message) => {
      message.delete({ timeout: 5000 });
    })
  }

  if (command.help.pollcommand && (!(message.channel.id === '735813289488941076' || message.channel.id === '796397401384419349' || message.member.roles.cache.find(x => x.id === "738812943613034566")))) {
    message.delete()
    return message.reply(`Pour faire un sondage c'est ici : <#735813289488941076> ou là : <#796397401384419349>`).then((message) => {
      message.delete({ timeout: 5000 });
    })
  }

  if (command.help.command || command.help.musiccommand || command.help.pollcommand) {
    message.delete()
  }

  if (!client.cooldowns.has(command.help.name)) {
    client.cooldowns.set(command.help.name, new Discord.Collection());
  }

  const timeNow = Date.now();
  const tStamps = client.cooldowns.get(command.help.name);
  let cdAmount
  if(message.member.roles.cache.find(x => x.id === "738812943613034566")){
    cdAmount = 0
  }else{
    cdAmount = (command.help.cooldown) * 1000;
  }
  

  if (tStamps.has(message.author.id)) {
    const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;
    if (timeNow < cdExpirationTime) {
      timeLeft = (cdExpirationTime - timeNow) / 1000;
      if(timeLeft.toFixed(0) >= 2){
        return message.reply(`merci d'attendre ${timeLeft.toFixed(0)} secondes avant de ré-utiliser la commande \`${command.help.name}\`.`);
      }else{
        return message.reply(`merci d'attendre ${timeLeft.toFixed(0)} seconde avant de ré-utiliser la commande \`${command.help.name}\`.`);
      }
    }
  }
  tStamps.set(message.author.id, timeNow);
  setTimeout(() => tStamps.delete(message.author.id), cdAmount);

  command.run(client, message, args, settings, dbUser, moment);

}