<template>
  <div class="star-notes-index">
    <h1 @click="goBanner">探索 [星辰笔记]</h1>
  </div>
</template>

<script>
export default {
  name: 'StarNotes',
  methods: {
    goBanner() {
      this.$router.push({path: '/StarBanner'})
    }
  }
}
</script>

<style lang="less" scoped>
.star-notes-index{
  width: 100vw;
  height: 100vh;
  background: url('../assets/img/raw_1512446172.jpeg') center;
  h1{
    position: absolute;
    bottom: 3.92rem;
    left: 50%;
    transform: translateX(-50%);
    width: 5.41rem;
    height: 1.25rem;
    line-height: 1.25rem;
    opacity: 0.75;
    border-radius: .533rem;
    background-color: rgba(11, 29, 64, 1);
    font-size: 0.48rem;
    text-align: center;
    font-family: Microsoft Yahei;
  }
}
</style>