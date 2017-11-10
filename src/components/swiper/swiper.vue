<template>
  <div class="slice">
    <swiper :options="swiperOption" ref="mySwiper" class="slider">
     <swiper-slide v-for='(v,k) in banners' :key='k'><img :src="v.image" alt="" :title="v.ext.title"></swiper-slide>
     <div class="swiper-pagination"  slot="pagination"></div>
<!--      <div class="swiper-button-prev" slot="button-prev"></div>
     <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
    <a class="article_box" href="http://news.biyao.com/m/article/c817497c120d48fb9b75f5f1d96edc4b.html">
      <div class="boxflex1">
        <img src="../../assets/bys.png" alt="">
        男士专场！五千件奖品18时限时秒杀
      </div>
      <div class="article_bg">
        <span></span>
      </div>
    </a>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import s1 from '../../assets/swiper/s1.jpg'
import s2 from '../../assets/swiper/s2.jpg'
import s3 from '../../assets/swiper/s3.jpg'
import s4 from '../../assets/swiper/s4.jpg'
import s5 from '../../assets/swiper/s5.jpg'
import s6 from '../../assets/swiper/s6.jpg'

import { mapGetters } from 'vuex'

export default {
  created(){
    this.$store.dispatch('getBanners');
  },
  name: 'carrousel',
  computed: {
    ...mapGetters([
      'banners'
    ])
  },
  data() {
   return {
     arr:[s1,s2,s3,s4,s5,s6],
     swiperOption: {
       notNextTick: true,
       autoplay: 5000,
       // direction : 'vertical',
       // effect:"coverflow",
       grabCursor : true,
       setWrapperSize :true,
       loop : true,
       loopAdditionalSlides : 1,
       // autoHeight: true,
       // paginationType:"bullets",
       pagination : '.swiper-pagination',
       // bulletActiveClass:'my-bullet-active',
       paginationClickable :true,
       // prevButton:'.swiper-button-prev',
       // nextButton:'.swiper-button-next',
       // scrollbar:'.swiper-scrollbar',
       mousewheelControl : true,
       observeParents:true,
     }
   }
 },
 components: {
   swiper,
   swiperSlide
 }
}
</script>

<style lang='less' scoped>
  .slider{
    width: 100%;
    z-index: 0;
  }
  .slice{
    width: 100%;
    margin-top:87px;
    z-index: 0;
    overflow: hidden;
  }
  .article_box {
    height: 42px;
    line-height: 48px;
    text-align: left;
    padding: 0 12px;
    background: #fff;
    width: 100%;
    display: -moz-box;
    display: -webkit-box;
    display: box;
    & .boxflex1{
      font-size: 15px;
      color: gray;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      -moz-box-flex: 1;
      -webkit-box-flex: 1;
      box-flex: 1;
      & img{
            display: inline-block;
            vertical-align: middle;
            margin-right: 12px;
            padding-right: 12px;
            border-right: 1px solid gray;
            width: 80px;
            margin-top: -2px;
      }
    }
    .article_bg{
      width: 30px;
      position: relative;
    }
  }
</style>