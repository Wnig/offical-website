<template>
  <div class="header">
    <div class="header-con">
      <img class="logo" src="@/assets/images/logo.png" alt="">
      <div class="nav-btn-con">
				<div @click="isShow" class="nav-btn"></div>	
      </div>
      <div class="nav" v-if="data.selShow">
        <div class="nav_bg" v-show="data.selShow"></div>
        <div class="nav-btn_">
          <div class="nav-btn-con_">
            <div @click="isShow" class="nav-btn-sel"></div>
          </div>
        </div>
          <nav>
            <ul>
              <li v-for="(navs, index) in data.navData" v-bind:class="{'btn_sel': index == data.num}" @click="selMenus(index)">
                <router-link :to="navs.links">{{navs.tit}}</router-link>
              </li>
              <li>
                <a>互联网商会</a>
              </li>
              <li class="backstage">
                <a>后台登录</a>
              </li>
            </ul>
          </nav>
				</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch, onUnmounted } from 'vue'

let data = reactive({
  selShow: false,
  num: 0,
  navData: [
    {tit: '首页', links:'/template01'},
  ],
})

const selMenus = (index)=> {
  data.selShow = false
}

const isShow = ()=> {
  //点击：左侧菜单栏 收起-展开
  data.selShow = !data.selShow
}

const jump = ()=> {
  data.selShow = false
}

/** 禁用滚动*/
const forbidScroll = ()=> {
  document.querySelector("html").classList.add("lock")
  window.addEventListener("mousewheel", forbidScroll)
  window.addEventListener("touchmove", forbidScroll, { passive: false })
}

/** 启用滚动*/
const enabledScroll = ()=> {
    document.querySelector("html").classList.remove("lock")
    window.removeEventListener("mousewheel", forbidScroll)
    window.removeEventListener("touchmove", forbidScroll, { passive: false })
}

watch(
  () => data.selShow, (val, oldVal) => {
    if(val) {
      forbidScroll()
    } else {
      enabledScroll()
    }
  }, { immediate: true }
)

onUnmounted(()=> {
  enabledScroll()
})
</script>

<style>
.lock {
    overflow: hidden;
    touch-action: none;
}
 
.lock body {
    overflow: hidden;
    touch-action: none;
    margin-right: 17px;
}
 
.lock.mobile body {
    margin-right: 0;
}

</style>

<style scoped lang="scss">
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  .header-con {
    display: flex;
		justify-content: center;
		height: 80px;
    padding: 20px 60px 20px 10px;
    .logo {
      width: 200px;
      cursor: pointer;
    }
    .nav-btn-con {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
		  cursor: pointer;
      .nav-btn {
        width: 60px;
        height: 30px;
        background: url('@/assets/images/template01/2.svg') center center no-repeat;
        background-size: 100% 100%;
      }
    }
    .nav {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100vh;
      z-index: 9999;
    }
    
    .nav-btn_ {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80px;
      margin-bottom: 5vh;
      cursor: pointer;
      .nav-btn-con_ {
        width: 88%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .nav-btn-sel {
          width: 60px;
          height: 30px;
          background: url('@/assets/images/template01/3.svg') center center no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    nav {
      ul {
        padding-left: 160px;
      }
      li {
        display: block;
        margin-bottom: 5vh;
        a {
          display: block;
          line-height: 26px;
          cursor: pointer;
          color: #000;
          font-size: 24px;
          font-family: 'PingFangSC-Light';
          -webkit-transition: font-size 0.2s;
              transition: font-size 0.2s;
        }
        .btn_sel a {
          color: #5BB8DE;
          font-size: 28px;
          font-family: 'PingFangSC-Semibold';
        }
        .backstage {
          padding-top: 632px;
        }
      }
    }
  }
}

@media screen and (min-width: 751px) {
		.nav_bg {
			position: absolute;
			right: 0;
			top: 0;
			width: 100vw;
			height: 100vh;
			background: rgba(228, 228, 226, 0.95);
			z-index: -1;
			-webkit-animation: scaleIn 2s ease-in-out;
	    	animation: scaleIn 2s ease-in-out;
		}
		nav {
			height: 100%;
			-webkit-animation: opac 2s ease-in-out;
	    	animation: opac 2s ease-in-out;
		}


		nav li a:hover {
			color: #5BB8DE;
			font-size: 2.86vw;
			font-family: 'PingFangSC-Semibold';
			-webkit-transition: font-size 0.2s;
      		transition: font-size 0.2s;
		}


		@-webkit-keyframes scaleIn {
      0% {
        width: 0vw;
        height: 0vw;
        border-radius: 50%;
          -webkit-transform: scale(1);
          -moz-transform: scale(1);
          -ms-transform: scale(1);
          -o-transform: scale(1);
        transform: scale(1);
      }
      10% {
        width: 10vw;
        height: 10vw;
        border-radius: 50%;
        -webkit-transform: scale(10);
          -moz-transform: scale(10);
          -ms-transform: scale(10);
          -o-transform: scale(10);
        transform: scale(10);
      }
      20% {
        width: 20vw;
        height: 20vw;
        border-radius: 50%;
        -webkit-transform: scale(20);
          -moz-transform: scale(20);
          -ms-transform: scale(20);
          -o-transform: scale(20);
        transform: scale(20);
      }
      30% {
        width: 30vw;
        height: 30vw;
        border-radius: 50%;
        -webkit-transform: scale(30);
          -moz-transform: scale(30);
          -ms-transform: scale(30);
          -o-transform: scale(30);
        transform: scale(30);
      }
      50% {
        border-radius: 50%;
          -webkit-transform: scale(50);
          -moz-transform: scale(50);
          -ms-transform: scale(50);
          -o-transform: scale(50);
        transform: scale(50);
      }
      60% {
        border-radius: 50%;
          -webkit-transform: scale(60);
          -moz-transform: scale(60);
          -ms-transform: scale(60);
          -o-transform: scale(60);
        transform: scale(60);
      }
      100% {
        width: 100vw;
        height: 100vh;
        border-radius: 0;
          -webkit-transform: scale(100);
          -moz-transform: scale(100);
          -ms-transform: scale(100);
          -o-transform: scale(100);
        transform: scale(100);
      }
  }
  @keyframes scaleIn {
      0% {
        width: 0vw;
        height: 0vw;
        border-radius: 50%;
          -webkit-transform: scale(1);
          -moz-transform: scale(1);
          -ms-transform: scale(1);
          -o-transform: scale(1);
        transform: scale(1);
      }
      10% {
        width: 10vw;
        height: 10vw;
        border-radius: 50%;
        -webkit-transform: scale(10);
          -moz-transform: scale(10);
          -ms-transform: scale(10);
          -o-transform: scale(10);
        transform: scale(10);
      }
      20% {
        width: 20vw;
        height: 20vw;
        border-radius: 50%;
        -webkit-transform: scale(20);
          -moz-transform: scale(20);
          -ms-transform: scale(20);
          -o-transform: scale(20);
        transform: scale(20);
      }
      30% {
        width: 30vw;
        height: 30vw;
        border-radius: 50%;
        -webkit-transform: scale(30);
          -moz-transform: scale(30);
          -ms-transform: scale(30);
          -o-transform: scale(30);
        transform: scale(30);
      }
      50% {
        border-radius: 50%;
          -webkit-transform: scale(50);
          -moz-transform: scale(50);
          -ms-transform: scale(50);
          -o-transform: scale(50);
        transform: scale(50);
      }
      60% {
        border-radius: 50%;
          -webkit-transform: scale(60);
          -moz-transform: scale(60);
          -ms-transform: scale(60);
          -o-transform: scale(60);
        transform: scale(60);
      }
      100% {
        width: 100vw;
        height: 100vh;
        border-radius: 0;
          -webkit-transform: scale(100);
          -moz-transform: scale(100);
          -ms-transform: scale(100);
          -o-transform: scale(100);
        transform: scale(100);
      }
  }

  
  @-webkit-keyframes opac {
      0% {
      opacity: 0;
      }
      100% {
      opacity: 1;
      }
  }
  @keyframes opac {
      0% {
      opacity: 0;
      }
      100% {
      opacity: 1;
      }
  }
}
</style>