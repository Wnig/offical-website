<template>
  <div class="home ignore-pc">
    <div class="content">
      <div class="header">
        <h2>企业官网模板</h2>
      </div>
      <ListItem ref="listItem"></ListItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import ListItem from '../../components/listItem.vue'
</script>

<style scoped lang="scss">
.home.ignore-pc {
  width: 100%;
  
  .content {
    width: 82%;
    margin: 0 auto;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
    padding: 20px;
    h2 {
      position: relative;
      font-size: 16px;
      font-family: 'PingFangSC-Semibold';
      &:after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 70px;
        height: 2px;
        background: #5BB8DE;
      }
    }
  }
}
</style>
