const a0_0x167362=a0_0x5274;(function(_0x2e509f,_0x322de6){const _0x28a8ac=a0_0x5274,_0x47807f=_0x2e509f();while(!![]){try{const _0x16cacb=-parseInt(_0x28a8ac(0x219))/0x1*(parseInt(_0x28a8ac(0x227))/0x2)+parseInt(_0x28a8ac(0x1c2))/0x3+-parseInt(_0x28a8ac(0x206))/0x4+parseInt(_0x28a8ac(0x1e1))/0x5*(parseInt(_0x28a8ac(0x1f4))/0x6)+-parseInt(_0x28a8ac(0x1cb))/0x7+parseInt(_0x28a8ac(0x209))/0x8*(parseInt(_0x28a8ac(0x21d))/0x9)+parseInt(_0x28a8ac(0x1e9))/0xa*(parseInt(_0x28a8ac(0x1db))/0xb);if(_0x16cacb===_0x322de6)break;else _0x47807f['push'](_0x47807f['shift']());}catch(_0x222b3d){_0x47807f['push'](_0x47807f['shift']());}}}(a0_0x1ca9,0xe0b2e));import a0_0x1e7d74 from'../core/mgba.js';import*as a0_0x36a940 from'./gamepad.js';import{localStorageFile}from'./storage.js';import{dpUploadFile,dpRefreshToken}from'./cloud.js';const Module={'canvas':document[a0_0x167362(0x1f2)](a0_0x167362(0x1f5))};function initializeCore(_0x10856f,_0x4e62e9){const _0x58a89b=a0_0x167362;_0x10856f(_0x4e62e9)[_0x58a89b(0x21a)](function(_0x493e98){const _0x1b71e2=_0x58a89b;_0x493e98[_0x1b71e2(0x1f8)]();});}initializeCore(a0_0x1e7d74,Module);let countAutoSave=0x0,turboState=0x1,countUpload=0x0;const canvas=document['getElementById']('canvas'),savedTurboState=localStorage[a0_0x167362(0x1cd)](a0_0x167362(0x1e0)),controlSetting=document['getElementById'](a0_0x167362(0x1d0));function handleVisibilityChange(_0x2ed415){const _0x471b2c=a0_0x167362;document[_0x471b2c(0x1d1)]==='hidden'||_0x2ed415?.[_0x471b2c(0x21e)]===_0x471b2c(0x20b)||_0x2ed415?.[_0x471b2c(0x226)]?(pauseGame(),canvas[_0x471b2c(0x1e7)][_0x471b2c(0x1d3)](_0x471b2c(0x1fe))):(setTimeout(()=>{const _0x580495=_0x471b2c;canvas[_0x580495(0x1e7)][_0x580495(0x1d8)](_0x580495(0x1fe));},0x258),controlSetting['classList'][_0x471b2c(0x1d5)](_0x471b2c(0x1fe))&&resumeGame());}async function statusShow(){const _0x25b657=a0_0x167362;document[_0x25b657(0x20d)](_0x25b657(0x200),handleVisibilityChange),document[_0x25b657(0x20d)](_0x25b657(0x21b),handleVisibilityChange),window[_0x25b657(0x20d)](_0x25b657(0x20b),handleVisibilityChange),restoreArea(),startTimer(),savedTurboState!==null&&(turboState=parseInt(savedTurboState),await a0_0x36a940[_0x25b657(0x1c1)](turboState)),await delay(0xc8),await Module[_0x25b657(0x216)](),await delay(0x320),await led(parseInt(localStorage[_0x25b657(0x1cd)](_0x25b657(0x20a)))),await notiMessage(gameVer,0x3e8);}function a0_0x5274(_0x1a9b9a,_0x10d8ab){const _0x1ca995=a0_0x1ca9();return a0_0x5274=function(_0x52742a,_0x26dbbd){_0x52742a=_0x52742a-0x1be;let _0x52b0ce=_0x1ca995[_0x52742a];return _0x52b0ce;},a0_0x5274(_0x1a9b9a,_0x10d8ab);}async function saveStatePeriodically(){const _0x35d48b=a0_0x167362;await ledSave('#20A5A6'),await Module['saveState'](0x0),await Module[_0x35d48b(0x224)](),await screenShot(0x0),console[_0x35d48b(0x1fc)]('Auto\x20save\x20'+ ++countAutoSave+_0x35d48b(0x1df));}async function saveStateInCloud(){const _0x5837ec=a0_0x167362,_0x510a57=localStorage[_0x5837ec(0x1cd)]('gameName'),_0x1d6613=_0x510a57[_0x5837ec(0x213)](/\.(zip|gb|gbc|gba)$/,_0x5837ec(0x1c4)),_0x1dbcc7=localStorage[_0x5837ec(0x1cd)](_0x5837ec(0x1d6)),_0x31fbf8=localStorage[_0x5837ec(0x1cd)](_0x510a57+_0x5837ec(0x1e2)),_0x3fa18b=localStorage[_0x5837ec(0x1cd)](_0x510a57+_0x5837ec(0x1e6));if(navigator[_0x5837ec(0x20f)]){if(_0x1dbcc7){await ledSave(_0x5837ec(0x1ce)),await delay(0x3e8),await dpUploadFile(_0x1d6613,Module[_0x5837ec(0x229)]('/data/states/'+_0x1d6613));if(_0x31fbf8!==null){const _0x24a0c6=_0x31fbf8+'\x0a\x0a'+_0x3fa18b,_0xa49bce=new Blob([_0x24a0c6],{'type':_0x5837ec(0x1d2)});await dpUploadFile(_0x510a57+'_slot0.txt',_0xa49bce);}else console[_0x5837ec(0x1fc)](_0x5837ec(0x21f));await lockNoti('','Cloud\x20upload\x20'+ ++countUpload+_0x5837ec(0x1df),0x7d0);}else console[_0x5837ec(0x1fc)]('Unable\x20to\x20upload\x20to\x20Cloud!');}else console['log'](_0x5837ec(0x1e8));}function startTimer(){let [_0x3d87c5,_0x1859d6,_0xaf2df1,_0x5d3265,_0xf152]=[0x0,0x0,0x0,0x0,0x0];setInterval(()=>{const _0x49d411=a0_0x5274;_0xaf2df1++,_0x5d3265++,_0xf152++;if(_0xaf2df1===0x3c)[_0xaf2df1,_0x1859d6]=[0x0,_0x1859d6+0x1];if(_0x1859d6===0x3c)[_0x1859d6,_0x3d87c5]=[0x0,_0x3d87c5+0x1];document[_0x49d411(0x1f2)]('timer')[_0x49d411(0x1e5)]=_0x3d87c5+'h'+_0x1859d6['toString']()['padStart'](0x2,'0')+'.'+_0xaf2df1[_0x49d411(0x223)]()[_0x49d411(0x1c8)](0x2,'0');_0x5d3265===0x3c&&(saveStatePeriodically(),_0x5d3265=0x0);;_0xf152===0xe10&&(saveStateInCloud(),_0xf152=0x0);;},0x3e8);}export async function uploadGame(_0xd1de97){const _0x5712ae=a0_0x167362,_0x308fbd=_0xd1de97[_0x5712ae(0x1f6)][0x0];Module[_0x5712ae(0x22a)](_0x308fbd,()=>{const _0x20298c=_0x5712ae;Module[_0x20298c(0x224)]();});}export async function loadGame(_0x318bf0){const _0x36d2e2=a0_0x167362,_0x58fec6=_0x318bf0[_0x36d2e2(0x213)](/\.(gba|gbc|gb|zip)$/,_0x36d2e2(0x1c4)),_0x43e19f=Module[_0x36d2e2(0x1f3)]()[_0x36d2e2(0x1f0)](_0x5d99a8=>_0x5d99a8!=='.'&&_0x5d99a8!=='..');intro[_0x36d2e2(0x1e7)]['add'](_0x36d2e2(0x1f7)),errorLogElements[0x0][_0x36d2e2(0x202)][_0x36d2e2(0x203)]='0',ingame['classList'][_0x36d2e2(0x1d8)]('disable'),_0x318bf0[_0x36d2e2(0x1ed)](_0x36d2e2(0x1e4))||_0x318bf0[_0x36d2e2(0x1ed)](_0x36d2e2(0x210))?(canvas['classList'][_0x36d2e2(0x1d3)](_0x36d2e2(0x21c)),areaTrans[_0x36d2e2(0x1e7)]['add'](_0x36d2e2(0x1dd)),localStorage['setItem']('screenSize',_0x36d2e2(0x1be)+(window[_0x36d2e2(0x1c6)]-0xe6)+','+(window['innerWidth']-0xe6)*0x9/0xa)):localStorage[_0x36d2e2(0x221)](_0x36d2e2(0x1d9),_0x36d2e2(0x1be)+(window[_0x36d2e2(0x1c6)]-0x96)+','+(window[_0x36d2e2(0x1c6)]-0x96)*0x2/0x3),_0x43e19f[_0x36d2e2(0x1bf)](_0x58fec6)?(await Module[_0x36d2e2(0x1cf)](_0x36d2e2(0x1ec)+_0x318bf0),confirm('Do\x20you\x20want\x20to\x20load\x20save\x20state?')&&(await Module[_0x36d2e2(0x212)](0x0),localStorage[_0x36d2e2(0x221)](_0x36d2e2(0x1cc),_0x318bf0),console[_0x36d2e2(0x1fc)](_0x318bf0))):(await Module[_0x36d2e2(0x1cf)](_0x36d2e2(0x1ec)+_0x318bf0),localStorage[_0x36d2e2(0x221)](_0x36d2e2(0x1cc),_0x318bf0),console[_0x36d2e2(0x1fc)](_0x318bf0)),await statusShow();}export async function saveState(_0x3e9166){const _0x425fcd=a0_0x167362;await Module[_0x425fcd(0x1da)](_0x3e9166),await Module[_0x425fcd(0x224)]();}export async function loadState(_0x3f3303){const _0x124941=a0_0x167362;await Module[_0x124941(0x212)](_0x3f3303);}export async function downloadFile(_0x3f4e92,_0xc1389e){const _0x5b12f5=a0_0x167362,_0x3125b4=Module[_0x5b12f5(0x229)](_0x3f4e92),_0x3f03fe=document[_0x5b12f5(0x201)]('a');document['body'][_0x5b12f5(0x1ef)](_0x3f03fe),_0x3f03fe[_0x5b12f5(0x1ee)]=_0xc1389e;const _0x4447ca=new Blob([_0x3125b4],{'type':'application/octet-stream'});_0x3f03fe[_0x5b12f5(0x228)]=URL[_0x5b12f5(0x1fa)](_0x4447ca),_0x3f03fe[_0x5b12f5(0x204)](),URL['revokeObjectURL'](_0x4447ca),_0x3f03fe[_0x5b12f5(0x1d8)]();}export function downloadFileInCloud(_0x4186d8){const _0x3b1be4=a0_0x167362,_0x1e4f6c=Module[_0x3b1be4(0x229)](_0x4186d8);return _0x1e4f6c;}export async function uploadFile(_0x4600b1){const _0x156a04=a0_0x167362,_0x172127=_0x4600b1[_0x156a04(0x1f6)][0x0];Module['uploadSaveOrSaveState'](_0x172127,()=>{const _0x5260bd=_0x156a04;Module[_0x5260bd(0x224)]();});}export async function editFile(_0x4f6dbe,_0x1587e7,_0x22c11){const _0x2c158a=a0_0x167362;await Module[_0x2c158a(0x1dc)](_0x4f6dbe,_0x1587e7,_0x22c11),await Module[_0x2c158a(0x224)]();}export async function deleteFile(_0x2cd075){const _0x1a3341=a0_0x167362;await Module['deleteFile'](_0x2cd075),await Module[_0x1a3341(0x224)]();}export function listGame(){const _0x3b33d8=a0_0x167362,_0x270790=Module[_0x3b33d8(0x1c7)]()[_0x3b33d8(0x1f0)](_0x5e53c9=>_0x5e53c9!=='.'&&_0x5e53c9!=='..');return _0x270790;}export function listSave(){const _0x4f75f6=a0_0x167362,_0x5899c0=Module[_0x4f75f6(0x20e)]()[_0x4f75f6(0x1f0)](_0x43154=>_0x43154!=='.'&&_0x43154!=='..');return _0x5899c0;}export function listState(){const _0x1add39=Module['listStates']()['filter'](_0x51181b=>_0x51181b!=='.'&&_0x51181b!=='..');return _0x1add39;}export function listCheat(){const _0x54f8c1=a0_0x167362,_0x1bdb50=Module[_0x54f8c1(0x205)]()[_0x54f8c1(0x1f0)](_0x313aba=>_0x313aba!=='.'&&_0x313aba!=='..');return _0x1bdb50;}export function listScreenshot(){const _0x505612=a0_0x167362,_0x5db8fb=Module[_0x505612(0x225)]()[_0x505612(0x1f0)](_0x432c67=>_0x432c67!=='.'&&_0x432c67!=='..');return _0x5db8fb;}export async function findScreenshot(_0x595384,_0x1fb625){const _0x2bdfa5=a0_0x167362;try{let _0x4c316f=await listScreenshot();for(const _0x233a2f of _0x4c316f){if(typeof _0x233a2f!==_0x2bdfa5(0x222))continue;const _0x318e56=_0x233a2f['split']('*')[_0x2bdfa5(0x1de)](_0x40965d=>_0x40965d[_0x2bdfa5(0x207)]());if(_0x318e56[_0x2bdfa5(0x211)]>=0x3&&_0x318e56[0x0]===_0x595384['trim']()&&parseInt(_0x318e56[0x1],0xa)===parseInt(_0x1fb625,0xa)){const _0xf1666e=_0x2bdfa5(0x1c0)+_0x233a2f,_0x3f71fe=Module['downloadFile'](_0xf1666e),_0x5734e8=await fileToBase64(_0x3f71fe),_0x2bf7b3=_0x318e56[0x2][_0x2bdfa5(0x213)](/\.png$/,'');return[_0x5734e8,_0x2bf7b3];}}return null;}catch(_0x4e8dc4){return console[_0x2bdfa5(0x1fb)](_0x4e8dc4),null;}}export async function deleteScreenshot(_0x18126c,_0x8a4448){const _0x2f2272=a0_0x167362,_0x563e74=await listScreenshot();for(const _0x432b72 of _0x563e74){if(typeof _0x432b72!==_0x2f2272(0x222))continue;const _0x5ed999=_0x432b72[_0x2f2272(0x1d4)]('*')[_0x2f2272(0x1de)](_0x548bf9=>_0x548bf9[_0x2f2272(0x207)]());if(_0x5ed999[_0x2f2272(0x211)]>=0x3&&_0x5ed999[0x0]===_0x18126c&&parseInt(_0x5ed999[0x1],0xa)===parseInt(_0x8a4448,0xa)){const _0x2025f0=_0x2f2272(0x1c0)+_0x432b72;await Module[_0x2f2272(0x1eb)](_0x2025f0),await Module[_0x2f2272(0x224)]();}}}function a0_0x1ca9(){const _0xe0c0b2=['visibilityState','text/plain','add','split','contains','uId','name','remove','screenSize','saveState','4320877Obplrd','editFileName','gbc1','map','\x20time(s)','turboState','5FfNJSy','_imageState0','pauseGame','.gbc','textContent','_dateState0','classList','Online!','20YnCCOS','Save/State\x20uploaded\x20successfully:','deleteFile','/data/games/','endsWith','download','appendChild','filter','Cheat\x20uploaded\x20successfully:','getElementById','listStates','2436894BsAPrW','canvas','files','disable','FSInit','setFastForwardMultiplier','createObjectURL','error','log','now','visible','Resumed!','pagehide','createElement','style','bottom','click','listCheats','1283252UvxZzV','trim','Error\x20uploadCheat:','1277024shBysN','slotStateSaved','beforeunload','.png','addEventListener','listSaves','onLine','.gb','length','loadState','replace','resumeGame','Off','SDL2','Cheat\x20Enabled!','autoLoadCheats','63418AeAsZB','then','visibilitychange','gbc','81zVwZuc','type','No\x20screenshot!','uploadSaveOrSaveState','setItem','string','toString','FSSync','listScreenshots','persisted','28IBnmCz','href','downloadFile','uploadRom','uploadCheats','0,0,','includes','/data/screenshots/','turboF','286497XFBUMi','_savedCheats','.ss0','buttonUnpress','innerWidth','listRoms','padStart','screenshot','Error\x20uploadSavSta:','4164181ZdtilC','gameName','getItem','#E0C068','loadGame','control-setting'];a0_0x1ca9=function(){return _0xe0c0b2;};return a0_0x1ca9();}export function fileSize(_0x299cfc){const _0x3f348b=Module['fileSize'](_0x299cfc);return _0x3f348b;}export async function uploadCheat(_0x1e687f){const _0x360bfd=a0_0x167362;try{const _0x126036=_0x1e687f[_0x360bfd(0x1f6)][0x0];await Module[_0x360bfd(0x22b)](_0x126036,()=>{const _0x47ada8=_0x360bfd;console[_0x47ada8(0x1fc)](_0x47ada8(0x1f1),_0x126036[_0x47ada8(0x1d7)]),localStorageFile(),Module[_0x47ada8(0x224)]();});}catch(_0x43df01){console[_0x360bfd(0x1fb)](_0x360bfd(0x208),_0x43df01);}}export async function uploadSavSta(_0x156366){const _0x3ff28c=a0_0x167362;try{const _0x39a60b=_0x156366[_0x3ff28c(0x1f6)][0x0];await Module['uploadSaveOrSaveState'](_0x39a60b,()=>{const _0x486a87=_0x3ff28c;console[_0x486a87(0x1fc)](_0x486a87(0x1ea),_0x39a60b[_0x486a87(0x1d7)]),localStorageFile(),Module[_0x486a87(0x224)]();});}catch(_0x19245f){console[_0x3ff28c(0x1fb)](_0x3ff28c(0x1ca),_0x19245f);}}export async function uploadSaveOrSaveState(_0xcd9ea7){const _0x245613=a0_0x167362;Module[_0x245613(0x220)](_0xcd9ea7,()=>{localStorageFile(),Module['FSSync']();});}export async function resumeGame(){const _0x529cea=a0_0x167362;Module[_0x529cea(0x214)](),Module['SDL2'](),notiMessage(_0x529cea(0x1ff),0x7d0);}export async function pauseGame(){const _0x43edcf=a0_0x167362;Module[_0x43edcf(0x1e3)](),Module['SDL2'](),notiMessage('Paused!',0x7d0);}export async function buttonPress(_0x41611c){Module['buttonPress'](_0x41611c);}export async function buttonUnpress(_0x1fe36b){const _0x3eacf1=a0_0x167362;Module[_0x3eacf1(0x1c5)](_0x1fe36b);}export async function screenShot(_0x2a5f7e){const _0x369815=a0_0x167362,_0x10c52b=localStorage[_0x369815(0x1cd)](_0x369815(0x1cc))[_0x369815(0x213)](/\.(gba|gbc|gb|zip)$/,''),_0x88f0b4=Date[_0x369815(0x1fd)](),_0x3110c7=formatDateTime(_0x88f0b4),_0x43ed76=await listScreenshot();for(const _0xce0ad2 of _0x43ed76){if(typeof _0xce0ad2!==_0x369815(0x222))continue;const _0x439f1d=_0xce0ad2['split']('*')[_0x369815(0x1de)](_0x4c1523=>_0x4c1523['trim']());if(_0x439f1d[_0x369815(0x211)]>=0x3&&_0x439f1d[0x0]===_0x10c52b&&parseInt(_0x439f1d[0x1],0xa)===parseInt(_0x2a5f7e,0xa)){const _0x3d5bcf=_0x369815(0x1c0)+_0xce0ad2;await Module[_0x369815(0x1eb)](_0x3d5bcf),await Module[_0x369815(0x224)]();}}await Module['screenshot'](_0x10c52b+'*'+_0x2a5f7e+'*'+_0x3110c7+_0x369815(0x20c)),await Module[_0x369815(0x224)]();}export async function captureOCR(_0x584810){const _0x449b9e=a0_0x167362;Module[_0x449b9e(0x1c9)](_0x584810);const _0x2d40df=Module[_0x449b9e(0x229)](_0x449b9e(0x1c0)+_0x584810);return _0x2d40df;}export async function setFastForwardMultiplier(_0x3a0790){const _0x372bd=a0_0x167362;Module[_0x372bd(0x1f9)](_0x3a0790);}export function uploadCheats(_0x287ab0,_0xa756dc,_0x3405be,_0x55641f,_0x1b422a){const _0x3f056a=a0_0x167362;Module[_0x3f056a(0x22b)](_0x287ab0,()=>{const _0x5c9ada=_0x3f056a;Module[_0x5c9ada(0x218)](),setTimeout(()=>{Module['FSSync']();},0x1f4),_0x55641f&&(localStorage['setItem'](_0xa756dc+'_savedCheats',_0x3405be),notiMessage(_0x5c9ada(0x217),0x5dc)),_0x1b422a['textContent']=localStorage[_0x5c9ada(0x1cd)](_0xa756dc+_0x5c9ada(0x1c3)||_0x5c9ada(0x215));});}