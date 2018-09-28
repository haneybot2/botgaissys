const Discord = require("discord.js");
const prefix = process.env.prefix

module.exports = (client, message) => {
    var args = message.content.toLowerCase().split(' ');
    var command = args[0];
	const embedh = new Discord.RichEmbed()
	.setTitle(`** أمثله على الأوامر : **`)
	.setDescription(`
	**${prefix}swears **: لاظهار الكلمات المضافه
	**${prefix}add-swear [SWEAR]** : لاضافة كلمه
	**${prefix}remove-swear [NUMBER]** : لازالة كلمه 
	\`\`**${prefix}swears** ملحوظه : لمعرفة رقم الكلمه استخدم \`\`
	**${prefix}remove-all-swears** : لمسح كل الكلمات`)
	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
    .setColor(`#e60909`)
   
   if(command == prefix + 'swear') {
	   if(!args[1]) return message.channel.send(embedh)
   }
   
   
    if(command == prefix + 'swears') {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
        if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
        if(Swears.length < 1) return message.channel.send(`:information_source: **\`\`${prefix}add-swear [SWEAR]\`\` لا توجد كلمات , إذا كنت ترغب في إضافة بعض الكلمات اكتب **`);
        var number = 1;
       
        if(!args[1] || isNaN(args[1]) || args[1] === '1') {
            if(Swears.length > 10) {
                var more = `\n__:sparkles: **More?** \`\`${prefix}swears 2\`\` (${Math.round(Math.round(Swears.length / 10) + 1)} pages)`;
            }else {
                var more = '\n__';
            }
           
            let swearsWords = new Discord.RichEmbed()
            .setTitle(`:white_check_mark: **${Swears.length}** Swears Words.`)
            .setColor(`#ff0000`)
            .setDescription(`__\n__${Swears.map(w => `**${number++}.** ${w}`).slice(0, 10).join('\n')}__\n${more}`)
            .setFooter(message.author.username, message.author.avatarURL)
            .setColor(`#e60909`)
            .setTimestamp()
           
            message.channel.send(swearsWords);
        }else if(!isNaN(args[1])) {
            if(Swears.length < 10) {
                var morepage = 'اعتزر ولكن لا يوجد الا صفحه واحده';
            }else {
                var morepage = `يرجي الاختيار من 1 الي ${Math.round(Swears.length / 10) + 1}`;
            }
			const embed1 = new Discord.RichEmbed()
			.setDescription(`**${morepage}, لم يتم العثور علي هذه الصفحه**`)
			.setFooter('Requested by '+message.author.username, message.author.avatarURL)
			.setColor(`#e60909`);
	
            if(args[1] > Math.round(Swears.length / 10) + 1) return message.channel.send(embed1);
            if(args[1] < 1) return message.channel.send(embed1);
            if(Swears.length > 10) {
                var more = `\n__:sparkles: **More?** \`\`${prefix}swears ${Math.round(args[1]) + 1}\`\` (${Math.round(Swears.length / 10) + 1} pages)`;
            }else {
                var more = '\n__';
            }
            if(args[1] === '5' && Swears.length > 40) more = '\n__';
            var number = 1;
           
            let swearsWords = new Discord.RichEmbed()
            .setTitle(`:white_check_mark: **${Swears.length}** Swears Words.`)
            .setColor(`#ff0000`)
            .setDescription(`__\n__${Swears.map(w => `**${number++}.** ${w}`).slice(10 * Math.round(args[1].replace('-', '')) - 10, 10 * Math.round(args[1].replace('-', ''))).join('\n')}__\n${more}`)
            .setFooter(message.author.username, message.author.avatarURL)
            .setColor(`#e60909`)
            .setTimestamp()
           
            message.channel.send(swearsWords);
        }
    }
   
   
    if(command == prefix + 'add-swear') {
        if(!message.member.hasPermission('ADMINISTRATOR')) return;
        if(!args1) return message.channel.send(embedh);
        if(Swears.length == 50) return message.channel.send(':x: | اسف ولكن اقصي عدد للكلمات 50 كلمه');
        if(args1.length > 20) return message.channel.send(`:x: **| The swear ${args1.length} characters. Please try with characters less then \`\`20\`\`**`);
       
        Swears.push(args1);
        fs.writeFile('./swears.json', JSON.stringify(Swears), (err) => {
            if(err) console.error(err);
        })
        message.channel.send(`:white_check_mark: **| Successfully added **${args1}** To swears words!**`);
    }
   
   
    if(command == prefix + 'remove-swear') {
        if(!message.member.hasPermission('ADMINISTRATOR')) return;
        if(Swears.length < 1) return message.channel.send(`:information_source:** | No swears words founds to remove it! If you want to add some words type \`\`${prefix}add-swear [SWEAR]\`\`**`);
        if(Swears.length == 1) {
            var to = 1;
        }else if(Swears.length > 1) {
            var to = `<1 to ${Swears.length}>`;
        }
        if(!args[1]) return message.channel.send(embedh);
       
        message.channel.send(`:white_check_mark: **| Successfully remove **${Swears.splice(args[1] - 1, 1)}** from swears words**`);
        fs.writeFile('./swears.json', JSON.stringify(Swears), (err) => {
            if(err) console.error(err);
        })
    }
   
   
    if(command == prefix + 'remove-all-swears') {
        if(!message.member.hasPermission('ADMINISTRATOR')) return;
        if(Swears.length < 1) return message.channel.send(`:information_source:** | No swears words founds to remove it! If you want to add some words type \`\`${prefix}add-swear [SWEAR]\`\`**`);
        message.channel.send(`:white_check_mark: **| Successfully remove **${Swears.length}** Swears words!**`);
        Swears = [];
        fs.writeFile('./swears.json', JSON.stringify(Swears), (err) => {
            if(err) console.error(err);
        })
    }
}
