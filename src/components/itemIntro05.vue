<template>
  <div class="item-intro-05">
    <div class="discr-con">
      <h2 class="tit">平台优势</h2>
    </div>
    <div class="cont">
      <div class="list-div">
        <div class="cont-div">
          <div class="cont-img-bg">
            <i class="icon-15"></i>
          </div>
          <img src="@/assets/images/template02/20.svg" alt="">
          <p class="text1">覆盖全国海量<br/>多类型用户</p>
        </div>
        <div class="list-bg"></div>
      </div>
      <div class="list-div">
        <div class="cont-div">
          <div class="cont-img-bg">
            <i class="icon-16"></i>
          </div>
          <img src="@/assets/images/template02/20.svg" alt="">
          <p class="text1">精准定位用户<br/>类型和行为投放</p>
        </div>
        <div class="list-bg"></div>
      </div>
      <div class="list-div">
        <div class="cont-div">
          <div class="cont-img-bg">
            <i class="icon-17"></i>
          </div>
          <img src="@/assets/images/template02/20.svg" alt="">
          <p class="text1">综合投放方案<br/>产生更有价值广告</p>
        </div>
        <div class="list-bg"></div>
      </div>
      <div class="list-div">
        <div class="cont-div">
          <div class="cont-img-bg">
            <i class="icon-18"></i>
          </div>
          <img src="@/assets/images/template02/20.svg" alt="">
          <p class="text1">有专业的媒介和<br/>商务团队提供服务</p>
        </div>
        <div class="list-bg"></div>
      </div>
      <div class="list-div">
        <div class="cont-div">
          <div class="cont-img-bg">
            <i class="icon-19"></i>
          </div>
          <img src="@/assets/images/template02/20.svg" alt="">
          <p class="text1">有强大的技术团队<br/>提供平台运营支撑</p>
        </div>
        <div class="list-bg"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


</script>

<style scoped lang="scss">
@import '@/assets/scss/style02.scss';
.item-intro-05 {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: url('@/assets/images/template02/14.jpg') center center no-repeat;
  background-size: cover;
  .discr-con {
    position: relative;
    text-align: center;
    z-index: 2;  
    padding-bottom: 60px;
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
    display: flex;
    text-align: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    img {
      display: block;
      margin: 28px auto 28px;
    }
    .list-div {
      overflow: hidden;
      position: relative;
      width: 100%;
      height: 336px;
      -webkit-transition: all .2s;
      transition: all .2s;
      background: #FAFAFA;
      border-right: 1px solid #979797;
      cursor: pointer;
      &:hover {
        background: rgba(22, 21, 25, 0.6);
        i {
          color: #fff;
        }
        p {
          color: #fff;
        }
      }
      .cont-div {
        position: relative;
        padding-top: 34px;
        z-index: 15;
        -webkit-transition: all .2s;
        transition: all .2s;
      }
      .cont-img-bg {
        margin: auto;
        border-radius: 50%;
        i {
          color: #46B5D8;
          font-size: 56px;
        }
      }
      .cont-img {
        width: 150px;
      }
      .title {
        padding-top: 20px;
        color: #46B5D8;
        font-size: 12px;
        font-weight: 600;
      }
      .text1 {
        line-height: 20px;
        margin: auto;
        padding-top: 48px;
        width: 60%;
        color: #161519;
        font-size: 12px;
      }
    }
  }
}
</style>