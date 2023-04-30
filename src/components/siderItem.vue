<template>
    <nav class="sider-nav" @click="backTop" v-if="isTop">
        <ul>
            <li>
                <p>400-xxx-8089</p> 
                <i class="oneline icon-6"></i>
            </li>
            <li id="top">
                <p>Top</p>
                <i class="icon-7"></i>
            </li>
        </ul>
    </nav> 
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

let isTop = ref(false)

// 返回顶部
const backTop = ()=> {
    document.documentElement.scrollTop = 0
}

//滚动事件
const handleScroll = ()=> {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    var offsetTop = document.querySelector('body').offsetTop // 获取所需元素到文档顶部的距离，然后判断滚动条位置让该元素是否固定定位

    if (scrollTop > offsetTop) {
        isTop.value = true
    } else {
        isTop.value = false
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll, true)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

</script>

<style scoped lang="scss">
/*侧边返回顶部*/
.sider-nav {
    position: fixed;
    right: 2.45vw;
    top: 50vh;
    z-index: 1000;
    ul {
        cursor: pointer;
        &:hover {
            li p {
                width: 9.7vw;
                padding-left: 0.6vw;
                -webkit-transition: all .3s;
                transition: all .3s;
            }
        }
    }
    li {
        height: 2.5vw;
        padding: 0 0.6vw;
        color: #fff;
        line-height: 2.5vw;
        font-size: 0.63vw;
        background: #161519;
        &:hover {
            background-color: #fff;
            color: #161519;
            -webkit-transition: all .2s;
            transition: all .2s;
        }
    }
    p {
        float: left;
        overflow: hidden;
        width: 0vw;
        height: 2.5vw;
        font-size: 0.63vw;
        font-family: 'PingFangSC-Light';
    }
    .nav-time {
        line-height: 1.5vw;
        span {
            display: block;
            margin-top: -0.4vw;
            font-size: 0.52vw;
        }
    }
    i {
        float: left;
        text-align: center;
        line-height: 2.5vw;
        font-size: 1.56vw;
    }
    .oneline {
        position: relative;
        &:after {
            position: absolute;
            top: 0;
            content: '';
            width: 1.04vw;
            height: 1.77vw;
            background: url('@/assets/images/8.svg') center center no-repeat;
            background-size: 100% 100%;
        }
    }
}
</style>