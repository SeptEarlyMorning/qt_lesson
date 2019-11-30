<template>
    <div class="header-nav-second header-site-nav">
      <div class="second-nav hotel-tourism">
        <h1>{{message[0].title}}</h1>
        <ul>
          <li class="third-nav" v-for="(item, index) in message[0].thirdNavs" :key="index">
            <a :href="item.link">{{item.title}}</a>
          </li>
        </ul>
      </div>
      <div class="second-nav eating-food">
        <h1>{{message[1].title}}</h1>
        <ul>
          <li class="third-nav" v-for="(item, index) in message[1].thirdNavs" :key="index">
            <a :href="item.link">{{item.title}}</a>
          </li>
        </ul>
      </div>
      <div class="second-nav watch-movie">
        <h1>{{message[2].title}}</h1>
        <ul>
          <li class="third-nav" v-for="(item, index) in message[2].thirdNavs" :key="index">
            <a :href="item.link">{{item.title}}</a>
          </li>
        </ul>
      </div>
      <div class="second-nav mobile-app">
        <h1>{{message[3].title}}</h1>
        <ul>
          <li class="third-nav" v-for="(item, index) in message[3].thirdNavs" :key="index">
            <a :href="item.link"><img :src="item.img" :title="item.title" :alt="item.title" width="60px"/></a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: "headerBarNavThird",
  props: ["message"]
};
</script>

<style scoped>
.header-nav-second {
  display: none;
}
.header-site-nav {
  width: 1200px;
  position: absolute;
  top: 40px;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  padding: 30px 36px 36px 47px;
  border-top: none;
  background-color: #fff;
  right: -1px;
  z-index: 999;
}
h1 {
  font-size: 14px;
  color: #222;
  font-weight: 500;
  margin-bottom: 26px;
}
a:hover {
  color: #fe8c00;
}
.second-nav {
  text-align: center;
  margin-right: 47px;
  float: left;
}
.third-nav a {
  display: block;
  padding: 7px 0;
}
.third-nav {
  float: left;
}
.hotel-tourism {
  width: 234px;
}

.hotel-tourism .third-nav{
  width: 33%;
}

.eating-food {
  width: 156px;
}

.eating-food .third-nav {
  width: 50%;
}

.watch-movie {
  width: 90px;
}

.watch-movie .third-nav {
  width: 100%;
}

.mobile-app {
  float: right;
}

.mobile-app .third-nav {
  margin: 0 8px;
}
</style>