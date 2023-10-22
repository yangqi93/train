// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    value: 'index',
    list: [
      { value: 'index', label: '10号线', icon: 'home' },
      { value: 'line4', label: '4号线', icon: 'app' },
    ],
    station_0: {
      name: '王家庄',
      times: [
        '07:08',
        '07:38',
        '08:08',
        '08:38',
        '09:08',
        '09:38',
        '10:08',
        '10:38',
        '11:08',
        '11:38',
        '12:08',
        '12:38',
        '13:08',
        '13:38',
        '14:08',
        '14:38',
        '15:08',
        '15:38',
        '16:08',
        '16:38',
        '17:08',
        '17:38',
        '18:08',
        '18:38',
        '19:08'
      ],
    },
    station_0_next: '19:05',
    station_0_next_limit: '',

    station_1: {
      name: '中央公园西',
      times: [
        '07:14',
        '07:44',
        '08:14',
        '08:44',
        '09:14',
        '09:44',
        '10:14',
        '10:44',
        '11:14',
        '11:44',
        '12:14',
        '12:44',
        '13:14',
        '13:44',
        '14:14',
        '14:44',
        '15:14',
        '15:44',
        '16:14',
        '16:44',
        '17:14',
        '17:44',
        '18:14',
        '18:44',
        '19:14'
      ],
    },
    station_1_next: '',
    station_1_next_limit: '',
  },

  onChange(e) {
    this.setData({
      value: e.detail.value,
    });
    wx.navigateTo({
      url: '../' + e.detail.value + '/' + e.detail.value,
    })
  },

  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    var that = this
    // var s = this.data.station
    setInterval(function(){
      that.setData({
        station_0_next_limit: limit(that.data.station_0_next)
      })
    }, 1000);

    function limit(t) {
      let now = new Date();
      let t1 = '2006/12/23 ' + now.getHours().toString() + ':' + now.getMinutes().toString() + ':' + now.getSeconds().toString();
      let t2 = '2006/12/23 ' + t + ':00';
      let tt1 = new Date(t1);
      let tt2 = new Date(t2);
      return dateformat(parseInt(tt2 - tt1) / 1000);
    }
    function dateformat(micro_second) {
      var second = Math.floor(micro_second % 60);
      var minute = Math.floor((micro_second / 60) % 60);
      var hour = Math.floor(micro_second / 3600);
      return (hour < 10 ? '0' + hour : hour) + ":" + (minute < 10 ? '0' + minute : minute) + ":" + (second < 10 ? '0' + second : second);
    }
  },

  

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
