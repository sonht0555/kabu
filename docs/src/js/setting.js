const a0_0x5e8102=a0_0xcc3d;(function(_0x34ae0e,_0x578333){const _0x5cc672=a0_0xcc3d,_0x3d86ea=_0x34ae0e();while(!![]){try{const _0xa3acef=-parseInt(_0x5cc672(0x19f))/0x1+-parseInt(_0x5cc672(0x1c8))/0x2*(-parseInt(_0x5cc672(0x197))/0x3)+parseInt(_0x5cc672(0x1fb))/0x4*(-parseInt(_0x5cc672(0x1af))/0x5)+parseInt(_0x5cc672(0x1cc))/0x6*(parseInt(_0x5cc672(0x1c0))/0x7)+-parseInt(_0x5cc672(0x1d0))/0x8+-parseInt(_0x5cc672(0x1ea))/0x9+-parseInt(_0x5cc672(0x1a9))/0xa*(-parseInt(_0x5cc672(0x1be))/0xb);if(_0xa3acef===_0x578333)break;else _0x3d86ea['push'](_0x3d86ea['shift']());}catch(_0xaa0b4f){_0x3d86ea['push'](_0x3d86ea['shift']());}}}(a0_0x140a,0xa4969));import*as a0_0x128e61 from'./main.js';let selectedIndex=0x0;const imgShader=document[a0_0x5e8102(0x1eb)]('img-shader')||'Sega',brightnessX=localStorage[a0_0x5e8102(0x1a5)](a0_0x5e8102(0x1e8))||0x1,contrastX=localStorage['getItem'](a0_0x5e8102(0x1c5))||0x1,saturateX=localStorage[a0_0x5e8102(0x1a5)](a0_0x5e8102(0x1cf))||0x1,hueRotateX=localStorage[a0_0x5e8102(0x1a5)](a0_0x5e8102(0x1c6))||0x0,sepiaX=localStorage[a0_0x5e8102(0x1a5)]('sepia')||0x0,boxes=document[a0_0x5e8102(0x1f4)](a0_0x5e8102(0x1c3)),sdValues=[a0_0x5e8102(0x1a2),a0_0x5e8102(0x1ab),a0_0x5e8102(0x1e6),a0_0x5e8102(0x1b5),'Gt-3',a0_0x5e8102(0x1c7),'Gt-5',a0_0x5e8102(0x1dd),a0_0x5e8102(0x1cd),a0_0x5e8102(0x1ec),a0_0x5e8102(0x19e)],menuPad=document['getElementById']('menu-pad'),controlSetting=document[a0_0x5e8102(0x1eb)](a0_0x5e8102(0x1b7)),SDL2ID=['A','B','R','L','Up',a0_0x5e8102(0x1bb),'Left',a0_0x5e8102(0x1d4)];async function Right(_0x3e1f27,_0x4dd739,_0x4eb1d0,_0x2658fc,_0x353abd){const _0x598517=a0_0x5e8102;let _0x55283e=document[_0x598517(0x1eb)](_0x3e1f27),_0x3d3e7d=parseFloat(_0x55283e['textContent']);_0x3d3e7d=Math[_0x598517(0x1f5)](_0x4dd739,_0x3d3e7d+_0x4eb1d0),_0x55283e[_0x598517(0x196)]=_0x3d3e7d['toFixed'](0x1);if(_0x2658fc===_0x598517(0x1e7))imgShader[_0x598517(0x1e2)][_0x598517(0x195)](_0x598517(0x1ef),_0x55283e[_0x598517(0x196)]),localStorage['setItem'](_0x353abd,_0x55283e[_0x598517(0x196)]);else{localStorage[_0x598517(0x1b6)](_0x353abd,_0x55283e[_0x598517(0x196)]),await delay(0x64);const _0x247c4c=localStorage['getItem'](_0x598517(0x1e8))||0x1,_0x3d3ada=localStorage[_0x598517(0x1a5)](_0x598517(0x1c5))||0x1,_0x5ac5e1=localStorage[_0x598517(0x1a5)](_0x598517(0x1cf))||0x1,_0x177c8b=localStorage['getItem'](_0x598517(0x1ad))||0x0;canvas[_0x598517(0x1e2)]['filter']=_0x598517(0x1c2)+_0x247c4c+_0x598517(0x1d7)+_0x3d3ada+_0x598517(0x1bd)+_0x5ac5e1+_0x598517(0x1f9)+hueRotateX+_0x598517(0x1cb)+_0x177c8b+')';}}async function Left(_0x44c2fb,_0x50a8d7,_0x16fe3d,_0x4c4507,_0x4b489b){const _0x29278e=a0_0x5e8102;let _0x41f1bf=document['getElementById'](_0x44c2fb),_0x5da848=parseFloat(_0x41f1bf['textContent']);_0x5da848=Math[_0x29278e(0x1e4)](_0x50a8d7,_0x5da848-_0x16fe3d),_0x41f1bf[_0x29278e(0x196)]=_0x5da848['toFixed'](0x1);if(_0x4c4507===_0x29278e(0x1e7))imgShader[_0x29278e(0x1e2)][_0x29278e(0x195)](_0x29278e(0x1ef),_0x41f1bf[_0x29278e(0x196)]),localStorage['setItem'](_0x4b489b,_0x41f1bf[_0x29278e(0x196)]);else{localStorage[_0x29278e(0x1b6)](_0x4b489b,_0x41f1bf[_0x29278e(0x196)]),await delay(0x64);const _0x1b802e=localStorage[_0x29278e(0x1a5)]('brightness')||0x1,_0x276340=localStorage[_0x29278e(0x1a5)]('contrast')||0x1,_0x518da5=localStorage[_0x29278e(0x1a5)]('saturate')||0x1,_0x53d5f3=localStorage[_0x29278e(0x1a5)](_0x29278e(0x1ad))||0x0;canvas[_0x29278e(0x1e2)]['filter']='brightness('+_0x1b802e+_0x29278e(0x1d7)+_0x276340+_0x29278e(0x1bd)+_0x518da5+_0x29278e(0x1f9)+hueRotateX+_0x29278e(0x1cb)+_0x53d5f3+')';}}function a0_0x140a(){const _0x4a0cf4=['Gt-4','390514yINuZY','href','Manual\x20Switches\x20Slots','deg)\x20sepia(','6lwpioL','Gt-7','length','saturate','8522680TxOfBo','parse','visible','.gba','Right','pauseGame','touchcancel',')\x20contrast(','DOMContentLoaded','touchend','Resumed!','box8','_Cheats','Gt-6','box5','\x0acheat','classList','remove','style','prompt','max','selectedShader','Gt-1','opacity','brightness','box0','3210534PbzjNz','getElementById','Gt-8','replace','Off','--before-opacity','gameName','enable','log','_enable\x20=\x20','querySelectorAll','min','add','trim','box7',')\x20hue-rotate(','map','534740XITrdT','filter','setProperty','textContent','18cAHdRI','uploadCheats','contains','active','box3','box6','Left','Line','323655ZUyTky','code','box1','Sega','toggle','_code\x20=\x20\x22','getItem','text/plain','cheat','resumeGame','18920ENmTEK','selected','Crt','indexOf','sepia','Auto\x20Switches\x20Slots','20GGPzPh','Paused!','box4','location','Edit\x20cheat\x20code','push','Gt-2','setItem','control-setting','touchstart','box2','addEventListener','Down','forEach',')\x20saturate(','8899GPDYfi','reload','1767073DtAnRQ','mouseup','brightness(','.box','autoStateCheck','contrast','hueRotate'];a0_0x140a=function(){return _0x4a0cf4;};return a0_0x140a();}function a0_0xcc3d(_0xd424f7,_0x12bb83){const _0x140ac7=a0_0x140a();return a0_0xcc3d=function(_0xcc3dc9,_0x37b4c2){_0xcc3dc9=_0xcc3dc9-0x194;let _0x575501=_0x140ac7[_0xcc3dc9];return _0x575501;},a0_0xcc3d(_0xd424f7,_0x12bb83);}SDL2ID['forEach'](function(_0x50e25e){const _0x151026=a0_0x5e8102,_0x565e7b=document['getElementById'](_0x50e25e);_0x565e7b&&_0x565e7b[_0x151026(0x1ba)](_0x151026(0x1b8),function(){const _0x40cead=_0x151026;!areaTrans[_0x40cead(0x1e0)]['contains'](_0x40cead(0x1d2))&&areaTrans[_0x40cead(0x1e0)]['toggle'](_0x40cead(0x1d2));});}),document[a0_0x5e8102(0x1ba)](a0_0x5e8102(0x1d8),function(){const _0x23f858=a0_0x5e8102,_0x111da2=localStorage[_0x23f858(0x1a5)](_0x23f858(0x1f0));let _0x272572=JSON[_0x23f858(0x1d1)](localStorage[_0x23f858(0x1a5)](_0x111da2+_0x23f858(0x1dc)))||[];const _0x52d71c=_0x272572[_0x23f858(0x1ce)]>0x0?_0x272572[_0x272572[_0x23f858(0x1ce)]-0x1]['code']:'Off';box1['textContent']=_0x52d71c;if(localStorage[_0x23f858(0x1a5)](_0x23f858(0x1c4))==='On')box2[_0x23f858(0x196)]='On';else{box2['textContent']=_0x23f858(0x1ee);const _0x380594='Off';localStorage['setItem'](_0x23f858(0x1c4),_0x380594);}box3[_0x23f858(0x196)]=localStorage['getItem'](_0x23f858(0x1e5))||_0x23f858(0x1a2),box4[_0x23f858(0x196)]=localStorage['getItem']('opacity')||0x1,box5[_0x23f858(0x196)]=localStorage[_0x23f858(0x1a5)](_0x23f858(0x1e8))||0x1,box6[_0x23f858(0x196)]=localStorage[_0x23f858(0x1a5)](_0x23f858(0x1c5))||0x1,box7['textContent']=localStorage[_0x23f858(0x1a5)](_0x23f858(0x1cf))||0x1,box8[_0x23f858(0x196)]=localStorage[_0x23f858(0x1a5)](_0x23f858(0x1ad))||0x0,imgShader[_0x23f858(0x1e0)][_0x23f858(0x1f6)](localStorage[_0x23f858(0x1a5)](_0x23f858(0x1e5))),imgShader['style'][_0x23f858(0x195)](_0x23f858(0x1ef),localStorage[_0x23f858(0x1a5)](_0x23f858(0x1e7))),canvas[_0x23f858(0x1e2)][_0x23f858(0x194)]=_0x23f858(0x1c2)+brightnessX+_0x23f858(0x1d7)+contrastX+')\x20saturate('+saturateX+_0x23f858(0x1f9)+hueRotateX+_0x23f858(0x1cb)+sepiaX+')';let _0xa13c1d=sdValues[0x0];const _0x364c10=()=>{const _0x17bddf=_0x23f858;boxes[_0x17bddf(0x1bc)]((_0x3bae06,_0x57387d)=>{const _0x56445e=_0x17bddf;_0x57387d===selectedIndex?_0x3bae06[_0x56445e(0x1e0)]['add'](_0x56445e(0x1aa)):_0x3bae06['classList'][_0x56445e(0x1e1)](_0x56445e(0x1aa));});};_0x364c10(),[_0x23f858(0x1c1),_0x23f858(0x1d9),_0x23f858(0x1d6)][_0x23f858(0x1bc)](_0x4b339c=>{const _0x57e9ee=_0x23f858;document[_0x57e9ee(0x1eb)]('A')['addEventListener'](_0x4b339c,()=>{const _0x4ba2fd=_0x57e9ee;if(menuPad[_0x4ba2fd(0x1e0)][_0x4ba2fd(0x199)](_0x4ba2fd(0x19a))){document[_0x4ba2fd(0x1eb)](_0x4ba2fd(0x1e9))[_0x4ba2fd(0x1e0)]['contains'](_0x4ba2fd(0x1aa))&&setTimeout(()=>{const _0x41b690=_0x4ba2fd;navigator['onLine']?window[_0x41b690(0x1b2)][_0x41b690(0x1bf)](!![]):window[_0x41b690(0x1b2)][_0x41b690(0x1c9)]=window['location'][_0x41b690(0x1c9)];},0x32);if(document[_0x4ba2fd(0x1eb)](_0x4ba2fd(0x1a1))[_0x4ba2fd(0x1e0)][_0x4ba2fd(0x199)](_0x4ba2fd(0x1aa))){let _0x7396f8=document[_0x4ba2fd(0x1eb)](_0x4ba2fd(0x1a1));const _0x4f57cd=localStorage[_0x4ba2fd(0x1a5)](_0x4ba2fd(0x1f0)),_0x14a48a=_0x4f57cd[_0x4ba2fd(0x1ed)](_0x4ba2fd(0x1d3),'.cheats');let _0x49ddac=JSON[_0x4ba2fd(0x1d1)](localStorage[_0x4ba2fd(0x1a5)](_0x4f57cd+'_Cheats'))||[];const _0x5db45e=_0x49ddac['length']>0x0?_0x49ddac[_0x49ddac[_0x4ba2fd(0x1ce)]-0x1][_0x4ba2fd(0x1a0)]:'Off';let _0x5c9095=window[_0x4ba2fd(0x1e3)](_0x4ba2fd(0x1b3),_0x5db45e);(_0x5c9095===null||_0x5c9095[_0x4ba2fd(0x1f7)]()==='')&&(_0x5c9095='Off');_0x49ddac=_0x49ddac[_0x4ba2fd(0x1fa)](_0x215213=>({'enable':![],'code':_0x215213[_0x4ba2fd(0x1a0)]}));const _0x519655={'enable':!![],'code':_0x5c9095[_0x4ba2fd(0x1f7)]()};_0x49ddac[_0x4ba2fd(0x1b4)](_0x519655),localStorage[_0x4ba2fd(0x1b6)](_0x4f57cd+_0x4ba2fd(0x1dc),JSON['stringify'](_0x49ddac));const _0x389919='cheats\x20=\x20'+_0x49ddac[_0x4ba2fd(0x1ce)]+'\x0a'+_0x49ddac[_0x4ba2fd(0x1fa)]((_0x5944c9,_0x493444)=>_0x4ba2fd(0x1a7)+_0x493444+_0x4ba2fd(0x1f3)+_0x5944c9[_0x4ba2fd(0x1f1)]+_0x4ba2fd(0x1df)+_0x493444+_0x4ba2fd(0x1a4)+_0x5944c9['code']+'\x22')['join']('\x0a'),_0x16ae36=new Blob([_0x389919],{'type':_0x4ba2fd(0x1a6)}),_0x1debe7=new File([_0x16ae36],_0x14a48a);a0_0x128e61[_0x4ba2fd(0x198)](_0x1debe7,_0x4f57cd,_0x5c9095[_0x4ba2fd(0x1f7)](),!![],_0x7396f8),console[_0x4ba2fd(0x1f2)](_0x389919);}}}),document['getElementById']('Up')[_0x57e9ee(0x1ba)](_0x4b339c,()=>{const _0x3ec8ab=_0x57e9ee;menuPad[_0x3ec8ab(0x1e0)]['contains'](_0x3ec8ab(0x19a))&&(selectedIndex>0x0&&(selectedIndex--,_0x364c10()));}),document[_0x57e9ee(0x1eb)](_0x57e9ee(0x1bb))[_0x57e9ee(0x1ba)](_0x4b339c,()=>{const _0x268519=_0x57e9ee;menuPad[_0x268519(0x1e0)][_0x268519(0x199)](_0x268519(0x19a))&&(selectedIndex<boxes[_0x268519(0x1ce)]-0x1&&(selectedIndex++,_0x364c10()));}),document[_0x57e9ee(0x1eb)](_0x57e9ee(0x1d4))[_0x57e9ee(0x1ba)](_0x4b339c,()=>{const _0x1ae7e0=_0x57e9ee;if(menuPad['classList']['contains'](_0x1ae7e0(0x19a))){if(document['getElementById'](_0x1ae7e0(0x1b9))[_0x1ae7e0(0x1e0)][_0x1ae7e0(0x199)](_0x1ae7e0(0x1aa))){let _0x5400ac=document[_0x1ae7e0(0x1eb)]('box2');_0x5400ac[_0x1ae7e0(0x196)]=_0x5400ac[_0x1ae7e0(0x196)]==='On'?_0x1ae7e0(0x1ee):'On';if(_0x5400ac['textContent']==='On'){const _0x195f02='On';localStorage[_0x1ae7e0(0x1b6)]('autoStateCheck',_0x195f02),notiMessage(_0x1ae7e0(0x1ae),0x5dc);}else{const _0x431150='Off';localStorage['setItem']('autoStateCheck',_0x431150),notiMessage(_0x1ae7e0(0x1ca),0x5dc);}}if(document[_0x1ae7e0(0x1eb)](_0x1ae7e0(0x19b))[_0x1ae7e0(0x1e0)]['contains'](_0x1ae7e0(0x1aa))){let _0x47ea6a=document[_0x1ae7e0(0x1eb)](_0x1ae7e0(0x19b)),_0x1794eb=sdValues[_0x1ae7e0(0x1ac)](_0x47ea6a[_0x1ae7e0(0x196)]);_0x1794eb<sdValues[_0x1ae7e0(0x1ce)]-0x1?_0x47ea6a[_0x1ae7e0(0x196)]=sdValues[_0x1794eb+0x1]:_0x47ea6a[_0x1ae7e0(0x196)]=sdValues[0x0],console['log'](_0x47ea6a['textContent']),sdValues[_0x1ae7e0(0x1bc)](_0x2e1ff1=>imgShader[_0x1ae7e0(0x1e0)]['remove'](_0x2e1ff1)),_0xa13c1d=_0x47ea6a[_0x1ae7e0(0x196)],imgShader[_0x1ae7e0(0x1e0)][_0x1ae7e0(0x1f6)](_0xa13c1d),localStorage[_0x1ae7e0(0x1b6)](_0x1ae7e0(0x1e5),_0xa13c1d);}document[_0x1ae7e0(0x1eb)](_0x1ae7e0(0x1b1))['classList']['contains'](_0x1ae7e0(0x1aa))&&Right('box4',0x1,0.1,_0x1ae7e0(0x1e7),'opacity'),document[_0x1ae7e0(0x1eb)](_0x1ae7e0(0x1de))[_0x1ae7e0(0x1e0)][_0x1ae7e0(0x199)](_0x1ae7e0(0x1aa))&&Right(_0x1ae7e0(0x1de),0x2,0.1,'brightness',_0x1ae7e0(0x1e8)),document['getElementById'](_0x1ae7e0(0x19c))[_0x1ae7e0(0x1e0)][_0x1ae7e0(0x199)](_0x1ae7e0(0x1aa))&&Right(_0x1ae7e0(0x19c),0x2,0.1,_0x1ae7e0(0x1c5),'contrast'),document['getElementById'](_0x1ae7e0(0x1f8))[_0x1ae7e0(0x1e0)][_0x1ae7e0(0x199)]('selected')&&Right('box7',0x4,0.1,'saturate',_0x1ae7e0(0x1cf)),document['getElementById'](_0x1ae7e0(0x1db))[_0x1ae7e0(0x1e0)][_0x1ae7e0(0x199)]('selected')&&Right(_0x1ae7e0(0x1db),0x1,0.1,'sepia','sepia');}}),document[_0x57e9ee(0x1eb)](_0x57e9ee(0x19d))[_0x57e9ee(0x1ba)](_0x4b339c,()=>{const _0x572fc8=_0x57e9ee;if(menuPad['classList'][_0x572fc8(0x199)]('active')){if(document[_0x572fc8(0x1eb)](_0x572fc8(0x1b9))[_0x572fc8(0x1e0)][_0x572fc8(0x199)]('selected')){let _0x476003=document[_0x572fc8(0x1eb)](_0x572fc8(0x1b9));_0x476003[_0x572fc8(0x196)]=_0x476003[_0x572fc8(0x196)]==='On'?_0x572fc8(0x1ee):'On';if(_0x476003[_0x572fc8(0x196)]==='On'){const _0x14400='On';localStorage[_0x572fc8(0x1b6)]('autoStateCheck',_0x14400),notiMessage(_0x572fc8(0x1ae),0x5dc);}else{const _0x56df25=_0x572fc8(0x1ee);localStorage[_0x572fc8(0x1b6)]('autoStateCheck',_0x56df25),notiMessage(_0x572fc8(0x1ca),0x5dc);}}if(document[_0x572fc8(0x1eb)]('box3')[_0x572fc8(0x1e0)][_0x572fc8(0x199)](_0x572fc8(0x1aa))){let _0x3de2a8=document['getElementById'](_0x572fc8(0x19b)),_0x5784a4=sdValues[_0x572fc8(0x1ac)](_0x3de2a8[_0x572fc8(0x196)]);_0x5784a4>0x0?_0x3de2a8[_0x572fc8(0x196)]=sdValues[_0x5784a4-0x1]:_0x3de2a8[_0x572fc8(0x196)]=sdValues[sdValues[_0x572fc8(0x1ce)]-0x1],sdValues['forEach'](_0x4eb12e=>imgShader[_0x572fc8(0x1e0)][_0x572fc8(0x1e1)](_0x4eb12e)),_0xa13c1d=_0x3de2a8[_0x572fc8(0x196)],imgShader[_0x572fc8(0x1e0)]['add'](_0xa13c1d),localStorage['setItem']('selectedShader',_0xa13c1d);}document[_0x572fc8(0x1eb)](_0x572fc8(0x1b1))[_0x572fc8(0x1e0)][_0x572fc8(0x199)](_0x572fc8(0x1aa))&&Left('box4',0x0,0.1,'opacity','opacity'),document['getElementById'](_0x572fc8(0x1de))[_0x572fc8(0x1e0)][_0x572fc8(0x199)](_0x572fc8(0x1aa))&&Left(_0x572fc8(0x1de),0x0,0.1,_0x572fc8(0x1e8),_0x572fc8(0x1e8)),document[_0x572fc8(0x1eb)](_0x572fc8(0x19c))['classList'][_0x572fc8(0x199)](_0x572fc8(0x1aa))&&Left('box6',0x0,0.1,'contrast','contrast'),document[_0x572fc8(0x1eb)](_0x572fc8(0x1f8))[_0x572fc8(0x1e0)][_0x572fc8(0x199)](_0x572fc8(0x1aa))&&Left(_0x572fc8(0x1f8),0x0,0.1,'saturate','saturate'),document[_0x572fc8(0x1eb)](_0x572fc8(0x1db))[_0x572fc8(0x1e0)][_0x572fc8(0x199)](_0x572fc8(0x1aa))&&Left(_0x572fc8(0x1db),0x0,0.1,_0x572fc8(0x1ad),_0x572fc8(0x1ad));}}),menuPad[_0x57e9ee(0x1ba)](_0x4b339c,()=>{const _0x390661=_0x57e9ee;menuPad[_0x390661(0x1e0)][_0x390661(0x1a3)](_0x390661(0x19a)),controlSetting[_0x390661(0x1e0)][_0x390661(0x1a3)](_0x390661(0x1d2)),controlSetting[_0x390661(0x1e0)][_0x390661(0x199)](_0x390661(0x1d2))?(a0_0x128e61[_0x390661(0x1a8)](),notiMessage(_0x390661(0x1da),0x7d0)):(a0_0x128e61[_0x390661(0x1d5)](),notiMessage(_0x390661(0x1b0),0x7d0));});});});