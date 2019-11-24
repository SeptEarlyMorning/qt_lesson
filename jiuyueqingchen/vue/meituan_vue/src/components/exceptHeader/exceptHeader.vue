<template>
  <div class="exceptHeader">
    <banner-container />
    <scenes-container />
  </div>
</template>

<script>
import bannerContainer from "@/components/banner/bannerContainer";
import scenesContainer from "@/components/scenesContainer";

export default {
  name: "exceptHeader",
  components: {
    bannerContainer,
    scenesContainer
  }
};
</script>

<style>
.exceptHeader {
  margin: 0 79.5px;
}
</style>