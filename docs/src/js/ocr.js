const a0_0x3dcb10=a0_0x3aae;function a0_0x3aae(_0x542813,_0x4c02a8){const _0x3415ec=a0_0x3415();return a0_0x3aae=function(_0x3aaef4,_0xb657ad){_0x3aaef4=_0x3aaef4-0x1c6;let _0x5e04c6=_0x3415ec[_0x3aaef4];return _0x5e04c6;},a0_0x3aae(_0x542813,_0x4c02a8);}(function(_0x2f8900,_0x154df5){const _0x11a0c7=a0_0x3aae,_0x1e40f7=_0x2f8900();while(!![]){try{const _0x118470=parseInt(_0x11a0c7(0x1d4))/0x1+parseInt(_0x11a0c7(0x1ef))/0x2+-parseInt(_0x11a0c7(0x21a))/0x3+-parseInt(_0x11a0c7(0x1da))/0x4*(parseInt(_0x11a0c7(0x20a))/0x5)+-parseInt(_0x11a0c7(0x1e4))/0x6+parseInt(_0x11a0c7(0x1fc))/0x7+-parseInt(_0x11a0c7(0x1d0))/0x8*(-parseInt(_0x11a0c7(0x1e1))/0x9);if(_0x118470===_0x154df5)break;else _0x1e40f7['push'](_0x1e40f7['shift']());}catch(_0x394b86){_0x1e40f7['push'](_0x1e40f7['shift']());}}}(a0_0x3415,0x853b9));import*as a0_0x558b8f from'./main.js';var scrollAmount=0x0,scrollSpeed=0.5,runCount=0x0;let isFunctionARunning=![];var maxRunCount=0x2;let clickTurbo=0x0,clickTimeout;const inputText=document['getElementById']('inputText'),input=document[a0_0x3dcb10(0x1e5)](a0_0x3dcb10(0x20f)),turbo=document[a0_0x3dcb10(0x1e5)](a0_0x3dcb10(0x1d9)),ID=['A','B','R','L'];async function getImage(){const _0x3c07a0=a0_0x3dcb10;turbo[_0x3c07a0(0x20d)][_0x3c07a0(0x21d)](_0x3c07a0(0x211));try{const _0xdcd011=gameName['replace'](/\.(gba|gbc|gb|zip)$/,'.png'),_0x456c4c=await a0_0x558b8f['captureOCR'](_0xdcd011),_0x3ea85b=new Blob([_0x456c4c],{'type':'image/png'}),_0x352d0c=await new Promise((_0x5f4412,_0x397c3b)=>{const _0x2017c6=_0x3c07a0,_0x3e69fc=new FileReader();_0x3e69fc['onloadend']=()=>_0x5f4412(_0x3e69fc[_0x2017c6(0x1c8)]),_0x3e69fc[_0x2017c6(0x201)]=_0x397c3b,_0x3e69fc['readAsDataURL'](_0x3ea85b);}),_0x4aaad2=new Image();_0x4aaad2[_0x3c07a0(0x1fe)]=_0x352d0c,_0x4aaad2['onload']=()=>{const _0x40e472=_0x3c07a0,_0x1a80fe=document[_0x40e472(0x220)]('canvas'),_0xc35160=_0x1a80fe[_0x40e472(0x1ca)]('2d'),_0x205eb4=0x4;let _0x1c6c74;gameName[_0x40e472(0x1d8)](_0x40e472(0x21e))||gameName[_0x40e472(0x1d8)]('.gb')?_0x1c6c74=Math[_0x40e472(0x1d5)](0xa0/(window[_0x40e472(0x1d1)]-0xe6)):_0x1c6c74=Math[_0x40e472(0x1d5)](0xf0/(window[_0x40e472(0x1d1)]-0x96));const _0x3b501e=localStorage[_0x40e472(0x1c6)](gameName+_0x40e472(0x1fd))||localStorage[_0x40e472(0x1c6)]('screenSize'),[_0x788f72,_0x444857,_0x89bd17,_0x363633]=_0x3b501e['split'](',')['map'](Number);_0x1a80fe[_0x40e472(0x1dc)]=_0x89bd17*_0x1c6c74*_0x205eb4,_0x1a80fe['height']=_0x363633*_0x1c6c74*_0x205eb4,_0xc35160[_0x40e472(0x21f)](_0x4aaad2,_0x788f72*_0x1c6c74,_0x444857*_0x1c6c74,_0x89bd17*_0x1c6c74,_0x363633*_0x1c6c74,0x0,0x0,_0x89bd17*_0x1c6c74*_0x205eb4,_0x363633*_0x1c6c74*_0x205eb4);const _0x416828=_0x1a80fe[_0x40e472(0x1fb)](_0x40e472(0x1f6))[_0x40e472(0x209)](',')[0x1],_0x217086=localStorage['getItem'](_0x40e472(0x203));_0x217086?azureServer(_0x416828):freeServer(_0x416828);};}catch(_0x4984c1){inputText['textContent']=_0x4984c1['message'];}clickTimeout&&clearTimeout(clickTimeout),clickTimeout=setTimeout(()=>{const _0x426cd0=_0x3c07a0;document['getElementById'](_0x426cd0(0x221))[_0x426cd0(0x208)]=_0x426cd0(0x205);},0x7530);}async function freeServer(_0x3bafed){const _0x21ccf4=a0_0x3dcb10;let _0x2d642b=0x0;const _0x5c8d22=setInterval(()=>{const _0x1775b6=a0_0x3aae;_0x2d642b+=0x1,_0x2d642b<=0x64&&(inputText[_0x1775b6(0x208)]=_0x1775b6(0x1f7)+_0x2d642b+'%');},0x64);try{const _0x52ee96=dataURItoBlob(_0x3bafed),_0x2cd05c=new FormData();_0x2cd05c[_0x21ccf4(0x1f0)](_0x21ccf4(0x1c7),_0x52ee96,_0x21ccf4(0x1ed)),_0x2cd05c[_0x21ccf4(0x1f0)]('user',_0x21ccf4(0x210));let _0x3edc34;try{_0x3edc34=await fetch(_0x21ccf4(0x1ec),{'method':_0x21ccf4(0x1cc),'body':_0x2cd05c,'headers':{'Origin':window[_0x21ccf4(0x1db)][_0x21ccf4(0x207)],'X-Requested-With':_0x21ccf4(0x1eb),'User-Agent':navigator[_0x21ccf4(0x1ff)]}});if(!_0x3edc34['ok'])throw new Error(_0x21ccf4(0x1f9)+_0x3edc34[_0x21ccf4(0x1dd)]);}catch(_0x1b9477){console[_0x21ccf4(0x21b)](_0x21ccf4(0x1cb)),window[_0x21ccf4(0x1db)][_0x21ccf4(0x1f5)]=_0x21ccf4(0x212);return;}const _0x14f148=await _0x3edc34['json']();if(_0x14f148[_0x21ccf4(0x21c)]===_0x21ccf4(0x1d2))throw new Error(_0x14f148[_0x21ccf4(0x1d2)]['message']);transLogic(_0x14f148[_0x21ccf4(0x1ce)]);}catch(_0x179816){inputText[_0x21ccf4(0x208)]=_0x179816[_0x21ccf4(0x1df)];}finally{clearInterval(_0x5c8d22),isFunctionARunning=![];}}async function azureServer(_0x27af2d){const _0x3b3e27=a0_0x3dcb10;inputText[_0x3b3e27(0x208)]='...';const _0x50cdb0=localStorage[_0x3b3e27(0x1c6)](_0x3b3e27(0x203));let [_0x10c775,_0x490423,_0x2424ad]=_0x50cdb0[_0x3b3e27(0x209)](',');_0x2424ad=parseInt(_0x2424ad);const _0x191ce7=new Date(),_0x3a9143=_0x191ce7[_0x3b3e27(0x1d7)](),_0x5449ef=_0x191ce7[_0x3b3e27(0x1f8)](),_0x326ac5=localStorage[_0x3b3e27(0x1c6)](_0x3b3e27(0x1f3)),_0x3a21a6=_0x326ac5?new Date(_0x326ac5):null;_0x3a21a6&&(_0x3a9143!==_0x3a21a6[_0x3b3e27(0x1d7)]()||_0x5449ef!==_0x3a21a6[_0x3b3e27(0x1f8)]())&&(_0x2424ad=0x0,localStorage[_0x3b3e27(0x1d3)]('lastSavedDate',_0x191ce7[_0x3b3e27(0x1fa)]()));if(_0x2424ad>=0x1356){inputText['textContent']=_0x3b3e27(0x222);return;}try{const _0x4992a8=await fetch(_0x490423+_0x3b3e27(0x1f4),{'method':_0x3b3e27(0x1cc),'headers':{'Ocp-Apim-Subscription-Key':_0x10c775,'Content-Type':_0x3b3e27(0x1e7)},'body':dataURItoBlob(_0x27af2d)}),_0x509d1b=await _0x4992a8[_0x3b3e27(0x1e0)]();if(!_0x4992a8['ok']||_0x509d1b[_0x3b3e27(0x21c)]===_0x3b3e27(0x1d2)){const _0xad5dc1=_0x4992a8['ok']?_0x509d1b[_0x3b3e27(0x1d2)][_0x3b3e27(0x1df)]:_0x4992a8[_0x3b3e27(0x1dd)]===0x1f4?_0x3b3e27(0x1ee):(await _0x4992a8['json']())[_0x3b3e27(0x1d2)][_0x3b3e27(0x1df)];throw new Error(_0xad5dc1);}const _0x4464eb=_0x509d1b['readResult'][_0x3b3e27(0x1e2)][0x0],_0x2d5804=_0x4464eb[_0x3b3e27(0x1de)]||[],_0x483510=_0x2d5804[_0x3b3e27(0x1e3)](_0x18464b=>_0x18464b[_0x3b3e27(0x1ce)])['join']('\x0a');transLogic(_0x483510);}catch(_0xe44a1d){inputText[_0x3b3e27(0x208)]=_0xe44a1d[_0x3b3e27(0x1df)];const _0x4a1d9d=++_0x2424ad;a0_0x558b8f[_0x3b3e27(0x1e9)]('['+_0x4a1d9d+_0x3b3e27(0x202),0x7d0),localStorage['setItem'](_0x3b3e27(0x203),_0x10c775+','+_0x490423+','+_0x4a1d9d),localStorage[_0x3b3e27(0x1d3)](_0x3b3e27(0x1f3),_0x191ce7[_0x3b3e27(0x1fa)]());}finally{const _0x233bf6=++_0x2424ad;a0_0x558b8f[_0x3b3e27(0x1e9)]('['+_0x233bf6+_0x3b3e27(0x202),0x7d0),isFunctionARunning=![],localStorage[_0x3b3e27(0x1d3)](_0x3b3e27(0x203),_0x10c775+','+_0x490423+','+_0x233bf6),localStorage[_0x3b3e27(0x1d3)](_0x3b3e27(0x1f3),_0x191ce7[_0x3b3e27(0x1fa)]());}}function a0_0x3415(){const _0x1df26a=['userAgent','clientWidth','onerror',']\x20Times\x20Azure','ApiAzure','join','...','random','origin','textContent','split','576885QpLpZh','addEventListener','scrollWidth','classList','$1\x20','input-container','00c7b1f2-0d6b-4e7b-9b0b-0b6c00c7b1f2','turbo-ocr','https://cors-anywhere.herokuapp.com/corsdemo','length','touchend','forEach','DOMContentLoaded','Internal\x20Server\x20Error','&tl=','visible','2040936sdySUC','warn','type','add','.gbc','drawImage','createElement','inputText','Used\x20more\x20than\x204950\x20times.\x20Continue\x20using\x20next\x20month.','getItem','image','result','isArray','getContext','CORS-Anywhere\x20chưa\x20được\x20kích\x20hoạt.\x20Mở\x20/corsdemo...','POST','backgroundPositionX','text','replace','3032ZtrzIw','innerWidth','error','setItem','232052xZMVUc','round','toggle','getMonth','endsWith','turbo','16UDDxVI','location','width','status','lines','message','json','12033cFgReo','blocks','map','3493620PkvPVG','getElementById','floor','application/octet-stream','https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&dt=ld&q=','notiMessage','&dt=t&q=','XMLHttpRequest','https://cors-anywhere.herokuapp.com/http://158.160.66.115:40000/image_to_text','image.png','500\x20Internal\x20Server\x20Error','1008934OZGhNH','append','https://translate.googleapis.com/translate_a/single?client=gtx&sl=','scrollLeft','lastSavedDate','imageanalysis:analyze?features=caption,read&model-version=latest&api-version=2024-02-01','href','image/png','Waiting..','getFullYear','HTTP\x20Error:\x20','toISOString','toDataURL','7185983JaWdkb','_setArea','src'];a0_0x3415=function(){return _0x1df26a;};return a0_0x3415();}async function translateText(_0xb7516c,_0x30e283,_0x20677f){const _0x41ea28=a0_0x3dcb10,_0x170cde=_0xb7516c[_0x41ea28(0x1cf)](/[\r\n]+/g,',\x20')[_0x41ea28(0x1cf)](/([!?.,])\s*,\s*/g,_0x41ea28(0x20e))['replace'](/[^\p{L}\p{N}\s.,;'"?!()]+/gu,'')[_0x41ea28(0x1cf)](/ {2,}/g,'\x20')['trim']();var _0xa4ea09=_0x41ea28(0x1f1)+_0x30e283+_0x41ea28(0x218)+_0x20677f+_0x41ea28(0x1ea)+encodeURIComponent(_0x170cde);try{const _0x38df5d=await fetch(_0xa4ea09);if(!_0x38df5d['ok']){if(_0x38df5d[_0x41ea28(0x1dd)]===0x1f4)throw new Error(_0x41ea28(0x217));else{const _0x447ed3=await _0x38df5d[_0x41ea28(0x1e0)](),_0x4739d3=new Error(_0x447ed3[_0x41ea28(0x1d2)][_0x41ea28(0x1df)]);_0x4739d3['code']=_0x447ed3[_0x41ea28(0x1d2)]['code'];throw _0x4739d3;}}const _0xbc17c3=await _0x38df5d['json']();if(Array[_0x41ea28(0x1c9)](_0xbc17c3)&&_0xbc17c3[_0x41ea28(0x213)]>0x0&&Array[_0x41ea28(0x1c9)](_0xbc17c3[0x0])){var _0x2fc7a0=_0xbc17c3[0x0][_0x41ea28(0x1e3)](_0x4997b7=>_0x4997b7[0x0])[_0x41ea28(0x204)]('\x20');return inputText[_0x41ea28(0x208)]=_0x2fc7a0['replace'](/ {2,}/g,'\x20'),setTimeout(()=>{startAutoScroll();},0x7d0),_0x2fc7a0['replace'](/ {2,}/g,'\x20');}else return inputText[_0x41ea28(0x208)]=_0xbc17c3,_0xbc17c3;}catch(_0x2d58ff){inputText['textContent']=_0x2d58ff['message'];throw _0x2d58ff;}}async function autoScroll(){const _0x2631ac=a0_0x3dcb10;var _0x1d40d3=inputText[_0x2631ac(0x20c)]-inputText[_0x2631ac(0x200)];if(runCount>=maxRunCount)return;scrollAmount+=scrollSpeed,(scrollAmount>=_0x1d40d3||scrollAmount<=0x0)&&(scrollSpeed=-scrollSpeed,runCount++),inputText[_0x2631ac(0x1f2)]=scrollAmount,requestAnimationFrame(autoScroll);}async function startAutoScroll(){scrollAmount=0x0,runCount=0x0,scrollSpeed=0.5,autoScroll();}async function detectLanguage(_0x27e756){const _0x8497d4=a0_0x3dcb10;var _0x237765=_0x8497d4(0x1e8)+encodeURIComponent(_0x27e756);try{const _0x32c0fc=await fetch(_0x237765),_0x4f1955=await _0x32c0fc['json']();var _0x2dad8c=_0x4f1955[0x8][0x0][0x0];return _0x2dad8c;}catch(_0x22a90c){console[_0x8497d4(0x1d2)]('Error\x20detecting\x20language:',_0x22a90c);throw _0x22a90c;}}async function transLogic(_0x180920){const _0x5d8d7d='en';if(_0x5d8d7d===null){const _0xf95343=await detectLanguage(_0x180920),_0x51c441=await translateText(_0x180920,_0xf95343,'en');return translateText(_0x51c441,'en','vi');}else{if(_0x5d8d7d==='en')return translateText(_0x180920,'en','vi');else{const _0x8108ee=await translateText(_0x180920,_0x5d8d7d,'en');return translateText(_0x8108ee,'en','vi');}}}function dataURItoBlob(_0x49b44a){const _0x1ddac8=a0_0x3dcb10,_0x4d374b=atob(_0x49b44a),_0xc3e51c=new ArrayBuffer(_0x4d374b['length']),_0x1b9206=new Uint8Array(_0xc3e51c);for(let _0x3ac1be=0x0;_0x3ac1be<_0x4d374b[_0x1ddac8(0x213)];_0x3ac1be++){_0x1b9206[_0x3ac1be]=_0x4d374b['charCodeAt'](_0x3ac1be);}return new Blob([_0xc3e51c],{'type':_0x1ddac8(0x1f6)});}function logoOcr(){const _0x34db0f=a0_0x3dcb10;var _0x7aad06=Math[_0x34db0f(0x1e6)](Math[_0x34db0f(0x206)]()*0x3)+0x1,_0x174197=-0xf*_0x7aad06+'px';document[_0x34db0f(0x1e5)]('logoOcr')['style'][_0x34db0f(0x1cd)]=_0x174197;}document['addEventListener'](a0_0x3dcb10(0x216),function(){const _0x16e776=a0_0x3dcb10;ID[_0x16e776(0x215)](function(_0x52aa70){const _0x102983=_0x16e776,_0x550845=document[_0x102983(0x1e5)](_0x52aa70);_0x550845&&_0x550845[_0x102983(0x20b)]('touchstart',function(){const _0xd0e091=_0x102983;!isFunctionARunning&&turbo[_0xd0e091(0x20d)]['remove'](_0xd0e091(0x211));});}),[_0x16e776(0x214)][_0x16e776(0x215)](_0x52c628=>{const _0x248508=_0x16e776;turbo[_0x248508(0x20b)](_0x52c628,()=>{clickTurbo++,clearTimeout(clickTimeout),clickTimeout=setTimeout(()=>{clickTurbo===0x1&&(!isFunctionARunning&&(isFunctionARunning=!![],getImage(),logoOcr())),clickTurbo=0x0;},0x12c);}),areaSet[_0x248508(0x20b)](_0x52c628,()=>{const _0x580cd1=_0x248508;areaTrans['classList'][_0x580cd1(0x1d6)](_0x580cd1(0x219));});});});