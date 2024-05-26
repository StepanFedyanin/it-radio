import { boot } from 'quasar/wrappers'
import helpers from '@/utils/helpers'
import VueScrollmagic from 'scrollmagic'
import 'vue-final-modal/style.css'
import { VueFinalModal } from 'vue-final-modal'
import { plugin, defaultConfig } from '@formkit/vue'
import { ru } from '@formkit/i18n'

export default boot(async ({ app, router }) => {
    app.config.globalProperties.$router = router
    app.use(helpers);
    app.scrollMagic = VueScrollmagic;
    app.component('VueFinalModal', VueFinalModal);
    app.config.globalProperties.$scrollMagic = VueScrollmagic

    const confFormKit = {
        locales: { ru },
        locale: 'ru',
        config: {
            validationVisibility: 'submit',
            classes: {
                outer: '$reset field',
                wrapper: '$reset field__inner',
                label: '$reset field__label',
                help: '$reset field__help',
                inner: '$reset field__input',
                input: '$reset input',
                messages: '$reset field__comment',
                message: '$reset field__comment-item',
                legend: '$reset field__legend',
                fieldset: '$reset field__fieldset',
                options: '$reset field__options',
                option: '$reset field__option',
                decorator: '$reset field__decorator'
            },
        },
        messages: {
            ru: {
                // validation: {
                //     date_after({ name, args }) {
                //         if (args[1] === true) return `${name} должна быть в будущем.`;
                //         if (Array.isArray(args) && args.length) {
                //             return `${name} должна быть позже ${new Intl.DateTimeFormat(undefined, { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }).format(typeof args[0] === 'string' ? new Date(Date.parse(args[0])) : args[0]) }`;
                //         }
                //         return `${name} должна быть в будущем.`;
                //     },
                //     date_before({ name, args }) {
                //         if (Array.isArray(args) && args.length) {
                //             return `${name} должна быть раньше ${new Intl.DateTimeFormat(undefined, { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }).format(typeof args[0] === 'string' ? new Date(Date.parse(args[0])) : args[0]) }`;
                //         }
                //         return `${name} должна быть в прошлом.`;
                //     },
                // },
            }
        },
        // inputs: {
        //     datepicker: createInput(datePickerInput, {
        //         props: ['mode'],
        //     }),
        //     select: createInput(multiselectInput, {
        //         props: ['options', 'placeholder', 'mode', 'searchable'],
        //     }),
        //     multiselect: createInput(multiselectInput, {
        //         props: ['options', 'placeholder', 'mode', 'searchable'],
        //     }),
        //     maska: createInput(maskaInput, {
        //         props: ['maska', 'placeholder', 'disabled', 'readonly'],
        //     }),
        //     phoneWithCode: createInput(phoneWithCodeInput, {
        //         props: ['options', 'placeholder', 'mode', 'searchable', 'maska', 'disabled', 'readonly'],
        //     }),
        // },
    };
    app.use(plugin, defaultConfig(confFormKit));

})

