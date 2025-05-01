<template>
  <div class="big">
    <div class="two">
      <div class="img  ">
        <div class="parent">
          <div class="card">
            <img src="/src/assets/img/lian.png" alt="" />
          </div>
        </div>
      </div>
      <div class="text">
        <h1 class="description">
          源自与一次职业规划课<br />
          源自于一个ppt
        </h1>
        <p class="ptext">
          LoveCampus从最初的概念PPT起步，历经三个月开发上线测试版网站，又在半年内迭代出首个APP，凭借校园社交+AI智能匹配功能迅速崛起，上线一年用户突破50万，完成三轮融资，成为Z世代最活跃的社交社区之一。
        </p>
      </div>
    </div>
    <div class="scroll-indicator">
      <div class="indicator-line"></div>
      <div class="scroll-arrow">↓</div>
    </div>
  </div>
</template>
<style scoped>
/* Base styles */
.big {
  width: 100%;
  min-height: 100vh;
  background-image: url("/src/assets/img/beijingsan.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.two {
  width: 100%;
  max-width: 1464px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;
}

.img {
  width: 40%;
  transform: rotate(-5deg);
  animation: float 4.5s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: rotate(-5deg) translateY(0px);
  }

  50% {
    transform: rotate(-5deg) translateY(-15px);
  }

  100% {
    transform: rotate(-5deg) translateY(0px);
  }
}

.text {
  width: 40%;
}

.description {
  font-size: 46px;
  line-height: 60px;
  margin-bottom: 1rem;
}

.ptext {
  line-height: 2rem;
  font-size: 1.1rem;
}

/* Card styles */
.parent {
  perspective: 1000px;
  width: 100%;
}

.parent img {
  width: 100%;
  height: auto;
}

.card {
  padding-top: 50px;
  border: 3px solid rgb(255, 255, 255);
  transform-style: preserve-3d;
  background: linear-gradient(135deg, #0000 18.75%, #f3f3f3 0 31.25%, #0000 0),
    repeating-linear-gradient(45deg, #f3f3f3 -6.25% 6.25%, #ffffff 0 18.75%);
  background-size: 60px 60px;
  background-position: 0 0, 0 0;
  background-color: #f0f0f0;
  width: 100%;
  box-shadow: rgba(142, 142, 142, 0.3) 0px 30px 30px -10px;
  transition: all 0.5s ease-in-out;
}

.card:hover {
  background-position: -100px 100px, -100px 100px;
  transform: rotate3d(0.5, 1, 0, 30deg);
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.indicator-line {
  width: 2px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.7);
}

.scroll-arrow {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  animation: bounce 2s infinite;
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

/* Mobile responsive styles */
@media (max-width: 768px) {
  .big {
    padding: 0px;
  }

  .two {
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 2rem 0;

  }

  .img,
  .text {
    width: 90%;
    margin: 0 auto;
  }

  .description {
    font-size: 32px;
    line-height: 42px;
    text-align: center;
  }

  .ptext {
    font-size: 1rem;
    line-height: 1.7rem;
    text-align: center;
  }

  .card {
    padding-top: 30px;
  }
}

/* Small mobile devices */
@media (max-width: 480px) {
  .description {
    font-size: 28px;
    line-height: 36px;
  }

  .ptext {
    font-size: 0.9rem;
    line-height: 1.5rem;
  }

  .scroll-indicator {
    bottom: 1rem;
  }

  .indicator-line {
    height: 30px;
  }
}
</style>
