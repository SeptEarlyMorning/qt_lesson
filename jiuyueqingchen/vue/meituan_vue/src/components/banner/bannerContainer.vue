<template>
  <div>
    <banner-all-categories />
    <div></div>
    <div class="banner-center">
      <banner-swiper class="banner-image" :swiperImages="swiperImages" />
      <a class="banner-image" href="#">
        <img src="../../assets/images/e473bb428f070321269b23370ff02ba956209.jpg" alt width="150" />
      </a>
      <a class="banner-image" href="#">
        <img src="../../assets/images/8cce56c467a17e04f3094d1e455462a0132772.png" alt width="270" />
      </a>
      <a class="banner-image" href="#">
        <img src="../../assets/images/16442c19da1f1c4544f794e29d99c92051716.jpg" alt width="270" />
      </a>
      <a class="banner-image" href="#">
        <img src="../../assets/images/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt width="150" />
      </a>
    </div>
    <div class="banner-right">
      <div class="login-registered">
        <img src="../../assets/images/avatar.jpg" alt />
        <p>Hi！你好</p>
        <button class="button">注册</button>
        <button class="button">立即登录</button>
      </div>
      <div class="code-iphone">
        <img src="../../assets/images/code.png" alt width="75" />
        <h1>美团APP手机版</h1>
        <p><span>1元起</span>吃喝玩乐</p>
      </div>
    </div>
  </div>
</template>

<script>
import bannerAllCategories from "./bannerAllCategories";
import bannerSwiper from "./bannerSwiper";

export default {
  name: "bannerContainer",
  components: {
    bannerAllCategories,
    bannerSwiper
  },
  data() {
    return {
      swiperImages: [
        require("@/assets/images/daa73310c9e57454dc97f0146640fd9f69772.jpg"),
        require("@/assets/images/826a5ed09dab49af658c34624d75491861404.jpg"),
        require("@/assets/images/a97baf515235f4c5a2b1323a741e577185048.jpg"),
        require("@/assets/images/33ff80dc00f832d697f3e20fc030799560495.jpg"),
        require("@/assets/images/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png")
      ]
    };
  }
};
</script>

<style scoped>
.banner-center {
  float: left;
  margin-left: 10px;
  font-size: 0px;
  width: 720px;
  box-sizing: border-box;
}

.banner-image {
  float: left;
  margin: 10px 10px 0 0;
  transition: box-shadow 0.5s;
}
.banner-image:hover {
  box-shadow: 0 5px 16px 0 rgba(0, 0, 0, 0.15);
}

.banner-right {
  float: left;
  margin-top: 10px;
}

.login-registered {
  width: 230px;
  height: 240px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  padding-top: 30px;
  text-align: center;
  box-sizing: border-box;
}

.login-registered img {
  border-radius: 50%;
  width: 55px;
  box-sizing: border-box;
  border: 4px solid #e5e5e5;
}

.login-registered p {
  font-style: 16px;
  color: #222222;
  font-weight: 500;
  padding-top: 9px;
}

.button {
  width: 120px;
  height: 40px;
  line-height: 38px;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  margin: 12px 0 5px;
  border-radius: 40px;
  font-size: 14px;
  color: #333;
  box-sizing: border-box;
}

.code-iphone {
  width: 230px;
  height: 167px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  text-align: center;
  margin-top: 10px;
  padding-top: 20px;
}

.code-iphone h1 {
  margin-top: 15px;
  font-size: 16px;
  color: #222;
}
.code-iphone p {
  font-size: 12px;
  color: #3f3f3f;
  margin-top: 6px;
}

.code-iphone span {
  color: #ec5300;
  margin-right: 5px;
} 
</style>