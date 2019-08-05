import axios from './axios'
var api = {
  searchHotWords () {
    return axios.get('/api/meituan/header/searchHotWords.json')
  },
  searchWords () {
    return axios.get('/api/meituan/header/search.json')
  },
  getNavList () {
    return axios.get('/api/meituan/index/nav.json')
  },
  resultsByKeywords () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  getGoodsList () {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  getRecommendList () {
    return axios.get('/api/meituan/list/recommend.json')
  },
  getClassifyList () {
    return axios.get('/api/meituan/list/classify.json')
  },
  getAreaList () {
    return axios.get('/api/meituan/list/areaList.json')
  },
  getHotCityList () {
    return axios.get('/api/meituan/city/hot.json')
  },
  getProvinceList () {
    return axios.get('/api/meituan/city/province.json')
  },
  getRecentsList () {
    return axios.get('/api/meituan/city/recents.json')
  },
  getPosition () {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  getCityList () {
    return axios.get('/api/meituan/city/cityList.json')
  },
  login (params) {
    return axios.get('/api/meituan/login', params)
  },
  register (params) {
    return axios.get('/api/meituan/register', params)
  },
  detail () {
    return axios.get('/api/meituan/product/detail.json')
  }
}

export default api
