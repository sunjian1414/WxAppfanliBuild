/*Obfuscated by JShaman.com*/const app=getApp();var request=require('../../../utils/request.js');Page({'data':{'info':{}},'onLoad'(_0x5a10d7){let _0x145b47=app['tmp'];_0x145b47['seckillShopDealInfoVO']['distance']=(Number(_0x145b47['seckillShopDealInfoVO']['distance'])/(0xd1f27^0xd1ccf))['toFixed'](0xa19dd^0xa19dc);this['setData']({'info':_0x145b47});console['warn'](_0x145b47);},'openMap'(){wx['getLocation']({'type':'gcj02','success':_0x546347=>{wx['openLocation']({'latitude':_0x546347['latitude'],'longitude':_0x546347['longitude'],'scale':0x11,'name':this['data']['info']['seckillShopDealInfoVO']['shopName'],'address':this['data']['info']['seckillShopDealInfoVO']['address']});}});},'itemClick'(_0x583dcd){let _0x347af0=_0x583dcd['currentTarget']['dataset']['index'];let _0x123ca8=this['data']['info']['seckillShopDealInfoVO']['dealList'][_0x347af0];request['openApp'](app['globalData']['mtWmAppid'],_0x123ca8['couponPageUrl']);},'onReady'(){},'onShow'(){},'onHide'(){},'onUnload'(){},'onPullDownRefresh'(){},'onReachBottom'(){},'onShareAppMessage'(){}});