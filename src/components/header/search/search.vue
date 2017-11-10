<template>
	<div class='search-layer' v-show='bool'>
		<div class='search-hearder'>
			<div class='header-left'>
				<span class='search-icon'></span>
				<input type="search" v-model="input_txt" autocomplete="off" class="search-input" placeholder="请输入要搜索的商品">
			</div>
			<div class='header-right'>
				<span class='search-cancel' @click="send" v-cloak v-if='ok'>{{btn}}</span>
				<span class='search-cancel' @click="search" v-cloak v-else>{{btn}}</span>
			</div>
		</div>
		<div class="placeholder"></div>
		<div class='search-content' v-show="bools">
			<div class="search-history-wrap" v-show='none'>
				<span class="clear-btn" @click='none_btn'></span>
				<h3 class="search-hot">历史记录</h3>
				<ul>
					<li class='hot-label' v-for='(v,k) in arr_history' :key="k">{{v}}</li>
				</ul>
			</div>
			<div class="search-hot-wrap">
				<h3 class="search-hot">热门搜索</h3>
				<ul>
					<li class='hot-label' v-for='(v,k) in hotwords' :key="k" @click="hotSend(v,k)">{{v}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data:function(){
			return {
		      msg:'请输入要搜索的商品',
		      hotwords:["羽绒服","美妆","鞋靴","围巾手套","保温杯","睡衣","羽绒被","袜子","拉杆箱","外套","空气净化器","3C数码"],
		      arr_history:[],
		      bools:true,
		      btn:'取消',
		      input_txt:'',
		      ok:true,
		      none:false
		    }
		},
		props:['bool'],
		watch:{
			input_txt(v){
				if(v===''){
					this.bools=true;
					this.btn='取消';
					this.ok=true;
				}else{
					this.bools=false;
					this.btn='搜查';
					this.ok=false;
				}
			},
			arr_history(v){
				v.length!==0?this.none=true:this.none=false;
			}
		},
		methods:{
			send(){
				this.$emit('e-bool',this.bool)
			},
			hotSend(e,k){
				console.log(e,k);
			},
			search(){
				this.arr_history.push(this.input_txt)
			},
			none_btn(){
				this.none=false;
			}
		}
	}
</script>

<style lang="less" scoped>
	@media screen and (max-width:320px){ 
		.header-left{width: 86%;}
		.header-right{width: 12%;}
	}
	[v-cloak]{display: none}
	.search-layer{
		.placeholder {
		    width: 100%;
		    height: 45px;
		    margin-bottom: 3px;
		}
		.search-content{
			padding: 0 10px;
			.search-history-wrap{
				overflow: hidden;
    			position: relative;
			}
			.clear-btn {
			    position: absolute;
			    right: -5px;
			    top: 5px;
			    width: 30px;
			    height: 30px;
			    background: url(../../../assets/icon_delete.png) no-repeat center;
			    background-size: 60%;
			}
			.search-hot{
				padding: 10px 0 15px;
			    margin: 0;
			    font-size: 16px;
			    color: #ccb4d5;
			    text-align: left;
			}
			.hot-label{
				float: left;
			    margin-right: 10px;
			    margin-bottom: 15px;
			    padding: 4px 7px;
			    border: 1px solid #ccc;
			    border-radius: 5px;
			    min-height: 20px;
			    line-height: 20px;
			}
		}
		z-index: 21!important;
    	position: fixed!important;
	    left: 0;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    width: 100%;
	    height: 100%;
	    background-color: #f2f2f2;
	    overflow: hidden;
	    .search-hearder{
	    	    width: 100%;
			    height: 45px;
			    position: fixed;
			    top: 0;
			    left: 0;
			    z-index: 20;
			    background: #fff;
			    .header-left{
			    	    float: left;
					    width: 88%;
					    height: 100%;
					    position: relative;
					    .search-icon {
						    position: absolute;
						    top: 50%;
						    margin-top: -16px;
						    left: 10px;
						    width: 30px;
						    height: 30px;
						    background: url(../../../assets/search.png) no-repeat center;
						    background-size: 50%;
						}
						.search-input{
							    width: 95%;
							    height: 30px;
							    border: 0;
							    border-radius: 5px;
							    -webkit-appearance: none;
							    margin: 7px 0 7px 10px;
							    display: block;
							    outline: 0;
							    padding-left: 30px;
							    padding-right: 30px;
							    font-size: 15px;
							    color: #333;
							    background-color: #f2f2f2;
						}
			    }
			    .header-right {
				    float: right;
				    width: 10%;
				    height: 100%;
				    margin-right: 2%;
				    .search-cancel {
					    font-size: 16px;
					    display: block;
					    width: 100%;
					    height: 45px;
					    line-height: 45px;
					    color: #333;
					    text-align: center;
					}
				}
	    }
	}
</style>