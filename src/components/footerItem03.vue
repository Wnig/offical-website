<template>
    <div class="footer">
        <div class="con">
            <h2>WNIG（厦门）网络科技有限公司</h2>	
            <h3>
                <p class="add">TEL：400-xxxx-8089 / 0592-59xxx68</p>
                <p class="add">ADD：厦门市思明区观音山商务营运中心18号x层<span>|</span>E-mail：770225508@qq.com</p>
            </h3>
        </div>
    </div>
  </template>
  
  <script setup lang="ts">

  </script>
  
  <style scoped lang="scss">
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 27.96vh;
    background: #323232;
    .con {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        h3 {
            margin-bottom: 4px;
            color: #A9A9A9;
            font-size: 14px;
        }
        p {
            color: #9E9898;
            line-height: 24px; 
            font-size: 12px;
            span {
                margin: 0 10px;
            }
        }
        h2 {
            margin-bottom: 1.94vh;
            color: #FFFFFF;
            text-align: left;
            font-family: 'PingFangSC-Light';
            font-size: 1.56vw;
        }
    }
  }
  </style>