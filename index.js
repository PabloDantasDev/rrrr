const { UserAgent,
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
processTime,
processTicksAndRejections,
WA_MESSAGE_STUB_TYPES,
waChatKey,
mentionedJid,
apikey,
WA_DEAFULT_EPHEMERAL,
ECONNABORTED,
DataView,
WAMessage,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
TypedArray,
WAContactMessage,
WAContactsArrayMessage,
WATextMessage,
WAMessageContent,
relayWAMessage,
WANode,
WAFlag,
DisconectReason,
WAContextInfo,
WAMetric,
ChatModification,
MessageTypeProto,
prepareMessageFromContent,
device,
proto,
WAGroupInviteMessage,
MimetypeMap,
MediaPathMap,
MediaConnInfo,
URL_REGEX, WA_MESSAGE_STATUS_TYPE,
WAMessageProto,
BaileysError,
WAUrlInfo,
WAMediaUpload,
Browser } = require('@adiwajshing/baileys')

const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')

prefix = "/";


async function starts() {
const client = new WAConnection()
client.logger.level = 'warn'
console.log(banner.string)
client.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color('SCANEAR QR CODE'))
})

fs.existsSync('./Nexos.json') && client.loadAuthInfo('./Nexos.json')
client.on('connecting', () => {
start('2', 'Connecting...')
})
client.on('open', () => {
success('2', 'Connected')
})
await client.connect({timeoutMs: 30*1000})
fs.writeFileSync('./Nexos.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

const solicit = (sender) => {
_pedido = JSON.parse(fs.readFileSync("./lib/dados.json"))
let status = false
Object.keys(_pedido).forEach((i) => {
if (_pedido[i].User === sender) {
status = true
}
})
return status
}

client.on('chat-update', async (mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
if (!mek.key.fromMe && mek.key.fromMe) return
global.prefix
global.blocked
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const type = Object.keys(mek.message)[0]
const {
text,
extendedText,
contact,
location,
liveLocation,
image,
video,
sticker,
document,
audio,
product
} = MessageType

const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (mek.message[type].fileSha256.toString('base64') !== null && mek.message[type].fileSha256.toString('base64') !== undefined) ? mek.message[type].fileSha256.toString('base64') : ""
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const sender = mek.key.fromMe ? client.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const q = args.join(" ")
const k = args[0]
const isCmd = body.startsWith(prefix)
const conts = mek.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '')}
const pushname = mek.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
const isConfirm = solicit(sender)
const senderNumber = sender.split("@")[0]

const botNumber = client.user.jid
const ownerNumber = ["559984620740@s.whatsapp.net"]
const isOwner = ownerNumber.includes(sender)
const isGroup = from.endsWith('@g.us')
const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false

const r = (teks) => { client.sendMessage(from, teks, text, {quoted:mek}) }

const getCredito = (sender) => {
_pedido = JSON.parse(fs.readFileSync("./lib/dados.json"))
Object.keys(_pedido).forEach((i) => {
if (_pedido[i].User === sender) {
position = i
}
})
if (position !== false) {
return _pedido[position].Credito
}
}

const addCredit = (k, amount) => {
_pedido = JSON.parse(fs.readFileSync("./lib/dados.json"))
let position = false
Object.keys(_pedido).forEach((i) => {
if (_pedido[i].User === args[0]) {
position = i
}
})
if (position !== false) {
_pedido[position].Credito += amount
fs.writeFileSync("./lib/dados.json", JSON.stringify(_pedido))
}
}

colors = ['red','white','black','blue','yellow','green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'De', color(pushname))
if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'De', color(pushname))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'De', color(pushname), 'No Grupo', color(groupName))
if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'De', color(pushname), 'No Grupo', color(groupName))

switch(command) {
	
case "comprar":
if (isConfirm) {
buttons = [{buttonId: `${prefix}exists ${args[0]}`, buttonText:{displayText: `Solicitar ${args.join(" ")}$`},type:1}]
buttonsMessage = {
contentText: `\`\`\`[${pushname}] Finalize seu pedido apertando no botão abaixo\nRetornaremos assim que possivel.\nCaso o botão não apareça digite /finalizar +Valor R$ Solicitado\`\`\``,
buttons: buttons,
headerType: 1
}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek, contextInfo: {mentionedJid: [sender]}})
client.relayWAMessage(prep)
}
if (!isConfirm) {
buttons = [{buttonId: `${prefix}finalizar ${args[0]}`, buttonText:{displayText: `Solicitar ${args.join(" ")}$`},type:1}]
buttonsMessage = {
contentText: `\`\`\`[${pushname}] Finalize seu pedido apertando no botão abaixo\nRetornaremos assim que possivel.\nCaso o botão não apareça digite /finalizar +Valor R$ Solicitado\`\`\``,
buttons: buttons,
headerType: 1
}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek, contextInfo: {mentionedJid: [sender]}})
client.relayWAMessage(prep)
}
break

case "finalizar":
_pedido = JSON.parse(fs.readFileSync("./lib/dados.json"))
_pedido.push({ User: sender, Name: pushname, Credito: 0, Hora: time, Data: date })
fs.writeFileSync("./lib/dados.json", JSON.stringify(_pedido))
client.sendMessage('5598970194604@s.whatsapp.net', `\`\`\`Solicitação de: ${pushname}\n\nContato: wa.me/${senderNumber}\nValor solicitado: ${args[0]}$\`\`\``, text, { quoted: mek })
client.sendMessage('5598970194604@s.whatsapp.net', `\`\`\`Para Adicionar o valor solicitado: ${args[0]}$\nCopie está mensagem\n\n/adicionar ${sender} ${args[0]}\n\nPara Retirar\n\n/retirar ${sender} ${args[0]}\`\`\``, text, { quoted: mek })
r("Compra Solicitada\n\nPix:\n\nEnviar comprovante de pagamento para: wa.me/5598970194604")
break

case "exists":
client.sendMessage('5598970194604@s.whatsapp.net', `\`\`\`Solicitação de: ${pushname}\n\nContato: wa.me/${senderNumber}\nValor solicitado: ${args[0]}$\`\`\``, text, { quoted: mek })
client.sendMessage('5598970194604@s.whatsapp.net', `\`\`\`Para Adicionar o valor solicitado: ${args[0]}$\nCopie está mensagem\n\n/adicionar ${senderNumber} ${args[0]}\n\nPara Retirar\n\n/retirar ${sender} ${args[0]}\`\`\``, text, { quoted: mek })
r("Compra Solicitada\n\nPix:\n\nEnviar comprovante de pagamento para: wa.me/5598970194604")
break

case "retirar":
if (!isOwner) return r("Acesso negado")
addCredit((args[0]), Number(-args[1]))
B = args[0]
client.sendMessage(B, `Foi Retirado ${args[1]}$ do Seu saldo. Saldo Atual é de: ${getCredito(args[0])}$. Para solicitar um plano digite /solicitar +Plano`, text, { quoted: mek })
r(`Realizado com sucesso. Valor Retirado: ${args[1]}`)
break

case "adicionar":
if (!isOwner) return r("Acesso negado")
addCredit((args[0]), Number(+args[1]))
B = args[0]
client.sendMessage(B, `Pedido aceito. Seu saldo Atual é de: ${getCredito(args[0])}$. Para solicitar um plano digite /solicitar +Plano`, text, { quoted: mek })
r(`Realizado com sucesso. Valor Adicionado: ${args[1]}`)
break

case "solicitar":
client.sendMessage('5598970194604@s.whatsapp.net', `${pushname}\nwa.me/${senderNumber}\n\nSolicitou: ${args.join(" ")}`, text, {quoted: mek})
r("Solicitação enviada aguarde nosso retorno...")
break

case "saldo":
client.sendMessage(from, `Seu saldo Atual é de: ${getCredito(sender)}$`, text, { quoted: mek })
break

case "puxar":
if (!isOwner) return r("Acesso negado")
client.sendMessage(from, `Saldo Atual é de: ${getCredito(args[0])}$`, text, { quoted: mek })
break

case "menu":
    const botao_menu = WAMessageProto.Message.fromObject({
        listMessage: WAMessageProto.ListMessage.fromObject({
        title: `Olá ${pushname}.`,
        buttonText: "VER LISTA",
        buttonText: "VER LISTA",
        description: `Olá ${pushname} Clique no botão a baixo e Veja nossa lista de produtos`,
        listType: 1,
        "sections": [{
        "title": "INTERNET ILIMITA",
        "rows": [{
        "title": `INTERNET ILIMITA`,
        "rowId": `${prefix}x`},
        ]},
        // Separados por tags
        { "title": "PAINEL DUALITY",
        "rows": [{
        "title" : `PAINEL DUALITY`,
        "rowId": `${prefix}y`},
        ]},
        // Separados por tags
        { "title": "APLICATIVOS PREMIUM",
        "rows": [{
        "title" : `APLICATIVOS PREMIUM`,
        "rowId": `${prefix}z`},
        ]},
        // Separados por tags
        { "title": "CANAIS FECHADOS",
        "rows": [{
        "title" : `CANAIS FECHADOS`,
        "rowId": `${prefix}w`},
        ]},
        // Separados por tags
        { "title": "COMPRAR",
        "rows": [{
        "title" : "COMPRAR",
        "rowId": `${prefix}k`},
        ]}
]
})
})
let preparedantis = await client.prepareMessageFromContent(from, botao_menu, {quoted: mek});
client.relayWAMessage(preparedantis, {waitForAck: true})
break

case "x":
A = `\`\`\`TENHA INTERNET ILIMITADA ATRAVÉS DE APLICATIVO 🌐

EM QUALQUER LUGAR RODANDO TUDO POR APENAS 25$ REAIS POR MÊS 📆

CHEGA DE GASTAR COM CRÉDITO, CHEGA DE GASTAR COM PLANOS

CHAME AGORA

🔰 OPERADORAS


📱 OPERADORA VIVO,CLARO, TIM e OI

✅ ACESSANDO TUDO 

🎮 Jogos
🍿 Netflix
📺 YouTube 
📱Redes sociais
✅ E tudo Mais...

🚀 ÓTIMOS VALORES!

🔥 TESTE GRÁTIS DE 1 HORA🕑
Whats wa.me/5598970194604\`\`\``
r(A)
break

case "y":
A = `\`\`\`Um dos melhores painéis de consulta DUALITY   BUSCAS
Com  37 bancos de Dados diferentes
cpf,rg,placa,nome,cnh,score,dados bancários,cnpj, localização por cep, telefone, e-mail...API para Bot's somente com: wa.me/559870194604 



Link do painel para análise: https://dualitybuscas.com/\`\`\``
r(A)
break

case "z":
A =`\`\`\`🌀 Aplicativos Premium 🌀

🎞 FILMES 🎥
Netflix - R$8 💰 (Tela)
Netflix - R$25 💰(Conta)
GloboPlay+Canais - R$10 💰
Hbo Max - R$10 💰
DirectTV GO + Ex - R$25 💰
Telecine - R$10 💰
Disney+ - R$10 💰
Star+ - R$10 💰
Amazon - R$5 💰
Youtube Premium Indi - R$7 💰
Youtube Premium Fa - R$11💰
Uol+ - R$5 💰

⚠️ Os apps que não coloquei eu crio, só me chamar! ⚠️

🎀 APPS ESTUDOS E MAIS 🎀
Duolingo Premium - R$5 💰
LingQ Premium - R$10 (anual) 💰
Descomplica - R$4 💰
Brainly Premium - R$10 (anual)💰
SymboLab - R$5 💰
Photomath - R5 💰
Busu Premium - R$5 💰
English Live - R$15 💰
Cambly - R$15 💰
Babbel - R$15 💰
⚠️ Os que não coloquei só me chamar que eu crio! ⚠️


🔊 MUSICAS 🔊
Spotify Familia - R$10 💰
Deezer - R$8 💰
Amazon Music - R$5 💰
Spotify Individual - R$5 💰
Youtube Music - R$8 💰
⚠️ Os que não coloquei só me chamar que eu crio! ⚠️

🔞 ADULTOS 🔞
AmoPornoBR - R$10 💰
Tufos - R$10 💰
Camera Caseira - R$10 💰
Brasileirinhas - R$13 💰
Sexy Hot - R$10 💰                                                                                                                                                                   @calebe_saraiva wa.me/5598970194604\`\`\``
r(A)
break

case "w":
A = `\`\`\`IPTV É TELEVISÃO PELA INTERNET

IPTV E P2P


🔥MAIS DE 70 MIL CONTEUDO POR APENAS
15 REAIS MENSAIS - TESTE GRÁTIS..🔥
Incluindo séries e filmes lançamentos...
TESTE GRÁTIS....
▶️SMART TV ANDROID
▶️TV BOX
▶️TABLET
▶️SMARTPHONE
==========================
📍 BASTA BAIXAR O APP
📍 SEM ANTENAS
📍 SEM FIDELIDADE
📍 CANAIS SD, HD E FULL HD
📍 FILMES,SÉRIES E SHOWS
📍 SEM FIDELIDADE
==========================
📺 GLOBO
💻 SBT
🖥 TELECINE
📲 HBO
📺 BRASILEIRÃO
💻 PREMIERE CARIOCA E PAULISTA
🖥 FOX ESPORTE
📲 SPORT TV 
💻 COMBATE
🖥 CANAIS ADULTOS OPCIONAL
📲 CARTOON
📺 DISCOVERY
💻 GNT
🖥 FOOD NETWORK
📲 VIVA
📺 ENTRE OUTROS
==========================
TUDO ISSO POR APENAS R$25,00 MENSAL ✔️✔️⏳👇

SÓ CHAMA👉

Whatsapp: wa.me/98970194604\`\`\``
r(A)
break

case "k":
A = `\`\`\`Internet ilimitada - 25 💰
Netflix - R$8 💰 (Tela)
Netflix - R$25 💰(Conta)
GloboPlay+Canais - R$10 💰
Hbo Max - R$10 💰
DirectTV GO + Ex - R$25 💰
Telecine - R$10 💰
Disney+ - R$10 💰
Star+ - R$10 💰
Amazon - R$5 💰
Youtube Premium Indi - R$7 💰
Youtube Premium Fa - R$11💰
Uol+ - R$5 💰
Duolingo Premium - R$5 💰
LingQ Premium - R$10 (anual) 💰
Descomplica - R$4 💰
Brainly Premium - R$10 (anual)💰
SymboLab - R$5 💰
Photomath - R5 💰
Busu Premium - R$5 💰
English Live - R$15 💰
Cambly - R$15 💰
Babbel - R$15 💰
Spotify Familia - R$10 💰
Deezer - R$8 💰
Amazon Music - R$5 💰
Spotify Individual - R$5 💰
Youtube Music - R$8 💰
AmoPornoBR - R$10 💰
Tufos - R$10 💰
Camera Caseira - R$10 💰
Brasileirinhas - R$13 💰
Sexy Hot - R$10 💰         
Globo - R$25 💰
SBT - R$25 💰
Telecine - R$25 💰
HBO - R$25 💰
Brasileirão - R$25 💰
Premiere CARIOCA E PAULISTA - R$25 💰
Fox Esporte - R$25 💰
Sport TV  - R$25 💰
Combate - R$25 💰
Canais Adultos - R$25 💰
Cartoon  R$25 💰
Discovery - R$25 💰
GNT - R$25 💰
Food NetWork - R$25 💰
VIVA - R$25 💰
Entre Outros...

Para comprar algum desses digite /comprar +Valor R$
aguarde nossa confirmação. logo apos digite
/solicitar +Pacote

ex: /comprar 25
/solicitar telecine\`\`\``
r(A)
break

default:
if (isGroup && budy != undefined) {
console.log(budy)
} else {
return
}
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
})
}
starts()