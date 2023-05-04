<template>
  <div class="item-intro-10">
    <div class="con">
      <div class="con_">
        <div class="tit">
          <h4>AI电销机器人</h4>
          <h3>优势</h3>
        </div>
        <div class="list-con">
          <div class="list_div list_div_01">
            <div class="img_">
              <img src="@/assets/images/template03/pc1.svg" alt="">
            </div>
            <p>成本低廉</p>
          </div>
          <div class="list_div list_div_02">
            <div class="img_">
              <img src="@/assets/images/template03/pc2.svg" alt="">
            </div>
            <p>永不跳槽</p>
          </div>
          <div class="list_div list_div_03">
            <div class="img_">
              <img src="@/assets/images/template03/pc3.svg" alt="">
            </div>
            <p>无需培训</p>
          </div>
          <div class="list_div list_div_04">
            <div class="img_">
              <img src="@/assets/images/template03/pc4.svg" alt="">
            </div>
            <p>定制灵活</p>
          </div>
          <div class="list_div list_div_05">
            <div class="img_">
              <img src="@/assets/images/template03/pc5.svg" alt="">
            </div>
            <p>扩容方便</p>
          </div>
          <div class="list_div list_div_06">
            <div class="img_">
              <img src="@/assets/images/template03/pc6.svg" alt="">
            </div>
            <p>统计准确</p>
          </div>
          <div class="list_div list_div_07">
            <div class="img_">
              <img src="@/assets/images/template03/pc7.svg" alt="">
            </div>
            <p>服务标准</p>
          </div>
          <div class="list_div list_div_08">
            <div class="img_">
              <img src="@/assets/images/template03/pc8.svg" alt="">
            </div>
            <p>持久度高</p>
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
.item-intro-10 {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: url('@/assets/images/template03/pcbeijng1@2x-min.jpg') center center no-repeat;
  background-size: cover;
  .con {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .con_ {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 79.32vw;
    height: 34.22vw;
    background: url('@/assets/images/template03/pcquan@2x-min.png') center center no-repeat;
    background-size: 100% 100%;
  }
  h4 {
    color: #FFFFFF;
    text-align: center;
    line-height: 40px;
    font-family: 'PingFangSC-Medium';
    font-size: 22px;
  }
  h3 {
    color: #41A4DF;
    text-align: center;
    line-height: 40px;
    font-family: 'PingFangSC-Semibold';
    font-size: 34px;
  }
  .list-con {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .list_div {
    position: absolute;
    width: 84px;
    cursor: pointer;
    -webkit-transition: all 1s;
    transition: all 1s;
    &:hover {
      transform: scale(1.2);
      -webkit-transform: scale(1.2); 
      -webkit-transition: all 1s;
          transition: all 1s;
      .img_ {
        img {
          opacity: 1;
          -webkit-transition: all 1s;
            transition: all 1s;
        }
      }
    }
    &.list_div_01 {
      left: 12vw;
      top: 0;
    }
    &.list_div_02 {
      left: -2vw;
      top: 9vw;
    }
    &.list_div_03 {
      left: 12vw;
      top: 22vw;
    }
    &.list_div_04 {
      left: 35vw;
      top: -4vw;
    }
    &.list_div_05 {
      left: 56vw;
      top: 0;
    }
    &.list_div_06 {
      left: 72vw;
      top: 9vw;
    }
    &.list_div_07 {
      left: 56vw;
      top: 23vw;
    }
    &.list_div_08 {
      left: 35vw;
      top: 26vw;
    }
    p {
      text-align: center;
      color: #FFFFFF; 
      font-family: 'PingFangSC-Regular';
      font-size: 1.16vw;
    }
    .img_ {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 84px;
      height: 84px;
      margin-bottom: 8px;
      border-radius: 50%;
      box-shadow: -1px 6px 24px 0 rgba(64,163,222,0.71); 
      background: #FFFFFF;
      img {
        width: 46px;
        opacity: 0.6;
        -webkit-transition: all 1s;
            transition: all 1s;
      }
    }
  }
}
</style>