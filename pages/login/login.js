/*Obfuscated by JShaman.com*/const app=getApp();var request=require('../../utils/request.js');var crypto=require('../../utils/crypto.js');Page({'data':{'showGsMenu':![],'showLoginAd':!![],'tid':null,'second':0x0,'isLoad':![],'swiperList':[],'modalName':'','appName':app['globalData']['appName'],'btntxt':'数据初始化','_h':app['globalData']['clientHeight'],'canIUseGetUserProfile':![],'CustomBar':app['globalData']['CustomBar'],'isUse':![],'openid':null,'unionid':null,'kjuid':null,'json':null,'apikey':null},'onLoad':function(_0x28bb7f){if(wx['getStorageSync']('showLoginAd')!=null&&wx['getStorageSync']('showLoginAd')!==''){this['data']['showLoginAd']=wx['getStorageSync']('showLoginAd');}let _0x4af667=_0x28bb7f['kjuid'];let _0x400383=_0x28bb7f['json'];let _0x35df07=_0x28bb7f['apikey'];if(_0x4af667!=''){this['data']['kjuid']=_0x4af667;}if(_0x400383!=''){this['data']['json']=_0x400383;}if(_0x35df07!=null){this['data']['apikey']=_0x35df07;}app['getCode'](_0x30eea8=>{request['login'](_0x30eea8,_0x131c8d=>{this['setData']({'second':Number(_0x131c8d['pageTime'])});if(_0x131c8d['error']==(0x60eac^0x60ea8)){wx['showModal']({'title':_0x131c8d['msg'],'content':'是否前往公众号进行体验？','cancelText':'取消','confirmText':'去关注','success':_0x58bffc=>{if(_0x58bffc['confirm']){this['showImages']();}}});}else if(_0x131c8d['error']==(0xad1c8^0xad1c9)){this['showModal']();}else if(_0x131c8d['error']==(0x994cd^0x994cd)){let _0xbc82fd={'positionId':_0x131c8d['positionId'],'openid':_0x131c8d['openid'],'logo':_0x131c8d['logo'],'yname':_0x131c8d['yname']};app['globalData']['userInfo']=_0xbc82fd;app['globalData']['apiInfo']=_0x131c8d['apiInfo'];this['data']['isUse']=_0x131c8d['isUse'];this['confirmUrl']();}else if(_0x131c8d['error']==(0x81d1c^0x81d1e)){this['setData']({'btntxt':'授权登录','openid':_0x131c8d['openid'],'unionid':_0x131c8d['unionid']});}else if(_0x131c8d['error']==(0xa9889^0xa988a)){this['data']['isUse']=_0x131c8d['isUse'];app['globalData']['apiInfo']=_0x131c8d['apiInfo'];let _0x219fd2={};_0x219fd2['openid']=_0x131c8d['openid'];if(this['data']['apikey']!=null){_0x219fd2['apikey']=this['data']['apikey'];}request['searchUserInfoByWxOpenId'](_0x219fd2,_0x1ba428=>{let _0x4698db=_0x1ba428['data'];let _0x356682={'positionId':_0x4698db['positionId'],'openid':_0x4698db['wxAppOpenid'],'logo':null,'yname':null,'sex':null};app['globalData']['userInfo']=_0x356682;this['confirmUrl']();});}});});},'showModal'(){this['setData']({'btntxt':'前往公众号进行使用'});wx['showModal']({'title':'该小程序正在维护中，请移步至公众号进行使用！','content':'是否进行关注？','cancelText':'取消','confirmText':'去关注','success':_0x1db600=>{if(_0x1db600['confirm']){this['showImages']();}}});},'showImages'(){wx['previewImage']({'urls':['https://sunjian-1304419014.cos.ap-beijing.myqcloud.com/faceApp/flowimg/face.jpg']});},'getUserProfile'(_0x1149e0){if(this['data']['btntxt']=='跳过广告'){this['goHome']();}},'confirmUrl'(){if(this['data']['showLoginAd']==![]){this['goHome']();return;}if(app['globalData']['adList']['length']<=(0x39d14^0x39d14)){request['searchAdList'](_0x2cb685=>{app['globalData']['adList']=_0x2cb685['list'];app['globalData']['adList']['forEach']((_0x47c4ab,_0xcd2f0)=>{if(_0x47c4ab['pageLogo']!=null&&_0x47c4ab['pageLogo']!=''){this['data']['swiperList']['push']({'path':_0x47c4ab['url'],'url':_0x47c4ab['pageLogo'],'isClick':_0x47c4ab['isClick']==(0xafaf9^0xafaf9)?!![]:![],'appid':_0x47c4ab['appid']});}});this['setData']({'swiperList':this['data']['swiperList']});if(this['data']['swiperList']['length']<=(0xd9a34^0xd9a34)){this['goHome']();}});}else{if(this['data']['second']>(0x88364^0x88364)){app['globalData']['adList']['forEach']((_0x298d7e,_0x420629)=>{if(_0x298d7e['pageLogo']!=null&&_0x298d7e['pageLogo']!=''){this['data']['swiperList']['push']({'path':_0x298d7e['url'],'url':_0x298d7e['pageLogo'],'isClick':_0x298d7e['isClick']==(0xd1e65^0xd1e65)?!![]:![],'appid':_0x298d7e['appid']});}});this['setData']({'swiperList':this['data']['swiperList']});}}if(this['data']['second']>0x0){this['setData']({'isLoad':!![],'btntxt':'跳过广告'});}this['startAnimate']();},'startAnimate'(){this['data']['tid']=setInterval(()=>{this['data']['second']--;this['setData']({'second':this['data']['second']});if(this['data']['second']<=0x0){clearInterval(this['data']['tid']);this['goHome']();}},0x3e8);},'goHome'(){if(this['data']['kjuid']!=null){wx['navigateTo']({'url':'/pages/shopDetail/mekj/mekj?uid='+this['data']['kjuid']});}else if(this['data']['json']!=null){wx['navigateTo']({'url':'/pages/shopDetail/shopDetail?json='+this['data']['json']});}else{if(this['data']['isUse']){wx['switchTab']({'url':'/pages/index/index'});}else{wx['switchTab']({'url':'/pages/home/home'});}}},'itemImgClick'(_0x479a1a){let _0x2214b0=_0x479a1a['currentTarget']['dataset']['index'];let _0x5f0922=this['data']['swiperList'][_0x2214b0];if(_0x5f0922['isClick']==![]){return;}request['openApp'](_0x5f0922['appid'],_0x5f0922['path']);},'openGgMenu'(){this['setData']({'showGsMenu':!this['data']['showGsMenu']});},'hideGg'(){this['setData']({'showGsMenu':![]});wx['setStorageSync']('showLoginAd',![]);this['goHome']();},'onReady':function(){},'onShow':function(){},'onHide':function(){},'onUnload':function(){},'onPullDownRefresh':function(){},'onReachBottom':function(){},'onShareAppMessage':function(){}});