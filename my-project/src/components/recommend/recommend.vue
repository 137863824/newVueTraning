<template>
  <div class="recommend">
    <slider></slider>
    <ul class="music_list_ul">
      <li v-for="item in musicList" :key="item.singerid">
        <img v-lazy="item.picurl" alt="">
        <h2 v-html="item.mvtitle"></h2>
        <p v-html="item.singername"></p>
      </li>
    </ul>
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
.music_list_ul{
  padding: 0 0.6rem;
  background-color: #000;
}
.music_list_ul li{
  position: relative;
  padding: 0.4rem 0 0.4rem 2.5rem;
}
.music_list_ul li img{
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 0.4rem;
  left: 0;
}
.music_list_ul li h2{
  font-size: 0.65rem;
  color: #fff;
}
.music_list_ul li p{
  font-size: 0.5rem;
  color: #efefef;
  margin-top: 0.1rem;
}
</style>