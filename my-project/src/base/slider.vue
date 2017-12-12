<template>
    <Carousel v-model="caruselOptions.value" :autoplay="caruselOptions.autoplay" :autoplay-speed="caruselOptions.autoplaySpeed" :dots="caruselOptions.dots" :radius-dot="caruselOptions.radiusDot" :trigger="caruselOptions.trigger" :arrow="caruselOptions.arrow">
        <CarouselItem v-for="item in recommends" :key="item.id">
            <a :href="item.linkUrl">
                <div class="demo-carousel"><img :src="item.picUrl" :alt="item.id"></div>
            </a>
        </CarouselItem>
    </Carousel>
</template>
<script>
import axios from 'axios'
import {ERR_OK} from 'api/config'
import {recommendCarousel} from 'api/api'

export default {
  data(){
      return{
          caruselOptions:{
            value: 0,
            autoplay:true,
            autoplaySpeed:3000,
            dots: 'inside',
            radiusDot: true,
            trigger: 'click',
            arrow: 'never'
          },
          recommends: []
      }
  },
  created(){
      setTimeout(()=>{
        this._getRecommend()
      },20)
  },
  methods:{
    _getRecommend(){
        var _this = this
      axios.get(recommendCarousel,{id:0}).then(function(res){
        if(res.data.code == ERR_OK){
            _this.recommends = res.data.data.slider
        }
      }).catch(function(err){
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>
.demo-carousel{
    width: 100%;
    height: 6rem;
}
.demo-carousel img{
    width: 100%;
    height: 100%;
}
</style>