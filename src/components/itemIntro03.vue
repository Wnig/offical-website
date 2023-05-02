<template>
  <div class="item-intro-03">
    <div class="discr-con">
      <h2 class="tit">为什么选择WNIG传媒？</h2>
    </div>
    <div class="cont">
      <div class="list-div">
        <div class="cont-div">
          <div class="cont-img-bg">
            <i class="icon-19"></i>
          </div>
          <p class="text1">拥有强大的<br/>平台技术支撑</p>
        </div>
      </div>
      <div class="list-div">
        <div class="cont-div">
          <div class="cont-img-bg">
            <i class="icon-3"></i>
          </div>
          <p class="text1">掌握丰富的<br/>广告渠道资源</p>
        </div>
      </div>
      <div class="list-div">
        <div class="cont-div">
          <div class="cont-img-bg">
            <i class="icon-4"></i>
          </div>
          <p class="text1">提供综合的<br/>广告投放方案</p>
        </div>
      </div>
    </div>
    <img src="@/assets/images/template02/5.png" alt="">
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import '@/assets/scss/style02.scss';
.item-intro-03 {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: url('@/assets/images/template02/13.jpg') center center no-repeat;
  background-size: cover;
  .discr-con {
    position: relative;
    text-align: center;
    z-index: 2;
    
    .tit {
      position: relative;
      display: inline-block;
      font-size: 20px;
      color: #000;
      font-family: 'PingFangSC-Regular';
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
    padding-top: 16.2vh;
    text-align: center;
  }
  .list-div {
    display: inline-block;
    width: 160px;
    height: 160px;
    margin: 0 59px;
    border-radius: 100%;
    background: #FFFFFF;
    box-shadow: 0 8px 21px 0 rgba(0,0,0,0.06);
    cursor: pointer;
    transition: all 1s;
    -moz-transition: all 1s;
    -webkit-transition: all 1s;
    &:hover {
      background: #5BB8DE;
      transition: all 1s;
      -moz-transition: all 1s;
      -webkit-transition: all 1s;  
      i {
        color: #fff;
      }
      .text1 {
        color: #fff;
      }
    }  
    .cont-div {
      display: table-cell;
      vertical-align: middle;
      width: 160px;
      height: 160px;
      margin: 0 auto;
    }
    .cont-img-bg {
      margin-bottom: 18px;
    }
    i {
      font-size: 40px;
      color: #5BB8DE;
    }
    .text1 {
      font-size: 14px;
    }
  }
  
  img {
    display: block;
    width: 55%;
    margin: 0 auto;
    padding-top: 80px;
  }
}
</style>