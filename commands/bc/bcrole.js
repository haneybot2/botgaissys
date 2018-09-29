const Discord = require('discord.js');
const prefix = process.env.prefix

module.exports = (client, message) => {
  if(message.author.bot) return;
if(!message.channel.guild) return;
if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	if (command == "bcrole") {
	  if (!message.member.hasPermission("ADMINISTRATOR"))  return;
	  let args1 = message.content.split(" ").slice(1);
	  var args = args1.slice(1).join(' ');
	  var member = message.mentions.users.first();
	  var argsRole = message.content.toLowerCase().split(' ').slice(1);

	
    if(!args[0]) {
      message.channel.send(":information_source:** `!bcrole @Admin [message]` قم بمنشنة الرتبة **");
        return;
    }
    if(!args[1]) {
      message.channel.send(":information_source: **`!bcrole @Admin [message]` قم بكتابة الرساله ** ");
        return;
    }
		
	var roleRe = argsRole.join(' ').replace(' ', '');
	var role = message.guild.roles.find('name', roleRe)  || message.mentions.roles.first() || message.guild.roles.find(r => r.id === argsRole) || message.guild.roles.find(r => r.name.toLowerCase().includes(argsRole));

            if(!role) {
              message.channel.send(":x: **لا توجد رتبة بهذا الاسم**");
                return;
            }
        message.guild.members.filter(m => m.roles.get(role.id)).forEach(sa => {
        sa.send(`${args}`);
        });
      message.channel.send(`** ${message.guild.members.filter(m => m.roles.get(role.id)).size}  تم ارسال رسالتك الي  **`);
    }
};
