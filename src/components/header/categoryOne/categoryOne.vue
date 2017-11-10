<template>
<swiper :options="swiperOption" ref="mySwiper" class='categoryOne'>
	 <swiper-slide>
	 	<div @click="checkes(0)"  v-bind:class="{item:0==number }">
	 		<router-link to="/">推荐</router-link>
	 	</div>
	 </swiper-slide>
	 <swiper-slide v-for='(v,k) in oneLevelCategoryList' :key='k'>
	 	<div @click="checkes(k+1)" v-bind:class="{item:(k+1)==number}">
	 		<router-link to="/bar">{{v.categoryName}}</router-link>
	 	</div>
	 </swiper-slide>
</swiper>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import { mapGetters } from 'vuex'

	export default {
	created(){
    	this.$store.dispatch('getOneLevelCategoryList');
  	},
	 name: 'carrousel',
	 computed: {
	    ...mapGetters([
	      'oneLevelCategoryList'
	    ])
	 },
	 data() {
	   return {
		    swiperOption: {
		       	notNextTick: true,
		        slidesPerView: 6,
			    paginationClickable: true,
			    spaceBetween: 0,
			    freeMode: true
		     },
			number:0
	   }
	 },
	 components: {
	 swiper,
	 swiperSlide
	 },
	 methods:{
	 	checkes(k){
	 		console.log(k)
	 		this.number= k; 
	 	}
	 }
	}
</script>

<style lang='less' scoped>
	.categoryOne{
		    position: fixed;
		    top: 42px;
		    left: 0;
		    width: 100%;
		    z-index: 10;
		    overflow: hidden;
		    background: #fff;
		    height: 45px;
		    box-shadow: 1px 1px 5px rgba(7,0,2,.2);
		    -webkit-box-shadow: 1px 1px 5px rgba(7,0,2,.2);
		    -moz-box-shadow: 1px 1px 5px rgba(7,0,2,.2);
		    .swiper-slide:first-child {
			    margin-left: 15px;
			}
			.swiper-slide div{
				    position: relative;
				    height: 45px;
				    line-height: 45px;
				    font-size: 15px;
				    float: left;
				    text-align: center;
				    width: 100%;
		    }
		    .swiper-slide .item .router-link-active{
		    	color: #7f4395;
			    font-size: 15px;
		    }
		    .swiper-slide div.item:after{
			    content: "";
			    position: absolute;
			    z-index: 10;
			    height: 2px;
			    width: 100%;
			    bottom: 0;
			    left: 0;
			    background: #7f4395;
			}
	}
</style>