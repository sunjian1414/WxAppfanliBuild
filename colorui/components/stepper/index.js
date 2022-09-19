Component({
    properties: {
        value: {
            type: Number,
            value: 1,
        },
        min: {
            type: Number,
            value: 1,
        },
        max: {
            type: Number,
            value: 10000,
        },
        step: {
            type: Number,
            value: 1
        },
        disabled: {
            type: Boolean,
            value: false
        },
        index: {
            type: Number,
            value: 0
        },
    },
    data: {
    },
    methods: {
        //通过step属性设置每次点击增加或减少按钮时变化的值，默认为1
        getScale() {
            let scale = 1;
            if (this.data.step != parseInt(this.data.step)) {
                //微信小程序的小数计算会出现偏差导致产生很长的无限循环的数，在这块处理一下。
                scale = Math.pow(10, (this.data.step + '').split('.')[1].length)
            }
            return scale;
        },
        //输入操作处理
        blur: function (e) {
            let value = e.detail.value
            if (value) {
                value = +value
                if (value > this.data.max) {
                    value = this.data.max
                } else if (value < this.data.min) {
                    value = this.data.min
                }
            } else {
                value = this.data.min
            }
            if (value != this.data.value) {
                this.setData({
                    value: value
                })
            }
            this.handleChange(value, "blur")
        },
        calcNum: function (type) {
            if (this.data.disabled) {
                return
            }
            const scale = this.getScale()
            let num = this.data.value * scale
            let step = this.data.step * scale
            if (type === 'reduce') {
                num -= step
            } else if (type === 'plus') {
                num += step
            }
            let value = num / scale
            if (type === "plus" && value < this.data.min) {
                value = this.data.min
            } else if (type === "reduce" && value > this.data.max) {
                value = this.data.max
            }
            if (value < this.data.min || value > this.data.max) {
                return
            }
            this.setData({
                value: value
            });
            this.handleChange(value, type)
        },
        //增加按钮处理
        plus: function () {
            this.calcNum("plus")
        },
        //减少按钮处理
        reduce: function () {
            this.calcNum("reduce")
        },
        //事件绑定，返回值有三个，value:值 type:类型（输入，增加，减少） index（当前组件的索引）
        handleChange(value, type) {
            if (this.data.disabled) {
                return
            }
            this.triggerEvent('change', {
                value: value,
                type: type,
                index: this.data.index
            })
        }
    }
})
