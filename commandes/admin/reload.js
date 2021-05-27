const { MESSAGES } = require('../../util/constantes');

module.exports.run = async (client, message, args) => {
  await client.channels.cache.get('726428190024925212').send('Redémarrage en cours...');
  process.exit();

};

module.exports.help = MESSAGES.COMMANDES.ADMIN.RELOAD;