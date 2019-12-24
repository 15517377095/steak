import axios from 'axios'

const state = {
    types: []
};

const getters = {
    gameTypes:state => state.types
};

const actions = {
    async getTypes({ commit }){
        var types = await axios.get('/type/getAll');
        this.commit('setTypes', types.data);
    }
};

const mutations = {
    setTypes(state, types){
        state.types = types
    }
};

export default({
    state,
    getters,
    actions,
    mutations
})