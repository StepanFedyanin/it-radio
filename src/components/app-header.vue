<template>
	<div class="app__content header">
		<div class="header__logo">
			<img src="@/assets/img/icon/logo.svg" alt="logo"/>
		</div>
		<ul class="header__menu">
			<li
				v-for="(item, key) in menu"
				:key="key"
				:class="['header__menu-item', item.class]"
				>
					<router-link
					v-if="!item.action"
						:to="{ name: item.name, params: item.params }"
						class="header__menu-link"
					>
						{{ item.title }}
					</router-link>
					<button v-else class="button" :class="item.icon">{{ item.title }}</button>
				</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'app-header',
	data(){
		return{
			menu:[
				{
					name: 'home',
					role: 'all',
					title: 'О нас'
				},
				{
					name: 'rubric',
					role: 'all',
					title: 'Рубрики'
				},
				{
					name: 'playlists',
					role: 'all',
					title: 'Плейлист'
				},
				{
					name: 'support',
					role: 'all',
					title: 'Поддержка'
				},
				{
					name: 'contacts',
					role: 'all',
					title: 'Контакты'
				},
				{
					name: 'home',
					role: 'all',
					action: 'login',
					icon: 'm--arrow',
					title: 'Войти'
				},
			]
		}
	}
}
</script>
