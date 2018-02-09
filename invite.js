const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let link = await bot.generateInvite(["ADMINISTRATOR"]);

    let embed = new discord.RichEmbed()
        .setColor("#0ba333")
        .addField(":link: Invite link:", link);

    message.channel.send(embed)
}

module.exports.help = {
    name: "invite",
    usage: "invite"
}
