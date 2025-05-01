<script setup>
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import router from './router';
let _isMobile = () => {
  let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  return flag;
}

onMounted(() => {
  if (_isMobile()) {
    router.push('/shouji')
  } else {
    router.push('/home')
  }
})
</script>
  
<template>
  <RouterView />
</template>
