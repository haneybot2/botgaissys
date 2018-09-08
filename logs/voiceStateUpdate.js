module.exports = (client, oldM, newM) => {
  let rebel1 = oldM.serverMute;
  let rebel2 = newM.serverMute;
  let codes1 = oldM.serverDeaf;
  let codes2 = newM.serverDeaf;
  let ch = oldM.guild.channels.find('name', 'log')
  if(!ch) return;
    oldM.guild.fetchAuditLogs()
    .then(logs => {
      let user = logs.entries.first().executor.tag;
      let userid = logs.entries.first().executor.id;
	  let useravatar = logs.entries.first().executor.avatarURL;
    if(rebel1 === false && rebel2 === true) {
       let embed1 = new Discord.RichEmbed()
	   .setThumbnail(`http://i8.ae/1FAa5`)
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`:microphone: **${newM} has been muted **By : <@${userid}>`)
	   .setFooter(`${user}`, useravatar)
       .setColor('#ff0000')
	   .setTimestamp()
       ch.send(embed1)
    }
    if(rebel1 === true && rebel2 === false) {
       let embed2 = new Discord.RichEmbed()
	   .setThumbnail(`http://i8.ae/Ohlud`)
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`:microphone: **${newM} has been unmuted **By : <@${userid}>`)
	   .setFooter(`${user}`, useravatar)
       .setColor('#ff0000')
       .setTimestamp()
       ch.send(embed2)
    }
    if(codes1 === false && codes2 === true) {
       let embed3 = new Discord.RichEmbed()
	   .setThumbnail(`http://i8.ae/UufuL`)
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`:mute: **${newM} has been deafen **By : <@${userid}>`)
	   .setFooter(`${user}`, useravatar)
       .setColor('#ff0000')
       .setTimestamp()
       ch.send(embed3)
    }
    if(codes1 === true && codes2 === false) {
       let embed4 = new Discord.RichEmbed()
	   .setThumbnail(`http://i8.ae/QNzaT`)
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`:headphones: **${newM} has been undeafen **By : <@${userid}>`)
	   .setFooter(`${user}`, useravatar)
       .setColor('#ff0000')
       .setTimestamp()
       ch.send(embed4)
    }
  })
});