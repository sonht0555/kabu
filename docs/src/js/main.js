const a0_0x353ef9=a0_0x3d70;(function(_0x3775c0,_0x2e8c49){const _0x210aa9=a0_0x3d70,_0x375efc=_0x3775c0();while(!![]){try{const _0x298f7e=-parseInt(_0x210aa9(0x185))/0x1+parseInt(_0x210aa9(0x17d))/0x2*(parseInt(_0x210aa9(0x159))/0x3)+-parseInt(_0x210aa9(0x16a))/0x4+-parseInt(_0x210aa9(0x170))/0x5*(-parseInt(_0x210aa9(0x195))/0x6)+parseInt(_0x210aa9(0x165))/0x7+-parseInt(_0x210aa9(0x172))/0x8+parseInt(_0x210aa9(0x178))/0x9*(-parseInt(_0x210aa9(0x175))/0xa);if(_0x298f7e===_0x2e8c49)break;else _0x375efc['push'](_0x375efc['shift']());}catch(_0x51fccc){_0x375efc['push'](_0x375efc['shift']());}}}(a0_0x59fb,0x53fae));import a0_0x39591a from'../core/mgba.js';import*as a0_0x1e743d from'./gamepad.js';import{localStorageFile}from'./storage.js';import{dpUploadFile,dpRefreshToken}from'./cloud.js';const Module={'canvas':document[a0_0x353ef9(0x192)](a0_0x353ef9(0x15a))};function initializeCore(_0x1ae86b,_0x36425f){_0x1ae86b(_0x36425f)['then'](function(_0x15dd0a){_0x15dd0a['FSInit']();});}initializeCore(a0_0x39591a,Module);let countAutoSave=0x0,turboState=0x1,countUpload=0x0;const canvas=document[a0_0x353ef9(0x192)](a0_0x353ef9(0x15a)),savedTurboState=localStorage[a0_0x353ef9(0x197)](a0_0x353ef9(0x156)),controlSetting=document['getElementById'](a0_0x353ef9(0x1a2));function handleVisibilityChange(_0x538858){const _0x5c7853=a0_0x353ef9;document[_0x5c7853(0x16d)]===_0x5c7853(0x162)||_0x538858?.[_0x5c7853(0x1b5)]==='beforeunload'||_0x538858?.[_0x5c7853(0x188)]?(pauseGame(),canvas[_0x5c7853(0x15e)][_0x5c7853(0x163)](_0x5c7853(0x157))):(setTimeout(()=>{const _0x5256d6=_0x5c7853;canvas[_0x5256d6(0x15e)][_0x5256d6(0x169)](_0x5256d6(0x157));},0x258),controlSetting['classList'][_0x5c7853(0x1a0)](_0x5c7853(0x157))&&resumeGame());}async function statusShow(){const _0x281d15=a0_0x353ef9;document[_0x281d15(0x1bc)](_0x281d15(0x15f),handleVisibilityChange),document['addEventListener'](_0x281d15(0x166),handleVisibilityChange),window['addEventListener'](_0x281d15(0x155),handleVisibilityChange),restoreArea(),startTimer(),savedTurboState!==null&&(turboState=parseInt(savedTurboState),await a0_0x1e743d[_0x281d15(0x1a8)](turboState)),await delay(0x3e8),await led(parseInt(localStorage['getItem']('slotStateSaved'))),await notiMessage(gameVer,0x3e8);}async function saveStatePeriodically(){const _0x467a99=a0_0x353ef9;await ledSave(_0x467a99(0x1b0)),await Module[_0x467a99(0x189)](0x0),await Module[_0x467a99(0x194)](),await screenShot(0x0),console['log'](_0x467a99(0x1b9)+ ++countAutoSave+_0x467a99(0x19a));}async function saveStateInCloud(){const _0x60f81d=a0_0x353ef9,_0x40eba1=localStorage[_0x60f81d(0x197)]('gameName'),_0x443418=_0x40eba1['replace'](_0x60f81d(0x171),_0x60f81d(0x17e)),_0xcee39c=localStorage[_0x60f81d(0x197)](_0x60f81d(0x1a6)),_0x28a977=localStorage[_0x60f81d(0x197)](_0x40eba1+_0x60f81d(0x1b3)),_0x26444c=localStorage[_0x60f81d(0x197)](_0x40eba1+_0x60f81d(0x190));if(navigator['onLine']){if(_0xcee39c){await ledSave(_0x60f81d(0x1ba)),await delay(0x3e8),await dpUploadFile(_0x443418,Module[_0x60f81d(0x18f)](_0x60f81d(0x19f)+_0x443418));if(_0x28a977!==null){const _0x4fcd94=_0x28a977+'\x0a\x0a'+_0x26444c,_0xa9222d=new Blob([_0x4fcd94],{'type':_0x60f81d(0x16c)});await dpUploadFile(_0x40eba1+_0x60f81d(0x16b),_0xa9222d);}else console[_0x60f81d(0x15d)](_0x60f81d(0x1ad));await lockNoti('',_0x60f81d(0x1bb)+ ++countUpload+_0x60f81d(0x19a),0x7d0);}else console[_0x60f81d(0x15d)](_0x60f81d(0x1b8));}else console[_0x60f81d(0x15d)](_0x60f81d(0x1a4));}function startTimer(){let [_0x138613,_0x2728cd,_0x387399,_0x4f6d30,_0x589694]=[0x0,0x0,0x0,0x0,0x0];setInterval(()=>{const _0x134c8d=a0_0x3d70;_0x387399++,_0x4f6d30++,_0x589694++;if(_0x387399===0x3c)[_0x387399,_0x2728cd]=[0x0,_0x2728cd+0x1];if(_0x2728cd===0x3c)[_0x2728cd,_0x138613]=[0x0,_0x138613+0x1];document[_0x134c8d(0x192)]('timer')[_0x134c8d(0x18d)]=_0x138613+'h'+_0x2728cd['toString']()['padStart'](0x2,'0')+'.'+_0x387399['toString']()['padStart'](0x2,'0');_0x4f6d30===0x3c&&(saveStatePeriodically(),_0x4f6d30=0x0);;_0x4f6d30===0xe10&&(saveStateInCloud(),_0x589694=0x0);;},0x3e8);}export async function uploadGame(_0x209216){const _0x5e6813=a0_0x353ef9,_0x4c5cbe=_0x209216[_0x5e6813(0x1ae)][0x0];Module[_0x5e6813(0x1a5)](_0x4c5cbe,()=>{const _0x4e992a=_0x5e6813;Module[_0x4e992a(0x194)]();});}export async function loadGame(_0x1cd5b7){const _0x9be29d=a0_0x353ef9,_0x5ecd75=_0x1cd5b7[_0x9be29d(0x164)](/\.(gba|gbc|gb|zip)$/,'.ss0'),_0x79da42=Module['listStates']()[_0x9be29d(0x184)](_0x4b15a5=>_0x4b15a5!=='.'&&_0x4b15a5!=='..');intro[_0x9be29d(0x15e)][_0x9be29d(0x163)](_0x9be29d(0x168)),errorLogElements[0x0][_0x9be29d(0x1a3)]['bottom']='0',ingame[_0x9be29d(0x15e)]['remove'](_0x9be29d(0x168)),_0x1cd5b7['endsWith'](_0x9be29d(0x199))||_0x1cd5b7[_0x9be29d(0x19e)](_0x9be29d(0x193))?(canvas[_0x9be29d(0x15e)][_0x9be29d(0x163)](_0x9be29d(0x179)),areaTrans[_0x9be29d(0x15e)][_0x9be29d(0x163)](_0x9be29d(0x173)),localStorage[_0x9be29d(0x18b)](_0x9be29d(0x198),_0x9be29d(0x1b1)+(window['innerWidth']-0xe6)+','+(window[_0x9be29d(0x1b7)]-0xe6)*0x9/0xa)):localStorage[_0x9be29d(0x18b)](_0x9be29d(0x198),'0,0,'+(window['innerWidth']-0x96)+','+(window['innerWidth']-0x96)*0x2/0x3),_0x79da42[_0x9be29d(0x1b4)](_0x5ecd75)?(await Module['loadGame'](_0x9be29d(0x16e)+_0x1cd5b7),confirm(_0x9be29d(0x1a7))&&(await Module[_0x9be29d(0x17a)](0x0),localStorage[_0x9be29d(0x18b)](_0x9be29d(0x167),_0x1cd5b7),console[_0x9be29d(0x15d)](_0x1cd5b7))):(await Module[_0x9be29d(0x176)](_0x9be29d(0x16e)+_0x1cd5b7),localStorage['setItem'](_0x9be29d(0x167),_0x1cd5b7)),await statusShow();}export async function saveState(_0x437321){const _0x858c8e=a0_0x353ef9;await Module['saveState'](_0x437321),await Module[_0x858c8e(0x194)]();}export async function loadState(_0x1b78c0){const _0x4b6ee9=a0_0x353ef9;await Module[_0x4b6ee9(0x17a)](_0x1b78c0);}export async function downloadFile(_0x8d61ec,_0x499744){const _0x182df5=a0_0x353ef9,_0x324228=Module[_0x182df5(0x18f)](_0x8d61ec),_0x441473=document[_0x182df5(0x17b)]('a');document[_0x182df5(0x18a)][_0x182df5(0x1af)](_0x441473),_0x441473[_0x182df5(0x1b2)]=_0x499744;const _0xa55881=new Blob([_0x324228],{'type':_0x182df5(0x1a9)});_0x441473[_0x182df5(0x180)]=URL[_0x182df5(0x17c)](_0xa55881),_0x441473['click'](),URL['revokeObjectURL'](_0xa55881),_0x441473[_0x182df5(0x169)]();}export function downloadFileInCloud(_0x5acf32){const _0x23e1e2=a0_0x353ef9,_0x2a58bf=Module[_0x23e1e2(0x18f)](_0x5acf32);return _0x2a58bf;}function a0_0x3d70(_0x390c32,_0x3121f6){const _0x59fbe2=a0_0x59fb();return a0_0x3d70=function(_0x3d7018,_0x564c28){_0x3d7018=_0x3d7018-0x155;let _0x2e0b2a=_0x59fbe2[_0x3d7018];return _0x2e0b2a;},a0_0x3d70(_0x390c32,_0x3121f6);}function a0_0x59fb(){const _0x1fe267=['buttonUnpress','href','.png','Paused!','uploadSaveOrSaveState','filter','301532diqwrI','setFastForwardMultiplier','Cheat\x20Enabled!','persisted','saveState','body','setItem','autoLoadCheats','textContent','Error\x20uploadSavSta:','downloadFile','_dateState0','error','getElementById','.gb','FSSync','6gVNDed','listRoms','getItem','screenSize','.gbc','\x20time(s)','buttonPress','fileSize','screenshot','endsWith','/data/states/','contains','listScreenshots','control-setting','style','Online!','uploadRom','uId','Do\x20you\x20want\x20to\x20load\x20save\x20state?','turboF','application/octet-stream','name','_savedCheats','SDL2','No\x20screenshot!','files','appendChild','#20A5A6','0,0,','download','_imageState0','includes','type','resumeGame','innerWidth','Unable\x20to\x20upload\x20to\x20Cloud!','Auto\x20save\x20','#E0C068','Cloud\x20upload\x20','addEventListener','beforeunload','turboState','visible','uploadCheats','33eJTVME','canvas','listStates','Error\x20uploadCheat:','log','classList','pagehide','_dateState','listCheats','hidden','add','replace','3927749iNNCGI','visibilitychange','gameName','disable','remove','1015888nChdqP','_slot0.txt','text/plain','visibilityState','/data/games/','deleteFile','1528945ftyqwg','.gba','4692032LSqmpc','gbc1','pauseGame','5330fVNTiN','loadGame','Off','351ffsQWc','gbc','loadState','createElement','createObjectURL','116342FNcmIV','.ss0'];a0_0x59fb=function(){return _0x1fe267;};return a0_0x59fb();}export async function uploadFile(_0xa14206){const _0x23ab11=a0_0x353ef9,_0x6a48da=_0xa14206['files'][0x0];Module[_0x23ab11(0x183)](_0x6a48da,()=>{const _0x206fa7=_0x23ab11;Module[_0x206fa7(0x194)]();});}export async function editFile(_0x2c581d,_0x4dca34,_0x3a9bc7){await Module['editFileName'](_0x2c581d,_0x4dca34,_0x3a9bc7),await Module['FSSync']();}export async function deleteFile(_0x5944ef){const _0x4e2f3d=a0_0x353ef9;await Module[_0x4e2f3d(0x16f)](_0x5944ef),await Module[_0x4e2f3d(0x194)]();}export function listGame(){const _0x21fd85=a0_0x353ef9,_0x2c90de=Module[_0x21fd85(0x196)]()[_0x21fd85(0x184)](_0x3010b3=>_0x3010b3!=='.'&&_0x3010b3!=='..');return _0x2c90de;}export function listSave(){const _0x322788=a0_0x353ef9,_0xe7c88b=Module['listSaves']()[_0x322788(0x184)](_0x17f6dc=>_0x17f6dc!=='.'&&_0x17f6dc!=='..');return _0xe7c88b;}export function listState(){const _0x47ca0e=a0_0x353ef9,_0x254196=Module[_0x47ca0e(0x15b)]()[_0x47ca0e(0x184)](_0x5efe36=>_0x5efe36!=='.'&&_0x5efe36!=='..');return _0x254196;}export function listCheat(){const _0x3efa8e=a0_0x353ef9,_0x1fe07c=Module[_0x3efa8e(0x161)]()[_0x3efa8e(0x184)](_0x524de0=>_0x524de0!=='.'&&_0x524de0!=='..');return _0x1fe07c;}export function listScreenshot(){const _0xffc5d6=a0_0x353ef9,_0xc8de53=Module[_0xffc5d6(0x1a1)]()[_0xffc5d6(0x184)](_0x525f12=>_0x525f12!=='.'&&_0x525f12!=='..');return _0xc8de53;}export function fileSize(_0x571b6b){const _0x52919b=a0_0x353ef9,_0x20e505=Module[_0x52919b(0x19c)](_0x571b6b);return _0x20e505;}export async function uploadCheat(_0x57515d){const _0x3d5167=a0_0x353ef9;try{const _0x1ac45f=_0x57515d[_0x3d5167(0x1ae)][0x0];await Module[_0x3d5167(0x158)](_0x1ac45f,()=>{const _0x4ef332=_0x3d5167;console[_0x4ef332(0x15d)]('Cheat\x20uploaded\x20successfully:',_0x1ac45f['name']),localStorageFile(),Module[_0x4ef332(0x194)]();});}catch(_0x974b55){console[_0x3d5167(0x191)](_0x3d5167(0x15c),_0x974b55);}}export async function uploadSavSta(_0x5048bf){const _0x47cb68=a0_0x353ef9;try{const _0x2616bc=_0x5048bf['files'][0x0];await Module['uploadSaveOrSaveState'](_0x2616bc,()=>{const _0x4f3ec5=a0_0x3d70;console[_0x4f3ec5(0x15d)]('Save/State\x20uploaded\x20successfully:',_0x2616bc[_0x4f3ec5(0x1aa)]),localStorageFile(),Module['FSSync']();});}catch(_0x123c5b){console[_0x47cb68(0x191)](_0x47cb68(0x18e),_0x123c5b);}}export async function uploadSaveOrSaveState(_0x235d7b){Module['uploadSaveOrSaveState'](_0x235d7b,()=>{localStorageFile(),Module['FSSync']();});}export async function resumeGame(){const _0x851ef5=a0_0x353ef9;Module[_0x851ef5(0x1b6)](),Module[_0x851ef5(0x1ac)](),notiMessage('Resumed!',0x7d0);}export async function pauseGame(){const _0x3c1046=a0_0x353ef9;Module[_0x3c1046(0x174)](),Module['SDL2'](),notiMessage(_0x3c1046(0x182),0x7d0);}export async function buttonPress(_0x3a95bc){const _0x3f0185=a0_0x353ef9;Module[_0x3f0185(0x19b)](_0x3a95bc);}export async function buttonUnpress(_0x427e00){const _0x1d8307=a0_0x353ef9;Module[_0x1d8307(0x17f)](_0x427e00);}export async function screenShot(_0x4f87ec){const _0x3f63fa=a0_0x353ef9,_0x359ced=localStorage[_0x3f63fa(0x197)](_0x3f63fa(0x167)),_0x127c16=_0x359ced[_0x3f63fa(0x164)](/\.(gba|gbc|gb|zip)$/,'_');await Module['screenshot'](''+_0x127c16+_0x4f87ec+_0x3f63fa(0x181)),await Module[_0x3f63fa(0x194)]();const _0x4cfba0=await fileToBase64(Module[_0x3f63fa(0x18f)]('/data/screenshots/'+_0x127c16+_0x4f87ec+_0x3f63fa(0x181))),_0x15d9ee=Date['now'](),_0x51171e=formatDateTime(_0x15d9ee);localStorage['setItem'](_0x359ced+_0x3f63fa(0x160)+_0x4f87ec,_0x51171e),localStorage[_0x3f63fa(0x18b)](_0x359ced+'_imageState'+_0x4f87ec,_0x4cfba0);}export async function captureOCR(_0x2bdf8d){const _0x5e3f04=a0_0x353ef9;Module[_0x5e3f04(0x19d)](_0x2bdf8d);const _0x185676=Module[_0x5e3f04(0x18f)]('/data/screenshots/'+_0x2bdf8d);return _0x185676;}export async function setFastForwardMultiplier(_0x39103c){const _0x57f3be=a0_0x353ef9;Module[_0x57f3be(0x186)](_0x39103c);}export function uploadCheats(_0x106832,_0x10e073,_0x1d0df0,_0x3e1ce9,_0xb8d50c){const _0x38da74=a0_0x353ef9;Module[_0x38da74(0x158)](_0x106832,()=>{const _0x18ccdf=_0x38da74;Module[_0x18ccdf(0x18c)](),setTimeout(()=>{const _0x3506fd=_0x18ccdf;Module[_0x3506fd(0x194)]();},0x1f4),_0x3e1ce9&&(localStorage['setItem'](_0x10e073+_0x18ccdf(0x1ab),_0x1d0df0),notiMessage(_0x18ccdf(0x187),0x5dc)),_0xb8d50c[_0x18ccdf(0x18d)]=localStorage[_0x18ccdf(0x197)](_0x10e073+_0x18ccdf(0x1ab)||_0x18ccdf(0x177));});}