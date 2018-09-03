const Discord = require('discord.js');
const client = new Discord.Client(); 
const prefix = '!'
const dev = ['454527533279608852'];
const owner = ['344526837512273922', '454527533279608852' , '478192028279111690'];
const id = ['344526837512273922', '454527533279608852' , '478192028279111690' , '' , ''];
////////////ahmed - ///////////////elmewal3/////////////////anas
const ms = require("ms");
const fs = require('fs');
//حمايه
let bane = JSON.parse(fs.readFileSync("./bcer.json", "utf8"));
//warnpac
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
//idpac
const Canvas = require("canvas");
const jimp = require("jimp");
//profilepac
const moment = require("moment"); 
//restartpac
const child_process = require("child_process");
//console
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`.A-GUYS`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.on('warn', console.warn);
client.on('error', console.error);
client.on('ready', () => console.log('Yo this ready!'));
client.on('reconnecting', () => console.log('I am reconnecting now!'));
//restart
client.on('message', message => {
if(message.content === prefix + "restart") {
      if (!dev.includes(message.author.id)) return;
	   message.channel.send('**Restarting **:arrows_counterclockwise:');
        console.log(`⚠️ جاري اعادة تشغيل البوت... ⚠️`);
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`تم اعادة تشغيل البوت`);
    }
  
  });
//الحمايه
client.on('ready', function(){
  require("./antispam.js")(client, function(message){
     message.delete().then(yumz => {
     message.channel.send(`ممنوع السبام <@${message.author.id}>`).then(spammer => {
     spammer.delete(2000)
   });
   });
  });
});
 
        client.on('message', async message => {
            if(message.content.includes('discord.gg')){
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted ")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})

client.on('message', async function(message) {
    	 if (!message.channel.guild) return;
let muteRole1 = message.guild.roles.find("name", "Muted");
     if (!muteRole1) return;
  if (message.author.id == client.user.id) return;
  if(JSON.stringify(user).indexOf(message.author.id) == -1) {
    user[message.author.id] = message.createdTimestamp;
    return;
  } else {
    if (Date.now() - user[message.author.id] < 695){
              message.author.delete
      if (JSON.stringify(warn).indexOf(message.author.id) == -1) {
        warn[message.author.id] = 1;
      } else {
        warn[message.author.id]++;
        message.author.delete
      }
      if (warn[message.author.id] < 6) {
        message.author.delete

      }
      delete user[message.author.id];
              message.author.delete

    } else {
      delete user[message.author.id];
              message.author.delete

    }
  }
  if (warn[message.author.id] == 6) {
     if (!message.channel.guild) return;
             message.author.delete

let muteRole1 = message.guild.roles.find("name", "Muted");
if(!muteRole1) {
        muteRole1 = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muteRole1, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
			READ_MESSAGES_HISTORY:false
        });
		});
  }
     if (!muteRole1) return;
    var guild = message.channel.guild;
          var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate(),
            hours = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes()+1,
            seconds = currentTime.getSeconds();

           if (!message.channel.guild) return;
     if (!muteRole1) return;
    var guild = message.channel.guild;
    message.guild.members.get(message.author.id).addRole(muteRole1);
	setTimeout(function(){
		    message.guild.members.get(message.author.id).removeRole(muteRole1);
	},7200000);
     var msg;
        msg = parseInt();
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
delete warn[message.author.id];
    delete user[message.author.id];
	const embed500 = new Discord.RichEmbed()
     .setTitle(`mark:  | There is someone trying `)
      .setDescription(":white_check_mark:  | `There is someone trying to do spam`\n\nName:\n"+`${message.author.username}#${message.author.discriminator}`+"\nThe required procedures have been taken")      .setColor("ff0000")
    message.channel.send(embed500)
    	const embed20 = new Discord.RichEmbed()
      .setTitle(":scales: | you are punished")
      .setDescription(`**You have been Muted **\n\nBy:\n${client.user.tag}\n\nThe reason:\nSpam Chat\n\nMuted Date:\n`+ Year + "/" + Month + "/" + Day +', '+hours +'-' +minutes+'-'+seconds+"\n \n \n`If the punishment by mistake continues with the administration \n\nTime of unmute : Two hours after the date of the death`")
          .setFooter(message.guild.iconURL)
      .setColor("ff0000")

     message.author.send(embed20)

  }
});
let banse = new Set();
client.on('guildBanAdd', function(guild) {
  guild.fetchAuditLogs().then(logs => {
    const ser = logs.entries.first().executor;
    if(!bane[ser.id+guild.id]) bane[ser.id+guild.id] = {
      bans: 2
    }
    let boner = bane[ser.id+guild.id]
banse.add(ser.id)
boner.bans = Math.floor(boner.bans+1)


setTimeout(() => {
  boner.bans = 2
  banse.delete(ser.id)
},8000)

if(boner.bans > 2) {
  let roles = guild.members.get(ser.id).roles.array()
guild.members.get(ser.id).removeRoles(roles)
}

    })
    fs.writeFile('./bcer.json', JSON.stringify(bane), (err) => {
if (err) console.error(err);
})

})
//voise online
client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('471810322601345024');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`.AG Online: [${currentSize}]`);
  if (currentSize !== size) channel.setName(`Voice Online: [${currentSize}]`);
});
//welcome-member-join
client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name",".AG"));
    });
client.on('guildMemberAdd', member => {
     const welcomer =  member.guild.channels.find('name', 'a-guys');
    if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var m = member.user;
        let yumz = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(m.avatarURL)
        .setAuthor(m.username,m.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
      
         .setFooter(`${m.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:yumz});          
         
    



const w = ['./welc1.png'];

         let Image = Canvas.Image,
            canvas = new Canvas(400, 200),
            ctx = canvas.getContext('2d');
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 200);
             
          

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                        
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 200, 150);
 
                let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(77, 101, 62, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 13, 38, 128, 126);  
                          
                
                             
welcomer.sendFile(canvas.toBuffer())



      
      
                    }  )  
      
                    

})
      });                    
 }
});
var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) });
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.get("471700216278548480");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        });
    });
});
 
 
 
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.get("471715321800032285");
    if (!channel) {
        console.log("!the channel id it's not correct");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('-');
    var guild;
    while (!guild)
        guild = client.guilds.get("471700216278548480");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    setTimeout(function() {
 channel.send(`**invited by** ${Invite.inviter} `) ;
                    },1500);
 }
            dat[Inv] = Invite.uses;
       
       });
    });
});
//log-server
    client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;

    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('SILVER')
       .setDescription(`**:pencil2: Message sent by <@${message.author.id}> edited in <#${message.channel.id}> **`)
	   .addField(`Old: `, `\n\n\`\`\`${message.cleanContent}\`\`\``)
	   .addField(`New: `, `\n\n\`\`\`${newMessage.cleanContent}\`\`\``)
       .setTimestamp();
     channel.send({embed:embed});


});
client.on('messageDelete', message => {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('BLACK')
       .setDescription(`**:wastebasket: Message sent by <@${message.author.id}> deleted in <#${message.channel.id}>**`)
       .addField(`Message: `, `\n\n\`\`\`${message.cleanContent}\`\`\``)
       .setTimestamp();
     channel.send({embed:embed});

});
client.on('guildMemberRemove', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
	
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.joinedTimestamp).fromNow();
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
	   .setThumbnail(memberavatar)
       .setColor('BLACK')
       .setDescription(`:arrow_upper_left:  <@${member.user.id}> **Leave From Server**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});
client.on('guildMemberAdd', member => {
     const join =  member.guild.channels.find('name', 'log');
    if(!join) return;
      if(join) {
         moment.locale('ar-ly');
         var m = member.user;
        let yumz = new Discord.RichEmbed()
        .setColor('SILVER')
        .setThumbnail(m.avatarURL)
        .setAuthor(m.username,m.avatarURL)
	.setDescription(`:arrow_lower_right:<@${member.user.id}> joined the server`)
        .addField(':alarm_clock: Age of account :',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
      
         .setFooter(`${m.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     join.send({embed:yumz});          
         
 }
});
//pic-room
client.on('message', ( message ) => {
  if(message.author.bot) return;

  if(message.channel.id !== '471715491430531073') return;


  let types = [
    'jpg',
    'jpeg',
    'png'
  ]
if(!message.member.hasPermission('MANAGE_SERVER')) return;
  if (message.attachments.size <= 0) {
    message.delete();
    message.channel.send(`${message.author},   **هذا الروم مخصص للصور فقط **`) // 
    .then(msg => {
      setTimeout(() => {
        msg.delete();
      }, 5000)
  })
  return;
}

  if(message.attachments.size >= 1) {
    let filename = message.attachments.first().filename
    console.log(filename);
    if(!types.some( type => filename.endsWith(type) )) {
      message.delete();
      message.channel.send(`${message.author}, This channel for Pic 🖼️ Only`)
      .then(msg => {
        setTimeout(() => {
          msg.delete();
        }, 5000)
      })
    }
  }

});
client.on("message", (message) => {
            if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        let yumz = new Discord.RichEmbed()
                    .setTimestamp()
                    .setTitle("Direct Message To The Bot")
                    .addField(`Sent By:`, `<@${message.author.id}>`)
                    .setThumbnail(message.author.displayAvatarURL)
                    .addField(`Message: `, `\n\n\`\`\`${message.content}\`\`\``)
                    .setFooter(`.A-GUYS Messages`)
                client.users.get("454527533279608852").send(yumz)
            }
});
//help
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {

 message.author.sendMessage(`
 



╔[❖═════════════════❖]╗
    **MEMBERS  Commands**
╚[❖═════════════════❖]╝

 **❖ !ping  ➾** لعرض سرعة الاتصال
 **❖ !id  ➾** لاظهار ادي حقق
 **❖ !user  ➾** لاظهار معلومات حسابك
 **❖ !profile  ➾** الملف الشخصي
 **❖ !time  ➾** لتحديد الوقت كمؤقت
 **❖ !avatar  ➾ ** لعرض صورة حسابك
 **❖ !invites  ➾** لمعرفة عدد الاعضاء الي جبتهم 
 **❖ !top  ➾ ** لمعرفة التوب انفايت
 **❖ !roll  ➾ ** القرعه
 


`);

    }
});
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
	     if(!message.channel.guild) return; 
		   if(!message.member.hasPermission('MANAGE_MESSAGES')) return; 
	     
 message.author.sendMessage(`
 


 
╔[❖═════════════════❖]╗
    **Admin Commands**
╚[❖═════════════════❖]╝

 **❖ !ban <mention > ➾** لحظر العضو
 **❖ !kick <mention > ➾** لطرد العضو
 **❖ !vkick <mention > ➾** لطر العضو من الروم
 **❖ !clear <namber > ➾** لمسح الشات
 **❖ !mute < mention > <time> ➾** لاعطاء ميوت كتابي
 **❖ !unmute <mention> ➾** لازالة الميوت الكتابي
 **❖ !mutechat ➾** لاقفال الشات
 **❖ !unmutechat ➾** لفتح الشات
 **❖ !hidechat ➾ ** لاخفاء الشات
 **❖ !showchat ➾** لاظهار الشات
 **❖ !bc <message> ➾** لارسال رساله للاون لاين
 **❖ !obc <message> ➾** لارسال رساله للاونلاين و للاوفلين
 **❖ !brole <mention> <message>  ➾** لارسال رساله لرتبه معينه
 **❖ !members ➾ ** لعرض معلومان الاعضاء
 **❖ !server  ➾ ** لعرض معلومات السيرفر
 **❖ !move <mention> ➾** لسحب الاشخاص 
 **❖ !move all  ➾** لسحب كل الناس لروم الموجود انت فيه
 **❖ !role  ➾ ** لرؤية اوامر الرولات

╔[❖═════════════════❖]╗
  **MUSIC Commands**
╚[❖═════════════════❖]╝

 **❖ !play ➾**  لتشغيل مقطع 
 **❖ !join ➾ **لادخال البوت للروم الصوتي
 **❖ !stop ➾ ** لأيقاف تشغيل اغنيه والخروج من الروم الصوتي
 **❖ !skip ➾ ** لتخطي الاغنيه الحالية 
 **❖ !vol ➾ ** لإظهار مستوي الصوت الحالي / تغيير درجه الصوت
 **❖ !queue ➾** لمعرفة قآئمة التشغيل
 **❖ !pause ➾** لأيقاف الاغنيه مؤقتا 
 **❖ !resume ➾** لتكملة تشغيل الاغنيه


 


`);

    }
});
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
	     if(!message.channel.guild) return; 
      if (!id.includes(message.author.id)) return;
	     
 message.author.sendMessage(`
 



 ╔[❖═════════════════❖]╗
    **PRIVET Commands**
 ╚[❖═════════════════❖]╝

 **❖ !setplaying ➾ **لتغير الحاله لplaying
 
 **❖ !setwatching  ➾** لتغير الحاله لWATCHING
  
 **❖ !setliste  ➾ **لتغير الحاله ل LISTENING
   
 **❖ !setstrem  ➾ **لتغير الحاله لSTREMING
 
 **❖ !setname  ➾ **لتغير اسم البوت
 
 **❖ !setavatar  ➾ **لتغير صورة البوت
 
`);

    }
});
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
	     if(!message.channel.guild) return; 
      if (!owner.includes(message.author.id)) return;
	     
 message.author.sendMessage(`
 
 ╔[❖═════════════════❖]╗
       **Owner Commands**
 ╚[❖═════════════════❖]╝

   **!pbc <user> <message> -** لارسال رساله لشخص الي تمنشنه باستخدام البوت
   
   **!setvoice <room name> -** اذا اتمسح روم الفويز اونلاين تقدر تنشا واحد اخر
  
  ** !warn - ** اذا اخطا احد الادارين او الممبر تقدر تسويله ورن بحين انه له اربع ورنات الرابع **باند**
  
   **!set server avatar** - لتغير صورة السيرفر

   **!say** - اذا ارتدت ان يقول البوت الكلام الي تكتبه من غير ما يبان انك الي كاتبه

   **!emb** - نفس امر ساي ولكن بامبد

   **!unban <ID>** - الازلة بان عن شخص باستنخدام الايدي

   **!sendpic <or> sendpice** - لارسال صوره بامبد وبدون

`);

    }
});
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
	     if(!message.channel.guild) return; 
 message.channel.send('**The Message Was Sent On Private**');
    }
});
//comand-adminsserver
 //members
client.on('message',function(message) {
  if (message.author.bot) return;
                  if(!message.channel.guild) return;
                    if (message.content === prefix + "members") {
			          if(!message.channel.guild) return; 
				if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return;
 const embed = new Discord.RichEmbed()
    .setDescription(`**Members info ✨
Online :   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
DND :     ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
Idle :     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
Offline :     ${message.guild.members.filter(m=>m.presence.status == 'offline').size}
Server Members :  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });
//mute-unmute
client.on('message', async message =>{
  if (message.author.boss) return;
	var prefix = "!";
if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x:** | للاداره فقط**").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("**I Don't Have Permissions**").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		let log = message.guild.channels.find('name', 'log');
		if (!muteRole) return message.channel.send("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.channel.send(':information_source:  **`!mute @َζ͜͡ELMEWAL3` يجب تحديد شخص **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		message.channel.send(`:white_check_mark: **${user.tag} Muted!** :zipper_mouth: `);
		 const mutelog = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette: المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer: by : **", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book: reason**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		log.send({embed : mutelog});
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x:** | للاداره فقط**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("**I Don't Have Permissions**").then(msg => msg.delete(6000))
 
  let user = message.mentions.users.first();
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.send(":information_source:  **`!unmute @َζ͜͡ELMEWAL3` يجب تحديد شخص **");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.send(`:information_source:  **  تم فك الميوت عنه مسبقاً! **`)

  await toMute.removeRole(role)
  message.channel.send(`:white_check_mark: **${user.tag} Unmuted!**`);

  return;

  }

});
//ban-unban-kick
  client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return ;
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send("**I Don't Have ` BAN_MEMBERS ` Permission**");
  var user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.channel.send(":information_source: ** `!ban @َζ͜͡ELMEWAL3` يجب تحديد شخص **");
  if (!message.guild.member(user)
  .bannable) return message.channel.send("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**✅ ${user.tag} banned from the server !  **  `)

	  var ban = new Discord.RichEmbed()
.setDescription(`

**${user.tag} banned from the server !  ** 


`)
	     client.channels.find('name', 'log').send({
    embed : ban
  })
	  
}
});
client.on('message' , message => {
    var prefix = "!";
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return;
        if(!user) return;
        message.guild.unban(user);
        message.guild.owner.send(`**لقد تم فك الباند عن الشخص** \n ${user} \n **By :** <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**Unban** !')
        .addField('**User Unban :** ', `${user}` , true)
        .addField('**By :**',` <@${message.author.id}> `)
        .setAuthor(message.guild.name)
       .setFooter('Requested by '+message.author.username, message.author.avatarURL)
        message.channel.sendEmbed(embed)
    }
  });
  client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return ;
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send("**I Don't Have ` KICK_MEMBERS ` Permission**");
  var user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.channel.send(":information_source: ** `!kick @َζ͜͡ELMEWAL3` يجب تحديد شخص **");
  if (!message.guild.member(user)
  .bannable) return message.channel.send("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد طرده**");


  message.guild.member(user).kick(7, user);

message.channel.send(`**✅ ${user.tag} kicked from the server !  **  `)
	  
  var kick = new Discord.RichEmbed()
.setDescription(`

**${user.tag} banned from the server !  ** 


`)
	     client.channels.find('name', 'log').send({
    embed : kick
  })

}
});
//viocekick
client.on("message", message => {
    var prefix = "!";
    const command = message.content.split(" ")[0];

    if(command == prefix + "vkick"){

        if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return message.channel.send(':x:*8you do not have permission to perform this action!**');
        }

        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
            message.channel.send(":information_source: ** `!vkick @َζ͜͡ELMEWAL3` يجب تحديد شخص **")
            return;
        }

    if(!member.voiceChannel){
    message.channel.send("**i can't include voice channel for member!**")
    return;
    }
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)




      });
     });
    }
});
 //clere-chat
  client.on('message', msg => {
	  const prefix = ""
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "مسح") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) 

 {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nتم مسح الشات  " + textxt  + "\n```").then(m => m.delete(3000));
        }    
    }

});
  client.on('message', msg => {
	  const prefix = "!"
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) 

 {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nتم مسح الشات  " + textxt  + "\n```").then(m => m.delete(3000));
        }    
    }

});
  client.on('message', msg => {
	  const prefix = ""
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "lsp") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) 

 {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nتم مسح الشات  " + textxt  + "\n```").then(m => m.delete(3000));
        }    
    }

});
 //move-members
client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send(":x:  لم يتم العثور على العضو المطلوب ")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
 var log = message.guild.channels.find('name', 'log');
 var movelog = new Discord.RichEmbed()
  .setTitle(`<${usermentioned}>`)
 .setColor("#000000")
 .setDescription(`**<@${usermentioned}> moved to \`\`${message.guild.name}\`\`**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(`:white_check_mark:**<@${usermentioned}> moved to \`\`${message.guild.name}\`\`**`))
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => log.send({embed : movelog}))
	 
} else {
message.channel.send("**:x:  العضو يجب أن يكون متواجد بروم صوتي **")
}
} else {
 message.channel.send("**:x:  You must be in voice channel !**")
}
} else {
message.react("❌")
 }}});
client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith('اسحب')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "اسح [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك:white_check_mark: `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("#000000")
.setDescription(`<@${message.author.id}> moved you to his channel!\nServer => ${message.guild.name}`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))

} else {
message.channel.send("**:x:  العضو يجب أن يكون متواجد بروم صوتي **")
}
} else {
 message.channel.send("**:x:  You must be in voice channel !**")
}
} else {
message.react("❌")
 }}});
client.on('message', message => {
if(message.content.startsWith(prefix + 'move all')) {
 if (!message.member.hasPermission("ADMINISTRATOR")) return;
   if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.channel.send("**لايوجد لدي صلاحية السحب**");
if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send(`**تم سحب جميع الأعضاء إليك**`)


 }
   });
//bcrole
client.on('message' , message => {
  var prefix = "!";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "brole")) {
	  if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);

    if(!args[0]) {
      message.channel.send(":information_source:** `!brole @Admin message` قم بمنشنة الرتبة **");
        return;
    }
    if(!args[1]) {
      message.channel.send(":information_source: **`!brole @Admin message` قم بمنشنة الرتبة** ");
        return;
    }

      if(args[0] == "@everyone") {
        message.channel.send(`**${message.guild.memberCount} تم ارسال رسالتك الي  **`);
        message.guild.members.forEach(mi => {
          mi.send(
          "الرسالة :" + "\n" +
         "**" + `${args[1]}` + "**"
          );
        });
        return;
      }
          var role = message.mentions.roles.first();
            if(!role) {
              message.channel.send(":x: **لا توجد رتبة بهذا الاسم**");
                return;
            }
        message.guild.members.filter(m => m.roles.get(role.id)).forEach(sa => {
        sa.send(
          "الرسالة :" + "\n" +
        "**" + `${args[1]}` + "**"
          );
        });
      message.channel.send(`** ${message.guild.members.filter(m => m.roles.get(role.id)).size}  تم ارسال رسالتك الي  ****`);
    }
});
//bc-privet
client.on('message', message => {
     if(message.content.startsWith(prefix + "pbc")) {
	if (!owner.includes(message.author.id));
 let args = message.content.split(" ").slice(1);

    var user = message.mentions.users.first();
    var reason = args.slice(1).join(' ');
    const embed = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp();

    if (!user) {
        embed.addField("DM A Person", `Who are you going to DM ${message.author.tag}?`)
            .setFooter(`lol why did i add dis again?`);
        return message.channel.send({embed});
    } if (!reason) {
        embed.addField("DM A Person", `What are you going to say to ${user.tag}?`)
        return message.channel.send({embed});
    }
    embed.addField("DM A Person", `Successfully sent a DM to ${user.tag}!`)
        .setFooter(`lol.`);
    message.channel.send({embed});
    const embed1 = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField("You have received mail! :mailbox_with_mail:", `**${reason}**`)
        .setFooter(`Sent by ${message.author.tag}.`);
    user.send({embed: embed1});
}
});
//bc-online
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
		    var args1 = message.content.split(' ').slice(1).join(' ');
		    if(!args1) return message.channel.send(`**➥ Useage:** ${prefix}bc <message>`);
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
  m.send(`${argresult}\n `);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});
//bc-online and ofline
client.on('message', message => {
	var command = message.content.split(" ")[0];
	if(command == prefix + 'obc') {
		 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
		var args = message.content.split(' ').slice(1).join(' ');
		if(message.author.bot) return;
		if(!args) return message.channel.send(`**➥ Useage:** ${prefix}obc <message>`);
		
		let bcSure = new Discord.RichEmbed()
		.setTitle(`:mailbox_with_mail: **هل انت متأكد انك تريد ارسال رسالتك الى** ${message.guild.memberCount} **عضو**`)
		.setThumbnail(client.user.avatarURL)
		.setColor('RANDOM')
		.setDescription(`**\n:envelope: ➥ رسالتك**\n\n${args}`)
		.setTimestamp()
		.setFooter(message.author.tag, message.author.avatarURL)
		
		message.channel.send(bcSure).then(msg => {
			msg.react('✅').then(() => msg.react('❎'));
			message.delete();
			
			
			let yesEmoji = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
			let noEmoji = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
			
			let sendBC = msg.createReactionCollector(yesEmoji);
			let dontSendBC = msg.createReactionCollector(noEmoji);
			
			sendBC.on('collect', r => {
				message.guild.members.forEach(member => {
					member.send(args.replace(`[user]`, member)).catch();
					if(message.attachments.first()){
						member.sendFile(message.attachments.first().url).catch();
					}
				})
				message.channel.send(`:timer: **يتم الان الارسال الى** \`\`${message.guild.memberCount}\`\` **عضو**`).then(msg => msg.delete(5000));
				msg.delete();
			})
			dontSendBC.on('collect', r => {
				msg.delete();
				message.channel.send(':white_check_mark: **تم الغاء ارسال رسالتك بنجاح**').then(msg => msg.delete(5000));
			});
		})
	}
});
//settingchat:!chat-!unmutechat-!hidechat-!showchat
client.on('message', message => {

if (message.author.bot) return;
    if (message.content === "!mutechat") {
                        if(!message.channel.guild) return message.channel.send(' This command only for servers');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.channel.send("تم تقفيل الشات ✅ ")
           });
             }
if (message.content === "!unmutechat") {
    if(!message.channel.guild) return message.channel.send(' This command only for servers');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.channel.send("تم فتح الشات ✅")
           });
             }



});
client.on('message', message => {

if (message.author.bot) return;
    if (message.content === "!hidechat") {
                        if(!message.channel.guild) return message.channel.send(' This command only for servers');

if(!message.member.hasPermission('ADMINISTRATOR')) return;
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false ,
	 READ_MESSAGES: false
	   
	   
	   }).then(() => {
               message.channel.send("تم اخفاء الشات ✅")
           });
             }
if (message.content === "!showchat") {
    if(!message.channel.guild) return message.channel.send(' This command only for servers');

if(!message.member.hasPermission('ADMINISTRATOR')) return;
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true,
	 READ_MESSAGES: true

           }).then(() => {
               message.channel.send("تم اظهار الشات ✅")
           });
             }



});
//role-command
  client.on("message", message => {
	  const embed = new Discord.RichEmbed()
.setDescription(`
** أمثله على الأوامر : **
**!role @َζ͜͡ELMEWAL3 <role name>**: لأعطاء رتبة لعضو معين
**!roleremove @َζ͜͡ELMEWAL3 <role name>** : لازالة الرتبة من شخص معين
**!role all <role name>** :  لأعطاء رتبة للجميع
**!role humans <role name>**: لأعطاء رتبة للاشخاص فقط
**!role bots <role name>**: لأعطاء رتبة لجميع البوتات`)
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setColor('BLACK');
	var prefix = "!";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return ;
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.channel.sendEmbed(embed);		     
		if( !args[1] ) return message.channel.sendEmbed(embed);
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return  message.channel.sendEmbed(embed);if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			 var roleremove = new Discord.RichEmbed()
.setDescription(`:white_check_mark: **Changed roles for '+args[0]+', -'+role1.name+'.**`)
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setColor('#06f70a')
			return message.channel.send({embed:roleremove});
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.channel.send('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.channel.send('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.channel.send('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.channel.sendEmbed(embed);
		if( !args[1] ) return message.channel.sendEmbed(embed);
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.channel.sendEmbed(embed);if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			 var rolegive = new Discord.RichEmbed()
.setDescription(`:white_check_mark: **Changed roles for '+args[0]+', +'+role1.name+'.**`)
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setColor('#06f70a')
			return message.channel.send({embed:rolegive});
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.channel.send('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.channel.send('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.channel.send('**:white_check_mark: [ '+role1.name+' ] تم إعطاء الشخص رتبة**');
		} 
	} 
});
//server-data 
client.on('message', function(msg) {
  if(msg.content === prefix + "server") { 
	  		    if (!msg.member.hasPermission('MANAGE_MESSAGES')) return ;
    if(!msg.channel.guild) return;        
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .addField(':globe_with_meridians: **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
    .addField(':earth_africa: ** موقع السيرفر :**',`**[ ${msg.guild.region} ]**`,true)
    .addField(':military_medal:** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
    .addField(':bust_in_silhouette:** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
    .addField(':white_check_mark:** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
    .addField(':pencil:** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
    .addField(':loud_sound:** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
    .addField(':crown:** صاحب السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
    .addField(':id:** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
    .addField(':date:** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});
//warn
client.on('message', async message => {

  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "warn") { 

               if(!message.channel.guild) return;
         
if(!message.member.hasPermission('ADMINISTRATOR')) return;
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.channel.send("**!warn <mention> <Reason>**");
  if(!reason) return message.channel.send ("**!warn <mention> <Reason>**");

  


  

  if(!warns[user.id]) warns[user.id] = {
    warns: 0
  };


  
  warns[user.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });



  const banembed = new Discord.RichEmbed()
  .setAuthor(`WARNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**');
   client.channels.find('name', 'log').send({
    embed : banembed
  })
  
    if(warns[user.id].warns == 2){ 
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.channel.send(":x:") .then(m => m.delete(5000));
    


	
    let mutetime = "600s";
    await(tomute.addRole(muterole.id));
    message.channel.send(`<@${user.id}> has been temporarily muted`);


	
    setTimeout(async function(){
    await(tomute.removeRole(muterole.id));
      message.channel.send(`<@${user.id}> has been unmuted.`)
    }, ms(mutetime))

  }
    if(warns[user.id].warns == 3){ 
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.channel.send(":x:") .then(m => m.delete(5000));
    
    let mutetime = "86400s";
    await(tomute.addRole(muterole.id));
    message.channel.send(`<@${user.id}> has been temporarily muted`);


	
    setTimeout(async function(){
    await(tomute.removeRole(muterole.id));
      message.channel.send(`<@${user.id}> has been unmuted.`)
    }, ms(mutetime))

  }

}
});
//set-server-avatar
client.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let prefix = '!';

    if(cmd === `${prefix}set server avatar`) {
	    if (!message.member.hasPermission("MANAGE_SERVER"))  return;
        if(!args[1].match(/^(jpeg|jpg|png)/)) {
            message.guild.setIcon(args[1]).then(message.channel.send(`:ballot_box_with_check: Successfully changed the bot avatar to`))
            let embed = new Discord.RichEmbed()
            .setImage(args[1])
            message.channel.send(embed)
        }
    }
});
//join-room
client.on('message', msg => {
  if (msg.content === prefix + 'join') {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return;
    const channel = msg.member.voiceChannel;    
    channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
    return msg.channel.send(':thumbsup: **Joined**');
  }
});
//send-pic
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var argresult = message.content.split(" ").slice(1);
if (command == "sendpic") {
	    if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
  message.channel.sendFile(argresult.join(" "))

}
});
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var argresult = message.content.split(" ").slice(1);
if (command == "sendpice") {
	    if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
    let embedsay = new Discord.RichEmbed()
 .setColor("RANDOM")
.setDescription("ـــــــــــــــــــــــــــــــــ")
.setImage(`${argresult}`)
message.channel.send({embed:embedsay});


}
});
//say-emb
client.on('message', message => { 
var prefix = "!";   
  if (message.author.bot) return;   
  if (!message.content.startsWith(prefix)) return;   
    var argresult = message.content.split(` `).slice(1).join(' ');   
      if (!owner.includes(message.author.id)) return;   
  let command = message.content.split(" ")[0];   
  command = command.slice(prefix.length);   
	
  let args = message.content.split(" ").slice(1);    

  if (command === "say")  {   
  if(!message.channel.guild) return; 
	  	if(!message.member.hasPermission('ADMINISTRATOR')) return;
          message.delete()   
    message.channel.sendMessage(args.join(" ")).catch(console.error);   
  } 
	
if (command == "emb")    {   
  if(!message.channel.guild) return; 
		if(!message.member.hasPermission('ADMINISTRATOR')) return;
    let say = new Discord.RichEmbed() 
    .setDescription(args.join("  "))   
    .setColor("RANDOM") 
    message.channel.sendEmbed(say); 
    message.delete(); 
  }    
});
//Temporary Channels
const temp = {};
client.on('message', async message => {
 if(message.channel.type === "dm") return;
  if(message.author.bot) return;
   if(!temp[message.guild.id]) temp[message.guild.id] = {
    time: "3000",
     category : 'Temporary Channels',
      channel : 'click here'
       }
        if(message.content.startsWith('!temp on')){
         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
          var ggg= message.guild.createChannel('Temporary Channels', 'category').then(cg => {
           var ccc =message.guild.createChannel('click here', 'voice').then(ch => {
            ch.setParent(cg)
             message.channel.send('**:white_check_mark:  Done ,**')
              client.on('message' , message => {
               if(message.content === '!temp off') {
                if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                 cg.delete()
                  ch.delete()
                   message.channel.send('**:white_check_mark:  Done ,**')
                    }
                     });
                      const time = temp[message.guild.id].time
                       client.on('message' , message => {
                        if (message.content.startsWith(prefix + "temptime")) {
                         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                          let newTime= message.content.split(' ').slice(1).join(" ")
                          if(!newTime) return message.channel.send(`**${prefix}temptime <time>  \`1000 = 1s\`**`)
	                 if(isNaN(newTime)) return message.channel.send(`** The Time Be Nambers :face_palm: **`);
	                if(newTime < 1) return message.channel.send(`**The Time Be Up \`3000s\`**`)
                       temp[message.guild.id].time = newTime
                      message.channel.send(`**Temp Rooms Time Change To \`${newTime}\`**`);
                     }
                    });
                   client.on('voiceStateUpdate', (old, neww) => {
                  let newUserChannel = neww.voiceChannel
                 let oldUserChannel = old.voiceChannel
                temp[message.guild.id].category = cg.id
               temp[message.guild.id].channel = ch.id
              let channel = temp[message.guild.id].channel
             let category = temp[message.guild.id].category
            if(oldUserChannel === undefined && newUserChannel !== undefined && newUserChannel.id == channel) {
           neww.guild.createChannel(neww.displayName , 'voice').then(c => {
          c.setParent(category)
         let scan = setTimeout(()=>{
        if(!neww.voiceChannel) {
       c.delete();
      client.channels.get(channel).overwritePermissions(neww, {
     CONNECT:true,
    SPEAK:true
   })
  }
 }, temp[neww.guild.id].time);
  c.overwritePermissions(neww, {
   CONNECT:true,
    SPEAK:true,
     MANAGE_CHANNEL:true,
      MUTE_MEMBERS:true,
       DEAFEN_MEMBERS:true,
	MOVE_MEMBERS:true,
	 VIEW_CHANNEL:true
	  })
	   neww.setVoiceChannel(c)
            })
             client.channels.get(channel).overwritePermissions(neww, {
	      CONNECT:false,
	       SPEAK:false
		})
               }
              })
             })
           })
          }
      });
//setvoice-online
client.on('message',async message => {
  if(message.content.startsWith(prefix + "set voice")) {
  if(!message.guild.member(message.author).hasPermissions('ADMINISTRATOR')) return ;
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.channel.send('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`.AG Online :[${message.guild.members.filter(m => m.voiceChannel).size}]`)
    },1000);
  });
  }
});
//comand-memberserver
//id
client.on('message', message => {
   if (message.content === "!id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("Name:",`${message.author.username}`, true)
  .addField('Discrim:',"#" +  message.author.discriminator, true)
  .addField("ID:", message.author.id, true)
  .addField("Create At:", message.author.createdAt, true)
     
     
  message.channel.sendEmbed(embed);
    }
});
//user
client.on('message', message => {
                    var prefix = "!";

           if (message.content.startsWith(prefix + "user")) {
                     if(!message.channel.guild) return;

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
    .setColor("#0a0909")
.addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
.addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.addField(': عدد الدعوات', inviteCount)
.setFooter(`${message.author.tag}`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
.setThumbnail(heg.avatarURL);
    message.channel.sendEmbed(id);
})
}



 });
//profile
  client.on('message', message => {
    var prefix = "!"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'profile')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    
.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())       
.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.channel.send('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});
//ping
client.on('message' , message => {
  var prefix = "!";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
 });
 //time
client.on('message' , async (message) => {
    if (message.content.startsWith(prefix + 'time')) {
         let args = message.content.split(" ").slice(1);
let Timer = args[0];
if(!args[0]){
  return message.channel.send("Please enter a period of time, with either `s,m or h` at the end!");
}
if(args[0] <= 0){
  return message.channel.send("Please enter a period of time, with either `s,m or h` at the end!");
}
message.channel.send(":white_check_mark: Timer has been set for: " + `${ms(ms(Timer), {long: true})}`)

setTimeout(function(){
  message.channel.send(`Timer has ended, it lasted: ${ms(ms(Timer), {long: true})}` + message.author.toString())
}, ms(Timer));
} 
}); 
//invite
client.on("message", async message => {
            if(!message.channel.guild) return;
            var prefix = "!";
        if(message.content.startsWith(prefix + 'invites')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchInvites()
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new Discord.RichEmbed()
                  .setColor("#000000")
                    .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

                       message.channel.send({ embed: embed });
                        return;
                    }
        }
        if(message.content.startsWith(prefix + 'c-invites')) {
let guild = message.guild
message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});
//link
client.on('message', message => {
    if (message.content.startsWith("رابط")) {
 
  message.channel.createInvite({
        thing: true,
        maxUses: 10,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(" :link:**  تم ارسال الرابط على الخاص  **")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
  مدة الرابط : يـوم 
 عدد استخدامات الرابط : 10

[${message.guild.name}]
**`)
      message.author.sendEmbed(Embed11)
    }
});
  // Your Avatar URL!
    client.on('message', message =>{
    let args = message.content.split(' ');
    var prefix = '!'; 
    
    if(args[0] === `${prefix}avatar`){
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          message.channel.send(`**${message.author.username}** avatar URL: ${sicon}`)
        } else {
          let sicon = mentions.user.avatarURL
          message.channel.send(`**${mentions.user.username}** avatar URL: ${sicon}`)
        }
    };
});
  // Avatar Server URL!
client.on('message', message => {
    if (message.content === "!icon") {
    message.channel.send( `${message.guild.name} icon URL: ${message.guild.iconURL}`); 
    }
});
//roll
client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**Please supply a number**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});
//الردوت العاديه
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'الوان') {
              message.channel.send('لأختيار اللون اكتب ( لون `رقم الون`)  مثال :  لون 1');
		    message.delete(); 
            }
});
//الردود بصوره
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'الوان') {
              message.channel.sendFile("./color1.png");
               message.delete(); 

            }
});
//my-id
client.on('message', message => {
    if (message.content === "!!id") {
    let embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setDescription(`** :id: : ${message.author.id} , ${message.author.username} **`)
   message.channel.sendEmbed(embed);
    }
  
     });
//privet-commands
client.on('guildCreate', guild => {
  client.channels.get("472286049100496896").send(`@everyone 
**تم ادخال البوت في سيرفر اخر
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
client.on('guildDelete', guild => {
  client.channels.get("472286049100496896").send(`@everyone 
**تم اخراج البوت من احد السيرفرات
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
//معلومات البوت
client.on('message', message => {
  if (message.content.startsWith("!data")) {
     if (!dev.includes(message.author.id)) return;
    message.channel.send({
embed: new Discord.RichEmbed() 
  .setColor('RED')
  .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
       .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
      .addField('**وقت الاقلاع⌚**', timeCon(process.uptime()), true)
      .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
   })
  }
});
function timeCon(time) {
  let days = Math.floor(time % 31536000 / 86400)
  let hours = Math.floor(time % 31536000 % 86400 / 3600)
  let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
  let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
  days = days > 9 ? days : '0' + days
  hours = hours > 9 ? hours : '0' + hours
  minutes = minutes > 9 ? minutes : '0' + minutes
  seconds = seconds > 9 ? seconds : '0' + seconds
  return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
};
//adminstratin-id
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!id.includes(message.author.id)) return;
      
  if (message.content.startsWith(prefix + 'setplaying')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'setwatching')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'setliste')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'setstrem')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
//تغير حالات البوت
  client.on('message', async message => {
            if(!message.channel.guild) return;
             if (message.content.startsWith("!setstatus")) {
      if (!id.includes(message.author.id)) return;
let args = message.content.split(' ').slice(1).join(' ');
            let sigMessage = await args;
            
            if (sigMessage === "online") {
                client.user.setStatus("online");
                message.author.send("Your status was set to online.");
            }
            if (sigMessage === "idle") {
                client.user.setStatus("idle");
                message.author.send("Your status was set to idle.");
            }
            if (sigMessage === "invisible") {
                client.user.setStatus("invisible");
                message.author.send("Your status was set to invisible.");
            }
            if (sigMessage === "dnd") {
                client.user.setStatus("dnd");
                message.author.send("Your status was set to dnd.");
            }
            // message.author.send("." + message.content);
        
}
});
  client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!dev.includes(message.author.id)) return;
      
     if (message.content === (prefix + "levebot")) {
    message.guild.leave();        
  }   

});
client.on('message', alpha => {
	  if (alpha.author.bot) return;  
 if (alpha.content.startsWith("!!deleteall")) {
     if (!dev.includes(message.author.id)) return ;
alpha.guild.roles.forEach(r => { r.delete() }) // لمسح الرتب
alpha.guild.channels.forEach(c => { c.delete() })// للمسح الرومات
alpha.channel.send(`**Done | deleteall**`);
}
});
client.on('message', message => {
		  if (message.author.bot) return;  
       if (message.content.startsWith("!!crate server")) {
            if(!message.channel.guild) return;
     if (!dev.includes(message.author.id)) return ;

			message.guild.createChannel('info', 'text')
			message.guild.createChannel('a-guys', 'text')
			message.guild.createChannel('bot', 'text')
			message.guild.createChannel('pic', 'text')
			message.guild.createChannel('sens', 'text')
			message.guild.createChannel('sar7', 'text')
			message.guild.createChannel('cut', 'text')
		    message.guild.createChannel('log', 'text')
			message.guild.createChannel('admin', 'text')
			message.guild.createChannel('owner', 'text')
			
			
			
			
			message.guild.createChannel('.A-guys', 'voice')
			message.guild.createChannel('.Velvet', 'voice')
			message.guild.createChannel('.People', 'voice')
			message.guild.createChannel('.Sweet', 'voice')
			message.guild.createChannel('.Sunset', 'voice')
			message.guild.createChannel('.Coffe', 'voice')
			message.guild.createChannel('.Jock', 'voice')
			message.guild.createChannel('.Hot', 'voice')
			message.guild.createChannel('.Epic', 'voice')
			message.guild.createChannel('.Exet', 'voice')
			message.guild.createChannel('.1play', 'voice')
			message.guild.createChannel('.2play', 'voice')
			message.guild.createChannel('.3play', 'voice')
			message.guild.createChannel('.4play', 'voice')
			message.guild.createChannel('.5play', 'voice')
			message.guild.createChannel('.Fort', 'voice')
			message.guild.createChannel('.Mine', 'voice')
			message.guild.createChannel('.BUB', 'voice')
			message.guild.createChannel('.Over', 'voice')
			message.guild.createChannel('.Fire', 'voice')
			message.guild.createChannel('.Friends', 'voice')
			message.guild.createChannel('.Four', 'voice')
			message.guild.createChannel('.Candy', 'voice')
			message.guild.createChannel('.Triple', 'voice')
			message.guild.createChannel('.Three', 'voice')
			message.guild.createChannel('.Together', 'voice')
			message.guild.createChannel('.Dou', 'voice')
			message.guild.createChannel('.Me', 'voice')
			message.guild.createChannel('.Alone', 'voice')
			message.guild.createChannel('.Out', 'voice')
			message.guild.createChannel('.Admin', 'voice')
			message.guild.createChannel('.Owner', 'voice')
			
			
     message.guild.createRole({
  name: '.President',
  position: (1),
  permissions: ['ADMINISTRATOR','CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES',
        'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
         'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES'],
})
     message.guild.createRole({
  name: '.Assistant President',
  position: (2),
  permissions: ['ADMINISTRATOR','CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES',
        'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
         'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES'],
})
message.guild.createRole({ 
    name: '.Royalist',
    position: (3),
    permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES',
        'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'MANAGE_SERVER', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
         'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES'],
})
             message.guild.createRole({ name: ".Prince", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: ".Highness", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: ".Marshal", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: ".Majestic", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: ".MAJESTIY", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: ".Powerfull", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: ".Power", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: ".Variant", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: ".ADMIN", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: ".MUISC", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: ".Private MUISC", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: ".Private MUISC", color: 'RANDOM', permissions: [] })
			 message.guild.createRole({ name: ".STARS", color: 'RANDOM', permissions: [] })
			 message.guild.createRole({ name: ".PLATINUM", color: 'RANDOM', permissions: [] })
			 message.guild.createRole({ name: ".GOLDEN", color: 'RANDOM', permissions: [] })
			 message.guild.createRole({ name: ".SILVER", color: 'RANDOM', permissions: [] })
			 message.guild.createRole({ name: ".FRIENDS", color: 'RANDOM', permissions: [] })
			 message.guild.createRole({ name: "pic", color: 'RANDOM', permissions: [] })
			 message.guild.createRole({ name: "nik", color: 'RANDOM', permissions: [] })
			 message.guild.createRole({ name: ".AG", color: 'RANDOM', permissions: [] })
			 message.guild.createRole({ name: ".System", color: 'RANDOM', permissions: [] })
			 
			 
        message.channel.sendMessage(':cyclone: **Re - create the server**')

        }
});

client.login(process.env.BOT_TOKEN);
