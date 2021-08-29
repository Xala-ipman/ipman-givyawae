const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setAuthor("Kurdish Giveaway")
      .setTitle("Command List & Guide for the Bot")
      .setDescription("Below are Commands you can do with Bot, Right now there is only 6 commands available, more commands will be added soon.")
      .addField("<a:emoji_5:881626214199078952> __Giveaway__ <a:emoji_5:881626214199078952>","start [channel-name] [Time] [winners] [Prize]\nreroll [prize name]\nend [prize name]")
      .addField("<a:emoji_7:881628868207857754> __Examples__ <a:emoji_7:881628868207857754>", "g!start #giveaway 5m 1 Testing\ng!end Testing\ng!reroll Testing")
      .addField("<a:emoji_9:881643825876054016> __Utility__ <a:emoji_9:881643825876054016>", "ping, invite", true)
      .addField("<a:emoji_7:881628868207857754> ℹ Information ℹ <a:emoji_7:881628868207857754>", "stats", true)
      .addField("Check out", "[Invite](https://discord.com/api/oauth2/authorize?client_id=838184020469743636&permissions=8&scope=bot) to make your own giveaway bot")
      .setTimestamp()
      .setFooter(`Command Requested By ${message.author.tag}`, client.user.displayAvatarURL());
    message.channel.send("**Sent the commands in Direct Messages!, Check DMs**");

    return message.author.send(help);
}

module.exports.help = {
  name: "help"
}
