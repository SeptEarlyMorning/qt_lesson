<template>
  <div class="third-nav">
    <div class="scend-title">
      <h1>
        <a :href="secondClassification.link">{{secondClassification.title}}</a>
      </h1>
      <a :href="secondClassification.link">
        更多
        <i class="arrow"></i>
      </a>
    </div>
    <div class="content">
      <p
        class="third-title"
        v-for="(thirdclassificaFtion, index) in secondClassification.thirdclassificaFtions"
        :key="index"
      >
        <a :href="thirdclassificaFtion.link">{{thirdclassificaFtion.title}}</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "bannerClassifiedClassification",
  props: ["secondClassification"]
};
</script>

<style scoped>
.third-nav {
  margin-top: 24px;
}

.third-nav h1 a {
  color: #222;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
}

.scend-title {
  position: relative;
  padding-bottom: 10px;
  border-bottom: 1px solid #e5e5e5;
}

.scend-title > a {
  position: absolute;
  top: 5px;
  right: 6px;
  font-size: 12px;
  color: #999;
}

.arrow {
  position: absolute;
  width: 4px;
  height: 4px;
  right: -6px;
  top: 4px;
  border-top: 1px solid #999;
  border-right: 1px solid #999;
  transform: rotate(45deg);
}
.content {
    overflow: hidden;
    margin-top: -2px;
}
.third-title {
    float: left;
    margin-top: 10px;
    margin-right: 16px;
}

.third-title a {
    font-size: 12px
}
</style>