const { MessageEmbed, ReactionCollector } = require('discord.js');
const { MESSAGES } = require('../../util/constantes');

module.exports.run = async(client, message, args, messageReaction) => {

    let embedBeforeEdit = new MessageEmbed()
    .setDescription("-----")
    let msgEmbedForEditing = await message.channel.send(embedBeforeEdit)
    const msgwait = await message.channel.send("Veuillez patienter pendant l'ajout de toutes les réactions...");

    await Promise.all(['✏️','💬','🕵️','🔻','🔳','🕙','🖼️','🌐','🔵','↩️','↪️','📥','✅','📑'].map(r => msgwait.react(r)));
    await msgwait.edit(`:pencil2: Modifier le titre\n:speech_balloon: Modifier la description\n:detective: Modifier l'auteur\n:small_red_triangle_down: Modifier le footer\n:white_square_button: Modifier le thumbnail\n:clock10: Ajouter un timestamp\n:frame_photo: Modifier l'image\n:globe_with_meridians: Modifier l'url\n:blue_circle: Modifier la couleur\n:leftwards_arrow_with_hook: Ajouter un field\n:arrow_right_hook: Supprimer un field\n:inbox_tray: Copier un embed existant\n:white_check_mark: Envoyer l'embed\n:bookmark_tabs: Modifier un message du bot avec cet embed`)

    const filterReaction = (reaction, user) => user.id===message.author.id&&!user.bot;
    const filterMessage = (m) => m.author.id===message.author.id&&!m.author.bot;
    const collectionReaction = await new ReactionCollector(msgwait, filterReaction);
    collectionReaction.on('collect', async reaction => {
        reaction.users.remove(message.author);
        switch(reaction._emoji.name){
            case '✏️':
                const msgQuestionTitle = await message.channel.send('Quel titre souhaitez-vous mettre ?');
                const title = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                title.delete();
                msgQuestionTitle.delete();
                embedBeforeEdit.setTitle(title.content);
                msgEmbedForEditing.edit(embedBeforeEdit);
            break;
            case '💬':
                const msgQuestionDescription = await message.channel.send('Quelle description souhaitez-vous mettre ?');
                const description = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                description.delete();
                msgQuestionDescription.delete();
                embedBeforeEdit.setDescription(description.content);
                msgEmbedForEditing.edit(embedBeforeEdit);
            break;
            case '🕵️':
                const msgQuestionAuthor = await message.channel.send('Quel nom d\'auteur souhaitez-vous mettre ?');
                const author = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                author.delete();
                msgQuestionAuthor.delete();
                const msgQuestionIconAuthor = await message.channel.send('Quelle Icône souhaitez-vous mettre pour l\'auteur ?\nÉcrivez "rien" si vous ne souhaitez pas en mettre.');
                const iconauthor = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                iconauthor.delete();
                msgQuestionIconAuthor.delete();
                if(iconauthor.content.toLowerCase().includes("rien")){
                    embedBeforeEdit.setAuthor(author.content);
                    msgEmbedForEditing.edit(embedBeforeEdit);
                }else{
                    if(!iconauthor.content.includes('http')) return message.channel.send('Icône d\'auteur Incorrecte !\nVeuillez appuyer de nouveau sur la réaction et mettre une image issue d\'un lien http ou https...').then((error) => error.delete({timeout : 5000}))
                    embedBeforeEdit.setAuthor(author.content, iconauthor.content);
                    msgEmbedForEditing.edit(embedBeforeEdit);
                }
            break;
            case '🔻':
                const msgQuestionFooter = await message.channel.send('Que souhaitez-vous mettre dans le footer ?');
                const footer = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                footer.delete();
                msgQuestionFooter.delete();
                const msgQuestionIconFooter = await message.channel.send('Quelle Icône souhaitez-vous mettre pour le footer ?\nÉcrivez "rien" si vous ne souhaitez pas en mettre.');
                const iconfooter = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                msgQuestionIconFooter.delete()
                iconfooter.delete()
                if(iconfooter.content.toLowerCase().includes("rien")){
                    embedBeforeEdit.setFooter(footer.content);
                    msgEmbedForEditing.edit(embedBeforeEdit);
                }else{
                    if(!iconfooter.content.includes('http')) return message.channel.send('Icône de footer Incorrecte !\nVeuillez appuyer de nouveau sur la réaction et mettre une image issue d\'un lien http ou https...').then((error) => error.delete({timeout : 5000}))
                    embedBeforeEdit.setFooter(footer.content, iconfooter.content);
                    msgEmbedForEditing.edit(embedBeforeEdit);
                }
            break;
            case '🔳':
                const msgQuestionThumbnail = await message.channel.send('Quelle image souhaitez-vous mettre en thumbnail ?\nÉcrivez "rien" si vous souhaitez supprimer le thumbnail actuel.');
                const thumbnail = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                msgQuestionThumbnail.delete();
                thumbnail.delete();
                if(thumbnail.content.toLowerCase().includes("rien")){
                    delete embedBeforeEdit.thumbnail
                    msgEmbedForEditing.edit(embedBeforeEdit);
                }else{
                    if(!thumbnail.content.includes('http')) return message.channel.send('Thumbnail Incorrect !\nVeuillez appuyer de nouveau sur la réaction et mettre une image issue d\'un lien http ou https...').then((error) => error.delete({timeout : 5000}))
                    embedBeforeEdit.setThumbnail(thumbnail.content);
                    msgEmbedForEditing.edit(embedBeforeEdit);
                }
            break;
            case '🕙':
                embedBeforeEdit.setTimestamp();
                msgEmbedForEditing.edit(embedBeforeEdit);
            break;
            case '🖼️':
                const msgQuestionImage = await message.channel.send('Quelle Image souhaitez-vous mettre ?\nÉcrivez "rien" si vous souhaitez supprimer l\'image actuelle.');
                const image = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                msgQuestionImage.delete();
                image.delete();
                if(image.content.toLowerCase().includes("rien")){
                    delete embedBeforeEdit.image
                    msgEmbedForEditing.edit(embedBeforeEdit);
                }else{
                    if(!image.content.includes('http')) return message.channel.send('Image Incorrecte !\nVeuillez appuyer de nouveau sur la réaction et mettre une image issue d\'un lien http ou https...').then((error) => error.delete({timeout : 5000}))
                    embedBeforeEdit.setImage(image.content);
                    msgEmbedForEditing.edit(embedBeforeEdit);
                }
            break;
            case '🌐':
                const msgQuestionURL = await message.channel.send('Quelle URL souhaitez-vous mettre ?');
                const url = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                url.delete();
                msgQuestionURL.delete();
                embedBeforeEdit.setURL(url.content);
                msgEmbedForEditing.edit(embedBeforeEdit);
            break;
            case '🔵':
                const msgQuestionColor = await message.channel.send('De quelle couleur souhaitez-vous que votre embed soit ?\n__deux possibilités :__\n-#000000\nou\n-RED / YELLOW / etc...');
                const color = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                color.delete();
                msgQuestionColor.delete();
                embedBeforeEdit.setColor(color.content);
                msgEmbedForEditing.edit(embedBeforeEdit);
            break;
            case '↩️':
                const msgQuestionTitleField = await message.channel.send('Quel titre souhaitez-vous mettre pour votre field ?');
                const titlefield = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                titlefield.delete();
                msgQuestionTitleField.delete();
                const msgQuestionDescriptionField = await message.channel.send('Quelle description souhaitez-vous mettre pour votre field ?');
                const descriptionfield = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                descriptionfield.delete();
                msgQuestionDescriptionField.delete();
                embedBeforeEdit.addField(titlefield.content, descriptionfield.content);
                msgEmbedForEditing.edit(embedBeforeEdit);
            break;
            case '↪️':
                const msgQuestionField = await message.channel.send('Quel field souhaitez-vous supprimer ?\nMerci d\'écrire son titre.');
                const Field = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                Field.delete();
                msgQuestionField.delete();
                let indexField = '';
                embedBeforeEdit.fields.map(field => {
                    if(indexField !== '') return;
                    if(field.name === Field.content) indexField+=embedBeforeEdit.fields.indexOf(field);
                })
                if(indexField === '') return message.channel.send('Aucun field trouvé avec ce titre.').then((error) => error.delete({timeout : 5000}));
                delete embedBeforeEdit.fields[indexField];
                msgEmbedForEditing.edit(embedBeforeEdit);
            break;
            case '📥':
                const msgQuestionChannelName = await message.channel.send("Veuillez mentionner le salon dans lequel apparaît l'embed que vous souhaitez copier.\n__Exemple:__ #exemple")
                const messagechannelname = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                msgQuestionChannelName.delete();
                messagechannelname.delete();
                if(!messagechannelname.mentions.channels.first()) return message.channel.send("Veuillez **mentionner** le salon dans lequel apparaît l'embed que vous souhaitez copier.\n__Exemple:__ #exemple").then((error) => error.delete({timeout: 5000}));
                const channelname = messagechannelname.mentions.channels.first()
                const msgQuestionMessageID = await message.channel.send("Merci de renseigner l'id de l'embed que vous souhaitez copier.")
                const messageid = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                msgQuestionMessageID.delete()
                messageid.delete()
                if(!Number(messageid.content) || !message.guild.channels.cache.get(channelname.id).messages.fetch(messageid.content)) return message.channel.send("L'embed que vous souhaitez copier n'as pas été trouvé, veuillez réessayer.").then((error) => error.delete({timeout: 5000}));
                const embedcopied = await message.guild.channels.cache.get(channelname.id).messages.fetch(messageid.content);
                if(embedcopied.embeds.length === 0) return message.channel.send("Ce message n'est pas un embed, veuillez rentrer les informations d'un embed pour pouvoir le copier.").then((err) => err.delete({timeout: 5000}))
                let embedBeforeEdit2 = new MessageEmbed()
                embedBeforeEdit = embedBeforeEdit2
                if(embedcopied.embeds[0].title !== null) embedBeforeEdit.setTitle(embedcopied.embeds[0].title)
                if(embedcopied.embeds[0].description !== null) embedBeforeEdit.setDescription(embedcopied.embeds[0].description)
                if(embedcopied.embeds[0].author !== null) embedBeforeEdit.setAuthor(embedcopied.embeds[0].author.name, embedcopied.embeds[0].author.iconURL)
                if(embedcopied.embeds[0].footer !== null) embedBeforeEdit.setFooter(embedcopied.embeds[0].footer.text, embedcopied.embeds[0].footer.iconURL)
                if(embedcopied.embeds[0].thumbnail !== null) embedBeforeEdit.setThumbnail(embedcopied.embeds[0].thumbnail.url)
                if(embedcopied.embeds[0].timestamp !== null) embedBeforeEdit.setTimestamp()
                if(embedcopied.embeds[0].image !== null) embedBeforeEdit.setImage(embedcopied.embeds[0].image.url)
                if(embedcopied.embeds[0].url !== null) embedBeforeEdit.setURL(embedcopied.embeds[0].url)
                if(embedcopied.embeds[0].color !== null) embedBeforeEdit.setColor(embedcopied.embeds[0].color)
                if(embedcopied.embeds[0].fields !== []) embedBeforeEdit.addFields(embedcopied.embeds[0].fields)
                msgEmbedForEditing.edit(embedBeforeEdit)
            break;
            case '✅':
                const msgQuestionChannel = await message.channel.send('Où souhaitez-vous envoyer l\'embed ?\nMentionner le salon voulu.\n__Exemple:__ #exemple');
                const messagechannel = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                msgQuestionChannel.delete();
                messagechannel.delete()
                if(!messagechannel.mentions.channels.first()) return message.channel.send("Veuillez **mentionner** le salon dans lequel vous souhaitez envoyer votre embed.\n__Exemple:__ #exemple").then((error) => error.delete({timeout: 5000}));
                const channel = messagechannel.mentions.channels.first()
                channel.send(embedBeforeEdit)
            break;
            case '📑':
                const msgQuestionNameChannel = await message.channel.send("Dans quel salon se trouve le message du bot que vous souhaitez modifier avec l'embed que vous venez de créer ?\nMentionner le salon voulu.\n__Exemple:__ #exemple");
                const messagenamechannel = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                msgQuestionNameChannel.delete()
                messagenamechannel.delete();
                if(!messagenamechannel.mentions.channels.first()) return message.channel.send("Veuillez **mentionner** le salon dans lequel se trouve le message du bot que vous souhaitez modifier avec l'embed que vous venez de créer.\n__Exemple:__ #exemple").then((error) => error.delete({timeout: 5000}));
                const namechannel = messagenamechannel.mentions.channels.first();
                const msgQuestionIDMessage = await message.channel.send("Merci de renseigner l'id du message du bot que vous souhaitez modifier.")
                const idmessage = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                msgQuestionIDMessage.delete()
                idmessage.delete()
                if(!Number(idmessage.content) || !message.guild.channels.cache.get(namechannel.id).messages.fetch(idmessage.content)) return message.channel.send("Le message que vous souhaitez modifier n'as pas été trouvé, veuillez réessayer.").then((error) => error.delete({timeout: 5000}));
                const modifiedmessage = await message.guild.channels.cache.get(namechannel.id).messages.fetch(idmessage.content);
                const confirmmessage = await message.channel.send(":warning: Vous êtes sur le point de modifier un message du bot !\n:one: Juste ajouter l'embed sous le message\n:two: Complètement supprimer le message actuel et le remplacer par l'embed.")
                await Promise.all(['1️⃣','2️⃣'].map(r => confirmmessage.react(r)));
                const collectionReaction2 = await new ReactionCollector(confirmmessage, filterReaction);
                collectionReaction2.on('collect', async reaction2 => {
                    reaction2.users.remove(message.author);
                    switch(reaction2._emoji.name){
                        case '1️⃣':
                            modifiedmessage.edit(embedBeforeEdit)
                            confirmmessage.delete()
                        break;
                        case '2️⃣':
                            modifiedmessage.edit("",embedBeforeEdit)
                            confirmmessage.delete()
                        break;
                    }
                });
            break;
        }
    })
}

module.exports.help = MESSAGES.COMMANDES.MODÉRATION.EMBEDBUILDER;