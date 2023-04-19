<template>
  <div class="item-block">
    <video class="video" src="@/assets/videos/video_01.mp4" autoplay loop></video>
    <div class="content">
      <HeaderItem ref="headerItem"></HeaderItem>
        <div class="cont">
          <h1><strong>互联网全域解决方案提供商</strong><br/>
          专注于产业项目资源整合和改造<br/>
          探索新互联网经济下新兴的产业模式</h1>
          <div class="down-con" @click="slideDown">
            <div class="down"></div>
            <div class="slidedown">Scroll Down</div>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderItem from './headerItem.vue'
const slideDown = ()=> {

}
</script>

<style scoped lang="scss">
.item-block {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
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
  .content {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.6);
    .cont {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: #FFFFFF;
      text-align: center;
      line-height: 30px;
      font-size: 18px;
       h1 {
        color: #FFFFFF;
        text-align: center;
        line-height: 30px;	
        font-size: 18px;
        font-family: 'PingFangSC-Light';
      }
      strong {
        line-height: 20px;
        font-size: 36px;
        color: #5ab8de;
        font-family: 'PingFangSC-Semibold';
      }
    }
	}
}

.down-con {
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 20px;
  .down {
    position: relative;
    margin: 0 auto 5px;
    width: 20px;
    height: 30px;
    background: url('@/assets/images/4.svg') center center no-repeat;
    background-size: 100% 100%;
  }
  .down:after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 8px;
    margin: 0 auto;
    content: '';
    width: 18px;
    height: 8px;
    background: url('@/assets/images/5.svg') center center no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
    -webkit-animation: fall 1.2s infinite;
    animation: fall 1.2s infinite;
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