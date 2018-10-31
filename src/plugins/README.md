# 自定义插件使用说明：    

## 注册插件
```
import Vue from 'vue';
// 引入该插件，路径根据自己的目录结构更改
import Util from 'xxx/plugins/index.js';
Vue.use(Util);
```

## 相关API
***
### this.$alert(title, message, options) alert弹出框
> Arguments:
> * {string} title 弹出框标题
> * {string | Object} message 弹出框信息
> * {object} options 可以自定义回掉函数、按钮文字
> Example:  
```
    this.$alert('异常提示', '数据加载失败', {
        confirmButtonTxt: '确定'
    });
```

### this.$confirm(title, message, options) confirm弹出框
> Arguments:
> * {string} title 弹出框标题
> * {string | Object} message 弹出框信息
> * {object} options 可以自定义回掉函数、按钮文字
> Example:  
```
    this.$alert('删除评价', '您确定要删除评价吗？', {
        confirmButtonTxt: '删除',
        cancelButtonText: '取消',
        callback: (action, instance) => {
            if (action === 'confirm') {
                // do anything
            } else if (action === 'cancel') {
                // do anything
            }
        };
    });
```

### this.$queryString(name) 查询url参数
> Arguments:
> * name url参数名

### this.$queryObject() url参数列表格式化为对象
> Returns: {Object}