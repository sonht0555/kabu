const a0_0xc1f260=a0_0x3d59;(function(_0x5bbe49,_0x40f168){const _0x2c680e=a0_0x3d59,_0x2b0d29=_0x5bbe49();while(!![]){try{const _0x479421=parseInt(_0x2c680e(0x1a7))/0x1*(-parseInt(_0x2c680e(0x1e5))/0x2)+-parseInt(_0x2c680e(0x1fc))/0x3*(-parseInt(_0x2c680e(0x1e0))/0x4)+parseInt(_0x2c680e(0x1b8))/0x5+parseInt(_0x2c680e(0x1d5))/0x6+-parseInt(_0x2c680e(0x1ff))/0x7*(parseInt(_0x2c680e(0x1a0))/0x8)+parseInt(_0x2c680e(0x1b7))/0x9*(parseInt(_0x2c680e(0x1e9))/0xa)+-parseInt(_0x2c680e(0x1db))/0xb;if(_0x479421===_0x40f168)break;else _0x2b0d29['push'](_0x2b0d29['shift']());}catch(_0x28f41e){_0x2b0d29['push'](_0x2b0d29['shift']());}}}(a0_0x18da,0xdef2f));import a0_0x519ac3 from'../core/mgba.js';import*as a0_0xed2220 from'./gamepad.js';import{localStorageFile}from'./storage.js';import{dpUploadFile,dpRefreshToken}from'./cloud.js';const Module={'canvas':document[a0_0xc1f260(0x1cf)](a0_0xc1f260(0x1a8))};function initializeCore(_0x3ea13a,_0x33e55d){const _0x535883=a0_0xc1f260;_0x3ea13a(_0x33e55d)[_0x535883(0x1ce)](function(_0x296648){_0x296648['FSInit']();});}initializeCore(a0_0x519ac3,Module);let countAutoSave=0x0,turboState=0x1,countUpload=0x0;const canvas=document[a0_0xc1f260(0x1cf)]('canvas'),savedTurboState=localStorage[a0_0xc1f260(0x1b2)](a0_0xc1f260(0x1d9)),controlSetting=document[a0_0xc1f260(0x1cf)](a0_0xc1f260(0x1c4));function handleVisibilityChange(_0x3d3ebf){const _0x23cb7d=a0_0xc1f260;document[_0x23cb7d(0x1f6)]==='hidden'||_0x3d3ebf?.['type']==='beforeunload'||_0x3d3ebf?.[_0x23cb7d(0x1ba)]?(pauseGame(),canvas[_0x23cb7d(0x1ad)]['add']('visible')):(setTimeout(()=>{const _0x2d0bca=_0x23cb7d;canvas[_0x2d0bca(0x1ad)][_0x2d0bca(0x1c9)](_0x2d0bca(0x1c2));},0x258),controlSetting[_0x23cb7d(0x1ad)][_0x23cb7d(0x1f3)](_0x23cb7d(0x1c2))&&resumeGame());}async function statusShow(){const _0x1b29d8=a0_0xc1f260;document[_0x1b29d8(0x1c3)](_0x1b29d8(0x1ae),handleVisibilityChange),document[_0x1b29d8(0x1c3)](_0x1b29d8(0x1e7),handleVisibilityChange),window[_0x1b29d8(0x1c3)](_0x1b29d8(0x1ed),handleVisibilityChange),restoreArea(),startTimer(),savedTurboState!==null&&(turboState=parseInt(savedTurboState),await a0_0xed2220['turboF'](turboState)),await delay(0xc8),await Module['SDL2'](),await delay(0x320),await led(parseInt(localStorage[_0x1b29d8(0x1b2)]('slotStateSaved'))),await notiMessage(gameVer,0x3e8);}function a0_0x18da(){const _0x4fc83c=['saveState','innerWidth','appendChild','setItem','2210094xnmudA','0,0,','text/plain','Cheat\x20Enabled!','turboState','Paused!','13455354vYXiIq','.png','editFileName','/data/states/','onLine','1846672HnJmwx','FSSync','_slot0.txt','screenSize','downloadFile','14bzSzYy','listCheats','visibilitychange','.ss0','5050XlJfuk','loadGame','uId','pauseGame','beforeunload','/data/screenshots/','fileSize','gameName','replace','listScreenshots','contains','loadState','Do\x20you\x20want\x20to\x20load\x20save\x20state?','visibilityState','application/octet-stream','_dateState0','_imageState0','resumeGame','Error\x20uploadSavSta:','6kkBEOw','buttonUnpress','createElement','175350WBhUiu','gbc','download','_savedCheats','buttonPress','Error\x20uploadCheat:','filter','128uEhJuw','body','log','autoLoadCheats','No\x20screenshot!','deleteFile','.gba','167381cEdMGD','canvas','revokeObjectURL','uploadSaveOrSaveState','toString','href','classList','pagehide','uploadCheats','includes','listSaves','getItem','Cloud\x20upload\x20','timer','listRoms','\x20time(s)','26856WsotBp','4551375cfZeEb','error','persisted','_dateState','name','SDL2','bottom','textContent','disable','listStates','visible','addEventListener','control-setting','.gbc','endsWith','now','files','remove','Save/State\x20uploaded\x20successfully:','add','Online!','screenshot','then','getElementById','click'];a0_0x18da=function(){return _0x4fc83c;};return a0_0x18da();}async function saveStatePeriodically(){const _0x46cd32=a0_0xc1f260;await ledSave('#20A5A6'),await Module[_0x46cd32(0x1d1)](0x0),await Module['FSSync'](),await screenShot(0x0),console[_0x46cd32(0x1a2)]('Auto\x20save\x20'+ ++countAutoSave+_0x46cd32(0x1b6));}async function saveStateInCloud(){const _0x67135c=a0_0xc1f260,_0x38d107=localStorage['getItem']('gameName'),_0x34076e=_0x38d107[_0x67135c(0x1f1)](_0x67135c(0x1a6),_0x67135c(0x1e8)),_0x1c97ca=localStorage[_0x67135c(0x1b2)](_0x67135c(0x1eb)),_0x2ceef4=localStorage[_0x67135c(0x1b2)](_0x38d107+_0x67135c(0x1f9)),_0x4acb0a=localStorage[_0x67135c(0x1b2)](_0x38d107+_0x67135c(0x1f8));if(navigator[_0x67135c(0x1df)]){if(_0x1c97ca){await ledSave('#E0C068'),await delay(0x3e8),await dpUploadFile(_0x34076e,Module[_0x67135c(0x1e4)](_0x67135c(0x1de)+_0x34076e));if(_0x2ceef4!==null){const _0xbae2e1=_0x2ceef4+'\x0a\x0a'+_0x4acb0a,_0x8ec304=new Blob([_0xbae2e1],{'type':_0x67135c(0x1d7)});await dpUploadFile(_0x38d107+_0x67135c(0x1e2),_0x8ec304);}else console[_0x67135c(0x1a2)](_0x67135c(0x1a4));await lockNoti('',_0x67135c(0x1b3)+ ++countUpload+_0x67135c(0x1b6),0x7d0);}else console[_0x67135c(0x1a2)]('Unable\x20to\x20upload\x20to\x20Cloud!');}else console[_0x67135c(0x1a2)](_0x67135c(0x1cc));}function startTimer(){let [_0x390642,_0x4d689b,_0x17b1f0,_0x5821f4,_0x29a3ca]=[0x0,0x0,0x0,0x0,0x0];setInterval(()=>{const _0x49d06a=a0_0x3d59;_0x17b1f0++,_0x5821f4++,_0x29a3ca++;if(_0x17b1f0===0x3c)[_0x17b1f0,_0x4d689b]=[0x0,_0x4d689b+0x1];if(_0x4d689b===0x3c)[_0x4d689b,_0x390642]=[0x0,_0x390642+0x1];document[_0x49d06a(0x1cf)](_0x49d06a(0x1b4))[_0x49d06a(0x1bf)]=_0x390642+'h'+_0x4d689b[_0x49d06a(0x1ab)]()['padStart'](0x2,'0')+'.'+_0x17b1f0[_0x49d06a(0x1ab)]()['padStart'](0x2,'0');_0x5821f4===0x3c&&(saveStatePeriodically(),_0x5821f4=0x0);;_0x29a3ca===0xe10&&(saveStateInCloud(),_0x29a3ca=0x0);;},0x3e8);}export async function uploadGame(_0x405be2){const _0x38f991=a0_0xc1f260,_0x143124=_0x405be2[_0x38f991(0x1c8)][0x0];Module['uploadRom'](_0x143124,()=>{const _0x1b0d28=_0x38f991;Module[_0x1b0d28(0x1e1)]();});}export async function loadGame(_0x1ffe3e){const _0x330baf=a0_0xc1f260,_0x46ad56=_0x1ffe3e['replace'](/\.(gba|gbc|gb|zip)$/,_0x330baf(0x1e8)),_0x2f9a50=Module[_0x330baf(0x1c1)]()['filter'](_0x5df5e7=>_0x5df5e7!=='.'&&_0x5df5e7!=='..');intro[_0x330baf(0x1ad)]['add']('disable'),errorLogElements[0x0]['style'][_0x330baf(0x1be)]='0',ingame[_0x330baf(0x1ad)]['remove'](_0x330baf(0x1c0)),_0x1ffe3e[_0x330baf(0x1c6)](_0x330baf(0x1c5))||_0x1ffe3e[_0x330baf(0x1c6)]('.gb')?(canvas['classList'][_0x330baf(0x1cb)](_0x330baf(0x200)),areaTrans[_0x330baf(0x1ad)][_0x330baf(0x1cb)]('gbc1'),localStorage[_0x330baf(0x1d4)](_0x330baf(0x1e3),_0x330baf(0x1d6)+(window[_0x330baf(0x1d2)]-0xe6)+','+(window[_0x330baf(0x1d2)]-0xe6)*0x9/0xa)):localStorage['setItem']('screenSize','0,0,'+(window['innerWidth']-0x96)+','+(window[_0x330baf(0x1d2)]-0x96)*0x2/0x3),_0x2f9a50[_0x330baf(0x1b0)](_0x46ad56)?(await Module[_0x330baf(0x1ea)]('/data/games/'+_0x1ffe3e),confirm(_0x330baf(0x1f5))&&(await Module[_0x330baf(0x1f4)](0x0),localStorage[_0x330baf(0x1d4)](_0x330baf(0x1f0),_0x1ffe3e),console[_0x330baf(0x1a2)](_0x1ffe3e))):(await Module[_0x330baf(0x1ea)]('/data/games/'+_0x1ffe3e),localStorage['setItem'](_0x330baf(0x1f0),_0x1ffe3e)),await statusShow();}export async function saveState(_0x4ddf6a){const _0x1d3f28=a0_0xc1f260;await Module['saveState'](_0x4ddf6a),await Module[_0x1d3f28(0x1e1)]();}export async function loadState(_0x3bcad2){await Module['loadState'](_0x3bcad2);}export async function downloadFile(_0x2cf082,_0x618eb4){const _0x158ce5=a0_0xc1f260,_0x134d22=Module['downloadFile'](_0x2cf082),_0x4b11b7=document[_0x158ce5(0x1fe)]('a');document[_0x158ce5(0x1a1)][_0x158ce5(0x1d3)](_0x4b11b7),_0x4b11b7[_0x158ce5(0x201)]=_0x618eb4;const _0x5248b0=new Blob([_0x134d22],{'type':_0x158ce5(0x1f7)});_0x4b11b7[_0x158ce5(0x1ac)]=URL['createObjectURL'](_0x5248b0),_0x4b11b7[_0x158ce5(0x1d0)](),URL[_0x158ce5(0x1a9)](_0x5248b0),_0x4b11b7['remove']();}export function downloadFileInCloud(_0x1adb07){const _0x48ded0=Module['downloadFile'](_0x1adb07);return _0x48ded0;}export async function uploadFile(_0x3a5d0b){const _0x5752f7=a0_0xc1f260,_0x94c870=_0x3a5d0b['files'][0x0];Module[_0x5752f7(0x1aa)](_0x94c870,()=>{Module['FSSync']();});}export async function editFile(_0x32f6c7,_0x1da8af,_0x14b5e6){const _0x212efa=a0_0xc1f260;await Module[_0x212efa(0x1dd)](_0x32f6c7,_0x1da8af,_0x14b5e6),await Module[_0x212efa(0x1e1)]();}export async function deleteFile(_0x1e0ce0){const _0x12f9b3=a0_0xc1f260;await Module[_0x12f9b3(0x1a5)](_0x1e0ce0),await Module[_0x12f9b3(0x1e1)]();}export function listGame(){const _0x2a7dbb=a0_0xc1f260,_0x203fc5=Module[_0x2a7dbb(0x1b5)]()[_0x2a7dbb(0x19f)](_0x3a8ddc=>_0x3a8ddc!=='.'&&_0x3a8ddc!=='..');return _0x203fc5;}export function listSave(){const _0x533f50=a0_0xc1f260,_0x1d879d=Module[_0x533f50(0x1b1)]()[_0x533f50(0x19f)](_0x5848e9=>_0x5848e9!=='.'&&_0x5848e9!=='..');return _0x1d879d;}function a0_0x3d59(_0x961e51,_0x4adfc5){const _0x18da33=a0_0x18da();return a0_0x3d59=function(_0x3d59d3,_0x2e2407){_0x3d59d3=_0x3d59d3-0x19f;let _0x2acbf4=_0x18da33[_0x3d59d3];return _0x2acbf4;},a0_0x3d59(_0x961e51,_0x4adfc5);}export function listState(){const _0x2fac9c=a0_0xc1f260,_0x295a8a=Module[_0x2fac9c(0x1c1)]()[_0x2fac9c(0x19f)](_0x89a094=>_0x89a094!=='.'&&_0x89a094!=='..');return _0x295a8a;}export function listCheat(){const _0x4ec1b0=a0_0xc1f260,_0x28350b=Module[_0x4ec1b0(0x1e6)]()[_0x4ec1b0(0x19f)](_0x58e185=>_0x58e185!=='.'&&_0x58e185!=='..');return _0x28350b;}export function listScreenshot(){const _0x581be9=a0_0xc1f260,_0x24c3a5=Module[_0x581be9(0x1f2)]()[_0x581be9(0x19f)](_0x8fd13f=>_0x8fd13f!=='.'&&_0x8fd13f!=='..');return _0x24c3a5;}export function fileSize(_0x2d10e6){const _0x37d3de=a0_0xc1f260,_0x2100ab=Module[_0x37d3de(0x1ef)](_0x2d10e6);return _0x2100ab;}export async function uploadCheat(_0x19b23a){const _0x1f69b1=a0_0xc1f260;try{const _0x256e59=_0x19b23a['files'][0x0];await Module['uploadCheats'](_0x256e59,()=>{const _0x3a5b21=a0_0x3d59;console['log']('Cheat\x20uploaded\x20successfully:',_0x256e59[_0x3a5b21(0x1bc)]),localStorageFile(),Module['FSSync']();});}catch(_0x153f82){console[_0x1f69b1(0x1b9)](_0x1f69b1(0x204),_0x153f82);}}export async function uploadSavSta(_0x53f66b){const _0x46d8e5=a0_0xc1f260;try{const _0x325931=_0x53f66b[_0x46d8e5(0x1c8)][0x0];await Module[_0x46d8e5(0x1aa)](_0x325931,()=>{const _0x8347a0=_0x46d8e5;console[_0x8347a0(0x1a2)](_0x8347a0(0x1ca),_0x325931[_0x8347a0(0x1bc)]),localStorageFile(),Module[_0x8347a0(0x1e1)]();});}catch(_0x424dc7){console[_0x46d8e5(0x1b9)](_0x46d8e5(0x1fb),_0x424dc7);}}export async function uploadSaveOrSaveState(_0x2d2e83){const _0xe88e8d=a0_0xc1f260;Module[_0xe88e8d(0x1aa)](_0x2d2e83,()=>{const _0x512f77=_0xe88e8d;localStorageFile(),Module[_0x512f77(0x1e1)]();});}export async function resumeGame(){const _0x3d6bcf=a0_0xc1f260;Module[_0x3d6bcf(0x1fa)](),Module[_0x3d6bcf(0x1bd)](),notiMessage('Resumed!',0x7d0);}export async function pauseGame(){const _0x1e2ff5=a0_0xc1f260;Module[_0x1e2ff5(0x1ec)](),Module['SDL2'](),notiMessage(_0x1e2ff5(0x1da),0x7d0);}export async function buttonPress(_0xc2ca06){const _0x2ce0e2=a0_0xc1f260;Module[_0x2ce0e2(0x203)](_0xc2ca06);}export async function buttonUnpress(_0x174f0a){const _0x1911be=a0_0xc1f260;Module[_0x1911be(0x1fd)](_0x174f0a);}export async function screenShot(_0x3443de){const _0x2af02f=a0_0xc1f260,_0xdac5d1=localStorage['getItem']('gameName'),_0x4cff3f=_0xdac5d1['replace'](/\.(gba|gbc|gb|zip)$/,'_');await Module['screenshot'](''+_0x4cff3f+_0x3443de+_0x2af02f(0x1dc)),await Module[_0x2af02f(0x1e1)]();const _0x567dbe=await fileToBase64(Module['downloadFile'](_0x2af02f(0x1ee)+_0x4cff3f+_0x3443de+'.png')),_0x211f9c=Date[_0x2af02f(0x1c7)](),_0x44b276=formatDateTime(_0x211f9c);localStorage['setItem'](_0xdac5d1+_0x2af02f(0x1bb)+_0x3443de,_0x44b276),localStorage[_0x2af02f(0x1d4)](_0xdac5d1+'_imageState'+_0x3443de,_0x567dbe);}export async function captureOCR(_0x48e122){const _0x26b448=a0_0xc1f260;Module[_0x26b448(0x1cd)](_0x48e122);const _0x1b061b=Module[_0x26b448(0x1e4)](_0x26b448(0x1ee)+_0x48e122);return _0x1b061b;}export async function setFastForwardMultiplier(_0x25a1fe){Module['setFastForwardMultiplier'](_0x25a1fe);}export function uploadCheats(_0x5ef9a5,_0x231725,_0x4e0707,_0x57b8f4,_0x40a0a6){const _0x4cf550=a0_0xc1f260;Module[_0x4cf550(0x1af)](_0x5ef9a5,()=>{const _0x37cd65=_0x4cf550;Module[_0x37cd65(0x1a3)](),setTimeout(()=>{const _0x32c416=_0x37cd65;Module[_0x32c416(0x1e1)]();},0x1f4),_0x57b8f4&&(localStorage[_0x37cd65(0x1d4)](_0x231725+_0x37cd65(0x202),_0x4e0707),notiMessage(_0x37cd65(0x1d8),0x5dc)),_0x40a0a6['textContent']=localStorage['getItem'](_0x231725+_0x37cd65(0x202)||'Off');});}