<template>
  <div class="no-scroll">
    <Headers></Headers>
    <el-carousel ref="carousel" @wheel="handleWheel" height="100vh" direction="vertical" :autoplay="false"
      :interval="5000" indicator-position="none" pause-on-hover='false' @mousewheel="rollScroll($event)">
      <el-carousel-item>
        <Zujian1></Zujian1>
      </el-carousel-item>
      <el-carousel-item>
        <Zujian22></Zujian22>
      </el-carousel-item>
      <el-carousel-item>
        <Zujian3></Zujian3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Headers from './view/headers.vue';
import Zujian1 from './view/zujian1.vue';
import Zujian22 from './view/zujian22.vue';
import Zujian3 from './view/zujian3.vue';

const carousel = ref(null);
const lastScrollTime = ref(0);
const isScrolling = ref(false);
const scrollDeltaSum = ref(0); // 用于累计触摸板的微小滚动量

// 判断是否是触摸板 (触摸板通常有更小的delta值)
const isTrackpad = (event) => {
  return Math.abs(event.deltaY) < 50;
};

const rollScroll = (event) => {
  event.preventDefault();

  const now = Date.now();
  const isTrackpadEvent = isTrackpad(event);

  // 对于触摸板，累计滚动量
  if (isTrackpadEvent) {
    scrollDeltaSum.value += Math.abs(event.deltaY);

    // 累计量不足阈值则不触发切换
    if (scrollDeltaSum.value < 100) {
      return;
    }
    scrollDeltaSum.value = 0; // 重置累计量
  }

  // 节流: 800ms内不重复触发 (触摸板需要更长的间隔)
  if (now - lastScrollTime.value < (isTrackpadEvent ? 800 : 500)) {
    return;
  }

  // 防抖: 如果正在处理滚动，忽略新事件
  if (isScrolling.value) {
    return;
  }

  isScrolling.value = true;
  lastScrollTime.value = now;

  const direction = (event.wheelDelta || -event.detail) > 0 ? 'up' : 'down';

  // 执行切换
  direction === 'up' ? carousel.value.prev() : carousel.value.next();

  // 根据设备类型设置不同的解锁时间
  setTimeout(() => {
    isScrolling.value = false;
  }, isTrackpadEvent ? 600 : 400);
};
</script>
<!-- indicator-position -->
<style>
/* 移动端优化 */
@media (max-width: 768px) {
  .el-carousel__container {
    touch-action: pan-y;
    /* 启用垂直滑动 */
    overflow: hidden !important;
  }

  .el-carousel__item {
    will-change: transform;
    /* 优化滑动性能 */
  }
}

.el-carousel__container {
  overscroll-behavior: contain;
  /* 阻止滚动传播 */
  touch-action: pan-y;
  /* 优化触摸板手势 */
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  /* 平滑动画 */
}

.no-scroll {
  width: 100%;
  -ms-overflow-style: none;
  /* overflow: hidden;
  position: fixed; */
  /* -ms-overflow-style: none; */
}

/* Global styles */
:root {
  --primary-color: #7acc35;
  --secondary-color: #00b5ad;
  --text-color: #333;
  --light-bg: #f8f9fa;
  --card-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  --transition: all 0.3s ease;
}

/* Navbar styles */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: var(--transition);
}

.navbar:hover {
  background-color: rgba(255, 255, 255, 0.98);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-text {
  font-weight: 700;
  font-size: 1.3rem;
  color: var(--text-color);
  letter-spacing: -0.5px;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  position: relative;
  transition: var(--transition);
  padding: 0.5rem 0;
}

.nav-link:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: var(--transition);
}

.nav-link:hover:after,
.nav-link.active:after {
  width: 100%;
}

.nav-link.active {
  font-weight: 600;
  color: var(--primary-color);
}

.dropdown-icon {
  font-size: 0.6rem;
  margin-left: 2px;
}

.language-selector {
  display: flex;
  gap: 0.8rem;
}

.lang {
  color: var(--text-color);
  text-decoration: none;
  font-size: 0.9rem;
  transition: var(--transition);
}

.lang.active {
  font-weight: 600;
  color: var(--primary-color);
}

/* Mobile menu */
.mobile-menu-button {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 101;
}

.mobile-menu-button span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--text-color);
  transition: var(--transition);
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  z-index: 99;
  padding: 5rem 2rem 2rem;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
}

.mobile-menu.is-active {
  transform: translateX(0);
}

.mobile-nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.2rem;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  transition: var(--transition);
}

.mobile-nav-link.active {
  color: var(--primary-color);
  font-weight: 600;
}

.mobile-language {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}

/* Hero section */
.hero-section {
  min-height: 100vh;
  background: url('../assets/img/beijing2.jpg') no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.hero-section:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
}

.hero-content {
  position: relative;
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 2rem;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  animation: fadeInDown 1s ease-out;
}

.reservation-count {

  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1.5s ease-out;
}

.count-number {
  color: var(--primary-color);
  font-weight: 700;
}

.reservation-button {
  width: 300px;
  height: 70px;
  font-size: 1.3rem;
  font-weight: 700;
  /* background-color: var(--primary-color) !important; */
  border: none !important;
  border-radius: 35px !important;
  box-shadow: 0 10px 20px rgba(122, 204, 53, 0.3) !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease !important;
  animation: fadeInUp 1s ease-out;
}

.reservation-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 25px rgba(122, 204, 53, 0.4) !important;
}

.button-text {
  display: inline-block;
  transform: translateY(2px);
}

.scroll-down {

  position: absolute;
  bottom: -150px;
  left: 44%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  font-size: 0.9rem;
  opacity: 0.8;
  animation: bounce 2s infinite;
}

.arrow-down {
  font-size: 1.5rem;
  margin-top: 0.5rem;
}

/* Soul app section */
.soul-app {
  font-family: 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
  min-height: 100vh;
  background-image: url('../assets/img/bg-second.2928c1fb.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}

/* Main content */
.main-content {
  display: flex;
  min-height: 100vh;
  position: relative;
}

.content-container {
  display: flex;
  width: 100%;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
}

/* App visual */
.app-visual {
  flex: 1;
  position: relative;
  height: 600px;
  perspective: 1000px;
}

.app-elements {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.app-element {
  position: absolute;
  border-radius: 16px;
  box-shadow: var(--card-shadow);
  background-color: white;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
}

.app-element:hover {
  transform: translateY(-10px) rotate(0deg) !important;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  z-index: 10;
}

.bubble {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 50%;
}

.hi {
  top: 10%;
  left: 10%;
  background-color: #f0e6ff;
  animation: float 3s ease-in-out infinite;
}

.ai {
  bottom: 15%;
  right: 20%;
  background-color: #e6f0ff;
  animation: float 4s ease-in-out infinite;
}

.main-card {
  width: 280px;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  overflow: hidden;
}

.card-header {
  padding: 15px;
  border-bottom: 1px solid #eee;
  background-color: #f9f9f9;
}

.mini-logo {
  font-weight: bold;
  font-size: 1rem;
  color: var(--primary-color);
}

.card-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.card-avatar {
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: #f0f0f0;
  background-image: linear-gradient(45deg, #f3f3f3 25%, transparent 25%, transparent 75%, #f3f3f3 75%, #f3f3f3),
    linear-gradient(45deg, #f3f3f3 25%, transparent 25%, transparent 75%, #f3f3f3 75%, #f3f3f3);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
}

.card-info {
  text-align: center;
}

.card-name {
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.card-bio {
  color: #666;
  font-size: 0.9rem;
}

.profile-card {
  width: 140px;
  height: 180px;
  top: 30%;
  right: 25%;
  background-color: #f5f5f5;
  transform: rotate(10deg);
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  animation: float 5s ease-in-out infinite;
}

.profile-avatar {
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #e0e0e0;
}

.xyh1 {
  display: none;
}

.profile-info {
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 10px;
}

.chat-card {
  width: 170px;
  height: 200px;
  bottom: 30%;
  left: 20%;
  background-color: #e6fffa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  transform: rotate(-5deg);
  animation: float 4.5s ease-in-out infinite;
}

.chat-label {
  font-weight: bold;
  color: var(--secondary-color);
  font-size: 1.1rem;
}

.chat-count {
  font-size: 0.9rem;
  color: #666;
  margin-top: 5px;
}

.avatar-grid {
  width: 180px;
  height: 140px;
  right: 15%;
  bottom: 20%;
  background-color: #fff0f5;
  transform: rotate(-8deg);
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  animation: float 3.5s ease-in-out infinite;
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
}

/* App description */
.app-description {
  flex: 1;
  padding: 2rem;
  color: black !important;
  animation: fadeInRight 1s ease-out;
}

.titles {
  color: black;
}

.title {
  color: black;
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 600px;
  margin-bottom: 2rem;
}

.learn-more-button {

  border: none !important;
  padding: 12px 30px !important;
  font-size: 1rem !important;
  font-weight: 600 !important;
  border-radius: 30px !important;
  box-shadow: 0 10px 20px rgba(0, 181, 173, 0.2) !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease !important;
}

:deep(.el-carousel) {
  width: 20px !important;
  height: 80px !important;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.5);
  transition: var(--transition);
}

:deep(.el-carousel__indicator.is-active .el-carousel__button) {
  background-color: white;
  height: 40px !important;
  /* Increased from 30px to make active indicator longer */
  width: 14px !important;
  /* Make active indicator slightly thicker */
}

:deep(.el-carousel__indicators--right) {
  right: 30px;
}

.learn-more-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 25px rgba(0, 181, 173, 0.3) !important;
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.indicator-line {
  width: 2px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.2);
}

.scroll-arrow {
  margin-top: 0.5rem;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.5);
  animation: bounce 2s infinite;
}


/* Animations */
@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-15px) rotate(2deg);
  }

  100% {
    transform: translateY(0) rotate(0deg);
  }
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-10px);
  }

  60% {
    transform: translateY(-5px);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive design */
@media (max-width: 1200px) {
  .hero-title {
    font-size: 3.5rem;
  }

  .title {
    font-size: 2.4rem;
  }


}

@media (max-width: 1024px) {
  br {
    display: none;
  }

  .xyh1 {
    display: block;
    font-size: 1px !important;
  }

  .app-elements {
    display: none;
  }

  .app-description h1 {
    font-size: 2rem !important;
  }

  .app-description p {
    font-size: 1rem !important;
  }

  .app-description {
    width: 100% !important;
    display: flex !important;
    flex-flow: column !important;
    align-items: center !important;
  }

  .content-container {
    flex-direction: column;
    padding-top: 4rem;
    margin-top: -30rem;

  }

  .app-description {
    text-align: center;

  }


  .description {
    margin: 0 auto 2rem;
    font-size: 1rem !important;
  }

  .title {
    font-size: 2.2rem;
  }

  .hero-title {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem;
  }

  .nav-links {
    display: none;
  }

  .language-selector {
    display: none;
  }

  .mobile-menu-button {
    display: flex;
  }

  .mobile-menu {
    display: flex;
  }

  .app-visual {
    height: 450px;
    transform: scale(0.8);
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .reservation-count {
    font-size: 1.5rem;
  }

  .reservation-button {
    width: 250px;
    height: 60px;
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .reservation-count {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  .reservation-button {
    width: 200px;
    height: 50px;
    font-size: 1rem;
  }

  .app-visual {
    height: 400px;
    transform: scale(0.7);
  }

  .title {
    font-size: 1.8rem;
  }

  .description {
    font-size: 1rem;
  }
}
</style>