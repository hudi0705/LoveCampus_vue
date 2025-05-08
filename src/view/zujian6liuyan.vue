<template>
  <div class="message-board">
    <div class="danmaku-container" ref="danmakuContainer">
      <div v-for="(message, index) in messages" :key="message.id" class="danmaku-item"
        :style="getDanmakuStyle(message, index)">
        <div class="danmaku-avatar" :style="{ backgroundColor: message.color }">
          {{ message.content && message.content.charAt(0) }}
        </div>
        <div class="danmaku-content">
          <div class="danmaku-text">{{ message.content }}</div>
          <div class="danmaku-time">{{ formatTime(message.id) }}</div>
        </div>
      </div>
    </div>

    <div class="input-container">
      <input v-model="newMessage" @keyup.enter="submitMessage" placeholder="写下你的留言..." class="message-input" />
      <button @click="submitMessage" class="submit-button">发送</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted } from 'vue';
import axios from 'axios';

// 留言数据
const messages = ref([
  { id: 1683000000000, content: '欢迎来到留言板！', color: '#ff5252', verticalPosition: 0.1, direction: 'right', speed: 35 },
  { id: 1683000060000, content: '这是一个弹幕式留言墙示例', color: '#4caf50', verticalPosition: 0.25, direction: 'left', speed: 40 },
  { id: 1683000120000, content: '你可以在下方输入框添加新留言', color: '#2196f3', verticalPosition: 0.4, direction: 'right', speed: 30 },
  { id: 1683000180000, content: '每条留言都会以弹幕形式展示', color: '#ff9800', verticalPosition: 0.6, direction: 'left', speed: 45 },
  { id: 1683000240000, content: '尝试发送一条新留言吧！', color: '#9c27b0', verticalPosition: 0.8, direction: 'right', speed: 38 },
]);

const newMessage = ref('');
const danmakuContainer = ref(null);
const containerHeight = ref(0);
const colors = ['#ff5252', '#4caf50', '#2196f3', '#ff9800', '#9c27b0', '#607d8b', '#e91e63', '#009688'];

// 生成弹幕样式和背景色
const getDanmakuStyle = (message, index) => {
  // 使用垂直位置百分比来确定弹幕在容器中的位置
  // verticalPosition是0到1之间的值，表示容器高度的百分比
  const verticalPosition = message.verticalPosition !== undefined
    ? message.verticalPosition
    : (index % 10) / 10; // 如果没有指定，则根据索引分配位置

  const direction = message.direction || (index % 2 === 0 ? 'right' : 'left');
  const speed = message.speed || (30 + Math.floor(Math.random() * 20));

  // 为每条弹幕生成浅色背景（基于消息颜色）
  const bgColor = getLightColor(message.color);

  // 计算弹幕的垂直位置，确保它在容器的可见区域内
  // 使用百分比定位，而不是固定像素
  const topPosition = `${verticalPosition * 100}%`;

  const style = {
    top: topPosition,
    animationDuration: `${speed}s`,
    animationDirection: direction === 'right' ? 'reverse' : 'normal',
    backgroundColor: bgColor,
    borderColor: message.color
  };

  return style;
};

// 生成浅色背景（基于消息颜色）
const getLightColor = (color) => {
  // 将颜色转换为浅色版本，但保持不透明
  // 这里使用一个简单的方法，将颜色转为HSL，增加亮度
  try {
    // 简单处理，为常见颜色返回对应的浅色
    const colorMap = {
      '#ff5252': '#ffdddd', // 红色对应的浅色
      '#4caf50': '#e0f2e0', // 绿色对应的浅色
      '#2196f3': '#e3f2fd', // 蓝色对应的浅色
      '#ff9800': '#fff3e0', // 橙色对应的浅色
      '#9c27b0': '#f3e5f5', // 紫色对应的浅色
      '#607d8b': '#eceff1', // 蓝灰色对应的浅色
      '#e91e63': '#fce4ec', // 粉色对应的浅色
      '#009688': '#e0f2f1'  // 青色对应的浅色
    };

    return colorMap[color] || '#f5f5f5'; // 默认浅灰色
  } catch (e) {
    return '#f5f5f5'; // 出错时返回浅灰色
  }
};

// 格式化时间
const formatTime = (timestamp) => {
  const date = new Date(timestamp);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

// 提交新留言
const submitMessage = async () => {
  if (!newMessage.value.trim()) return;

  // 创建新留言对象
  const newDanmaku = {
    id: Date.now(),
    content: newMessage.value,
    color: colors[Math.floor(Math.random() * colors.length)],
    verticalPosition: Math.random() * 0.9, // 随机垂直位置，避免太靠近底部
    direction: Math.random() > 0.5 ? 'right' : 'left',
    speed: 30 + Math.floor(Math.random() * 20)
  };

  // 添加到留言列表
  messages.value.push(newDanmaku);

  // 清空输入框
  newMessage.value = '';

  // 使用Axios发送留言到服务器
  try {
    // 根据API格式调整发送的数据
    const apiData = newDanmaku.content
      ;
    await sendMessageToServer(apiData);
  } catch (error) {
    console.error('发送留言失败:', error);
    // 可以在这里添加错误处理逻辑，如显示错误提示等 
  }
};

// 使用Axios发送留言到服务器
const sendMessageToServer = async (message) => {
  try {
    // 直接发送接收到的消息对象，不再尝试访问newDanmaku
    const response = await axios.post(`http://60.205.177.31:1234/senMessage`, {
      "LiuYan": message
    });
    console.log('留言发送成功:', response.data);
    return response.data;
  } catch (error) {
    console.error('API错误:', error);
    throw error; // 将错误向上传递，以便调用者处理
  }
};

// 使用Axios从服务器获取留言
const fetchMessagesFromServer = async () => {
  try {
    const response = await axios.get(`http://60.205.177.31:1234/GetMeassage`);
    console.log('获取留言成功:', response.data);

    // 检查响应数据是否存在
    if (response.data) {
      // 将API返回的数据转换为组件需要的格式
      const apiMessage = response.data;

      // 创建一个新的消息对象，保持原有示例消息
      const serverMessages = [];

      // 如果是单个消息对象
      if (apiMessage.id && apiMessage.liuYan) {
        const cleanContent = apiMessage.liuYan.trim(); // 去除首尾空白和换行符

        if (cleanContent) {
          serverMessages.push({
            id: apiMessage.id,
            content: cleanContent,
            color: colors[Math.floor(Math.random() * colors.length)],
            verticalPosition: Math.random() * 0.9,
            direction: Math.random() > 0.5 ? 'right' : 'left',
            speed: 30 + Math.floor(Math.random() * 20)
          });
        }
      }
      // 如果是消息数组
      else if (Array.isArray(apiMessage)) {
        apiMessage.forEach(msg => {
          if (msg.id && msg.liuYan) {
            const cleanContent = msg.liuYan.trim();

            if (cleanContent) {
              serverMessages.push({
                id: msg.id,
                content: cleanContent,
                color: colors[Math.floor(Math.random() * colors.length)],
                verticalPosition: Math.random() * 0.9,
                direction: Math.random() > 0.5 ? 'right' : 'left',
                speed: 30 + Math.floor(Math.random() * 20)
              });
            }
          }
        });
      }

      // 将服务器消息添加到现有消息中
      if (serverMessages.length > 0) {
        messages.value = [...messages.value, ...serverMessages];
      }
    }
  } catch (error) {
    console.error('获取留言失败:', error);
    // 可以在这里添加错误处理逻辑，如显示错误提示等
  }
};

// 组件挂载时
onMounted(() => {
  // 获取容器高度
  if (danmakuContainer.value) {
    containerHeight.value = danmakuContainer.value.clientHeight;

    // 监听窗口大小变化，更新容器高度
    window.addEventListener('resize', updateContainerHeight);
  }

  // 从服务器获取初始留言
  fetchMessagesFromServer();

  // 设置定时器，每隔一段时间获取新留言
  const messageInterval = setInterval(fetchMessagesFromServer, 30000); // 每30秒获取一次

  // 组件卸载时清除定时器
  onUnmounted(() => {
    clearInterval(messageInterval);
  });
});

// 组件卸载时
onUnmounted(() => {
  window.removeEventListener('resize', updateContainerHeight);
});

// 更新容器高度
const updateContainerHeight = () => {
  if (danmakuContainer.value) {
    containerHeight.value = danmakuContainer.value.clientHeight;
  }
};
</script>

<style scoped>
.message-board {
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: url(/src/assets/img/beijingsan.jpg);
  background-size: cover;

  color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.title {
  text-align: center;
  margin: 15px 0;
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.danmaku-container {
  position: relative;
  flex: 1;
  overflow: hidden;
}

.danmaku-item {
  position: absolute;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 30px;
  /* 不透明的背景色，在JS中动态设置 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: danmaku-move linear infinite;
  white-space: nowrap;
  border: 2px solid;
  /* 边框颜色在JS中动态设置 */
  transform: translateY(-50%);
  /* 垂直居中弹幕 */
}

@keyframes danmaku-move {
  from {
    transform: translateX(100vw) translateY(-50%);
  }

  to {
    transform: translateX(-100%) translateY(-50%);
  }
}

.danmaku-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  margin-right: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.danmaku-content {
  display: flex;
  flex-direction: column;
}

.danmaku-text {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  /* 深色文字，与浅色背景形成对比 */
}

.danmaku-time {
  font-size: 10px;
  color: #666;
}

.input-container {
  width: 90%;
  margin: 20px auto;
  display: flex;
  padding: 15px;
  background-color: #ffffff;
  /* 不透明的白色背景 */
  border-radius: 20px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.message-input {
  flex: 1;
  padding: 12px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 24px;
  background-color: #f5f5f5;
  /* 不透明的浅灰色背景 */
  color: #333;
  font-size: 15px;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.message-input:focus {
  border-color: #4caf50;
  box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
  background-color: #ffffff;
  /* 聚焦时变为白色背景 */
}

.message-input::placeholder {
  color: #999;
}

.submit-button {
  margin-left: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 24px;
  background-color: #4caf50;
  /* 不透明的绿色背景 */
  color: white;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.submit-button:hover {
  background-color: #45a049;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

.submit-button:active {
  transform: scale(0.98);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .title {
    font-size: 1.5rem;
    margin: 10px 0;
  }

  .input-container {
    width: 95%;
    padding: 10px;
  }

  .danmaku-item {
    padding: 6px 10px;
  }

  .danmaku-avatar {
    width: 28px;
    height: 28px;
    font-size: 12px;
  }

  .danmaku-text {
    font-size: 13px;
  }
}
</style>