const a0_0x2ceb70=a0_0x4e45;(function(_0x375541,_0x2c698e){const _0x238b85=a0_0x4e45,_0x3498de=_0x375541();while(!![]){try{const _0xeb3c8d=-parseInt(_0x238b85(0x1f7))/0x1+-parseInt(_0x238b85(0x1e0))/0x2+parseInt(_0x238b85(0x1e9))/0x3+-parseInt(_0x238b85(0x1b1))/0x4*(parseInt(_0x238b85(0x1d2))/0x5)+-parseInt(_0x238b85(0x1f3))/0x6*(-parseInt(_0x238b85(0x200))/0x7)+-parseInt(_0x238b85(0x1e1))/0x8+parseInt(_0x238b85(0x1f8))/0x9*(parseInt(_0x238b85(0x206))/0xa);if(_0xeb3c8d===_0x2c698e)break;else _0x3498de['push'](_0x3498de['shift']());}catch(_0x8e6c6f){_0x3498de['push'](_0x3498de['shift']());}}}(a0_0x1e5a,0x5dacb));import a0_0x4a08b1 from'../core/mgba.js';import*as a0_0x3213e5 from'./gamepad.js';import{localStorageFile}from'./storage.js';import{dpUploadFile,dpRefreshToken}from'./cloud.js';const Module={'canvas':document[a0_0x2ceb70(0x1b0)](a0_0x2ceb70(0x205))};function initializeCore(_0x1734a6,_0xcc44b8){const _0x20d6bf=a0_0x2ceb70;_0x1734a6(_0xcc44b8)[_0x20d6bf(0x1da)](function(_0x4f415a){_0x4f415a['FSInit']();});}initializeCore(a0_0x4a08b1,Module);function a0_0x1e5a(){const _0x3355e2=['gbc','/data/states/','onLine','replace','Auto\x20save\x20','createObjectURL','downloadFile','SDL2','timer','listStates','turboF','/data/games/','addEventListener','gbc1','uploadCheats','.ss0','type','createElement','.gba','Resumed!','href','FSSync','slotStateSaved','classList','listScreenshots','deleteFile','5KFAiHb','visibilitychange','Save/State\x20uploaded\x20successfully:','appendChild','files','.png','#20A5A6','Cheat\x20uploaded\x20successfully:','then','buttonPress','\x20time(s)','_imageState','editFileName','_dateState0','761434tLvxwO','4952616tVZGBA','screenshot','textContent','now','Paused!','loadState','uId','_savedCheats','1233588fWDsFH','0,0,','body','turboState','disable','hidden','contains','/data/screenshots/','_dateState','toString','6XvmtMK','#E0C068','add','log','198426yZqpBr','408762YnJdRl','remove','Do\x20you\x20want\x20to\x20load\x20save\x20state?','buttonUnpress','includes','padStart','listSaves','gameName','446215iDtSwm','getItem','endsWith','screenSize','_imageState0','canvas','380FkRCHn','revokeObjectURL','uploadSaveOrSaveState','autoLoadCheats','beforeunload','uploadGame','.gbc','No\x20screenshot!','error','Off','innerWidth','name','loadGame','saveState','getElementById','2475656qpCtcm','listGames','setFastForwardMultiplier','setItem','Online!','click','persisted'];a0_0x1e5a=function(){return _0x3355e2;};return a0_0x1e5a();}let countAutoSave=0x0,turboState=0x1,countUpload=0x0;const canvas=document['getElementById'](a0_0x2ceb70(0x205)),savedTurboState=localStorage[a0_0x2ceb70(0x201)](a0_0x2ceb70(0x1ec)),controlSetting=document['getElementById']('control-setting');function handleVisibilityChange(_0x2f58d7){const _0x4d25bc=a0_0x2ceb70;document['visibilityState']===_0x4d25bc(0x1ee)||_0x2f58d7?.[_0x4d25bc(0x1c8)]===_0x4d25bc(0x20a)||_0x2f58d7?.[_0x4d25bc(0x1b7)]?(pauseGame(),canvas[_0x4d25bc(0x1cf)][_0x4d25bc(0x1f5)]('visible')):(setTimeout(()=>{const _0x618a9=_0x4d25bc;canvas[_0x618a9(0x1cf)][_0x618a9(0x1f9)]('visible');},0x258),controlSetting[_0x4d25bc(0x1cf)][_0x4d25bc(0x1ef)]('visible')&&resumeGame());}async function statusShow(){const _0x5be89f=a0_0x2ceb70;document['addEventListener']('pagehide',handleVisibilityChange),document[_0x5be89f(0x1c4)](_0x5be89f(0x1d3),handleVisibilityChange),window[_0x5be89f(0x1c4)](_0x5be89f(0x20a),handleVisibilityChange),restoreArea(),startTimer(),savedTurboState!==null&&(turboState=parseInt(savedTurboState),await a0_0x3213e5[_0x5be89f(0x1c2)](turboState)),await delay(0x3e8),await led(parseInt(localStorage[_0x5be89f(0x201)](_0x5be89f(0x1ce)))),await notiMessage(gameVer,0x3e8);}async function saveStatePeriodically(){const _0xc2ea88=a0_0x2ceb70;await ledSave(_0xc2ea88(0x1d8)),await Module[_0xc2ea88(0x1af)](0x0),await Module[_0xc2ea88(0x1cd)](),await screenShot(0x0),console[_0xc2ea88(0x1f6)](_0xc2ea88(0x1bc)+ ++countAutoSave+_0xc2ea88(0x1dc));}function a0_0x4e45(_0xbfbfd3,_0x2f1fdc){const _0x1e5abc=a0_0x1e5a();return a0_0x4e45=function(_0x4e4522,_0xafab98){_0x4e4522=_0x4e4522-0x1a9;let _0x25b46a=_0x1e5abc[_0x4e4522];return _0x25b46a;},a0_0x4e45(_0xbfbfd3,_0x2f1fdc);}async function saveStateInCloud(){const _0x336cb9=a0_0x2ceb70,_0x548b90=localStorage[_0x336cb9(0x201)](_0x336cb9(0x1ff)),_0x50c125=_0x548b90[_0x336cb9(0x1bb)](_0x336cb9(0x1ca),_0x336cb9(0x1c7)),_0x23bf99=localStorage['getItem'](_0x336cb9(0x1e7)),_0x3cdeed=localStorage[_0x336cb9(0x201)](_0x548b90+_0x336cb9(0x204)),_0x1f14d7=localStorage[_0x336cb9(0x201)](_0x548b90+_0x336cb9(0x1df));if(navigator[_0x336cb9(0x1ba)]){if(_0x23bf99){await ledSave(_0x336cb9(0x1f4)),await delay(0x3e8),await dpUploadFile(_0x50c125,Module['downloadFile'](_0x336cb9(0x1b9)+_0x50c125));if(_0x3cdeed!==null){const _0x58704d=_0x3cdeed+'\x0a\x0a'+_0x1f14d7,_0x5e4aaf=new Blob([_0x58704d],{'type':'text/plain'});await dpUploadFile(_0x548b90+'_slot0.txt',_0x5e4aaf);}else console[_0x336cb9(0x1f6)](_0x336cb9(0x1a9));await lockNoti('','Cloud\x20upload\x20'+ ++countUpload+_0x336cb9(0x1dc),0x7d0);}else console['log']('Unable\x20to\x20upload\x20to\x20Cloud!');}else console[_0x336cb9(0x1f6)](_0x336cb9(0x1b5));}function startTimer(){let [_0x3854b5,_0x36bfe3,_0x149557,_0xc14ba1,_0x197848]=[0x0,0x0,0x0,0x0,0x0];setInterval(()=>{const _0x4266fa=a0_0x4e45;_0x149557++,_0xc14ba1++,_0x197848++;if(_0x149557===0x3c)[_0x149557,_0x36bfe3]=[0x0,_0x36bfe3+0x1];if(_0x36bfe3===0x3c)[_0x36bfe3,_0x3854b5]=[0x0,_0x3854b5+0x1];document[_0x4266fa(0x1b0)](_0x4266fa(0x1c0))['textContent']=_0x3854b5+'h'+_0x36bfe3[_0x4266fa(0x1f2)]()[_0x4266fa(0x1fd)](0x2,'0')+'.'+_0x149557[_0x4266fa(0x1f2)]()[_0x4266fa(0x1fd)](0x2,'0');_0xc14ba1===0x3c&&(saveStatePeriodically(),_0xc14ba1=0x0);;_0xc14ba1===0xe10&&(saveStateInCloud(),_0x197848=0x0);;},0x3e8);}export async function uploadGame(_0x523226){const _0x42db1e=a0_0x2ceb70,_0x1c5401=_0x523226[_0x42db1e(0x1d6)][0x0];Module[_0x42db1e(0x20b)](_0x1c5401,()=>{const _0xb20d4b=_0x42db1e;Module[_0xb20d4b(0x1cd)]();});}export async function loadGame(_0x1f8316){const _0x850986=a0_0x2ceb70,_0x15d187=_0x1f8316[_0x850986(0x1bb)](/\.(gba|gbc|gb)$/,_0x850986(0x1c7)),_0x3a779e=Module['listStates']();intro[_0x850986(0x1cf)][_0x850986(0x1f5)](_0x850986(0x1ed)),ingame[_0x850986(0x1cf)][_0x850986(0x1f9)](_0x850986(0x1ed)),_0x1f8316[_0x850986(0x202)](_0x850986(0x20c))||_0x1f8316['endsWith']('.gb')?(canvas['classList'][_0x850986(0x1f5)](_0x850986(0x1b8)),areaTrans[_0x850986(0x1cf)]['add'](_0x850986(0x1c5)),localStorage[_0x850986(0x1b4)]('screenSize',_0x850986(0x1ea)+(window[_0x850986(0x1ac)]-0xe6)+','+(window[_0x850986(0x1ac)]-0xe6)*0x9/0xa)):localStorage['setItem'](_0x850986(0x203),_0x850986(0x1ea)+(window[_0x850986(0x1ac)]-0x96)+','+(window[_0x850986(0x1ac)]-0x96)*0x2/0x3),_0x3a779e[_0x850986(0x1fc)](_0x15d187)?(await Module[_0x850986(0x1ae)](_0x850986(0x1c3)+_0x1f8316),confirm(_0x850986(0x1fa))&&(await Module[_0x850986(0x1e6)](0x0),localStorage[_0x850986(0x1b4)](_0x850986(0x1ff),_0x1f8316),console['log'](_0x1f8316))):(await Module[_0x850986(0x1ae)](_0x850986(0x1c3)+_0x1f8316),localStorage[_0x850986(0x1b4)](_0x850986(0x1ff),_0x1f8316)),await statusShow();}export async function saveState(_0x2784d8){const _0x3a5d35=a0_0x2ceb70;await Module[_0x3a5d35(0x1af)](_0x2784d8),await Module['FSSync']();}export async function loadState(_0x110407){await Module['loadState'](_0x110407);}export async function downloadFile(_0xa1091e,_0x1100ac){const _0x2d64bc=a0_0x2ceb70,_0x2b64c5=Module[_0x2d64bc(0x1be)](_0xa1091e),_0x532386=document[_0x2d64bc(0x1c9)]('a');document[_0x2d64bc(0x1eb)][_0x2d64bc(0x1d5)](_0x532386),_0x532386['download']=_0x1100ac;const _0x58fb4c=new Blob([_0x2b64c5],{'type':'application/octet-stream'});_0x532386[_0x2d64bc(0x1cc)]=URL[_0x2d64bc(0x1bd)](_0x58fb4c),_0x532386[_0x2d64bc(0x1b6)](),URL[_0x2d64bc(0x207)](_0x58fb4c),_0x532386[_0x2d64bc(0x1f9)]();}export function downloadFileInCloud(_0x33b89f){const _0x2427e2=a0_0x2ceb70,_0x44394d=Module[_0x2427e2(0x1be)](_0x33b89f);return _0x44394d;}export async function uploadFile(_0x4109eb){const _0x5096b9=a0_0x2ceb70,_0x10f5fe=_0x4109eb[_0x5096b9(0x1d6)][0x0];Module[_0x5096b9(0x208)](_0x10f5fe,()=>{const _0x238525=_0x5096b9;Module[_0x238525(0x1cd)]();});}export async function editFile(_0x4256c0,_0x350a42,_0x565b43){const _0xdb713c=a0_0x2ceb70;await Module[_0xdb713c(0x1de)](_0x4256c0,_0x350a42,_0x565b43),await Module[_0xdb713c(0x1cd)]();}export async function deleteFile(_0x5d0b9e){const _0x4a71a0=a0_0x2ceb70;await Module[_0x4a71a0(0x1d1)](_0x5d0b9e),await Module[_0x4a71a0(0x1cd)]();}export function listGame(){const _0x3e592e=a0_0x2ceb70,_0x4afa37=Module[_0x3e592e(0x1b2)]();return _0x4afa37;}export function listSave(){const _0x2545f2=a0_0x2ceb70,_0x2f43f8=Module[_0x2545f2(0x1fe)]();return _0x2f43f8;}export function listState(){const _0x17bdc1=a0_0x2ceb70,_0x6535d9=Module[_0x17bdc1(0x1c1)]();return _0x6535d9;}export function listCheat(){const _0x32b7f0=Module['listCheats']();return _0x32b7f0;}export function listScreenshot(){const _0x93842a=a0_0x2ceb70,_0x2418cd=Module[_0x93842a(0x1d0)]();return _0x2418cd;}export function fileSize(_0x2ba5e5){const _0x45c3ad=Module['fileSize'](_0x2ba5e5);return _0x45c3ad;}export async function uploadCheat(_0x1149ea){const _0x1e8afc=a0_0x2ceb70;try{const _0x315fd5=_0x1149ea[_0x1e8afc(0x1d6)][0x0];await Module[_0x1e8afc(0x1c6)](_0x315fd5,()=>{const _0x4a6114=_0x1e8afc;console[_0x4a6114(0x1f6)](_0x4a6114(0x1d9),_0x315fd5[_0x4a6114(0x1ad)]),localStorageFile(),Module[_0x4a6114(0x1cd)]();});}catch(_0x597882){console[_0x1e8afc(0x1aa)]('Error\x20uploadCheat:',_0x597882);}}export async function uploadSavSta(_0x56fb10){const _0x5110fd=a0_0x2ceb70;try{const _0x3951d4=_0x56fb10['files'][0x0];await Module[_0x5110fd(0x208)](_0x3951d4,()=>{const _0x41479c=_0x5110fd;console['log'](_0x41479c(0x1d4),_0x3951d4[_0x41479c(0x1ad)]),localStorageFile(),Module['FSSync']();});}catch(_0x20aa2d){console[_0x5110fd(0x1aa)]('Error\x20uploadSavSta:',_0x20aa2d);}}export async function uploadSaveOrSaveState(_0x3cec49){Module['uploadSaveOrSaveState'](_0x3cec49,()=>{localStorageFile(),Module['FSSync']();});}export async function resumeGame(){const _0x222330=a0_0x2ceb70;Module['resumeGame'](),Module[_0x222330(0x1bf)](),notiMessage(_0x222330(0x1cb),0x7d0);}export async function pauseGame(){const _0x195a80=a0_0x2ceb70;Module['pauseGame'](),Module[_0x195a80(0x1bf)](),notiMessage(_0x195a80(0x1e5),0x7d0);}export async function buttonPress(_0x47f7f4){const _0x519bef=a0_0x2ceb70;Module[_0x519bef(0x1db)](_0x47f7f4);}export async function buttonUnpress(_0x292e4b){const _0x53f6a0=a0_0x2ceb70;Module[_0x53f6a0(0x1fb)](_0x292e4b);}export async function screenShot(_0x23161f){const _0x980f1e=a0_0x2ceb70,_0x42c5ed=localStorage['getItem']('gameName'),_0x4716e6=_0x42c5ed[_0x980f1e(0x1bb)](/\.(gba|gbc|gb)$/,'_');await Module[_0x980f1e(0x1e2)](''+_0x4716e6+_0x23161f+'.png'),await Module['FSSync']();const _0x34809a=await fileToBase64(Module[_0x980f1e(0x1be)](_0x980f1e(0x1f0)+_0x4716e6+_0x23161f+_0x980f1e(0x1d7))),_0x48f99f=Date[_0x980f1e(0x1e4)](),_0x4148e3=formatDateTime(_0x48f99f);localStorage[_0x980f1e(0x1b4)](_0x42c5ed+_0x980f1e(0x1f1)+_0x23161f,_0x4148e3),localStorage[_0x980f1e(0x1b4)](_0x42c5ed+_0x980f1e(0x1dd)+_0x23161f,_0x34809a);}export async function captureOCR(_0x28cee8){const _0x52eeef=a0_0x2ceb70;Module[_0x52eeef(0x1e2)](_0x28cee8);const _0x81fdd2=Module[_0x52eeef(0x1be)](_0x52eeef(0x1f0)+_0x28cee8);return _0x81fdd2;}export async function setFastForwardMultiplier(_0x34650c){const _0x19db60=a0_0x2ceb70;Module[_0x19db60(0x1b3)](_0x34650c);}export function uploadCheats(_0x2c856b,_0x3b8f69,_0x7368e,_0x4ad658,_0x8d0dc2){Module['uploadCheats'](_0x2c856b,()=>{const _0x4731a0=a0_0x4e45;Module[_0x4731a0(0x209)](),setTimeout(()=>{const _0x37cfdc=_0x4731a0;Module[_0x37cfdc(0x1cd)]();},0x1f4),_0x4ad658&&(localStorage[_0x4731a0(0x1b4)](_0x3b8f69+'_savedCheats',_0x7368e),notiMessage('Cheat\x20Enabled!',0x5dc)),_0x8d0dc2[_0x4731a0(0x1e3)]=localStorage[_0x4731a0(0x201)](_0x3b8f69+_0x4731a0(0x1e8)||_0x4731a0(0x1ab));});}