<template>
  <!-- 其他代码保持不变 -->
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
  ElMessageBox({
    title: '预约',
    message: () => (
      <div>
        <div style="margin-bottom: 15px;">
          <div style="margin-bottom: 5px;">请输入您的邮箱地址</div>
          <el-input 
            v-model="email" 
            placeholder="邮箱地址"
            pattern="[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?"
          />
        </div>
        <div>
          <div style="margin-bottom: 5px;">请输入您的昵称</div>
          <el-input v-model="nickname" placeholder="昵称" />
        </div>
      </div>
    ),
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    beforeClose: (action, instance, done) => {
      if (action === 'confirm') {
        // 验证邮箱格式
        const emailRegex = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
        if (!emailRegex.test(instance.email)) {
          ElMessage.error('邮箱格式不正确');
          return;
        }
        if (!instance.nickname) {
          ElMessage.error('请输入昵称');
          return;
        }
        
        axios.post('http://60.205.177.31:1234/postemail', {
          email: instance.email,
          nickname: instance.nickname
        })
        .then(res => {
          console.log(res.data);
          ElMessage.success('预约成功');
          done();
          getReservationCount(); // 更新预约人数
        })
        .catch(err => {
          ElMessage.error('预约失败');
          console.error(err);
        });
      } else {
        done();
      }
    }
  }).then(() => {
    // 这里可以添加确认后的回调
  }).catch(() => {
    // 这里可以添加取消后的回调
  });
}

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
      ElMessage.error('获取预约人数失败');
    });
}

onMounted(() => {
  getReservationCount()
})
</script>

<style scoped>
/* 原有样式保持不变 */
</style>