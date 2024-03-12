require('dotenv').config();

var express = require('express');
var app = express();
const port = 3000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port ' + port + '!');
});

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

client.on('guildMemberAdd', async(member) => {
    const channelID = '1217180045609668608';
    const message = `A tuda li ti zashel, ${member.user}?`;
    const welcomeChannel = await member.guild.channels.cache.get(channelID)
    welcomeChannel.send(message);
})

client.on('messageCreate', async (message) => {
  if (!message?.author.bot && message.content.includes(`<@&1215354313325682759>`)) {
    console.log(message)
    const exampleEmbed = {
      title: 'ПЕТУШКИ ОБЩИЙ СБОР',
      image: {
        url: `https://i.kym-cdn.com/photos/images/original/000/790/534/877.gif`,
      },
    };
    message.channel.send({ embeds: [exampleEmbed] });
  }
  if (!message?.author.bot && message.content.includes('https://www.instagram.com/')) {
    if (message?.channelId === '1210570674561749053') {
      modifiedContent = message.content.split('https://www.instagram.com/')[1].split('?')[0];
      modifiedLink = `https://www.ddinstagram.com/${modifiedContent}`;
      await message.reply(modifiedLink);
    } else {
      message.delete();
      message.channel.send(`Are you ohueli tam? IG links ➡️ <#1210570674561749053>`)
      .then(msg => console.log(`Deleted message from ${msg.author.username}`))
      .catch(console.error);
    }
  }
});

client.login(process.env.DISCORD_TOKEN);