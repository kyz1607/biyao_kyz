import types from '../type.js'
import $http from 'axios'

const state={
	modules:{},
	modules1:{},
	modules2:{}
}

const getters={
	modules(state){
		return state.modules
	},
	modules1(state){
		return state.modules1
	},
	modules2(state){
		return state.modules2
	}
}

const actions={
	getModules({commit,state}){
		$http.get('/api/modules').then(resp=>{
			if(resp.data.errno==0){
				commit(types.GET_MODULES,resp.data.data);
				commit(types.GET_MODULES1,resp.data.data);
				commit(types.GET_MODULES2,resp.data.data);
				console.log(resp.data.data)
			}
		})
	}
}

const mutations={
	[types.GET_MODULES](state,data){
		var mod=data[0];
		state.modules=mod.moduleInfo.moduleItems;
	},
	[types.GET_MODULES1](state,data){
		var mod=data[1]
		state.modules1=mod.moduleInfo;
	},
	[types.GET_MODULES2](state,data){
		state.modules2=data.slice(2);
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}