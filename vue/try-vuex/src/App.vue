<template>
  <div id="app">
    {{count}}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  created() {
    // this.$store.state = {
    //   count: 2
    // }
    console.log('打印出 this.$store.getters.getStatePlusOne 的结果', this.$store.getters.getStatePlusOne);
    
  }
}
</script>

<style>

</style>
