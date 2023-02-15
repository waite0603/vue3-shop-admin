<template>
  <el-row class="login-container">
    <el-col :lg="16" :md="12" class="left">
      <div>
        <h1 class="login-container-h1">Welcome to</h1>
        <h3 class="login-container-h3">
          基于Vue3 + ElementPlus + Vite实战开发商城后台管理系统
        </h3>
        <div class="login-container-github-text">
          <el-link type="primary" @click="JumpToGithub">
            <span>
              <i class="iconfont icon-icon_github mr-1"></i>Github
            </span>
          </el-link>
        </div>
      </div>
    </el-col>
    <el-col :lg="8" :md="12" class="right">
      <div class="welcome-title">欢迎回来</div>
      <div class="welcome-text">
        <span></span>账号密码登录<span></span>
      </div>
      <el-form :model="form" class="w-2/4">
        <el-form-item>
          <el-input v-model="form.username" placeholder="请输入用户名">
            <template #prefix>
              <el-icon>
                <User />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="请输入密码">
            <template #prefix>
              <el-icon>
                <Lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button round color="#2563eb " class="w-full" type="primary" @click="onSubmit">登 录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>


<script setup>
import { reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'

// do not use same name with ref
const form = reactive({
  username: "",
  password: ""
})

const onSubmit = () => {
  console.log('submit!')
}

const JumpToGithub = () => {
  window.open("https://github.com/waite0603/vue3-shop-admin");
};

</script>

<style scoped>
.login-container{
    @apply min-h-screen;
}
.login-container .left{
  @apply bg-blue-600 flex items-center justify-center flex-col;
}
.login-container .right{
  @apply bg-light-50 flex items-center justify-center flex-col
}
.left>div>.login-container-h1{
    @apply font-bold text-6xl text-light-50 m-4;
}
.left>div>.login-container-h3{
    @apply font-bold text-2xl text-light-50 m-4;
}
.left>div>.login-container-github-text{
  @apply mt-7 text-right pr-5;
}
.left>div>.login-container-github-text span{
  @apply text-white;
}

.right .welcome-title{
    @apply text-2xl font-bold mb-2 text-black;
}
.right .welcome-text{
    @apply flex items-center justify-center text-gray-400 mb-4;
}
.right .welcome-text span{
    @apply h-[1px] w-16 bg-gray-200;
}
</style>
