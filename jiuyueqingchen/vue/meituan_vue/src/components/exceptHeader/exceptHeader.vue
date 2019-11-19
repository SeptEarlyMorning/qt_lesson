<template>
  <div class="exceptHeader">
      <banner-container />
  </div>
</template>

<script>
import bannerContainer from "../../components/banner/bannerContainer";

export default {
  name: "exceptHeader",
  components: {
    bannerContainer
  }
};
</script>

<style>
.exceptHeader {
  margin: 0 79.5px;
}
</style>