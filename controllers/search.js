var http = require('http');

exports.index = function (req, res, next) {
  var q = req.query.q;
  q = encodeURIComponent(q);
  //res.redirect('https://www.google.com.hk/#hl=zh-CN&q=site:cnodejs.org+' + q);
    console.info('城市test');
  //https://map.baidu.com/?qt=sub_area_list&from=mapapi&areacode=1&level=1&from=mapapi
    http.get('http://map.baidu.com/?qt=sub_area_list&from=mapapi&areacode=1&level=1&from=mapapi',function(req1,res1){
        var html='';
        req1.on('data',function(data){
            html+=data;
        });
        req1.on('end',function(){
            console.info(html);
        });
    });
};
