const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("600166956578111488")
setInterval(function() {
channel.send(`Rakan Love Asmaa`);
}, 30)
})

client.login(process.env.BOT_TOKEN);