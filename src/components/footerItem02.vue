<template>
    <div class="footer">
        <h3>WNIG（厦门）文化传媒有限公司</h3>
        <p class="addr"><span>Add. 福建省厦门市思明区观音山商务</span><span>Tel. 0592-XXXX068</span><span>Cel. 131-XXXX-2568 (李先生)</span></p>
    </div>
  </template>
  
  <script setup lang="ts">

  </script>
  
  <style scoped lang="scss">
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 17.59vh;
    text-align: center;
    background-color: #232526;
    .cont {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    h3 {
        margin-bottom: 4px;
        color: #A9A9A9;
        font-size: 14px;
    }
    p {
        color: #9E9898;
        line-height: 24px; 
        font-size: 12px;
    }
    .addr {
        span {
            display: inline-block;
            margin-right: 20px;
        } 
    } 
  }
  </style>