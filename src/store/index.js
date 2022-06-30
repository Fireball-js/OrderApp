import { createStore } from 'vuex'
import axios from "axios";
// axios.defaults.baseURL = "/api";


export default createStore({
    state: {
        allGoodsData: []
    },
    getters: {
        allGoodsData(state) {
            return state.allGoodsData
        }
    },
    mutations: {
        ReqAllGoodsData(state, d) {
            state.allGoodsData = d
        }
    },
    actions: {
        reqAllGoodsData({ commit }, i) {
            axios.get("/api/allgoods_sidebar", {
                    params: { index: i },
                })
                .then((d) => {
                    commit("ReqAllGoodsData", d.data.goods)
                });
        }

    },
})