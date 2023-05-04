<template>
  <div class="item-intro-17">
    <div class="tit">
      <h2>招商政策</h2>
      <p>Ai市场统一零售价：9900/台</p>
    </div>
    <div class="list_con">
      <div class="list_div">
        <div class="list_div_">
          <div class="list_bg list_bg_01">
            <div class="list_bg_"></div>
          </div>
          <div class="list_bottom"></div>
        </div>
        <div class="list_content">
          <div class="img_ico img_01"></div>
          <h4>金牌代理商政策</h4>
          <div class="list_p">
            <p><strong>门槛：</strong>代理商首次充值6万，三折进货20台Ai电销机器人（代理商拿货价是市场零售价3折）</p>
            <p><strong>季度考核不低于50台提货</strong></p>
          </div>
        </div>
      </div>
      <div class="list_div">
        <div class="list_div_">
          <div class="list_bg list_bg_02">
            <div class="list_bg_"></div>
          </div>
          <div class="list_bottom"></div>
        </div>
        <div class="list_content">
          <div class="img_ico img_02"></div>
          <h4>市级独家代理商政策</h4>
          <div class="list_p">
            <p><strong>门槛：</strong>代理商首次充值12万，三折进货40台Ai电销机器人（代理商拿货价是市场零售价3折）</p>
            <p><strong>季度考核不低于100台提货市级独家享受区域保护政策，不开放其他代理商</strong></p>
          </div>
        </div>
      </div>
      <div class="list_div">
        <div class="list_div_">
          <div class="list_bg list_bg_03">
            <div class="list_bg_"></div>
          </div>
          <div class="list_bottom"></div>
        </div>
        <div class="list_content">
          <div class="img_ico img_03"></div>
          <h4>OEM合作机构政策</h4>
          <div class="list_p">
            <p><strong>门槛：</strong>合作机构首次充值30万，1.5折进货200台Ai电销机器人</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import '@/assets/scss/style03.scss';
.item-intro-17 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #fff;
  .tit {
    margin-bottom: 24px;
  }
  h2 {
    margin-bottom: 8px;
    color: #41A4DF;
    text-align: center;
    font-family: 'PingFangSC-Medium';
    font-size: 26px;
  }
  p {
    color: #444444;
    text-align: center;
    font-family: 'PingFangSC-Regular';
    font-size: 14px;
  }
  .list_con {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .list_div {
    position: relative;
    margin: 0 2px;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.20);
    cursor: pointer;
    &:hover {
      .list_bg_01 {
        background: #78C3F5;
        -webkit-transition: all 0.5s;
            transition: all 0.5s;
      }
      .list_bg_02 {
        background: #617DCD;
        -webkit-transition: all 0.5s;
            transition: all 0.5s;
      }
      .list_bg_03 {
        background: #5363CD;
        -webkit-transition: all 0.5s;
            transition: all 0.5s;
      }
    
      .list_content {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 267px;
        -webkit-transition: all 0.5s;
            transition: all 0.5s;
        .img_01 {
          background: url('@/assets/images/template03/pcskdsng.svg') center center no-repeat;
          background-size: 100% 100%;
        }
        .img_02 {
          background: url('@/assets/images/template03/pcsodjsod.svg') center center no-repeat;
          background-size: 100% 100%;
        }
        .img_03 {
          background: url('@/assets/images/template03/pcsjdis.svg') center center no-repeat;
          background-size: 100% 100%;
        }
        .list_p {
          display: block;
          -webkit-transition: all 0.5s;
              transition: all 0.5s;
        }
        h4 {
          color: #fff;
          -webkit-transition: all 0.5s;
              transition: all 0.5s;
        }
      }
    }
  }
  .list_bg {
    width: 213px;
    height: 217px;
    &.list_bg_01 {
      background: url('@/assets/images/template03/pc31@2x-min.jpg') center center no-repeat;
      background-size: 100% 100%;
    }
    &.list_bg_02 {
      background: url('@/assets/images/template03/pc32@2x-min.jpg') center center no-repeat;
      background-size: 100% 100%;
    }
    &.list_bg_03 {
      background: url('@/assets/images/template03/PC30@2x-min.jpg') center center no-repeat;
      background-size: 100% 100%;
    }
  }
  .list_bottom {
    height: 124px;
  }

  .list_content {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 124px;
    -webkit-transition: all 0.5s;
        transition: all 0.5s;
    h4 {
      height: 114px;
      color: #444444;
      text-align: center;
      line-height: 124px;
      font-family: 'PingFangSC-Medium';
      font-size: 14px;
    }
    .img_ico {
      position: absolute;
      left: 0;
      right: 0;
      top: -28px;
      margin: 0 auto;
      width: 56px;
      height: 56px;
    }
    .img_01 {
      background: url('@/assets/images/template03/pcoem.svg') center center no-repeat;
      background-size: 100% 100%;
    }
    .img_02 {
      background: url('@/assets/images/template03/pcdu.svg') center center no-repeat;
      background-size: 100% 100%;
    }
    .img_03 {
      background: url('@/assets/images/template03/pcjin.svg') center center no-repeat;
      background-size: 100% 100%;
    }
    .list_p {
      padding-top: 8px;
      display: none;
      height: 138px;
      background: #fff;
      -webkit-transition: all 0.5s;
          transition: all 0.5s;
      strong {
        font-family: 'PingFangSC-Regular';
      }
      p {
        width: 90%;
        margin: 0 auto 4px;
        color: #000000;
        text-align: left;
        line-height: 22px;
        font-family: 'PingFangSC-Light';
        font-size: 12px;
        -webkit-transition: all 0.5s;
            transition: all 0.5s;
      }
    }
  }
}
</style>