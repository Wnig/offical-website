<template>
  <div class="item-intro-02">
    <div class="cont_">
      <div class="conts">
        <h1 class="title">互联网商会</h1>
        <h3>跨界共赢，抱团前行</h3>
        <p>集团建立了包括大数据、电商、会务、娱乐、旅游、特色小镇、古玩艺术、餐饮、教育、物联网、新物业、新零售、新传媒、游艇、新农业、大健康、医疗、生物科技、众创空间、俱乐部等产业的产业生态圈。打造了全行业化领先的产业生态系统，成为了新互联网经济体系下新兴的产业模式。</p>
        <a class="more">
          <span>MORE</span><i class="icon-13"></i>
        </a>
      </div>
    </div>
    <div class="con-tit">
      <h1>Cross - Boundary<br/>
      Win - Win<br/>
      Move Forward.</h1>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.item-intro-02 {
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
	.cont_ {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50%;
		height: 100%;
		background: rgba(255, 255, 255, 1);
    .title {
      position: relative;
      color: #000;
      text-align: left;
      font-size: 18px;
      font-family: 'PingFangSC-Semibold';
      font-weight: bold;
      &:after {
        content: "";
        position: absolute;
        bottom: -15px;
        left: 2px;
        width: 22px;
        height: 2px;
        background: #5BB8DE;
      }
    }
    .conts {
      width: 300px;
    }
    h3 {
      margin-top: 60px;
      color: #000000;
      font-size: 12px;
      font-family: 'PingFangSC-Semibold';
      font-weight: bold;
    }
    p {
      margin-top: 24px;
      margin-bottom: 50px;
      color: #000000;
      line-height: 22px;
      font-size: 10px;
      font-family: 'PingFangSC-Light';
    }
	}
	.con-tit {
		position: relative;
		width: 50%;
		height: 100%;
		background: url('@/assets/images/21.jpg') center center no-repeat;
		background-size: 100% 100%;
    h1 {
      position: absolute;
      left: 80px;
      bottom: 100px;
      color: #FFFFFF;
      font-size: 28px;
      font-family: 'PingFangSC-Semibold';
      font-weight: bold;
      &:after {
        content: "";
        position: absolute;
        top: -20px;
        left: 0;
        width: 50px;
        height: 2px;
        background: #5BB8DE;
      }
    }
	}

  .more {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 24px;
    background: url('@/assets/images/11.svg') center center no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
    i {
      color: #5BB8DE;
      font-size: 12px;
      -webkit-transition: all .8s;
        transition: all .8s;
    }
    span {
      margin-right: 2px;
      color: #FFF;
      font-size: 10px;
      font-family: 'PingFangSC-Regular';
    }
    &:hover {
      i {
        color: #fff;
        -webkit-transition: all .8s;
          transition: all .8s;
      }
    }
  }
}
</style>