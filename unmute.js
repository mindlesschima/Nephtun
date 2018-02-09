module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.reply("You do not have permission to do that.");

    let toUnmute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!toUnmute) return message.reply("You must mention a user or their ID!");

    if (toUnmute.id === message.author.id) return message.reply("WHAT ARE YOU TRYING TO DO, UNMUTING YOURSELF?! THAT'S LIKE CONTINUING TO WORK AFTER YOU'VE BEEN SUSPENDED!");

    let role = message.guild.roles.find(r => r.name === "Muted by LigTek");

    if (!role || !toUnmute.roles.has(role.id)) return message.reply(`${toUnmute} is already unmuted!`);

    await toUnmute.removeRole(role);
    message.reply(`${toUnmute} is unmuted.`);
}

module.exports.help = {
    name: "unmute",
    usage: "unmute <mention/ID>"
}
