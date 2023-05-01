<template>
  <div class="item-block02">
    <video autoplay="true" class="video" loop="true" src="@/assets/videos/template02/video1.mp4"></video>
    <div class="con">
      <HeaderItem02 ref="headerItem02"></headerItem02>
      <div class="cont">
        <h2 class="text1 tit">一站式、多渠道、最有效的</h2>
        <h2 class="text1">聚合广告媒体平台</h2>
        <h2 class="text1">让您的广告投的更有价值！</h2>
        <button class="down-btn" @click="slideDown">
          <i class="icon-Group-47"></i>
        </button>
        <div class="right-phone">
          <img alt="" class="right-1" src="@/assets/images/template02/img_01.png">
          <img alt="" class="right-2" src="@/assets/images/template02/img_02.png">
          <img alt="" class="right-3" src="@/assets/images/template02/img_03.png">
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import HeaderItem02 from './headerItem02.vue'
const slideDown = ()=> {

}
</script>
  
<style scoped lang="scss">
@import '@/assets/scss/style02.scss';

.item-block02 {
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
    z-index: 2;
  }
  .cont {
    width: 893px;
    height: 816px;
    margin: 0 53px;
    padding-top: 30px;
    padding-left: 63px;
    p {
      margin-top: 52px;
      color: #FFFFFF;
      line-height: 24px;
      font-size: 12px;
    }
    .text1 {
      padding-top: 0;
      font-size: 34px;
      color: #FFFFFF;
      font-family: 'PingFangSC-Regular';
      font-weight: bold;
    }
    
    .tit {
      position: relative;
      display: inline-block;
      color: #fff;
      font-size: 24px;
      font-family: 'PingFangSC-Regular';
      &:after {
        content: '';
        position: absolute;
        left: -2px;
        left: 0;
        width: 92px;
        height: 20px;
        background: url('@/assets/images/template02/ico_bor.png') center center no-repeat;
        background-size: 100% 100%;
        z-index: -1;
      }
    }
  }
}

/*箭头*/
.down-btn {
  overflow: hidden;
  position: absolute;
  left: 63px;
  bottom: 50px;
  width: 24px;
  height: 24px;
  border: 1px solid #fff;
  border-radius: 100%;
  outline: none;
  color: #fff;
  background: 0 0;
  z-index: 100;
  cursor: pointer;
  i {
    display: block;
    font-size: 14px;
    -webkit-animation: fall .6s infinite;
    animation: fall .6s infinite;
  }
} 
  
/*手机*/
.right-phone {
  position: absolute;
  bottom: 48px;
  right: 40px;
  width: 340px;
  img {
    display: block;
    width: 100%;
  }
  .right-2 {
    width: 85%;
    top: 0;
    left: 0;
    position: absolute;
    -webkit-animation: phoneAni1 1.5s;
    animation: phoneAni1 1.5s;
    -webkit-transform: translateX(6px) translateY(22px);
    transform: translateX(6px) translateY(22px);
  }
  .right-3 {
    width: 85%;
    top: 0;
    left: 0;
    position: absolute;
    -webkit-animation: phoneAni2 1.5s;
    animation: phoneAni2 1.5s;
    -webkit-transform: translateX(-20px) translateY(-15px);
    transform: translateX(-20px) translateY(-15px);
  }
}

@keyframes phoneAni1 {
  0% {
    -webkit-transform: translateX(20px) translateY(60px);
    transform: translateX(20px) translateY(60px);
  }
  100% {
    -webkit-transform: translateX(6px) translateY(22px);
    transform: translateX(6px) translateY(22px);
  }
}

@keyframes phoneAni2 {
  0% {
    -webkit-transform: translateX(10px) translateY(60px);
    transform: translateX(10px) translateY(60px);
  }
  100% {
    -webkit-transform: translateX(-20px) translateY(-15px);
    transform: translateX(-20px) translateY(-15px);
  }
}

/*向下效果*/
@-webkit-keyframes fall {
  0% {
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    -o-transform: translateY(-10px);
  }
  60% {
    -webkit-transform: translateY(15px);
    -moz-transform: translateY(15px);
    -ms-transform: translateY(15px);
    -o-transform: translateY(15px);
  }
  100% {
    -webkit-transform: translateY(45px);
    -moz-transform: translateY(45px);
    -ms-transform: translateY(45px);
    -o-transform: translateY(45px);
  }
}
@keyframes fall {
  0% {
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    -o-transform: translateY(-10px);
  }
  60% {
    -webkit-transform: translateY(15px);
    -moz-transform: translateY(15px);
    -ms-transform: translateY(15px);
    -o-transform: translateY(15px);
  }
  100% {
    -webkit-transform: translateY(45px);
    -moz-transform: translateY(45px);
    -ms-transform: translateY(45px);
    -o-transform: translateY(45px);
  }
}

</style>