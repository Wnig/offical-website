<template>
  <div class="list-con ignore-pc">
    <div class="list-con-item">
      <div class="list-bg">
        <img src="@/assets/images/list_bg.jpg" alt="">
        <p>新传媒-模板1</p>
      </div>
      <div class="list-div-con">
        <div class="list-div-con-info">
          <h2>新传媒-企业模板</h2>
          <p>公司官网 | 简介 | 发展历程 | 新传媒 | IT服务</p>
        </div>
      </div>
      <div class="list-div-bottom">
        <a href="">Read more</a>
        <i class="icon-next"></i>
      </div>
    </div>
    <div class="list-con-item">
      <div class="list-bg">
        <img src="@/assets/images/list_bg.jpg" alt="">
        <p>新传媒-模板2</p>
      </div>
      <div class="list-div-con">
        <div class="list-div-con-info">
          <h2>新传媒-企业模板</h2>
          <p>公司官网 | 简介 | 发展历程 | 新传媒 | IT服务</p>
        </div>
      </div>
      <div class="list-div-bottom">
        <a href="">Read more</a>
        <i class="icon-next"></i>
      </div>
    </div>
    <div class="list-con-item">
      <div class="list-bg">
        <img src="@/assets/images/list_bg.jpg" alt="">
        <p>新传媒-模板3</p>
      </div>
      <div class="list-div-con">
        <div class="list-div-con-info">
          <h2>新传媒-企业模板</h2>
          <p>公司官网 | 简介 | 发展历程 | 新传媒 | IT服务</p>
        </div>
      </div>
      <div class="list-div-bottom">
        <a href="">Read more</a>
        <i class="icon-next"></i>
      </div>
    </div>
    <div class="list-con-item">
      <div class="list-bg">
        <img src="@/assets/images/list_bg.jpg" alt="">
        <p>新传媒-模板4</p>
      </div>
      <div class="list-div-con">
        <div class="list-div-con-info">
          <h2>新传媒-企业模板</h2>
          <p>公司官网 | 简介 | 发展历程 | 新传媒 | IT服务</p>
        </div>
      </div>
      <div class="list-div-bottom">
        <a href="">Read more</a>
        <i class="icon-next"></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import "@/assets/scss/common.scss";
.list-con.ignore-pc {
  .list-con-item {
    display: inline-block;
    width: 180px;
    margin-right: 20px;
    margin-bottom: 20px;
    background: #FFFFFF;
    cursor: pointer;
    border: 1px solid #EDEDED;
    .list-bg {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 100px;
      img {
        display: block;
        width: 100%;
        transition: all .8s;
      }
      p {
        position: absolute;
        top: 50px;
        left: 0;
        right: 0;
        margin: 0 auto;
        color: #fff;
        font-size: 12px;
        text-align: center;
      }
      &:hover {
        img {
          transform: scale(1.4);
          transition: all .8s;
        }
      }
    }
    .list-div-con {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 85%;
      height: 120px;
      margin: 0 auto;
      border-bottom: 1px solid #EEEEEE;
      .list-div-con-info {
        width: 100%;
        h2 {
          width: 100%;
          margin-bottom: 10px;
          color: #000000;		
          font-family: 'PingFangSC-Regular';
          font-size: 12px;
          @include ell();
        }
        p {
          width: 100%;
          color: #7F7F7F;
          line-height: 20px;
          font-family: 'PingFangSC-Light';
          font-size: 10px;
          @include multi(2)
        }
      }
    }
    .list-div-bottom {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 85%;
      height: 30px;
      margin: 0 auto;
      a {
        flex: 1;
        font-size: 10px;
        color: #999;
        &:hover {
          color: #000;
        }
      }
      i {
        font-size: 10px;
      }
    }
  }
}

</style>
