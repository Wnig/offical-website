<template>
  <div class="item-intro-15">
    <div class="con">
      <div class="tit"><strong>AI</strong>服务行业</div>
      <div class="list_con">
        <div class="list_div">
          <div class="list_div_">
            <div class="ico">
              <i class="icon-pc20"></i>
            </div>
            <p>金融</p>
          </div>
        </div>
        <div class="list_div">
          <div class="list_div_">
            <div class="ico">
              <i class="icon-pc21"></i>
            </div>
            <p>保险</p>
          </div>
        </div>
        <div class="list_div">
          <div class="list_div_">
            <div class="ico">
              <i class="icon-pc22"></i>
            </div>
            <p>教育</p>
          </div>
        </div>
        <div class="list_div">
          <div class="list_div_">
            <div class="ico">
              <i class="icon-pc23"></i>
            </div>
            <p>汽车</p>
          </div>
        </div>
        <div class="list_div">
          <div class="list_div_">
            <div class="ico">
              <i class="icon-pc24"></i>
            </div>
            <p>电商</p>
          </div>
        </div>
        <div class="list_div">
          <div class="list_div_">
            <div class="ico">
              <i class="icon-pc25"></i>
            </div>
            <p>广告</p>
          </div>
        </div>
        <div class="list_div">
          <div class="list_div_">
            <div class="ico">
              <i class="icon-pc26"></i>
            </div>
            <p>房地产</p>
          </div>
        </div>
        <div class="list_div">
          <div class="list_div_">
            <div class="ico">
              <i class="icon-pc27"></i>
            </div>
            <p>互联网</p>
          </div>
        </div>
        <div class="list_div">
          <div class="list_div_">
            <div class="ico">
              <i class="icon-pc28"></i>
            </div>
            <p>更多其他<br/>服务行业</p>
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
.item-intro-15 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: url('@/assets/images/template03/PC3243@2x-min.jpg') center center no-repeat;
  background-size: cover;
  .con {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
  }
  .tit {
    width: 100%;
    margin-bottom: 56px;
    color: #FFFFFF;
    font-family: 'PingFangSC-Medium';
    font-size: 26px;
    strong {
      margin-left: 10px;
      color: #FFFFFF;
      font-family: 'PingFangSC-Medium';
      font-size: 52px;
    }
  }
  .list_con {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .list_div {
    width: 94px;
    cursor: pointer;
    -webkit-transition: all 0.5s;
        transition: all 0.5s;
    &:hover {
      -webkit-transform: translateY(-3.52vh);
      -moz-transform: translateY(-3.52vh);
      -ms-transform: translateY(-3.52vh);
      -o-transform: translateY(-3.52vh);
      .ico {
        background: #fff;
        -webkit-transition: all 0.5s;
            transition: all 0.5s;
      }
      i {
        color: #41A4DF;
        -webkit-transition: all 0.5s;
            transition: all 0.5s;
      }
      p {
        color: #FFFFFF;
        font-family: 'PingFangSC-Medium';
        font-size: 2.08vw;
        -webkit-transition: all 0.5s;
            transition: all 0.5s;
      }
    }
    .ico {
      width: 80px;
      height: 80px;
      margin: 0 auto 20px;
      border-radius: 50%;
      border: 0.05vw solid #fff;
      -webkit-transition: all 0.5s;
          transition: all 0.5s;
    }
    i {
      color: #fff;
      font-size: 80px;
    }
    p {
      height: 44px;
      color: #FFFFFF;
      text-align: center;
      font-family: 'PingFangSC-Regular';
      font-size: 16px;
    }
  }
}
</style>