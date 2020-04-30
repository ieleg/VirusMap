export default{
  title:{
    text: '全国疫情趋势',
    left: 'center',

    textStyle:{
      color:'#fff',
      fontWeight:200
    }
  },
  legend: {
    data: ['全国感染累计', '全国治愈累计','全国死亡累计'],
    top:30
    
  },
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    name:'日期',
    type: 'category',
    axisTick: {
      show: true,
      alignWithLabel: true,
      lineStyle: {
          width:3
      }
    },


},
  yAxis: {
      type: 'value',
      name:'人数'
  },
  series: [{
      name: '全国感染累计',
      type: 'line',
      smooth: true,
      itemStyle: {
        normal: {
            color: '#cf000f',
            shadowBlur: 2,
            shadowColor: "rgba(0, 0, 0, .12)",
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
      },
    },
    {
      name: '全国治愈累计',
      type:'line',
      smooth:true,
      itemStyle: {
        normal: {
            color: '#2e3131',
            shadowBlur: 2,
            shadowColor: "rgba(0, 0, 0, .12)",
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
      },
    },
    {
      name: '全国死亡累计',
      type:'line',
      smooth:true,
      itemStyle: {
        normal: {
            color: 'rgba(1, 152, 117, 1)',
            shadowBlur: 2,
            shadowColor: "rgba(0, 0, 0, .12)",
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    },
    }
],
  grid: {
    top: 'middle',
    left: '3%',
    right: '4%',
    bottom: '3%',
    height: '80%',
    width: '100%',
    containLabel: true
},
}