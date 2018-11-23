const Discord = require('discord.js');
const { Client, Util } = require('discord.js');
const client = new Client();
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const rn = require('random-number');
const gif = require('gif-search');
const nodeopus = require('node-opus');
const conv = require('number-to-words');
const ffmpeg = require('ffmpeg');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const queue = new Map();
const prefix = process.env.prefix;
const dev = process.env.id1;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

module.exports = async (msg) => { 
    if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
	
    const args = msg.content.split(' ');
    const args1 = msg.content.split(' ').slice(1);
    const text1 = args1.slice(0).join(' ');
    const args2 = msg.content.slice(prefix.length).trim().split(/ +/g);
    const searchString = args.slice(1).join(' ');
    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    const serverQueue = queue.get(msg.guild.id);
    const voiceChannel = msg.member.voiceChannel;
    const command = args2.shift().toLowerCase();

let cmds = {
	play: { cmd: 'play', a: ['p'] },
	stop: { cmd: 'stop', a: ['s'] },
	join: { cmd: 'join', a: ['j'] },
	volume: { cmd: 'volume', a: ['vol'] },
	queue: { cmd: 'queue', a: ['q'] },
	repeat: { cmd: 'repeat', a: ['re'] },
	skip: { cmd: 'skip' },
	skipto: { cmd: 'skipto', a: ['sto'] },
	pause: { cmd: 'pause' },
	resume: { cmd: 'resume' }
};


Object.keys(cmds).forEach(key => {
    	var value = cmds[key];
    	var command = value.cmd;
    	client.commands.set(command, command);
	if (value.a) {
		  value.a.forEach(alias => {
		  client.aliases.set(alias, command)
	})
}});
	    var cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
    if (cmd === 'play') {
	if (!msg.member.hasPermission('MANAGE_GUILD')) return undefined;
        console.log(`${msg.author.tag} has been used the ${prefix}play command in ${msg.guild.name}`);
        let args1 = msg.content.split(' ').slice(1);
        if (!voiceChannel) return msg.channel.send(':x:** You need to be in a voice channel**!');
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        if (!permissions.has('CONNECT')) {
		return msg.channel.send(':no_entry_sign: **I am unable to connect **!');
        }
        if (!permissions.has('SPEAK')) {
		return msg.channel.send('**I can not speak in this room, please make sure that i have full perms for this**!');
        }
        if (text1 == '') {
		return msg.channel.send('**:x: Please specify a filename.**');
        }
        
		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(`:white_check_mark: \`\`${playlist.title}\`\` Added to **Queue**!`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					voiceChannel.join().then(connection => console.log('Connected!'));
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
                    const embed1 = new Discord.RichEmbed()
                    .setColor('BLACK')
                    .setAuthor("MUSIC", `http://i8.ae/GsITz`)
                    .setTitle("**Song selection** :")
                    .setDescription(`${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`);
                    msg.channel.sendEmbed(embed1).then(message =>{message.delete(15000)});	
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send(':information_source: **No song selected to play.**').then(message =>{message.delete(5000)});
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':x: **I don`t get any search result.**').then(message =>{message.delete(5000)});
				}
			}
			return handleVideo(video, msg, voiceChannel);
		} 
    } else if (cmd === 'stop') {
        if (!msg.member.hasPermission('MANAGE_GUILD')) return undefined;
        console.log(`${msg.author.tag} has been used the ${prefix}stop command in ${msg.guild.name}`);
        if (!msg.member.voiceChannel) return msg.channel.send(':x:**You are not in a voice channel**!').then(message =>{message.delete(5000)});
        if (!serverQueue) return msg.channel.send(':information_source: **There is no music to stop to.**').then(message =>{message.delete(5000)});
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end('Stop command has been used!');
        return msg.channel.send('k :cry:');
    } else if (cmd === 'join') {
        if (!msg.member.hasPermission('MANAGE_GUILD')) return undefined;
        console.log(`${msg.author.tag} has been used the ${prefix}join command in ${msg.guild.name}`);
        if (!msg.member.voiceChannel) return msg.channel.send(':x:**You are not in a voice channel**!').then(message =>{message.delete(5000)});
        voiceChannel.join().then(connection => console.log('joind to voiceChannel!')).catch(error =>{
        console.error(`I could not join the voice channel: ${error}`);
	return msg.channel.send(`I could not join the voice channel: **${error}**!`);
        });
        return msg.channel.send('**:white_check_mark: Joind.**');
    } else if (cmd === 'volume') {
        if (!msg.member.hasPermission('MANAGE_GUILD')) return undefined;
        console.log(`${msg.author.tag} has been used the ${prefix}volume command in ${msg.guild.name}`);
        if (!msg.member.voiceChannel) return msg.channel.send(':x:**You are not in a voice channel**!').then(message =>{message.delete(5000)});
        if (!serverQueue) return msg.channel.send(':information_source: **There is no music playing to set volume.**').then(message =>{message.delete(5000)});
        if (!args[1]) return msg.channel.send(`:speaker: **Current volume is:** ${serverQueue.volume}`);
        if (parseInt(args2[0]) > 200) return msg.channel.send('**You can\'t set the volume more than `200`.**');
        serverQueue.volume = args2[0];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(serverQueue.volume / 150);
        return msg.channel.send(`:loud_sound: **Volume:** ${serverQueue.volume}`);
    } else if (cmd === 'queue') {
        if (!msg.member.hasPermission('MANAGE_GUILD')) return undefined;
        console.log(`${msg.author.tag} has been used the ${prefix}queue command in ${msg.guild.name}`);
        if (!serverQueue) return msg.channel.send(':information_source: **no_more_Queue.**').then(message =>{message.delete(5000)});
        let index = 0;
        let text = '';
        for (var i = 0; i < serverQueue.songs.length; i++) {
	let num;
	if ((i) > 8) {
		let st = `${i+1}`
		console.log(st);
		let n1 = conv.toWords(st[0]);
		let n2 = conv.toWords(st[1]);
		num = `:${n1}::${n2}:`
        } else {
		let n = conv.toWords(i+1);
		num = `:${n}:`
        }
		text += `**[${++index}] -** ${serverQueue.songs[i].title} [\`\`${serverQueue.songs[i].duration}\`\`]\n`
        }
        const embedqu = new Discord.RichEmbed()
        .setColor('BLACK')
        .setAuthor("Queue", `http://i8.ae/GsITz`)
        .setTitle("**Queue List :**")
        .addField('__Now Playing__  :musical_note: ' , `**${serverQueue.songs[0].title}**`,true)
        .addField(':musical_score:  __UP NEXT__ :musical_score: ' , `${text}`)
	.setFooter(`${prefix}skipto [number]`);
        return msg.channel.sendEmbed(embedqu);
    } else if (cmd === 'repeat') {
	if (!msg.member.hasPermission('MANAGE_GUILD')) return undefined;
        console.log(`${msg.author.tag} has been used the ${prefix}repeat,' command in ${msg.guild.name}`);
        if (!msg.member.voiceChannel) return msg.channel.send(':x:**You are not in a voice channel**!').then(message =>{message.delete(5000)});
        if (!serverQueue) return msg.channel.send(':information_source: **There is no music playing to repeat it.**').then(message =>{message.delete(5000)});
        if (serverQueue.repeating) {
		serverQueue.repeating = false;
		return msg.channel.send(':repeat: **Repeating Mode** (`False`)');
        } else {
		serverQueue.repeating = true;
		return msg.channel.send(':repeat: **Repeating Mode** (`True`)');
        }
    } else if (cmd === 'skip') {
        if (!msg.member.hasPermission('MANAGE_GUILD')) return undefined;
        console.log(`${msg.author.tag} has been used the ${prefix}skip command in ${msg.guild.name}`);
        if (!msg.member.voiceChannel) return msg.channel.send(':x:**You are not in a voice channel**!').then(message =>{message.delete(5000)});
        if (!serverQueue) return msg.channel.send(':information_source: **There is no music to skip to.**').then(message =>{message.delete(5000)});
        if (serverQueue.repeating) {
            serverQueue.repeating = false;
            serverQueue.connection.dispatcher.end('ForceSkipping..');
            serverQueue.repeating = true;
        } else {
            serverQueue.connection.dispatcher.end('Skip command has been used!');
        }
    } else if (cmd === 'skipto') {
        if (!msg.member.hasPermission('MANAGE_GUILD')) return undefined;
        console.log(`${msg.author.tag} has been used the ${prefix}skipto command in ${msg.guild.name}`);
        if (!msg.member.voiceChannel) return msg.channel.send(':x:**You are not in a voice channel**!').then(message =>{message.delete(5000)});
        if (!serverQueue) return msg.channel.send(':information_source: **There is no music to skip to.**').then(message =>{message.delete(5000)});
        if (!serverQueue.songs || serverQueue.songs < 2) return msg.channel.send('**There is nothing playing to skip to.**');
        if (serverQueue.repeating) return msg.channel.send(`**You can\'t skipto, because repeating mode is on, run \`\`${prefix}repeat\`\` to turn off.**`);
        if (!args2[0] || isNaN(args2[0])) return msg.channel.send(`**Please input song number to skip to it, run \`\`${prefix}queue\`\` to see songs numbers.**`);
        let sN = parseInt(args2[0]) - 1;
        if (!serverQueue.songs[sN]) return msg.channel.send('**There is no song with this number.**');
        let i = 1;
        while (i < sN) {
        i++;
        serverQueue.songs.shift();
        }
        serverQueue.connection.dispatcher.end('SkippingTo..');
        return undefined;  
    }  else if (cmd === 'pause') {
	if (!msg.member.hasPermission(`MANAGE_GUILD`)) return undefined;
        console.log(`${msg.author.tag} has been used the ${prefix}pause command in ${msg.guild.name}`);
        if (serverQueue && serverQueue.playing) {
        serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause();
        return msg.channel.send('k :unamused:');
	}
        return msg.channel.send(':information_source: **No music playing to pause.*').then(message =>{message.delete(5000)});
    } else if (cmd === 'resume') {
	if (!msg.member.hasPermission('MANAGE_GUILD')) return undefined;
	console.log(`${msg.author.tag} has been used the ${prefix}resume command in ${msg.guild.name}`);
	if (serverQueue && !serverQueue.playing) {
        serverQueue.playing =  true;
        serverQueue.connection.dispatcher.resume();
        return msg.channel.send('k :slight_smile:');
	}
	return msg.channel.send(':information_source: **No music paused to resume.**').then(message =>{message.delete(5000)});
    }
    return undefined;
}

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	const args = msg.content.slice(prefix.length).trim().split(/ +/g);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 100,
			playing: true,
        		repeating: false
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`I cant join this voice channel: **${error}**`);
		}
	} else {
		serverQueue.songs.push(song);
		if (playlist) return undefined;
		if (!args) return msg.channel.send(':x: **I don`t get any search result.**');
        	else return msg.channel.send(`:white_check_mark: \`\`${song.title}\`\` Added to **.Queue**!`);
        }
        return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
        	serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return serverQueue.textChannel.send(`:stop_button: **Queue** finished!!`);
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			if (serverQueue.repeating) return play(guild, serverQueue.songs[0])
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 150);
	
	if (!serverQueue.repeating) {
		serverQueue.textChannel.send(`:white_check_mark: Music playing **${song.title}**`);
	}

}
