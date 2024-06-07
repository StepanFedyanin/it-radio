<template>
    <div class="app">
        <AppHeader :showAuthentication="showAuthentication" @shopAuthentication="changeShowAuthentication"/>
        <div class="app__block">
            <Page404 v-if="showErrorPage404"/>
            <Page500 v-if="showErrorPage500"/>
            <routerView v-else/>
        </div>
        <Player @shopAuthentication="changeShowAuthentication"/>
        <AppFooter/>
    </div>
    <Authentication :showModal="showAuthentication" @hideModal="changeShowAuthentication"/>
</template>

<script>
import Page404 from '@/views/Page404.vue';
import Page500 from '@/views/Page500.vue';
import AppHeader from "@/components/app-header.vue";
import AppFooter from "@/components/app-footer.vue";
import Authentication from "@/components/authentication.vue";
import Player from "@/components/player.vue";

export default {
    async preFetch({store, currentRoute, previousRoute, redirect, ssrContext, urlPath, publicPath}) {
    },
    components: {
        Player,
        Authentication,
        AppFooter,
        AppHeader,
        Page404,
        Page500,
    },
    data() {
        return {
            showAuthentication: false,
            showSidebarBlock: false,
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        showErrorPage404() {
            return false
            // return this.$store.state.showErrorPage?.response?.status === 404;
        },
        showErrorPage500() {
            return false
            // return this.$store.state.showErrorPage?.response?.status === 500;
        }
    },
    watch: {},
    created() {
    },
    mounted() {
    },
    methods: {
        changeShowAuthentication(value) {
            this.showAuthentication = value;
        }
    }
};
</script>
<style>
@import "swiper/swiper.css";
@import "assets/css/index.scss";
</style>
