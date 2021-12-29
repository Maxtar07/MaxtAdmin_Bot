const Discord = require('discord.js');
const moment = require('moment');

const { loadCommands, loadEvents } = require("./util/loader")

const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
require("./util/functions")(client);
client.config = require("./config");
client.mongoose = require('./util/mongoose');
["commands", "cooldowns", "musicplayer"].forEach(x => client[x] = new Discord.Collection());




//musique

const { Player } = require('discord-player');

const player = new Player(client);
client.player = player;
client.emotes = require('./configmusic/emojis.json');
client.filters = client.config.filters



//loaders

loadCommands(client);
loadEvents(client, player);
client.mongoose.init();


client.login(client.config.TOKEN);

  //notif twitch

  const axios = require('axios');

  const clientid = "mon_client_id"
  const clientsecret = "mon_client_secret"
  const streamer = 'maxtar07'

  const db = require('./models/streams')

  let accessToken
  axios.post(`https://id.twitch.tv/oauth2/token?client_id=${clientid}&client_secret=${clientsecret}&grant_type=client_credentials`).then(response => {
    accessToken = response.data.access_token;
    //console.log(accessToken)
  })
    
  setInterval(() => {

    axios.get(`https://api.twitch.tv/helix/streams?user_login=${streamer}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Client-ID': `${clientid}`
      }
    }).then((r) => {
      if (!(r.data.data[0])){
        db.findOne({statusStream : "stream en cours..."}, async(err, data) => {
          if(err) throw err
          if(data) {
              await db.findOneAndDelete({statusStream: "stream en cours..."})
              await console.log("Pas en stream !")
          }else{
            return;
          }
        })
      }else{
        db.findOne({ statusStream: "stream en cours..."}, async(err, data) => {
          const rolenotif = client.guilds.resolve("726428189978787872").roles.resolve("756243894894854294")
          const maxtaravatar = client.guilds.resolve("726428189978787872").members.resolve("399136754130485248").user.displayAvatarURL()
          let imageUrl = r.data.data[0].thumbnail_url
          imageUrl = imageUrl.replace("{width}", "1280");
          imageUrl = imageUrl.replace("{height}", "720");
          let thumbnailBuster = (Date.now() / 1000).toFixed(0);
          imageUrl += `?t=${thumbnailBuster}`;
          if(err) throw err;
          if(!data) {
              const twitch_embed = new Discord.MessageEmbed()
              .setAuthor(`${r.data.data[0].user_name} est en live avec ${r.data.data[0].viewer_count} viewers`,`${maxtaravatar}`)
              .setColor('YELLOW')
              .setTitle(`${r.data.data[0].title}`)
              .setImage(imageUrl)
              .addFields(
                {
                  name: 'Stream', value: `${r.data.data[0].game_name}`, inline: true
                },
                {
                  name: '\u200b', value: `\u200b`, inline: true
                },
                {
                  name: 'Le Lien de la chaine', value: `[${streamer}](https://twitch.tv/${streamer})`, inline: true
                },
              )
              .setFooter(`Début du stream`)
              .setTimestamp(r.data.data[0].started_at)
              let notif = await client.channels.cache.get('757625738252779628').send(`${rolenotif}`, twitch_embed)
              data = new db({
                statusStream: "stream en cours...",
                content : [
                  {
                    notifId: notif.id
                  }
                ]
              })

          } else {
            const twitch_embed2 = new Discord.MessageEmbed()
            .setAuthor(`${r.data.data[0].user_name} est en live avec ${r.data.data[0].viewer_count} viewers`,`${maxtaravatar}`)
            .setColor('YELLOW')
            .setTitle(`${r.data.data[0].title}`)
            .setImage(imageUrl)
            .addFields(
              {
                name: 'Stream', value: `${r.data.data[0].game_name}`, inline: true
              },
              {
                name: '\u200b', value: `\u200b`, inline: true
              },
              {
                name: 'Le Lien de la chaine', value: `[${r.data.data[0].user_name}](https://twitch.tv/${streamer})`, inline: true
              },
            )
            .setFooter(`Début du stream`)
            .setTimestamp(r.data.data[0].started_at)
            const id = await data.content[0].notifId
            const notifedit = await client.channels.cache.get('757625738252779628').messages.fetch(id)
            notifedit.edit(`${rolenotif}`, twitch_embed2)
            return;
          }
          data.save()
        });
      }
    }).catch((err) => {console.log(err.stack)});

  }, 60000);















//twitch bot

const tmi = require('tmi.js');
const { response } = require('express');

const options = {
    options: {
        debug: true,
    },
    connection: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
        username: 'MaxtAdmin',
        password: 'mon_password',
    },
    channels: ['maxtar07'],
};

const twitchbot = new tmi.client(options);

const blocked_words = ['⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠛⢉⢉⠉⠉⠻⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⠟⠠⡰⣕⣗⣷⣧⣀⣅⠘⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⠃⣠⣳⣟⣿⣿⣷⣿⡿⣜⠄⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⡿⠁⠄⣳⢷⣿⣿⣿⣿⡿⣝⠖⠄⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⠃⠄⢢⡹⣿⢷⣯⢿⢷⡫⣗⠍⢰⣿⣿⣿⣿⣿ ⣿⣿⣿⡏⢀⢄⠤⣁⠋⠿⣗⣟⡯⡏⢎⠁⢸⣿⣿⣿⣿⣿ ⣿⣿⣿⠄⢔⢕⣯⣿⣿⡲⡤⡄⡤⠄⡀⢠⣿⣿⣿⣿⣿⣿ ⣿⣿⠇⠠⡳⣯⣿⣿⣾⢵⣫⢎⢎⠆⢀⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⠄⢨⣫⣿⣿⡿⣿⣻⢎⡗⡕⡅⢸⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⠄⢜⢾⣾⣿⣿⣟⣗⢯⡪⡳⡀⢸⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⠄⢸⢽⣿⣷⣿⣻⡮⡧⡳⡱⡁⢸⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⡄⢨⣻⣽⣿⣟⣿⣞⣗⡽⡸⡐⢸⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⡇⢀⢗⣿⣿⣿⣿⡿⣞⡵⡣⣊⢸⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⡀⡣⣗⣿⣿⣿⣿⣯⡯⡺⣼⠎⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣧⠐⡵⣻⣟⣯⣿⣷⣟⣝⢞⡿⢹⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⡆⢘⡺⣽⢿⣻⣿⣗⡷⣹⢩⢃⢿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣷⠄⠪⣯⣟⣿⢯⣿⣻⣜⢎⢆⠜⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⡆⠄⢣⣻⣽⣿⣿⣟⣾⡮⡺⡸⠸⣿⣿⣿⣿ ⣿⣿⡿⠛⠉⠁⠄⢕⡳⣽⡾⣿⢽⣯⡿⣮⢚⣅⠹⣿⣿⣿ ⡿⠋⠄⠄⠄⠄⢀⠒⠝⣞⢿⡿⣿⣽⢿⡽⣧⣳⡅⠌⠻⣿ ⠁⠄⠄⠄⠄⠄⠐⡐⠱⡱⣻⡻⣝⣮⣟⣿⣻⣟⣻⡺⣊','⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆ ⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿ ⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀ ⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ ⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛'];
const colors = ["SpringGreen", "Blue", "Chocolate", "Red", "Coral", "Firebrick", "OrangeRed", "SeaGreen", "Green", "HotPink"];

twitchbot.on('chat', onChatHandler);
twitchbot.on('connected', onConnectedHandler);
twitchbot.on('message', (channel, userstate, message, self) => {
  if (self) return;
  //if (userstate.username === BOT_USERNAME) return;
  //if (message.toLowerCase() === '!hello') {
  //  twitchbot.say(channel, `@${userstate.username}, hello!`);
  //}
  checkChat(channel, userstate, message);
});

twitchbot.connect();

function onChatHandler(target, context, msg, self) {
  if (self) { return; }
  
  if (msg.startsWith("!discord")){
    twitchbot.say(target, `Si tu veux rejoindre le discord officiel de la chaine pour discuter même si le stream est off : https://discord.gg/8epEQyE`);
  }
  if (msg.startsWith("!kgb")){
    twitchbot.say(target, `Voici le pdf de l'UHC : https://drive.google.com/file/d/1wCwK4W_5JP2iXYxgY4owjbEmtlBKHkdh/view?usp=sharing`);
  }
  if (msg.startsWith("!skyrp")){
    twitchbot.say(target, `serveur towny moderne avec entre-autre le plugin slimefun en 1.16.4 et +. IP : play.skyrp.eu || Discord : https://discord.gg/zebpQv6a9U || Site : https://skyrp.eu/`);
  }
  if (msg.startsWith("!craftard")){
    twitchbot.say(target, `Craftard est un serveur survie 1.16.5 basée sur l'évolution et centrée sur différents systèmes ainsi que des mécanismes pour rendre le jeu plus agréable. IP : 79.137.91.246 et IP Bedrock (à lier avec votre compte mojang) : 79.137.91.246:25575 -- Trailer et lien discord: https://www.youtube.com/watch?v=IB4lBeYtz5Q`);
  }
  if (msg.startsWith("!olivekub")){
    twitchbot.say(target, `Serveur privé whitelist pur vanilla en ultra hardcore, créer par le streamer et graphiste Olive || Pour retrouver toutes les chaines des participants : https://linktr.ee/oliv_kub`);
  }
  //if (msg.startsWith("!vocal")){
  //  twitchbot.say(target, `Je suis en vocal avec les singes de la commu de vartac !`);
  //}
  if (msg.startsWith("!cystone")){
    twitchbot.say(target, `Cystone est un serveur minecraft sur whitelist en 1.16.5 créer par le baizlagio sur un principe plutôt cool : reset la map tous les jour sauf sur une zone de 16 chunk au spawn`);
  }
  if (msg.startsWith("!honoris")){
    twitchbot.say(target, `Honoris est un serveur towny moddé. Vous pouvez rejoindre mon pays simplement en faisant votre candidature sur le discord du pays (Le brésil) : https://discord.gg/Y2r2TbrCd3.`);
    twitchbot.say(target, `Si vous voulez plus d'infos concernant le serveur, vous pouvez aller sur le site : https://www.honoris-mc.fr ou leur discord : https://discord.gg/UWNn2nNvvR`);
  }
}

function checkChat(channel, username, message) {
    let shouldSendMessage = false;
    //check message
    message = message.toLowerCase();
    shouldSendMessage = blocked_words.some(blockedWord => message.includes(blockedWord.toLowerCase()));
    //tell user
   // twitchbot.say(channel, `@${username.username} oopsie message deleted`);
    //delete message
    if (shouldSendMessage) {
      twitchbot.deletemessage(channel, username.id)
        .then((data) => {
          //nothing
        }).catch((err) => {
          //nothing
        });
        //twitchbot.say(channel, `@${username.username} oopsie message deleted`);
    }
}

function onConnectedHandler(addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
    //twitchbot.say('maxtar07', `connected to ${addr} and ${port}`);
    //twitchbot.action('maxtar07', 'est connecté !');
}