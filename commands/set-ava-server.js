const Discord = require("discord.js");
const prefix = process.env.prefix

module.exports = (client, message) => {
  let args = message.content.split(" ").slice(1).join(" ")
  if (message.content.startsWith(`${prefix}set server avatar`)) {
                if (!message.member.hasPermission("MANAGE_SERVER"))  return;
                if(!args) return message.channel.send('`**ضع رابط الصوره**`');
                message.guild.owner.send(`**تم تغيير صوره السرفر الي ${args}
                بواسطة : <@${message.author.id}>**`)
                message.guild.setIcon(args)
                message.channel.send(`**تم تغير صورة السيرفر الي : __${args}__ ** `);
                
       }

       }
