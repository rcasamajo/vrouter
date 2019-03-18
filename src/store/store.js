import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        users: [
            {
                id: 1,
                name: "User_1",
                detail: "Info 1"
            },
            {
                id: 2,
                name: "User_2",
                detail: "Info 2"
            },
            {
                id: 3,
                name: "User_3",
                detail: "Info 3"
            }
        ]
    },

    getters: {
        userList: state => {
            return state.users;
        },

        user: (state) => (id) => {
            return state.users.find((user) => user.id == id);
        }
    },

    mutations: {
        userDetail(state, payload) {
            payload.user.detail = payload.value;
        },

        addUser(state, payload) {
            state.users.push(payload);
        }
    },

    actions: {
        setUserDetail(context, payload) {
            var user = context.getters.user(payload.id);

            context.commit('userDetail', {user: user, value: payload.value});
        },

        addUser(context, payload) {
            context.commit('addUser', payload);
        }
    }
});
