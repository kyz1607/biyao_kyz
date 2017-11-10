<template>
	<div class="backToTop" v-show='scrolled' @click="bottom">
		<div>
			<img src="../../assets/arror.png" alt="">
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				scrolled:false,
			}
		},
		mounted () {
			this.$nextTick(function () {
	  			window.addEventListener('scroll', this.handleScroll);
  			})
		},
		methods:{
			handleScroll () {
			    this.scrolled = window.scrollY > 250;
			},
			bottom(){
				 var gotoTop= function(){
			        var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
			        currentPosition -= 10;
			        if (currentPosition > 0) {
			            window.scrollTo(0, currentPosition); 
			        }
		      		else {
			            window.scrollTo(0, 0);
			            clearInterval(timer);
			            timer = null;
		          }
		        }
		        var timer=setInterval(gotoTop,1);
			}
		}
	}
</script>

<style lang='less' scoped>
	.backToTop{
		    position: fixed;
		    z-index: 999;
		    bottom: 64px;
		    right: 10px;
		    width: 40px;
		    height: 40px;
		    border-radius: 50%;
		    -webkit-border-radius: 50%;
		    background: rgba(255,255,255,.9);
		    box-shadow: 0 6px #dcc0de;
		    -webkit-box-shadow: 0 0 6px #dcc0de;
		    -webkit-transition-timing-function: linear;
		    transition-timing-function: linear;
		    -webkit-transition-duration: .5s;
		    -moz-transition-duration: .5s;
		    -ms-transition-duration: .5s;
		    transition-duration: .5s;
		    & div{
		    	position: relative;
			    width: 100%;
			    height: 100%;
			    img{
			    	position: absolute;
				    width: 18px;
				    height: 20px;
				    top: 50%;
				    left: 50%;
				    margin-top: -10px;
				    margin-left: -9px;
			    }
		    }
	}
</style>	