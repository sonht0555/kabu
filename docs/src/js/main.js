const a0_0x58296c=a0_0x26fe;(function(_0x5881b0,_0x305f72){const _0x4cdd67=a0_0x26fe,_0x14f21b=_0x5881b0();while(!![]){try{const _0x2d6665=parseInt(_0x4cdd67(0x154))/0x1+-parseInt(_0x4cdd67(0x111))/0x2*(parseInt(_0x4cdd67(0x11b))/0x3)+-parseInt(_0x4cdd67(0x143))/0x4*(-parseInt(_0x4cdd67(0x10f))/0x5)+-parseInt(_0x4cdd67(0x122))/0x6*(parseInt(_0x4cdd67(0x10e))/0x7)+-parseInt(_0x4cdd67(0x144))/0x8*(parseInt(_0x4cdd67(0x134))/0x9)+-parseInt(_0x4cdd67(0x11d))/0xa*(parseInt(_0x4cdd67(0x128))/0xb)+parseInt(_0x4cdd67(0x112))/0xc;if(_0x2d6665===_0x305f72)break;else _0x14f21b['push'](_0x14f21b['shift']());}catch(_0x21a742){_0x14f21b['push'](_0x14f21b['shift']());}}}(a0_0x5dcb,0x8c3e8));import a0_0x354699 from'../core/mgba.js';import*as a0_0x90af27 from'./gamepad.js';import{localStorageFile}from'./storage.js';import{dpUploadFile,dpRefreshToken}from'./cloud.js';const Module={'canvas':document[a0_0x58296c(0x123)](a0_0x58296c(0x121))};function initializeCore(_0x4a5182,_0x5df0e8){const _0x3fc156=a0_0x58296c;_0x4a5182(_0x5df0e8)[_0x3fc156(0x152)](function(_0x234ad0){const _0x538a45=_0x3fc156;_0x234ad0[_0x538a45(0x12a)]();});}initializeCore(a0_0x354699,Module);let countAutoSave=0x0,turboState=0x1,countUpload=0x0;const canvas=document[a0_0x58296c(0x123)](a0_0x58296c(0x121)),savedTurboState=localStorage[a0_0x58296c(0x13f)](a0_0x58296c(0x115)),controlSetting=document['getElementById'](a0_0x58296c(0x149));function handleVisibilityChange(_0x6d88bf){const _0x384717=a0_0x58296c;document[_0x384717(0x103)]===_0x384717(0xf8)||_0x6d88bf?.['type']===_0x384717(0x140)||_0x6d88bf?.[_0x384717(0x127)]?(pauseGame(),canvas[_0x384717(0x105)]['add'](_0x384717(0x155))):(setTimeout(()=>{const _0x3309f6=_0x384717;canvas[_0x3309f6(0x105)]['remove']('visible');},0x258),controlSetting[_0x384717(0x105)][_0x384717(0xf4)](_0x384717(0x155))&&resumeGame());}async function statusShow(){const _0x2858e2=a0_0x58296c;document[_0x2858e2(0x14f)](_0x2858e2(0xff),handleVisibilityChange),document[_0x2858e2(0x14f)](_0x2858e2(0x10b),handleVisibilityChange),window[_0x2858e2(0x14f)](_0x2858e2(0x140),handleVisibilityChange),restoreArea(),startTimer(),savedTurboState!==null&&(turboState=parseInt(savedTurboState),await a0_0x90af27[_0x2858e2(0x108)](turboState)),await delay(0x3e8),await led(parseInt(localStorage[_0x2858e2(0x13f)](_0x2858e2(0x145)))),await notiMessage(gameVer,0x3e8);}async function saveStatePeriodically(){const _0xc6ddf4=a0_0x58296c;await ledSave(_0xc6ddf4(0x114)),await Module[_0xc6ddf4(0x100)](0x0),await Module['FSSync'](),await screenShot(0x0),console[_0xc6ddf4(0x137)](_0xc6ddf4(0x10a)+ ++countAutoSave+_0xc6ddf4(0xf5));}async function saveStateInCloud(){const _0x25c1b6=a0_0x58296c,_0x398dff=localStorage[_0x25c1b6(0x13f)](_0x25c1b6(0x10c)),_0xaa19b=_0x398dff['replace']('.gba','.ss0'),_0x193f01=localStorage[_0x25c1b6(0x13f)](_0x25c1b6(0x120)),_0x20bb02=localStorage[_0x25c1b6(0x13f)](_0x398dff+_0x25c1b6(0x119)),_0x59d0df=localStorage['getItem'](_0x398dff+_0x25c1b6(0x139));if(navigator[_0x25c1b6(0x13d)]){if(_0x193f01){await ledSave(_0x25c1b6(0x14e)),await delay(0x3e8),await dpUploadFile(_0xaa19b,Module[_0x25c1b6(0x118)](_0x25c1b6(0x142)+_0xaa19b));if(_0x20bb02!==null){const _0x36a845=_0x20bb02+'\x0a\x0a'+_0x59d0df,_0x43b4ce=new Blob([_0x36a845],{'type':_0x25c1b6(0x129)});await dpUploadFile(_0x398dff+'_slot0.txt',_0x43b4ce);}else console[_0x25c1b6(0x137)](_0x25c1b6(0x11c));await lockNoti('','Cloud\x20upload\x20'+ ++countUpload+'\x20time(s)',0x7d0);}else console['log'](_0x25c1b6(0x148));}else console[_0x25c1b6(0x137)](_0x25c1b6(0x130));}function startTimer(){let [_0x3ac24f,_0x342b2b,_0x3fea9d,_0x2675bd,_0x439de6]=[0x0,0x0,0x0,0x0,0x0];setInterval(()=>{const _0x134838=a0_0x26fe;_0x3fea9d++,_0x2675bd++,_0x439de6++;if(_0x3fea9d===0x3c)[_0x3fea9d,_0x342b2b]=[0x0,_0x342b2b+0x1];if(_0x342b2b===0x3c)[_0x342b2b,_0x3ac24f]=[0x0,_0x3ac24f+0x1];document[_0x134838(0x123)](_0x134838(0xfb))[_0x134838(0x11e)]=_0x3ac24f+'h'+_0x342b2b['toString']()[_0x134838(0x10d)](0x2,'0')+'.'+_0x3fea9d['toString']()[_0x134838(0x10d)](0x2,'0');_0x2675bd===0x3c&&(saveStatePeriodically(),_0x2675bd=0x0);;_0x2675bd===0xe10&&(saveStateInCloud(),_0x439de6=0x0);;},0x3e8);}export async function uploadGame(_0x259c39){const _0x52052b=a0_0x58296c,_0x985e58=_0x259c39[_0x52052b(0x147)][0x0];Module[_0x52052b(0x12c)](_0x985e58,()=>{const _0x338eac=_0x52052b;Module[_0x338eac(0x156)]();});}export async function loadGame(_0x447cda){const _0x44b3e0=a0_0x58296c,_0x9f6ad=_0x447cda[_0x44b3e0(0xfe)](/\.(gba|gbc|gb)$/,'.ss0'),_0x29eee9=Module[_0x44b3e0(0x12e)]();intro[_0x44b3e0(0x105)]['add'](_0x44b3e0(0x138)),ingame['classList'][_0x44b3e0(0xf3)](_0x44b3e0(0x138)),_0x447cda[_0x44b3e0(0x14a)]('.gbc')||_0x447cda[_0x44b3e0(0x14a)](_0x44b3e0(0x14d))?(canvas[_0x44b3e0(0x105)][_0x44b3e0(0x14b)](_0x44b3e0(0x12f)),areaTrans[_0x44b3e0(0x105)]['add']('gbc1'),localStorage[_0x44b3e0(0x133)]('screenSize',_0x44b3e0(0x12b)+(window[_0x44b3e0(0x151)]-0xe6)+','+(window[_0x44b3e0(0x151)]-0xe6)*0x9/0xa)):localStorage[_0x44b3e0(0x133)]('screenSize','0,0,'+(window['innerWidth']-0x96)+','+(window[_0x44b3e0(0x151)]-0x96)*0x2/0x3),_0x29eee9[_0x44b3e0(0x109)](_0x9f6ad)?(await Module['loadGame'](_0x44b3e0(0x113)+_0x447cda),confirm(_0x44b3e0(0x11f))&&(await Module[_0x44b3e0(0x126)](0x0),localStorage[_0x44b3e0(0x133)](_0x44b3e0(0x10c),_0x447cda),console[_0x44b3e0(0x137)](_0x447cda))):(await Module['loadGame'](_0x44b3e0(0x113)+_0x447cda),localStorage[_0x44b3e0(0x133)](_0x44b3e0(0x10c),_0x447cda)),await statusShow();}export async function saveState(_0x12c9b0){const _0x2115a6=a0_0x58296c;await Module[_0x2115a6(0x100)](_0x12c9b0),await Module[_0x2115a6(0x156)]();}function a0_0x26fe(_0x196e83,_0x646ff6){const _0x5dcb0c=a0_0x5dcb();return a0_0x26fe=function(_0x26fe16,_0x56e692){_0x26fe16=_0x26fe16-0xf1;let _0x167e98=_0x5dcb0c[_0x26fe16];return _0x167e98;},a0_0x26fe(_0x196e83,_0x646ff6);}export async function loadState(_0x4fee2f){await Module['loadState'](_0x4fee2f);}export async function downloadFile(_0x3e4df4,_0x4aa983){const _0x31b61a=a0_0x58296c,_0x19478b=Module[_0x31b61a(0x118)](_0x3e4df4),_0xfc1cae=document[_0x31b61a(0xf2)]('a');document[_0x31b61a(0x132)][_0x31b61a(0xfc)](_0xfc1cae),_0xfc1cae[_0x31b61a(0x104)]=_0x4aa983;const _0x687a1e=new Blob([_0x19478b],{'type':_0x31b61a(0xfd)});_0xfc1cae[_0x31b61a(0x101)]=URL[_0x31b61a(0x110)](_0x687a1e),_0xfc1cae[_0x31b61a(0x146)](),URL[_0x31b61a(0xf9)](_0x687a1e),_0xfc1cae['remove']();}export function downloadFileInCloud(_0x414d39){const _0x555869=a0_0x58296c,_0xd25694=Module[_0x555869(0x118)](_0x414d39);return _0xd25694;}export async function uploadFile(_0x1a3eba){const _0x36afdc=a0_0x58296c,_0x22d6b3=_0x1a3eba[_0x36afdc(0x147)][0x0];Module[_0x36afdc(0x124)](_0x22d6b3,()=>{const _0x39e13b=_0x36afdc;Module[_0x39e13b(0x156)]();});}export async function editFile(_0x3f20cd,_0x233358,_0x3ccc54){const _0x3b3a22=a0_0x58296c;await Module[_0x3b3a22(0xfa)](_0x3f20cd,_0x233358,_0x3ccc54),await Module['FSSync']();}export async function deleteFile(_0x28f8b6){const _0x54e9fe=a0_0x58296c;await Module[_0x54e9fe(0x106)](_0x28f8b6),await Module[_0x54e9fe(0x156)]();}export function listGame(){const _0x4a177b=Module['listGames']();return _0x4a177b;}export function listSave(){const _0x3825d7=Module['listSaves']();return _0x3825d7;}export function listState(){const _0x451f70=a0_0x58296c,_0x1e56cf=Module[_0x451f70(0x12e)]();return _0x1e56cf;}export function listCheat(){const _0x2ba5d5=a0_0x58296c,_0x5efc69=Module[_0x2ba5d5(0x150)]();return _0x5efc69;}export function listScreenshot(){const _0x2a1475=a0_0x58296c,_0x576775=Module[_0x2a1475(0x12d)]();return _0x576775;}export function fileSize(_0x1c4e4e){const _0xe99171=a0_0x58296c,_0xbf711e=Module[_0xe99171(0x14c)](_0x1c4e4e);return _0xbf711e;}export async function uploadCheat(_0x1bc4c8){const _0x581964=a0_0x58296c;try{const _0x50ad96=_0x1bc4c8[_0x581964(0x147)][0x0];await Module[_0x581964(0x102)](_0x50ad96,()=>{const _0x4dba32=_0x581964;console[_0x4dba32(0x137)](_0x4dba32(0x13a),_0x50ad96[_0x4dba32(0x131)]),localStorageFile(),Module[_0x4dba32(0x156)]();});}catch(_0x4e46a7){console[_0x581964(0xf1)]('Error\x20uploadCheat:',_0x4e46a7);}}export async function uploadSavSta(_0x4259c7){const _0x5693c4=a0_0x58296c;try{const _0x281f26=_0x4259c7[_0x5693c4(0x147)][0x0];await Module[_0x5693c4(0x124)](_0x281f26,()=>{const _0x5265fe=_0x5693c4;console['log'](_0x5265fe(0x13e),_0x281f26['name']),localStorageFile(),Module[_0x5265fe(0x156)]();});}catch(_0x493d2c){console[_0x5693c4(0xf1)](_0x5693c4(0xf6),_0x493d2c);}}export async function uploadSaveOrSaveState(_0x4e4df3){Module['uploadSaveOrSaveState'](_0x4e4df3,()=>{const _0x4894b2=a0_0x26fe;localStorageFile(),Module[_0x4894b2(0x156)]();});}export async function resumeGame(){const _0x2b5026=a0_0x58296c;Module[_0x2b5026(0x141)](),Module['SDL2'](),notiMessage(_0x2b5026(0x116),0x7d0);}function a0_0x5dcb(){const _0x53d9cc=['Resumed!','now','downloadFile','_imageState0','_savedCheats','1669557yWZIfy','No\x20screenshot!','30tLLfzd','textContent','Do\x20you\x20want\x20to\x20load\x20save\x20state?','uId','canvas','207786snnCpX','getElementById','uploadSaveOrSaveState','.png','loadState','persisted','3051785MHrIen','text/plain','FSInit','0,0,','uploadGame','listScreenshots','listStates','gbc','Online!','name','body','setItem','3403449uFAQYq','setFastForwardMultiplier','SDL2','log','disable','_dateState0','Cheat\x20uploaded\x20successfully:','/data/screenshots/','Off','onLine','Save/State\x20uploaded\x20successfully:','getItem','beforeunload','resumeGame','/data/states/','12WhLmAU','24PLrJAl','slotStateSaved','click','files','Unable\x20to\x20upload\x20to\x20Cloud!','control-setting','endsWith','add','fileSize','.gb','#E0C068','addEventListener','listCheats','innerWidth','then','_dateState','624030eRWKBM','visible','FSSync','buttonPress','error','createElement','remove','contains','\x20time(s)','Error\x20uploadSavSta:','autoLoadCheats','hidden','revokeObjectURL','editFileName','timer','appendChild','application/octet-stream','replace','pagehide','saveState','href','uploadCheats','visibilityState','download','classList','deleteFile','screenshot','turboF','includes','Auto\x20save\x20','visibilitychange','gameName','padStart','210zsXpXt','1846490bvIwqx','createObjectURL','4hkifsY','35535264BWpxWo','/data/games/','#20A5A6','turboState'];a0_0x5dcb=function(){return _0x53d9cc;};return a0_0x5dcb();}export async function pauseGame(){const _0x254d74=a0_0x58296c;Module['pauseGame'](),Module[_0x254d74(0x136)](),notiMessage('Paused!',0x7d0);}export async function buttonPress(_0x340f72){const _0x5e52ec=a0_0x58296c;Module[_0x5e52ec(0x157)](_0x340f72);}export async function buttonUnpress(_0x4a5a37){Module['buttonUnpress'](_0x4a5a37);}export async function screenShot(_0x38a406){const _0x2024a6=a0_0x58296c,_0x44c7fe=localStorage[_0x2024a6(0x13f)]('gameName'),_0x5994ae=_0x44c7fe[_0x2024a6(0xfe)](/\.(gba|gbc|gb)$/,'_');await Module[_0x2024a6(0x107)](''+_0x5994ae+_0x38a406+_0x2024a6(0x125)),await Module[_0x2024a6(0x156)]();const _0x104dd7=await fileToBase64(Module[_0x2024a6(0x118)](_0x2024a6(0x13b)+_0x5994ae+_0x38a406+_0x2024a6(0x125))),_0x6e25e2=Date[_0x2024a6(0x117)](),_0x3a97a8=formatDateTime(_0x6e25e2);localStorage[_0x2024a6(0x133)](_0x44c7fe+_0x2024a6(0x153)+_0x38a406,_0x3a97a8),localStorage[_0x2024a6(0x133)](_0x44c7fe+'_imageState'+_0x38a406,_0x104dd7);}export async function captureOCR(_0x1da86b){const _0x5bcd7d=a0_0x58296c;Module[_0x5bcd7d(0x107)](_0x1da86b);const _0x46e09e=Module[_0x5bcd7d(0x118)](_0x5bcd7d(0x13b)+_0x1da86b);return _0x46e09e;}export async function setFastForwardMultiplier(_0x17f26c){const _0x5c6780=a0_0x58296c;Module[_0x5c6780(0x135)](_0x17f26c);}export function uploadCheats(_0x3d8869,_0x4d01bc,_0x440cab,_0xd12bab,_0xe4e716){const _0x4b7f1c=a0_0x58296c;Module[_0x4b7f1c(0x102)](_0x3d8869,()=>{const _0x25c20c=_0x4b7f1c;Module[_0x25c20c(0xf7)](),setTimeout(()=>{const _0x2d7309=_0x25c20c;Module[_0x2d7309(0x156)]();},0x1f4),_0xd12bab&&(localStorage[_0x25c20c(0x133)](_0x4d01bc+_0x25c20c(0x11a),_0x440cab),notiMessage('Cheat\x20Enabled!',0x5dc)),_0xe4e716[_0x25c20c(0x11e)]=localStorage['getItem'](_0x4d01bc+'_savedCheats'||_0x25c20c(0x13c));});}