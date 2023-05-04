<template>
  <div class="item-intro-16">
    <div class="con">
      <div class="tit"></div>
      <ul class="con_">
        <li>
          <div class="num">01</div>
          <div class="content">
            <div class="content_">
              <h4>销售的盈利模式</h4>
              <p>代理商服务企业100家/年，每家平均5台Ai电销机器人，全年500台销售，每台结合终端促销政策，每台平均3000利润，销售收益：500台*3000=150万/年</p>
            </div>
          </div>
        </li>
        <li>
          <div class="num">02</div>
          <div class="content">
            <div class="content_">
              <h4>服务的盈利模式</h4>
              <p>呼叫服务外包内容——设计话术脚本；配合客户提供准意向客户；5台机器人配一个人工客服（成本），收费标准：6万/季度，服务收益：每月服务5家企业，5家*6万=30万/月  30万*12月=360万</p>
            </div>
          </div>
        </li>
        <li>
          <div class="num">03</div>
          <div class="content">
            <div class="content_">
              <h4>招商的盈利模式</h4>
              <p>创物云独一无二的招商模式链接所有渠道，代理商除去销售利润还享有顶层的招商机制（招商机制是企业核心机制，意向者面谈）</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import '@/assets/scss/style03.scss';
.item-intro-16 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #252525;

  .con {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .tit {
    width: 130px;
    height: 130px;
    margin-right: 50px;
    background: url('@/assets/images/template03/PCYINLI@2x.png') center center no-repeat;
    background-size: 100% 100%;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
    cursor: pointer;
    &:hover {
      .content {
        background: #fff;
        -webkit-transition: all 0.5s;
            transition: all 0.5s;
      }
      h4 {
        color: #000000;
        -webkit-transition: all 0.5s;
            transition: all 0.5s;
      }
      p {
        color: #222222;
        -webkit-transition: all 0.5s;
            transition: all 0.5s;
      }
    }
    &.li_sel {
      .content {
        background: #fff;
        -webkit-transition: all 0.5s;
            transition: all 0.5s;
      }
      h4 {
        color: #000000;
        -webkit-transition: all 0.5s;
            transition: all 0.5s;
      }
      p {
        color: #222222;
        -webkit-transition: all 0.5s;
            transition: all 0.5s;
      }
    }
  }
  .num {
    width: 98px;
    height: 98px;
    color: #F8F8F8;
    text-align: center;
    line-height: 98px;
    font-family: 'PingFangSC-Regular';
    font-size: 42px;
    background: #41A4DF;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 612px;
    height: 98px;
    border-bottom: 0.05vw solid #FFFFFF;
    -webkit-transition: all 0.5s;
        transition: all 0.5s;
  }
  .content_ {
    width: 90%;
    margin: 0 auto;
  }
  h4 {
    margin-bottom: 4px;
    color: #fff; 
    font-family: 'PingFangSC-Medium';
    font-size: 16px;
    -webkit-transition: all 0.5s;
        transition: all 0.5s;
  }
  p {
    color: #fff; 
    line-height: 20px;
    font-family: 'PingFangSC-Light';
    font-size: 12px;
    -webkit-transition: all 0.5s;
        transition: all 0.5s;
  }
}
</style>