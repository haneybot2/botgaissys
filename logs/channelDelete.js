module.exports = (client, dc) => {
    const channel = dc.guild.channels.find("name","log")
	
	if(dc.type === 'text') {
        var roomType = ':pencil: #';
    }else
    if(dc.type === 'voice') {
        var roomType = ':microphone: ';
    }else
    if(dc.type === 'category') {
        var roomType = '';
    }
	
	    dc.guild.fetchAuditLogs().then(logs => {
	var userid = logs.entries.first().executor.id;
	var userava = logs.entries.first().executor.avatarURL;
	var usertag = logs.entries.first().executor.tag;

    var embed = new Discord.RichEmbed()
    .setAuthor(dc.guild.name, dc.guild.iconURL)
    .setDescription(`***Channel Deleted Name : *** **${roomType}${dc.name}**\n by : <@${userid}>`)
    .setColor('#ff0000')
    .setFooter(`${usertag}`, userava)
    .setTimestamp();
    channel.sendEmbed(embed)
   })
};
