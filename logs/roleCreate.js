module.exports = (client, rc) => {
    const channel = rc.guild.channels.find("name","log")
	
	    rc.guild.fetchAuditLogs().then(logs => {
	var userid = logs.entries.first().executor.id;
	var userava = logs.entries.first().executor.avatarURL;
	var usertag = logs.entries.first().executor.tag;
	
    var embed = new Discord.RichEmbed()
    .setAuthor(rc.guild.name, rc.guild.iconURL)
    .setDescription(`***Created Role Name : *** **${rc.name}**\n by : <@${userid}>`)
    .setColor('#ff0000')
    .setFooter(`${usertag}`, userava)
    .setTimestamp();
    channel.sendEmbed(embed)
    })
};
