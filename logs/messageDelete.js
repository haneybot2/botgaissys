module.exports = (client, message) => {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('BLACK')
       .setDescription(`**:wastebasket: Message sent by <@${message.author.id}> deleted in <#${message.channel.id}>**\n by : <@${message.author.id}>`)
       .addField(`Message: `, `\n\n\`\`\`${message.cleanContent}\`\`\``)
       .setTimestamp()
       .setFooter(`${message.author.username}`, message.author.avatarURL);
     channel.send({embed:embed});

};
