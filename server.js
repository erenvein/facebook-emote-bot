const Discord = require("discord.js");
const client = new Discord.Client();

//-----------------OYNUYOR KISMI-------------------
client.on("ready", guild => {

  client.user.setPresence({activity: {name: "Facebook Emote", type: "PLAYING"}});
    console.log("Bağlandım!")
});

//------------- EMOJILERİ EKLEMEYİ ÖĞRENMEK İÇİN README.md DOSYASINI OKUYUN.-------------------

client.on("message", message => {
message.react("👍")   //beğeni
});

client.on("message", message => {
message.react("❤️")   //muhteşem
});

client.on("message", message => {
message.react("🤗")  //yanındayım
});

client.on("message", message => {
message.react("😆")  //hahaha
});

client.on("message", message => {
message.react("😮")  //inanılmaz
});

client.on("message", message => {
message.react("😢")  //üzgün
});

client.on("message", message => {
message.react("😡")  //kızgın
});

client.login("tokeniniz")