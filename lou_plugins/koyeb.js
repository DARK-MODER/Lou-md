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
 


/**const axios = require('axios');
const { tlang,cmd } = require('../lib')
const { redeploy , getvar , delvar , getallvar , change_env , get_deployments} = require('../lib/koyeb')

//----------------------------------------------------------------------------------------------------------------------------------------------------
cmd(
  {
    pattern: "updatenow",
    desc: "update bot with refreshed commit.",
    filename: __filename,
    category: "misc",
  },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().owner);
       let check = await get_deployments()
       if(check==='true') return citel.reply('_Please wait..._\n_Currently 2 instances are running in Koyeb,wait to stop one of them._')
       let data = await redeploy();
       return citel.reply(data)
  })
//----------------------------------------------------------------------------------------------------------------------------------------------------
cmd(
  {
    pattern: "koyebgetvar",
    desc: "get desired var from koyeb.",
    filename: __filename,
    category: "misc",
  },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().owner);
       if(!text) return citel.reply('Please provide key.\n_Eg: .getvar PORT_')
       let data = await getvar(text);
       return citel.reply(data)
  })
//----------------------------------------------------------------------------------------------------------------------------------------------------
cmd(
  {
    pattern: "getallvar",
    desc: "get all vars from koyeb.",
    filename: __filename,
    category: "misc",
  },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().owner);
       let data = await getallvar();
       return citel.reply(data)
  })
//----------------------------------------------------------------------------------------------------------------------------------------------------
cmd(
  {
    pattern: "koyebsetvar",
    desc: "set var in koyeb.",
    filename: __filename,
    category: "misc",
  },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().owner);
       if(!text.split(':')[1]) return citel.reply('*Wrong Format.*\nPlease provide key and value.\n_Eg: .setvar THEME:SECKTOR_')
       let check = await get_deployments()
       if(check==='true') return citel.reply('_Please wait..._\n_Currently 2 instances are running in Koyeb,wait to stop one of them._')
       let data = await change_env(text)
       return citel.reply(data)
  })

//----------------------------------------------------------------------------------------------------------------------------------------------------
cmd(
  {
    pattern: "koyebdelvar",
    desc: "delete var from koyeb.",
    filename: __filename,
    category: "misc",
  },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().owner);
       if(!text) return citel.reply('Please provide key.\n_Eg: .delvar PORT_')
       let check = await get_deployments()
       if(check==='true') return citel.reply('_Please wait..._\n_Currently 2 instances are running in Koyeb,wait to stop one of them._')
       let data = await delvar(text)
       return citel.reply(data)
  })
**/
