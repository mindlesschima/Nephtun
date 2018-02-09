const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You don't have permission to do that.");

    let member = message.mentions.members.first();
    if (!member)
        return message.reply("You must mention a valid member of this server");
    if (!member.kickable)
        return message.reply("WHAT ARE YOU TRYING TO DO, BANNING SOMEONE HIGHER THAN YOU?! THAT'S LIKE FIRING YOUR BOSS!");

    let reason = args.slice(1).join(' ');
    if (!reason)
        return message.reply("Provide a reason for the ban.");

    await member.ban(reason)
        .catch(error => message.reply(`Error: ${error}`));
    message.channel.send(`${member.user.username} has been banned by ${message.author.username}\nReason: ${reason}`);
}

module.exports.help = {
    name: "ban",
    usage: "ban <user> <reason>"
}
