// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    timer: 9999,
    value: 'index',
    list: [{
        value: 'index',
        label: '10号线 快七星岗',
        icon: 'home'
      },
      {
        value: 'line10_w',
        label: '10号线 快王家庄',
        icon: 'app'
      },
      {
        value: 'linex_td',
        label: '4/环/5 直跳蹬',
        icon: 'app'
      },
      {
        value: 'linex_tjt',
        label: '5/环/4 直唐家沱',
        icon: 'app'
      },
    ],
    stations: {
      'station_0': {
        'name': '王家庄',
        'next': '',
        'times': [
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
      'station_1': {
        'name': '中央公园西',
        'times': [
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
      'station_2': {
        'name': '江北机场T2航站楼',
        'times': [
          '07:23',
          '07:53',
          '08:23',
          '08:53',
          '09:23',
          '09:53',
          '10:23',
          '10:53',
          '11:23',
          '11:53',
          '12:23',
          '12:53',
          '13:23',
          '13:53',
          '14:23',
          '14:53',
          '15:23',
          '15:53',
          '16:23',
          '16:53',
          '17:23',
          '17:53',
          '18:23',
          '18:53',
          '19:23'
        ],
      },
      'station_3': {
        'name': '江北机场T3航站楼',
        'times': [
          '07:26',
          '07:56',
          '08:26',
          '08:56',
          '09:26',
          '09:56',
          '10:26',
          '10:56',
          '11:26',
          '11:56',
          '12:26',
          '12:56',
          '13:26',
          '13:56',
          '14:26',
          '14:56',
          '15:26',
          '15:56',
          '16:26',
          '16:56',
          '17:26',
          '17:56',
          '18:26',
          '18:56',
          '19:26'
        ],
      },
      'station_4': {
        'name': '上湾路',
        'times': [
          '07:35',
          '08:05',
          '08:35',
          '09:05',
          '09:35',
          '10:05',
          '10:35',
          '11:05',
          '11:35',
          '12:05',
          '12:35',
          '13:05',
          '13:35',
          '14:05',
          '14:35',
          '15:05',
          '15:35',
          '16:05',
          '16:35',
          '17:05',
          '17:35',
          '18:05',
          '18:35',
          '19:05',
          '19:35'
        ],
      },
      'station_5': {
        'name': '重庆北站北广场',
        'times': [
          '07:42',
          '08:12',
          '08:42',
          '09:12',
          '09:42',
          '10:12',
          '10:42',
          '11:12',
          '11:42',
          '12:12',
          '12:42',
          '13:12',
          '13:42',
          '14:12',
          '14:42',
          '15:12',
          '15:42',
          '16:12',
          '16:42',
          '17:12',
          '17:42',
          '18:12',
          '18:42',
          '19:12',
          '19:42'
        ],
      },
      'station_6': {
        'name': '重庆北站南广场',
        'times': [
          '07:45',
          '08:15',
          '08:45',
          '09:15',
          '09:45',
          '10:15',
          '10:45',
          '11:15',
          '11:45',
          '12:15',
          '12:45',
          '13:15',
          '13:45',
          '14:15',
          '14:45',
          '15:15',
          '15:45',
          '16:15',
          '16:45',
          '17:15',
          '17:45',
          '18:15',
          '18:45',
          '19:15',
          '19:45'
        ],
      },
      'station_7': {
        'name': '红土地',
        'times': [
          '07:48',
          '08:16',
          '08:45',
          '09:18',
          '09:48',
          '10:18',
          '10:48',
          '11:18',
          '11:48',
          '12:18',
          '12:48',
          '13:18',
          '13:48',
          '14:18',
          '14:48',
          '15:18',
          '15:48',
          '16:18',
          '16:48',
          '17:18',
          '17:48',
          '18:18',
          '18:48',
          '19:18',
          '19:48'
        ],
      },
      'station_8': {
        'name': '鲤鱼池',
        'times': [
          '07:50',
          '08:20',
          '08:50',
          '09:20',
          '09:50',
          '10:20',
          '10:50',
          '11:20',
          '11:50',
          '12:20',
          '12:50',
          '13:20',
          '13:50',
          '14:20',
          '14:50',
          '15:20',
          '15:50',
          '16:20',
          '16:50',
          '17:20',
          '17:50',
          '18:20',
          '18:50',
          '19:20',
          '19:50'
        ],
      },
      'station_9': {
        'name': '曾家岩',
        'times': [
          '07:54',
          '08:24',
          '08:54',
          '09:24',
          '09:54',
          '10:24',
          '10:54',
          '11:24',
          '11:54',
          '12:24',
          '12:54',
          '13:24',
          '13:54',
          '14:24',
          '14:54',
          '15:24',
          '15:54',
          '16:24',
          '16:54',
          '17:24',
          '17:54',
          '18:24',
          '18:54',
          '19:24',
          '19:54'
        ],
      },
      'station_10': {
        'name': '七星岗',
        'times': [
          '终到站',
        ],
      },
      'station_11': {
        'name': '南坪',
        'times': [
          '暂未开通',
        ],
      },
      'station_12': {
        'name': '万寿路',
        'times': [
          '暂未开通',
        ],
      },
      'station_13': {
        'name': '兰花路',
        'times': [
          '暂未开通',
        ],
      },
    },
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
    let that = this
    that.startSetInter()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    this.endSetInter()
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    this.endSetInter()
  },

  //微信小程序设置一个定时器
  startSetInter: function () {
    let that = this;
    let stationList = this.data.stations
    //将计时器赋值给setInter
    that.data.timer = setInterval(function () {
      let now = new Date();
      let h = now.getHours()
      let m = now.getMinutes()
      if (h < 10) {
        h = '0' + h.toString()
      }
      if (m < 10) {
        m = '0' + m.toString()
      }
      let nowString = h + ':' + m
      
      for (const station in stationList) {
        let sTimes = stationList[station].times
        //  console.log(station)
        sTimes.every(function (tt) {
          let item = that.data.stations[station]
          
          if (tt > nowString) {
            if (tt != '终到站' && tt != '暂未开通') {
              item.next = '下一趟:' + tt
            } else {
              item.next = tt
            }
            let nl = limit(tt, nowString)
            if (nl != '') {
              item.next_limit = '【' + nl + '】'
            }
            //                      console.log(tt)
            that.setData({
              [`stations.${station}`]: item,
            })
            return false
          } else {
            return true
          }
        })
      }
      //      console.log(that.data.stations)
    }, 1000);

    function limit(t, nowString) {
      if (t == '终到站' || t == '暂未开通') {
        return '';
      }
      let now = new Date();
      let t1 = '2006/12/23 ' + nowString + ':' + now.getSeconds().toString();
      let t2 = '2006/12/23 ' + t + ':00';
      let tt1 = new Date(t1);
      let tt2 = new Date(t2);
      return dateformat(parseInt(tt2 - tt1) / 1000);
    }

    function dateformat(micro_second) {
      let second = Math.floor(micro_second % 60);
      let minute = Math.floor((micro_second / 60) % 60);
      let hour = Math.floor(micro_second / 3600);
      if (hour < 0 || minute < 0 || second < 0) {
        return ""
      }
      return (hour < 10 ? '0' + hour : hour) + ":" + (minute < 10 ? '0' + minute : minute) + ":" + (second < 10 ? '0' + second : second);
    }
  },

  //微信小程序在页面卸载的时候删除定时器
  endSetInter: function () {
    var that = this;
    //清除计时器  即清除setInter
    clearInterval(that.data.timer)
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