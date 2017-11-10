<template>
	<div class="boxShadow">
		<div class="box">
				<a href="#" v-for="(v,k) in modules" :class="index+(k+1)"><img :src="v.image" alt=""></a>
				<!-- <a href="#" class="index2"><img src="https://bfs.biyao.com/group1/M00/21/8E/rBACYVoBthGAMUOLAABwKtQnYtk573.jpg" alt=""></a>
				<a href="#" class="index3"><img src="https://bfs.biyao.com/group1/M00/1F/D3/rBACVFoBiRaAcSaDAAB0U4OssqY506.jpg" alt=""></a>	 -->		
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default{
		created(){
    		this.$store.dispatch('getModules');
  		},
		computed: {
		    ...mapGetters([
		      'modules'
		    ])
	 	},
		data(){
			return {
				index:'index'
			}
		}
	}
</script>

<style lang='less' scoped>
	.boxShadow{
		box-shadow: 1px 1px 5px rgba(7,0,2,.2);
	    -webkit-box-shadow: 1px 1px 5px rgba(7,0,2,.2);
	    -moz-box-shadow: 1px 1px 5px rgba(7,0,2,.2);
	    background: #fff;
	    padding-bottom: 12px;
	    margin-top: 10px;
	    .box{
	    	width: 100%;
		    height: auto;
		    overflow: hidden;
		    position: relative;
		    clear: both;
		    text-align: left;
		    & a{
		    	display: block;
    			line-height: 100%;
		    }
		    .index1{
		    	width: 57.7%;
    			margin-right: 5px;
		    }
		    .index2{
		    	position: absolute;
			    top: 0;
			    right: 0;
			    width: 41%;
		    }
		    .index3{
		    	position: absolute;
			    bottom: 0;
			    right: 0;
			    width: 41%;
		    }
	    }
	}
</style>