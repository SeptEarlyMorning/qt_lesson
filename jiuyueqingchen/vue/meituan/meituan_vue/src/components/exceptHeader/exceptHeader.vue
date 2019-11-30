<template>
  <div class="exceptHeader">
    <banner-container />
    <scenes-container :qualityAllData="qualityAllData" />
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
      qualityAllData: {}
    }

  },
  created() {
    this.$axios({
      url: "http://localhost:3000/getJson",
      method: "post"
    })
      .then(res => {
        console.log(res);
        this.qualityAllData = res.data;
      })
      .catch(err => {
        console.log(err);
      });
    // this.$axios({
    //   url: "http://localhost:3001/test.json",
    //   method: "post"
    // })
    //   .then(res => {
    //     console.log(res);
    //     // this.qualityAllData = res.data;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // var urls = this.HOST +'/getJson';
    // this.$axios.get(urls, { params: { 'code': info}})
  }
};
</script>

<style>
.exceptHeader {
  margin: 0 79.5px;
}
</style>