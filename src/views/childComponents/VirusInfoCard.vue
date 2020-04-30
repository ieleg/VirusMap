<template>
  <div v-if="Object.keys(virusInfo).length!==0" class="card">
    <span class="tip">{{virusInfo.time}},全国累计(含省港澳地区)</span>
    <div  class="line">
      <div class="item">
        <p class="row1">新增<span>{{virusInfo.ChinaAddDaily}}</span></p>
        <span class="row2">{{virusInfo.chinaTotal}}</span>
        <p class="row3">全国累计</p>
      </div>
      <div class="item">
        <p class="row1"> 减少<span>{{virusInfo.ChinaReduceDaily}}</span></p>
        <span class="row2">{{virusInfo.ChinaNowConfirm}}</span>
        <p class="row3">全国现存确诊</p>
      </div>
      <div class="item">
        <p class="row1">新增<span>{{virusInfo.WorldAddDaily}}</span></p>
        <span class="row2">{{virusInfo.worldTotal}}</span>
        <p class="row3">国外累计确诊</p>
      </div>     
    </div>
  </div>
</template>

<script>
export default {
  props:{
    virusInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
}
</script>

<style scoped>
.tip{
  font-size: 12px;
  font-weight: 200;
}
.card{
  background-image: linear-gradient(#2abb9b,#23cba7);
  border-radius: 10px;
  position: relative;
  top:50px;
  left:10px;
  padding: 10px;
}
.line{
  display: flex;
  align-items: center;
  
}
.item{
  flex: 1 1 auto;
  text-align: center;
  line-height: 20px;
}
.item span{
  color: #cf000f;
}
.item p{
  margin: 10px;
}
.row1{
  font-size: 12px;
}
.row2{
  font-size: 14px;
  font-weight: 800;
}
</style>