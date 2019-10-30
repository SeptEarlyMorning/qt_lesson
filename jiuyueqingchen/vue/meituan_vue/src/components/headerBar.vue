<template>
  <header class="header_bar">
      <header-bar-top />
  </header>
</template>

<script>
import headerBarTop from './headerBarTop'
export default {
    name: 'headerBar',
    components: {
        headerBarTop
    }
}
</script>

<style>
.header_bar {
    font-size: 12px;
    color: #999999;
}
a {
    color: #999999;
}
</style>