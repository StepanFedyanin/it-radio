import { boot } from 'quasar/wrappers'
import helpers from '@/utils/helpers'
import VueScrollmagic from 'scrollmagic'
export default boot(async ({ app, router }) => {
    app.config.globalProperties.$router = router
    app.use(helpers);
    app.scrollMagic = VueScrollmagic
    app.config.globalProperties.$scrollMagic = VueScrollmagic
})

