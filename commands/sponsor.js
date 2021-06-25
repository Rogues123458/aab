const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'sponsor',
    aliases: ['spo', 'sponsor'],
    run: async(client, message, args) => {
        let embed = new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('#ff0000').setTimestamp().setThumbnail(message.author.avatarURL).setFooter('Rex </>');
        let embed2 = new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('#ffdd06').setTimestamp().setThumbnail(message.author.avatarURL).setFooter('Rex </>');

        if (!client.config.sponsorrolcü.some(id => message.member.roles.cache.has(id))) {
            return message.channel.send(embed.setDescription("Komutu kullanan kullanıcıda yetki bulunmamakta!"))
        }

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!member) return message.channel.send(embed.setDescription("Kullanıcı bulunamadı veya etiketlenmedi!"))

        await message.guild.members.cache.get(member.id).roles.add(client.config.sponsor)
        message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setDescription(`${member} adlı kullanıcıya <@&851758429889626152> rolü verildi`).setColor('#ffdd06').setTimestamp().setThumbnail(message.author.avatarURL).setFooter('Kullanıcı .e/.k komutları ile kayıt edilebilir!'))
message.react('<a:wexytacc:839884363377672192>')
    }
}