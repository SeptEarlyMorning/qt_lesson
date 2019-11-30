<template>
  <div class="all-categories">
    <h1>全部分类</h1>
    <banner-first-lists />
  </div>
</template>

<script>
import bannerFirstLists from "./bannerFirstLists";
export default {
  name: "bannerAllCategories",
  components: {
    bannerFirstLists
  }
};
</script>

<style scoped>
.all-categories {
  background-color: #fff;
  width: 230px;
  height: 475px;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  float: left;
  margin-top: -50px;
}

.all-categories h1 {
  font-weight: 700;
  margin-left: 15px;
  color: #222;
  font-size: 16px;
  padding-top: 18px;
}

.swiper-slide {
  height: 400px;
  /* background: pink; */
  font-size: 50px;
  text-align: center;
  width: 500px;
}
</style>