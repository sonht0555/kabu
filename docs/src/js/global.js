const a0_0x9920d3=a0_0x66b7;(function(_0x2ea580,_0x480eb6){const _0x5e6271=a0_0x66b7,_0x574873=_0x2ea580();while(!![]){try{const _0xdfee66=-parseInt(_0x5e6271(0x122))/0x1*(parseInt(_0x5e6271(0xd8))/0x2)+parseInt(_0x5e6271(0xb0))/0x3*(parseInt(_0x5e6271(0x102))/0x4)+parseInt(_0x5e6271(0xc5))/0x5*(parseInt(_0x5e6271(0xe3))/0x6)+parseInt(_0x5e6271(0xc2))/0x7*(parseInt(_0x5e6271(0xf3))/0x8)+parseInt(_0x5e6271(0x109))/0x9*(parseInt(_0x5e6271(0xcb))/0xa)+parseInt(_0x5e6271(0xc6))/0xb+-parseInt(_0x5e6271(0xd4))/0xc*(parseInt(_0x5e6271(0xfb))/0xd);if(_0xdfee66===_0x480eb6)break;else _0x574873['push'](_0x574873['shift']());}catch(_0x3ff165){_0x574873['push'](_0x574873['shift']());}}}(a0_0x1a24,0x2724d),appVer[a0_0x9920d3(0xed)]=gameVer);function a0_0x66b7(_0x1e8ec3,_0x1fbd52){const _0x1a24c8=a0_0x1a24();return a0_0x66b7=function(_0x66b737,_0x4b479a){_0x66b737=_0x66b737-0xad;let _0x2b1856=_0x1a24c8[_0x66b737];return _0x2b1856;},a0_0x66b7(_0x1e8ec3,_0x1fbd52);}let gameName;var messageTimeout;let stateAdj=0x1;var lockNotiTime;let opacity=parseFloat(localStorage[a0_0x9920d3(0x11f)]('opacity'))||0.1;const errorLogElements=document[a0_0x9920d3(0xf9)]('errorLog'),ingame=document['getElementById'](a0_0x9920d3(0xb4)),input=document[a0_0x9920d3(0x107)](a0_0x9920d3(0xb2)),romList=document[a0_0x9920d3(0x107)](a0_0x9920d3(0xbd)),romInput=document[a0_0x9920d3(0x107)](a0_0x9920d3(0xb6)),setAdjustment=document[a0_0x9920d3(0x107)]('setAdjustment'),savedStateAdj=localStorage['getItem'](a0_0x9920d3(0xff)),ids=[a0_0x9920d3(0xb2),a0_0x9920d3(0xbb),a0_0x9920d3(0x127),a0_0x9920d3(0xba),a0_0x9920d3(0xf2),a0_0x9920d3(0xcc),a0_0x9920d3(0xdb),a0_0x9920d3(0x10b),a0_0x9920d3(0xdd)],touchedID=['saveStateButton',a0_0x9920d3(0xf5),a0_0x9920d3(0xde),a0_0x9920d3(0xd3),a0_0x9920d3(0xc8),''];var dynamicZone=document[a0_0x9920d3(0x107)](a0_0x9920d3(0xc3)),nippleOptions={'zone':dynamicZone,'color':a0_0x9920d3(0x11e),'size':0x78},dynamic=nipplejs[a0_0x9920d3(0xe9)](nippleOptions);function positionAdjustment(_0x1d3a9c){const _0x12a01a=a0_0x9920d3,_0x1b25e8=[{'paddingTop':_0x12a01a(0x114),'rectOpacity':[0x1,0x1,0x1],'GOpacity':[0x0,0x0,0x0,0x1]},{'paddingTop':'60px','rectOpacity':[0.4,0x1,0x1],'GOpacity':[0x0,0x0,0x1,0x0]},{'paddingTop':_0x12a01a(0xbf),'rectOpacity':[0.4,0.4,0x1],'GOpacity':[0x0,0x1,0x0,0x0]},{'paddingTop':_0x12a01a(0xcd),'rectOpacity':[0.4,0.4,0.4],'GOpacity':[0x1,0x0,0x0,0x0]}];if(_0x1d3a9c>=0x1&&_0x1d3a9c<=0x4){const _0x4ca288=_0x1b25e8[_0x1d3a9c-0x1];document[_0x12a01a(0x101)](_0x12a01a(0x10a))['forEach'](function(_0x5ada2d,_0x53e33e){const _0x452307=_0x12a01a;_0x5ada2d[_0x452307(0xc4)][_0x452307(0x111)](_0x452307(0xd0),_0x4ca288[_0x452307(0xfa)]);}),document['getElementById'](_0x12a01a(0xb7))[_0x12a01a(0xc4)][_0x12a01a(0x111)](_0x12a01a(0xef),_0x4ca288[_0x12a01a(0x11c)][0x0]),document[_0x12a01a(0x107)](_0x12a01a(0xeb))[_0x12a01a(0xc4)][_0x12a01a(0x111)]('opacity',_0x4ca288[_0x12a01a(0x11c)][0x1]),document[_0x12a01a(0x107)](_0x12a01a(0x108))['style'][_0x12a01a(0x111)](_0x12a01a(0xef),_0x4ca288['rectOpacity'][0x2]);for(let _0x7b2715=0x0;_0x7b2715<0x4;_0x7b2715++){document[_0x12a01a(0x107)]('G'+_0x7b2715)[_0x12a01a(0xc4)][_0x12a01a(0x111)](_0x12a01a(0xef),_0x4ca288[_0x12a01a(0xd2)][_0x7b2715]);}}}ingame[a0_0x9920d3(0x113)]=_0x5352ba=>{_0x5352ba['preventDefault']();},setAdjustment[a0_0x9920d3(0xbe)](a0_0x9920d3(0xe1),function(){const _0x1d5779=a0_0x9920d3;stateAdj=stateAdj%0x4+0x1,positionAdjustment(stateAdj),localStorage[_0x1d5779(0xae)]('stateAdj',stateAdj);}),ids[a0_0x9920d3(0x117)](function(_0x22f90a){const _0x224a98=a0_0x9920d3;var _0x5a18f0=document[_0x224a98(0x107)](_0x22f90a);_0x5a18f0&&_0x5a18f0[_0x224a98(0x120)](_0x224a98(0x113),_0x224a98(0x125));}),touchedID[a0_0x9920d3(0x117)](function(_0x391d12){const _0x52ef9d=a0_0x9920d3,_0x52863c=document[_0x52ef9d(0x107)](_0x391d12);_0x52863c&&(_0x391d12===_0x52ef9d(0xc1)||_0x391d12==='loadStateButton'?(_0x52863c[_0x52ef9d(0xbe)]('touchstart',function(){_0x52863c['classList']['add']('touched-1');}),_0x52863c[_0x52ef9d(0xbe)](_0x52ef9d(0x106),function(){const _0x152aeb=_0x52ef9d;_0x52863c[_0x152aeb(0xc0)][_0x152aeb(0xd6)](_0x152aeb(0xb3));})):(_0x52863c[_0x52ef9d(0xbe)](_0x52ef9d(0xf4),function(){const _0x19f930=_0x52ef9d;_0x52863c[_0x19f930(0xc0)][_0x19f930(0x110)]('touched');}),_0x52863c[_0x52ef9d(0xbe)]('touchend',function(){const _0x112591=_0x52ef9d;_0x52863c[_0x112591(0xc0)][_0x112591(0xd6)](_0x112591(0xfd));})));}),interact(a0_0x9920d3(0x100))[a0_0x9920d3(0xce)]({'edges':{'top':!![],'left':!![],'right':!![],'bottom':!![]},'modifiers':[interact[a0_0x9920d3(0xf1)]['restrictEdges']({'outer':a0_0x9920d3(0xaf)}),interact[a0_0x9920d3(0xf1)]['restrictSize']({'min':{'width':0x32,'height':0x14}})],'listeners':{'move'(_0x1d5120){const _0x332538=a0_0x9920d3,_0x40eb08=_0x1d5120['target'],_0x9e286e=(parseFloat(_0x40eb08[_0x332538(0xea)](_0x332538(0x119)))||0x0)+_0x1d5120[_0x332538(0x11b)][_0x332538(0xb9)],_0x18f02b=(parseFloat(_0x40eb08[_0x332538(0xea)](_0x332538(0xfc)))||0x0)+_0x1d5120['deltaRect'][_0x332538(0x104)];_0x40eb08[_0x332538(0xc4)]['width']=_0x1d5120['rect'][_0x332538(0xdf)]+'px',_0x40eb08['style'][_0x332538(0xd1)]=_0x1d5120[_0x332538(0x124)]['height']+'px',_0x40eb08[_0x332538(0xc4)][_0x332538(0x112)]=_0x332538(0xf8)+_0x9e286e+_0x332538(0x121)+_0x18f02b+_0x332538(0xfe),_0x40eb08[_0x332538(0x120)]('data-x',_0x9e286e),_0x40eb08[_0x332538(0x120)]('data-y',_0x18f02b),localStorage[_0x332538(0xae)](gameName+_0x332538(0xee),_0x9e286e['toFixed'](0x0)+','+_0x18f02b['toFixed'](0x0)+','+_0x1d5120[_0x332538(0x124)][_0x332538(0xdf)]['toFixed'](0x0)+','+_0x1d5120[_0x332538(0x124)][_0x332538(0xd1)][_0x332538(0x118)](0x0)),console['log'](localStorage['getItem'](gameName+_0x332538(0xee)));}}});function a0_0x1a24(){const _0x22add9=['width','innerText','click','padStart','1823748bZgJpC','unknown\x20source','lockNoti','change','led06','led02','create','getAttribute','rect2','notiTitle','textContent','_setArea','opacity','target','modifiers','stateDiv03','680gZstaI','touchstart','loadStateButton','color','image/png','translate(','getElementsByClassName','paddingTop','13XKXKJy','data-y','touched','px)','stateAdj','#resizable-draggable','querySelectorAll','64WUcpox','Error\x20Led:','top','split','touchend','getElementById','rect3','18xQSXVl','.target-boxes','stateDiv06','log',']\x20../','touchcancel','scrollTop','add','setProperty','transform','ontouchstart','0px','getMonth','readAsDataURL','forEach','toFixed','data-x','led01','deltaRect','rectOpacity','led05','#2F2F2F','getItem','setAttribute','px,\x20','2sglkBj','onloadend','rect','event.stopPropagation()','visible','stateDiv01','contains','setItem','parent','30252XWOVGa','fill','inputText','touched-1','in-game','rgba(245,\x20232,\x20209,\x200.4)','fileInput','rect1','led04','left','stateDiv02','stateDiv00','pop','rom-list','addEventListener','120px','classList','saveStateButton','11711OnPNwW','dynamic','style','5UrYLfp','404965nyIvJY','onerror','backToHome','led07','error','1149740qoqpQw','stateDiv04','180px','resizable','map','padding-top','height','GOpacity','upLoadFile','8215476yyEEiV','name','remove','length','29314hzrJzC','files','\x0a---\x0a','stateDiv05','replace','stateDiv07','openLocalStorage'];a0_0x1a24=function(){return _0x22add9;};return a0_0x1a24();}function restoreArea(){const _0x3e182c=a0_0x9920d3,_0x228222=localStorage[_0x3e182c(0x11f)](gameName+_0x3e182c(0xee))||localStorage[_0x3e182c(0x11f)]('screenSize');if(_0x228222){const [_0xe2721c,_0x48d5c8,_0x52bcba,_0x838237]=_0x228222[_0x3e182c(0x105)](',')[_0x3e182c(0xcf)](Number),_0x24f519=document['getElementById']('resizable-draggable');_0x24f519['style']['width']=_0x52bcba+'px',_0x24f519[_0x3e182c(0xc4)][_0x3e182c(0xd1)]=_0x838237+'px',_0x24f519[_0x3e182c(0xc4)][_0x3e182c(0x112)]=_0x3e182c(0xf8)+_0xe2721c+'px,\x20'+_0x48d5c8+_0x3e182c(0xfe),_0x24f519['setAttribute'](_0x3e182c(0x119),_0xe2721c),_0x24f519['setAttribute'](_0x3e182c(0xfc),_0x48d5c8);}}async function delay(_0x2aa725){return new Promise(_0x8f8123=>setTimeout(_0x8f8123,_0x2aa725));}async function led(_0x468a22){const _0x3a6ff6=a0_0x9920d3;try{const _0x249606=[{'id':'led00','color':_0x3a6ff6(0xb5)},{'id':_0x3a6ff6(0x11a),'color':_0x3a6ff6(0xb5)},{'id':_0x3a6ff6(0xe8),'color':_0x3a6ff6(0xb5)},{'id':'led03','color':'rgba(245,\x20232,\x20209,\x200.4)'},{'id':_0x3a6ff6(0xb8),'color':'rgba(245,\x20232,\x20209,\x200.4)'},{'id':_0x3a6ff6(0x11d),'color':'rgba(245,\x20232,\x20209,\x200.4)'},{'id':_0x3a6ff6(0xe7),'color':'rgba(245,\x20232,\x20209,\x200.4)'},{'id':_0x3a6ff6(0xc9),'color':'rgba(245,\x20232,\x20209,\x200.4)'}];if(_0x468a22>=0x0&&_0x468a22<_0x249606[_0x3a6ff6(0xd7)]){const _0x5ad433='#20A5A6';_0x249606[_0x3a6ff6(0x117)]((_0x3c0710,_0x11fd2e)=>{const _0x346f8c=_0x3a6ff6;document['getElementById'](_0x3c0710['id'])[_0x346f8c(0xc4)][_0x346f8c(0xb1)]=_0x11fd2e===_0x468a22?_0x5ad433:_0x3c0710[_0x346f8c(0xf6)];});}}catch(_0x463b33){console[_0x3a6ff6(0xca)](_0x3a6ff6(0x103),_0x463b33);}}function formatDateTime(_0x1301b1){const _0x5de0db=a0_0x9920d3,_0x267c0c=new Date(_0x1301b1),_0x78c81a=String(_0x267c0c['getHours']())[_0x5de0db(0xe2)](0x2,'0'),_0x1e7ceb=String(_0x267c0c['getMinutes']())[_0x5de0db(0xe2)](0x2,'0'),_0x59f1eb=_0x267c0c['getDate'](),_0x5374a3=_0x267c0c[_0x5de0db(0x115)]()+0x1;return _0x78c81a+':'+_0x1e7ceb+'\x20'+_0x59f1eb+'.'+_0x5374a3;}async function fileToBase64(_0x58c079){const _0x264a1b=a0_0x9920d3,_0x555a10=new Blob([_0x58c079],{'type':_0x264a1b(0xf7)}),_0x2eb5eb=await new Promise((_0x4c1c75,_0x203307)=>{const _0x2e893c=_0x264a1b,_0x6d3187=new FileReader();_0x6d3187[_0x2e893c(0x123)]=()=>{_0x4c1c75(_0x6d3187['result']);},_0x6d3187['onerror']=_0x203307,_0x6d3187[_0x2e893c(0x116)](_0x555a10);});return _0x2eb5eb;}async function lockNoti(_0x571320,_0x4f341b,_0x2d2cac){const _0x1923f5=a0_0x9920d3,_0x351a18=document[_0x1923f5(0x107)](_0x1923f5(0xe5)),_0x176cb5=document[_0x1923f5(0x107)](_0x1923f5(0xec)),_0x521797=document[_0x1923f5(0x107)]('notiDetail');lockNotiTime&&clearTimeout(lockNotiTime),_0x176cb5[_0x1923f5(0xed)]=_0x571320,_0x521797[_0x1923f5(0xed)]=_0x4f341b,_0x351a18[_0x1923f5(0xc0)][_0x1923f5(0xd6)](_0x1923f5(0x126)),lockNotiTime=setTimeout(()=>{const _0x234822=_0x1923f5;_0x351a18[_0x234822(0xc0)][_0x234822(0x110)](_0x234822(0x126));},_0x2d2cac);}function logError(_0x22be11){const _0x9b694f=a0_0x9920d3;if(errorLogElements[_0x9b694f(0xd7)]>0x0){const _0x56e65e=errorLogElements[0x0];_0x56e65e[_0x9b694f(0xe0)]+=_0x22be11+_0x9b694f(0xda),_0x56e65e[_0x9b694f(0x10f)]=_0x56e65e['scrollHeight'];}}window[a0_0x9920d3(0xc7)]=function(_0x2b3a7f,_0x2e1da5,_0x4e8e80){const _0x35f361=a0_0x9920d3,_0x29d5cb=_0x2e1da5?_0x2e1da5[_0x35f361(0x105)]('/')[_0x35f361(0xbc)]():_0x35f361(0xe4),_0xd30ef2=_0x2b3a7f[_0x35f361(0xdc)](/^(Uncaught\s(?:ReferenceError|Error|TypeError|SyntaxError|RangeError):?\s*)/i,''),_0x458219='[Err]\x20['+_0x4e8e80+_0x35f361(0x10d)+_0x29d5cb+'\x20|\x20'+_0xd30ef2+'.';return logError(_0x458219),![];},document['addEventListener']('DOMContentLoaded',function(){const _0x48e76d=a0_0x9920d3;savedStateAdj!==null&&(stateAdj=parseInt(savedStateAdj),positionAdjustment(stateAdj)),['mouseup','touchend',_0x48e76d(0x10e)]['forEach'](_0x3c624d=>{const _0x7a6281=_0x48e76d;romInput[_0x7a6281(0xbe)](_0x7a6281(0xe6),()=>{const _0x506291=_0x7a6281;fileInput['files'][_0x506291(0xd7)]>0x0&&(gameName=fileInput[_0x506291(0xd9)][0x0][_0x506291(0xd5)],console[_0x506291(0x10c)](gameName));}),romList[_0x7a6281(0xbe)](_0x3c624d,_0x15cf08=>{const _0x31b212=_0x7a6281,_0x9633f=_0x15cf08[_0x31b212(0xf0)];_0x9633f[_0x31b212(0xc0)][_0x31b212(0xad)]('game-item')&&(gameName=_0x9633f['textContent'],console['log'](gameName));});});});