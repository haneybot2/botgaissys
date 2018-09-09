module.exports = (client, channelc) => {
	const Discord = require('discord.js');
    const logchannel = channelc.guild.channels.find('name', 'log');
	
    if(channelc.type === 'text') {
        var roomType = ':pencil: #';
    }else
    if(channelc.type === 'voice') {
        var roomType = ':microphone: ';
    }else
    if(channelc.type === 'category') {
        var roomType = '';
    }
    
	    channelc.guild.fetchAuditLogs().then(logs => {
	var userid = logs.entries.first().executor.id;
	var userava = logs.entries.first().executor.avatarURL;
	var usertag = logs.entries.first().executor.tag;

    var channelCreate = new Discord.RichEmbed()
    .setAuthor(channelc.guild.name, channelc.guild.iconURL)
    .setDescription(`***Channel Created Name: *** **${roomType}${channelc.name}**\n by : <@${userid}>`)
    .setFooter(`${usertag}`, userava)
    .setTimestamp()
    .setColor('#ff0000')
    logchannel.sendEmbed(channelCreate)
   })
};
