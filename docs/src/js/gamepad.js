const a0_0x20401b=a0_0x5750;(function(_0x4efb57,_0x9b2a93){const _0x2776bc=a0_0x5750,_0x5515b0=_0x4efb57();while(!![]){try{const _0x3227dd=parseInt(_0x2776bc(0x19c))/0x1*(parseInt(_0x2776bc(0x190))/0x2)+-parseInt(_0x2776bc(0x19f))/0x3*(-parseInt(_0x2776bc(0x1b6))/0x4)+-parseInt(_0x2776bc(0x1ab))/0x5+parseInt(_0x2776bc(0x1a1))/0x6*(parseInt(_0x2776bc(0x17b))/0x7)+-parseInt(_0x2776bc(0x181))/0x8*(parseInt(_0x2776bc(0x185))/0x9)+-parseInt(_0x2776bc(0x1a7))/0xa+-parseInt(_0x2776bc(0x182))/0xb*(-parseInt(_0x2776bc(0x1b2))/0xc);if(_0x3227dd===_0x9b2a93)break;else _0x5515b0['push'](_0x5515b0['shift']());}catch(_0x411c73){_0x5515b0['push'](_0x5515b0['shift']());}}}(a0_0x2cb5,0x6b2c1));import*as a0_0x5a9e64 from'./main.js';function a0_0x5750(_0x5123d1,_0x4dc42a){const _0x2cb540=a0_0x2cb5();return a0_0x5750=function(_0x57503c,_0x3f1318){_0x57503c=_0x57503c-0x17b;let _0x2a444a=_0x2cb540[_0x57503c];return _0x2a444a;},a0_0x5750(_0x5123d1,_0x4dc42a);}let clickState=0x0,clickTimeout,clickTurbo=0x0,turboState=0x1,volumeLevels=[0x1,0x0,0.25,0.5,0.75],volumeIndex=0x0;const turboButton=document[a0_0x20401b(0x198)](a0_0x20401b(0x1b0));function buttonPress(_0x2c93f8,_0x2b477f){const _0x48803e=a0_0x20401b;if(_0x2c93f8[_0x48803e(0x191)]('-')){const [_0x2e0e36,_0x294fca]=_0x2c93f8[_0x48803e(0x18b)]()[_0x48803e(0x1b7)]('-');_0x2b477f?a0_0x5a9e64[_0x48803e(0x1aa)](_0x2e0e36):a0_0x5a9e64['buttonUnpress'](_0x2e0e36),_0x2b477f?a0_0x5a9e64[_0x48803e(0x1aa)](_0x294fca):a0_0x5a9e64[_0x48803e(0x17d)](_0x294fca);}else _0x2b477f?a0_0x5a9e64['buttonPress'](_0x2c93f8[_0x48803e(0x18b)]()):a0_0x5a9e64[_0x48803e(0x17d)](_0x2c93f8[_0x48803e(0x18b)]());}async function saveState(_0x23ecbb){await a0_0x5a9e64['saveState'](_0x23ecbb),await a0_0x5a9e64['screenShot'](_0x23ecbb);}async function loadState(_0x27047e){await a0_0x5a9e64['loadState'](_0x27047e);}export async function turboF(_0x51e3e1){const _0x2910c1=a0_0x20401b;if(_0x51e3e1===0x1)a0_0x5a9e64[_0x2910c1(0x1ac)](_0x2910c1(0x1a2),0x5dc,!![]),turboButton[_0x2910c1(0x18f)][_0x2910c1(0x1ad)]('turbo-medium'),turboButton['classList']['remove'](_0x2910c1(0x195)),a0_0x5a9e64[_0x2910c1(0x1af)](0x1);else{if(_0x51e3e1===0x2)a0_0x5a9e64[_0x2910c1(0x1ac)](_0x2910c1(0x187),0x5dc,!![]),turboButton[_0x2910c1(0x18f)][_0x2910c1(0x1b5)](_0x2910c1(0x180)),turboButton[_0x2910c1(0x18f)][_0x2910c1(0x1ad)](_0x2910c1(0x195)),a0_0x5a9e64[_0x2910c1(0x1af)](0x2);else _0x51e3e1===0x3&&(a0_0x5a9e64['notiMessage'](_0x2910c1(0x18a),0x5dc,!![]),turboButton['classList']['remove'](_0x2910c1(0x180)),turboButton[_0x2910c1(0x18f)]['add'](_0x2910c1(0x195)),a0_0x5a9e64['setFastForwardMultiplier'](0x4));}}document[a0_0x20401b(0x193)](a0_0x20401b(0x19e),function(){const _0x5ec08e=a0_0x20401b;['A','B','Start',_0x5ec08e(0x184),'L','R','Up',_0x5ec08e(0x19d),_0x5ec08e(0x19b),_0x5ec08e(0x197),_0x5ec08e(0x194),_0x5ec08e(0x1a4),_0x5ec08e(0x1a5),_0x5ec08e(0x1a0)][_0x5ec08e(0x1b9)](_0x32ed6d=>{const _0x496f40=_0x5ec08e,_0x59baa7=document['getElementById'](_0x32ed6d);let _0x47eff2=null;['mousedown','touchstart'][_0x496f40(0x1b9)](_0x380015=>{const _0x275195=_0x496f40;_0x59baa7[_0x275195(0x193)](_0x380015,()=>{const _0x51036e=_0x275195;_0x47eff2=_0x59baa7,buttonPress(_0x32ed6d,!![]),_0x59baa7[_0x51036e(0x18f)][_0x51036e(0x1b5)]('touched');});}),[_0x496f40(0x17f)]['forEach'](_0x3e33b7=>{const _0x4dc847=_0x496f40;_0x59baa7[_0x4dc847(0x193)](_0x3e33b7,()=>{const _0x3ed070=_0x4dc847;_0x47eff2&&(buttonPress(_0x32ed6d,![]),_0x47eff2=null,_0x59baa7[_0x3ed070(0x18f)][_0x3ed070(0x1ad)]('touched'));});}),_0x59baa7[_0x496f40(0x193)](_0x496f40(0x1ae),_0x25695d=>{const _0xfb74d5=_0x496f40,_0x194fba=_0x25695d[_0xfb74d5(0x1a3)][0x0],_0x401d4e=document[_0xfb74d5(0x1b4)](_0x194fba[_0xfb74d5(0x19a)],_0x194fba['clientY']);if(_0x401d4e!==_0x47eff2&&_0x25695d[_0xfb74d5(0x1a3)][_0xfb74d5(0x18d)]===0x1){if(_0x47eff2){const _0x25bd5a=new Event('touchend');_0x47eff2[_0xfb74d5(0x18e)](_0x25bd5a);}if(_0x401d4e){const _0x1c3c4d=new Event(_0xfb74d5(0x1b1));_0x401d4e[_0xfb74d5(0x18e)](_0x1c3c4d);}_0x47eff2=_0x401d4e;}}),document['addEventListener']('touchend',_0x51483d=>{const _0x5f3464=_0x496f40;if(_0x51483d[_0x5f3464(0x1a3)][_0x5f3464(0x18d)]===0x0){if(_0x47eff2){const _0x2501e2=new Event(_0x5f3464(0x17f));_0x47eff2[_0x5f3464(0x18e)](_0x2501e2),_0x47eff2=null;}}});let _0x55232a='';const _0x4ca6bf=(_0x39d3b0,_0xba7831)=>{const _0x4fcf3c=_0x496f40,_0x1d53e0=_0x39d3b0[_0x4fcf3c(0x1b7)]('-');_0x1d53e0[_0x4fcf3c(0x1b9)](_0x4f2064=>{const _0x254117=_0x4fcf3c;_0xba7831?a0_0x5a9e64[_0x254117(0x1aa)](_0x4f2064):a0_0x5a9e64[_0x254117(0x17d)](_0x4f2064);});};dynamic['on'](_0x496f40(0x1a9),(_0x4f60d1,_0x54c862)=>{const _0x405b24=_0x496f40,_0x1ae125=_0x54c862[_0x405b24(0x1b3)][_0x405b24(0x183)];let _0x74f3c0='';if(_0x1ae125>=337.5||_0x1ae125<22.5)_0x74f3c0=_0x405b24(0x197);else{if(_0x1ae125>=22.5&&_0x1ae125<67.5)_0x74f3c0=_0x405b24(0x1a4);else{if(_0x1ae125>=67.5&&_0x1ae125<112.5)_0x74f3c0='Up';else{if(_0x1ae125>=112.5&&_0x1ae125<157.5)_0x74f3c0=_0x405b24(0x194);else{if(_0x1ae125>=157.5&&_0x1ae125<202.5)_0x74f3c0=_0x405b24(0x19b);else{if(_0x1ae125>=202.5&&_0x1ae125<247.5)_0x74f3c0=_0x405b24(0x1a5);else{if(_0x1ae125>=247.5&&_0x1ae125<292.5)_0x74f3c0=_0x405b24(0x19d);else _0x1ae125>=292.5&&_0x1ae125<337.5&&(_0x74f3c0='Down-right');}}}}}}_0x74f3c0!==_0x55232a&&(_0x4ca6bf(_0x55232a,![]),_0x4ca6bf(_0x74f3c0,!![]),_0x55232a=_0x74f3c0);}),dynamic['on']('end',()=>{_0x4ca6bf(_0x55232a,![]),_0x55232a='';});});}),[a0_0x20401b(0x17f)]['forEach'](_0x46f6e8=>{const _0x17bcdf=a0_0x20401b;saveStateButton[_0x17bcdf(0x193)](_0x46f6e8,async()=>{clickState++,clearTimeout(clickTimeout),clickTimeout=setTimeout(async()=>{const _0x2c67db=a0_0x5750;if(clickState===0x2){const _0x4ea801=await a0_0x5a9e64[_0x2c67db(0x1a8)](gameName,'0',_0x2c67db(0x1b8))||await a0_0x5a9e64[_0x2c67db(0x1a6)](gameName,'0',_0x2c67db(0x1b8),'On');if(_0x4ea801==='On'){const _0x100ead=parseInt(await a0_0x5a9e64[_0x2c67db(0x1a8)](gameName,'0',_0x2c67db(0x199))%0x7+0x1)||0x1;saveState(_0x100ead),await delay(0x64),await a0_0x5a9e64['setData'](gameName,'0','slotStateSaved',_0x100ead),await delay(0x64),await a0_0x5a9e64[_0x2c67db(0x18c)](_0x2c67db(0x17e)),a0_0x5a9e64[_0x2c67db(0x1ac)]('['+_0x100ead+_0x2c67db(0x17c),0x7d0);}else{const _0x595e6f=parseInt(await a0_0x5a9e64[_0x2c67db(0x1a8)](gameName,'0',_0x2c67db(0x199)))||0x1;saveState(_0x595e6f),await delay(0x64),await a0_0x5a9e64[_0x2c67db(0x1a6)](gameName,'0','slotStateSaved',_0x595e6f),await delay(0x64),await a0_0x5a9e64[_0x2c67db(0x18c)]('#DD5639'),a0_0x5a9e64[_0x2c67db(0x1ac)](_0x2c67db(0x196),0x7d0);}}else{if(clickState===0x3){volumeIndex=(volumeIndex+0x1)%volumeLevels[_0x2c67db(0x18d)];let _0x19bda3=volumeLevels[volumeIndex];a0_0x5a9e64['setVolume'](_0x19bda3),a0_0x5a9e64[_0x2c67db(0x1ac)](_0x2c67db(0x189)+_0x19bda3*0x64+'%',0x7d0);}}clickState=0x0;},0x12c);}),loadStateButton[_0x17bcdf(0x193)](_0x46f6e8,async()=>{clickState++,clearTimeout(clickTimeout),clickTimeout=setTimeout(async()=>{const _0x31365d=a0_0x5750;if(clickState===0x2){const _0x57bc5a=await a0_0x5a9e64[_0x31365d(0x1a8)](gameName,'0',_0x31365d(0x199))||0x1;loadState(_0x57bc5a),a0_0x5a9e64[_0x31365d(0x1ac)]('[_]\x20Loaded.',0x7d0);}else{if(clickState===0x3){let _0x2e8b30=await a0_0x5a9e64[_0x31365d(0x1a8)](gameName,'0',_0x31365d(0x192)),_0x50fd8b=prompt(_0x31365d(0x188),_0x2e8b30);_0x50fd8b!==null&&_0x50fd8b!==''&&await a0_0x5a9e64[_0x31365d(0x1a6)](gameName,'0','ApiAzure',_0x50fd8b);}}clickState=0x0;},0x12c);}),turboButton[_0x17bcdf(0x193)](_0x46f6e8,async()=>{clickTurbo++,clearTimeout(clickTimeout),clickTimeout=setTimeout(async()=>{const _0x265e66=a0_0x5750;clickTurbo===0x2&&(turboState=turboState%0x3+0x1,turboF(turboState),await a0_0x5a9e64['setData'](gameName,'0',_0x265e66(0x186),turboState)),clickTurbo=0x0;},0x12c);});});function a0_0x2cb5(){const _0x175cda=['4097MEdaTS','Down','DOMContentLoaded','729396koNqxz','Down-right','156dmZPjH','1x\x20Speed','touches','Up-right','Down-left','setData','2694510TyoNyw','getData','move','buttonPress','1138800TFgMNH','notiMessage','remove','touchmove','setFastForwardMultiplier','turbo','touchstart','6026232UHxMbj','angle','elementFromPoint','add','8gImwHO','split','stateAuto','forEach','30401AuQhho',']\x20Saved.','buttonUnpress','#DD5639','touchend','turbo-medium','1550872nUFOwo','11CtlSHB','degree','Select','9zqHUxi','turboState','2x\x20Speed','apiKey,endpoint','Volume:\x20','4x\x20Speed','toLowerCase','ledSave','length','dispatchEvent','classList','14LMGxKt','includes','ApiAzure','addEventListener','Up-left','turbo-fast','[?]\x20Saved.','Right','getElementById','slotStateSaved','clientX','Left'];a0_0x2cb5=function(){return _0x175cda;};return a0_0x2cb5();}