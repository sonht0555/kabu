const a0_0x177b53=a0_0x4e4a;(function(_0x38df5d,_0x3f91f8){const _0x4e9766=a0_0x4e4a,_0xcbcb99=_0x38df5d();while(!![]){try{const _0x26e1c0=-parseInt(_0x4e9766(0x151))/0x1*(-parseInt(_0x4e9766(0x155))/0x2)+-parseInt(_0x4e9766(0x15b))/0x3+parseInt(_0x4e9766(0x148))/0x4+parseInt(_0x4e9766(0xf4))/0x5+parseInt(_0x4e9766(0xfc))/0x6*(parseInt(_0x4e9766(0x11f))/0x7)+-parseInt(_0x4e9766(0x164))/0x8+-parseInt(_0x4e9766(0x13b))/0x9*(-parseInt(_0x4e9766(0x161))/0xa);if(_0x26e1c0===_0x3f91f8)break;else _0xcbcb99['push'](_0xcbcb99['shift']());}catch(_0x25e911){_0xcbcb99['push'](_0xcbcb99['shift']());}}}(a0_0x3d85,0x95e89));import a0_0x41972c from'../core/mgba.js';import*as a0_0x4612c9 from'./gamepad.js';import{localStorageFile}from'./storage.js';import{dpUploadFile}from'./cloud.js';import{shaderData}from'./setting.js';import{wrapContent}from'./state.js';const Module={'canvas':document[a0_0x177b53(0x132)](a0_0x177b53(0x144))};function initializeCore(_0x48c510,_0x5d2ffb){const _0x23cba8=a0_0x177b53;_0x48c510(_0x5d2ffb)[_0x23cba8(0x138)](function(_0x4055ea){const _0x3b2c02=_0x23cba8;_0x4055ea[_0x3b2c02(0x121)]();});}initializeCore(a0_0x41972c,Module);let countAutoSave=0x0,countUpload=0x0;const canvas=document[a0_0x177b53(0x132)]('canvas'),controlSetting=document[a0_0x177b53(0x132)]('control-setting');function handleVisibilityChange(_0x2e6394){const _0x2fe9b3=a0_0x177b53;document[_0x2fe9b3(0xf7)]===_0x2fe9b3(0x137)||_0x2e6394?.[_0x2fe9b3(0x156)]===_0x2fe9b3(0x134)||_0x2e6394?.[_0x2fe9b3(0x140)]?(Module[_0x2fe9b3(0xfb)](),pauseGame(),canvas[_0x2fe9b3(0x12c)][_0x2fe9b3(0x111)](_0x2fe9b3(0x124))):(setTimeout(()=>{const _0x5cb547=_0x2fe9b3;canvas['classList'][_0x5cb547(0x143)](_0x5cb547(0x124));},0x258),controlSetting[_0x2fe9b3(0x12c)]['contains'](_0x2fe9b3(0x124))&&resumeGame());}async function statusShow(){const _0x4e50f5=a0_0x177b53;document[_0x4e50f5(0x113)](_0x4e50f5(0x149),handleVisibilityChange),document['addEventListener'](_0x4e50f5(0x104),handleVisibilityChange),window['addEventListener'](_0x4e50f5(0x134),handleVisibilityChange),restoreArea(),startTimer(),await a0_0x4612c9['turboF'](parseInt(await getData(gameName,'0','turboState'))),await delay(0xc8),await Module[_0x4e50f5(0x105)](),await delay(0x320),await led(parseInt(await getData(gameName,'0',_0x4e50f5(0x102)))),await notiMessage(gameVer,0x3e8),await wrapContent();}async function saveStatePeriodically(){const _0xb7a0f4=a0_0x177b53;await ledSave(_0xb7a0f4(0x120)),await Module[_0xb7a0f4(0x139)](0x0),await Module[_0xb7a0f4(0xfb)](),await screenShot(0x0),console[_0xb7a0f4(0x10b)](_0xb7a0f4(0x115)+ ++countAutoSave+_0xb7a0f4(0x122));}async function saveStateInCloud(){const _0x2ca6f0=a0_0x177b53,_0x18873a=gameName[_0x2ca6f0(0x162)](/\.(zip|gb|gbc|gba)$/,_0x2ca6f0(0x15d)),_0x4f891a=localStorage[_0x2ca6f0(0x114)](_0x2ca6f0(0xfa));navigator['onLine']&&(_0x4f891a&&(await ledSave(_0x2ca6f0(0x101)),await delay(0x3e8),await dpUploadFile(_0x18873a,Module[_0x2ca6f0(0xf9)](_0x2ca6f0(0x159)+_0x18873a),_0x2ca6f0(0x133)),await lockNoti('',_0x2ca6f0(0xfd)+ ++countUpload+_0x2ca6f0(0x122),0x7d0)));}function startTimer(){let [_0x44fb68,_0x45f4cd,_0x86f827,_0x17b26b,_0x27666c]=[0x0,0x0,0x0,0x0,0x0];setInterval(()=>{const _0x2a49bf=a0_0x4e4a;_0x86f827++,_0x17b26b++,_0x27666c++;if(_0x86f827===0x3c)[_0x86f827,_0x45f4cd]=[0x0,_0x45f4cd+0x1];if(_0x45f4cd===0x3c)[_0x45f4cd,_0x44fb68]=[0x0,_0x44fb68+0x1];document[_0x2a49bf(0x132)](_0x2a49bf(0xec))['textContent']=_0x44fb68+'h'+_0x45f4cd['toString']()['padStart'](0x2,'0')+'.'+_0x86f827[_0x2a49bf(0xf1)]()[_0x2a49bf(0x108)](0x2,'0');_0x17b26b===0x3c&&(saveStatePeriodically(),_0x17b26b=0x0);;_0x27666c===0x708&&(saveStateInCloud(),_0x27666c=0x0);;},0x3e8);}export async function uploadGame(_0x1ef8f9){const _0xe5de76=a0_0x177b53,_0x43fc72=_0x1ef8f9['files'][0x0];Module[_0xe5de76(0x12d)](_0x43fc72,()=>{Module['FSSync']();});}export async function loadGame(_0x455b68){const _0x1a8ce1=a0_0x177b53,_0x56385e=_0x455b68['replace'](/\.(gba|gbc|gb|zip)$/,'.ss0'),_0x35d95e=Module[_0x1a8ce1(0xed)]()[_0x1a8ce1(0x13d)](_0x811937=>_0x811937!=='.'&&_0x811937!=='..');intro[_0x1a8ce1(0x12c)][_0x1a8ce1(0x111)](_0x1a8ce1(0xf0)),errorLogElements[0x0][_0x1a8ce1(0x128)]['bottom']='0',ingame[_0x1a8ce1(0x12c)][_0x1a8ce1(0x143)]('disable'),_0x455b68[_0x1a8ce1(0x125)](_0x1a8ce1(0x146))||_0x455b68['endsWith']('.gb')?(canvas[_0x1a8ce1(0x12c)][_0x1a8ce1(0x111)](_0x1a8ce1(0xee)),areaTrans[_0x1a8ce1(0x12c)][_0x1a8ce1(0x111)](_0x1a8ce1(0x11d)),localStorage[_0x1a8ce1(0x14e)](_0x1a8ce1(0x11c),_0x1a8ce1(0x15a)+(window[_0x1a8ce1(0x127)]-0xe6)+','+(window[_0x1a8ce1(0x127)]-0xe6)*0x9/0xa)):localStorage[_0x1a8ce1(0x14e)](_0x1a8ce1(0x11c),_0x1a8ce1(0x15a)+(window['innerWidth']-0x96)+','+(window[_0x1a8ce1(0x127)]-0x96)*0x2/0x3),_0x35d95e[_0x1a8ce1(0x13e)](_0x56385e)?(await Module['loadGame']('/data/games/'+_0x455b68),confirm(_0x1a8ce1(0x15e))&&(await Module[_0x1a8ce1(0x141)](0x0),await shaderData())):(await Module[_0x1a8ce1(0xff)](_0x1a8ce1(0x10c)+gameName),await shaderData()),await statusShow();}export async function saveState(_0x4cd089){const _0x541dcb=a0_0x177b53;await Module[_0x541dcb(0x139)](_0x4cd089);}export async function loadState(_0x5c232d){await Module['loadState'](_0x5c232d);}export async function downloadFile(_0x2002b0,_0x3e158d){const _0x1a66a8=a0_0x177b53,_0x108fe4=Module['downloadFile'](_0x2002b0),_0x57c6f1=document[_0x1a66a8(0x14f)]('a');document[_0x1a66a8(0x116)]['appendChild'](_0x57c6f1),_0x57c6f1['download']=_0x3e158d;const _0x24611=new Blob([_0x108fe4],{'type':'application/octet-stream'});_0x57c6f1[_0x1a66a8(0x11b)]=URL['createObjectURL'](_0x24611),_0x57c6f1[_0x1a66a8(0xf3)](),URL[_0x1a66a8(0x123)](_0x24611),_0x57c6f1['remove']();}export function downloadFileInCloud(_0x8b65a5){try{const _0x59e76f=Module['downloadFile'](_0x8b65a5);return _0x59e76f;}catch(_0x3f59bc){return null;}}export async function uploadFileInCloud(_0x9003a9){const _0x1dd54d=a0_0x177b53;Module[_0x1dd54d(0x152)](_0x9003a9,async()=>{const _0x383ec5=_0x1dd54d;localStorageFile(),await Module[_0x383ec5(0xfb)]();});}export async function uploadFile(_0x4b4a18){const _0xb973d5=a0_0x177b53,_0x4f34fe=_0x4b4a18[_0xb973d5(0xf6)][0x0];Module[_0xb973d5(0x152)](_0x4f34fe,async()=>{localStorageFile(),await Module['FSSync']();});}export async function editFile(_0x36200a,_0x5bd9b5,_0x2350f2){const _0x16c871=a0_0x177b53;await Module[_0x16c871(0x150)](_0x36200a,_0x5bd9b5,_0x2350f2);}export async function deleteFile(_0x328ed3){const _0x3675dc=a0_0x177b53;try{return await Module['deleteFile'](_0x328ed3),!![];}catch(_0x429cad){return console[_0x3675dc(0x158)](_0x328ed3),null;}}export function listGame(){const _0x17eca=a0_0x177b53,_0x120ce7=Module[_0x17eca(0x107)]()[_0x17eca(0x13d)](_0x3b493a=>_0x3b493a!=='.'&&_0x3b493a!=='..');return _0x120ce7;}function a0_0x4e4a(_0x5c866d,_0x5a21d0){const _0x3d8587=a0_0x3d85();return a0_0x4e4a=function(_0x4e4aa6,_0x282dd0){_0x4e4aa6=_0x4e4aa6-0xeb;let _0x10972f=_0x3d8587[_0x4e4aa6];return _0x10972f;},a0_0x4e4a(_0x5c866d,_0x5a21d0);}function a0_0x3d85(){const _0x12bebe=['getItem','Auto\x20save\x20','body','concat','length','fileSize','saveTime','href','screenSize','gbc1','Paused!','1899541NPlmbn','#20A5A6','FSInit','\x20time(s)','revokeObjectURL','visible','endsWith','lastIndexOf','innerWidth','style','resumeGame','listCheats','listScreenshots','classList','uploadRom','buttonUnpress','screenshot','led00','substring','getElementById','state','beforeunload','fill','\x20|\x20','hidden','then','saveState','encode','55251LTJtiL','Resumed!','filter','includes','opacity','persisted','loadState','buttonPress','remove','canvas','led04','.gbc','trim','1323708UGwXGs','pagehide','\x5cs*:\x5cs*(.*?)\x5cs*(?=\x5c||$)','textContent','led03','/data/screenshots/','setItem','createElement','editFileName','4fRtqOO','uploadAll','led02','join','172778ZkexJv','type','now','error','/data/states/','0,0,','99543gLBvsw','setFastForwardMultiplier','.ss0','Do\x20you\x20want\x20to\x20load\x20save\x20state?','.png','\x20:\x20','900thDAPy','replace','Error\x20ledSave:','8576488AqnDLj','led06','timer','listStates','gbc','split','disable','toString','0.4','click','1094555jxKrcd','led0','files','visibilityState','All','downloadFile','uId','FSSync','6JrQmam','Cloud\x20upload\x20','entries','loadGame','rgba(245,\x20232,\x20209,\x200.4)','#E0C068','slotStateSaved','exec','visibilitychange','SDL2','image/png','listRoms','padStart','set','tEXtComment\x00','log','/data/games/','led01','setVolume','map','listSaves','add','indexOf','addEventListener'];a0_0x3d85=function(){return _0x12bebe;};return a0_0x3d85();}export function listSave(){const _0xb873bf=a0_0x177b53,_0x11b153=Module[_0xb873bf(0x110)]()[_0xb873bf(0x13d)](_0xdf9c00=>_0xdf9c00!=='.'&&_0xdf9c00!=='..');return _0x11b153;}export function listState(){const _0x3123e2=a0_0x177b53,_0x5cd3e5=Module[_0x3123e2(0xed)]()[_0x3123e2(0x13d)](_0x163869=>_0x163869!=='.'&&_0x163869!=='..');return _0x5cd3e5;}export function listCheat(){const _0x3652bc=a0_0x177b53,_0x5287b4=Module[_0x3652bc(0x12a)]()[_0x3652bc(0x13d)](_0x5e0a3c=>_0x5e0a3c!=='.'&&_0x5e0a3c!=='..');return _0x5287b4;}export function listScreenshot(){const _0x5911c7=a0_0x177b53,_0x22882d=Module[_0x5911c7(0x12b)]()['filter'](_0x29f4d8=>_0x29f4d8!=='.'&&_0x29f4d8!=='..');return _0x22882d;}export function embedTextInPngFile(_0x2d50ea,_0x45714d,_0x137e8f){const _0x485d57=a0_0x177b53;let _0x44391f=atob(_0x2d50ea['split'](',')[0x1]),_0x3f3503=new Uint8Array(_0x44391f['length']);for(let _0x1904d4=0x0;_0x1904d4<_0x44391f[_0x485d57(0x118)];_0x1904d4++){_0x3f3503[_0x1904d4]=_0x44391f['charCodeAt'](_0x1904d4);}let _0x14045b=new TextEncoder()[_0x485d57(0x13a)](_0x485d57(0x10a)+_0x45714d),_0x2d85a8=new Uint8Array(_0x3f3503[_0x485d57(0x118)]+_0x14045b[_0x485d57(0x118)]);_0x2d85a8[_0x485d57(0x109)](_0x3f3503,0x0),_0x2d85a8['set'](_0x14045b,_0x3f3503[_0x485d57(0x118)]);let _0x3bceed=new Blob([_0x2d85a8],{'type':_0x485d57(0x106)}),_0x142e8f=new File([_0x3bceed],_0x137e8f,{'type':'image/png'});return _0x142e8f;}export function extractTextFromPngBase64(_0x775736){const _0x425d90=a0_0x177b53;let _0x51c9e3=atob(_0x775736[_0x425d90(0xef)](',')[0x1]),_0x44c0b8='tEXtComment\x00',_0xcff187=_0x51c9e3[_0x425d90(0x112)](_0x44c0b8);if(_0xcff187!==-0x1)return _0x51c9e3[_0x425d90(0x131)](_0xcff187+_0x44c0b8['length']);return null;}export function fileSize(_0xb919d7){const _0x319331=a0_0x177b53,_0x1c29c2=Module[_0x319331(0x119)](_0xb919d7);return _0x1c29c2;}export async function resumeGame(){const _0x396277=a0_0x177b53;Module[_0x396277(0x129)](),Module[_0x396277(0x105)](),notiMessage(_0x396277(0x13c),0x7d0);}export async function pauseGame(){const _0x10edae=a0_0x177b53;Module['pauseGame'](),Module['SDL2'](),notiMessage(_0x10edae(0x11e),0x7d0);}export async function buttonPress(_0x1835ca){const _0x1df2af=a0_0x177b53;Module[_0x1df2af(0x142)](_0x1835ca);}export async function buttonUnpress(_0x22f012){const _0x136542=a0_0x177b53;Module[_0x136542(0x12e)](_0x22f012);}export async function screenShot(_0x18448d){const _0x549fe7=a0_0x177b53,_0x90b6c8=gameName['replace'](/\.(gba|gbc|gb|zip)$/,'_'+_0x18448d+_0x549fe7(0x15f)),_0x3ccd9a=await getData(gameName,_0x18448d,_0x549fe7(0xf8))||'';console[_0x549fe7(0x10b)](_0x3ccd9a),await Module['screenshot'](_0x90b6c8),await setData(gameName,_0x18448d,_0x549fe7(0x11a),formatDateTime(Date[_0x549fe7(0x157)]()),_0x3ccd9a);}export async function dowloadScreenShot(_0x239528){try{const _0x2a34b1=await fileToBase64(Module['downloadFile'](_0x239528));return _0x2a34b1;}catch{}}export async function captureOCR(_0x3ef81a){const _0x5104ed=a0_0x177b53;Module[_0x5104ed(0x12f)](_0x3ef81a);const _0x23e8ed=Module[_0x5104ed(0xf9)](_0x5104ed(0x14d)+_0x3ef81a);return _0x23e8ed;}export async function setFastForwardMultiplier(_0x3022ba){const _0x2957d9=a0_0x177b53;Module[_0x2957d9(0x15c)](_0x3022ba);}export async function uploadCheats(_0x1f8f7d){const _0x520005=a0_0x177b53;Module['autoLoadCheats'](),Module[_0x520005(0x152)](_0x1f8f7d,async()=>{});}export function setVolume(_0x452695){const _0x3c747a=a0_0x177b53;Module[_0x3c747a(0x10e)](_0x452695);}export async function setData(_0x2d63b5,_0x45bbe5,_0x5ba51e,_0x684c7a,_0x1cbcc0=''){const _0x49325d=a0_0x177b53,_0x472c19=_0x2d63b5[_0x49325d(0x162)](/\.(gba|gbc|gb|zip|cheats)$/,''),_0x2fc43b='/data/screenshots/'+_0x472c19+'_'+_0x45bbe5+'.png';let _0x4d0279;try{_0x4d0279=await fileToBase64(Module['downloadFile'](_0x2fc43b));}catch(_0x5ad645){await Module['screenshot'](_0x472c19+'_'+_0x45bbe5+'.png'),await delay(0xc8),_0x4d0279=await fileToBase64(Module[_0x49325d(0xf9)](_0x2fc43b));}let _0x36ac9d=atob(_0x4d0279['split'](',')[0x1]),_0x609da9='tEXtComment\x00',_0x267b83=_0x36ac9d[_0x49325d(0x112)](_0x609da9),_0x579ba4={};if(_0x267b83!==-0x1||_0x1cbcc0[_0x49325d(0x147)]()!==''){let _0x2db853=_0x267b83!==-0x1?_0x36ac9d[_0x49325d(0x131)](_0x267b83+_0x609da9[_0x49325d(0x118)]):_0x1cbcc0,_0x31ef4c=/(\w+)\s*:\s*([^|]*)/g,_0x278216;while((_0x278216=_0x31ef4c[_0x49325d(0x103)](_0x2db853))!==null){_0x579ba4[_0x278216[0x1][_0x49325d(0x147)]()]=_0x278216[0x2][_0x49325d(0x147)]();}_0x267b83!==-0x1&&(_0x36ac9d=_0x36ac9d[_0x49325d(0x131)](0x0,_0x267b83));}_0x579ba4[_0x5ba51e]=_0x684c7a;let _0x203817=Object[_0x49325d(0xfe)](_0x579ba4)[_0x49325d(0x10f)](([_0x5e8555,_0x4b4d5e])=>_0x5e8555+_0x49325d(0x160)+_0x4b4d5e)[_0x49325d(0x154)](_0x49325d(0x136)),_0x262438=new TextEncoder()[_0x49325d(0x13a)](_0x609da9+'\x20'+_0x203817),_0x576a45=new Uint8Array([..._0x36ac9d][_0x49325d(0x10f)](_0x452b73=>_0x452b73['charCodeAt'](0x0))[_0x49325d(0x117)]([..._0x262438])),_0x4e0dba=new File([new Blob([_0x576a45],{'type':_0x49325d(0x106)})],_0x472c19+'_'+_0x45bbe5+_0x49325d(0x15f),{'type':_0x49325d(0x106)});Module[_0x49325d(0x152)](_0x4e0dba,async()=>{});}export async function getData(_0x103451,_0x48093d,_0x3e49c3){const _0x45755d=a0_0x177b53;try{const _0x21368f=_0x103451[_0x45755d(0x162)](/\.(gba|gbc|gb|zip|cheats)$/,''),_0x18ef0b='/data/screenshots/'+_0x21368f+'_'+_0x48093d+'.png';let _0x438dcd;try{_0x438dcd=await fileToBase64(Module[_0x45755d(0xf9)](_0x18ef0b));}catch(_0x5e9a64){return null;}let _0x20cc81=atob(_0x438dcd[_0x45755d(0xef)](',')[0x1]),_0x5b94d9=_0x45755d(0x10a),_0x593e07=_0x20cc81[_0x45755d(0x112)](_0x5b94d9);if(_0x593e07!==-0x1){let _0xbedd95=_0x20cc81[_0x45755d(0x131)](_0x593e07+_0x5b94d9[_0x45755d(0x118)]);if(_0x3e49c3==='All')return _0xbedd95['trim']();let _0x67ad41=new RegExp(_0x3e49c3+_0x45755d(0x14a)),_0x13ad1f=_0xbedd95['match'](_0x67ad41);if(_0x13ad1f)return _0x13ad1f[0x1][_0x45755d(0x147)]();}}catch(_0x3e68a4){return console[_0x45755d(0x158)]({'romName':_0x103451,'slot':_0x48093d,'type':_0x3e49c3}),null;}}export async function ledSave(_0x34aed5){const _0x8f500b=a0_0x177b53,_0x1efc84=parseInt(await getData(gameName,'0',_0x8f500b(0x102))),_0x2bb843=_0x1efc84===0x1?_0x8f500b(0x10d):_0x1efc84===0x2?_0x8f500b(0x153):_0x1efc84===0x3?_0x8f500b(0x14c):_0x1efc84===0x4?_0x8f500b(0x145):_0x1efc84===0x5?'led05':_0x1efc84===0x6?_0x8f500b(0xeb):_0x1efc84===0x7?'led07':_0x8f500b(0x130);try{for(let _0x528aa9=0x0;_0x528aa9<=0x7;_0x528aa9++){document['getElementById'](_0x8f500b(0xf5)+_0x528aa9)[_0x8f500b(0x128)][_0x8f500b(0x135)]=_0x8f500b(0x100);}await delay(0x3e8);for(let _0x269341=0x0;_0x269341<=0x7;_0x269341++){document[_0x8f500b(0x132)](_0x8f500b(0xf5)+_0x269341)[_0x8f500b(0x128)][_0x8f500b(0x135)]=_0x8f500b(0x100);}document['getElementById'](_0x2bb843)['style'][_0x8f500b(0x135)]=_0x34aed5;}catch(_0x25c0c6){console[_0x8f500b(0x158)](_0x8f500b(0x163),_0x25c0c6);}};export async function notiMessage(_0x4c76fd,_0xb6d94e,_0x37bd2a=![]){const _0x59072b=a0_0x177b53;var _0x4e253f=document[_0x59072b(0x132)]('noti-mess');const _0x18a553=parseInt(await getData(gameName,'0',_0x59072b(0x102)))||0x0;_0x4e253f[_0x59072b(0x128)]['opacity']===_0x59072b(0xf2)&&(clearTimeout(messageTimeout),_0x4e253f[_0x59072b(0x128)]['opacity']='0'),_0x4e253f[_0x59072b(0x14b)]=_0x4c76fd,_0x4e253f['style'][_0x59072b(0x13f)]=_0x59072b(0xf2),messageTimeout=setTimeout(()=>{const _0x3311fd=_0x59072b;_0x4e253f[_0x3311fd(0x14b)]='['+_0x18a553+']\x20'+gameName['substring'](0x0,gameName[_0x3311fd(0x126)]('.')),_0x4e253f['style'][_0x3311fd(0x13f)]='0.4';},_0xb6d94e),_0x37bd2a&&(canvas[_0x59072b(0x12c)][_0x59072b(0x111)](_0x59072b(0x124)),setTimeout(()=>{const _0x2f52ca=_0x59072b;canvas[_0x2f52ca(0x12c)][_0x2f52ca(0x143)](_0x2f52ca(0x124));},0x258));}export async function FSSync(){const _0x301620=a0_0x177b53;Module[_0x301620(0xfb)]();}