<template>
  <div class="scenes-container-content">
    <quality-card />
    <quality-card />
    <quality-card />
    <quality-card />
    <quality-card />
    <quality-card />
  </div>
</template>

<script>
import qualityCard from "./qualityCard";
import api from "@/api";

export default {
  name: "scenesContainerContent",
  components: {
    qualityCard
  },
  created() {
    this.$api.get(
      "",
      { theme: "quality", tab: "all", ci: 83, limit: 12 },
      r => {
        console.log(r);
      }
    );
  }
};
</script>

<style>
.scenes-container-content {
  padding: 11px 10px 10px;
  font-size: 0;
}
</style>