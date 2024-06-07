<template>
	<vue-final-modal
		v-model="show"
		class="modal__container"
		content-class="modal__block"
		content-transition="vfm-fade"
		overlay-transition="vfm-fade"
		:clickToClose="false"
		@click-outside="$emit('hideModal')"
	>
		<button
			class="button modal__close"
			@click="$emit('hideModal')"
		>
		</button>
		<div class="authentication">
			<div class="authentication__tabs tabs">
				<button
					v-for="item in tabsItems"
					:key="`tab-${item.name}`"
					class="tabs__item"
					:class="currentTabsItem === item.name && 'is-active'"
					@click.prevent="changeTab(item.name)"
				>
					{{ item.label }}
				</button>
			</div>
			<template v-if="currentTabsItem === 'login'">
				<FormKit
					v-model="formLogin"
					type="form"
					data-loading="showLoaderSending"
					form-class="$reset registration__form form"
					submit-label="Войти"
					:disabled="showLoaderSending"
					:loading="showLoaderSending ? true : undefined"
					:submit-attrs="{
                            inputClass: '$reset button m--white m--w-100',
                            wrapperClass: '$reset registration__form-submit form__submit',
                            outerClass: '$reset',
                        }"
					@submit="submitHandler"
					@click-outside="$emit('hideModal')"
				>
					<FormKitSchema :schema="loginForm"/>
				</FormKit>
			</template>
			<template v-else>
				<FormKit
					v-model="formRegistration"
					type="form"
					data-loading="showLoaderSending"
					form-class="$reset registration__form form"
					submit-label="Войти"
					:disabled="showLoaderSending"
					:loading="showLoaderSending ? true : undefined"
					:submit-attrs="{
                            inputClass: '$reset button m--white m--w-100',
                            wrapperClass: '$reset registration__form-submit form__submit',
                            outerClass: '$reset',
                        }"
					@submit="submitHandler"
				>
					<FormKitSchema :schema="registerForm"/>
				</FormKit>
			</template>
		</div>
	</vue-final-modal>
</template>

<script>
import {app} from "@/services";

export default {
	name: 'authentication',
	props: {
		showModal: {
			type: Boolean,
			default() {
				return false;
			}
		},
	},
	data() {
		return {
			currentTabsItem: 'login',
			tabsItems: [
				{
					label: 'Войти',
					name: 'login'
				},
				{
					label: 'Зарегистрироваться',
					name: 'register'
				},
			],
			formLogin: {},
			formRegistration: {},
			registerForm: [
				{
					$formkit: 'text',
					name: 'first_name',
					label: 'ваше имя',
					placeholder: 'Ваше Имя',
					validation: 'required',
					outerClass: 'field--required'
				},
				{
					$formkit: 'text',
					name: 'email',
					label: 'придумайте логин',
					placeholder: 'Придумайте логин',
					validation: 'required',
					outerClass: 'field--required'
				},
				{
					$formkit: 'password',
					name: 'password',
					label: 'придумайте пароль',
					placeholder: 'Придумайте пароль',
					validation: 'required',
					outerClass: 'field--required'
				}
			],
			loginForm: [
				{
					$formkit: 'text',
					name: 'email',
					label: 'логин',
					placeholder: 'Логин',
					validation: 'required',
					outerClass: 'field--required'
				},
				{
					$formkit: 'password',
					name: 'password',
					label: 'пароль',
					placeholder: 'Пароль',
					validation: 'required',
					outerClass: 'field--required'
				}
			],
			showLoaderSending: false,
		}
	},
	computed: {
		show() {
			return this.showModal;
		},
	},
	methods: {
		changeTab(tab) {
			this.currentTabsItem = tab;
		},
		submitHandler() {
			if (this.currentTabsItem === 'login') {
				app.loginUser(this.formLogin).then(res=>{
					this.$store.dispatch('setToken', res);
					app.user().then(user=>{
						this.$store.dispatch('setUser', user);
						this.next('profile');
						this.$emit('hideModal');
					}).catch(err=>{
						console.log(err)
					})
				}).catch(err=>{
					console.log(err)
				})
			} else {
				app.createUser(this.formRegistration).then(res=>{
					this.$store.dispatch('setToken', res);
					app.user().then(user=>{
						this.$store.dispatch('setUser', user);
						this.next('profile');
						this.$emit('hideModal');
					}).catch(err=>{
						console.log(err)
					})
				}).catch(err=>{
					console.log(err)
				})
			}
			
		},
		close() {
			this.$emit('hidden', false);
		},
		next(name){
			this.$router.push({name});
		}
	}
}
</script>
