var http = require('http');

//获取城市
exports.getCitys = function (callback) {
    http.get('http://map.baidu.com/?qt=sub_area_list&from=mapapi&areacode=1&level=1&from=mapapi', function (req, res) {
        var citydata = "";
        req.on('data', function (data) {
            citydata += data;
        });
        req.on('end', function () {
            callback(JSON.parse(citydata));
        });
    });
};
