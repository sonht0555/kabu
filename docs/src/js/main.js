const a0_0x2e8e88=a0_0x14aa;(function(_0x410f17,_0x2e4614){const _0x176fa1=a0_0x14aa,_0x203b7d=_0x410f17();while(!![]){try{const _0x33e5b2=parseInt(_0x176fa1(0xbc))/0x1+parseInt(_0x176fa1(0xe1))/0x2+parseInt(_0x176fa1(0xac))/0x3*(-parseInt(_0x176fa1(0xbf))/0x4)+-parseInt(_0x176fa1(0xea))/0x5*(parseInt(_0x176fa1(0xe8))/0x6)+-parseInt(_0x176fa1(0xd5))/0x7+-parseInt(_0x176fa1(0xa6))/0x8+parseInt(_0x176fa1(0xc9))/0x9;if(_0x33e5b2===_0x2e4614)break;else _0x203b7d['push'](_0x203b7d['shift']());}catch(_0x431c56){_0x203b7d['push'](_0x203b7d['shift']());}}}(a0_0x2334,0xce8b8));import a0_0xb8c3c9 from'../core/mgba.js';import*as a0_0x29f9d7 from'./gamepad.js';import{localStorageFile}from'./storage.js';import{dpUploadFile}from'./cloud.js';const Module={'canvas':document[a0_0x2e8e88(0x9f)]('canvas')};function initializeCore(_0x51ba26,_0x4a9b4b){const _0x349173=a0_0x2e8e88;_0x51ba26(_0x4a9b4b)[_0x349173(0xab)](function(_0x2c71a6){_0x2c71a6['FSInit']();});}initializeCore(a0_0xb8c3c9,Module);let countAutoSave=0x0,turboState=0x1,countUpload=0x0;const canvas=document[a0_0x2e8e88(0x9f)](a0_0x2e8e88(0xf9)),savedTurboState=localStorage['getItem'](a0_0x2e8e88(0xf8)),controlSetting=document[a0_0x2e8e88(0x9f)](a0_0x2e8e88(0xb0));function handleVisibilityChange(_0x384ce2){const _0x3f4eab=a0_0x2e8e88;document[_0x3f4eab(0xf2)]===_0x3f4eab(0xd8)||_0x384ce2?.['type']===_0x3f4eab(0xef)||_0x384ce2?.[_0x3f4eab(0xdc)]?(pauseGame(),canvas[_0x3f4eab(0xc5)][_0x3f4eab(0xd0)](_0x3f4eab(0xc4))):(setTimeout(()=>{const _0xdc48c5=_0x3f4eab;canvas[_0xdc48c5(0xc5)][_0xdc48c5(0xaf)](_0xdc48c5(0xc4));},0x258),controlSetting[_0x3f4eab(0xc5)][_0x3f4eab(0xce)](_0x3f4eab(0xc4))&&resumeGame());}async function statusShow(){const _0x1353ff=a0_0x2e8e88;document[_0x1353ff(0xc2)](_0x1353ff(0xd2),handleVisibilityChange),document['addEventListener']('visibilitychange',handleVisibilityChange),window['addEventListener'](_0x1353ff(0xef),handleVisibilityChange),restoreArea(),startTimer(),savedTurboState!==null&&(turboState=parseInt(savedTurboState),await a0_0x29f9d7[_0x1353ff(0xc0)](turboState)),await delay(0xc8),await Module[_0x1353ff(0xf1)](),await delay(0x320),await led(parseInt(localStorage[_0x1353ff(0xfa)]('slotStateSaved'))),await notiMessage(gameVer,0x3e8);}function a0_0x2334(){const _0x29c311=['tEXtComment\x00','hidden','indexOf','revokeObjectURL','createObjectURL','persisted','Auto\x20save\x20','listSaves','uId','innerWidth','1104962OeKaDE','padStart','download','log','.png','split','FSSync','43908eJVomS','image/png','260QWpOXr','Off','set','Cheat\x20Enabled!','bottom','beforeunload','downloadFile','SDL2','visibilityState','screenshot','gbc1','state','gameName','_savedCheats','turboState','canvas','getItem','screenSize','/data/states/','length','charCodeAt','Do\x20you\x20want\x20to\x20load\x20save\x20state?','getElementById','editFileName','timer','.gbc','listStates','uploadAll','setItem','3427288YBmhsl','filter','toString','application/octet-stream','loadGame','then','6UqSNYU','now','buttonUnpress','remove','control-setting','.ss0','listCheats','click','/data/games/','gbc','/data/screenshots/','.gb','pauseGame','textContent','loadState','files','353297JOuWcB','autoLoadCheats','\x20time(s)','2857748TpwDKV','turboF','Cloud\x20upload\x20','addEventListener','#E0C068','visible','classList','fileSize','endsWith','saveState','28426365XNZcfV','setFastForwardMultiplier','listRoms','includes','setVolume','contains','substring','add','#20A5A6','pagehide','0,0,','replace','6863038YcBVJV','disable'];a0_0x2334=function(){return _0x29c311;};return a0_0x2334();}async function saveStatePeriodically(){const _0xaedfeb=a0_0x2e8e88;await ledSave(_0xaedfeb(0xd1)),await Module[_0xaedfeb(0xc8)](0x0),await Module[_0xaedfeb(0xe7)](),await screenShot(0x0),console[_0xaedfeb(0xe4)](_0xaedfeb(0xdd)+ ++countAutoSave+_0xaedfeb(0xbe));}async function saveStateInCloud(){const _0x20cd6c=a0_0x2e8e88,_0xf9b389=localStorage[_0x20cd6c(0xfa)](_0x20cd6c(0xf6)),_0x169ee8=_0xf9b389[_0x20cd6c(0xd4)](/\.(zip|gb|gbc|gba)$/,_0x20cd6c(0xb1)),_0x53bfde=localStorage['getItem'](_0x20cd6c(0xdf));navigator['onLine']&&(_0x53bfde&&(await ledSave(_0x20cd6c(0xc3)),await delay(0x3e8),await dpUploadFile(_0x169ee8,Module['downloadFile'](_0x20cd6c(0x9b)+_0x169ee8),_0x20cd6c(0xf5)),await lockNoti('',_0x20cd6c(0xc1)+ ++countUpload+_0x20cd6c(0xbe),0x7d0)));}function startTimer(){let [_0x25b1b4,_0xfa6358,_0xe043e0,_0x488817,_0x2be418]=[0x0,0x0,0x0,0x0,0x0];setInterval(()=>{const _0x1f4ac0=a0_0x14aa;_0xe043e0++,_0x488817++,_0x2be418++;if(_0xe043e0===0x3c)[_0xe043e0,_0xfa6358]=[0x0,_0xfa6358+0x1];if(_0xfa6358===0x3c)[_0xfa6358,_0x25b1b4]=[0x0,_0x25b1b4+0x1];document[_0x1f4ac0(0x9f)](_0x1f4ac0(0xa1))[_0x1f4ac0(0xb9)]=_0x25b1b4+'h'+_0xfa6358[_0x1f4ac0(0xa8)]()[_0x1f4ac0(0xe2)](0x2,'0')+'.'+_0xe043e0[_0x1f4ac0(0xa8)]()[_0x1f4ac0(0xe2)](0x2,'0');_0x488817===0x3c&&(saveStatePeriodically(),_0x488817=0x0);;_0x2be418===0x708&&(saveStateInCloud(),_0x2be418=0x0);;},0x3e8);}export async function uploadGame(_0x10c1e9){const _0x291017=a0_0x2e8e88,_0x3444f3=_0x10c1e9[_0x291017(0xbb)][0x0];Module['uploadRom'](_0x3444f3,()=>{const _0x56d7b6=_0x291017;Module[_0x56d7b6(0xe7)]();});}export async function loadGame(_0x1d8a35){const _0x4f1f98=a0_0x2e8e88,_0x2ecb84=_0x1d8a35[_0x4f1f98(0xd4)](/\.(gba|gbc|gb|zip)$/,_0x4f1f98(0xb1)),_0x4b513e=Module[_0x4f1f98(0xa3)]()[_0x4f1f98(0xa7)](_0x1505bf=>_0x1505bf!=='.'&&_0x1505bf!=='..');intro['classList'][_0x4f1f98(0xd0)](_0x4f1f98(0xd6)),errorLogElements[0x0]['style'][_0x4f1f98(0xee)]='0',ingame['classList'][_0x4f1f98(0xaf)](_0x4f1f98(0xd6)),_0x1d8a35[_0x4f1f98(0xc7)](_0x4f1f98(0xa2))||_0x1d8a35[_0x4f1f98(0xc7)](_0x4f1f98(0xb7))?(canvas['classList'][_0x4f1f98(0xd0)](_0x4f1f98(0xb5)),areaTrans[_0x4f1f98(0xc5)]['add'](_0x4f1f98(0xf4)),localStorage[_0x4f1f98(0xa5)](_0x4f1f98(0x9a),_0x4f1f98(0xd3)+(window[_0x4f1f98(0xe0)]-0xe6)+','+(window[_0x4f1f98(0xe0)]-0xe6)*0x9/0xa)):localStorage[_0x4f1f98(0xa5)](_0x4f1f98(0x9a),_0x4f1f98(0xd3)+(window[_0x4f1f98(0xe0)]-0x96)+','+(window[_0x4f1f98(0xe0)]-0x96)*0x2/0x3),_0x4b513e[_0x4f1f98(0xcc)](_0x2ecb84)?(await Module['loadGame'](_0x4f1f98(0xb4)+_0x1d8a35),confirm(_0x4f1f98(0x9e))&&(await Module['loadState'](0x0),localStorage[_0x4f1f98(0xa5)](_0x4f1f98(0xf6),_0x1d8a35),console[_0x4f1f98(0xe4)](_0x1d8a35))):(await Module[_0x4f1f98(0xaa)]('/data/games/'+_0x1d8a35),localStorage[_0x4f1f98(0xa5)](_0x4f1f98(0xf6),_0x1d8a35),console['log'](_0x1d8a35)),await statusShow();}export async function saveState(_0x2a396a){const _0x19b857=a0_0x2e8e88;await Module[_0x19b857(0xc8)](_0x2a396a),await Module[_0x19b857(0xe7)]();}function a0_0x14aa(_0x598508,_0x4ae389){const _0x233441=a0_0x2334();return a0_0x14aa=function(_0x14aa94,_0x441cc4){_0x14aa94=_0x14aa94-0x9a;let _0x160ddf=_0x233441[_0x14aa94];return _0x160ddf;},a0_0x14aa(_0x598508,_0x4ae389);}export async function loadState(_0x51abf8){const _0x4afd49=a0_0x2e8e88;await Module[_0x4afd49(0xba)](_0x51abf8);}export async function downloadFile(_0x4a931a,_0x260d8e){const _0x2c0318=a0_0x2e8e88,_0x327279=Module[_0x2c0318(0xf0)](_0x4a931a),_0x2d4158=document['createElement']('a');document['body']['appendChild'](_0x2d4158),_0x2d4158[_0x2c0318(0xe3)]=_0x260d8e;const _0x3d5ecd=new Blob([_0x327279],{'type':_0x2c0318(0xa9)});_0x2d4158['href']=URL[_0x2c0318(0xdb)](_0x3d5ecd),_0x2d4158[_0x2c0318(0xb3)](),URL[_0x2c0318(0xda)](_0x3d5ecd),_0x2d4158[_0x2c0318(0xaf)]();}export function downloadFileInCloud(_0x56460d){const _0x2f58ea=a0_0x2e8e88,_0x3a3efd=Module[_0x2f58ea(0xf0)](_0x56460d);return _0x3a3efd;}export async function uploadFileInCloud(_0x221386){const _0x3c7364=a0_0x2e8e88;Module[_0x3c7364(0xa4)](_0x221386,()=>{const _0x4ba259=_0x3c7364;localStorageFile(),Module[_0x4ba259(0xe7)]();});}export async function uploadFile(_0x2cec7f){const _0x63c8d9=a0_0x2e8e88,_0x61f6ab=_0x2cec7f[_0x63c8d9(0xbb)][0x0];Module[_0x63c8d9(0xa4)](_0x61f6ab,()=>{const _0x22ac78=_0x63c8d9;localStorageFile(),Module[_0x22ac78(0xe7)]();});}export async function editFile(_0x4de798,_0x442661,_0x55f6c9){const _0x5423f0=a0_0x2e8e88;await Module[_0x5423f0(0xa0)](_0x4de798,_0x442661,_0x55f6c9),await Module[_0x5423f0(0xe7)]();}export async function deleteFile(_0x2bc81e){const _0x523943=a0_0x2e8e88;await Module['deleteFile'](_0x2bc81e),await Module[_0x523943(0xe7)]();}export function listGame(){const _0x2f61e5=a0_0x2e8e88,_0x44a3cd=Module[_0x2f61e5(0xcb)]()[_0x2f61e5(0xa7)](_0x16aa6f=>_0x16aa6f!=='.'&&_0x16aa6f!=='..');return _0x44a3cd;}export function listSave(){const _0x9719cb=a0_0x2e8e88,_0x5759dd=Module[_0x9719cb(0xde)]()[_0x9719cb(0xa7)](_0x382cf0=>_0x382cf0!=='.'&&_0x382cf0!=='..');return _0x5759dd;}export function listState(){const _0x2789e6=a0_0x2e8e88,_0x456a2a=Module['listStates']()[_0x2789e6(0xa7)](_0x4b4db0=>_0x4b4db0!=='.'&&_0x4b4db0!=='..');return _0x456a2a;}export function listCheat(){const _0x3643ec=a0_0x2e8e88,_0x1b8e99=Module[_0x3643ec(0xb2)]()[_0x3643ec(0xa7)](_0x44a6d6=>_0x44a6d6!=='.'&&_0x44a6d6!=='..');return _0x1b8e99;}export function listScreenshot(){const _0x15d129=a0_0x2e8e88,_0x3e74a4=Module['listScreenshots']()[_0x15d129(0xa7)](_0x2d2773=>_0x2d2773!=='.'&&_0x2d2773!=='..');return _0x3e74a4;}export function embedTextInPngFile(_0x5bf85d,_0x5c9179,_0x5a6976){const _0x3f2a0b=a0_0x2e8e88;let _0x5e8172=atob(_0x5bf85d['split'](',')[0x1]),_0xcf4b93=new Uint8Array(_0x5e8172[_0x3f2a0b(0x9c)]);for(let _0x2bf802=0x0;_0x2bf802<_0x5e8172[_0x3f2a0b(0x9c)];_0x2bf802++){_0xcf4b93[_0x2bf802]=_0x5e8172[_0x3f2a0b(0x9d)](_0x2bf802);}let _0x1fb805=new TextEncoder()['encode'](_0x3f2a0b(0xd7)+_0x5c9179),_0xb6ce2d=new Uint8Array(_0xcf4b93[_0x3f2a0b(0x9c)]+_0x1fb805[_0x3f2a0b(0x9c)]);_0xb6ce2d[_0x3f2a0b(0xec)](_0xcf4b93,0x0),_0xb6ce2d[_0x3f2a0b(0xec)](_0x1fb805,_0xcf4b93[_0x3f2a0b(0x9c)]);let _0x1bba2d=new Blob([_0xb6ce2d],{'type':_0x3f2a0b(0xe9)}),_0x12a4ab=new File([_0x1bba2d],_0x5a6976,{'type':_0x3f2a0b(0xe9)});return _0x12a4ab;}export function extractTextFromPngBase64(_0xe9887e){const _0x3b4d60=a0_0x2e8e88;let _0x2b0426=atob(_0xe9887e[_0x3b4d60(0xe6)](',')[0x1]),_0x3b7fc7='tEXtComment\x00',_0x50bda1=_0x2b0426[_0x3b4d60(0xd9)](_0x3b7fc7);if(_0x50bda1!==-0x1)return _0x2b0426[_0x3b4d60(0xcf)](_0x50bda1+_0x3b7fc7[_0x3b4d60(0x9c)]);return null;}export function fileSize(_0x1f1f56){const _0x3d65b3=a0_0x2e8e88,_0x3e6b9e=Module[_0x3d65b3(0xc6)](_0x1f1f56);return _0x3e6b9e;}export async function resumeGame(){const _0x45fbd5=a0_0x2e8e88;Module['resumeGame'](),Module[_0x45fbd5(0xf1)](),notiMessage('Resumed!',0x7d0);}export async function pauseGame(){const _0x5d8577=a0_0x2e8e88;Module[_0x5d8577(0xb8)](),Module['SDL2'](),notiMessage('Paused!',0x7d0);}export async function buttonPress(_0x1f5945){Module['buttonPress'](_0x1f5945);}export async function buttonUnpress(_0x14f39e){const _0x2d1c66=a0_0x2e8e88;Module[_0x2d1c66(0xae)](_0x14f39e);}export async function screenShot(_0x311680){const _0x1748e8=a0_0x2e8e88,_0x21fc79=localStorage['getItem'](_0x1748e8(0xf6))['replace'](/\.(gba|gbc|gb|zip)$/,''),_0xb83082=_0x21fc79+'_'+_0x311680+_0x1748e8(0xe5);await Module[_0x1748e8(0xf3)](_0xb83082),await Module[_0x1748e8(0xe7)]();const _0x49af2c=await fileToBase64(Module[_0x1748e8(0xf0)](_0x1748e8(0xb6)+_0xb83082)),_0x2cdf42=embedTextInPngFile(_0x49af2c,formatDateTime(Date[_0x1748e8(0xad)]()),_0xb83082);Module[_0x1748e8(0xa4)](_0x2cdf42,()=>{localStorageFile(),Module['FSSync']();});}export async function dowloadScreenShot(_0x481bbc){const _0x544123=a0_0x2e8e88;try{const _0x413dcd=await fileToBase64(Module[_0x544123(0xf0)](_0x481bbc));return _0x413dcd;}catch{}}export async function captureOCR(_0x285dc6){const _0x104d24=a0_0x2e8e88;Module[_0x104d24(0xf3)](_0x285dc6);const _0x19c5e3=Module[_0x104d24(0xf0)](_0x104d24(0xb6)+_0x285dc6);return _0x19c5e3;}export async function setFastForwardMultiplier(_0x3c8a69){const _0xad59c5=a0_0x2e8e88;Module[_0xad59c5(0xca)](_0x3c8a69);}export function uploadCheats(_0x1647f7,_0x2e4678,_0x55dc20,_0x218696,_0x41caa4){const _0x3ff3dc=a0_0x2e8e88;Module[_0x3ff3dc(0xa4)](_0x1647f7,()=>{const _0x29c2d3=_0x3ff3dc;Module[_0x29c2d3(0xbd)](),setTimeout(()=>{Module['FSSync']();},0x1f4),_0x218696&&(localStorage['setItem'](_0x2e4678+_0x29c2d3(0xf7),_0x55dc20),notiMessage(_0x29c2d3(0xed),0x5dc)),_0x41caa4[_0x29c2d3(0xb9)]=localStorage[_0x29c2d3(0xfa)](_0x2e4678+_0x29c2d3(0xf7)||_0x29c2d3(0xeb));});}export function setVolume(_0x5c0444){const _0x997990=a0_0x2e8e88;Module[_0x997990(0xcd)](_0x5c0444);}