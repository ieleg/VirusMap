<template>
<div class="box">
  <div ref="main" class="main">
    123
  </div>
</div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js'
import {geteData} from '../network'
const option = {
  title: {
    text: 'ECharts 入门示例',
    left: 'center',
    textStyle:{
      color:'#fff'
    }
   
  },
  tooltip: {},
  visualMap:{
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
export default {
  mounted(){  
    let myChart = echarts.init(this.$refs.main);
    geteData().then(res=>{
      // console.log(res.data.list);
      option.series[0].data = res.data.list;
      myChart.setOption(option); 
    })  
  },
}
</script>

<style scoped>
.box{
  background-image: linear-gradient(to top,rgba(30, 130, 76, .4),rgba(38, 166, 91, .7));
  
}
.main{
    margin:0 auto;
    width:  800px;
    height:  800px;
    
    
}
</style>