<template>
	<div class='nav'>
		<search class='search_zindex' :bool="bool" @e-bool='getData'></search>
		<div class='header'>
			<div class='search' @click='searchShow'>
			<span class='search-icon'></span>
			<span class='search-txt' v-cloak>{{msg}}</span>
			</div>
			<span class='menu' @click='tabs_list'></span>
		</div>
		<categoryOne></categoryOne>
		<Tabs :bool1="bool1"></Tabs>
		
	</div>
</template>

<script>
	import search from './search/search.vue'
	import Tabs from '../tabs/tabs.vue';
	import categoryOne from './categoryOne/categoryOne.vue';
	export default {
		data:function(){
		    return {
		      msg:'请输入要搜索的商品',
		      bool:false,
		      bool1:false
		    }    
		},
		components:{
			search,
			Tabs,
			categoryOne
		},
		methods:{
			searchShow(){
				this.bool=!this.bool;
			},
			tabs_list(){
				this.bool1=!this.bool1;
			},
			getData(bool){
				this.bool=!bool;
			}
		}
	}
</script>

<style lang='less' scoped>
	[v-cloak]{display: none}
	.search_zindex{
		z-index: 21;
	}
	.nav{
		overflow: hidden;
		position: fixed;
		z-index: 1;
	}
	.header{
	font-size: 16px;
    line-height: 42px;
	width: 100%;
    min-width: 320px;
    height: 42px;
    background-color: #fff;
    color: #333;
    overflow: hidden;
    padding: 0;
    position: fixed!important;
    top: 0;
    left: 0;
    z-index: 20;
    -webkit-box-shadow: inherit;
    box-shadow: 1px 1px 5px rgba(7,0,2,.2);
    -webkit-box-shadow: 1px 1px 5px rgba(7,0,2,.2);
    -moz-box-shadow: 1px 1px 5px rgba(7,0,2,.2);
	    .search{
	    	position: relative;
		    z-index: 22;
		    width: 100%;
		    height: 42px;
		    text-align: left;
		    background-color: #fff;
		    .search-icon{
		    	    background: url(../../assets/search.png) no-repeat center;
				    position: absolute;
				    top: 50%;
				    margin-top: -15px;
				    left: 10px;
				    cursor: pointer;
				    width: 30px;
				    height: 30px;
				    background-size: 50%;
				    z-index: 11;
		    }
		    .search-txt{
		    	    position: absolute;
				    top: 50%;
				    margin-top: -15px;
				    left: 10px;
				    width: 82%;
				    height: 30px;
				    color: gray;
				    font-size: 15px;
				    background-color: #f2f2f2;
				    line-height: 30px;
				    z-index: 10;
				    text-indent: 30px;
				    border-radius: 4px;
		    }
	    }
	    .menu{
	    	    cursor: pointer;
			    width: 40px;
			    height: 40px;
			    position: absolute;
			    top: 0;
			    right: 7px;
			    background: url(../../assets/list.png) no-repeat center;
			    background-size: 64%;
			    text-align: center;
			    z-index: 23;
	    }
	}
</style>