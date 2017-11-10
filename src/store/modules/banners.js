import types from '../type.js'
import $http from 'axios'

const state={
	banners:{}
}

const getters={
	banners(state){
		return state.banners;
	}
}

const actions={
	getBanners({commit,state}){
		$http.get('/api/banners').then(resp=>{
			if(resp.data.errno==0){
				commit(types.GET_BANNERS,resp.data.data);
				console.log(resp.data.data)
			}
			
		})
	}
}

const mutations={
	[types.GET_BANNERS](state,data){
		state.banners=data
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}