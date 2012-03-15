goog.provide('prezo.core');
goog.require('cljs.core');
goog.require('prezo.util');
goog.require('enfocus.core');
goog.require('goog.dom');
goog.require('prezo.animation');
goog.require('prezo.content');
goog.require('prezo.atom');
goog.require('examples.graphics.core');
goog.require('examples.graphics.data2');
goog.require('examples.net.jsonp');
prezo.core.setup_pane = (function setup_pane(width,height){
var nods__3015__auto____182762 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod182761){
enfocus.core.en_fade_out.call(null,500,null,null).call(null,enfocus.core.css_select.call(null,"",pnod182761,cljs.core.Vector.fromArray(["#h2-header"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.chainable_standard.call(null,(function (pnod__3168__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__3015__auto____182764 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'font-size","3.2em"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod182763){
return pnod182763;
}),nods__3015__auto____182764));
return enfocus.core.en_set_style.call(null,"﷐'font-size","3.2em");
})().call(null,pnod__3168__auto__);
}),200);
})),enfocus.core.chainable_standard.call(null,(function (pnod__3168__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__3015__auto____182766 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'font-size","3.05em"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod182765){
return pnod182765;
}),nods__3015__auto____182766));
return enfocus.core.en_set_style.call(null,"﷐'font-size","3.05em");
})().call(null,pnod__3168__auto__);
}),250);
})),enfocus.core.chainable_standard.call(null,(function (pnod__3168__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__3015__auto____182768 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'font-size","2.9em"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod182767){
return pnod182767;
}),nods__3015__auto____182768));
return enfocus.core.en_set_style.call(null,"﷐'font-size","2.9em");
})().call(null,pnod__3168__auto__);
}),300);
})),enfocus.core.chainable_standard.call(null,(function (pnod__3168__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__3015__auto____182770 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'font-size","2.75em"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod182769){
return pnod182769;
}),nods__3015__auto____182770));
return enfocus.core.en_set_style.call(null,"﷐'font-size","2.75em");
})().call(null,pnod__3168__auto__);
}),350);
})),enfocus.core.chainable_standard.call(null,(function (pnod__3168__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__3015__auto____182772 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'font-size","2.6em"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod182771){
return pnod182771;
}),nods__3015__auto____182772));
return enfocus.core.en_set_style.call(null,"﷐'font-size","2.6em");
})().call(null,pnod__3168__auto__);
}),400);
})),enfocus.core.chainable_standard.call(null,(function (pnod__3168__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__3015__auto____182774 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'font-size","2.45em"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod182773){
return pnod182773;
}),nods__3015__auto____182774));
return enfocus.core.en_set_style.call(null,"﷐'font-size","2.45em");
})().call(null,pnod__3168__auto__);
}),450);
})),enfocus.core.chainable_standard.call(null,(function (pnod__3168__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__3015__auto____182776 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'font-size","2.3em"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod182775){
return pnod182775;
}),nods__3015__auto____182776));
return enfocus.core.en_set_style.call(null,"﷐'font-size","2.3em");
})().call(null,pnod__3168__auto__);
}),500);
})),enfocus.core.chainable_standard.call(null,(function (pnod__3168__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__3015__auto____182778 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'font-size","2.15em"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod182777){
return pnod182777;
}),nods__3015__auto____182778));
return enfocus.core.en_set_style.call(null,"﷐'font-size","2.15em");
})().call(null,pnod__3168__auto__);
}),550);
})),enfocus.core.chainable_standard.call(null,(function (pnod__3168__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__3015__auto____182780 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'font-size","2em"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod182779){
return pnod182779;
}),nods__3015__auto____182780));
return enfocus.core.en_set_style.call(null,"﷐'font-size","2em");
})().call(null,pnod__3168__auto__);
}),600);
})),enfocus.core.en_set_style.call(null,"﷐'padding-top","0px"),enfocus.core.en_set_style.call(null,"﷐'margin-top","0px")).call(null,enfocus.core.css_select.call(null,"",pnod182761,cljs.core.Vector.fromArray(["#h1-header"])));
(function (pnod__3190__auto__){
return enfocus.core.en_resize.call(null,5,height,500,null,null).call(null,pnod__3190__auto__,(function (pnod__3190__auto__){
return enfocus.core.en_resize.call(null,width,"﷐'curheight",500,null,null).call(null,pnod__3190__auto__,(function (pnod__3190__auto__){
return enfocus.core.en_content.call(null,prezo.core.slide14.call(null)).call(null,pnod__3190__auto__,(function (pnod__3189__auto__){
return (function (p1__182760_SHARP_){
return prezo.core.start_slides.call(null,p1__182760_SHARP_);
}).call(null,pnod__3189__auto__);
}));
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod182761,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod182761;
}),nods__3015__auto____182762));
return document;
});
prezo.core.resize_pane = (function resize_pane(width,height){
var nods__3015__auto____182782 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod182781){
enfocus.core.en_resize.call(null,width,height,200,null,null).call(null,enfocus.core.css_select.call(null,"",pnod182781,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod182781;
}),nods__3015__auto____182782));
return document;
});
prezo.core.resize_content_pane = (function resize_content_pane(){
var size__182783 = goog.dom.getViewportSize.call(null);
var width__182784 = (size__182783.width - 40);
var height__182785 = (size__182783.height - 80);

return prezo.core.resize_pane.call(null,width__182784,height__182785);
});
prezo.core.init_content_pane = (function init_content_pane(){
var size__182786 = goog.dom.getViewportSize.call(null);
var width__182787 = (size__182786.width - 40);
var height__182788 = (size__182786.height - 80);

prezo.core.setup_pane.call(null,width__182787,height__182788);
enfocus.core.en_listen.call(null,"﷐'resize",prezo.core.resize_content_pane).call(null,window);
return window;
});
prezo.core.start = (function start(){
var nods__3015__auto____182791 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod182790){
enfocus.core.en_listen.call(null,"﷐'click",prezo.core.init_content_pane).call(null,enfocus.core.css_select.call(null,"",pnod182790,cljs.core.Vector.fromArray(["#inner-circle"])));
return pnod182790;
}),nods__3015__auto____182791));
return document;
});
prezo.core.enable_nav_keys = (function enable_nav_keys(){
enfocus.core.en_listen.call(null,"﷐'keydown",(function (p1__182789_SHARP_){
return prezo.core.exec_action_BANG_.call(null,p1__182789_SHARP_.keyCode);
})).call(null,document);
return document;
});
prezo.core.disable_nav_keys = (function disable_nav_keys(){
enfocus.core.en_remove_listeners.call(null,"﷐'keydown").call(null,document);
return document;
});
window.onload = (function (){
prezo.core.enable_nav_keys.call(null);
return prezo.core.start.call(null);
});
enfocus.core.load_remote_dom.call(null,"slides/what-should-I-build.html");
prezo.core.slide14 = (function slide14(){
var vec__182794__182795 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-should-I-build.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-should-I-build.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-should-I-build.html");
})]));
var id_sym182792__182796 = cljs.core.nth.call(null,vec__182794__182795,0,null);
var pnod182793__182797 = cljs.core.nth.call(null,vec__182794__182795,1,null);
var pnod182793__182798 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod182793__182797):pnod182793__182797);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym182792__182796,pnod182793__182798);
return enfocus.core.remove_node_return_child.call(null,pnod182793__182798);
} else
{return pnod182793__182798;
}
});
enfocus.core.load_remote_dom.call(null,"slides/choosing-your-materials.html");
prezo.core.slide15 = (function slide15(){
var vec__182801__182802 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/choosing-your-materials.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/choosing-your-materials.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/choosing-your-materials.html");
})]));
var id_sym182799__182803 = cljs.core.nth.call(null,vec__182801__182802,0,null);
var pnod182800__182804 = cljs.core.nth.call(null,vec__182801__182802,1,null);
var pnod182800__182805 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod182800__182804):pnod182800__182804);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym182799__182803,pnod182800__182805);
return enfocus.core.remove_node_return_child.call(null,pnod182800__182805);
} else
{return pnod182800__182805;
}
});
enfocus.core.load_remote_dom.call(null,"slides/why-not-closure-lib.html");
prezo.core.slide16 = (function slide16(){
var vec__182808__182809 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-not-closure-lib.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-not-closure-lib.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-not-closure-lib.html");
})]));
var id_sym182806__182810 = cljs.core.nth.call(null,vec__182808__182809,0,null);
var pnod182807__182811 = cljs.core.nth.call(null,vec__182808__182809,1,null);
var pnod182807__182812 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod182807__182811):pnod182807__182811);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym182806__182810,pnod182807__182812);
return enfocus.core.remove_node_return_child.call(null,pnod182807__182812);
} else
{return pnod182807__182812;
}
});
enfocus.core.load_remote_dom.call(null,"slides/why-closure-lib.html");
prezo.core.slide17 = (function slide17(){
var vec__182815__182816 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-closure-lib.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-closure-lib.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-closure-lib.html");
})]));
var id_sym182813__182817 = cljs.core.nth.call(null,vec__182815__182816,0,null);
var pnod182814__182818 = cljs.core.nth.call(null,vec__182815__182816,1,null);
var pnod182814__182819 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod182814__182818):pnod182814__182818);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym182813__182817,pnod182814__182819);
return enfocus.core.remove_node_return_child.call(null,pnod182814__182819);
} else
{return pnod182814__182819;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-naming.html");
prezo.core.slide18 = (function slide18(){
var vec__182822__182823 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-naming.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-naming.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-naming.html");
})]));
var id_sym182820__182824 = cljs.core.nth.call(null,vec__182822__182823,0,null);
var pnod182821__182825 = cljs.core.nth.call(null,vec__182822__182823,1,null);
var pnod182821__182826 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod182821__182825):pnod182821__182825);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym182820__182824,pnod182821__182826);
return enfocus.core.remove_node_return_child.call(null,pnod182821__182826);
} else
{return pnod182821__182826;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-lib-info-1.html");
prezo.core.slide19 = (function slide19(){
var vec__182829__182830 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-1.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-1.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-1.html");
})]));
var id_sym182827__182831 = cljs.core.nth.call(null,vec__182829__182830,0,null);
var pnod182828__182832 = cljs.core.nth.call(null,vec__182829__182830,1,null);
var pnod182828__182833 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod182828__182832):pnod182828__182832);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym182827__182831,pnod182828__182833);
return enfocus.core.remove_node_return_child.call(null,pnod182828__182833);
} else
{return pnod182828__182833;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-lib-info-2.html");
prezo.core.slide20 = (function slide20(){
var vec__182836__182837 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-2.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-2.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-2.html");
})]));
var id_sym182834__182838 = cljs.core.nth.call(null,vec__182836__182837,0,null);
var pnod182835__182839 = cljs.core.nth.call(null,vec__182836__182837,1,null);
var pnod182835__182840 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod182835__182839):pnod182835__182839);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym182834__182838,pnod182835__182840);
return enfocus.core.remove_node_return_child.call(null,pnod182835__182840);
} else
{return pnod182835__182840;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-lib-info-3.html");
prezo.core.slide21 = (function slide21(){
var vec__182843__182844 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-3.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-3.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-3.html");
})]));
var id_sym182841__182845 = cljs.core.nth.call(null,vec__182843__182844,0,null);
var pnod182842__182846 = cljs.core.nth.call(null,vec__182843__182844,1,null);
var pnod182842__182847 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod182842__182846):pnod182842__182846);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym182841__182845,pnod182842__182847);
return enfocus.core.remove_node_return_child.call(null,pnod182842__182847);
} else
{return pnod182842__182847;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-lib-info-4.html");
prezo.core.slide21_5 = (function slide21_5(){
var vec__182850__182851 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-4.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-4.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-4.html");
})]));
var id_sym182848__182852 = cljs.core.nth.call(null,vec__182850__182851,0,null);
var pnod182849__182853 = cljs.core.nth.call(null,vec__182850__182851,1,null);
var pnod182849__182854 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod182849__182853):pnod182849__182853);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym182848__182852,pnod182849__182854);
return enfocus.core.remove_node_return_child.call(null,pnod182849__182854);
} else
{return pnod182849__182854;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-third-party-tools.html");
prezo.core.slide22 = (function slide22(){
var vec__182857__182858 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-third-party-tools.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-third-party-tools.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-third-party-tools.html");
})]));
var id_sym182855__182859 = cljs.core.nth.call(null,vec__182857__182858,0,null);
var pnod182856__182860 = cljs.core.nth.call(null,vec__182857__182858,1,null);
var pnod182856__182861 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod182856__182860):pnod182856__182860);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym182855__182859,pnod182856__182861);
return enfocus.core.remove_node_return_child.call(null,pnod182856__182861);
} else
{return pnod182856__182861;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-externs-foreign-libs.html");
prezo.core.slide23 = (function slide23(){
var vec__182864__182865 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-externs-foreign-libs.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-externs-foreign-libs.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-externs-foreign-libs.html");
})]));
var id_sym182862__182866 = cljs.core.nth.call(null,vec__182864__182865,0,null);
var pnod182863__182867 = cljs.core.nth.call(null,vec__182864__182865,1,null);
var pnod182863__182868 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod182863__182867):pnod182863__182867);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym182862__182866,pnod182863__182868);
return enfocus.core.remove_node_return_child.call(null,pnod182863__182868);
} else
{return pnod182863__182868;
}
});
enfocus.core.load_remote_dom.call(null,"slides/atom-demo.html");
prezo.core.slide24 = (function slide24(){
var vec__182871__182872 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
})]));
var id_sym182869__182873 = cljs.core.nth.call(null,vec__182871__182872,0,null);
var pnod182870__182874 = cljs.core.nth.call(null,vec__182871__182872,1,null);
var pnod182870__182875 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod182870__182874):pnod182870__182874);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym182869__182873,pnod182870__182875);
return enfocus.core.remove_node_return_child.call(null,pnod182870__182875);
} else
{return pnod182870__182875;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-extern-cost.html");
prezo.core.slide25 = (function slide25(){
var vec__182878__182879 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-extern-cost.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-extern-cost.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-extern-cost.html");
})]));
var id_sym182876__182880 = cljs.core.nth.call(null,vec__182878__182879,0,null);
var pnod182877__182881 = cljs.core.nth.call(null,vec__182878__182879,1,null);
var pnod182877__182882 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod182877__182881):pnod182877__182881);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym182876__182880,pnod182877__182882);
return enfocus.core.remove_node_return_child.call(null,pnod182877__182882);
} else
{return pnod182877__182882;
}
});
enfocus.core.load_remote_dom.call(null,"slides/managing-upstream-deps.html");
prezo.core.slide26 = (function slide26(){
var vec__182885__182886 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/managing-upstream-deps.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/managing-upstream-deps.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/managing-upstream-deps.html");
})]));
var id_sym182883__182887 = cljs.core.nth.call(null,vec__182885__182886,0,null);
var pnod182884__182888 = cljs.core.nth.call(null,vec__182885__182886,1,null);
var pnod182884__182889 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod182884__182888):pnod182884__182888);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym182883__182887,pnod182884__182889);
return enfocus.core.remove_node_return_child.call(null,pnod182884__182889);
} else
{return pnod182884__182889;
}
});
enfocus.core.load_remote_dom.call(null,"slides/challenges-1.html");
prezo.core.slide27 = (function slide27(){
var vec__182892__182893 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-1.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-1.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-1.html");
})]));
var id_sym182890__182894 = cljs.core.nth.call(null,vec__182892__182893,0,null);
var pnod182891__182895 = cljs.core.nth.call(null,vec__182892__182893,1,null);
var pnod182891__182896 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod182891__182895):pnod182891__182895);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym182890__182894,pnod182891__182896);
return enfocus.core.remove_node_return_child.call(null,pnod182891__182896);
} else
{return pnod182891__182896;
}
});
enfocus.core.load_remote_dom.call(null,"slides/challenges-2.html");
prezo.core.slide28 = (function slide28(){
var vec__182899__182900 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-2.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-2.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-2.html");
})]));
var id_sym182897__182901 = cljs.core.nth.call(null,vec__182899__182900,0,null);
var pnod182898__182902 = cljs.core.nth.call(null,vec__182899__182900,1,null);
var pnod182898__182903 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod182898__182902):pnod182898__182902);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym182897__182901,pnod182898__182903);
return enfocus.core.remove_node_return_child.call(null,pnod182898__182903);
} else
{return pnod182898__182903;
}
});
enfocus.core.load_remote_dom.call(null,"slides/challenges-3.html");
prezo.core.slide29 = (function slide29(){
var vec__182906__182907 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-3.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-3.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-3.html");
})]));
var id_sym182904__182908 = cljs.core.nth.call(null,vec__182906__182907,0,null);
var pnod182905__182909 = cljs.core.nth.call(null,vec__182906__182907,1,null);
var pnod182905__182910 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod182905__182909):pnod182905__182909);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym182904__182908,pnod182905__182910);
return enfocus.core.remove_node_return_child.call(null,pnod182905__182910);
} else
{return pnod182905__182910;
}
});
enfocus.core.load_remote_dom.call(null,"slides/challenges-4.html");
prezo.core.slide30 = (function slide30(){
var vec__182913__182914 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-4.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-4.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-4.html");
})]));
var id_sym182911__182915 = cljs.core.nth.call(null,vec__182913__182914,0,null);
var pnod182912__182916 = cljs.core.nth.call(null,vec__182913__182914,1,null);
var pnod182912__182917 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod182912__182916):pnod182912__182916);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym182911__182915,pnod182912__182917);
return enfocus.core.remove_node_return_child.call(null,pnod182912__182917);
} else
{return pnod182912__182917;
}
});
enfocus.core.load_remote_dom.call(null,"slides/parting-advice.html");
prezo.core.slide31 = (function slide31(){
var vec__182920__182921 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/parting-advice.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/parting-advice.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/parting-advice.html");
})]));
var id_sym182918__182922 = cljs.core.nth.call(null,vec__182920__182921,0,null);
var pnod182919__182923 = cljs.core.nth.call(null,vec__182920__182921,1,null);
var pnod182919__182924 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod182919__182923):pnod182919__182923);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym182918__182922,pnod182919__182924);
return enfocus.core.remove_node_return_child.call(null,pnod182919__182924);
} else
{return pnod182919__182924;
}
});
enfocus.core.load_remote_dom.call(null,"slides/about-prezo.html");
prezo.core.slide32 = (function slide32(){
var vec__182927__182928 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/about-prezo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/about-prezo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/about-prezo.html");
})]));
var id_sym182925__182929 = cljs.core.nth.call(null,vec__182927__182928,0,null);
var pnod182926__182930 = cljs.core.nth.call(null,vec__182927__182928,1,null);
var pnod182926__182931 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod182926__182930):pnod182926__182930);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym182925__182929,pnod182926__182931);
return enfocus.core.remove_node_return_child.call(null,pnod182926__182931);
} else
{return pnod182926__182931;
}
});
enfocus.core.load_remote_dom.call(null,"slides/question.html");
prezo.core.slide33 = (function slide33(){
var vec__182934__182935 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
})]));
var id_sym182932__182936 = cljs.core.nth.call(null,vec__182934__182935,0,null);
var pnod182933__182937 = cljs.core.nth.call(null,vec__182934__182935,1,null);
var pnod182933__182938 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod182933__182937):pnod182933__182937);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym182932__182936,pnod182933__182938);
return enfocus.core.remove_node_return_child.call(null,pnod182933__182938);
} else
{return pnod182933__182938;
}
});
prezo.core.action_index = cljs.core.atom.call(null,0);
prezo.core.start_slides = (function start_slides(node){
prezo.core.transition_slide.call(null,prezo.core.slide14);
var nods__3015__auto____182940 = enfocus.core.nodes__GT_coll.call(null,node);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod182939){
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,enfocus.core.css_select.call(null,"",pnod182939,cljs.core.Vector.fromArray(["#mach-shop"])));
enfocus.core.en_fade_in.call(null,1000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod182939,cljs.core.Vector.fromArray([".slide"])));
return pnod182939;
}),nods__3015__auto____182940));
return node;
});
prezo.core.show_watchers = (function show_watchers(){
examples.net.jsonp.show_watchers.call(null,"ckirkendall","enfocus",prezo.util.by_id.call(null,"enfocus-w"));
examples.net.jsonp.show_watchers.call(null,"levand","domina",prezo.util.by_id.call(null,"domina-w"));
examples.net.jsonp.show_watchers.call(null,"ibdknox","jayq",prezo.util.by_id.call(null,"jayq-w"));
return examples.net.jsonp.show_watchers.call(null,"cgrand","enlive",prezo.util.by_id.call(null,"enlive-w"));
});
prezo.core.actions = cljs.core.Vector.fromArray([(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide14);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"mach-shop"));
return prezo.util.by_id.call(null,"mach-shop");
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide14);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"java-code"));
return prezo.util.by_id.call(null,"java-code");
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide14);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"clojure-code"));
return prezo.util.by_id.call(null,"clojure-code");
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide14);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"clojure-code"));
prezo.util.by_id.call(null,"clojure-code");
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"macro-text"));
return prezo.util.by_id.call(null,"macro-text");
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide15);
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide15);
return prezo.animation.call_out.call(null,prezo.util.by_id.call(null,"mat-list"),"Compatable with <br/>Google Closure Compiler",cljs.core.ObjMap.fromObject(["﷐'loc","﷐'size","﷐'font-offset","﷐'font-size"],{"﷐'loc":cljs.core.Vector.fromArray([-5,-2]),"﷐'size":cljs.core.Vector.fromArray([370,105]),"﷐'font-offset":cljs.core.Vector.fromArray([380,-105]),"﷐'font-size":"2em"}));
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide16);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide17);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide18);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide19);
}),(function actions(){
prezo.core.transition_slide.call(null,prezo.core.slide21);
prezo.core.show_watchers.call(null);
enfocus.core.en_listen.call(null,"﷐'click",prezo.core.show_watchers).call(null,prezo.util.by_id.call(null,"watch-but"));
return prezo.util.by_id.call(null,"watch-but");
}),(function actions(){
prezo.core.transition_slide.call(null,prezo.core.slide21_5);
enfocus.core.en_listen.call(null,"﷐'click",(function (event){
enfocus.core.en_content.call(null,"").call(null,event.currentTarget);
event.currentTarget;
return examples.graphics.core.draw_image.call(null,prezo.util.by_id.call(null,"clj-logo"),250,250,examples.graphics.data2.clojure_logo_data,2.5);
})).call(null,prezo.util.by_id.call(null,"clj-logo"));
prezo.util.by_id.call(null,"clj-logo");
return examples.graphics.core.draw_image.call(null,prezo.util.by_id.call(null,"clj-logo"),200,200,examples.graphics.data2.clojure_logo_data,2.0);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide20);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide22);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide23);
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide23);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text"));
return prezo.util.by_id.call(null,"missing-text");
}),(function actions(){
prezo.core.transition_slide.call(null,prezo.core.slide24);
prezo.atom.user_view.call(null,cljs.core.deref.call(null,prezo.atom.my_user));
var nods__3015__auto____182942 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod182941){
enfocus.core.en_listen.call(null,"﷐'click",prezo.atom.persist_user_form).call(null,enfocus.core.css_select.call(null,"",pnod182941,cljs.core.Vector.fromArray(["#user-submit"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_listen.call(null,"﷐'focus",prezo.core.disable_nav_keys),enfocus.core.en_listen.call(null,"﷐'blur",prezo.core.enable_nav_keys)).call(null,enfocus.core.css_select.call(null,"",pnod182941,cljs.core.Vector.fromArray(["input"])));
return pnod182941;
}),nods__3015__auto____182942));
return document;
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide25);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide26);
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide26);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text"));
return prezo.util.by_id.call(null,"missing-text");
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide26);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"clj-is"));
return prezo.util.by_id.call(null,"clj-is");
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide27);
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide27);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"google-img"));
return prezo.util.by_id.call(null,"google-img");
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide27);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"google-img"));
prezo.util.by_id.call(null,"google-img");
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text"));
return prezo.util.by_id.call(null,"missing-text");
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide28);
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide28);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"rtfm-img"));
return prezo.util.by_id.call(null,"rtfm-img");
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide28);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"rtfm-x-img"));
prezo.util.by_id.call(null,"rtfm-x-img");
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text"));
return prezo.util.by_id.call(null,"missing-text");
}),(function actions(){
prezo.core.transition_slide.call(null,prezo.core.slide29);
var size__182943 = goog.dom.getViewportSize.call(null);

enfocus.core.en_do__GT_.call(null,enfocus.core.en_move.call(null,-300,(size__182943.height + 300),0,null,null),enfocus.core.en_set_style.call(null,"﷐'display",""),enfocus.core.chainable_standard.call(null,(function (pnod__3168__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__3015__auto____182945 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_move.call(null,(size__182943.width + 200),-300,2000,null,null));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod182944){
return pnod182944;
}),nods__3015__auto____182945));
return enfocus.core.en_move.call(null,(size__182943.width + 200),-300,2000,null,null);
})().call(null,pnod__3168__auto__);
}),1000);
}))).call(null,prezo.util.by_id.call(null,"cockroach-bug"));
return prezo.util.by_id.call(null,"cockroach-bug");
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide30);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide31);
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide31);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text1"));
return prezo.util.by_id.call(null,"missing-text1");
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide31);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text1"));
prezo.util.by_id.call(null,"missing-text1");
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text2"));
return prezo.util.by_id.call(null,"missing-text2");
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide31);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text1"));
prezo.util.by_id.call(null,"missing-text1");
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text2"));
prezo.util.by_id.call(null,"missing-text2");
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text3"));
return prezo.util.by_id.call(null,"missing-text3");
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide31);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text1"));
prezo.util.by_id.call(null,"missing-text1");
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text2"));
prezo.util.by_id.call(null,"missing-text2");
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text3"));
prezo.util.by_id.call(null,"missing-text3");
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text4"));
return prezo.util.by_id.call(null,"missing-text4");
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide31);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text1"));
prezo.util.by_id.call(null,"missing-text1");
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text2"));
prezo.util.by_id.call(null,"missing-text2");
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text3"));
prezo.util.by_id.call(null,"missing-text3");
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text4"));
prezo.util.by_id.call(null,"missing-text4");
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text5"));
return prezo.util.by_id.call(null,"missing-text5");
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide32);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide33);
})]);
prezo.core.back_key_codes = cljs.core.set([66,37,38,8,80]);
prezo.core.forward_key_codes = cljs.core.set([32,39,40,78]);
prezo.core.start_key_codes = cljs.core.set([83]);
prezo.core.exec_action_BANG_ = (function exec_action_BANG_(keycode){
if(cljs.core.truth_((cljs.core.truth_(cljs.core.contains_QMARK_.call(null,prezo.core.forward_key_codes,keycode))?cljs.core.swap_BANG_.call(null,prezo.core.action_index,(function (p1__182946_SHARP_){
return ((p1__182946_SHARP_ + 1) % cljs.core.count.call(null,prezo.core.actions));
})):(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,prezo.core.back_key_codes,keycode))?cljs.core.swap_BANG_.call(null,prezo.core.action_index,(function (p1__182947_SHARP_){
var idx__182948 = ((p1__182947_SHARP_ - 1) % cljs.core.count.call(null,prezo.core.actions));
var idx__182949 = (cljs.core.truth_((idx__182948 < 0))?(cljs.core.count.call(null,prezo.core.actions) + idx__182948):idx__182948);

return idx__182949;
})):(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,prezo.core.start_key_codes,keycode))?cljs.core.reset_BANG_.call(null,prezo.core.action_index,0):(cljs.core.truth_("﷐'else")?null:null))))))
{var func__182950 = cljs.core.nth.call(null,prezo.core.actions,cljs.core.deref.call(null,prezo.core.action_index));

return func__182950.call(null);
} else
{return null;
}
});
prezo.core.transition_slide = (function transition_slide(init_func){
var nods__3015__auto____182952 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod182951){
enfocus.core.en_fade_out.call(null,2000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod182951,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_content.call(null,init_func.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod182951,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_fade_in.call(null,1000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod182951,cljs.core.Vector.fromArray([".slide"])));
return pnod182951;
}),nods__3015__auto____182952));
return document;
});
prezo.core.reset_slide = (function reset_slide(init_func){
var nods__3015__auto____182954 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod182953){
enfocus.core.en_content.call(null,init_func.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod182953,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_set_style.call(null,"﷐'opacity","1.0").call(null,enfocus.core.css_select.call(null,"",pnod182953,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_set_style.call(null,"﷐'filter","alpha(opacity=100)").call(null,enfocus.core.css_select.call(null,"",pnod182953,cljs.core.Vector.fromArray([".slide"])));
return pnod182953;
}),nods__3015__auto____182954));
return document;
});
