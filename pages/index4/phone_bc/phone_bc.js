/*Obfuscated by JShaman.com*/const app=getApp();var request=require('../../../utils/request.js');Page({'data':{'showApp':![],'telInputTitle':'请输入绑定的手机号','bindBtnTxt':'确认绑定','isBind':![],'inputTel':'','positionId':null,'tel':null,'tel_show':'','openid':null,'codetxt':'获取验证码','telCode':'','code':null},'getTelCode'(){if(this['data']['codetxt']!='获取验证码'){return;}if(this['data']['inputTel']==''){wx['showToast']({'title':'请输入手机号','icon':'none'});return;}if(this['data']['inputTel']['length']!=(0xf0114^0xf011f)){wx['showToast']({'title':'请输入11位手机号','icon':'none'});return;}if(isNaN(this['data']['inputTel'])){wx['showToast']({'title':'请输入正确的手机号','icon':'none'});return;}wx['showModal']({'title':'发送确认','confirmText':'确认发送','showCancel':!![],'content':'是否发送短信至'+this['data']['inputTel'],'success':_0x5472cb=>{if(_0x5472cb['confirm']){wx['showLoading']({'title':'发送中'});if(this['data']['isBind']==![]){request['getOrderUserChangeTelCode'](this['data']['inputTel'],_0x331bf2=>{wx['hideLoading']();if(_0x331bf2['error']==(0x6296f^0x6296f)){wx['showToast']({'title':'发送成功','icon':'success','duration':0x1f4});this['startTelTime']();}else{wx['showModal']({'title':'提示','content':_0x331bf2['msg'],'showCancel':![]});}});}else{request['getOrderUserTelCode'](this['data']['inputTel'],_0x206051=>{wx['hideLoading']();if(_0x206051['error']==(0x72206^0x72206)){wx['showToast']({'title':'发送成功','icon':'success','duration':0x1f4});this['startTelTime']();}else{wx['showModal']({'title':'提示','content':_0x206051['msg'],'showCancel':![]});}});}}}});},'startTelTime'(){let _0x3a3a8d=0xe110c^0xe1130;let _0x275826=setInterval(()=>{if(_0x3a3a8d<(0x54eef^0x54eee)){clearInterval(_0x275826);this['setData']({'codetxt':'获取验证码'});return;}this['setData']({'codetxt':'剩余'+_0x3a3a8d+'秒'});_0x3a3a8d--;},0x70402^0x707ea);},'submitHand'(){if(this['data']['inputTel']==''){wx['showToast']({'title':'请输入手机号','icon':'none'});return;}if(this['data']['inputTel']['length']!=(0xecc81^0xecc8a)){wx['showToast']({'title':'请输入11位手机号','icon':'none'});return;}if(isNaN(this['data']['inputTel'])){wx['showToast']({'title':'请输入正确的手机号','icon':'none'});return;}if(this['data']['telCode']==''){wx['showToast']({'title':'请输入验证码','icon':'none'});return;}if(this['data']['telCode']['length']!=(0x59a34^0x59a30)){wx['showToast']({'title':'请输入四位验证码','icon':'none'});return;}let _0x41bf9f={};_0x41bf9f['tel']=this['data']['inputTel'];_0x41bf9f['openid']=this['data']['openid'];_0x41bf9f['telCode']=this['data']['telCode'];wx['showLoading']({'title':'绑定中'});if(this['data']['isBind']){request['createOrderUserTel'](this['data']['inputTel'],this['data']['telCode'],_0x3e8bef=>{wx['hideLoading']();if(_0x3e8bef['error']==(0xcd549^0xcd549)){wx['showToast']({'title':_0x3e8bef['msg'],'icon':'success','duration':0x3e8,'success':()=>{let _0x4b8ef4=getCurrentPages();let _0x32a329=_0x4b8ef4[_0x4b8ef4['length']-(0x1f7f6^0x1f7f4)];_0x32a329['refreshTel'](this['data']['inputTel']);wx['navigateBack']({'delta':0x1});}});}else{wx['showModal']({'title':'绑定提示','content':_0x3e8bef['msg'],'showCancel':![]});}});}else{request['createOrderUserChangeTel'](this['data']['inputTel'],this['data']['telCode'],_0x3fb2a3=>{wx['hideLoading']();if(_0x3fb2a3['error']==0x0){wx['showToast']({'title':_0x3fb2a3['msg'],'icon':'success','duration':0x3e8,'success':()=>{let _0x1e0a8b=getCurrentPages();let _0x1f67e0=_0x1e0a8b[_0x1e0a8b['length']-(0xbe08e^0xbe08c)];_0x1f67e0['refreshTel'](this['data']['inputTel']);wx['navigateBack']({'delta':0x1});}});}else{wx['showModal']({'title':'绑定提示','content':_0x3fb2a3['msg'],'showCancel':![]});}});}},'onLoad':function(_0x472acc){this['requestData']();},'requestData'(){request['searchUserInfo'](_0x5bf1be=>{this['setData']({'showApp':!![]});let _0x21fe96=_0x5bf1be['data']['tel'];if(_0x21fe96!=null&&_0x21fe96!=''){this['setData']({'tel':_0x21fe96,'tel_show':_0x21fe96['substring'](0x84f13^0x84f13,0x3)+'****'+_0x21fe96['substr'](0x7)});this['setData']({'positionId':app['globalData']['userInfo']['positionId'],'isBind':!![]});}else{this['setData']({'tel':null,'positionId':null});}});},'chageTelState'(){this['setData']({'isBind':![],'bindBtnTxt':'确认更换','telInputTitle':'请输入新手机号'});},'onReady':function(){},'onShow':function(){},'onHide':function(){},'onUnload':function(){var _0xc82159=getCurrentPages();var _0x10532f=_0xc82159[_0xc82159['length']-(0xea0d9^0xea0db)];if(this['data']['tel']==null){_0x10532f['refreshData']();}else{_0x10532f['refreshTel'](this['data']['tel']);}},'onPullDownRefresh':function(){},'onReachBottom':function(){},'onShareAppMessage':function(){}});