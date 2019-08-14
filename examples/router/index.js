import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            name: 'home',
            path: '/home',
            component: () => import('@/components/home')
        },
        {
            name: 'component',
            path: '/component',
            component: () => import('@/components/pages/index'),
            redirect: '/component/installation',
            children: [
                {
                    name: 'Installation',
                    path: '/component/installation',
                    component: () => import('@/components/pages/installation')
                },
                {
                    name: 'Layout',
                    path: '/component/layout',
                    component: () => import('@/components/pages/layout')
                },
                {
                    name: 'Color',
                    path: '/component/color',
                    component: () => import('@/components/pages/color')
                },
                {
                    name: 'Icon',
                    path: '/component/icon',
                    component: () => import('@/components/pages/icon')
                },
                {
                    name: 'Border',
                    path: '/component/border',
                    component: () => import('@/components/pages/border')
                },
                {
                    name: 'Button',
                    path: '/component/button',
                    component: () => import('@/components/pages/button')
                },
                {
                    name: 'Typography',
                    path: '/component/typography',
                    component: () => import('@/components/pages/typography')
                }
            ]
        }
    ]
})