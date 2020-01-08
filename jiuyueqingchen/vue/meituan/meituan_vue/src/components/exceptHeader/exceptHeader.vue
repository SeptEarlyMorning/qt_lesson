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
    <div class="botton-nav">
      <div class="title">美团导航</div>
      <div class="botton-nav-content">
        <div class="botton-nav-classification">
          <h1 class="botton-nav-subtitle">热门城市</h1>
          <div class="botton-nav-sublist">
            <div class="botton-nav-sublist-content">
              <p class="botton-nav-list-item">
                <a href="#" title="苏州" target="_blank">苏州</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="#" title="温州" target="_blank">温州</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="#" title="南京" target="_blank">南京</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="#" title="厦门" target="_blank">厦门</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="#" title="上海" target="_blank">上海</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="#" title="济南" target="_blank">济南</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://hrb.meituan.com" title="哈尔滨" target="_blank">哈尔滨</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://ty.meituan.com" title="太原" target="_blank">太原</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://gz.meituan.com" title="广州" target="_blank">广州</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://wh.meituan.com" title="武汉" target="_blank">武汉</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://gy.meituan.com" title="贵阳" target="_blank">贵阳</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://hf.meituan.com" title="合肥" target="_blank">合肥</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://sz.meituan.com" title="深圳" target="_blank">深圳</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://zz.meituan.com" title="郑州" target="_blank">郑州</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://cq.meituan.com" title="重庆" target="_blank">重庆</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://xa.meituan.com" title="西安" target="_blank">西安</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://qd.meituan.com" title="青岛" target="_blank">青岛</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://sy.meituan.com" title="沈阳" target="_blank">沈阳</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://sjz.meituan.com" title="石家庄" target="_blank">石家庄</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://fz.meituan.com" title="福州" target="_blank">福州</a>
              </p>
            </div>
          </div>
        </div>
        <div class="botton-nav-classification">
          <dt class="botton-nav-subtitle">热门分类</dt>
          <div class="botton-nav-sublist">
            <div class="botton-nav-sublist-content">
              <p class="botton-nav-list-item">
                <a href="//hotel.meituan.com" title="酒店" target="_blank">
                  酒店
                  <span class="nav-promotion">HOT</span>
                </a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://nc.meituan.com/meishi/" title="美食" target="_blank">美食</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://nc.meituan.com/xiuxianyule/" title="休闲娱乐" target="_blank">休闲娱乐</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://nc.meituan.com/yundongjianshen/" title="运动健身" target="_blank">运动健身</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://nc.meituan.com/shenghuo/" title="生活服务" target="_blank">生活服务</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://nc.meituan.com/shangmenfuwu/" title="上门服务" target="_blank">上门服务</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://nc.meituan.com/wanggou/" title="购物" target="_blank">购物</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://nc.meituan.com/shishanggou/" title="时尚购" target="_blank">时尚购</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://nc.meituan.com/bendigouwu/" title="本地购物" target="_blank">本地购物</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://nc.meituan.com/jiehun/" title="结婚" target="_blank">结婚</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://nc.meituan.com/sheyingxiezhen/" title="摄影写真" target="_blank">摄影写真</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://nc.meituan.com/yanhui/" title="宴会" target="_blank">宴会</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://nc.meituan.com/jiankangliren/" title="丽人" target="_blank">丽人</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://nc.meituan.com/qinzi/" title="母婴亲子" target="_blank">母婴亲子</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://nc.meituan.com/xuexipeixun/" title="学习培训" target="_blank">学习培训</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://nc.meituan.com/jiazhuang/" title="家装" target="_blank">家装</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://nc.meituan.com/aiche/" title="汽车服务" target="_blank">汽车服务</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://nc.meituan.com/yiliao/" title="医疗" target="_blank">医疗</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://nc.meituan.com/chongwu/" title="宠物" target="_blank">宠物</a>
              </p>
            </div>
          </div>
        </div>
        <div class="botton-nav-classification">
          <dt class="botton-nav-subtitle">周边热门</dt>
          <div class="botton-nav-sublist">
            <div class="botton-nav-sublist-content none-line">
              <p class="botton-nav-list-item">
                <a href="//hotel.meituan.com" title="共青城酒店" target="_blank">共青城酒店</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://fengxin.meituan.com/meishi" title="奉新美食" target="_blank">奉新美食</a>
              </p>
              <p class="botton-nav-list-item">
                <a
                  href="https://fengxin.meituan.com/xiuxianyule"
                  title="奉新休闲娱乐"
                  target="_blank"
                >奉新休闲娱乐</a>
              </p>
              <p class="botton-nav-list-item">
                <a
                  href="https://gongqingcheng.meituan.com/yundongjianshen"
                  title="共青城运动健身"
                  target="_blank"
                >共青城运动健身</a>
              </p>
              <p class="botton-nav-list-item">
                <a
                  href="https://gongqingcheng.meituan.com/shenghuo"
                  title="共青城生活服务"
                  target="_blank"
                >共青城生活服务</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://fch.meituan.com/shangmenfuwu" title="丰城上门服务" target="_blank">丰城上门服务</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://fch.meituan.com/wanggou" title="丰城购物" target="_blank">丰城购物</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://fch.meituan.com/shishanggou" title="丰城时尚购" target="_blank">丰城时尚购</a>
              </p>
              <p class="botton-nav-list-item">
                <a
                  href="https://gongqingcheng.meituan.com/bendigouwu"
                  title="共青城本地购物"
                  target="_blank"
                >共青城本地购物</a>
              </p>
              <p class="botton-nav-list-item">
                <a
                  href="https://gongqingcheng.meituan.com/jiehun"
                  title="共青城结婚"
                  target="_blank"
                >共青城结婚</a>
              </p>
              <p class="botton-nav-list-item">
                <a
                  href="https://fch.meituan.com/sheyingxiezhen"
                  title="丰城摄影写真"
                  target="_blank"
                >丰城摄影写真</a>
              </p>
              <p class="botton-nav-list-item">
                <a
                  href="https://gongqingcheng.meituan.com/yanhui"
                  title="共青城宴会"
                  target="_blank"
                >共青城宴会</a>
              </p>
              <p class="botton-nav-list-item">
                <a
                  href="https://fengxin.meituan.com/jiankangliren"
                  title="奉新丽人"
                  target="_blank"
                >奉新丽人</a>
              </p>
              <p class="botton-nav-list-item">
                <a
                  href="https://gongqingcheng.meituan.com/qinzi"
                  title="共青城母婴亲子"
                  target="_blank"
                >共青城母婴亲子</a>
              </p>
              <p class="botton-nav-list-item">
                <a
                  href="https://fengxin.meituan.com/xuexipeixun"
                  title="奉新学习培训"
                  target="_blank"
                >奉新学习培训</a>
              </p>
              <p class="botton-nav-list-item">
                <a
                  href="https://gongqingcheng.meituan.com/jiazhuang"
                  title="共青城家装"
                  target="_blank"
                >共青城家装</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://fengxin.meituan.com/aiche" title="奉新汽车服务" target="_blank">奉新汽车服务</a>
              </p>
              <p class="botton-nav-list-item">
                <a href="https://fch.meituan.com/yiliao" title="丰城医疗" target="_blank">丰城医疗</a>
              </p>
              <p class="botton-nav-list-item">
                <a
                  href="https://gongqingcheng.meituan.com/chongwu"
                  title="共青城宠物"
                  target="_blank"
                >共青城宠物</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright clearfix">
      <div class="footer-copyright-left">
        <p>
          ©美团网团购 meituan.com
          <a href="http://www.beian.miit.gov.cn/" style="margin-left: 20px;">京ICP证070791号</a>
          <a
            href="http://www.beianbeian.com/beianxinxi/b00ef42627c62ae577c8e4a086b322a0.html"
          >京ICP备10211739号</a>
        </p>
        <p>
          <a
            href="https://portal-portm.meituan.com/webpc/protocolmanage/comment/license/tv"
            target="_blank"
          >广播电视节目制作经营许可证（京）字第03889号</a>
        </p>
        <p>
          <a
            href="https://portal-portm.meituan.com/webpc/protocolmanage/foodlicense"
            target="_blank"
          >食品经营许可证</a>
          <a
            href="https://portal-portm.meituan.com/webpc/protocolmanage/medicalcertificate"
            target="_blank"
          >互联网药品信息服务资格证</a>
        </p>
        <p>
          <a
            href="https://portal-portm.meituan.com/webpc/protocolmanage/medicalequipment"
            target="_blank"
          >医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号</a>
        </p>
      </div>
      <div class="footer-copyright-right">
        <a
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502025545"
          target="_blank"
        >京公网安备11010502025545号</a>
        <div class="footer-copyright-cert">
          <a
            class="bus-license"
            href="https://zzlz.gsxt.gov.cn/businessCheck/verifKey.do?showType=p&amp;serial=11000020190617184241000003572274-SAIC_SHOW_10002020190618102726868&amp;signData=MEQCIMo7nivRikGQc6WsX/jx0IcZ46irhkjszdhhg4kv17uBAiD78duadRu3XX5WyuE+duSrhPmdVUFgr7cN1iV/WSv4uw=="
            title="营业执照"
            target="_blank"
          >
            <p>北京三快科技有限公司</p>
          </a>
          <a
            class="sp-ft sp-ft--record"
            href="http://www.beianbeian.com/beianxinxi/b00ef42627c62ae577c8e4a086b322a0.html"
            title="备案信息"
            target="_blank"
          >备案信息</a>
          <a
            class="sp-ft sp-ft--knet"
            href="http://t.knet.cn/tsearch/detail?keyword=meituan.com"
            title="可信网站认证"
            target="_blank"
          >可信网站</a>
          <a
            class="sp-ft sp-ft--12315"
            href="http://www.bj315.org/xfwq/lstd/201209/t20120910_3344.shtml?dnrpluojqxbceiqq"
            title="12315消费争议"
            target="_blank"
          >12315消费争议</a>
        </div>
      </div>
    </div>
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

<style scoped>
.exceptHeader {
  margin: 0 79.5px;
}

.botton-nav {
  margin-top: 40px;
  border: 1px solid #e5e5e5;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #fff;
}

.botton-nav .title {
  color: #222;
  font-size: 16px;
  font-weight: 500;
  padding: 6px 0 0 20px;
  height: 44px;
  line-height: 44px;
}

.botton-nav-subtitle {
  color: #222;
  width: 100px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 0;
}

.botton-nav-sublist {
  width: 100%;
  padding-left: 100px;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  bottom: 24px;
  font-size: 12px;
}
.botton-nav-sublist-content {
  width: 100%;
  height: 100%;
  padding-right: 55px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
}
.none-line {
  border: none;
}

.botton-nav-sublist .botton-nav-list-item {
  display: inline-block;
  width: 80px;
  margin: 0 20px 18px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.botton-nav-sublist a {
  color: #666;
}

a:hover {
  color: #ff9900;
}

.footer-copyright {
  padding: 15px 0 30px 20px;
  line-height: 1.6;
  font-size: 12px;
  position: relative;
}

.footer-copyright-right {
  position: absolute;
  right: 0;
  top: 10px;
  height: 76px;
}
</style>