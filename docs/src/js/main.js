const a0_0x506a89=a0_0x50c3;(function(_0x5ddac3,_0xd579bf){const _0x4b3459=a0_0x50c3,_0x11794d=_0x5ddac3();while(!![]){try{const _0x59f4ee=-parseInt(_0x4b3459(0x126))/0x1+parseInt(_0x4b3459(0x10c))/0x2*(-parseInt(_0x4b3459(0x146))/0x3)+-parseInt(_0x4b3459(0x145))/0x4*(-parseInt(_0x4b3459(0xfd))/0x5)+-parseInt(_0x4b3459(0x12d))/0x6*(parseInt(_0x4b3459(0x13c))/0x7)+parseInt(_0x4b3459(0x105))/0x8*(-parseInt(_0x4b3459(0x133))/0x9)+-parseInt(_0x4b3459(0x131))/0xa*(parseInt(_0x4b3459(0x11b))/0xb)+parseInt(_0x4b3459(0x128))/0xc*(parseInt(_0x4b3459(0x135))/0xd);if(_0x59f4ee===_0xd579bf)break;else _0x11794d['push'](_0x11794d['shift']());}catch(_0x42a639){_0x11794d['push'](_0x11794d['shift']());}}}(a0_0x4e4f,0xeea44));import a0_0x339351 from'../core/mgba.js';import*as a0_0x5a1299 from'./gamepad.js';import{localStorageFile}from'./storage.js';import{dpUploadFile,dpRefreshToken}from'./cloud.js';const Module={'canvas':document[a0_0x506a89(0x11e)](a0_0x506a89(0x129))};function a0_0x50c3(_0x87b5ea,_0x34c89b){const _0x4e4f67=a0_0x4e4f();return a0_0x50c3=function(_0x50c34c,_0x526eec){_0x50c34c=_0x50c34c-0xf6;let _0x4002cb=_0x4e4f67[_0x50c34c];return _0x4002cb;},a0_0x50c3(_0x87b5ea,_0x34c89b);}function initializeCore(_0x2f1f89,_0x5442ec){const _0x56e6fa=a0_0x506a89;_0x2f1f89(_0x5442ec)[_0x56e6fa(0x12b)](function(_0x23a2b2){const _0x4dd01f=_0x56e6fa;_0x23a2b2[_0x4dd01f(0xfc)]();});}initializeCore(a0_0x339351,Module);let countAutoSave=0x0,turboState=0x1,countUpload=0x0;const canvas=document['getElementById'](a0_0x506a89(0x129)),savedTurboState=localStorage['getItem'](a0_0x506a89(0x14f)),controlSetting=document[a0_0x506a89(0x11e)]('control-setting');function handleVisibilityChange(_0x5201fc){const _0x297681=a0_0x506a89;document['visibilityState']==='hidden'||_0x5201fc?.['type']==='beforeunload'||_0x5201fc?.[_0x297681(0xf6)]?(pauseGame(),canvas['classList']['add'](_0x297681(0x154))):(setTimeout(()=>{const _0x501d03=_0x297681;canvas['classList']['remove'](_0x501d03(0x154));},0x258),controlSetting[_0x297681(0x149)][_0x297681(0xfa)](_0x297681(0x154))&&resumeGame());}async function statusShow(){const _0x49dc86=a0_0x506a89;document['addEventListener'](_0x49dc86(0x127),handleVisibilityChange),document[_0x49dc86(0x14b)]('visibilitychange',handleVisibilityChange),window['addEventListener']('beforeunload',handleVisibilityChange),restoreArea(),startTimer(),savedTurboState!==null&&(turboState=parseInt(savedTurboState),await a0_0x5a1299[_0x49dc86(0x13d)](turboState)),await delay(0x3e8),await led(parseInt(localStorage[_0x49dc86(0xfb)]('slotStateSaved'))),await notiMessage(gameVer,0x3e8);}async function saveStatePeriodically(){const _0x423526=a0_0x506a89;await ledSave(_0x423526(0x106)),await Module[_0x423526(0xff)](0x0),await Module['FSSync'](),await screenShot(0x0),console['log']('Auto\x20save\x20'+ ++countAutoSave+_0x423526(0x102));}async function saveStateInCloud(){const _0x34d860=a0_0x506a89,_0x2c678e=localStorage[_0x34d860(0xfb)](_0x34d860(0x110)),_0xb177b0=_0x2c678e[_0x34d860(0x136)](_0x34d860(0x139),'.ss0'),_0x2d0725=localStorage[_0x34d860(0xfb)](_0x34d860(0x116)),_0x2f78a7=localStorage[_0x34d860(0xfb)](_0x2c678e+_0x34d860(0x144)),_0x9a5c9d=localStorage[_0x34d860(0xfb)](_0x2c678e+'_dateState0');if(navigator[_0x34d860(0x10a)]){if(_0x2d0725){await ledSave('#E0C068'),await delay(0x3e8),await dpUploadFile(_0xb177b0,Module[_0x34d860(0x100)]('/data/states/'+_0xb177b0));if(_0x2f78a7!==null){const _0x17ca13=_0x2f78a7+'\x0a\x0a'+_0x9a5c9d,_0x3b5eb9=new Blob([_0x17ca13],{'type':_0x34d860(0x10d)});await dpUploadFile(_0x2c678e+'_slot0.txt',_0x3b5eb9);}else console[_0x34d860(0x125)](_0x34d860(0x12f));await lockNoti('','Cloud\x20upload\x20'+ ++countUpload+_0x34d860(0x102),0x7d0);}else console['log']('Unable\x20to\x20upload\x20to\x20Cloud!');}else console[_0x34d860(0x125)]('Online!');}function startTimer(){let [_0x13c510,_0x592bcf,_0x5e78e5,_0x40ede5,_0x18ddf1]=[0x0,0x0,0x0,0x0,0x0];setInterval(()=>{const _0x51696e=a0_0x50c3;_0x5e78e5++,_0x40ede5++,_0x18ddf1++;if(_0x5e78e5===0x3c)[_0x5e78e5,_0x592bcf]=[0x0,_0x592bcf+0x1];if(_0x592bcf===0x3c)[_0x592bcf,_0x13c510]=[0x0,_0x13c510+0x1];document[_0x51696e(0x11e)]('timer')['textContent']=_0x13c510+'h'+_0x592bcf[_0x51696e(0x13f)]()[_0x51696e(0xf8)](0x2,'0')+'.'+_0x5e78e5[_0x51696e(0x13f)]()[_0x51696e(0xf8)](0x2,'0');_0x40ede5===0x3c&&(saveStatePeriodically(),_0x40ede5=0x0);;_0x40ede5===0xe10&&(saveStateInCloud(),_0x18ddf1=0x0);;},0x3e8);}export async function uploadGame(_0x2f5b3c){const _0x1ddc5f=a0_0x506a89,_0x15b183=_0x2f5b3c['files'][0x0];Module[_0x1ddc5f(0x118)](_0x15b183,()=>{const _0x28f0bb=_0x1ddc5f;Module[_0x28f0bb(0x123)]();});}export async function loadGame(_0x561435){const _0x422754=a0_0x506a89,_0x4fa476=_0x561435['replace'](/\.(gba|gbc|gb|zip)$/,_0x422754(0xf7)),_0xb37151=Module[_0x422754(0x130)]()[_0x422754(0x142)](_0x43d608=>_0x43d608!=='.'&&_0x43d608!=='..');intro[_0x422754(0x149)][_0x422754(0x11f)](_0x422754(0x121)),errorLogElements[0x0][_0x422754(0x11a)][_0x422754(0x150)]='0',ingame['classList']['remove'](_0x422754(0x121)),_0x561435[_0x422754(0x12c)](_0x422754(0x13a))||_0x561435[_0x422754(0x12c)]('.gb')?(canvas[_0x422754(0x149)][_0x422754(0x11f)](_0x422754(0x13e)),areaTrans[_0x422754(0x149)][_0x422754(0x11f)](_0x422754(0x152)),localStorage['setItem'](_0x422754(0x124),_0x422754(0x140)+(window[_0x422754(0x113)]-0xe6)+','+(window[_0x422754(0x113)]-0xe6)*0x9/0xa)):localStorage['setItem']('screenSize',_0x422754(0x140)+(window[_0x422754(0x113)]-0x96)+','+(window[_0x422754(0x113)]-0x96)*0x2/0x3),_0xb37151['includes'](_0x4fa476)?(await Module[_0x422754(0x109)](_0x422754(0x114)+_0x561435),confirm(_0x422754(0x143))&&(await Module[_0x422754(0x12a)](0x0),localStorage['setItem'](_0x422754(0x110),_0x561435),console[_0x422754(0x125)](_0x561435))):(await Module[_0x422754(0x109)](_0x422754(0x114)+_0x561435),localStorage[_0x422754(0x11d)](_0x422754(0x110),_0x561435)),await statusShow();}export async function saveState(_0x51af4e){const _0x306b2f=a0_0x506a89;await Module[_0x306b2f(0xff)](_0x51af4e),await Module[_0x306b2f(0x123)]();}export async function loadState(_0x15bb2e){await Module['loadState'](_0x15bb2e);}export async function downloadFile(_0x15fac3,_0x441692){const _0x9a134d=a0_0x506a89,_0x16429e=Module[_0x9a134d(0x100)](_0x15fac3),_0x4491d6=document['createElement']('a');document[_0x9a134d(0x148)]['appendChild'](_0x4491d6),_0x4491d6[_0x9a134d(0x122)]=_0x441692;const _0xc67670=new Blob([_0x16429e],{'type':_0x9a134d(0x138)});_0x4491d6[_0x9a134d(0x117)]=URL['createObjectURL'](_0xc67670),_0x4491d6[_0x9a134d(0x104)](),URL[_0x9a134d(0x115)](_0xc67670),_0x4491d6[_0x9a134d(0x10b)]();}export function downloadFileInCloud(_0xa7c3e0){const _0xa17c6c=a0_0x506a89,_0x374e96=Module[_0xa17c6c(0x100)](_0xa7c3e0);return _0x374e96;}export async function uploadFile(_0x5ea6d3){const _0x5aeb4d=a0_0x506a89,_0x4e4a75=_0x5ea6d3[_0x5aeb4d(0x14a)][0x0];Module[_0x5aeb4d(0x153)](_0x4e4a75,()=>{Module['FSSync']();});}export async function editFile(_0x4de12f,_0x566e82,_0x4ef08b){const _0x4e145c=a0_0x506a89;await Module['editFileName'](_0x4de12f,_0x566e82,_0x4ef08b),await Module[_0x4e145c(0x123)]();}export async function deleteFile(_0x3610f9){const _0x573f46=a0_0x506a89;await Module['deleteFile'](_0x3610f9),await Module[_0x573f46(0x123)]();}export function listGame(){const _0x4b865e=a0_0x506a89,_0x23c05d=Module[_0x4b865e(0x103)]()[_0x4b865e(0x142)](_0x39c806=>_0x39c806!=='.'&&_0x39c806!=='..');return _0x23c05d;}export function listSave(){const _0x18a731=a0_0x506a89,_0x37238e=Module[_0x18a731(0x14d)]()[_0x18a731(0x142)](_0x2c9e39=>_0x2c9e39!=='.'&&_0x2c9e39!=='..');return _0x37238e;}export function listState(){const _0xee036c=a0_0x506a89,_0x597417=Module[_0xee036c(0x130)]()[_0xee036c(0x142)](_0x2415af=>_0x2415af!=='.'&&_0x2415af!=='..');return _0x597417;}export function listCheat(){const _0x556a07=a0_0x506a89,_0x50b3d5=Module[_0x556a07(0x10e)]()[_0x556a07(0x142)](_0x216c0d=>_0x216c0d!=='.'&&_0x216c0d!=='..');return _0x50b3d5;}function a0_0x4e4f(){const _0x1d5aed=['1295759HYDdoI','pagehide','4584mFWIbu','canvas','loadState','then','endsWith','5128278tSXMqx','buttonPress','No\x20screenshot!','listStates','2772390mNHvAL','uploadCheats','10278ymmzIp','SDL2','235703lqzirN','replace','fileSize','application/octet-stream','.gba','.gbc','_dateState','7GvbVwX','turboF','gbc','toString','0,0,','error','filter','Do\x20you\x20want\x20to\x20load\x20save\x20state?','_imageState0','40372WLQKgS','505887ufdLVx','Save/State\x20uploaded\x20successfully:','body','classList','files','addEventListener','pauseGame','listSaves','autoLoadCheats','turboState','bottom','name','gbc1','uploadSaveOrSaveState','visible','textContent','persisted','.ss0','padStart','screenshot','contains','getItem','FSInit','320TwkSeJ','Off','saveState','downloadFile','/data/screenshots/','\x20time(s)','listRoms','click','13152jrNPBy','#20A5A6','Error\x20uploadSavSta:','now','loadGame','onLine','remove','14WTDLiX','text/plain','listCheats','Resumed!','gameName','_savedCheats','_imageState','innerWidth','/data/games/','revokeObjectURL','uId','href','uploadRom','Cheat\x20uploaded\x20successfully:','style','55RLJORT','Error\x20uploadCheat:','setItem','getElementById','add','.png','disable','download','FSSync','screenSize','log'];a0_0x4e4f=function(){return _0x1d5aed;};return a0_0x4e4f();}export function listScreenshot(){const _0x45360e=a0_0x506a89,_0x44b724=Module['listScreenshots']()[_0x45360e(0x142)](_0x14bb62=>_0x14bb62!=='.'&&_0x14bb62!=='..');return _0x44b724;}export function fileSize(_0x239157){const _0x118bcf=a0_0x506a89,_0x37f279=Module[_0x118bcf(0x137)](_0x239157);return _0x37f279;}export async function uploadCheat(_0x487099){const _0x443013=a0_0x506a89;try{const _0x169278=_0x487099[_0x443013(0x14a)][0x0];await Module[_0x443013(0x132)](_0x169278,()=>{const _0x4ef68c=_0x443013;console[_0x4ef68c(0x125)](_0x4ef68c(0x119),_0x169278['name']),localStorageFile(),Module[_0x4ef68c(0x123)]();});}catch(_0x1b65b9){console[_0x443013(0x141)](_0x443013(0x11c),_0x1b65b9);}}export async function uploadSavSta(_0xf8b2a9){const _0x4bd024=a0_0x506a89;try{const _0x481bc8=_0xf8b2a9['files'][0x0];await Module['uploadSaveOrSaveState'](_0x481bc8,()=>{const _0x3fb9a2=a0_0x50c3;console[_0x3fb9a2(0x125)](_0x3fb9a2(0x147),_0x481bc8[_0x3fb9a2(0x151)]),localStorageFile(),Module[_0x3fb9a2(0x123)]();});}catch(_0xd97abe){console['error'](_0x4bd024(0x107),_0xd97abe);}}export async function uploadSaveOrSaveState(_0x1c0d15){const _0x4b8f08=a0_0x506a89;Module[_0x4b8f08(0x153)](_0x1c0d15,()=>{const _0x39e5b5=_0x4b8f08;localStorageFile(),Module[_0x39e5b5(0x123)]();});}export async function resumeGame(){const _0x5a6949=a0_0x506a89;Module['resumeGame'](),Module[_0x5a6949(0x134)](),notiMessage(_0x5a6949(0x10f),0x7d0);}export async function pauseGame(){const _0x48c3c3=a0_0x506a89;Module[_0x48c3c3(0x14c)](),Module[_0x48c3c3(0x134)](),notiMessage('Paused!',0x7d0);}export async function buttonPress(_0x4fc0ab){const _0x3931c5=a0_0x506a89;Module[_0x3931c5(0x12e)](_0x4fc0ab);}export async function buttonUnpress(_0x563620){Module['buttonUnpress'](_0x563620);}export async function screenShot(_0x193484){const _0x2162b8=a0_0x506a89,_0x58d142=localStorage[_0x2162b8(0xfb)](_0x2162b8(0x110)),_0x468909=_0x58d142[_0x2162b8(0x136)](/\.(gba|gbc|gb|zip)$/,'_');await Module['screenshot'](''+_0x468909+_0x193484+'.png'),await Module[_0x2162b8(0x123)]();const _0x4b0783=await fileToBase64(Module['downloadFile']('/data/screenshots/'+_0x468909+_0x193484+_0x2162b8(0x120))),_0x267957=Date[_0x2162b8(0x108)](),_0x15b3af=formatDateTime(_0x267957);localStorage[_0x2162b8(0x11d)](_0x58d142+_0x2162b8(0x13b)+_0x193484,_0x15b3af),localStorage[_0x2162b8(0x11d)](_0x58d142+_0x2162b8(0x112)+_0x193484,_0x4b0783);}export async function captureOCR(_0x1b2295){const _0x27b2da=a0_0x506a89;Module[_0x27b2da(0xf9)](_0x1b2295);const _0x2e1cdd=Module[_0x27b2da(0x100)](_0x27b2da(0x101)+_0x1b2295);return _0x2e1cdd;}export async function setFastForwardMultiplier(_0x554fa8){Module['setFastForwardMultiplier'](_0x554fa8);}export function uploadCheats(_0x543a4f,_0x1c7084,_0x24cccf,_0x3aaf1b,_0x274282){const _0x1bad22=a0_0x506a89;Module[_0x1bad22(0x132)](_0x543a4f,()=>{const _0xf24fc8=_0x1bad22;Module[_0xf24fc8(0x14e)](),setTimeout(()=>{const _0x580cdc=_0xf24fc8;Module[_0x580cdc(0x123)]();},0x1f4),_0x3aaf1b&&(localStorage[_0xf24fc8(0x11d)](_0x1c7084+_0xf24fc8(0x111),_0x24cccf),notiMessage('Cheat\x20Enabled!',0x5dc)),_0x274282[_0xf24fc8(0x155)]=localStorage['getItem'](_0x1c7084+_0xf24fc8(0x111)||_0xf24fc8(0xfe));});}