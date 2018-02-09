const discord = require("discord.js");
const config = require("../config.json");
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    if (args.length < 1) return message.reply("Provide the name to set the bot's game to.");
    if (!config.maintainers.includes(message.author.id)) {
        return message.reply("You are not the owner of this bot!");
    } else {
        bot.user.setGame(args.join(" "));
        fs.writeFile("./setgame.txt", JSON.stringify(args.join(" ")), (err) => {
            if (err) console.error(err)
        });
        message.reply(`Game is set to ${args.join(" ")}!`);
    }
}

module.exports.help = {
    name: "setgame",
    usage: "setgame <game>"
}
