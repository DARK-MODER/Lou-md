//══════════════════════════════════════════════════════════════════════════════════════════════════════// 
//                                                                                                      //
//                                   MULTI-DEVICE WHATSAPP BOT                                          //
//                                                                                                      //
//                                            𝚅.𝟷.𝟻.𝟹                                                  // 
//                                                                                                      //
//              ███████╗██╗ ██████╗ ███╗   ███╗ █████╗     ███╗   ███╗██████╗                           //
//              ██╔════╝██║██╔════╝ ████╗ ████║██╔══██╗    ████╗ ████║██╔══██╗                          //
//              ███████╗██║██║  ███╗██╔████╔██║███████║    ██╔████╔██║██║  ██║                          //
//              ╚════██║██║██║   ██║██║╚██╔╝██║██╔══██║    ██║╚██╔╝██║██║  ██║                          //
//              ███████║██║╚██████╔╝██║ ╚═╝ ██║██║  ██║    ██║ ╚═╝ ██║██████╔╝                          //
//              ╚══════╝╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝    ╚═╝     ╚═╝╚═════╝                           //
//                                                                                                      //
//                                          BY:MAHER-ZUBAIR                                             //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

/**

* @project_name : SIGMA-MD
* @Developer : Maher-Zubair
* @Version : v.1.5.3
* @license : Apache-2.0

This Project Is Under Apache-2.0 License.
So, No One Have Permission To Copy This Project,
Reupload, Reversed Engineering And Any Kind Of Deobfuscation.
Otherwise, A Legal Github Copyright Action Will Be Taken Against You
Which Result In Removing The Copied Project And Permanantly Banning Of Your Account.
* @Copyright_owner : Maher-Zubair

**/

const { addnote,Module_Exports, sck1, delnote, allnotes, delallnote, tlang,fetchJson, botpic, runtime, prefix, name ,alive ,Function } = require('../lib')
const {TelegraPh} = require('../lib/scraper')
const util = require('util');
const fs = require('fs-extra');
const formData = require('form-data')
const axios = require('axios')
const fetch = require('node-fetch');
    //---------------------------------------------------------------------------

    Function({
        kingcmd: "qr",
        kingclass: "owner",
        
        desc: "Sends SIGMA-MD Qr code to scan and get your session id."
    },
    async(con, m, text) => {
      const url = `${maher_api}bot/qr`;
      
      let res = await axios.get(url)
      let gb = res.data.url.sigma_md
      const { key } = await con.sendMessage(m.chat, {
        image: { url: gb },
        caption: `*_Scan QR Within 15 Seconds_*\n\n${name.caption}`
      }, {quoted: m})
     await sleep(15 * 1000)
      await con.relayMessage(m.chat, {
          protocolMessage: {
            key,
            type: 14,
            editedMessage: {
              imageMessage: { caption: '*_Your Requested QR is Expired Now_*' }
            }
          }
        }, {});


    }
)
     
//--------------------------------------------------------------------------- 
Module_Exports({
    kingcmd: "rmbg",
    shortcut : ['removebg'],
    kingclass: "converter",
    kingpath: __filename,
    infocmd: "Remove image Background."
},
async(Void, citel, text) => {
  const _0x16b89c=_0x49c2;function _0x5e60(){const _0x33515f=['log','post','unlinkSync','send','caption','reply','524478FLbaqg','671116swmKkp','*_Reply\x20To\x20An\x20Image_*','1030BtYSxu','https://api.remove.bg/v1.0/removebg','187699OYwNUd','93599mPRWgy','auto','data','3341514nVKyCN','225184Osvztc','downloadAndSaveMediaMessage','catch','imageMessage','*_Please\x20provide\x20Valid\x20RemoveBg\x20Key_*\x0a\x0a\x20_Get\x20RemoveBg\x20api\x20key\x20from\x20remove.bg_\x0a\x20_then\x20Put\x20it\x20in\x20var\x20\x22REMOVE_BG_KEY\x22_\x0a\x0a','25NTBVPR','sending\x20removebg\x20image...!','14IYDGua','4141704bMSerR','REMOVE_BG_KEY','quoted','477ZxuHEt'];_0x5e60=function(){return _0x33515f;};return _0x5e60();}(function(_0x3045c0,_0x56c7b6){const _0x146dc7=_0x49c2,_0x492ef5=_0x3045c0();while(!![]){try{const _0x1f6d31=-parseInt(_0x146dc7(0xf0))/0x1*(-parseInt(_0x146dc7(0xe0))/0x2)+parseInt(_0x146dc7(0xd8))/0x3+-parseInt(_0x146dc7(0xec))/0x4+-parseInt(_0x146dc7(0xde))/0x5*(-parseInt(_0x146dc7(0xeb))/0x6)+parseInt(_0x146dc7(0xe1))/0x7+-parseInt(_0x146dc7(0xd9))/0x8*(parseInt(_0x146dc7(0xe4))/0x9)+parseInt(_0x146dc7(0xee))/0xa*(-parseInt(_0x146dc7(0xd5))/0xb);if(_0x1f6d31===_0x56c7b6)break;else _0x492ef5['push'](_0x492ef5['shift']());}catch(_0x1a9a50){_0x492ef5['push'](_0x492ef5['shift']());}}}(_0x5e60,0xe0b62));if(!citel[_0x16b89c(0xe3)])return await citel[_0x16b89c(0xea)]('*_Reply\x20Any\x20Image\x20To\x20Remove\x20Background_*');let mime=citel[_0x16b89c(0xe3)]['mtype'];if(mime!=_0x16b89c(0xdc))return await citel[_0x16b89c(0xea)](_0x16b89c(0xed));let media=await Void[_0x16b89c(0xda)](citel[_0x16b89c(0xe3)]),anu=await TelegraPh(media);try{await fs[_0x16b89c(0xe7)](media);}catch(_0x14f72d){}const formData={'image_url':anu,'size':_0x16b89c(0xd6)};function _0x49c2(_0x16a55d,_0x16a672){const _0x5e6049=_0x5e60();return _0x49c2=function(_0x49c2f0,_0x45b252){_0x49c2f0=_0x49c2f0-0xd5;let _0x43a2e2=_0x5e6049[_0x49c2f0];return _0x43a2e2;},_0x49c2(_0x16a55d,_0x16a672);}axios[_0x16b89c(0xe6)](_0x16b89c(0xef),formData,{'headers':{'X-Api-Key':name[_0x16b89c(0xe2)]},'responseType':'arraybuffer'})['then'](_0x466f9f=>{const _0x441490=_0x16b89c;console[_0x441490(0xe5)](_0x441490(0xdf));const _0x5b34e5=Buffer['from'](_0x466f9f[_0x441490(0xd7)],'binary');return citel[_0x441490(0xe8)](_0x5b34e5,{'caption':`*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${name.botname}*`},'image');})[_0x16b89c(0xdb)](_0x46980f=>{const _0x3d5c75=_0x16b89c;return citel[_0x3d5c75(0xe8)](_0x3d5c75(0xdd)+name[_0x3d5c75(0xe9)]);});

    
})

//---------------------------------------------------------------------------

Module_Exports({
            kingcmd: "url",
            shortcut : ['createurl',"tourl"],
            kingclass: "converter",
            kingpath: __filename,
            infocmd: "image to url."
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return await citel.send(`*_Reply To Any Image/Video To Get Url_*`)
            let mime = citel.quoted.mtype
            if(mime !='videoMessage' && mime !='imageMessage' ) return await citel.reply("*_Please, Reply To An Image/Video_*")
            let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
            let anu = await TelegraPh(media);
            await citel.reply(util.format(anu));
            return await fs.unlinkSync(media);
        })

//---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "trt",
            shortcut :['translate'],
            kingclass: "converter",
            kingpath: __filename,
            infocmd: "Translate\'s given text in desird language."
        },
        async(Void, citel, text) => {
            if(!text && !citel.quoted) return await citel.reply(`*_Please Give Me Text. Ex: ${prefix}trt urdu Who are you_*`);
            const translatte = require("translatte");
            let lang = text ? text.split(" ")[0].toLowerCase() : 'en';
            if (!citel.quoted)  { text = text.replace( lang , "");  }
            else { text = citel.quoted.text; }
            var whole = await translatte(text, { from:"auto",  to: lang , });
            if ("text" in whole) { return await citel.reply(whole.text); }

        }
    )
    //---------------------------------------------------------------------------


Module_Exports({
            kingcmd: "shell",
            kingclass: "owner",
            kingpath: __filename,
            infocmd: "Runs command in Heroku(server) shell."
        },
        async(Void, citel, text,{ isCreator }) => {
             if (!isCreator) return citel.reply(tlang().owner)
             if(!text) return citel.reply("*PLease, Provide A Command to Run on Heroku*")
             const { exec } = require("child_process")
             exec(text, (err, stdout) => {
                     if (err) return citel.reply(`----${tlang().title}----\n\n` + err)
                     if (stdout) { return citel.reply(`----${tlang().title}----\n\n` + stdout)  }
             })
        }) 
        

    //---------------------------------------------------------------------------


Module_Exports({
            kingcmd: "eval",
            kingclass: "owner",
            kingpath: __filename,
            infocmd: "Runs js code on node server."
        },
        async(Void, citel, text,{ isCreator }) => {
               if (!isCreator)  return citel.reply(tlang().owner)
               if(!text) return citel.reply("*PLease, Provide A Query To Run Master*")
               try {
                   let resultTest = eval('const a = async()=>{\n' + text + '\n}\na()');
                   if (typeof resultTest === "object") await citel.reply(JSON.stringify(resultTest));
                   else await citel.reply(resultTest.toString());
               } catch (err) { return  await citel.reply(err.toString()); }
})
  

if(name.WORKTYPE != 'private')
{
Module_Exports({
            kingcmd: "ban",
            kingclass: "owner",
            kingpath: __filename,
            infocmd: "Bans user from using bot."
        },
        async(Void, citel, text,{ isCreator}) => {
            if (!isCreator) return citel.reply(tlang().owner)
            try 
            {
                let users = citel.quoted ? citel.quoted.sender : citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                if (!users) return citel.reply(`*_Please Mention A User_*`)
                let pushnamer = Void.getName(users);
                sck1.findOne({ id: users }).then(async(usr) => 
                {
                    if (!usr) 
                    {
                        await new sck1({ id: users, ban: "true" }).save()
                        return citel.reply(`*_Banned ${usr.name} from Using Commands._*`)
                    } 
                    if (usr.ban == "true") return citel.reply(`${pushnamer} *_is already Banned from Using Commands_*`)
                    await sck1.updateOne({ id: users }, { ban: "true" })
                    return citel.reply(`*_Successfully Banned ${usr.name} from Using Commands._*`)
                })
            } catch (e) {  return citel.reply("*_Please Reply/Mention Any User_*")  }


       })
     //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "unban",
            kingclass: "owner",
            kingpath: __filename,
            infocmd: "Unbans banned user (from using bot)."
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            try 
            {
                let users = citel.quoted ? citel.quoted.sender : citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                if (!users) return citel.reply("*_Please mention any user_*")
                let pushnamer = Void.getName(users);
                sck1.findOne({ id: users }).then(async(usr) =>
                { // console.log(usr.ban);
                    if (!usr) { return citel.reply(`${pushnamer} *_Is Unbanned From Using Commands._*`);}
                    if (usr.ban !== "true") return await citel.reply(`${usr.name} *_Is Already Unbanned._*`);
                    await sck1.updateOne({ id: users }, { ban: "false" })
                    return await citel.reply(`*_User_* ${usr.name} *_Unbanned SuccessFully_*`);
                })
            } catch {  return citel.reply("*_Unknown Error Occured_*");  }
        })
}
    //---------------------------------------------------------------------------
//                  ADD NOTE  COMMANDS
function _0x58ba(_0x119114,_0x215b39){const _0x40d5e1=_0x4a93();return _0x58ba=function(_0x2e05b0,_0x15af03){_0x2e05b0=_0x2e05b0-(0xcdc*-0x2+-0x10f*0x1+0x1b44);let _0x1adccd=_0x40d5e1[_0x2e05b0];return _0x1adccd;},_0x58ba(_0x119114,_0x215b39);}const _0x17aaae=_0x58ba;(function(_0x4d32d1,_0x296ec1){const _0x39a734=_0x58ba,_0x29dd2e=_0x4d32d1();while(!![]){try{const _0x576ef0=-parseInt(_0x39a734(0x80))/(-0x641+-0xd*0x26b+0x25b1)+-parseInt(_0x39a734(0xc3))/(0x42d*0x2+0x4af*-0x1+-0x3a9)+parseInt(_0x39a734(0xb0))/(0x1*-0x6fd+-0x20*0x52+0x1140)*(parseInt(_0x39a734(0x96))/(-0x134a*-0x2+0x87d+-0x49*0xa5))+-parseInt(_0x39a734(0xd6))/(-0xb61+-0x3*0x475+0x18c5)*(-parseInt(_0x39a734(0x83))/(-0x2515+0x24af*0x1+-0x36*-0x2))+-parseInt(_0x39a734(0x95))/(0xe*-0xa7+-0x116*0x11+0x1b9f)+parseInt(_0x39a734(0x97))/(0xf48+-0x12d9+0x1*0x399)*(-parseInt(_0x39a734(0x8d))/(0x1*-0xa2b+0x1321+0x5*-0x1c9))+parseInt(_0x39a734(0xbc))/(0x2190+-0x584*-0x1+0x26*-0x107);if(_0x576ef0===_0x296ec1)break;else _0x29dd2e['push'](_0x29dd2e['shift']());}catch(_0x554578){_0x29dd2e['push'](_0x29dd2e['shift']());}}}(_0x4a93,0x1a0ddb*-0x1+0xc*0x12cc7+0x1a1b96),Module_Exports({'kingcmd':_0x17aaae(0xb4),'kingclass':_0x17aaae(0xbf),'infocmd':_0x17aaae(0x91)+_0x17aaae(0xd5)+'ne'},async(_0x1eaf03,_0x6006ec,_0x908e53,{isCreator:_0x410539})=>{const _0x1b0379=_0x17aaae,_0xd53129={'hOgod':function(_0x1ca691,_0x5af1d1){return _0x1ca691!=_0x5af1d1;},'nexWr':_0x1b0379(0xc4),'rrPam':_0x1b0379(0xaa),'AUPUb':_0x1b0379(0xc8),'FqRbd':_0x1b0379(0x84),'qDcnq':_0x1b0379(0x9e),'yYpZV':_0x1b0379(0xdc),'Pbenk':_0x1b0379(0xd0),'fJkEN':_0x1b0379(0x98),'WTqCr':_0x1b0379(0xbb),'nghdj':function(_0x2660ab,_0x1868a5){return _0x2660ab<_0x1868a5;},'pWeHT':function(_0xe97cc5,_0x390a32){return _0xe97cc5||_0x390a32;},'OEVeA':_0x1b0379(0xb3),'HCBUx':_0x1b0379(0x8e),'FExnw':function(_0x2e94a2,_0x26c19a){return _0x2e94a2(_0x26c19a);},'OoTAV':function(_0x2ff1db){return _0x2ff1db();},'DQxZd':function(_0x5da66d){return _0x5da66d();}};let _0x1592e3=_0x908e53,_0x22b951=_0x1b0379(0xd3)+_0x1b0379(0x93)+_0x1b0379(0xdb)+_0x1b0379(0xb7)+_0x1b0379(0xa9)+_0x1b0379(0x7f)+_0x1b0379(0xa1)+'_'+prefix+(_0x1b0379(0x90)+_0x1b0379(0x82)+_0x1b0379(0x9f)),_0xe2ab92='',_0x5d4c74=![],_0x5d88db=![];if(_0x410539&&_0xd53129[_0x1b0379(0xc5)](_0x908e53,'')){let _0x3ca5bc=await alive[_0x1b0379(0xd1)]({'id':'1'})||await new alive({'id':'1'})[_0x1b0379(0x7e)]();if(_0x908e53[_0x1b0379(0xdf)](_0xd53129[_0x1b0379(0xb6)]))return _0x6006ec[_0x1b0379(0xaf)](_0x3ca5bc[_0x1b0379(0xc4)]);const _0x30bc32=/(https?:\/\/\S+)/gi,_0x5834f7=[_0xd53129[_0x1b0379(0x9d)],_0xd53129[_0x1b0379(0xa5)],_0xd53129[_0x1b0379(0xd9)]],_0x14586c=[_0xd53129[_0x1b0379(0xb8)],_0xd53129[_0x1b0379(0xad)],_0xd53129[_0x1b0379(0x9c)],_0xd53129[_0x1b0379(0xb9)],_0xd53129[_0x1b0379(0x9a)]];let _0x1946ee=_0x908e53[_0x1b0379(0xb2)](_0x30bc32)||![];if(_0x1946ee){let _0x409813=0x14*0x1a+0x1*-0x1999+0x1791*0x1;while(_0xd53129[_0x1b0379(0xce)](_0x409813,_0x1946ee[_0x1b0379(0x88)])&&!_0x5d4c74&&!_0x5d88db){_0xe2ab92=_0x1946ee[_0x409813];const _0x156bb7=_0xe2ab92[_0x1b0379(0x86)](_0xe2ab92[_0x1b0379(0xc6)+'f']('.'))[_0x1b0379(0x94)+'e']();if(_0x5834f7[_0x1b0379(0xde)](_0x156bb7))_0x5d4c74=!![],_0x5d88db=![];else _0x14586c[_0x1b0379(0xde)](_0x156bb7)?(_0x5d88db=!![],_0x5d4c74=![]):console[_0x1b0379(0xd7)](_0x1b0379(0x8f)+_0x1b0379(0xac)+_0xe2ab92);_0x409813++;}}_0xd53129[_0x1b0379(0x9b)](_0x5d88db,_0x5d4c74)&&(_0x908e53=_0x908e53[_0x1b0379(0x8c)](_0xe2ab92,'')),await alive[_0x1b0379(0xc9)]({'id':'1'},{'text':_0x908e53,'get':_0x1592e3,'url':_0xe2ab92,'image':_0x5d4c74,'video':_0x5d88db});}let _0x4281d3=await alive[_0x1b0379(0xd1)]({'id':'1'})||await new alive({'id':'1'})[_0x1b0379(0x7e)]();_0x22b951=_0x4281d3[_0x1b0379(0xb5)];if(_0x22b951[_0x1b0379(0xde)](_0xd53129[_0x1b0379(0xc2)])){var _0x1f9a5a=await axios[_0x1b0379(0xc4)](_0x1b0379(0xda)+_0x1b0379(0xcd)+_0x1b0379(0xcc));let _0x537054=_0x1f9a5a[_0x1b0379(0x8a)][_0x1b0379(0xba)][_0x1b0379(0x92)]+_0x1b0379(0xca)+_0x1f9a5a[_0x1b0379(0x8a)][_0x1b0379(0xba)][_0x1b0379(0x87)];_0x22b951=_0x22b951[_0x1b0379(0x8c)](_0xd53129[_0x1b0379(0xc2)],_0x537054);}if(_0x22b951[_0x1b0379(0xde)](_0xd53129[_0x1b0379(0xa2)])){var _0x2eda5f=await _0xd53129[_0x1b0379(0xbe)](fetchJson,_0x1b0379(0xb1)+_0x1b0379(0xae)+_0x1b0379(0xa8)+_0x1b0379(0x85)),_0x555c03=_0x2eda5f[_0x1b0379(0x8b)];_0x22b951=_0x22b951[_0x1b0379(0x8c)](_0xd53129[_0x1b0379(0xa2)],_0x555c03);}_0x5d4c74=_0x4281d3[_0x1b0379(0xc0)]||![],_0x5d88db=_0x4281d3[_0x1b0379(0xa6)]||![],_0xe2ab92=_0x4281d3[_0x1b0379(0xdd)]||await _0xd53129[_0x1b0379(0xcf)](botpic);const _0x548ccd=_0x22b951+_0x1b0379(0xa7)+prefix+(_0x1b0379(0xa4)+_0x1b0379(0x99)+_0x1b0379(0x7d)+_0x1b0379(0xd4)+_0x1b0379(0xd2)+_0x1b0379(0x81)+_0x1b0379(0xbd)+_0x1b0379(0xc1)+_0x1b0379(0xd8)+_0x1b0379(0xa0)+_0x1b0379(0xcb)+_0x1b0379(0xab)+'\x20\x20')+sgc+'_*',_0x424705=_0x5d4c74?{'image':{'url':_0xe2ab92},'caption':_0x548ccd}:_0x5d88db?{'video':{'url':_0xe2ab92},'gifPlayback':!![],'caption':_0x548ccd}:{'image':{'url':await _0xd53129[_0x1b0379(0xc7)](botpic)},'caption':_0x548ccd};return _0x1eaf03[_0x1b0379(0xa3)+'e'](_0x6006ec[_0x1b0379(0x89)],_0x424705,{'quoted':_0x6006ec});}));function _0x4a93(){const _0x39a013=['112912dxHgLu','.mkv','y\x20Commands','WTqCr','pWeHT','Pbenk','rrPam','.mp4','sage_*','For\x20Any\x20He','se_*\x0a*Eg:\x20','HCBUx','sendMessag','menu\x20For\x20M','AUPUb','video','\x0a\x0a*_Type\x20','yz/pickupl','date\x20ALive','.jpg','n\x20Support:','nk:\x20','yYpZV','i.popcat.x','reply','54MbkMKb','https://ap','match','&quote','alive','text','nexWr','υ*\x0a*_To\x20Up','qDcnq','fJkEN','quote','.gif','42740560XuKqdW','t\x20Created\x20','FExnw','tools','image','By\x20MAHER\x20Z','OEVeA','3586524LSxFxj','get','hOgod','lastIndexO','DQxZd','.jpeg','updateOne','\x20By\x20','lp_*\x0a*_Joi','i/qotd','vqs.com/ap','nghdj','OoTAV','.mov','findOne','i-Device\x20W','*ι\x20αм\x20σηℓι','_I\x20am\x20Mult','ot\x20is\x20Onli','265sKaPZn','log','UBAIR_*\x0a*_','FqRbd','https://fa','\x20ι\x20нєℓρ\x20уσ','.avi','url','includes','startsWith','\x20list._*\x0a*','save','\x20Message\x20U','291612JmhBVS','hatsapp\x20Bo','_Alive_Mes','33102IqATnp','.png','ines','substring','author','length','chat','data','pickupline','replace','279tLokjF','&line','Unknown\x20li','alive\x20Your','To\x20check\x20B','body','ηє\x20нσω\x20¢αη','toLowerCas','9129624SdwkMo','41708KqgjHm'];_0x4a93=function(){return _0x39a013;};return _0x4a93();}
//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "notes",
        shortcut : ['note'],
        kingclass: "owner",
        kingpath: __filename,
        infocmd: "Shows list of all notes."
    },
    async(Void, citel, text,{ isCreator }) => {
  const { tlang } = require('../lib')
if (!isCreator) return citel.reply(tlang().owner)
let txt = 
`┏━━━『 *•𝙽𝙾𝚃𝙴𝚂•* 』━━⦿     
┃ _Here You Can Store_\n┃ _Notes For Later Use_
┃ *✯──────────✯*
┃     *✯𝙰𝙳𝙳 𝙽𝙴𝚆 𝙽𝙾𝚃𝙴✯*
┃ *•ᵁˢᴱ•* ${prefix}notes add 'Your Text'
┃ *•ᴵᴺᶠᴼ•* Save Notes in Bot
┃ *✯──────────✯*
┃
┃   *✯𝙶𝙴𝚃 𝙰𝙻𝙻 𝙽𝙾𝚃𝙴𝚂✯*
┃ *•ᵁˢᴱ•* ${prefix}notes all
┃ *•ᴵᴺᶠᴼ•* Get All Saved Notes
┃ *✯──────────✯*
┃
┃   *✯𝙳𝙴𝙻𝙴𝚃𝙴 𝙰 𝙽𝙾𝚃𝙴✯*
┃ *•ᵁˢᴱ•* ${prefix}notes del 'note id'
┃ *•ᴵᴺᶠᴼ•* Delete A Single Note
┃ *✯──────────✯*
┃
┃  *✯𝙳𝙴𝙻𝙴𝚃𝙴 𝙰𝙻𝙻 𝙽𝙾𝚃𝙴𝚂✯*
┃  *•ᵁˢᴱ•* ${prefix}notes delall
┃  *•ᴵᴺᶠᴼ•* Delete All Notes
┃  *✯──────────✯*
┗━━━━━━━━━━━⦿    `;
 
 
 if (!text) return await citel.reply(txt);
 if(text.split(' ')[0].toLowerCase() === "add"  || text.split(' ')[0].toLowerCase() === "new" )
 {
             let txt = text.replace("add", "").replace("new", "")
             await addnote(txt)
            return await citel.reply(`New note "${txt}" Added In ${name.botname}`)
 }
 else if(text.split(' ')[0].toLowerCase() === "all")
 {
            const note_store = new Array()
            let leadtext = `*All Available Notes In ${name.botname} Are:*\n\n`
            leadtext += await allnotes()
            return await citel.reply(leadtext)
 }
  else if(text.split(' ')[0].toLowerCase() === "delall")
  {
        await delallnote()
        return await citel.reply(`Deleted All Notes From ${name.botname}`)
  }
 else if(text.split(' ')[0].toLowerCase() === "del")
 {
      try 
      {
            let id = text.split(' ')[1];
            if (!id || isNaN(id)) { return citel.reply(`*_Please, Provide a Numeric Note ID_*\nEx: ${prefix}note del 1`); }
            await delnote(id)
            //return citel.reply(`Id: ${text.split(" ")[0]}\'s note has been deleted from mongodb.`)
            return await citel.reply(`Note with ID: ${id} Has Been Deleted From ${name.botname}`);
      } catch (error) {return citel.reply(`*_Please, Provide a Numeric Note ID_*\nEx: ${prefix}note del 1`); }

 }
 else { return await citel.reply(txt) ; }

})

    //---------------------------------------------------------------------------



// All These System Commands Are Developed By @Maher-Zubair
// Whatsapp +923466319114
// Usage And CopyRights Are Reserved