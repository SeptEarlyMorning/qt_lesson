import axios from 'axios';

const CancelToken = axios.CancelToken;
// const source = CancelToken.source();
let cancel;
const http = axios.create({
  baseURL: 'https://cnodejs.org/api/v1'
});

function getData(tab, page, setDatas, setIsLoad) {
  http.get(`/topics?tab=${tab}&page=${page}&limit=40`, {
    cancelToken: new CancelToken(function executor(c) {
      // executor 函数接收一个 cancel 函数作为参数
      cancel = c;
    })
  }).then((res) => {
    setDatas(res.data.data);
    setIsLoad(false);
  }).catch(thrown =>{
    if (axios.isCancel(thrown)) {
      // console.log('Request canceled', thrown.message);
    } else {
      // 处理错误
    }
  });
}

export { getData, cancel };