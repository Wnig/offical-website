<template>
  <div class="item-intro-18">
    <div class="con">
      <div class="logo-img">
        <img src="@/assets/images/logo.png" alt="">
      </div>
      <div class="about">
        <h3>WNIG集团</h3>
        <p>集团致力于产业化互联网项目改造，是行业领先的一站式产业化互联网项目服务商。旗下包括：WNIG（厦门）科技有限公司；WNIG（厦门）信息科技有限公司；WNIG（厦门）电子商务有限公司；创物云（厦门）网络科技有限公司；WNIG（厦门）文化传媒有限公司；WNIG（厦门）影视广告有限公司；互联网商会。拥有完整的物联网项目、聚合电商、大数据服务等自营平台。专业提供：WNIG依托自身强大的技术研发实力、全方位的互联网运营策划、专业的品牌策划设计、个性化定制的产业升级改造方案、精准的大数据服务、庞大的互联网商会资源对接。</p>
        <p>WNIG集团从2012年起深耕于产业化互联网项目，本着宏伟的战略眼光和专业的投资理念，投资建成了完整的产业生态链，包括：大数据、电商、旅游、大健康、物联网、新零售、互联网金融、新农业、文创、文化传媒、餐饮、游艇、教育、生物科技、医疗、众创空间等产业。打造了全行业化领先的产业生态系统，成为了新互联网经济体系下新兴的产业模式。已为多个政企项目及大中型企业提供了相关服务，建立了良性的合作模式。代理及合作伙伴遍布北、上、广及河南、四川、福建、浙江等中国互联网经济发达区域。
        WNIG集团秉持科技引领创新，数据创造价值的价值理念。坚信小企业也可以有大生态。我们将一如既往与合作伙伴和谐共进，实现效益双赢。
        </p>
      </div>
    </div>
    <FooterItem03 ref="footerItem03"></FooterItem03>
  </div>
</template>

<script setup lang="ts">
import FooterItem03 from './footerItem03.vue';
</script>

<style scoped lang="scss">
@import '@/assets/scss/style03.scss';
.item-intro-18 {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .con {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 72.04vh;
    background: #F6F8F9;
  }
  .logo-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30.63vw;
    height: 31.04vw;
    margin-right: 5.18vw;
    background: url('@/assets/images/template03/pc34@2x-min.jpg') center center no-repeat;
    background-size: 100% 100%;
    img {
      display: block;
      width: 24.27vw;
    }
  }
  .about {
    width: 50.91vw; 
    h3 {
      margin-bottom: 1.67vh;
      color: #222222;
      font-family: 'PingFangSC-Medium';
      font-size: 2.08vw;
    }
    strong {
      color: #5EB2E4;
      font-family: 'PingFangSC-Medium';
      font-size: 2.6vw;
    }
    p {
      color: #222222;
      line-height: 1.98vw;  
      font-family: 'PingFangSC-Light';
      font-size: 1.15vw;
    }
  }
}
</style>