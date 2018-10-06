import Vue from 'vue-native-core';
import Vuex from 'vuex';
// import * as actions from './actions';
// import * as mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({

    state: {
        count: 0,
        token: null
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--,
        setToken: (state, value) => state.token = value,
    }
});

export default store;