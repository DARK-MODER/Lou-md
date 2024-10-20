const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "menu2", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
╭═══════════════⊷
┃```HELLO @user I'm Lou-md-bot 
┃Created by MAGICAL KX 
┃And owned by @$(s.OWNER_NAME)
┃This is my Menu```
╰═══════════════⊷
╭═══════════════⊷
┃```LOU-MD-BOT```
╰═══════════════⊷
┃→ Prefix : ${s.prefix}
┃→ User : @user
┃→ Bot Name : ${s.BOT_NAME}
┃→ Owner : ${s.OWNER.NAME}
┃→ Date : ${date}
┃→ Time : ${time}
┃→ Commands : ${cm.length}
┃→ Version : v1.0.0
┃→ Mode : ${mode} mode
┃→ Ram : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
┃→ Uptime : ${uptime}
┃→ Developer: MAGICAL-KX 
╰═══════════════⊷❃

> Type `-status` to see bot status.\n${readmore}`;
    
let menuMsg = `

 *❄︎LIST COMMANDES❄︎*${readmore}
`;

    for (const cat in coms) {
        menuMsg += ` 
╭═══════════════⊷
┃```${cat}``` 
╰═══════════════⊷`;
        for (const cmd of coms[cat]) {
            menuMsg += `
┃ ${cmd}`;
        }
        menuMsg += `
╰═══════════════⊷ \n`
    }

    menuMsg += `> LOU-𝐌𝐃 𝐍𝐄𝐖 𝐕𝐄𝐑𝐒𝐈𝐎𝐍 𝐋𝐀𝐓𝐄𝐒𝐓
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "MENE LE*LOU-MD-BOT*, déveloped BY MR MAGICAL-KX" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒
®MAGICAL-KX
©2024-2025
❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});
