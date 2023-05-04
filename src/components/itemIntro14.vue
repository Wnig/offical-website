<template>
  <div class="item-intro-14">
    <div class="tit">为合作伙伴提供服务支持</div>
    <div class="list_con">
      <div class="list_div">
        <div class="list_div_">
          <div class="list_bg list_bg_01">
            <div class="list_bg_"></div>
          </div>
          <div class="bottom"></div>
        </div>
        <div class="list_div_con">
          <h4>产品使用培训</h4>
          <p>指派专人进行产品的现场使用培训，保障每一位客户都能正常使用</p>
        </div>
      </div>
      <div class="list_div">
        <div class="list_div_">
          <div class="list_bg list_bg_02">
            <div class="list_bg_"></div>
          </div>
          <div class="bottom"></div>
        </div>
        <div class="list_div_con">
          <h4>话术库录入以及优化</h4>
          <p>话术数据库建立始，安排专人协助制作，并给出针对性建议</p>
        </div>
      </div>
      <div class="list_div">
        <div class="list_div_">
          <div class="list_bg list_bg_03">
            <div class="list_bg_"></div>
          </div>
          <div class="bottom"></div>
        </div>
        <div class="list_div_con">
          <h4>7*24小时保姆式服务</h4>
          <p>指派专人进行产品的现场使用培训，保障每一位用户都能正常使用</p>
        </div>
      </div>
      <div class="list_div">
        <div class="list_div_">
          <div class="list_bg list_bg_04">
            <div class="list_bg_"></div>
          </div>
          <div class="bottom"></div>
        </div>
        <div class="list_div_con">
          <h4>后期运维复盘</h4>
          <p>维护人员上门复盘部署系统运维情况，并给出优化建议</p>
        </div>
      </div>
      <div class="list_div">
        <div class="list_div_">
          <div class="list_bg list_bg_05">
            <div class="list_bg_"></div>
          </div>
          <div class="bottom"></div>
        </div>
        <div class="list_div_con">
          <h4>季度健康检查</h4>
          <p>定期对部署后的系统全面检查，保障系统稳定运行</p>
        </div>
      </div>
      <div class="list_div">
        <div class="list_div_">
          <div class="list_bg list_bg_06">
            <div class="list_bg_"></div>
          </div>
          <div class="bottom"></div>
        </div>
        <div class="list_div_con">
          <h4>年度系统升级</h4>
          <p>根据客户需求，对部署系统进行定期升级服务</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import '@/assets/scss/style03.scss';
.item-intro-14 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: url('@/assets/images/template03/pcquwry@2x-min.jpg') center center no-repeat;
  background-size: cover;

  .con {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .tit {
    margin-bottom: 34px;
    color: #FFFFFF;
    text-align: center;
    font-family: 'PingFangSC-Medium';
    font-size: 26px;
  }
  .list_con {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
  }
  .list_div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2px;
    background: #FFFFFF;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
    cursor: pointer;
    -webkit-transition: all 0.5s;
        transition: all 0.5s;
    &:hover {
      .list_div_con {
        h4 {
          color: #fff;
          -webkit-transition: all 0.5s;
              transition: all 0.5s;
          &:after {
            position: absolute;
            content: '';
            top: 25px;
            left: 0;
            right: 0;
            margin: 0 auto;
            width: 23px;
            height: 2px;
            border: none;
            background: #fff;
          }
        }
        p {
          display: block;
          -webkit-transition: all 0.5s;
              transition: all 0.5s;
        }
      }
      .list_bg_ {
        opacity: 0.83;
        background: #41A4DF;
        -webkit-transition: all 0.5s;
            transition: all 0.5s;
      }
    }
    .list_bg {
      width: 144px;
      height: 158px;
      &.list_bg_01 {
        background: url('@/assets/images/template03/8@2x-min.jpg') center center no-repeat;
        background-size: 100% 100%;
      }
      &.list_bg_02 {
        background: url('@/assets/images/template03/9@2x-min.jpg') center center no-repeat;
        background-size: 100% 100%;
      }
      &.list_bg_03 {
        background: url('@/assets/images/template03/10@2x-min.jpg') center center no-repeat;
        background-size: 100% 100%;
      }
      &.list_bg_04 {
        background: url('@/assets/images/template03/11@2x-min.jpg') center center no-repeat;
        background-size: 100% 100%;
      }
      &.list_bg_05 {
        background: url('@/assets/images/template03/12@2x-min.jpg') center center no-repeat;
        background-size: 100% 100%;
      }
      &.list_bg_06 {
        background: url('@/assets/images/template03/13@2x-min.jpg') center center no-repeat;
        background-size: 100% 100%;
      }
      .list_bg_ {
        width: 100%;
        height: 100%;
      }
    }
    .bottom {
      height: 70px;
    }
    .list_div_con {
      position: absolute;
      left: 0;
      bottom: 18px;
      width: 100%;
      h4 {
        position: relative;
        width: 100%;
        color: #222222; 
        text-align: center; 
        font-family: 'PingFangSC-Regular';
        font-size: 14px;
        -webkit-transition: all 0.5s;
            transition: all 0.5s;
        &:after {
          position: absolute;
          content: '';
          top: -18px;
          left: 64px;
          border-color: transparent transparent #41A4DF transparent ;
          border-width:  0 10px 10px 10px;
          border-style: dashed solid dashed dashed;
        }
      }
      p {
        display: none;
        width: 85%;
        height: 44px;
        margin: 34px auto 0;
        color: #222222;
        line-height: 20px;
        font-family: 'PingFangSC-Light';
        font-size: 12px;
        -webkit-transition: all 0.5s;
            transition: all 0.5s;
      }
    }
  }
}
</style>