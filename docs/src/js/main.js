const a0_0xfeae78=a0_0x271f;(function(_0x35aab4,_0x529dae){const _0x539bcf=a0_0x271f,_0x3f3377=_0x35aab4();while(!![]){try{const _0xf7e6a7=-parseInt(_0x539bcf(0x1db))/0x1+-parseInt(_0x539bcf(0x19f))/0x2*(parseInt(_0x539bcf(0x1bc))/0x3)+-parseInt(_0x539bcf(0x1ab))/0x4+-parseInt(_0x539bcf(0x1af))/0x5+parseInt(_0x539bcf(0x183))/0x6*(parseInt(_0x539bcf(0x1a2))/0x7)+-parseInt(_0x539bcf(0x18e))/0x8+parseInt(_0x539bcf(0x187))/0x9*(parseInt(_0x539bcf(0x1d5))/0xa);if(_0xf7e6a7===_0x529dae)break;else _0x3f3377['push'](_0x3f3377['shift']());}catch(_0x1cfb85){_0x3f3377['push'](_0x3f3377['shift']());}}}(a0_0x23d5,0xd0513));import a0_0x57dc0b from'../core/mgba.js';import*as a0_0x4df60b from'./gamepad.js';import{localStorageFile}from'./storage.js';import{dpUploadFile}from'./cloud.js';const Module={'canvas':document[a0_0xfeae78(0x1da)]('canvas')};function initializeCore(_0x4899d4,_0x1c5392){const _0xd03ff0=a0_0xfeae78;_0x4899d4(_0x1c5392)[_0xd03ff0(0x18d)](function(_0x148e64){const _0x56d403=_0xd03ff0;_0x148e64[_0x56d403(0x1d0)]();});}initializeCore(a0_0x57dc0b,Module);function a0_0x23d5(){const _0x106549=['uploadRom','style','27tpgWVy','hidden','screenSize','#E0C068','persisted','uploadAll','then','12904672xALxgq','remove','Cheat\x20Enabled!','state','timer','endsWith','control-setting','now','visible','type','textContent','0,0,','/data/states/','download','addEventListener','\x20time(s)','/data/games/','248466onmqBz','.ss0','replace','21YvGjYX','filter','add','listCheats','click','includes','body','Cloud\x20upload\x20','href','5502108TclvZv','loadState','autoLoadCheats','pagehide','5903755xMRdfY','uId','gameName','downloadFile','contains','set','innerWidth','visibilitychange','length','bottom','turboState','slotStateSaved','FSSync','27OeCuZl','Off','buttonUnpress','Auto\x20save\x20','padStart','classList','files','setItem','/data/screenshots/','disable','revokeObjectURL','turboF','screenshot','onLine','resumeGame','pauseGame','listRoms','_savedCheats','listStates','listScreenshots','FSInit','encode','fileSize','SDL2','beforeunload','24657690tgEUho','charCodeAt','getItem','listSaves','Do\x20you\x20want\x20to\x20load\x20save\x20state?','getElementById','1382818HzzzUA','deleteFile','setFastForwardMultiplier','.gb','setVolume','tEXtComment\x00','log','createElement','image/png','loadGame','#20A5A6','split','gbc','substring','252474skGbIr','createObjectURL'];a0_0x23d5=function(){return _0x106549;};return a0_0x23d5();}let countAutoSave=0x0,turboState=0x1,countUpload=0x0;const canvas=document[a0_0xfeae78(0x1da)]('canvas'),savedTurboState=localStorage['getItem'](a0_0xfeae78(0x1b9)),controlSetting=document[a0_0xfeae78(0x1da)](a0_0xfeae78(0x194));function handleVisibilityChange(_0xf7b96c){const _0x4305e4=a0_0xfeae78;document['visibilityState']===_0x4305e4(0x188)||_0xf7b96c?.[_0x4305e4(0x197)]===_0x4305e4(0x1d4)||_0xf7b96c?.[_0x4305e4(0x18b)]?(pauseGame(),canvas[_0x4305e4(0x1c1)]['add'](_0x4305e4(0x196))):(setTimeout(()=>{const _0x5a988f=_0x4305e4;canvas[_0x5a988f(0x1c1)][_0x5a988f(0x18f)](_0x5a988f(0x196));},0x258),controlSetting[_0x4305e4(0x1c1)][_0x4305e4(0x1b3)](_0x4305e4(0x196))&&resumeGame());}async function statusShow(){const _0x1f9eed=a0_0xfeae78;document[_0x1f9eed(0x19c)](_0x1f9eed(0x1ae),handleVisibilityChange),document['addEventListener'](_0x1f9eed(0x1b6),handleVisibilityChange),window['addEventListener'](_0x1f9eed(0x1d4),handleVisibilityChange),restoreArea(),startTimer(),savedTurboState!==null&&(turboState=parseInt(savedTurboState),await a0_0x4df60b[_0x1f9eed(0x1c7)](turboState)),await delay(0xc8),await Module[_0x1f9eed(0x1d3)](),await delay(0x320),await led(parseInt(localStorage[_0x1f9eed(0x1d7)](_0x1f9eed(0x1ba)))),await notiMessage(gameVer,0x3e8);}async function saveStatePeriodically(){const _0x436d92=a0_0xfeae78;await ledSave(_0x436d92(0x17f)),await Module['saveState'](0x0),await Module[_0x436d92(0x1bb)](),await screenShot(0x0),console['log'](_0x436d92(0x1bf)+ ++countAutoSave+_0x436d92(0x19d));}async function saveStateInCloud(){const _0x512eb5=a0_0xfeae78,_0xefb93c=localStorage[_0x512eb5(0x1d7)](_0x512eb5(0x1b1)),_0x2adc06=_0xefb93c[_0x512eb5(0x1a1)](/\.(zip|gb|gbc|gba)$/,_0x512eb5(0x1a0)),_0x2a28aa=localStorage[_0x512eb5(0x1d7)](_0x512eb5(0x1b0));navigator[_0x512eb5(0x1c9)]&&(_0x2a28aa&&(await ledSave(_0x512eb5(0x18a)),await delay(0x3e8),await dpUploadFile(_0x2adc06,Module[_0x512eb5(0x1b2)](_0x512eb5(0x19a)+_0x2adc06),_0x512eb5(0x191)),await lockNoti('',_0x512eb5(0x1a9)+ ++countUpload+_0x512eb5(0x19d),0x7d0)));}function startTimer(){let [_0x147010,_0x448bb2,_0x4f648a,_0x1c15d8,_0x338b61]=[0x0,0x0,0x0,0x0,0x0];setInterval(()=>{const _0x22bff8=a0_0x271f;_0x4f648a++,_0x1c15d8++,_0x338b61++;if(_0x4f648a===0x3c)[_0x4f648a,_0x448bb2]=[0x0,_0x448bb2+0x1];if(_0x448bb2===0x3c)[_0x448bb2,_0x147010]=[0x0,_0x147010+0x1];document['getElementById'](_0x22bff8(0x192))[_0x22bff8(0x198)]=_0x147010+'h'+_0x448bb2['toString']()[_0x22bff8(0x1c0)](0x2,'0')+'.'+_0x4f648a['toString']()[_0x22bff8(0x1c0)](0x2,'0');_0x1c15d8===0x3c&&(saveStatePeriodically(),_0x1c15d8=0x0);;_0x338b61===0x708&&(saveStateInCloud(),_0x338b61=0x0);;},0x3e8);}export async function uploadGame(_0x52a315){const _0x4d2b6c=a0_0xfeae78,_0x49cba2=_0x52a315[_0x4d2b6c(0x1c2)][0x0];Module[_0x4d2b6c(0x185)](_0x49cba2,()=>{const _0x46a22d=_0x4d2b6c;Module[_0x46a22d(0x1bb)]();});}export async function loadGame(_0x2fe45f){const _0x537064=a0_0xfeae78,_0x39a4f9=_0x2fe45f[_0x537064(0x1a1)](/\.(gba|gbc|gb|zip)$/,_0x537064(0x1a0)),_0x98ece9=Module[_0x537064(0x1ce)]()['filter'](_0x1fa8d6=>_0x1fa8d6!=='.'&&_0x1fa8d6!=='..');intro[_0x537064(0x1c1)][_0x537064(0x1a4)]('disable'),errorLogElements[0x0][_0x537064(0x186)][_0x537064(0x1b8)]='0',ingame[_0x537064(0x1c1)][_0x537064(0x18f)](_0x537064(0x1c5)),_0x2fe45f[_0x537064(0x193)]('.gbc')||_0x2fe45f[_0x537064(0x193)](_0x537064(0x1de))?(canvas[_0x537064(0x1c1)][_0x537064(0x1a4)](_0x537064(0x181)),areaTrans[_0x537064(0x1c1)][_0x537064(0x1a4)]('gbc1'),localStorage[_0x537064(0x1c3)](_0x537064(0x189),_0x537064(0x199)+(window[_0x537064(0x1b5)]-0xe6)+','+(window[_0x537064(0x1b5)]-0xe6)*0x9/0xa)):localStorage[_0x537064(0x1c3)](_0x537064(0x189),_0x537064(0x199)+(window[_0x537064(0x1b5)]-0x96)+','+(window[_0x537064(0x1b5)]-0x96)*0x2/0x3),_0x98ece9[_0x537064(0x1a7)](_0x39a4f9)?(await Module[_0x537064(0x17e)](_0x537064(0x19e)+_0x2fe45f),confirm(_0x537064(0x1d9))&&(await Module[_0x537064(0x1ac)](0x0),localStorage[_0x537064(0x1c3)](_0x537064(0x1b1),_0x2fe45f),console[_0x537064(0x17b)](_0x2fe45f))):(await Module[_0x537064(0x17e)](_0x537064(0x19e)+_0x2fe45f),localStorage[_0x537064(0x1c3)](_0x537064(0x1b1),_0x2fe45f),console[_0x537064(0x17b)](_0x2fe45f)),await statusShow();}export async function saveState(_0x2547a2){const _0x26487e=a0_0xfeae78;await Module['saveState'](_0x2547a2),await Module[_0x26487e(0x1bb)]();}export async function loadState(_0x2a4606){const _0x2debc0=a0_0xfeae78;await Module[_0x2debc0(0x1ac)](_0x2a4606);}export async function downloadFile(_0xff21dd,_0xfe5845){const _0x3621f9=a0_0xfeae78,_0x304742=Module[_0x3621f9(0x1b2)](_0xff21dd),_0xc9121e=document[_0x3621f9(0x17c)]('a');document[_0x3621f9(0x1a8)]['appendChild'](_0xc9121e),_0xc9121e[_0x3621f9(0x19b)]=_0xfe5845;const _0x331a9e=new Blob([_0x304742],{'type':'application/octet-stream'});_0xc9121e[_0x3621f9(0x1aa)]=URL[_0x3621f9(0x184)](_0x331a9e),_0xc9121e[_0x3621f9(0x1a6)](),URL[_0x3621f9(0x1c6)](_0x331a9e),_0xc9121e[_0x3621f9(0x18f)]();}export function downloadFileInCloud(_0x10d82a){const _0x1b8740=a0_0xfeae78,_0xc6607b=Module[_0x1b8740(0x1b2)](_0x10d82a);return _0xc6607b;}export async function uploadFileInCloud(_0x762372){const _0x1768a8=a0_0xfeae78;Module[_0x1768a8(0x18c)](_0x762372,()=>{const _0x1d517b=_0x1768a8;localStorageFile(),Module[_0x1d517b(0x1bb)]();});}export async function uploadFile(_0x38cb3f){const _0x1135d4=a0_0xfeae78,_0x35debd=_0x38cb3f['files'][0x0];Module[_0x1135d4(0x18c)](_0x35debd,()=>{const _0x533522=_0x1135d4;localStorageFile(),Module[_0x533522(0x1bb)]();});}export async function editFile(_0x2e3426,_0x2d1d44,_0x4e6ed5){await Module['editFileName'](_0x2e3426,_0x2d1d44,_0x4e6ed5),await Module['FSSync']();}export async function deleteFile(_0xb209f5){const _0x4733fd=a0_0xfeae78;await Module[_0x4733fd(0x1dc)](_0xb209f5),await Module[_0x4733fd(0x1bb)]();}export function listGame(){const _0x444656=a0_0xfeae78,_0x27fbb6=Module[_0x444656(0x1cc)]()['filter'](_0x51a116=>_0x51a116!=='.'&&_0x51a116!=='..');return _0x27fbb6;}export function listSave(){const _0x282cba=a0_0xfeae78,_0x447751=Module[_0x282cba(0x1d8)]()[_0x282cba(0x1a3)](_0x3cd340=>_0x3cd340!=='.'&&_0x3cd340!=='..');return _0x447751;}export function listState(){const _0x43c0a8=a0_0xfeae78,_0x3bd1e7=Module[_0x43c0a8(0x1ce)]()['filter'](_0x4aa456=>_0x4aa456!=='.'&&_0x4aa456!=='..');return _0x3bd1e7;}export function listCheat(){const _0x15d3a1=a0_0xfeae78,_0x3edc4e=Module[_0x15d3a1(0x1a5)]()[_0x15d3a1(0x1a3)](_0x5f2d36=>_0x5f2d36!=='.'&&_0x5f2d36!=='..');return _0x3edc4e;}export function listScreenshot(){const _0x3c72fe=a0_0xfeae78,_0x53c1af=Module[_0x3c72fe(0x1cf)]()[_0x3c72fe(0x1a3)](_0x1f3adc=>_0x1f3adc!=='.'&&_0x1f3adc!=='..');return _0x53c1af;}export function embedTextInPngFile(_0x7d40ba,_0x4a2587,_0x505eef){const _0x150e3b=a0_0xfeae78;let _0x58e78a=atob(_0x7d40ba[_0x150e3b(0x180)](',')[0x1]),_0x55560f=new Uint8Array(_0x58e78a['length']);for(let _0x94e716=0x0;_0x94e716<_0x58e78a[_0x150e3b(0x1b7)];_0x94e716++){_0x55560f[_0x94e716]=_0x58e78a[_0x150e3b(0x1d6)](_0x94e716);}let _0x13804e=new TextEncoder()[_0x150e3b(0x1d1)]('tEXtComment\x00'+_0x4a2587),_0x433bd9=new Uint8Array(_0x55560f[_0x150e3b(0x1b7)]+_0x13804e[_0x150e3b(0x1b7)]);_0x433bd9[_0x150e3b(0x1b4)](_0x55560f,0x0),_0x433bd9[_0x150e3b(0x1b4)](_0x13804e,_0x55560f['length']);let _0xab9b0d=new Blob([_0x433bd9],{'type':'image/png'}),_0x4fa6ba=new File([_0xab9b0d],_0x505eef,{'type':_0x150e3b(0x17d)});return _0x4fa6ba;}export function extractTextFromPngBase64(_0x562a5a){const _0x56ea7b=a0_0xfeae78;let _0x42fe0d=atob(_0x562a5a[_0x56ea7b(0x180)](',')[0x1]),_0x5635d5=_0x56ea7b(0x1e0),_0x21674a=_0x42fe0d['indexOf'](_0x5635d5);if(_0x21674a!==-0x1)return _0x42fe0d[_0x56ea7b(0x182)](_0x21674a+_0x5635d5[_0x56ea7b(0x1b7)]);return null;}export function fileSize(_0x2dd72b){const _0x4b810e=a0_0xfeae78,_0x38c45c=Module[_0x4b810e(0x1d2)](_0x2dd72b);return _0x38c45c;}function a0_0x271f(_0x1341cb,_0x378135){const _0x23d50b=a0_0x23d5();return a0_0x271f=function(_0x271fbc,_0x449c3b){_0x271fbc=_0x271fbc-0x17b;let _0x446db7=_0x23d50b[_0x271fbc];return _0x446db7;},a0_0x271f(_0x1341cb,_0x378135);}export async function resumeGame(){const _0x95fe5c=a0_0xfeae78;Module[_0x95fe5c(0x1ca)](),Module[_0x95fe5c(0x1d3)](),notiMessage('Resumed!',0x7d0);}export async function pauseGame(){const _0x5a25fe=a0_0xfeae78;Module[_0x5a25fe(0x1cb)](),Module[_0x5a25fe(0x1d3)](),notiMessage('Paused!',0x7d0);}export async function buttonPress(_0x58014b){Module['buttonPress'](_0x58014b);}export async function buttonUnpress(_0x5729bf){const _0x6a187d=a0_0xfeae78;Module[_0x6a187d(0x1be)](_0x5729bf);}export async function screenShot(_0x205426){const _0x14991b=a0_0xfeae78,_0x5101aa=localStorage[_0x14991b(0x1d7)](_0x14991b(0x1b1))[_0x14991b(0x1a1)](/\.(gba|gbc|gb|zip)$/,''),_0x598ccb=_0x5101aa+'_'+_0x205426+'.png';await Module[_0x14991b(0x1c8)](_0x598ccb),await Module[_0x14991b(0x1bb)]();const _0x17c5c=await fileToBase64(Module['downloadFile'](_0x14991b(0x1c4)+_0x598ccb)),_0x65cf95=embedTextInPngFile(_0x17c5c,formatDateTime(Date[_0x14991b(0x195)]()),_0x598ccb);Module[_0x14991b(0x18c)](_0x65cf95,()=>{localStorageFile(),Module['FSSync']();});}export async function dowloadScreenShot(_0x1ebe00){const _0x4e9a1f=a0_0xfeae78;try{const _0x1f10f4=await fileToBase64(Module[_0x4e9a1f(0x1b2)](_0x1ebe00));return _0x1f10f4;}catch{}}export async function captureOCR(_0x1d69f3){const _0x1628ae=a0_0xfeae78;Module['screenshot'](_0x1d69f3);const _0x1bfc17=Module['downloadFile'](_0x1628ae(0x1c4)+_0x1d69f3);return _0x1bfc17;}export async function setFastForwardMultiplier(_0x4d95df){const _0x52ffc5=a0_0xfeae78;Module[_0x52ffc5(0x1dd)](_0x4d95df);}export function uploadCheats(_0x4ad275,_0x2dca15,_0x558c79,_0x25ccee,_0x368c79){const _0x1cef40=a0_0xfeae78;Module[_0x1cef40(0x18c)](_0x4ad275,()=>{const _0x59bfd2=_0x1cef40;Module[_0x59bfd2(0x1ad)](),setTimeout(()=>{const _0x39812e=_0x59bfd2;Module[_0x39812e(0x1bb)]();},0x1f4),_0x25ccee&&(localStorage[_0x59bfd2(0x1c3)](_0x2dca15+_0x59bfd2(0x1cd),_0x558c79),notiMessage(_0x59bfd2(0x190),0x5dc)),_0x368c79[_0x59bfd2(0x198)]=localStorage[_0x59bfd2(0x1d7)](_0x2dca15+_0x59bfd2(0x1cd)||_0x59bfd2(0x1bd));});}export function setVolume(_0x14b68a){const _0x9186fc=a0_0xfeae78;Module[_0x9186fc(0x1df)](_0x14b68a);}