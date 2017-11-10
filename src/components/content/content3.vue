<template>
	<div>
	<div class="boxShadow" v-for="(v,k) in modules2">
		<a class="module_h3" href="">
			<span class="txt">{{v.moduleInfo.moduleTitle}}</span>
		</a>
		<a class="bigimg_box" href="">
			<img :src="v.moduleInfo.moduleImage" alt="">
			<div class="sup_box">
				<div class="sup_con">
					<div>{{v.moduleInfo.manufacturers}}</div>
					<div>{{v.moduleInfo.moduleBrand}}</div>
				</div>
			</div>
		</a>
		<div class="commodity_list">
			<a class="commodity_link" href="" v-for="(v,k) in v.moduleInfo.moduleItems">
				<img :src="v.image" alt="">
				<div class="tit inaline">{{v.ext.itemName}}</div>
				<div class="price">￥{{v.ext.itemPrice}}</div>
			</a>
		</div>
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
		      'modules2'
		    ])
	 	},
		data(){
			return {
				
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
	    .module_h3{
	    	height: 50px;
		    line-height: 50px;
		    display: block;
		    color: #333;
		    text-align: center;
		    .txt{
		    	font-size: 16px;
			    color: #333;
			    margin-right: 3px;
			    display: inline-block;
			    vertical-align: middle;
		    }

	    }
	    .bigimg_box{
		    display: block;
    		position: relative;	
    		.sup_box{
    			border: 3px solid #fff;
			    width: 55%;
			    position: absolute;
			    top: 50%;
			    left: 50%;
			    margin-left: -27.5%;
			    margin-top: -35px;
			    .sup_con{
			    	background: #fff;
				    margin: 1px;
				    padding: 5px;
				    overflow: hidden;
				    div{
				    	height: 30px;
					    line-height: 30px;
					    font-size: 16px;
					    color: #333;
					    overflow: hidden;
					    text-align: center;
				    }
			    }
    		}
		}
		.commodity_list{
				overflow: hidden;
			    text-align: left;
			    .commodity_link{
			    	padding-top: 15px;
				    width: 33.3%;
				    display: inline-block;
				    text-align: center;
					box-sizing: border-box;
					float: left;
				    .tit{
				    	padding: 0 5px;
					    height: 22px;
					    line-height: 22px;
				    }
				    .inaline{
				    	overflow: hidden;
					    white-space: nowrap;
					    text-overflow: ellipsis;
				    }
				    .price{
				    	    color: #f33;
						    height: 22px;
						    line-height: 22px;
				    }
			    }
		}
	}

</style>