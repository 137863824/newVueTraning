<template>
  <div class="recommend">
    <h1>热门歌单</h1>
    <div class="recommend-content">
      <div class="slide-wrapper"></div>
      <div class="recommend-list">
        <h1></h1>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import {ERR_OK} from 'api/config'
import {recommendCarousel} from 'api/recommend'


export default {
  created(){
    this._getRecommend()
  },
  methods:{
    _getRecommend(){
      console.log(recommendCarousel)
      axios.get(recommendCarousel,{code:'0'}).then(function(res){
        console.log(res)
      }).catch(function(err){
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>

</style>