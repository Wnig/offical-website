<template>
  <div class="item-intro-09">
    <div class="con">
      <div class="tit">
        传统呼叫业务存在的问题？
      </div>
      <div class="list_con">
        <div class="list_div list_div_01">
          <div class="list_div_">
            <div class="icon icon-PCEWTRERT">
              <i class="path1"></i>
              <i class="path2"></i>
              <i class="path3"></i>
            </div>
            <div class="content">
              <h4>情绪波动大，工作动态差</h4>
              <p>话务员无法长时间保持工作热情，遇到恶劣对话情景时易产生情绪波动，长期压抑情绪，丧失工作热情，陷入效率低下成本升高的恶性循环。</p>
            </div>
          </div>
        </div>
        <div class="list_div list_div_02">
          <div class="list_div_">
            <div class="icon icon-PCRTERT">
              <i class="path1"></i>
              <i class="path2"></i>
            </div>
            <div class="content">
              <h4>人工成本高，工作效率低</h4>
              <p>话务员工作时，筛选意向客户的时间利用率较低，企业投入到招聘、培训中的成本颇高，且工作效率会随着众多客观因素而下降，影响到企业销售业绩。</p>
            </div>
          </div>
        </div>
        <div class="list_div list_div_03">
          <div class="list_div_">
            <div class="icon icon-PCERWE">
              <i class="path1"></i>
              <i class="path2"></i>
            </div>
            <div class="content">
              <h4>统计难度高，撞单难跟进</h4>
              <p>人工记录充满主观性，分类不明确，跟进不及时都会导致客户流失，而小组成员撞单、资源重复，造成客户无法挽回，导致工作质量下降，事倍功半。</p>
            </div>
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
.item-intro-09 {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #000;
  .tit {
    text-align: center;
    line-height: 15.65vh;
    color: #FFFFFF;
    font-family: 'PingFangSC-Regular';
    font-size: 20px;
  }
  .list_con {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .list_div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.33%;
    height: 84.44vh;
    background: #fff;
    cursor: pointer;
    -webkit-transition: all 0.8s;
    transition: all 0.8s;
    &:hover {
      .icon-PCEWTRERT {
        .path3:before {
          content: "\e903";
          color: #41A4DF;
        }
      } 
      .icon-PCERWE {
        .path2:before {
          content: "\e904";
          color: #41A4DF;
        }
      } 
      .icon-PCRTERT {
        .path2:before {
          content: "\e906";
          color: #41A4DF;
        }
      } 
      .icon {
        color: #fff;
        -webkit-transition: all 1s;
            transition: all 1s;
      }
      h4, p {
        color: #fff;
        -webkit-transition: all 1s;
            transition: all 1s;
      }
      .icon {
        transform: scale(1.2);
        -webkit-transform: scale(1.2); 
        &:after {
          position: absolute;
          left: 0;
          right: 0;
          top: 6px;
          bottom: 0;
          margin: 0 auto;
          content: '';
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: -1px 6px 24px 0 rgba(64,163,222,0.71); 
        }
      }
    }
    &.list_div_01 {
      &:hover {
        background: url('@/assets/images/template03/ASHOF@2x.jpg') center center no-repeat;
        background-size: 100% 100%;
      }
    } 
    &.list_div_02 {
      &:hover {
        background: url('@/assets/images/template03/pcbeijin@2x-min.jpg') center center no-repeat;
        background-size: 100% 100%;
      }
    }
    &.list_div_03 {
      &:hover {
        background: url('@/assets/images/template03/bgdius@2x.jpg') center center no-repeat;
        background-size: 100% 100%;
      }
    }
    .icon {
      position: relative;
      width: 64px;
      height: 64px;
      margin: 0 auto 20px;
      border-radius: 50%;
      font-size: 64px;
      i {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        font-style: normal;
        font-size: 64px;
        z-index: 2;
      }
    }

    .icon-PCEWTRERT {
      .path3:before {
        content: "\e903";
        color: #fff;
      }
    } 
    .icon-PCERWE {
      .path2:before {
        content: "\e904";
        color: #fff;
      }
    } 
    .icon-PCRTERT {
      .path2:before {
        content: "\e906";
        color: #fff;
      }
    } 
    h4 {
      margin-bottom: 22px;
      color: #41A4DF;
      text-align: center;
      font-family: 'PingFangSC-Regular';
      font-size: 18px;
    }
    p {
      color: #666666;
      text-align: left;
      line-height: 22px;
      font-family: 'PingFangSC-Regular';
      font-size: 12px;
    }
  }

  .list_div_ {
    width: 200px;
  }
}
</style>