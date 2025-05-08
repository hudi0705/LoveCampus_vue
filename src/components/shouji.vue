<template>
  <Headers />
  <div class="swipe-container">
    <van-swipe class="my-swipe" indicator-color="#1989fa" vertical>
      <van-swipe-item v-for="(item, index) in slides" :key="index">
        <component :is="item.component" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Headers from '@/view/headers.vue';
import Zujian1 from '@/view/zujian1.vue';
import Zujian22 from '@/view/zujian22.vue';
import Zujian3 from '@/view/zujian3.vue';
import zujian5Vue from '@/view/zujian5.vue';
import Zujian6liuyan from '@/view/zujian6liuyan.vue';

const slides = ref([
  { component: Zujian1 },
  { component: Zujian22 },
  { component: Zujian3 },
  { component: zujian5Vue },
  { component: Zujian6liuyan }
]);
</script>

<style>
.swipe-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.my-swipe {
  height: 100%;
}

.my-swipe .van-swipe-item {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f8fa;
}
</style>