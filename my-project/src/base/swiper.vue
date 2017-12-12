<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in recommends" :key="item.index"><a :href="item.linkUrl"><img :src="item.picUrl" alt=""></a></div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import axios from "axios";
import { ERR_OK } from "api/config";
import { recommendCarousel } from "api/api";

import "common/js/swiper-3.2.7.min.js";

export default {
  data() {
    return {
      mySwiper: null
    };
  },
  created() {
    setTimeout(() => {
      this._getRecommend();
      this._swiper();
    }, 20);
  },
  methods: {
    _getRecommend() {
      var _this = this;
      axios
        .get(recommendCarousel, { id: 0 })
        .then(function(res) {
          if (res.data.code == ERR_OK) {
            _this.recommends = res.data.data.slider;
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    _swiper() {
      mySwiper = new Swiper(".swiper-container", {
        direction: "horizontal",
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false
      });
    }
  }
};
</script>
<style scoped>
@import "../common/css/swiper-3.2.7.min.css";
.swiper-containers {
  width: 100%;
  height: 6rem;
}
.swiper-slide{
  width: 100%;
  height: 100%;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
}
</style>