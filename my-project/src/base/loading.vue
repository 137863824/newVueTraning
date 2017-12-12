<template>
  <div class="loading">
    <img src="../common/image" alt="">
    <p>正在加载</p>
  </div>
</template>
<script>

import axios from 'axios'
import {ERR_OK} from 'api/config'
import Slider from 'base/slider'
import {musicList} from 'api/api'

export default {
  data(){
    return{
      musicList:[]
    }
  },
  created () {
    this._getMusicList()
  },
  components: {
    Slider
  },
  methods: {
    _getMusicList(){
      var _this = this
      axios.get(musicList).then(function(res){
        if(res.data.code == ERR_OK){
          _this.musicList = res.data.data.mvlist
        }
      })
    }
  }
}
</script>
<style scoped>
.loading img{
    width: 1.5rem;
    height: 1.5rem;
}
</style>