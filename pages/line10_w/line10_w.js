// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    timer: 9999,
    value: 'line10_w',
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
      'station_11': {
        'name': '兰花路',
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
        'name': '南坪',
        'times': [
          '暂未开通',
        ],
      },
      'station_0': {
        'name': '七星岗',
        'next': '',
        'times': [
          '07:46',
          '08:16',
          '08:46',
          '09:16',
          '09:46',
          '10:16',
          '10:46',
          '11:16',
          '11:46',
          '12:16',
          '12:46',
          '13:16',
          '13:46',
          '14:16',
          '14:46',
          '15:16',
          '15:46',
          '16:16',
          '16:46',
          '17:16',
          '17:46',
          '18:16',
          '18:46',
          '19:16',
          '19:46'
        ],
      },
      'station_1': {
        'name': '曾家岩',
        'times': [
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
          '15:49',
          '16:19',
          '16:49',
          '17:19',
          '17:49',
          '18:19',
          '18:49',
          '19:19',
          '19:49',
        ],
      },
      'station_2': {
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
          '19:50',
        ],
      },
      'station_3': {
        'name': '红土地',
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
          '19:54',
        ],
      },
      'station_4': {
        'name': '重庆北站南广场',
        'times': [
          '07:58',
          '08:28',
          '08:58',
          '09:28',
          '09:58',
          '10:28',
          '10:58',
          '11:28',
          '11:58',
          '12:28',
          '12:58',
          '13:28',
          '13:58',
          '14:28',
          '14:58',
          '15:28',
          '15:58',
          '16:28',
          '16:58',
          '17:28',
          '17:58',
          '18:28',
          '18:58',
          '19:28',
          '19:58'
        ],
      },
      'station_5': {
        'name': '重庆北站北广场',
        'times': [
          '07:59',
          '08:29',
          '08:59',
          '09:29',
          '09:59',
          '10:29',
          '10:59',
          '11:29',
          '11:59',
          '12:29',
          '12:59',
          '13:29',
          '13:59',
          '14:29',
          '14:59',
          '15:29',
          '15:59',
          '16:29',
          '16:59',
          '17:29',
          '17:59',
          '18:29',
          '18:59',
          '19:29',
          '19:59'
        ],
      },
      'station_6': {
        'name': '上湾路',
        'times': [
          '08:10',
          '08:40',
          '09:10',
          '09:40',
          '10:10',
          '10:40',
          '11:10',
          '11:40',
          '12:10',
          '12:40',
          '13:10',
          '13:40',
          '14:10',
          '14:40',
          '15:10',
          '15:40',
          '16:10',
          '16:40',
          '17:10',
          '17:40',
          '18:10',
          '18:40',
          '19:10',
          '19:40',
          '20:10',
        ],
      },
      'station_7': {
        'name': '江北机场T3航站楼',
        'times': [
          '08:18',
          '08:48',
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
          '19:48',
          '20:18',
        ],
      },
      'station_8': {
        'name': '江北机场T2航站楼',
        'times': [
          '08:21',
          '08:51',
          '09:21',
          '09:51',
          '10:21',
          '10:51',
          '11:21',
          '11:51',
          '12:21',
          '12:51',
          '13:21',
          '13:51',
          '14:21',
          '14:51',
          '15:21',
          '15:51',
          '16:21',
          '16:51',
          '17:21',
          '17:51',
          '18:21',
          '18:51',
          '19:21',
          '19:51',
          '20:21',
        ],
      },
      'station_9': {
        'name': '中央公园西',
        'times': [
          '08:31',
          '09:01',
          '09:31',
          '10:01',
          '10:31',
          '11:01',
          '11:31',
          '12:01',
          '12:31',
          '13:01',
          '13:31',
          '14:01',
          '14:31',
          '15:01',
          '15:31',
          '16:01',
          '16:31',
          '17:01',
          '17:31',
          '18:01',
          '18:31',
          '19:01',
          '19:34',
          '20:01',
          '20:31',
        ],
      },
      'station_10': {
        'name': '王家庄',
        'times': [
          '终到站',
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
      let h = now.getHours().toString()
      let m = now.getMinutes().toString()
      if (h < '10') {
        h = '0' + h
      }
      if (m < '10') {
        m = '0' + m
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