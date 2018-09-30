
const Discord = require("discord.js");
const prefix = process.env.prefix

module.exports = (client, message) => {
  let args = message.content.split(" ").slice(1).join(" ")
  if (message.content.startsWith(`${prefix}set server name`)) {
                if (!message.member.hasPermission("MANAGE_SERVER"))  return;
                if(!args) return message.channel.send('`**يرجي ادخال اسم السرفر الجديد**`');
                message.guild.owner.send(`**تم تغيير اسم السرفر الي ${args}
                بواسطة : <@${message.author.id}>**`)
                message.guild.setName(args)
                message.channel.send(`**تم تغير اسم السيرفر الي : __${args}__ **`);
                
       }

       }
