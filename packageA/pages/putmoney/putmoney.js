/*Obfuscated by JShaman.com*/const app=getApp();var request=require('../../../utils/request.js');var crypto=require('../../../utils/crypto.js');Page({'data':{'CustomBar':app['globalData']['CustomBar'],'isLoad':![],'positionId':null,'info':null,'money':null},'onLoad':function(_0x8a3447){this['searchMoney']();},'searchMoney'(){request['searchUserMoney'](_0x79471c=>{if(_0x79471c['error']==(0x780f5^0x780f5)){this['data']['info']=_0x79471c['data'];this['data']['info']['allmoney']=(this['data']['info']['nmoney']+this['data']['info']['confirmMoney'])['toFixed'](0x31bf5^0x31bf7);this['data']['positionId']=_0x79471c['data']['positionId'];this['setData']({'money':this['data']['info']['money']});}});},'payHand'(){if(this['data']['money']==null){return;}if((this['data']['info']['tel']==null||this['data']['info']['tel']=='')&&Number(this['data']['info']['money'])>(0x8deee^0x8deee)){wx['showModal']({'title':'安全验证','confirmText':'前往验证','showCancel':!![],'content':'检测到您未绑定常用手机号,需进行安全绑定方可提现','success':_0x10e859=>{if(_0x10e859['confirm']){wx['navigateTo']({'url':'/pages/index4/phone_bc/phone_bc'});}}});return;}if(Number(this['data']['info']['money'])<0.3){wx['showModal']({'title':'提示','content':'由于微信划账限制，最低0.3元起提','showCancel':![]});return;}let _0x5cb99d={'positionId':app['globalData']['userInfo']['positionId']};_0x5cb99d['fromType']='putMoney';request['openApp']('wx2e2190862d71f2b0','/pages/paymonth/paymonth?json='+crypto['encrypted'](JSON['stringify'](_0x5cb99d)),_0x414799=>{this['searchMoney']();});return;wx['showLoading']({'title':'提现中'});request['putMoneyToWx'](_0x2c6cc5=>{wx['hideLoading']();if(_0x2c6cc5['error']==(0xd6a27^0xd6a27)){this['searchMoney']();wx['showModal']({'title':'提现成功','content':'正在提现到您的微信余额，请稍微查收','showCancel':![]});}else{wx['showModal']({'title':'提示','content':_0x2c6cc5['msg'],'showCancel':![]});this['searchMoney']();}});},'refreshTel'(_0x7d17b3){this['data']['info']['tel']=_0x7d17b3;},'onReady':function(){},'onShow':function(){},'onHide':function(){},'onUnload':function(){var _0x3f41f3=getCurrentPages();var _0x39876a=_0x3f41f3[_0x3f41f3['length']-(0xcf5b9^0xcf5bb)];_0x39876a['refreshData']();},'onPullDownRefresh':function(){},'onReachBottom':function(){},'onShareAppMessage':function(){}});