<template>
<div class="box">
  <div ref="main" class="main">
  </div>
  <div ref="totalCase" class="totalCase"></div>
</div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js'
import {geteData} from '../network'
import option from './options/chinaMapOption'
import option_history from './options/history'
const provincesText = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', 
'安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南',
 '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门'];

export default {
  data(){
    return{
      history_x:[],
      history_data:{},
      history_cure:[],
      history_death:[],
    }
  },
  mounted(){  
    let myChart = echarts.init(this.$refs.main);
    let myChart_history = echarts.init(this.$refs.totalCase);
    geteData().then(res=>{
      console.log(res.data);
      option.series[0].data = res.data.list;

      this.history_data = res.data.historylist.reduce((pre,cur) => {       
        pre.cn_conNum.push(cur.cn_conNum);
        pre.date.push(cur.date); 
        pre.cure.push(cur.cn_cureNum);
        pre.death.push(cur.cn_deathNum)
        return pre
      },{cn_conNum:[],date:[],cure:[],death:[]});
      // this.history_x = res.data.historylist.reduce((pre,cur) => {       
      //   pre.push(cur.date);
      //   return pre
      // },[]).reverse();
      option_history.xAxis.data = this.history_data.date.reverse();
      option_history.series[0].data = this.history_data.cn_conNum.reverse();
      option_history.series[1].data = this.history_data.cure.reverse();
      option_history.series[2].data = this.history_data.death.reverse();
      myChart.setOption(option); 
      myChart_history.setOption(option_history);
    })  
  },
  methods:{

  }
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
.totalCase{
    margin:0 auto;
    width:  800px;
    height:  400px;  
}
</style>