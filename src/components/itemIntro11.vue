<template>
  <div class="item-intro-11">
    <div class="con">
      <div class="tit">
        <h2>企业电销为何选择AI机器人？</h2>
        <p>AI，帮企业做好8件大事</p>
      </div>
      <div class="list-con">
        <div class="list_div">
          <h4>云端独立部署</h4>
          <p>独立部署在您自己的服务器，为您重要数据保驾护航。</p>
        </div>
        <div class="list_div">
          <h4>开拓全国市</h4>
          <p>自由招收省市代理，全国招商快速营收致富。</p>
        </div>
        <div class="list_div">
          <h4>打造自己品牌</h4>
          <p>专属域名，专属官网，专属LOGO，专属资源。</p>
        </div>
        <div class="list_div">
          <h4>快速订制上线</h4>
          <p>项目周期短，签订合同后极速上线，稳定运营。</p>
        </div>
        <div class="list_div">
          <h4>投入成本可控</h4>
          <p>一次性付费，软件永久可用，节约人员成本。</p>
        </div>
        <div class="list_div">
          <h4>提高销售效率</h4>
          <p>把员工从简单的劳动中解放出来，向“销售精英”方向发展。</p>
        </div>
        <div class="list_div">
          <h4>稳定技术支持</h4>
          <p>采用主流语言开发，支持系统高并发，软硬件无缝衔接。</p>
        </div>
        <div class="list_div">
          <h4>全天候支持</h4>
          <p>专属售后团队7*24小时在线维护。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import '@/assets/scss/style03.scss';
.item-intro-11 {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
  .con {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
  }
  .tit {
    margin-bottom: 56px;
    h2 {
      margin-bottom: 12px;
      padding-left: 20px;
      color: #41A4DF;
      text-align: center;
      font-family: 'PingFangSC-Medium';
      font-size: 28px;
    }
    p {
      color: #222222;
      text-align: center;
      font-family: 'PingFangSC-Light';
      font-size: 16px;
    }
  }
  .list-con {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 90%;
  } 
  .list_div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 206px;
    height: 112px;
    background: #F2F2F2;
    margin: 0.26vw;
    cursor: pointer;
    -webkit-transition: all 0.5s;
        transition: all 0.5s;
    &:hover {
      background: #41A4DF;
      -webkit-transition: all 0.5s;
          transition: all 0.5s;
      h4 {
        color: #fff;
        -webkit-transition: all 0.5s;
            transition: all 0.5s;
      }
      p {
        color: #fff;
        -webkit-transition: all 0.5s;
            transition: all 0.5s;
      }
    }
    h4 {
      width: 80%;
      margin-bottom: 8px;
      color: #000000;
      text-align: center;
      font-family: 'PingFangSC-Medium';
      font-size: 18px;
    }
    p {
      width: 85%;
      color: #787878;
      text-align: center;
      font-family: 'PingFangSC-Light';
      font-size: 12px;
    }
  }
}
</style>