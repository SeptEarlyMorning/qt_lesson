<template>
  <ul class="header-nav-second">
    <li v-for="(secondNac, index) in message" :key="index">
      <a :href="secondNac.link">{{secondNac.title}}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "headerBarNav",
  props: ['message']
};
</script>

<style scoped>
.header-nav-second {
  display: none;
  position: absolute;
  top: 38px;
  right: -1px;
  border: 1px solid #e5e5e5;
  background: #fff;
  text-align: center;
  width: max-content;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-sizing: content-box;
  min-width: 100%;
  border-top: none;
}

.header-nav-second li a {
  line-height: 35px;
  display: block;
  padding: 0 8px;
}

.header-nav-second li a:hover {
    color: #fe8c00;
}
</style>