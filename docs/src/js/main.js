const a0_0x13985f=a0_0xf313;(function(_0x25a6ae,_0xf79a4d){const _0xb25e6a=a0_0xf313,_0x426379=_0x25a6ae();while(!![]){try{const _0x5e455a=parseInt(_0xb25e6a(0x1a0))/0x1*(parseInt(_0xb25e6a(0x177))/0x2)+-parseInt(_0xb25e6a(0x1c2))/0x3+parseInt(_0xb25e6a(0x1c7))/0x4+-parseInt(_0xb25e6a(0x1b8))/0x5+-parseInt(_0xb25e6a(0x179))/0x6*(-parseInt(_0xb25e6a(0x1c9))/0x7)+parseInt(_0xb25e6a(0x195))/0x8+parseInt(_0xb25e6a(0x16a))/0x9;if(_0x5e455a===_0xf79a4d)break;else _0x426379['push'](_0x426379['shift']());}catch(_0x55de42){_0x426379['push'](_0x426379['shift']());}}}(a0_0x497e,0x9aab0));import a0_0x46ff87 from'../core/mgba.js';import*as a0_0x2f41b2 from'./gamepad.js';import{localStorageFile}from'./storage.js';import{dpUploadFile}from'./cloud.js';import{shaderData}from'./setting.js';import{wrapContent}from'./state.js';const Module={'canvas':document[a0_0x13985f(0x15d)]('canvas')};function initializeCore(_0x5748a8,_0x4db897){const _0x23460b=a0_0x13985f;_0x5748a8(_0x4db897)[_0x23460b(0x163)](function(_0xef45fe){const _0x352bcc=_0x23460b;_0xef45fe[_0x352bcc(0x1ae)]();});}initializeCore(a0_0x46ff87,Module);let countAutoSave=0x0,countUpload=0x0;const canvas=document['getElementById'](a0_0x13985f(0x192)),controlSetting=document[a0_0x13985f(0x15d)]('control-setting');function handleVisibilityChange(_0x40bfa3){const _0x22ea03=a0_0x13985f;document[_0x22ea03(0x165)]===_0x22ea03(0x1a8)||_0x40bfa3?.[_0x22ea03(0x168)]==='beforeunload'||_0x40bfa3?.[_0x22ea03(0x1a3)]?(Module[_0x22ea03(0x1b5)](),pauseGame(),canvas['classList'][_0x22ea03(0x175)](_0x22ea03(0x1c3))):(setTimeout(()=>{const _0x138d03=_0x22ea03;canvas['classList']['remove'](_0x138d03(0x1c3));},0x258),controlSetting['classList'][_0x22ea03(0x17a)](_0x22ea03(0x1c3))&&resumeGame());}async function statusShow(){const _0x1d73c9=a0_0x13985f;document['addEventListener'](_0x1d73c9(0x1a4),handleVisibilityChange),document[_0x1d73c9(0x1bc)](_0x1d73c9(0x1b6),handleVisibilityChange),window[_0x1d73c9(0x1bc)](_0x1d73c9(0x170),handleVisibilityChange),restoreArea(),startTimer(),await a0_0x2f41b2['turboF'](parseInt(await getData(gameName,'0',_0x1d73c9(0x18a)))),await delay(0xc8),await Module[_0x1d73c9(0x196)](),await delay(0x320),await led(parseInt(await getData(gameName,'0',_0x1d73c9(0x1a2)))),await notiMessage(gameVer,0x3e8),await wrapContent();}async function saveStatePeriodically(){const _0x2b4f9c=a0_0x13985f;await ledSave(_0x2b4f9c(0x1b4)),await Module[_0x2b4f9c(0x1ad)](0x0),await Module['FSSync'](),await screenShot(0x0),console[_0x2b4f9c(0x19b)]('Auto\x20save\x20'+ ++countAutoSave+_0x2b4f9c(0x1aa));}async function saveStateInCloud(){const _0x34a9a6=a0_0x13985f,_0x3e3489=gameName[_0x34a9a6(0x187)](/\.(zip|gb|gbc|gba)$/,'.ss0'),_0x5c8f60=localStorage[_0x34a9a6(0x1c4)](_0x34a9a6(0x15c));navigator['onLine']&&(_0x5c8f60&&(await ledSave(_0x34a9a6(0x183)),await delay(0x3e8),await dpUploadFile(_0x3e3489,Module['downloadFile'](_0x34a9a6(0x16d)+_0x3e3489),_0x34a9a6(0x1a1)),await lockNoti('',_0x34a9a6(0x181)+ ++countUpload+'\x20time(s)',0x7d0)));}function startTimer(){let [_0x2d98b4,_0x500f8d,_0x388fbb,_0x347091,_0x4d76b3]=[0x0,0x0,0x0,0x0,0x0];setInterval(()=>{const _0x210c4b=a0_0xf313;_0x388fbb++,_0x347091++,_0x4d76b3++;if(_0x388fbb===0x3c)[_0x388fbb,_0x500f8d]=[0x0,_0x500f8d+0x1];if(_0x500f8d===0x3c)[_0x500f8d,_0x2d98b4]=[0x0,_0x2d98b4+0x1];document[_0x210c4b(0x15d)]('timer')[_0x210c4b(0x198)]=_0x2d98b4+'h'+_0x500f8d[_0x210c4b(0x182)]()[_0x210c4b(0x1c1)](0x2,'0')+'.'+_0x388fbb[_0x210c4b(0x182)]()[_0x210c4b(0x1c1)](0x2,'0');_0x347091===0x3c&&(saveStatePeriodically(),_0x347091=0x0);;_0x4d76b3===0x708&&(saveStateInCloud(),_0x4d76b3=0x0);;},0x3e8);}export async function uploadGame(_0x1c94fd){const _0x4e1a00=a0_0x13985f,_0x59a3ec=_0x1c94fd[_0x4e1a00(0x1be)][0x0];Module[_0x4e1a00(0x1af)](_0x59a3ec,()=>{Module['FSSync']();});}export async function loadGame(_0x3d7411){const _0x298df0=a0_0x13985f,_0x270b51=_0x3d7411[_0x298df0(0x187)](/\.(gba|gbc|gb|zip)$/,_0x298df0(0x162)),_0x1f85fc=Module[_0x298df0(0x189)]()[_0x298df0(0x178)](_0x550020=>_0x550020!=='.'&&_0x550020!=='..');intro[_0x298df0(0x1bb)][_0x298df0(0x175)](_0x298df0(0x167)),errorLogElements[0x0][_0x298df0(0x18f)][_0x298df0(0x15f)]='0',ingame[_0x298df0(0x1bb)][_0x298df0(0x186)](_0x298df0(0x167)),_0x3d7411[_0x298df0(0x164)](_0x298df0(0x19d))||_0x3d7411[_0x298df0(0x164)]('.gb')?(canvas[_0x298df0(0x1bb)]['add'](_0x298df0(0x17b)),areaTrans[_0x298df0(0x1bb)][_0x298df0(0x175)](_0x298df0(0x1b0)),localStorage[_0x298df0(0x18d)]('screenSize',_0x298df0(0x1c8)+(window[_0x298df0(0x16b)]-0xe6)+','+(window[_0x298df0(0x16b)]-0xe6)*0x9/0xa)):localStorage['setItem'](_0x298df0(0x1bf),'0,0,'+(window['innerWidth']-0x96)+','+(window[_0x298df0(0x16b)]-0x96)*0x2/0x3),_0x1f85fc[_0x298df0(0x16f)](_0x270b51)?(await Module['loadGame'](_0x298df0(0x15b)+_0x3d7411),confirm(_0x298df0(0x172))&&(await Module[_0x298df0(0x1b7)](0x0),await shaderData())):(await Module['loadGame'](_0x298df0(0x15b)+gameName),await shaderData()),await statusShow();}export async function saveState(_0x54b303){await Module['saveState'](_0x54b303);}export async function loadState(_0x4d7397){await Module['loadState'](_0x4d7397);}export async function downloadFile(_0x40178c,_0x1761c8){const _0x2ea123=a0_0x13985f,_0x21b6e0=Module[_0x2ea123(0x1c6)](_0x40178c),_0x1a35dc=document[_0x2ea123(0x185)]('a');document[_0x2ea123(0x16e)][_0x2ea123(0x173)](_0x1a35dc),_0x1a35dc['download']=_0x1761c8;const _0x1dd04b=new Blob([_0x21b6e0],{'type':_0x2ea123(0x157)});_0x1a35dc[_0x2ea123(0x18b)]=URL[_0x2ea123(0x1a7)](_0x1dd04b),_0x1a35dc['click'](),URL[_0x2ea123(0x1b2)](_0x1dd04b),_0x1a35dc[_0x2ea123(0x186)]();}export function downloadFileInCloud(_0x3c9bae){const _0x4f8482=a0_0x13985f;try{const _0x3c0bcd=Module[_0x4f8482(0x1c6)](_0x3c9bae);return _0x3c0bcd;}catch(_0x19aff1){return null;}}export async function uploadFileInCloud(_0x5de6e5){const _0x472053=a0_0x13985f;Module[_0x472053(0x193)](_0x5de6e5,async()=>{const _0x252d9a=_0x472053;localStorageFile(),await Module[_0x252d9a(0x1b5)]();});}export async function uploadFile(_0x359589){const _0x4c8ca0=_0x359589['files'][0x0];Module['uploadAll'](_0x4c8ca0,async()=>{localStorageFile(),await Module['FSSync']();});}export async function editFile(_0x5a11e6,_0x19002c,_0x51bcee){await Module['editFileName'](_0x5a11e6,_0x19002c,_0x51bcee);}export async function deleteFile(_0x120f9c){const _0x45420c=a0_0x13985f;try{return await Module[_0x45420c(0x1c0)](_0x120f9c),!![];}catch(_0x331280){return console[_0x45420c(0x1b3)](_0x120f9c),null;}}export function listGame(){const _0x6b7ae5=a0_0x13985f,_0x38de80=Module[_0x6b7ae5(0x184)]()[_0x6b7ae5(0x178)](_0x106c00=>_0x106c00!=='.'&&_0x106c00!=='..');return _0x38de80;}export function listSave(){const _0x255803=a0_0x13985f,_0x47413e=Module['listSaves']()[_0x255803(0x178)](_0xb98651=>_0xb98651!=='.'&&_0xb98651!=='..');return _0x47413e;}export function listState(){const _0x1f37e6=a0_0x13985f,_0x5eecb5=Module['listStates']()[_0x1f37e6(0x178)](_0x3717ed=>_0x3717ed!=='.'&&_0x3717ed!=='..');return _0x5eecb5;}export function listCheat(){const _0x30b4ac=a0_0x13985f,_0xe346ea=Module[_0x30b4ac(0x180)]()[_0x30b4ac(0x178)](_0x41303=>_0x41303!=='.'&&_0x41303!=='..');return _0xe346ea;}export function listScreenshot(){const _0x2ecb73=a0_0x13985f,_0x475261=Module[_0x2ecb73(0x16c)]()['filter'](_0x1540ad=>_0x1540ad!=='.'&&_0x1540ad!=='..');return _0x475261;}export function fileSize(_0x253b45){const _0x53b948=Module['fileSize'](_0x253b45);return _0x53b948;}function a0_0xf313(_0x5c8e16,_0x1120c8){const _0x497e2b=a0_0x497e();return a0_0xf313=function(_0xf31332,_0x53e683){_0xf31332=_0xf31332-0x156;let _0x3789d8=_0x497e2b[_0xf31332];return _0x3789d8;},a0_0xf313(_0x5c8e16,_0x1120c8);}export async function resumeGame(){const _0x156ad5=a0_0x13985f;Module[_0x156ad5(0x19e)](),Module[_0x156ad5(0x196)](),notiMessage(_0x156ad5(0x15a),0x7d0);}export async function pauseGame(){const _0x210648=a0_0x13985f;Module['pauseGame'](),Module['SDL2'](),notiMessage(_0x210648(0x160),0x7d0);}export async function buttonPress(_0x4e3052){const _0xff3438=a0_0x13985f;Module[_0xff3438(0x1ab)](_0x4e3052);}export async function buttonUnpress(_0x743d3f){const _0xbf454e=a0_0x13985f;Module[_0xbf454e(0x1b1)](_0x743d3f);}export async function screenShot(_0x29cfb5){const _0x52d50a=a0_0x13985f,_0x28cd15=gameName[_0x52d50a(0x187)](/\.(gba|gbc|gb|zip)$/,'_'+_0x29cfb5+_0x52d50a(0x171)),_0x37f2ae=await getData(gameName,_0x29cfb5,_0x52d50a(0x15e))||'';console[_0x52d50a(0x19b)](_0x37f2ae),await Module['screenshot'](_0x28cd15),await setData(gameName,_0x29cfb5,'saveTime',formatDateTime(Date['now']()),_0x37f2ae);}export async function dowloadScreenShot(_0x52154d){try{const _0x41540d=await fileToBase64(Module['downloadFile'](_0x52154d));return _0x41540d;}catch{}}export async function captureOCR(_0x17b9e8){const _0x5d3fe=a0_0x13985f;Module[_0x5d3fe(0x197)](_0x17b9e8);const _0x4a4db8=Module['downloadFile'](_0x5d3fe(0x19f)+_0x17b9e8);return _0x4a4db8;}export async function setFastForwardMultiplier(_0x3f3089){const _0x53182e=a0_0x13985f;Module[_0x53182e(0x156)](_0x3f3089);}export async function uploadCheats(_0x21f8e6){const _0x524cb2=a0_0x13985f;Module[_0x524cb2(0x1a5)](),Module[_0x524cb2(0x193)](_0x21f8e6,async()=>{});}export function setVolume(_0x28a505){const _0x28053a=a0_0x13985f;Module[_0x28053a(0x190)](_0x28a505);}export async function setData(_0x56b18a,_0x460445,_0x295684,_0x3f07fb,_0x2bab7e=''){const _0x55be80=a0_0x13985f,_0xe4493d=_0x56b18a[_0x55be80(0x187)](/\.(gba|gbc|gb|zip|cheats)$/,''),_0xb595fe=_0x55be80(0x19f)+_0xe4493d+'_'+_0x460445+_0x55be80(0x171);let _0x1038ba;try{_0x1038ba=await fileToBase64(Module[_0x55be80(0x1c6)](_0xb595fe));}catch(_0x40d88b){await Module[_0x55be80(0x197)](_0xe4493d+'_'+_0x460445+_0x55be80(0x171)),await delay(0xc8),_0x1038ba=await fileToBase64(Module[_0x55be80(0x1c6)](_0xb595fe));}let _0x259fdb=atob(_0x1038ba[_0x55be80(0x1b9)](',')[0x1]),_0x253379=_0x55be80(0x18c),_0x71a2c4=_0x259fdb['indexOf'](_0x253379),_0x4ae37b={};if(_0x71a2c4!==-0x1||_0x2bab7e['trim']()!==''){let _0x3b9b34=_0x71a2c4!==-0x1?_0x259fdb[_0x55be80(0x1ac)](_0x71a2c4+_0x253379[_0x55be80(0x1ba)]):_0x2bab7e,_0x51e74c=/(\w+)\s*:\s*([^|]*)/g,_0x4d9c6f;while((_0x4d9c6f=_0x51e74c['exec'](_0x3b9b34))!==null){_0x4ae37b[_0x4d9c6f[0x1]['trim']()]=_0x4d9c6f[0x2][_0x55be80(0x161)]();}_0x71a2c4!==-0x1&&(_0x259fdb=_0x259fdb[_0x55be80(0x1ac)](0x0,_0x71a2c4));}_0x4ae37b[_0x295684]=_0x3f07fb;let _0xf3ed7a=Object[_0x55be80(0x17f)](_0x4ae37b)['map'](([_0x2e55da,_0x1e1082])=>_0x2e55da+_0x55be80(0x19c)+_0x1e1082)[_0x55be80(0x176)](_0x55be80(0x17c)),_0x8cc526=new TextEncoder()[_0x55be80(0x174)](_0x253379+'\x20'+_0xf3ed7a),_0x2ae718=new Uint8Array([..._0x259fdb]['map'](_0x532adf=>_0x532adf[_0x55be80(0x17d)](0x0))[_0x55be80(0x1bd)]([..._0x8cc526])),_0x174766=new File([new Blob([_0x2ae718],{'type':'image/png'})],_0xe4493d+'_'+_0x460445+_0x55be80(0x171),{'type':'image/png'});Module['uploadAll'](_0x174766,async()=>{});}export async function getData(_0x3a5a4f,_0xe02203,_0xcb3756){const _0x1c1072=a0_0x13985f;try{const _0x4c692b=_0x3a5a4f[_0x1c1072(0x187)](/\.(gba|gbc|gb|zip|cheats)$/,''),_0x28c3cc=_0x1c1072(0x19f)+_0x4c692b+'_'+_0xe02203+_0x1c1072(0x171);let _0x4865ff;try{_0x4865ff=await fileToBase64(Module[_0x1c1072(0x1c6)](_0x28c3cc));}catch(_0x12ce43){return null;}let _0x13e00b=atob(_0x4865ff[_0x1c1072(0x1b9)](',')[0x1]),_0x5da91e=_0x1c1072(0x18c),_0x3f8ebe=_0x13e00b[_0x1c1072(0x158)](_0x5da91e);if(_0x3f8ebe!==-0x1){let _0x5d58c4=_0x13e00b['substring'](_0x3f8ebe+_0x5da91e['length']);if(_0xcb3756===_0x1c1072(0x15e))return _0x5d58c4[_0x1c1072(0x161)]();let _0xfbc8be=new RegExp(_0xcb3756+_0x1c1072(0x18e)),_0x2f8a88=_0x5d58c4[_0x1c1072(0x191)](_0xfbc8be);if(_0x2f8a88)return _0x2f8a88[0x1][_0x1c1072(0x161)]();}}catch(_0x4e0d0b){return console['error']({'romName':_0x3a5a4f,'slot':_0xe02203,'type':_0xcb3756}),null;}}export async function ledSave(_0x2e04ed){const _0x1e3c04=a0_0x13985f,_0x5b6835=parseInt(await getData(gameName,'0',_0x1e3c04(0x1a2))),_0x54e04a=_0x5b6835===0x1?'led01':_0x5b6835===0x2?'led02':_0x5b6835===0x3?_0x1e3c04(0x1c5):_0x5b6835===0x4?_0x1e3c04(0x188):_0x5b6835===0x5?_0x1e3c04(0x199):_0x5b6835===0x6?_0x1e3c04(0x169):_0x5b6835===0x7?'led07':_0x1e3c04(0x1a6);try{for(let _0x3cbe71=0x0;_0x3cbe71<=0x7;_0x3cbe71++){document[_0x1e3c04(0x15d)](_0x1e3c04(0x194)+_0x3cbe71)['style'][_0x1e3c04(0x17e)]='rgba(245,\x20232,\x20209,\x200.4)';}await delay(0x3e8);for(let _0x333bbe=0x0;_0x333bbe<=0x7;_0x333bbe++){document['getElementById'](_0x1e3c04(0x194)+_0x333bbe)[_0x1e3c04(0x18f)][_0x1e3c04(0x17e)]=_0x1e3c04(0x19a);}document[_0x1e3c04(0x15d)](_0x54e04a)[_0x1e3c04(0x18f)]['fill']=_0x2e04ed;}catch(_0x3ecda7){console[_0x1e3c04(0x1b3)](_0x1e3c04(0x159),_0x3ecda7);}};export async function notiMessage(_0x576325,_0x4045ea,_0x20fd18=![]){const _0xb7d5b2=a0_0x13985f;var _0x212090=document['getElementById']('noti-mess');const _0xc9d6e7=parseInt(await getData(gameName,'0','slotStateSaved'))||0x0;_0x212090[_0xb7d5b2(0x18f)][_0xb7d5b2(0x166)]===_0xb7d5b2(0x1a9)&&(clearTimeout(messageTimeout),_0x212090[_0xb7d5b2(0x18f)][_0xb7d5b2(0x166)]='0'),_0x212090[_0xb7d5b2(0x198)]=_0x576325,_0x212090['style'][_0xb7d5b2(0x166)]=_0xb7d5b2(0x1a9),messageTimeout=setTimeout(()=>{const _0x2bf96b=_0xb7d5b2;_0x212090[_0x2bf96b(0x198)]='['+_0xc9d6e7+']\x20'+gameName['substring'](0x0,gameName['lastIndexOf']('.')),_0x212090[_0x2bf96b(0x18f)][_0x2bf96b(0x166)]=_0x2bf96b(0x1a9);},_0x4045ea),_0x20fd18&&(canvas[_0xb7d5b2(0x1bb)][_0xb7d5b2(0x175)](_0xb7d5b2(0x1c3)),setTimeout(()=>{const _0x4b8426=_0xb7d5b2;canvas['classList'][_0x4b8426(0x186)](_0x4b8426(0x1c3));},0x258));}function a0_0x497e(){const _0x2e2ec1=['saveState','FSInit','uploadRom','gbc1','buttonUnpress','revokeObjectURL','error','#20A5A6','FSSync','visibilitychange','loadState','4183955cOcXlJ','split','length','classList','addEventListener','concat','files','screenSize','deleteFile','padStart','373050EAaETG','visible','getItem','led03','downloadFile','690864ziNZyI','0,0,','29603fXoilu','setFastForwardMultiplier','application/octet-stream','indexOf','Error\x20ledSave:','Resumed!','/data/games/','uId','getElementById','All','bottom','Paused!','trim','.ss0','then','endsWith','visibilityState','opacity','disable','type','led06','5625378KIDQmM','innerWidth','listScreenshots','/data/states/','body','includes','beforeunload','.png','Do\x20you\x20want\x20to\x20load\x20save\x20state?','appendChild','encode','add','join','270148CGZwmU','filter','678dAkPug','contains','gbc','\x20|\x20','charCodeAt','fill','entries','listCheats','Cloud\x20upload\x20','toString','#E0C068','listRoms','createElement','remove','replace','led04','listStates','turboState','href','tEXtComment\x00','setItem','\x5cs*:\x5cs*(.*?)\x5cs*(?=\x5c||$)','style','setVolume','match','canvas','uploadAll','led0','1471616pDaTNf','SDL2','screenshot','textContent','led05','rgba(245,\x20232,\x20209,\x200.4)','log','\x20:\x20','.gbc','resumeGame','/data/screenshots/','1ttCAaI','state','slotStateSaved','persisted','pagehide','autoLoadCheats','led00','createObjectURL','hidden','0.4','\x20time(s)','buttonPress','substring'];a0_0x497e=function(){return _0x2e2ec1;};return a0_0x497e();}export async function FSSync(){const _0x2241f9=a0_0x13985f;Module[_0x2241f9(0x1b5)]();}