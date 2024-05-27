<template>
	<div class="header">
		<div class="app__content header__wrapper">
			<div class="header__logo" @click="next('home')">
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
					<button v-else class="button" :class="[item.icon, showAuthentication&&'m--active']" @click="handlerClick(item.action)">{{ item.title }}</button>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'app-header',
    props:{
        showAuthentication:{
            type: Boolean,
            default(){
                return false
            }
        }
    },
	data(){
		return{
			menu:[
				{
					name: 'about',
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
                    name: 'podcasts',
                    role: 'all',
                    title: 'Подкасты'
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
	},
    methods:{
        handlerClick(methods){
            if (methods==='login'){
                this.$emit('shopAuthentication', true)
            }
        },
        next(name){
            this.$router.push({name})
        }
    }
}
</script>
