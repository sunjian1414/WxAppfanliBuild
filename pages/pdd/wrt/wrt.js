/*Obfuscated by JShaman.com*/const app=getApp();var request=require('../../../utils/request.js');var crypto=require('../../../utils/crypto.js');Page({'data':{'pageNO':0x1,'CustomBar':app['globalData']['CustomBar'],'showDataList':[],'showSke':!![],'isLoad':![],'isRequest':![]},'onLoad':function(_0x258f93){this['requestData']();},'requestData'(){if(this['data']['isLoad']||this['data']['isRequest']){return;}request['getPddtj'](this['data']['pageNO'],_0x39c87a=>{let _0x524a59=_0x39c87a['list'];if(_0x524a59==null||_0x39c87a['total']<=(0x87086^0x87086)){this['setData']({'isLoad':!![],'showTip':!![]});}else{if(_0x524a59['length']<(0x48eb0^0x48ea4)){this['setData']({'isLoad':!![],'showTip':!![]});}let _0x2bbfb8=this['data']['showDataList']['concat'](_0x524a59);this['setData']({'showDataList':_0x2bbfb8});}this['data']['isRequest']=![];this['setData']({'showSke':![]});if(this['data']['showDataList']['length']<=(0x52014^0x52014)){this['setData']({'showTip':!![]});}},null,'6','4');},'onReady':function(){},'onShow':function(){},'onHide':function(){},'onUnload':function(){},'onPullDownRefresh':function(){},'onReachBottom':function(){if(this['data']['isLoad']||this['data']['isRequest']){return;}this['data']['pageNO']++;this['requestData']();},'onShareAppMessage':function(){},'shopItemClick'(_0x36bf4c){let _0x10152f=_0x36bf4c['currentTarget']['dataset']['index'];let _0x562498=this['data']['showDataList'][_0x10152f];let _0x2da8a4={'type':_0x562498['type'],'id':_0x562498['id'],'key':_0x562498['id']};wx['navigateTo']({'url':'/pages/shopDetail/shopDetail?json='+crypto['encrypted'](JSON['stringify'](_0x2da8a4))});}});