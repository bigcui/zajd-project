module.exports = function (res) {
  let dataWrap = { 'error_code': 0, 'error_msg': '', 'data': [{ 'ID': '2001', 'C_NAME': '\u6cbb\u5b89', 'P_ID': '2000', 'MTIME': '1529479021' }, { 'ID': '2002', 'C_NAME': '\u516c\u4ea4', 'P_ID': '2000', 'MTIME': '1529479021' }, { 'ID': '2003', 'C_NAME': '\u5185\u4fdd', 'P_ID': '2000', 'MTIME': '1529479021' }, { 'ID': '2004', 'C_NAME': '\u4ea4\u901a', 'P_ID': '2000', 'MTIME': '1529479021' }, { 'ID': '2005', 'C_NAME': '\u7f51\u5b89', 'P_ID': '2000', 'MTIME': '1529479021' }, { 'ID': '2006', 'C_NAME': '\u51fa\u5165\u5883', 'P_ID': '2000', 'MTIME': '1529479021' }, { 'ID': '2007', 'C_NAME': '\u5165\u53e3', 'P_ID': '2000', 'MTIME': '1529479021' }, { 'ID': '2008', 'C_NAME': '\u7f09\u6bd2', 'P_ID': '2000', 'MTIME': '1529479021' }] }

  if (res._func == '_list') {
    dataWrap = {
      'error_code': 0,
      'error_msg': '',
      'data': {
        'TOTAL': '2',
        'data': [

          { 'NUM': '0', 'ID': '55', 'N_TITLE': '\u5f29\u7684\u5236\u9020\u3001\u9500\u552e\u3001\u8fdb\u53e3\u3001\u8fd0\u8f93\u3001\u4f7f\u7528\u5ba1\u6279', 'U_ID': '1', 'CID': '2001', 'READ_NUM': '0', 'SORT_NUM': '999999', 'STATUS': '0', 'MTIME': '1529637201', 'USERNAME': 'admin' },
          { 'NUM': '1', 'ID': '57', 'N_TITLE': '\u5f29\u7684\u5236\u9020\u3001\u9500\u552e\u3001\u8fdb\u53e3\u3001\u8fd0\u8f93\u3001\u4f7f\u7528\u5ba1\u6279', 'U_ID': '1', 'CID': '2001', 'READ_NUM': '0', 'SORT_NUM': '999999', 'STATUS': '0', 'MTIME': '1529637201', 'USERNAME': 'admin' },
          { 'NUM': '2', 'ID': '56', 'N_TITLE': '\u7206\u7834\u4f5c\u4e1a\u4eba\u5458\uff08\u4fdd\u7ba1\u5458\uff09\u8bb8\u53ef\u8bc1\u6838\u53d1', 'U_ID': '1', 'CID': '2001', 'READ_NUM': '1', 'SORT_NUM': '999999', 'STATUS': '0', 'MTIME': '1529637162', 'USERNAME': 'admin' }
        ]
      }
    }
  }
  if (res._func == 'cpage') {
    dataWrap = {
    'error_code': 0,'error_msg': '',
      'data': {
        1004: {'NUM': '1','ID': '100','N_TITLE': 'qqq1','U_ID': '2','CID': '1001','READ_NUM': '0','SORT_NUM': '999999','STATUS': '0','MTIME': '1530188082','USERNAME': 'admin','IMAGE_SRC': ['\/ueditor\/php\/upload\/image\/20180628\/1530188073487496.jpg']},
        1005: {'NUM': '1','ID': '100','N_TITLE': 'qqq1','U_ID': '2','CID': '1001','READ_NUM': '0','SORT_NUM': '999999','STATUS': '0','MTIME': '1530188082','USERNAME': 'admin','IMAGE_SRC': ['\/ueditor\/php\/upload\/image\/20180628\/1530188073487496.jpg']}}}
  }
  return dataWrap
}
