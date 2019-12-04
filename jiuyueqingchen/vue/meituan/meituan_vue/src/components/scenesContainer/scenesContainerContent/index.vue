<template>
  <div class="scenes-container-content" v-if="currentQualitydata">
    <template v-if="secensTitle.title === 'quality'">
      <quality-card v-for="data in currentQualitydata" :key="data.id" :data="data" />
    </template>
    <template v-else-if="secensTitle.title === 'cheap'">
      <cheap-card v-for="data in currentQualitydata" :key="data.id" :data="data" />
    </template>
    <template v-else-if="secensTitle.title === 'films'">
      <swiper :options="swiperOption" class="swiper">
        <!-- <div
          v-for="data in currentQualitydata[currentQualityTab]"
          :key="data.id"
        >
        sdgasdf
        </div>-->
        <swiper-slide
          class="swiper-slide"
          v-for="(data, index) in currentQualitydata[currentQualityTab]"
          :key="index"
        >
          <films-card :data="data" />
        </swiper-slide>
        <div class="swiper-button-prev swiper-button" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button" slot="button-next"></div>
        <!-- 分页器 -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </template>
  </div>
</template>

<script>
import qualityCard from "./qualityCard";
import cheapCard from "./cheapCard";
import filmsCard from "./filmsCard";

export default {
  name: "scenesContainerContent",
  components: {
    qualityCard,
    cheapCard,
    filmsCard
  },
  props: ["secensTitle", "currentQualitydata", "currentQualityTab"],
  data() {
    return {
      swiperOption: {
        // effect: "fade",
        // width: "100",
        // loop: true,
        // centeredSlides: true,
        centeredSlidesBounds: true,
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 19,
        effect: 'slide',
        pagination: {
          el: ".swiper-pagination", //分页器作用对象
          clickable: false //分页器小圆点是否可点击
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        // autoplay: {
        //   delay: 4000,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: true
        // }
      }
    };
  }
};
</script>

<style>
.scenes-container-content {
  padding: 11px 10px 10px;
  font-size: 0;
  border: 1px solid #e5e5e5;
  border-top: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.swiper {
  margin-left: 12px;
  margin-right: 10px;
}
.swiper-slide {
  display: flex;
  /* font-size: 0 */
}
.swiper:hover .swiper-button {
  /* opacity: 1; */
}
.swiper-button {
  background: #333;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  opacity: 1;
  /* transition: opacity 0.3s; */
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