const a0_0x56a253=a0_0x21c7;(function(_0x264a8b,_0x44f170){const _0x4aebdd=a0_0x21c7,_0x8f171=_0x264a8b();while(!![]){try{const _0x131909=-parseInt(_0x4aebdd(0x15e))/0x1*(-parseInt(_0x4aebdd(0x184))/0x2)+parseInt(_0x4aebdd(0x176))/0x3*(-parseInt(_0x4aebdd(0x13a))/0x4)+parseInt(_0x4aebdd(0x169))/0x5+parseInt(_0x4aebdd(0x168))/0x6*(parseInt(_0x4aebdd(0x16a))/0x7)+-parseInt(_0x4aebdd(0x15d))/0x8*(parseInt(_0x4aebdd(0x139))/0x9)+-parseInt(_0x4aebdd(0x16d))/0xa*(-parseInt(_0x4aebdd(0x12c))/0xb)+parseInt(_0x4aebdd(0x150))/0xc*(-parseInt(_0x4aebdd(0x174))/0xd);if(_0x131909===_0x44f170)break;else _0x8f171['push'](_0x8f171['shift']());}catch(_0x97a301){_0x8f171['push'](_0x8f171['shift']());}}}(a0_0xb590,0x21e69),appVer[a0_0x56a253(0x17f)]=gameVer);let gameName;var messageTimeout;let stateAdj=0x1;var lockNotiTime;let opacity=parseFloat(localStorage[a0_0x56a253(0x126)](a0_0x56a253(0x17d)))||0.1;const errorLogElements=document[a0_0x56a253(0x145)](a0_0x56a253(0x11a)),ingame=document[a0_0x56a253(0x188)]('in-game'),input=document[a0_0x56a253(0x188)]('inputText'),romList=document[a0_0x56a253(0x188)](a0_0x56a253(0x15c)),romInput=document[a0_0x56a253(0x188)]('fileInput'),setAdjustment=document[a0_0x56a253(0x188)](a0_0x56a253(0x17c)),savedStateAdj=localStorage['getItem'](a0_0x56a253(0x11d)),ids=[a0_0x56a253(0x166),'stateDiv00',a0_0x56a253(0x128),a0_0x56a253(0x12d),a0_0x56a253(0x12e),a0_0x56a253(0x17b),a0_0x56a253(0x16e),a0_0x56a253(0x173),a0_0x56a253(0x124)],touchedID=[a0_0x56a253(0x160),a0_0x56a253(0x141),a0_0x56a253(0x14a),a0_0x56a253(0x112),a0_0x56a253(0x146),''];var dynamicZone=document[a0_0x56a253(0x188)](a0_0x56a253(0x155)),nippleOptions={'zone':dynamicZone,'color':a0_0x56a253(0x122),'size':0x78},dynamic=nipplejs[a0_0x56a253(0x144)](nippleOptions);function a0_0x21c7(_0x5695dd,_0x4d4b68){const _0xb5909=a0_0xb590();return a0_0x21c7=function(_0x21c772,_0x2f90b0){_0x21c772=_0x21c772-0x10b;let _0x52a8d9=_0xb5909[_0x21c772];return _0x52a8d9;},a0_0x21c7(_0x5695dd,_0x4d4b68);}function positionAdjustment(_0x4e592e){const _0x5b2abe=a0_0x56a253,_0x1d6098=[{'paddingTop':'0px','rectOpacity':[0x1,0x1,0x1],'GOpacity':[0x0,0x0,0x0,0x1]},{'paddingTop':_0x5b2abe(0x142),'rectOpacity':[0.4,0x1,0x1],'GOpacity':[0x0,0x0,0x1,0x0]},{'paddingTop':_0x5b2abe(0x135),'rectOpacity':[0.4,0.4,0x1],'GOpacity':[0x0,0x1,0x0,0x0]},{'paddingTop':'180px','rectOpacity':[0.4,0.4,0.4],'GOpacity':[0x1,0x0,0x0,0x0]}];if(_0x4e592e>=0x1&&_0x4e592e<=0x4){const _0x2b0795=_0x1d6098[_0x4e592e-0x1];document['querySelectorAll'](_0x5b2abe(0x12f))[_0x5b2abe(0x136)](function(_0x5da367,_0x27594f){const _0x19f5d4=_0x5b2abe;_0x5da367['style']['setProperty'](_0x19f5d4(0x14e),_0x2b0795[_0x19f5d4(0x134)]);}),document[_0x5b2abe(0x188)](_0x5b2abe(0x157))['style'][_0x5b2abe(0x17a)](_0x5b2abe(0x17d),_0x2b0795[_0x5b2abe(0x11c)][0x0]),document['getElementById']('rect2')['style']['setProperty']('opacity',_0x2b0795[_0x5b2abe(0x11c)][0x1]),document[_0x5b2abe(0x188)]('rect3')[_0x5b2abe(0x137)][_0x5b2abe(0x17a)]('opacity',_0x2b0795['rectOpacity'][0x2]);for(let _0x23f6f0=0x0;_0x23f6f0<0x4;_0x23f6f0++){document[_0x5b2abe(0x188)]('G'+_0x23f6f0)[_0x5b2abe(0x137)]['setProperty']('opacity',_0x2b0795[_0x5b2abe(0x140)][_0x23f6f0]);}}}ingame['ontouchstart']=_0x4c3277=>{const _0x4487c4=a0_0x56a253;_0x4c3277[_0x4487c4(0x161)]();},setAdjustment[a0_0x56a253(0x187)](a0_0x56a253(0x15f),function(){const _0x1f500c=a0_0x56a253;stateAdj=stateAdj%0x4+0x1,positionAdjustment(stateAdj),localStorage[_0x1f500c(0x175)](_0x1f500c(0x11d),stateAdj);}),ids[a0_0x56a253(0x136)](function(_0x17593b){const _0x29041b=a0_0x56a253;var _0x152bea=document['getElementById'](_0x17593b);_0x152bea&&_0x152bea[_0x29041b(0x11e)](_0x29041b(0x158),_0x29041b(0x15a));}),touchedID[a0_0x56a253(0x136)](function(_0x142bc8){const _0x5e09a7=a0_0x56a253,_0x1f21ad=document['getElementById'](_0x142bc8);_0x1f21ad&&(_0x142bc8===_0x5e09a7(0x160)||_0x142bc8===_0x5e09a7(0x141)?(_0x1f21ad[_0x5e09a7(0x187)](_0x5e09a7(0x12a),function(){const _0x83b3f8=_0x5e09a7;_0x1f21ad[_0x83b3f8(0x138)][_0x83b3f8(0x110)](_0x83b3f8(0x13e));}),_0x1f21ad[_0x5e09a7(0x187)](_0x5e09a7(0x143),function(){const _0x5d15e0=_0x5e09a7;_0x1f21ad[_0x5d15e0(0x138)][_0x5d15e0(0x125)](_0x5d15e0(0x13e));})):(_0x1f21ad[_0x5e09a7(0x187)](_0x5e09a7(0x12a),function(){const _0x2aef75=_0x5e09a7;_0x1f21ad['classList'][_0x2aef75(0x110)](_0x2aef75(0x163));}),_0x1f21ad[_0x5e09a7(0x187)](_0x5e09a7(0x143),function(){const _0x1b42c4=_0x5e09a7;_0x1f21ad['classList']['remove'](_0x1b42c4(0x163));})));}),interact('#resizable-draggable')['resizable']({'edges':{'top':!![],'left':!![],'right':!![],'bottom':!![]},'modifiers':[interact['modifiers'][a0_0x56a253(0x123)]({'outer':a0_0x56a253(0x181)}),interact['modifiers'][a0_0x56a253(0x133)]({'min':{'width':0x32,'height':0x14}})],'listeners':{'move'(_0x3a98bb){const _0x337ad7=a0_0x56a253,_0x2d05ab=_0x3a98bb[_0x337ad7(0x148)],_0x677e9a=(parseFloat(_0x2d05ab[_0x337ad7(0x12b)](_0x337ad7(0x14c)))||0x0)+_0x3a98bb['deltaRect'][_0x337ad7(0x186)],_0x3cd5f5=(parseFloat(_0x2d05ab[_0x337ad7(0x12b)]('data-y'))||0x0)+_0x3a98bb[_0x337ad7(0x147)][_0x337ad7(0x153)];_0x2d05ab[_0x337ad7(0x137)][_0x337ad7(0x14d)]=_0x3a98bb[_0x337ad7(0x179)][_0x337ad7(0x14d)]+'px',_0x2d05ab[_0x337ad7(0x137)]['height']=_0x3a98bb['rect'][_0x337ad7(0x171)]+'px',_0x2d05ab[_0x337ad7(0x137)][_0x337ad7(0x165)]='translate('+_0x677e9a+_0x337ad7(0x13c)+_0x3cd5f5+_0x337ad7(0x131),_0x2d05ab[_0x337ad7(0x11e)]('data-x',_0x677e9a),_0x2d05ab[_0x337ad7(0x11e)](_0x337ad7(0x127),_0x3cd5f5),localStorage[_0x337ad7(0x175)](gameName+_0x337ad7(0x13d),_0x677e9a[_0x337ad7(0x180)](0x0)+','+_0x3cd5f5[_0x337ad7(0x180)](0x0)+','+_0x3a98bb[_0x337ad7(0x179)][_0x337ad7(0x14d)][_0x337ad7(0x180)](0x0)+','+_0x3a98bb[_0x337ad7(0x179)][_0x337ad7(0x171)][_0x337ad7(0x180)](0x0)),console[_0x337ad7(0x164)](localStorage[_0x337ad7(0x126)](gameName+_0x337ad7(0x13d)));}}});function restoreArea(){const _0x25e7f7=a0_0x56a253,_0x49cc69=localStorage[_0x25e7f7(0x126)](gameName+_0x25e7f7(0x13d))||localStorage[_0x25e7f7(0x126)](_0x25e7f7(0x151));if(_0x49cc69){const [_0x59dd6e,_0x35381a,_0x1f8b48,_0x54fe40]=_0x49cc69[_0x25e7f7(0x156)](',')[_0x25e7f7(0x167)](Number),_0x19cd25=document[_0x25e7f7(0x188)](_0x25e7f7(0x172));_0x19cd25[_0x25e7f7(0x137)][_0x25e7f7(0x14d)]=_0x1f8b48+'px',_0x19cd25['style']['height']=_0x54fe40+'px',_0x19cd25[_0x25e7f7(0x137)][_0x25e7f7(0x165)]=_0x25e7f7(0x129)+_0x59dd6e+_0x25e7f7(0x13c)+_0x35381a+_0x25e7f7(0x131),_0x19cd25['setAttribute'](_0x25e7f7(0x14c),_0x59dd6e),_0x19cd25[_0x25e7f7(0x11e)](_0x25e7f7(0x127),_0x35381a);}}function a0_0xb590(){const _0x4d11cf=['loadStateButton','60px','touchend','create','getElementsByClassName','backToHome','deltaRect','target','result','openLocalStorage','apply','data-x','width','padding-top','led06','576420uPNFQl','screenSize','getDate','top','DOMContentLoaded','dynamic','split','rect1','ontouchstart','warn','event.stopPropagation()','change','rom-list','352ACXPxV','14YytNyl','click','saveStateButton','preventDefault','led07','touched','log','transform','inputText','map','12uKCekP','1371560WulPfL','691768adNYgT','\x0a---\x0a','scrollHeight','54310uBrill','stateDiv05','color','replace','height','resizable-draggable','stateDiv06','130QerDwa','setItem','21ZodpME','Error','onloadend','rect','setProperty','stateDiv04','setAdjustment','opacity','length','textContent','toFixed','parent','visible','error','1242QdsTrH','Warning','left','addEventListener','getElementById','Error\x20Led:','led03','contains','led02','files','add','notiTitle','upLoadFile','led01','name','getMinutes','onerror','join','scrollTop','image/png','errorLog','rgba(245,\x20232,\x20209,\x200.4)','rectOpacity','stateAdj','setAttribute','pop','fill','padStart','#2F2F2F','restrictEdges','stateDiv07','remove','getItem','data-y','stateDiv01','translate(','touchstart','getAttribute','539JhFuyx','stateDiv02','stateDiv03','.target-boxes','lockNoti','px)','getMonth','restrictSize','paddingTop','120px','forEach','style','classList','10953LvdbUN','42296DebbOw','game-item','px,\x20','_setArea','touched-1','led04','GOpacity'];a0_0xb590=function(){return _0x4d11cf;};return a0_0xb590();}async function delay(_0x2e4b90){return new Promise(_0x44e3ed=>setTimeout(_0x44e3ed,_0x2e4b90));}async function led(_0x46b5da){const _0x372e07=a0_0x56a253;try{const _0x7feae3=[{'id':'led00','color':_0x372e07(0x11b)},{'id':_0x372e07(0x113),'color':_0x372e07(0x11b)},{'id':_0x372e07(0x10e),'color':_0x372e07(0x11b)},{'id':_0x372e07(0x10c),'color':_0x372e07(0x11b)},{'id':_0x372e07(0x13f),'color':_0x372e07(0x11b)},{'id':'led05','color':_0x372e07(0x11b)},{'id':_0x372e07(0x14f),'color':_0x372e07(0x11b)},{'id':_0x372e07(0x162),'color':_0x372e07(0x11b)}];if(_0x46b5da>=0x0&&_0x46b5da<_0x7feae3[_0x372e07(0x17e)]){const _0x328e03='#20A5A6';_0x7feae3['forEach']((_0x240248,_0xf05787)=>{const _0x2764fb=_0x372e07;document[_0x2764fb(0x188)](_0x240248['id'])['style'][_0x2764fb(0x120)]=_0xf05787===_0x46b5da?_0x328e03:_0x240248[_0x2764fb(0x16f)];});}}catch(_0x220c38){console[_0x372e07(0x183)](_0x372e07(0x10b),_0x220c38);}}function formatDateTime(_0x18cece){const _0x1b0e52=a0_0x56a253,_0x5d557a=new Date(_0x18cece),_0x4ec824=String(_0x5d557a['getHours']())[_0x1b0e52(0x121)](0x2,'0'),_0x3fd981=String(_0x5d557a[_0x1b0e52(0x115)]())[_0x1b0e52(0x121)](0x2,'0'),_0x4c6c39=_0x5d557a[_0x1b0e52(0x152)](),_0xd650cb=_0x5d557a[_0x1b0e52(0x132)]()+0x1;return _0x4ec824+':'+_0x3fd981+'\x20'+_0x4c6c39+'.'+_0xd650cb;}async function fileToBase64(_0x375324){const _0x54b4df=a0_0x56a253,_0xdb6726=new Blob([_0x375324],{'type':_0x54b4df(0x119)}),_0x4b2966=await new Promise((_0x4d4b2d,_0x5c3574)=>{const _0x1225de=_0x54b4df,_0x229d42=new FileReader();_0x229d42[_0x1225de(0x178)]=()=>{const _0x5ac928=_0x1225de;_0x4d4b2d(_0x229d42[_0x5ac928(0x149)]);},_0x229d42[_0x1225de(0x116)]=_0x5c3574,_0x229d42['readAsDataURL'](_0xdb6726);});return _0x4b2966;}async function lockNoti(_0x5aff62,_0x131d91,_0x22420d){const _0x195797=a0_0x56a253,_0x16c4f6=document['getElementById'](_0x195797(0x130)),_0x22e3ac=document[_0x195797(0x188)](_0x195797(0x111)),_0x2da85d=document[_0x195797(0x188)]('notiDetail');lockNotiTime&&clearTimeout(lockNotiTime),_0x22e3ac['textContent']=_0x5aff62,_0x2da85d[_0x195797(0x17f)]=_0x131d91,_0x16c4f6['classList']['remove'](_0x195797(0x182)),lockNotiTime=setTimeout(()=>{const _0x44e5a1=_0x195797;_0x16c4f6[_0x44e5a1(0x138)][_0x44e5a1(0x110)](_0x44e5a1(0x182));},_0x22420d);}function logMessage(_0x24fec3,_0x540007){const _0x3881ba=a0_0x56a253;if(errorLogElements[_0x3881ba(0x17e)]>0x0){const _0x5e91c4=errorLogElements[0x0];_0x5e91c4['innerText']+='['+_0x24fec3+']\x20'+_0x540007+_0x3881ba(0x16b),_0x5e91c4[_0x3881ba(0x118)]=_0x5e91c4[_0x3881ba(0x16c)];}}window[a0_0x56a253(0x116)]=function(_0x1d3e4a,_0x22a2b1,_0x5a11d1){const _0x3cac2f=a0_0x56a253,_0x51f557=_0x22a2b1?_0x22a2b1[_0x3cac2f(0x156)]('/')[_0x3cac2f(0x11f)]():'unknown\x20source',_0x146a22=_0x1d3e4a[_0x3cac2f(0x170)](/^(Uncaught\s(?:ReferenceError|Error|TypeError|SyntaxError|RangeError):?\s*)/i,''),_0x561441='[Err]\x20['+_0x5a11d1+']\x20../'+_0x51f557+'\x20|\x20'+_0x146a22+'.';return logMessage(_0x3cac2f(0x177),_0x561441),![];};const originalConsoleError=console[a0_0x56a253(0x183)];console[a0_0x56a253(0x183)]=function(..._0x278916){const _0x43c24c=a0_0x56a253;originalConsoleError[_0x43c24c(0x14b)](console,_0x278916),logMessage(_0x43c24c(0x177),_0x278916[_0x43c24c(0x117)]('\x20'));};const originalConsoleWarn=console[a0_0x56a253(0x159)];console[a0_0x56a253(0x159)]=function(..._0x4f1538){const _0xaf8c1e=a0_0x56a253;originalConsoleWarn[_0xaf8c1e(0x14b)](console,_0x4f1538),logMessage(_0xaf8c1e(0x185),_0x4f1538[_0xaf8c1e(0x117)]('\x20'));},document[a0_0x56a253(0x187)](a0_0x56a253(0x154),function(){const _0x4b2e8e=a0_0x56a253;savedStateAdj!==null&&(stateAdj=parseInt(savedStateAdj),positionAdjustment(stateAdj)),[_0x4b2e8e(0x143)][_0x4b2e8e(0x136)](_0x315333=>{const _0x260790=_0x4b2e8e;romInput[_0x260790(0x187)](_0x260790(0x15b),()=>{const _0x50f099=_0x260790;fileInput[_0x50f099(0x10f)]['length']>0x0&&(gameName=fileInput['files'][0x0][_0x50f099(0x114)],console[_0x50f099(0x164)](gameName));}),romList[_0x260790(0x187)](_0x315333,_0xdbe519=>{const _0x5ac020=_0x260790,_0x2d610d=_0xdbe519[_0x5ac020(0x148)];_0x2d610d[_0x5ac020(0x138)][_0x5ac020(0x10d)](_0x5ac020(0x13b))&&(gameName=_0x2d610d[_0x5ac020(0x17f)],console['log'](gameName));});});});