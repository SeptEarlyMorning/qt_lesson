<template>
  <!-- 容器组件 -->
  <SubMenu>
    <template #title>{{data.title}}</template>
    <template v-for="child in data.children">
      <MenuItem :key="child.id" v-if="!child.children">{{child.title}}</MenuItem>
      <ReSubMenu v-else :data="child" :key="child.id"></ReSubMenu>
    </template>
  </SubMenu>
</template>

<script>
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";
export default {
  name: "ReSubMenu",
  props: ["data"],
  data() {
    return {};
  },
  components: {
    SubMenu,
    MenuItem
  }
};
</script>