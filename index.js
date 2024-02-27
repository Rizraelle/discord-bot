import dotenv from 'dotenv';
dotenv.config()

import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on ("messageCreate", async (message) => {
  console.log(message)
  if (!message?.author.bot && message.contain('https://www.instagram.com/')) {
    modified_content = message.content.split('https://www.instagram.com/')[1].split()[0];
    modified_link = 'https://www.ddinstagram.com/{modified_content}';
    await message.reply('{modified_link}')
  }
})

client.login(process.env.DISCORD_TOKEN)