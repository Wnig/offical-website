<template>
  <div class="header">
    <div class="header-con">
      <img class="logo" src="@/assets/images/logo.png" alt="">
      <div class="nav-btn-con">
					<div @click="data.isShow" class="nav-btn"></div>	
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

let data = reactive({
  isShow: false,
})
</script>

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
        background: url('@/assets/images/2.svg') center center no-repeat;
        background-size: 100% 100%;
      }
    }
  }
}
</style>