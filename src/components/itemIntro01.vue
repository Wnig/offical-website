<template>
  <div class="item-intro-01">
    <video class="video" src="@/assets/videos/video_03.mp4" autoplay loop></video>
    <div class="con">
        <div class="cont">
          <div class="cont_">
            <h1 class="title">生态大联盟平台</h1>
            <p>生态大联盟平台，专注“产业互联+实体经济”针对企业营销模式、渠道管控、用户体验、广告投放、聚集粉丝、运营成本等危机，提供互联网整体解决方案。秉持“去中心化”的核心理念，打造属于自己的互联网平台，帮助企业快速转型和脱离危机！</p>
            <h3>低门槛、轻运营、高收入！<br/>
          生态大联盟平台<strong>代理商全国火热招募中……</strong>
          </h3>
            <a class="more" target="_blank"><span>MORE</span><i class="icon-13"></i></a>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
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
.title {
  position: relative;
  color: #000;
  text-align: left;
  font-size: 16px;
  font-family: 'PingFangSC-Semibold';
  font-weight: bold;
  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 2px;
    width: 14px;
    height: 2px;
    background: #5BB8DE;
  }
}
.more {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 24px;
  background: url('@/assets/images/11.svg') center center no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  i {
    color: #5BB8DE;
    font-size: 12px;
    -webkit-transition: all .8s;
      transition: all .8s;
  }
  span {
    margin-right: 2px;
    color: #FFF;
    font-size: 10px;
    font-family: 'PingFangSC-Regular';
  }
  &:hover {
    i {
      color: #fff;
      -webkit-transition: all .8s;
        transition: all .8s;
    }
  }
}
.item-intro-01 {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .con {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.6);
	}
	.cont {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		right: 139px;
		top: 132px;
		width: 400px;
		height: 280px;
		background: rgba(255, 255, 255, 0.9);
		box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.12);
		border-radius: 5px;
	}
	.cont_ {
		width: 80%;
    p {
      margin-top: 5.56vh;
      margin-bottom: 2vh;
      color: #000000;
      line-height: 18px;
      font-size: 10px;
      font-family: 'PingFangSC-Light';
    }
    h3 {
      margin-bottom: 10px;
      line-height: 30px;
      font-size: 14px;
      font-family: 'PingFangSC-Medium';
      font-weight: bold;
      strong {
        color: #5BB8DE;
        font-size: 14px;
        font-family: 'PingFangSC-Medium';
        font-weight: bold;
      }
    }
	}
}
</style>