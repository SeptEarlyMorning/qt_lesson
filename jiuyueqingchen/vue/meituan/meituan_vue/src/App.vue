<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import './assets/css/reset.css';
@import './assets/css/iconfont.css';
@import '//at.alicdn.com/t/font_1489605_f6atq7xdgka.css';
#app {
  height: 1400px;
  background-color: #f8f8f8;
  font-family: "-apple-system","BlinkMacSystemFont","Roboto","Helvetica Neue","MIcrosoft YaHei",sans-serif !important
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
