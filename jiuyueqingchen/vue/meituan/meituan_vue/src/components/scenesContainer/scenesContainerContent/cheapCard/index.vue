<template>
  <a href="#" class="quality-card">
    <img :src="computedImgUrl" alt />
    <h1>{{data.title}}</h1>
    <p>{{data.subTitle}}</p>
    <div class="tags-wrapper"></div>
    <span class="now-price">
      <span class="unit">￥</span>
      <span class="num">{{data.currentPrice}}</span>
    </span>
    <s class="old-price">{{data.oldPrice}}</s>
    <span class="location">{{data.bottomInfo}}</span>
  </a>
</template>

<script>
export default {
  name: "cheapCard",
  props: ["data"],
  computed: {
    computedImgUrl() {
      const imgUrl = this.data.imgUrl
        .replace(/\/w\.h/g, "")
        .replace(/(?<=\.(jpg|png|jpeg))[\s\S]*$/g, "@213w_120h_1e_1c");
      return imgUrl;
    }
  }
};
</script>

<style scoped>
.quality-card {
  display: inline-block;
  width: 213px;
  height:270px;
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
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.quality-card .tags-wrapper {
    font-size: 12px;
    color: #999;
    height: 20px;
    margin-bottom: 10px;
}
.quality-card .now-price {
  font-size: 0px;
  color: #be9e4d;
  margin-right: 6px;
  letter-spacing: -0.8px;
}

.quality-card .now-price .unit {
  font-size: 14px;
  color: #be9e4d;
}

.quality-card .now-price .num {
  font-size: 22px;
}

.quality-card .old-price {
  font-size: 12px;
}

.quality-card .location {
  font-size: 12px;
  float: right;
  margin-top: 10px;
}
</style>