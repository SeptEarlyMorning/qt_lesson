<template>
  <div class="second-nav">
    <banner-classified-classification
      v-for="(secondClassification, index) in secondClassifications"
      :key="index"
      :secondClassification="secondClassification"
    />
  </div>
</template>

<script>
import bannerClassifiedClassification from "./bannerClassifiedClassification";
export default {
  name: "bannerClassification",
  props: ["secondClassifications"],
  components: {
    bannerClassifiedClassification
  }
};
</script>

<style scoped>
.second-nav {
  position: absolute;
  width: 400px;
  height: 416px;
  left: 230px;
  top: 26px;
  z-index: 999;
  background-color: #fff;
  color: #666;
  padding: 0 30px;
  box-sizing: border-box;
}
</style>