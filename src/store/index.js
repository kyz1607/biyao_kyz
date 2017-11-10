import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import actions from './action'
import banners from './modules/banners'
import modules from './modules/modules'
import oneLevelCategoryList from './modules/oneLevelCategoryList'

Vue.use(Vuex);

export default new Vuex.Store({
	getters,
	actions,
	modules:{
		banners,
		modules,
		oneLevelCategoryList
	}
})