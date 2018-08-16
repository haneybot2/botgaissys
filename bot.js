const Discord = require('discord.js');
const client = new Discord.Client(); 
const id = ['454527533279608852' , '478192028279111690' , '347788375018700802' , '416643173239226388' , ''];
const prefix = '!'
const db = require('quick.db');  
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const fs = require("fs"); 
const canvas = require("canvas");
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
const dateFormat = require('dateformat'); 
const pretty = require('pretty-ms') 

 
 
 
 
 



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




const child_process = require("child_process");
client.on('message', message => {
if(message.content === prefix + "restart") {
      if (!id.includes(message.author.id)) return;
        console.log(`⚠️ جاري اعادة تشغيل البوت... ⚠️`);
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`تم اعادة تشغيل البوت`);
    }
  
  });



client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('471810322601345024');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`Voice Online: [${currentSize}]`);
  if (currentSize !== size) channel.setName(`Voice Online: [${currentSize}]`);
});









client.on("message", message => {
 if (message.content === prefix + "help") {
 message.channel.send(":white_check_mark: ")
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
 **
╔[❖════════════❖]╗
   Admin Commands
╚[❖════════════❖]╝

 ❖ !warn <mention><Reason>  ➾ لاعطاء ورن لشخص 
 ❖ !ban <mention > ➾ لتبنيد العضو
 ❖ !kick <mention > ➾ لطرد العضو
 ❖ !clear <namber > ➾ لمسح الشات
 ❖ !mute < mention > <time> ➾ لاعطاء ميوت كتابي
 ❖ !unmute <mention> ➾ لازالة الميوت الكتابي
 ❖ !ct <name> ➾ لانشاء شات كتابي
 ❖ !cv <name> لانشاء روم صوتي
 ❖ !delete <name> ➾ لمسح شات او روم صوتي
 ❖ !mutechat ➾ لاقفال الشات
 ❖ !unmutechat ➾ لفتح الشات
 ❖ !hidechat ➾ لاخفاء الشات
 ❖ !showchat ➾ لاظهار الشات
 ❖ !bc <message> ➾ لارسال رساله للاون لاين
 ❖ !obc <message> ➾ لارسال رساله للاونلاين و للاوفلين
 ❖ !brole <mention> <message>  ➾ لارسال رساله لرتبه معينه
 ❖ !member ➾ لعرض معلومان الاعضاء
 ❖ !server  ➾ لعرض معلومات السيرفر
 ❖ !move <mention> ➾ لسحب الاشخاص 
 ❖ !move all  ➾ لسحب كل الناس الي رومك (تحذير : هذه الخاصيه يستخدمها فقط الاونر )
 ❖ !helprole  ➾ لرؤية اوامر الرولات

╔[❖════════════❖]╗
   MUSIC Commands
╚[❖════════════❖]╝

❖ !play <name > <url> ➾ لبدء تشغيل الاغنيه
❖ !join  ➾ لادخال البوت للروم
❖ !stop ➾  لايقاف الاغنيه
❖ !skip ➾ لتخطي الاغنيه الحاليه
❖ !np ➾ لمعرفة الاغنيه المشغله الان
❖ !queue  ➾ لمعرفة قآئمة التشغيل
❖ !pause ➾ لايقاف الاغنيه مؤقتا
❖ !resume ➾ لاتشغيل الاغنيه المتوقفه

╔[❖════════════❖]╗
   MEMBERS  Commands
╚[❖════════════❖]╝

 ❖ !ping  ➾ لعرض سرعة الاتصال
 ❖ !id  ➾ لاظهار ادي حقق
 ❖ !user  ➾ لاظهار معلومات حسابك
 ❖ !time  ➾ لتحديد الوقت كمؤقت
 ❖ !avatar  ➾ لعرض صورة حسابك
 ❖ !invites  ➾ لمعرفة عدد الاعضاء الي جبتهم 
 ❖ !top  ➾ لمعرفة التوب انفايت

**
`)


message.author.sendEmbed(embed)

}
});







client.on("message", message => {
 if (message.content === prefix + "ahelp") {
	       if (!id.includes(message.author.id)) return;
 message.channel.send(":white_check_mark: ")
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
 **

!setplaying

!leveserver

!setwatching

!setliste

!setstrem

!namebot
 
!setname

!setavatar

!data
 
 
 
**
`)


message.author.sendEmbed(embed)

}
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


















client.on('message', async message => {

  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "warn") { //??? ???????

               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("**You Don't Have  Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply("**!warn <mention><Reason>**");
  if(!reason) return message.reply ("**!warn <mention><Reason>**");

  


  

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
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
   client.channels.find('name', 'log').send({
    embed : banembed
  })
  
    if(warns[user.id].warns == 2){ //??? ???????? ??????
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
    if(!tomute) return message.reply("**??? ???? ?????? ?????**:x: ") .then(m => m.delete(5000));
    


	
    let mutetime = "600s";
    await(tomute.addRole(muterole.id));
    message.channel.send(`<@${user.id}> has been temporarily muted`);


	
    setTimeout(async function(){
    await(tomute.removeRole(muterole.id));
      message.reply(`<@${user.id}> has been unmuted.`)
    }, ms(mutetime))

  }
    if(warns[user.id].warns == 3){ //??? ???????? ??????
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
    if(!tomute) return message.reply("**??? ???? ?????? ?????**:x: ") .then(m => m.delete(5000));
    
    let mutetime = "86400s";
    await(tomute.addRole(muterole.id));
    message.channel.send(`<@${user.id}> has been temporarily muted`);


	
    setTimeout(async function(){
    await(tomute.removeRole(muterole.id));
      message.reply(`<@${user.id}> has been unmuted.`)
    }, ms(mutetime))

  }

}
});














//تغير اسم البوت
client.on('message', async (message) => {
    if(message.content.startsWith('!namebot')) {
	       if (!id.includes(message.author.id)) return;
         let args = message.content.split(' ').slice(1);
  try {
    if (args.length > 0) {
      await message.guild.me.setNickname(args.join(' '));

      message.channel.send({
        embed: {
          color: message.colors.GREEN,
          description: `${message.user.username}'s nick is now set to **${args.join(' ')}** on this guild.`
        }
      }).catch(e => {
        message.log.error(e);
      });
    }
    else {
      await message.guild.me.setNickname('');

      message.channel.send({
        embed: {
          color: message.colors.GREEN,
          description: `${message.user.username}'s nick has been reset on this guild.`
        }
      }).catch(e => {
        message.log.error(e);
      });
    }
  }
  catch (e) {
    message.log.error(e);
  }
}
});





//معلومات البوت
client.on('message', message => {
  if (message.content.startsWith("!data")) {
	  if (message.author.id !== '454527533279608852') return message.reply('** ليس مسموح لك باستخدام هذا الامر **')
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






//ping
      client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('!ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }
});






client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
	      if(!msg.guild.member(msg.author).hasPermission("MANAGE_SERVER")) return msg.reply("**هذه الخاصيه للاداره فقط**");
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });








  
  
  
  
  
  



  
  
  
  
  
  
  
  
  
//لانشاء شات ورومات
client.on("message", message => {
           if (message.content.startsWith("!ct")) {
             if(!message.channel.guild) return message.reply('هذا الأمر للسيرفرات فقط')
                       if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("انت لا تمتلك صلاحيه `MANAGE_CHANNELS`");
                   let args = message.content.split(" ").slice(1).join(" ")
                   if (!args[1] || args[1 == " "]) return message.reply("يرجى كتابه اسم الشات الكتابي")
               message.guild.createChannel(args, 'text');
           message.channel.sendMessage(`✅ تـم إنـشـاء شـات كتابي بأسـم **{  ${args}  }**`)

           }
           });
client.on("message", (message) => {
           if (message.content.startsWith("!cv")) {
             if(!message.channel.guild) return message.reply('هذا الأمر للسيرفرات فقط')
                       if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("انت لا تمتلك صلاحيه `MANAGE_CHANNELS`");
                  let args = message.content.split(" ").slice(1).join(" ")
                 if (!args[1] || args[1 == " "]) return message.reply("يرجى كتابته اسم الروم الصوتي")
               message.guild.createChannel(args, 'voice');
               message.channel.sendMessage(`✅ تـم إنـشـاء روم صـوتي بـأسـم **{  ${args}  }**`)

           }
 });

 
 //لمسح الشات او الروم
 client.on("message", (message) => {
                 if (message.content.startsWith('!delete')) {
if(!message.channel.guild) return message.reply('هذا الأمر للسيرفرات فقط')
                     if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("انت لا تمتلك صلاحيه `MANAGE_CHANNELS`");

                     let args = message.content.split(' ').slice(1);
                     let channel = message.client.channels.find('name', args.join(' '));
                     if (!channel) return message.reply('**لا يوجد روم صوتي او شات كتابي بهذا الأسم**')
                     channel.delete()
                     message.channel.sendMessage('❌ تـم حـذف الـروم الـصوتـي او الـشـات الـكـتـابـي')
                 }
});
 
 
 

//الرومات المئقتة
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
                          if(!newTime) return message.reply(`**${prefix}temptime <time>  \`1000 = 1s\`**`)
	                 if(isNaN(newTime)) return message.reply(`** The Time Be Nambers :face_palm: **`);
	                if(newTime < 1) return message.reply(`**The Time Be Up \`3000s\`**`)
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






 
 
 
 
 
 
 
 
 //تايم
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
 


//فتح وقفل الشات
client.on('message', message => {

if (message.author.bot) return;
    if (message.content === "!mutechat") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات ✅ ")
           });
             }
if (message.content === "!unmutechat") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات✅")
           });
             }



});

// لايخفاء الشات
client.on('message', message => {

if (message.author.bot) return;
    if (message.content === "!hidechat") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false ,
	 READ_MESSAGES: false
	   
	   
	   }).then(() => {
               message.reply("تم اخفاء الشات")
           });
             }
if (message.content === "!showchat") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true,
	 READ_MESSAGES: true

           }).then(() => {
               message.reply("تم اظهار الشات")
           });
             }



});






//ban
  client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return ;
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**✅ ${user.tag} banned from the server ! ✈ **  `)

}
});

//kik
  client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return ;
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد طرده**");


  message.guild.member(user).kick(7, user);

message.channel.send(`**✅ ${user.tag} kicked from the server ! ✈ **  `)

}
});







//صور فقط
client.on('message', ( message ) => {
  if(message.author.bot) return;

  if(message.channel.id !== '471715491430531073') return;


  let types = [
    'jpg',
    'jpeg',
    'png'
  ]

  if (message.attachments.size <= 0) {
    message.delete();
    message.channel.send(`${message.author}, This channel for Pic 🖼️ Only`) // 
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








 //سحب الناس
client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
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
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``")
}
} else {
message.react("❌")
 }}});	
client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith('اسحب')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
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
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``")
}
} else {
message.react("❌")
 }}});	
client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith('سحب')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
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
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``")
}
} else {
message.react("❌")
 }}});	


 


 
 //سحب كل الناس الي روم واحد
client.on('message', message => {
if(message.content.startsWith('!move all')) {
	if(!message.member.hasPermission('ADMINISTRATOR')) return;
if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send(`**تم سحب جميع الأعضاء إليك**`)


 }
});
   
   
   
 
 
 //لمسح الشات
client.on("message", message => {
    var prefix = "!";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith("مسح")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **لا يوجد لديك صلاحية لمسح الشات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم مسح الشات",
        color: 0x06DF00,
        description: "تم مسح الرسائل ",
        footer: {
          text: ".A-GUYS"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
client.on("message", message => {
    var prefix = "!";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **لا يوجد لديك صلاحية لمسح الشات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم مسح الشات",
        color: 0x06DF00,
        description: "تم مسح الرسائل ",
        footer: {
          text: ".A-GUYS"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
client.on("message", message => {
    var prefix = "!";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith("lsp")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **لا يوجد لديك صلاحية لمسح الشات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم مسح الشات",
        color: 0x06DF00,
        description: "تم مسح الرسائل ",
        footer: {
          text: ".A-GUYS"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
 
 








 
 
 //امر الممبر لعرض الناس
client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='!member')
	      if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
      var IzRo = new Discord.RichEmbed()
      .setFooter(message.author.username) 
      .setTitle('🌷| Members info')
      .addBlankField(true)
      .addField('📗| Online',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('➡| Server Members',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
	
    });



//اوامر الرول
client.on("message", message => {
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	 if (!message.member.hasPermission('MANAGE_ROLES')) return ;
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if (!message.member.hasPermission('MANAGE_ROLES')) return ;
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			if (!message.member.hasPermission('MANAGE_ROLES')) return ;
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			if (!message.member.hasPermission('MANAGE_ROLES')) return ;
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			 if (!message.member.hasPermission('MANAGE_ROLES')) return ;
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			if (!message.member.hasPermission('MANAGE_ROLES')) return ;
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			if (!message.member.hasPermission('MANAGE_ROLES')) return ;
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});

var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content == "!roles"){
	    if (!message.member.hasPermission('MANAGE_ROLES')) return ;
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});

client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name",".AG"));
    });

client.on('message', message => {
            if (message.content.startsWith( prefix + "helprole")) {
		    if (!message.member.hasPermission('MANAGE_ROLES')) return ;
		    
     let embed = new Discord.RichEmbed()
.setDescription(`**اوامر الرولات** 
ــــــــــــــــــــــــــــــــــــــــــــــــــ`)
.addField('     **!role <mention> <role name>** ' ,' **لاعطاء الرتبه للشخص** ')
.addField('     **!roleRemove <mention> <role name>** ' ,' **الأيزالة الرتبه** ')
.addField('     **!role humans <role name>** ' ,' **لعطاء الاشخاص رتبه** ')
.addField('     **!role bots <role name>** ' ,' **لعطاء البوتات رتبه** ')
.addField('     **!role all <role name> ** ' ,' **لاعطاء رتبه للكل** ')
.setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
});


















//لاعطاء ميوت وازالة ميوت
client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command === "!mute") {
          if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
                  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("**هذه الخاصيه للاداره فقط**");
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (!modlog) return message.reply("**لا يوجد الروم المراد ارسال المعلومات له 'Log'**");
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField(' Mute ', ' | :white_check_mark: |')
    .addField('تم اعطاء الميوت ل', `${user.username}#${user.discriminator} `)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   message.channel.send({embed: embed});

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** هذه الخاصيه للاداره فقط**').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  }

};
    if (command === "!unmute") {
          if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("** هذه الخاصيه للاداره فقط**");
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **");
  if (!modlog) return message.reply("**لا يوجد الروم المراد ارسال المعلومات له 'console'**");
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField('UnMute ', ' | :white_check_mark: |')
    .addField('تم فك الميوت عن', `${user.username}#${user.discriminator} `)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   message.channel.send({embed: embed});

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** هذه الخاصيه للاداره فقط**');

  if (message.guild.member(user).removeRole(muteRole.id)) {
      client.channels.get(modlog.id).send({embed});
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed});
    });
  }

};


});
client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command === "اسكت") {
          if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
                  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("**هذه الخاصيه للاداره فقط**");
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (!modlog) return message.reply("**لا يوجد الروم المراد ارسال المعلومات له 'Log'**");
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField(' Mute ', ' | :white_check_mark: |')
    .addField('تم اعطاء الميوت ل', `${user.username}#${user.discriminator} `)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   message.channel.send({embed: embed});

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** هذه الخاصيه للاداره فقط**').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  }

};
    if (command === "تكلم") {
          if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("** هذه الخاصيه للاداره فقط**");
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **");
  if (!modlog) return message.reply("**لا يوجد الروم المراد ارسال المعلومات له 'console'**");
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField('UnMute ', ' | :white_check_mark: |')
    .addField('تم فك الميوت عن', `${user.username}#${user.discriminator} `)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   message.channel.send({embed: embed});

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** هذه الخاصيه للاداره فقط**');

  if (message.guild.member(user).removeRole(muteRole.id)) {
      client.channels.get(modlog.id).send({embed});
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed});
    });
  }

};


});

















//تغير الحله للبوت
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!id.includes(message.author.id)) return;
      
  if (message.content.startsWith(prefix + 'setplaying')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (prefix + "leveserver")) {
    message.guild.leave();        
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







//invite
client.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has ${inviteCount} invites.`);
});
  }
});

client.on('message',message =>{
    if(message.content.startsWith(prefix + 'top')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://i.imgur.com/OM00xyh.png")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });












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










//معلومات الشخص
client.on('message', message => {
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'user')) {
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
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});








//لفل اب
client.on('message', async message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let xp = require("./xp.json");

  let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("Level Up!")
    .setColor(070707)
    .addField("New Level", curlvl + 1);

    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });
});
client.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let prefix = '!';
    let xp = require("./xp.json");
    
if(cmd === `${prefix}level`) {
if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
   };
 }
   let curxp = xp[message.author.id].xp;
   let curlvl = xp[message.author.id].level;
   let nxtLvlXp = curlvl * 300;
   let difference = nxtLvlXp - curxp;
 
   let lvlEmbed = new Discord.RichEmbed()
   .setAuthor(message.author.username)
   .setColor(070707)
   .addField("Level", curlvl, true)
   .addField("XP", curxp, true)
   .setFooter(`${difference} XP til level up`, message.author.displayAvatarURL);
 
   message.channel.send(lvlEmbed).then(msg => {msg.delete(5000)});
}
});











//الردوت العاديه
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'الوان') {
              message.channel.send('لأختيار اللون اكتب ( لون `رقم الون`)  مثال :  لون 55');
            }
});









//الردود بمن شن
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '.') {
    msg.reply('`يعيني الي ينقط  ♥`');
  }
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '..') {
    msg.reply('`يعيني الي ينقط  ♥`');
  }
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '...') {
    msg.reply('`يعيني الي ينقط  ♥`');
  }
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong!');
  }
});


//الردود بالصوره
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'ولكم') {
              message.channel.sendFile("./PicsArt_07-29-10.40.05.png");
               

            }
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'الوان') {
              message.channel.sendFile("./color.png");
               

            }
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === '!roles') {
              message.channel.sendFile("./color.png");
               

            }
});















//لارسال رساله لرتبه معينه
    client.on('message' , najzx => {
          if(najzx.author.bot) return;
         
          if(najzx.content.startsWith(prefix + "brole")) {
            if (!najzx.member.hasPermission("ADMINISTRATOR"))  return;
            let args = najzx.content.split(" ").slice(1);
         
            if(!args[0]) {
              najzx.channel.send("قم بمنشنة الرتبة | !brole @everyone الرساله")
                return;
            }
            if(!args[1]) {
              najzx.channel.send("قم بكتابة الرسالة | !brole @everyone الرساله")
                return;
            }
         
              if(args[0] == "@everyone") {
                najzx.channel.send(`لقد تم ارسال هذه الرسالة الى ${najzx.guild.memberCount} اعضاء`)
                najzx.guild.members.forEach(m => {
                  m.send(
                  "**" + "السيرفر :" + "\n" +
                  `${najzx.guild.name}` + "\n" +
                  "المرسل :" + "\n" +
                  `${najzx.author.tag}` + "\n" +
                  "الرسالة :" + "\n" +
                  `${args[1]}` + "**"
                  )
                })
                return;
              }
         
                  var role = najzx.mentions.roles.first();
                    if(!role) {
                      najzx.reply("لا توجد رتبة بهذا الاسم")
                        return;
                    }
                najzx.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
                  n.send(
                  "**" + "السيرفر :" + "\n" +
                  `${najzx.guild.name}` + "\n" +
                  "المرسل :" + "\n" +
                  `${najzx.author.tag}` + "\n" +
                  "الرسالة :" + "\n" +
                  `${args[1]}` + "**"
                  )
                })
                najzx.channel.send(`لقد تم ارسال هذه الرسالة الى ${najzx.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
            }
        });






//لارسال برودكسات للاونلين
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
  m.send(`${argresult}\n `);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});




//لارسال برودكسات للكل
client.on('message', message => {
	var command = message.content.split(" ")[0];
	if(command == prefix + 'obc') {
		 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
		var args = message.content.split(' ').slice(1).join(' ');
		if(message.author.bot) return;
		if(!args) return message.channel.send(`**➥ Useage:** ${prefix}bc كلامك`);
		
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
				message.reply(':white_check_mark: **تم الغاء ارسال رسالتك بنجاح**').then(msg => msg.delete(5000));
			});
		})
	}
});

	
	
	







//لاخذ رابط السيرفر
const misaka = new Set();
    client.on('message', async msg => {
  if(msg.content.startsWith("رابط")) {
  if (misaka.has(msg.author.id)) {
    let misakaemb = new Discord.RichEmbed()
    .setDescription(`يجب عليك الانتظار 24 ساعه!`)
    .setColor(`RED`)
    return msg.channel.send(misakaemb).then(message => {
     message.delete(10000) 
    })
    
    }
    misaka.add(msg.author.id);

  
   msg.channel.createInvite({
        thing: true,
        maxUses: 10,
        maxAge: 86400,
  }).then(invite =>
   msg.author.sendMessage(`
** عدد استخدامات الرابط : 10**



${invite.url}
`)
  )
    msg.channel.send(`**:link:  تم أرسال الرابط برسالة خاصة **`)
  }
    setTimeout(() => {
    },86400000);
    })

 
 










// Your Avatar URL!
client.on('message', message => {
    if (message.content === "!avatar") {
    message.reply(message.author.avatarURL); 
    }
});








//الحمايه
client.on('ready', function(){
  require("./antispam.js")(client, function(message){
     message.delete().then(yumz => {
     message.channel.send(`stop spamming kid <@${message.author.id}>`).then(spammer => {
     spammer.delete(2000)
   });
   });
  });
});




//منع السب
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('يا كلب')){
        message.delete()
    return message.reply(`**ممنوع السب -_- **`)
   message.delete()
    }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('كلب')){
        message.delete()
    return message.reply(`**ممنوع السب -_- **`)
   message.delete()
    }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('كس امك')){
        message.delete()
    return message.reply(`**ممنوع السب -_- **`)
   message.delete()
    }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('زبي')){
        message.delete()
    return message.reply(`**ممنوع السب -_- **`)
   message.delete()
    }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('علي زبي')){
        message.delete()
    return message.reply(`**ممنوع السب -_- **`)
   message.delete()
    }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('خول كبير')){
        message.delete()
    return message.reply(`**ممنوع السب -_- **`)
   message.delete()
    }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('خول')){
        message.delete()
    return message.reply(`**ممنوع السب -_- **`)
   message.delete()
    }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('زبي كبير')){
        message.delete()
    return message.reply(`**ممنوع السب -_- **`)
   message.delete()
    }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('احب امك')){
        message.delete()
    return message.reply(`**ممنوع السب -_- **`)
   message.delete()
    }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('شرموط')){
        message.delete()
    return message.reply(`**ممنوع السب -_- **`)
   message.delete()
    }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('شرموطا')){
        message.delete()
    return message.reply(`**ممنوع السب -_- **`)
   message.delete()
    }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('ياشرموطا')){
        message.delete()
    return message.reply(`**ممنوع السب -_- **`)
   message.delete()
    }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('زبي في طيزك')){
        message.delete()
    return message.reply(`**ممنوع السب -_- **`)
   message.delete()
    }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('انكتك')){
        message.delete()
    return message.reply(`**ممنوع السب -_- **`)
   message.delete()
    }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('انكت امك')){
        message.delete()
    return message.reply(`**ممنوع السب -_- **`)
   message.delete()
    }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('كسمك')){
        message.delete()
    return message.reply(`**ممنوع السب -_- **`)
   message.delete()
    }
});




  

 




















client.login(process.env.BOT_TOKEN);
