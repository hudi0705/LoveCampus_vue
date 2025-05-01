<template>
  <header class="navbar">
    <div class="logo-container">
      <span class="logo-text">LoveCampus APP</span>
    </div>
    <nav class="nav-links">
      <a href="#" class="nav-link active">首页</a>
      <a href="#" class="nav-link">
        关于我们
        <span class="dropdown-icon">▼</span>
      </a>
      <a href="#" class="nav-link">
        业务介绍
        <span class="dropdown-icon">▼</span>
      </a>
      <a href="#" class="nav-link">
        可持续发展
        <span class="dropdown-icon">▼</span>
      </a>
      <a href="#" class="nav-link">Just So Soul 研究院</a>
      <a href="#" class="nav-link">
        工作机会
        <span class="dropdown-icon">▼</span>
      </a>
      <a href="#" class="nav-link">
        联系我们
        <span class="dropdown-icon">▼</span>
      </a>
    </nav>
    <div class="language-selector ">
      <a href="#" class="lang">EN</a>
      <a href="#" class="lang active">中</a>
    </div>
    <!-- @click="toggleMobileMenu" -->
    <button class="mobile-menu-button">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <!-- :class="{ 'is-active': isMobileMenuOpen }" -->
    <div class="mobile-menu">
      <a href="#" class="mobile-nav-link active">首页</a>
      <a href="#" class="mobile-nav-link">关于我们</a>
      <a href="#" class="mobile-nav-link">业务介绍</a>
      <a href="#" class="mobile-nav-link">可持续发展</a>
      <a href="#" class="mobile-nav-link">Just So Soul 研究院</a>
      <a href="#" class="mobile-nav-link">工作机会</a>
      <a href="#" class="mobile-nav-link">联系我们</a>
      <div class="mobile-language">
        <a href="#" class="lang">EN</a>
        <a href="#" class="lang active">中</a>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { Lock, Check, User } from '@element-plus/icons-vue'

const ruleFormRef = ref<FormInstance>()
const loading = ref(false)

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('Please input the age'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('Please input digits'))
    } else {
      if (value < 18) {
        callback(new Error('Age must be greater than 18'))
      } else {
        callback()
      }
    }
  }, 1000)
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass')
    }
    callback()
  }
}

const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  pass: '',
  checkPass: '',
  age: '',
})

const rules = reactive<FormRules<typeof ruleForm>>({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  age: [{ validator: checkAge, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  loading.value = true
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      setTimeout(() => {
        loading.value = false
      }, 1000)
    } else {
      console.log('error submit!')
      loading.value = false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
