<template>
  <div class="scenesContainer">
    <scenes-container-header />
    <quality-card />
  </div>
</template>

<script>
import qualityCard from "@/components/qualityCard";
import scenesContainerHeader from "./scenesContainerHeader";
export default {
  name: "scenesContainer",
  components: {
    qualityCard,
    scenesContainerHeader
  }
};
</script>

<style scoped>
.scenesContainer {
  margin-top: 41px;
  background-color: #fff;
}
</style>