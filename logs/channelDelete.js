module.exports = (client, channeld) => {
	const Discord = require('discord.js');
    const channel = channeld.guild.channels.find("name","log")
	
	if(channeld.type === 'text') {
        var roomType = ':pencil: #';
    }else
    if(channeld.type === 'voice') {
        var roomType = ':microphone: ';
    }else
	
	    dc.guild.fetchAuditLogs().then(logs => {
	var userid = logs.entries.first().executor.id;
	var userava = logs.entries.first().executor.avatarURL;
	var usertag = logs.entries.first().executor.tag;

    var embed = new Discord.RichEmbed()
    .setAuthor(channeld.guild.name, channeld.guild.iconURL)
    .setDescription(`***Channel Deleted Name : *** **${roomType}${channeld.name}**\n by : <@${userid}>`)
    .setColor('#ff0000')
    .setFooter(`${usertag}`, userava)
    .setTimestamp();
    channel.sendEmbed(embed)
   })
};
