Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @PlyNoxYT Sign out
0
0 16 alexpgm/video_file
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights
video_file/index.js
a6945cb  on 21 Sep
@alexandrecoulay alexandrecoulay Update index.js
     
45 lines (35 sloc)  1.31 KB
const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg require('./index.json'); // a garder en version desktop
const token = process.env.token // a garder en version heroku
const prefix = ("?");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('rien').catch(console.error)
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur de Alexpgm' + member.displayName)
        console.log(`${member.displayName} à rejoind le serveur.`)
    }).catch(console.error)
});

const ban = require('./kick et ban/ban');


bot.on('message', function (message){
    if (ban.match(message)){
        return ban.action(message)
    }
});


bot.on('message', msg => {
    if (msg.content === "bonjour"){
        msg.reply("Heureux de te revoir parmis nous.")
    }
    if (msg.content.match(/salut/i)) {
            msg.reply('Je suis d\'accord avec toi.')
    }
    if (msg.content === prefix + "site"){
        msg.channel.send("https://alexpgm.000webhostapp.com/")
        console.log("Une personne a demandé pour aller sur ton site.")
    }

});

bot.login(cfg.token); //a garder en version desktop
bot.login(token); //a garder en version heroku
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
Press h to open a hovercard with more details.
