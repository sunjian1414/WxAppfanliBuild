/*Obfuscated by JShaman.com*/const app=getApp();var request=require('../../utils/request.js');var crypto=require('../../utils/crypto.js');Page({'data':{'catId':null,'pageNO':0x1,'cardCur':0x0,'swiperList':[{'id':0x0,'type':'image','url':'https://www.ifaceai.com/img/index3_ban.png'}],'bgColor':'bg-red','CustomBar':app['globalData']['CustomBar'],'list1':[{'to':'/pages/index3/gyjx/gyjx','title':'高佣精选','url':'https://www.ifaceai.com/img/gylm.png'},{'to':'/pages/index3/ddq/ddq','title':'咚咚抢','url':'https://www.ifaceai.com/img/ddq.gif'},{'to':'/pages/index3/fqb/fqb','title':'实时疯抢榜','url':'https://www.ifaceai.com/img/fkq.gif'},{'to':'/pages/index3/by/by','title':'9块9包邮','url':'https://www.ifaceai.com/img/99.png'},{'to':'/pages/index3/zsz/zsz','title':'折上折','url':'https://www.ifaceai.com/img/zsz.png'}],'TabCur':0x0,'scrollLeft':0x0,'typeList':[],'showDataList':[],'showSke':!![],'isLoad':![],'isRequest':![]},'onLoad':function(_0x3bee2e){request['getTbShopType'](!![],_0x1eed2c=>{let _0x14685e=[];_0x1eed2c['forEach']((_0x2d19ef,_0x27e226)=>{_0x14685e['push']({'id':_0x2d19ef['tb_cid'],'name':_0x2d19ef['name']});});this['setData']({'typeList':_0x14685e});this['data']['catId']=_0x14685e[0x6a289^0x6a289]['id'];this['requestData']();});},'requestData'(){if(this['data']['isLoad']||this['data']['isRequest']){return;}request['getTbjingping'](this['data']['pageNO'],_0x5c2da7=>{let _0x4d9009=_0x5c2da7['data'];if(_0x4d9009==null||_0x5c2da7['total_results']<=(0xb6f12^0xb6f12)){this['setData']({'isLoad':!![],'showTip':!![]});}else{if(_0x4d9009['length']<(0x1d76a^0x1d77e)){this['setData']({'isLoad':!![],'showTip':!![]});}let _0x1f08d6=this['data']['showDataList']['concat'](_0x4d9009);this['setData']({'showDataList':_0x1f08d6});}this['data']['isRequest']=![];this['setData']({'showSke':![]});if(this['data']['showDataList']['length']<=(0xc4e56^0xc4e56)){this['setData']({'showTip':!![]});}},this['data']['catId']);},'tabSelect'(_0x152ce2){this['setData']({'TabCur':_0x152ce2['currentTarget']['dataset']['index'],'scrollLeft':(_0x152ce2['currentTarget']['dataset']['index']-(0x2abce^0x2abcf))*(0xf2d2d^0xf2d78)});this['data']['catId']=_0x152ce2['currentTarget']['dataset']['id'];this['data']['isLoad']=![];this['data']['isRequest']=![];this['data']['pageNO']=0x1deab^0x1deaa;this['setData']({'showSke':!![],'showDataList':[]});this['requestData']();},'onReady':function(){},'banItemClick'(_0x278537){wx['navigateTo']({'url':'/pages/xbzx/xbzx'});},'proClick'(_0x151a3b){let _0x3d4c10=_0x151a3b['currentTarget']['dataset']['index'];let _0x38ae19=this['data']['list1'][_0x3d4c10];wx['navigateTo']({'url':_0x38ae19['to']});},'onShow':function(){},'onHide':function(){},'onUnload':function(){},'onPullDownRefresh':function(){},'onReachBottom':function(){if(this['data']['isLoad']||this['data']['isRequest']){return;}this['data']['pageNO']++;this['requestData']();},'onShareAppMessage':function(){},'shopItemClick'(_0x11660a){let _0x601a87=_0x11660a['currentTarget']['dataset']['index'];let _0x3195ef=this['data']['showDataList'][_0x601a87];let _0x440c2d={'type':_0x3195ef['type'],'id':_0x3195ef['id'],'key':_0x3195ef['id']};wx['navigateTo']({'url':'/pages/shopDetail/shopDetail?json='+crypto['encrypted'](JSON['stringify'](_0x440c2d))});}});