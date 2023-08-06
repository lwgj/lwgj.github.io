"use strict";

//document.writeln("\n<style>\n.rxsy_float{ position:fixed;bottom:5%; left:5px; animation:rxsytx 4s ease-out; z-index:100;    display:block;}\n@keyframes rxsytx{\n  0%{ transform:scale(1.2) translate(-100px,-200px)}\n  50%{ transform:scale(1.0)translate(-10px,20px)}\n  100%{ transform:scale(1.0)translate(0px,0px)}\n}\n.close{ position:absolute; right:0; width:11px; height:11px; cursor:pointer; z-index:200;}\n</style>\n<div class=\"rxsy_float\" id=\"rxsy_float\">\n<div class=\"close\" onclick=\"javascript:document.getElementById('rxsy_float').style.display='none';\">\n<img src=\"/wcm.files/images/201804241015016.gif\" width=\"11\" height=\"11\"></div>\n          <a ><img src=\"/wcm.files/images/wxer20221207.png\" width=\"195\"></a>\n     </div>\n\n ");

//document.writeln("\n<style>html,body{-webkit-filter: grayscale(100%); /* webkit */-moz-filter: grayscale(100%); /*firefox*/-ms-filter: grayscale(100%); /*ie9*/-o-filter: grayscale(100%); /*opera*/filter: grayscale(100%);filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1); filter:gray; /*ie9- */}</style>");

var headHTML = document.getElementsByTagName("head")[0].innerHTML;
headHTML +=
  '<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />';
document.getElementsByTagName("head")[0].innerHTML = headHTML;

// 校园开放日网址
var xykfrList = [
  // "yzx.hpe.cn",
  // "shy.hpe.cn",
  "lwyzx.hpe.cn",
  // "bj.hpe.cn",
  // "penglai.hpe.cn",
  // "zsx.hpe.cn",
  // "huining.hpe.cn",
  // "flps.hpe.cn",
  // "lushixiao.hpe.cn",
  // "sinan.hpe.cn",
  // "baotong.hpe.cn",
  // "szfx.hpe.cn",
  // "ezx.hpe.cn",
  // "fxdl.hpe.cn",
  // "szx.hpe.cn",
  // "cgb.hpe.cn",
  "meixi.hpe.cn",
  // "chongb.hpe.cn",
  // "hm.hpe.cn",
  // "donger.hpe.cn",
  // "xinling.hpe.cn",
  // "qsh.hpe.cn",
  // "huaixiao.hpe.cn",
  // "haihua.hpe.cn",
  // "jyps.hpe.cn",
  // "quxi.hpe.cn",
  // "gc.hpe.cn",
  // "xmcj.hpe.cn",
  // "gmcj.hpe.cn",
  // "jycj.hpe.cn",
  // "shangwen.hpe.cn",
  "xingye.hpe.cn",
  // "qinghua.hpe.cn",
  // "zhongshan.hpe.cn",
  // "ygxx.hpe.cn",
  // "sl.hpe.cn",
  // "fudu.hpe.cn",
  // "qjq.hpe.cn",
  "lida.hpe.cn",
  "yongchang.hpe.cn",
//  "hpschool.hpe.cn",
  "dtc.hpe.cn",
  "jiangnan.hpe.cn",
  "mingzhu.hpe.cn",
  // // //https://m.zhongkao.com/sh/shgz/hpgz/"d10.hpe.cn",
  // // //"chun.hpe.cn",
  // // //"jl.hpe.cn",
  // // //"dj.hpe.cn",
  // // // "gezhi.hpe.cn",
  // // //"xiangming.hpe.cn",
  // // //"bile.hpe.cn",
  // // //"lwzx.hpe.cn",
  // // //  "shinan.hpe.cn",
];
const today = new Date();
const targetDate = new Date('2023-04-06T21:00:00');
if (today > targetDate) {
  var xykfrList = [
    "yzx.hpe.cn",
    "shy.hpe.cn",
    "lwyzx.hpe.cn",
    "bj.hpe.cn",
    "penglai.hpe.cn",
    "zsx.hpe.cn",
    // "huining.hpe.cn",
    "flps.hpe.cn",
    "lushixiao.hpe.cn",
    "sinan.hpe.cn",
    "baotong.hpe.cn",
    "szfx.hpe.cn",
    "ezx.hpe.cn",
    "fxdl.hpe.cn",
    "szx.hpe.cn",
    "cgb.hpe.cn",
    "meixi.hpe.cn",
    "chongb.hpe.cn",
    "hm.hpe.cn",
    "donger.hpe.cn",
    "xinling.hpe.cn",
    "qsh.hpe.cn",
    "huaixiao.hpe.cn",
    "haihua.hpe.cn",
    "jyps.hpe.cn",
    "quxi.hpe.cn",
    "gc.hpe.cn",
    "xmcj.hpe.cn",
    "gmcj.hpe.cn",
    "jycj.hpe.cn",
    "shangwen.hpe.cn",
    "hess.hpe.cn",
    "qinghua.hpe.cn",
    "zhongshan.hpe.cn",
    "ygxx.hpe.cn",
    "sl.hpe.cn",
    "fudu.hpe.cn",
    "qjq.hpe.cn",
    "lida.hpe.cn",
    "yongchang.hpe.cn",
//    "hpschool.hpe.cn",
    "dtc.hpe.cn",
    "jiangnan.hpe.cn",
    "mingzhu.hpe.cn",
    // // //https://m.zhongkao.com/sh/shgz/hpgz/"d10.hpe.cn",
    // // //"chun.hpe.cn",
    // // //"jl.hpe.cn",
    // // //"dj.hpe.cn",
    // // // "gezhi.hpe.cn",
    // // //"xiangming.hpe.cn",
    // // //"bile.hpe.cn",
    // // //"lwzx.hpe.cn",
    // // //  "shinan.hpe.cn",
  ];
}

xykfrList.forEach(function (e) {
  if (window.location.href.indexOf(e) > 0) {
    document.write(
      '\n    <div style="z-index:999999;width:200px;height:110px;position:fixed;top:240px;right:0px;margin-left:650px;display:block" id="xykfr_fc"><a href="/xykfr/" target="_blank"><img src="/wcm.files/xykfr/skin2018/images/xykfr.png" style="width:200px;height:110px;"></a></div>\n    '
    );
  }
});
