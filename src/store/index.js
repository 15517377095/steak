import Vue from 'vue'
import Vuex from 'vuex'
import type from './modules/type'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        type
    }
})