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
var coord__182716 = (new goog.math.Coordinate(relx,rely));

return enfocus.core.chainable_standard.call(null,(function (node){
return goog.positioning.positionAtAnchor.call(null,anchor,0,node,0,coord__182716);
}));
});
prezo.animation.call_out = (function call_out(node,txt,p__182717){
var map__182718__182722 = p__182717;
var map__182718__182723 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__182718__182722))?cljs.core.apply.call(null,cljs.core.hash_map,map__182718__182722):map__182718__182722);
var fsize__182724 = cljs.core.get.call(null,map__182718__182723,"﷐'font-size","4.4em");
var vec__182719__182725 = cljs.core.get.call(null,map__182718__182723,"﷐'loc");
var x__182726 = cljs.core.nth.call(null,vec__182719__182725,0,null);
var y__182727 = cljs.core.nth.call(null,vec__182719__182725,1,null);
var vec__182720__182728 = cljs.core.get.call(null,map__182718__182723,"﷐'size");
var w__182729 = cljs.core.nth.call(null,vec__182720__182728,0,null);
var h__182730 = cljs.core.nth.call(null,vec__182720__182728,1,null);
var vec__182721__182731 = cljs.core.get.call(null,map__182718__182723,"﷐'font-offset",cljs.core.Vector.fromArray([5,10]));
var fx__182732 = cljs.core.nth.call(null,vec__182721__182731,0,null);
var fy__182733 = cljs.core.nth.call(null,vec__182721__182731,1,null);

var div1__182734 = cljs.core.name.call(null,cljs.core.gensym.call(null,"div"));
var div2__182735 = cljs.core.name.call(null,cljs.core.gensym.call(null,"div"));

var nods__3015__auto____182737 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod182736){
enfocus.core.en_append.call(null,goog.dom.htmlToDocumentFragment.call(null,cljs.core.str.call(null,"<div class='call-block' id='",div1__182734,"' style='display: none; position: fixed;'></div>","<div class='call-text' id='",div2__182735,"' style='display: none; position: fixed;'>",txt,"</div>"))).call(null,enfocus.core.css_select.call(null,"",pnod182736,cljs.core.Vector.fromArray(["#content-pane"])));
(function (pnod__3190__auto__){
return prezo.animation.pos_rel_anchor.call(null,node,x__182726,y__182727).call(null,pnod__3190__auto__,(function (pnod__3190__auto__){
return enfocus.core.en_set_style.call(null,"﷐'border","3px solid #ff0000").call(null,pnod__3190__auto__,(function (pnod__3190__auto__){
return enfocus.core.en_set_style.call(null,"﷐'display","inline").call(null,pnod__3190__auto__,(function (pnod__3189__auto__){
return enfocus.core.en_resize.call(null,w__182729,h__182730,500,null,null).call(null,pnod__3189__auto__);
}));
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod182736,cljs.core.Vector.fromArray([cljs.core.str.call(null,"#",div1__182734)])));
(function (pnod__3190__auto__){
return enfocus.core.en_fade_out.call(null,1,null,null).call(null,pnod__3190__auto__,(function (pnod__3190__auto__){
return prezo.animation.pos_rel_anchor.call(null,node,(x__182726 + fx__182732),((y__182727 + h__182730) + fy__182733)).call(null,pnod__3190__auto__,(function (pnod__3190__auto__){
return enfocus.core.en_set_style.call(null,"﷐'font-size",fsize__182724).call(null,pnod__3190__auto__,(function (pnod__3190__auto__){
return enfocus.core.chainable_standard.call(null,(function (pnod__3168__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__3015__auto____182739 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'display","inline"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod182738){
return pnod182738;
}),nods__3015__auto____182739));
return enfocus.core.en_set_style.call(null,"﷐'display","inline");
})().call(null,pnod__3168__auto__);
}),600);
})).call(null,pnod__3190__auto__,(function (pnod__3189__auto__){
return enfocus.core.en_fade_in.call(null,1000,null,null).call(null,pnod__3189__auto__);
}));
}));
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod182736,cljs.core.Vector.fromArray([cljs.core.str.call(null,"#",div2__182735)])));
return pnod182736;
}),nods__3015__auto____182737));
return document;
});
prezo.animation.scary_parens = (function scary_parens(){
var G__182740__182741 = cljs.core.seq.call(null,cljs.core.range.call(null,1,200));

if(cljs.core.truth_(G__182740__182741))
{var i__182742 = cljs.core.first.call(null,G__182740__182741);
var G__182740__182743 = G__182740__182741;

while(true){
var win_size__182744 = goog.dom.getViewportSize.call(null);
var colors__182745 = cljs.core.Vector.fromArray(["aqua","black","blue","fuchsia","gray","grey","green","lime","maroon","navy","olive","purple","red","silver","teal","white","yellow"]);
var paren_id__182746 = cljs.core.str.call(null,"paren",i__182742);
var color__182747 = cljs.core.nth.call(null,colors__182745,cljs.core.rand_int.call(null,17));
var fsize__182748 = cljs.core.str.call(null,cljs.core.rand.call(null,14),"em");
var width__182749 = cljs.core.rand_int.call(null,win_size__182744.width);
var height__182750 = cljs.core.rand_int.call(null,win_size__182744.height);
var dly__182751 = cljs.core.rand_int.call(null,3000);

var nods__3015__auto____182753 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,((function (i__182742,G__182740__182743){
return (function (pnod182752){
enfocus.core.en_append.call(null,goog.dom.htmlToDocumentFragment.call(null,cljs.core.str.call(null,"<div id='",paren_id__182746,"' style='display: none; position: fixed'>()<div>"))).call(null,enfocus.core.css_select.call(null,"",pnod182752,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_move.call(null,width__182749,height__182750,0,null,null),enfocus.core.en_set_style.call(null,"﷐'font-size",fsize__182748),enfocus.core.en_set_style.call(null,"﷐'color",color__182747),enfocus.core.chainable_standard.call(null,((function (i__182742,G__182740__182743){
return (function (pnod__3168__auto__){
return enfocus.core.setTimeout.call(null,((function (i__182742,G__182740__182743){
return (function (){
return (function (){var nods__3015__auto____182755 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'display","inline"));

cljs.core.doall.call(null,cljs.core.map.call(null,((function (i__182742,G__182740__182743){
return (function (pnod182754){
return pnod182754;
});})(i__182742,G__182740__182743))
,nods__3015__auto____182755));
return enfocus.core.en_set_style.call(null,"﷐'display","inline");
})().call(null,pnod__3168__auto__);
});})(i__182742,G__182740__182743))
,dly__182751);
});})(i__182742,G__182740__182743))
)).call(null,enfocus.core.css_select.call(null,"",pnod182752,cljs.core.Vector.fromArray([cljs.core.str.call(null,"#",paren_id__182746)])));
return pnod182752;
});})(i__182742,G__182740__182743))
,nods__3015__auto____182753));
document;
var temp__3698__auto____182756 = cljs.core.next.call(null,G__182740__182743);

if(cljs.core.truth_(temp__3698__auto____182756))
{var G__182740__182757 = temp__3698__auto____182756;

{
var G__182758 = cljs.core.first.call(null,G__182740__182757);
var G__182759 = G__182740__182757;
i__182742 = G__182758;
G__182740__182743 = G__182759;
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
