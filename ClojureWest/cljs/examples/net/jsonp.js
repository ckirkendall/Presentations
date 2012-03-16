goog.provide('examples.net.jsonp');
goog.require('cljs.core');
goog.require('goog.net');
goog.require('goog.net.Jsonp');
goog.require('goog.json');
goog.require('enfocus.core');
examples.net.jsonp.show_watchers = (function show_watchers(user,repo,elem){
console.log(elem);
var callback__18964 = (function (p1__18962_SHARP_){
console.log(cljs.core.str.call(null,p1__18962_SHARP_.data.watchers));
enfocus.core.en_content.call(null,cljs.core.str.call(null,p1__18962_SHARP_.data.watchers)).call(null,elem);
return elem;
});
var rj__18965 = (new goog.net.Jsonp(cljs.core.str.call(null,"https://api.github.com/repos/",user,"/",repo)));

return rj__18965.send("",callback__18964,(function (p1__18963_SHARP_){
return console.log(p1__18963_SHARP_);
}));
});
