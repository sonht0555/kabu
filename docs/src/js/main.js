const a0_0x400209=a0_0x1662;(function(_0x4d72c1,_0x96a0f7){const _0xe2e430=a0_0x1662,_0x438b05=_0x4d72c1();while(!![]){try{const _0x5ba8e0=parseInt(_0xe2e430(0x1cd))/0x1+parseInt(_0xe2e430(0x1dc))/0x2+-parseInt(_0xe2e430(0x1d3))/0x3*(parseInt(_0xe2e430(0x1fa))/0x4)+-parseInt(_0xe2e430(0x1b4))/0x5*(-parseInt(_0xe2e430(0x201))/0x6)+-parseInt(_0xe2e430(0x1a2))/0x7*(-parseInt(_0xe2e430(0x1fb))/0x8)+-parseInt(_0xe2e430(0x1ce))/0x9+-parseInt(_0xe2e430(0x1a4))/0xa*(parseInt(_0xe2e430(0x1b3))/0xb);if(_0x5ba8e0===_0x96a0f7)break;else _0x438b05['push'](_0x438b05['shift']());}catch(_0x2f96e2){_0x438b05['push'](_0x438b05['shift']());}}}(a0_0x364b,0x95f5b));import a0_0x10d97a from'../core/mgba.js';import*as a0_0x474829 from'./gamepad.js';import{localStorageFile}from'./storage.js';import{dpUploadFile,dpRefreshToken}from'./cloud.js';const Module={'canvas':document[a0_0x400209(0x1f3)](a0_0x400209(0x1b1))};function initializeCore(_0x13cf50,_0x33216e){const _0x3b8b4d=a0_0x400209;_0x13cf50(_0x33216e)[_0x3b8b4d(0x1e4)](function(_0x5cdc8d){const _0x5ae1e3=_0x3b8b4d;_0x5cdc8d[_0x5ae1e3(0x1b8)]();});}initializeCore(a0_0x10d97a,Module);let countAutoSave=0x0,turboState=0x1,countUpload=0x0;const canvas=document[a0_0x400209(0x1f3)](a0_0x400209(0x1b1)),savedTurboState=localStorage['getItem'](a0_0x400209(0x1a9)),controlSetting=document['getElementById'](a0_0x400209(0x1d5));function handleVisibilityChange(_0x2b7387){const _0x3a7f20=a0_0x400209;document['visibilityState']===_0x3a7f20(0x1ca)||_0x2b7387?.['type']===_0x3a7f20(0x1bb)||_0x2b7387?.[_0x3a7f20(0x1ef)]?(pauseGame(),canvas['classList'][_0x3a7f20(0x1ae)](_0x3a7f20(0x1d8))):(setTimeout(()=>{const _0x1cd617=_0x3a7f20;canvas[_0x1cd617(0x1c5)][_0x1cd617(0x1eb)](_0x1cd617(0x1d8));},0x258),controlSetting[_0x3a7f20(0x1c5)]['contains'](_0x3a7f20(0x1d8))&&resumeGame());}async function statusShow(){const _0x4ea8ff=a0_0x400209;document[_0x4ea8ff(0x1d1)](_0x4ea8ff(0x1a7),handleVisibilityChange),document[_0x4ea8ff(0x1d1)]('visibilitychange',handleVisibilityChange),window[_0x4ea8ff(0x1d1)](_0x4ea8ff(0x1bb),handleVisibilityChange),restoreArea(),startTimer(),savedTurboState!==null&&(turboState=parseInt(savedTurboState),await a0_0x474829[_0x4ea8ff(0x1f0)](turboState)),await delay(0xc8),await Module['SDL2'](),await delay(0x320),await led(parseInt(localStorage[_0x4ea8ff(0x1e2)]('slotStateSaved'))),await notiMessage(gameVer,0x3e8);}async function saveStatePeriodically(){const _0x39d57b=a0_0x400209;await ledSave('#20A5A6'),await Module[_0x39d57b(0x1b6)](0x0),await Module['FSSync'](),await screenShot(0x0),console[_0x39d57b(0x1f1)](_0x39d57b(0x1e1)+ ++countAutoSave+_0x39d57b(0x1d0));}async function saveStateInCloud(){const _0x29f446=a0_0x400209,_0x9e0614=localStorage[_0x29f446(0x1e2)]('gameName'),_0x3a0cd9=_0x9e0614[_0x29f446(0x1f6)](/\.(zip|gb|gbc|gba)$/,_0x29f446(0x1fe)),_0x586417=localStorage[_0x29f446(0x1e2)](_0x29f446(0x1e8)),_0x57f2ff=localStorage[_0x29f446(0x1e2)](_0x9e0614+_0x29f446(0x1df)),_0x4b33ef=localStorage['getItem'](_0x9e0614+_0x29f446(0x1f8));if(navigator['onLine']){if(_0x586417){await ledSave(_0x29f446(0x1a8)),await delay(0x3e8),await dpUploadFile(_0x3a0cd9,Module[_0x29f446(0x1f2)]('/data/states/'+_0x3a0cd9));if(_0x57f2ff!==null){const _0x525089=_0x57f2ff+'\x0a\x0a'+_0x4b33ef,_0x3ef696=new Blob([_0x525089],{'type':'text/plain'});await dpUploadFile(_0x9e0614+_0x29f446(0x1b7),_0x3ef696);}else console[_0x29f446(0x1f1)]('No\x20screenshot!');await lockNoti('',_0x29f446(0x1da)+ ++countUpload+_0x29f446(0x1d0),0x7d0);}else console['log']('Unable\x20to\x20upload\x20to\x20Cloud!');}else console['log'](_0x29f446(0x1db));}function startTimer(){let [_0x4f52b5,_0x13a38c,_0x1af02c,_0x499153,_0x1639a8]=[0x0,0x0,0x0,0x0,0x0];setInterval(()=>{const _0x388f57=a0_0x1662;_0x1af02c++,_0x499153++,_0x1639a8++;if(_0x1af02c===0x3c)[_0x1af02c,_0x13a38c]=[0x0,_0x13a38c+0x1];if(_0x13a38c===0x3c)[_0x13a38c,_0x4f52b5]=[0x0,_0x4f52b5+0x1];document[_0x388f57(0x1f3)](_0x388f57(0x1ab))[_0x388f57(0x1e6)]=_0x4f52b5+'h'+_0x13a38c[_0x388f57(0x1ba)]()[_0x388f57(0x1a5)](0x2,'0')+'.'+_0x1af02c[_0x388f57(0x1ba)]()[_0x388f57(0x1a5)](0x2,'0');_0x499153===0x3c&&(saveStatePeriodically(),_0x499153=0x0);;_0x1639a8===0xe10&&(saveStateInCloud(),_0x1639a8=0x0);;},0x3e8);}export async function uploadGame(_0x58f453){const _0x12296d=a0_0x400209,_0x528649=_0x58f453['files'][0x0];Module[_0x12296d(0x1dd)](_0x528649,()=>{Module['FSSync']();});}export async function loadGame(_0x23ba92){const _0x49277a=a0_0x400209,_0x3a21a8=_0x23ba92['replace'](/\.(gba|gbc|gb|zip)$/,_0x49277a(0x1fe)),_0x241cf0=Module[_0x49277a(0x1ed)]()[_0x49277a(0x1b5)](_0x11d613=>_0x11d613!=='.'&&_0x11d613!=='..');intro[_0x49277a(0x1c5)][_0x49277a(0x1ae)](_0x49277a(0x1d9)),errorLogElements[0x0][_0x49277a(0x1c8)]['bottom']='0',ingame[_0x49277a(0x1c5)][_0x49277a(0x1eb)](_0x49277a(0x1d9)),_0x23ba92[_0x49277a(0x1bc)](_0x49277a(0x1c2))||_0x23ba92[_0x49277a(0x1bc)]('.gb')?(canvas[_0x49277a(0x1c5)][_0x49277a(0x1ae)](_0x49277a(0x1c7)),areaTrans[_0x49277a(0x1c5)][_0x49277a(0x1ae)](_0x49277a(0x1a3)),localStorage[_0x49277a(0x1d7)](_0x49277a(0x1ac),_0x49277a(0x1de)+(window[_0x49277a(0x1e0)]-0xe6)+','+(window[_0x49277a(0x1e0)]-0xe6)*0x9/0xa)):localStorage['setItem'](_0x49277a(0x1ac),_0x49277a(0x1de)+(window[_0x49277a(0x1e0)]-0x96)+','+(window[_0x49277a(0x1e0)]-0x96)*0x2/0x3),_0x241cf0[_0x49277a(0x1bd)](_0x3a21a8)?(await Module['loadGame'](_0x49277a(0x1ee)+_0x23ba92),confirm(_0x49277a(0x1cb))&&(await Module[_0x49277a(0x1e9)](0x0),localStorage[_0x49277a(0x1d7)]('gameName',_0x23ba92),console[_0x49277a(0x1f1)](_0x23ba92))):(await Module[_0x49277a(0x1c1)](_0x49277a(0x1ee)+_0x23ba92),localStorage[_0x49277a(0x1d7)](_0x49277a(0x1c4),_0x23ba92),console[_0x49277a(0x1f1)](_0x23ba92)),await statusShow();}export async function saveState(_0x5b9faf){const _0x3625cf=a0_0x400209;await Module[_0x3625cf(0x1b6)](_0x5b9faf),await Module['FSSync']();}export async function loadState(_0x582d8e){const _0x1bdbc1=a0_0x400209;await Module[_0x1bdbc1(0x1e9)](_0x582d8e);}export async function downloadFile(_0x14097e,_0x4a946b){const _0x556ac7=a0_0x400209,_0x457f31=Module['downloadFile'](_0x14097e),_0x26db20=document['createElement']('a');document['body'][_0x556ac7(0x1e5)](_0x26db20),_0x26db20[_0x556ac7(0x1c6)]=_0x4a946b;const _0x5453a1=new Blob([_0x457f31],{'type':_0x556ac7(0x1d6)});_0x26db20['href']=URL[_0x556ac7(0x1ea)](_0x5453a1),_0x26db20['click'](),URL['revokeObjectURL'](_0x5453a1),_0x26db20[_0x556ac7(0x1eb)]();}export function downloadFileInCloud(_0x11e8d7){const _0x14b324=a0_0x400209,_0x247489=Module[_0x14b324(0x1f2)](_0x11e8d7);return _0x247489;}export async function uploadFile(_0x57f0ee){const _0x51fbbb=a0_0x400209,_0x1553ac=_0x57f0ee[_0x51fbbb(0x1d2)][0x0];Module['uploadAll'](_0x1553ac,()=>{const _0x311093=_0x51fbbb;localStorageFile(),Module[_0x311093(0x1ad)]();});}export async function editFile(_0x47697d,_0x234e5a,_0x3aa6fe){const _0x4ab763=a0_0x400209;await Module[_0x4ab763(0x1ff)](_0x47697d,_0x234e5a,_0x3aa6fe),await Module[_0x4ab763(0x1ad)]();}export async function deleteFile(_0x157e09){const _0x4d8909=a0_0x400209;await Module[_0x4d8909(0x1f7)](_0x157e09),await Module[_0x4d8909(0x1ad)]();}export function listGame(){const _0x2473bb=a0_0x400209,_0x219f95=Module[_0x2473bb(0x1ec)]()[_0x2473bb(0x1b5)](_0x2c513d=>_0x2c513d!=='.'&&_0x2c513d!=='..');return _0x219f95;}export function listSave(){const _0x4583de=a0_0x400209,_0x2577d3=Module[_0x4583de(0x1e3)]()['filter'](_0x243b5a=>_0x243b5a!=='.'&&_0x243b5a!=='..');return _0x2577d3;}export function listState(){const _0x39020e=Module['listStates']()['filter'](_0x3e094b=>_0x3e094b!=='.'&&_0x3e094b!=='..');return _0x39020e;}export function listCheat(){const _0x1f4699=a0_0x400209,_0x4b69d8=Module[_0x1f4699(0x1bf)]()['filter'](_0x50fa29=>_0x50fa29!=='.'&&_0x50fa29!=='..');return _0x4b69d8;}export function listScreenshot(){const _0x29aa6f=a0_0x400209,_0x4ad554=Module[_0x29aa6f(0x1b9)]()['filter'](_0x56f2a6=>_0x56f2a6!=='.'&&_0x56f2a6!=='..');return _0x4ad554;}export function embedTextInPngFile(_0x4e9aba,_0x14e730,_0x52d6c9){const _0x5c28fc=a0_0x400209;let _0x31a739=atob(_0x4e9aba[_0x5c28fc(0x1cf)](',')[0x1]),_0x2ed2ea=new Uint8Array(_0x31a739[_0x5c28fc(0x1d4)]);for(let _0x3e2e57=0x0;_0x3e2e57<_0x31a739[_0x5c28fc(0x1d4)];_0x3e2e57++){_0x2ed2ea[_0x3e2e57]=_0x31a739['charCodeAt'](_0x3e2e57);}let _0x48e1f5=new TextEncoder()[_0x5c28fc(0x1b0)](_0x5c28fc(0x1c0)+_0x14e730),_0x33061c=new Uint8Array(_0x2ed2ea[_0x5c28fc(0x1d4)]+_0x48e1f5[_0x5c28fc(0x1d4)]);_0x33061c[_0x5c28fc(0x1e7)](_0x2ed2ea,0x0),_0x33061c['set'](_0x48e1f5,_0x2ed2ea[_0x5c28fc(0x1d4)]);let _0x307fc5=new Blob([_0x33061c],{'type':'image/png'}),_0x89ccc3=new File([_0x307fc5],_0x52d6c9,{'type':_0x5c28fc(0x1c9)});return _0x89ccc3;}export function extractTextFromPngBase64(_0x9642d7){const _0x1eca99=a0_0x400209;let _0x48c34e=atob(_0x9642d7[_0x1eca99(0x1cf)](',')[0x1]),_0x24ec98=_0x1eca99(0x1c0),_0x4f0c31=_0x48c34e[_0x1eca99(0x1f4)](_0x24ec98);if(_0x4f0c31!==-0x1)return _0x48c34e[_0x1eca99(0x1c3)](_0x4f0c31+_0x24ec98['length']);return null;}export function fileSize(_0x4a1164){const _0x486c28=a0_0x400209,_0x495ebd=Module[_0x486c28(0x1af)](_0x4a1164);return _0x495ebd;}function a0_0x364b(){const _0x441e9f=['application/octet-stream','setItem','visible','disable','Cloud\x20upload\x20','Online!','2069742LeFoJp','uploadRom','0,0,','_imageState0','innerWidth','Auto\x20save\x20','getItem','listSaves','then','appendChild','textContent','set','uId','loadState','createObjectURL','remove','listRoms','listStates','/data/games/','persisted','turboF','log','downloadFile','getElementById','indexOf','uploadAll','replace','deleteFile','_dateState0','autoLoadCheats','4ulJphm','97176rejuMi','/data/screenshots/','_savedCheats','.ss0','editFileName','Cheat\x20Enabled!','2922zEWsrM','pauseGame','196qvmmSG','gbc1','2190zaetox','padStart','setFastForwardMultiplier','pagehide','#E0C068','turboState','buttonPress','timer','screenSize','FSSync','add','fileSize','encode','canvas','resumeGame','57013GnpVmn','6385oXUWsq','filter','saveState','_slot0.txt','FSInit','listScreenshots','toString','beforeunload','endsWith','includes','Paused!','listCheats','tEXtComment\x00','loadGame','.gbc','substring','gameName','classList','download','gbc','style','image/png','hidden','Do\x20you\x20want\x20to\x20load\x20save\x20state?','SDL2','870996DgsFDK','1041606HwAQKb','split','\x20time(s)','addEventListener','files','3008508YGncaz','length','control-setting'];a0_0x364b=function(){return _0x441e9f;};return a0_0x364b();}function a0_0x1662(_0xe8bee7,_0x4559b0){const _0x364b26=a0_0x364b();return a0_0x1662=function(_0x1662d5,_0x2378bd){_0x1662d5=_0x1662d5-0x1a2;let _0x4be2fd=_0x364b26[_0x1662d5];return _0x4be2fd;},a0_0x1662(_0xe8bee7,_0x4559b0);}export async function resumeGame(){const _0x83c84e=a0_0x400209;Module[_0x83c84e(0x1b2)](),Module[_0x83c84e(0x1cc)](),notiMessage('Resumed!',0x7d0);}export async function pauseGame(){const _0x533ab4=a0_0x400209;Module[_0x533ab4(0x202)](),Module['SDL2'](),notiMessage(_0x533ab4(0x1be),0x7d0);}export async function buttonPress(_0x21e979){const _0x3e93c3=a0_0x400209;Module[_0x3e93c3(0x1aa)](_0x21e979);}export async function buttonUnpress(_0x2552cb){Module['buttonUnpress'](_0x2552cb);}export async function screenShot(_0x11a5e5){const _0xaf873b=a0_0x400209,_0x890838=localStorage['getItem']('gameName')['replace'](/\.(gba|gbc|gb|zip)$/,''),_0x42529e=_0x890838+'_'+_0x11a5e5+'.png';await Module['screenshot'](_0x42529e),await Module[_0xaf873b(0x1ad)]();const _0x8d3a8f=await fileToBase64(Module['downloadFile'](_0xaf873b(0x1fc)+_0x42529e)),_0x262bf2=embedTextInPngFile(_0x8d3a8f,formatDateTime(Date['now']()),_0x42529e);Module[_0xaf873b(0x1f5)](_0x262bf2,()=>{const _0x22d110=_0xaf873b;localStorageFile(),Module[_0x22d110(0x1ad)]();});}export async function dowloadScreenShot(_0x5e6d72){const _0x31bdda=a0_0x400209;try{const _0x5f175a=await fileToBase64(Module[_0x31bdda(0x1f2)](_0x5e6d72));return _0x5f175a;}catch{}}export async function captureOCR(_0x7b54ee){const _0x4fbb51=a0_0x400209;Module['screenshot'](_0x7b54ee);const _0x5e20d6=Module[_0x4fbb51(0x1f2)](_0x4fbb51(0x1fc)+_0x7b54ee);return _0x5e20d6;}export async function setFastForwardMultiplier(_0x2a620e){const _0x5b649a=a0_0x400209;Module[_0x5b649a(0x1a6)](_0x2a620e);}export function uploadCheats(_0x51126b,_0x410994,_0x3521b5,_0x149ad4,_0x52a929){const _0x30e318=a0_0x400209;Module[_0x30e318(0x1f5)](_0x51126b,()=>{const _0x308ae9=_0x30e318;Module[_0x308ae9(0x1f9)](),setTimeout(()=>{const _0x3005cf=_0x308ae9;Module[_0x3005cf(0x1ad)]();},0x1f4),_0x149ad4&&(localStorage[_0x308ae9(0x1d7)](_0x410994+_0x308ae9(0x1fd),_0x3521b5),notiMessage(_0x308ae9(0x200),0x5dc)),_0x52a929[_0x308ae9(0x1e6)]=localStorage['getItem'](_0x410994+_0x308ae9(0x1fd)||'Off');});}