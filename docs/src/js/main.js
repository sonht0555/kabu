const a0_0x4bd7e5=a0_0x220f;(function(_0x2d255f,_0x2a00b2){const _0x46a0cf=a0_0x220f,_0x4ebee7=_0x2d255f();while(!![]){try{const _0x1fb2a9=parseInt(_0x46a0cf(0x75))/0x1+-parseInt(_0x46a0cf(0xce))/0x2+-parseInt(_0x46a0cf(0x8e))/0x3*(parseInt(_0x46a0cf(0x89))/0x4)+-parseInt(_0x46a0cf(0xbf))/0x5*(-parseInt(_0x46a0cf(0x99))/0x6)+-parseInt(_0x46a0cf(0xcb))/0x7*(parseInt(_0x46a0cf(0x9c))/0x8)+-parseInt(_0x46a0cf(0x8d))/0x9*(-parseInt(_0x46a0cf(0xb3))/0xa)+parseInt(_0x46a0cf(0xba))/0xb;if(_0x1fb2a9===_0x2a00b2)break;else _0x4ebee7['push'](_0x4ebee7['shift']());}catch(_0x417aee){_0x4ebee7['push'](_0x4ebee7['shift']());}}}(a0_0x333b,0x41914));function a0_0x220f(_0x4e9f81,_0x15e6e9){const _0x333b91=a0_0x333b();return a0_0x220f=function(_0x220fcc,_0x2ab482){_0x220fcc=_0x220fcc-0x6d;let _0x348383=_0x333b91[_0x220fcc];return _0x348383;},a0_0x220f(_0x4e9f81,_0x15e6e9);}import a0_0x19509f from'../core/mgba.js';import*as a0_0x200498 from'./gamepad.js';import{localStorageFile}from'./storage.js';import{dpUploadFile}from'./cloud.js';const Module={'canvas':document['getElementById'](a0_0x4bd7e5(0xad))};function initializeCore(_0x2c00a7,_0x13dad5){_0x2c00a7(_0x13dad5)['then'](function(_0xfb4ff0){const _0x19d0de=a0_0x220f;_0xfb4ff0[_0x19d0de(0xd4)]();});}initializeCore(a0_0x19509f,Module);let countAutoSave=0x0,turboState=0x1,countUpload=0x0;const canvas=document[a0_0x4bd7e5(0x82)](a0_0x4bd7e5(0xad)),savedTurboState=localStorage[a0_0x4bd7e5(0xae)](a0_0x4bd7e5(0xb9)),controlSetting=document['getElementById'](a0_0x4bd7e5(0x78));function handleVisibilityChange(_0x976d4a){const _0x3d2645=a0_0x4bd7e5;document[_0x3d2645(0x90)]===_0x3d2645(0x76)||_0x976d4a?.[_0x3d2645(0x6f)]===_0x3d2645(0x88)||_0x976d4a?.[_0x3d2645(0xd3)]?(pauseGame(),canvas[_0x3d2645(0x94)][_0x3d2645(0xa8)](_0x3d2645(0xac))):(setTimeout(()=>{const _0x36daad=_0x3d2645;canvas[_0x36daad(0x94)][_0x36daad(0xb1)]('visible');},0x258),controlSetting['classList']['contains'](_0x3d2645(0xac))&&resumeGame());}async function statusShow(){const _0xfc4ca9=a0_0x4bd7e5;document[_0xfc4ca9(0x70)](_0xfc4ca9(0xc5),handleVisibilityChange),document[_0xfc4ca9(0x70)](_0xfc4ca9(0x73),handleVisibilityChange),window[_0xfc4ca9(0x70)](_0xfc4ca9(0x88),handleVisibilityChange),restoreArea(),startTimer(),savedTurboState!==null&&(turboState=parseInt(savedTurboState),await a0_0x200498[_0xfc4ca9(0x92)](turboState)),await delay(0xc8),await Module[_0xfc4ca9(0xcd)](),await delay(0x320),await led(parseInt(localStorage['getItem'](_0xfc4ca9(0xa7)))),await notiMessage(gameVer,0x3e8);}async function saveStatePeriodically(){const _0xc5a709=a0_0x4bd7e5;await ledSave(_0xc5a709(0x74)),await Module[_0xc5a709(0x6e)](0x0),await Module['FSSync'](),await screenShot(0x0),console[_0xc5a709(0x71)](_0xc5a709(0x7f)+ ++countAutoSave+_0xc5a709(0xd0));}async function saveStateInCloud(){const _0x4148a2=a0_0x4bd7e5,_0x3e0f29=localStorage[_0x4148a2(0xae)](_0x4148a2(0xbe)),_0x4893bd=_0x3e0f29[_0x4148a2(0x8a)](/\.(zip|gb|gbc|gba)$/,_0x4148a2(0xc3)),_0x50f027=localStorage['getItem'](_0x4148a2(0x80)),_0x38f5da=localStorage[_0x4148a2(0xae)](_0x3e0f29+_0x4148a2(0x9e)),_0x583d55=localStorage[_0x4148a2(0xae)](_0x3e0f29+_0x4148a2(0x7c));if(navigator[_0x4148a2(0x7e)]){if(_0x50f027){await ledSave('#E0C068'),await delay(0x3e8),await dpUploadFile(_0x4893bd,Module[_0x4148a2(0x7d)]('/data/states/'+_0x4893bd));if(_0x38f5da!==null){const _0x5d1ec6=_0x38f5da+'\x0a\x0a'+_0x583d55,_0x3f07ea=new Blob([_0x5d1ec6],{'type':_0x4148a2(0xc0)});await dpUploadFile(_0x3e0f29+_0x4148a2(0xcf),_0x3f07ea);}else console[_0x4148a2(0x71)](_0x4148a2(0x8b));await lockNoti('',_0x4148a2(0x9d)+ ++countUpload+_0x4148a2(0xd0),0x7d0);}else console[_0x4148a2(0x71)](_0x4148a2(0x72));}else console['log']('Online!');}function startTimer(){let [_0x1f275e,_0x32779b,_0x58b748,_0x245e62,_0x16b222]=[0x0,0x0,0x0,0x0,0x0];setInterval(()=>{const _0x38181b=a0_0x220f;_0x58b748++,_0x245e62++,_0x16b222++;if(_0x58b748===0x3c)[_0x58b748,_0x32779b]=[0x0,_0x32779b+0x1];if(_0x32779b===0x3c)[_0x32779b,_0x1f275e]=[0x0,_0x1f275e+0x1];document[_0x38181b(0x82)](_0x38181b(0x81))[_0x38181b(0xd2)]=_0x1f275e+'h'+_0x32779b['toString']()[_0x38181b(0xa6)](0x2,'0')+'.'+_0x58b748['toString']()[_0x38181b(0xa6)](0x2,'0');_0x245e62===0x3c&&(saveStatePeriodically(),_0x245e62=0x0);;_0x16b222===0xe10&&(saveStateInCloud(),_0x16b222=0x0);;},0x3e8);}export async function uploadGame(_0x6bb455){const _0x10bd45=a0_0x4bd7e5,_0x4b7c2d=_0x6bb455[_0x10bd45(0xaa)][0x0];Module['uploadRom'](_0x4b7c2d,()=>{const _0x5c0f8d=_0x10bd45;Module[_0x5c0f8d(0xa1)]();});}export async function loadGame(_0x2c14fe){const _0x17f139=a0_0x4bd7e5,_0xe9d79e=_0x2c14fe['replace'](/\.(gba|gbc|gb|zip)$/,_0x17f139(0xc3)),_0x4c5dce=Module['listStates']()[_0x17f139(0x8f)](_0x408ea8=>_0x408ea8!=='.'&&_0x408ea8!=='..');intro[_0x17f139(0x94)][_0x17f139(0xa8)](_0x17f139(0xa4)),errorLogElements[0x0][_0x17f139(0xc7)][_0x17f139(0x7b)]='0',ingame[_0x17f139(0x94)][_0x17f139(0xb1)](_0x17f139(0xa4)),_0x2c14fe[_0x17f139(0xbc)](_0x17f139(0x98))||_0x2c14fe[_0x17f139(0xbc)](_0x17f139(0xb4))?(canvas[_0x17f139(0x94)][_0x17f139(0xa8)](_0x17f139(0xaf)),areaTrans[_0x17f139(0x94)][_0x17f139(0xa8)](_0x17f139(0xd6)),localStorage[_0x17f139(0x9a)]('screenSize','0,0,'+(window[_0x17f139(0x96)]-0xe6)+','+(window[_0x17f139(0x96)]-0xe6)*0x9/0xa)):localStorage['setItem'](_0x17f139(0x91),_0x17f139(0xb8)+(window[_0x17f139(0x96)]-0x96)+','+(window[_0x17f139(0x96)]-0x96)*0x2/0x3),_0x4c5dce[_0x17f139(0x93)](_0xe9d79e)?(await Module[_0x17f139(0xc8)](_0x17f139(0xab)+_0x2c14fe),confirm('Do\x20you\x20want\x20to\x20load\x20save\x20state?')&&(await Module[_0x17f139(0x7a)](0x0),localStorage[_0x17f139(0x9a)](_0x17f139(0xbe),_0x2c14fe),console[_0x17f139(0x71)](_0x2c14fe))):(await Module['loadGame'](_0x17f139(0xab)+_0x2c14fe),localStorage[_0x17f139(0x9a)](_0x17f139(0xbe),_0x2c14fe),console[_0x17f139(0x71)](_0x2c14fe)),await statusShow();}export async function saveState(_0x4d43a7){const _0x540545=a0_0x4bd7e5;await Module[_0x540545(0x6e)](_0x4d43a7),await Module[_0x540545(0xa1)]();}export async function loadState(_0x19baea){const _0x1791ae=a0_0x4bd7e5;await Module[_0x1791ae(0x7a)](_0x19baea);}export async function downloadFile(_0x2d9df9,_0x4ae27f){const _0x744cea=a0_0x4bd7e5,_0x3f6c5b=Module[_0x744cea(0x7d)](_0x2d9df9),_0x303027=document[_0x744cea(0x9b)]('a');document['body'][_0x744cea(0xa3)](_0x303027),_0x303027[_0x744cea(0x85)]=_0x4ae27f;const _0x4335f4=new Blob([_0x3f6c5b],{'type':_0x744cea(0xbb)});_0x303027[_0x744cea(0xc9)]=URL[_0x744cea(0xc4)](_0x4335f4),_0x303027['click'](),URL[_0x744cea(0x8c)](_0x4335f4),_0x303027[_0x744cea(0xb1)]();}export function downloadFileInCloud(_0x599c85){const _0x249b85=a0_0x4bd7e5,_0x5eaf50=Module[_0x249b85(0x7d)](_0x599c85);return _0x5eaf50;}export async function uploadFileInCloud(_0x2cc44d){const _0x4a264c=a0_0x4bd7e5;Module[_0x4a264c(0xbd)](_0x2cc44d,()=>{const _0x507006=_0x4a264c;localStorageFile(),Module[_0x507006(0xa1)]();});}export async function uploadFile(_0x7b183f){const _0x15a25f=a0_0x4bd7e5,_0x183166=_0x7b183f[_0x15a25f(0xaa)][0x0];Module[_0x15a25f(0xbd)](_0x183166,()=>{const _0x4d4cd1=_0x15a25f;localStorageFile(),Module[_0x4d4cd1(0xa1)]();});}export async function editFile(_0x540445,_0x5114bd,_0x258963){const _0x1822ca=a0_0x4bd7e5;await Module[_0x1822ca(0xa2)](_0x540445,_0x5114bd,_0x258963),await Module[_0x1822ca(0xa1)]();}export async function deleteFile(_0x4cbbc5){const _0x347b49=a0_0x4bd7e5;await Module['deleteFile'](_0x4cbbc5),await Module[_0x347b49(0xa1)]();}export function listGame(){const _0x27b2a7=a0_0x4bd7e5,_0x3b412e=Module[_0x27b2a7(0x87)]()[_0x27b2a7(0x8f)](_0x43a429=>_0x43a429!=='.'&&_0x43a429!=='..');return _0x3b412e;}export function listSave(){const _0x1a82cb=a0_0x4bd7e5,_0xd90da7=Module[_0x1a82cb(0xb0)]()[_0x1a82cb(0x8f)](_0x20b146=>_0x20b146!=='.'&&_0x20b146!=='..');return _0xd90da7;}export function listState(){const _0x116f12=Module['listStates']()['filter'](_0x27c431=>_0x27c431!=='.'&&_0x27c431!=='..');return _0x116f12;}export function listCheat(){const _0x3210c2=a0_0x4bd7e5,_0x446ea8=Module[_0x3210c2(0x77)]()[_0x3210c2(0x8f)](_0x14a7ec=>_0x14a7ec!=='.'&&_0x14a7ec!=='..');return _0x446ea8;}export function listScreenshot(){const _0x5385fe=a0_0x4bd7e5,_0x372bb9=Module[_0x5385fe(0x6d)]()[_0x5385fe(0x8f)](_0x27a133=>_0x27a133!=='.'&&_0x27a133!=='..');return _0x372bb9;}function a0_0x333b(){const _0xd82828=['getElementById','Resumed!','Off','download','split','listRoms','beforeunload','1008132tyGYYF','replace','No\x20screenshot!','revokeObjectURL','1677231BXbETI','6cgeCzD','filter','visibilityState','screenSize','turboF','includes','classList','_savedCheats','innerWidth','setFastForwardMultiplier','.gbc','161814siDfgH','setItem','createElement','8SfWjSs','Cloud\x20upload\x20','_imageState0','now','Cheat\x20Enabled!','FSSync','editFileName','appendChild','disable','/data/screenshots/','padStart','slotStateSaved','add','autoLoadCheats','files','/data/games/','visible','canvas','getItem','gbc','listSaves','remove','image/png','10eXMChO','.gb','set','indexOf','charCodeAt','0,0,','turboState','5264270zcfzpI','application/octet-stream','endsWith','uploadAll','gameName','10FhMdIn','text/plain','screenshot','substring','.ss0','createObjectURL','pagehide','buttonPress','style','loadGame','href','.png','150311vIkLWi','buttonUnpress','SDL2','503418CoVfnN','_slot0.txt','\x20time(s)','resumeGame','textContent','persisted','FSInit','tEXtComment\x00','gbc1','fileSize','listScreenshots','saveState','type','addEventListener','log','Unable\x20to\x20upload\x20to\x20Cloud!','visibilitychange','#20A5A6','326945EZWbNz','hidden','listCheats','control-setting','length','loadState','bottom','_dateState0','downloadFile','onLine','Auto\x20save\x20','uId','timer'];a0_0x333b=function(){return _0xd82828;};return a0_0x333b();}export function embedTextInPngFile(_0x106499,_0x373c25,_0x22c9b6){const _0xf238ed=a0_0x4bd7e5;let _0x36610d=atob(_0x106499[_0xf238ed(0x86)](',')[0x1]),_0x551fea=new Uint8Array(_0x36610d['length']);for(let _0x209980=0x0;_0x209980<_0x36610d[_0xf238ed(0x79)];_0x209980++){_0x551fea[_0x209980]=_0x36610d[_0xf238ed(0xb7)](_0x209980);}let _0xc8503a=new TextEncoder()['encode']('tEXtComment\x00'+_0x373c25),_0x5d8316=new Uint8Array(_0x551fea[_0xf238ed(0x79)]+_0xc8503a[_0xf238ed(0x79)]);_0x5d8316['set'](_0x551fea,0x0),_0x5d8316[_0xf238ed(0xb5)](_0xc8503a,_0x551fea[_0xf238ed(0x79)]);let _0x5b2e67=new Blob([_0x5d8316],{'type':_0xf238ed(0xb2)}),_0x1843e3=new File([_0x5b2e67],_0x22c9b6,{'type':_0xf238ed(0xb2)});return _0x1843e3;}export function extractTextFromPngBase64(_0x1f5049){const _0x4b962a=a0_0x4bd7e5;let _0x2759fa=atob(_0x1f5049[_0x4b962a(0x86)](',')[0x1]),_0x11b487=_0x4b962a(0xd5),_0x5ac2f0=_0x2759fa[_0x4b962a(0xb6)](_0x11b487);if(_0x5ac2f0!==-0x1)return _0x2759fa[_0x4b962a(0xc2)](_0x5ac2f0+_0x11b487[_0x4b962a(0x79)]);return null;}export function fileSize(_0x5d0508){const _0x384738=a0_0x4bd7e5,_0x35caf3=Module[_0x384738(0xd7)](_0x5d0508);return _0x35caf3;}export async function resumeGame(){const _0x111957=a0_0x4bd7e5;Module[_0x111957(0xd1)](),Module[_0x111957(0xcd)](),notiMessage(_0x111957(0x83),0x7d0);}export async function pauseGame(){const _0x24274b=a0_0x4bd7e5;Module['pauseGame'](),Module[_0x24274b(0xcd)](),notiMessage('Paused!',0x7d0);}export async function buttonPress(_0x2faabf){const _0x120d13=a0_0x4bd7e5;Module[_0x120d13(0xc6)](_0x2faabf);}export async function buttonUnpress(_0x627c66){const _0x527467=a0_0x4bd7e5;Module[_0x527467(0xcc)](_0x627c66);}export async function screenShot(_0x47f58e){const _0x1ae0f7=a0_0x4bd7e5,_0x2b33d3=localStorage[_0x1ae0f7(0xae)](_0x1ae0f7(0xbe))[_0x1ae0f7(0x8a)](/\.(gba|gbc|gb|zip)$/,''),_0x423a70=_0x2b33d3+'_'+_0x47f58e+_0x1ae0f7(0xca);await Module[_0x1ae0f7(0xc1)](_0x423a70),await Module[_0x1ae0f7(0xa1)]();const _0x31983a=await fileToBase64(Module['downloadFile'](_0x1ae0f7(0xa5)+_0x423a70)),_0x19de38=embedTextInPngFile(_0x31983a,formatDateTime(Date[_0x1ae0f7(0x9f)]()),_0x423a70);Module[_0x1ae0f7(0xbd)](_0x19de38,()=>{const _0x46502b=_0x1ae0f7;localStorageFile(),Module[_0x46502b(0xa1)]();});}export async function dowloadScreenShot(_0x30ef01){try{const _0x3d94c2=await fileToBase64(Module['downloadFile'](_0x30ef01));return _0x3d94c2;}catch{}}export async function captureOCR(_0x5596d2){const _0x27d1d7=a0_0x4bd7e5;Module['screenshot'](_0x5596d2);const _0x4acb8e=Module['downloadFile'](_0x27d1d7(0xa5)+_0x5596d2);return _0x4acb8e;}export async function setFastForwardMultiplier(_0x839157){const _0x945a54=a0_0x4bd7e5;Module[_0x945a54(0x97)](_0x839157);}export function uploadCheats(_0x3b9c28,_0x5ccd34,_0x190e03,_0x649f6d,_0x3fe0cb){const _0x20bac6=a0_0x4bd7e5;Module[_0x20bac6(0xbd)](_0x3b9c28,()=>{const _0x57df96=_0x20bac6;Module[_0x57df96(0xa9)](),setTimeout(()=>{Module['FSSync']();},0x1f4),_0x649f6d&&(localStorage[_0x57df96(0x9a)](_0x5ccd34+'_savedCheats',_0x190e03),notiMessage(_0x57df96(0xa0),0x5dc)),_0x3fe0cb['textContent']=localStorage[_0x57df96(0xae)](_0x5ccd34+_0x57df96(0x95)||_0x57df96(0x84));});}export function setVolume(_0x43ad7d){Module['setVolume'](_0x43ad7d);}