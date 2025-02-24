import Vue from 'vue';
import Vuex from 'vuex';

import { account } from '../user/users'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        account
    }
})
