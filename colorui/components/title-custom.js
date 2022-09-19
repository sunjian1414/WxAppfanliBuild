const app = getApp();
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
    title:{
      type:[String],
      default:false
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
  /**
   * 组件的初始数据
   */
  data: {
    keyword:"",
    modalName:null,
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
    toHome(){
      wx.reLaunch({
        url: '/pages/home/home',
      })
    },
    clickHand(){
        console.warn(1);
      this.setData({
        modalName: "Modal"
      });
      this.triggerEvent("titleClick", {  }, {});
    },
    closeWin(){
      this.setData({
        modalName: ""
      });
    },
    clearKeyword(){
      this.setData({
        keyword: ""
      });
    },
    searchHand(){
      this.closeWin();
      wx.navigateTo({
        url: '/pages/shopSearch/shopSearch'
      });
    }
  }
})