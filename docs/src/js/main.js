const a0_0x2f7a55=a0_0x2e72;(function(_0x3d5d1f,_0x1558f1){const _0x288780=a0_0x2e72,_0x1bfdb3=_0x3d5d1f();while(!![]){try{const _0x3d4fac=-parseInt(_0x288780(0x13e))/0x1+parseInt(_0x288780(0xe2))/0x2*(-parseInt(_0x288780(0xf7))/0x3)+-parseInt(_0x288780(0x126))/0x4*(-parseInt(_0x288780(0xdb))/0x5)+parseInt(_0x288780(0x113))/0x6+parseInt(_0x288780(0x10f))/0x7+-parseInt(_0x288780(0x14d))/0x8+parseInt(_0x288780(0x105))/0x9;if(_0x3d4fac===_0x1558f1)break;else _0x1bfdb3['push'](_0x1bfdb3['shift']());}catch(_0x5d40e5){_0x1bfdb3['push'](_0x1bfdb3['shift']());}}}(a0_0x3800,0x40b64));import a0_0x57b6f9 from'../core/mgba.js';import*as a0_0x5004c2 from'./gamepad.js';import{localStorageFile}from'./storage.js';import{dpUploadFile}from'./cloud.js';import{shaderData}from'./setting.js';import{abc}from'./state.js';const Module={'canvas':document[a0_0x2f7a55(0x13a)]('canvas')};function initializeCore(_0x20c5c1,_0x453a14){const _0x1b7ce8=a0_0x2f7a55;_0x20c5c1(_0x453a14)[_0x1b7ce8(0x12e)](function(_0x832950){const _0x3278e7=_0x1b7ce8;_0x832950[_0x3278e7(0x13d)]();});}initializeCore(a0_0x57b6f9,Module);let countAutoSave=0x0,countUpload=0x0,fsSyncTimeout;const canvas=document['getElementById'](a0_0x2f7a55(0xe5)),controlSetting=document[a0_0x2f7a55(0x13a)]('control-setting');function handleVisibilityChange(_0x2b511c){const _0x52b07b=a0_0x2f7a55;document[_0x52b07b(0xef)]==='hidden'||_0x2b511c?.[_0x52b07b(0x12d)]===_0x52b07b(0x124)||_0x2b511c?.[_0x52b07b(0x148)]?(pauseGame(),canvas['classList']['add'](_0x52b07b(0xdd))):(setTimeout(()=>{const _0x3c03a6=_0x52b07b;canvas['classList']['remove'](_0x3c03a6(0xdd));},0x258),controlSetting[_0x52b07b(0x14e)][_0x52b07b(0x120)]('visible')&&resumeGame());}async function statusShow(){const _0x3a424c=a0_0x2f7a55;document[_0x3a424c(0x11d)]('pagehide',handleVisibilityChange),document['addEventListener']('visibilitychange',handleVisibilityChange),window[_0x3a424c(0x11d)]('beforeunload',handleVisibilityChange),restoreArea(),startTimer(),await a0_0x5004c2['turboF'](parseInt(await getData(gameName,'0','turboState'))),await delay(0xc8),await Module[_0x3a424c(0x147)](),await delay(0x320),await led(parseInt(await getData(gameName,'0',_0x3a424c(0x101)))),await notiMessage(gameVer,0x3e8),await abc();}async function saveStatePeriodically(){const _0x1f4fb0=a0_0x2f7a55;await ledSave('#20A5A6'),await Module[_0x1f4fb0(0x115)](0x0),await Module[_0x1f4fb0(0xfc)](),await screenShot(0x0),console[_0x1f4fb0(0x149)]('Auto\x20save\x20'+ ++countAutoSave+'\x20time(s)');}async function saveStateInCloud(){const _0x48aa53=a0_0x2f7a55,_0x3606f6=gameName[_0x48aa53(0xe8)](/\.(zip|gb|gbc|gba)$/,_0x48aa53(0xf1)),_0x39ae1e=localStorage[_0x48aa53(0x11f)](_0x48aa53(0x107));navigator[_0x48aa53(0x110)]&&(_0x39ae1e&&(await ledSave(_0x48aa53(0x10a)),await delay(0x3e8),await dpUploadFile(_0x3606f6,Module[_0x48aa53(0xdf)](_0x48aa53(0x102)+_0x3606f6),'state'),await lockNoti('','Cloud\x20upload\x20'+ ++countUpload+_0x48aa53(0xeb),0x7d0)));}function startTimer(){let [_0x582ea7,_0xb3cd6a,_0x5497ce,_0x5f2957,_0x43a151]=[0x0,0x0,0x0,0x0,0x0];setInterval(()=>{const _0x1c0981=a0_0x2e72;_0x5497ce++,_0x5f2957++,_0x43a151++;if(_0x5497ce===0x3c)[_0x5497ce,_0xb3cd6a]=[0x0,_0xb3cd6a+0x1];if(_0xb3cd6a===0x3c)[_0xb3cd6a,_0x582ea7]=[0x0,_0x582ea7+0x1];document[_0x1c0981(0x13a)](_0x1c0981(0xf0))['textContent']=_0x582ea7+'h'+_0xb3cd6a[_0x1c0981(0x100)]()[_0x1c0981(0xf8)](0x2,'0')+'.'+_0x5497ce['toString']()[_0x1c0981(0xf8)](0x2,'0');_0x5f2957===0x3c&&(saveStatePeriodically(),_0x5f2957=0x0);;_0x43a151===0x708&&(saveStateInCloud(),_0x43a151=0x0);;},0x3e8);}export async function uploadGame(_0x39e50e){const _0x23eca8=a0_0x2f7a55,_0x5bebf5=_0x39e50e['files'][0x0];Module[_0x23eca8(0xdc)](_0x5bebf5,()=>{const _0x1a7614=_0x23eca8;Module[_0x1a7614(0xfc)]();});}export async function loadGame(_0x2a19af){const _0x4a71fe=a0_0x2f7a55,_0x46052d=_0x2a19af[_0x4a71fe(0xe8)](/\.(gba|gbc|gb|zip)$/,_0x4a71fe(0xf1)),_0x5b038c=Module[_0x4a71fe(0x132)]()[_0x4a71fe(0x127)](_0x511bf9=>_0x511bf9!=='.'&&_0x511bf9!=='..');intro[_0x4a71fe(0x14e)][_0x4a71fe(0xf2)](_0x4a71fe(0x140)),errorLogElements[0x0][_0x4a71fe(0x12f)][_0x4a71fe(0x138)]='0',ingame[_0x4a71fe(0x14e)][_0x4a71fe(0x130)](_0x4a71fe(0x140)),_0x2a19af[_0x4a71fe(0x128)](_0x4a71fe(0xfe))||_0x2a19af[_0x4a71fe(0x128)](_0x4a71fe(0x144))?(canvas[_0x4a71fe(0x14e)][_0x4a71fe(0xf2)](_0x4a71fe(0xda)),areaTrans[_0x4a71fe(0x14e)]['add'](_0x4a71fe(0x106)),localStorage[_0x4a71fe(0x129)](_0x4a71fe(0xea),_0x4a71fe(0x135)+(window[_0x4a71fe(0xff)]-0xe6)+','+(window[_0x4a71fe(0xff)]-0xe6)*0x9/0xa)):localStorage[_0x4a71fe(0x129)](_0x4a71fe(0xea),_0x4a71fe(0x135)+(window[_0x4a71fe(0xff)]-0x96)+','+(window[_0x4a71fe(0xff)]-0x96)*0x2/0x3),_0x5b038c[_0x4a71fe(0x104)](_0x46052d)?(await Module['loadGame'](_0x4a71fe(0x117)+_0x2a19af),confirm('Do\x20you\x20want\x20to\x20load\x20save\x20state?')&&(await Module[_0x4a71fe(0x14b)](0x0),await shaderData())):(await Module[_0x4a71fe(0x131)](_0x4a71fe(0x117)+gameName),await shaderData()),await statusShow();}export async function saveState(_0x529b61){const _0x29bddd=a0_0x2f7a55;await Module[_0x29bddd(0x115)](_0x529b61),(clearTimeout(fsSyncTimeout),fsSyncTimeout=setTimeout(Module[_0x29bddd(0xfc)],0x3e8));}function a0_0x3800(){const _0x2b5157=['.gb','download','led06','SDL2','persisted','log','image/png','loadState','editFileName','1544552KMfjmO','classList','uploadAll','join','noti-mess','gbc','73045OJXfGk','uploadRom','visible','autoLoadCheats','downloadFile','0.4','setVolume','484004vpwIEY','buttonUnpress','application/octet-stream','canvas','resumeGame','revokeObjectURL','replace','\x20:\x20','screenSize','\x20time(s)','led01','led03','buttonPress','visibilityState','timer','.ss0','add','\x5cs*:\x5cs*(.*?)\x5cs*(?=\x5c||$)','createObjectURL','led0','encode','3UPSzTv','padStart','deleteFile','map','All','FSSync','.png','.gbc','innerWidth','toString','slotStateSaved','/data/states/','now','includes','2411559yJCQKe','gbc1','uId','led05','href','#E0C068','led04','match','screenshot','Error\x20ledSave:','2794624IYRwmk','onLine','opacity','pauseGame','582780PIFODy','listSaves','saveState','appendChild','/data/games/','entries','split','Resumed!','files','listRoms','addEventListener','setFastForwardMultiplier','getItem','contains','indexOf','textContent','tEXtComment\x00','beforeunload','set','124aHoNNW','filter','endsWith','setItem','exec','led02','error','type','then','style','remove','loadGame','listStates','/data/screenshots/','substring','0,0,','concat','led07','bottom','trim','getElementById','fill','rgba(245,\x20232,\x20209,\x200.4)','FSInit','517061emZKHw','charCodeAt','disable','Paused!','length','createElement'];a0_0x3800=function(){return _0x2b5157;};return a0_0x3800();}export async function loadState(_0x47444a){const _0x41c960=a0_0x2f7a55;await Module[_0x41c960(0x14b)](_0x47444a);}export async function downloadFile(_0x1c5149,_0x5a3b2b){const _0x178400=a0_0x2f7a55,_0x3e4be3=Module[_0x178400(0xdf)](_0x1c5149),_0x1cf346=document[_0x178400(0x143)]('a');document['body'][_0x178400(0x116)](_0x1cf346),_0x1cf346[_0x178400(0x145)]=_0x5a3b2b;const _0x286d72=new Blob([_0x3e4be3],{'type':_0x178400(0xe4)});_0x1cf346[_0x178400(0x109)]=URL[_0x178400(0xf4)](_0x286d72),_0x1cf346['click'](),URL[_0x178400(0xe7)](_0x286d72),_0x1cf346[_0x178400(0x130)]();}export function downloadFileInCloud(_0xaebddf){try{const _0x3d7bf8=Module['downloadFile'](_0xaebddf);return _0x3d7bf8;}catch(_0x3a398b){return null;}}export async function uploadFileInCloud(_0x3d9356){Module['uploadAll'](_0x3d9356,async()=>{const _0x47c948=a0_0x2e72;localStorageFile(),await Module[_0x47c948(0xfc)]();});}export async function uploadFile(_0x43503e){const _0x3af5f6=a0_0x2f7a55,_0x160c50=_0x43503e[_0x3af5f6(0x11b)][0x0];Module[_0x3af5f6(0x14f)](_0x160c50,async()=>{const _0x830caa=_0x3af5f6;localStorageFile(),await Module[_0x830caa(0xfc)]();});}export async function editFile(_0x116164,_0xdad646,_0x150b0a){const _0x17640a=a0_0x2f7a55;await Module[_0x17640a(0x14c)](_0x116164,_0xdad646,_0x150b0a),await Module[_0x17640a(0xfc)]();}export async function deleteFile(_0x2aa479){const _0x50f026=a0_0x2f7a55;try{return await Module[_0x50f026(0xf9)](_0x2aa479),(clearTimeout(fsSyncTimeout),fsSyncTimeout=setTimeout(Module[_0x50f026(0xfc)],0x3e8)),!![];}catch(_0x3a8506){return console[_0x50f026(0x12c)](_0x2aa479),null;}}export function listGame(){const _0x390db9=a0_0x2f7a55,_0x173781=Module[_0x390db9(0x11c)]()['filter'](_0x372e0c=>_0x372e0c!=='.'&&_0x372e0c!=='..');return _0x173781;}export function listSave(){const _0x506b86=a0_0x2f7a55,_0x1761c8=Module[_0x506b86(0x114)]()['filter'](_0xc46823=>_0xc46823!=='.'&&_0xc46823!=='..');return _0x1761c8;}export function listState(){const _0x39e526=a0_0x2f7a55,_0x306005=Module[_0x39e526(0x132)]()[_0x39e526(0x127)](_0x50d290=>_0x50d290!=='.'&&_0x50d290!=='..');return _0x306005;}export function listCheat(){const _0x4c9df6=a0_0x2f7a55,_0x26ff4a=Module['listCheats']()[_0x4c9df6(0x127)](_0x1650ee=>_0x1650ee!=='.'&&_0x1650ee!=='..');return _0x26ff4a;}export function listScreenshot(){const _0x16fca0=Module['listScreenshots']()['filter'](_0x3448e4=>_0x3448e4!=='.'&&_0x3448e4!=='..');return _0x16fca0;}export function embedTextInPngFile(_0x49347a,_0x51a94b,_0x204c27){const _0x539191=a0_0x2f7a55;let _0x59667f=atob(_0x49347a[_0x539191(0x119)](',')[0x1]),_0x5d73be=new Uint8Array(_0x59667f[_0x539191(0x142)]);for(let _0x5eab5f=0x0;_0x5eab5f<_0x59667f[_0x539191(0x142)];_0x5eab5f++){_0x5d73be[_0x5eab5f]=_0x59667f[_0x539191(0x13f)](_0x5eab5f);}let _0xffbb4c=new TextEncoder()[_0x539191(0xf6)](_0x539191(0x123)+_0x51a94b),_0x24b605=new Uint8Array(_0x5d73be[_0x539191(0x142)]+_0xffbb4c[_0x539191(0x142)]);_0x24b605[_0x539191(0x125)](_0x5d73be,0x0),_0x24b605['set'](_0xffbb4c,_0x5d73be[_0x539191(0x142)]);let _0x5dcc1e=new Blob([_0x24b605],{'type':_0x539191(0x14a)}),_0x19c823=new File([_0x5dcc1e],_0x204c27,{'type':_0x539191(0x14a)});return _0x19c823;}export function extractTextFromPngBase64(_0x33207e){const _0x2230ce=a0_0x2f7a55;let _0x3266f4=atob(_0x33207e[_0x2230ce(0x119)](',')[0x1]),_0x20d6b6=_0x2230ce(0x123),_0x122c84=_0x3266f4[_0x2230ce(0x121)](_0x20d6b6);if(_0x122c84!==-0x1)return _0x3266f4['substring'](_0x122c84+_0x20d6b6[_0x2230ce(0x142)]);return null;}export function fileSize(_0x1b9fac){const _0x4bb0bf=Module['fileSize'](_0x1b9fac);return _0x4bb0bf;}export async function resumeGame(){const _0x26fce1=a0_0x2f7a55;Module[_0x26fce1(0xe6)](),Module[_0x26fce1(0x147)](),notiMessage(_0x26fce1(0x11a),0x7d0);}export async function pauseGame(){const _0x53ec73=a0_0x2f7a55;Module[_0x53ec73(0x112)](),Module['SDL2'](),notiMessage(_0x53ec73(0x141),0x7d0);}function a0_0x2e72(_0x4074ee,_0x224829){const _0x38005e=a0_0x3800();return a0_0x2e72=function(_0x2e72ef,_0x137a9f){_0x2e72ef=_0x2e72ef-0xd9;let _0x5a6683=_0x38005e[_0x2e72ef];return _0x5a6683;},a0_0x2e72(_0x4074ee,_0x224829);}export async function buttonPress(_0x2c07a4){const _0x4e6c1d=a0_0x2f7a55;Module[_0x4e6c1d(0xee)](_0x2c07a4);}export async function buttonUnpress(_0x32ff89){const _0x3674c9=a0_0x2f7a55;Module[_0x3674c9(0xe3)](_0x32ff89);}export async function screenShot(_0x5704ee){const _0x36f98f=a0_0x2f7a55,_0x252332=gameName[_0x36f98f(0xe8)](/\.(gba|gbc|gb|zip)$/,'_'+_0x5704ee+_0x36f98f(0xfd)),_0x1d40e6=await getData(gameName,_0x5704ee,_0x36f98f(0xfb))||'';console[_0x36f98f(0x149)](_0x1d40e6),await Module[_0x36f98f(0x10d)](_0x252332),await setData(gameName,_0x5704ee,'saveTime',formatDateTime(Date[_0x36f98f(0x103)]()),_0x1d40e6);}export async function dowloadScreenShot(_0x2ae71f){try{const _0x444afd=await fileToBase64(Module['downloadFile'](_0x2ae71f));return _0x444afd;}catch{}}export async function captureOCR(_0x37c4dd){const _0x21bd32=a0_0x2f7a55;Module[_0x21bd32(0x10d)](_0x37c4dd);const _0x5e5118=Module[_0x21bd32(0xdf)](_0x21bd32(0x133)+_0x37c4dd);return _0x5e5118;}export async function setFastForwardMultiplier(_0x85ccec){const _0x44dd1a=a0_0x2f7a55;Module[_0x44dd1a(0x11e)](_0x85ccec);}export async function uploadCheats(_0x8a56bb){const _0x236f86=a0_0x2f7a55;Module[_0x236f86(0xde)](),Module['uploadAll'](_0x8a56bb,async()=>{const _0xd2131c=_0x236f86;await Module[_0xd2131c(0xfc)]();});}export function setVolume(_0x234733){const _0x2adebb=a0_0x2f7a55;Module[_0x2adebb(0xe1)](_0x234733);}export async function setData(_0x18ba67,_0x411128,_0x136dab,_0x153d71,_0x17d1ab=''){const _0x24c89c=a0_0x2f7a55,_0x345d95=_0x18ba67[_0x24c89c(0xe8)](/\.(gba|gbc|gb|zip|cheats)$/,''),_0x3d269e=_0x24c89c(0x133)+_0x345d95+'_'+_0x411128+_0x24c89c(0xfd);let _0x18c497;try{_0x18c497=await fileToBase64(Module['downloadFile'](_0x3d269e));}catch(_0x19dee5){await Module[_0x24c89c(0x10d)](_0x345d95+'_'+_0x411128+_0x24c89c(0xfd)),await delay(0xc8),_0x18c497=await fileToBase64(Module['downloadFile'](_0x3d269e));}let _0x3f5266=atob(_0x18c497['split'](',')[0x1]),_0x19c218=_0x24c89c(0x123),_0x586bea=_0x3f5266['indexOf'](_0x19c218),_0x40898d={};if(_0x586bea!==-0x1||_0x17d1ab[_0x24c89c(0x139)]()!==''){let _0x58460f=_0x586bea!==-0x1?_0x3f5266[_0x24c89c(0x134)](_0x586bea+_0x19c218['length']):_0x17d1ab,_0x355082=/(\w+)\s*:\s*([^|]*)/g,_0x51db80;while((_0x51db80=_0x355082[_0x24c89c(0x12a)](_0x58460f))!==null){_0x40898d[_0x51db80[0x1][_0x24c89c(0x139)]()]=_0x51db80[0x2][_0x24c89c(0x139)]();}_0x586bea!==-0x1&&(_0x3f5266=_0x3f5266[_0x24c89c(0x134)](0x0,_0x586bea));}_0x40898d[_0x136dab]=_0x153d71;let _0x1c8e08=Object[_0x24c89c(0x118)](_0x40898d)[_0x24c89c(0xfa)](([_0x33661e,_0x44347f])=>_0x33661e+_0x24c89c(0xe9)+_0x44347f)[_0x24c89c(0x150)]('\x20|\x20'),_0x4a721f=new TextEncoder()[_0x24c89c(0xf6)](_0x19c218+'\x20'+_0x1c8e08),_0x4f5dda=new Uint8Array([..._0x3f5266]['map'](_0x524f55=>_0x524f55[_0x24c89c(0x13f)](0x0))[_0x24c89c(0x136)]([..._0x4a721f])),_0x50fc88=new File([new Blob([_0x4f5dda],{'type':_0x24c89c(0x14a)})],_0x345d95+'_'+_0x411128+_0x24c89c(0xfd),{'type':_0x24c89c(0x14a)});Module[_0x24c89c(0x14f)](_0x50fc88,()=>{});}export async function getData(_0x39d009,_0x1f47a3,_0x5e25fe){const _0x1a92a8=a0_0x2f7a55;try{const _0x5dd058=_0x39d009[_0x1a92a8(0xe8)](/\.(gba|gbc|gb|zip|cheats)$/,''),_0x795c92='/data/screenshots/'+_0x5dd058+'_'+_0x1f47a3+'.png';let _0x1000ee;try{_0x1000ee=await fileToBase64(Module[_0x1a92a8(0xdf)](_0x795c92));}catch(_0x12573a){return null;}let _0x31d4d5=atob(_0x1000ee[_0x1a92a8(0x119)](',')[0x1]),_0x173ee0='tEXtComment\x00',_0x5eb2f9=_0x31d4d5[_0x1a92a8(0x121)](_0x173ee0);if(_0x5eb2f9!==-0x1){let _0x341db9=_0x31d4d5[_0x1a92a8(0x134)](_0x5eb2f9+_0x173ee0[_0x1a92a8(0x142)]);if(_0x5e25fe===_0x1a92a8(0xfb))return _0x341db9[_0x1a92a8(0x139)]();let _0x58fcf4=new RegExp(_0x5e25fe+_0x1a92a8(0xf3)),_0x3f5106=_0x341db9[_0x1a92a8(0x10c)](_0x58fcf4);if(_0x3f5106)return _0x3f5106[0x1]['trim']();}}catch(_0x486382){return console['error']({'romName':_0x39d009,'slot':_0x1f47a3,'type':_0x5e25fe}),null;}}export async function ledSave(_0x3e7343){const _0x2418b1=a0_0x2f7a55,_0x557fcc=parseInt(await getData(gameName,'0','slotStateSaved')),_0x4fc87a=_0x557fcc===0x1?_0x2418b1(0xec):_0x557fcc===0x2?_0x2418b1(0x12b):_0x557fcc===0x3?_0x2418b1(0xed):_0x557fcc===0x4?_0x2418b1(0x10b):_0x557fcc===0x5?_0x2418b1(0x108):_0x557fcc===0x6?_0x2418b1(0x146):_0x557fcc===0x7?_0x2418b1(0x137):'led00';try{for(let _0x2cf329=0x0;_0x2cf329<=0x7;_0x2cf329++){document['getElementById'](_0x2418b1(0xf5)+_0x2cf329)['style'][_0x2418b1(0x13b)]=_0x2418b1(0x13c);}await delay(0x3e8);for(let _0x10fd43=0x0;_0x10fd43<=0x7;_0x10fd43++){document[_0x2418b1(0x13a)](_0x2418b1(0xf5)+_0x10fd43)['style']['fill']=_0x2418b1(0x13c);}document[_0x2418b1(0x13a)](_0x4fc87a)[_0x2418b1(0x12f)][_0x2418b1(0x13b)]=_0x3e7343;}catch(_0x2fb647){console[_0x2418b1(0x12c)](_0x2418b1(0x10e),_0x2fb647);}};export async function notiMessage(_0x1f66ae,_0x507c66,_0x234412=![]){const _0x5a835c=a0_0x2f7a55;var _0x590af4=document['getElementById'](_0x5a835c(0xd9));const _0x3f1dac=parseInt(await getData(gameName,'0',_0x5a835c(0x101)))||0x0;_0x590af4[_0x5a835c(0x12f)][_0x5a835c(0x111)]===_0x5a835c(0xe0)&&(clearTimeout(messageTimeout),_0x590af4[_0x5a835c(0x12f)][_0x5a835c(0x111)]='0'),_0x590af4[_0x5a835c(0x122)]=_0x1f66ae,_0x590af4['style'][_0x5a835c(0x111)]='0.4',messageTimeout=setTimeout(()=>{const _0x558808=_0x5a835c;_0x590af4[_0x558808(0x122)]='['+_0x3f1dac+']\x20'+gameName[_0x558808(0x134)](0x0,gameName['lastIndexOf']('.')),_0x590af4['style'][_0x558808(0x111)]='0.4';},_0x507c66),_0x234412&&(canvas['classList'][_0x5a835c(0xf2)](_0x5a835c(0xdd)),setTimeout(()=>{const _0x3baa66=_0x5a835c;canvas[_0x3baa66(0x14e)][_0x3baa66(0x130)](_0x3baa66(0xdd));},0x258));}