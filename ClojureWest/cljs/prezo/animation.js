goog.provide('prezo.animation');
goog.require('cljs.core');
goog.require('enfocus.core');
goog.require('goog.dom');
goog.require('goog.positioning');
goog.require('goog.math');
/**
* this is an example of a custom transform for enfocus
*/
prezo.animation.pos_rel_anchor = (function pos_rel_anchor(anchor,relx,rely){
var coord__19008 = (new goog.math.Coordinate(relx,rely));

return enfocus.core.chainable_standard.call(null,(function (node){
return goog.positioning.positionAtAnchor.call(null,anchor,0,node,0,coord__19008);
}));
});
prezo.animation.call_out = (function call_out(node,txt,p__19009){
var map__19010__19014 = p__19009;
var map__19010__19015 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__19010__19014))?cljs.core.apply.call(null,cljs.core.hash_map,map__19010__19014):map__19010__19014);
var fsize__19016 = cljs.core.get.call(null,map__19010__19015,"﷐'font-size","4.4em");
var vec__19011__19017 = cljs.core.get.call(null,map__19010__19015,"﷐'loc");
var x__19018 = cljs.core.nth.call(null,vec__19011__19017,0,null);
var y__19019 = cljs.core.nth.call(null,vec__19011__19017,1,null);
var vec__19012__19020 = cljs.core.get.call(null,map__19010__19015,"﷐'size");
var w__19021 = cljs.core.nth.call(null,vec__19012__19020,0,null);
var h__19022 = cljs.core.nth.call(null,vec__19012__19020,1,null);
var vec__19013__19023 = cljs.core.get.call(null,map__19010__19015,"﷐'font-offset",cljs.core.Vector.fromArray([5,10]));
var fx__19024 = cljs.core.nth.call(null,vec__19013__19023,0,null);
var fy__19025 = cljs.core.nth.call(null,vec__19013__19023,1,null);

var div1__19026 = cljs.core.name.call(null,cljs.core.gensym.call(null,"div"));
var div2__19027 = cljs.core.name.call(null,cljs.core.gensym.call(null,"div"));

var nods__3046__auto____19029 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod19028){
enfocus.core.en_append.call(null,goog.dom.htmlToDocumentFragment.call(null,cljs.core.str.call(null,"<div class='call-block' id='",div1__19026,"' style='display: none; position: fixed;'></div>","<div class='call-text' id='",div2__19027,"' style='display: none; position: fixed;'>",txt,"</div>"))).call(null,enfocus.core.css_select.call(null,"",pnod19028,cljs.core.Vector.fromArray(["#content-pane"])));
(function (pnod__3221__auto__){
return prezo.animation.pos_rel_anchor.call(null,node,x__19018,y__19019).call(null,pnod__3221__auto__,(function (pnod__3221__auto__){
return enfocus.core.en_set_style.call(null,"﷐'border","3px solid #ff0000").call(null,pnod__3221__auto__,(function (pnod__3221__auto__){
return enfocus.core.en_set_style.call(null,"﷐'display","inline").call(null,pnod__3221__auto__,(function (pnod__3220__auto__){
return enfocus.core.en_resize.call(null,w__19021,h__19022,500,null,null).call(null,pnod__3220__auto__);
}));
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod19028,cljs.core.Vector.fromArray([cljs.core.str.call(null,"#",div1__19026)])));
(function (pnod__3221__auto__){
return enfocus.core.en_fade_out.call(null,1,null,null).call(null,pnod__3221__auto__,(function (pnod__3221__auto__){
return prezo.animation.pos_rel_anchor.call(null,node,(x__19018 + fx__19024),((y__19019 + h__19022) + fy__19025)).call(null,pnod__3221__auto__,(function (pnod__3221__auto__){
return enfocus.core.en_set_style.call(null,"﷐'font-size",fsize__19016).call(null,pnod__3221__auto__,(function (pnod__3221__auto__){
return enfocus.core.chainable_standard.call(null,(function (pnod__3199__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__3046__auto____19031 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'display","inline"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod19030){
return pnod19030;
}),nods__3046__auto____19031));
return enfocus.core.en_set_style.call(null,"﷐'display","inline");
})().call(null,pnod__3199__auto__);
}),600);
})).call(null,pnod__3221__auto__,(function (pnod__3220__auto__){
return enfocus.core.en_fade_in.call(null,1000,null,null).call(null,pnod__3220__auto__);
}));
}));
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod19028,cljs.core.Vector.fromArray([cljs.core.str.call(null,"#",div2__19027)])));
return pnod19028;
}),nods__3046__auto____19029));
return document;
});
prezo.animation.scary_parens = (function scary_parens(){
var G__19032__19033 = cljs.core.seq.call(null,cljs.core.range.call(null,1,200));

if(cljs.core.truth_(G__19032__19033))
{var i__19034 = cljs.core.first.call(null,G__19032__19033);
var G__19032__19035 = G__19032__19033;

while(true){
var win_size__19036 = goog.dom.getViewportSize.call(null);
var colors__19037 = cljs.core.Vector.fromArray(["aqua","black","blue","fuchsia","gray","grey","green","lime","maroon","navy","olive","purple","red","silver","teal","white","yellow"]);
var paren_id__19038 = cljs.core.str.call(null,"paren",i__19034);
var color__19039 = cljs.core.nth.call(null,colors__19037,cljs.core.rand_int.call(null,17));
var fsize__19040 = cljs.core.str.call(null,cljs.core.rand.call(null,14),"em");
var width__19041 = cljs.core.rand_int.call(null,win_size__19036.width);
var height__19042 = cljs.core.rand_int.call(null,win_size__19036.height);
var dly__19043 = cljs.core.rand_int.call(null,3000);

var nods__3046__auto____19045 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,((function (i__19034,G__19032__19035){
return (function (pnod19044){
enfocus.core.en_append.call(null,goog.dom.htmlToDocumentFragment.call(null,cljs.core.str.call(null,"<div id='",paren_id__19038,"' style='display: none; position: fixed'>()<div>"))).call(null,enfocus.core.css_select.call(null,"",pnod19044,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_move.call(null,width__19041,height__19042,0,null,null),enfocus.core.en_set_style.call(null,"﷐'font-size",fsize__19040),enfocus.core.en_set_style.call(null,"﷐'color",color__19039),enfocus.core.chainable_standard.call(null,((function (i__19034,G__19032__19035){
return (function (pnod__3199__auto__){
return enfocus.core.setTimeout.call(null,((function (i__19034,G__19032__19035){
return (function (){
return (function (){var nods__3046__auto____19047 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'display","inline"));

cljs.core.doall.call(null,cljs.core.map.call(null,((function (i__19034,G__19032__19035){
return (function (pnod19046){
return pnod19046;
});})(i__19034,G__19032__19035))
,nods__3046__auto____19047));
return enfocus.core.en_set_style.call(null,"﷐'display","inline");
})().call(null,pnod__3199__auto__);
});})(i__19034,G__19032__19035))
,dly__19043);
});})(i__19034,G__19032__19035))
)).call(null,enfocus.core.css_select.call(null,"",pnod19044,cljs.core.Vector.fromArray([cljs.core.str.call(null,"#",paren_id__19038)])));
return pnod19044;
});})(i__19034,G__19032__19035))
,nods__3046__auto____19045));
document;
var temp__3698__auto____19048 = cljs.core.next.call(null,G__19032__19035);

if(cljs.core.truth_(temp__3698__auto____19048))
{var G__19032__19049 = temp__3698__auto____19048;

{
var G__19050 = cljs.core.first.call(null,G__19032__19049);
var G__19051 = G__19032__19049;
i__19034 = G__19050;
G__19032__19035 = G__19051;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
