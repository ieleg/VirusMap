<template>
<div>
  <div ref="main" class="main">
    123
  </div>
</div>
</template>

<script>
import echarts from 'echarts'
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
export default {
  mounted(){  
    console.log(option);
    var myChart = echarts.init(this.$refs.main);
     myChart.setOption(option);
    
  },
  data(){
    return {
      k:1
    }
  }
}
</script>

<style scoped>
.main{
    width:600px;
    height: 800px;
}
</style>