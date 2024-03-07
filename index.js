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

client.on('messageCreate', async (message) => {
  if (!message?.author.bot && message.content.includes('@everyone')) {
    const exampleEmbed = {
      title: 'ПЕТУШКИ ОБЩИЙ СБОР',
      image: {
        url: `https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHdxdDZxb3hjNngxbjJnOHNvazZkd2hsZWs3a2J0eHhxYWRlaWdlNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KG4uqXCvWexDtODxrQ/giphy.gif`,
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