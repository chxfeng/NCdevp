var http = require('http');

exports.index = function (req, res, next) {
  var q = req.query.q;
  q = encodeURIComponent(q);
  //res.redirect('https://www.google.com.hk/#hl=zh-CN&q=site:cnodejs.org+' + q);

  //https://map.baidu.com/?qt=sub_area_list&from=mapapi&areacode=1&level=1&from=mapapi
    http.get('https://map.baidu.com/?qt=sub_area_list&from=mapapi&areacode=1&level=1&from=mapapi',function(req,res){
        var html='';
        req.on('data',function(data){
            html+=data;
        });
        req.on('end',function(){
            console.info(html);
        });
    });
};
