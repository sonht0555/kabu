var a0_0x3e9fbf=a0_0x1926;(function(_0xf7e221,_0x5ef232){var _0xc93298=a0_0x1926,_0x324f08=_0xf7e221();while(!![]){try{var _0x5d2e9f=parseInt(_0xc93298(0xb8))/0x1*(-parseInt(_0xc93298(0x92))/0x2)+parseInt(_0xc93298(0x72))/0x3+parseInt(_0xc93298(0xcc))/0x4+-parseInt(_0xc93298(0x91))/0x5+-parseInt(_0xc93298(0x7f))/0x6*(parseInt(_0xc93298(0xa1))/0x7)+-parseInt(_0xc93298(0x9f))/0x8+parseInt(_0xc93298(0x74))/0x9*(parseInt(_0xc93298(0x9d))/0xa);if(_0x5d2e9f===_0x5ef232)break;else _0x324f08['push'](_0x324f08['shift']());}catch(_0x6876de){_0x324f08['push'](_0x324f08['shift']());}}}(a0_0x36d3,0x769d7));import*as a0_0x2ae383 from'./main.js';function a0_0x1926(_0x23120e,_0x173f80){var _0x36d3da=a0_0x36d3();return a0_0x1926=function(_0x1926d4,_0x59e78f){_0x1926d4=_0x1926d4-0x6d;var _0x8b76f3=_0x36d3da[_0x1926d4];return _0x8b76f3;},a0_0x1926(_0x23120e,_0x173f80);}import{localStorageFile}from'./storage.js';var clientId=a0_0x3e9fbf(0x9a),clientSecret=a0_0x3e9fbf(0x84);function authorizeWithDropbox(){var _0x2282ad=a0_0x3e9fbf,_0x1ddd5f=window['location'][_0x2282ad(0xbf)][_0x2282ad(0xa9)]('?')[0x0],_0x184745=_0x2282ad(0x6e),_0x1d2f10='offline',_0xf2bad0=_0x2282ad(0xa4)+clientId+_0x2282ad(0x7c)+_0x184745+'&token_access_type='+_0x1d2f10+_0x2282ad(0xa2)+encodeURIComponent(_0x1ddd5f);window[_0x2282ad(0xb4)][_0x2282ad(0xbf)]=_0xf2bad0;}function handleDropboxCallback(){var _0x13fd8d=a0_0x3e9fbf,_0x1206f5=getUrlParameter('code');_0x1206f5?(getAccessToken(_0x1206f5),console[_0x13fd8d(0xda)](_0x13fd8d(0xcb),_0x1206f5)):console[_0x13fd8d(0xda)]('Do\x20not\x20receive\x20authorization');}function getUrlParameter(_0x307653){var _0x4506d4=a0_0x3e9fbf;_0x307653=_0x307653[_0x4506d4(0x83)](/[\[]/,'\x5c[')[_0x4506d4(0x83)](/[\]]/,'\x5c]');var _0x2b1666=new RegExp(_0x4506d4(0x98)+_0x307653+_0x4506d4(0x7b)),_0x467550=_0x2b1666[_0x4506d4(0x80)](location[_0x4506d4(0xaa)]);return _0x467550===null?'':decodeURIComponent(_0x467550[0x1][_0x4506d4(0x83)](/\+/g,'\x20'));}function getAccessToken(_0x3e03b2){var _0x3a6b35=a0_0x3e9fbf,_0x5751df=_0x3a6b35(0x8a),_0x2962bb=window[_0x3a6b35(0xb4)][_0x3a6b35(0xbf)][_0x3a6b35(0xa9)]('?')[0x0],_0x360aea=new XMLHttpRequest();_0x360aea[_0x3a6b35(0xc5)](_0x3a6b35(0xdd),_0x3a6b35(0xdf)),_0x360aea[_0x3a6b35(0x76)](_0x3a6b35(0x6d),_0x3a6b35(0xc2)),_0x360aea[_0x3a6b35(0x99)]=function(){var _0x3508b8=_0x3a6b35;if(_0x360aea[_0x3508b8(0x9b)]===0xc8){var _0x2b878c=JSON['parse'](_0x360aea[_0x3508b8(0xac)]),_0x32c590=_0x2b878c[_0x3508b8(0xaf)],_0x34e678=_0x2b878c[_0x3508b8(0xa0)],_0x11d88c=_0x2b878c[_0x3508b8(0x77)];localStorage[_0x3508b8(0xb2)](_0x3508b8(0x89),_0x32c590),localStorage[_0x3508b8(0xb2)]('refreshToken',_0x34e678),localStorage[_0x3508b8(0xb2)]('uId',_0x11d88c);}else console['log'](_0x3508b8(0x93));},_0x360aea[_0x3a6b35(0xc8)](_0x3a6b35(0xd7)+_0x3e03b2+'&grant_type='+_0x5751df+_0x3a6b35(0xbb)+clientId+_0x3a6b35(0xdb)+clientSecret+_0x3a6b35(0xa2)+encodeURIComponent(_0x2962bb));}export async function dpRefreshToken(){var _0x106d9d=a0_0x3e9fbf;if(!localStorage[_0x106d9d(0x85)](_0x106d9d(0xde)))throw'No\x20refresh\x20token';try{const _0x15aef8=await fetch(_0x106d9d(0xd2),{'method':'POST','headers':{'Content-Type':'application/x-www-form-urlencoded'},'body':_0x106d9d(0xdc)+localStorage[_0x106d9d(0x85)](_0x106d9d(0xde))+_0x106d9d(0xd0)}),_0x59fc31=await _0x15aef8[_0x106d9d(0x81)]();if(!_0x59fc31[_0x106d9d(0x9e)])return localStorage['setItem'](_0x106d9d(0x89),_0x59fc31[_0x106d9d(0xaf)]),await lockNoti('',_0x106d9d(0x8d),0xbb8),await delay(0x3e8),!![];else alert(_0x59fc31['error_description']||_0x106d9d(0x82));}catch(_0x2f99ed){console[_0x106d9d(0x9e)](_0x106d9d(0xc3),_0x2f99ed);}return![];}function a0_0x36d3(){var _0x385758=['1567668oZbbAP','charAt','https://content.dropboxapi.com/2/files/download','.gba_dateState','&grant_type=refresh_token&client_id=knh3uz2mx2hp2eu&client_secret=nwb3dnfh09rhs31','Cloud\x20login\x20required!','https://api.dropboxapi.com/oauth2/token','_dateState','_imageState','Restore\x20canceled\x20by\x20user.','state','code=','application/octet-stream','classList','log','&client_secret=','refresh_token=','POST','refreshToken','https://api.dropbox.com/oauth2/token','blob','Content-Type','code','https://content.dropboxapi.com/2/files/upload','click','.ss2','2237817VQHNpZ','Cloud\x20↦\x20Kabu\x20storage\x20◆','392463TRrROU','DOMContentLoaded','setRequestHeader','uid','downloadFileInCloud','toUpperCase','.tag','=([^&#]*)','&response_type=','text/plain','endsWith','366BQRbuE','exec','json','Failed\x20to\x20refresh\x20Dropbox\x20token.','replace','nwb3dnfh09rhs31','getItem','Failed\x20to\x20upload\x20file\x20','Restoring...','entries','accessToken','authorization_code','file','FSSync','Refreshing\x20token...','application/json','addEventListener','lastIndexOf','189855UPCmUy','4FzLpHd','Do\x20not\x20receive\x20access\x20token\x20&\x20refresh\x20token','Bearer\x20','.ss7','confirm','slice','[\x5c?&#]','onload','knh3uz2mx2hp2eu','status','.ss1','290fOJanE','error','6215792srAlET','refresh_token','51079zxbVgL','&redirect_uri=','alert','https://www.dropbox.com/oauth2/authorize?client_id=','.gba_slot','substring','name','Unable\x20to\x20refresh\x20token','split','search','active','responseText','Do\x20you\x20want\x20to\x20logout?','https://api.dropboxapi.com/2/files/list_folder','access_token','text','\x20files\x20in\x20Cloud?','setItem','gba','location','stringify','.ss4','length','328275ilXzkt','status:\x20','Download\x20failed,\x20unknown\x20http\x20status:','&client_id=','list','.gba_imageState','/data/','href','.ss0','Download\x20failed,\x20unknown\x20http\x20status:\x20','application/x-www-form-urlencoded','Error\x20while\x20refreshing\x20token:','remove','open','.ss5','.txt','send','Do\x20you\x20want\x20to\x20backup\x20','uId','Authorization\x20Code:'];a0_0x36d3=function(){return _0x385758;};return a0_0x36d3();}export async function dpUploadFile(_0x425999,_0x156cc4){var _0xccf36d=a0_0x3e9fbf;const _0x521606=localStorage[_0xccf36d(0x85)](_0xccf36d(0xca));var _0x35ccf2=JSON[_0xccf36d(0xb5)]({'autorename':!![],'mode':'overwrite','mute':!![],'strict_conflict':![],'path':'/'+_0x521606+'/'+_0x425999}),_0x1535e8=new Blob([_0x156cc4],{'type':_0xccf36d(0xd8)});for(var _0xdb9f2c=0x0;_0xdb9f2c<0x2;_0xdb9f2c++){var _0x541819=await fetch(_0xccf36d(0x6f),{'method':_0xccf36d(0xdd),'headers':{'Authorization':'Bearer\x20'+localStorage['getItem']('accessToken'),'Dropbox-API-Arg':_0x35ccf2,'Content-Type':_0xccf36d(0xd8)},'body':_0x1535e8});if(_0x541819[_0xccf36d(0x9b)]!=0xc8){if(_0x541819[_0xccf36d(0x9b)]==0x191){var _0x34ff9a=await dpRefreshToken();if(!_0x34ff9a)throw _0xccf36d(0xa8);continue;}else throw'Upload\x20failed,\x20unknown\x20http\x20status:\x20'+_0x541819[_0xccf36d(0x9b)];}else{var _0x4fbc70=await _0x541819[_0xccf36d(0x81)]();return console[_0xccf36d(0xda)]('Kabu\x20storage\x20↦\x20Cloud\x20◆',_0x425999),_0x4fbc70;}}return![];}async function dpDownloadFile(_0x576d60){var _0x479385=a0_0x3e9fbf;const _0x4d746a=localStorage['getItem'](_0x479385(0xca));var _0x5b2533=JSON[_0x479385(0xb5)]({'path':'/'+_0x4d746a+'/'+_0x576d60});for(var _0x4c8e68=0x0;_0x4c8e68<0x2;_0x4c8e68++){var _0x22d33b=await fetch(_0x479385(0xce),{'method':'POST','headers':{'Authorization':_0x479385(0x94)+localStorage[_0x479385(0x85)](_0x479385(0x89)),'Dropbox-API-Arg':_0x5b2533}});if(_0x22d33b[_0x479385(0x9b)]!=0xc8){if(_0x22d33b[_0x479385(0x9b)]==0x191){var _0x51ce2f=await dpRefreshToken();if(!_0x51ce2f)throw _0x479385(0xa8);continue;}else throw _0x479385(0xba)+_0x22d33b[_0x479385(0x9b)];}const _0x56dabb=new File([await _0x22d33b[_0x479385(0xe0)]()],_0x576d60);console[_0x479385(0xda)](_0x479385(0x73),_0x56dabb[_0x479385(0xa7)]);if(_0x576d60[_0x479385(0x7e)](_0x479385(0xc7))){const _0x13ba85=await _0x56dabb[_0x479385(0xb0)](),[_0x4d3f7a,_0x45eb69]=_0x13ba85[_0x479385(0xa9)]('\x0a\x0a'),_0x5bdb28=_0x576d60['substring'](0x0,_0x576d60[_0x479385(0x90)](_0x479385(0xb3))+0x3),_0x4afac6=_0x576d60[_0x479385(0xcd)](_0x576d60['length']-0x5);localStorage['setItem'](_0x5bdb28+_0x479385(0xd3)+_0x4afac6,_0x45eb69),localStorage[_0x479385(0xb2)](_0x5bdb28+_0x479385(0xd4)+_0x4afac6,_0x4d3f7a);}else a0_0x2ae383['uploadSaveOrSaveState'](_0x56dabb,()=>{var _0x38b265=_0x479385;localStorageFile(),Module[_0x38b265(0x8c)]();});return _0x56dabb;}return![];}document[a0_0x3e9fbf(0x8f)](a0_0x3e9fbf(0x75),function(){var _0x21372d=a0_0x3e9fbf;dropboxRestore[_0x21372d(0x8f)](_0x21372d(0x70),async function(){var _0x2a39ef=_0x21372d;const _0x2e4407=localStorage[_0x2a39ef(0x85)](_0x2a39ef(0xca));if(_0x2e4407===null||_0x2e4407==='')window[_0x2a39ef(0xa3)](_0x2a39ef(0xd1));else{var _0xa3032b={'path':'/'+_0x2e4407};for(var _0x4938af=0x0;_0x4938af<0x2;_0x4938af++){var _0x4a22e3=await fetch(_0x2a39ef(0xae),{'method':'POST','headers':{'Authorization':_0x2a39ef(0x94)+localStorage[_0x2a39ef(0x85)](_0x2a39ef(0x89)),'Content-Type':_0x2a39ef(0x8e)},'body':JSON[_0x2a39ef(0xb5)](_0xa3032b)});console['log'](_0x2a39ef(0xb9),_0x4a22e3[_0x2a39ef(0x9b)]);if(_0x4a22e3[_0x2a39ef(0x9b)]!=0xc8){if(_0x4a22e3[_0x2a39ef(0x9b)]==0x191){var _0x4fdf88=await dpRefreshToken();if(!_0x4fdf88)throw _0x2a39ef(0xa8);continue;}else throw _0x2a39ef(0xc1)+_0x4a22e3[_0x2a39ef(0x9b)];}else{const _0x1ece3f=await _0x4a22e3[_0x2a39ef(0x81)](),_0x11f5fd=_0x1ece3f[_0x2a39ef(0x88)]['filter'](_0x5e0684=>_0x5e0684[_0x2a39ef(0x7a)]===_0x2a39ef(0x8b))['length'],_0x4ef30d='Do\x20you\x20want\x20to\x20restore\x20'+_0x11f5fd+_0x2a39ef(0xb1);if(window['confirm'](_0x4ef30d))for(const _0x27f874 of _0x1ece3f[_0x2a39ef(0x88)]){_0x27f874[_0x2a39ef(0x7a)]==='file'&&(await lockNoti(_0x2a39ef(0x87),_0x27f874[_0x2a39ef(0xa7)],0xbb8),await dpDownloadFile(_0x27f874[_0x2a39ef(0xa7)]));}else console[_0x2a39ef(0xda)](_0x2a39ef(0xd5));return!![];}}return![];}}),dropboxBackup[_0x21372d(0x8f)](_0x21372d(0x70),async function(){var _0x217381=_0x21372d;const _0x43e7e6=localStorage[_0x217381(0x85)](_0x217381(0xca));if(_0x43e7e6===null||_0x43e7e6==='')window[_0x217381(0xa3)](_0x217381(0xd1));else{const _0x1e18e5=[_0x217381(0xd6),'save'];let _0x56019d=0x0;for(const _0x24c3b7 of _0x1e18e5){const _0x22fcf7=a0_0x2ae383[_0x217381(0xbc)+(_0x24c3b7[_0x217381(0xcd)](0x0)[_0x217381(0x79)]()+_0x24c3b7[_0x217381(0x97)](0x1))]();_0x56019d+=_0x22fcf7[_0x217381(0xb7)];}if(window['confirm'](_0x217381(0xc9)+_0x56019d+'\x20files\x20in\x20Kabu?'))for(const _0x2fe06d of _0x1e18e5){const _0x5da659=a0_0x2ae383[_0x217381(0xbc)+(_0x2fe06d[_0x217381(0xcd)](0x0)['toUpperCase']()+_0x2fe06d[_0x217381(0x97)](0x1))]();for(const _0x15e585 of _0x5da659){const _0xd67039=await a0_0x2ae383[_0x217381(0x78)](_0x217381(0xbe)+_0x2fe06d+'s/'+_0x15e585);try{await lockNoti('Backing\x20up...',_0x15e585,0xbb8),await dpUploadFile(_0x15e585,_0xd67039);if(_0x15e585[_0x217381(0x7e)](_0x217381(0xc0))||_0x15e585['endsWith'](_0x217381(0x9c))||_0x15e585[_0x217381(0x7e)](_0x217381(0x71))||_0x15e585[_0x217381(0x7e)]('.ss3')||_0x15e585['endsWith'](_0x217381(0xb6))||_0x15e585[_0x217381(0x7e)](_0x217381(0xc6))||_0x15e585[_0x217381(0x7e)]('.ss6')||_0x15e585[_0x217381(0x7e)](_0x217381(0x95))){const _0x3ca6aa=_0x15e585[_0x217381(0xa6)](0x0,_0x15e585[_0x217381(0x90)]('.')),_0x4d66b7=_0x15e585[_0x217381(0xcd)](_0x15e585['length']-0x1),_0x124169=localStorage[_0x217381(0x85)](_0x3ca6aa+_0x217381(0xbd)+_0x4d66b7),_0x1f1ccd=localStorage[_0x217381(0x85)](_0x3ca6aa+_0x217381(0xcf)+_0x4d66b7);if(_0x124169!==null){const _0x2847ab=_0x124169+'\x0a\x0a'+_0x1f1ccd,_0x5b58ba=new Blob([_0x2847ab],{'type':_0x217381(0x7d)});await lockNoti('Backing\x20up...',_0x3ca6aa+_0x217381(0xa5)+_0x4d66b7+_0x217381(0xc7),0xbb8),await dpUploadFile(_0x3ca6aa+'.gba_slot'+_0x4d66b7+_0x217381(0xc7),_0x5b58ba);}}}catch(_0x1d32c2){console[_0x217381(0x9e)](_0x217381(0x86)+_0x15e585+':',_0x1d32c2);}}}else console[_0x217381(0xda)](_0x217381(0xd5));}}),dropboxCloud['addEventListener']('click',function(){var _0x5d726c=_0x21372d;const _0x2d0370=localStorage[_0x5d726c(0x85)]('uId');_0x2d0370===null||_0x2d0370===''?authorizeWithDropbox():window[_0x5d726c(0x96)](_0x5d726c(0xad))&&(localStorage[_0x5d726c(0xb2)](_0x5d726c(0xca),''),dropboxRestore[_0x5d726c(0xd9)][_0x5d726c(0xc4)](_0x5d726c(0xab)),dropboxBackup['classList'][_0x5d726c(0xc4)](_0x5d726c(0xab)),dropboxCloud[_0x5d726c(0xd9)][_0x5d726c(0xc4)](_0x5d726c(0xab)));}),handleDropboxCallback();});