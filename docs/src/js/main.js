const a0_0x2f77a4=a0_0x435c;(function(_0x2159e5,_0x2337bb){const _0x579cf2=a0_0x435c,_0x183452=_0x2159e5();while(!![]){try{const _0xebf720=-parseInt(_0x579cf2(0x10e))/0x1+parseInt(_0x579cf2(0x10f))/0x2+-parseInt(_0x579cf2(0xf4))/0x3*(parseInt(_0x579cf2(0x124))/0x4)+parseInt(_0x579cf2(0x107))/0x5*(parseInt(_0x579cf2(0xd5))/0x6)+parseInt(_0x579cf2(0x125))/0x7+parseInt(_0x579cf2(0x10b))/0x8+parseInt(_0x579cf2(0xe8))/0x9*(-parseInt(_0x579cf2(0x112))/0xa);if(_0xebf720===_0x2337bb)break;else _0x183452['push'](_0x183452['shift']());}catch(_0x35dd42){_0x183452['push'](_0x183452['shift']());}}}(a0_0x3235,0x2c2c2));import a0_0x5bf63c from'../core/mgba.js';import*as a0_0x1a7cda from'./gamepad.js';import{localStorageFile}from'./storage.js';import{dpUploadFile,dpRefreshToken}from'./cloud.js';const Module={'canvas':document['getElementById'](a0_0x2f77a4(0xcf))};function initializeCore(_0x422c28,_0x4ca219){_0x422c28(_0x4ca219)['then'](function(_0x18aa6b){const _0x2d80ca=a0_0x435c;_0x18aa6b[_0x2d80ca(0xf0)]();});}initializeCore(a0_0x5bf63c,Module);let countAutoSave=0x0,turboState=0x1,countUpload=0x0;const canvas=document[a0_0x2f77a4(0xe5)](a0_0x2f77a4(0xcf)),savedTurboState=localStorage[a0_0x2f77a4(0x10a)](a0_0x2f77a4(0xea)),controlSetting=document['getElementById'](a0_0x2f77a4(0xfe));function handleVisibilityChange(_0x14cd5d){const _0x23b672=a0_0x2f77a4;document[_0x23b672(0x103)]===_0x23b672(0xd4)||_0x14cd5d?.[_0x23b672(0xf9)]===_0x23b672(0x104)||_0x14cd5d?.['persisted']?(pauseGame(),canvas[_0x23b672(0x12f)][_0x23b672(0x115)](_0x23b672(0xd8))):(setTimeout(()=>{const _0x287851=_0x23b672;canvas[_0x287851(0x12f)][_0x287851(0xf1)](_0x287851(0xd8));},0x258),controlSetting[_0x23b672(0x12f)][_0x23b672(0xe3)](_0x23b672(0xd8))&&resumeGame());}function a0_0x3235(){const _0x314023=['2008860PnrAhs','body','deleteFile','now','Error\x20uploadCheat:','setFastForwardMultiplier','replace','.png','screenshot','_imageState','classList','No\x20screenshot!','uId','gameName','uploadSaveOrSaveState','toString','createObjectURL','loadGame','Paused!','canvas','_dateState0','setItem','click','/data/states/','hidden','793266tVjBvx','Cheat\x20Enabled!','gbc1','visible','.gbc','files','gbc','visibilitychange','listGames','endsWith','turboF','pagehide','downloadFile','listStates','contains','Resumed!','getElementById','loadState','uploadRom','108YUbSwm','pauseGame','turboState','innerWidth','log','Cheat\x20uploaded\x20successfully:','text/plain','.gb','FSInit','remove','/data/screenshots/','revokeObjectURL','44301VZURoW','name','Unable\x20to\x20upload\x20to\x20Cloud!','_slot0.txt','style','type','_imageState0','createElement','Off','Cloud\x20upload\x20','control-setting','disable','timer','padStart','uploadCheats','visibilityState','beforeunload','FSSync','buttonUnpress','10vwbwAs','Save/State\x20uploaded\x20successfully:','saveState','getItem','1006648SRpHQI','SDL2','#20A5A6','111502AzRqAz','16BQxnSo','fileSize','screenSize','37640JFcspt','error','Error\x20uploadSavSta:','add','0,0,','Online!','\x20time(s)','addEventListener','bottom','appendChild','.ss0','_dateState','Auto\x20save\x20','onLine','/data/games/','editFileName','listSaves','slotStateSaved','92ejxlUC'];a0_0x3235=function(){return _0x314023;};return a0_0x3235();}async function statusShow(){const _0x4b1b44=a0_0x2f77a4;document['addEventListener'](_0x4b1b44(0xe0),handleVisibilityChange),document[_0x4b1b44(0x119)](_0x4b1b44(0xdc),handleVisibilityChange),window[_0x4b1b44(0x119)](_0x4b1b44(0x104),handleVisibilityChange),restoreArea(),startTimer(),savedTurboState!==null&&(turboState=parseInt(savedTurboState),await a0_0x1a7cda[_0x4b1b44(0xdf)](turboState)),await delay(0x3e8),await led(parseInt(localStorage[_0x4b1b44(0x10a)](_0x4b1b44(0x123)))),await notiMessage(gameVer,0x3e8);}async function saveStatePeriodically(){const _0x2baf32=a0_0x2f77a4;await ledSave(_0x2baf32(0x10d)),await Module['saveState'](0x0),await Module[_0x2baf32(0x105)](),await screenShot(0x0),console[_0x2baf32(0xec)](_0x2baf32(0x11e)+ ++countAutoSave+_0x2baf32(0x118));}async function saveStateInCloud(){const _0x5d6696=a0_0x2f77a4,_0x333e4a=localStorage[_0x5d6696(0x10a)](_0x5d6696(0x132)),_0x20872e=_0x333e4a['replace']('.gba','.ss0'),_0x493bf1=localStorage[_0x5d6696(0x10a)](_0x5d6696(0x131)),_0x4f9500=localStorage[_0x5d6696(0x10a)](_0x333e4a+_0x5d6696(0xfa)),_0x597d8f=localStorage[_0x5d6696(0x10a)](_0x333e4a+_0x5d6696(0xd0));if(navigator[_0x5d6696(0x11f)]){if(_0x493bf1){await ledSave('#E0C068'),await delay(0x3e8),await dpUploadFile(_0x20872e,Module['downloadFile'](_0x5d6696(0xd3)+_0x20872e));if(_0x4f9500!==null){const _0x69ac5f=_0x4f9500+'\x0a\x0a'+_0x597d8f,_0x2c4332=new Blob([_0x69ac5f],{'type':_0x5d6696(0xee)});await dpUploadFile(_0x333e4a+_0x5d6696(0xf7),_0x2c4332);}else console[_0x5d6696(0xec)](_0x5d6696(0x130));await lockNoti('',_0x5d6696(0xfd)+ ++countUpload+_0x5d6696(0x118),0x7d0);}else console[_0x5d6696(0xec)](_0x5d6696(0xf6));}else console[_0x5d6696(0xec)](_0x5d6696(0x117));}function startTimer(){let [_0x2816e4,_0x483b52,_0x48fcbd,_0x55bde5,_0x109290]=[0x0,0x0,0x0,0x0,0x0];setInterval(()=>{const _0x557faa=a0_0x435c;_0x48fcbd++,_0x55bde5++,_0x109290++;if(_0x48fcbd===0x3c)[_0x48fcbd,_0x483b52]=[0x0,_0x483b52+0x1];if(_0x483b52===0x3c)[_0x483b52,_0x2816e4]=[0x0,_0x2816e4+0x1];document[_0x557faa(0xe5)](_0x557faa(0x100))['textContent']=_0x2816e4+'h'+_0x483b52[_0x557faa(0xcb)]()[_0x557faa(0x101)](0x2,'0')+'.'+_0x48fcbd[_0x557faa(0xcb)]()[_0x557faa(0x101)](0x2,'0');_0x55bde5===0x3c&&(saveStatePeriodically(),_0x55bde5=0x0);;_0x55bde5===0xe10&&(saveStateInCloud(),_0x109290=0x0);;},0x3e8);}export async function uploadGame(_0x5a1367){const _0x4f07d6=a0_0x2f77a4,_0x4fd3a8=_0x5a1367[_0x4f07d6(0xda)][0x0];Module[_0x4f07d6(0xe7)](_0x4fd3a8,()=>{const _0x36e018=_0x4f07d6;Module[_0x36e018(0x105)]();});}function a0_0x435c(_0x58dd92,_0x5dfdc8){const _0x323531=a0_0x3235();return a0_0x435c=function(_0x435c47,_0x2bfa12){_0x435c47=_0x435c47-0xca;let _0x51b4e9=_0x323531[_0x435c47];return _0x51b4e9;},a0_0x435c(_0x58dd92,_0x5dfdc8);}export async function loadGame(_0x2247bb){const _0x230efe=a0_0x2f77a4,_0x3e6396=_0x2247bb[_0x230efe(0x12b)](/\.(gba|gbc|gb|zip)$/,_0x230efe(0x11c)),_0x81cd60=Module['listStates']();intro[_0x230efe(0x12f)][_0x230efe(0x115)](_0x230efe(0xff)),errorLogElements[0x0][_0x230efe(0xf8)][_0x230efe(0x11a)]='0',ingame['classList']['remove']('disable'),_0x2247bb[_0x230efe(0xde)](_0x230efe(0xd9))||_0x2247bb[_0x230efe(0xde)](_0x230efe(0xef))?(canvas['classList'][_0x230efe(0x115)](_0x230efe(0xdb)),areaTrans[_0x230efe(0x12f)][_0x230efe(0x115)](_0x230efe(0xd7)),localStorage[_0x230efe(0xd1)](_0x230efe(0x111),_0x230efe(0x116)+(window[_0x230efe(0xeb)]-0xe6)+','+(window[_0x230efe(0xeb)]-0xe6)*0x9/0xa)):localStorage[_0x230efe(0xd1)](_0x230efe(0x111),'0,0,'+(window[_0x230efe(0xeb)]-0x96)+','+(window[_0x230efe(0xeb)]-0x96)*0x2/0x3),_0x81cd60['includes'](_0x3e6396)?(await Module['loadGame'](_0x230efe(0x120)+_0x2247bb),confirm('Do\x20you\x20want\x20to\x20load\x20save\x20state?')&&(await Module[_0x230efe(0xe6)](0x0),localStorage[_0x230efe(0xd1)](_0x230efe(0x132),_0x2247bb),console[_0x230efe(0xec)](_0x2247bb))):(await Module[_0x230efe(0xcd)](_0x230efe(0x120)+_0x2247bb),localStorage[_0x230efe(0xd1)](_0x230efe(0x132),_0x2247bb)),await statusShow();}export async function saveState(_0x4b910a){const _0x410dee=a0_0x2f77a4;await Module[_0x410dee(0x109)](_0x4b910a),await Module['FSSync']();}export async function loadState(_0x33d6ba){const _0x3fb88f=a0_0x2f77a4;await Module[_0x3fb88f(0xe6)](_0x33d6ba);}export async function downloadFile(_0x5aab18,_0x5d2dcd){const _0x2c774c=a0_0x2f77a4,_0x50ccbc=Module[_0x2c774c(0xe1)](_0x5aab18),_0x5978f3=document[_0x2c774c(0xfb)]('a');document[_0x2c774c(0x126)][_0x2c774c(0x11b)](_0x5978f3),_0x5978f3['download']=_0x5d2dcd;const _0x9015ee=new Blob([_0x50ccbc],{'type':'application/octet-stream'});_0x5978f3['href']=URL[_0x2c774c(0xcc)](_0x9015ee),_0x5978f3[_0x2c774c(0xd2)](),URL[_0x2c774c(0xf3)](_0x9015ee),_0x5978f3[_0x2c774c(0xf1)]();}export function downloadFileInCloud(_0x4b1a67){const _0x378922=a0_0x2f77a4,_0x551d82=Module[_0x378922(0xe1)](_0x4b1a67);return _0x551d82;}export async function uploadFile(_0x4f291f){const _0x1c51f3=a0_0x2f77a4,_0x19fe9d=_0x4f291f[_0x1c51f3(0xda)][0x0];Module[_0x1c51f3(0xca)](_0x19fe9d,()=>{const _0x53705e=_0x1c51f3;Module[_0x53705e(0x105)]();});}export async function editFile(_0x4c2891,_0x4ac4ff,_0x2abe15){const _0x360d7e=a0_0x2f77a4;await Module[_0x360d7e(0x121)](_0x4c2891,_0x4ac4ff,_0x2abe15),await Module['FSSync']();}export async function deleteFile(_0x27a4dc){const _0x2adbbe=a0_0x2f77a4;await Module[_0x2adbbe(0x127)](_0x27a4dc),await Module[_0x2adbbe(0x105)]();}export function listGame(){const _0x10e340=a0_0x2f77a4,_0x3103d3=Module[_0x10e340(0xdd)]();return _0x3103d3;}export function listSave(){const _0x4135c7=a0_0x2f77a4,_0xf4515a=Module[_0x4135c7(0x122)]();return _0xf4515a;}export function listState(){const _0x5c63e8=a0_0x2f77a4,_0x405958=Module[_0x5c63e8(0xe2)]();return _0x405958;}export function listCheat(){const _0x5c4ab0=Module['listCheats']();return _0x5c4ab0;}export function listScreenshot(){const _0x14f070=Module['listScreenshots']();return _0x14f070;}export function fileSize(_0x27790c){const _0x33525f=a0_0x2f77a4,_0x82a54b=Module[_0x33525f(0x110)](_0x27790c);return _0x82a54b;}export async function uploadCheat(_0xaf14aa){const _0x1e619f=a0_0x2f77a4;try{const _0x4eece1=_0xaf14aa[_0x1e619f(0xda)][0x0];await Module[_0x1e619f(0x102)](_0x4eece1,()=>{const _0xe658e8=_0x1e619f;console[_0xe658e8(0xec)](_0xe658e8(0xed),_0x4eece1[_0xe658e8(0xf5)]),localStorageFile(),Module[_0xe658e8(0x105)]();});}catch(_0x3382d9){console[_0x1e619f(0x113)](_0x1e619f(0x129),_0x3382d9);}}export async function uploadSavSta(_0x1eb318){const _0x89087c=a0_0x2f77a4;try{const _0x256a8e=_0x1eb318['files'][0x0];await Module[_0x89087c(0xca)](_0x256a8e,()=>{const _0x24eb68=_0x89087c;console['log'](_0x24eb68(0x108),_0x256a8e[_0x24eb68(0xf5)]),localStorageFile(),Module[_0x24eb68(0x105)]();});}catch(_0x4e0a39){console['error'](_0x89087c(0x114),_0x4e0a39);}}export async function uploadSaveOrSaveState(_0x4e8b4f){const _0x41a068=a0_0x2f77a4;Module[_0x41a068(0xca)](_0x4e8b4f,()=>{const _0x18b217=_0x41a068;localStorageFile(),Module[_0x18b217(0x105)]();});}export async function resumeGame(){const _0x4472fd=a0_0x2f77a4;Module['resumeGame'](),Module['SDL2'](),notiMessage(_0x4472fd(0xe4),0x7d0);}export async function pauseGame(){const _0xa43717=a0_0x2f77a4;Module[_0xa43717(0xe9)](),Module[_0xa43717(0x10c)](),notiMessage(_0xa43717(0xce),0x7d0);}export async function buttonPress(_0x309326){Module['buttonPress'](_0x309326);}export async function buttonUnpress(_0x28e209){const _0x4ea710=a0_0x2f77a4;Module[_0x4ea710(0x106)](_0x28e209);}export async function screenShot(_0x2cba66){const _0x1f71d5=a0_0x2f77a4,_0x41a727=localStorage[_0x1f71d5(0x10a)](_0x1f71d5(0x132)),_0x2cba31=_0x41a727[_0x1f71d5(0x12b)](/\.(gba|gbc|gb|zip)$/,'_');await Module[_0x1f71d5(0x12d)](''+_0x2cba31+_0x2cba66+_0x1f71d5(0x12c)),await Module['FSSync']();const _0x4221aa=await fileToBase64(Module[_0x1f71d5(0xe1)]('/data/screenshots/'+_0x2cba31+_0x2cba66+_0x1f71d5(0x12c))),_0x59f128=Date[_0x1f71d5(0x128)](),_0x2f7d3c=formatDateTime(_0x59f128);localStorage[_0x1f71d5(0xd1)](_0x41a727+_0x1f71d5(0x11d)+_0x2cba66,_0x2f7d3c),localStorage[_0x1f71d5(0xd1)](_0x41a727+_0x1f71d5(0x12e)+_0x2cba66,_0x4221aa);}export async function captureOCR(_0x5442b){const _0x1e6e65=a0_0x2f77a4;Module[_0x1e6e65(0x12d)](_0x5442b);const _0x560e7f=Module['downloadFile'](_0x1e6e65(0xf2)+_0x5442b);return _0x560e7f;}export async function setFastForwardMultiplier(_0x5a299b){const _0x23aef1=a0_0x2f77a4;Module[_0x23aef1(0x12a)](_0x5a299b);}export function uploadCheats(_0x222fa3,_0x5efe18,_0x509e8e,_0x400d00,_0x16b8b5){Module['uploadCheats'](_0x222fa3,()=>{const _0xc752c5=a0_0x435c;Module['autoLoadCheats'](),setTimeout(()=>{const _0x3f35ef=a0_0x435c;Module[_0x3f35ef(0x105)]();},0x1f4),_0x400d00&&(localStorage[_0xc752c5(0xd1)](_0x5efe18+'_savedCheats',_0x509e8e),notiMessage(_0xc752c5(0xd6),0x5dc)),_0x16b8b5['textContent']=localStorage['getItem'](_0x5efe18+'_savedCheats'||_0xc752c5(0xfc));});}