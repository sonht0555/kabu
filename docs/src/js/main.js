const a0_0x55c96d=a0_0x3bb2;function a0_0x191e(){const _0x136ce3=['gbc1','bottom','type','turboState','set','toString','1908ZdKhma','tEXtComment\x00','classList','application/octet-stream','downloadFile','screenshot','238570CzSdOj','listStates','22504RjaEyG','1199037wehefc','setFastForwardMultiplier','pauseGame','gameName','5HknfLE','listSaves','createObjectURL','setItem','/data/games/','Off','deleteFile','getItem','substring','add','gbc','canvas','turboF','padStart','includes','length','buttonPress','listRoms','Cheat\x20Enabled!','encode','.gbc','replace','visibilityState','Auto\x20save\x20','.png','beforeunload','filter','SDL2','FSSync','FSInit','log','uploadAll','body','disable','style','visible','50GKSPgY','files','getElementById','contains','control-setting','_savedCheats','#E0C068','remove','onLine','image/png','loadGame','state','6707586SuPJBA','0,0,','indexOf','580868rliUJz','519002RanVmO','now','innerWidth','download','addEventListener','slotStateSaved','href','visibilitychange','textContent','charCodeAt','2404971vNoYCu','autoLoadCheats','fileSize','Cloud\x20upload\x20','split','screenSize','Do\x20you\x20want\x20to\x20load\x20save\x20state?','.gb','3MyIQDb','pagehide','loadState','saveState','setVolume','/data/screenshots/','persisted','\x20time(s)','then'];a0_0x191e=function(){return _0x136ce3;};return a0_0x191e();}function a0_0x3bb2(_0x2c4c80,_0x54be01){const _0x191e8d=a0_0x191e();return a0_0x3bb2=function(_0x3bb277,_0x593599){_0x3bb277=_0x3bb277-0xfc;let _0x171c11=_0x191e8d[_0x3bb277];return _0x171c11;},a0_0x3bb2(_0x2c4c80,_0x54be01);}(function(_0x398e05,_0x160988){const _0x39e1fb=a0_0x3bb2,_0x1a568e=_0x398e05();while(!![]){try{const _0x51d7e9=-parseInt(_0x39e1fb(0x112))/0x1*(parseInt(_0x39e1fb(0x127))/0x2)+parseInt(_0x39e1fb(0x10a))/0x3+-parseInt(_0x39e1fb(0xff))/0x4+parseInt(_0x39e1fb(0x12e))/0x5*(parseInt(_0x39e1fb(0xfc))/0x6)+-parseInt(_0x39e1fb(0x12a))/0x7+-parseInt(_0x39e1fb(0x129))/0x8*(parseInt(_0x39e1fb(0x121))/0x9)+-parseInt(_0x39e1fb(0x152))/0xa*(-parseInt(_0x39e1fb(0x100))/0xb);if(_0x51d7e9===_0x160988)break;else _0x1a568e['push'](_0x1a568e['shift']());}catch(_0x6127ea){_0x1a568e['push'](_0x1a568e['shift']());}}}(a0_0x191e,0xd802b));import a0_0x584096 from'../core/mgba.js';import*as a0_0x556adb from'./gamepad.js';import{localStorageFile}from'./storage.js';import{dpUploadFile}from'./cloud.js';const Module={'canvas':document[a0_0x55c96d(0x154)](a0_0x55c96d(0x139))};function initializeCore(_0x171a31,_0x5cd735){const _0x501d08=a0_0x55c96d;_0x171a31(_0x5cd735)[_0x501d08(0x11a)](function(_0x10c77c){const _0x378c76=_0x501d08;_0x10c77c[_0x378c76(0x14b)]();});}initializeCore(a0_0x584096,Module);let countAutoSave=0x0,turboState=0x1,countUpload=0x0;const canvas=document[a0_0x55c96d(0x154)]('canvas'),savedTurboState=localStorage[a0_0x55c96d(0x135)](a0_0x55c96d(0x11e)),controlSetting=document['getElementById'](a0_0x55c96d(0x156));function handleVisibilityChange(_0x1f6eb4){const _0x10c701=a0_0x55c96d;document[_0x10c701(0x144)]==='hidden'||_0x1f6eb4?.[_0x10c701(0x11d)]===_0x10c701(0x147)||_0x1f6eb4?.[_0x10c701(0x118)]?(pauseGame(),canvas[_0x10c701(0x123)][_0x10c701(0x137)](_0x10c701(0x151))):(setTimeout(()=>{const _0x175044=_0x10c701;canvas['classList'][_0x175044(0x159)](_0x175044(0x151));},0x258),controlSetting[_0x10c701(0x123)][_0x10c701(0x155)](_0x10c701(0x151))&&resumeGame());}async function statusShow(){const _0xbb8679=a0_0x55c96d;document[_0xbb8679(0x104)](_0xbb8679(0x113),handleVisibilityChange),document[_0xbb8679(0x104)](_0xbb8679(0x107),handleVisibilityChange),window['addEventListener'](_0xbb8679(0x147),handleVisibilityChange),restoreArea(),startTimer(),savedTurboState!==null&&(turboState=parseInt(savedTurboState),await a0_0x556adb[_0xbb8679(0x13a)](turboState)),await delay(0xc8),await Module[_0xbb8679(0x149)](),await delay(0x320),await led(parseInt(localStorage[_0xbb8679(0x135)](_0xbb8679(0x105)))),await notiMessage(gameVer,0x3e8);}async function saveStatePeriodically(){const _0x4113eb=a0_0x55c96d;await ledSave('#20A5A6'),await Module[_0x4113eb(0x115)](0x0),await Module[_0x4113eb(0x14a)](),await screenShot(0x0),console[_0x4113eb(0x14c)](_0x4113eb(0x145)+ ++countAutoSave+_0x4113eb(0x119));}async function saveStateInCloud(){const _0x311182=a0_0x55c96d,_0x29a456=localStorage[_0x311182(0x135)](_0x311182(0x12d)),_0x3c6b0c=_0x29a456[_0x311182(0x143)](/\.(zip|gb|gbc|gba)$/,'.ss0'),_0x474ec2=localStorage['getItem']('uId');navigator[_0x311182(0x15a)]&&(_0x474ec2&&(await ledSave(_0x311182(0x158)),await delay(0x3e8),await dpUploadFile(_0x3c6b0c,Module[_0x311182(0x125)]('/data/states/'+_0x3c6b0c),_0x311182(0x15d)),await lockNoti('',_0x311182(0x10d)+ ++countUpload+_0x311182(0x119),0x7d0)));}function startTimer(){let [_0x4ae8b2,_0x1517d7,_0x423aed,_0x2a78bc,_0x5ed0a6]=[0x0,0x0,0x0,0x0,0x0];setInterval(()=>{const _0x502a92=a0_0x3bb2;_0x423aed++,_0x2a78bc++,_0x5ed0a6++;if(_0x423aed===0x3c)[_0x423aed,_0x1517d7]=[0x0,_0x1517d7+0x1];if(_0x1517d7===0x3c)[_0x1517d7,_0x4ae8b2]=[0x0,_0x4ae8b2+0x1];document['getElementById']('timer')[_0x502a92(0x108)]=_0x4ae8b2+'h'+_0x1517d7[_0x502a92(0x120)]()[_0x502a92(0x13b)](0x2,'0')+'.'+_0x423aed['toString']()['padStart'](0x2,'0');_0x2a78bc===0x3c&&(saveStatePeriodically(),_0x2a78bc=0x0);;_0x5ed0a6===0x708&&(saveStateInCloud(),_0x5ed0a6=0x0);;},0x3e8);}export async function uploadGame(_0x3f970d){const _0x2444e2=a0_0x55c96d,_0x4630be=_0x3f970d[_0x2444e2(0x153)][0x0];Module['uploadRom'](_0x4630be,()=>{Module['FSSync']();});}export async function loadGame(_0x95ccd3){const _0x43cfc0=a0_0x55c96d,_0x235b4e=_0x95ccd3[_0x43cfc0(0x143)](/\.(gba|gbc|gb|zip)$/,'.ss0'),_0x54e492=Module[_0x43cfc0(0x128)]()[_0x43cfc0(0x148)](_0xf54a4c=>_0xf54a4c!=='.'&&_0xf54a4c!=='..');intro[_0x43cfc0(0x123)][_0x43cfc0(0x137)]('disable'),errorLogElements[0x0][_0x43cfc0(0x150)][_0x43cfc0(0x11c)]='0',ingame[_0x43cfc0(0x123)][_0x43cfc0(0x159)](_0x43cfc0(0x14f)),_0x95ccd3['endsWith'](_0x43cfc0(0x142))||_0x95ccd3['endsWith'](_0x43cfc0(0x111))?(canvas['classList'][_0x43cfc0(0x137)](_0x43cfc0(0x138)),areaTrans['classList'][_0x43cfc0(0x137)](_0x43cfc0(0x11b)),localStorage['setItem']('screenSize',_0x43cfc0(0xfd)+(window[_0x43cfc0(0x102)]-0xe6)+','+(window[_0x43cfc0(0x102)]-0xe6)*0x9/0xa)):localStorage['setItem'](_0x43cfc0(0x10f),_0x43cfc0(0xfd)+(window[_0x43cfc0(0x102)]-0x96)+','+(window['innerWidth']-0x96)*0x2/0x3),_0x54e492[_0x43cfc0(0x13c)](_0x235b4e)?(await Module[_0x43cfc0(0x15c)]('/data/games/'+_0x95ccd3),confirm(_0x43cfc0(0x110))&&(await Module[_0x43cfc0(0x114)](0x0),localStorage['setItem']('gameName',_0x95ccd3),console[_0x43cfc0(0x14c)](_0x95ccd3))):(await Module[_0x43cfc0(0x15c)](_0x43cfc0(0x132)+_0x95ccd3),localStorage[_0x43cfc0(0x131)](_0x43cfc0(0x12d),_0x95ccd3),console['log'](_0x95ccd3)),await statusShow();}export async function saveState(_0x56e210){const _0x2a6b03=a0_0x55c96d;await Module[_0x2a6b03(0x115)](_0x56e210),await Module['FSSync']();}export async function loadState(_0x4b0c5c){const _0x4f188c=a0_0x55c96d;await Module[_0x4f188c(0x114)](_0x4b0c5c);}export async function downloadFile(_0xdcd711,_0x9b62f8){const _0x197428=a0_0x55c96d,_0x438a0c=Module[_0x197428(0x125)](_0xdcd711),_0x3c2aac=document['createElement']('a');document[_0x197428(0x14e)]['appendChild'](_0x3c2aac),_0x3c2aac[_0x197428(0x103)]=_0x9b62f8;const _0x39148c=new Blob([_0x438a0c],{'type':_0x197428(0x124)});_0x3c2aac[_0x197428(0x106)]=URL[_0x197428(0x130)](_0x39148c),_0x3c2aac['click'](),URL['revokeObjectURL'](_0x39148c),_0x3c2aac[_0x197428(0x159)]();}export function downloadFileInCloud(_0x10cfe7){const _0x2d0782=a0_0x55c96d,_0x324c4c=Module[_0x2d0782(0x125)](_0x10cfe7);return _0x324c4c;}export async function uploadFileInCloud(_0x5926b1){Module['uploadAll'](_0x5926b1,()=>{const _0xf55c2e=a0_0x3bb2;localStorageFile(),Module[_0xf55c2e(0x14a)]();});}export async function uploadFile(_0x573c92){const _0x3c4bd7=a0_0x55c96d,_0x532df8=_0x573c92[_0x3c4bd7(0x153)][0x0];Module[_0x3c4bd7(0x14d)](_0x532df8,()=>{const _0x2442c8=_0x3c4bd7;localStorageFile(),Module[_0x2442c8(0x14a)]();});}export async function editFile(_0x22f053,_0x1b291d,_0x7ac91d){const _0x5aefae=a0_0x55c96d;await Module['editFileName'](_0x22f053,_0x1b291d,_0x7ac91d),await Module[_0x5aefae(0x14a)]();}export async function deleteFile(_0x40dcff){const _0x2ee41c=a0_0x55c96d;await Module[_0x2ee41c(0x134)](_0x40dcff),await Module[_0x2ee41c(0x14a)]();}export function listGame(){const _0xf53424=a0_0x55c96d,_0x5b33e=Module[_0xf53424(0x13f)]()[_0xf53424(0x148)](_0x253cd4=>_0x253cd4!=='.'&&_0x253cd4!=='..');return _0x5b33e;}export function listSave(){const _0x3a1cb2=a0_0x55c96d,_0x3ac784=Module[_0x3a1cb2(0x12f)]()[_0x3a1cb2(0x148)](_0x21ff6e=>_0x21ff6e!=='.'&&_0x21ff6e!=='..');return _0x3ac784;}export function listState(){const _0x1b668e=a0_0x55c96d,_0x5f121f=Module['listStates']()[_0x1b668e(0x148)](_0xddb0cd=>_0xddb0cd!=='.'&&_0xddb0cd!=='..');return _0x5f121f;}export function listCheat(){const _0xe83deb=Module['listCheats']()['filter'](_0x434796=>_0x434796!=='.'&&_0x434796!=='..');return _0xe83deb;}export function listScreenshot(){const _0x38800e=a0_0x55c96d,_0x1bfc83=Module['listScreenshots']()[_0x38800e(0x148)](_0x239301=>_0x239301!=='.'&&_0x239301!=='..');return _0x1bfc83;}export function embedTextInPngFile(_0x59ef0b,_0x7926ed,_0x20b23c){const _0x4b1221=a0_0x55c96d;let _0x232cbf=atob(_0x59ef0b[_0x4b1221(0x10e)](',')[0x1]),_0x15bd20=new Uint8Array(_0x232cbf[_0x4b1221(0x13d)]);for(let _0x1ee9ed=0x0;_0x1ee9ed<_0x232cbf[_0x4b1221(0x13d)];_0x1ee9ed++){_0x15bd20[_0x1ee9ed]=_0x232cbf[_0x4b1221(0x109)](_0x1ee9ed);}let _0x1dd9b8=new TextEncoder()[_0x4b1221(0x141)](_0x4b1221(0x122)+_0x7926ed),_0x4b8749=new Uint8Array(_0x15bd20[_0x4b1221(0x13d)]+_0x1dd9b8[_0x4b1221(0x13d)]);_0x4b8749[_0x4b1221(0x11f)](_0x15bd20,0x0),_0x4b8749[_0x4b1221(0x11f)](_0x1dd9b8,_0x15bd20['length']);let _0x622f42=new Blob([_0x4b8749],{'type':_0x4b1221(0x15b)}),_0x45ac84=new File([_0x622f42],_0x20b23c,{'type':_0x4b1221(0x15b)});return _0x45ac84;}export function extractTextFromPngBase64(_0x531ce0){const _0x19da4c=a0_0x55c96d;let _0x5675f1=atob(_0x531ce0[_0x19da4c(0x10e)](',')[0x1]),_0x132e81=_0x19da4c(0x122),_0xb1205a=_0x5675f1[_0x19da4c(0xfe)](_0x132e81);if(_0xb1205a!==-0x1)return _0x5675f1[_0x19da4c(0x136)](_0xb1205a+_0x132e81['length']);return null;}export function fileSize(_0x5f4df3){const _0x487128=a0_0x55c96d,_0xbdf5a0=Module[_0x487128(0x10c)](_0x5f4df3);return _0xbdf5a0;}export async function resumeGame(){const _0xb7e613=a0_0x55c96d;Module['resumeGame'](),Module[_0xb7e613(0x149)](),notiMessage('Resumed!',0x7d0);}export async function pauseGame(){const _0x564789=a0_0x55c96d;Module[_0x564789(0x12c)](),Module['SDL2'](),notiMessage('Paused!',0x7d0);}export async function buttonPress(_0xc86eb0){const _0x6e4ab7=a0_0x55c96d;Module[_0x6e4ab7(0x13e)](_0xc86eb0);}export async function buttonUnpress(_0x5f1cac){Module['buttonUnpress'](_0x5f1cac);}export async function screenShot(_0x23ccc3){const _0x15eced=a0_0x55c96d,_0x3e2c87=localStorage[_0x15eced(0x135)](_0x15eced(0x12d))[_0x15eced(0x143)](/\.(gba|gbc|gb|zip)$/,''),_0x3d2c06=_0x3e2c87+'_'+_0x23ccc3+_0x15eced(0x146);await Module[_0x15eced(0x126)](_0x3d2c06),await Module[_0x15eced(0x14a)]();const _0x2fae57=await fileToBase64(Module['downloadFile'](_0x15eced(0x117)+_0x3d2c06)),_0x23ea5c=embedTextInPngFile(_0x2fae57,formatDateTime(Date[_0x15eced(0x101)]()),_0x3d2c06);Module[_0x15eced(0x14d)](_0x23ea5c,()=>{const _0xf48cec=_0x15eced;localStorageFile(),Module[_0xf48cec(0x14a)]();});}export async function dowloadScreenShot(_0x1fdcd3){const _0x32f76a=a0_0x55c96d;try{const _0x3c68d8=await fileToBase64(Module[_0x32f76a(0x125)](_0x1fdcd3));return _0x3c68d8;}catch{}}export async function captureOCR(_0x168c7e){const _0x5547e4=a0_0x55c96d;Module['screenshot'](_0x168c7e);const _0x5d3779=Module['downloadFile'](_0x5547e4(0x117)+_0x168c7e);return _0x5d3779;}export async function setFastForwardMultiplier(_0x48b873){const _0xc19ba5=a0_0x55c96d;Module[_0xc19ba5(0x12b)](_0x48b873);}export function uploadCheats(_0x428e83,_0x4a98df,_0x2d78b7,_0xe0b9df,_0x304dcc){Module['uploadAll'](_0x428e83,()=>{const _0x4e9617=a0_0x3bb2;Module[_0x4e9617(0x10b)](),setTimeout(()=>{const _0x3d27d0=_0x4e9617;Module[_0x3d27d0(0x14a)]();},0x1f4),_0xe0b9df&&(localStorage[_0x4e9617(0x131)](_0x4a98df+'_savedCheats',_0x2d78b7),notiMessage(_0x4e9617(0x140),0x5dc)),_0x304dcc[_0x4e9617(0x108)]=localStorage[_0x4e9617(0x135)](_0x4a98df+_0x4e9617(0x157)||_0x4e9617(0x133));});}export function setVolume(_0xf9d4c6){const _0x5b396e=a0_0x55c96d;Module[_0x5b396e(0x116)](_0xf9d4c6);}