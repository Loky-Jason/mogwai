const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("Mogwai", "!help");
    console.log("Mogwai a bien ete connecte");
});

bot.login("NDY4MzQ3MDA2MTM4NTgwOTkz.Di6UJw.7W8hkqJM05MBU60784b78sb_zjg");
