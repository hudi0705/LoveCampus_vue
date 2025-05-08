<template>
  <div class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">恋与校园（LoveCampus）校园交友App</h1>
      <div class="reservation-count">当前预约人数: <span class="count-number">{{ countNumber }}</span></div>
      <div class="cards">
        <div class="card red" @click="openReservationModal">
          <p class="tip">点击预约</p>
        </div>
        <div class="card blue" @click="zanzhu">
          <p class="tip">赞助</p>
        </div>
      </div>
      <div class="scroll-down">
        <span>向下滑动了解更多</span>
        <div class="arrow-down">↓</div>
      </div>
    </div>

    <!-- 优化的预约弹窗 - 增加验证码功能 -->
    <el-dialog v-model="dialogVisible" title="预约" width="400px" :close-on-click-modal="false" center>
      <el-form :model="form" :rules="rules" ref="formRef" label-position="top">
        <el-form-item label="请输入您的邮箱地址" prop="email">
          <el-input v-model="form.email" placeholder="example@email.com" :disabled="loading"></el-input>
        </el-form-item>

        <el-form-item label="验证码" prop="verificationCode">
          <div class="verification-code-container">
            <el-input v-model="form.verificationCode" placeholder="请输入验证码" :disabled="loading"></el-input>
            <el-button type="primary" class="send-code-btn" @click="sendVerificationCode(form.email)"
              :disabled="codeSending || !form.email || codeButtonDisabled" :loading="codeSending">
              {{ codeButtonText }}
            </el-button>
          </div>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancelDialog" :disabled="loading">取消</el-button>
          <el-button type="primary" @click="submitReservation" :loading="loading">
            {{ loading ? '提交中...' : '确认预约' }}
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import axios from "axios";
import router from '@/router';
import { ElMessage, ElMessageBox, ElDialog, ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';
import { onMounted, ref, reactive, computed, onUnmounted } from 'vue';

// 赞助功能保持不变
const zanzhu = () => {
  router.push('/zujian2');
};

// 预约弹窗相关状态
const dialogVisible = ref(false);
const loading = ref(false);
const codeSending = ref(false);
const formRef = ref(null);
const form = reactive({
  email: '',
  verificationCode: ''
});

// 存储定时器的引用，以便后续清除
const deleteEmailTimeout = ref(null);

// 验证码倒计时
const countdown = ref(0);
const codeButtonDisabled = computed(() => countdown.value > 0);
const codeButtonText = computed(() => {
  return countdown.value > 0 ? `重新发送(${countdown.value}s)` : '发送验证码';
});

// 开始倒计时
const startCountdown = (seconds = 60) => {
  countdown.value = seconds;
  const timer = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      clearInterval(timer);
    }
  }, 1000);
};

// 表单验证规则
const rules = {
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    {
      pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: '请输入有效的邮箱地址',
      trigger: 'blur'
    }
  ],
  verificationCode: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { min: 4, max: 6, message: '验证码长度应为4-6位', trigger: 'blur' }
  ]
};

// 打开预约弹窗
const openReservationModal = () => {
  dialogVisible.value = true;
};

// 清除定时器
const clearDeleteEmailTimeout = () => {
  if (deleteEmailTimeout.value) {
    clearTimeout(deleteEmailTimeout.value);
    deleteEmailTimeout.value = null;
  }
};

// 取消对话框
const cancelDialog = () => {
  dialogVisible.value = false;
  clearDeleteEmailTimeout();
  form.email = '';
  form.verificationCode = '';
};

// 发送验证码
const sendVerificationCode = (email) => {
  // 如果已经有一个定时器在运行，先清除它
  clearDeleteEmailTimeout();

  formRef.value.validateField('email', (valid) => {
    if (valid) {
      codeSending.value = true;

      // 设置60秒后执行DeleteEmail的定时器
      deleteEmailTimeout.value = setTimeout(() => {
        // 60秒后如果还没验证成功，执行DeleteEmail
        axios.post('http://60.205.177.31:1234/DeleteEmail', {
          "email": email
        }).then(() => {
          console.log('Email deleted due to timeout');
        }).catch(error => {
          console.error('Failed to delete email:', error);
        });
      }, 60000);

      // 发送验证码的API请求
      axios.post('http://60.205.177.31:1234/sendEmail', {
        'email': form.email
      })
        .then(res => {
          ElMessage({
            type: 'success',
            message: '验证码已发送至您的邮箱',
            duration: 3000
          });
          startCountdown();
        })
        .catch(error => {
          ElMessage({
            type: 'error',
            message: '验证码发送失败/您已预约过',
            duration: 3000
          });
          // 如果发送验证码失败，清除定时器
          clearDeleteEmailTimeout();
        })
        .finally(() => {
          codeSending.value = false;
        });
    }
  });
};

// 提交预约
const submitReservation = () => {
  if (!formRef.value) return;

  formRef.value.validate((valid) => {
    if (valid) {
      loading.value = true;

      // 这里应该是验证验证码并提交预约的API请求
      axios.post('http://60.205.177.31:1234/yzEmail', {
        'email': form.email,
        'code': form.verificationCode
      })
        .then(res => {
          console.log(res.data);
          ElMessage({
            type: 'success',
            message: '预约成功',
            duration: 3000
          });
          dialogVisible.value = false;

          // 验证成功，清除定时器，不执行DeleteEmail
          clearDeleteEmailTimeout();

          form.email = ''; // 清空表单
          form.verificationCode = ''; // 清空验证码
          getReservationCount(); // 刷新预约人数
        })
        .catch(error => {
          console.error('预约失败:', error);
          ElMessage({
            type: 'error',
            message: '预约失败，请检查验证码是否正确',
            duration: 3000
          });
        })
        .finally(() => {
          loading.value = false;
        });
    }
  });
};

const countNumber = ref([]);

const getReservationCount = () => {
  axios.get('http://60.205.177.31:1234/emailsleng')
    .then(res => {
      if (res.data) {
        countNumber.value = res.data;
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
};

// 组件挂载和卸载时的处理
onMounted(() => {
  getReservationCount();
});

onUnmounted(() => {
  clearDeleteEmailTimeout();
});
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

/* 新增弹窗样式 */
:deep(.el-dialog) {
  border-radius: 12px;
  overflow: hidden;
}

:deep(.el-dialog__header) {
  margin: 0;
  padding: 20px 20px 10px;
  text-align: center;
  font-weight: bold;
}

:deep(.el-dialog__body) {
  padding: 20px;
}

:deep(.el-form-item__label) {
  font-weight: 500;
}

:deep(.el-input__inner) {
  border-radius: 8px;
}

:deep(.dialog-footer) {
  display: flex;
  justify-content: center;
  gap: 12px;
  width: 100%;
}

:deep(.el-button) {
  border-radius: 8px;
  padding: 10px 24px;
}

/* 验证码输入框样式 */
.verification-code-container {
  display: flex;
  gap: 10px;
}

.send-code-btn {
  white-space: nowrap;
  flex-shrink: 0;
}
</style>