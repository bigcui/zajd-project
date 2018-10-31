let data = {
  'a1': {
    'href': 'http://www.bjgaj.gov.cn/rkgl/',
    'title': '户籍业务'
  },
  'a2': {
    'href': 'http://www.bjgaj.gov.cn/dist/index.html#/service',
    'title': '出入境业务'
  },
  'a3': {
    'href': 'http://bj.122.gov.cn/views/inquiry.html',
    'title': '驾驶员业务'
  },
  'a4': {
    'href': 'http://cgs.bjjtgl.gov.cn/chgs/yuyue.jsp',
    'title': '机动车业务'
  },
  'b1': {
    'href': location.href.split("#")[0] + '#/query',
    'title': '服务查询'
  },
  'b2': {
    'href':location.href.split("#")[0] + '#/guide',
    'title': '办事指南'
  },
  'b3': {
    'href': '#',
    'title': '建议咨询'
  },
  'b4': {
    'href':location.href.split("#")[0]+ '#/news',
    'title': '新闻信息'
  }
}

export default function datafn () {
  return data
}
