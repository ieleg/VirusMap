export default{
  title: {
    text: '各省详情',
    left: 'center',
    top:30,
    textStyle:{
      color:'#fff',
      fontWeight:200
    }
  },
  geo:{},
  tooltip: {},
  visualMap:{
    bottom:80,
    pieces: [
      {min: 10000, max: 99999,color:'#765d69'},
      {min: 1000, max: 9999,color:'#96281b'},
      {min: 100, max: 999,color:'#ec644b'},
      {min: 10, max: 99,color:'#f1a9a0'},
      {max: 10,color:'#dadfe1'}
    ],
    textStyle:{
      fontSize:10,
      color:'#fff'
    }
  },
  series: [{
    type: 'map',
    map:  'china',  //直接引入js的方式
    label: {
      show: true, //显示各个省份名称
      fontSize: 10,
    }, 
    itemStyle: {
      areaColor: '#fff' //区域的背景颜色
    },    
    zoom:1.1           
  }]
};