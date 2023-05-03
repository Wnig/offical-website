<template>
  <div class="item-block03">
    <video class="video" src="@/assets/videos/template03/video_01.mp4" autoplay="true" loop="true"></video>
    <div class="con">
      <HeaderItem03 ref="headerItem03"></HeaderItem03>
      <div class="cont">
        <div class="cont_">
          <h1>我们卖的不止是产品，而是盈利模式<br/>
              选择<strong>WNIG</strong>，就选择盈利！</h1>
          <div class="down-con" @click="slideDown">
            <div class="down"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import HeaderItem03 from './headerItem03.vue'
const slideDown = ()=> {
  let downHeight = document.documentElement.clientHeight || document.body.clientHeight;
  window.scrollTo(0, downHeight);
}
</script>
  
<style scoped lang="scss">
@import '@/assets/scss/style03.scss';

.item-block03 {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  .video {
    position: relative;
    left: 0;
    top: -10%;
    z-index: 0;
    width: 110%;
    height: 110%;
    -o-object-fit: fill;
    object-fit: fill;
  }
  .con {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.65);
  }
  h1 {
    color: #FFFFFF;
    text-align: center;
    line-height: 50px;
    font-family: 'PingFangSC-Medium';
    font-size: 30px;
    strong {
      display: inline-block;
      width: 103px;
      height: 53px;
      color: #41A4DF;
      text-align: center;
      line-height: 53px;
      font-family: 'PingFangSC-Medium';
      font-size: 32px;
    }
  }
  .cont {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55%;
    color: #FFFFFF;
    text-align: center;
    line-height: 24px;
    font-size: 14px;
  }
}

.down-con {
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 20px;
  cursor: pointer;
  .down {
    position: relative;
    margin: 0 auto 5px;
    width: 20px;
    height: 30px;
    background: url('@/assets/images/template03/4.svg') center center no-repeat;
    background-size: 100% 100%;
    &:after {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 8px;
      margin: 0 auto;
      content: '';
      width: 18px;
      height: 8px;
      background: url('@/assets/images/template03/5.svg') center center no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
      -webkit-animation: fall 1.2s infinite;
      animation: fall 1.2s infinite;
    }
  }
  .slidedown {
    margin: 0 auto;
    width: 100px;
    height: 30px;
    line-height: 28px;
    font-size: 10px;
    cursor: pointer;
  }
} 
/*向下效果*/
@-webkit-keyframes fall {
  0% {
    -webkit-transform: translateY(-8px);
    -moz-transform: translateY(-8px);
    -ms-transform: translateY(-8px);
    -o-transform: translateY(-8px);
  }
  60% {
    -webkit-transform: translateY(12px);
    -moz-transform: translateY(12px);
    -ms-transform: translateY(12px);
    -o-transform: translateY(12px);
  }
  100% {
    -webkit-transform: translateY(-8px);
    -moz-transform: translateY(-8px);
    -ms-transform: translateY(-8px);
    -o-transform: translateY(-8px);
  }
}
@keyframes fall {
  0% {
    -webkit-transform: translateY(-8px);
    -moz-transform: translateY(-8px);
    -ms-transform: translateY(-8px);
    -o-transform: translateY(-8px);
  }
  60% {
    -webkit-transform: translateY(12px);
    -moz-transform: translateY(12px);
    -ms-transform: translateY(12px);
    -o-transform: translateY(12px);
  }
  100% {
    -webkit-transform: translateY(-8px);
    -moz-transform: translateY(-8px);
    -ms-transform: translateY(-8px);
    -o-transform: translateY(-8px);
  }
}

/*漂浮*/
@-webkit-keyframes float_01 {
  0% {
    -webkit-transform: translateY(5px);
    -moz-transform: translateY(5px);
    -ms-transform: translateY(5px);
    -o-transform: translateY(5px);
  }
  50% {
    -webkit-transform: translateY(-5px);
    -moz-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    -o-transform: translateY(-5px);
  }
  100% {
    -webkit-transform: translateY(5px);
    -moz-transform: translateY(5px);
    -ms-transform: translateY(5px);
    -o-transform: translateY(5px);
  }
}
@keyframes float_01 {
  0% {
    -webkit-transform: translateY(5px);
    -moz-transform: translateY(5px);
    -ms-transform: translateY(5px);
    -o-transform: translateY(5px);
  }
  50% {
    -webkit-transform: translateY(-5px);
    -moz-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    -o-transform: translateY(-5px);
  }
  100% {
    -webkit-transform: translateY(5px);
    -moz-transform: translateY(5px);
    -ms-transform: translateY(5px);
    -o-transform: translateY(5px);
  }
}
@-webkit-keyframes float_02 {
  0% {
    -webkit-transform: translateY(10px);
    -moz-transform: translateY(10px);
    -ms-transform: translateY(10px);
    -o-transform: translateY(10px);
  }
  50% {
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    -o-transform: translateY(-10px);
  }
  100% {
    -webkit-transform: translateY(10px);
    -moz-transform: translateY(10px);
    -ms-transform: translateY(10px);
    -o-transform: translateY(10px);
  }
}
@keyframes float_02 {
  0% {
    -webkit-transform: translateY(10px);
    -moz-transform: translateY(10px);
    -ms-transform: translateY(10px);
    -o-transform: translateY(10px);
  }
  50% {
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    -o-transform: translateY(-10px);
  }
  100% {
    -webkit-transform: translateY(10px);
    -moz-transform: translateY(10px);
    -ms-transform: translateY(10px);
    -o-transform: translateY(10px);
  }
}
@-webkit-keyframes float_03 {
    0% {
    -webkit-transform: translateY(30px);
    -moz-transform: translateY(30px);
    -ms-transform: translateY(30px);
    -o-transform: translateY(30px);
  }
  50% {
    -webkit-transform: translateY(-30px);
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -o-transform: translateY(-30px);
  }
  100% {
    -webkit-transform: translateY(30px);
    -moz-transform: translateY(30px);
    -ms-transform: translateY(30px);
    -o-transform: translateY(30px);
  }
}
@keyframes float_03 {
  0% {
    -webkit-transform: translateY(30px);
    -moz-transform: translateY(30px);
    -ms-transform: translateY(30px);
    -o-transform: translateY(30px);
  }
  50% {
    -webkit-transform: translateY(-30px);
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -o-transform: translateY(-30px);
  }
  100% {
    -webkit-transform: translateY(30px);
    -moz-transform: translateY(30px);
    -ms-transform: translateY(30px);
    -o-transform: translateY(30px);
  }
}
@-webkit-keyframes float_04 {
  0% {
    -webkit-transform: translateY(15px);
    -moz-transform: translateY(15px);
    -ms-transform: translateY(15px);
    -o-transform: translateY(15px);
  }
  50% {
    -webkit-transform: translateY(-15px);
    -moz-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -o-transform: translateY(-15px);
  }
  100% {
    -webkit-transform: translateY(15px);
    -moz-transform: translateY(15px);
    -ms-transform: translateY(15px);
    -o-transform: translateY(15px);
  }
}
@keyframes float_04 {
  0% {
    -webkit-transform: translateY(15px);
    -moz-transform: translateY(15px);
    -ms-transform: translateY(15px);
    -o-transform: translateY(15px);
  }
  50% {
    -webkit-transform: translateY(-15px);
    -moz-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -o-transform: translateY(-15px);
  }
  100% {
    -webkit-transform: translateY(15px);
    -moz-transform: translateY(15px);
    -ms-transform: translateY(15px);
    -o-transform: translateY(15px);
  }
}
</style>