module.exports = (client, member) => {
	const Discord = require('discord.js');
	const moment = require("moment"); 
    if (!member || !member.id || !member.guild || !member.guild) return;
    const guild = member.guild;
	
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.joinedTimestamp).fromNow();
    
	var m = member.user;
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
	   .setThumbnail(memberavatar)
       .setColor('BLACK')
       .setDescription(`:arrow_upper_left:  <@${member.user.id}> **Leave From Server**\n\n`)
       .setTimestamp()
       .setFooter(`${m.tag}`, member.user.avatarURL);
     channel.send({embed:embed});
};
