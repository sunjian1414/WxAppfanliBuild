/*Obfuscated by JShaman.com*/const app=getApp();var request=require('../../../utils/request.js');var crypto=require('../../../utils/crypto.js');Page({'data':{'showTb':0x1,'TabCur':0x0,'scrollLeft':0x0,'TabCur1':0x0,'scrollLeft1':0x0,'typelist':['综合','价格','销量'],'showDataList':[],'isRequest':![],'isLoad':![],'pageNO':0x1,'minId':'1','showSke':!![]},'onLoad':function(_0x3fecd0){this['setData']({'showTb':app['globalData']['apiInfo']['showTb']});if(this['data']['showTb']==(0xc9858^0xc9859)){this['setData']({'TabCur':0x1});}this['requestData']();},'requestData'(){if(this['data']['isRequest']||this['data']['isLoad']){return;}if(this['data']['TabCur']==(0xb5d09^0xb5d09)){let _0x317e90=null;if(this['data']['TabCur1']==(0x3d07b^0x3d07b)){_0x317e90='0';}else if(this['data']['TabCur1']==(0xc3425^0xc3424)){_0x317e90='1';}else if(this['data']['TabCur1']==(0xc4787^0xc4785)){_0x317e90='4';}this['data']['isRequest']=!![];request['getTb9k9'](this['data']['minId'],_0x317e90,null,_0x2cb0b2=>{this['data']['minId']=_0x2cb0b2['min_id'];let _0x1eba4f=_0x2cb0b2['data'];if(_0x1eba4f==null||_0x1eba4f['length']<=(0x349c7^0x349c7)){this['setData']({'isLoad':!![],'showTip':!![]});}else{if(_0x1eba4f['length']<(0xc326b^0xc327f)){this['setData']({'isLoad':!![],'showTip':!![]});}let _0x4a8717=this['data']['showDataList']['concat'](_0x1eba4f);this['setData']({'showDataList':_0x4a8717});}this['data']['isRequest']=![];this['setData']({'showSke':![]});if(this['data']['showDataList']['length']<=(0xd09f5^0xd09f5)){this['setData']({'showTip':!![]});}});}else if(this['data']['TabCur']==(0x30852^0x30853)){let _0x3ae3a3=null;let _0x287675=null;if(this['data']['TabCur1']==(0xef30b^0xef30b)){_0x3ae3a3='goodComments';_0x287675='desc';}else if(this['data']['TabCur1']==(0x3a985^0x3a984)){_0x3ae3a3='price';_0x287675='asc';}else if(this['data']['TabCur1']==0x2){_0x3ae3a3='inOrderCount30DaysSku';_0x287675='desc';}this['data']['isRequest']=!![];request['getJdhaohuo'](this['data']['pageNO'],_0x2ba747=>{let _0x3bc9fa=_0x2ba747['list'];if(_0x3bc9fa==null||_0x3bc9fa['length']<=(0x9b74f^0x9b74f)){this['setData']({'isLoad':!![],'showTip':!![]});}else{if(_0x3bc9fa['length']<(0x4c43f^0x4c42b)){this['setData']({'isLoad':!![],'showTip':!![]});}let _0x4e4785=this['data']['showDataList']['concat'](_0x3bc9fa);this['setData']({'showDataList':_0x4e4785});}this['data']['isRequest']=![];this['setData']({'showSke':![]});if(this['data']['showDataList']['length']<=0x0){this['setData']({'showTip':!![]});}},'10',_0x3ae3a3,_0x287675);}else if(this['data']['TabCur']==0x2){this['data']['isRequest']=!![];let _0xd81948=null;if(this['data']['TabCur1']==(0xae965^0xae965)){_0xd81948='0';}else if(this['data']['TabCur1']==0x1){_0xd81948='5';}else if(this['data']['TabCur1']==0x2){_0xd81948='6';}request['getPddSuperSeach']('*',this['data']['pageNO'],_0xd81948,_0x385eeb=>{let _0x1aa8ce=_0x385eeb['data'];if(_0x1aa8ce==null||_0x385eeb['total_results']<=(0x85db4^0x85db4)){this['setData']({'isLoad':!![],'showTip':!![]});}else{if(_0x1aa8ce['length']<0x14){this['setData']({'isLoad':!![],'showTip':!![]});}let _0x1cee5c=this['data']['showDataList']['concat'](_0x1aa8ce);this['setData']({'showDataList':_0x1cee5c});}this['data']['isRequest']=![];this['setData']({'showSke':![]});if(this['data']['showDataList']['length']<=0x0){this['setData']({'showTip':!![]});}});}},'tabSelect'(_0x5994fa){this['setData']({'TabCur':_0x5994fa['currentTarget']['dataset']['id'],'scrollLeft':(_0x5994fa['currentTarget']['dataset']['id']-(0x69942^0x69943))*(0xe0bd7^0xe0beb),'isLoad':![],'showSke':!![],'showDataList':[],'showTip':![],'TabCur1':0x0});this['data']['pageNO']=0xe46ac^0xe46ad;this['data']['minId']='1';this['requestData']();},'tabSelect1'(_0x561a69){if(this['data']['TabCur1']==_0x561a69['currentTarget']['dataset']['id']){return;}this['setData']({'TabCur1':_0x561a69['currentTarget']['dataset']['id'],'scrollLeft1':(_0x561a69['currentTarget']['dataset']['id']-(0x8652b^0x8652a))*(0x889f8^0x889c4),'isLoad':![],'showSke':!![],'showTip':![],'showDataList':[]});this['data']['pageNO']=0x1;this['data']['minId']='1';this['requestData']();},'onReady':function(){},'onShow':function(){},'onHide':function(){},'onUnload':function(){},'onPullDownRefresh':function(){},'onReachBottom':function(){if(this['data']['isRequest']||this['data']['isLoad']){return;}this['data']['pageNO']++;this['requestData']();},'onShareAppMessage':function(){},'shopItemClick'(_0x20e385){let _0xe7fc91=_0x20e385['currentTarget']['dataset']['index'];let _0x129ffb=this['data']['showDataList'][_0xe7fc91];let _0x519742={'type':_0x129ffb['type'],'id':_0x129ffb['id'],'key':_0x129ffb['id']};wx['navigateTo']({'url':'/pages/shopDetail/shopDetail?json='+crypto['encrypted'](JSON['stringify'](_0x519742))});}});