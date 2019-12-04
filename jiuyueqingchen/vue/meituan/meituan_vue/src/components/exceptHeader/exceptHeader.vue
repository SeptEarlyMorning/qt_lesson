<template>
  <div class="exceptHeader">
    <banner-container />
    <template v-for="(scenesContainerData, index) in scenesContainerDatas">
      <scenes-container
        v-if="scenesContainerData.data"
        :key="index"
        :scenesContainerData="scenesContainerData"
      />
    </template>
  </div>
</template>

<script>
import bannerContainer from "@/components/banner/bannerContainer";
import scenesContainer from "@/components/scenesContainer";

export default {
  name: "exceptHeader",
  components: {
    bannerContainer,
    scenesContainer
  },
  data() {
    return {
      scenesContainerDatas: [
        {
          title: {
            title: "quality",
            text: "有格调"
          },
          data: null
        },
        { title: { title: "cheap", text: "狠优惠" }, data: null },
        { title: { title: "films", text: "猫眼电影" }, data: null },
        { title: { title: "citys", text: "推荐民宿" }, data: null },
        { title: { title: "recommends", text: "猜你喜欢" }, data: null }
      ],
      scenesDatas: []
    };
  },
  created() {
    this.$axios({
      url: "http://localhost:3000/quality/all",
      method: "post"
    })
      .then(res => {
        console.log(res);
        this.scenesContainerDatas[0].data = res.data;
      })
      .catch(err => {
        console.log(err);
      });
    this.$axios({
      url: "http://localhost:3000/cheap/all",
      method: "post"
    })
      .then(res => {
        console.log(res);
        this.scenesContainerDatas[1].data = res.data;
      })
      .catch(err => {
        console.log(err);
      });
    this.$axios({
      url: "http://localhost:3000/films/hot",
      method: "post"
    })
      .then(res => {
        console.log(res);
        this.scenesContainerDatas[2].data = res.data;
      })
      .catch(err => {
        console.log(err);
      });
    this.$axios({
      url: "http://localhost:3000/citys/citys",
      method: "post"
    })
      .then(res => {
        console.log(res);
        this.scenesContainerDatas[3].data = res.data;
      })
      .catch(err => {
        console.log(err);
      });
    this.$axios({
      url: "http://localhost:3000/recommends/recommends",
      method: "post"
    })
      .then(res => {
        console.log(res);
        this.scenesContainerDatas[4].data = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
.exceptHeader {
  margin: 0 79.5px;
}
</style>