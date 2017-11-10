<template>
  <div id="app">
    <v-header></v-header>
    <swiper></swiper>
    <content1></content1>
    <content2></content2>
    <content3></content3>
    <bottom></bottom>
    <fooder></fooder>
  </div>
</template>

<script>
import Headers from './components/header/header.vue';
import swiper from './components/swiper/swiper.vue';
import bottom from './components/bottom/bottom.vue';
import content1 from './components/content/content1.vue';
import content2 from './components/content/content2.vue';
import content3 from './components/content/content3.vue';
import fooder from './components/fooder/fooder.vue';

export default {
  name: 'app',
  data:function(){
    return {
    }    
  },
  components:{
      'v-header':Headers,
      swiper,
      content1,
      content2,
      content3,
      bottom,
      fooder
  }
}
</script>

<style lang='less' scoped>
  #app{
    z-index: -1
  }
</style>
