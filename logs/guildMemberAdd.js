module.exports = (client, member) => {
	const Discord = require('discord.js');
     const join =  member.guild.channels.find('name', 'log');
    if(!join) return;
      if(join) {
         moment.locale('ar-ly');
         var m = member.user;
        let embed = new Discord.RichEmbed()
        .setColor('SILVER')
        .setThumbnail(m.avatarURL)
        .setAuthor(m.username,m.avatarURL)
	.setDescription(`:arrow_lower_right:<@${member.user.id}> joined the server`)
        .addField(':alarm_clock: Age of account :',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
        .setFooter(`${m.tag}`, m.avatarURL)
	.setTimestamp();
	join.send(embed);          
         
 }
};
