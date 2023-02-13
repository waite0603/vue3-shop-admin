<template>
  <el-row class="min-h-screen">
    <el-col :lg="16" :md="12" class="bg-blue-600 flex items-center justify-center flex-col">
      <div>
        <h1 class="text-6xl text-white font-bold pr-5 pl-5">Welcome to</h1>
        <h3 class="text-2xl text-white font-bold mt-4 pr-5 pl-5">
          基于Vue3 + ElementPlus + Vite实战开发商城后台管理系统
        </h3>
        <div class="mt-7 text-right pr-5">
          <el-link type="primary" class="text-white" @click="JumpToGithub">Github</el-link>
        </div>
      </div>
    </el-col>
    <el-col :lg="8" :md="12" class="bg-light-50 flex items-center justify-center flex-col">
      <div class="text-2xl font-bold mb-2">欢迎回来</div>
      <div class="flex items-center justify-center mb-4 text-gray-500 space-x-2">
        <span class="h-[1px] w-16 bg-gray-200"></span>
        <span>账号密码登录</span>
        <span class="h-[1px] w-16 bg-gray-200"></span>
      </div>
      <el-form :model="form" class="w-2/4">
        <el-form-item>
          <el-input v-model="form.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="请输入密码" />
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