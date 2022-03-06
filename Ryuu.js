/*
 * Selamat di Gunakan🗿☕
 * instagram me? : @RyuukaBotz8
 * Jangan Lupa Kasih Creator nya om🗿☕
 * Note Dari Saya Jika Reupload Izin Ke Creator Dlu Atau Tidak Kasih Credit + Link Video nya... 
*/
const
{
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()

//Setting
const setting = JSON.parse(fs.readFileSync('./setting.json'))

//LIB
const { fetchJosn, kyun, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { uploadImages } = require('./lib/uploadimage')
const { pinterest } = require('./lib/pinterest') 
const { mediafireDl } = require('./lib/mediafire.js')
const { sleep } = require('./lib/myfunc')
const Exif = require('./lib/exif');
const exif = new Exif();
//Database
const _welcom = JSON.parse(fs.readFileSync('./database/welcome.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const _user = JSON.parse(fs.readFileSync('./database/user.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json')) 

//Database Game
const tebakgambar = JSON.parse(fs.readFileSync('./database/game/tebakgambar.json'))
const tebakimia = JSON.parse(fs.readFileSync('./database/game/tebakimia.json'))
const caklontong = JSON.parse(fs.readFileSync('./database/game/caklontong.json'))
const tebakbendera = JSON.parse(fs.readFileSync('./database/game/tebakbendera.json'))
const tebakata = JSON.parse(fs.readFileSync('./database/game/tebakata.json'))
const tebaklirik = JSON.parse(fs.readFileSync('./database/game/tebaklirik.json'))
const tebakjenaka = JSON.parse(fs.readFileSync('./database/game/tebakjenaka.json'))

//Database & Lib By Febri
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance} = require("./lib/limit");
const { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require("./lib/rpgfunction");
const { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction");

const event = JSON.parse(fs.readFileSync('./lib/data/event.json'))
const limit = JSON.parse(fs.readFileSync('./lib/data/limit.json'));
const balance = JSON.parse(fs.readFileSync('./lib/data/balance.json'));
const _RPG = JSON.parse(fs.readFileSync('./lib/rpg/inventori.json'))
const _level = JSON.parse(fs.readFileSync('./lib/rpg/leveluser.json'))
const _petualang = JSON.parse(fs.readFileSync('./lib/rpg/inventori.json'))
const _healt = JSON.parse(fs.readFileSync('./lib/rpg/healt.json'))

//fotonya
const fakeimage = fs.readFileSync ('./media/Ryuu.jpg')

//Setting Owner
ownernumber = setting.OwnerNumber
ownernumber2 = setting.OwnerNumber2
botname = setting.BotName
ownername = setting.OwnerName
ownername2 = setting.OwnerName2
fake = setting.Fake
limitCount = setting.limitCount

//Setting Donasi & Pay
gopay = setting.Gopay
dana = setting.Dana
ovo = setting.Ovo
pulsa = setting.Pulsa

//Tictactoe
ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]

//Apikey
ryukey = setting.RyuKey
alphakey = setting.AlphaKey

//Auto Bio & Dll
healtawal = 100
autobio = true
public = true
let blocked = []
let public_mode = setting. public_mode

//Sticker CMD
const addCmd = (id, command) => {
const obj = { id: id, chats: command }
scommand.push(obj)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
let position = null
Object.keys(scommand).forEach((i) => {
if (scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return position
}
}

const getCmd = (id) => {
let position = null
Object.keys(scommand).forEach((i) => {
if (scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return scommand[position].chats
}
}
//Module Export
module.exports = Ryuu = async (Ryuu, mek, _welkom) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
global.blocked
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
const type = Object.keys(mek.message)[0]
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByReply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const arg = budy.slice(command.length + 2, budy.length)
const c = args.join(' ')
const isCmd = body.startsWith(prefix)
const q = args.join(' ')
const Verived = "0@s.whatsapp.net"
const txt = mek.message.conversation
const botNumber = Ryuu.user.jid
const ownerNumber = [`${ownernumber}@s.whatsapp.net`, `${ownernumber2}@s.whatsapp.net`]
const isGroup = from.endsWith('@g.us')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
let sender = isGroup ? mek.participant : mek.key.remoteJid
let senderr = mek.key.fromMe ? Ryuu.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
const groupMetadata = isGroup ? await Ryuu.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const senderNumber = sender.split("@")[0]
const hour_now = moment().format('HH:mm:ss')
const conts = mek.key.fromMe ? Ryuu.user.jid : Ryuu.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? Ryuu.user.name : conts.notify || conts.vname || conts.name || '-'
const processsTime = (timestamp, now) => {
return moment.duration(now - moment(timestamp * 1000)).asSeconds()}

//Function TicTacToe
idttt = []
players1 = []
players2 = []
gilir = []
for (let t of ky_ttt){
idttt.push(t.id)
players1.push(t.player1)
players2.push(t.player2)
gilir.push(t.gilir)
}
const isTTT = isGroup ? idttt.includes(from) : false
isPlayer1 = isGroup ? players1.includes(sender) : false
isPlayer2 = isGroup ? players2.includes(sender) : false

const isPetualang = checkPetualangUser(sender)
const isBanned = ban.includes(sender)
const isEventon = isGroup ? event.includes(from) : false
const isPrem = premium.includes(sender)
const isAntiLink = isGroup ? antilink.includes(from) : false
const isWelkom = isGroup ? _welkom.includes(from) : false 
const isOwner = ownerNumber.includes(sender)
const isMybot = isOwner || mek.key.fromMe
const itsMe = mek.key.fromMe ? true : false
let bio_nya = await Ryuu.getStatus(sender)
try {
bio_user = `${bio_nya.status}`
} catch {
bio_user = '-'
}
function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
function monospace(string) {
return '```' + string + '```'
}
var premi = 'No Premium User'
if (isPrem) {
premi = 'Premiun User'
} 
if (isOwner) {
premi = 'This Is Owner'
}
var elit = 'Petualang Biasa'
if (isPrem) {
elit = 'Petualang Pro'
} 
if (isOwner) {
elit = 'GM in GAME'
}
//Auto Read
if (!setting.autoread) {
Ryuu.chatRead(from)
}
//funtion limited by febri
const isHealt = (sender) =>{ 
let position = false
for (let i of _healt) {
if (i.id === sender) {
let healts = i.healt
if (healts >= healtawal ) {
position = true
Ryuu.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
return true
} else {
_healt
position = true
return false
 }
}
}
if (position === false) {
const obj = { id: sender, healt: 1 }
_healt.push(obj)
fs.writeFileSync('./lib/rpg/healt.json',JSON.stringify(_healt))
return false
}
}
const getHeal = (sender) => {
let position = false
Object.keys(_healt).forEach ((i) => {
if (_healt[position].id === sender) {
position = i
}
})
if (position !== false) {
   return _healt[position].healt
}
}


const healtAdd = (sender) => {
let position = false
Object.keys(_healt).forEach((i) => {
   if (_healt[i].id == sender) {
position = i
   }
})
if (position !== false) {
   _healt[position].healt += 10
   fs.writeFileSync('./lib/rpg/healt.json', JSON.stringify(_healt))
}
}
const bayarHealt = (sender, amount) => {
let position = false
Object.keys(_healt).forEach((i) => {
if (_healt[i].id === sender) {
position = i
}
})
if (position !== false) {
_healt[position].healt -= amount
if (_healt[position].healt >= 0) return reply('healt kmu dh penuh')
fs.writeFileSync('./lib/rpg/healt.json', JSON.stringify(_healt))
}
}

//Mess Dll
mess = {
limit: 'Limit Lu Abis Nyet', 
wait: 'Tunggu Sedang Di Proses',
eror: 'Terjadi Kesalahan',
success: 'Success️',
error: {
stick: 'Khusus Sticker',
Iv: 'Link Invalid!'
},
only: {
group: 'Fitur Hanya Bisa Di Gunakan Di Group',
player: 'Khusus Orang Yang Join Rpg', 
event: 'Event Belum Aktif Di Group ini!!',
owner: 'Khusus Owner Ngab',
admin: 'Khusus Admin Ngab',
Badmin: 'Bot Harus Jadi Admin Kalo Mau Menggunakan Fiturnya', 
}
}
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
const reply = (teks) => {
Ryuu.sendMessage(from, teks, text, {quoted:ftrol})
}
const sendMess = (hehe, teks) => {
Ryuu.sendMessage(hehe, teks, text)
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? Ryuu.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Ryuu.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
}
const costum = (pesan, tipe, target, target2) => {
Ryuu.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
function jsonformat(string) {
return JSON.stringify(string, null, 2)
}
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
Ryuu.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
Ryuu.sendMessage(from, hasil, type, options).catch(e => {
Ryuu.sendMessage(from, { url : link }, type, options).catch(e => {
reply('Something Error')
console.log(e)
})
})
})
})
}
//Send Media Url
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
Ryuu.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}
//Auto Bio Ketika Online
//note : hapus jika tidak ingin bio anda ke ubah otomatis
if (autobio){
if (autobio === false) return
let settingstatus = 0;
if (new Date() * 1 - settingstatus > 1000) {
let _uptime = process.uptime() * 1000;
let uptimer = clockString(_uptime);
await Ryuu.setStatus(`${botname} | ⏲️ Runtime : ${uptimer}`).catch((_) => _);
settingstatus = new Date() * 1;
}}
//function check healt by febri
const checkHealt = (sender) => {
let found = false
for (let lmt of _healt) {
if (lmt.id === sender) {
const healthCounts = healtawal - lmt.healt
if (healthCounts <= 0) return Ryuu.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: mek})
if (!isPetualang) return reply(mess.only.player)
 reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
pp = monospace(`🌱 Profile User 🌱
✾ Nama : ${pushname}
✾ Rank : ${role}
✾ Status : ${elit}
✾ Uang : $${(getBalance(sender, balance))}
✾ Xp : ${getLevelingXp(sender)}/${reqXp}
✾ Level : ${getLevelingLevel(sender)}
✾ Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}
 
📪 Inventory 📪
✾ Uang : $${(getBalance(sender, balance))}💰
✾ Emas : ${getEmas(sender)}🪙
✾ Besi : ${getBesi(sender)}⛓️
✾ Berlian : ${getDm(sender)}💎
✾ Ikan : ${getFish(sender)}🎣`)
but = [{ buttonId: `!menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButton(from, pp, `Profile ${pushname}`, but)
found = true
}
}
if (found === false) {
let obj = { id: sender, healt: 1 }
_healt.push(obj)
fs.writeFileSync('./lib/rpg/healt.json', JSON.stringify(_healt))
Ryuu.sendMessage(from, `${healthCounts}`, text, { quoted : mek})
}
}
//Ucapan & Dll
var runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};
var datw = new Date();
var tahun = datw.getFullYear();
var bulan = datw.getMonth();
var taanggal = datw.getDate();
var hari = datw.getDay();
var tampilUcapans = datw.getHours();
var menit = datw.getMinutes();
var detik = datw.getSeconds();
switch(hari) {
case 0: hari = "Minggu"; break;
case 1: hari = "Senin"; break;
case 2: hari = "Selasa"; break;
case 3: hari = "Rabu"; break;
case 4: hari = "Kamis"; break;
case 5: hari = "Jum'at"; break;
case 6: hari = "Sabtu"; break;
}
switch(bulan) {
case 0: bulan = "Januari"; break;
case 1: bulan = "Februari"; break;
case 2: bulan = "Maret"; break;
case 3: bulan = "April"; break;
case 4: bulan = "Mei"; break;
case 5: bulan = "Juni"; break;
case 6: bulan = "Juli"; break;
case 7: bulan = "Agustus"; break;
case 8: bulan = "September"; break;
case 9: bulan = "Oktober"; break;
case 10: bulan = "November"; break;
case 11: bulan = "Desember"; break;
}
switch(tampilUcapans){
case 0: tampilUcapans = 'Selamat Malam 🌠'; break;
case 1: tampilUcapans = 'Selamat Malam 🌠'; break;
case 2: tampilUcapans = 'Selamat Malam 🌠'; break;
case 3: tampilUcapans = 'Selamat Pagi 🌄'; break;
case 4: tampilUcapans = 'Selamat Pagi 🌄'; break; 
case 5: tampilUcapans = 'Selamat Pagi 🌅'; break;
case 6: tampilUcapans = 'Selamat Pagi 🌅'; break;
case 7: tampilUcapans = 'Selamat Pagi 🌤️'; break;
case 8: tampilUcapans = 'Selamat Pagi 🌤️'; break;
case 9: tampilUcapans = 'Selamat Pagi ☀️'; break;
case 10: tampilUcapans = 'Selamat Pagi ☀️'; break;
case 11: tampilUcapans = 'Selamat Siang ☀️'; break; 
case 12: tampilUcapans = 'Selamat Siang ☀️'; break;
case 13: tampilUcapans = 'Selamat Siang ⛅️'; break;
case 14: tampilUcapans = 'Selamat Siang ⛅'; break;
case 15: tampilUcapans = 'Selamat Sore 🌥️'; break;
case 16: tampilUcapans = 'Selamat Sore 🌥️'; break;
case 17: tampilUcapans = 'Selamat Sore 🌥️'; break;
case 18: tampilUcapans = 'Selamat Malam 🌌'; break; 
case 19: tampilUcapans = 'Selamat Malam 🌌'; break;
case 20: tampilUcapans = 'Selamat Malam 🌌'; break;
case 21: tampilUcapans = 'Selamat Malam 🌌'; break;
case 22: tampilUcapans = 'Selamat Malam 🌌'; break; 
case 23: tampilUcapans = 'Selamat Malam 🌌'; break;
}
var tampilUcapan = "" + tampilUcapans;
var tampilTanggal = hari + " "+ taanggal + " " + bulan + " " + tahun;
var tampilWaktu = "Jam: " + tampilUcapans + ":" + menit + ":" + detik;
var tampilHari = "" + tampilUcapans;
//Verify
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}
const cekUser = (sender) => {
let status = false
Object.keys(_user).forEach((i) => {
if (_user[i].id === sender) {
status = true
}
})
return status
}
const isUser = cekUser(sender)
const isRegistered = checkRegisteredUser(sender)
const daftar1 = `Hai ${pushname}\nKamu Belum Terverifikasi Pencet Button Di Bawah Ini Untuk Verifikasi!!`
const daftar2 = '```Klik Tombol Di Bawah Untuk Verify Kak```'
const daftar3 = [{buttonId: `${prefix}verify`,buttonText: {displayText: `🌱 VERIFY 🌱`,},type: 1,},]
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
const Prem1 = `Hai ${pushname}\nKamu Belum Premium, minta ke owner agar bisa menggunakan fitur inii!!`
const Prem2 = '```Nomor Owner Di Bawah Ini Kak```'
const Prem3 = [{buttonId: `${prefix}owner`,buttonText: {displayText: `🌱 OWNER 🌱`,},type: 1,},]

//Sticker Ngab
const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
Ryuu.sendMessage(to, media, MessageType.sticker,{quoted:mek})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}

//All Button
const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
Ryuu.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: ftrol
})
}

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
Ryuu.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};
const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
yha = await Ryuu.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: yha.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
Ryuu.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButImage = async (from, context, fortext, img, but, mek) => {
jadinya = await Ryuu.prepareMessage(from, img, image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fortext,
buttons: but,
headerType: 4
}
Ryuu.sendMessage(from, buttonMessagesI, buttonsMessage, {
quoted: ftrol,
})
}
async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
return Ryuu.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
kma = doc1
mhan = await Ryuu.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
Ryuu.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Ryuu.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Ryuu.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
Ryuu.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};
const sendButPrem = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
Ryuu.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};
//Reply Ngentod
const fvid = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6283891921787-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title": `Ryuuka Botz🐧`,
"h": `${tampilUcapan} ${pushname}`,
'duration': '99999', 
'caption': `${tampilUcapan} ${pushname}`,
'jpegThumbnail': fakeimage
}
}
}
const floc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
liveLocationMessage: {
caption: `${tampilUcapan} ${pushname}`,
jpegThumbnail: fakeimage
}
}
}
const fdoc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `${tampilUcapan} ${pushname}`, 
jpegThumbnail: fakeimage
}
}
}
const ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 123,
status: 1,
surface : 1,
message: `${tampilUcapan} ${pushname}`, //Kasih namalu
orderTitle: `${tampilUcapan} ${pushname}`,
thumbnail: fakeimage, //Gambarnye
sellerJid: '0@s.whatsapp.net' 
}
}
}

//Game Nya
//Tebak Gambar
if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakgambar[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await reply(`🎮 Tebak Gambar 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
}
}
//Cak Lontong
if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = caklontong[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await reply(`🎮 Caklontong 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
delete caklontong[sender.split('@')[0]]
fs.writeFileSync("./database/game/caklontong.json", JSON.stringify(caklontong))
}
}
//Tebak Jenaka
if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakjenaka[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await reply(`🎮 Tebak Jenaka 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
delete tebakjenaka[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebakjenaka.json", JSON.stringify(tebakjenaka))
}
}
//Tebak Lirik
if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebaklirik[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await reply(`🎮 Tebak Lirik 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
delete tebaklirik[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebaklirik.json", JSON.stringify(tebaklirik))
}
}
//Tebak Bendera
if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakbendera[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await reply(`🎮 Tebak Bendera 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
delete tebakbendera[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebakbendera.json", JSON.stringify(tebakbendera))
}
}
//Tebak Kimia
if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakimia[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await reply(`*_🎮 Tebak Kimia 🎮_*\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
delete tebakimia[sender.split('@')[0]]
fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
}
}
//Tebak Kata
if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakata[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await reply(`🎮 Tebak Kata 🎮\n\n*Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
delete tebakata[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebakata.json", JSON.stringify(tebakata))
}
}
//Antilink
if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
sendButMessage(from, ` *GROUP LINK DETECTED*\n\nMaaf Kamu Akan Di Kick Dari Group Ini!`, `Klik Di Bawah Untuk Mematikan`, [
{
buttonId: `${prefix}antilink disable`,
buttonText: {
displayText: `Disable Antilink🌱`,
},
type: 1,
}]);
Ryuu.groupRemove(from, [sender])
}
}
//ikan
var ikan = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
var hewan = ['🐔','🦃','🦆','🐐','🐏','🐖','🐑','🐎','🐺']
var burung = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
//Yang Belum Verify
const addRegisterUser = (userid, sender, age, bio) => {
const obj = { id: userid, name: sender, age: age, bio: bio }
_user.push(obj)
fs.writeFileSync('./database/user.json', JSON.stringify(_user))
}
//PublicNya
if (!public){
if (!isOwner && !itsMe) return
}
//Waktunya
function clockString(ms) {
let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
//Time
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
//Level
const levelRole = getLevelingLevel(sender)
var role = 'Warrior III'
if (levelRole <= 5) {
role = 'Warrior II'
 } else if (levelRole <= 10) {
role = 'Warrior I'
 } else if (levelRole <= 15) {
role = 'Elite III'
 } else if (levelRole <= 20) {
role = 'Elite II'
 } else if (levelRole <= 25) {
role = 'Elite I'
 } else if (levelRole <= 30) {
role = 'Master III'
 } else if (levelRole <= 35) {
role = 'Master II'
 } else if (levelRole <= 40) {
role = 'Master I'
 } else if (levelRole <= 45) {
role = 'GrandMaster III'
 } else if (levelRole <= 50) {
role = 'GrandMaster II'
 } else if (levelRole <= 55) {
role = 'GrandMaster I'
 } else if (levelRole <= 60) {
role = 'Epic III'
 } else if (levelRole <= 65) {
role = 'Epic II'
 } else if (levelRole <= 70) {
role = 'Epic I'
 } else if (levelRole <= 75) {
role = 'Legend III'
 } else if (levelRole <= 80) {
role = 'Legend II'
 } else if (levelRole <= 85) {
role = 'Legend I'
 } else if (levelRole <= 90) {
role = 'Mythic'
 } else if (levelRole <= 95) {
role = 'Mythical Glory'
 } else if (levelRole >= 100) {
role = 'Immortal'
 }
//function leveling
if (isGroup && isPetualang) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * 10) + 100
const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
var getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)   
var lvlup = monospace(`🌱 Level Up 🌱
✾ Nama : ${pushname}
✾ Rank : ${role}
✾ Status : ${elit}
✾ Xp : ${getLevelingXp(sender)}
✾ Level : ${getLevelingLevel(sender)}`)
but = [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButton(from, lvlup, 'Level Up', but)

}
} catch (err) {
console.error(err)
}
}

//Last
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

//CMD NYA
if (isCmd && !isGroup)
console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
if (isCmd && isGroup)
console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
switch (command) {

//Semua Menu
case 'menu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!') 
var p = await Ryuu.getStatus(`${sender}`, MessageType.text)
ptod = "6283891921787@s.whatsapp.net"
stod = `${sender}`
dtod = 'ngetes'
uwu = '```'
stst = await Ryuu.getStatus(`${sender.split('@')[0]}@c.us`)
stst = stst.status == 401 ? '' : stst.status
tescok =
`Haii @${sender.split('@')[0]}

*Info Bot* 💻
👤 _*Owner Name*_ : ${ownername}
🤖 _*Bot Name*_ : ${botname}
💻 _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
📱 _*Runtime*_ : ${runtime(process.uptime())}
🗃 _*Status*_ : ${public? `Public Mode`:`Self Mode`}

*Info User* 👤
🌱 _*Name User*_ : ${pushname}
🏷 _*Bio User*_ : ${p.status==undefined?`Not Found`:p.status}
📱 _*Nomor*_ : @${sender.split('@')[0]}`
 Sendbutdocument(from, tescok, "Create By RyuukaBotz", fs.readFileSync('./media/Ryuu.pdf'),{mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./media/Ryuu.jpg'), filename:`Ryuu.pdf`,pageCount: 999 }, [{buttonId:`${prefix}listmenu`,buttonText:{displayText:'LIST MENU 🌱'},type:1},{buttonId:`${prefix}allmenu`,buttonText:{displayText:'ALL MENU ⛩️'},type:1},{buttonId:`${prefix}script`,buttonText:{displayText:'SCRIPT 🎥'},type:1}], {quoted:fvid, contextInfo: { mentionedJid: [ptod,dtod,stod], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`${tampilUcapan} ${pushname}\nScript Create By RyuukaBotz`,mediaType:"2",thumbnail:fakeimage,mediaUrl:`https://youtu.be/Q6utY1yaXAY`}}})
break
case 'listmenu':
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})  
listMsg = {
buttonText: 'Click Here!!!',
footerText: fake,
description: `_*Hai Kak @${sender.split('@')[0]} ${tampilUcapan}*_\n\n_*Pencet Button Di bawah Ini Untuk Memilih Menu*_`, 
sections: [
{
"title": `Silahkan Dipilih Kak ${pushname} 🤗`,
rows: [
{
"title": "[🕊️] All Menu",
"rowId": `${prefix}allmenu`,
"description": `Menampilkan Seluruh Menu`
},
{
"title": "[📱️] Other Menu",
"rowId": `${prefix}othermenu`,
"description": `Menampilkan Seluruh Other Menu`
},
{
"title": "[🌱] Group Menu",
"rowId": `${prefix}groupmenu`, 
"description": `Menampilkan Seluruh Group Menu`
},
{
"title": "[👤] Owner Menu",
"rowId": `${prefix}ownermenu`, 
"description": `Menampilkan Seluruh Owner Menu`
},
{
"title": "[🔎] Search Menu",
"rowId": `${prefix}searchmenu`, 
"description": `Menampilkan Seluruh Search Menu`
},
{
"title": "[🎙] Voice Changer",
"rowId": `${prefix}voicechanger`, 
"description": `Menampilkan Seluruh Voice Changer`
},
{
"title": "[💸] Store Menu",
"rowId": `${prefix}storemenu`, 
"description": `Menampilkan Seluruh Store Menu`
},
{
"title": "[🏝] Random Menu",
"rowId": `${prefix}randommenu`, 
"description": `Menampilkan Seluruh Random Menu`
},
{
"title": "[🖼]‍‍ Random img Menu",
"rowId": `${prefix}randomimgmenu`, 
"description": `Menampilkan Seluruh Random Img Menu`
},
{
"title": "[🎮] Game Menu",
"rowId": `${prefix}gamemenu`, 
"description": `Menampilkan Seluruh Game Menu`
},
{
"title": "‍[🏔] Rpg Menu",
"rowId": `${prefix}rpgmenu`, 
"description": `Menampilkan Seluruh Rpg Menu`
},
{
"title": "‍[🚲] Fun Menu",
"rowId": `${prefix}funmenu`, 
"description": `Menampilkan Seluruh Fun Menu`
},
{
"title": "‍[☕] Maker Menu",
"rowId": `${prefix}makermenu`, 
"description": `Menampilkan Seluruh Maker Menu`
},
{
"title": "‍[🖋] Textprome Menu",
"rowId": `${prefix}textpromemenu`, 
"description": `Menampilkan Seluruh Textprome Menu`
},
{
"title": "‍[️️🗓] Informasi Menu",
"rowId": `${prefix}informasimenu`, 
"description": `Menampilkan Seluruh Informasi Menu`
},
{
"title": "‍[👩‍🦰️] Cecan Menu",
"rowId": `${prefix}cecanmenu`, 
"description": `Menampilkan Seluruh Cecan Menu`
},
{
"title": "‍[️💅] Asupan Menu",
"rowId": `${prefix}asupanmenu`, 
"description": `Menampilkan Seluruh Asupan Menu`
},
{
"title": "‍[🔞️] Nsfw Menu",
"rowId": `${prefix}nsfwmenu`, 
"description": `Menampilkan Seluruh Nsfw Menu`
},
{
"title": "‍[📝️] Nulis Menu",
"rowId": `${prefix}nulismenu`, 
"description": `Menampilkan Seluruh Nulis Menu`
},
{
"title": "‍[🗃️] Download Menu",
"rowId": `${prefix}downloadmenu`, 
"description": `Menampilkan Seluruh Download Menu`
},
{
"title": "‍[💾️] Convert Menu",
"rowId": `${prefix}convertmenu`, 
"description": `Menampilkan Seluruh Convert Menu`
},
{
"title": "‍[⛩️‍] Anime Menu",
"rowId": `${prefix}animemenu`, 
"description": `Menampilkan Seluruh Anime Menu`
},
{
"title": "[🧸] Creator",
"rowId": `${prefix}creator`, 
"description": `Pembuat Bot ${botname}`
},
{
"title": "[💻] Source Code",
"rowId": `${prefix}sc`, 
"description": `Menampilkan Script Bot ${botname}`
},
{
"title": "[🏆] Big Thanks To",
"rowId": `${prefix}tqto`, 
"description": `Menampilkan Thanks To`
},
{
"title": "[📚] Rules",
"rowId": `${prefix}rules`, 
"description": `Menampilkan Rules Pengguna Bot ${botname}`
}
]
}],
listType: 1
}
Ryuu.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:mek})
break
case 'allmenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
var p = await Ryuu.getStatus(`${sender}`, MessageType.text)
menu =
`*${tampilUcapan} @${sender.split('@')[0]}*

💻 *Info Bot* 💻
👤 _*Owner Name*_ : ${ownername}
🤖 _*Bot Name*_ : ${botname}
💻 _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
📱 _*Runtime*_ : ${runtime(process.uptime())}
🗃 _*Status*_ : ${public? `Public Mode`:`Self Mode`}

👤 *Info User* 👤
🌱 _*Name User*_ : ${pushname}
🏷 _*Bio User*_ : ${p.status==undefined?`Not Found`:p.status}
📱 _*Nomor*_ : @${sender.split('@')[0]}

🇮🇩 *Indonesia Time* 🇮🇩
🕐 _*Wib*_ : ${timeWib}
🕑 _*Wita*_ : ${timeWita}
🕒 _*Wit*_ : ${timeWit}

⛅ *To Day* 🌥
${tampilUcapan}
🌥 _*Hari*_ : ${hari}
🌚 _*Bulan*_ : ${bulan}
💐 _*Tahun*_ : ${tahun}

📱 _*Other Menu*_ 📱
✾ ${prefix}infobot
✾ ${prefix}donasi
✾ ${prefix}rules
✾ ${prefix}speed
✾ ${prefix}script
✾ ${prefix}verify
✾ ${prefix}creator

🌱 _*Group Menu*_ 🌱
✾ ${prefix}welcome *on/off*
✾ ${prefix}add *628xxx*
✾ ${prefix}kick *@tag*
✾ ${prefix}linkgc
✾ ${prefix}setppgrup *reply image*
✾ ${prefix}setnamegrup *text*
✾ ${prefix}setdesc *text*

👤 _*Owner Menu*_ 👤
✾ ${prefix}mode
✾ ${prefix}public
✾ ${prefix}self
✾ ${prefix}owner
✾ ${prefix}delete
✾ ${prefix}bc *text*
✾ ${prefix}setnamabot
✾ ${prefix}setbiobot
✾ ${prefix}addcmd *reply sticker*
✾ ${prefix}delcmd *reply sticker*
✾ ${prefix}listcmd
✾ ${prefix}addprem / delprem
✾ ${prefix}ban / unban

🔎 _*Search Menu*_ 🔎
✾ ${prefix}pinterest *search*
✾ ${prefix}liriklagu *search*
✾ ${prefix}chordlagu *search*

🎙 _*Voice Changer*_
✾ ${prefix}vibra
✾ ${prefix}robot
✾ ${prefix}fast
✾ ${prefix}slow
✾ ${prefix}bass

💸 _*Store Menu*_ 💸
✾ ${prefix}valorant
✾ ${prefix}mobilelejend
✾ ${prefix}freefire
✾ ${prefix}codm
✾ ${prefix}aov
✾ ${prefix}sausage
✾ ${prefix}lol
✾ ${prefix}pay

🏝 _*Random Menu*_ 🏝
✾ ${prefix}meme
✾ ${prefix}pantun
✾ ${prefix}katabijak
✾ ${prefix}faktaunik
✾ ${prefix}quotes
✾ ${prefix}artinama
✾ ${prefix}artimimpi

🖼 _*Random Image*_ 🖼
✾ ${prefix}cyberspace
✾ ${prefix}teknologi
✾ ${prefix}tatasurya
✾ ${prefix}gaming
✾ ${prefix}anime

🎮 _*Game Menu*_ 🎮
✾ ${prefix}caklontong
✾ ${prefix}tebakgambar
✾ ${prefix}tebakkata
✾ ${prefix}tebaklirik
✾ ${prefix}tebakjenaka
✾ ${prefix}tebakkimia
✾ ${prefix}tebakbendera
✾ ${prefix}tictactoe
✾ ${prefix}delsesittt

🏔 _*Rpg Menu*_ 🏔
✾ ${prefix}event *on/off*
✾ ${prefix}profile
✾ ${prefix}mybag
✾ ${prefix}leaderboard
✾ ${prefix}sellikan
✾ ${prefix}sellbesi
✾ ${prefix}sellemas
✾ ${prefix}selldiamond
✾ ${prefix}mancing
✾ ${prefix}adventure

🚲 _*Fun Menu*_ 🚲
✾ ${prefix}bagaimanakah
✾ ${prefix}truth
✾ ${prefix}dare
✾ ${prefix}slot
✾ ${prefix}kapankah
✾ ${prefix}bisakah
✾ ${prefix}rate
✾ ${prefix}apakah
✾ ${prefix}suit

💽 _*Sound Menu*_ 💽
✾ ${prefix}sound1
✾ ${prefix}sound2
✾ ${prefix}sound3
✾ ${prefix}sound4
✾ ${prefix}sound5

☕ _*Maker Menu*_ ☕
✾ ${prefix}rip
✾ ${prefix}jail
✾ ${prefix}wasted
✾ ${prefix}wanted

🖋 _*Textprome Menu*_ 🖋
✾ ${prefix}honey
✾ ${prefix}ice
✾ ${prefix}bread
✾ ${prefix}glossy
✾ ${prefix}magma

🗓 _*Informasi Menu*_ 🗓
✾ ${prefix}infotsunami
✾ ${prefix}covidglobal
✾ ${prefix}cuacabandara
✾ ${prefix}infogempa

👩‍🦰 _*Cecan Menu*_ 👩‍🦰
✾ ${prefix}vietnam
✾ ${prefix}malaysia
✾ ${prefix}korea
✾ ${prefix}indonesia
✾ ${prefix}japan
✾ ${prefix}thailand
✾ ${prefix}china

💅 _*Asupan Menu*_ 💅
✾ ${prefix}santuy
✾ ${prefix}ukty
✾ ${prefix}bocil
✾ ${prefix}gheayubi
✾ ${prefix}rikagusriani

🔞 _*Nsfw Menu*_ 🔞
✾ ${prefix}yuri
✾ ${prefix}thighs
✾ ${prefix}ero
✾ ${prefix}cum
✾ ${prefix}ass
✾ ${prefix}blowjob

📝 _*Nulis Menu*_ 📝
✾ ${prefix}nulis
✾ ${prefix}nuliskiri *text*
✾ ${prefix}nuliskanan *text*
✾ ${prefix}foliokiri *text*
✾ ${prefix}foliokanan *text*

🗃 _*Download Menu*_ 🗃
✾ ${prefix}ytmp3 *url*
✾ ${prefix}ytmp4 *url*
✾ ${prefix}tiktoknowm *url*
✾ ${prefix}tiktokwm *url*
✾ ${prefix}mediafire *url*

💾 _*Convert Menu*_ 💾
✾ ${prefix}sticker *reply*
✾ ${prefix}attp *text*
✾ ${prefix}ttp *text*
✾ ${prefix}toimg *reply*
✾ ${prefix}tourl *reply*
✾ ${prefix}smeme *reply image & text*
✾ ${prefix}emoji *reply emoji*

⛩️ _*Anime Menu*_ ⛩️
✾ ${prefix}neko
✾ ${prefix}waifu
✾ ${prefix}shinobu
✾ ${prefix}megumin
✾ ${prefix}bully
✾ ${prefix}cuddle
✾ ${prefix}cry
✾ ${prefix}hug
✾ ${prefix}awoo
✾ ${prefix}kiss
✾ ${prefix}lick
✾ ${prefix}pat
✾ ${prefix}smug
✾ ${prefix}bonk
✾ ${prefix}yeet
✾ ${prefix}blush
✾ ${prefix}smile
✾ ${prefix}wave
✾ ${prefix}highfive
✾ ${prefix}handhold
✾ ${prefix}nom
✾ ${prefix}bite
✾ ${prefix}glomp
✾ ${prefix}slap
✾ ${prefix}kill
✾ ${prefix}happy
✾ ${prefix}wink
✾ ${prefix}poke
✾ ${prefix}dance
✾ ${prefix}cringe`
teks =
`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'othermenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
var p = await Ryuu.getStatus(`${sender}`, MessageType.text)
menu =
`*${tampilUcapan} @${sender.split('@')[0]}*

💻 *Info Bot* 💻
👤 _*Owner Name*_ : ${ownername}
🤖 _*Bot Name*_ : ${botname}
💻 _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
📱 _*Runtime*_ : ${runtime(process.uptime())}
🗃 _*Status*_ : ${public? `Public Mode`:`Self Mode`}

👤 *Info User* 👤
🌱 _*Name User*_ : ${pushname}
🏷 _*Bio User*_ : ${p.status==undefined?`Not Found`:p.status}
📱 _*Nomor*_ : @${sender.split('@')[0]}

📱 _*Other Menu*_ 📱
✾ ${prefix}infobot
✾ ${prefix}donasi
✾ ${prefix}rules
✾ ${prefix}speed
✾ ${prefix}script
✾ ${prefix}verify
✾ ${prefix}creator`
teks =
`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'groupmenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
var p = await Ryuu.getStatus(`${sender}`, MessageType.text)
menu =
`*${tampilUcapan} @${sender.split('@')[0]}*

💻 *Info Bot* 💻
👤 _*Owner Name*_ : ${ownername}
🤖 _*Bot Name*_ : ${botname}
💻 _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
📱 _*Runtime*_ : ${runtime(process.uptime())}
🗃 _*Status*_ : ${public? `Public Mode`:`Self Mode`}

👤 *Info User* 👤
🌱 _*Name User*_ : ${pushname}
🏷 _*Bio User*_ : ${p.status==undefined?`Not Found`:p.status}
📱 _*Nomor*_ : @${sender.split('@')[0]}

🌱 _*Group Menu*_ 🌱
✾ ${prefix}welcome *on/off*
✾ ${prefix}add *628xxx*
✾ ${prefix}kick *@tag*
✾ ${prefix}linkgc
✾ ${prefix}setppgrup *reply image*
✾ ${prefix}setnamegrup *text*
✾ ${prefix}setdesc *text*`
teks =
`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'ownermenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
var p = await Ryuu.getStatus(`${sender}`, MessageType.text)
menu =
`*${tampilUcapan} @${sender.split('@')[0]}*

💻 *Info Bot* 💻
👤 _*Owner Name*_ : ${ownername}
🤖 _*Bot Name*_ : ${botname}
💻 _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
📱 _*Runtime*_ : ${runtime(process.uptime())}
🗃 _*Status*_ : ${public? `Public Mode`:`Self Mode`}

👤 *Info User* 👤
🌱 _*Name User*_ : ${pushname}
🏷 _*Bio User*_ : ${p.status==undefined?`Not Found`:p.status}
📱 _*Nomor*_ : @${sender.split('@')[0]}

👤 _*Owner Menu*_ 👤
✾ ${prefix}mode
✾ ${prefix}public
✾ ${prefix}self
✾ ${prefix}owner
✾ ${prefix}delete
✾ ${prefix}bc *text*
✾ ${prefix}setnamabot
✾ ${prefix}setbiobot
✾ ${prefix}addcmd *reply sticker*
✾ ${prefix}delcmd *reply sticker*
✾ ${prefix}listcmd
✾ ${prefix}addprem / delprem
✾ ${prefix}ban / unban`
teks =
`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'searchmenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
var p = await Ryuu.getStatus(`${sender}`, MessageType.text)
menu =
`*${tampilUcapan} @${sender.split('@')[0]}*

💻 *Info Bot* 💻
👤 _*Owner Name*_ : ${ownername}
🤖 _*Bot Name*_ : ${botname}
💻 _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
📱 _*Runtime*_ : ${runtime(process.uptime())}
🗃 _*Status*_ : ${public? `Public Mode`:`Self Mode`}

👤 *Info User* 👤
🌱 _*Name User*_ : ${pushname}
🏷 _*Bio User*_ : ${p.status==undefined?`Not Found`:p.status}
📱 _*Nomor*_ : @${sender.split('@')[0]}

🔎 _*Search Menu*_ 🔎
✾ ${prefix}pinterest *search*
✾ ${prefix}liriklagu *search*
✾ ${prefix}chordlagu *search*`
teks =
`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'voice changer':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
var p = await Ryuu.getStatus(`${sender}`, MessageType.text)
menu =
`*${tampilUcapan} @${sender.split('@')[0]}*

💻 *Info Bot* 💻
👤 _*Owner Name*_ : ${ownername}
🤖 _*Bot Name*_ : ${botname}
💻 _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
📱 _*Runtime*_ : ${runtime(process.uptime())}
🗃 _*Status*_ : ${public? `Public Mode`:`Self Mode`}

👤 *Info User* 👤
🌱 _*Name User*_ : ${pushname}
🏷 _*Bio User*_ : ${p.status==undefined?`Not Found`:p.status}
📱 _*Nomor*_ : @${sender.split('@')[0]}

🎙 _*Voice Changer*_
✾ ${prefix}vibra
✾ ${prefix}robot
✾ ${prefix}fast
✾ ${prefix}slow
✾ ${prefix}bass`
teks =
`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'randommenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
var p = await Ryuu.getStatus(`${sender}`, MessageType.text)
menu =
`*${tampilUcapan} @${sender.split('@')[0]}*

💻 *Info Bot* 💻
👤 _*Owner Name*_ : ${ownername}
🤖 _*Bot Name*_ : ${botname}
💻 _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
📱 _*Runtime*_ : ${runtime(process.uptime())}
🗃 _*Status*_ : ${public? `Public Mode`:`Self Mode`}

👤 *Info User* 👤
🌱 _*Name User*_ : ${pushname}
🏷 _*Bio User*_ : ${p.status==undefined?`Not Found`:p.status}
📱 _*Nomor*_ : @${sender.split('@')[0]}

🏝 _*Random Menu*_ 🏝
✾ ${prefix}meme
✾ ${prefix}pantun
✾ ${prefix}katabijak
✾ ${prefix}faktaunik
✾ ${prefix}quotes
✾ ${prefix}artinama
✾ ${prefix}artimimpi`
teks =
`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'randomimgmenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
var p = await Ryuu.getStatus(`${sender}`, MessageType.text)
menu =
`*${tampilUcapan} @${sender.split('@')[0]}*

💻 *Info Bot* 💻
👤 _*Owner Name*_ : ${ownername}
🤖 _*Bot Name*_ : ${botname}
💻 _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
📱 _*Runtime*_ : ${runtime(process.uptime())}
🗃 _*Status*_ : ${public? `Public Mode`:`Self Mode`}

👤 *Info User* 👤
🌱 _*Name User*_ : ${pushname}
🏷 _*Bio User*_ : ${p.status==undefined?`Not Found`:p.status}
📱 _*Nomor*_ : @${sender.split('@')[0]}

🖼 _*Random Image*_ 🖼
✾ ${prefix}cyberspace
✾ ${prefix}teknologi
✾ ${prefix}tatasurya
✾ ${prefix}gaming
✾ ${prefix}anime`
teks =
`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'gamemenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
var p = await Ryuu.getStatus(`${sender}`, MessageType.text)
menu =
`*${tampilUcapan} @${sender.split('@')[0]}*

💻 *Info Bot* 💻
👤 _*Owner Name*_ : ${ownername}
🤖 _*Bot Name*_ : ${botname}
💻 _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
📱 _*Runtime*_ : ${runtime(process.uptime())}
🗃 _*Status*_ : ${public? `Public Mode`:`Self Mode`}

👤 *Info User* 👤
🌱 _*Name User*_ : ${pushname}
🏷 _*Bio User*_ : ${p.status==undefined?`Not Found`:p.status}
📱 _*Nomor*_ : @${sender.split('@')[0]}

🎮 _*Game Menu*_ 🎮
✾ ${prefix}caklontong
✾ ${prefix}tebakgambar
✾ ${prefix}tebakkata
✾ ${prefix}tebaklirik
✾ ${prefix}tebakjenaka
✾ ${prefix}tebakkimia
✾ ${prefix}tebakbendera
✾ ${prefix}tictactoe
✾ ${prefix}delsesittt`
teks =
`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'rpgmenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
var p = await Ryuu.getStatus(`${sender}`, MessageType.text)
menu =
`*${tampilUcapan} @${sender.split('@')[0]}*

💻 *Info Bot* 💻
👤 _*Owner Name*_ : ${ownername}
🤖 _*Bot Name*_ : ${botname}
💻 _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
📱 _*Runtime*_ : ${runtime(process.uptime())}
🗃 _*Status*_ : ${public? `Public Mode`:`Self Mode`}

👤 *Info User* 👤
🌱 _*Name User*_ : ${pushname}
🏷 _*Bio User*_ : ${p.status==undefined?`Not Found`:p.status}
📱 _*Nomor*_ : @${sender.split('@')[0]}

🏔 _*Rpg Menu*_ 🏔
✾ ${prefix}event *on/off*
✾ ${prefix}profile
✾ ${prefix}mybag
✾ ${prefix}leaderboard
✾ ${prefix}sellikan
✾ ${prefix}sellbesi
✾ ${prefix}sellemas
✾ ${prefix}selldiamond
✾ ${prefix}mancing
✾ ${prefix}adventure`
teks =
`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'funmenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
var p = await Ryuu.getStatus(`${sender}`, MessageType.text)
menu =
`*${tampilUcapan} @${sender.split('@')[0]}*

💻 *Info Bot* 💻
👤 _*Owner Name*_ : ${ownername}
🤖 _*Bot Name*_ : ${botname}
💻 _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
📱 _*Runtime*_ : ${runtime(process.uptime())}
🗃 _*Status*_ : ${public? `Public Mode`:`Self Mode`}

👤 *Info User* 👤
🌱 _*Name User*_ : ${pushname}
🏷 _*Bio User*_ : ${p.status==undefined?`Not Found`:p.status}
📱 _*Nomor*_ : @${sender.split('@')[0]}

🚲 _*Fun Menu*_ 🚲
✾ ${prefix}bagaimanakah
✾ ${prefix}truth
✾ ${prefix}dare
✾ ${prefix}slot
✾ ${prefix}kapankah
✾ ${prefix}bisakah
✾ ${prefix}rate
✾ ${prefix}apakah
✾ ${prefix}suit`
teks =
`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'makermenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
var p = await Ryuu.getStatus(`${sender}`, MessageType.text)
menu =
`*${tampilUcapan} @${sender.split('@')[0]}*

💻 *Info Bot* 💻
👤 _*Owner Name*_ : ${ownername}
🤖 _*Bot Name*_ : ${botname}
💻 _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
📱 _*Runtime*_ : ${runtime(process.uptime())}
🗃 _*Status*_ : ${public? `Public Mode`:`Self Mode`}

👤 *Info User* 👤
🌱 _*Name User*_ : ${pushname}
🏷 _*Bio User*_ : ${p.status==undefined?`Not Found`:p.status}
📱 _*Nomor*_ : @${sender.split('@')[0]}

☕ _*Maker Menu*_ ☕
✾ ${prefix}rip
✾ ${prefix}jail
✾ ${prefix}wasted
✾ ${prefix}wanted`
teks =
`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'textpromemenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
var p = await Ryuu.getStatus(`${sender}`, MessageType.text)
menu =
`*${tampilUcapan} @${sender.split('@')[0]}*

💻 *Info Bot* 💻
👤 _*Owner Name*_ : ${ownername}
🤖 _*Bot Name*_ : ${botname}
💻 _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
📱 _*Runtime*_ : ${runtime(process.uptime())}
🗃 _*Status*_ : ${public? `Public Mode`:`Self Mode`}

👤 *Info User* 👤
🌱 _*Name User*_ : ${pushname}
🏷 _*Bio User*_ : ${p.status==undefined?`Not Found`:p.status}
📱 _*Nomor*_ : @${sender.split('@')[0]}

🖋 _*Textprome Menu*_ 🖋
✾ ${prefix}honey
✾ ${prefix}ice
✾ ${prefix}bread
✾ ${prefix}glossy
✾ ${prefix}magma`
teks =
`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'informasimenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
var p = await Ryuu.getStatus(`${sender}`, MessageType.text)
menu =
`*${tampilUcapan} @${sender.split('@')[0]}*

💻 *Info Bot* 💻
👤 _*Owner Name*_ : ${ownername}
🤖 _*Bot Name*_ : ${botname}
💻 _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
📱 _*Runtime*_ : ${runtime(process.uptime())}
🗃 _*Status*_ : ${public? `Public Mode`:`Self Mode`}

👤 *Info User* 👤
🌱 _*Name User*_ : ${pushname}
🏷 _*Bio User*_ : ${p.status==undefined?`Not Found`:p.status}
📱 _*Nomor*_ : @${sender.split('@')[0]}

🗓 _*Informasi Menu*_ 🗓
✾ ${prefix}infotsunami
✾ ${prefix}covidglobal
✾ ${prefix}cuacabandara
✾ ${prefix}infogempa`
teks =
`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'cecanmenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
var p = await Ryuu.getStatus(`${sender}`, MessageType.text)
menu =
`*${tampilUcapan} @${sender.split('@')[0]}*

💻 *Info Bot* 💻
👤 _*Owner Name*_ : ${ownername}
🤖 _*Bot Name*_ : ${botname}
💻 _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
📱 _*Runtime*_ : ${runtime(process.uptime())}
🗃 _*Status*_ : ${public? `Public Mode`:`Self Mode`}

👤 *Info User* 👤
🌱 _*Name User*_ : ${pushname}
🏷 _*Bio User*_ : ${p.status==undefined?`Not Found`:p.status}
📱 _*Nomor*_ : @${sender.split('@')[0]}

👩‍🦰 _*Cecan Menu*_ 👩‍🦰
✾ ${prefix}vietnam
✾ ${prefix}malaysia
✾ ${prefix}korea
✾ ${prefix}indonesia
✾ ${prefix}japan
✾ ${prefix}thailand
✾ ${prefix}china`
teks =
`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'asupanmenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
var p = await Ryuu.getStatus(`${sender}`, MessageType.text)
menu =
`*${tampilUcapan} @${sender.split('@')[0]}*

💻 *Info Bot* 💻
👤 _*Owner Name*_ : ${ownername}
🤖 _*Bot Name*_ : ${botname}
💻 _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
📱 _*Runtime*_ : ${runtime(process.uptime())}
🗃 _*Status*_ : ${public? `Public Mode`:`Self Mode`}

👤 *Info User* 👤
🌱 _*Name User*_ : ${pushname}
🏷 _*Bio User*_ : ${p.status==undefined?`Not Found`:p.status}
📱 _*Nomor*_ : @${sender.split('@')[0]}

💅 _*Asupan Menu*_ 💅
✾ ${prefix}santuy
✾ ${prefix}ukty
✾ ${prefix}bocil
✾ ${prefix}gheayubi
✾ ${prefix}rikagusriani`
teks =
`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'nsfwmenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
var p = await Ryuu.getStatus(`${sender}`, MessageType.text)
menu =
`*${tampilUcapan} @${sender.split('@')[0]}*

💻 *Info Bot* 💻
👤 _*Owner Name*_ : ${ownername}
🤖 _*Bot Name*_ : ${botname}
💻 _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
📱 _*Runtime*_ : ${runtime(process.uptime())}
🗃 _*Status*_ : ${public? `Public Mode`:`Self Mode`}

👤 *Info User* 👤
🌱 _*Name User*_ : ${pushname}
🏷 _*Bio User*_ : ${p.status==undefined?`Not Found`:p.status}
📱 _*Nomor*_ : @${sender.split('@')[0]}

🔞 _*Nsfw Menu*_ 🔞
✾ ${prefix}yuri
✾ ${prefix}thighs
✾ ${prefix}ero
✾ ${prefix}cum
✾ ${prefix}ass
✾ ${prefix}blowjob`
teks =
`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'nulismenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
var p = await Ryuu.getStatus(`${sender}`, MessageType.text)
menu =
`*${tampilUcapan} @${sender.split('@')[0]}*

💻 *Info Bot* 💻
👤 _*Owner Name*_ : ${ownername}
🤖 _*Bot Name*_ : ${botname}
💻 _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
📱 _*Runtime*_ : ${runtime(process.uptime())}
🗃 _*Status*_ : ${public? `Public Mode`:`Self Mode`}

👤 *Info User* 👤
🌱 _*Name User*_ : ${pushname}
🏷 _*Bio User*_ : ${p.status==undefined?`Not Found`:p.status}
📱 _*Nomor*_ : @${sender.split('@')[0]}

📝 _*Nulis Menu*_ 📝
✾ ${prefix}nulis
✾ ${prefix}nuliskiri *text*
✾ ${prefix}nuliskanan *text*
✾ ${prefix}foliokiri *text*
✾ ${prefix}foliokanan *text*`
teks =
`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'downloadmenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
var p = await Ryuu.getStatus(`${sender}`, MessageType.text)
menu =
`*${tampilUcapan} @${sender.split('@')[0]}*

💻 *Info Bot* 💻
👤 _*Owner Name*_ : ${ownername}
🤖 _*Bot Name*_ : ${botname}
💻 _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
📱 _*Runtime*_ : ${runtime(process.uptime())}
🗃 _*Status*_ : ${public? `Public Mode`:`Self Mode`}

👤 *Info User* 👤
🌱 _*Name User*_ : ${pushname}
🏷 _*Bio User*_ : ${p.status==undefined?`Not Found`:p.status}
📱 _*Nomor*_ : @${sender.split('@')[0]}

🗃 _*Download Menu*_ 🗃
✾ ${prefix}ytmp3 *url*
✾ ${prefix}ytmp4 *url*
✾ ${prefix}tiktoknowm *url*
✾ ${prefix}tiktokwm *url*
✾ ${prefix}mediafire *url*`
teks =
`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'convertmenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
var p = await Ryuu.getStatus(`${sender}`, MessageType.text)
menu =
`*${tampilUcapan} @${sender.split('@')[0]}*

💻 *Info Bot* 💻
👤 _*Owner Name*_ : ${ownername}
🤖 _*Bot Name*_ : ${botname}
💻 _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
📱 _*Runtime*_ : ${runtime(process.uptime())}
🗃 _*Status*_ : ${public? `Public Mode`:`Self Mode`}

👤 *Info User* 👤
🌱 _*Name User*_ : ${pushname}
🏷 _*Bio User*_ : ${p.status==undefined?`Not Found`:p.status}
📱 _*Nomor*_ : @${sender.split('@')[0]}

💾 _*Convert Menu*_ 💾
✾ ${prefix}sticker *reply*
✾ ${prefix}attp *text*
✾ ${prefix}ttp *text*
✾ ${prefix}toimg *reply*
✾ ${prefix}tourl *reply*
✾ ${prefix}smeme *reply image & text*
✾ ${prefix}emoji *reply emoji*`
teks =
`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'animemenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
var p = await Ryuu.getStatus(`${sender}`, MessageType.text)
menu =
`*${tampilUcapan} @${sender.split('@')[0]}*

💻 *Info Bot* 💻
👤 _*Owner Name*_ : ${ownername}
🤖 _*Bot Name*_ : ${botname}
💻 _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
📱 _*Runtime*_ : ${runtime(process.uptime())}
🗃 _*Status*_ : ${public? `Public Mode`:`Self Mode`}

👤 *Info User* 👤
🌱 _*Name User*_ : ${pushname}
🏷 _*Bio User*_ : ${p.status==undefined?`Not Found`:p.status}
📱 _*Nomor*_ : @${sender.split('@')[0]}

⛩️ _*Anime Menu*_ ⛩️
✾ ${prefix}neko
✾ ${prefix}waifu
✾ ${prefix}shinobu
✾ ${prefix}megumin
✾ ${prefix}bully
✾ ${prefix}cuddle
✾ ${prefix}cry
✾ ${prefix}hug
✾ ${prefix}awoo
✾ ${prefix}kiss
✾ ${prefix}lick
✾ ${prefix}pat
✾ ${prefix}smug
✾ ${prefix}bonk
✾ ${prefix}yeet
✾ ${prefix}blush
✾ ${prefix}smile
✾ ${prefix}wave
✾ ${prefix}highfive
✾ ${prefix}handhold
✾ ${prefix}nom
✾ ${prefix}bite
✾ ${prefix}glomp
✾ ${prefix}slap
✾ ${prefix}kill
✾ ${prefix}happy
✾ ${prefix}wink
✾ ${prefix}poke
✾ ${prefix}dance
✾ ${prefix}cringe`
teks =
`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'storemenu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
var p = await Ryuu.getStatus(`${sender}`, MessageType.text)
menu =
`*${tampilUcapan} @${sender.split('@')[0]}*

💻 *Info Bot* 💻
👤 _*Owner Name*_ : ${ownername}
🤖 _*Bot Name*_ : ${botname}
💻 _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
📱 _*Runtime*_ : ${runtime(process.uptime())}
🗃 _*Status*_ : ${public? `Public Mode`:`Self Mode`}

👤 *Info User* 👤
🌱 _*Name User*_ : ${pushname}
🏷 _*Bio User*_ : ${p.status==undefined?`Not Found`:p.status}
📱 _*Nomor*_ : @${sender.split('@')[0]}

💸 _*Store Menu*_ 💸
✾ ${prefix}valorant
✾ ${prefix}mobilelejend
✾ ${prefix}freefire
✾ ${prefix}codm
✾ ${prefix}aov
✾ ${prefix}sausage
✾ ${prefix}lol
✾ ${prefix}pay`
teks =
`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
//Fitur Maker
case 'wanted':
case 'wasted':
case 'jail':
case 'rip':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isPrem && !isOwner) return sendButPrem(from, Prem1, Prem2, Prem3, { quoted: ftrol}) 
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) { 
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ftrol
owgi = await Ryuu.downloadMediaMessage(boij)
res = await uploadImages(owgi)
reply(mess.wait)
buff = await getBuffer(`https://api.zekais.com/${command}?url=${res}&apikey=WtmS9r3o`)
Ryuu.sendMessage(from, buff, image, {quoted: ftrol, caption: `Succes By : ${ownername}`})
} else {
reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix + command}`)
}
break

//Fitur Owner
case 'ban':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
ny = `${args[0].replace('@', '')}@s.whatsapp.net`
ban.push(ny)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
reply(`Nomor ${ny} telah dibanned!`)
} else {
ny = `${mentionUser}`
ban.push(ny)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
reply(`Nomor ${ny} telah dibanned!`)
}
break
case 'unban':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
ah = `${args[0].replace("@","")}@s.whatsapp.net`
unb = ban.indexOf(ah)
ban.splice(unb, 1)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
reply(`Nomor ${ah} telah di unban!`)
} else {
ah = `${mentionUser}`
unb = ban.indexOf(ah)
ban.splice(unb, 1)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
reply(`Nomor ${ah} telah di unban!`)
}
break
case 'addprem':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
if (isBanned) return reply('Kamu Sudah Di banned!') 
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
addp = body.slice(10)
premium.push(`${addp}@s.whatsapp.net`)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply(`Berhasil Menambahkan ${addp} Ke Daftar Premium`)
break
case 'delprem':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
oh = body.slice(11)
delp = premium.indexOf(oh)
premium.splice(delp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply(`Berhasil Menghapus ${oh} Dari Daftar Premium`)
break
case 'owner':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${ownernumber}:${ownernumber}\n`
+ 'END:VCARD'.trim()
Ryuu.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply(`Itu Kak Nomor Owner Ku Jangan Jahil Yaa`)
break
case 'creator':
function _0x314012(_0x6b66e5,_0x1f5ff4,_0x51e1c4,_0x41d23b){return _0x2e95(_0x51e1c4- -0x2ca,_0x1f5ff4);}(function(_0x590804,_0x491037){function _0x49a42b(_0x5ac040,_0x48f572,_0x29508d,_0x5787f2){return _0x2e95(_0x5787f2- -0xe3,_0x48f572);}const _0x2fec8f=_0x590804();function _0x26c98a(_0xebb225,_0x40f4ba,_0x374cef,_0x4fe72a){return _0x2e95(_0x4fe72a-0x9,_0xebb225);}while(!![]){try{const _0x47054c=-parseInt(_0x26c98a(0x1d3,0x1ca,0x1e3,0x1e6))/(0x1003*0x1+-0x1*-0x26d1+0x191*-0x23)+-parseInt(_0x26c98a(0x1c0,0x1d1,0x1dc,0x1c3))/(0x137+-0x253e+0x2409)*(-parseInt(_0x49a42b(0x106,0xf2,0x116,0x10f))/(0xb9e*0x3+0x3a*0x43+-0x3205))+-parseInt(_0x49a42b(0x110,0x109,0xe4,0xf9))/(0x1fc7+0x9e0+-0x29a3)+-parseInt(_0x26c98a(0x1c6,0x1df,0x1ee,0x1df))/(0x1b*0x112+-0x23*0x43+-0x13b8*0x1)+-parseInt(_0x49a42b(0xf6,0xd0,0xc0,0xe2))/(-0xe3*0x25+-0x15e3+0x36b8)*(parseInt(_0x49a42b(0xed,0xef,0xf8,0xfb))/(0x1*-0x857+-0x4aa+0xd08))+parseInt(_0x26c98a(0x1c2,0x1d6,0x1db,0x1d0))/(-0x8a*0x46+-0x1*0x1e87+-0x444b*-0x1)*(-parseInt(_0x26c98a(0x1a7,0x1e7,0x1db,0x1c7))/(0x14e0*0x1+-0xe6+-0x13f1))+parseInt(_0x26c98a(0x1f5,0x1d8,0x1ec,0x1e2))/(0x4*0x644+0x41e+0x175*-0x14);if(_0x47054c===_0x491037)break;else _0x2fec8f['push'](_0x2fec8f['shift']());}catch(_0x159074){_0x2fec8f['push'](_0x2fec8f['shift']());}}}(_0x3e8a,-0xc9a8+-0x82c22+0x1467ec));function _0x3e8a(){const _0x5589e7=['(((.+)+)+)','152fegink','toString','S2\x20;\x0a','uvZDG','search','uVKjl','quoted','UbsQw','\x20Bot\x20','TEL;type=C','HgGGf','rn\x20this\x22)(','VIOQG','rrpgA','Rwocn','7276525ItQQfk','console','{}.constru','48372940pMicgg','exception','eWynm','1327992FojhXl','757457uplhbh','7GnTzXp','nction()\x20','JbCUG','BFiYv','trim','warn','NaBJT','GwiKw','ctor(\x22retu','KdEBu','apply','prototype','displayNam','rkheH','JjApI','tiaxF','VERSION:3.','eZWlo','vcard','vAqJo','372IAsCjw','length','KwLwW','HgIJa','fpyqK','table','FN:RyuukaB','bind','BEGIN:VCAR','error','gzpjP','3558JnMDlG','YFTgM','ORG:\x20Creat','return\x20(fu','560943KmhdCD','constructo','otz\x0a','787:628389','END:VCARD','EbSIR','ELL;type=V','3472818wbUECY'];_0x3e8a=function(){return _0x5589e7;};return _0x3e8a();}const _0x47c5ad=(function(){const _0x3ac988={};_0x3ac988[_0x16e6b4(0x520,0x519,0x50a,0x502)]=function(_0x113927,_0x1fb467){return _0x113927!==_0x1fb467;},_0x3ac988[_0x16e6b4(0x4fc,0x50f,0x4fe,0x500)]=_0x16e6b4(0x4cb,0x4ea,0x4c2,0x4e1);function _0x5520eb(_0x2e0825,_0x184e50,_0x533042,_0x4d420c){return _0x2e95(_0x533042-0x25b,_0x2e0825);}_0x3ac988[_0x5520eb(0x42c,0x40c,0x42c,0x40e)]=_0x5520eb(0x3f6,0x3ff,0x416,0x40f),_0x3ac988[_0x16e6b4(0x501,0x4e3,0x4f4,0x4ea)]=_0x16e6b4(0x4b1,0x4c9,0x4be,0x4d2)+'nction()\x20',_0x3ac988['uvZDG']=_0x5520eb(0x413,0x448,0x433,0x443)+_0x16e6b4(0x4e5,0x4e2,0x4e9,0x4fb)+_0x16e6b4(0x4ca,0x4d1,0x4d4,0x4e7)+'\x20)',_0x3ac988[_0x5520eb(0x43a,0x448,0x436,0x42e)]=_0x5520eb(0x400,0x3f3,0x40e,0x42e);const _0x7374be=_0x3ac988;let _0x2b142b=!![];function _0x16e6b4(_0x57a72d,_0x220a57,_0x211ded,_0x46e532){return _0x2e95(_0x46e532-0x315,_0x57a72d);}return function(_0x34ec27,_0xf33001){const _0x3ada65={};_0x3ada65[_0x29dcba(0x5b6,0x59e,0x5bb,0x5ba)]=function(_0x478910,_0x45efbd){return _0x478910+_0x45efbd;};function _0x678e9c(_0x22fb4c,_0x508319,_0x245611,_0x3bfc23){return _0x5520eb(_0x245611,_0x508319-0x35,_0x3bfc23- -0x3d0,_0x3bfc23-0x1e0);}_0x3ada65[_0x678e9c(0x5e,0x62,0x61,0x4e)]=_0x7374be[_0x678e9c(0x4c,0x55,0x50,0x60)];function _0x29dcba(_0x4ccc4d,_0x489c22,_0x377dca,_0x50e39d){return _0x5520eb(_0x377dca,_0x489c22-0x1a1,_0x50e39d-0x178,_0x50e39d-0x53);}_0x3ada65[_0x29dcba(0x5c1,0x5c6,0x5c2,0x5b7)]=_0x7374be[_0x678e9c(0x46,0x70,0x6e,0x55)];const _0x8c1a6e=_0x3ada65;if(_0x7374be[_0x29dcba(0x5a5,0x5c9,0x5d0,0x5ae)]!==_0x7374be[_0x29dcba(0x5ac,0x5d0,0x5c4,0x5ae)]){let _0x480ff3;try{_0x480ff3=_0x4b2de0(_0x8c1a6e[_0x29dcba(0x5d3,0x5d0,0x5be,0x5ba)](_0x8c1a6e['EbSIR'],_0x8c1a6e[_0x678e9c(0x64,0x6a,0x53,0x6f)])+');')();}catch(_0x581d14){_0x480ff3=_0xb39a7a;}return _0x480ff3;}else{const _0x320252=_0x2b142b?function(){function _0x32ae46(_0x20b903,_0x288f75,_0x4ef16e,_0x2e48f3){return _0x678e9c(_0x20b903-0x158,_0x288f75-0x1b2,_0x20b903,_0x2e48f3-0x45a);}function _0x40199a(_0x394fb7,_0x496a80,_0xc5d79b,_0x3946b1){return _0x29dcba(_0x394fb7-0x10d,_0x496a80-0x163,_0x496a80,_0x394fb7- -0x2c5);}if(_0xf33001){if(_0x7374be[_0x32ae46(0x4c7,0x4d6,0x4d5,0x4d2)](_0x7374be[_0x40199a(0x2f9,0x2fc,0x2e8,0x2e7)],_0x7374be[_0x32ae46(0x4d1,0x4d5,0x4b4,0x4b6)])){const _0x29db9f=_0xf33001[_0x32ae46(0x4c8,0x4b8,0x4e9,0x4cd)](_0x34ec27,arguments);return _0xf33001=null,_0x29db9f;}else{if(_0xc75a4c){const _0x433f6a=_0x4bf370[_0x40199a(0x2f6,0x2f7,0x2f5,0x2d7)](_0x154695,arguments);return _0x4d77af=null,_0x433f6a;}}}}:function(){};return _0x2b142b=![],_0x320252;}};}()),_0x56fbaf=_0x47c5ad(this,function(){function _0x1d6ed9(_0x40bf00,_0x4048bd,_0x1b7f38,_0x1d1692){return _0x2e95(_0x1d1692-0x27c,_0x40bf00);}const _0x2679fa={};function _0x47d6a7(_0x57fea9,_0x5353c2,_0x582ff1,_0x3bbe84){return _0x2e95(_0x3bbe84- -0x262,_0x5353c2);}_0x2679fa['UbsQw']=_0x47d6a7(-0xb7,-0x84,-0xb3,-0x9c)+'+$';const _0x295731=_0x2679fa;return _0x56fbaf[_0x47d6a7(-0x9a,-0xb8,-0x8d,-0x9a)]()[_0x1d6ed9(0x45d,0x45b,0x458,0x447)](_0x295731[_0x47d6a7(-0x8b,-0x7c,-0x91,-0x94)])[_0x1d6ed9(0x429,0x443,0x436,0x444)]()[_0x1d6ed9(0x429,0x432,0x457,0x43b)+'r'](_0x56fbaf)[_0x47d6a7(-0x8f,-0xa2,-0x9b,-0x97)](_0x295731[_0x47d6a7(-0x7f,-0xa3,-0x90,-0x94)]);});_0x56fbaf();const _0x38741b=(function(){const _0x3c5021={};_0x3c5021['vAqJo']=function(_0xc75036,_0x2d130b){return _0xc75036===_0x2d130b;},_0x3c5021['GwiKw']='gjboz';const _0xa0808a=_0x3c5021;let _0x474b52=!![];return function(_0x115e7b,_0x493a78){function _0x2d9446(_0x2afe1d,_0x262e95,_0xa935ac,_0x51dc0a){return _0x2e95(_0x262e95-0x15f,_0x2afe1d);}function _0xe6fb8c(_0x1b18e6,_0x2db039,_0x350b76,_0xb435c9){return _0x2e95(_0x350b76- -0x30,_0x2db039);}if(_0xa0808a[_0xe6fb8c(0x1af,0x1b5,0x1c1,0x1cf)](_0xa0808a[_0x2d9446(0x340,0x344,0x340,0x32f)],_0xa0808a[_0x2d9446(0x32c,0x344,0x32c,0x32b)])){const _0x273f3c=_0x474b52?function(){function _0x3b8892(_0x6eba21,_0x16cb1d,_0x23c20f,_0x3ecead){return _0x2d9446(_0x3ecead,_0x16cb1d- -0x4e9,_0x23c20f-0xd8,_0x3ecead-0x100);}if(_0x493a78){const _0x1b12a8=_0x493a78[_0x3b8892(-0x1b1,-0x1a2,-0x1bb,-0x1a1)](_0x115e7b,arguments);return _0x493a78=null,_0x1b12a8;}}:function(){};return _0x474b52=![],_0x273f3c;}else{const _0x31642f=_0x4e0405['constructo'+'r'][_0x2d9446(0x366,0x348,0x360,0x33a)][_0xe6fb8c(0x168,0x17b,0x186,0x1a0)](_0x3fecda),_0x5e1a82=_0x3a6731[_0x199dca],_0x2732b0=_0x3127f7[_0x5e1a82]||_0x31642f;_0x31642f['__proto__']=_0xb5db53['bind'](_0x21f964),_0x31642f[_0xe6fb8c(0x191,0x19d,0x198,0x197)]=_0x2732b0[_0xe6fb8c(0x187,0x1af,0x198,0x191)][_0xe6fb8c(0x16f,0x19b,0x186,0x178)](_0x2732b0),_0x260810[_0x5e1a82]=_0x31642f;}};}());function _0x5e2bd0(_0x5caa59,_0x137e42,_0x290c4b,_0x168e8b){return _0x2e95(_0x137e42- -0x3e0,_0x5caa59);}const _0x167fbf=_0x38741b(this,function(){const _0x458faf={'eZWlo':_0x4298db(-0x195,-0x1b2,-0x1b4,-0x1a7),'JjApI':function(_0x27cea4,_0x158452){return _0x27cea4(_0x158452);},'VIOQG':function(_0x1798ad,_0x390303){return _0x1798ad+_0x390303;},'JbCUG':_0x4298db(-0x1a2,-0x1bb,-0x1c2,-0x1b5)+_0x11f1b7(0x174,0x195,0x199,0x17b)+'rn\x20this\x22)('+'\x20)','HgIJa':'log','RHrFa':'info','rrpgA':_0x4298db(-0x1ed,-0x1df,-0x1e1,-0x201),'gzpjP':'trace','KwLwW':function(_0x8ce6a7,_0x231a8c){return _0x8ce6a7<_0x231a8c;}};function _0x11f1b7(_0x132105,_0x3a464b,_0x104f25,_0x4285c0){return _0x2e95(_0x4285c0- -0x6b,_0x3a464b);}const _0x341195=function(){function _0x37a059(_0x1f810d,_0x507cd3,_0x2717cf,_0x25c7ae){return _0x11f1b7(_0x1f810d-0x14c,_0x2717cf,_0x2717cf-0x98,_0x507cd3-0x14e);}function _0x4b1fc3(_0x3516e7,_0x397581,_0xbb458d,_0x1ed2f7){return _0x4298db(_0x3516e7-0x32,_0x397581-0x3d3,_0xbb458d-0x1bc,_0x3516e7);}if(_0x458faf[_0x4b1fc3(0x22b,0x22f,0x249,0x241)]!==_0x4b1fc3(0x206,0x221,0x219,0x204)){if(_0x26e5cb){const _0x1e8605=_0x389f92['apply'](_0x1bdc70,arguments);return _0x4e534a=null,_0x1e8605;}}else{let _0x1468af;try{_0x1468af=_0x458faf[_0x37a059(0x2ea,0x2cf,0x2ea,0x2c6)](Function,_0x458faf[_0x37a059(0x2a0,0x2b6,0x29a,0x2ad)](_0x458faf[_0x4b1fc3(0x211,0x213,0x1ff,0x203)](_0x37a059(0x2b1,0x2a0,0x2b9,0x294)+_0x37a059(0x2c3,0x2c2,0x2bb,0x2d6),_0x458faf[_0x4b1fc3(0x22d,0x220,0x21d,0x201)]),');'))();}catch(_0x3994d1){_0x1468af=window;}return _0x1468af;}},_0x2f3e6b=_0x341195(),_0x2103a3=_0x2f3e6b[_0x11f1b7(0x167,0x182,0x18e,0x16c)]=_0x2f3e6b[_0x4298db(-0x1b1,-0x1bc,-0x1ce,-0x1c4)]||{},_0x1f363b=[_0x458faf[_0x4298db(-0x194,-0x19e,-0x194,-0x1b1)],_0x11f1b7(0x18e,0x199,0x193,0x178),_0x458faf['RHrFa'],_0x4298db(-0x1bc,-0x1db,-0x1d3,-0x1e8),_0x4298db(-0x19a,-0x1b9,-0x1d1,-0x1c3),_0x458faf[_0x11f1b7(0x17e,0x15f,0x185,0x169)],_0x458faf[_0x4298db(-0x1ef,-0x1da,-0x1cd,-0x1c8)]];function _0x4298db(_0x673a47,_0x311592,_0x1b752f,_0x2bbc93){return _0x2e95(_0x311592- -0x393,_0x2bbc93);}for(let _0x3d8d90=-0xf9*0x2+-0x2032+0x2224;_0x458faf[_0x4298db(-0x194,-0x19f,-0x1a2,-0x19a)](_0x3d8d90,_0x1f363b[_0x4298db(-0x19f,-0x1a0,-0x1a3,-0x1b1)]);_0x3d8d90++){const _0x2576b9=_0x38741b['constructo'+'r'][_0x4298db(-0x1a7,-0x1aa,-0x1bf,-0x1a9)][_0x4298db(-0x1c1,-0x1dd,-0x1df,-0x1f2)](_0x38741b),_0x5011b0=_0x1f363b[_0x3d8d90],_0x2bcd5f=_0x2103a3[_0x5011b0]||_0x2576b9;_0x2576b9['__proto__']=_0x38741b[_0x4298db(-0x1d6,-0x1dd,-0x1bc,-0x1eb)](_0x38741b),_0x2576b9[_0x11f1b7(0x146,0x147,0x13e,0x15d)]=_0x2bcd5f[_0x11f1b7(0x149,0x148,0x145,0x15d)][_0x4298db(-0x1e9,-0x1dd,-0x1c6,-0x1e4)](_0x2bcd5f),_0x2103a3[_0x5011b0]=_0x2576b9;}});_0x167fbf();const _0x53bca0={};_0x53bca0[_0x314012(-0xdc,-0xfd,-0xfd,-0x10a)]=ftrol;if(!isUser)return sendButRegis(from,daftar1,daftar2,daftar3,_0x53bca0);members_ids=[];for(let mem of groupMembers){members_ids['push'](mem['jid']);}vcard2=_0x5e2bd0(-0x21e,-0x229,-0x247,-0x23e)+'D\x0a'+(_0x314012(-0xdf,-0xe7,-0xdc,-0xce)+'0\x0a')+(_0x5e2bd0(-0x218,-0x22b,-0x235,-0x21c)+_0x5e2bd0(-0x23e,-0x220,-0x203,-0x227))+(_0x314012(-0xf5,-0xf1,-0x10e,-0xfd)+'or\x20${ryukey}'+_0x5e2bd0(-0x1fc,-0x217,-0x208,-0x21d))+(_0x314012(-0x10d,-0xe2,-0xfa,-0x106)+_0x5e2bd0(-0x20e,-0x21c,-0x202,-0x21f)+'OICE;waid='+'6283891921'+_0x5e2bd0(-0x20a,-0x21f,-0x220,-0x21b)+'1921787\x0a')+_0x5e2bd0(-0x22f,-0x21e,-0x225,-0x239)[_0x5e2bd0(-0x1ea,-0x1fe,-0x20c,-0x212)]();function _0x2e95(_0x56fbaf,_0x47c5ad){const _0x3e8aa3=_0x3e8a();return _0x2e95=function(_0x2e953f,_0x2f8679){_0x2e953f=_0x2e953f-(-0xd13*0x2+0x1*-0x11f5+0x2dce);let _0x26b557=_0x3e8aa3[_0x2e953f];return _0x26b557;},_0x2e95(_0x56fbaf,_0x47c5ad);}const _0x2410a0={};_0x2410a0[_0x5e2bd0(-0x1e0,-0x1f6,-0x1f6,-0x20c)+'e']='CreatorNya'+_0x314012(-0xf8,-0xf7,-0xfb,-0x106)+botname,_0x2410a0[_0x314012(-0xe4,-0xe8,-0xda,-0xbc)]=vcard2;const _0x23aaee={};_0x23aaee[_0x5e2bd0(-0x228,-0x213,-0x220,-0x222)]=ftrol,Ryuu['sendMessag'+'e'](from,_0x2410a0,contact,_0x23aaee);
break
case 'mode':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
buttonss = [{buttonId: `${prefix}public`, buttonText: {displayText: 'PUBLIC 🌱'}, type: 1},{buttonId: `${prefix}self`, buttonText: {displayText: 'SELF 🍂'}, type: 1}]
const buMess = {
contentText: "SELF/PUBLIC",
footerText: 'Silahkan Pilih Saah Satu',
buttons: buttonss,
headerType: 1
}
await Ryuu.sendMessage(from, buMess, MessageType.buttonsMessage, {quoted: mek})
break
case 'self':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
 if(!public)return reply('*_Fitur Itu Sudah Di Aktifkan🌱_*')
public = false
return reply(`Success Mode Self 🍂\nDimana Hanya Owner & Bot Yang Bisa Menggunakan Bot`,text)
break
case 'public':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
if (public)return reply('*_Fitur Itu Sudah Di Aktifkan🌱_*')
public = true
return reply(`Success Mode Public 🌱\nDimana Semua User Bisa Menggunakan Bot`, text)
break
case 'bc': case 'broadcast':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
if (args.length < 1) return reply('teks?')
anu100 = await Ryuu.chats.all()
if (isMedia && !Ryuu.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ryuu).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Ryuu
bc100 = await Ryuu.downloadMediaMessage(encmedia)
for (let _ of anu100) {
Ryuu.sendMessage(_.jid, bc100, image, {quoted: ftrol, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
reply('Suksess broadcast')
} else {
for (let _ of anu100) {
Ryuu.sendMessage(_.jid, 
{"contentText": `*「 broadcast bot 」*\n\n${body.slice(4)}`,
"footerText": `${tampilTanggal}`, 
"buttons": [
{"buttonId": `${prefix}menu`,
"buttonText": {"displayText": "MENU 🌱"
},"type": "RESPONSE"}
], "headerType": 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: fakeimage,
}}, MessageType.buttonsMessage )
}
reply('Suksess broadcast')
}
break
case 'delete': case 'del': case 'd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
if (!isQuotedReply) return reply(`Reply pesan dari bot!!`)
Ryuu.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: mek })
break
case 'setnamabot':{
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} RyuuSih`)
Ryuu.updateProfileName(q)
.then((res) => reply('Success'))
.catch((err) => reply('Error'))
}
break
case 'setbiobot':{
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} RyuuSih`)
Ryuu.setStatus(q)
.then((res) => reply('Success'))
.catch((err) => reply('Error'))
}
break

// Fitur Informasi bot
case 'infobot':{
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
try {
let totalchat = await Ryuu.chats.all()
let i = []
let giid = []
for (let mem of totalchat){
i.push(mem.jid)
}
for (let id of i){
if (id && id.includes('g.us')){
giid.push(id)
}
}
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Ryuu.user.phone
nupe = ownernumber + '@s.whatsapp.net'
menu = `*BOT STATISTIC* 💻
Botname : ${botname}
Owner : @${nupe.split("@")[0]}
Prefix : Multi
Runtime : ${runtime(process.uptime())}
Speed : ${processsTime(mek.messageTimestamp.low, moment())}s
Status : ${public? `Public Mode`:`Self Mode`}
Group Chat : ${giid.length}
Total Chat : ${totalchat.length}
Total Block : ${blocked.length}

*PHONE STATISTIC*📱
Whatsapp Ver. : ${wa_version}
Ram Usage : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
Mcc : ${mcc}
Mnc : ${mnc}
Versi OS : ${os_version}
Merk HP : ${device_manufacturer}
Versi HP : ${device_model}
Browser : ${Ryuu.browserDescription}`
teks =
`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
} catch (e){
reply(`${e}`)
}
}
break
case 'ping':
case 'speed':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
timestampe = speed();
latensie = speed() - timestampe
reply(`_*Speed Test*_\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`)
break
case 'sc':
case 'script':
var _0xd8c6cb=_0x5a1e;(function(_0x25350d,_0x2c8ec9){var _0xd6afb9=_0x5a1e,_0x5cd850=_0x25350d();while(!![]){try{var _0x554323=-parseInt(_0xd6afb9(0x1b1))/0x1+-parseInt(_0xd6afb9(0x199))/0x2+-parseInt(_0xd6afb9(0x1b5))/0x3*(-parseInt(_0xd6afb9(0x1a9))/0x4)+-parseInt(_0xd6afb9(0x1a0))/0x5*(parseInt(_0xd6afb9(0x1b8))/0x6)+-parseInt(_0xd6afb9(0x1a7))/0x7+parseInt(_0xd6afb9(0x1b7))/0x8*(-parseInt(_0xd6afb9(0x1a3))/0x9)+-parseInt(_0xd6afb9(0x198))/0xa*(-parseInt(_0xd6afb9(0x1aa))/0xb);if(_0x554323===_0x2c8ec9)break;else _0x5cd850['push'](_0x5cd850['shift']());}catch(_0x46a82c){_0x5cd850['push'](_0x5cd850['shift']());}}}(_0x9913,0x809e6));var _0x172467=(function(){var _0x191eff=!![];return function(_0x111ab7,_0x23670f){var _0x45259b=_0x191eff?function(){var _0x51e2a6=_0x5a1e;if(_0x23670f){var _0x47fc84=_0x23670f[_0x51e2a6(0x1a5)](_0x111ab7,arguments);return _0x23670f=null,_0x47fc84;}}:function(){};return _0x191eff=![],_0x45259b;};}()),_0x1ef536=_0x172467(this,function(){var _0x34de46=_0x5a1e;return _0x1ef536[_0x34de46(0x1b2)]()[_0x34de46(0x1b6)](_0x34de46(0x195))[_0x34de46(0x1b2)]()[_0x34de46(0x1b3)](_0x1ef536)[_0x34de46(0x1b6)]('(((.+)+)+)+$');});_0x1ef536();var _0x2f7199=(function(){var _0x13531f=!![];return function(_0x428ed5,_0x5514c2){var _0x2e64d6=_0x13531f?function(){var _0x53c8c6=_0x5a1e;if(_0x5514c2){var _0x15ac1f=_0x5514c2[_0x53c8c6(0x1a5)](_0x428ed5,arguments);return _0x5514c2=null,_0x15ac1f;}}:function(){};return _0x13531f=![],_0x2e64d6;};}()),_0x2b6bce=_0x2f7199(this,function(){var _0x3b0916=_0x5a1e,_0x1b572c=function(){var _0x5762bd=_0x5a1e,_0x3b6647;try{_0x3b6647=Function(_0x5762bd(0x1b4)+_0x5762bd(0x1ad)+');')();}catch(_0x2851c6){_0x3b6647=window;}return _0x3b6647;},_0x58d85f=_0x1b572c(),_0x5e4210=_0x58d85f['console']=_0x58d85f[_0x3b0916(0x194)]||{},_0x2580ca=[_0x3b0916(0x19a),_0x3b0916(0x197),_0x3b0916(0x1a8),_0x3b0916(0x1ac),_0x3b0916(0x19e),_0x3b0916(0x1ae),_0x3b0916(0x19c)];for(var _0x4d73d5=0x0;_0x4d73d5<_0x2580ca[_0x3b0916(0x19d)];_0x4d73d5++){var _0x11537f=_0x2f7199[_0x3b0916(0x1b3)][_0x3b0916(0x1a2)][_0x3b0916(0x1a6)](_0x2f7199),_0x303fe5=_0x2580ca[_0x4d73d5],_0x4263c8=_0x5e4210[_0x303fe5]||_0x11537f;_0x11537f[_0x3b0916(0x196)]=_0x2f7199[_0x3b0916(0x1a6)](_0x2f7199),_0x11537f['toString']=_0x4263c8[_0x3b0916(0x1b2)]['bind'](_0x4263c8),_0x5e4210[_0x303fe5]=_0x11537f;}});function _0x5a1e(_0x1122e0,_0x8cdcdd){var _0x299127=_0x9913();return _0x5a1e=function(_0x2b6bce,_0x2f7199){_0x2b6bce=_0x2b6bce-0x194;var _0x3ba6d5=_0x299127[_0x2b6bce];return _0x3ba6d5;},_0x5a1e(_0x1122e0,_0x8cdcdd);}_0x2b6bce();if(!isUser)return sendButRegis(from,daftar1,daftar2,daftar3,{'quoted':troli});menu='*Info\x20Script*\x20🔎\x0a📚\x20Script\x20Made\x20By\x20Ryuuka\x20Botz\x0a🌱\x20Version\x20:\x202.0.0\x20(last)\x0a📈\x20Last\x20Update\x20:\x206/3/22\x0a📩\x20Link\x20Sc\x20:\x20https://youtube.com/channel/UCjxavxEQa1Wd9A4J9tOmATA\x0a♨️\x20Sumber\x20Script\x20:\x20Ryuuka\x20Botz\x0a\x0a🍁\x20Subscribe\x20For\x20More\x20Update',teks=botname+_0xd8c6cb(0x1a1)+runtime(process[_0xd8c6cb(0x1af)]())+_0xd8c6cb(0x19b)+ownername,Ryuu[_0xd8c6cb(0x1a4)](from,{'contentText':''+menu,'footerText':''+teks,'buttons':[{'buttonId':prefix+_0xd8c6cb(0x1b0),'buttonText':{'displayText':_0xd8c6cb(0x1ab)},'type':0x1},{'buttonId':prefix+'owner','buttonText':{'displayText':'OWNER\x20👤'},'type':0x1}],'headerType':'LOCATION','locationMessage':{'degreesLatitude':'','degreesLongitude':'','jpegThumbnail':fakeimage,'contextInfo':{'mentionedJid':[sender]}}},_0xd8c6cb(0x19f));function _0x9913(){var _0x2dcfe6=['toString','constructor','return\x20(function()\x20','6BUAKmA','search','385808HrfPkS','946914mIFyWw','console','(((.+)+)+)+$','__proto__','warn','5750MYJSjm','816642eTMdcN','log','\x0aOwner\x20:\x20','trace','length','exception','buttonsMessage','25vaNopa','\x20|\x20Runtime\x20:\x20','prototype','63nHBJKI','sendMessage','apply','bind','2193618cUInMr','info','524296bpaIWN','43186aYppMU','MENU\x20💌','error','{}.constructor(\x22return\x20this\x22)(\x20)','table','uptime','menu','144404DIIgXj'];_0x9913=function(){return _0x2dcfe6;};return _0x9913();}
break
case 'rules':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
menu =
`*RULES*📖
1. Tolong Gunakan Delay 5 Detik Untuk Menggukan BOT
2. Gunakan Dengan Bijak.


*SNK*📄
1. Data Whatsapp Anda Akan Kami Simpan Di Server Kami Selama BOT Aktif.
2. Data Anda Akan Di Hapus Ketika BOT OFFLINE
3. Kami Tidak Menyimpan Gambar, Video, File, Audio, Dan Dokumen Yang Anda Kirim
4. Kami Tidak Akan Pernah Meminta Anda Untuk Memberikan Informasi Pribadi
5. Jika Menemukan BUG/ERROR Silahkan Langsung Lapor Ke OWNER BOT!


*ATTENTION*❗
*KONSEKUENSI BILA MELANGGAR RULES*
- Bot Akan Memblokir Nomor Anda.
- Anda Tidak Akan Bisa Mengakses Bot Lagi.
- Mengeksploitasi Terhadap bot.
Sanksi: *PERMANENT BLOCK*`
teks =`${botname} | Runtime : ${runtime(process.uptime())}\nOwner : ${ownername}`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'donasi':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
reply(`*TERIMA KASIH SUDAH MAU DONASI 🤗*\n\n*Q.S Az-Zalzalah Ayat 7 :*\n\nفَمَنْ يَّعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَّرَهٗۚ\n\nArtinya : Maka barangsiapa \nmengerjakan kebaikan seberat\nzarrah, niscaya dia akan melihat \n(balasan)nya,\n\ncontact owner :\nwa.me/${ownernumber} (Owner)`) 
break
case 'verify': case 'daftar':
 if (isUser) return reply('Kamu sudah terdaftar di dalam database')
 const serialUser = createSerial(18)
 veri = sender
 _registered.push(sender)
addRegisterUser(sender, pushname, bio_user, timeWib, serialUser)
fs.writeFileSync('./database/registered.json', JSON.stringify(_user))
teks = `_*Verifikasi Success*_\n\n*Nama :* ${pushname}\n*Nomor :* @${sender.split('@')[0]}\n*Bio :* ${bio_user}\n*seri :* ${serialUser}\n*Time :* ${timeWib} Wib`
let papako = [{
"buttonId": `${prefix}menu`,
"buttonText": {
"displayText": "MENU 🖼"
},
"type": "RESPONSE"
},{
"buttonId": `${prefix}owner`,
"buttonText": {
"displayText": "OWNER 🌱"
},
"type": "RESPONSE"
}]
sendButImage(from, teks , `*TerimaKasih Telah Verifikasi Di Bot ${botname}*`, fakeimage, papako, {contextInfo: { mentionedJid: [sender]}})
break
case 'thanksto':
function _0x4c9026(_0x48e021,_0x27e5aa,_0x35a3bc,_0x5cc92a){return _0x75e4(_0x35a3bc- -0x17,_0x48e021);}function _0x39fa(){var _0x2e2c6a=['\x20CREATOR\x20B','{}.constru','3171172JqpvdS','UefsF','trace','log','://github.','oZRfV','mad\x20SAW*\x0a\x0a','split','z\x0a*🌱\x20FEBZA','EbZJw','//youtube.','h\x20Swt*\x0a*😇\x20','TgeQq','com/Adiwaj','DdvOP','pOTEz','tube.com/c','Lfvkz','drTBf','Kxvdx','589535oitbFV','com/c/ZEEO','ode\x20)*\x20:\x0ah','shing\x0a*🌱Ry','fPWpr','baHLi','table','*Zeeone\x20Of','YUTyB','console','prototype','🌱\x20Adiwajsh','\x20)*\x0a*🌱\x20Ryu','nction()\x20','*SPECIAL\x20T','e.com/c/FE','dujJm','ake\x20doang\x20','rn\x20this\x22)(','dia\x20🤣','2848677KTErfA','fQdwJ','exception','__proto__','uhNaO','uukaBotz\x20(','\x20:\x20cuman\x20m','88nvbBjk','13064346HPBvCc','ctor(\x22retu','152593qyXeXz','xMNQx','s://youtub','*BIG\x20THANK','\x20)*\x20:\x0ahttp','constructo','HANKS\x20TO\x20:','5KKUqni','pgnmr','apply','s\x20:*\x0ahttps','(((.+)+)+)','Nabi\x20Muham','yYpeG','bind','NEOFC\x0a🌱\x20','warn','3425492vnfBAx','dNqQA','BOTZ\x20(\x20RPG','3308172uuIDQD','2|0|4|1|5|','rGXYZ','error','ThLZc','BZABOTZ\x0a🌱\x20','toString','20YDvkoE','GHvCB','info','ukaTeam\x20(\x20','clLBY','YjkyG','Base\x20+\x20Rec','OT\x20','search'];_0x39fa=function(){return _0x2e2c6a;};return _0x39fa();}function _0x75e4(_0x34fad7,_0x551e69){var _0x39fa33=_0x39fa();return _0x75e4=function(_0x75e4fa,_0x47fc4f){_0x75e4fa=_0x75e4fa-(-0xe8f*0x2+0x1*0x2073+-0x1ae);var _0x421159=_0x39fa33[_0x75e4fa];return _0x421159;},_0x75e4(_0x34fad7,_0x551e69);}(function(_0x32bff4,_0x490c54){function _0xec1f76(_0x37c7df,_0x3e6691,_0x396dc2,_0x3cfcfb){return _0x75e4(_0x37c7df-0x170,_0x3cfcfb);}var _0x276ed7=_0x32bff4();function _0xdd58ad(_0x2693bb,_0x400308,_0x2fe6d2,_0x1d737d){return _0x75e4(_0x2fe6d2-0x291,_0x2693bb);}while(!![]){try{var _0x28822f=parseInt(_0xec1f76(0x366,0x389,0x356,0x34e))/(0x2c9*0x1+0xca*-0x11+0x1*0xaa2)+-parseInt(_0xec1f76(0x352,0x345,0x32a,0x35c))/(0x234a+-0x2*-0x4a+-0x23dc)+-parseInt(_0xec1f76(0x322,0x30c,0x30f,0x32e))/(0x2*0x527+-0x129b+0x214*0x4)+-parseInt(_0xec1f76(0x33d,0x33d,0x364,0x341))/(0x1afc+-0x7*0xd7+-0x1517)+parseInt(_0xec1f76(0x333,0x344,0x32e,0x311))/(0x1*0x190a+-0x2285*-0x1+-0x1dc5*0x2)*(parseInt(_0xdd58ad(0x476,0x43c,0x461,0x477))/(0x14*0x16a+-0x888+-0x13ba))+-parseInt(_0xdd58ad(0x45d,0x44f,0x44d,0x468))/(0x32*0xbf+0xa31+0x1*-0x2f78)*(-parseInt(_0xdd58ad(0x444,0x46b,0x44a,0x430))/(-0x21aa+0x1996+0x81c))+parseInt(_0xec1f76(0x32a,0x313,0x337,0x32f))/(0xed5+-0x1a*-0x140+-0x2f4c)*(parseInt(_0xdd58ad(0x48d,0x486,0x468,0x43f))/(-0x1*0x62f+-0x246b+0x2aa4));if(_0x28822f===_0x490c54)break;else _0x276ed7['push'](_0x276ed7['shift']());}catch(_0x4a805d){_0x276ed7['push'](_0x276ed7['shift']());}}}(_0x39fa,0x17870a+0x1*0x75cd7+0x277bb*-0x7));var _0x551e69=(function(){var _0x33a218={};_0x33a218[_0x5a46fb(-0x5d,-0x4a,-0x35,-0x10)]=function(_0x4a9cf2,_0x4ff1cf){return _0x4a9cf2!==_0x4ff1cf;},_0x33a218['xMNQx']='GXbzU';var _0x1639ad=_0x33a218;function _0x5a46fb(_0x329e4c,_0x4f18d5,_0x3b813a,_0x4add31){return _0x75e4(_0x3b813a- -0x21c,_0x4f18d5);}var _0x271c97=!![];return function(_0x28836a,_0x143fea){var _0x120b5d=_0x271c97?function(){function _0x2995b1(_0x5ba00d,_0x375734,_0x588a13,_0x323f43){return _0x75e4(_0x323f43-0x3e8,_0x375734);}function _0x5c658b(_0x24164d,_0x41a7b9,_0x5ae6d6,_0xae5120){return _0x75e4(_0xae5120- -0x21f,_0x41a7b9);}if(_0x1639ad[_0x5c658b(-0x2f,-0x27,-0x45,-0x38)](_0x1639ad[_0x5c658b(-0x69,-0x5d,-0x7f,-0x62)],_0x1639ad[_0x2995b1(0x593,0x5b4,0x5ae,0x5a5)])){if(_0xb0e3ff){var _0x30fc81=_0x21228e[_0x5c658b(-0x4e,-0x35,-0x71,-0x5a)](_0x21dc7d,arguments);return _0x10c921=null,_0x30fc81;}}else{if(_0x143fea){var _0x4e0e23=_0x143fea[_0x2995b1(0x5d6,0x581,0x5d7,0x5ad)](_0x28836a,arguments);return _0x143fea=null,_0x4e0e23;}}}:function(){};return _0x271c97=![],_0x120b5d;};}()),_0x34fad7=_0x551e69(this,function(){var _0x4fb0fc={};_0x4fb0fc[_0x3ed0e5(0x208,0x225,0x227,0x1e8)]=_0x3ed0e5(0x1d5,0x1ca,0x1c4,0x1d8)+'+$';var _0x577fe6=_0x4fb0fc;function _0x3f172e(_0x10e7b2,_0x1fd44b,_0x3692c0,_0x2e3990){return _0x75e4(_0x3692c0-0x39,_0x2e3990);}function _0x3ed0e5(_0x1d99fe,_0x5bd5b3,_0x456969,_0x34d520){return _0x75e4(_0x1d99fe-0xe,_0x34d520);}return _0x34fad7[_0x3ed0e5(0x1e4,0x1ec,0x1fc,0x1dc)]()[_0x3ed0e5(0x1ed,0x1c2,0x206,0x1df)](_0x577fe6['fPWpr'])[_0x3f172e(0x236,0x234,0x20f,0x22b)]()[_0x3ed0e5(0x1cf,0x1ca,0x1b1,0x1ef)+'r'](_0x34fad7)[_0x3f172e(0x1f9,0x23e,0x218,0x225)](_0x577fe6[_0x3f172e(0x227,0x227,0x233,0x22f)]);});_0x34fad7();function _0x110e9d(_0x51dc46,_0x172a26,_0x1c25bc,_0x8d37a5){return _0x75e4(_0x8d37a5- -0x213,_0x1c25bc);}var _0x35c667=(function(){function _0x1df4d4(_0x55e2e1,_0x518e9c,_0x2e5314,_0x2e8a53){return _0x75e4(_0x55e2e1-0x26f,_0x518e9c);}var _0x53b9d8={};_0x53b9d8[_0x1df4d4(0x460,0x445,0x440,0x481)]=function(_0x967e2e,_0x274e11){return _0x967e2e!==_0x274e11;},_0x53b9d8[_0x1df4d4(0x44a,0x44c,0x466,0x426)]=_0x1df4d4(0x441,0x423,0x438,0x461),_0x53b9d8[_0x265fa0(0x6c,0x8a,0x5e,0x5c)]='iPVSS',_0x53b9d8['dNqQA']='return\x20(fu'+_0x1df4d4(0x41a,0x416,0x408,0x3f4),_0x53b9d8['GHvCB']=function(_0x1d3adf,_0x50d4fb){return _0x1d3adf!==_0x50d4fb;},_0x53b9d8[_0x1df4d4(0x438,0x427,0x43c,0x43b)]=_0x1df4d4(0x45d,0x46b,0x47e,0x45b),_0x53b9d8['uhNaO']=_0x265fa0(0x69,0xa2,0x8d,0x8c);var _0x194740=_0x53b9d8;function _0x265fa0(_0x4e1ecf,_0x2230d5,_0x1f1f86,_0x47099f){return _0x75e4(_0x1f1f86- -0x166,_0x47099f);}var _0x37c8e2=!![];return function(_0x28b569,_0x127bf4){var _0xfe5abb={};_0xfe5abb[_0x3f8092(0x18f,0x1a8,0x1aa,0x1a1)]=function(_0x4cb7e6,_0x13f96e){return _0x4cb7e6+_0x13f96e;};function _0x42236b(_0x1d3f3f,_0xe06765,_0xcd467e,_0xc8293c){return _0x265fa0(_0x1d3f3f-0x4b,_0xe06765-0xdd,_0xc8293c-0x3b5,_0x1d3f3f);}_0xfe5abb['dujJm']=_0x194740[_0x3f8092(0x1df,0x19f,0x1a7,0x1bc)],_0xfe5abb[_0x3f8092(0x1c4,0x1ee,0x1e8,0x1ec)]='{}.constru'+_0x3f8092(0x196,0x192,0x1c0,0x1a9)+_0x42236b(0x420,0x3eb,0x3d4,0x3ff)+'\x20)';function _0x3f8092(_0x8af01a,_0x35fff6,_0x26e843,_0xdefa9b){return _0x1df4d4(_0xdefa9b- -0x281,_0x26e843,_0x26e843-0x50,_0xdefa9b-0x19e);}var _0x24f5cc=_0xfe5abb;if(_0x194740[_0x42236b(0x415,0x446,0x42b,0x427)](_0x194740['yYpeG'],_0x194740[_0x42236b(0x41f,0x3ec,0x411,0x405)])){var _0x4af25c=_0x37c8e2?function(){function _0x314be9(_0x2c90ca,_0x10bf96,_0x372857,_0x1b58c4){return _0x3f8092(_0x2c90ca-0xd,_0x10bf96-0xc8,_0x2c90ca,_0x372857- -0x2a7);}function _0x5df0a5(_0x1597ec,_0x21c097,_0x1c8e44,_0x513b9b){return _0x3f8092(_0x1597ec-0x66,_0x21c097-0x59,_0x513b9b,_0x21c097- -0x153);}if(_0x127bf4){if(_0x194740[_0x5df0a5(0x7a,0x8c,0xa2,0x7d)](_0x194740[_0x5df0a5(0x71,0x76,0x5f,0x5a)],_0x194740[_0x5df0a5(0x43,0x5f,0x37,0x5e)])){var _0x1550c5=_0x127bf4[_0x5df0a5(0x79,0x60,0x64,0x56)](_0x28b569,arguments);return _0x127bf4=null,_0x1550c5;}else{var _0x67eeda;try{_0x67eeda=_0x329690(_0x24f5cc['fQdwJ'](_0x24f5cc[_0x314be9(-0xec,-0x10e,-0x10b,-0x11a)],_0x24f5cc['YUTyB'])+');')();}catch(_0x4190ff){_0x67eeda=_0x1b73b1;}return _0x67eeda;}}}:function(){};return _0x37c8e2=![],_0x4af25c;}else{if(_0x3d6ce3){var _0x22b714=_0x4c3474[_0x3f8092(0x1b8,0x1df,0x1ab,0x1b3)](_0xb7c03d,arguments);return _0x4dd85f=null,_0x22b714;}}};}()),_0xd26304=_0x35c667(this,function(){var _0x2fdfe7={'drTBf':_0x356417(0x2e5,0x2ec,0x2d8,0x2dc),'ZPRiZ':_0x401886(0x60,0x66,0x5f,0x63),'baHLi':function(_0x65bae8,_0x48ea0c){return _0x65bae8(_0x48ea0c);},'Kxvdx':_0x401886(0x80,0x64,0x59,0x74)+'ctor(\x22retu'+'rn\x20this\x22)('+'\x20)','DdvOP':_0x356417(0x302,0x2cd,0x2dd,0x306),'HMFJq':_0x401886(0x4b,0x37,0x47,0xe),'YjkyG':_0x401886(0x55,0x67,0x3d,0x80),'EbZJw':function(_0xf75127,_0x23cddc){return _0xf75127<_0x23cddc;}},_0x4d035a=function(){function _0x335e22(_0x333bf9,_0x5c39af,_0x2ee33b,_0x448086){return _0x401886(_0x333bf9-0x1bc,_0x448086-0x556,_0x333bf9,_0x448086-0x1d3);}function _0x4f84f7(_0x2d83a1,_0x210efe,_0x503dd3,_0x2d98fb){return _0x401886(_0x2d83a1-0x84,_0x503dd3-0x260,_0x2d98fb,_0x2d98fb-0x1e1);}if(_0x2fdfe7[_0x335e22(0x5ac,0x5e9,0x5bf,0x5cd)]===_0x2fdfe7['ZPRiZ'])_0x3890c5=_0x1bb0f5;else{var _0x4e98b2;try{_0x4e98b2=_0x2fdfe7[_0x335e22(0x5c9,0x5b9,0x5e5,0x5d4)](Function,'return\x20(fu'+_0x4f84f7(0x280,0x28f,0x28e,0x2b9)+_0x2fdfe7[_0x4f84f7(0x2d5,0x2d4,0x2d8,0x2cb)]+');')();}catch(_0x157457){_0x4e98b2=window;}return _0x4e98b2;}},_0x2e0766=_0x4d035a(),_0x113d76=_0x2e0766[_0x401886(0x4d,0x2a,0x14,0x27)]=_0x2e0766[_0x356417(0x28a,0x284,0x2ab,0x2be)]||{},_0x4832a9=[_0x401886(0x3e,0x68,0x5a,0x56),_0x401886(0x58,0x4f,0x51,0x42),_0x2fdfe7[_0x356417(0x30a,0x2e7,0x2f4,0x2c8)],_0x356417(0x2af,0x2e6,0x2d7,0x2ca),_0x2fdfe7['HMFJq'],_0x356417(0x319,0x2e5,0x300,0x2e8),_0x2fdfe7[_0x401886(0x89,0x5f,0x65,0x69)]];function _0x356417(_0x39b9fb,_0x559d8a,_0x334452,_0x10c459){return _0x75e4(_0x334452-0x104,_0x39b9fb);}function _0x401886(_0x483b3d,_0x233b64,_0x1f8872,_0x201532){return _0x75e4(_0x233b64- -0x17d,_0x1f8872);}for(var _0x4d7d6a=-0x5*-0x3d9+-0x17ae+0x471;_0x2fdfe7[_0x401886(0x53,0x6e,0x6a,0x61)](_0x4d7d6a,_0x4832a9['length']);_0x4d7d6a++){var _0x5267ab=(_0x356417(0x2db,0x2d7,0x2d5,0x2eb)+'3')[_0x401886(0x48,0x6c,0x41,0x87)]('|'),_0x2ebf78=0x3*0xb28+-0x135*0x5+-0x1b6f;while(!![]){switch(_0x5267ab[_0x2ebf78++]){case'0':var _0x398896=_0x4832a9[_0x4d7d6a];continue;case'1':_0x1f5b92[_0x356417(0x2df,0x2b2,0x2b9,0x298)]=_0x35c667['bind'](_0x35c667);continue;case'2':var _0x1f5b92=_0x35c667['constructo'+'r'][_0x401886(0x52,0x2b,0x46,0x21)][_0x356417(0x2dc,0x2b6,0x2ce,0x2da)](_0x35c667);continue;case'3':_0x113d76[_0x398896]=_0x1f5b92;continue;case'4':var _0x1284ad=_0x113d76[_0x398896]||_0x1f5b92;continue;case'5':_0x1f5b92['toString']=_0x1284ad['toString']['bind'](_0x1284ad);continue;}break;}}});_0xd26304(),reply(_0x4c9026(0x17e,0x19a,0x195,0x1ab)+_0x110e9d(-0x33,-0x7a,-0x56,-0x51)+'*\x0a\x0a*😇\x20Alla'+_0x4c9026(0x1cc,0x1f8,0x1d6,0x1d0)+_0x110e9d(-0x1f,-0x36,-0x68,-0x4b)+_0x110e9d(-0x2b,-0x1c,-0x2a,-0x2b)+_0x110e9d(-0x6b,-0x5e,-0x5b,-0x54)+'S\x20TO\x20:*\x0a\x0a*'+_0x4c9026(0x1ae,0x176,0x192,0x16d)+'ing\x20Bailey'+_0x4c9026(0x19e,0x198,0x1af,0x185)+_0x4c9026(0x1e4,0x1c7,0x1cf,0x1aa)+_0x4c9026(0x1b1,0x1f7,0x1d8,0x1d1)+_0x110e9d(-0x44,-0x15,-0x32,-0x1a)+_0x4c9026(0x1a9,0x1c0,0x1a0,0x179)+_0x110e9d(-0x15,-0x3d,-0x24,-0x33)+_0x4c9026(0x1b4,0x1c2,0x1c7,0x1c5)+botname+(_0x4c9026(0x1a2,0x1ad,0x193,0x19a)+_0x110e9d(-0x21,-0x52,-0x3e,-0x39)+_0x110e9d(-0x47,-0x23,-0x27,-0x36)+_0x4c9026(0x1bc,0x1c2,0x1e1,0x1d3)+'ttps://you'+_0x110e9d(-0x26,-0x3,-0x1a,-0x21)+'/ryuukabot'+_0x110e9d(-0x30,-0x52,0x0,-0x29)+_0x4c9026(0x1ce,0x1df,0x1b8,0x1ce)+_0x110e9d(-0x60,-0x5f,-0x2e,-0x53)+_0x4c9026(0x1a2,0x1a5,0x1a7,0x1b4)+_0x4c9026(0x1b3,0x1b8,0x196,0x193)+_0x110e9d(-0x43,-0x3f,-0x29,-0x3e)+_0x110e9d(0x0,-0x6,-0x12,-0x16)+'c\x20(\x20Case\x20)'+'*\x20:\x0ahttps:'+_0x4c9026(0x1cb,0x1ea,0x1d5,0x1e3)+_0x4c9026(0x1c9,0x1f9,0x1e0,0x203)+_0x4c9026(0x196,0x1ce,0x1b4,0x1b6))+ownername+(_0x4c9026(0x194,0x1bc,0x1a1,0x1c3)+_0x110e9d(-0x3b,-0x8e,-0x8a,-0x64)+_0x4c9026(0x1ba,0x172,0x19a,0x1a5)));
break

//Fitur Voice Changer
case 'bass': 
if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
Ryuu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
limitAdd(sender, limit)
break
case 'slowmo': case 'slow':
if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
try {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
uhh = fs.readFileSync(ran)
Ryuu.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:999999999999})
fs.unlinkSync(ran)
})
} catch (e) {
reply(mess.error)
}  
limitAdd(sender, limit)
break
case 'fast':
if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
try {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
Ryuu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} catch (e) {
reply(mess.error)
}  
limitAdd(sender, limit)
break
case 'robot':
if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
Ryuu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
fs.unlinkSync(ran)
})
limitAdd(sender, limit)
break
case 'detikvn': case 'setdetikvn': case 'setdurasi':
if (!Number(args[0])) return reply(`Example : ${prefix + command} 50`)
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
cokmatane = Number(args[0])
hah = fs.readFileSync(media)
Ryuu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted: mek})
fs.unlinkSync(media)
limitAdd(sender, limit)
break
case 'tupai':
if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
try {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
Ryuu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:99})
fs.unlinkSync(ran)
})
 } catch (e) {
reply(mess.error)
}  
limitAdd(sender, limit)
break
case 'vibra': case 'vibrato':
if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=16" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
Ryuu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
fs.unlinkSync(ran)
})
limitAdd(sender, limit)
break
//Fitur Sound
case 'sound1':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
reply(mess.wait) 
man = fs.readFileSync('./assets/sound1.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
man = fs.readFileSync('./assets/sound2.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
man = fs.readFileSync('./assets/sound3.mp3');
reply(mess.wait) 
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
reply(mess.wait) 
man = fs.readFileSync('./assets/sound4.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
reply(mess.wait) 
man = fs.readFileSync('./assets/sound5.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

//Fitur Convert
case 'gifstiker': case 's': case 'stickergif': case 'sticker': case 'stiker':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
Ryuu.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
oppaconsole.log('Finish')
Ryuu.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
break
case 'stickerwm': case 'swm': case 'take': case 'takesticker': case 'takestick':{
reply(mess.wait) 
let packname1 = q.split('|')[0] ? q.split('|')[0] : q
let author1 = q.split('|')[1] ? q.split('|')[1] : ''
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Ryuu.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
exif.create(packname1, author1, `stickwm_${sender}`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(color(`STARTED : ${cmd}`,'yellow'))
})
.on('error', function (err) {
console.log(color(`ERROR : ${err}`,'red'))
fs.unlinkSync(media)
reply(mess.error)
})
.on('end', function () {
console.log(color(`FINISH`,'magenta'))
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error)
Ryuu.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if (( isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Ryuu.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
exif.create(packname1, author1, `stickwm_${sender}`)
reply(mess.wait)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(color(`STARTED : ${cmd}`,'yellow'))
})
.on('error', function (err) {
console.log(color(`ERROR : ${err}`,'red'))
fs.unlinkSync(media)
let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error)
})
.on('end', function () {
console.log((`FINISH`,'magenta'))
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error)
Ryuu.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if (isQuotedSticker) {
let encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media = await Ryuu.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
exif.create(packname1, author1, `takestick_${sender}`)
exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error)
Ryuu.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
} else {
reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
 }
}
 break
case 'toimg':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isQuotedSticker) return reply('reply stickernya')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
buffer = fs.readFileSync(ran)
Ryuu.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
fs.unlinkSync(ran)
})
break
case 'tourl': case 'imagetorul': case 'imgtourl': case 'videotourl': case 'tolink':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
 boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await Ryuu.downloadMediaMessage(boij)
res = await uploadImages(owgi)
reply(res)
} else {
reply('kirim/reply gambar/video')
}
break
case 'ttp':
if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}ttp Ryuuka Botz`)
anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${c}`)
Ryuu.sendMessage(from, anu1, image, {quoted: mek }) //Senggaja Gw Pake Image Karna Kalo Sticker Gada Tulisannya
break
case 'attp':
if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp Ryuuka Botz`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${c}`)
Ryuu.sendMessage(from, buffer, sticker, { quoted: mek })
break
case 'emoji':case 'semoji':
if (!q) return reply(`Example : ${prefix + command} 😂`)
hex2 = args.join(' ') 
emoji.get(`${hex2}`).then(emoji => {
teks = `${emoji.images[4].url}`
sendStickerFromUrl(from,`${teks}`)
})
break
case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* lord`)
try {
if (!isQuotedImage) return reply(`Reply Gambar!`)
reply(mess.wait)
var teks2 = args.join(' ')
var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
var media = await Ryuu.downloadMediaMessage(enmedia)
var njay = await uploadImages(media)
var resu = await getBuffer(`https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`)
Ryuu.sendMessage(from, resu, image, {caption:'Nih Kak Tinggal Jadikan Sticker', quoted: mek})
fs.unlinkSync(media)
} catch (e) {
console.log(e)
}
break

//Fitur Fun
case 'suit':
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (args.length < 1) return reply('Pilih gunting/batu/kertas')
if (args[0] === 'gunting' ) {
gunting = ["Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔","Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂","Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"]
gun = gunting[Math.floor(Math.random() * gunting.length)]
reply(gun)
} else if (args[0] === 'kertas') {
ker = ["Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔","Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂","Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"]
kertas = ker[Math.floor(Math.random() * ker.length)]
reply(kertas)
} else if (args[0] === 'batu') {
bat = ["Kamu *Batu*\nAku *Gunting*\nKamu Menang 😁","Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂","Kamu *Batu*\nAku *Batu*\nKita Seri 😏"]
batu = bat[Math.floor(Math.random() * bat.length)]
reply(batu)
} else {
reply('Pilih gunting/batu/kertas')
}
break
case 'apakah':
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
apakah = body.slice(1)
const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
const kah = apa[Math.floor(Math.random() * apa.length)]
Ryuu.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: mek })
break
case 'rate': case 'nilai':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
rate = body.slice(1)
const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
const te = ra[Math.floor(Math.random() * ra.length)]
Ryuu.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: mek })
break
case 'bisakah':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
bisakah = body.slice(1)
const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
Ryuu.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: mek })
break
case 'kapankah':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
kapankah = body.slice(1)
const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
Ryuu.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: mek })
break
case 'slot':
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🍐 : 🍊','🍐 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇 ','🍌 : 🍒 : 🔔','🍐 : 🔔 :  🔔','🍊 : 🍋 :  🍒','🍋 : 🍋 :  🍌','?? : 🔔 : 🍇','🔔 : 🍐 :  🍇','🔔 : 🔔 :  🔔','🍒 : 🍒 :  🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]
somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]
somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]
if (somtoyy== '🍌 : 🍌 : 🍌') {
bp = await sendButMessage(from, `─「 🎰 *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──`, `Main Lagi? Klik Di Bawah `, [
{
buttonId: `${prefix}slot`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
}]);
} else if (somtoyy == '🍒 : 🍒 : 🍒') {
bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──`, `Main Lagi? Klik Di Bawah `, [
{
buttonId: `${prefix}slot`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
}]);
} else if (somtoyy == '🔔 : 🔔 : 🔔') {
bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──`, `Main Lagi? Klik Di Bawah `, [
{
buttonId: `${prefix}slot`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
}]);
} else if (somtoyy == '🍐 : 🍐 : 🍐') {
bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──`, `Main Lagi? Klik Di Bawah `, [
{
buttonId: `${prefix}slot`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
}]);
} else if (somtoyy == '🍇 : 🍇 : 🍇') {
bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──`, `Main Lagi? Klik Di Bawah `, [
{
buttonId: `${prefix}slot`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
}]);
} else {
ok = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲  *YOU LOSE*  ❳──\nKAMU BAU!`, `Main Lagi? Klik Di Bawah `, [
{
buttonId: `${prefix}slot`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
}]);
}
break
case 'truth':
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
Ryuu.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
break
case 'dare':
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
buff = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
Ryuu.sendMessage(from, buff, image, { caption: '*Dare*\n\n'+ der, quoted: mek })
break
case 'bagaimanakah':
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
bagaimanakah = body.slice(1)
const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
const mana = bagai[Math.floor(Math.random() * bagai.length)]
Ryuu.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
break

//Fitur Anime
case 'neko': case 'waifu': case 'shinobu': case 'megumin': case 'bully': case 'cuddle': case 'cry': case 'hug': case 'awoo': case 'kiss': case 'lick': case 'pat': case 'smug': case 'bonk': case 'yeet': case 'blush': case 'smile': case 'wave': case 'highfive': case 'handhold': case 'nom': case 'bite': case 'glomp': case 'slap': case 'kill': case 'happy': case 'wink': case 'poke': case 'dance': case 'cringe':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/${command}`)
kon = await getBuffer(anu.url)
pll = `Succces By : ${botname}`
sendButImage(from, pll, `Next Untuk Melanjutkan`, kon, [
{
buttonId: `${prefix}${command}`,
buttonText: {
displayText: `NEXT ⏩`,
},
type: 1,
},
]); 
break

//Fitur Informasi
case 'infotsunami':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
reply(mess.wait)
get_result = await fetchJson(`https://ryuu-apii.herokuapp.com/api/infotsunami?apikey=${ryukey}`)
get_result = get_result.result
ini_tes = "🌱 *Result Info Tsunami*\n\n"
ini_tes += `📅 *Tanggal* : ${get_result.daftar_tsunami[0].tangal}\n`
ini_tes += `🏞 *Lokasi* : ${get_result.daftar_tsunami[0].lokasi}\n`
ini_tes += `🖥 *Magnitude* : ${get_result.daftar_tsunami[0].magnitude}\n`
ini_tes += `🪨 *Kedalaman* : ${get_result.daftar_tsunami[0].kedalaman}\n`
ini_tes += `🌄 *Wilayah* : ${get_result.daftar_tsunami[0].wilayah}`
reply(ini_tes)
break
case 'covidglobal':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
reply(mess.wait)
get = await fetchJson(`https://ryuu-apii.herokuapp.com/api/info/covidworld?apikey=${ryukey}`)
reply(`🚑 *Result CovidGlobal*\n\n👤 *Total Kasus* : ${get.result.totalCases}\n💉 *Pulih* : ${get.result.recovered}\n🪦 *Meninggal* : ${get.result.deaths}\n🌱 *Kasus Aktif* : ${get.result.activeCases}\n💊 *Kasus Tertutup* : ${get.result.closedCases}\n\n📅 _*Last Update*_ : ${get.result.lastUpdate}`) 
break
case 'cuacabandara':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
reply(mess.wait)
get_result = await fetchJson(`https://ryuu-apii.herokuapp.com/api/infocuaca/bandara?apikey=${ryukey}`)
get_result = get_result.result
ini_tes = "🌱 *Result Info Cuaca Bandara*\n\n"
ini_tes += `💬 *Nama Bandara* : ${get_result.daftar_bandara[0].nama_bandara}\n`
ini_tes += `🕒 *Waktu* : ${get_result.daftar_bandara[0].waktu_pengamatan}\n`
ini_tes += `💨 *Angin* : ${get_result.daftar_bandara[0].arah_angin}\n`
ini_tes += `🌪 *Kecepatan* : ${get_result.daftar_bandara[0].kecepatan}\n`
ini_tes += `👁 *Jarak Pandang* : ${get_result.daftar_bandara[0].jarak_pandang}\n`
ini_tes += `🌄 *Cuaca* : ${get_result.daftar_bandara[0].cuaca}\n`
ini_tes += `🚨 *Titik Timbuni* : ${get_result.daftar_bandara[0].titik_timbun}\n`
ini_tes += `🌬 *Tekanan Udara* : ${get_result.daftar_bandara[0].tekanan_udara}`
reply(ini_tes)
break
case 'infogempa':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
reply(mess.wait) 
get = await fetchJson(`https://hardianto.xyz/api/info/gempa?apikey=hardianto`)
reply(`🕒 *Waktu* : ${get.result.Waktu}\n✨ *Lintang* : ${get.result.Lintang}\n🪨 *Bujur* : ${get.result.Bujur}\n🖥 *Magnitudo* : ${get.result.Magnitudo}\n🍃 *Kedalaman* : ${get.result.Kedalaman}\n🌄 *Wilayah* : ${get.result.Wilayah}\n🗺 *Map* : ${get.result.Map}`)
break

//Fitur textprome
case 'magma': case 'glossy': case 'bread': case 'ice': case 'honey':
if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (args.length == 0) return reply(`Example: ${prefix}${command} Ryuuka Botz`)
reply(mess.wait) 
anu = args.join(" ")
ini_buffer = await getBuffer(`https://ryuu-apii.herokuapp.com/api/textpro/${command}?text=${anu}&apikey=${ryukey}`)
Ryuu.sendMessage(from, ini_buffer, image, { quoted: ftrol})
limitAdd(sender, limit)
break

//Fitur Cecan & Asupan
case 'vietnam': case 'malaysia': case 'japan': case 'korea': case 'Indonesia': case 'thailand': case 'china':
if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
reply(mess.wait) 
goo = await getBuffer(`https://ryuu-apii.herokuapp.com/api/cecan/vietnam?apikey=${ryukey}`)
Ryuu.sendMessage(from, goo, image, {quoted: ftrol, caption: `Success By : ${ownername}`})
limitAdd(sender, limit)
break
case 'santuy': case 'ukty': case 'bocil': case 'gheayubi': case 'rikagusriani':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
reply(mess.wait) 
buffer = await getBuffer(`https://ryuu-apii.herokuapp.com/api/asupan/${command}?apikey=${ryukey}`)
Ryuu.sendMessage(from, buffer, video, {quoted: ftrol})
.catch((err) => {
reply('Fitur Sedang Error 🙏')
})
break

//Fitur Nsfw
case 'yuri': case 'thighs': case 'ero': case 'cum': case 'ass': case 'blowjob':
if (!isPrem && !isOwner) return sendButPrem(from, Prem1, Prem2, Prem3, { quoted: ftrol}) 
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
reply(mess.wait) 
anu = await getBuffer(`https://ryuu-apii.herokuapp.com/api/nsfw/${command}?apikey=${ryukey}`)
Ryuu.sendMessage(from, anu, image, {quoted: ftrol, caption: `Success By : ${ownername}`})
break

//Random Image
case 'tatasurya': case 'teknologi': case 'anime': case 'cyberspace': case 'gaming':
if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
reply(mess.wait) 
anu = await getBuffer(`https://ryuu-apii.herokuapp.com/api/wallpaper/${command}?apikey=${ryukey}`)
Ryuu.sendMessage(from, anu, image, {quoted: ftrol, caption: `Success By : ${ownername}`})
limitAdd(sender, limit)
break

//Random Text
case 'quotes':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
get = await fetchJson(`https://ryuu-apii.herokuapp.com/api/random/quotes?apikey=${ryukey}`)
reply(`*Quotes* 🌱 : ${get.result.quote}\n*Author* 👤 : ${get.result.by}`)
break
case 'faktaunik':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
get = await fetchJson(`https://ryuu-apii.herokuapp.com/api/random/faktaunik?apikey=${ryukey}`)
reply(`*Fakta Unik* 🌱 : ${get.result}`)
break
case 'katabijak':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
get = await fetchJson(`https://ryuu-apii.herokuapp.com/api/random/katabijak?apikey=${ryukey}`)
reply(`*Kata Bijak* 🌱 : ${get.result}`)
break
case 'pantun':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
get = await fetchJson(`https://ryuu-apii.herokuapp.com/api/random/pantun?apikey=${ryukey}`)
reply(`*Pantun* 🌱 :\n${get.result}`)
break
case 'meme':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
huft = await fetchJson(`https://ryuu-apii.herokuapp.com/api/random/meme?apikey=${ryukey}`)
reply(mess.wait) 
goo = await getBuffer(huft.result.url)
Ryuu.sendMessage(from, goo, image, {quoted: ftrol, caption: `*${huft.result.title}*\n\n*Author* 👤 : ${huft.result.author}`})
break
case 'artinama':
if (!q) return reply(`Example : ${prefix + command} Ryu`)
teks = await fetchJson(`https://ryuu-apii.herokuapp.com/api/primbon/artinama?text=${q}&apikey=${ryukey}`)
reply(`*${teks.result.arti}\n\n${teks.result.desc}`)
break
case 'artimimpi':
if (!q) return reply(`Example : ${prefix + command} Jurang`)
teks = await fetchJson(`https://ryuu-apii.herokuapp.com/api/primbon/artimimpi?text=${q}&apikey=${ryukey}`)
reply(`${teks.result.hasil}`)
break

//Fitur Group
case 'welcome':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isGroup) return (mess.only.admin) 
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('*welcome sudah aktif !!*')
 _welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`Succes Welcome Telah On🌱`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return reply('*welcome sudah off sebelumnya !!*')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`Succes Welcome Telah Off🍂`)
} else {
reply('*on untuk mengaktifkan, off untuk menonaktifkan*')
}
break
case 'antilink':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin) 
if (!q) return reply(`Pilih enable atau disable`)
if (args[0].toLowerCase() === 'enable'){
if (isAntiLink) return reply(`Udah aktif`)
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Succes Antilink Telah Nyala🌱')
} else if (args[0].toLowerCase() === 'disable'){
let anu = antilink.indexOf(from)
antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Succes Antilink Telah Mati🍂')
} else {
reply(`Pilih enable atau disable`)
}
break
case 'add':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isGroup) return reply(mess.only.group) 
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Yang mau di add jin ya?')
if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Ryuu.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'kick':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isGroup) return reply(mess.only.group) 
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin) 
if (!isBotGroupAdmins) return reply(mess.only.Badmin) 
if(!q)return reply(`*Format salah!*\n\n*Example : ${prefix + command} @tag*`)
var kickya = q.split('@')[1] + '@s.whatsapp.net'
await Ryuu.groupRemove(from, [kickya])
reply(`Succses`)
break
case 'linkgc': case 'linkgrup': case 'linkgroup':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin) 
Ryuu.groupInviteCode(from)
.then((res) => reply('https://chat.whatsapp.com/' + res))
break
case 'setppgrup':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Ryuu.downloadMediaMessage(encmedia)
Ryuu.updateProfilePicture(from, media)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else if (isQuotedSticker){
if (mek.message.videoMessage) return reply('Error Bro Wkwkwk')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Eror Lord')
buffer = fs.readFileSync(ran)
Ryuu.updateProfilePicture(from, buffer)
fs.unlinkSync(ran)
})
} else {
reply(`Kirim atau tag gambar dengan caption ${prefix + command}`)
}
break
case 'setnamagrup': case 'setnamegrup': case 'setgrupname':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
if (args.length == 0) return reply(`Penggunaan ${prefix + command} Ryuuka Support`)
Ryuu.groupUpdateSubject(from, q)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
break
case 'setdesc': case 'setdesk': case 'setdeskripsi':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
if (args.length == 0)return reply(`Penggunaan ${prefix + command} Ryuuka Support`)
Ryuu.groupUpdateDescription(from, q)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
break

//Fitur Nulis
case 'nulis':
reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
break
case 'nuliskiri':{
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
reply(mess.wait)
const tulisan = q
const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', [
'./media/nulis/images/buku/sebelumkiri.jpg',
'-font',
'./media/nulis/font/Indie-Flower.ttf',
'-size',
'960x1280',
'-pointsize',
'22',
'-interline-spacing',
'2',
'-annotate',
'+140+153',
fixHeight,
'./media/nulis/images/buku/setelahkiri.jpg'
])
.on('error', () => reply(mess.eror))
.on('exit', () => {
Ryuu.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})

})
}
break
case 'nuliskanan':{
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
reply(mess.wait)
const tulisan = q
const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', [
'./media/nulis/images/buku/sebelumkanan.jpg',
'-font',
'./media/nulis/font/Indie-Flower.ttf',
'-size',
'960x1280',
'-pointsize',
'23',
'-interline-spacing',
'2',
'-annotate',
'+128+129',
fixHeight,
'./media/nulis/images/buku/setelahkanan.jpg'
])
.on('error', () => reply(mess.eror))
.on('exit', () => {
Ryuu.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})

})
}
break
case 'foliokiri':{
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
reply(mess.wait)
const tulisan = q
const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
spawn('convert', [
'./media/nulis/images/folio/sebelumkiri.jpg',
'-font',
'./media/nulis/font/Indie-Flower.ttf',
'-size',
'1720x1280',
'-pointsize',
'23',
'-interline-spacing',
'4',
'-annotate',
'+48+185',
fixHeight,
'./media/nulis/images/folio/setelahkiri.jpg'
])
.on('error', () => reply(mess.eror))
.on('exit', () => {
Ryuu.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})

})
}
break
case 'foliokanan':{
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
reply(mess.wait)
const tulisan = q
const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
spawn('convert', [
'./media/nulis/images/folio/sebelumkanan.jpg',
'-font',
'./media/nulis/font/Indie-Flower.ttf',
'-size',
'960x1280',
'-pointsize',
'23',
'-interline-spacing',
'3',
'-annotate',
'+89+190',
fixHeight,
'./media/nulis/images/folio/setelahkanan.jpg'
])
.on('error', () => reply(mess.eror))
.on('exit', () => {
Ryuu.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})

})
}
break

//Fitur Game
case 'delsesittt':
case 'resetgame':
if (!isGroup) return replysticker(groupstc)
if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Sukses Mereset Game')
break
case 'tictactoe':
case 'ttt':
if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
if (!isGroup) return replysticker(groupstc)
if (args.length < 1) return reply('Tag Lawan Anda! ')
if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = player2
ky_ttt.push({player1,player2,id,angka,gilir})
Ryuu.sendMessage(from, `🎳 Memulai Tictactoe 🎲\n\n [@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥\nKetik Y/N untuk menerima atau menolak permainan\n\nKet : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
limitAdd(sender, limit)
break
case 'tebakgambar':
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
anu = await fetchJson(`https://ryuu-apii.herokuapp.com/api/kuis/tebakGambar?apikey=${ryukey}`)
anu = anu
ini_image = anu.image
jawaban = anu.jawaban
ini_buffer = await getBuffer(ini_image)
clue = anu.clue
buff = await getBuffer(ini_image)
Ryuu.sendMessage(from, ini_buffer, image, { quoted: mek, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+clue+'\nWaktu : 30s' }).then(() => {
tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
})
await sleep(30000)
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
titid = "*Jawaban*: " + jawaban
sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
{
buttonId: `${prefix}tebakgambar`,
buttonText: {
displayText: `𝐍𝐄𝐗𝐓 ⏩`,
},
type: 1,
},]);
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
}
break
case 'tebakkata':
if (tebakata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
anu = await fetchJson(`https://ryuu-apii.herokuapp.com/api/game/tebakkata?apikey=${ryukey}`)
anu = anu
jawaban = anu.jawaban
pertanyaan = anu.soal
Ryuu.sendMessage(from, '```Tebak Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
tebakata[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/game/tebakata.json", JSON.stringify(tebakata))
})
await sleep(30000)
if (tebakata.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
reply("Jawaban: " + jawaban)
delete tebakata[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebakata.json", JSON.stringify(tebakata))
}

break
case 'tebaklirik':
if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
anu = await fetchJson(`https://ryuu-apii.herokuapp.com/api/game/tebaklirik?apikey=${ryukey}`)
jawaban = anu.result.answer
pertanyaan = anu.result.question
Ryuu.sendMessage(from, '```Tebak Lirik```\n\n• *Soal* :'+anu.result.question+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
})
await sleep(30000)
if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
reply("Jawaban: " + jawaban)
delete tebaklirik[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebaklirik.json", JSON.stringify(tebaklirik))
}
break
case 'tebakjenaka':
if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
anu = await fetchJson(`https://ryuu-apii.herokuapp.com/api/game/tebakjenaka?apikey=${ryukey}`)
jawaban = anu.result.jawaban
pertanyaan = anu.result.pertanyaan
Ryuu.sendMessage(from, '```Tebak Jenaka```\n\n• *Soal* :'+anu.result.pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
tebakjenaka[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/game/tebakjenaka.json", JSON.stringify(tebakjenaka))
})
await sleep(30000)
if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
reply("Jawaban: " + jawaban)
delete tebakjenaka[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebakjenaka.json", JSON.stringify(tebakjenaka))
}
break
case 'tebakkimia':
if (tebakimia.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
anu = await fetchJson(`https://ryuu-apii.herokuapp.com/api/game/tebakkimia?apikey=${ryukey}`)
jawaban = anu.result.lambang
pertanyaan = anu.result.nama
Ryuu.sendMessage(from, '```Tebak Kimia```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
tebakimia[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/game/tebakimia.json", JSON.stringify(tebakimia))
})
await sleep(30000)
if (tebakimia.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
reply("Jawaban: " + jawaban)
delete tebakimia[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebakimia.json", JSON.stringify(tebakimia))
}
break
case 'tebakbendera':
if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
anu = await fetchJson(`https://ryuu-apii.herokuapp.com/api/game/tebakbendera?apikey=${ryukey}`)
jawaban = anu.result.nama
pertanyaan = anu.result.bendera
Ryuu.sendMessage(from, '```Tebak Bendera```\n\n• *Bendera* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
tebakbendera[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/game/tebakbendera.json", JSON.stringify(tebakbendera))
})
await sleep(30000)
if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
reply("Jawaban: " + jawaban)
delete tebakbendera[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebakbendera.json", JSON.stringify(tebakbendera))
}
break
case 'caklontong':
if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
anu = await fetchJson(`https://ryuu-apii.herokuapp.com/api/kuis/caklontong?apikey=${ryukey}`)
jawaban = anu.result.jawaban
pertanyaan = anu.result.soal
Ryuu.sendMessage(from, '```Caklontong```\n\n• *soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
})
await sleep(30000)
if (caklontong.hasOwnProperty(sender.split('@')[0])) {
console.log(color("Jawaban: " + jawaban))
reply("Jawaban: " + jawaban)
delete caklontong[sender.split('@')[0]]
fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
}
break

//Fitur Downloader
case 'ytmp3':
if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (args.length < 1) return reply("Masukkan url youtube")
url = args.join(' ')
reply(`Tunggu Butuh Beberapa Menit!`) 
anu = await fetchJson(`https://ryuu-apii.herokuapp.com/api/download/ytmp3?url=${url}&apikey=${ryukey}`)
ytmp3 = await getBuffer(anu.result.url)
reply(`_*Data Di DapatKan!!*_\n\n💬 *Title* : ${anu.result.title}\n🖼 *Thumb* : ${anu.result.thumb}\n🖥 *Channel* : ${anu.result.channel}\n📅 *Publish* : ${anu.result.published}\n👁 *Viewers* : ${anu.result.views}\n\nAudio Akan Dikirim Beberapa Menit!`)
Ryuu.sendMessage(from, ytmp3, audio, {mimetype:"audio/mp4", quoted:mek})
limitAdd(sender, limit)
break
case 'ytmp4':
if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (args.length < 1) return reply("Masukkan url youtube")
url = args.join(' ')
reply(`Tunggu Butuh Beberapa Menit!`)
anu = await fetchJson(`https://ryuu-apii.herokuapp.com/api/download/ytmp4?url=${url}&apikey=${ryukey}`)
ytmp4 = await getBuffer(anu.result.url)
reply(`_*Data Di DapatKan!!*_\n\n💬 *Title* : ${anu.result.title}\n🖼 *Thumb* : ${anu.result.thumb}\n🖥 *Channel* : ${anu.result.channel}\n📅 *Publish* : ${anu.result.published}\n👁 *Viewers* : ${anu.result.views}\n\nAudio Akan Dikirim Beberapa Menit!`)
Ryuu.sendMessage(from, ytmp4, video, {caption:`Done By : ${botname}`, thumbnail:Buffer.alloc(0), quoted:mek})
limitAdd(sender, limit)
break
case 'tiktoknowm':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (args.length < 1) return reply("Masukkan url tiktok")
url = args.join(' ')
reply(`Tunggu Butuh Beberapa Menit!`) 
ini = await fetchJson(`https://ryuu-apii.herokuapp.com/api/download/tiktok?url=${url}&apikey=${ryukey}`)
buffer = await getBuffer(ini.result.nowatermark)
Ryuu.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Succes By : © Ryuuka Botz'})
break
case 'tiktokwm':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (args.length < 1) return reply("Masukkan url tiktok")
url = args.join(' ')
reply(`Tunggu Butuh Beberapa Menit!`) 
ini = await fetchJson(`https://ryuu-apii.herokuapp.com/api/download/tiktok?url=${url}&apikey=${ryukey}`)
buffer = await getBuffer(ini.result.watermark)
Ryuu.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Succes By : © Ryuuka Botz'})
break
case 'mediafire':
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (args.length < 1) return reply('Masukkan link mediafire')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Linknya Error')
reply(mess.wait)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `_*MediaFire*_ 🌱\n\n`
result += `Data Berhasil Didapatkan!\n\n`
result += `📌 Nama : ${res[0].nama}\n`
result += `✉️ Ukuran : ${res[0].size}\n`
result += `🔗 Link : ${res[0].link}\n\n`
result += `_Tunggu Proses Upload Media_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: ftrol})
break

//Fitur Search
case 'pinterest':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!c) return reply('yg mau di cari apa?')
reply(mess.wait) 
pinterest(`${c}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest , `_*Result Dari*_ : ${c} 🌱`)
})
break
case 'liriklagu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!c) return reply('yg mau di cari apa?')
reply(mess.wait) 
get = await fetchJson(`https://ryuu-apii.herokuapp.com/api/music/liriklagu?apikey=${ryukey}&query=${c}`) 
reply(`${get.result}`)
break
case 'chordlagu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!c) return reply('yg mau di cari apa?')
reply(mess.wait) 
get = await fetchJson(`https://ryuu-apii.herokuapp.com/api/music/chordlagu?apikey=${ryukey}&lagu=${c}`) 
reply(`${get.result.result}`) 
break

//Fitur CMD
case 'addcmd': 
case 'setcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (isQuotedSticker) {
if (!c) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, c)
reply("Done Bwang")
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Done Bwang")
break
case 'listcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
let teksnyee = `\`\`\`「 LIST CMD STIC 」\`\`\``
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*❏ ID :* ${i.id}\n*❏ Cmd :* ${i.chats}`
}
reply(teksnyee)
break

//Fitur Store
case 'pay':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
reply(`*${tampilUcapan} ${pushname}*\n\n_*Pilih Salah Satu Untuk Melakukan TopUp*_ 💸\n\n*Gopay* : ${gopay}\n*Dana* : ${dana}\n*Ovo* : ${ovo}\n*Pulsa* : ${pulsa}\n\n_*Jangan Lupa Sertakan Bukti Ke Owner*_ <3`) 
break
case 'mobilelegend': case 'ml':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
capti =`*Ryuuka Store*
   
PROSES 1-60Mnt Max 1X24 Jam  
OPEN 08.00-21.00  
FORMAT ID  
   
_*List TopUp MobileLegends*_ 💸
  
86  DM = 18.500
172  DM = 37.500
257  DM = 55.600
344  DM = 73.400
429  DM = 92.300
514  DM = 112.400
706 DM = 145.100
878 DM = 182.200
963 DM = 198.600
1412 DM = 288.200
2195 DM = 426.200
3688 DM = 708.100
4394 DM = 848.600
5532 DM = 1.065.000
9288 DM = 1.768.100
9926 DM = 1.913.600
14820 DM = 2.834.100
18076 DM = 3 466.300
 
SL/TW = 122.000
STARTJT B = 270.500
 
*Jika ingin memesan chat owner*  
Untuk pay / pembayan silahkan ketik ${prefix}pay atau click button di bawah ini`
but = [{ buttonId: `${prefix}pay`, buttonText: { displayText: 'Pembayaran 💸' }, type: 1 }]
sendButton(from, capti, `Store ${ownername}`, but)
break
case 'aov':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
capti =`*Ryuuka Store*
   
PROSES 1-60Mnt Max 1X24 Jam  
OPEN 08.00-21.00  
FORMAT ID  
   
_*List TopUp Aov*_ 💸
  
40VC = Rp 10,000.00  
90VC = Rp 20,000.00  
130VC = Rp 30,000.00  
180VC = Rp 40,000.00  
230VC = Rp 50,000.00  
470VC = Rp 100,000.00  
950VC = Rp 195,000.00  
1.430VC = Rp 290,000.00  
2.390VC = Rp 485,000.00  
4.800VC = Rp 970,000.00  
24.050VC = Rp 4.845,000.00  
48.200VC = Rp 9.685,000.00  

Untuk pay / pembayan silahkan ketik ${prefix}pay atau click button di bawah ini`
but = [{ buttonId: `${prefix}pay`, buttonText: { displayText: 'Pembayaran 💸' }, type: 1 }]
sendButton(from, capti, `Store ${ownername}`, but)
break
case 'codm': case 'cod':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
capti = `*Ryuuka Store*
    
PROSES 1-60Mnt 1X24 Jam   
OPEN 10.00-19.00   
FORMAT ID   
    
_*List TopUp Codm*_ 💸

53CP = Rp 10,000.00
112CP = Rp 20,000.00
278CP = Rp 50,000.00
581CP = Rp 98,000.00
1.268CP = Rp 195,000.00
1.901CP = Rp 290,000.00
3.300CP = Rp 480,000.00
7.128CP = Rp 950,000.00

Untuk pay / pembayan silahkan ketik ${prefix}pay atau click button di bawah ini`
but = [{ buttonId: `${prefix}pay`, buttonText: { displayText: 'Pembayaran 💸' }, type: 1 }]
sendButton(from, capti, `Store ${ownername}`, but)
break
case 'freefire': case 'ff':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
capti = `*Ryuuka Store*
    
PROSES 1-180Mnt 1X24 Jam   
OPEN 10.00-19.00   
FORMAT ID   

_*List TopUp FreeFire*_ 💸
    
70 DM = 9.250
100 DM = 13.500
140 DM = 18.600
150 DM = 20.400
200 DM = 26.900
210 DM = 28.400
280 DM = 37.100
355 DM = 46.600
400 DM = 52.600
500 DM = 65.600
635 DM = 82.800
720 DM = 91.400
1000 DM = 118.600
1075 DM = 137.600
1440 DM = 182.600
9926 DM = 248.600
14820 DM = 340.100
18076 DM = 497.600
Member M = 28.000 
    
Untuk pay / pembayan silahkan ketik ${prefix}pay atau click button di bawah ini`
but = [{ buttonId: `${prefix}pay`, buttonText: { displayText: 'Pembayaran 💸' }, type: 1 }]
sendButton(from, capti, `Store ${ownername}`, but)
break
case 'lol':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
capti = `*Ryuuka Store*
    
PROSES 1-180Mnt 1X24 Jam   
OPEN 10.00-19.00   
FORMAT ID   
    
_*List TopUp LoL*_ 💸
   
125WC = RP 18,000.00   
420WC = RP 55,000.00   
700WC = RP 85,000.00   
1.375WC = RP 155,000.00   
2.400WC = RP 250,000.00   
4,000.00WC = RP 395,000.00   
8.150WC = RP 785,000.00   
    
Untuk pay / pembayan silahkan ketik ${prefix}pay atau click button di bawah ini`
but = [{ buttonId: `${prefix}pay`, buttonText: { displayText: 'Pembayaran 💸' }, type: 1 }]
sendButton(from, capti, `Store ${ownername}`, but)
break
case 'sausage':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
capti = `*Ryuuka Store*
 
PROSES 1-60Mnt Max 1X24 Jam  
OPEN 09.00-21.00  
FORMAT ID  
   
_*List TopUp Sausage*_ 💸 
 
60C = RP 16,000.00  
180C = RP 45,000.00  
316C = RP 68,000.00  
718C = RP 135,000.00  
1.368C = RP 265,000.00  
2.118C = RP 418,000.00  
3.548C = RP 682,000.00  
7.096C = RP 1.305,000.00  
   
Untuk pay / pembayan silahkan ketik ${prefix}pay atau click button di bawah ini`
but = [{ buttonId: `${prefix}pay`, buttonText: { displayText: 'Pembayaran 💸' }, type: 1 }]
sendButton(from, capti, `Store ${ownername}`, but)
break
case 'valorant': case 'valo':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
capti = `*Ryuuka Store*
  
PROSES 1-180Mnt Max 1X24 Jam  
OPEN 10.00-19.00  
FORMAT ID  
   
_*List TopUp Valorant*_ 💸
  
125VP = 18,000.00  
420VP = 55,000.00  
700VP = 85,000.00  
1.375VP = 155,000.00  
2.400VP = 250,000.00  
4,000.00VP = 395,000.00  
8.150VP = 785,000.00  
   
Untuk pay / pembayan silahkan ketik ${prefix}pay atau click button di bawah ini`
but = [{ buttonId: `${prefix}pay`, buttonText: { displayText: 'Pembayaran 💸' }, type: 1 }]
sendButton(from, capti, `Store ${ownername}`, but)
break
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
//Fitur Rpg
case 'buylimit':{
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (args.length < 1) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)  
payout = body.slice(10)
let ane = 150 * payout
if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(sender, ane, balance)
giveLimit(sender, parseInt(args[0]), limit)
reply(monospace(`Pembeliaan limit sebanyak ${args[0]} berhasil\n\nSisa Balance :  $${(getBalance(sender, balance))}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
}
break
case 'event':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
pp = 'on or off?'
but = [
{ buttonId: `!epen 1`, buttonText: { displayText: 'ON️' }, type: 1 },
{ buttonId: `!epen 0`, buttonText: { displayText: 'OFF' }, type: 1 }]
sendButton(from, pp, 'Event Group', but, ftrol)
break
case 'epen':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply('Salah! 1 Untuk Mengaktifkan 2 Untuk Mengnonaktifkan.')
if (Number(args[0]) === 1) {
if (isEventon) return reply('_*Sudah Aktif*_ 🙏')
event.push(from)
fs.writeFileSync('./lib/data/event.json', JSON.stringify(event))
reply('🌱 _*Success Aktifkan Bosku*_ 🌱')
} else if (Number(args[0]) === 0) {
event.splice(from, 1)
fs.writeFileSync('./lib/data/event.json', JSON.stringify(event))
reply('🌱 _*Success Nonaktifkan Bosku*_ 🌱')
} else {
reply('eeee')
}
break
case 'profile':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
checkHealt(sender)
break
case 'mybag':
case 'cekinven': case 'myinventori':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
done = monospace(`🌱 Profile\n✾ Nama : ${pushname}\n✾ Rank : ${role}\n✾ Status : ${elit}\n✾ Xp : ${getLevelingXp(sender)}/${reqXp}\n✾ Level : ${getLevelingLevel(sender)}\n✾ Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}\n\n🎒 Inventory :\n✾ Emas : ${getEmas(sender)}🪙\n✾ Uang : $${(getBalance(sender, balance))}💰\n✾ Besi : ${getBesi(sender)}⛓️\n✾ Berlian : ${getDm(sender)}💎\n✾ Ikan : ${getFish(sender)}🎣`)
but = [{ buttonId: `!adventure`, buttonText: { displayText: 'Adventure' }, type: 1 }]
sendButton(from, done, 'Inventori User', but)
break
case 'tess':
bayarHealt(sender, 10)
break
case 'leaderboard':
case 'lb':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isGroup) return reply(ind.groupo())
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
let leaderboardlvl = '🏆 _*Top Leaderboard*_ 🏆\n\n'
let nom = 0
try {
for (let i = 0; i < 10; i++) {
nom++
leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n✾ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
}
await reply(leaderboardlvl)
} catch (err) {
console.error(err)
await reply(`minimal 10 user untuk bisa mengakses database`)
}
break
case 'sellikan':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isGroup) return reply(mess.only.group)
if (!isPetualang) return reply(mess.only.player)
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
jmlh = body.slice(10)
rp = 5 * jmlh
if (getFish(sender) < jmlh) return reply(`Ikan Kamu Tidak Cukup`)
sellFish(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒 Pasar 🛒\n✾ Penjual : ${pushname}\n✾ Pembeli : Admin\n✾ Harga/Ikan : 5\n✾ Status : Sukses\n✾ Sisa Ikan : ${getFish(sender)}\n✾ Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
sendButton(from, capti, 'sell ikan', but)
break
case 'sellbesi':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isGroup) return reply(mess.only.group)
if (!isPetualang) return reply(mess.only.player)
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
jmlh = body.slice(10)
rp = 10 * jmlh
if (getBesi(sender) < jmlh) return reply(`Besi Kamu Tidak Cukup`)
sellBesi(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒 Pasar 🛒\n✾ Penjual : ${pushname}\n✾ Pembeli : Admin\n✾ Harga/Besi : 10\n✾ Status : Sukses\n✾ Sisa Besi : ${getBesi(sender)}\n✾ Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
sendButton(from, capti, 'sell besi', but)
break
case 'sellemas':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isGroup) return reply(mess.only.group)
if (!isPetualang) return reply(mess.only.player)
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
jmlh = body.slice(10)
rp = 25 * jmlh
if (getEmas(sender) < jmlh) return reply(`Emas Kamu Tidak Cukup`)
sellEmas(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒 Pasar 🛒\n✾ Penjual : ${pushname}\n✾ Pembeli : Admin\n✾ Harga/Emas : 25\n✾ Status : Sukses\n✾ Sisa Emas : ${getEmas(sender)}\n✾ Hasil Penjualan : $${rp}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
sendButton(from, capti, 'sell emas', but)
break 
case 'selldiamond':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (!isGroup) return reply(mess.only.group)
if (!isPetualang) return reply(mess.only.player)
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
ttl = body.slice(13)
var etoo = 75 * ttl
if (getDm(sender) < ttl) return reply(`Besi Kamu Tidak Cukup`)
sellDm(sender, ttl)
addBalance(sender, etoo, balance) 
capti = monospace(`🛒 Pasar 🛒\n✾ Penjual : ${pushname}\n✾ Pembeli : Admin\n✾ Harga/Dm : 75\n✾ Status : Sukses\n✾ Sisa Diamond : ${getDm(sender)}\n✾ Hasil Penjualan : $${etoo}`)
but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
sendButton(from, capti, 'sell diamond', but)
break
case 'mancing':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
if (!isPetualang) return reply(mess.only.player)
ikannya = ikan[Math.floor(Math.random() * ikan.length)]
xp = Math.ceil(Math.random() * 350)
coin = randomNomor(50)
ditangkap = Math.ceil(Math.random() * 50)
cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
setTimeout( () => {
caption = monospace(`「 Memancing 」\n\n✾ Tangkapan : ${ikannya}\n✾ Total Dapat : ${ditangkap} Ikan\n✾ MONEY : $${coin}\n✾ EXP : ${xp}Xp`)
but = [
{ buttonId: '!mancing', buttonText: { displayText: 'Mancing lagi' }, type: 1 },
{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }
]
sendButImage(from, caption, 'Memancing', cing, but, {quoted: mek})
}, 6000)
setTimeout( () => {
Ryuu.sendMessage(from, 'Berhasil Mendapatkan Ikan. . .', text) 
}, 5000) // 1000 = 1s,
setTimeout( () => {
Ryuu.sendMessage(from, '🎣Meanarik kail. . .', text) 
}, 3000) // 1000 = 1s,
setTimeout( () => {
Ryuu.sendMessage(from, '🎣Mulai memancing. . .', text) 
}, 1500) // 1000 = 1s,
addFish(sender, ditangkap)
addLevelingXp(sender, xp)
addBalance(sender, coin, balance) 
limitAdd(sender, limit)
break
case 'adventure':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
if (isHealt(sender)) return reply('Healt')
if (!isPetualang) return reply(mess.only.player)
ngab = ['Longsor','Letusan Gunung','Tsunami','Gempa Bumi','Meteor','Demon']
const sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
const dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
const ad = dungeon[Math.floor(Math.random() * dungeon.length)]
anu = fs.readFileSync('./lib/rpg/dungeon.js');
jsonData = JSON.parse(anu);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasm = await getBuffer(randKey.result)  
const adven = Math.ceil(Math.random() * 1000)
const money = Math.ceil(Math.random() * 300)
setTimeout( () => {
caption = monospace(`「 DEATH 」\n\n✾ Tempat  ${ad}\n✾ MONEY : $${money}\n✾ EXP : ${adven}Xp`)
but = [
{ buttonId: `!myinventori`, buttonText: { displayText: 'Inventori' }, type: 1 }]
sendButImage(from, caption, 'Memancing', hasm, but, {quoted: mek})   
}, 7000)
setTimeout( () => {
Ryuu.sendMessage(from, `Awass`, text) 
}, 5000) // 1000 = 1s,
setTimeout( () => {
Ryuu.sendMessage(from, `Tiba tiba ada ${sesuatu}`, text) 
}, 3000) // 1000 = 1s,
setTimeout( () => {
Ryuu.sendMessage(from, `${pushname} sedang bertualang`, text) 
}, 1500) // 1000 = 1s,
addLevelingXp(sender, adven)
addBalance(sender, money, balance) 
limitAdd(sender, limit) 
await healtAdd(sender)
break
case 'mining':   
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
if (isLimit(sender, isPrem, isOwner, limitCount, limit)) return reply(mess.limit) 
if (!isGroup) return reply(mess.only.group)
if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
if (!isPetualang) return reply(mess.only.player)
pp = randomNomor(75)
emas = randomNomor(15)
dm = randomNomor(3)
besi = randomNomor(50)
done = monospace(`Selesai Mining🚧\nlist hasil :\nEmas : ${emas}🪙\nUang : $${pp}💰\nBesi : ${besi}⛓️\nBerlian : ${dm}💎`)
addBalance(sender, pp, balance)
addBesi(sender, besi)
addEmas(sender, emas)
addDm(sender, dm)
mining = ('Waitt sedang menguli . . .')
setTimeout( () => {//case by pebri
but = [{ buttonId: `!mining`, buttonText: { displayText: 'Mining again' }, type: 1 }]
sendButton(from, done, 'Mining', but)
}, 9000) // 1000 = 1s,
setTimeout( () => {
Ryuu.sendMessage(from, '🚧 selesai menguli. . .🪙👷', text) 
}, 7000) // 1000 = 1s,
setTimeout( () => {
Ryuu.sendMessage(from, '🚧 menemukan emas. . .⚒️🏔️️️', text) 
}, 4000) // 1000 = 1s,
setTimeout( () => {
Ryuu.sendMessage(from, '🚧 mulai menambang. . .⚒️🏔️️', text) 
}, 1500) // 1000 = 1s,
setTimeout( () => {
Ryuu.sendMessage(from, mining, text, {quoted: mek}) 
}, 0) // 1000 = 1s,
break
case 'joinrpg':
if (!isGroup) return reply(mess.only.group)  
if (isPetualang) return reply('Kamu sudah menjadi petualang')
_petualang.push(sender)
fs.writeFileSync('./lib/data/inventori.json', JSON.stringify(_petualang))
capt = `🎉Selamat ${pushname}🎊\nKamu terdaftar sebagai petualang!\nSilahkan ketik ${prefix}profile`
Ryuu.sendMessage(from, capt, text, {quoted: mek})
addInventori(sender)
addLevelingId(sender)
break
//Akhir Jangan Di Hapus Ntar Error
default:
if(budy.includes("@verif", "@verify","daftar")){
if (isUser) return reply('Kamu sudah terdaftar di dalam database')
addRegisterUser(sender, pushname, bio_user)
fs.writeFileSync('./database/user.json', JSON.stringify(_user))
teks = `*Success Verification 🎉*\n\n${a}📛 Nama: ${pushname}\n#️⃣ Nomor : @${sender.split('@')[0]}\n💌 Bio: ${bio_user}${a}\n\n*Verification Di Database ${botname}*`
footeregis = `Terima Kasih Telah Mendaftar 🤗\n© ${botname} By ${ownername}`
butregis = [
{ buttonId: `${prefix}menu`, buttonText: { displayText: 'MENU 💌' }, type: 1 }
 ]
sendButLocation(from, teks, footeregis, fakeRyuu, butregis, {contextInfo: { mentionedJid: [sender]
}
})
}
//TTT
if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ucapan = 
`🎳 _*Game Tictactoe*_ 🎲

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}`
Ryuu.sendMessage(from, ucapan, text, {quoted: ftrol, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (budy.startsWith('N')){
 tto = ky_ttt.filter(ghg => ghg.id.includes(from))
 tty = tto[0]
 naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
 ky_ttt = naa
 Ryuu.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`🎳 _*Result Game Tictactoe*_ 🎲

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `🎳 _*Result Game Tictactoe*_ 🎲

*Hasil Akhir:*

${ttt}`
Ryuu.sendMessage(from, ucapan1, text, {quoted: ftrol, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

 if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `🎳 _*Result Game Tictactoe*_ 🎲

*_Permainan Seri 😁👌_*`
ucapan2 = `🎳 _*Result Game Tictactoe*_ 🎲

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `🎳 _*Game Tictactoe*_ 🎲

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
Ryuu.sendMessage(from, ucapan, text, {quoted: ftrol, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `🎳 _*Result Game Tictactoe*_ 🎲

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `🎳 _*Game Tictactoe*_ 🎲

*Hasil Akhir:*

${ttt}`
Ryuu.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `🎳 _*Result Game Tictactoe*_ 🎲

*_Permainan Seri🗿👌*`
ucapan2 = `🎳 _*Result Game Tictactoe*_ 🎲

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `🎳 _*Game Tictactoe*_ 🎲

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎

Giliran = @${tty.player1.split('@')[0]}

${ttt}`
Ryuu.sendMessage(from, ucapan, text, {quoted: ftrol, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (isOwner) {
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (isOwner) {
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
}
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
// console.log(e)
}
}
