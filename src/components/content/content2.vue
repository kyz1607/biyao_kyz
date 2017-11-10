<template>
	<div class="boxShadow">
		<h2 class="module_h2">{{modules1.moduleTitle}}</h2>
		<swiper :options="swiperOption" ref="mySwiper" class='module_show'>
			 <swiper-slide v-for='(v,k) in modules1.moduleItems' :key='k'>
			 	<a href="#"><img :src="v.image" alt=""></a>
			 </swiper-slide>
		</swiper>
	</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapGetters } from 'vuex'
import sift1 from '../../assets/sift/sift1.jpg'
import sift2 from '../../assets/sift/sift2.jpg'
import sift3 from '../../assets/sift/sift3.jpg'
import sift4 from '../../assets/sift/sift4.jpg'
import sift5 from '../../assets/sift/sift5.jpg'

	export default{
		data(){
			return {
				arr:[{'herf':'#','src':sift1},{'herf':'#','src':sift2},{'herf':'#','src':sift3},{'herf':'#','src':sift4},{'herf':'#','src':sift5}],
				swiperOption: {
			       	notNextTick: true,
			        slidesPerView: 1.2,
				    paginationClickable: true,
				    spaceBetween: 0,
				    freeMode: true
		     	}
			}
		},
		created(){
    		this.$store.dispatch('getModules');
  		},
		computed: {
		    ...mapGetters([
		      'modules1'
		    ])
	 	},
		components: {
		swiper,
		swiperSlide
		},
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
	    .module_h2{
	    	    height: 50px;
			    line-height: 50px;
			    font-size: 16px;
			    color: #333;
			    margin: 0;
			    padding: 0;
			    font-weight: 400;
			    text-align: center;
	    }
	    .module_show{
	    	z-index: 0;
	    	width: 97.5%;
		    padding-left: 2.5%;
		    overflow: hidden;
		    & a{
		    	float: left;
			    display: block;
			    margin-right: 10px;
		    }
	    }
	}
</style>