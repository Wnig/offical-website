<template>
  <div class="item-intro-04">
    <div class="conts">
      <div class="conts_">
        <div class="discr-con">
          <h3 class="tit">WNIG聚合广告媒体类型</h3>
        </div>
        <div class="cont">
          <div class="list-div">
            <div class="cont-div">
              <div class="cont-img-bg">
                <img class="cont-img" src="@/assets/images/template02/6.jpg">
              </div>
              <div class="tits">
                <p class="title">覆盖最广的楼宇高清数字框架媒体</p> 
              </div>           
            </div>
          </div>
          <div class="list-div">
            <div class="cont-div">
              <div class="cont-img-bg">
                <img class="cont-img" src="@/assets/images/template02/7.jpg">
              </div>
              <div class="tits">
                <p class="title">最前沿的生活圈数字媒体</p>
              </div>
            </div>
          </div>
          <div class="list-div">
            <div class="cont-div">
              <div class="cont-img-bg">
                <img class="cont-img" src="@/assets/images/template02/8.jpg">
              </div>
              <div class="tits">
                <p class="title">最in的多屏互动居家生活圈数字媒体</p>
              </div>
            </div>
          </div>
          <div class="list-div">
            <div class="cont-div">
              <div class="cont-img-bg">
                <img class="cont-img" src="@/assets/images/template02/9.jpg">
              </div>
              <div class="tits">
                <p class="title">规模最大的社区门禁广告媒体</p>
              </div>
            </div>
          </div>
          <div class="list-div">
            <div class="cont-div">
              <div class="cont-img-bg">
                <img class="cont-img" src="@/assets/images/template02/10.jpg">
              </div>
              <div class="tits">
                <p class="title">最有效的社区营销广告媒体</p>
              </div>
            </div>
          </div>
          <div class="list-div">
            <div class="cont-div">
              <div class="cont-img-bg">
                <img class="cont-img" src="@/assets/images/template02/11.jpg">
              </div>
              <div class="tits">
                <p class="title">最全的交通户外广告媒体</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


</script>

<style scoped lang="scss">
@import '@/assets/scss/style02.scss';
.item-intro-04 {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: url('@/assets/images/template02/12.jpg') center center no-repeat;
  background-size: cover;
  .discr-con {
    position: relative;
    text-align: center;
    z-index: 2;
    padding-top: 96px;
    .tit {
      position: relative;
      display: inline-block;
      color: #fff;
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
    width: 100%;
    padding-top: 48px;
    text-align: center;
    .list-div { 
      position: relative;
      display: inline-block;   
      width: 130px; 
      margin: 0 2px;
      cursor: pointer;
      transition: all 0.4s;
      &:hover {
        box-shadow: 5px 0px 5px 0px rgba(0, 0, 0, 0.3);
        -webkit-transform: scale(1.15) translateY(-25px) translateZ(200px);
        transform: scale(1.15) translateY(-25px) translateZ(200px);
        z-index: 100;
        -webkit-transition: all 0.8s;
        transition: all 0.4s;
      }
      .cont-div {
        position: absolute;
        left: 0;
        top: 0; 
        background: #fff;
        z-index: 15;
        box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.3);
      }
      .cont-img {
        width: 100%;
        height: 100%;
        margin: 0 auto 0;
        background: none;
      }
      .cont-img-bg {
        width: 130px;
        margin: 0 auto;
      }
      .tits {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        height: 60px;
      }
      .title {  
        width: 78%;
        margin: 0 auto;
        padding: 4px 0;
        color: #000;
        line-height: 18px;
        font-size: 12px;
      }
    }
  }
}
</style>