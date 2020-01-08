<template>
  <a href="#" class="citys-card">
    <img :src="computedImgUrl" alt />
    <img :src="headImgUrl" alt="" class="head-img">
    <h1>{{data.title}}</h1>
    <p>整套{{data.layoutRoom}}居室·可住{{data.maxGuestNumber}}人 | {{data.locationArea}}</p>
    <span class="now-price">
      <span class="unit">￥</span>
      <span class="num">{{data.price}}</span>
    </span>
  </a>
</template>

<script>
export default {
  name: "citysCard",
  props: ["data"],
  computed: {
    computedImgUrl() {
      const imgUrl = this.data.coverImage
        .replace(/\/w\.h/g, "")
        .replace(/(?<=\.(jpg|png|jpeg))[\s\S]*$/g, "@368w_208h_1e_1c");
      return imgUrl;
    },
    headImgUrl() {
      const imgUrl = this.data.hostAvatarUrl
        .replace(/\/w\.h/g, "")
        .replace(/(?<=\.(jpg|png|jpeg))[\s\S]*$/g, "@200w_200h_1e_1c");
      return imgUrl;
    }
  }
};
</script>
<style scoped>
.citys-card {
  display: inline-block;
  width: 33.3%;
  height: 334px;
  box-sizing: border-box;
  padding: 10px;
  background-color: #fff;
  transition: background-color 500ms;
  font-size: 0;
  color: #999;
  position: relative;
}
.citys-card:hover {
  background-color: #f4f4f4;
}

.citys-card img {
  border-radius: 5px;
  margin-bottom: 11px;
}

.citys-card .head-img {
  border: 2px solid #fff;
  height: 48px;
  width: 48px;
  position: absolute;
  bottom: 80px;
  right: 25px;
  border-radius: 50%;
}

.citys-card h1 {
  color: #222;
  font-size: 16px;
  margin-bottom: 8px;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 297px;
  margin: 7px 0;
}

.citys-card p {
  margin-bottom: 7px;
  font-size: 12px;
  line-height: 18px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.citys-card .now-price {
  font-size: 0px;
  color: #ff6600;
  margin-right: 6px;
  letter-spacing: -0.8px;
}

.citys-card .now-price .unit {
  font-size: 14px;
  color: #ff6600;
}

.citys-card .now-price .num {
  font-size: 22px;
  font-weight: 500;
}

.citys-card .location {
  font-size: 12px;
  float: right;
}
</style>