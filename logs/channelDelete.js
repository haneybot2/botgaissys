module.exports = (client, channeld) => {
	const Discord = require('discord.js');
    var logchannel = channeld.guild.channels.find('name', 'log');
   if(!logchannel) return;
	
	if(channeld.type === 'text') {
        var roomType = ':pencil: #';
    }else
    if(channeld.type === 'voice') {
        var roomType = ':microphone: ';
    }else
    if(channeld.type === 'category') {
        var roomType = '';
    }
	    channeld.guild.fetchAuditLogs().then(logs => {
	var userid = logs.entries.first().executor.id;
	var userava = logs.entries.first().executor.avatarURL;
	var usertag = logs.entries.first().executor.tag;

    var channelCreate = new Discord.RichEmbed()
    .setAuthor(channeld.guild.name, channeld.guild.iconURL)
    .setDescription(`***Channel Deleted Name : *** **${roomType}${channeld.name}**\n by : <@${userid}>`)
    .setFooter(`${usertag}`, userava)
    .setTimestamp()
    .setColor('#ff0000')
    logchannel.sendEmbed(channelCreate)
   })
};
