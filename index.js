require('dotenv').config()

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// client.on ("messageCreate", async (message) => {
//   

client.on ('ready', (c) => {
  console.log(`${c.user.tag} is online`);
})

client.on('messageCreate', async (message) => {
  if (!message?.author.bot && message.content.includes('https://www.instagram.com/')) {
    if (message?.channelId === '1210570674561749053') {
      modifiedContent = message.content.split('https://www.instagram.com/')[1].split('?')[0];
      modifiedLink = `https://www.ddinstagram.com/${modifiedContent}`;
      await message.reply(modifiedLink);
    } else {
      message.delete()
      message.channel.send(`Are you ohueli tam? IG links ➡️ <#1210570674561749053>`)
      .then(msg => console.log(`Deleted message from ${msg.author.username}`))
      .catch(console.error);
    }
  }
});

client.login(process.env.DISCORD_TOKEN);