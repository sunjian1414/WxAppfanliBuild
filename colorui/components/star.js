Component({
  properties:{
    key:{
      value: 0,//评分
      type:Number
    }
  },
 
  data: {
    stars: [0, 1, 2, 3, 4],
    normalSrc: 'https://www.ifaceai.com/img/no-star.png',
    selectedSrc: 'https://www.ifaceai.com/img/full-star.png',
    halfSrc: 'https://www.ifaceai.com/img/half-star.png',
    showTap:true//是否可以点击
  },
  methods: {
    //点击左边,半颗星
    selectLeft: function (e) {
      var key = e.currentTarget.dataset.key
      if (this.data.key == 0.5 && e.currentTarget.dataset.key == 0.5) {
        //只有一颗星的时候,再次点击,变为0颗
        key = 0;
      }
      this.setData({
        key: key
      })
 
    },
    //点击右边,整颗星
    selectRight: function (e) {
      // count = key
      this.setData({
        key: key
      })
    },
  },
  attached: function () {
    if (this.properties.key!=0){
      this.setData({
        showTap: false
      })
    }
  }
})