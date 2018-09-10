const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Client();
const prefix = '!'
const dev = ['454527533279608852'];
const owner = ['454527533279608852' , '478192028279111690'];
const id = ['454527533279608852', '478192028279111690' , '' , '' , ''];
///////////////elmewal3/////////////////anas
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
const dateFormat = require('dateformat');
//shortpac
const googl = require('goo.gl');
//restartpac
const child_process = require("child_process");
//console
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
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
//restart-leve server
      client.on('message', message => {
        var argresult = message.content.split(` `).slice(1).join(' ');
          if (!dev.includes(message.author.id)) return;
          
        if (message.content === (prefix + "levebot")) {
        message.guild.leave();        
      } else     
        if(message.content === prefix + "restart") {
          if (!dev.includes(message.author.id)) return;
            message.channel.send(`:white_check_mark: **Bot restarting** !`);
            console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
            console.log(`⚠️ Bot restarting... ⚠️`);
            console.log("===============================================\n\n");
            client.destroy();
            child_process.fork(__dirname + "/bot.js");
            console.log(`Bot Successfully Restarted`);
        }
      
      });
//الحمايه
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
           if(!message.channel.guild) return message.channel.send('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted ")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('`** \`\`انت معاقب ميوت شاتي بسبب نشر سرفرات, ان كان عن طريق الخطا ف تكلم مع \`\`الادارة **`');
   
       
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
client.on('guildMemberAdd', member => {
    member.addRole(member.guild.roles.find("name",".AG"));
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
 channel.send(`**by**: ${Invite.inviter}`) ;
                    },1500);
 }
            dat[Inv] = Invite.uses;
       
       });
    });
});
//pic-room
client.on('message', ( message ) => {
  if(message.author.bot) return;

  if(message.channel.id !== '471715491430531073') return;


  let types = [
    'jpg',
    'jpeg',
    'gif',
    'png'
  ]
if(!message.member.hasPermission('MANAGE_SERVER')) return;
  if (message.attachments.size <= 0) {
    message.delete();
    message.channel.send(`${message.author}, **هذا الروم مخصص للصور فقط **`)
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
 **❖ !user  ➾** لاظهار بعض المعلومات عن حسابك
 **❖ !profile  ➾** الملف الشخصي
 **❖ !time  ➾** لتحديد الوقت كمؤقت
 **❖ !avatar  ➾ ** لعرض صورة حسابك
 **❖ !invites  ➾** لمعرفة عدد الاعضاء الي جبتهم 
 **❖ !roll [number] ➾ ** القرعه
 **❖ !short [link] ➾ ** اختصار الروابط

`).catch(RebeL =>{console.log('`Error`: ' + RebeL);
message.channel.send("** يجب السماح بأستقبال رسائل الخاص قبل طلب الأمر **")
});

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

 **❖ !ban [mention] ➾** لحظر العضو
 **❖ !kick [mention] ➾** لطرد العضو
 **❖ !vkick [mention] ➾** لطر العضو من الروم
 **❖ !clear [namber] ➾** لمسح الشات
 **❖ !mute [mention] [reson] ➾** لاعطاء ميوت كتابي
 **❖ !unmute [mention] ➾** لازالة الميوت الكتابي
 **❖ !mutechat ➾** لاقفال الشات
 **❖ !unmutechat ➾** لفتح الشات
 **❖ !hidechat ➾ ** لاخفاء الشات
 **❖ !showchat ➾** لاظهار الشات
 **❖ !bc [message] ➾** لارسال رساله للاون لاين
 **❖ !obc [message] ➾** لارسال رساله للاونلاين و للاوفلين
 **❖ !bcrole [mention] [message]  ➾** لارسال رساله لرتبه معينه
 **❖ !members ➾ ** لعرض معلومان الاعضاء
 **❖ !server  ➾ ** لعرض معلومات السيرفر
 **❖ !move [mention] ➾** لسحب الاشخاص 
 **❖ !move all  ➾** لسحب كل الناس لروم الموجود انت فيه
 **❖ !role  ➾ ** اوامر الرتب

╔[❖═════════════════❖]╗
  **MUSIC Commands**
╚[❖═════════════════❖]╝

 **❖ !play ➾**  لتشغيل مقطع 
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
   
   **!setvoice [room name] -** اذا اتمسح روم الفويز اونلاين تقدر تنشا واحد اخر
  
  ** !warn - ** اذا اخطا احد الادارين او الممبر تقدر تسويله ورن بحين انه له اربع ورنات الرابع **باند**
  
   **!set server avatar** - لتغير صورة السيرفر
   **!set server name** - لتغير اسم السيرفر

   **!say** - اذا ارتدت ان يقول البوت الكلام الي تكتبه من غير ما يبان انك الي كاتبه

   **!emb** - نفس امر ساي ولكن بامبد

   **!hide** - اخفا جميع رومات السيرفر
   **!show** - اظهار وفتح الكل

   **!unban [ID]** - الازلة بان عن شخص باستنخدام الايدي

   **!sendpic <or> sendpice** - لارسال صوره بامبد وبدون

`);

    }
});
//color-select
client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == 'لون'){
	   if (message.channel.id !== "486291719537688576") return;
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**There's No Color With This Number ** :x: `)
   .setColor(`ff0000`)

    if(!isNaN(args) && args.length > 0)
    

if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                    
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Color Changed To Successfully** :white_check_mark: `)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
          
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
        
            
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
		var log = message.guild.channels.find("name","log")
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.channel.send("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.channel.send(':information_source:  **`!mute @َζ͜͡ELMEWAL3 ヅ` يجب تحديد شخص **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		message.channel.send(`**:white_check_mark: ${user.username} Muted :zipper_mouth:**`);
		var mutelog = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `<@${user.id}>` + ' ]**',true)
		.addField("**:hammer:  by  **", '**[ ' + `<@${message.author.id}>` + ' ]**',true)
		.addField("**:book:  reason**", '**[ ' + `${reason}` + ' ]**',true)
		.setFooter(`${message.author.tag}`, message.author.avatarURL)
		.setColor("BLACK")
		.setTimestamp();
	log.send(mutelog);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x:** | للاداره فقط**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("**I Don't Have Permissions**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.send(":information_source:  **`!unmute @َζ͜͡ELMEWAL3 ヅ` يجب تحديد شخص **");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.send(`:information_source:**  ${user.username} تم فك الميوت عنه مسبقاً! **`)

  await toMute.removeRole(role)
  message.channel.send(`**:white_check_mark: ${user.tag} Unmuted :smiley:**`);

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

message.channel.send(`**✅ ${user.username} banned from the server !  **  `)


	  
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
        .setColor(`#ff0000`)
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

message.channel.send(`**✅ ${user.username} kicked from the server !  **  `)
	  


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
	var prefix = "!";
if (!message.content.startsWith(prefix)) return;
	var command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	if (command == "move") {
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
 .setAuthor(message.author.username, message.author.avatarURL) 
 .setColor("#000000")
 .setDescription(`**<@${usermentioned}> moved to <@${message.author.id}>**`)
 .setFooter(message.author.username, message.author.avatarURL) 
 .setTimestamp();
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(`:white_check_mark: **<@${usermentioned}> moved you to his channel!**`))
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
	var prefix = "";
if (!message.content.startsWith(prefix)) return;
	var command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	if (command == "اسحب") {
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
 .setAuthor(message.author.username, message.author.avatarURL) 
 .setColor("#000000")
 .setDescription(`**<@${usermentioned}> moved to <@${message.author.id}>**`)
 .setFooter(message.author.username, message.author.avatarURL) 
 .setTimestamp();
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(`:white_check_mark: **<@${usermentioned}> moved you to his channel!**`))
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
client.on('message' , message => {
if (message.author.bot) return;
    if (message.content === "!move all") {
 if (!message.member.hasPermission("ADMINISTRATOR")) return;
   if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.channel.send("**لايوجد لدي صلاحية السحب**");
if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send(`**تم سحب جميع الأعضاء إليك**`)

 }});
//bc-obc-bcrole
client.on('message', message => require('./commands/bc/bc.js')(client, message));
client.on('message', message => require('./commands/bc/obc.js')(client, message));
client.on('message', message => require('./commands/bc/bcrole.js')(client, message));
//settingchat:!chat-!unmutechat-!hidechat-!showchat
client.on('message', message => {

if (message.author.bot) return;
    if (message.content === prefix + "mutechat") {
                        if(!message.channel.guild) return message.channel.send(' This command only for servers');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.channel.send("Channel Muted ✅ ")
           });
             }
if (message.content === prefix + "unmutechat") {
    if(!message.channel.guild) return message.channel.send(' This command only for servers');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.channel.send("Channel UnMuted ✅ ")
           });
             }



});
client.on('message', message => {

if (message.author.bot) return;
    if (message.content === prefix + "hidechat") {
                        if(!message.channel.guild) return message.channel.send(' This command only for servers');

if(!message.member.hasPermission('ADMINISTRATOR')) return;
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false ,
	 READ_MESSAGES: false
	   
	   
	   }).then(() => {
               message.channel.send("Channel Hide ✅ ")
           });
             }
if (message.content === prefix + "showchat") {
    if(!message.channel.guild) return message.channel.send(' This command only for servers');

if(!message.member.hasPermission('ADMINISTRATOR')) return;
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true,
	 READ_MESSAGES: true

           }).then(() => {
               message.channel.send("Channel Show ✅ ")
           });
             }



});
//role-command
client.on('message', message => require('./commands/role.js')(client, message));
//server-data 
client.on('message', function(msg) {
  if(msg.content === prefix + "server") { 
	  		    if (!msg.member.hasPermission('MANAGE_MESSAGES')) return ;
    if(!msg.channel.guild) return;        
    let embed = new Discord.RichEmbed()
    .setColor('BLACK')
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
  .setColor(`#e60909`)
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
//set-server-name
client.on('message', eyad => {
  let args = eyad.content.split(" ").slice(1).join(" ")
  let prefix = '!';
  if (eyad.content.startsWith(`${prefix}set server name`)) {
                if (!eyad.member.hasPermission("MANAGE_SERVER"))  return;
                if(!args) return eyad.channel.send('`**يرجي ادخال اسم السرفر الجديد**`');
                eyad.guild.owner.send(`**تم تغيير اسم السرفر الي ${args}
                بواسطة : <@${eyad.author.id}>**`)
                eyad.guild.setName(args)
                eyad.channel.send(`** تم تغيير الاسم الي __${args}__ **`);
                
       }

       });
//set-server-avatar
client.on('message', eyadandr3d => {
  let args = eyadandr3d.content.split(" ").slice(1).join(" ")
  let prefix = '!';
  if (eyadandr3d.content.startsWith(`${prefix}set server avatar`)) {
                if (!eyadandr3d.member.hasPermission("MANAGE_SERVER"))  return;
                if(!args) return eyadandr3d.channel.send('`**ضع رابط الصوره**`');
                eyadandr3d.guild.owner.send(`**تم تغييرصوره السرفر الي ${args}
                بواسطة : <@${eyadandr3d.author.id}>**`)
            eyadandr3d.guild.setIcon(args)
                eyadandr3d.channel.send(`**تم تغيير صوره السرفر الي  __${args}__** `);
                
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
	
if (command == "saye")    {   
  if(!message.channel.guild) return; 
		if(!message.member.hasPermission('ADMINISTRATOR')) return;
    let say = new Discord.RichEmbed() 
    .setDescription(args.join("  "))   
    .setColor("RANDOM") 
    message.channel.sendEmbed(say); 
    message.delete(); 
  }    
});
//up-time-bot
client.on('message', message => {
     var prefix = "!"
     if (message.author.bot) return;
if (message.content.startsWith(prefix + "uptime")) {
	if(!message.member.hasPermission('MANAGE_MESSAGE')) return;
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min, ${seconds} sec` + "`");


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
  if(message.content.startsWith(prefix + "setvoice")) {
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
//user
client.on('message', message => {
                    var prefix = "!";

           if (message.content.startsWith(prefix + "user")) {
		   if (message.channel.id !== "486291719537688576") return;
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
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
.addField(` :لقد قمت بدعوة `, ` **${inviteCount}** `)
.setFooter(`${message.author.tag}`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
.setThumbnail(heg.avatarURL);
    message.channel.sendEmbed(id);
})
}



 });
//profile
client.on('message', message => {
    
if(message.content.split(' ')[0] == prefix + 'profile') {
if(!message.channel.guild) return;

let args = message.content.split(' ').slice(1).join(' ');

       let defineduser = '';
       if (!args[1]) { 
           defineduser = message.author;
       } else { // Run this if they did define someone...
           let firstMentioned = message.mentions.users.first();
           defineduser = firstMentioned;
       }

       const w = ['./id11.png','./id22.png'];
       var Canvas = require('canvas')
var jimp = require('jimp')

        const millis = new Date().getTime() - defineduser.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy');
const stats2 = ['online', 'Low', 'Medium', 'Insane'];
const days = millis / 1000 / 60 / 60 / 24;
         dateFormat(now, 'dddd, mmmm dS, yyyy');
             let time = `${dateFormat(defineduser.createdAt)}`
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
       let Image = Canvas.Image,
           canvas = new Canvas(300, 300),
           ctx = canvas.getContext('2d');
       ctx.patternQuality = 'bilinear';
       ctx.filter = 'bilinear';
       ctx.antialias = 'subpixel';
 
       fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
           if (err) return console.log(err);
           let BG = Canvas.Image;
           let ground = new Image;
           ground.src = Background;
           ctx.drawImage(ground, 0, 0, 300, 300);

})
  var mentionned = message.mentions.users.first();

   var client;
     if(mentionned){
         var client = mentionned;
     } else {
         var client = message.author;
         
     }

var men = message.mentions.users.first();
           var heg;
           if(men) {
               heg = men
           } else {
               heg = message.author
           }
               let url = defineduser.displayAvatarURL.endsWith(".webp") ? defineduser.displayAvatarURL.slice(20, 20) + ".png" : defineduser.displayAvatarURL;
               jimp.read(url, (err, ava) => {
                   if (err) return console.log(err);
                   ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                       if (err) return console.log(err);

                       let Avatar = Canvas.Image;
                       let ava = new Avatar;
                       ava.src = buf;
                       ctx.drawImage(ava, 112 , 40, 75, 75);
                       
                       
                       
                       
                       var status;
   if (defineduser.presence.status === 'online') {
       status = 'ONLINE';
ctx.fillStyle = `#2ce032`;
ctx.beginPath();
ctx.arc(179, 107, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
 
   } else if (defineduser.presence.status === 'dnd') {
       status = 'DND';
       ctx.fillStyle = `#ff0000`;
ctx.beginPath();
ctx.arc(179, 107, 8, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
   } else if (defineduser.presence.status === 'idle') {
       status = 'IDLE';
       ctx.fillStyle = `#f4d32e`;
ctx.beginPath();
ctx.arc(179, 107, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
   } else if (defineduser.presence.status === 'offline') {
       status = 'INVISIABLE';
       ctx.fillStyle = `#898988`;
ctx.beginPath();
ctx.arc(179, 107, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
   }
                       
                       
                                             var time2;
     if(mentionned){
         var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
     } else {
         var time2 = `${dateFormat(message.member.joinedAt)}`;
         
     }  
                          
   
                       ctx.font = 'Bold 15px Arial ';
                       ctx.fontSize = '15px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(status, 70 , 108 );
                       
                        ctx.font = 'Bold 13px Arial';
                       ctx.fontSize = '13px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${message.author.presence.game === null ? "No Status" : message.author.presence.game.name}`, 150.00   , 180  );

                      
                       ctx.font = 'Bold 20px Arial ';
                       ctx.fontSize = '15px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${defineduser.username}`, 150.50 , 140);


                       ctx.font = 'Bold 15px Arial';
                       ctx.fontSize = '15px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`#${defineduser.discriminator}`, 227  , 108);

                       var time2;
     if(mentionned){
         var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
     } else {
         var time2 = `${dateFormat(message.member.joinedAt)}`;
         
     }

                       ctx.font = 'Bold 13px Arial ';
                       ctx.fontSize = '13px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${moment(defineduser.createdTimestamp).fromNow()}`, 179 , 226 );
                       
                       
    
          
                       ctx.font = 'Bold 13px Arial ';
                       ctx.fontSize = '13px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}`, 179 , 253);
                       
message.channel.sendFile(canvas.toBuffer())


       })
   })




}

});
//ping
client.on('message', message =>{
    if(message.content === prefix + 'ping'){
let start = Date.now(); message.channel.send('pong...').then(message => { 
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
    });
    }
});
 //time
client.on('message' , async (message) => {
    if (message.content.startsWith(prefix + 'time')) {
         let args = message.content.split(" ").slice(1);
let Timer = args[0];
if(!args[0]){
  return message.channel.send("**Please enter a period of time, with either `s,m or h` at the end**!");
}
if(args[0] <= 0){
  return message.channel.send("**Please enter a period of time, with either `s,m or h` at the end**!");
}
message.channel.send(":white_check_mark: **Timer has been set for**: " + `${ms(ms(Timer), {long: true})}`)

setTimeout(function(){
  message.channel.send(`**Timer has ended, it lasted**: ${ms(ms(Timer), {long: true})}` + message.author.toString())
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
});
//link
client.on('message', msg => {
    if(msg.author.bot) return;
    
    if(msg.content === 'رابط') {
      client.guilds.forEach(g => {
        
        let l = g.id
        g.channels.get(g.channels.first().id).createInvite({
        thing: true,
        maxUses: 10,
        maxAge: 86400
        }).then(i => msg.author.send(`
        **
		
		  مدة الرابط : يـوم 
 عدد استخدامات الرابط : 10
 
 
 link:
[https://discord.gg/${i.code}]
        **
        `)).then(i =>
		msg.channel.send(` :link:**  تم ارسال الرابط على الخاص  **`)).catch(i =>{
console.log('`Error`: ' + i);
msg.channel.send("** يجب السماح بأستقبال رسائل الخاص قبل طلب الأمر **")
});
  
  
      })
    }
    
});
   // Your Avatar URL!
    client.on('message', message =>{
if(message.content.startsWith('!avatar')){
	    if (message.channel.id !== "486291719537688576") return;
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          message.channel.send(`**${message.author.username}** avatar URL: ${sicon}`)
        } else {
          let sicon = mentions.user.avatarURL
          message.channel.send(`**${mentions.user.username}** avatar URL: ${sicon}`)
        }
    };
     if (message.content === "!icon") {
	     		 if (message.channel.id !== "486291719537688576") return;
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
//short
client.on('message', message => {
 let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'short')) {
    if(!message.channel.guild) return;  

        googl.setKey('AIzaSyC2Z2mZ_nZTcSvh3QvIyrmOIFP6Ra6co6w');
        googl.getKey();
        googl.shorten(args.join(' ')).then(shorturl => {
            message.channel.send(''+shorturl)
        }).catch(e=>{
            console.log(e.message);
            message.channel.send('Error!');
        });

    }

});
//الردوت العاديه
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'الوان') {
		    if (message.channel.id !== "486291719537688576") return;
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
		    if (message.channel.id !== "486291719537688576") return;
              message.channel.sendFile("./color1.png");
               message.delete(); 

            }
});
//privet-commands
client.on('message', msg => {
  if(msg.content === prefix + 'hideall') {
	  if (!owner.includes(msg.author.id)) return ;
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: false,
        READ_MESSAGES: false
      })
    })
    msg.channel.send('Hide All.')
  }
})
client.on('message', msg => {
  if(msg.content === prefix + 'showall') {
	  if (!owner.includes(msg.author.id)) return ;
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
      })
    })
    msg.channel.send('Show All.')
  }
})
//معلومات البوت
client.on('message', message => {
  if (message.content.startsWith(prefix + "data")) {
     if (!dev.includes(message.author.id)) return;
    message.channel.send({
embed: new Discord.RichEmbed() 
  .setColor(`#ff0303`)
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
//save-server
client.on('message', alpha => {
	  if (alpha.author.bot) return;  
 if (alpha.content.startsWith("!!deleteall")) {
     if (!dev.includes(message.author.id)) return ;
alpha.guild.roles.forEach(r => { r.delete() })
alpha.guild.channels.forEach(c => { c.delete() })
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
