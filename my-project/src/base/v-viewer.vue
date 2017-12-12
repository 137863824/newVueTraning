<template>
<div class="v-viewer">
    <viewer :images="images">
       <img v-for="src in images" :src="src.picUrl" :key="src.id">
    </viewer>
</div>
</template>
<script>
import axios from 'axios'
import {ERR_OK} from 'api/config'
import {recommendCarousel} from 'api/api'

export default {
  data(){
      return{
        // recommends:[],
        images:[]
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
            _this.images = res.data.data.slider
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