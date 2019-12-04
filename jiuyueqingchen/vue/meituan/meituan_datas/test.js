const getUrl = require('./reptile');

getUrl('datas/quality/all.json', 'https://nc.meituan.com/ptapi/getScenesList?theme=quality&tab=all&ci=83&limit=12');
getUrl('datas/quality/feast.json', 'https://nc.meituan.com/ptapi/getScenesList?theme=quality&tab=feast&ci=83&limit=10');
getUrl('datas/quality/spa.json', 'https://nc.meituan.com/ptapi/getScenesList?theme=quality&tab=spa&ci=83&limit=10');
getUrl('datas/quality/show.json', 'https://nc.meituan.com/ptapi/getScenesList?theme=quality&tab=show&ci=83&limit=10');
getUrl('datas/quality/journey.json', 'https://nc.meituan.com/ptapi/getScenesList?theme=quality&tab=journey&ci=83&limit=10');
getUrl('datas/cheap/all.json', 'https://nc.meituan.com/ptapi/getScenesList?theme=cheap&tab=all&ci=83&limit=20');
getUrl('datas/cheap/food.json', 'https://nc.meituan.com/ptapi/getScenesList?theme=cheap&tab=food&ci=83&limit=20');
getUrl('datas/cheap/xiuyu.json', 'https://nc.meituan.com/ptapi/getScenesList?theme=cheap&tab=xiuyu&ci=83&limit=20');
getUrl('datas/films/hot.json', 'https://nc.meituan.com/ptapi/getHotFilms?ci=83&limit=10');
getUrl('datas/films/coming.json', 'https://nc.meituan.com/ptapi/getComingFilms?ci=83&limit=10');
getUrl('datas/citys/citys.json', 'https://nc.meituan.com/ptapi/minsuCitys?fetchSize=10');
getUrl('datas/recommends/recommends.json', 'https://nc.meituan.com/ptapi/recommends');