const a0_0x4559dc=a0_0x5793;(function(_0x52e8d6,_0x3ff186){const _0x46dd88=a0_0x5793,_0x1b781a=_0x52e8d6();while(!![]){try{const _0x4b1695=parseInt(_0x46dd88(0x8b))/0x1+-parseInt(_0x46dd88(0xbf))/0x2*(-parseInt(_0x46dd88(0x99))/0x3)+parseInt(_0x46dd88(0xbb))/0x4*(-parseInt(_0x46dd88(0xcd))/0x5)+-parseInt(_0x46dd88(0xb4))/0x6*(parseInt(_0x46dd88(0xc8))/0x7)+-parseInt(_0x46dd88(0xa4))/0x8+parseInt(_0x46dd88(0x95))/0x9+parseInt(_0x46dd88(0xdc))/0xa;if(_0x4b1695===_0x3ff186)break;else _0x1b781a['push'](_0x1b781a['shift']());}catch(_0x50c4e5){_0x1b781a['push'](_0x1b781a['shift']());}}}(a0_0x1fbc,0xb81fb));import a0_0x470c80 from'../core/mgba.js';import*as a0_0x2ccc42 from'./gamepad.js';import{localStorageFile}from'./storage.js';import{dpUploadFile}from'./cloud.js';import{shaderData}from'./setting.js';const Module={'canvas':document[a0_0x4559dc(0xd1)](a0_0x4559dc(0xc1))};function initializeCore(_0x2677df,_0x415da1){const _0x5c4d52=a0_0x4559dc;_0x2677df(_0x415da1)[_0x5c4d52(0x8d)](function(_0x13cd6d){const _0x3387f=_0x5c4d52;_0x13cd6d[_0x3387f(0x84)]();});}initializeCore(a0_0x470c80,Module);let countAutoSave=0x0,countUpload=0x0;const canvas=document[a0_0x4559dc(0xd1)]('canvas'),controlSetting=document[a0_0x4559dc(0xd1)](a0_0x4559dc(0xb3));function handleVisibilityChange(_0x1bb3bd){const _0x4bf43b=a0_0x4559dc;document[_0x4bf43b(0x8a)]==='hidden'||_0x1bb3bd?.[_0x4bf43b(0xcf)]===_0x4bf43b(0x77)||_0x1bb3bd?.[_0x4bf43b(0xa8)]?(pauseGame(),canvas[_0x4bf43b(0x6c)][_0x4bf43b(0x71)](_0x4bf43b(0xd5))):(setTimeout(()=>{const _0x1a1683=_0x4bf43b;canvas[_0x1a1683(0x6c)][_0x1a1683(0xb0)]('visible');},0x258),controlSetting[_0x4bf43b(0x6c)][_0x4bf43b(0xbd)](_0x4bf43b(0xd5))&&resumeGame());}async function statusShow(){const _0x46784b=a0_0x4559dc;document[_0x46784b(0xae)]('pagehide',handleVisibilityChange),document[_0x46784b(0xae)](_0x46784b(0x76),handleVisibilityChange),window[_0x46784b(0xae)](_0x46784b(0x77),handleVisibilityChange),restoreArea(),startTimer(),await a0_0x2ccc42[_0x46784b(0xda)](parseInt(await getData(gameName,'0','turboState'))),await delay(0xc8),await Module[_0x46784b(0x93)](),await delay(0x320),await led(parseInt(await getData(gameName,'0',_0x46784b(0xb8)))),await notiMessage(gameVer,0x3e8);}async function saveStatePeriodically(){const _0x963cc9=a0_0x4559dc;await ledSave(_0x963cc9(0xdd)),await Module[_0x963cc9(0x7c)](0x0),await Module['FSSync'](),await screenShot(0x0),console['log'](_0x963cc9(0xcb)+ ++countAutoSave+_0x963cc9(0x81));}async function saveStateInCloud(){const _0x1d6096=a0_0x4559dc,_0x3fcd78=gameName['replace'](/\.(zip|gb|gbc|gba)$/,_0x1d6096(0xcc)),_0x34a3a8=localStorage[_0x1d6096(0x97)](_0x1d6096(0x73));navigator[_0x1d6096(0x80)]&&(_0x34a3a8&&(await ledSave('#E0C068'),await delay(0x3e8),await dpUploadFile(_0x3fcd78,Module['downloadFile'](_0x1d6096(0x7b)+_0x3fcd78),_0x1d6096(0x9e)),await lockNoti('',_0x1d6096(0x72)+ ++countUpload+_0x1d6096(0x81),0x7d0)));}function startTimer(){let [_0x3ae53f,_0x5f187c,_0x5c5c2b,_0x24bd60,_0x124c8f]=[0x0,0x0,0x0,0x0,0x0];setInterval(()=>{const _0x274e45=a0_0x5793;_0x5c5c2b++,_0x24bd60++,_0x124c8f++;if(_0x5c5c2b===0x3c)[_0x5c5c2b,_0x5f187c]=[0x0,_0x5f187c+0x1];if(_0x5f187c===0x3c)[_0x5f187c,_0x3ae53f]=[0x0,_0x3ae53f+0x1];document['getElementById']('timer')[_0x274e45(0x6d)]=_0x3ae53f+'h'+_0x5f187c[_0x274e45(0xbc)]()[_0x274e45(0xad)](0x2,'0')+'.'+_0x5c5c2b[_0x274e45(0xbc)]()['padStart'](0x2,'0');_0x24bd60===0x3c&&(saveStatePeriodically(),_0x24bd60=0x0);;_0x124c8f===0x708&&(saveStateInCloud(),_0x124c8f=0x0);;},0x3e8);}export async function uploadGame(_0x47c942){const _0x11e52b=a0_0x4559dc,_0x376dc8=_0x47c942[_0x11e52b(0x9c)][0x0];Module[_0x11e52b(0x90)](_0x376dc8,()=>{const _0x107de5=_0x11e52b;Module[_0x107de5(0xb1)]();});}export async function loadGame(_0x49f8a9){const _0x375b62=a0_0x4559dc,_0x25d3e0=_0x49f8a9['replace'](/\.(gba|gbc|gb|zip)$/,_0x375b62(0xcc)),_0x3c4df4=Module['listStates']()[_0x375b62(0xba)](_0x58b085=>_0x58b085!=='.'&&_0x58b085!=='..');intro[_0x375b62(0x6c)][_0x375b62(0x71)](_0x375b62(0xb5)),errorLogElements[0x0][_0x375b62(0xaf)][_0x375b62(0xdb)]='0',ingame[_0x375b62(0x6c)][_0x375b62(0xb0)]('disable'),_0x49f8a9[_0x375b62(0x78)]('.gbc')||_0x49f8a9[_0x375b62(0x78)]('.gb')?(canvas[_0x375b62(0x6c)][_0x375b62(0x71)](_0x375b62(0xbe)),areaTrans[_0x375b62(0x6c)][_0x375b62(0x71)](_0x375b62(0x7e)),localStorage[_0x375b62(0xab)](_0x375b62(0x9a),'0,0,'+(window[_0x375b62(0xc2)]-0xe6)+','+(window[_0x375b62(0xc2)]-0xe6)*0x9/0xa)):localStorage[_0x375b62(0xab)]('screenSize','0,0,'+(window['innerWidth']-0x96)+','+(window[_0x375b62(0xc2)]-0x96)*0x2/0x3),_0x3c4df4[_0x375b62(0xb7)](_0x25d3e0)?(await Module[_0x375b62(0xce)](_0x375b62(0xc6)+_0x49f8a9),confirm(_0x375b62(0xd0))&&(await Module[_0x375b62(0x8c)](0x0),await shaderData())):(await Module['loadGame'](_0x375b62(0xc6)+gameName),await shaderData()),await statusShow();}export async function saveState(_0x8579dc){const _0x5399cb=a0_0x4559dc;await Module[_0x5399cb(0x7c)](_0x8579dc),await Module[_0x5399cb(0xb1)]();}export async function loadState(_0x5b5deb){await Module['loadState'](_0x5b5deb);}export async function downloadFile(_0x5f38e8,_0x5319e3){const _0x1feda0=a0_0x4559dc,_0x15d64a=Module[_0x1feda0(0xd4)](_0x5f38e8),_0x409e66=document['createElement']('a');document[_0x1feda0(0x7f)][_0x1feda0(0x94)](_0x409e66),_0x409e66[_0x1feda0(0xaa)]=_0x5319e3;const _0x379ece=new Blob([_0x15d64a],{'type':'application/octet-stream'});_0x409e66['href']=URL[_0x1feda0(0x87)](_0x379ece),_0x409e66[_0x1feda0(0xc0)](),URL['revokeObjectURL'](_0x379ece),_0x409e66[_0x1feda0(0xb0)]();}export function downloadFileInCloud(_0x496671){const _0x299ce0=a0_0x4559dc;try{const _0x373ee7=Module[_0x299ce0(0xd4)](_0x496671);return _0x373ee7;}catch(_0x5c1ec6){return null;}}export async function uploadFileInCloud(_0x3c2da3){const _0x225963=a0_0x4559dc;Module[_0x225963(0x86)](_0x3c2da3,async()=>{const _0x1d3678=_0x225963;localStorageFile(),await Module[_0x1d3678(0xb1)]();});}export async function uploadFile(_0x220c7e){const _0x1feb2e=a0_0x4559dc,_0x5f587d=_0x220c7e[_0x1feb2e(0x9c)][0x0];Module[_0x1feb2e(0x86)](_0x5f587d,async()=>{localStorageFile(),await Module['FSSync']();});}export async function editFile(_0x361726,_0x316149,_0x58561f){const _0x3fe4d6=a0_0x4559dc;await Module[_0x3fe4d6(0x88)](_0x361726,_0x316149,_0x58561f),await Module[_0x3fe4d6(0xb1)]();}export async function deleteFile(_0x15790c){const _0x8b8534=a0_0x4559dc;try{return await Module['deleteFile'](_0x15790c),await delay(0x64),await Module[_0x8b8534(0xb1)](),!![];}catch(_0x252a6f){return null;}}export function listGame(){const _0x4b965a=a0_0x4559dc,_0x663e66=Module[_0x4b965a(0xc7)]()[_0x4b965a(0xba)](_0x23a29d=>_0x23a29d!=='.'&&_0x23a29d!=='..');return _0x663e66;}export function listSave(){const _0xa1f94a=a0_0x4559dc,_0x16d0ae=Module['listSaves']()[_0xa1f94a(0xba)](_0x47b128=>_0x47b128!=='.'&&_0x47b128!=='..');return _0x16d0ae;}export function listState(){const _0x56c68e=a0_0x4559dc,_0x2f9cee=Module[_0x56c68e(0xca)]()[_0x56c68e(0xba)](_0x5a31b5=>_0x5a31b5!=='.'&&_0x5a31b5!=='..');return _0x2f9cee;}export function listCheat(){const _0x3f75c7=a0_0x4559dc,_0x18b154=Module[_0x3f75c7(0x6f)]()[_0x3f75c7(0xba)](_0x2480d6=>_0x2480d6!=='.'&&_0x2480d6!=='..');return _0x18b154;}export function listScreenshot(){const _0x3ec9ac=a0_0x4559dc,_0x369d8a=Module['listScreenshots']()[_0x3ec9ac(0xba)](_0x10b125=>_0x10b125!=='.'&&_0x10b125!=='..');return _0x369d8a;}export function embedTextInPngFile(_0x3df737,_0x5deebb,_0x1efcce){const _0x13c82a=a0_0x4559dc;let _0x517fd2=atob(_0x3df737['split'](',')[0x1]),_0x2ccf4d=new Uint8Array(_0x517fd2[_0x13c82a(0xa7)]);for(let _0x1d4259=0x0;_0x1d4259<_0x517fd2[_0x13c82a(0xa7)];_0x1d4259++){_0x2ccf4d[_0x1d4259]=_0x517fd2[_0x13c82a(0xb9)](_0x1d4259);}let _0x3942ad=new TextEncoder()[_0x13c82a(0xd7)](_0x13c82a(0x7d)+_0x5deebb),_0xd69a7e=new Uint8Array(_0x2ccf4d[_0x13c82a(0xa7)]+_0x3942ad[_0x13c82a(0xa7)]);_0xd69a7e[_0x13c82a(0xa1)](_0x2ccf4d,0x0),_0xd69a7e[_0x13c82a(0xa1)](_0x3942ad,_0x2ccf4d['length']);let _0xbd335b=new Blob([_0xd69a7e],{'type':_0x13c82a(0xd9)}),_0x9c3e19=new File([_0xbd335b],_0x1efcce,{'type':_0x13c82a(0xd9)});return _0x9c3e19;}function a0_0x5793(_0x4a1eed,_0x50d651){const _0x1fbc9a=a0_0x1fbc();return a0_0x5793=function(_0x57930a,_0x4672ff){_0x57930a=_0x57930a-0x6a;let _0x23f941=_0x1fbc9a[_0x57930a];return _0x23f941;},a0_0x5793(_0x4a1eed,_0x50d651);}export function extractTextFromPngBase64(_0x3a7043){const _0x2358f2=a0_0x4559dc;let _0x49c1c5=atob(_0x3a7043[_0x2358f2(0xa6)](',')[0x1]),_0x25a889=_0x2358f2(0x7d),_0x5cbcfb=_0x49c1c5[_0x2358f2(0xa9)](_0x25a889);if(_0x5cbcfb!==-0x1)return _0x49c1c5[_0x2358f2(0xd3)](_0x5cbcfb+_0x25a889[_0x2358f2(0xa7)]);return null;}function a0_0x1fbc(){const _0x56eb15=['uploadRom','All','0.4','SDL2','appendChild','7132356bOVOLQ','\x5cs*:\x5cs*(.*?)\x5cs*(?=\x5c||$)','getItem','saveTime','103209iNntDp','screenSize','led06','files','led07','state','fileSize','opacity','set','led02','map','2306480GVOzKt','buttonPress','split','length','persisted','indexOf','download','setItem','autoLoadCheats','padStart','addEventListener','style','remove','FSSync','match','control-setting','8891598GdHuTx','disable','\x20:\x20','includes','slotStateSaved','charCodeAt','filter','8tAdLDf','toString','contains','gbc','32AOsPRG','click','canvas','innerWidth','lastIndexOf','/data/screenshots/','setFastForwardMultiplier','/data/games/','listRoms','7XMOJvZ','setVolume','listStates','Auto\x20save\x20','.ss0','1165105JrFSMT','loadGame','type','Do\x20you\x20want\x20to\x20load\x20save\x20state?','getElementById','led04','substring','downloadFile','visible','led03','encode','rgba(245,\x20232,\x20209,\x200.4)','image/png','turboF','bottom','10589140uUQoxp','#20A5A6','pauseGame','Error\x20ledSave:','classList','textContent','now','listCheats','led00','add','Cloud\x20upload\x20','uId','Resumed!','screenshot','visibilitychange','beforeunload','endsWith','led0','Paused!','/data/states/','saveState','tEXtComment\x00','gbc1','body','onLine','\x20time(s)','error','fill','FSInit','noti-mess','uploadAll','createObjectURL','editFileName','.png','visibilityState','588610KiZvrl','loadState','then','log','trim'];a0_0x1fbc=function(){return _0x56eb15;};return a0_0x1fbc();}export function fileSize(_0x335e5c){const _0x58639c=a0_0x4559dc,_0x5ede76=Module[_0x58639c(0x9f)](_0x335e5c);return _0x5ede76;}export async function resumeGame(){const _0x19b6cf=a0_0x4559dc;Module['resumeGame'](),Module[_0x19b6cf(0x93)](),notiMessage(_0x19b6cf(0x74),0x7d0);}export async function pauseGame(){const _0xd54bb5=a0_0x4559dc;Module[_0xd54bb5(0x6a)](),Module[_0xd54bb5(0x93)](),notiMessage(_0xd54bb5(0x7a),0x7d0);}export async function buttonPress(_0x310e77){const _0x454b52=a0_0x4559dc;Module[_0x454b52(0xa5)](_0x310e77);}export async function buttonUnpress(_0x4b8ae7){Module['buttonUnpress'](_0x4b8ae7);}export async function screenShot(_0x249a64){const _0x177304=a0_0x4559dc,_0x38b6e0=gameName['replace'](/\.(gba|gbc|gb|zip)$/,'_'+_0x249a64+_0x177304(0x89)),_0x20515c=await getData(gameName,_0x249a64,_0x177304(0x91))||'';console[_0x177304(0x8e)](_0x20515c),await Module[_0x177304(0x75)](_0x38b6e0),await setData(gameName,_0x249a64,_0x177304(0x98),formatDateTime(Date[_0x177304(0x6e)]()),_0x20515c);}export async function dowloadScreenShot(_0x244166){const _0x2bdb80=a0_0x4559dc;try{const _0x5bd5e6=await fileToBase64(Module[_0x2bdb80(0xd4)](_0x244166));return _0x5bd5e6;}catch{}}export async function captureOCR(_0x23c16c){const _0x355d07=a0_0x4559dc;Module['screenshot'](_0x23c16c);const _0x3551a2=Module[_0x355d07(0xd4)](_0x355d07(0xc4)+_0x23c16c);return _0x3551a2;}export async function setFastForwardMultiplier(_0x5b4bcb){const _0x218e7c=a0_0x4559dc;Module[_0x218e7c(0xc5)](_0x5b4bcb);}export async function uploadCheats(_0x36abc2){const _0x128379=a0_0x4559dc;Module[_0x128379(0xac)](),Module[_0x128379(0x86)](_0x36abc2,async()=>{const _0x324f6c=_0x128379;await Module[_0x324f6c(0xb1)]();});}export function setVolume(_0x450fa4){const _0x131114=a0_0x4559dc;Module[_0x131114(0xc9)](_0x450fa4);}export async function setData(_0x3b228e,_0x1c6f5d,_0x32dbae,_0xc0d913,_0x94b733=''){const _0x3d1fad=a0_0x4559dc,_0x22c0f1=_0x3b228e['replace'](/\.(gba|gbc|gb|zip|cheats)$/,''),_0x18e5e1=_0x3d1fad(0xc4)+_0x22c0f1+'_'+_0x1c6f5d+_0x3d1fad(0x89);let _0x1965f1;try{_0x1965f1=await fileToBase64(Module['downloadFile'](_0x18e5e1));}catch(_0x2cf6cf){await Module[_0x3d1fad(0x75)](_0x22c0f1+'_'+_0x1c6f5d+_0x3d1fad(0x89)),await delay(0xc8),_0x1965f1=await fileToBase64(Module[_0x3d1fad(0xd4)](_0x18e5e1));}let _0x44c0d7=atob(_0x1965f1[_0x3d1fad(0xa6)](',')[0x1]),_0x302aa9=_0x3d1fad(0x7d),_0x2f27e5=_0x44c0d7['indexOf'](_0x302aa9),_0x5703f4={};if(_0x2f27e5!==-0x1||_0x94b733[_0x3d1fad(0x8f)]()!==''){let _0x2a8020=_0x2f27e5!==-0x1?_0x44c0d7[_0x3d1fad(0xd3)](_0x2f27e5+_0x302aa9[_0x3d1fad(0xa7)]):_0x94b733,_0x32977b=/(\w+)\s*:\s*([^|]*)/g,_0x2b7abf;while((_0x2b7abf=_0x32977b['exec'](_0x2a8020))!==null){_0x5703f4[_0x2b7abf[0x1][_0x3d1fad(0x8f)]()]=_0x2b7abf[0x2][_0x3d1fad(0x8f)]();}_0x2f27e5!==-0x1&&(_0x44c0d7=_0x44c0d7[_0x3d1fad(0xd3)](0x0,_0x2f27e5));}_0x5703f4[_0x32dbae]=_0xc0d913;let _0x1920ca=Object['entries'](_0x5703f4)['map'](([_0x512a28,_0x280168])=>_0x512a28+_0x3d1fad(0xb6)+_0x280168)['join']('\x20|\x20'),_0x244b5c=new TextEncoder()[_0x3d1fad(0xd7)](_0x302aa9+'\x20'+_0x1920ca),_0x309473=new Uint8Array([..._0x44c0d7][_0x3d1fad(0xa3)](_0x2c0361=>_0x2c0361['charCodeAt'](0x0))['concat']([..._0x244b5c])),_0x2ecaab=new File([new Blob([_0x309473],{'type':_0x3d1fad(0xd9)})],_0x22c0f1+'_'+_0x1c6f5d+_0x3d1fad(0x89),{'type':_0x3d1fad(0xd9)});Module[_0x3d1fad(0x86)](_0x2ecaab,()=>{});}export async function getData(_0x461301,_0x16e485,_0xee407d){const _0x3e0502=a0_0x4559dc;try{const _0x50aee9=_0x461301['replace'](/\.(gba|gbc|gb|zip|cheats)$/,''),_0x5dcfd3=_0x3e0502(0xc4)+_0x50aee9+'_'+_0x16e485+_0x3e0502(0x89);let _0x58d1a5;try{_0x58d1a5=await fileToBase64(Module[_0x3e0502(0xd4)](_0x5dcfd3));}catch(_0x1b0e20){return null;}let _0x1e9879=atob(_0x58d1a5[_0x3e0502(0xa6)](',')[0x1]),_0x546a4d=_0x3e0502(0x7d),_0x1bf2b9=_0x1e9879[_0x3e0502(0xa9)](_0x546a4d);if(_0x1bf2b9!==-0x1){let _0x4cb70c=_0x1e9879['substring'](_0x1bf2b9+_0x546a4d[_0x3e0502(0xa7)]);if(_0xee407d===_0x3e0502(0x91))return _0x4cb70c[_0x3e0502(0x8f)]();let _0x470097=new RegExp(_0xee407d+_0x3e0502(0x96)),_0x327cbc=_0x4cb70c[_0x3e0502(0xb2)](_0x470097);if(_0x327cbc)return _0x327cbc[0x1][_0x3e0502(0x8f)]();}}catch(_0x296067){return console[_0x3e0502(0x82)]({'romName':_0x461301,'slot':_0x16e485,'type':_0xee407d}),null;}}export async function ledSave(_0x2863e2){const _0x8c8a7=a0_0x4559dc,_0x183182=parseInt(await getData(gameName,'0',_0x8c8a7(0xb8))),_0x55d137=_0x183182===0x1?'led01':_0x183182===0x2?_0x8c8a7(0xa2):_0x183182===0x3?_0x8c8a7(0xd6):_0x183182===0x4?_0x8c8a7(0xd2):_0x183182===0x5?'led05':_0x183182===0x6?_0x8c8a7(0x9b):_0x183182===0x7?_0x8c8a7(0x9d):_0x8c8a7(0x70);try{for(let _0x296f2d=0x0;_0x296f2d<=0x7;_0x296f2d++){document[_0x8c8a7(0xd1)]('led0'+_0x296f2d)[_0x8c8a7(0xaf)][_0x8c8a7(0x83)]=_0x8c8a7(0xd8);}await delay(0x3e8);for(let _0x14fa76=0x0;_0x14fa76<=0x7;_0x14fa76++){document[_0x8c8a7(0xd1)](_0x8c8a7(0x79)+_0x14fa76)[_0x8c8a7(0xaf)][_0x8c8a7(0x83)]=_0x8c8a7(0xd8);}document[_0x8c8a7(0xd1)](_0x55d137)[_0x8c8a7(0xaf)][_0x8c8a7(0x83)]=_0x2863e2;}catch(_0x215202){console[_0x8c8a7(0x82)](_0x8c8a7(0x6b),_0x215202);}};export async function notiMessage(_0x27e30c,_0x12f64c,_0x4ca882=![]){const _0xd1a4c8=a0_0x4559dc;var _0x1fdaab=document[_0xd1a4c8(0xd1)](_0xd1a4c8(0x85));const _0x3b9210=parseInt(await getData(gameName,'0',_0xd1a4c8(0xb8)))||0x0;_0x1fdaab[_0xd1a4c8(0xaf)][_0xd1a4c8(0xa0)]===_0xd1a4c8(0x92)&&(clearTimeout(messageTimeout),_0x1fdaab['style'][_0xd1a4c8(0xa0)]='0'),_0x1fdaab[_0xd1a4c8(0x6d)]=_0x27e30c,_0x1fdaab['style'][_0xd1a4c8(0xa0)]='0.4',messageTimeout=setTimeout(()=>{const _0xe5b234=_0xd1a4c8;_0x1fdaab[_0xe5b234(0x6d)]='['+_0x3b9210+']\x20'+gameName['substring'](0x0,gameName[_0xe5b234(0xc3)]('.')),_0x1fdaab[_0xe5b234(0xaf)][_0xe5b234(0xa0)]=_0xe5b234(0x92);},_0x12f64c),_0x4ca882&&(canvas['classList']['add'](_0xd1a4c8(0xd5)),setTimeout(()=>{const _0x3454b0=_0xd1a4c8;canvas[_0x3454b0(0x6c)][_0x3454b0(0xb0)]('visible');},0x258));}