/*Obfuscated by JShaman.com*/var request=require('../../utils/request.js');var crypto=require('../../utils/crypto.js');const app=getApp();Page({'data':{'kjStartMoney':null,'kjEndMoney':null,'showKjBtn':![],'loadDataProgressValue':0x14,'showApp':![],'pageNO':0x0,'isLoad':![],'isRequest':![],'showHb':![],'shareInfo':null,'info':{},'modalName2':'','modalName':'','cardCur':0x0,'swiperList':[],'feedCount':'-','feedList':[]},'onLoad':function(_0x7a0f31){if(app['globalData']['apiInfo']==null){wx['showModal']({'title':'登录提示','content':'检查到您未登录,请先进行登录！','showCancel':![],'success':()=>{wx['navigateTo']({'url':'/pages/login/login?json='+_0x7a0f31['json']});}});return;}if(app['globalData']['apiInfo']['kjStartMoney']!=null&&app['globalData']['apiInfo']['kjEndMoney']!=null){if(app['globalData']['apiInfo']['kjStartMoney']!=''){this['setData']({'kjStartMoney':app['globalData']['apiInfo']['kjStartMoney']});}if(app['globalData']['apiInfo']['kjEndMoney']!=''){this['setData']({'kjEndMoney':app['globalData']['apiInfo']['kjEndMoney']});}}this['initProgressView']();let _0x456657=null;if(_0x7a0f31['json']['indexOf']('{')>=(0xba8f8^0xba8f8)){_0x456657=JSON['parse'](_0x7a0f31['json']);}else{_0x456657=JSON['parse'](crypto['decrypted'](_0x7a0f31['json']));}if(_0x456657['key']==undefined){_0x456657['key']=_0x456657['id'];}this['setData']({'info':_0x456657});let _0x1bf2c8=_0x456657['from'];let _0x1a06fc=this['data']['info']['type'];if(_0x1a06fc=='拼多多'){request['getPddshowdetail'](this['data']['info']['id'],_0x32df45=>{_0x32df45['from']=_0x1bf2c8;this['setData']({'info':_0x32df45});this['data']['info']['imgList']['forEach'](_0x148492=>{this['data']['swiperList']['push']({'url':_0x148492});});this['setData']({'swiperList':this['data']['swiperList']});this['showApp']();});}else if(_0x1a06fc=='淘宝'){request['getTbshowdetail'](this['data']['info']['id'],_0x2471ac=>{_0x2471ac['from']=_0x1bf2c8;this['setData']({'info':_0x2471ac});this['data']['info']['imgList']['forEach'](_0x5bdc59=>{this['data']['swiperList']['push']({'url':_0x5bdc59});});this['setData']({'swiperList':this['data']['swiperList']});this['showApp']();});}else if(_0x1a06fc=='京东'){request['getJdshopDetail'](this['data']['info']['id'],_0x3bb56c=>{_0x3bb56c['from']=_0x1bf2c8;this['setData']({'info':_0x3bb56c,'shareInfo':{'appId':_0x3bb56c['appId'],'path':_0x3bb56c['wxPath'],'type':_0x3bb56c['type'],'h5':_0x3bb56c['resultH5Url'],'img':_0x3bb56c['img']}});this['data']['info']['imgList']['forEach'](_0x216392=>{this['data']['swiperList']['push']({'url':_0x216392});});this['setData']({'swiperList':this['data']['swiperList']});this['showApp']();});}else if(_0x1a06fc=='抖音'){let _0x4c2b5a=app['globalData']['tmpParams'];this['setData']({'info':_0x4c2b5a});this['data']['info']['imgList']['forEach'](_0x53a49e=>{this['data']['swiperList']['push']({'url':_0x53a49e});});this['setData']({'swiperList':this['data']['swiperList']});this['showApp']();}},'showModel2'(){this['setData']({'modalName2':'DialogModal2'});},'copyTbPwd'(){wx['setClipboardData']({'data':this['data']['shareInfo']['path'],'success':()=>{wx['showToast']({'title':'已复制','icon':'none'});},'fail':()=>{request['openApp']('wx2e2190862d71f2b0','/pages/copytxt/copytxt?json='+crypto['encrypted'](this['data']['shareInfo']['path']),_0x3733fe=>{});}});},'showModal'(_0x2a36b5){this['requestVo'](()=>{this['setData']({'modalName':'bottomModal'});},!![]);},'hideModal'(){this['setData']({'modalName':'','modalName2':''});},'itemImgClick'(_0x448e46){let _0x500fb3=[];this['data']['swiperList']['forEach'](_0x1a0015=>{_0x500fb3['push'](_0x1a0015['url']);});let _0x5e1c42=_0x448e46['currentTarget']['dataset']['index'];wx['previewImage']({'urls':_0x500fb3,'current':_0x500fb3[_0x5e1c42]['url']});},'onReady':function(){},'onShow':function(){},'onHide':function(){},'onUnload':function(){clearInterval(this['data']['tid']);},'onPullDownRefresh':function(){},'onReachBottom':function(){this['requestFeed']();},'onShareAppMessage':function(){},'goHome'(){if(this['data']['info']['from']!=null){wx['redirectTo']({'url':'/pages/index/index'});}else{wx['redirectTo']({'url':'/pages/login/login'});}},'goPath'(_0x26ed7b){let _0x1aec70=this['data']['info']['type'];if(_0x1aec70=='拼多多'){this['requestVo'](()=>{request['openApp'](this['data']['shareInfo']['appId'],this['data']['shareInfo']['path']);},!![]);}else if(_0x1aec70=='京东'){request['openApp'](this['data']['shareInfo']['appId'],this['data']['shareInfo']['path']);}else if(_0x1aec70=='淘宝'){this['requestVo'](()=>{this['showModel2']();},!![]);}},'requestVo'(_0x368171,_0x25f299){if(this['data']['shareInfo']!=null){_0x368171();return;}if(_0x25f299){wx['showLoading']({'title':'加载中'});}let _0x1baf45=this['data']['info']['type'];if(_0x1baf45=='拼多多'){request['getPddConvert'](this['data']['info']['key'],_0x4211b7=>{this['setData']({'shareInfo':_0x4211b7});wx['hideLoading']();_0x368171();});}else if(_0x1baf45=='淘宝'){request['getTbConvert'](this['data']['info']['key'],_0x191eb2=>{this['setData']({'shareInfo':_0x191eb2});wx['hideLoading']();_0x368171();});}else if(_0x1baf45=='抖音'){request['getDyConvert'](this['data']['info']['key'],_0x18c8d0=>{this['setData']({'shareInfo':_0x18c8d0});wx['hideLoading']();_0x368171();});}},'goPay'(){let _0x8c7c99=this['data']['info']['type'];this['requestVo'](()=>{if(_0x8c7c99=='京东'||_0x8c7c99=='拼多多'){request['openApp'](this['data']['shareInfo']['appId'],this['data']['shareInfo']['path']);}else if(_0x8c7c99=='淘宝'){this['showModel2']();}else if(_0x8c7c99=='抖音'){this['setData']({'modalName':'Image'});}},!![]);},'copyTxt'(){this['requestVo'](()=>{let _0x4e0529='下单地址';if(this['data']['info']['type']=='抖音'){_0x4e0529='下单口令';}let _0x51bd36=this['data']['info']['title']+'\x0a【原价】'+this['data']['info']['oldMoney']+'元\x0a【券后价】'+this['data']['info']['money']+'元\x0a---------\x0a【'+_0x4e0529+'】\x0a'+this['data']['shareInfo']['h5'];let _0xc440c2='【'+this['data']['info']['type']+'】\x20'+_0x51bd36;wx['setClipboardData']({'data':_0xc440c2,'success':()=>{wx['showToast']({'title':'内容已复制','icon':'none'});},'fail':()=>{request['openApp']('wx2e2190862d71f2b0','/pages/copytxt/copytxt?json='+crypto['encrypted'](_0xc440c2),_0x237499=>{});}});},!![]);},'shareHb'(_0x1460b2){this['hideModal']();this['setData']({'showHb':!![]});this['drawImage']();},'closeHb'(){this['setData']({'showHb':![]});},'drawImage'(){let _0x1b1c59={'type':this['data']['info']['type'],'id':this['data']['info']['id'],'from':'share'};let _0x22b59e='/pages/shopDetail/shopDetail?json='+crypto['encrypted'](JSON['stringify'](_0x1b1c59));let _0x57c640=request['getQrCode'](_0x22b59e);console['warn']('二维码图片'+_0x57c640);let _0x1dbc72=this['data']['info']['money'];let _0x1e696=this['data']['info']['oldMoney'];let _0x1fa2a8=this['data']['info']['jMoney'];let _0x322e14='';if(this['data']['info']['type']=='拼多多'){_0x322e14='https://www.ifaceai.com/img/pdd2.png';}else if(this['data']['info']['type']=='京东'){_0x322e14='https://www.ifaceai.com/img/jd1.png';}else if(this['data']['info']['type']=='淘宝'){_0x322e14='https://www.ifaceai.com/img/tb.png';}else if(this['data']['info']['type']=='抖音'){_0x322e14='https://www.ifaceai.com/img/douyin.png';}let _0x4b9bfe=this['data']['info']['title'];let _0x2bd885=this['data']['info']['img'];let _0x4885a4=_0x57c640;const _0x3b540e=wx['createSelectorQuery']();_0x3b540e['select']('#firstCanvas')['fields']({'node':!![],'size':!![]})['exec'](_0x56eeb4=>{const _0x44d02d=_0x56eeb4[0x77dd1^0x77dd1]['node'];this['setData']({'canvas':_0x44d02d});const _0x28be5c=_0x44d02d['getContext']('2d');const _0x37f9e2=app['globalData']['pixelRatio'];_0x44d02d['width']=_0x56eeb4[0x41b5d^0x41b5d]['width']*_0x37f9e2;_0x44d02d['height']=_0x56eeb4[0x5629b^0x5629b]['height']*_0x37f9e2;_0x28be5c['scale'](_0x37f9e2,_0x37f9e2);const _0x221656=_0x44d02d['createImage']();_0x221656['onload']=_0x4771d2=>{_0x28be5c['drawImage'](_0x221656,0xc9e67^0xc9e67,0x822f6^0x822f6,0x5ab64^0x5aa3a,0x53414^0x5354a);};_0x221656['src']=_0x2bd885;const _0x510ad9=_0x44d02d['createImage']();_0x510ad9['onload']=_0x451df7=>{_0x28be5c['drawImage'](_0x510ad9,0xc24b6^0xc24bc,0x29be0^0x29a88,0x14,0xd1690^0xd1684);};_0x510ad9['src']=_0x322e14;const _0x3328de=_0x44d02d['createImage']();_0x3328de['onload']=_0x468bab=>{_0x28be5c['drawImage'](_0x3328de,0xbe,0x19a,0xda103^0xda195,0x96);};_0x3328de['src']=_0x4885a4;let _0x21e589=_0x4b9bfe['split']('');let _0x11ed9a='';let _0x2aa7ee=[];_0x28be5c['fillStyle']='#313648';_0x28be5c['font']='16px\x20sans-serif';for(let _0x59724a=0xdf586^0xdf586;_0x59724a<_0x21e589['length'];_0x59724a++){if(_0x28be5c['measureText'](_0x11ed9a)['width']<(0xa60e8^0xa61ca)){_0x11ed9a+=_0x21e589[_0x59724a];}else{_0x59724a--;_0x2aa7ee['push'](_0x11ed9a);_0x11ed9a='';}}_0x2aa7ee['push'](_0x11ed9a);if(_0x2aa7ee['length']>0x2){let _0x61ae88=_0x2aa7ee['slice'](0xdd96b^0xdd96b,0xadbd6^0xadbd4);let _0x3c4536=_0x61ae88[0x40be6^0x40be7];let _0x470981='';let _0x419753=[];for(let _0x385293=0x0;_0x385293<_0x3c4536['length'];_0x385293++){if(_0x28be5c['measureText'](_0x470981)['width']<(0x1d5ba^0x1d4b4)){_0x470981+=_0x3c4536[_0x385293];}else{break;}}_0x419753['push'](_0x470981);let _0x4e5929=_0x419753[0xddc0d^0xddc0d]+'...';_0x61ae88['splice'](0x1,0x7a280^0x7a281,_0x4e5929);_0x2aa7ee=_0x61ae88;}for(let _0x59bf51=0x197db^0x197db;_0x59bf51<_0x2aa7ee['length'];_0x59bf51++){_0x28be5c['fillText'](_0x2aa7ee[_0x59bf51],0x6b7a3^0x6b78b,((0xa1900^0xa1b1c)-(0x3adad^0x3ad05))*0x1+_0x59bf51*0x14);}_0x28be5c['fillStyle']='#ff0000';_0x28be5c['font']='14px\x20sans-serif';_0x28be5c['fillText']('券后\x20¥',0x1ed8e^0x1ed84,0x2bc33^0x2bd9d);_0x28be5c['font']='18px\x20sans-serif';_0x28be5c['fillText'](_0x1dbc72,0x32,0xe6fb6^0xe6e18);_0x28be5c['font']='14px\x20sans-serif';_0x28be5c['fillStyle']='#cccccc';_0x28be5c['fillText']('原价\x20¥\x20'+_0x1e696,0xa,0xdc1bd^0xdc07a);_0x28be5c['strokeStyle']='#cccccc';_0x28be5c['moveTo'](0xa6d1c^0xa6d16,0x4f723^0x4f6e1);_0x28be5c['lineTo'](0x53279^0x53229,0x1c2);_0x28be5c['stroke']();let _0x220fab=_0x28be5c['measureText'](_0x1fa2a8)['width'];_0x28be5c['fillStyle']='#f37b1d';_0x28be5c['fillRect'](0x7d191^0x7d19b,0x372cb^0x3732b,_0x220fab+(0xf2154^0xf217c),0x23);_0x28be5c['fillStyle']='#ffffff';_0x28be5c['font']='16px\x20sans-serif';_0x28be5c['fillText'](_0x1fa2a8,0x14,0x1f7);});},'saveImg'(){wx['showLoading']({'title':'生成中'});wx['canvasToTempFilePath']({'canvas':this['data']['canvas'],'fileType':'jpg','success':_0x5b4710=>{var _0x2348a1=_0x5b4710['tempFilePath'];wx['saveImageToPhotosAlbum']({'filePath':_0x2348a1,'success':_0x44a19b=>{wx['showToast']({'title':'已保存到相册','icon':'success','duration':0x3e8});},'fail':_0x4c17ed=>{wx['hideLoading']();if(_0x4c17ed['errMsg']=='saveImageToPhotosAlbum:fail\x20auth\x20deny'){wx['showModal']({'title':'保存相册权限','content':'访问您的相册权限，需要小程序的设置中打开相册功能','cancelText':'取消','confirmText':'去设置','success':_0x869fb=>{if(_0x869fb['confirm']){wx['openSetting']({'withSubscriptions':!![]});}}});}}});},'fail':function(_0x3eba77){}});},'requestFeed'(){if(this['data']['isRequest']){return;}if(this['data']['isLoad']){return;}this['data']['isRequest']=!![];this['data']['pageNO']+=0x78bd2^0x78bd3;request['getTbFeed'](this['data']['info']['id'],this['data']['pageNO'],_0x117407=>{let _0x30aaf6=_0x117407['list'];if(_0x117407['count']==null||_0x117407['count']<=0x0){this['setData']({'isLoad':!![]});}else{this['setData']({'feedCount':_0x117407['count']});}if(_0x30aaf6['length']>0x0){let _0x4d2a70=this['data']['feedList']['concat'](_0x30aaf6);this['setData']({'feedList':_0x4d2a70});}this['data']['isRequest']=![];});},'showApp'(){if(this['data']['kjStartMoney']!=null&&this['data']['kjEndMoney']!=null){if(Number(this['data']['info']['oldMoney'])>=Number(this['data']['kjStartMoney'])&&Number(this['data']['info']['oldMoney'])<=Number(this['data']['kjEndMoney'])){this['setData']({'showKjBtn':!![]});}}clearInterval(this['data']['tid']);if(this['data']['loadDataProgressValue']<0x50){this['setData']({'loadDataProgressValue':0x50});}setTimeout(()=>{this['setData']({'showApp':!![]});},0x1f4);},'initProgressView'(){this['data']['tid']=setInterval(()=>{if(this['data']['loadDataProgressValue']>=0x64){clearInterval(this['data']['tid']);}else{this['setData']({'loadDataProgressValue':this['data']['loadDataProgressValue']+(0xc6a79^0xc6a7a)});}},0x50);},'onShareAppMessage'(){let _0x58eebf={'id':this['data']['info']['id'],'type':this['data']['info']['type'],'from':'share','key':this['data']['info']['id']};console['warn'](crypto['encrypted'](JSON['stringify'](_0x58eebf)));return{'title':this['data']['info']['title'],'path':'/pages/shopDetail/shopDetail?json='+crypto['encrypted'](JSON['stringify'](_0x58eebf))};},'openKj'(){if(this['data']['showKjBtn']==![]){wx['showToast']({'title':'此商品不支持砍价','icon':'none'});return;}let _0x3e733c={};_0x3e733c['shopId']=this['data']['info']['id'];_0x3e733c['shopType']=this['data']['info']['type'];_0x3e733c['money']=this['data']['info']['oldMoney'];_0x3e733c['shopTitle']=this['data']['info']['title'];_0x3e733c['shopLogo']=this['data']['info']['img'];wx['showLoading']({'title':'加入砍价中'});request['createKjInfo'](_0x3e733c['shopType'],_0x3e733c['shopId'],_0x3e733c['shopTitle'],_0x3e733c['shopLogo'],_0x3e733c['money'],_0xa029f1=>{wx['hideLoading']();if(_0xa029f1['error']==0x0||_0xa029f1['error']==(0xc0bd4^0xc0bd6)){wx['navigateTo']({'url':'/pages/shopDetail/kj/kj?uid='+_0xa029f1['uid']});}else if(_0xa029f1['error']==(0xe78d5^0xe78d4)){wx['showModal']({'title':'提示','content':_0xa029f1['msg']});}else{wx['showModal']({'title':'提示','content':_0xa029f1['msg']});}});},'saveDyImg'(){let _0x3d9109=new Date()['valueOf']();wx['downloadFile']({'url':this['data']['shareInfo']['img'],'filePath':wx['env']['USER_DATA_PATH']+'/'+_0x3d9109+'.png','success':_0x52f8fb=>{if(_0x52f8fb['statusCode']==(0x99f0c^0x99fc4)){let _0x116da5=_0x52f8fb['filePath'];wx['saveImageToPhotosAlbum']({'filePath':_0x116da5,'success':_0x2dca23=>{wx['showToast']({'title':'已保存到相册','icon':'success','duration':0x3e8});this['hideModal']();},'fail':_0x33d0be=>{wx['hideLoading']();if(_0x33d0be['errMsg']=='saveImageToPhotosAlbum:fail\x20auth\x20deny'){wx['showModal']({'title':'保存相册权限','content':'访问您的相册权限，需要小程序的设置中打开相册功能','cancelText':'取消','confirmText':'去设置','success':_0x5b2c23=>{if(_0x5b2c23['confirm']){wx['openSetting']({'withSubscriptions':!![]});}}});}}});}}});}});