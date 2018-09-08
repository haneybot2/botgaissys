module.exports = (client, cc) => {
	const Discord = require('discord.js');
    const channel = cc.guild.channels.find("name","log")
	
	if(cc.type === 'text') {
        var roomType = ':pencil: #';
    }else
    if(cc.type === 'voice') {
        var roomType = ':microphone: ';
    }else
    if(cc.type === 'category') {
        var roomType = '';
    }
    
	    cc.guild.fetchAuditLogs().then(logs => {
	var userid = logs.entries.first().executor.id;
	var userava = logs.entries.first().executor.avatarURL;
	var usertag = logs.entries.first().executor.tag;

    var embed = new Discord.RichEmbed()
    .setAuthor(cc.guild.name, cc.guild.iconURL)
    .setDescription(`***Channel Created Name: *** **${roomType}${cc.name}**\n by : <@${userid}>`)
    .setColor('#ff0000')
    .setFooter(`${usertag}`, userava)
    .setTimestamp();
    channel.sendEmbed(embed)
   })
};
