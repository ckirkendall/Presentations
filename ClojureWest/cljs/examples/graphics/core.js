goog.provide('examples.graphics.core');
goog.require('cljs.core');
goog.require('goog.graphics');
examples.graphics.core._STAR_get_fill = (function _STAR_get_fill(fill){
return (new goog.graphics.SolidFill(fill));
});
examples.graphics.core.get_fill = cljs.core.memoize.call(null,examples.graphics.core._STAR_get_fill);
examples.graphics.core._STAR_get_stroke = (function _STAR_get_stroke(stroke){
return (new goog.graphics.Stroke("﷐'width".call(null,stroke),"﷐'color".call(null,stroke)));
});
examples.graphics.core.get_stroke = cljs.core.memoize.call(null,examples.graphics.core._STAR_get_stroke);
examples.graphics.core.render = (function (){var method_table__569__auto____18933 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__570__auto____18934 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__571__auto____18935 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__572__auto____18936 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__573__auto____18937 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render","﷐'type","﷐'default",hierarchy__573__auto____18937,method_table__569__auto____18933,prefer_table__570__auto____18934,method_cache__571__auto____18935,cached_hierarchy__572__auto____18936));
})();
cljs.core._add_method.call(null,examples.graphics.core.render,"﷐'circle",(function (circle){
var fill__18938 = (cljs.core.truth_("﷐'fill".call(null,circle))?examples.graphics.core.get_fill.call(null,"﷐'fill".call(null,circle)):null);
var stroke_tmp__18939 = "﷐'stroke".call(null,circle);
var stroke__18940 = (cljs.core.truth_(stroke_tmp__18939)?examples.graphics.core.get_stroke.call(null,stroke_tmp__18939):null);

return "﷐'img".call(null,circle).drawCircle(("﷐'scale".call(null,circle) * "﷐'x".call(null,circle)),("﷐'scale".call(null,circle) * "﷐'y".call(null,circle)),("﷐'scale".call(null,circle) * "﷐'radius".call(null,circle)),stroke__18940,fill__18938);
}));
cljs.core._add_method.call(null,examples.graphics.core.render,"﷐'path",(function (path){
var fill__18942 = (cljs.core.truth_("﷐'fill".call(null,path))?examples.graphics.core.get_fill.call(null,"﷐'fill".call(null,path)):null);
var stroke_tmp__18943 = "﷐'stroke".call(null,path);
var stroke__18944 = (cljs.core.truth_(stroke_tmp__18943)?examples.graphics.core.get_stroke.call(null,stroke_tmp__18943):null);
var gpath__18945 = "﷐'img".call(null,path).createPath();

cljs.core.dorun.call(null,(function (){var iter__509__auto____18950 = (function iter__18946(s__18947){
return (new cljs.core.LazySeq(null,false,(function (){
var s__18947__18948 = s__18947;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__18947__18948)))
{var seg__18949 = cljs.core.first.call(null,s__18947__18948);

return cljs.core.cons.call(null,examples.graphics.core.render.call(null,cljs.core.assoc.call(null,seg__18949,"﷐'path",gpath__18945,"﷐'scale","﷐'scale".call(null,path))),iter__18946.call(null,cljs.core.rest.call(null,s__18947__18948)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____18950.call(null,"﷐'path".call(null,path));
})());
return "﷐'img".call(null,path).drawPath(gpath__18945,stroke__18944,fill__18942);
}));
cljs.core._add_method.call(null,examples.graphics.core.render,"C",(function (seg){
return "﷐'path".call(null,seg).curveTo(cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,(function (p1__18941_SHARP_){
return ("﷐'scale".call(null,seg) * p1__18941_SHARP_);
}),"﷐'points".call(null,seg))));
}));
cljs.core._add_method.call(null,examples.graphics.core.render,"L",(function (seg){
return "﷐'path".call(null,seg).lineTo(cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,(function (p1__18951_SHARP_){
return ("﷐'scale".call(null,seg) * p1__18951_SHARP_);
}),"﷐'points".call(null,seg))));
}));
cljs.core._add_method.call(null,examples.graphics.core.render,"M",(function (seg){
return "﷐'path".call(null,seg).moveTo(cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,(function (p1__18952_SHARP_){
return ("﷐'scale".call(null,seg) * p1__18952_SHARP_);
}),"﷐'points".call(null,seg))));
}));
cljs.core._add_method.call(null,examples.graphics.core.render,"Z",(function (seg){
return "﷐'path".call(null,seg).close(cljs.core.Vector.fromArray([]).array);
}));
examples.graphics.core.draw_image = (function() {
var draw_image = null;
var draw_image__18959 = (function (dom_elem,width,height,data){
return draw_image.call(null,dom_elem,width,height,data,1.0);
});
var draw_image__18960 = (function (dom_elem,width,height,data,scale){
var graphics__18953 = goog.graphics.createGraphics.call(null,width,height);

cljs.core.dorun.call(null,(function (){var iter__509__auto____18958 = (function iter__18954(s__18955){
return (new cljs.core.LazySeq(null,false,(function (){
var s__18955__18956 = s__18955;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__18955__18956)))
{var elem__18957 = cljs.core.first.call(null,s__18955__18956);

return cljs.core.cons.call(null,examples.graphics.core.render.call(null,cljs.core.assoc.call(null,elem__18957,"﷐'img",graphics__18953,"﷐'scale",scale)),iter__18954.call(null,cljs.core.rest.call(null,s__18955__18956)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____18958.call(null,data);
})());
return graphics__18953.render(dom_elem);
});
draw_image = function(dom_elem,width,height,data,scale){
switch(arguments.length){
case  4 :
return draw_image__18959.call(this,dom_elem,width,height,data);
case  5 :
return draw_image__18960.call(this,dom_elem,width,height,data,scale);
}
throw('Invalid arity: ' + arguments.length);
};
return draw_image;
})()
;
