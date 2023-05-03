<template>
  <div class="item-intro-08">
    <div class="con">
      <div class="list_div">
        <div class="list_div_">
          <h3>关于AI机器人</h3>
          <p>AIWNIG电销机器人是一款通过精准语言平台，群呼潜在客户群体，并模拟销售专员沟通进行信息筛选的人工智能语音机器人。AI电销机器人在普通呼叫系统基础上加入了自然语言处理、语音识别、词义理解等多项人工智能技术，通过智能外呼，自动应答来代替人工接打电话，达到筛选意向客户、锁定目标客户、精准客户分类等等营销服务目的，提升客户体验、提高营销效率、优化运营成本、助力企业降本增效。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import '@/assets/scss/style03.scss';
.item-intro-08 {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
  .con {
    width: 66.67vw;
    height: 100vh;
    margin-left: 333px;
    background: url('@/assets/images/template03/3d9d591dad40d8f9191189625b456f823533d96212055-MhfB8H_fw658@2x-min.jpg') center center no-repeat;
    background-size: 100% 100%;
  }
  .list_div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 83px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 517px;
    height: 325px;
    border: 1px solid #ECECEC;
    box-shadow: 0 6px 20px -7px rgba(0,0,0,0.11);
    background: #FFFFFF;
    .list_div_ {
      width: 419px;
    }
    h3 {
      margin-bottom: 8px;
      color: #41A4DF;
      font-family: 'PingFangSC-Medium';
      font-size: 26px;
    }
    p {
      color: #666666;
      line-height: 28px; 
      font-family: 'PingFangSC-Regular';
      font-size: 14px;
    }
  }
}
</style>