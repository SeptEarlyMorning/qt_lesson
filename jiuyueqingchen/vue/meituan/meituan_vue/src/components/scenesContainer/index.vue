<template>
  <div class="scenesContainer">
    <scenes-container-header
      :allDataTabs="tabs"
      :secensTitle="scenesContainerData.title"
      @currentTab="getCurrentTab"
    />
    <scenes-container-content
      v-if="currentQualitydata"
      :secensTitle="scenesContainerData.title"
      :currentQualitydata="currentQualitydata"
      :currentQualityTab="currentQualityTab.tab"
    />
  </div>
</template>

<script>
import scenesContainerHeader from "./scenesContainerHeader";
import scenesContainerContent from "./scenesContainerContent";

export default {
  name: "scenesContainer",
  components: {
    scenesContainerHeader,
    scenesContainerContent
  },
  props: ["scenesContainerData"],
  data() {
    return {
      qualityDatas: [],
      currentQualityTab: null,
      currentQualitydata: null
    };
  },
  created() {
    this.qualityDatas = [this.scenesContainerData.data];
    this.currentQualityTab =
      (this.scenesContainerData.data.tab &&
        this.scenesContainerData.data.tab.tab) ||
      this.tabs[0];

    if (this.scenesContainerData.title.title == 'citys') {
      this.getCurrentCity().then(reslust => {
        this.currentQualitydata = reslust;
      });
    } else if (this.scenesContainerData.title.title == 'recommends') {
      this.currentQualitydata = this.scenesContainerData.data;
    } else {
      console.log(this.scenesContainerData.data.data);
      
      this.currentQualitydata = this.scenesContainerData.data.data;
      console.log(this.currentQualitydata);
      
    }
  },
  // watch: {
  //   scenesContainerData: function(newVal, oldVal) {
  //     this.qualityDatas.push(newVal.data);
  //     this.currentQualityTab = newVal.data.tab.tab;
  //     this.currentQualitydata = newVal.data.data;
  //     console.log('newVal.data.data', newVal.data.data);

  //   }
  // },
  computed: {
    // currentQualityTab: {
    //   get() {
    //     return this.currentQualityData.tab;
    //   },
    //   set() {
    //     getCurrentTab
    //   }
    // }
    tabs() {
      let tabs = [];
      const title = this.scenesContainerData.title.title;
      if (title === "films") {
        tabs = [
          { tab: "hot", text: "正在热映" },
          { tab: "coming", text: "即将上映" }
        ];
      } else if (title === "citys") {
        tabs = this.scenesContainerData.data.cityList;
      } else if (title === "recommends") {
        tabs = [{ tab: "recommends", text: "为你甄选最适合的" }];
      } else {
        tabs = this.scenesContainerData.data.tabs;
      }
      return tabs;
    }
  },
  methods: {
    getCurrentTab(data) {
      if (this.scenesContainerData.title.title === "citys") {
        if (this.currentQualityTab.cityId != data.cityId) {
          this.currentQualityTab = data;
          // console.log(data);

          for (const qualityData of this.qualityDatas) {
            // console.log(qualityData.cityId ,data.cityId);
            
            if (qualityData.cityId === data.cityId) {
              this.currentQualitydata = qualityData.data;
              return;
            }
          }
          this.getCurrentCity(data.cityId);
        }
      } else {
        if (this.currentQualityTab.tab != data.tab) {
          this.currentQualityTab = data;
          for (const qualityData of this.qualityDatas) {
            if (
              qualityData.tab === undefined
                ? qualityData.data[data.tab].length != 0
                : qualityData.tab.tab === data
            ) {
              this.currentQualitydata = qualityData.data;
              return;
            }
          }
          this.getCurrentQualitydata(data.tab);
        }
      }
    },
    getCurrentQualitydata(data) {
      this.$axios({
        url: `http://localhost:3000/${this.scenesContainerData.title.title}/${data}`,
        method: "post"
      })
        .then(res => {
          this.qualityDatas.push(res.data);
          this.currentQualitydata = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    async getCurrentCity(data) {
      let currentCity = [];
      console.log(data);
      
      await this.$axios({
        url: `http://localhost:3000/${this.scenesContainerData.title.title}/${
          data == undefined
            ? this.scenesContainerData.data.cityList && this.scenesContainerData.data.cityList[0].cityId
            : data
        }`,
        method: "post"
      })
        .then(res => {
          // this.qualityDatas.push(res.data);
          // this.currentQualitydata = res.data.data;
          // console.log(res);
          // console.log(res.data);

          currentCity = res.data.productList;
          // console.log(currentCity);
        })
        .catch(err => {
          console.log(err);
        });
      // console.log(currentCity);
      // currentCity.length == 0
      let changeCity = {
        cityId: data == undefined
            ? this.scenesContainerData.data.cityList && this.scenesContainerData.data.cityList[0].cityId
            : data,
        data: currentCity
      };
      console.log(changeCity);

      this.qualityDatas.push(changeCity);

      return Promise.resolve(currentCity);
    }
  }
};
</script>

<style scoped>
.scenesContainer {
  margin-top: 41px;
  background-color: #fff;
}
</style>