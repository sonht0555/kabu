var a0_0xf9bcf=a0_0x395b;(function(_0x14f8ce,_0x34196c){var _0x264419=a0_0x395b,_0x43bd9a=_0x14f8ce();while(!![]){try{var _0x435c82=parseInt(_0x264419(0x176))/0x1+parseInt(_0x264419(0x1b0))/0x2+parseInt(_0x264419(0x189))/0x3+-parseInt(_0x264419(0x1aa))/0x4+parseInt(_0x264419(0x178))/0x5*(parseInt(_0x264419(0x1a8))/0x6)+-parseInt(_0x264419(0x1a2))/0x7*(-parseInt(_0x264419(0x1af))/0x8)+parseInt(_0x264419(0x175))/0x9*(-parseInt(_0x264419(0x193))/0xa);if(_0x435c82===_0x34196c)break;else _0x43bd9a['push'](_0x43bd9a['shift']());}catch(_0x225b08){_0x43bd9a['push'](_0x43bd9a['shift']());}}}(a0_0x2ec9,0x56247));function a0_0x2ec9(){var _0x2cba30=['stringify','code','https://api.dropboxapi.com/2/files/list_folder','https://content.dropboxapi.com/2/files/upload','Do\x20not\x20receive\x20access\x20token\x20&\x20refresh\x20token','413OZEfxt','access_token','entries','alert','parse','Kabu\x20storage\x20↦\x20Cloud\x20◆','347250iCvtvH','save','1747064orrckc','accessToken','search','screenshot','split','20552gRFkME','737672ZEugRN','refresh_token=','downloadFileInCloud','application/octet-stream','Error\x20while\x20refreshing\x20token:','responseText','&client_id=','addEventListener','/data/','Wait\x20a\x20little\x20bit...','Do\x20you\x20want\x20to\x20restore\x20','https://api.dropboxapi.com/oauth2/token','&grant_type=refresh_token&client_id=knh3uz2mx2hp2eu&client_secret=nwb3dnfh09rhs31','POST',',\x20status:\x20','Download\x20failed,\x20unknown\x20http\x20status:','send','filter','FSSync','Cloud\x20login\x20required!','getItem','Cloud\x20↦\x20Kabu\x20storage\x20◆','href','Restore\x20canceled\x20by\x20user.','&response_type=','application/x-www-form-urlencoded','Failed\x20to\x20refresh\x20Dropbox\x20token.','classList','status','setItem','&grant_type=','click','active','list','charAt','push','name','onload','application/json','blob','nwb3dnfh09rhs31','refreshToken','9bnJXZs','492690CYsNuZ','json','40BrnEBH','Folder\x20already\x20exists','slice','=([^&#]*)','Do\x20you\x20want\x20to\x20logout?','error','No\x20files\x20found\x20to\x20restore.','map','\x20files\x20in\x20Kabu?','https://www.dropbox.com/oauth2/authorize?client_id=','confirm','offline','replace','&token_access_type=','&redirect_uri=','remove','Unable\x20to\x20refresh\x20token','592647hxnKOS','DOMContentLoaded','exec','uid','location','overwrite','length','toUpperCase','authorization_code','state','8840410TFQYVi','log','folder','No\x20refresh\x20token','Refreshing\x20token...','uId','&client_secret=','knh3uz2mx2hp2eu','.tag','Bearer\x20'];a0_0x2ec9=function(){return _0x2cba30;};return a0_0x2ec9();}import*as a0_0x3b0fce from'./main.js';import{localStorageFile}from'./storage.js';var clientId=a0_0xf9bcf(0x19a),clientSecret=a0_0xf9bcf(0x173);function authorizeWithDropbox(){var _0x2a2b32=a0_0xf9bcf,_0x196da3=window[_0x2a2b32(0x18d)]['href'][_0x2a2b32(0x1ae)]('?')[0x0],_0x520910=_0x2a2b32(0x19e),_0x2f7ddf=_0x2a2b32(0x183),_0x3f9ef4=_0x2a2b32(0x181)+clientId+_0x2a2b32(0x1c8)+_0x520910+_0x2a2b32(0x185)+_0x2f7ddf+_0x2a2b32(0x186)+encodeURIComponent(_0x196da3);window[_0x2a2b32(0x18d)][_0x2a2b32(0x1c6)]=_0x3f9ef4;}function handleDropboxCallback(){var _0x23a051=a0_0xf9bcf,_0x44c842=getUrlParameter(_0x23a051(0x19e));_0x44c842?(getAccessToken(_0x44c842),console[_0x23a051(0x194)]('Authorization\x20Code:',_0x44c842)):console['log']('Do\x20not\x20receive\x20authorization');}function getUrlParameter(_0x3f39ee){var _0x522e31=a0_0xf9bcf;_0x3f39ee=_0x3f39ee['replace'](/[\[]/,'\x5c[')[_0x522e31(0x184)](/[\]]/,'\x5c]');var _0x705455=new RegExp('[\x5c?&#]'+_0x3f39ee+_0x522e31(0x17b)),_0x3ee749=_0x705455[_0x522e31(0x18b)](location[_0x522e31(0x1ac)]);return _0x3ee749===null?'':decodeURIComponent(_0x3ee749[0x1][_0x522e31(0x184)](/\+/g,'\x20'));}function getAccessToken(_0x47ff46){var _0x21a4fb=a0_0xf9bcf,_0x199ced=_0x21a4fb(0x191),_0x7ed6e1=window['location'][_0x21a4fb(0x1c6)][_0x21a4fb(0x1ae)]('?')[0x0],_0x476905=new XMLHttpRequest();_0x476905['open']('POST','https://api.dropbox.com/oauth2/token'),_0x476905['setRequestHeader']('Content-Type',_0x21a4fb(0x1c9)),_0x476905[_0x21a4fb(0x170)]=function(){var _0x2fcb7e=_0x21a4fb;if(_0x476905[_0x2fcb7e(0x1cc)]===0xc8){var _0x598561=JSON[_0x2fcb7e(0x1a6)](_0x476905[_0x2fcb7e(0x1b5)]),_0x426fc6=_0x598561[_0x2fcb7e(0x1a3)],_0x2a2508=_0x598561['refresh_token'],_0xc342ea=_0x598561[_0x2fcb7e(0x18c)];localStorage['setItem'](_0x2fcb7e(0x1ab),_0x426fc6),localStorage[_0x2fcb7e(0x1cd)](_0x2fcb7e(0x174),_0x2a2508),localStorage[_0x2fcb7e(0x1cd)](_0x2fcb7e(0x198),_0xc342ea);}else console['log'](_0x2fcb7e(0x1a1));},_0x476905[_0x21a4fb(0x1c0)]('code='+_0x47ff46+_0x21a4fb(0x1ce)+_0x199ced+_0x21a4fb(0x1b6)+clientId+_0x21a4fb(0x199)+clientSecret+_0x21a4fb(0x186)+encodeURIComponent(_0x7ed6e1));}export async function dpCreateFolder(_0x5d9a05){var _0x3fc02e=a0_0xf9bcf;const _0x5dd31d=localStorage[_0x3fc02e(0x1c4)](_0x3fc02e(0x198));let _0x18210f=localStorage[_0x3fc02e(0x1c4)](_0x3fc02e(0x1ab));const _0xd0e719='/'+_0x5dd31d+'/'+_0x5d9a05,_0xc43666=JSON[_0x3fc02e(0x19d)]({'path':_0xd0e719,'autorename':![]});for(let _0x1876b8=0x0;_0x1876b8<0x2;_0x1876b8++){try{const _0x14608c=await fetch('https://api.dropboxapi.com/2/files/create_folder_v2',{'method':'POST','headers':{'Authorization':_0x3fc02e(0x19c)+_0x18210f,'Content-Type':_0x3fc02e(0x171)},'body':_0xc43666});if(_0x14608c[_0x3fc02e(0x1cc)]===0x191){const _0x569eb4=await dpRefreshToken();if(!_0x569eb4)throw new Error(_0x3fc02e(0x188));_0x18210f=localStorage[_0x3fc02e(0x1c4)](_0x3fc02e(0x1ab));continue;}if(_0x14608c[_0x3fc02e(0x1cc)]===0x199)return{'message':_0x3fc02e(0x179),'path':_0x5d9a05};if(!_0x14608c['ok'])throw new Error('Error\x20creating\x20folder\x20'+_0x5d9a05);const _0x5d0f52=await _0x14608c[_0x3fc02e(0x177)]();return await lockNoti('Folder\x20created','',0xbb8),_0x5d0f52;}catch(_0x1d3cb6){if(_0x1876b8===0x1)throw _0x1d3cb6;}}return![];}function a0_0x395b(_0x3a723e,_0x1cca72){var _0x2ec964=a0_0x2ec9();return a0_0x395b=function(_0x395b44,_0x2651c5){_0x395b44=_0x395b44-0x170;var _0x152623=_0x2ec964[_0x395b44];return _0x152623;},a0_0x395b(_0x3a723e,_0x1cca72);}export async function dpRefreshToken(){var _0x46b923=a0_0xf9bcf;if(!localStorage['getItem'](_0x46b923(0x174)))throw _0x46b923(0x196);try{const _0x217ab7=await fetch(_0x46b923(0x1bb),{'method':_0x46b923(0x1bd),'headers':{'Content-Type':_0x46b923(0x1c9)},'body':_0x46b923(0x1b1)+localStorage[_0x46b923(0x1c4)](_0x46b923(0x174))+_0x46b923(0x1bc)}),_0xa53ae9=await _0x217ab7[_0x46b923(0x177)]();if(!_0xa53ae9['error'])return localStorage[_0x46b923(0x1cd)]('accessToken',_0xa53ae9[_0x46b923(0x1a3)]),await lockNoti('',_0x46b923(0x197),0xbb8),await delay(0x3e8),!![];else alert(_0xa53ae9['error_description']||_0x46b923(0x1ca));}catch(_0x19fc82){console[_0x46b923(0x17d)](_0x46b923(0x1b4),_0x19fc82);}return![];}export async function dpUploadFile(_0x3c80b1,_0x1e81a3,_0x2f05b3){var _0x20395d=a0_0xf9bcf;const _0x16ba2d=localStorage['getItem'](_0x20395d(0x198));var _0x5b1cc4=JSON['stringify']({'autorename':!![],'mode':_0x20395d(0x18e),'mute':!![],'strict_conflict':![],'path':'/'+_0x16ba2d+'/'+_0x2f05b3+'/'+_0x3c80b1}),_0x3d0cf2=new Blob([_0x1e81a3],{'type':_0x20395d(0x1b3)});for(var _0xdab3=0x0;_0xdab3<0x2;_0xdab3++){var _0x1f5242=await fetch(_0x20395d(0x1a0),{'method':_0x20395d(0x1bd),'headers':{'Authorization':'Bearer\x20'+localStorage[_0x20395d(0x1c4)](_0x20395d(0x1ab)),'Dropbox-API-Arg':_0x5b1cc4,'Content-Type':_0x20395d(0x1b3)},'body':_0x3d0cf2});if(_0x1f5242[_0x20395d(0x1cc)]!=0xc8){if(_0x1f5242['status']==0x191){var _0xe03829=await dpRefreshToken();if(!_0xe03829)throw _0x20395d(0x188);continue;}else throw'Upload\x20failed,\x20unknown\x20http\x20status:\x20'+_0x1f5242[_0x20395d(0x1cc)];}else{var _0x42ff9f=await _0x1f5242['json']();return console['log'](_0x20395d(0x1a7),_0x3c80b1),_0x42ff9f;}}return![];}export async function dpDownloadFile(_0x5cb5d5,_0x179287){var _0x4ab3e0=a0_0xf9bcf;const _0x129452=localStorage[_0x4ab3e0(0x1c4)]('uId');var _0x248519=JSON['stringify']({'path':'/'+_0x129452+'/'+_0x179287+'/'+_0x5cb5d5});for(var _0x2ccf7f=0x0;_0x2ccf7f<0x2;_0x2ccf7f++){var _0xf63239=await fetch('https://content.dropboxapi.com/2/files/download',{'method':_0x4ab3e0(0x1bd),'headers':{'Authorization':'Bearer\x20'+localStorage[_0x4ab3e0(0x1c4)](_0x4ab3e0(0x1ab)),'Dropbox-API-Arg':_0x248519}});if(_0xf63239[_0x4ab3e0(0x1cc)]!=0xc8){if(_0xf63239['status']==0x191){var _0x2e11ac=await dpRefreshToken();if(!_0x2e11ac)throw _0x4ab3e0(0x188);continue;}else throw _0x4ab3e0(0x1bf)+_0xf63239[_0x4ab3e0(0x1cc)];}const _0x1db4bc=new File([await _0xf63239[_0x4ab3e0(0x172)]()],_0x5cb5d5);return console['log'](_0x4ab3e0(0x1c5),_0x1db4bc['name']),a0_0x3b0fce['uploadFileInCloud'](_0x1db4bc,()=>{var _0x2d2bc4=_0x4ab3e0;localStorageFile(),Module[_0x2d2bc4(0x1c2)]();}),_0x1db4bc;}return![];}document[a0_0xf9bcf(0x1b7)](a0_0xf9bcf(0x18a),function(){var _0x2606d8=a0_0xf9bcf;dropboxRestore[_0x2606d8(0x1b7)]('click',async function(){var _0x52abef=_0x2606d8;await lockNoti(_0x52abef(0x1b9),'',0x1388);const _0x44b8fa=localStorage[_0x52abef(0x1c4)]('uId'),_0x1c6250=[_0x52abef(0x192),_0x52abef(0x1a9),_0x52abef(0x1ad)];if(!_0x44b8fa){window[_0x52abef(0x1a5)](_0x52abef(0x1c3));return;}let _0x41518d=[];for(const _0x3d1f6b of _0x1c6250){let _0x418b62={'path':'/'+_0x44b8fa+'/'+_0x3d1f6b};for(let _0xfc5e24=0x0;_0xfc5e24<0x2;_0xfc5e24++){let _0x3d997a=await fetch(_0x52abef(0x19f),{'method':_0x52abef(0x1bd),'headers':{'Authorization':_0x52abef(0x19c)+localStorage['getItem']('accessToken'),'Content-Type':_0x52abef(0x171)},'body':JSON[_0x52abef(0x19d)](_0x418b62)});if(_0x3d997a[_0x52abef(0x1cc)]===0xc8){let _0x4452dd=await _0x3d997a['json'](),_0x4c946f=_0x4452dd[_0x52abef(0x1a4)][_0x52abef(0x1c1)](_0x5c9abf=>_0x5c9abf[_0x52abef(0x19b)]==='file');_0x4c946f[_0x52abef(0x18f)]>0x0&&_0x41518d[_0x52abef(0x1d3)](..._0x4c946f[_0x52abef(0x17f)](_0x67e0d0=>({'name':_0x67e0d0[_0x52abef(0x1d4)],'folder':_0x3d1f6b})));break;}else{if(_0x3d997a[_0x52abef(0x1cc)]===0x191){let _0x22bc6f=await dpRefreshToken();if(!_0x22bc6f)throw _0x52abef(0x188);}else{console[_0x52abef(0x17d)]('Download\x20failed\x20for\x20'+_0x3d1f6b+_0x52abef(0x1be)+_0x3d997a[_0x52abef(0x1cc)]);break;}}}}if(_0x41518d[_0x52abef(0x18f)]>0x0){const _0x2d3011=_0x52abef(0x1ba)+_0x41518d[_0x52abef(0x18f)]+'\x20files\x20from\x20Cloud?';if(window[_0x52abef(0x182)](_0x2d3011))for(const _0x479f40 of _0x41518d){await lockNoti('Restoring...',_0x479f40['name'],0xbb8),await dpDownloadFile(_0x479f40[_0x52abef(0x1d4)],_0x479f40[_0x52abef(0x195)]);}else console['log'](_0x52abef(0x1c7));}else console['log'](_0x52abef(0x17e));}),dropboxBackup[_0x2606d8(0x1b7)](_0x2606d8(0x1cf),async function(){var _0x444d09=_0x2606d8;await lockNoti('Wait\x20a\x20little\x20bit...','',0x1388);const _0x50be47=localStorage[_0x444d09(0x1c4)](_0x444d09(0x198));if(_0x50be47===null||_0x50be47==='')window[_0x444d09(0x1a5)]('Cloud\x20login\x20required!');else{const _0x49337c=[_0x444d09(0x192),_0x444d09(0x1a9),_0x444d09(0x1ad)];for(const _0x3076bf of _0x49337c){await dpCreateFolder(_0x3076bf);}let _0x1505db=0x0;for(const _0x5c15bf of _0x49337c){const _0x2451d5=a0_0x3b0fce[_0x444d09(0x1d1)+(_0x5c15bf[_0x444d09(0x1d2)](0x0)[_0x444d09(0x190)]()+_0x5c15bf[_0x444d09(0x17a)](0x1))]();_0x1505db+=_0x2451d5[_0x444d09(0x18f)];}if(window[_0x444d09(0x182)]('Do\x20you\x20want\x20to\x20backup\x20'+_0x1505db+_0x444d09(0x180)))for(const _0x183504 of _0x49337c){const _0x4683dc=a0_0x3b0fce[_0x444d09(0x1d1)+(_0x183504[_0x444d09(0x1d2)](0x0)['toUpperCase']()+_0x183504[_0x444d09(0x17a)](0x1))]();for(const _0x3cbea2 of _0x4683dc){const _0x1146a2=await a0_0x3b0fce[_0x444d09(0x1b2)](_0x444d09(0x1b8)+_0x183504+'s/'+_0x3cbea2);try{await lockNoti('Backing\x20up...',_0x3cbea2,0xbb8),await dpUploadFile(_0x3cbea2,_0x1146a2,_0x183504);}catch(_0x2fef27){console['error']('Failed\x20to\x20upload\x20file\x20'+_0x3cbea2+':',_0x2fef27);}}}else console[_0x444d09(0x194)](_0x444d09(0x1c7));}}),dropboxCloud[_0x2606d8(0x1b7)](_0x2606d8(0x1cf),function(){var _0x3313d8=_0x2606d8;const _0x53bee7=localStorage[_0x3313d8(0x1c4)](_0x3313d8(0x198));_0x53bee7===null||_0x53bee7===''?authorizeWithDropbox():window['confirm'](_0x3313d8(0x17c))&&(localStorage[_0x3313d8(0x1cd)](_0x3313d8(0x198),''),dropboxRestore[_0x3313d8(0x1cb)][_0x3313d8(0x187)](_0x3313d8(0x1d0)),dropboxBackup['classList'][_0x3313d8(0x187)]('active'),dropboxCloud['classList'][_0x3313d8(0x187)](_0x3313d8(0x1d0)));}),handleDropboxCallback();});