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
      <el-form ref="formRef" :model="form" :rules="rules" class="w-2/4">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名">
            <template #prefix>
              <el-icon>
                <User />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" type="password" placeholder="请输入密码" show-password
            @keyup.enter.native="onSubmit">
            <template #prefix>
              <el-icon>
                <Lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button round color="#2563eb " class="w-full" type="primary" :loading="loading" @click="onSubmit" >登 录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
</el-row>
</template>


<script setup>
import { reactive, ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { toast } from '~/composables/util'
import { login, getinfo } from '~/api/manager'
import { useRouter } from 'vue-router'
import { setToken } from '~/composables/auth'

const router = useRouter();

// do not use same name with ref
const form = reactive({
  username: "",
  password: ""
});

const rules = {
  username: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    },
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    },
  ]
};

const formRef = ref(null);
const loading = ref(false);

const onSubmit = () => {
  formRef.value.validate((valid) => {
    if (!valid) {
      return false;
    }

    loading.value = true;
    login(form.username, form.password)
      .then(
        res => {
          // set token
          setToken(res.token);
          // prompt success
          toast('登录成功');

          getinfo().then(
            res2 => {
              // set user info
              console.log(res2);
            }
          );
          
          // jump to home page
          router.push('/');
        }
      )
      .finally(() => {
        loading.value = false;
      })
  })
}


const JumpToGithub = () => {
  window.open("https://github.com/waite0603/vue3-shop-admin");
};

</script>

<style scoped>
.login-container {
  @apply min-h-screen;
}

.login-container .left {
  @apply bg-blue-600 flex items-center justify-center flex-col;
}

.login-container .right {
  @apply bg-light-50 flex items-center justify-center flex-col
}

.left>div>.login-container-h1 {
  @apply font-bold text-6xl text-light-50 m-4;
}

.left>div>.login-container-h3 {
  @apply font-bold text-2xl text-light-50 m-4;
}

.left>div>.login-container-github-text {
  @apply mt-7 text-right pr-5;
}

.left>div>.login-container-github-text span {
  @apply text-white;
}

.right .welcome-title {
  @apply text-2xl font-bold mb-2 text-black;
}

.right .welcome-text {
  @apply flex items-center justify-center text-gray-400 mb-4;
}

.right .welcome-text span {
  @apply h-[1px] w-16 bg-gray-200;
}
</style>
