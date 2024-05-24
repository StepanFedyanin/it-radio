import home from "@/views/home.vue";


const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
        meta: {
            title: '',
           isAuth: false
        },
        props: true
    },
    // {
    //     path: '/error500',
    //     name: 'page500',
    //     component: () => import('@/views/Page500.vue'),
    //     meta: {
    //         title: 'Ошибка 500',
    //         showSidebarAuth: true,
    //     },
    // }, {
    //     path: '/error404',
    //     name: 'error404',
    //     component: () => import('@/views/Page404.vue'),
    //     meta: {
    //         title: 'Ошибка 404',
    //         showSidebarAuth: true,
    //     },
    // }, {
    //     path: '/:catchAll(.*)*',
    //     name: 'page404',
    //     component: () => import('@/views/Page404.vue'),
    //     meta: {
    //         title: 'Ошибка 404',
    //         showSidebarAuth: true,
    //     },
    // },
];

export default routes
