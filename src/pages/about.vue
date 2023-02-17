<template>
    <div class="container">
        <div class="row">
        <div class="col-12">
            <el-button type="primary" @click="set('test', 'test')">设置cookie</el-button>
            <el-button type="primary" @click="remove('test')">删除cookie</el-button>
            <el-button type="primary" @click="get('test')">读取cookie</el-button>
        </div>
        </div>
    </div>
</template>

<script setup>
    import { useCookies } from '@vueuse/integrations/useCookies'

    const cookies = useCookies()
    
    const set = (key, value) => {
        cookies.set(key, value)
    }

    const remove = (key) => {
        cookies.remove(key)
    }

    const get = (key) => {
        console.log(cookies.get(key))
    }
</script>
