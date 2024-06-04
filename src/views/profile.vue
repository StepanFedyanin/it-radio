<template>
	<div class="app__content profile">
		<AppBreadcrumbs
			:breadcrumbs="[
                        { name: 'Главная', route: { name: 'home' } },
                        { name: 'Личный кабинет', route: { name: 'profile' } },
            ]"
		/>
		<h1 class="h2 profile__title">Имя фамилия</h1>
		<button class="button m--text-link">Редактировать профиль</button>
		<div class="profile__tabs tabs m--btns">
			<button
				v-for="item in tabsItems"
				:key="`tab-${item.name}`"
				class="button"
				:class="currentTabsItem === item.name && 'is-active'"
				@click.prevent="changeTab(item.name)"
			>
				{{ item.label }}
			</button>
		</div>
		<template v-if="currentTabsItem==='music'">
			<SongList/>
		</template>
	</div>
</template>

<script>
import AppBreadcrumbs from "@/components/app-breadcrumbs.vue";
import SongList from "@/components/song-list.vue";

export default {
	name: 'profile',
	components: {SongList, AppBreadcrumbs},
	data() {
		return {
			currentTabsItem: 'music',
			tabsItems: [
				{
					label: 'Музыка',
					name: 'music'
				},
				{
					label: 'Подкасты',
					name: 'podcasts'
				},
				{
					label: 'Плейлисты',
					name: 'playlists'
				},
			],
		}
	},
	watch: {
		'$route.hash': {
			immediate: true,
			handler(to) {
				if (to) {
					this.currentTabsItem = to?.replace('#', '') || 'music';
				} else {
					this.currentTabsItem = 'music';
				}
			},
		}
	},
	methods: {
		changeTab(tab) {
			this.currentTabsItem = tab;
			this.$router.push({name: this.$route.name, hash: `#${tab}`});
		}
	}
}
</script>
