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
            station: {
                id: 1
            }
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
    }
});
