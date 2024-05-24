import { createStore } from 'vuex'
import VuexPersist from 'vuex-persist';

const vuexPersist = new VuexPersist({
    key: 'tugan-v-cirk-ne-hodim',
    //storage: window.localStorage
});

// Vue.use(Vuex);

export default createStore({
    state () {
        return {
            token: null,
            refreshToken: null,
            user: null,
            regData: null,
            data: {},
            meta: {},
            metaScheme: {},
            loader: null,
            error: null,
            organization: {},
            info:{}
        }
    },
    plugins: [vuexPersist.plugin],
    mutations: {
        user(state, user) {
            state.user = user;
        },
        updateToken(state, tokens) {
            state.token = tokens.access;
            state.refreshToken = tokens.refresh;
        },
        removeToken(state) {
            state.token = null;
            state.refreshToken = null;
        },
        stepRegistration(state, step) {
            state.stepRegistration = step;
        },
        regData(state, data) {
            state.regData = data;
        },
        data(state, data, key) {
            state.data = data;
        },
        dataByKey(state, data) {
            state.data[data.key] = data.data;
        },
        metaScheme(state, meta) {
            state.metaScheme = meta;
        },
        meta(state, meta) {
            state.meta = meta;
        },
        counters(state, data) {
            state.counters = data;
        },
        updateError(state, error) {
            if (error !== '404') state.error = error;
            state.showErrorPage = error;
        },
        updatedOrganization(state, data) {
            state.organization = data;
        },
        setInfo(state, data){
            state.info = data;
        }
    },
    actions: {
        setToken(context, tokens) {
            context.commit('updateToken', tokens);
        },
        setUser(context, user) {
            context.commit('user', user);
        },
        deathUser(context) {
            context.commit('user', {});
            context.commit('regData', null);
            context.commit('removeToken');
        },
        setStepRegistration(context, step) {
            context.commit('stepRegistration', step);
        },
        setRegData(context, data) {
            context.commit('regData', data);
        },
        setMetaScheme(context, meta) {
            context.commit('metaScheme', meta);
        },
        setMeta(context, meta) {
            context.commit('meta', meta);
        },
        setCounters(context, data) {
            context.commit('counters', data);
        },
        fetchData(context, data) {
            context.commit('data', data);
        },
        fetchDataByKey(context, data) {
            context.commit('dataByKey', data);
        },
        showError(context, error) {
            if (error.response?.status !== 401) {
                context.commit('updateError', error);
            }
        },
        hideError(context) {
            context.commit('updateError', null);
        },
        showLoader(context, loader) {
            context.commit('loader', loader);
        },
        hideLoader(context) {
            context.commit('loader', null);
        },
        updatedOrganization(context, data){
            context.commit('updatedOrganization',data)
        },
        setInfoParams(context, data){
            context.commit('setInfo',data)
        }
    }
});
