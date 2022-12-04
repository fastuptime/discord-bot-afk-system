const { Client, GatewayIntentBits  } = require('discord.js');

module.exports = function(token) {
    if (!token) throw new Error('No token provided');
    
    const client = new Client({ intents: [GatewayIntentBits.Guilds] });

    client.login(token).then(() => {
        console.log(`Logged in as ${client.user.tag}`);
    }).catch((err) => {
        console.log(` Error: ${err}`);
    });
}