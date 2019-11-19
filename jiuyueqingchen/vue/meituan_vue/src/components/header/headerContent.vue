<template>
  <div class="header-Content">
    <div class="header-logo">
      <a :href="logo.link">
        <img :src="logo.img" :alt="logo.title" width="126px" />
      </a>
    </div>
    <div class="header-search">
      <div class="header-search-bar">
        <input type="text" placeholder="搜索商家或地点" @focus="showSuggest" @blur="noneSuggest" />
        <button>
          <svg
            t="1572456339810"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2846"
            width="23"
            height="23"
          >
            <path
              d="M428.032 747.52c-43.008 0-83.968-8.192-122.88-24.576-37.888-16.384-71.68-38.912-100.352-67.584-28.672-28.672-52.224-62.464-67.584-100.352-16.384-38.912-24.576-79.872-24.576-122.88s8.192-83.968 24.576-122.88c16.384-37.888 38.912-71.68 67.584-100.352 28.672-28.672 62.464-52.224 100.352-67.584 38.912-16.384 79.872-24.576 122.88-24.576s83.968 8.192 122.88 24.576c37.888 16.384 71.68 38.912 100.352 67.584 28.672 28.672 52.224 62.464 67.584 100.352 16.384 38.912 24.576 79.872 24.576 122.88s-8.192 83.968-24.576 122.88c-16.384 37.888-38.912 71.68-67.584 100.352-28.672 28.672-62.464 52.224-100.352 67.584C512 739.328 471.04 747.52 428.032 747.52z m0-551.936c-130.048 0-236.544 105.472-236.544 236.544S296.96 668.672 428.032 668.672 664.576 563.2 664.576 432.128 558.08 195.584 428.032 195.584z"
              fill="#222222"
              p-id="2847"
            />
            <path
              d="M871.424 908.288c-10.24 0-20.48-4.096-28.672-11.264L599.04 652.288c-15.36-15.36-15.36-40.96 0-56.32s40.96-15.36 56.32 0L900.096 839.68c15.36 15.36 15.36 40.96 0 56.32-8.192 8.192-18.432 12.288-28.672 12.288z"
              fill="#222222"
              p-id="2848"
            />
          </svg>
        </button>
      </div>
      <div class="header-search-suggest" :style="`display: ${display}`">
        <h1>热门搜索</h1>
        <div class="suggest-text">
          <template v-for="(item, index) in popularSearches">
            <p :key="index" v-if="index < 6">
              <a href="#">{{item.title}}</a>
            </p>
          </template>
        </div>
      </div>
      <div class="header-search-popular">
        <p v-for="(item, index) in popularSearches" :key="index">
          <a href="#">{{item.title}}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerContent",
  data() {
    return {
      display: "none",
      logo: {
        title: "美团",
        img: require("@/assets/images/logo.png"),
        link: "#"
      },
      popularSearches: [
        {
          title: "老三样",
          link: "#"
        },
        {
          title: "方糖KTV",
          link: "#"
        },
        {
          title: "滕王阁",
          link: "#"
        },
        {
          title: "奈雪の茶",
          link: "#"
        },
        {
          title: "城市便捷酒店",
          link: "#"
        },
        {
          title: "亚马逊环球美食百汇",
          link: "#"
        },
        {
          title: "南昌之星摩天轮",
          link: "#"
        }
      ]
    };
  },
  methods: {
    showSuggest() {
      this.display = "block";
    },
    noneSuggest() {
      this.display = "none";
    }
  }
};
</script>

<style scoped>
.header-Content {
  width: 1190px;
  margin: 0 auto;
  padding-bottom: 41px;
  position: relative;
}

.header-logo {
  padding: 28px 60px 40px 0;
  font-size: 16px;
  /* float: left; */
}

.header-search {
  display: inline-block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 28px;
}

.header-search a:hover {
  color: #fe8c00;
}

.header-search-bar {
  width: 550px;
  font-size: 0px;
  height: 40px;
}

.header-search-bar input {
  width: 85.45%;
  height: 100%;
  box-sizing: border-box;
  padding: 15px;
  border: 1px solid #e5e5e5;
  border-radius: 4px 0 0 4px;
  border-right: none;
}

.header-search-bar button {
  height: 100%;
  box-sizing: border-box;
  width: 14.55%;
  float: right;
  background-color: #ffc300;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  line-height: 100%;
}

.header-search-popular {
  width: 100%;
  padding: 10px 0 0 12px;
}

.header-search-popular p {
  display: inline-block;
  margin: 0 10px 3px 0;
}

.header-search-suggest {
  position: absolute;
  border: 1px solid #e5e5e5;
  z-index: 1;
  color: #999;
  width: 85.45%;
  padding: 10px;
  box-sizing: border-box;
  background-color: #fff;
  border-top: none;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 0 0 4px 4px;
}

.header-search-suggest h1 {
  padding-top: 2px;
  padding-bottom: 7px;
  font-size: 12px;
  color: #999;
  font-weight: 700;
}

.header-search-suggest p {
  display: inline-block;
  padding: 2px 5px 0 0;
  color: #000;
}

.header-search-suggest p a {
  color: #666;
}

.suggest-text {
  padding-top: 5px;
  margin-bottom: 11px;
}
</style>