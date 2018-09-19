
# flyhh-webrequest 简单http请求封装
底层采用request-promise异步请求，对常见参数进行设置

## 安装
```js
npm i flyhh-webrequest -s
```

## 如何使用

```js
const wr = require('flyhh-webrequest');
var response = await wr.get(url,option);
or
var response = await wr.post(url,option);
```


## 感谢
   - request-promise
   - request