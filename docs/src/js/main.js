const a0_0x5df7a1=a0_0x5ce8;(function(_0x103b44,_0x55ee07){const _0x2d29e9=a0_0x5ce8,_0x185c2e=_0x103b44();while(!![]){try{const _0x5c2444=-parseInt(_0x2d29e9(0x1ab))/0x1*(-parseInt(_0x2d29e9(0x173))/0x2)+parseInt(_0x2d29e9(0x168))/0x3*(-parseInt(_0x2d29e9(0x171))/0x4)+-parseInt(_0x2d29e9(0x19e))/0x5+-parseInt(_0x2d29e9(0x1a4))/0x6*(-parseInt(_0x2d29e9(0x1ad))/0x7)+-parseInt(_0x2d29e9(0x190))/0x8+-parseInt(_0x2d29e9(0x1b5))/0x9+parseInt(_0x2d29e9(0x1a6))/0xa;if(_0x5c2444===_0x55ee07)break;else _0x185c2e['push'](_0x185c2e['shift']());}catch(_0x145347){_0x185c2e['push'](_0x185c2e['shift']());}}}(a0_0x503d,0x7b8a6));import a0_0x5636ae from'../core/mgba.js';function a0_0x5ce8(_0x49c2bd,_0x29c865){const _0x503d47=a0_0x503d();return a0_0x5ce8=function(_0x5ce82e,_0x321597){_0x5ce82e=_0x5ce82e-0x168;let _0x1ca229=_0x503d47[_0x5ce82e];return _0x1ca229;},a0_0x5ce8(_0x49c2bd,_0x29c865);}import*as a0_0xea2669 from'./gamepad.js';import{localStorageFile}from'./storage.js';import{dpUploadFile}from'./cloud.js';const Module={'canvas':document['getElementById'](a0_0x5df7a1(0x1c9))};function initializeCore(_0x300a65,_0x4a0c9f){_0x300a65(_0x4a0c9f)['then'](function(_0x3a4e17){const _0x4f9ad2=a0_0x5ce8;_0x3a4e17[_0x4f9ad2(0x197)]();});}initializeCore(a0_0x5636ae,Module);let countAutoSave=0x0,turboState=0x1,countUpload=0x0;const canvas=document[a0_0x5df7a1(0x181)](a0_0x5df7a1(0x1c9)),savedTurboState=localStorage[a0_0x5df7a1(0x196)](a0_0x5df7a1(0x1b7)),controlSetting=document[a0_0x5df7a1(0x181)](a0_0x5df7a1(0x17d));function handleVisibilityChange(_0x1e74ae){const _0xf310e7=a0_0x5df7a1;document[_0xf310e7(0x1b0)]===_0xf310e7(0x199)||_0x1e74ae?.['type']===_0xf310e7(0x16e)||_0x1e74ae?.[_0xf310e7(0x18e)]?(pauseGame(),canvas['classList'][_0xf310e7(0x175)](_0xf310e7(0x1c0))):(setTimeout(()=>{canvas['classList']['remove']('visible');},0x258),controlSetting[_0xf310e7(0x19c)][_0xf310e7(0x1c3)](_0xf310e7(0x1c0))&&resumeGame());}async function statusShow(){const _0x2aa508=a0_0x5df7a1;document['addEventListener']('pagehide',handleVisibilityChange),document[_0x2aa508(0x16f)](_0x2aa508(0x19d),handleVisibilityChange),window[_0x2aa508(0x16f)](_0x2aa508(0x16e),handleVisibilityChange),restoreArea(),startTimer(),savedTurboState!==null&&(turboState=parseInt(savedTurboState),await a0_0xea2669['turboF'](turboState)),await delay(0xc8),await Module[_0x2aa508(0x1c5)](),await delay(0x320),await led(parseInt(localStorage[_0x2aa508(0x196)](_0x2aa508(0x1c4)))),await notiMessage(gameVer,0x3e8);}async function saveStatePeriodically(){const _0x4d8fbd=a0_0x5df7a1;await ledSave(_0x4d8fbd(0x1b6)),await Module[_0x4d8fbd(0x1bc)](0x0),await Module['FSSync'](),await screenShot(0x0),console['log'](_0x4d8fbd(0x1c8)+ ++countAutoSave+_0x4d8fbd(0x17a));}async function saveStateInCloud(){const _0x5276d6=a0_0x5df7a1,_0x23aa18=localStorage['getItem']('gameName'),_0x389a7f=_0x23aa18[_0x5276d6(0x182)](/\.(zip|gb|gbc|gba)$/,_0x5276d6(0x1c2)),_0x5cd120=localStorage[_0x5276d6(0x196)]('uId');navigator[_0x5276d6(0x19f)]&&(_0x5cd120&&(await ledSave(_0x5276d6(0x169)),await delay(0x3e8),await dpUploadFile(_0x389a7f,Module[_0x5276d6(0x187)](_0x5276d6(0x170)+_0x389a7f),_0x5276d6(0x1a2)),await lockNoti('',_0x5276d6(0x19b)+ ++countUpload+_0x5276d6(0x17a),0x7d0)));}function startTimer(){let [_0x78ca7f,_0x2b036a,_0x53919c,_0x3facaa,_0x1ab591]=[0x0,0x0,0x0,0x0,0x0];setInterval(()=>{const _0xba7708=a0_0x5ce8;_0x53919c++,_0x3facaa++,_0x1ab591++;if(_0x53919c===0x3c)[_0x53919c,_0x2b036a]=[0x0,_0x2b036a+0x1];if(_0x2b036a===0x3c)[_0x2b036a,_0x78ca7f]=[0x0,_0x78ca7f+0x1];document[_0xba7708(0x181)](_0xba7708(0x1a1))[_0xba7708(0x19a)]=_0x78ca7f+'h'+_0x2b036a[_0xba7708(0x18c)]()['padStart'](0x2,'0')+'.'+_0x53919c[_0xba7708(0x18c)]()[_0xba7708(0x1a9)](0x2,'0');_0x3facaa===0x3c&&(saveStatePeriodically(),_0x3facaa=0x0);;_0x1ab591===0x708&&(saveStateInCloud(),_0x1ab591=0x0);;},0x3e8);}export async function uploadGame(_0x53eee9){const _0x44631d=a0_0x5df7a1,_0x11e89e=_0x53eee9[_0x44631d(0x18b)][0x0];Module[_0x44631d(0x1ba)](_0x11e89e,()=>{Module['FSSync']();});}export async function loadGame(_0x1eaeba){const _0x126613=a0_0x5df7a1,_0x508b64=_0x1eaeba[_0x126613(0x182)](/\.(gba|gbc|gb|zip)$/,_0x126613(0x1c2)),_0x9c52fb=Module['listStates']()[_0x126613(0x180)](_0x52a240=>_0x52a240!=='.'&&_0x52a240!=='..');intro[_0x126613(0x19c)][_0x126613(0x175)]('disable'),errorLogElements[0x0]['style'][_0x126613(0x179)]='0',ingame[_0x126613(0x19c)][_0x126613(0x172)](_0x126613(0x17e)),_0x1eaeba[_0x126613(0x188)](_0x126613(0x1a5))||_0x1eaeba[_0x126613(0x188)]('.gb')?(canvas[_0x126613(0x19c)][_0x126613(0x175)](_0x126613(0x1c6)),areaTrans[_0x126613(0x19c)][_0x126613(0x175)](_0x126613(0x16b)),localStorage[_0x126613(0x1b4)](_0x126613(0x185),_0x126613(0x18a)+(window['innerWidth']-0xe6)+','+(window['innerWidth']-0xe6)*0x9/0xa)):localStorage[_0x126613(0x1b4)]('screenSize',_0x126613(0x18a)+(window['innerWidth']-0x96)+','+(window[_0x126613(0x1ae)]-0x96)*0x2/0x3),_0x9c52fb['includes'](_0x508b64)?(await Module['loadGame'](_0x126613(0x178)+_0x1eaeba),confirm('Do\x20you\x20want\x20to\x20load\x20save\x20state?')&&(await Module[_0x126613(0x1ac)](0x0),localStorage['setItem']('gameName',_0x1eaeba),console[_0x126613(0x1ca)](_0x1eaeba))):(await Module[_0x126613(0x192)](_0x126613(0x178)+_0x1eaeba),localStorage[_0x126613(0x1b4)](_0x126613(0x1b2),_0x1eaeba),console[_0x126613(0x1ca)](_0x1eaeba)),await statusShow();}function a0_0x503d(){const _0x43efea=['createElement','hidden','textContent','Cloud\x20upload\x20','classList','visibilitychange','4327665lkvCUb','onLine','substring','timer','state','click','32340OLcPTC','.gbc','8970680UrXCpb','listRoms','Resumed!','padStart','autoLoadCheats','185729QzFdiz','loadState','1162jVJvTZ','innerWidth','revokeObjectURL','visibilityState','charCodeAt','gameName','indexOf','setItem','6412194tVugBK','#20A5A6','turboState','split','resumeGame','uploadRom','fileSize','saveState','createObjectURL','.png','Paused!','visible','encode','.ss0','contains','slotStateSaved','SDL2','gbc','Off','Auto\x20save\x20','canvas','log','9ClKOvI','#E0C068','listStates','gbc1','uploadAll','screenshot','beforeunload','addEventListener','/data/states/','813964qmzOHw','remove','10lIVhwG','set','add','appendChild','listScreenshots','/data/games/','bottom','\x20time(s)','image/png','buttonUnpress','control-setting','disable','download','filter','getElementById','replace','FSSync','setVolume','screenSize','setFastForwardMultiplier','downloadFile','endsWith','listSaves','0,0,','files','toString','_savedCheats','persisted','href','207672ZtKuzO','listCheats','loadGame','/data/screenshots/','tEXtComment\x00','length','getItem','FSInit'];a0_0x503d=function(){return _0x43efea;};return a0_0x503d();}export async function saveState(_0x383a34){const _0x4fe23b=a0_0x5df7a1;await Module[_0x4fe23b(0x1bc)](_0x383a34),await Module['FSSync']();}export async function loadState(_0x1eb548){const _0x4990a3=a0_0x5df7a1;await Module[_0x4990a3(0x1ac)](_0x1eb548);}export async function downloadFile(_0x2a4959,_0x4f12ae){const _0x4686f5=a0_0x5df7a1,_0x18c5ae=Module['downloadFile'](_0x2a4959),_0x1bf008=document[_0x4686f5(0x198)]('a');document['body'][_0x4686f5(0x176)](_0x1bf008),_0x1bf008[_0x4686f5(0x17f)]=_0x4f12ae;const _0x3e5248=new Blob([_0x18c5ae],{'type':'application/octet-stream'});_0x1bf008[_0x4686f5(0x18f)]=URL[_0x4686f5(0x1bd)](_0x3e5248),_0x1bf008[_0x4686f5(0x1a3)](),URL[_0x4686f5(0x1af)](_0x3e5248),_0x1bf008[_0x4686f5(0x172)]();}export function downloadFileInCloud(_0x1673cc){const _0xdc8c49=a0_0x5df7a1,_0x1714e3=Module[_0xdc8c49(0x187)](_0x1673cc);return _0x1714e3;}export async function uploadFileInCloud(_0x355684){const _0x243495=a0_0x5df7a1;Module[_0x243495(0x16c)](_0x355684,()=>{const _0x45616d=_0x243495;localStorageFile(),Module[_0x45616d(0x183)]();});}export async function uploadFile(_0x32249a){const _0x1237c1=a0_0x5df7a1,_0x49dc0f=_0x32249a[_0x1237c1(0x18b)][0x0];Module['uploadAll'](_0x49dc0f,()=>{const _0x405cc8=_0x1237c1;localStorageFile(),Module[_0x405cc8(0x183)]();});}export async function editFile(_0x6f3f3a,_0x2bd348,_0x5f2f5b){const _0x41f548=a0_0x5df7a1;await Module['editFileName'](_0x6f3f3a,_0x2bd348,_0x5f2f5b),await Module[_0x41f548(0x183)]();}export async function deleteFile(_0x207410){const _0xcc2188=a0_0x5df7a1;await Module['deleteFile'](_0x207410),await Module[_0xcc2188(0x183)]();}export function listGame(){const _0xb8b813=a0_0x5df7a1,_0xd99f9b=Module[_0xb8b813(0x1a7)]()[_0xb8b813(0x180)](_0x1dabc6=>_0x1dabc6!=='.'&&_0x1dabc6!=='..');return _0xd99f9b;}export function listSave(){const _0x35ac69=a0_0x5df7a1,_0x254582=Module[_0x35ac69(0x189)]()[_0x35ac69(0x180)](_0x2987d4=>_0x2987d4!=='.'&&_0x2987d4!=='..');return _0x254582;}export function listState(){const _0x1f1ac2=a0_0x5df7a1,_0x1cbb25=Module[_0x1f1ac2(0x16a)]()[_0x1f1ac2(0x180)](_0x117361=>_0x117361!=='.'&&_0x117361!=='..');return _0x1cbb25;}export function listCheat(){const _0x5a990e=a0_0x5df7a1,_0x31ffff=Module[_0x5a990e(0x191)]()['filter'](_0x3e0114=>_0x3e0114!=='.'&&_0x3e0114!=='..');return _0x31ffff;}export function listScreenshot(){const _0xbba66d=a0_0x5df7a1,_0x246a1f=Module[_0xbba66d(0x177)]()[_0xbba66d(0x180)](_0x5f15ed=>_0x5f15ed!=='.'&&_0x5f15ed!=='..');return _0x246a1f;}export function embedTextInPngFile(_0xa6cb88,_0x477a8e,_0x4e7b2a){const _0x5dafd8=a0_0x5df7a1;let _0x44e046=atob(_0xa6cb88[_0x5dafd8(0x1b8)](',')[0x1]),_0x21b12b=new Uint8Array(_0x44e046[_0x5dafd8(0x195)]);for(let _0x321b5a=0x0;_0x321b5a<_0x44e046['length'];_0x321b5a++){_0x21b12b[_0x321b5a]=_0x44e046[_0x5dafd8(0x1b1)](_0x321b5a);}let _0x3d6c3b=new TextEncoder()[_0x5dafd8(0x1c1)](_0x5dafd8(0x194)+_0x477a8e),_0x2c1004=new Uint8Array(_0x21b12b[_0x5dafd8(0x195)]+_0x3d6c3b[_0x5dafd8(0x195)]);_0x2c1004[_0x5dafd8(0x174)](_0x21b12b,0x0),_0x2c1004['set'](_0x3d6c3b,_0x21b12b[_0x5dafd8(0x195)]);let _0xb84722=new Blob([_0x2c1004],{'type':_0x5dafd8(0x17b)}),_0xfa957b=new File([_0xb84722],_0x4e7b2a,{'type':_0x5dafd8(0x17b)});return _0xfa957b;}export function extractTextFromPngBase64(_0x5bd7aa){const _0xa883d3=a0_0x5df7a1;let _0x4557c3=atob(_0x5bd7aa[_0xa883d3(0x1b8)](',')[0x1]),_0x5ea3ac=_0xa883d3(0x194),_0x14604a=_0x4557c3[_0xa883d3(0x1b3)](_0x5ea3ac);if(_0x14604a!==-0x1)return _0x4557c3[_0xa883d3(0x1a0)](_0x14604a+_0x5ea3ac[_0xa883d3(0x195)]);return null;}export function fileSize(_0x14dc5b){const _0x51f2ef=a0_0x5df7a1,_0x5dc29a=Module[_0x51f2ef(0x1bb)](_0x14dc5b);return _0x5dc29a;}export async function resumeGame(){const _0x4b3d75=a0_0x5df7a1;Module[_0x4b3d75(0x1b9)](),Module[_0x4b3d75(0x1c5)](),notiMessage(_0x4b3d75(0x1a8),0x7d0);}export async function pauseGame(){const _0xab8a47=a0_0x5df7a1;Module['pauseGame'](),Module[_0xab8a47(0x1c5)](),notiMessage(_0xab8a47(0x1bf),0x7d0);}export async function buttonPress(_0x496ec3){Module['buttonPress'](_0x496ec3);}export async function buttonUnpress(_0x18cfd7){const _0x475782=a0_0x5df7a1;Module[_0x475782(0x17c)](_0x18cfd7);}export async function screenShot(_0x5bbe04){const _0x3db074=a0_0x5df7a1,_0x4acc20=localStorage[_0x3db074(0x196)](_0x3db074(0x1b2))[_0x3db074(0x182)](/\.(gba|gbc|gb|zip)$/,''),_0x6af8e4=_0x4acc20+'_'+_0x5bbe04+_0x3db074(0x1be);await Module[_0x3db074(0x16d)](_0x6af8e4),await Module[_0x3db074(0x183)]();const _0x3b4f90=await fileToBase64(Module['downloadFile']('/data/screenshots/'+_0x6af8e4)),_0x58c3dc=embedTextInPngFile(_0x3b4f90,formatDateTime(Date['now']()),_0x6af8e4);Module['uploadAll'](_0x58c3dc,()=>{const _0x7fee9e=_0x3db074;localStorageFile(),Module[_0x7fee9e(0x183)]();});}export async function dowloadScreenShot(_0x5a4c28){const _0x2363d8=a0_0x5df7a1;try{const _0x495cd0=await fileToBase64(Module[_0x2363d8(0x187)](_0x5a4c28));return _0x495cd0;}catch{}}export async function captureOCR(_0x5c93e7){const _0x2c3952=a0_0x5df7a1;Module[_0x2c3952(0x16d)](_0x5c93e7);const _0x363180=Module[_0x2c3952(0x187)](_0x2c3952(0x193)+_0x5c93e7);return _0x363180;}export async function setFastForwardMultiplier(_0x32b72f){const _0x985a31=a0_0x5df7a1;Module[_0x985a31(0x186)](_0x32b72f);}export function uploadCheats(_0x5e6b8a,_0x52a713,_0x1b63b5,_0x47628b,_0x47c6b5){const _0x1be4ed=a0_0x5df7a1;Module[_0x1be4ed(0x16c)](_0x5e6b8a,()=>{const _0x411a27=_0x1be4ed;Module[_0x411a27(0x1aa)](),setTimeout(()=>{const _0x28a386=_0x411a27;Module[_0x28a386(0x183)]();},0x1f4),_0x47628b&&(localStorage[_0x411a27(0x1b4)](_0x52a713+_0x411a27(0x18d),_0x1b63b5),notiMessage('Cheat\x20Enabled!',0x5dc)),_0x47c6b5[_0x411a27(0x19a)]=localStorage[_0x411a27(0x196)](_0x52a713+_0x411a27(0x18d)||_0x411a27(0x1c7));});}export function setVolume(_0x1e96a9){const _0x57408c=a0_0x5df7a1;Module[_0x57408c(0x184)](_0x1e96a9);}