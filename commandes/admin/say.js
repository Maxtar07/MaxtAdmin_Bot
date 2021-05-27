const { MESSAGES } = require('../../util/constantes');

module.exports.run = (client, message, args) => {

  let saymessage;
  let saychannel = message.mentions.channels.first()

  if(saychannel){
    saymessage = args.slice(1).join(" ")
    if(saymessage){
      saychannel.send(saymessage)
    }
  }else{
    saymessage = args.join(" ")
    if(saymessage){
      message.channel.send(saymessage)
    }
  }

}

module.exports.help = MESSAGES.COMMANDES.ADMIN.SAY;