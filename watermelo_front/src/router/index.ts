import * as VueRouter from 'vue-router'
import routes from './routes.ts'



const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes:routes
})

router.beforeEach((to, _from, next) => {
    try {
        document.title = to.meta.title as string
    } catch (e) {
        console.warn('load title warning!')
    }

    if (to.matched.some((r) => r.meta.requireAuth)) {
        //默认token存在
        const token = localStorage.getItem('token')
        if (!token && to.name !== 'login') {
            // 未登录且要跳转的页面不是登录页
            next({
                name: 'login', // 跳转到登录页
                query: {
                    redirect: to.fullPath,
                },
            })
        } else if (!token && to.name === 'login') {
            // 未登陆且要跳转的页面是登录页
            next() // 跳转
        } else if (token && to.name === 'login') {
            // 已登录且要跳转的页面是登录页
            next({
                name: 'home', // 跳转到home页
            })
        }

            // else if (token && (to.name !== "login" && to.name !== "Projects")) {
            //   // 已登判断权限？
            //   let flag = filterPermission(to.matched, role);
        // }
        else {
            next()
        }
    } else {
        next()
    }
})

export default router
