// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    timer: 9999,
    value: 'linex_td',
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
        'name': '唐家沱',
        'next': '',
        'times': [
          '06:44',
          '07:19',
          '07:49',
          '08:19',
          '08:49',
          '09:19',
          '09:49',
          '10:19',
          '10:49',
          '11:19',
          '11:49',
          '12:19',
          '12:49',
          '13:19',
          '13:49',
          '14:19',
          '14:49',
          '15:19',
          '15:50',
          '16:22',
          '16:49',
          '17:20',
          '17:52',
          '18:19',
          '18:50',
          '19:49'
        ],
      },
      'station_1': {
        'name': '头塘',
        'times': [
          '06:55',
          '07:30',
          '08:00',
          '08:30',
          '09:00',
          '09:30',
          '10:00',
          '10:30',
          '11:00',
          '11:30',
          '12:00',
          '12:30',
          '13:00',
          '13:30',
          '14:00',
          '14:30',
          '15:00',
          '15:30',
          '16:01',
          '16:32',
          '17:00',
          '17:31',
          '18:03',
          '18:30',
          '19:01',
          '20:00'
        ],
      },
      'station_2': {
        'name': '重庆北站北广场',
        'times': [
          '06:57',
          '07:33',
          '08:03',
          '08:33',
          '09:03',
          '09:33',
          '10:03',
          '10:33',
          '11:03',
          '11:33',
          '12:03',
          '12:33',
          '13:03',
          '13:33',
          '14:03',
          '14:33',
          '15:03',
          '15:33',
          '16:04',
          '16:35',
          '17:02',
          '17:34',
          '18:05',
          '18:32',
          '19:04',
          '20:02'
        ],
      },
      'station_3': {
        'name': '民安大道',
        'times': [
          '07:01',
          '07:36',
          '08:06',
          '08:36',
          '09:06',
          '09:36',
          '10:06',
          '10:36',
          '11:06',
          '11:36',
          '12:06',
          '12:36',
          '13:06',
          '13:36',
          '14:06',
          '14:36',
          '15:06',
          '15:36',
          '16:07',
          '16:39',
          '17:06',
          '17:37',
          '18:09',
          '18:36',
          '19:07',
          '20:06'
        ],
      },
      'station_4': {
        'name': '冉家坝',
        'times': [
          '07:07',
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
          '16:13',
          '16:44',
          '17:11',
          '17:43',
          '18:15',
          '18:42',
          '19:13',
          '20:12'
        ],
      },
      'station_5': {
        'name': '沙坪坝',
        'times': [
          '07:17',
          '07:52',
          '08:22',
          '08:52',
          '09:22',
          '09:52',
          '10:22',
          '10:52',
          '11:22',
          '11:52',
          '12:22',
          '12:52',
          '13:22',
          '13:52',
          '14:22',
          '14:52',
          '15:22',
          '15:52',
          '16:23',
          '16:55',
          '17:22',
          '17:53',
          '18:25',
          '18:52',
          '19:23',
          '20:22'
        ],
      },
      'station_6': {
        'name': '重庆图书馆',
        'times': [
          '07:21',
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
          '16:27',
          '16:59',
          '17:26',
          '17:57',
          '18:29',
          '18:56',
          '19:27',
          '20:26'
        ],
      },
      'station_7': {
        'name': '上桥',
        'times': [
          '07:24',
          '08:00',
          '08:30',
          '09:00',
          '09:30',
          '10:00',
          '10:30',
          '11:00',
          '11:30',
          '12:00',
          '12:30',
          '13:00',
          '13:30',
          '14:00',
          '14:30',
          '15:00',
          '15:30',
          '16:00',
          '16:31',
          '17:02',
          '17:29',
          '18:01',
          '18:32',
          '18:59',
          '19:31',
          '20:29'
        ],
      },
      'station_8': {
        'name': '重庆西站',
        'times': [
          '07:28',
          '08:03',
          '08:33',
          '09:03',
          '09:33',
          '10:03',
          '10:33',
          '11:03',
          '11:33',
          '12:03',
          '12:33',
          '13:03',
          '13:33',
          '14:03',
          '14:33',
          '15:03',
          '15:33',
          '16:03',
          '16:33',
          '17:03',
          '17:33',
          '18:03',
          '18:33',
          '19:03',
          '19:33'
        ],
      },
      'station_9': {
        'name': '金建路',
        'times': [
          '07:36',
          '08:11',
          '08:41',
          '09:11',
          '09:41',
          '10:11',
          '10:41',
          '11:11',
          '11:41',
          '12:11',
          '12:41',
          '13:11',
          '13:41',
          '14:11',
          '14:41',
          '15:11',
          '15:41',
          '16:11',
          '16:43',
          '17:14',
          '17:41',
          '18:13',
          '18:44',
          '19:11',
          '19:43',
          '20:41',
        ],
      },
      'station_10': {
        'name': '华岩中心',
        'times': [
          '07:39',
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
          '16:45',
          '17:16',
          '17:44',
          '18:15',
          '18:47',
          '19:14',
          '19:45',
          '20:44',
        ],
      },
      'station_11': {
        'name': '跳蹬',
        'times': [
          '07:42',
          '08:17',
          '08:47',
          '09:17',
          '09:47',
          '10:17',
          '10:47',
          '11:17',
          '11:47',
          '12:17',
          '12:47',
          '13:17',
          '13:47',
          '14:17',
          '14:47',
          '15:17',
          '15:47',
          '16:17',
          '16:48',
          '17:20',
          '17:47',
          '18:19',
          '18:50',
          '19:17',
          '19:49',
          '20:47',
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
})