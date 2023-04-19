<template>
  <div class="particle">
    <div id="seleTop" class="select-top">
      <iframe src="../src/static/swave.html" frameborder="0"></iframe>
    </div>
	  <div class="select-title">
      <div class="title-bg">WNIG集团</div>
	  	<h1>WNIG<br/>GROUP</h1>
			<div class="bor"></div>
	  </div>
	  <div class="cont">
      <div class="cont_">
        <div class="e-mail">
          <a href="mailto:770225508@qq.com">
            <div class="e-mail-bg"></div>
            <i class="icon-10"></i>
          </a>
        </div>
        <div class="conts">
          <div class="conts_">
            <p>
              集团致力于产业化互联网项目改造，是行业领先的一站式产业化互联网项目服务商。<strong>互联网商会，拥有完整的物联网项目、聚合电商、大数据服务等自营平台。</strong>专业提供：依托自身强大的技术研发实力、全方位的互联网运营策划、专业的品牌策划设计、个性化定制的产业升级改造方案、精准的大数据服务、庞大的互联网商会资源对接。
            </p>
            <p>
              集团从2012年起深耕于产业化互联网项目，本着宏伟的战略眼光和专业的投资理念，投资建成了完整的产业生态链，<strong>包括：大数据、电商、旅游、大健康、物联网、新零售、互联网金融、新农业、文创、文化传媒、餐饮、游艇、教育、生物科技、医疗、众创空间等产业。</strong>打造了全行业化领先的产业生态系统，成为了新互联网经济体系下新兴的产业模式。已为多个政企项目及大中型企业提供了相关服务，建立了良性的合作模式。代理及合作伙伴遍布北、上、广及河南、四川、福建、浙江等中国互联网经济发达区域。
            </p>
            <p>
              集团秉持科技引领创新，数据创造价值的价值理念。坚信小企业也可以有大生态。我们将一如既往与合作伙伴和谐共进，实现效益双赢。
            </p> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.particle {
  position: relative;
  overflow: hidden;
  background: #FAFAFA;
  min-height: 100vh;
  #seleTop {
		height: 185px;
    overflow: hidden;
    iframe {
      width: 100%;
      height: 200%;
      margin-top: -60px;
    }
  } 
  .select-title  {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 185px;
		border-bottom: 1px solid #5BB8DE;
		z-index: 2;
    .bor {
      position: absolute;
      left: 0;
      bottom: 0px;
      width: 350px;
      height: 2px;
      background: #5BB8DE;
    }
    .title-bg {
      width: 120px;
      margin-top: 40px;
      margin-left: 300px;
      padding: 3px 16px;
      color: #FFFFFF;
      text-align: center;
      font-size: 10px;
      font-family: 'PingFangSC-Regular';
      background: url('@/assets/images/9.svg') center center no-repeat;
      background-size: 100% 100%;
      z-index: 2;
    }
    h1 {
      margin-top: 10px;
      margin-left: 200px;
      color: #FFFFFF;
      line-height: 50px;
      text-shadow: 00 0 30px #0fabea;
      font-size: 40px;
      font-family: 'PingFangSC-Semibold';
      z-index: 2;
    }
	}
  .cont {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
    height: 300px;
		background: #FAFAFA;
	}
	.cont_ {
		width: 800px;
	}
	.conts {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		padding-left: 240px;
    p {
      margin-bottom: 5px;
      color: #000000;
      line-height: 20px;
      font-size: 10px;
      font-family: 'PingFangSC-Thin';
    }
    strong {
      font-family: 'PingFangSC-Medium';
    }
	}
	.e-mail {
		position: absolute;
		left: 180px;
		top: 300px;
		z-index: 2;
    a {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 1px solid #000000;
    }
    i {
      text-align: center;
      color: #000;
      font-size: 12px;
      -webkit-transition: all .8s;
        transition: all .8s;
    }
	} 
  .e-mail-bg {
		position: absolute;
		left: -0.03vw;
		top: -0.01vw;
		margin: 0 auto;
		width: 2.65vw;
		height: 2.65vw;
		border-radius: 50%;
		background: #777;
		z-index: -1;
		-webkit-transition: all .4s;
    	transition: all .4s;
		-webkit-transform: scale(0);
	    transform: scale(0);
	}
}
</style>