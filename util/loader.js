const fs = require("fs");

const loadCommands = (client, dir = "./commandes/") => {
  fs.readdirSync(dir).forEach(dirs => {
    const commands = fs.readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));
    for (const file of commands) {
      const getFileName = require(`../${dir}/${dirs}/${file}`);
      client.commands.set(getFileName.help.name, getFileName);
    };
  });
};

const loadEvents = (client, player, dir = "./événements/") => {
  fs.readdirSync(dir).forEach(dirs => {
    const events = fs.readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));
    for (const file of events) {
      const getFileName = require(`../${dir}/${dirs}/${file}`);
      const eventName = file.split(".")[0];
      client.on(eventName, getFileName.bind(null, client));
      player.on(eventName, getFileName.bind(null, client));
    };
  });
};

module.exports = {
  loadCommands,
  loadEvents,
}