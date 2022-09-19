const app = getApp();
var request = require('../../utils/request.js');
Component({
    /**
     * 组件的一些选项
     */
    options: {
        addGlobalClass: true,
        multipleSlots: true
    },
    /**
     * 组件的对外属性
     */
    properties: {
        bgColor: {
            type: String,
            default: ''
        },
        isCustom: {
            type: [Boolean, String],
            default: false
        },
        isBack: {
            type: [Boolean, String],
            default: false
        },
        bgImage: {
            type: String,
            default: ''
        },
    },
    lifetimes: {
        //onload方法
        attached: function (e) {

        }
    },
    pageLifetimes:{
        show:function(){
            this.data.tabCount=4;
            this.setData({showTb:app.globalData.apiInfo.showTb,showDy:app.globalData.apiInfo.showDy});
            if(this.data.showTb==null||this.data.showTb==1){
                this.data.tabCount=this.data.tabCount-1;
            }
            if(this.data.showDy==null||this.data.showDy==1){
                this.data.tabCount=this.data.tabCount-1;
            } 
            this.setData({tabCount:this.data.tabCount});  
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        showTb: null,        //0-显示淘宝  1-隐藏淘宝
        showDy: null,        //0-显示抖音  1-隐藏抖音
        tabCount:4,
        showLoad: false,
        btnTxt: "搜索优惠商品",
        keyword: "",
        modalName: null,
        StatusBar: app.globalData.StatusBar,
        CustomBar: app.globalData.CustomBar,
        Custom: app.globalData.Custom
    },
    /**
     * 组件的方法列表
     */
    methods: {
        BackPage() {
            wx.navigateBack({
                delta: 1
            });
        },
        toHome() {
            wx.reLaunch({
                url: '/pages/home/home',
            })
        },
        clickHand() {
            this.setData({
                modalName: "Modal"
            });
            this.triggerEvent("titleClick", {}, {});
        },
        closeWin() {
            this.setData({ showLoad: false, btnTxt: "搜索优惠商品", modalName: "" });
        },
        clearKeyword() {
            if (this.data.showLoad) {
                return;
            }
            this.setData({
                keyword: ""
            });
        },
        searchHand() {
            if (this.data.showLoad) {
                return;
            }
            let key = this.data.keyword.replace(/\s*/g, "");
            if (key == "") {
                wx.showToast({
                    title: '请输入关键词或链接',
                    icon: "none"
                });
                return;
            }
            this.setData({ showLoad: true, btnTxt: "搜索中..." });
            request.getSiveConvert(key, res => {
                if (res.error == 1) {
                    this.setData({ showLoad: false, btnTxt: "搜索优惠商品" });
                    wx.showToast({
                        title: '商品不支持返现',
                        icon: "error",
                        duration: 1500
                    });
                } else if (res.error == 2) {
                    this.closeWin();
                    this.setData({ showLoad: false, btnTxt: "搜索优惠商品" });
                    wx.navigateTo({
                        url: '/pages/shopSearch/shopSearch?key=' + key
                    });
                } else if (res.error == 0) {
                    let type = res.type;
                    let par = { type: type };
                    if (type == "淘宝") {
                        par.id = res.data.item_id;
                    } else if (type == "京东") {
                        par.id = res.data.skuId;
                    } else if (type == "拼多多") {
                        par.id = res.wxInfo.goods_sign;
                    }
                    this.closeWin();
                    this.setData({ showLoad: false, btnTxt: "搜索优惠商品" });
                    par.key = par.id;
                    wx.navigateTo({
                        url: '/pages/shopDetail/shopDetail?json=' + JSON.stringify(par)
                    });
                }
            });
        }
    }
})