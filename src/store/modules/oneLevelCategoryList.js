import types from '../type.js'
import $http from 'axios'

const state={
	oneLevelCategoryList:{}
}

const getters={
	oneLevelCategoryList(state){
		return state.oneLevelCategoryList;
	}
}

const actions={
	getOneLevelCategoryList({commit,state}){
		$http.get('/api/oneLevelCategoryList').then(resp=>{
			if(resp.data.errno==0){
				commit(types.GET_ONELEVELCATEGORYLIST,resp.data.data);
				console.log(resp.data.data)
			}
		})
	}
}

const mutations={
	[types.GET_ONELEVELCATEGORYLIST](state,data){
		state.oneLevelCategoryList=data
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}