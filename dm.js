const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    user = message.author;
    if (message.mentions.users.size > 1) { return message.reply("Cannot DM multiple users yet."); }
    else if (message.mentions.users.size > 0) { user = message.mentions.users.array()[0]; }
    const toDM = args.join(" ");
    message.delete().catch(err => { });
    user.send(toDM);
}

module.exports.help = {
    name: "dm",
    usage: "dm <user> <message>"
}
