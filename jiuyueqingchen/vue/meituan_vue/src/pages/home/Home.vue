<template>
  <div class="home">
      <header-bar />
      <except-header />
  </div>
</template>

<script>
import headerBar from '../../components/header/headerBar';
import exceptHeader from '../../components/exceptHeader/exceptHeader';

export default {
  name: 'Home',
  components: {
      headerBar,
      exceptHeader
  }
}
</script>

<style>
.home {
  color: #ac8888;
}
</style>