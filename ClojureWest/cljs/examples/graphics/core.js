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
examples.graphics.core.render = (function (){var method_table__569__auto____182641 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__570__auto____182642 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__571__auto____182643 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__572__auto____182644 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__573__auto____182645 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render","﷐'type","﷐'default",hierarchy__573__auto____182645,method_table__569__auto____182641,prefer_table__570__auto____182642,method_cache__571__auto____182643,cached_hierarchy__572__auto____182644));
})();
cljs.core._add_method.call(null,examples.graphics.core.render,"﷐'circle",(function (circle){
var fill__182646 = (cljs.core.truth_("﷐'fill".call(null,circle))?examples.graphics.core.get_fill.call(null,"﷐'fill".call(null,circle)):null);
var stroke_tmp__182647 = "﷐'stroke".call(null,circle);
var stroke__182648 = (cljs.core.truth_(stroke_tmp__182647)?examples.graphics.core.get_stroke.call(null,stroke_tmp__182647):null);

return "﷐'img".call(null,circle).drawCircle(("﷐'scale".call(null,circle) * "﷐'x".call(null,circle)),("﷐'scale".call(null,circle) * "﷐'y".call(null,circle)),("﷐'scale".call(null,circle) * "﷐'radius".call(null,circle)),stroke__182648,fill__182646);
}));
cljs.core._add_method.call(null,examples.graphics.core.render,"﷐'path",(function (path){
var fill__182650 = (cljs.core.truth_("﷐'fill".call(null,path))?examples.graphics.core.get_fill.call(null,"﷐'fill".call(null,path)):null);
var stroke_tmp__182651 = "﷐'stroke".call(null,path);
var stroke__182652 = (cljs.core.truth_(stroke_tmp__182651)?examples.graphics.core.get_stroke.call(null,stroke_tmp__182651):null);
var gpath__182653 = "﷐'img".call(null,path).createPath();

cljs.core.dorun.call(null,(function (){var iter__509__auto____182658 = (function iter__182654(s__182655){
return (new cljs.core.LazySeq(null,false,(function (){
var s__182655__182656 = s__182655;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__182655__182656)))
{var seg__182657 = cljs.core.first.call(null,s__182655__182656);

return cljs.core.cons.call(null,examples.graphics.core.render.call(null,cljs.core.assoc.call(null,seg__182657,"﷐'path",gpath__182653,"﷐'scale","﷐'scale".call(null,path))),iter__182654.call(null,cljs.core.rest.call(null,s__182655__182656)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____182658.call(null,"﷐'path".call(null,path));
})());
return "﷐'img".call(null,path).drawPath(gpath__182653,stroke__182652,fill__182650);
}));
cljs.core._add_method.call(null,examples.graphics.core.render,"C",(function (seg){
return "﷐'path".call(null,seg).curveTo(cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,(function (p1__182649_SHARP_){
return ("﷐'scale".call(null,seg) * p1__182649_SHARP_);
}),"﷐'points".call(null,seg))));
}));
cljs.core._add_method.call(null,examples.graphics.core.render,"L",(function (seg){
return "﷐'path".call(null,seg).lineTo(cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,(function (p1__182659_SHARP_){
return ("﷐'scale".call(null,seg) * p1__182659_SHARP_);
}),"﷐'points".call(null,seg))));
}));
cljs.core._add_method.call(null,examples.graphics.core.render,"M",(function (seg){
return "﷐'path".call(null,seg).moveTo(cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,(function (p1__182660_SHARP_){
return ("﷐'scale".call(null,seg) * p1__182660_SHARP_);
}),"﷐'points".call(null,seg))));
}));
cljs.core._add_method.call(null,examples.graphics.core.render,"Z",(function (seg){
return "﷐'path".call(null,seg).close(cljs.core.Vector.fromArray([]).array);
}));
examples.graphics.core.draw_image = (function() {
var draw_image = null;
var draw_image__182667 = (function (dom_elem,width,height,data){
return draw_image.call(null,dom_elem,width,height,data,1.0);
});
var draw_image__182668 = (function (dom_elem,width,height,data,scale){
var graphics__182661 = goog.graphics.createGraphics.call(null,width,height);

cljs.core.dorun.call(null,(function (){var iter__509__auto____182666 = (function iter__182662(s__182663){
return (new cljs.core.LazySeq(null,false,(function (){
var s__182663__182664 = s__182663;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__182663__182664)))
{var elem__182665 = cljs.core.first.call(null,s__182663__182664);

return cljs.core.cons.call(null,examples.graphics.core.render.call(null,cljs.core.assoc.call(null,elem__182665,"﷐'img",graphics__182661,"﷐'scale",scale)),iter__182662.call(null,cljs.core.rest.call(null,s__182663__182664)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____182666.call(null,data);
})());
return graphics__182661.render(dom_elem);
});
draw_image = function(dom_elem,width,height,data,scale){
switch(arguments.length){
case  4 :
return draw_image__182667.call(this,dom_elem,width,height,data);
case  5 :
return draw_image__182668.call(this,dom_elem,width,height,data,scale);
}
throw('Invalid arity: ' + arguments.length);
};
return draw_image;
})()
;
