<template>
    <div class="footer">
        <h1>TEL：400-xxx-8089 / 0592-xxxxx<span>|</span>ADD：厦门市思明区观音山商务营运中心xx号xx层<span>|</span> E-mail：770225508@qq.com</h1>
        <p>Copyright © 2012-2018 WNIG.All Rights Reserved 闽ICP备xxxxxxx号-1</p>
    </div>
  </template>
  
  <script setup lang="ts">

  </script>
  
  <style scoped lang="scss">
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    height: 13.06vh;
    background: #292929;
	h1 {
		margin-bottom: 1.3vh;
		color: #7A7A7A;
		text-align: center;
		font-family: 'PingFangSC-Light';
		font-size: 0.94vw;
        span {
            display: inline-block;
            width: 3vw;
            text-align: center;
        }
	}
	p {
		color: #464646;
		text-align: center;
		font-size: 10px;
		font-family: 'PingFangSC-Light';
	}
  }
  </style>