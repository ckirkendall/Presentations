goog.provide('examples.net.jsonp');
goog.require('cljs.core');
goog.require('goog.net');
goog.require('goog.net.Jsonp');
goog.require('goog.json');
goog.require('enfocus.core');
examples.net.jsonp.show_watchers = (function show_watchers(user,repo,elem){
console.log(elem);
var callback__182672 = (function (p1__182670_SHARP_){
console.log(cljs.core.str.call(null,p1__182670_SHARP_.data.watchers));
enfocus.core.en_content.call(null,cljs.core.str.call(null,p1__182670_SHARP_.data.watchers)).call(null,elem);
return elem;
});
var rj__182673 = (new goog.net.Jsonp(cljs.core.str.call(null,"https://api.github.com/repos/",user,"/",repo)));

return rj__182673.send("",callback__182672,(function (p1__182671_SHARP_){
return console.log(p1__182671_SHARP_);
}));
});
