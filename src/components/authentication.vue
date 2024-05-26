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
                >
                    <FormKitSchema :schema="registerForm"/>
                    <!--                    <FormKit-->
                    <!--                        type="checkbox"-->
                    <!--                        outerClass="field&#45;&#45;required m&#45;&#45;agreement"-->
                    <!--                        v-model="formData.agreement"-->
                    <!--                        validation="required"-->
                    <!--                        :label="' '"-->
                    <!--                    >-->
                    <!--                        <template #label>-->
                    <!--								<span class="field__label">-->
                    <!--									Я принимаю-->
                    <!--									<router-link :to="{name: 'page', params:{slug:'agreement'}}" target="_blank">-->
                    <!--										политику обработки персональных данных-->
                    <!--									</router-link>-->
                    <!--								</span>-->
                    <!--                        </template>-->
                    <!--                    </FormKit>-->
                </FormKit>
            </template>
        </div>
    </vue-final-modal>
</template>

<script>
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
    data(){
        return{
            currentTabsItem: 'login',
            tabsItems:[
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
            registerForm:[
                {
                    $formkit: 'text',
                    name: 'name',
                    label: 'ваше имя',
                    placeholder: 'Ваше Имя',
                    validation: 'required',
                    outerClass: 'field--required'
                },
                {
                    $formkit: 'text',
                    name: 'login',
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
            loginForm:[
                {
                    $formkit: 'text',
                    name: 'login',
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
    methods:{
        changeTab(tab){
            this.currentTabsItem = tab;
        },
        submitHandler(){

        },
        close(){
            this.$emit('hidden', false);
        }
    }
}
</script>
