/*Obfuscated by JShaman.com*/const app=getApp();var request=require('../../utils/request.js');var crypto=require('../../utils/crypto.js');Page({'data':{'showGsMenu':![],'showLoginAd':!![],'tid':null,'second':0x0,'isLoad':![],'swiperList':[],'modalName':'','appName':app['globalData']['appName'],'btntxt':'数据初始化','_h':app['globalData']['clientHeight'],'canIUseGetUserProfile':![],'CustomBar':app['globalData']['CustomBar'],'isUse':![],'openid':null,'unionid':null,'kjuid':null,'json':null,'apikey':null},'onLoad':function(_0x40238c){if(wx['getStorageSync']('showLoginAd')!=null&&wx['getStorageSync']('showLoginAd')!==''){this['data']['showLoginAd']=wx['getStorageSync']('showLoginAd');}let _0x574015=_0x40238c['kjuid'];let _0x542c39=_0x40238c['json'];let _0x43a422=_0x40238c['apikey'];if(_0x574015!=''){this['data']['kjuid']=_0x574015;}if(_0x542c39!=''){this['data']['json']=_0x542c39;}if(_0x43a422!=null){this['data']['apikey']=_0x43a422;}app['getCode'](_0x125168=>{request['login'](_0x125168,_0x1205ba=>{this['setData']({'second':Number(_0x1205ba['pageTime'])});if(_0x1205ba['error']==(0xde564^0xde560)){wx['showModal']({'title':_0x1205ba['msg'],'content':'是否前往公众号进行体验？','cancelText':'取消','confirmText':'去关注','success':_0x3e47a3=>{if(_0x3e47a3['confirm']){this['showImages']();}}});}else if(_0x1205ba['error']==(0x9d3f9^0x9d3f8)){this['showModal']();}else if(_0x1205ba['error']==(0x6c8e3^0x6c8e3)){let _0x1dd27f={'positionId':_0x1205ba['positionId'],'openid':_0x1205ba['openid'],'logo':_0x1205ba['logo'],'yname':_0x1205ba['yname']};app['globalData']['userInfo']=_0x1dd27f;app['globalData']['apiInfo']=_0x1205ba['apiInfo'];this['data']['isUse']=_0x1205ba['isUse'];this['confirmUrl']();}else if(_0x1205ba['error']==(0x87266^0x87264)){this['setData']({'btntxt':'授权登录','openid':_0x1205ba['openid'],'unionid':_0x1205ba['unionid']});}else if(_0x1205ba['error']==(0xc1775^0xc1776)){this['data']['isUse']=_0x1205ba['isUse'];app['globalData']['apiInfo']=_0x1205ba['apiInfo'];let _0x847ff8={};_0x847ff8['openid']=_0x1205ba['openid'];if(this['data']['apikey']!=null){_0x847ff8['apikey']=this['data']['apikey'];}request['searchUserInfoByWxOpenId'](_0x847ff8,_0x47f210=>{let _0xf6d0e5=_0x47f210['data'];let _0xcdae24={'positionId':_0xf6d0e5['positionId'],'openid':_0xf6d0e5['wxAppOpenid'],'logo':null,'yname':null,'sex':null};app['globalData']['userInfo']=_0xcdae24;this['confirmUrl']();});}});});},'showModal'(){this['setData']({'btntxt':'前往公众号进行使用'});wx['showModal']({'title':'该小程序正在维护中，请移步至公众号进行使用！','content':'是否进行关注？','cancelText':'取消','confirmText':'去关注','success':_0x345825=>{if(_0x345825['confirm']){this['showImages']();}}});},'showImages'(){wx['previewImage']({'urls':['https://sunjian-1304419014.cos.ap-beijing.myqcloud.com/faceApp/flowimg/face.jpg']});},'getUserProfile'(_0x1e902d){if(this['data']['btntxt']=='跳过广告'){this['goHome']();}},'confirmUrl'(){if(this['data']['showLoginAd']==![]){this['goHome']();return;}if(app['globalData']['adList']['length']<=(0x8b397^0x8b397)){request['searchAdList'](_0x35aded=>{app['globalData']['adList']=_0x35aded['list'];app['globalData']['adList']['forEach']((_0x29a9b7,_0x25e70c)=>{if(_0x29a9b7['pageLogo']!=null&&_0x29a9b7['pageLogo']!=''){this['data']['swiperList']['push']({'path':_0x29a9b7['url'],'url':_0x29a9b7['pageLogo'],'isClick':_0x29a9b7['isClick']==(0x7f7f0^0x7f7f0)?!![]:![],'appid':_0x29a9b7['appid']});}});this['setData']({'swiperList':this['data']['swiperList']});if(this['data']['swiperList']['length']<=(0xd0b18^0xd0b18)){this['goHome']();}});}else{if(this['data']['second']>(0x490c3^0x490c3)){app['globalData']['adList']['forEach']((_0x388f0d,_0x1bd602)=>{if(_0x388f0d['pageLogo']!=null&&_0x388f0d['pageLogo']!=''){this['data']['swiperList']['push']({'path':_0x388f0d['url'],'url':_0x388f0d['pageLogo'],'isClick':_0x388f0d['isClick']==(0x7daac^0x7daac)?!![]:![],'appid':_0x388f0d['appid']});}});this['setData']({'swiperList':this['data']['swiperList']});}}if(this['data']['second']>(0xac236^0xac236)){this['setData']({'isLoad':!![],'btntxt':'跳过广告'});}this['startAnimate']();},'startAnimate'(){this['data']['tid']=setInterval(()=>{this['data']['second']--;this['setData']({'second':this['data']['second']});if(this['data']['second']<=(0xbe21b^0xbe21b)){clearInterval(this['data']['tid']);this['goHome']();}},0xc4f46^0xc4cae);},'goHome'(){if(this['data']['kjuid']!=null){wx['navigateTo']({'url':'/pages/shopDetail/mekj/mekj?uid='+this['data']['kjuid']});}else if(this['data']['json']!=null){wx['navigateTo']({'url':'/pages/shopDetail/shopDetail?json='+this['data']['json']});}else{if(this['data']['isUse']){wx['switchTab']({'url':'/pages/index/index'});}else{wx['switchTab']({'url':'/pages/home/home'});}}},'itemImgClick'(_0x210d5b){let _0x2de45c=_0x210d5b['currentTarget']['dataset']['index'];let _0x1940c4=this['data']['swiperList'][_0x2de45c];if(_0x1940c4['isClick']==![]){return;}request['openApp'](_0x1940c4['appid'],_0x1940c4['path']);},'openGgMenu'(){this['setData']({'showGsMenu':!this['data']['showGsMenu']});},'hideGg'(){this['setData']({'showGsMenu':![]});wx['setStorageSync']('showLoginAd',![]);this['goHome']();},'onReady':function(){},'onShow':function(){},'onHide':function(){},'onUnload':function(){},'onPullDownRefresh':function(){},'onReachBottom':function(){},'onShareAppMessage':function(){}});