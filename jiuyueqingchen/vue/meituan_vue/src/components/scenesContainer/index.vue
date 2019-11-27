<template>
  <div class="scenesContainer">
    <scenes-container-header />
    <scenes-container-content />
  </div>
</template>

<script>
import scenesContainerHeader from "./scenesContainerHeader";
import scenesContainerContent from "./scenesContainerContent";

export default {
  name: "scenesContainer",
  components: {
    scenesContainerHeader,
    scenesContainerContent,
  }
};
</script>

<style scoped>
.scenesContainer {
  margin-top: 41px;
  background-color: #fff;
}
</style>