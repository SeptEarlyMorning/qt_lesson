<template>
  <div class="scenes-container-content">
    <quality-card v-for="data in qualityAllDataContent" :key="data.id" :data="data" />
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
  props: ["qualityAllDataContent"],
  data() {
    return {};
  }
};
</script>

<style>
.scenes-container-content {
  padding: 11px 10px 10px;
  font-size: 0;
}
</style>