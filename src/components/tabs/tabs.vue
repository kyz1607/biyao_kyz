<template>
	<div class='gnnav'	v-show='bool1'>
		 	<router-link v-for="(v,k) in arr" class='tabs' :to="v.to" :key="k"><span class="m_a_p" :class='p+(k+1)'></span>{{v.title}}</router-link>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				arr:[
				{
					"title":"首页","to":"/"
				},
				{
					"title":"分类","to":"/bar"
				},
				{
					"title":"制定","to":"/bar"
				},
				{
					"title":"购物车","to":"/bar"
				},
				{
					"title":"我的必要","to":"/bar"
				}],
				p:'p'
			}
		},
		props:['bool1']
	}
</script>

<style lang='less' scoped>
	.gnnav{
		height: 50px;
	    width: 100%;
	    padding: 10px 0 0;
	    margin: 0 auto;
	    background-color: #fff;
	    border-bottom: solid 1px #ebebeb;
	    z-index: 19!important;
	    position: fixed!important;
	    top: 42px;
	    left: 0;
	    .tabs{
	    	display: block;
		    float: left;
		    width: 20%;
		    color: #666;
		    text-decoration: none;
		    text-align: center;
		    .m_a_p{
		    	    width: 22px;
				    height: 22px;
				    display: block;
				    margin: 0 auto 5px;
		    }
		    .p1{background: url(../../assets/b4.png) no-repeat;background-size: 100%;}
		    .p2{background: url(../../assets/b12.png) no-repeat;background-size: 100%;}
		    .p3{background: url(../../assets/b13.png) no-repeat;background-size: 100%;}
		    .p4{background: url(../../assets/b5.png) no-repeat;background-size: 100%;}
		    .p5{background: url(../../assets/b6.png) no-repeat;background-size: 100%;}
	    }
	}
</style>