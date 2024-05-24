

const helpers = {

}

export default {
    install (app) {
        app.helpers = helpers
        app.config.globalProperties.$helpers = helpers
    }
}
export {
    helpers
}
