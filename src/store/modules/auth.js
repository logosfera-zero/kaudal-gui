import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const state = {
    userToken: null
};

const actions = {

    getTokenfromCredential({commit},loginData) {
        axios
            .post("http://localhost:3000/auth/login", {
                username: loginData.username,
                secreto: loginData.secreto
            } )
            .then( (response) => {
                if (response.status == 200) {
                    commit("saveNewToken",response.data.body.token);
                } else {
                    commit("saveNewToken",null);
                }
            })


    }



/*
    getAll({ commit }) {
        commit('getAllRequest');

        userService.getAll()
            .then(
                users => commit('getAllSuccess', users),
                error => commit('getAllFailure', error)
            );
    },

    delete({ commit }, id) {
        commit('deleteRequest', id);

        userService.delete(id)
            .then(
                user => commit('deleteSuccess', id),
                error => commit('deleteFailure', { id, error: error.toString() })
            );
    }*/
};

const mutations = {


    saveNewToken(state,newtoken) {
        state.userToken = newtoken;
    }


    /*
    getAllRequest(state) {
        state.all = { loading: true };
    },
    getAllSuccess(state, users) {
        state.all = { items: users };
    },
    getAllFailure(state, error) {
        state.all = { error };
    },
    deleteRequest(state, id) {
        // add 'deleting:true' property to user being deleted
        state.all.items = state.all.items.map(user =>
            user.id === id
                ? { ...user, deleting: true }
                : user
        )
    },
    deleteSuccess(state, id) {
        // remove deleted user from state
        state.all.items = state.all.items.filter(user => user.id !== id)
    },
    deleteFailure(state, { id, error }) {
        // remove 'deleting:true' property and add 'deleteError:[error]' property to user
        state.all.items = state.items.map(user => {
            if (user.id === id) {
                // make copy of user without 'deleting:true' property
                const { deleting, ...userCopy } = user;
                // return copy of user with 'deleteError:[error]' property
                return { ...userCopy, deleteError: error };
            }

            return user;
        })
    }*/
};


const getters = {
    getAuthToken(state) {
        return state.userToken;
    },

    isLoggedThisSession(state) {
        return !(state.userToken === null || state.userToken === "");
    }
};


export const auth = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};