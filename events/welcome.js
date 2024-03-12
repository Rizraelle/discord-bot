module.exports = {
  name: 'guildMemberAdd',
  async execute(member) {
    const welcomeRole = await member.guild.role.cache.find(role => role.name === 'Petushok');
    await member.role.add(welcomeRole);

    const welcomeChannel = await member.guild.channels.cache.find(channel => channel.name === 'общее')
    await welcomeChannel.fetch();
    welcomeChannel.send(`Gotov' tuza, manya, ${member.user}`);
  }
}