<template>
  <div class="item-intro-06">
    <div class="discr-con">
      <h2 class="tit">WNIG聚合广告媒体类型</h2>
      <p>广告主 —— WNIG —— 渠道通道</p>
    </div>
    <div class="cont">
      <div class="list-div">
        广告直投
      </div>
      <div class="list-div">
        精选渠道
      </div>
      <div class="list-div">
        智能分销
      </div>
    </div>
    <p class="last_p">WNIG传媒致力为您打造一条高效、优质的<br/>广告推广通道扫码立即进入聚合广告媒体平台</p>
  </div>
</template>

<script setup lang="ts">


</script>

<style scoped lang="scss">
@import '@/assets/scss/style02.scss';
.item-intro-06 {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: url('@/assets/images/template02/23.jpg') center center no-repeat;
  background-size: cover;

  .discr-con {
    position: relative;
    text-align: center;
    z-index: 2;   
    padding-bottom: 60px;
    p {
      color: #fff;
      text-align: center;
      font-size: 14px;
    }
    .tit {
      position: relative;
      display: inline-block;
      color: #fff;
      padding-bottom: 50px;
      font-size: 24px;
      font-family: 'PingFangSC-Regular';
      font-weight: bold;
      &:after {
        content: '';
        position: absolute;
        left: -2px;
        top: 0;
        width: 52px;
        height: 10px;
        background: url('@/assets/images/template02/ico_bor.png') center center no-repeat;
        background-size: 100% 100%;
        z-index: -1;
      }
    }
  }
  
  .cont {
    padding-bottom: 40px;
    text-align: center;
  }
  .list-div {
    display: inline-block;
    width: 16.35vw;
    height: 16.35vw;
    line-height: 16.35vw;
    color: #fff;
    border-radius: 100%;
    font-size: 1.82vw;
    background-image: linear-gradient(-270deg, #5BB8DE 3%, rgba(91,184,222,0.00) 97%);
  }
  .last_p {
    color: #fff;
    text-align: center;
    line-height: 2.4vw;
    font-size: 1.3vw;
  }
}
</style>