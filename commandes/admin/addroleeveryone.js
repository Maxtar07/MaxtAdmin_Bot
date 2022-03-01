const { MESSAGES } = require('../../util/constantes');

module.exports.run = async (client, message, args) => {
    var things = message.guild.roles.cache.find(x => x.id === "844994305558577198");
    var grades = message.guild.roles.cache.find(gr => gr.id === "844991577650888778");
    var notifs = message.guild.roles.cache.find(n => n.id === "844991782596509726");
    var games = message.guild.roles.cache.find(x => x.id === "844990506744152074");

    message.guild.members.cache.forEach(member => {
        if (!member.roles.cache.find(x => x.id === "844994305558577198")) return member.roles.add(things)
    })

    message.guild.members.cache.forEach(member => {
        if (!member.roles.cache.find(x => x.id === "844991782596509726")) return member.roles.add(notifs)
    })

    message.guild.members.cache.forEach(member => {
        if (!member.roles.cache.find(x => x.id === "844991577650888778")) return member.roles.add(grades)
    })

    message.guild.members.cache.forEach(member => {
        if (member.roles.cache.find(x => x.id === "726428190012211214") || member.roles.cache.find(x => x.id === "726428190012211213")) return member.roles.add(games)
    })

}

module.exports.help = MESSAGES.COMMANDES.ADMIN.ADDROLEEVERYONE;