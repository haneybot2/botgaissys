const Discord = require("discord.js");
const prefix = process.env.prefix

module.exports = (client, message) => {
if (message.author.bot) return;
    if (message.content === prefix + "move all") {
 if (!message.member.hasPermission("ADMINISTRATOR")) return;
   if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return ;
if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
 var author = message.member.voiceChannelID;
 var voicename = message.member.voiceChannel.name;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 var moveall = new Discord.RichEmbed()
 .setColor("#000000")
 .setAuthor(message.guild.name, message.guild.iconURL)
 .setDescription(`**All members have been move to \`\`${voicename}\`\`** by : <@${message.author.id}>`)
 .setFooter(message.author.tag, message.author.avatarURL) 
 .setTimestamp();
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send(`**All members have been move to \`\`${voicename}\`\`**`)
 client.channels.get(process.env.log).send({embed : moveall})
 }}
