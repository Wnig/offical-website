<template>
  <div class="item-intro-13">
    <div class="tit">
      <h2>AIWNIG的强大功能</h2>
      <p>为您打造专属AI电销机器人系统</p>
    </div>
    <div class="list_con">
      <div class="list_div">
        <div class="img_">
          <img src="@/assets/images/template03/pc14.svg" alt="">
        </div>
        <div class="list_div_con">
          <h4>活动管理</h4>
          <p>
            支持多情景外呼设置
            <br/>
            <br/>
            <br/>
          </p>
        </div>
      </div>
      <div class="list_div">
        <div class="img_">
          <img src="@/assets/images/template03/pc13.svg" alt="">
        </div>
        <div class="list_div_con">
          <h4>话术管理</h4>
          <p>话术文字、录音对应管理。 上传、下载、调听等</p>
        </div>
      </div>
      <div class="list_div">
        <div class="img_">
          <img src="@/assets/images/template03/pc11.svg" alt="">
        </div>
        <div class="list_div_con">
          <h4>目标号码管理</h4>
          <p>导入、导出号码
            <br/>
            <br/>
            <br/>
          </p>
        </div>
      </div>
      <div class="list_div">
        <div class="img_">
          <img src="@/assets/images/template03/pc12.svg" alt="">
        </div>
        <div class="list_div_con">
          <h4>AI呼叫管理</h4>
          <p>呼叫量、呼叫时间段设定，自动外呼</p>
        </div>
      </div>
      <div class="list_div">
        <div class="img_">
          <img src="@/assets/images/template03/pc18.svg" alt="">
        </div>
        <div class="list_div_con">
          <h4>语音打断</h4>
          <p>实时监测对方说话，打断音量可设定</p>
        </div>
      </div>
      <div class="list_div">
        <div class="img_">
          <img src="@/assets/images/template03/pc10.svg" alt="">
        </div>
        <div class="list_div_con">
          <h4>语音识别</h4>
          <p>全球领先语音识别技术，识别率高</p>
        </div>
      </div>
      <div class="list_div">
        <div class="img_">
          <img src="@/assets/images/template03/pc21.svg" alt="">
        </div>
        <div class="list_div_con">
          <h4>真人语音回复</h4>
          <p>真人录音回复，没有机械音，客户感知好<br/><br/></p>
        </div>
      </div>
      <div class="list_div">
        <div class="img_">
          <img src="@/assets/images/template03/pc17.svg" alt="">
        </div>
        <div class="list_div_con">
          <h4>容错机制</h4>
          <p>无法识别或识别到其他无用信息，进入容错选项回复</p>
        </div>
      </div>
      <div class="list_div">
        <div class="img_">
          <img src="@/assets/images/template03/pc15.svg" alt="">
        </div>
        <div class="list_div_con">
          <h4>自动记录</h4>
          <p>拨号、接续、通话过程、识别结果全程自动记录</p>
        </div>
      </div>
      <div class="list_div">
        <div class="img_">
          <img src="@/assets/images/template03/pc19.svg" alt="">
        </div>
        <div class="list_div_con">
          <h4>智能报表</h4>
          <p>识别结果、客户意向智能分析统计报表<br/><br/></p>
        </div>
      </div>
      <div class="list_div">
        <div class="img_">
          <img src="@/assets/images/template03/pc16.svg" alt="">
        </div>
        <div class="list_div_con">
          <h4>录音辅助</h4>
          <p>通话过程提供录音辅助功能
            <br/>
            <br/>
          </p>
        </div>
      </div>
      <div class="list_div">
        <div class="img_">
          <img src="@/assets/images/template03/pc20.svg" alt="">
        </div>
        <div class="list_div_con">
          <h4>转接人工</h4>
          <p>可根据设定转接到相应坐席人员<br/><br/></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import '@/assets/scss/style03.scss';
.item-intro-13 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #fff;
  .tit {
    margin-bottom: 48px;
    h2 {
      margin-bottom: 8px;
      text-align: center;
      color: #41A4DF;  
      font-family: 'PingFangSC-Medium';
      font-size: 26px;
    }
    p {
      text-align: center;
      color: #222222;  
      font-family: 'PingFangSC-Light';
      font-size: 14px;
    }
  } 
  .list_con {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 90%;
    .list_div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 222px;
      margin-bottom: 20px;
      cursor: pointer;
      &:hover {
        .img_ {
          background: rgba(65,164,223,0.14);
          -webkit-transition: all 1.5s;
              transition: all 1.5s;
        }
        h4 {
          color: #6DB9E6;
          font-family: 'PingFangSC-Medium';
          -webkit-transition: all 0.5s;
              transition: all 0.5s;
        }
        p {
          color: #6DB9E6;
          -webkit-transition: all 0.5s;
              transition: all 0.5s;
        }
      }
      .img_ {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 72px;
        height: 72px;
        margin-right: 14px;
        border-radius: 100%;
        -webkit-transition: all 1.5s;
            transition: all 1.5s;
        img {
          width: 58px;
          height: 58px;
        }
      }
      .list_div_con {
        width: 55%;
      }
      h4 {
        color: #000000; 
        font-family: 'PingFangSC-Regular';
        font-size: 16px;
        -webkit-transition: all 0.5s;
            transition: all 0.5s;
      }
      p {
        color: #5F5F5F;
        font-family: 'PingFangSC-Light';
        font-size: 10px;
        -webkit-transition: all 0.5s;
            transition: all 0.5s;
      }
    }
  } 
}
</style>