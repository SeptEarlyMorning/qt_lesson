<template>
  <div class="banner-swiper">
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-slide" v-for="(slide,index) in swiperImages" :key="index">
        <a href="#">
          <img :src="slide" alt width="100%" />
        </a>
      </swiper-slide>
      <div class="swiper-button-prev swiper-button" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button" slot="button-next"></div>
      <!-- 分页器 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "bannerSwiper",
  props: ["swiperImages"],
  data() {
    return {
      swiperOption: {
        effect: "fade",
        width: 550,
        loop: true,
        pagination: {
          el: ".swiper-pagination", //分页器作用对象
          clickable: true //分页器小圆点是否可点击
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        autoplay: {
          delay: 4000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        }
      }
    };
  }
};
</script>

<style scoped>
.banner-swiper {
  width: 550px;
}
.banner-swiper:hover .swiper-button {
  opacity: 1;
}
.swiper-button {
  background: #333;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s;
}

.swiper-button::before {
  content: "";
  position: absolute;
  left: 6px;
  top: 9px;
  display: block;
  height: 0;
  width: 0;
  border: 9px solid;
  border-top-width: 11px;
  border-bottom-width: 11px;
  border-color: transparent #fff transparent transparent;
}

.swiper-button::after {
  content: "";
  position: absolute;
  left: 9px;
  top: 9px;
  display: inline-block;
  height: 0;
  width: 0;
  border: 9px solid;
  border-top-width: 11px;
  border-bottom-width: 11px;
  border-color: transparent #333 transparent transparent;
}

.swiper-button-next::after,
.swiper-button-next::before {
  transform: rotate(180deg);
}

.swiper-button-next::after {
  left: 13px;
}

.swiper-button-next::before {
  left: 16px;
}
</style>