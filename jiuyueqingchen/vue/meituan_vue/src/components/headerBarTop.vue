<template>
  <div class="header_bar-top">
    <div class="header_bar-top-left">
      <i class="icon-header_location">
        <svg
          t="1571889314240"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="11171"
          width="12"
          height="12"
        >
          <path
            d="M512 1024c254.976-326.813538 393.846154-426.023385 393.846154-638.818462C905.846154 172.504615 729.521231 0 512 0S118.153846 172.504615 118.153846 385.181538C118.153846 598.016 254.542769 700.770462 512 1024z"
            fill="#999999"
            p-id="11172"
            data-spm-anchor-id="a313x.7781069.0.i14"
            class="selected"
          />
          <path
            d="M315.076923 408.024615a204.8 196.923077 90 1 0 393.846154 0 204.8 196.923077 90 1 0-393.846154 0Z"
            fill="#FFFFFF"
            p-id="11173"
          />
        </svg>
      </i>
      <span class="current-city font-sizes">南昌</span>
      <a class="change-city font-sizes" href="https://www.meituan.com/changecity/">切换城市</a>
      <div class="near-citys">
        <span class="font-sizes">[</span>
        <a class="city-guess font-sizes" href="https://fengxin.meituan.com">奉新</a>
        <a class="city-guess font-sizes" href="https://gongqingcheng.meituan.com">共青城</a>
        <a class="city-guess font-sizes" href="https://fch.meituan.com">丰城</a>
        <span class="font-sizes">]</span>
      </div>
      <div class="user-entry">
        <a
          class="log-in font-sizes"
          href="https://passport.meituan.com/account/unitivelogin?service=www&amp;continue=https%3A%2F%2Fwww.meituan.com%2Faccount%2Fsettoken%3Fcontinue%3Dhttps%253A%252F%252Fnc.meituan.com%252F"
        >立即登录</a>
        <a
          class="font-sizes"
          href="https://passport.meituan.com/account/unitivesignup?service=www&amp;continue=https%3A%2F%2Fwww.meituan.com%2Faccount%2Fsettoken%3Fcontinue%3Dhttps%253A%252F%252Fnc.meituan.com%252F"
        >注册</a>
      </div>
    </div>
    <nav class="header_bar-top-nav">
      <ul class="header-nav-first">
        <li
          class="first-level-title"
          v-for="(firstNav, index) in firstNavs"
          :key="index"
          :class="!firstNav.secondNavs ? '' : 'menu-has-children'"
        >
          <a :href="firstNav.link">{{firstNav.title}}</a>
          <div v-if="firstNav.secondNavs">
            <header-bar-nav :message="firstNav.secondNavs" v-if="!firstNav.secondNavs[0].thirdNavs" />
            <header-bar-nav-third :message="firstNav.secondNavs" v-else />
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import headerBarNav from "./headerBarNav";
import headerBarNavThird from './headerBarNavThird';

export default {
  name: "headerBarTop",
  data() {
    return {
      title: "123",
      firstNavs: [
        {
          title: "我的美团",
          link: "#",
          secondNavs: [
            {
              title: "我的订单",
              link: "#"
            },
            {
              title: "我的收藏",
              link: "#"
            },
            {
              title: "抵用券",
              link: "#"
            },
            {
              title: "账户设置",
              link: "#"
            }
          ]
        },
        {
          title: "手机APP",
          link: "#"
        },
        {
          title: "商家中心",
          link: "JavaScript:;",
          secondNavs: [
            {
              title: "登录商家中心",
              link: "#"
            },
            {
              title: "美团智能收银",
              link: "#"
            },
            {
              title: "我想合作",
              link: "#"
            },
            {
              title: "手机免费开店",
              link: "#"
            },
            {
              title: "餐饮代理商招募",
              link: "#"
            },
            {
              title: "商家申请开票",
              link: "#"
            },
            {
              title: "免费合作美团排队",
              link: "#"
            }
          ]
        },
        {
          title: "美团规则",
          link: "JavaScript:;",
          secondNavs: [
            {
              title: "规则中心",
              link: "#"
            },
            {
              title: "规则目录",
              link: "#"
            },
            {
              title: "规则评议院",
              link: "#"
            }
          ]
        },
        {
          title: "网站导航",
          link: "JavaScript:;",
          secondNavs: [
            {
              title: "酒店旅游",
              link: "JavaScript:;",
              thirdNavs: [
                {
                  title: "国际机票",
                  link: "#"
                },
                {
                  title: "火车票",
                  link: "#"
                },
                {
                  title: "榛果民宿",
                  link: "#"
                },
                {
                  title: "经济型酒店",
                  link: "#"
                },
                {
                  title: "主题酒店",
                  link: "#"
                },
                {
                  title: "商务酒店",
                  link: "#"
                },
                {
                  title: "公寓",
                  link: "#"
                },
                {
                  title: "豪华酒店",
                  link: "#"
                },
                {
                  title: "客栈",
                  link: "#"
                },
                {
                  title: "青年旅社",
                  link: "#"
                },
                {
                  title: "度假酒店",
                  link: "#"
                },
                {
                  title: "别墅",
                  link: "#"
                },
                {
                  title: "农家院",
                  link: "#"
                }
              ]
            },
            {
              title: "吃美食",
              link: "JavaScript:;",
              thirdNavs: [
                {
                  title: "烤鱼",
                  link: "#"
                },
                {
                  title: "特色小吃",
                  link: "#"
                },
                {
                  title: "烧烤",
                  link: "#"
                },
                {
                  title: "自助餐",
                  link: "#"
                },
                {
                  title: "火锅",
                  link: "#"
                },
                {
                  title: "代金券",
                  link: "#"
                }
              ]
            },
            {
              title: "看电影",
              link: "JavaScript:;",
              thirdNavs: [
                {
                  title: "热映电影",
                  link: "#"
                },
                {
                  title: "热门影院",
                  link: "#"
                },
                {
                  title: "热映电影口碑榜",
                  link: "#"
                },
                {
                  title: "最受期待电影",
                  link: "#"
                },
                {
                  title: "国内票房榜",
                  link: "#"
                },
                {
                  title: "北美票房榜",
                  link: "#"
                },
                {
                  title: "电影排行榜",
                  link: "#"
                }
              ]
            },
            {
              title: "手机应用",
              link: "JavaScript:;",
              thirdNavs: [
                {
                  title: "美团app",
                  img: require("@/assets/images/meituan.png"),
                  link: "#"
                },
                {
                  title: "外卖app",
                  img: require("@/assets/images/waimai.png"),
                  link: "#"
                },
                {
                  title: "榛果app",
                  img: require("@/assets/images/zhenguo.png"),
                  link: "#"
                },
                {
                  title: "点评app",
                  img: require("@/assets/images/dianping.png"),
                  link: "#"
                },
                {
                  title: "猫眼app",
                  img: require("@/assets/images/maoyan.png"),
                  link: "#"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  components: {
    headerBarNav,
    headerBarNavThird
  }
};
</script>

<style scoped>
.font-sizes {
  font-size: 12px;
}
.header_bar-top {
  height: 40px;
  background-color: #f8f8f8;
  padding: 0 77.5px 0;
}

.header_bar-top-left {
  font-size: 0;
  padding-top: 14px;
  display: inline-block;
}
.icon-header_location {
  float: left;
}
.current-city {
  color: #666666;
  font-size: 12px;
}

.change-city {
  color: #666666;
  border: 1px solid #e5e5e5;
  background-color: #f4f4f4;
  margin: 0 4px;
  padding: 0 2px;
  box-sizing: border-box;
  border-radius: 2px;
}

.near-citys {
  display: inline-block;
}

.city-guess {
  margin: 0 4px;
}

.user-entry {
  display: inline-block;
  margin-left: 15px;
}

.user-entry > a {
  margin-left: 10px;
}

.log-in {
  color: #fe8c00;
}

.header_bar-top-nav {
  float: right;
  height: 100%;
}
.header-nav-first {
  height: 100%;
}
.first-level-title {
  float: left;
  height: 40px;
  position: relative;
  padding: 12px 14px;
  box-sizing: border-box;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
}

/* .first-level-title > a {
  cursor: pointer;
} */

.first-level-title a:hover {
  color: #fe8c00;
}
.menu-has-children:hover {
  background-color: #fff;
  border-color: #e5e5e5;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
}
.first-level-title:hover .header-nav-second {
  display: block;
}
</style>
