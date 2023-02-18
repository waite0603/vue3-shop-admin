// 处理权限相关
import router from '~/router'
import { getToken } from '~/composables/auth'
import { toast } from '~/composables/util'

// 全局前置守卫
router.beforeEach((to, from, next) => {
    // 如果有token，就放行
    const token = getToken();

    // 如果没有token，就跳转到登录页
    if (!token && to.path !== '/login') {
        toast("请先登录", "warning");
        return next ({ path: "/login" })
    };

    // 防止重复登录
    if (token && to.path === '/login') {
        toast("请先退出登录", "warning");

        return next ({ path: from.path })
    };

    next()
})