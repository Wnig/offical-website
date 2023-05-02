<template>
  <div class="item-intro-07">
    <div class="content">
      <div class="discr-con">
        <h3 class="tit">公司简介</h3>
      </div>
      <div class="con">
        <p>
          <strong>WNIG（厦门）文化传媒有限公司</strong>，全力整合线下各渠道优势广告媒介资源，致力打造一站式、多渠道的高效聚合广告媒体平台。团队由多年深耕传媒行业的广告精英以及在互联网行业取得多项成果的IT大咖组建而成，让传统媒介搭载互联网的高速列车快速升级，建立了传统媒体的互联网新模式。专业的推广团队为企业、商家广告主提供综合的广告媒体投放方案；强大的技术平台为广告主提供直观、可操控的广告投放方式。WNIG传媒独特的技术优势和丰富的广告渠道资源，让您的广告投的更有价值！
        </p>
      </div>
    </div>
    <FooterItem02 ref="footerItem01"></FooterItem02>
  </div>
</template>

<script setup lang="ts">
import FooterItem02 from './footerItem02.vue';

</script>

<style scoped lang="scss">
@import '@/assets/scss/style02.scss';
.item-intro-07 {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #232526;
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 82.41vh;
    background: url('@/assets/images/template02/24.jpg') center center no-repeat;
    background-size: cover;
    .con {
      width: 62%;
      margin: 0px auto 0;
      p {
        text-align: center;
        color: #BBBBBB;
        line-height: 24px;
        font-size: 12px;
      }
    }
    .discr-con {
      position: relative;
      text-align: center;
      z-index: 2;  
      padding-bottom: 50px;
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
    strong {
      color: #5BB8DE;
    }
  }
}
</style>