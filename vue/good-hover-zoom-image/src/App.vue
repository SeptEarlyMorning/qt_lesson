<template>
  <div id="app">
    <hover-zoom
      bigSrc="https://img.alicdn.com/imgextra/i3/1714128138/O1CN01K14VAw29zFjiFDawl_!!1714128138.jpg"
      smallSrc="https://img.alicdn.com/imgextra/i3/1714128138/O1CN01K14VAw29zFjiFDawl_!!1714128138.jpg_430x430q90.jpg"
    ></hover-zoom>
  </div>
</template>

<script>
import HoverZoom from "./components/HoverZoom";
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld,
    HoverZoom
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
