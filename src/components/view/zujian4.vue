<template>
  <div class="big ">
    <div class="inner"></div>
    <div class="sponsor-page">
      <div class="page-header">
        <h1 class="page-title">支持我们</h1>
        <p class="page-subtitle">您的每一份赞助都是我们前进的动力</p>
      </div>

      <div class="sponsor-content">
        <div class="sponsor-message">
          <h2 class="section-title">为什么赞助我们？</h2>
          <p class="section-text">
            感谢您考虑赞助我们的项目。您的支持将帮助我们：
          </p>
          <ul class="benefit-list">
            <li class="benefit-item">
              <div class="benefit-icon">✓</div>
              <div class="benefit-text">持续开发更多优质功能</div>
            </li>
            <li class="benefit-item">
              <div class="benefit-icon">✓</div>
              <div class="benefit-text">提升服务器性能和稳定性</div>
            </li>
            <li class="benefit-item">
              <div class="benefit-icon">✓</div>
              <div class="benefit-text">为社区提供更好的支持和服务</div>
            </li>
            <li class="benefit-item">
              <div class="benefit-icon">✓</div>
              <div class="benefit-text">创造更多有价值的内容</div>
            </li>
          </ul>
        </div>

        <div class="qr-code-section">
          <h2 class="section-title">赞助方式</h2>
          <p class="section-text">您可以通过以下方式进行赞助：</p>

          <div class="qr-code-container">
            <div class="qr-code-card">
              <div class="qr-code-image">
                <!-- 微信支付二维码 -->
                <el-image src="/src/assets/img/wxzf.jpg" :preview-src-list="srcList" />
                <!-- <img alt="微信支付" class="qr-image" /> -->
              </div>
              <div class="qr-code-title">微信支付</div>
            </div>

            <div class="qr-code-card">
              <div class="qr-code-image">
                <!-- 支付宝二维码 -->
                <el-image src="/src/assets/img/zfb.jpg" :preview-src-list="srcList" />
                <!-- <img src="/src/assets/img/zfb.jpg" alt="支付宝" class="qr-image" /> -->
              </div>
              <div class="qr-code-title">支付宝</div>
            </div>
          </div>
        </div>

        <!-- 新增：资金使用透明度部分 -->
        <div class="fund-usage">
          <h2 class="section-title">赞助资金去向</h2>
          <p class="section-text">我们承诺将您的每一分赞助都用于项目的持续发展。以下是资金的主要用途：</p>

          <div class="usage-cards">
            <div class="usage-card">
              <div class="usage-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 class="usage-title">服务器与基础设施</h3>
              <p class="usage-text">60%的资金用于维护和升级服务器、数据库和云服务，确保系统稳定运行。</p>
            </div>

            <div class="usage-card">
              <div class="usage-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3 class="usage-title">研发与创新</h3>
              <p class="usage-text">25%的资金投入到新功能开发和技术创新，不断提升用户体验。</p>
            </div>

            <div class="usage-card">
              <div class="usage-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 class="usage-title">社区支持</h3>
              <p class="usage-text">15%的资金用于社区建设、用户支持和教育内容创作。</p>
            </div>
          </div>
        </div>

        <!-- 新增：发展路线图部分 -->
        <div class="roadmap-section">

          <h2 class="section-title">发展路线图</h2>
          <p class="section-text">您的赞助将直接支持以下计划的实现：</p>

          <div class="roadmap">
            <div class="roadmap-item">
              <div class="roadmap-marker completed">
                <div class="marker-inner"></div>
              </div>
              <div class="roadmap-content">
                <div class="roadmap-date">2023 Q4</div>
                <h3 class="roadmap-title">基础功能完善</h3>
                <p class="roadmap-description">完成核心功能开发，优化用户界面，提升系统稳定性。</p>
                <div class="roadmap-status completed">已完成</div>
              </div>
            </div>

            <div class="roadmap-item">
              <div class="roadmap-marker active">
                <div class="marker-inner"></div>
              </div>
              <div class="roadmap-content">
                <div class="roadmap-date">2024 Q1-Q2</div>
                <h3 class="roadmap-title">功能扩展与性能优化</h3>
                <p class="roadmap-description">新增高级分析功能，优化数据处理速度，提升系统响应时间。</p>
                <div class="roadmap-status active">进行中</div>
              </div>
            </div>

            <div class="roadmap-item">
              <div class="roadmap-marker">
                <div class="marker-inner"></div>
              </div>
              <div class="roadmap-content">
                <div class="roadmap-date">2024 Q3-Q4</div>
                <h3 class="roadmap-title">移动端应用开发</h3>
                <p class="roadmap-description">开发iOS和Android原生应用，提供更便捷的移动端体验。</p>
                <div class="roadmap-status">计划中</div>
              </div>
            </div>

            <div class="roadmap-item">
              <div class="roadmap-marker">
                <div class="marker-inner"></div>
              </div>
              <div class="roadmap-content">
                <div class="roadmap-date">2025</div>
                <h3 class="roadmap-title">AI智能助手与国际化</h3>
                <p class="roadmap-description">引入AI智能助手提升用户体验，支持多语言，拓展国际市场。</p>
                <div class="roadmap-status">规划中</div>
              </div>
            </div>
          </div>
        </div>

        <div class="sponsor-thanks">
          <h2 class="section-title">感谢您的支持</h2>
          <p class="thanks-text">
            每一份赞助都是对我们工作的肯定和鼓励。我们将继续努力，为您提供更好的服务和体验。
            如有任何问题，请随时与我们联系。
          </p>
          <button class="contact-button">联系我们</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
// 可以在这里添加任何需要的逻辑
import { ref, onMounted } from 'vue';

// 如果需要处理二维码图片上传或其他功能，可以在这里添加
</script>

<style>
.content {
  font-size: 50px;
  color: #555;
  font-weight: bold;
}

.font-content {
  position: absolute;
  width: 700px;
  height: 700px;
  margin: 20px;
  text-align: center;
  line-height: 700px;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  /* border:2px solid red; */
}

.big {
  width: 100%;
  /* background-image: url('src/assets/img/beijingsan.jpg'); */
  background-color: whitesmoke;
}

:root {
  --primary-color: #7acc35;
  --secondary-color: #00b5ad;
  --text-color: #333;
  --light-bg: #f8f9fa;
  --card-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  --transition: all 0.3s ease;
}

.sponsor-page {
  font-family: 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  color: var(--text-color);
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.page-title {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.sponsor-content {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-color);
}

.section-text {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #555;
}

/* 赞助信息部分 */
.sponsor-message {
  background-color: var(--light-bg);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: var(--card-shadow);
}

.benefit-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.benefit-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.benefit-icon {
  width: 24px;
  height: 24px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-weight: bold;
}

.benefit-text {
  font-size: 1.1rem;
}

/* 二维码部分 */
.qr-code-section {
  text-align: center;
}

.qr-code-container {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
}

.qr-code-card {
  background-color: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: var(--card-shadow);
  transition: var(--transition);
  width: 220px;
}

.qr-code-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.qr-code-image {
  width: 180px;
  height: 180px;
  margin: 0 auto 1rem;
  background-color: #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qr-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.qr-code-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-color);
}

/* 资金使用部分 */
.fund-usage {
  text-align: center;
}

.usage-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
}

.usage-card {
  background-color: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: var(--card-shadow);
  transition: var(--transition);
  width: 300px;
  text-align: center;
}

.usage-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.usage-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, rgba(122, 204, 53, 0.1), rgba(0, 181, 173, 0.1));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
}

.usage-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.usage-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
}

/* 路线图部分 */
.roadmap-section {
  padding: 2rem;
  background-color: var(--light-bg);
  border-radius: 16px;
  box-shadow: var(--card-shadow);
}

.roadmap {
  position: relative;
  max-width: 800px;
  margin: 3rem auto 0;
}

.roadmap:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 20px;
  width: 2px;
  background-color: #e0e0e0;
}

.roadmap-item {
  position: relative;
  display: flex;
  margin-bottom: 3rem;
}

.roadmap-item:last-child {
  margin-bottom: 0;
}

.roadmap-marker {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  border: 2px solid #e0e0e0;
  z-index: 1;
  margin-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.roadmap-marker.completed {
  border-color: var(--primary-color);
}

.roadmap-marker.active {
  border-color: var(--secondary-color);
}

.marker-inner {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #e0e0e0;
}

.roadmap-marker.completed .marker-inner {
  background-color: var(--primary-color);
}

.roadmap-marker.active .marker-inner {
  background-color: var(--secondary-color);
}

.roadmap-content {
  flex: 1;
  background-color: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: var(--transition);
}

.roadmap-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.roadmap-date {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 0.5rem;
}

.roadmap-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.roadmap-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1rem;
}

.roadmap-status {
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  background-color: #f0f0f0;
  color: #888;
}

.roadmap-status.completed {
  background-color: rgba(122, 204, 53, 0.1);
  color: var(--primary-color);
}

.roadmap-status.active {
  background-color: rgba(0, 181, 173, 0.1);
  color: var(--secondary-color);
}

/* 感谢部分 */
.sponsor-thanks {
  text-align: center;
  background-color: var(--light-bg);
  padding: 3rem;
  border-radius: 16px;
  box-shadow: var(--card-shadow);
}

.thanks-text {
  max-width: 700px;
  margin: 0 auto 2rem;
  font-size: 1.1rem;
  line-height: 1.8;
}

.contact-button {
  background-color: transparent;
  color: var(--secondary-color);
  border: 2px solid var(--secondary-color);
  border-radius: 30px;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.contact-button:hover {
  background-color: var(--secondary-color);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 181, 173, 0.2);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .page-title {
    font-size: 2.4rem;
  }

  .section-title {
    font-size: 1.6rem;
  }

  .usage-cards {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .sponsor-page {
    padding: 1.5rem;
  }

  .page-title {
    font-size: 2rem;
  }

  .qr-code-container {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .usage-cards {
    flex-direction: column;
    align-items: center;
  }

  .usage-card {
    width: 100%;
    max-width: 350px;
  }

  .roadmap:before {
    left: 20px;
  }

  .roadmap-marker {
    margin-right: 1.5rem;
  }

  .roadmap-content {
    padding: 1.2rem;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 1.8rem;
  }

  .page-subtitle {
    font-size: 1rem;
  }

  .section-title {
    font-size: 1.4rem;
  }

  .sponsor-message,
  .sponsor-thanks,
  .roadmap-section {
    padding: 1.5rem;
  }

  .roadmap-marker {
    width: 30px;
    height: 30px;
  }

  .roadmap:before {
    left: 15px;
  }

  .marker-inner {
    width: 12px;
    height: 12px;
  }
}
</style>