<template>
    <div class="app">
		<AppHeader/>
        <div class="app__block">
            <Page404 v-if="showErrorPage404" />
            <Page500 v-if="showErrorPage500" />
            <routerView v-else />
        </div>
    </div>
</template>

<script>
    import Page404 from '@/views/Page404.vue';
    import Page500 from '@/views/Page500.vue';
	import AppHeader from "@/components/app-header.vue";

    export default {
        async preFetch({ store, currentRoute, previousRoute, redirect, ssrContext, urlPath, publicPath }) {},
        components: {
			AppHeader,
            Page404,
            Page500,
        },
        data() {
            return {
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
        mounted() {},
        methods: {}
    };
</script>
<style>
    @import "assets/css/index.scss";
</style>
