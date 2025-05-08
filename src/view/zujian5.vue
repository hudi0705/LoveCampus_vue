<template>
  <div class="werewolf-app">
    <div class="gradient-background"></div>

    <div class="content-container">
      <div class="bubbles-container">
        <div class="bubble bubble-1">
          <div class="bubble-content">
            <div class="bubble-title">情绪追踪</div>
            <div class="bubble-icon">😊</div>
          </div>
        </div>
        <div class="bubble bubble-2">
          <div class="bubble-content">
            <div class="bubble-title">冥想</div>
            <div class="bubble-icon">🧘</div>
          </div>
        </div>
        <div class="bubble bubble-3">
          <div class="bubble-content">
            <div class="bubble-title">心理咨询</div>
            <div class="bubble-icon">💬</div>
          </div>
        </div>
        <div class="bubble bubble-4">
          <div class="bubble-content">
            <div class="bubble-title">睡眠改善</div>
            <div class="bubble-icon">😴</div>
          </div>
        </div>
        <div class="bubble bubble-5">
          <div class="bubble-content">
            <div class="bubble-title">压力管理</div>
            <div class="bubble-icon">🧘‍♂️</div>
          </div>
        </div>
        <div class="bubble bubble-6">
          <div class="bubble-content">
            <div class="bubble-title">正念练习</div>
            <div class="bubble-icon">🌿</div>
          </div>
        </div>
        <div class="bubble bubble-7">
          <div class="bubble-content">
            <div class="bubble-title">情绪日记</div>
            <div class="bubble-icon">📝</div>
          </div>
        </div>
        <div class="bubble bubble-8">
          <div class="bubble-content">
            <div class="bubble-title">呼吸练习</div>
            <div class="bubble-icon">🌬️</div>
          </div>
        </div>
        <div class="bubble bubble-9">
          <div class="bubble-content">
            <div class="bubble-title">放松音乐</div>
            <div class="bubble-icon">🎵</div>
          </div>
        </div>
      </div>
      <div class="shouji">
        <div class="img  ">
          <div class="parent">
            <div class="card">
              <img src="/src/assets/img/lian.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div class="text-content">
        <h1 class="main-title">心理咨询</h1>
        <h2 class="sub-title">心理健康</h2>
        <p class="description">
          《恋与校园》心理咨询：专属大学生的情绪树洞与心灵成长驿站！24小时在线专业咨询师+同龄守护天使双轨陪伴，无论学业压力、情感迷惘、宿舍矛盾或生涯规划，匿名倾诉/即时疏导/定制解决方案三合一。首创「解忧盲盒」趣味测评搭配「情绪急救箱」音频疗愈，让心理咨询像校园下午茶般轻松温暖。在这里，每个困惑都被温柔接住，每份孤独都化作成长星光，与千万同龄人共建心理健康安全网——因为最好的青春，本该笑着奔跑
        </p>
        <div class="download-button">
          <span>立即下载</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WerewolfGameApp',
  data() {
    return {
      // 可以在这里添加数据
    }
  }
}
</script>

<style scoped>
.shouji {
  transform: rotate(5deg);
  display: none;
  width: 85%;
  height: 200px;
  margin: 0 auto;
}

.werewolf-app {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-image: url(src/assets/img/beijingsan.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

.gradient-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #e0f7fa 0%, #e8f5e9 50%, #e3f2fd 100%);
  z-index: -1;
}

.content-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem;
  max-width: 1300px;
  margin: 0 auto;
  min-height: 100vh;
}

.bubbles-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 500px;
}

.bubble {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.bubble:hover {
  transform: scale(1.1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.4);
}

.bubble-content {
  text-align: center;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.bubble-title {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
}

.bubble-icon {
  font-size: 24px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.bubble-1 {
  background: linear-gradient(135deg, #4fc3f7, #0288d1);
  top: 5%;
  left: 10%;
  animation: float 6s ease-in-out infinite;
}

.bubble-2 {
  background: linear-gradient(135deg, #81c784, #43a047);
  top: 25%;
  left: 70%;
  animation: float 8s ease-in-out infinite;
  animation-delay: 1s;
}

.bubble-3 {
  background: linear-gradient(135deg, #ffb74d, #f57c00);
  top: 45%;
  left: 15%;
  animation: float 7s ease-in-out infinite;
  animation-delay: 2s;
}

.bubble-4 {
  background: linear-gradient(135deg, #ba68c8, #8e24aa);
  top: 15%;
  left: 45%;
  animation: float 6.5s ease-in-out infinite;
  animation-delay: 1.5s;
}

.bubble-5 {
  background: linear-gradient(135deg, #4db6ac, #00897b);
  top: 65%;
  left: 75%;
  animation: float 7.5s ease-in-out infinite;
  animation-delay: 0.5s;
}

.bubble-6 {
  background: linear-gradient(135deg, #ff8a65, #f4511e);
  top: 55%;
  left: 35%;
  animation: float 6s ease-in-out infinite;
  animation-delay: 2.5s;
}

.bubble-7 {
  background: linear-gradient(135deg, #7986cb, #3949ab);
  top: 30%;
  left: 25%;
  animation: float 7.2s ease-in-out infinite;
  animation-delay: 1.2s;
}

.bubble-8 {
  background: linear-gradient(135deg, #4dd0e1, #00acc1);
  top: 40%;
  left: 60%;
  animation: float 6.8s ease-in-out infinite;
  animation-delay: 2.2s;
}

.bubble-9 {
  background: linear-gradient(135deg, #ffd54f, #ffb300);
  top: 70%;
  left: 50%;
  animation: float 7.3s ease-in-out infinite;
  animation-delay: 1.8s;
}

@keyframes float {
  0% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(5deg);
  }

  100% {
    transform: translateY(0px) rotate(0deg);
  }
}

.phone-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
}

.phone-frame {
  position: relative;
  width: 280px;
  height: 560px;
  background-color: #000;
  border-radius: 40px;
  padding: 10px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.phone-screen {
  width: 100%;
  height: 100%;
  background-color: #000;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
}

.game-interface {
  width: 100%;
  height: 100%;
  background-color: #121212;
  position: relative;
}

.top-bar {
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
}

.status-icons {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.signal {
  display: flex;
  gap: 2px;
}

.signal-bar {
  width: 3px;
  height: 10px;
  background-color: white;
  border-radius: 1px;
}

.time {
  color: white;
  font-size: 12px;
}

.battery {
  width: 20px;
  height: 10px;
  border: 1px solid white;
  border-radius: 2px;
  position: relative;
}

.battery::after {
  content: '';
  position: absolute;
  width: 2px;
  height: 4px;
  background-color: white;
  right: -3px;
  top: 3px;
}

.user-avatars .avatar-circle {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f5f5f5;
  border: 2px solid white;
  z-index: 2;
}

.game-cards {
  position: relative;
  height: 100%;
}

.card {
  position: absolute;
  width: 120px;
  height: 180px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.card-mood {
  background: linear-gradient(to bottom, #4fc3f7, #0288d1);
}

.card-meditation {
  background: linear-gradient(to bottom, #81c784, #43a047);
}

.card-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.card-title {
  color: white;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  font-size: 18px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.card-image {
  flex: 1;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.game-button {
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 180px;
  height: 50px;
  background: linear-gradient(to right, #4fc3f7, #0288d1);
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-text {
  color: white;
  font-weight: bold;
  font-size: 18px;
}

.bottom-controls {
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0 20px;
}

.control-icon {
  width: 30px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
}

.text-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.main-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
}

.sub-title {
  font-size: 1.5rem;
  color: #00bcd4;
  margin-bottom: 1.5rem;
}

.description {
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 2rem;
  max-width: 500px;
}

.download-button {
  background-color: #00bcd4;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  display: inline-block;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.download-button:hover {
  background-color: #00acc1;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .shouji {
    display: block;
    padding: 0px;

  }

  .content-container {
    flex-direction: column;
    padding: 0;
    align-items: center;
    justify-content: center;
  }

  .phone-container {
    margin-bottom: 2rem;
  }

  .text-content {
    margin: 0 auto;
    text-align: center;
    padding-right: 4rem;
  }

  .main-title {
    font-size: 2.5rem;
  }

  .description {
    margin: 0 auto 2rem auto;
  }

  .bubbles-container {
    height: 1000px;
    display: none;
  }

  .bubble {
    width: 100px;
    height: 100px;
  }

  .bubble-1 {
    left: 5%;
    top: 5%;
  }

  .bubble-2 {
    left: 60%;
    top: 20%;
  }

  .bubble-3 {
    left: 10%;
    top: 40%;
  }

  .bubble-4 {
    left: 40%;
    top: 15%;
  }

  .bubble-5 {
    left: 70%;
    top: 50%;
  }

  .bubble-6 {
    left: 30%;
    top: 60%;
  }

  .bubble-7 {
    left: 20%;
    top: 30%;
  }

  .bubble-8 {
    left: 55%;
    top: 45%;
  }

  .bubble-9 {
    left: 45%;
    top: 70%;
  }
}

@media (max-width: 480px) {
  .phone-frame {
    width: 240px;
    height: 480px;
  }

  .main-title {
    font-size: 2rem;
  }

  .sub-title {
    font-size: 1.2rem;
  }

  .bubbles-container {
    height: 1200px;
  }

  .bubble {
    width: 80px;
    height: 80px;
  }

  .bubble-title {
    font-size: 12px;
  }

  .bubble-icon {
    font-size: 20px;
  }

  .bubble-1 {
    left: 5%;
    top: 5%;
  }

  .bubble-2 {
    left: 65%;
    top: 15%;
  }

  .bubble-3 {
    left: 10%;
    top: 35%;
  }

  .bubble-4 {
    left: 45%;
    top: 10%;
  }

  .bubble-5 {
    left: 75%;
    top: 45%;
  }

  .bubble-6 {
    left: 25%;
    top: 55%;
  }

  .bubble-7 {
    left: 15%;
    top: 25%;
  }

  .bubble-8 {
    left: 60%;
    top: 40%;
  }

  .bubble-9 {
    left: 50%;
    top: 65%;
  }
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
  transform: translateY(30deg);
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
</style>