const a0_0x57bfa3=a0_0x4063;(function(_0x49dfb6,_0x43eed9){const _0x491f6e=a0_0x4063,_0x5906b9=_0x49dfb6();while(!![]){try{const _0x13ce50=parseInt(_0x491f6e(0x133))/0x1+parseInt(_0x491f6e(0x165))/0x2*(parseInt(_0x491f6e(0x131))/0x3)+parseInt(_0x491f6e(0x164))/0x4+-parseInt(_0x491f6e(0x187))/0x5*(parseInt(_0x491f6e(0x17e))/0x6)+parseInt(_0x491f6e(0x167))/0x7*(parseInt(_0x491f6e(0x16c))/0x8)+parseInt(_0x491f6e(0x184))/0x9+parseInt(_0x491f6e(0x155))/0xa*(parseInt(_0x491f6e(0x186))/0xb);if(_0x13ce50===_0x43eed9)break;else _0x5906b9['push'](_0x5906b9['shift']());}catch(_0xb771ca){_0x5906b9['push'](_0x5906b9['shift']());}}}(a0_0x17e5,0x802f8));import a0_0x5f195d from'../core/mgba.js';import*as a0_0x17519b from'./gamepad.js';import{localStorageFile}from'./storage.js';import{dpUploadFile,dpRefreshToken}from'./cloud.js';const Module={'canvas':document[a0_0x57bfa3(0x148)](a0_0x57bfa3(0x141))};function initializeCore(_0x327c47,_0x6bddf5){const _0x59405a=a0_0x57bfa3;_0x327c47(_0x6bddf5)[_0x59405a(0x149)](function(_0x315fa6){const _0x1979d4=_0x59405a;_0x315fa6[_0x1979d4(0x18b)]();});}initializeCore(a0_0x5f195d,Module);function a0_0x4063(_0x447d63,_0x57c800){const _0x17e5d5=a0_0x17e5();return a0_0x4063=function(_0x40635e,_0x2ccfc8){_0x40635e=_0x40635e-0x12d;let _0xdfaafc=_0x17e5d5[_0x40635e];return _0xdfaafc;},a0_0x4063(_0x447d63,_0x57c800);}let countAutoSave=0x0,turboState=0x1,countUpload=0x0;const canvas=document[a0_0x57bfa3(0x148)](a0_0x57bfa3(0x141)),savedTurboState=localStorage['getItem']('turboState'),controlSetting=document[a0_0x57bfa3(0x148)](a0_0x57bfa3(0x145));function handleVisibilityChange(_0x4600da){const _0x1048fb=a0_0x57bfa3;document['visibilityState']===_0x1048fb(0x153)||_0x4600da?.[_0x1048fb(0x18c)]===_0x1048fb(0x171)||_0x4600da?.[_0x1048fb(0x17c)]?(pauseGame(),canvas[_0x1048fb(0x15c)][_0x1048fb(0x179)](_0x1048fb(0x182))):(setTimeout(()=>{const _0x1fb3ec=_0x1048fb;canvas[_0x1fb3ec(0x15c)][_0x1fb3ec(0x162)]('visible');},0x258),controlSetting[_0x1048fb(0x15c)]['contains'](_0x1048fb(0x182))&&resumeGame());}async function statusShow(){const _0x28f4a1=a0_0x57bfa3;document[_0x28f4a1(0x13f)](_0x28f4a1(0x160),handleVisibilityChange),document['addEventListener'](_0x28f4a1(0x169),handleVisibilityChange),window['addEventListener'](_0x28f4a1(0x171),handleVisibilityChange),restoreArea(),startTimer(),savedTurboState!==null&&(turboState=parseInt(savedTurboState),await a0_0x17519b['turboF'](turboState)),await delay(0x3e8),await led(parseInt(localStorage[_0x28f4a1(0x137)](_0x28f4a1(0x158)))),await notiMessage(gameVer,0x3e8);}async function saveStatePeriodically(){const _0x1dc4e0=a0_0x57bfa3;await ledSave('#20A5A6'),await Module[_0x1dc4e0(0x166)](0x0),await Module[_0x1dc4e0(0x13b)](),await screenShot(0x0),console[_0x1dc4e0(0x17a)]('Auto\x20save\x20'+ ++countAutoSave+_0x1dc4e0(0x15f));}async function saveStateInCloud(){const _0x375552=a0_0x57bfa3,_0x16e646=localStorage['getItem'](_0x375552(0x14d)),_0x359323=_0x16e646[_0x375552(0x188)]('.gba',_0x375552(0x139)),_0x395a02=localStorage[_0x375552(0x137)](_0x375552(0x18d)),_0x2085a5=localStorage['getItem'](_0x16e646+_0x375552(0x176)),_0x534de4=localStorage[_0x375552(0x137)](_0x16e646+_0x375552(0x16b));if(navigator[_0x375552(0x172)]){if(_0x395a02){await ledSave('#E0C068'),await delay(0x3e8),await dpUploadFile(_0x359323,Module['downloadFile']('/data/states/'+_0x359323));if(_0x2085a5!==null){const _0x44c08c=_0x2085a5+'\x0a\x0a'+_0x534de4,_0x184634=new Blob([_0x44c08c],{'type':_0x375552(0x151)});await dpUploadFile(_0x16e646+'_slot0.txt',_0x184634);}else console[_0x375552(0x17a)](_0x375552(0x13e));await lockNoti('',_0x375552(0x13c)+ ++countUpload+_0x375552(0x15f),0x7d0);}else console['log'](_0x375552(0x12e));}else console[_0x375552(0x17a)](_0x375552(0x15a));}function startTimer(){let [_0x55a430,_0x5a8eb2,_0x17c630,_0x446a74,_0x7708a1]=[0x0,0x0,0x0,0x0,0x0];setInterval(()=>{const _0x669a7c=a0_0x4063;_0x17c630++,_0x446a74++,_0x7708a1++;if(_0x17c630===0x3c)[_0x17c630,_0x5a8eb2]=[0x0,_0x5a8eb2+0x1];if(_0x5a8eb2===0x3c)[_0x5a8eb2,_0x55a430]=[0x0,_0x55a430+0x1];document['getElementById'](_0x669a7c(0x16a))[_0x669a7c(0x168)]=_0x55a430+'h'+_0x5a8eb2['toString']()[_0x669a7c(0x154)](0x2,'0')+'.'+_0x17c630[_0x669a7c(0x183)]()['padStart'](0x2,'0');_0x446a74===0x3c&&(saveStatePeriodically(),_0x446a74=0x0);;_0x446a74===0xe10&&(saveStateInCloud(),_0x7708a1=0x0);;},0x3e8);}export async function uploadGame(_0x4ea304){const _0xc34428=a0_0x57bfa3,_0x54ae99=_0x4ea304[_0xc34428(0x12f)][0x0];Module[_0xc34428(0x135)](_0x54ae99,()=>{const _0x5e68f4=_0xc34428;Module[_0x5e68f4(0x13b)]();});}export async function loadGame(_0xd544f5){const _0xd5a122=a0_0x57bfa3,_0x54a918=_0xd544f5[_0xd5a122(0x188)](/\.(gba|gbc|gb|zip)$/,'.ss0'),_0x426e9f=Module[_0xd5a122(0x170)]();intro[_0xd5a122(0x15c)][_0xd5a122(0x179)](_0xd5a122(0x143)),errorLogElements[0x0][_0xd5a122(0x142)][_0xd5a122(0x146)]='0',ingame[_0xd5a122(0x15c)][_0xd5a122(0x162)]('disable'),_0xd544f5['endsWith'](_0xd5a122(0x15e))||_0xd544f5[_0xd5a122(0x14a)](_0xd5a122(0x16f))?(canvas[_0xd5a122(0x15c)][_0xd5a122(0x179)]('gbc'),areaTrans[_0xd5a122(0x15c)][_0xd5a122(0x179)]('gbc1'),localStorage[_0xd5a122(0x14c)](_0xd5a122(0x14f),_0xd5a122(0x152)+(window[_0xd5a122(0x16d)]-0xe6)+','+(window['innerWidth']-0xe6)*0x9/0xa)):localStorage[_0xd5a122(0x14c)](_0xd5a122(0x14f),_0xd5a122(0x152)+(window['innerWidth']-0x96)+','+(window[_0xd5a122(0x16d)]-0x96)*0x2/0x3),_0x426e9f[_0xd5a122(0x177)](_0x54a918)?(await Module[_0xd5a122(0x17f)]('/data/games/'+_0xd544f5),confirm(_0xd5a122(0x18a))&&(await Module[_0xd5a122(0x180)](0x0),localStorage[_0xd5a122(0x14c)](_0xd5a122(0x14d),_0xd544f5),console[_0xd5a122(0x17a)](_0xd544f5))):(await Module[_0xd5a122(0x17f)](_0xd5a122(0x12d)+_0xd544f5),localStorage[_0xd5a122(0x14c)](_0xd5a122(0x14d),_0xd544f5)),await statusShow();}export async function saveState(_0x2c4ad2){const _0x546da9=a0_0x57bfa3;await Module[_0x546da9(0x166)](_0x2c4ad2),await Module[_0x546da9(0x13b)]();}export async function loadState(_0x24947f){const _0x50ed70=a0_0x57bfa3;await Module[_0x50ed70(0x180)](_0x24947f);}function a0_0x17e5(){const _0x3584de=['addEventListener','Resumed!','canvas','style','disable','Off','control-setting','bottom','fileSize','getElementById','then','endsWith','listCheats','setItem','gameName','SDL2','screenSize','now','text/plain','0,0,','hidden','padStart','16050obAUOW','Error\x20uploadCheat:','createObjectURL','slotStateSaved','Error\x20uploadSavSta:','Online!','/data/screenshots/','classList','listScreenshots','.gbc','\x20time(s)','pagehide','href','remove','editFileName','614720GZbRaO','959566QqzGxw','saveState','4137csCSjv','textContent','visibilitychange','timer','_dateState0','464pdnjYo','innerWidth','_savedCheats','.gb','listStates','beforeunload','onLine','name','.png','buttonPress','_imageState0','includes','listSaves','add','log','screenshot','persisted','body','30jUMYIU','loadGame','loadState','download','visible','toString','1856169FnGAqF','error','825YWcTFx','759260iCTeir','replace','resumeGame','Do\x20you\x20want\x20to\x20load\x20save\x20state?','FSInit','type','uId','/data/games/','Unable\x20to\x20upload\x20to\x20Cloud!','files','Paused!','3eEQFbv','uploadSaveOrSaveState','289951dkIYFW','appendChild','uploadRom','downloadFile','getItem','click','.ss0','application/octet-stream','FSSync','Cloud\x20upload\x20','pauseGame','No\x20screenshot!'];a0_0x17e5=function(){return _0x3584de;};return a0_0x17e5();}export async function downloadFile(_0x50cf00,_0x27a9e6){const _0x4b4d6b=a0_0x57bfa3,_0x555024=Module[_0x4b4d6b(0x136)](_0x50cf00),_0x2257a5=document['createElement']('a');document[_0x4b4d6b(0x17d)][_0x4b4d6b(0x134)](_0x2257a5),_0x2257a5[_0x4b4d6b(0x181)]=_0x27a9e6;const _0x1c6570=new Blob([_0x555024],{'type':_0x4b4d6b(0x13a)});_0x2257a5[_0x4b4d6b(0x161)]=URL[_0x4b4d6b(0x157)](_0x1c6570),_0x2257a5[_0x4b4d6b(0x138)](),URL['revokeObjectURL'](_0x1c6570),_0x2257a5[_0x4b4d6b(0x162)]();}export function downloadFileInCloud(_0x40643e){const _0x4129d1=Module['downloadFile'](_0x40643e);return _0x4129d1;}export async function uploadFile(_0x88147c){const _0x4e5ba3=a0_0x57bfa3,_0x89b936=_0x88147c[_0x4e5ba3(0x12f)][0x0];Module[_0x4e5ba3(0x132)](_0x89b936,()=>{const _0x34843e=_0x4e5ba3;Module[_0x34843e(0x13b)]();});}export async function editFile(_0x17d331,_0x46e085,_0x2029d7){const _0x2dda0e=a0_0x57bfa3;await Module[_0x2dda0e(0x163)](_0x17d331,_0x46e085,_0x2029d7),await Module['FSSync']();}export async function deleteFile(_0x265e8a){const _0x13a559=a0_0x57bfa3;await Module['deleteFile'](_0x265e8a),await Module[_0x13a559(0x13b)]();}export function listGame(){const _0xad27bf=Module['listGames']();return _0xad27bf;}export function listSave(){const _0x10f24b=a0_0x57bfa3,_0x21224d=Module[_0x10f24b(0x178)]();return _0x21224d;}export function listState(){const _0x14fc07=a0_0x57bfa3,_0x35ecd3=Module[_0x14fc07(0x170)]();return _0x35ecd3;}export function listCheat(){const _0x202e02=a0_0x57bfa3,_0x1a7be2=Module[_0x202e02(0x14b)]();return _0x1a7be2;}export function listScreenshot(){const _0xcbb62c=a0_0x57bfa3,_0x153e1c=Module[_0xcbb62c(0x15d)]();return _0x153e1c;}export function fileSize(_0x5428a9){const _0x945927=a0_0x57bfa3,_0x305a74=Module[_0x945927(0x147)](_0x5428a9);return _0x305a74;}export async function uploadCheat(_0x19e0fe){const _0x2a57bb=a0_0x57bfa3;try{const _0x438444=_0x19e0fe['files'][0x0];await Module['uploadCheats'](_0x438444,()=>{const _0x229ca0=a0_0x4063;console['log']('Cheat\x20uploaded\x20successfully:',_0x438444[_0x229ca0(0x173)]),localStorageFile(),Module['FSSync']();});}catch(_0x17b70e){console[_0x2a57bb(0x185)](_0x2a57bb(0x156),_0x17b70e);}}export async function uploadSavSta(_0x331865){const _0x316ece=a0_0x57bfa3;try{const _0x5c3e51=_0x331865[_0x316ece(0x12f)][0x0];await Module[_0x316ece(0x132)](_0x5c3e51,()=>{const _0x33bb06=_0x316ece;console[_0x33bb06(0x17a)]('Save/State\x20uploaded\x20successfully:',_0x5c3e51['name']),localStorageFile(),Module[_0x33bb06(0x13b)]();});}catch(_0x424829){console[_0x316ece(0x185)](_0x316ece(0x159),_0x424829);}}export async function uploadSaveOrSaveState(_0x224973){const _0x1ddfc9=a0_0x57bfa3;Module[_0x1ddfc9(0x132)](_0x224973,()=>{const _0x3250e2=_0x1ddfc9;localStorageFile(),Module[_0x3250e2(0x13b)]();});}export async function resumeGame(){const _0x50a7c1=a0_0x57bfa3;Module[_0x50a7c1(0x189)](),Module[_0x50a7c1(0x14e)](),notiMessage(_0x50a7c1(0x140),0x7d0);}export async function pauseGame(){const _0x1f4036=a0_0x57bfa3;Module[_0x1f4036(0x13d)](),Module[_0x1f4036(0x14e)](),notiMessage(_0x1f4036(0x130),0x7d0);}export async function buttonPress(_0x3b5037){const _0xd0a55f=a0_0x57bfa3;Module[_0xd0a55f(0x175)](_0x3b5037);}export async function buttonUnpress(_0x3e89a2){Module['buttonUnpress'](_0x3e89a2);}export async function screenShot(_0x197ee3){const _0x20a164=a0_0x57bfa3,_0x55df45=localStorage[_0x20a164(0x137)]('gameName'),_0x545822=_0x55df45[_0x20a164(0x188)](/\.(gba|gbc|gb|zip)$/,'_');await Module[_0x20a164(0x17b)](''+_0x545822+_0x197ee3+_0x20a164(0x174)),await Module['FSSync']();const _0x553ef5=await fileToBase64(Module['downloadFile'](_0x20a164(0x15b)+_0x545822+_0x197ee3+'.png')),_0x3e2d8e=Date[_0x20a164(0x150)](),_0x5e77ca=formatDateTime(_0x3e2d8e);localStorage['setItem'](_0x55df45+'_dateState'+_0x197ee3,_0x5e77ca),localStorage['setItem'](_0x55df45+'_imageState'+_0x197ee3,_0x553ef5);}export async function captureOCR(_0x1411f6){const _0x1b0ca3=a0_0x57bfa3;Module[_0x1b0ca3(0x17b)](_0x1411f6);const _0x4349ed=Module[_0x1b0ca3(0x136)]('/data/screenshots/'+_0x1411f6);return _0x4349ed;}export async function setFastForwardMultiplier(_0xb0fe1e){Module['setFastForwardMultiplier'](_0xb0fe1e);}export function uploadCheats(_0x7b0965,_0x5333a9,_0xfd3839,_0x294972,_0x18224d){Module['uploadCheats'](_0x7b0965,()=>{const _0x426a0a=a0_0x4063;Module['autoLoadCheats'](),setTimeout(()=>{const _0xe9e853=a0_0x4063;Module[_0xe9e853(0x13b)]();},0x1f4),_0x294972&&(localStorage[_0x426a0a(0x14c)](_0x5333a9+_0x426a0a(0x16e),_0xfd3839),notiMessage('Cheat\x20Enabled!',0x5dc)),_0x18224d[_0x426a0a(0x168)]=localStorage['getItem'](_0x5333a9+_0x426a0a(0x16e)||_0x426a0a(0x144));});}