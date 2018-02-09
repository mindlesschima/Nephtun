const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    user = message.author;
    if (message.mentions.users.size > 1) { return message.reply("Cannot get info of multiple users yet."); }
    else if (message.mentions.users.size > 0) { user = message.mentions.users.array()[0]; }

    gamename = "No game"; gamestream = "Not streaming";
    if (user.presence.game) {
        gamename = user.presence.game.name;
        gamestream = user.presence.game.streaming;
    }

    let embed = new discord.RichEmbed()
        .setTitle("User Info")
        .setAuthor(user.username)
        .setDescription("Displays user's info.")
        .setColor("#0ba333")
        .setThumbnail(user.avatarURL)
        .setTimestamp()
        .addField("Username", user.username, true)
        .addField("ID", user.id, true)
        .addField("Tag", user.tag, true)
        .addField(":calendar_spiral: Created", `**Time:** ${user.createdAt} \n**Timestamp:** ${user.createdTimestamp}`, true)
        .addField(":robot: Is Bot?", user.bot, true)
        .addField(":video_game: Game", "**Name:** " + gamename + "\n**Streaming:** " + gamestream, true)
        .addField("Status", user.presence.status, true);
