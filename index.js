var rp = require("request-promise");
/*request请求文件*/
module.exports = {
    request: async function (option, url, method) {
        if (!option.jar) {
            var jar = rp.jar();
            option.jar = jar;
        }
        var ext = {
            uri: url,
            method: method,
            //jar:jar,
            forever: true, //keep-alive
            gzip: true,
            tunnel: true,
            resolveWithFullResponse: true,
            encoding: "UTF-8", //必须设置为null，否则request自己会处理响应成str
            agentOptions: {
                rejectUnauthorized: false
            },
            simple: true
        };
        var req = Object.assign(ext, option);
        var res;
        res = await rp(req);
        if (option.refreshJar) {
            option.refreshJar(res, option.jar);
        }
        return res;
    }, get: async function (url, option) {
        var method = "GET";
        return await this.request(option, url, method);
    }, post: async function (url, option) {
        var method = "POST";
        return await this.request(option, url, method);
    }
}