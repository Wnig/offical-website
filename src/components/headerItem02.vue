<template>
  <div class="header">
    <div class="header-con">
      <div class="logo" >
        <img src="@/assets/images/logo.png" alt="">
      </div>
      <nav>
        <ul>
            <li class="backstage">
              <a>后台登录</a>
            </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.header {
  width: 100%;
  .header-con {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 92%;
    margin: 0 auto;
    .logo {
      width: 200px;
      cursor: pointer;
    }
    nav {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      ul {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        li {
          a {
            display: block;
            padding: 3vw 0;
            color: #fff;
            font-size: 1.3vw;
            font-family: 'PingFangSC-Regular';
            cursor: pointer;
          }
        }
        .backstage {
          padding-right: 3vw;
        }
      }
    }
  }
}

  
  
</style>