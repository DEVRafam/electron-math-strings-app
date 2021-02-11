import Vue from "vue";
import Vuex from "vuex";
// load vuex modules
import compute_elements from "./compute_elements";
//
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        compute_elements
    }
});
