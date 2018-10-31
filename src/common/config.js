/**
 * @file 组件内部事件通信
 *
 * @author bigcui
 * 2016年9月18日
 */
let app = 'http://www.bjgaj.gov.cn/dist/index.php'
let dev = '/dist/index.php'

if (process.env.NODE_ENV === 'development') {
  dev = dev
}else {
  dev = app
}
export default {
  dev: dev,
  pro: 'http://172.23.233.54:8086/index.php'
}
