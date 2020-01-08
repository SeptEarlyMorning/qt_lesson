<template>
  <a href="#" class="recommends-card">
    <img :src="computedImgUrl" alt />
    <h1>{{data.title}}</h1>
    <div class="star-five">
      <div
        class="star"
        v-for="(index) in 5"
        :key="index"
        :style="`background: linear-gradient(to right, #ff9900 ${score(index)} , #c3c3c3 ${score(index)})`"
      ></div>
    </div>
    <p>{{data.commentNum}}个评价</p>
    <span class="location">{{data.areaName}}</span>
    <span class="now-price">
      <span class="unit">￥</span>
      <span class="num">{{data.lowPrice}}</span>
      <span class="desc">起</span>
    </span>
  </a>
</template>

<script>
export default {
  name: "recommendsCard",
  props: ["data"],
  methods: {
    score(i) {
      let score = this.data.score - i;
      console.log(this.data.score, i, score);

      if (score >= 0) {
        return "100%";
      } else if (score > -1 && score < 0) {
        console.log((1 + score) * 100);

        return `${(1 + score) * 100}%`;
      } else {
        // return 0;
        return "0%";
      }
    }
  },
  computed: {
    computedImgUrl() {
      const imgUrl = this.data.imgUrl
        .replace(/\/w\.h/g, "")
        .replace(/(?<=\.(jpg|png|jpeg))[\s\S]*$/g, "@214w_120h_1e_1c");
      return imgUrl;
    }
  }
};
</script>
<style scoped>
.recommends-card {
  position: relative;
  display: inline-block;
  width: 20%;
  height: 246px;
  box-sizing: border-box;
  padding: 10px;
  background-color: #fff;
  transition: background-color 500ms;
  font-size: 0;
  color: #999;
  border-radius: 4px;
}
.recommends-card:hover {
  background-color: #f4f4f4;
}

.recommends-card img {
  border-radius: 5px;
  margin-bottom: 11px;
}

.recommends-card h1 {
  color: #222;
  font-size: 16px;
  margin-bottom: 8px;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.recommends-card p {
  float: left;
  position: relative;
  margin-bottom: 7px;
  font-size: 12px;
  line-height: 18px;
  bottom: 3px;
  left: 10px;
}

.recommends-card .now-price {
  position: absolute;
  bottom: 12px;
  left: 10px;
  font-size: 0px;
  color: #ff6600;
  margin-right: 6px;
  letter-spacing: -0.8px;
}

.recommends-card .now-price .unit {
  font-size: 14px;
  color: #ff6600;
  font-weight: 700;
}
.recommends-card .now-price .desc {
  font-size: 14px;
  color: #ff6600;
  font-weight: 700;
  margin-left: 4px;
}
.recommends-card .now-price .num {
  font-size: 22px;
}

.recommends-card .old-price {
  font-size: 12px;
}

.recommends-card .location {
  font-size: 12px;
  position: absolute;
  bottom: 42px;
  left: 10px;
}
.star-five {
  width: 84px;
  height: 24px;
  /* background-color: #666; */
  float: left;
}
.star {
  float: left;
  height: 100%;
  width: 12px;
  background: #c3c3c3;
  mask: url(../../../../assets/images/star.png) 0px 0/12px 12px no-repeat;
  margin: 0 2px;
}
</style>