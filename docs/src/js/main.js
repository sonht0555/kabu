const a0_0x54bb1b=a0_0x387c;(function(_0x2b11ac,_0x1ad133){const _0x27a056=a0_0x387c,_0x57a298=_0x2b11ac();while(!![]){try{const _0x491109=parseInt(_0x27a056(0x1ba))/0x1*(-parseInt(_0x27a056(0x1cf))/0x2)+parseInt(_0x27a056(0x1e9))/0x3+parseInt(_0x27a056(0x1c7))/0x4*(-parseInt(_0x27a056(0x208))/0x5)+parseInt(_0x27a056(0x215))/0x6*(-parseInt(_0x27a056(0x1d6))/0x7)+-parseInt(_0x27a056(0x20d))/0x8*(-parseInt(_0x27a056(0x1ec))/0x9)+-parseInt(_0x27a056(0x211))/0xa*(-parseInt(_0x27a056(0x20b))/0xb)+-parseInt(_0x27a056(0x1ce))/0xc*(-parseInt(_0x27a056(0x203))/0xd);if(_0x491109===_0x1ad133)break;else _0x57a298['push'](_0x57a298['shift']());}catch(_0x20fe60){_0x57a298['push'](_0x57a298['shift']());}}}(a0_0x3e19,0xa1528));import a0_0x43f4e7 from'../core/mgba.js';import*as a0_0x519cea from'./gamepad.js';import{localStorageFile}from'./storage.js';import{dpUploadFile,dpRefreshToken}from'./cloud.js';const Module={'canvas':document[a0_0x54bb1b(0x1fc)]('canvas')};function initializeCore(_0x2131f2,_0xabeba){const _0x2f60c7=a0_0x54bb1b;_0x2131f2(_0xabeba)[_0x2f60c7(0x1b4)](function(_0x4e80a3){_0x4e80a3['FSInit']();});}initializeCore(a0_0x43f4e7,Module);let countAutoSave=0x0,turboState=0x1,countUpload=0x0;const canvas=document[a0_0x54bb1b(0x1fc)](a0_0x54bb1b(0x1e6)),savedTurboState=localStorage['getItem'](a0_0x54bb1b(0x20f)),controlSetting=document[a0_0x54bb1b(0x1fc)](a0_0x54bb1b(0x1f9));function handleVisibilityChange(_0x272d6a){const _0x4cab02=a0_0x54bb1b;document[_0x4cab02(0x218)]==='hidden'||_0x272d6a?.[_0x4cab02(0x1c1)]===_0x4cab02(0x1dd)||_0x272d6a?.[_0x4cab02(0x1c2)]?(pauseGame(),canvas['classList'][_0x4cab02(0x1da)](_0x4cab02(0x1eb))):(setTimeout(()=>{const _0x995407=_0x4cab02;canvas[_0x995407(0x1f7)]['remove'](_0x995407(0x1eb));},0x258),controlSetting[_0x4cab02(0x1f7)]['contains'](_0x4cab02(0x1eb))&&resumeGame());}async function statusShow(){const _0x4e67e5=a0_0x54bb1b;document[_0x4e67e5(0x1e2)]('pagehide',handleVisibilityChange),document[_0x4e67e5(0x1e2)]('visibilitychange',handleVisibilityChange),window[_0x4e67e5(0x1e2)](_0x4e67e5(0x1dd),handleVisibilityChange),restoreArea(),startTimer(),savedTurboState!==null&&(turboState=parseInt(savedTurboState),await a0_0x519cea['turboF'](turboState)),await delay(0xc8),await Module['SDL2'](),await delay(0x320),await led(parseInt(localStorage[_0x4e67e5(0x1f3)](_0x4e67e5(0x20c)))),await notiMessage(gameVer,0x3e8);}async function saveStatePeriodically(){const _0x1595cc=a0_0x54bb1b;await ledSave('#20A5A6'),await Module[_0x1595cc(0x1f1)](0x0),await Module['FSSync'](),await screenShot(0x0),console[_0x1595cc(0x1ef)]('Auto\x20save\x20'+ ++countAutoSave+_0x1595cc(0x1fa));}function a0_0x387c(_0x25eec4,_0x3f8a24){const _0x3e196c=a0_0x3e19();return a0_0x387c=function(_0x387c96,_0x992700){_0x387c96=_0x387c96-0x1b3;let _0xded7b7=_0x3e196c[_0x387c96];return _0xded7b7;},a0_0x387c(_0x25eec4,_0x3f8a24);}async function saveStateInCloud(){const _0x24a869=a0_0x54bb1b,_0x2b5474=localStorage[_0x24a869(0x1f3)](_0x24a869(0x1e4)),_0x579992=_0x2b5474[_0x24a869(0x1be)](/\.(zip|gb|gbc|gba)$/,'.ss0'),_0x46ee70=localStorage[_0x24a869(0x1f3)](_0x24a869(0x1d9)),_0x28bf50=localStorage[_0x24a869(0x1f3)](_0x2b5474+_0x24a869(0x1ed)),_0x22af37=localStorage[_0x24a869(0x1f3)](_0x2b5474+_0x24a869(0x1d0));if(navigator[_0x24a869(0x206)]){if(_0x46ee70){await ledSave('#E0C068'),await delay(0x3e8),await dpUploadFile(_0x579992,Module[_0x24a869(0x207)](_0x24a869(0x1bd)+_0x579992));if(_0x28bf50!==null){const _0x4db163=_0x28bf50+'\x0a\x0a'+_0x22af37,_0x48e219=new Blob([_0x4db163],{'type':_0x24a869(0x1b9)});await dpUploadFile(_0x2b5474+_0x24a869(0x21a),_0x48e219);}else console[_0x24a869(0x1ef)](_0x24a869(0x1c8));await lockNoti('',_0x24a869(0x213)+ ++countUpload+_0x24a869(0x1fa),0x7d0);}else console[_0x24a869(0x1ef)](_0x24a869(0x1ca));}else console[_0x24a869(0x1ef)](_0x24a869(0x202));}function startTimer(){let [_0x306087,_0x130400,_0x1284b7,_0x5ddb9c,_0x4ca0ee]=[0x0,0x0,0x0,0x0,0x0];setInterval(()=>{const _0x51d3ec=a0_0x387c;_0x1284b7++,_0x5ddb9c++,_0x4ca0ee++;if(_0x1284b7===0x3c)[_0x1284b7,_0x130400]=[0x0,_0x130400+0x1];if(_0x130400===0x3c)[_0x130400,_0x306087]=[0x0,_0x306087+0x1];document[_0x51d3ec(0x1fc)](_0x51d3ec(0x1c4))[_0x51d3ec(0x1cb)]=_0x306087+'h'+_0x130400[_0x51d3ec(0x1cc)]()[_0x51d3ec(0x1b7)](0x2,'0')+'.'+_0x1284b7[_0x51d3ec(0x1cc)]()[_0x51d3ec(0x1b7)](0x2,'0');_0x5ddb9c===0x3c&&(saveStatePeriodically(),_0x5ddb9c=0x0);;_0x4ca0ee===0xe10&&(saveStateInCloud(),_0x4ca0ee=0x0);;},0x3e8);}export async function uploadGame(_0x4ba3e6){const _0x31ebcf=a0_0x54bb1b,_0x514a9e=_0x4ba3e6['files'][0x0];Module[_0x31ebcf(0x216)](_0x514a9e,()=>{const _0x29132c=_0x31ebcf;Module[_0x29132c(0x1e7)]();});}export async function loadGame(_0x310028){const _0x155605=a0_0x54bb1b,_0x330937=_0x310028['replace'](/\.(gba|gbc|gb|zip)$/,_0x155605(0x217)),_0x9a1041=Module[_0x155605(0x214)]()[_0x155605(0x1dc)](_0x31bd41=>_0x31bd41!=='.'&&_0x31bd41!=='..');intro[_0x155605(0x1f7)]['add'](_0x155605(0x1c6)),errorLogElements[0x0]['style'][_0x155605(0x204)]='0',ingame[_0x155605(0x1f7)]['remove'](_0x155605(0x1c6)),_0x310028[_0x155605(0x1f2)]('.gbc')||_0x310028['endsWith']('.gb')?(canvas['classList']['add']('gbc'),areaTrans['classList'][_0x155605(0x1da)](_0x155605(0x1ea)),localStorage[_0x155605(0x1f0)]('screenSize',_0x155605(0x1df)+(window['innerWidth']-0xe6)+','+(window[_0x155605(0x1f4)]-0xe6)*0x9/0xa)):localStorage[_0x155605(0x1f0)](_0x155605(0x1bb),_0x155605(0x1df)+(window[_0x155605(0x1f4)]-0x96)+','+(window['innerWidth']-0x96)*0x2/0x3),_0x9a1041['includes'](_0x330937)?(await Module[_0x155605(0x1ee)]('/data/games/'+_0x310028),confirm(_0x155605(0x212))&&(await Module[_0x155605(0x1d8)](0x0),localStorage[_0x155605(0x1f0)]('gameName',_0x310028),console[_0x155605(0x1ef)](_0x310028))):(await Module[_0x155605(0x1ee)](_0x155605(0x1bc)+_0x310028),localStorage[_0x155605(0x1f0)](_0x155605(0x1e4),_0x310028),console[_0x155605(0x1ef)](_0x310028)),await statusShow();}export async function saveState(_0x3644fa){const _0x576d79=a0_0x54bb1b;await Module[_0x576d79(0x1f1)](_0x3644fa),await Module[_0x576d79(0x1e7)]();}export async function loadState(_0x28ab27){const _0x4538d8=a0_0x54bb1b;await Module[_0x4538d8(0x1d8)](_0x28ab27);}export async function downloadFile(_0x56f7b9,_0x8c1698){const _0x493622=a0_0x54bb1b,_0x3fbf6a=Module[_0x493622(0x207)](_0x56f7b9),_0x4e56e8=document[_0x493622(0x219)]('a');document['body'][_0x493622(0x1f5)](_0x4e56e8),_0x4e56e8[_0x493622(0x1fd)]=_0x8c1698;const _0x3a7201=new Blob([_0x3fbf6a],{'type':_0x493622(0x1c0)});_0x4e56e8[_0x493622(0x1de)]=URL[_0x493622(0x200)](_0x3a7201),_0x4e56e8[_0x493622(0x1c9)](),URL[_0x493622(0x20e)](_0x3a7201),_0x4e56e8[_0x493622(0x1ff)]();}export function downloadFileInCloud(_0x30d50d){const _0x511059=a0_0x54bb1b,_0x2b9ad0=Module[_0x511059(0x207)](_0x30d50d);return _0x2b9ad0;}export async function uploadFileInCloud(_0x1f83fa){const _0x10762c=a0_0x54bb1b;Module[_0x10762c(0x1c5)](_0x1f83fa,()=>{const _0x428294=_0x10762c;localStorageFile(),Module[_0x428294(0x1e7)]();});}export async function uploadFile(_0x3e01ed){const _0x3ed267=a0_0x54bb1b,_0xe31a37=_0x3e01ed[_0x3ed267(0x201)][0x0];Module[_0x3ed267(0x1c5)](_0xe31a37,()=>{localStorageFile(),Module['FSSync']();});}export async function editFile(_0x390e86,_0x5bd475,_0x3d6d82){const _0x48965a=a0_0x54bb1b;await Module[_0x48965a(0x1f6)](_0x390e86,_0x5bd475,_0x3d6d82),await Module[_0x48965a(0x1e7)]();}export async function deleteFile(_0x1700bf){const _0x272495=a0_0x54bb1b;await Module[_0x272495(0x1d1)](_0x1700bf),await Module['FSSync']();}export function listGame(){const _0x149fd5=a0_0x54bb1b,_0x4df2e2=Module[_0x149fd5(0x1d2)]()[_0x149fd5(0x1dc)](_0x337f6e=>_0x337f6e!=='.'&&_0x337f6e!=='..');return _0x4df2e2;}export function listSave(){const _0x2333a0=a0_0x54bb1b,_0x4835d5=Module[_0x2333a0(0x1e5)]()[_0x2333a0(0x1dc)](_0x2cc2bc=>_0x2cc2bc!=='.'&&_0x2cc2bc!=='..');return _0x4835d5;}export function listState(){const _0x57b02d=a0_0x54bb1b,_0x4807e4=Module[_0x57b02d(0x214)]()['filter'](_0x442ccb=>_0x442ccb!=='.'&&_0x442ccb!=='..');return _0x4807e4;}export function listCheat(){const _0x2bca87=a0_0x54bb1b,_0x4faa95=Module[_0x2bca87(0x1db)]()['filter'](_0x2007a8=>_0x2007a8!=='.'&&_0x2007a8!=='..');return _0x4faa95;}export function listScreenshot(){const _0x2935ac=a0_0x54bb1b,_0x157221=Module[_0x2935ac(0x1cd)]()[_0x2935ac(0x1dc)](_0x26c37a=>_0x26c37a!=='.'&&_0x26c37a!=='..');return _0x157221;}export function embedTextInPngFile(_0x59dd0b,_0x2c78b8,_0x3297a3){const _0x46ad1c=a0_0x54bb1b;let _0x31ff3c=atob(_0x59dd0b[_0x46ad1c(0x210)](',')[0x1]),_0x414690=new Uint8Array(_0x31ff3c[_0x46ad1c(0x1e0)]);for(let _0x1970d0=0x0;_0x1970d0<_0x31ff3c[_0x46ad1c(0x1e0)];_0x1970d0++){_0x414690[_0x1970d0]=_0x31ff3c[_0x46ad1c(0x1e8)](_0x1970d0);}let _0x44f074=new TextEncoder()[_0x46ad1c(0x1b3)](_0x46ad1c(0x1b5)+_0x2c78b8),_0x38fef5=new Uint8Array(_0x414690[_0x46ad1c(0x1e0)]+_0x44f074[_0x46ad1c(0x1e0)]);_0x38fef5[_0x46ad1c(0x20a)](_0x414690,0x0),_0x38fef5['set'](_0x44f074,_0x414690[_0x46ad1c(0x1e0)]);let _0x5229de=new Blob([_0x38fef5],{'type':_0x46ad1c(0x1d7)}),_0x4b825d=new File([_0x5229de],_0x3297a3,{'type':'image/png'});return _0x4b825d;}export function extractTextFromPngBase64(_0x308940){const _0x28fa2c=a0_0x54bb1b;let _0x465d8b=atob(_0x308940['split'](',')[0x1]),_0x34cf17='tEXtComment\x00',_0x403446=_0x465d8b['indexOf'](_0x34cf17);if(_0x403446!==-0x1)return _0x465d8b[_0x28fa2c(0x1e3)](_0x403446+_0x34cf17[_0x28fa2c(0x1e0)]);return null;}export function fileSize(_0x5ba7ae){const _0x44de3f=Module['fileSize'](_0x5ba7ae);return _0x44de3f;}export async function resumeGame(){const _0x4c1a4a=a0_0x54bb1b;Module[_0x4c1a4a(0x1bf)](),Module[_0x4c1a4a(0x1fb)](),notiMessage(_0x4c1a4a(0x1e1),0x7d0);}export async function pauseGame(){const _0x5bfd18=a0_0x54bb1b;Module[_0x5bfd18(0x1c3)](),Module[_0x5bfd18(0x1fb)](),notiMessage(_0x5bfd18(0x1fe),0x7d0);}export async function buttonPress(_0x4c37d5){Module['buttonPress'](_0x4c37d5);}function a0_0x3e19(){const _0x3d04ac=['bottom','Cheat\x20Enabled!','onLine','downloadFile','1124265YnTBRA','_savedCheats','set','35398frEIAX','slotStateSaved','2230192vnpblV','revokeObjectURL','turboState','split','3850PYPfuR','Do\x20you\x20want\x20to\x20load\x20save\x20state?','Cloud\x20upload\x20','listStates','4746CwERZH','uploadRom','.ss0','visibilityState','createElement','_slot0.txt','encode','then','tEXtComment\x00','/data/screenshots/','padStart','screenshot','text/plain','102439hvxOsM','screenSize','/data/games/','/data/states/','replace','resumeGame','application/octet-stream','type','persisted','pauseGame','timer','uploadAll','disable','8TLoSrn','No\x20screenshot!','click','Unable\x20to\x20upload\x20to\x20Cloud!','textContent','toString','listScreenshots','12NwzDFE','4agrmuq','_dateState0','deleteFile','listRoms','buttonUnpress','autoLoadCheats','setVolume','10962raAiHK','image/png','loadState','uId','add','listCheats','filter','beforeunload','href','0,0,','length','Resumed!','addEventListener','substring','gameName','listSaves','canvas','FSSync','charCodeAt','2134371EOEGGn','gbc1','visible','18LNBlRR','_imageState0','loadGame','log','setItem','saveState','endsWith','getItem','innerWidth','appendChild','editFileName','classList','.png','control-setting','\x20time(s)','SDL2','getElementById','download','Paused!','remove','createObjectURL','files','Online!','599703bmHvPl'];a0_0x3e19=function(){return _0x3d04ac;};return a0_0x3e19();}export async function buttonUnpress(_0x1b8510){const _0x24a87c=a0_0x54bb1b;Module[_0x24a87c(0x1d3)](_0x1b8510);}export async function screenShot(_0x1f781e){const _0x45199b=a0_0x54bb1b,_0x15df8b=localStorage['getItem'](_0x45199b(0x1e4))['replace'](/\.(gba|gbc|gb|zip)$/,''),_0x28d08d=_0x15df8b+'_'+_0x1f781e+_0x45199b(0x1f8);await Module[_0x45199b(0x1b8)](_0x28d08d),await Module[_0x45199b(0x1e7)]();const _0x30a3e4=await fileToBase64(Module[_0x45199b(0x207)]('/data/screenshots/'+_0x28d08d)),_0x162ee9=embedTextInPngFile(_0x30a3e4,formatDateTime(Date['now']()),_0x28d08d);Module['uploadAll'](_0x162ee9,()=>{localStorageFile(),Module['FSSync']();});}export async function dowloadScreenShot(_0xe2d0e5){try{const _0x502c42=await fileToBase64(Module['downloadFile'](_0xe2d0e5));return _0x502c42;}catch{}}export async function captureOCR(_0x33a4fe){const _0x489d93=a0_0x54bb1b;Module[_0x489d93(0x1b8)](_0x33a4fe);const _0x2061db=Module[_0x489d93(0x207)](_0x489d93(0x1b6)+_0x33a4fe);return _0x2061db;}export async function setFastForwardMultiplier(_0x37ef2d){Module['setFastForwardMultiplier'](_0x37ef2d);}export function uploadCheats(_0x380b20,_0x26597d,_0x433598,_0x44a182,_0x5f3257){const _0x19b06a=a0_0x54bb1b;Module[_0x19b06a(0x1c5)](_0x380b20,()=>{const _0x5c8e98=_0x19b06a;Module[_0x5c8e98(0x1d4)](),setTimeout(()=>{const _0x511be7=_0x5c8e98;Module[_0x511be7(0x1e7)]();},0x1f4),_0x44a182&&(localStorage[_0x5c8e98(0x1f0)](_0x26597d+_0x5c8e98(0x209),_0x433598),notiMessage(_0x5c8e98(0x205),0x5dc)),_0x5f3257[_0x5c8e98(0x1cb)]=localStorage['getItem'](_0x26597d+'_savedCheats'||'Off');});}export function setVolume(_0x2e9c47){const _0x1aa841=a0_0x54bb1b;Module[_0x1aa841(0x1d5)](_0x2e9c47);}