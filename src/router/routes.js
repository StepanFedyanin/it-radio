import home from "@/views/home.vue";
import rubric from "@/views/rubric.vue";
import playlists from "@/views/playlists.vue";
import support from "@/views/support.vue";
import contacts from "@/views/contacts.vue";
import podcasts from "@/views/podcasts.vue";
import about from "@/views/about.vue";
import profile from "@/views/profile.vue";


const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
        meta: {
            title: 'Главная',
           isAuth: false
        },
    },
    {
        path: '/about',
        name: 'about',
        component: about,
        meta: {
            title: 'О нас',
            isAuth: false
        },
    },
    {
        path: '/rubric',
        name: 'rubric',
        component: rubric,
        meta: {
            title: 'Рубрики',
            isAuth: false
        },
    },
    {
        path: '/playlists',
        name: 'playlists',
        component: playlists,
        meta: {
            title: 'Плейлисты',
            isAuth: false
        },
    },
    {
        path: '/podcasts',
        name: 'podcasts',
        component: podcasts,
        meta: {
            title: 'Подкасты',
            isAuth: false
        },
    },
    {
        path: '/support',
        name: 'support',
        component: support,
        meta: {
            title: 'Поддержка',
            isAuth: false
        },
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: contacts,
        meta: {
            title: 'Контакты',
            isAuth: false
        },
    },
    {
        path: '/profile',
        name: 'profile',
        component: profile,
        meta: {
            title: 'Личный кабинет',
            isAuth: false
        },
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
