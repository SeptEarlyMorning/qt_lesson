<template>
  <a href="#" class="quality-card">
    <img src="@/assets/images/d908da2425934fbe9db0baa6f4d6165c430593.jpg" alt />
    <h1>启达西饼生日蛋糕</h1>
    <p>蛋糕7选1，约6英寸， 方形</p>
    <span class="now-price">
      <span class="unit">￥</span>79
    </span>
    <s class="old-price">门市价￥118</s>
    <span class="location">象湖</span>
  </a>
</template>

<script>
import https from '@/api';

export default {
  name: "qualityCard"
};
</script>

<style scoped>
.quality-card {
  display: inline-block;
  width: 33.3%;
  height: 314px;
  box-sizing: border-box;
  padding: 10px;
  background-color: #fff;
  transition: background-color 500ms;
  font-size: 0;
  color: #999;
}
.quality-card:hover {
  background-color: #f4f4f4;
}

.quality-card img {
  border-radius: 5px;
  margin-bottom: 11px;
}

.quality-card h1 {
  color: #222;
  font-size: 16px;
  margin-bottom: 8px;
  line-height: 22px;
}

.quality-card p {
  margin-bottom: 7px;
  font-size: 12px;
  line-height: 18px;
}

.quality-card .now-price {
  font-size: 22px;
  color: #be9e4d;
  margin-right: 6px;
  letter-spacing: -0.8px;
}

.quality-card .now-price .unit {
  font-size: 14px;
  color: #be9e4d;
}


.quality-card .old-price {
    font-size: 12px;
}

.quality-card .location {
    font-size: 12px;
    float: right;
}
</style>