<template>
  <div class="item-intro-12">
    <div class="tit">
      AIWNIG三重营销于一体
    </div>
    <div class="list_con">
      <div class="list_div">
        <div class="list_div_">
          <h4>筛选意向客户</h4>
          <p>智能语音识别客户意向，自动筛选</p>
        </div>
      </div>
      <div class="list_div list_div_02">
        <div class="list_div_">
          <h4>锁定目标客户</h4>
          <p>明确目标客户需求，提供专属方案</p>
        </div>
      </div>
      <div class="list_div">
        <div class="list_div_">
          <h4>精准客户分类</h4>
          <p>语音识别，判断客户属性，标准分类</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import '@/assets/scss/style03.scss';
.item-intro-12 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: url('@/assets/images/template03/pca@2x-min.jpg') center center no-repeat;
  background-size: 100% 100%;
  .tit {
    margin-bottom: 62px;
    color: #FFFFFF;
    text-align: center;
    font-family: 'PingFangSC-Semibold';
    font-size: 26px;
  }
  .list_con {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .list_div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 325px;
    height: 150px;
  }
  .list_div_02 {
    border-left: 1px solid #FFFFFF;
    border-right: 1px solid #FFFFFF;
  }
  
  .list_div h4 {
    margin-bottom: 32px;
    color: #8FD5FF; 
    text-align: center;
    font-family: 'PingFangSC-Medium';
    font-size: 18px;
  }
  .list_div p {
    color: #FFFFFF;
    text-align: center;
    font-family: 'PingFangSC-Light';
    font-size: 14px;
  }
}
</style>