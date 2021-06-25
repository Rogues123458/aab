const db = require('quick.db');
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'say',
    aliases: ['say'],
    run: async(client, message, args) => {
        const mapping = {
            " ": "",
            "0": "<a:rex0:851783764199079956>", // sayı iDleri
            "1": "<a:rex1:851783812245094431>",
            "2": "<a:rex2:851783788429967360>",
            "3": "<a:rex3:851783840631619614>",
            "4": "<a:rex4:851784162548776970>",
            "5": "<a:rex5:851784198087507998>",
            "6": "<a:rex6:851784221499981825>",
            "7": "<a:rex7:851784253415227422>",
            "8": "<a:rex8:851784319433048084>",
            "9": "<a:rex9:851784284301426699>",
        };
        var tag = ('Rex')  //tagınızı yazınız
        var etiket =  message.guild.members.cache.filter(s => !s.bot).filter(member => member.user.discriminator == "0832").size;
        var toplamAile = message.guild.members.cache.filter(s => !s.bot).filter(member => member.user.username.includes(tag) || member.user.discriminator == "0832").size;
        var toplamüye = message.guild.memberCount
        var online = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size
        var Sesli = message.guild.members.cache.filter(s => s.voice.channel).size;
        var tag = message.guild.members.cache.filter(a => a.user.username.includes(tag)).size
        var tag2 = message.guild.members.cache.filter(a => a.user.username.includes(tag2)).size
        var emotoplamüye = `${toplamüye}`.split("").map(c => mapping[c] || c).join("")
        var emotag = `${tag}`.split("").map(c => mapping[c] || c).join("")
        var emoses = `${Sesli}`.split("").map(c => mapping[c] || c).join("")
        var emoetiket = `${etiket}`.split("").map(c => mapping[c] || c).join("")
        var emotoplam = `${toplamAile}`.split("").map(c => mapping[c] || c).join("")
        var emoonline = `${online}`.split("").map(c => mapping[c] || c).join("")

        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))    
            .setDescription(`**• Sunucuda toplam ${emotoplamüye} üye bulunuyor.**
            **• Sunucuda ${emoonline} aktif üye bulunuyor.**
            **• Sunucumuzda ${emotag} üyemiz 'Rex' tagımızı alarak bize destek oluyor.**
            **• Sunucuda ${emoetiket} üyemiz etiket tagımızı alarak bize destek oluyor.**
            **• Sunucuda toplam tagımızı alan ${emotoplam} üye bulunuyor.**
            **• Sunucuda sesli sohbetlerde toplam ${emoses} üye bulunuyor.**`)
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp()
            .setThumbnail(message.author.avatarURL())
            .setFooter('Rex <3')
        message.channel.send(embed)
        message.react('<a:onayrex:828409514999021658>')
    }
}
