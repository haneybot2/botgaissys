const Discord = require("discord.js");

module.exports = (client, message) => {
      if(message.author.bot) return;
      if(message.channel.type === "dm") return;

      let prefix = "!";
      let messageArray = message.content.split (" ");
      let cmd = messageArray[0];
      let args = messageArray.slice(1);



        if(cmd === `${prefix}ban`){


	  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return;
          let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
          if(!kUser) return message.channel.send(":information_source: ** `!ban @َζ͜͡ELMEWAL3` يجب تحديد شخص **");
          let bReason = args.join(" ").slice(22);
          if(!message.member.hasPermission("MANAGE_CHANNELS")) return;
          if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**لا يمكنك حظر شخص من الادمن**")

          let banEmbed = new Discord.RichEmbed()
          .setAuthor(`${kUser}`, kUser.avatarURL)
          .setColor("#ff0000")
		  .setDescription(`**<@${kUser.id}> banned from the server** \n by : <@${message.author.id}>`)
		  .addField("Reason", bReason);

          let banChannel = message.guild.channels.find('name', 'log');
          if(!banChannel) return;

		  	  message.channel.send(`**✅ ${kUser.username} kicked from the server !**  `)
          message.guild.member(kUser).ban(bReason)
          banChannel.send(banEmbed);
        }
}
