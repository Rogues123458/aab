////----------------------- ALTYAPI NİWREN TARAFINDAN YAPILMIŞTIR PAYLAŞILMASI YASAKTIR -----------------------\\\\
////----------------------- ALTYAPIDA ÇIKACAK ARIZALAR İÇİN Niwren#0099 ULAŞABİLİRSİNİZ -----------------------\\\\
////----------------------- 30 STARDA PUBLİC İÇİN TASARLANMIŞ EMOJİLİ KAYIT BOTU PAYLAŞILACAKTIR -----------------------\\\\

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const db = require('quick.db');
const moment = require('moment')
require('moment-duration-format')
const commands = client.commands = new Discord.Collection();
const aliases = client.aliases = new Discord.Collection();

fs.readdirSync('./commands', { encoding: 'utf8' }).filter(file => file.endsWith(".js")).forEach((files) => {
    let command = require(`./commands/${files}`);
    if (!command.name) return console.log(`Hatalı Kod Dosyası => [/commands/${files}]`)
    commands.set(command.name, command);
    if (!command.aliases || command.aliases.length < 1) return
    command.aliases.forEach((otherUses) => { aliases.set(otherUses, command.name); })
})



//  WATCHING  : !ping izliyor
//  LISTENING : !ping dinliyor
//  PLAYING   : !ping oynuyor 
//  STREAMING : !ping yayında
////----------------------- READY KISMI -----------------------\\\\
client.on('ready', () => {
    client.user.setPresence({ activity: { name: 'Rex#0832 | .e / .k ' }, status: 'dnd' })
    client.channels.cache.get('843382057120038914').join() // ses kanalı İ
     console.log(`Bot ${client.user.tag} Adı İle Giriş Yaptı!`);
  })
////----------------------- CONFİG KISMI -----------------------\\\\
client.config = {
    vipRoles: ['851765314018738196'], //vip
    unregisteres: ['827641518835630101', '851775649328791583'], // kayıtsız
    maleRoles: ['851757345104068638', '851757341874978816'], // erkek
    girlRoles: ['851757344848478219', '851757341849681920'], // bayan
    mods: ['851755565549748234', '842485211484782658', '827641518877311051'], // yetkili
    channelID: '827641518877311055', // kayıt kanalı
    yönetim: ['851757341430644747', '842485211484782658', '827641518877311051'], // üst yönetim // üst yönetim
    viprolcü: ['851755567387246592', '842485211484782658', '827641518877311051'],
    tagrolcü: ['851765421047939093', '842485211484782658', '827641518877311051'],
    tagrol: ['851765314110226432'],
    sponsorrolcü: ['851755567387246592', '842485211484782658', '827641518877311051'],
    sponsor: ['851758429889626152']
}
////----------------------- PREFİX KISMI -----------------------\\\\
client.on('message', message => {
    const prefix = ".";// prefix
    if (!message.guild || message.author.bot || !message.content.startsWith(prefix)) return;
    const args = message.content.slice(1).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))
    if (!cmd) return;
    cmd.run(client, message, args)
})


////----------------------- HOŞGELDİN MESAJI KISMI -----------------------\\\\
client.on('guildMemberAdd', (member) => {

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
    var toplamüye = member.guild.memberCount
    var emotoplamüye = `${toplamüye}`.split("").map(c => mapping[c] || c).join("")
    let memberDay = (Date.now() - member.user.createdTimestamp);
    let createAt = moment.duration(memberDay).format("Y [Yıl], M [Ay], W [Hafta], DD [Gün]")
    let createAt2 = moment.duration(memberDay).format("DD [Gün], HH [saat], mm [dakika]")
    if (memberDay > 604800000) {
        client.channels.cache.get(client.config.channelID).send(` 
 ${member} - \`${member.id}\` **Aramıza hoş geldin!
Seninle birlikte sunucumuz ${emotoplamüye} üyeye ulaştı.Hedefimize doğru ilerlerken bize destek olduğun için teşekkür ederiz.
Hesabın ${createAt} önce açılmış...
\'Rex | #0832\' taglarımızdan birini alarak kayıt işlemlerinde bize yardımcı olabilirsin.
<@&851755565549748234> yetkililerimiz en kısa sürede kayıt işlemlerini tamamlayacak.
Unutma ki kurallarımızı okuduğunu ve içeride yapacağın eylemleri kurallarımıza uygun bir biçimde sergileyeceğini düşünüyoruz.Lütfen okumadıysan <#827641519090827281> kanalımıza bir göz at!
İçeride görüşmek üzere...** :tada: :tada:
 `)
    } else {
        client.channels.cache.get(client.config.channelID).send(
            new Discord.MessageEmbed()
            .setAuthor(member.user.username, member.user.avatarURL({ dynamic: true }))
            .setDescription(`${member}, Adlı kullanıcı sunucumuza katıldı fakat hesabı **${createAt2}** tarihinde açıldığı için şüpheli konumunda. `)
            .setTimestamp()
            .setThumbnail(member.user.avatarURL({ dynamic: true }))
            .setFooter(`Nikotine ❤️ Rex`))
    }
})

////----------------------- TAG MESAJ KISMI -----------------------\\\\
client.on('message', msg => {
    if (msg.content === '!tag') {
        msg.channel.send('```Rex | #0832```'); // tagı yazınız
    } else if (msg.content === 'tag') {
        msg.channel.send('```Rex | #0832```');// tagı yazınız
    } else if (msg.content === 'tag') {
        msg.channel.send('```Rex | #0832```');// tagı yazınız
    } else if (msg.content === ".rol-ver") {
        msg.guild.members.cache.forEach(x => {
            x.roles.add("")
        })
    }
});


client.login('ODQ1MjgyMzQwNjQwNTIyMzAx.YKeshg.fq5K55OOYlW7WfAqkPyplYvE4cc')//token
