<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ElButton type="primary">确定</ElButton>
  </div>
</template>

<script>
import AVue from '@/AVue.js'

export default {
  
  name: 'App',
  mounted() {
    this.$message('请确定支付，有风险');
    // const av = new AVue({
    //   methods: {
    //     say() {
    //       this.$alert();
    //     }
    //   }
    // });
    // av.say();
    console.log(this.$alert());
    
  },
  created() {
    // console.log('1');
    class SingleDog {
      show() {
        console.log('我是一个单例对象');
      }
      static getInstance() {
        if (!singleDog.instance) {
          singleDog.instance = new SingleDog();
        }
        return singleDog.instance;
      }
    }
    // 实例化两次
    const s1 = SingleDog.getInstance();
    const s2 = SingleDog.getInstance();
    console.log(s1 == s2);
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
