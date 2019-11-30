<template>
  <div class="scenesContainer">
    <scenes-container-header
      :qualityAllDataTabs="qualityAllData.tabs"
      :qualityAllDataTab="qualityAllData.tab"
      @currentTab="getCurrentTab"
    />
    <scenes-container-content :qualityAllDataContent="qualityAllData.data" />
  </div>
</template>

<script>
import scenesContainerHeader from "./scenesContainerHeader";
import scenesContainerContent from "./scenesContainerContent";

export default {
  name: "scenesContainer",
  components: {
    scenesContainerHeader,
    scenesContainerContent
  },
  props: ["qualityAllData"],
  data() {
    return {
      qualityDatas: [qualityAllData],
      currentQualityTab: qualityAllData.tab.tab
    };
  },
  computent: {
    currentQualityData() {
      qualityDatas.forEach(data => {
        if (data.tab.tab === currentQualityTab) {
          return data.tabs;
        }
      });
    }
  },
  methods: {
    getCurrentTab(data) {
      this.currentQualityTab = data;
    }
  }
};
</script>

<style scoped>
.scenesContainer {
  margin-top: 41px;
  background-color: #fff;
}
</style>