const a0_0x3aef13=a0_0x4cf8;(function(_0x2ed843,_0x1dbc57){const _0x15da2f=a0_0x4cf8,_0x449e23=_0x2ed843();while(!![]){try{const _0x5a2e7b=parseInt(_0x15da2f(0x10a))/0x1*(parseInt(_0x15da2f(0xc6))/0x2)+-parseInt(_0x15da2f(0x120))/0x3*(-parseInt(_0x15da2f(0x128))/0x4)+-parseInt(_0x15da2f(0xf9))/0x5+parseInt(_0x15da2f(0xd8))/0x6*(-parseInt(_0x15da2f(0x107))/0x7)+parseInt(_0x15da2f(0x109))/0x8+parseInt(_0x15da2f(0x126))/0x9*(parseInt(_0x15da2f(0xec))/0xa)+-parseInt(_0x15da2f(0x124))/0xb;if(_0x5a2e7b===_0x1dbc57)break;else _0x449e23['push'](_0x449e23['shift']());}catch(_0x1dfefa){_0x449e23['push'](_0x449e23['shift']());}}}(a0_0x529d,0x9d37e));import a0_0x4a2242 from'../core/mgba.js';function a0_0x529d(){const _0x539296=['disable','tEXtComment\x00','resumeGame','padStart','files','length','\x20time(s)','425601itcAqU','loadGame','image/png','toString','24813085nwfHDx','editFileName','774lpwapJ','now','32uahthr','screenSize','Resumed!','12962xbNazZ','getElementById','saveState','/data/states/','0,0,','Paused!','setFastForwardMultiplier','#E0C068','split','uploadAll','listScreenshots','remove','innerWidth','textContent','encode','setVolume','timer','SDL2','192RybMLo','visibilitychange','revokeObjectURL','download','getItem','/data/games/','slotStateSaved','.gb','gameName','FSSync','style','beforeunload','add','deleteFile','screenshot','log','buttonPress','visible','Auto\x20save\x20','listStates','120970lPaMIR','persisted','Cloud\x20upload\x20','autoLoadCheats','href','hidden','/data/screenshots/','loadState','classList','control-setting','bottom','uId','Off','5128265KssjLH','turboF','application/octet-stream','.ss0','contains','createObjectURL','Do\x20you\x20want\x20to\x20load\x20save\x20state?','listSaves','_savedCheats','onLine','then','indexOf','listRoms','set','14861kODpbm','endsWith','7129832StHCrd','143HSTBgt','gbc','filter','fileSize','substring','uploadRom','replace','includes','setItem','state','appendChild','canvas','addEventListener','downloadFile','click'];a0_0x529d=function(){return _0x539296;};return a0_0x529d();}import*as a0_0x22feba from'./gamepad.js';import{localStorageFile}from'./storage.js';import{dpUploadFile}from'./cloud.js';const Module={'canvas':document[a0_0x3aef13(0xc7)](a0_0x3aef13(0x115))};function initializeCore(_0x34b801,_0x4ac4e2){const _0x4e51f5=a0_0x3aef13;_0x34b801(_0x4ac4e2)[_0x4e51f5(0x103)](function(_0x13f83a){_0x13f83a['FSInit']();});}initializeCore(a0_0x4a2242,Module);let countAutoSave=0x0,turboState=0x1,countUpload=0x0;const canvas=document[a0_0x3aef13(0xc7)]('canvas'),savedTurboState=localStorage[a0_0x3aef13(0xdc)]('turboState'),controlSetting=document[a0_0x3aef13(0xc7)](a0_0x3aef13(0xf5));function handleVisibilityChange(_0x62c215){const _0x120d9d=a0_0x3aef13;document['visibilityState']===_0x120d9d(0xf1)||_0x62c215?.['type']===_0x120d9d(0xe3)||_0x62c215?.[_0x120d9d(0xed)]?(pauseGame(),canvas[_0x120d9d(0xf4)][_0x120d9d(0xe4)](_0x120d9d(0xe9))):(setTimeout(()=>{const _0x411c87=_0x120d9d;canvas[_0x411c87(0xf4)][_0x411c87(0xd1)](_0x411c87(0xe9));},0x258),controlSetting[_0x120d9d(0xf4)][_0x120d9d(0xfd)]('visible')&&resumeGame());}async function statusShow(){const _0x579ceb=a0_0x3aef13;document['addEventListener']('pagehide',handleVisibilityChange),document[_0x579ceb(0x116)](_0x579ceb(0xd9),handleVisibilityChange),window[_0x579ceb(0x116)](_0x579ceb(0xe3),handleVisibilityChange),restoreArea(),startTimer(),savedTurboState!==null&&(turboState=parseInt(savedTurboState),await a0_0x22feba[_0x579ceb(0xfa)](turboState)),await delay(0xc8),await Module[_0x579ceb(0xd7)](),await delay(0x320),await led(parseInt(localStorage[_0x579ceb(0xdc)](_0x579ceb(0xde)))),await notiMessage(gameVer,0x3e8);}async function saveStatePeriodically(){const _0x171ea3=a0_0x3aef13;await ledSave('#20A5A6'),await Module[_0x171ea3(0xc8)](0x0),await Module[_0x171ea3(0xe1)](),await screenShot(0x0),console[_0x171ea3(0xe7)](_0x171ea3(0xea)+ ++countAutoSave+_0x171ea3(0x11f));}async function saveStateInCloud(){const _0x40cf1e=a0_0x3aef13,_0x204d5d=localStorage[_0x40cf1e(0xdc)](_0x40cf1e(0xe0)),_0x2eea42=_0x204d5d[_0x40cf1e(0x110)](/\.(zip|gb|gbc|gba)$/,_0x40cf1e(0xfc)),_0x8438bd=localStorage['getItem'](_0x40cf1e(0xf7));navigator[_0x40cf1e(0x102)]&&(_0x8438bd&&(await ledSave(_0x40cf1e(0xcd)),await delay(0x3e8),await dpUploadFile(_0x2eea42,Module[_0x40cf1e(0x117)](_0x40cf1e(0xc9)+_0x2eea42),_0x40cf1e(0x113)),await lockNoti('',_0x40cf1e(0xee)+ ++countUpload+_0x40cf1e(0x11f),0x7d0)));}function startTimer(){let [_0x48b6b5,_0x19f233,_0x40788c,_0x12fd30,_0x5a06e7]=[0x0,0x0,0x0,0x0,0x0];setInterval(()=>{const _0x4255e9=a0_0x4cf8;_0x40788c++,_0x12fd30++,_0x5a06e7++;if(_0x40788c===0x3c)[_0x40788c,_0x19f233]=[0x0,_0x19f233+0x1];if(_0x19f233===0x3c)[_0x19f233,_0x48b6b5]=[0x0,_0x48b6b5+0x1];document[_0x4255e9(0xc7)](_0x4255e9(0xd6))[_0x4255e9(0xd3)]=_0x48b6b5+'h'+_0x19f233['toString']()[_0x4255e9(0x11c)](0x2,'0')+'.'+_0x40788c[_0x4255e9(0x123)]()[_0x4255e9(0x11c)](0x2,'0');_0x12fd30===0x3c&&(saveStatePeriodically(),_0x12fd30=0x0);;_0x5a06e7===0x708&&(saveStateInCloud(),_0x5a06e7=0x0);;},0x3e8);}export async function uploadGame(_0x441591){const _0x3161b3=a0_0x3aef13,_0x1a4a3b=_0x441591[_0x3161b3(0x11d)][0x0];Module[_0x3161b3(0x10f)](_0x1a4a3b,()=>{const _0x559aef=_0x3161b3;Module[_0x559aef(0xe1)]();});}export async function loadGame(_0x4e19c4){const _0x2652ea=a0_0x3aef13,_0x3935ad=_0x4e19c4['replace'](/\.(gba|gbc|gb|zip)$/,'.ss0'),_0x198b2c=Module[_0x2652ea(0xeb)]()[_0x2652ea(0x10c)](_0x1929ec=>_0x1929ec!=='.'&&_0x1929ec!=='..');intro['classList'][_0x2652ea(0xe4)](_0x2652ea(0x119)),errorLogElements[0x0][_0x2652ea(0xe2)][_0x2652ea(0xf6)]='0',ingame['classList'][_0x2652ea(0xd1)](_0x2652ea(0x119)),_0x4e19c4[_0x2652ea(0x108)]('.gbc')||_0x4e19c4['endsWith'](_0x2652ea(0xdf))?(canvas[_0x2652ea(0xf4)]['add'](_0x2652ea(0x10b)),areaTrans[_0x2652ea(0xf4)][_0x2652ea(0xe4)]('gbc1'),localStorage[_0x2652ea(0x112)](_0x2652ea(0xc4),_0x2652ea(0xca)+(window[_0x2652ea(0xd2)]-0xe6)+','+(window[_0x2652ea(0xd2)]-0xe6)*0x9/0xa)):localStorage[_0x2652ea(0x112)](_0x2652ea(0xc4),_0x2652ea(0xca)+(window[_0x2652ea(0xd2)]-0x96)+','+(window[_0x2652ea(0xd2)]-0x96)*0x2/0x3),_0x198b2c[_0x2652ea(0x111)](_0x3935ad)?(await Module[_0x2652ea(0x121)](_0x2652ea(0xdd)+_0x4e19c4),confirm(_0x2652ea(0xff))&&(await Module[_0x2652ea(0xf3)](0x0),localStorage[_0x2652ea(0x112)]('gameName',_0x4e19c4),console[_0x2652ea(0xe7)](_0x4e19c4))):(await Module[_0x2652ea(0x121)](_0x2652ea(0xdd)+_0x4e19c4),localStorage[_0x2652ea(0x112)]('gameName',_0x4e19c4),console[_0x2652ea(0xe7)](_0x4e19c4)),await statusShow();}export async function saveState(_0x3114a9){const _0x458808=a0_0x3aef13;await Module[_0x458808(0xc8)](_0x3114a9),await Module[_0x458808(0xe1)]();}export async function loadState(_0x50f3dd){const _0x279ed9=a0_0x3aef13;await Module[_0x279ed9(0xf3)](_0x50f3dd);}export async function downloadFile(_0x52f46e,_0x299129){const _0x1f9605=a0_0x3aef13,_0x10a29d=Module[_0x1f9605(0x117)](_0x52f46e),_0x734d30=document['createElement']('a');document['body'][_0x1f9605(0x114)](_0x734d30),_0x734d30[_0x1f9605(0xdb)]=_0x299129;const _0x186166=new Blob([_0x10a29d],{'type':_0x1f9605(0xfb)});_0x734d30[_0x1f9605(0xf0)]=URL[_0x1f9605(0xfe)](_0x186166),_0x734d30[_0x1f9605(0x118)](),URL[_0x1f9605(0xda)](_0x186166),_0x734d30['remove']();}export function downloadFileInCloud(_0x4d3b93){const _0x5b5930=a0_0x3aef13,_0x1ec947=Module[_0x5b5930(0x117)](_0x4d3b93);return _0x1ec947;}export async function uploadFileInCloud(_0x2e28a0){Module['uploadAll'](_0x2e28a0,()=>{const _0x1afe51=a0_0x4cf8;localStorageFile(),Module[_0x1afe51(0xe1)]();});}export async function uploadFile(_0x2e7ac9){const _0x12607a=a0_0x3aef13,_0x397334=_0x2e7ac9[_0x12607a(0x11d)][0x0];Module['uploadAll'](_0x397334,()=>{const _0x4487b2=_0x12607a;localStorageFile(),Module[_0x4487b2(0xe1)]();});}export async function editFile(_0x195ba6,_0x4a9715,_0x10657e){const _0x5cac03=a0_0x3aef13;await Module[_0x5cac03(0x125)](_0x195ba6,_0x4a9715,_0x10657e),await Module['FSSync']();}export async function deleteFile(_0x2746fd){const _0x1e8b64=a0_0x3aef13;await Module[_0x1e8b64(0xe5)](_0x2746fd),await Module['FSSync']();}export function listGame(){const _0x1e7ee7=a0_0x3aef13,_0x57d7f4=Module[_0x1e7ee7(0x105)]()[_0x1e7ee7(0x10c)](_0x375a36=>_0x375a36!=='.'&&_0x375a36!=='..');return _0x57d7f4;}function a0_0x4cf8(_0xa6f492,_0x249c48){const _0x529d3e=a0_0x529d();return a0_0x4cf8=function(_0x4cf8c2,_0x261938){_0x4cf8c2=_0x4cf8c2-0xc4;let _0xf3f231=_0x529d3e[_0x4cf8c2];return _0xf3f231;},a0_0x4cf8(_0xa6f492,_0x249c48);}export function listSave(){const _0x440893=a0_0x3aef13,_0x1a8066=Module[_0x440893(0x100)]()[_0x440893(0x10c)](_0x42c405=>_0x42c405!=='.'&&_0x42c405!=='..');return _0x1a8066;}export function listState(){const _0x2a4e9e=a0_0x3aef13,_0x2c2f9e=Module['listStates']()[_0x2a4e9e(0x10c)](_0x485eff=>_0x485eff!=='.'&&_0x485eff!=='..');return _0x2c2f9e;}export function listCheat(){const _0x2334d0=a0_0x3aef13,_0x1e7d70=Module['listCheats']()[_0x2334d0(0x10c)](_0x42dbfb=>_0x42dbfb!=='.'&&_0x42dbfb!=='..');return _0x1e7d70;}export function listScreenshot(){const _0x2047fd=a0_0x3aef13,_0x2cdc54=Module[_0x2047fd(0xd0)]()['filter'](_0x2e6dfb=>_0x2e6dfb!=='.'&&_0x2e6dfb!=='..');return _0x2cdc54;}export function embedTextInPngFile(_0x4d0b73,_0x180f91,_0x40daf0){const _0x37291d=a0_0x3aef13;let _0x4412ff=atob(_0x4d0b73['split'](',')[0x1]),_0x3dc199=new Uint8Array(_0x4412ff[_0x37291d(0x11e)]);for(let _0x549930=0x0;_0x549930<_0x4412ff[_0x37291d(0x11e)];_0x549930++){_0x3dc199[_0x549930]=_0x4412ff['charCodeAt'](_0x549930);}let _0x30a8e9=new TextEncoder()[_0x37291d(0xd4)](_0x37291d(0x11a)+_0x180f91),_0x109989=new Uint8Array(_0x3dc199['length']+_0x30a8e9[_0x37291d(0x11e)]);_0x109989['set'](_0x3dc199,0x0),_0x109989[_0x37291d(0x106)](_0x30a8e9,_0x3dc199['length']);let _0x2d527b=new Blob([_0x109989],{'type':_0x37291d(0x122)}),_0x1afd23=new File([_0x2d527b],_0x40daf0,{'type':_0x37291d(0x122)});return _0x1afd23;}export function extractTextFromPngBase64(_0x27ad3b){const _0x353a02=a0_0x3aef13;let _0x33f208=atob(_0x27ad3b[_0x353a02(0xce)](',')[0x1]),_0xdf142c='tEXtComment\x00',_0x3022d0=_0x33f208[_0x353a02(0x104)](_0xdf142c);if(_0x3022d0!==-0x1)return _0x33f208[_0x353a02(0x10e)](_0x3022d0+_0xdf142c[_0x353a02(0x11e)]);return null;}export function fileSize(_0x423517){const _0x2f74ef=a0_0x3aef13,_0x39f48b=Module[_0x2f74ef(0x10d)](_0x423517);return _0x39f48b;}export async function resumeGame(){const _0x1974fd=a0_0x3aef13;Module[_0x1974fd(0x11b)](),Module[_0x1974fd(0xd7)](),notiMessage(_0x1974fd(0xc5),0x7d0);}export async function pauseGame(){const _0x2b8ea8=a0_0x3aef13;Module['pauseGame'](),Module[_0x2b8ea8(0xd7)](),notiMessage(_0x2b8ea8(0xcb),0x7d0);}export async function buttonPress(_0x391814){const _0x238432=a0_0x3aef13;Module[_0x238432(0xe8)](_0x391814);}export async function buttonUnpress(_0x24f844){Module['buttonUnpress'](_0x24f844);}export async function screenShot(_0x5d9b0e){const _0x4e7ced=a0_0x3aef13,_0x2e6263=localStorage['getItem'](_0x4e7ced(0xe0))['replace'](/\.(gba|gbc|gb|zip)$/,''),_0x309eae=_0x2e6263+'_'+_0x5d9b0e+'.png';await Module[_0x4e7ced(0xe6)](_0x309eae),await Module[_0x4e7ced(0xe1)]();const _0x4f055b=await fileToBase64(Module[_0x4e7ced(0x117)](_0x4e7ced(0xf2)+_0x309eae)),_0x1eb89f=embedTextInPngFile(_0x4f055b,formatDateTime(Date[_0x4e7ced(0x127)]()),_0x309eae);Module[_0x4e7ced(0xcf)](_0x1eb89f,()=>{const _0x556986=_0x4e7ced;localStorageFile(),Module[_0x556986(0xe1)]();});}export async function dowloadScreenShot(_0x27f364){const _0x1bb375=a0_0x3aef13;try{const _0x525d00=await fileToBase64(Module[_0x1bb375(0x117)](_0x27f364));return _0x525d00;}catch{}}export async function captureOCR(_0x184b2e){const _0x276cb3=a0_0x3aef13;Module[_0x276cb3(0xe6)](_0x184b2e);const _0x2a4608=Module[_0x276cb3(0x117)]('/data/screenshots/'+_0x184b2e);return _0x2a4608;}export async function setFastForwardMultiplier(_0x15280a){const _0x1744da=a0_0x3aef13;Module[_0x1744da(0xcc)](_0x15280a);}export function uploadCheats(_0x50096a,_0x5e9218,_0x579f30,_0x2ae01f,_0xd76a1e){const _0x3e9231=a0_0x3aef13;Module[_0x3e9231(0xcf)](_0x50096a,()=>{const _0x39c530=_0x3e9231;Module[_0x39c530(0xef)](),setTimeout(()=>{Module['FSSync']();},0x1f4),_0x2ae01f&&(localStorage['setItem'](_0x5e9218+_0x39c530(0x101),_0x579f30),notiMessage('Cheat\x20Enabled!',0x5dc)),_0xd76a1e[_0x39c530(0xd3)]=localStorage[_0x39c530(0xdc)](_0x5e9218+_0x39c530(0x101)||_0x39c530(0xf8));});}export function setVolume(_0x2696cf){const _0x2bf833=a0_0x3aef13;Module[_0x2bf833(0xd5)](_0x2696cf);}