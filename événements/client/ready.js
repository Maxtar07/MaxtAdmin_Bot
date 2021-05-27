const Discord = require("discord.js");

module.exports = async (client) => {

  console.log(`connecté en tant que ${client.user.tag}!`)
  await client.channels.cache.get('726428190024925212').bulkDelete(1);
  await client.channels.cache.get('726428190024925212').send('Je suis prêt');

  let activities = ['MENTIONNEZ-MOI', 'POUR PLUS D\'INFOS', '@MaxtAdmin'], i = 0
  setInterval(() => client.user.setPresence({ activity: { name: `${activities[i++ % activities.length]}`, type: 'STREAMING', url: "https://www.twitch.tv/maxtar07" }, status: 'online' }), 1500);

}