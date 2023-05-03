<template>
  <div class="header">
    <div class="header-con">
      <div class="logo" >
        <img src="@/assets/images/logo.png" alt="">
      </div>
      <nav>
	  		<ul>
          <li v-for="(navs, index) in navData"><a :href="navs.links">{{navs.tit}}</a></li>
          <li class="backstage">
            <a>后台登入</a>
          </li>
	  		</ul>
	  	</nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
let navData = reactive([
  {tit: '首页', links:'/'},
  {tit: '产品', links:'#7'},
  {tit: '招商加盟', links:'#11'},
  {tit: '关于我们', links:'#13'},
])

</script>

<style scoped lang="scss">
.header {
  width: 100%;
  .header-con {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 92%;
    height: 80px;
    margin: 0 auto;
    .logo {
      width: 200px;
      cursor: pointer;
    }
    nav {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      ul {
        display: flex;
        justify-content: center;
        li {
          &.backstage {
            margin-left: 7vw;
            margin-right: 1vw;
            background: #FFFFFF;
            border-radius: 8px;
            a {
              color: #222;
              font-family: 'PingFangSC-Regular';
            }
          }
          a {
            display: block;
            width: 11.41vw;
            height: 2.76vw;
            line-height: 2.76vw;
            color: #fff;
            font-size: 1.3vw;
            cursor: pointer;
          }
        }
      }
    }
  }
}  
</style>