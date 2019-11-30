<template>
  <header class="header_bar">
    <header-bar-top />
    <header-content />
  </header>
</template>

<script>
import headerBarTop from "./headerBarTop";
import headerContent from "./headerContent";

export default {
  name: "headerBar",
  components: {
    headerBarTop,
    headerContent
  }
};
</script>

<style>
.header_bar {
  font-size: 12px;
  color: #999999;
  background-color: #fff;
  box-shadow: 0 2px 27px 0 rgba(0,0,0,0.10);
}
a {
  color: #999999;
}
</style>