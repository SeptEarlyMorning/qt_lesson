<template>
  <div class="scenesContainerHeader">
    <h1 class="title">有格调</h1>
    <ul @mouseover="switchContent($event)">
      <li
        class="nav-item"
        :mark="index"
        v-for="(tab, index) in qualityAllDataTabs"
        :key="index"
        :class="active == index ? 'active' : ''"
      >{{tab.text}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "scenesContainerHeader",
  props: ["qualityAllDataTabs"],
  data() {
    return {
      active: 0
    };
  },
  methods: {
    switchContent(e) {
      this.active = e.path[0].attributes[1].value;
      this.$emit('currentTab', this.currentTab)
    },
  },
  computent: {
    currentTab() {
      return qualityAllDataTabs[active].tab;
    }
  }
};
</script>

<style scoped>
.scenesContainerHeader {
  background-color: rgb(190, 164, 116);
  background-image: linear-gradient(
    to right,
    rgb(194, 176, 142) 3%,
    rgb(190, 164, 116) 100%
  );
  border-radius: 5px 5px 0 0;
  height: 44px;
  color: #fff;
}

.scenesContainerHeader .title {
  line-height: 44px;
  float: left;
  margin: 0 10px 0 13px;
}

.scenesContainerHeader ul {
  height: 100%;
  display: inline-block;
}
.scenesContainerHeader .nav-item {
  position: relative;
  height: 100%;
  line-height: 44px;
  padding: 0 5px;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 14px;
  float: left;
}

.active::before {
  content: "";
  position: absolute;
  border: 5px solid #fff;
  border-color: transparent transparent #fff;
  border-bottom-width: 7px;
  display: block;
  width: 2px;
  height: 0;
  top: 32px;
  left: 0;
  right: 0;
  margin: auto;
}
</style>