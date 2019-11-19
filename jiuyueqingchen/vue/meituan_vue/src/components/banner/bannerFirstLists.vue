<template>
  <ul>
    <li v-for="(allCategorie, index) in allCategories" :key="index">
      <div class="nav">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="`#${allCategorie.icon}`" />
        </svg>
        <div class="title">
          <h1 v-for="(title, index_1) in allCategorie.titles" :key="index_1" :href="title.link">
            <a>{{title.title}}</a>
            <p v-if="index_1 < allCategorie.titles.length-1">/&nbsp;</p>
          </h1>
        </div>
        <i class="arrow"></i>
      </div>
      <banner-classification :secondClassifications="allCategorie.secondClassifications" />
    </li>
  </ul>
</template>

<script>
import bannerClassification from "./bannerClassification";

export default {
  name: "bannerFirstLists",
  data() {
    return {
      allCategories: [
        {
          titles: [
            {
              title: "美食",
              link: "#"
            }
          ],
          icon: "icon-meishi",
          secondClassifications: [
            {
              title: "美食",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "代金券",
                  link: "#"
                },
                {
                  title: "甜点饮品",
                  link: "#"
                },
                {
                  title: "火锅",
                  link: "#"
                },
                {
                  title: "自助餐",
                  link: "#"
                },
                {
                  title: "小吃快餐",
                  link: "#"
                },
                {
                  title: "日韩料理",
                  link: "#"
                },
                {
                  title: "西餐",
                  link: "#"
                },
                {
                  title: "聚餐宴请",
                  link: "#"
                },
                {
                  title: "烧烤烤肉",
                  link: "#"
                },
                {
                  title: "东北菜",
                  link: "#"
                },
                {
                  title: "川湘菜",
                  link: "#"
                },
                {
                  title: "江浙菜",
                  link: "#"
                },
                {
                  title: "香锅烤鱼",
                  link: "#"
                },
                {
                  title: "粤港菜",
                  link: "#"
                },
                {
                  title: "中式烧烤/烤串",
                  link: "#"
                },
                {
                  title: "西北菜",
                  link: "#"
                },
                {
                  title: "咖啡酒吧茶馆",
                  link: "#"
                },
                {
                  title: "云贵菜",
                  link: "#"
                },
                {
                  title: "东南亚菜",
                  link: "#"
                },
                {
                  title: "海鲜",
                  link: "#"
                },
                {
                  title: "素食",
                  link: "#"
                },
                {
                  title: "台湾/客家菜",
                  link: "#"
                },
                {
                  title: "创意菜",
                  link: "#"
                },
                {
                  title: "汤/粥/炖菜",
                  link: "#"
                },
                {
                  title: "蒙餐",
                  link: "#"
                },
                {
                  title: "新疆菜",
                  link: "#"
                },
                {
                  title: "其他美食",
                  link: "#"
                },
                {
                  title: "京菜鲁菜",
                  link: "#"
                }
              ]
            }
          ]
        },
        {
          titles: [
            {
              title: "外卖",
              link: "#"
            }
          ],
          icon: "icon-meituan",
          secondClassifications: [
            {
              title: "外卖",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "美团外卖",
                  link: "#"
                }
              ]
            }
          ]
        },
        {
          titles: [
            {
              title: "酒店",
              link: "#"
            }
          ],
          icon: "icon-jiudian",
          secondClassifications: [
            {
              title: "酒店星级",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "经济型",
                  link: "#"
                },
                {
                  title: "舒适/三星",
                  link: "#"
                },
                {
                  title: "高档/四星",
                  link: "#"
                },
                {
                  title: "豪华/五星",
                  link: "#"
                }
              ]
            }
          ]
        },
        {
          titles: [
            {
              title: "榛果民宿",
              link: "#"
            }
          ],
          icon: "icon-minsu_",
          secondClassifications: [
            {
              title: "热门城市",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "上海",
                  link: "#"
                },
                {
                  title: "成都",
                  link: "#"
                },
                {
                  title: "北京",
                  link: "#"
                },
                {
                  title: "重庆",
                  link: "#"
                },
                {
                  title: "南京",
                  link: "#"
                },
                {
                  title: "杭州",
                  link: "#"
                },
                {
                  title: "广州",
                  link: "#"
                },
                {
                  title: "西安",
                  link: "#"
                },
                {
                  title: "武汉",
                  link: "#"
                },
                {
                  title: "厦门",
                  link: "#"
                },
                {
                  title: "长沙",
                  link: "#"
                },
                {
                  title: "青岛",
                  link: "#"
                },
                {
                  title: "深圳",
                  link: "#"
                },
                {
                  title: "天津",
                  link: "#"
                },
                {
                  title: "苏州",
                  link: "#"
                }
              ]
            },
            {
              title: "热门房源",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "复式Loft",
                  link: "#"
                },
                {
                  title: "别墅",
                  link: "#"
                }
              ]
            }
          ]
        },
        {
          titles: [
            {
              title: "猫眼电影",
              link: "#"
            }
          ],
          icon: "icon-maoyan",
          secondClassifications: [
            {
              title: "热映电影",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "天气之子",
                  link: "#"
                },
                {
                  title: "少年的你",
                  link: "#"
                },
                {
                  title: "终结者：黑暗命运",
                  link: "#"
                },
                {
                  title: "受益人",
                  link: "#"
                },
                {
                  title: "萤火奇兵2：小虫不好惹",
                  link: "#"
                },
                {
                  title: "中国机长",
                  link: "#"
                },
                {
                  title: "我的拳王男友",
                  link: "#"
                },
                {
                  title: "沉睡魔咒2",
                  link: "#"
                },
                {
                  title: "催眠·裁决",
                  link: "#"
                },
                {
                  title: "为国而歌",
                  link: "#"
                }
              ]
            },
            {
              title: "热门影院",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "万达影城",
                  link: "#"
                },
                {
                  title: "金逸影城",
                  link: "#"
                },
                {
                  title: "星美国际影城",
                  link: "#"
                },
                {
                  title: "大地影院",
                  link: "#"
                },
                {
                  title: "17.5影城",
                  link: "#"
                },
                {
                  title: "恒大影城",
                  link: "#"
                },
                {
                  title: "华影国际影城",
                  link: "#"
                },
                {
                  title: "银兴电影城",
                  link: "#"
                },
                {
                  title: "永乐影城",
                  link: "#"
                },
                {
                  title: "博纳国际影城",
                  link: "#"
                }
              ]
            }
          ]
        },
        {
          titles: [
            {
              title: "机票",
              link: "#"
            },
            {
              title: "火车票",
              link: "#"
            }
          ],
          icon: "icon-huochepiaojipiao",
          secondClassifications: [
            {
              title: "机票",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "国内机票",
                  link: "#"
                },
                {
                  title: "国际/港澳台机票",
                  link: "#"
                }
              ]
            },
            {
              title: "火车票",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "火车票",
                  link: "#"
                }
              ]
            }
          ]
        },
        {
          titles: [
            {
              title: "休闲娱乐",
              link: "#"
            },
            {
              title: "KTV",
              link: "#"
            }
          ],
          icon: "icon-KTV",
          secondClassifications: [
            {
              title: "休闲娱乐",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "足疗按摩",
                  link: "#"
                },
                {
                  title: "洗浴/汗蒸",
                  link: "#"
                },
                {
                  title: "酒吧",
                  link: "#"
                },
                {
                  title: "密室逃脱",
                  link: "#"
                },
                {
                  title: "轰趴馆",
                  link: "#"
                },
                {
                  title: "茶馆",
                  link: "#"
                },
                {
                  title: "私人影院",
                  link: "#"
                },
                {
                  title: "DIY手工坊",
                  link: "#"
                },
                {
                  title: "采摘/农家乐",
                  link: "#"
                },
                {
                  title: "网吧网咖",
                  link: "#"
                },
                {
                  title: "游乐游艺",
                  link: "#"
                },
                {
                  title: "VR",
                  link: "#"
                },
                {
                  title: "桌面游戏",
                  link: "#"
                },
                {
                  title: "真人CS",
                  link: "#"
                },
                {
                  title: "棋牌室",
                  link: "#"
                },
                {
                  title: "其他玩乐",
                  link: "#"
                }
              ]
            },
            {
              title: "KTV",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "KTV",
                  link: "#"
                }
              ]
            }
          ]
        },
        {
          titles: [
            {
              title: "生活服务",
              link: "#"
            }
          ],
          icon: "icon-shenghuofuwu",
          secondClassifications: [
            {
              title: "生活服务",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "衣物/皮具洗护",
                  link: "#"
                },
                {
                  title: "家政",
                  link: "#"
                },
                {
                  title: "搬家运输",
                  link: "#"
                },
                {
                  title: "送水",
                  link: "#"
                },
                {
                  title: "充值缴费",
                  link: "#"
                },
                {
                  title: "服饰/鞋包养护",
                  link: "#"
                },
                {
                  title: "开锁换锁",
                  link: "#"
                },
                {
                  title: "居家维修",
                  link: "#"
                },
                {
                  title: "管道疏通",
                  link: "#"
                },
                {
                  title: "家电维修清洗",
                  link: "#"
                },
                {
                  title: "电脑维修",
                  link: "#"
                },
                {
                  title: "手机维修",
                  link: "#"
                },
                {
                  title: "证件照/肖像摄影",
                  link: "#"
                },
                {
                  title: "照片冲印/图文文印",
                  link: "#"
                },
                {
                  title: "商务服务/法律服务",
                  link: "#"
                },
                {
                  title: "文化传媒机构",
                  link: "#"
                },
                {
                  title: "成人用品/情趣用品",
                  link: "#"
                }
              ]
            }
          ]
        },
        {
          titles: [
            {
              title: "丽人",
              link: "#"
            },
            {
              title: "美发",
              link: "#"
            },
            {
              title: "医学美容",
              link: "#"
            }
          ],
          icon: "icon-liren",
          secondClassifications: [
            {
              title: "丽人",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "美发",
                  link: "#"
                },
                {
                  title: "美甲美睫",
                  link: "#"
                },
                {
                  title: "美容美体",
                  link: "#"
                },
                {
                  title: "医学美容",
                  link: "#"
                },
                {
                  title: "瑜伽舞蹈",
                  link: "#"
                },
                {
                  title: "瘦身纤体",
                  link: "#"
                },
                {
                  title: "韩式定妆",
                  link: "#"
                },
                {
                  title: "祛痘",
                  link: "#"
                },
                {
                  title: "纹身",
                  link: "#"
                },
                {
                  title: "化妆品",
                  link: "#"
                },
                {
                  title: "养发",
                  link: "#"
                }
              ]
            }
          ]
        },
        {
          titles: [
            {
              title: "结婚",
              link: "#"
            },
            {
              title: "婚纱摄影",
              link: "#"
            },
            {
              title: "婚宴",
              link: "#"
            }
          ],
          icon: "icon-zhuanshi",
          secondClassifications: [
            {
              title: "结婚",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "婚纱摄影",
                  link: "#"
                },
                {
                  title: "旅拍",
                  link: "#"
                },
                {
                  title: "个性写真",
                  link: "#"
                },
                {
                  title: "婚宴",
                  link: "#"
                },
                {
                  title: "婚庆公司",
                  link: "#"
                },
                {
                  title: "婚纱礼服",
                  link: "#"
                },
                {
                  title: "西服定制",
                  link: "#"
                },
                {
                  title: "婚戒首饰",
                  link: "#"
                },
                {
                  title: "婚车租赁",
                  link: "#"
                },
                {
                  title: "司仪主持",
                  link: "#"
                },
                {
                  title: "彩妆造型",
                  link: "#"
                },
                {
                  title: "婚礼跟拍",
                  link: "#"
                },
                {
                  title: "婚礼小礼品",
                  link: "#"
                },
                {
                  title: "更多婚礼服务",
                  link: "#"
                }
              ]
            }
          ]
        },
        {
          titles: [
            {
              title: "亲子",
              link: "#"
            },
            {
              title: "儿童乐园",
              link: "#"
            },
            {
              title: "幼教",
              link: "#"
            }
          ],
          icon: "icon-qinzileyuan",
          secondClassifications: [
            {
              title: "儿童乐园",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "婴儿游泳",
                  link: "#"
                },
                {
                  title: "其它亲子游乐",
                  link: "#"
                }
              ]
            },
            {
              title: "幼儿教育",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "早教中心",
                  link: "#"
                },
                {
                  title: "少儿英语",
                  link: "#"
                },
                {
                  title: "智力开发",
                  link: "#"
                },
                {
                  title: "托班/幼儿园",
                  link: "#"
                },
                {
                  title: "儿教育",
                  link: "#"
                },
                {
                  title: "其他幼儿教育",
                  link: "#"
                }
              ]
            },
            {
              title: "亲子摄影",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "儿童摄影",
                  link: "#"
                },
                {
                  title: "孕妇写真",
                  link: "#"
                },
                {
                  title: "上门拍",
                  link: "#"
                },
                {
                  title: "其他亲子摄影",
                  link: "#"
                }
              ]
            },
            {
              title: "孕产护理",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "月子会所",
                  link: "#"
                },
                {
                  title: "产后恢复",
                  link: "#"
                },
                {
                  title: "妇幼医院",
                  link: "#"
                },
                {
                  title: "孕产用品",
                  link: "#"
                },
                {
                  title: "开奶催乳",
                  link: "#"
                },
                {
                  title: "月嫂",
                  link: "#"
                },
                {
                  title: "亲子购物",
                  link: "#"
                },
                {
                  title: "宝宝派对",
                  link: "#"
                },
                {
                  title: "亲子服务",
                  link: "#"
                }
              ]
            }
          ]
        },
        {
          titles: [
            {
              title: "运动健身",
              link: "#"
            },
            {
              title: "健身中心",
              link: "#"
            }
          ],
          icon: "icon-jianshen",
          secondClassifications: [
            {
              title: "运动健身",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "健身中心",
                  link: "#"
                },
                {
                  title: "武术场馆",
                  link: "#"
                },
                {
                  title: "游泳馆",
                  link: "#"
                },
                {
                  title: "羽毛球馆",
                  link: "#"
                },
                {
                  title: "溜冰场",
                  link: "#"
                },
                {
                  title: "射箭馆",
                  link: "#"
                },
                {
                  title: "篮球场",
                  link: "#"
                },
                {
                  title: "网球馆",
                  link: "#"
                },
                {
                  title: "台球馆",
                  link: "#"
                },
                {
                  title: "乒乓球",
                  link: "#"
                },
                {
                  title: "足球场",
                  link: "#"
                },
                {
                  title: "高尔夫场",
                  link: "#"
                },
                {
                  title: "保龄球馆",
                  link: "#"
                },
                {
                  title: "体育场馆",
                  link: "#"
                },
                {
                  title: "马术场",
                  link: "#"
                },
                {
                  title: "壁球馆",
                  link: "#"
                },
                {
                  title: "更多运动",
                  link: "#"
                }
              ]
            }
          ]
        },
        {
          titles: [
            {
              title: "家装",
              link: "#"
            },
            {
              title: "建材",
              link: "#"
            },
            {
              title: "家居",
              link: "#"
            }
          ],
          icon: "icon-jiazhuangfenqi",
          secondClassifications: [
            {
              title: "装修设计",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "半包装修",
                  link: "#"
                },
                {
                  title: "全包装修",
                  link: "#"
                },
                {
                  title: "清包装修",
                  link: "#"
                }
              ]
            },
            {
              title: "装修建材",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "地板",
                  link: "#"
                },
                {
                  title: "瓷砖石材",
                  link: "#"
                },
                {
                  title: "橱柜",
                  link: "#"
                },
                {
                  title: "灯饰照明",
                  link: "#"
                },
                {
                  title: "厨卫洁具",
                  link: "#"
                },
                {
                  title: "油漆涂料",
                  link: "#"
                },
                {
                  title: "集成吊顶",
                  link: "#"
                },
                {
                  title: "墙纸墙艺",
                  link: "#"
                },
                {
                  title: "门窗",
                  link: "#"
                },
                {
                  title: "木材板材",
                  link: "#"
                },
                {
                  title: "家用五金",
                  link: "#"
                },
                {
                  title: "电工电料",
                  link: "#"
                },
                {
                  title: "楼梯",
                  link: "#"
                },
                {
                  title: "管材管件",
                  link: "#"
                }
              ]
            },
            {
              title: "家具家居",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "家具",
                  link: "#"
                },
                {
                  title: "床上用品/家纺",
                  link: "#"
                },
                {
                  title: "家居饰品",
                  link: "#"
                },
                {
                  title: "厨具餐具",
                  link: "#"
                },
                {
                  title: "智能家居",
                  link: "#"
                }
              ]
            },
            {
              title: "家装卖场",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "建材卖场",
                  link: "#"
                },
                {
                  title: "家居卖场",
                  link: "#"
                },
                {
                  title: "灯饰卖场",
                  link: "#"
                }
              ]
            }
          ]
        },
        {
          titles: [
            {
              title: "学习培训",
              link: "#"
            },
            {
              title: "音乐培训",
              link: "#"
            }
          ],
          icon: "icon-shijuan",
          secondClassifications: [
            {
              title: "音乐培训",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "钢琴",
                  link: "#"
                },
                {
                  title: "吉他",
                  link: "#"
                },
                {
                  title: "小提琴",
                  link: "#"
                },
                {
                  title: "古筝",
                  link: "#"
                },
                {
                  title: "架子鼓",
                  link: "#"
                },
                {
                  title: "声乐",
                  link: "#"
                },
                {
                  title: "其他音乐培训",
                  link: "#"
                }
              ]
            },
            {
              title: "职业技术",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "美容化妆",
                  link: "#"
                },
                {
                  title: "会计",
                  link: "#"
                },
                {
                  title: "IT",
                  link: "#"
                },
                {
                  title: "厨艺",
                  link: "#"
                },
                {
                  title: "管理培训",
                  link: "#"
                },
                {
                  title: "摄影培训",
                  link: "#"
                },
                {
                  title: "司法考试",
                  link: "#"
                },
                {
                  title: "公务员培训",
                  link: "#"
                },
                {
                  title: "其他职业培训",
                  link: "#"
                }
              ]
            },
            {
              title: "外语培训",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "英语",
                  link: "#"
                },
                {
                  title: "日语",
                  link: "#"
                },
                {
                  title: "韩语",
                  link: "#"
                },
                {
                  title: "法语",
                  link: "#"
                },
                {
                  title: "德语",
                  link: "#"
                },
                {
                  title: "汉语",
                  link: "#"
                },
                {
                  title: "俄语",
                  link: "#"
                },
                {
                  title: "西班牙语",
                  link: "#"
                },
                {
                  title: "其他外语",
                  link: "#"
                }
              ]
            },
            {
              title: "美术培训",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "绘画",
                  link: "#"
                },
                {
                  title: "书法",
                  link: "#"
                },
                {
                  title: "其他美术",
                  link: "#"
                }
              ]
            }
          ]
        },
        {
          titles: [
            {
              title: "医疗健康",
              link: "#"
            },
            {
              title: "宠物",
              link: "#"
            },
            {
              title: "爱车",
              link: "#"
            }
          ],
          icon: "icon-zhinengyiliao",
          secondClassifications: [
            {
              title: "医疗健康",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "医院",
                  link: "#"
                },
                {
                  title: "齿科口腔",
                  link: "#"
                },
                {
                  title: "体检中心",
                  link: "#"
                },
                {
                  title: "药店",
                  link: "#"
                },
                {
                  title: "中医",
                  link: "#"
                },
                {
                  title: "其他健康服务",
                  link: "#"
                }
              ]
            },
            {
              title: "爱车",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "洗车",
                  link: "#"
                },
                {
                  title: "租车",
                  link: "#"
                },
                {
                  title: "加油站",
                  link: "#"
                },
                {
                  title: "维修保养",
                  link: "#"
                },
                {
                  title: "驾校",
                  link: "#"
                },
                {
                  title: "汽车美容",
                  link: "#"
                },
                {
                  title: "陪练",
                  link: "#"
                },
                {
                  title: "汽车用品",
                  link: "#"
                },
                {
                  title: "停车场",
                  link: "#"
                },
                {
                  title: "汽车保险",
                  link: "#"
                },
                {
                  title: "4S店/汽车销售",
                  link: "#"
                },
                {
                  title: "更多汽车服务",
                  link: "#"
                },
                {
                  title: "机油保养",
                  link: "#"
                },
                {
                  title: "汽车报价",
                  link: "#"
                },
                {
                  title: "二手车",
                  link: "#"
                },
                {
                  title: "广告驾校",
                  link: "#"
                },
                {
                  title: "交警队",
                  link: "#"
                },
                {
                  title: "汽车改装",
                  link: "#"
                },
                {
                  title: "汽车配件",
                  link: "#"
                }
              ]
            },
            {
              title: "宠物",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "宠物店",
                  link: "#"
                },
                {
                  title: "宠物医院",
                  link: "#"
                }
              ]
            }
          ]
        },
        {
          titles: [
            {
              title: "酒吧",
              link: "#"
            },
            {
              title: "密室逃脱",
              link: "#"
            }
          ],
          icon: "icon-gewujiubakafeiting",
          secondClassifications: [
            {
              title: "玩乐",
              link: "#",
              thirdclassificaFtions: [
                {
                  title: "KTV",
                  link: "#"
                },
                {
                  title: "酒吧",
                  link: "#"
                },
                {
                  title: "密室逃脱",
                  link: "#"
                },
                {
                  title: "游乐游艺",
                  link: "#"
                },
                {
                  title: "网吧网咖",
                  link: "#"
                },
                {
                  title: "私人影院",
                  link: "#"
                },
                {
                  title: "DIY手工坊",
                  link: "#"
                },
                {
                  title: "桌面游戏",
                  link: "#"
                },
                {
                  title: "采摘/农家乐",
                  link: "#"
                },
                {
                  title: "棋牌室",
                  link: "#"
                },
                {
                  title: "轰趴馆",
                  link: "#"
                },
                {
                  title: "真人CS",
                  link: "#"
                },
                {
                  title: "VR",
                  link: "#"
                },
                {
                  title: "其他玩乐",
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
    bannerClassification
  }
};
</script>

<style scoped>
.icon {
  position: relative;
  width: 16px;
  height: 16px;
  top: 3px;
}

ul {
  padding: 22px 0 8px;
  position: relative;
}

li {
  height: 26px;
  box-sizing: border-box;
}

.nav {
  margin: 0;
  padding: 2px 12px;
  height: 100%;
}

.nav:hover {
  background-color: rgba(255, 150, 0, 0.08);
}

.nav:hover h1 {
  color: #222;
}

.nav:hover a {
  color: #222;
  font-weight: 700;
}

.nav:hover .arrow {
  border-color: #222;
}

li:hover .second-nav {
  display: block;
}
.second-nav {
  display: none;
}
.title {
  display: inline;
  margin-left: 6px;
  line-height: 30px;
}

h1 {
  display: inline-block;
  font-size: 16px;
  color: #646464;
}

a {
  color: #646464;
  font-size: 13px;
  cursor: pointer;
}

p {
  display: inline-block;
}

.arrow {
  position: relative;
  float: right;
  width: 4px;
  height: 4px;
  right: 1px;
  top: 13px;
  border-top: 1px solid #bfbfbf;
  border-right: 1px solid #bfbfbf;
  transform: rotate(45deg);
}
</style>