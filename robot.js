const Discord = require('discord.js');
const client = new Discord.Client({ shards: 'auto'});
const { prefix, token, witaitoken , guildID, DBUser, DBPass } = require('./config.json');

client.on('ready', async () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity(`Star Citizen`, { type: 'PLAYING' });
});

client.on('channelUpdate', (oldChannel, newChannel) => {
	if (oldChannel.rawPosition !== newChannel.rawPosition) {
		oldChannel.guild.fetchAuditLogs({ limit: 10 })
			.then( (audit) => {
				const log = audit.entries;
				if (!log) return;
				fs = require('fs');
				fs.appendFile('audit.txt', JSON.stringify(log), function (err) {
						if (err) return console.log(err);
				  	});
        })
	}

});

client.login(token);
client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));
