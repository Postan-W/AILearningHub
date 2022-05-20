// pages/mine/mine.js
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
let startY = 0; // 手指起始的坐标
let moveY = 0; // 手指移动的坐标
let moveDistance = 0; // 手指移动的距离
Page({
    /**
     * 页面的初始数据
     */
    data: {
        personal_center_color:["#1dd1a1","#ff6b6b","#feca57","#576574","#8395a7","#fdcb6e"],
        coverTransform: 'translateY(0)',
        coveTransition: '',
        userInfo: {}, // 用户信息
        LAMInfo:"",
        showLeavingAMessage:false,
        help:[{name:"AI币",icon:"gold-coin-o"},{name:"兴趣标签",icon:"like-o"},
        {name:"我的收藏",icon:"star-o"},{name:"最近浏览",icon:"label-o"}
    ,{name:"我的邮箱",icon:"envelop-o"},{name:"记事板",icon:"todo-list-o"}],
        options: [
        { name: '微信', icon: 'wechat', openType: 'share' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
        ]
    },
    clickLeavingAMessage(){
     this.setData({showLeavingAMessage:true})
    },
    closeLAM(){
        this.setData({showLeavingAMessage:false})
    },
    getLAMInfo(event){
        this.setData({LAMInfo:event.detail})
    },
    confirmLAM(){
        console.log(this.data.LAMInfo)
    },
    getUserProfile(){
        if (Object.keys(this.data.userInfo).length != 0) return
        wx.getUserProfile({
          desc: '微信授权登录',
          success:(res)=>{
              console.log(res.userInfo)
              this.setData({
                  userInfo:res.userInfo
              })
              wx.setStorageSync('userInfo', JSON.stringify(res.userInfo))
          }
        })
    },
    handleTouchStart(event){
        this.setData({
          coveTransition: ''
        })
        // 获取手指起始坐标
        startY = event.touches[0].clientY;
      },
    handleTouchMove(event){
        moveY = event.touches[0].clientY;
        moveDistance = moveY - startY;
        
        if(moveDistance <= 0){
          return;
        }
        if(moveDistance >= 80){
          moveDistance = 80;
        }
        // 滑动过程中更新新的位置
        this.setData({
          coverTransform: `translateY(${moveDistance}rpx)`
        })
      },
      handleTouchEnd(){
        // 滑动结束先通过transform将位置恢复，然后通过transition跟踪transform来设定过渡效果
        this.setData({
          coverTransform: `translateY(0rpx)`,
          coveTransition: 'transform 1s linear'
        })
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let userInfo = wx.getStorageSync('userInfo')
        if(userInfo){
            this.setData({
              userInfo: JSON.parse(userInfo)
            })
        }
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})