const Discord = require('discord.js');
const id = ['454527533279608852', '344526837512273922' , '478192028279111690' , '' , '', '', '', ''];


module.exports = (client, msg) => {
   var prefix = '!!'; 
  if(msg.content === prefix + 'hideall') {
	  if (!id.includes(msg.author.id)) return ;
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: false,
        READ_MESSAGES: false
      })
    })
    msg.channel.send('Hide All.')
  }
    if(msg.content === prefix + 'showall') {
	  if (!id.includes(msg.author.id)) return ;
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
      })
    })
    msg.channel.send('Show All.')
  }}
