<template>
  <div class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">恋与校园（LoveCampus）一款很好的校园交友App</h1>
      <div class="reservation-count">当前预约人数: <span class="count-number">{{ countNumber }}</span></div>
      <!-- @click="yuyue()" -->
      <div class="cards">
        <div class="card red" @click="open()">
          <p class="tip">点击预约</p>

        </div>
        <div class="card blue" @click="zanzhu()">
          <p class="tip">赞助</p>

        </div>
      </div>
      <!-- <el-button type="success cards" class="reservation-button" plain @click="open()">
        <span class="`button-text`">立即预约</span>
      </el-button>
      <p></p>
      <el-button type="success" class="reservation-button2" plain @click="open()">
        <span class="`button-text`">赞助</span>
      </el-button> -->
      <div class="scroll-down">
        <span>向下滑动了解更多</span>
        <div class="arrow-down">↓</div>
      </div>
    </div>
  </div>
</template>


<script setup>
import axios from "axios";
import router from '@/router';
import { ElMessage, ElMessageBox } from 'element-plus'
import { onMounted, ref } from 'vue';
let zanzhu = () => {
  router.push('/zujian2')

}


const open = () => {
  ElMessageBox.prompt('请输入您的邮箱地址', '预约', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    inputPattern:
      /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    inputErrorMessage: 'Invalid Email',
  })
    .then(({ value }) => {
      axios.post('http://60.205.177.31:1234/postemail', {
        'email': value
      })
        .then(res => {
          console.log(res.data);
          ElMessage({
            type: 'success',
            message: `预约成功`,
          })
        })

    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '预约失败',
      })
    })
}
const countNumber = ref([]); // 在顶部定义响应式变量

const getReservationCount = () => {
  axios.get('http://60.205.177.31:1234/emailsleng')
    .then(res => {
      if (res.data) {
        countNumber.value = res.data; // 假设返回数据中有count字段
        console.log(res.data);

      }
    })
    .catch(error => {
      console.error('获取预约人数失败:', error);
      ElMessage({
        type: 'error',
        message: '获取预约人数失败',
      });
    });
}
onMounted(() => {
  getReservationCount()
})
</script>



<style scoped>
.reservation-button2 {
  background-color: #36d !important;
  color: white !important;
  width: 300px;
  height: 35px;
  font-size: 1.1rem;
  font-weight: 700;
  /* background-color: var(--primary-color) !important; */
  border: none !important;
  border-radius: 35px !important;

  transition: transform 0.3s ease, box-shadow 0.3s ease !important;
  animation: fadeInUp 1s ease-out;
}

.reservation-button {
  width: 300px;
  height: 70px;
  background-color: #67c23a !important;
  color: white !important;
  font-weight: 700;
  font-size: 1.1rem;
}
</style>
<!-- 卡片2 -->
<style scoped>
.cards {
  margin: 0 auto;
  width: 200px;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.cards .red {
  background-color: #67c23a;
}

.cards .blue {
  background-color: #36d;
}

.cards .card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 50px;
  width: 200px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: 400ms;
}

.cards .card p.tip {
  font-size: 1em;
  font-weight: 700;
}

.cards .card p.second-text {
  font-size: .7em;
}

.cards .card:hover {
  transform: scale(1.1, 1.1);
}

.cards:hover>.card:not(:hover) {
  filter: blur(10px);
  transform: scale(0.9, 0.9);
}
</style>