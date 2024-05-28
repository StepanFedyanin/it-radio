<template>
    <div class="app__content contacts">
		<AppBreadcrumbs
			:breadcrumbs="[
                        { name: 'Главная', route: { name: 'home' } },
                        { name: 'Контакты', route: { name: 'contacts' } },
            ]"
		/>
		<h1 class="h2">Контакты</h1>
		<div class="contacts__content">
			<div class="contacts__info">
				<div class="text contacts__item">
					<span class="title">Телефон</span>
					+7 (900) 000-00-00
				</div>
				<div class="text contacts__item">
					<span class="title">Почта</span>
					it-radio@info.org
				</div>
				<div class="text contacts__item">
					<span class="title">Адрес</span>
					г. Челябинск, Адрес
				</div>
				<div class="text contacts__item">
					<span class="title">Соц. сети</span>
					<div class="contacts__social">
						<div class="contacts__social m--telegram"></div>
						<div class="contacts__social m--vk"></div>
					</div>
				</div>
			</div>
			<div class="contacts__map">
				<div class="contacts__map-frame" style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/56/chelyabinsk/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Челябинск</a><a href="https://yandex.ru/maps/geo/chelyabinsk/53159527/?ll=61.421984%2C55.159071&utm_medium=mapframe&utm_source=maps&z=14.04" style="color:#eee;font-size:12px;position:absolute;top:14px;">Челябинск — Яндекс Карты</a><iframe src="https://yandex.ru/map-widget/v1/?ll=61.421984%2C55.159071&mode=poi&poi%5Bpoint%5D=61.399655%2C55.160475&poi%5Buri%5D=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE1OTUyNxIg0KDQvtGB0YHQuNGPLCDQp9C10LvRj9Cx0LjQvdGB0LoiCg04nHVCFb2jXEI%2C&z=14.04" width="100%" height="100%" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>			</div>
			<FormKit
				v-model="formData"
				type="form"
				data-loading="showLoaderSending"
				form-class="$reset contacts__form form"
				submit-label="Отправить"
				:disabled="showLoaderSending"
				:loading="showLoaderSending ? true : undefined"
				:submit-attrs="{
                            inputClass: '$reset button m--white m--arrow m--w-100',
                            wrapperClass: '$reset registration__form-submit form__submit',
                            outerClass: '$reset',
                        }"
				@submit="submitHandler"
				@click-outside="$emit('hideModal')"
			>
				<div class="title">Напишите нам</div>
				<FormKitSchema :schema="schema"/>
			</FormKit>
		</div>
		<SupportBlock/>
	</div>
</template>

<script>
import AppBreadcrumbs from "@/components/app-breadcrumbs.vue";
import SupportBlock from "@/components/support-block.vue";

export default {
    name: 'contacts',
	components: {SupportBlock, AppBreadcrumbs},
	data(){
		return{
			formData: {},
			schema: [
				{
					$formkit: 'text',
					name: 'name',
					label: 'ФИО',
					placeholder: 'ФИО',
					validation: 'required',
					outerClass: 'field--required'
				},
				{
					$formkit: 'text',
					name: 'name',
					label: 'Название организации',
					placeholder: 'Название организации',
					validation: 'required',
					outerClass: 'field--required'
				},
				{
					$formkit: 'maska',
					name: 'phone',
					maska: { mask: '+7 (###) ###-##-##' },
					label: 'Контактный телефон',
					placeholder: '+7 (###) ###-##-##',
					validation: 'required',
					outerClass: 'field--required'
				},
				{
					$formkit: 'textarea',
					name: 'message',
					label: 'Сообщение',
					placeholder: 'Сообщение',
					validation: 'required',
					outerClass: 'field--required'
				}
			],
			showLoaderSending: false
		}
	},
	methods:{
		submitHandler(){
		
		}
	}
}
</script>
