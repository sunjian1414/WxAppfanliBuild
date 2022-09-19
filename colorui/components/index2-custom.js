const app = getApp();
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        keyword:"",
        cityName:"",
        cityId:""
    },

    /**
     * 组件的初始数据
     */
    data: {
        cityName:"",
        StatusBar: app.globalData.StatusBar,
        CustomBar: app.globalData.CustomBar,
        Custom: app.globalData.Custom
    },

    /**
     * 组件的方法列表
     */
    methods: {
        clickHand() {
            this.triggerEvent("titleClick", {}, {});
        },
        inputEnter(){
            this.triggerEvent("inputEnter", {keyword:this.data.keyword}, {});
        },
        inputHand(){
            this.triggerEvent("inputHand", {keyword:this.data.keyword}, {});
        }
    },
    observers:{
        'cityName':val=>{
            
        },
        'cityId':val=>{

        }
    }
})
