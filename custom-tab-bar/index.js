// custom-tab-bar/index.js
import {storeBindingsBehavior} from 'mobx-miniprogram-bindings'
import {store} from '../store/store'
Component({
    options:{
        styleIsolation:'shared'
    },
    behaviors:[storeBindingsBehavior],
    storeBindings:{store,fields:{active:"activeTabbarIndex"},actions:{updateTabbarIndex:'updateActivateTabbarIndex'}},
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        list: [
            {"pagePath":"/pages/home/home"},
            {"pagePath": "/pages/community/community"},
            {"pagePath":"/pages/find/find"},
            {"pagePath": "/pages/shopping/shopping"},
            {"pagePath":"/pages/mine/mine" }
        ],
        tabColor:"#d63031"
    },
    /**
     * 组件的方法列表
     */
    methods: {
        onChange(event) {
            // event.detail 的值为当前选中项的索引
            this.updateTabbarIndex(event.detail)
            console.log(this.data.active)
            wx.switchTab({
              url: this.data.list[event.detail].pagePath
            })
          },
    }
})
