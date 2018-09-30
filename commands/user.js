
const Discord = require("discord.js");
const prefix = process.env.prefix

module.exports = (client, message) => {
           if (message.content.startsWith(prefix + "user")) {
		   if (message.channel.id !== "486291719537688576") return;
                     if(!message.channel.guild) return;

                message.guild.fetchInvites().then(invs => {
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === heg.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
    .setColor("#0a0909")
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
.addField(' :لقد قمت بدعوة ', ` **${inviteCount}** `)
.setFooter(`${heg.tag}`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
.setThumbnail(heg.avatarURL);
    message.channel.sendEmbed(id);
})
}



 }
