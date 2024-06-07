<template>
	<div class="header">
		<div class="app__content header__wrapper">
			<div class="header__logo" @click="next('home')">
				<img src="@/assets/img/icon/logo.svg" alt="logo"/>
			</div>
			<ul class="header__menu" :class="showMenu&&'m--active'">
				<div class="header__burger m--active m--menu" @click="handlerShowMenu">
					<span></span>
				</div>
				<div class="header__logo m--menu" @click="next('home')">
					<img src="@/assets/img/icon/logo.svg" alt="logo"/>
				</div>
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
					<button v-else-if="item.title" class="button" :class="[item.icon, showAuthentication&&'m--active']" @click="handlerClick(item.action)">{{ item.title }}</button>
					<button v-else class="button button-violet" @click="handlerClick(item.action)">{{ user.first_name || user.email }}</button>
				</li>
			</ul>
			<div class="header__burger" @click="handlerShowMenu">
				<span></span>
			</div>
			<div v-if="showMenu" class="app__overlay" @click="handlerShowMenu"></div>
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
			menuList:[
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
					role: 'login',
					action: 'login',
					icon: 'm--arrow',
					title: 'Войти',
					class: 'header__btn'
				},
				{
					name: 'home',
					role: 'auth',
					action: 'profile',
					class: 'header__btn'
				},
			],
			showMenu: true,
		}
	},
	watch:{
		'$route':{
			handler(to){
				if (this.showMenu){
					this.showMenu = false;
				}
			}
		}
	},
	computed:{
		user() {
			return this.$store.state.user;
		},
		menu(){
			return this.menuList.filter(item=>{
				if (item.role==='all') return true
				if (item.role==='auth' && this.user?.id) return !!this.user?.id
				if (item.role==='login' && !this.user?.id) return !this.user?.id
				return  false
			})
		}
	},
    methods:{
        handlerClick(methods){
            if (methods==='login'){
                this.$emit('shopAuthentication', true)
            }
			if (methods==='profile'){
				this.next('profile')
			}
        },
        next(name){
            this.$router.push({name})
        },
		handlerShowMenu(){
			this.showMenu = !this.showMenu;
		}
    }
}
</script>
