const Discord = require('discord.js');
const Util = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const prefix = '!'
const dev = ['454527533279608852'];
const owner = ['454527533279608852' , '344526837512273922', '478192028279111690'];
const id = ['454527533279608852', '344526837512273922' , '478192028279111690' , '' , '', '', ''];
///////////////elmewal3/////////////////a7med////////////////anase
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

//restartpac

//console

//restart-leve server


client.login(process.env.BOT_TOKEN);
