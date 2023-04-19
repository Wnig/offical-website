<template>
  <div class="item-intro-02">
    <div class="con-tit">
      <h1>Cross - Boundary<br/>
      Win - Win<br/>
      Move Forward.</h1>
    </div>
    <div class="cont_">
      <div class="conts">
        <h1 class="title">互联网商会</h1>
        <h3>跨界共赢，抱团前行</h3>
        <p>司马图集团建立了包括大数据、电商、会务、娱乐、旅游、特色小镇、古玩艺术、餐饮、教育、物联网、新物业、新零售、新传媒、游艇、新农业、大健康、医疗、生物科技、众创空间、俱乐部等产业的产业生态圈。打造了全行业化领先的产业生态系统，成为了新互联网经济体系下新兴的产业模式。</p>
        <a class="more">
          <span>MORE</span><i class="icon-13"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.item-intro-02 {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .cont {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
	.cont_ {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50%;
		height: 100%;
		background: rgba(255, 255, 255, 1);
    h3 {
      margin-top: 9.91vh;
      color: #000000;
      font-size: 1.3vw;
      font-family: 'PingFangSC-Semibold';
    }
    p {
      margin-top: 2.41vh;
      margin-bottom: 11.11vh;
      color: #000000;
      line-height: 2.08vw;
      font-size: 0.94vw;
      font-family: 'PingFangSC-Light';
    }
	}
	.conts {
		width: 24.17vw;
	}
	.con-tit {
		position: relative;
		width: 50vw;
		height: 100%;
		background: url('@/assets/images/21.jpg') center center no-repeat;
		background-size: 100% 100%;
    h1 {
      position: absolute;
      left: 6.82vw;
      bottom: 13.06vh;
      color: #FFFFFF;
      font-size: 2.86vw;
      font-family: 'PingFangSC-Semibold';
      &:after {
        content: "";
        position: absolute;
        top: -4.44vh;
        left: 0;
        width: 4.17vw;
        height: 0.16vw;
        background: #5BB8DE;
      }
    }
	}
}
</style>