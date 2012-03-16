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
var nods__3046__auto____19054 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod19053){
enfocus.core.en_fade_out.call(null,500,null,null).call(null,enfocus.core.css_select.call(null,"",pnod19053,cljs.core.Vector.fromArray(["#h2-header"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.chainable_standard.call(null,(function (pnod__3199__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__3046__auto____19056 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'font-size","3.2em"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod19055){
return pnod19055;
}),nods__3046__auto____19056));
return enfocus.core.en_set_style.call(null,"﷐'font-size","3.2em");
})().call(null,pnod__3199__auto__);
}),200);
})),enfocus.core.chainable_standard.call(null,(function (pnod__3199__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__3046__auto____19058 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'font-size","3.05em"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod19057){
return pnod19057;
}),nods__3046__auto____19058));
return enfocus.core.en_set_style.call(null,"﷐'font-size","3.05em");
})().call(null,pnod__3199__auto__);
}),250);
})),enfocus.core.chainable_standard.call(null,(function (pnod__3199__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__3046__auto____19060 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'font-size","2.9em"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod19059){
return pnod19059;
}),nods__3046__auto____19060));
return enfocus.core.en_set_style.call(null,"﷐'font-size","2.9em");
})().call(null,pnod__3199__auto__);
}),300);
})),enfocus.core.chainable_standard.call(null,(function (pnod__3199__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__3046__auto____19062 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'font-size","2.75em"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod19061){
return pnod19061;
}),nods__3046__auto____19062));
return enfocus.core.en_set_style.call(null,"﷐'font-size","2.75em");
})().call(null,pnod__3199__auto__);
}),350);
})),enfocus.core.chainable_standard.call(null,(function (pnod__3199__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__3046__auto____19064 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'font-size","2.6em"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod19063){
return pnod19063;
}),nods__3046__auto____19064));
return enfocus.core.en_set_style.call(null,"﷐'font-size","2.6em");
})().call(null,pnod__3199__auto__);
}),400);
})),enfocus.core.chainable_standard.call(null,(function (pnod__3199__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__3046__auto____19066 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'font-size","2.45em"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod19065){
return pnod19065;
}),nods__3046__auto____19066));
return enfocus.core.en_set_style.call(null,"﷐'font-size","2.45em");
})().call(null,pnod__3199__auto__);
}),450);
})),enfocus.core.chainable_standard.call(null,(function (pnod__3199__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__3046__auto____19068 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'font-size","2.3em"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod19067){
return pnod19067;
}),nods__3046__auto____19068));
return enfocus.core.en_set_style.call(null,"﷐'font-size","2.3em");
})().call(null,pnod__3199__auto__);
}),500);
})),enfocus.core.chainable_standard.call(null,(function (pnod__3199__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__3046__auto____19070 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'font-size","2.15em"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod19069){
return pnod19069;
}),nods__3046__auto____19070));
return enfocus.core.en_set_style.call(null,"﷐'font-size","2.15em");
})().call(null,pnod__3199__auto__);
}),550);
})),enfocus.core.chainable_standard.call(null,(function (pnod__3199__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__3046__auto____19072 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'font-size","2em"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod19071){
return pnod19071;
}),nods__3046__auto____19072));
return enfocus.core.en_set_style.call(null,"﷐'font-size","2em");
})().call(null,pnod__3199__auto__);
}),600);
})),enfocus.core.en_set_style.call(null,"﷐'padding-top","0px"),enfocus.core.en_set_style.call(null,"﷐'margin-top","0px")).call(null,enfocus.core.css_select.call(null,"",pnod19053,cljs.core.Vector.fromArray(["#h1-header"])));
(function (pnod__3221__auto__){
return enfocus.core.en_resize.call(null,5,height,500,null,null).call(null,pnod__3221__auto__,(function (pnod__3221__auto__){
return enfocus.core.en_resize.call(null,width,"﷐'curheight",500,null,null).call(null,pnod__3221__auto__,(function (pnod__3221__auto__){
return enfocus.core.en_content.call(null,prezo.core.slide14.call(null)).call(null,pnod__3221__auto__,(function (pnod__3220__auto__){
return (function (p1__19052_SHARP_){
return prezo.core.start_slides.call(null,p1__19052_SHARP_);
}).call(null,pnod__3220__auto__);
}));
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod19053,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod19053;
}),nods__3046__auto____19054));
return document;
});
prezo.core.resize_pane = (function resize_pane(width,height){
var nods__3046__auto____19074 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod19073){
enfocus.core.en_resize.call(null,width,height,200,null,null).call(null,enfocus.core.css_select.call(null,"",pnod19073,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod19073;
}),nods__3046__auto____19074));
return document;
});
prezo.core.resize_content_pane = (function resize_content_pane(){
var size__19075 = goog.dom.getViewportSize.call(null);
var width__19076 = (size__19075.width - 40);
var height__19077 = (size__19075.height - 80);

return prezo.core.resize_pane.call(null,width__19076,height__19077);
});
prezo.core.init_content_pane = (function init_content_pane(){
var size__19078 = goog.dom.getViewportSize.call(null);
var width__19079 = (size__19078.width - 40);
var height__19080 = (size__19078.height - 80);

prezo.core.setup_pane.call(null,width__19079,height__19080);
enfocus.core.en_listen.call(null,"﷐'resize",prezo.core.resize_content_pane).call(null,window);
return window;
});
prezo.core.start = (function start(){
var nods__3046__auto____19083 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod19082){
enfocus.core.en_listen.call(null,"﷐'click",prezo.core.init_content_pane).call(null,enfocus.core.css_select.call(null,"",pnod19082,cljs.core.Vector.fromArray(["#inner-circle"])));
return pnod19082;
}),nods__3046__auto____19083));
return document;
});
prezo.core.enable_nav_keys = (function enable_nav_keys(){
enfocus.core.en_listen.call(null,"﷐'keydown",(function (p1__19081_SHARP_){
return prezo.core.exec_action_BANG_.call(null,p1__19081_SHARP_.keyCode);
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
var vec__19086__19087 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-should-I-build.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-should-I-build.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-should-I-build.html");
})]));
var id_sym19084__19088 = cljs.core.nth.call(null,vec__19086__19087,0,null);
var pnod19085__19089 = cljs.core.nth.call(null,vec__19086__19087,1,null);
var pnod19085__19090 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod19085__19089):pnod19085__19089);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym19084__19088,pnod19085__19090);
return enfocus.core.remove_node_return_child.call(null,pnod19085__19090);
} else
{return pnod19085__19090;
}
});
enfocus.core.load_remote_dom.call(null,"slides/choosing-your-materials.html");
prezo.core.slide15 = (function slide15(){
var vec__19093__19094 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/choosing-your-materials.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/choosing-your-materials.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/choosing-your-materials.html");
})]));
var id_sym19091__19095 = cljs.core.nth.call(null,vec__19093__19094,0,null);
var pnod19092__19096 = cljs.core.nth.call(null,vec__19093__19094,1,null);
var pnod19092__19097 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod19092__19096):pnod19092__19096);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym19091__19095,pnod19092__19097);
return enfocus.core.remove_node_return_child.call(null,pnod19092__19097);
} else
{return pnod19092__19097;
}
});
enfocus.core.load_remote_dom.call(null,"slides/why-not-closure-lib.html");
prezo.core.slide16 = (function slide16(){
var vec__19100__19101 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-not-closure-lib.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-not-closure-lib.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-not-closure-lib.html");
})]));
var id_sym19098__19102 = cljs.core.nth.call(null,vec__19100__19101,0,null);
var pnod19099__19103 = cljs.core.nth.call(null,vec__19100__19101,1,null);
var pnod19099__19104 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod19099__19103):pnod19099__19103);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym19098__19102,pnod19099__19104);
return enfocus.core.remove_node_return_child.call(null,pnod19099__19104);
} else
{return pnod19099__19104;
}
});
enfocus.core.load_remote_dom.call(null,"slides/why-closure-lib.html");
prezo.core.slide17 = (function slide17(){
var vec__19107__19108 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-closure-lib.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-closure-lib.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-closure-lib.html");
})]));
var id_sym19105__19109 = cljs.core.nth.call(null,vec__19107__19108,0,null);
var pnod19106__19110 = cljs.core.nth.call(null,vec__19107__19108,1,null);
var pnod19106__19111 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod19106__19110):pnod19106__19110);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym19105__19109,pnod19106__19111);
return enfocus.core.remove_node_return_child.call(null,pnod19106__19111);
} else
{return pnod19106__19111;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-naming.html");
prezo.core.slide18 = (function slide18(){
var vec__19114__19115 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-naming.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-naming.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-naming.html");
})]));
var id_sym19112__19116 = cljs.core.nth.call(null,vec__19114__19115,0,null);
var pnod19113__19117 = cljs.core.nth.call(null,vec__19114__19115,1,null);
var pnod19113__19118 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod19113__19117):pnod19113__19117);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym19112__19116,pnod19113__19118);
return enfocus.core.remove_node_return_child.call(null,pnod19113__19118);
} else
{return pnod19113__19118;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-lib-info-1.html");
prezo.core.slide19 = (function slide19(){
var vec__19121__19122 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-1.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-1.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-1.html");
})]));
var id_sym19119__19123 = cljs.core.nth.call(null,vec__19121__19122,0,null);
var pnod19120__19124 = cljs.core.nth.call(null,vec__19121__19122,1,null);
var pnod19120__19125 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod19120__19124):pnod19120__19124);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym19119__19123,pnod19120__19125);
return enfocus.core.remove_node_return_child.call(null,pnod19120__19125);
} else
{return pnod19120__19125;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-lib-info-2.html");
prezo.core.slide20 = (function slide20(){
var vec__19128__19129 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-2.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-2.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-2.html");
})]));
var id_sym19126__19130 = cljs.core.nth.call(null,vec__19128__19129,0,null);
var pnod19127__19131 = cljs.core.nth.call(null,vec__19128__19129,1,null);
var pnod19127__19132 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod19127__19131):pnod19127__19131);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym19126__19130,pnod19127__19132);
return enfocus.core.remove_node_return_child.call(null,pnod19127__19132);
} else
{return pnod19127__19132;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-lib-info-3.html");
prezo.core.slide21 = (function slide21(){
var vec__19135__19136 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-3.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-3.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-3.html");
})]));
var id_sym19133__19137 = cljs.core.nth.call(null,vec__19135__19136,0,null);
var pnod19134__19138 = cljs.core.nth.call(null,vec__19135__19136,1,null);
var pnod19134__19139 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod19134__19138):pnod19134__19138);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym19133__19137,pnod19134__19139);
return enfocus.core.remove_node_return_child.call(null,pnod19134__19139);
} else
{return pnod19134__19139;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-lib-info-4.html");
prezo.core.slide21_5 = (function slide21_5(){
var vec__19142__19143 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-4.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-4.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-4.html");
})]));
var id_sym19140__19144 = cljs.core.nth.call(null,vec__19142__19143,0,null);
var pnod19141__19145 = cljs.core.nth.call(null,vec__19142__19143,1,null);
var pnod19141__19146 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod19141__19145):pnod19141__19145);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym19140__19144,pnod19141__19146);
return enfocus.core.remove_node_return_child.call(null,pnod19141__19146);
} else
{return pnod19141__19146;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-third-party-tools.html");
prezo.core.slide22 = (function slide22(){
var vec__19149__19150 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-third-party-tools.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-third-party-tools.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-third-party-tools.html");
})]));
var id_sym19147__19151 = cljs.core.nth.call(null,vec__19149__19150,0,null);
var pnod19148__19152 = cljs.core.nth.call(null,vec__19149__19150,1,null);
var pnod19148__19153 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod19148__19152):pnod19148__19152);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym19147__19151,pnod19148__19153);
return enfocus.core.remove_node_return_child.call(null,pnod19148__19153);
} else
{return pnod19148__19153;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-externs-foreign-libs.html");
prezo.core.slide23 = (function slide23(){
var vec__19156__19157 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-externs-foreign-libs.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-externs-foreign-libs.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-externs-foreign-libs.html");
})]));
var id_sym19154__19158 = cljs.core.nth.call(null,vec__19156__19157,0,null);
var pnod19155__19159 = cljs.core.nth.call(null,vec__19156__19157,1,null);
var pnod19155__19160 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod19155__19159):pnod19155__19159);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym19154__19158,pnod19155__19160);
return enfocus.core.remove_node_return_child.call(null,pnod19155__19160);
} else
{return pnod19155__19160;
}
});
enfocus.core.load_remote_dom.call(null,"slides/atom-demo.html");
prezo.core.slide24 = (function slide24(){
var vec__19163__19164 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
})]));
var id_sym19161__19165 = cljs.core.nth.call(null,vec__19163__19164,0,null);
var pnod19162__19166 = cljs.core.nth.call(null,vec__19163__19164,1,null);
var pnod19162__19167 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod19162__19166):pnod19162__19166);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym19161__19165,pnod19162__19167);
return enfocus.core.remove_node_return_child.call(null,pnod19162__19167);
} else
{return pnod19162__19167;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-extern-cost.html");
prezo.core.slide25 = (function slide25(){
var vec__19170__19171 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-extern-cost.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-extern-cost.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-extern-cost.html");
})]));
var id_sym19168__19172 = cljs.core.nth.call(null,vec__19170__19171,0,null);
var pnod19169__19173 = cljs.core.nth.call(null,vec__19170__19171,1,null);
var pnod19169__19174 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod19169__19173):pnod19169__19173);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym19168__19172,pnod19169__19174);
return enfocus.core.remove_node_return_child.call(null,pnod19169__19174);
} else
{return pnod19169__19174;
}
});
enfocus.core.load_remote_dom.call(null,"slides/managing-upstream-deps.html");
prezo.core.slide26 = (function slide26(){
var vec__19177__19178 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/managing-upstream-deps.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/managing-upstream-deps.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/managing-upstream-deps.html");
})]));
var id_sym19175__19179 = cljs.core.nth.call(null,vec__19177__19178,0,null);
var pnod19176__19180 = cljs.core.nth.call(null,vec__19177__19178,1,null);
var pnod19176__19181 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod19176__19180):pnod19176__19180);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym19175__19179,pnod19176__19181);
return enfocus.core.remove_node_return_child.call(null,pnod19176__19181);
} else
{return pnod19176__19181;
}
});
enfocus.core.load_remote_dom.call(null,"slides/challenges-1.html");
prezo.core.slide27 = (function slide27(){
var vec__19184__19185 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-1.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-1.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-1.html");
})]));
var id_sym19182__19186 = cljs.core.nth.call(null,vec__19184__19185,0,null);
var pnod19183__19187 = cljs.core.nth.call(null,vec__19184__19185,1,null);
var pnod19183__19188 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod19183__19187):pnod19183__19187);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym19182__19186,pnod19183__19188);
return enfocus.core.remove_node_return_child.call(null,pnod19183__19188);
} else
{return pnod19183__19188;
}
});
enfocus.core.load_remote_dom.call(null,"slides/challenges-2.html");
prezo.core.slide28 = (function slide28(){
var vec__19191__19192 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-2.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-2.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-2.html");
})]));
var id_sym19189__19193 = cljs.core.nth.call(null,vec__19191__19192,0,null);
var pnod19190__19194 = cljs.core.nth.call(null,vec__19191__19192,1,null);
var pnod19190__19195 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod19190__19194):pnod19190__19194);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym19189__19193,pnod19190__19195);
return enfocus.core.remove_node_return_child.call(null,pnod19190__19195);
} else
{return pnod19190__19195;
}
});
enfocus.core.load_remote_dom.call(null,"slides/challenges-3.html");
prezo.core.slide29 = (function slide29(){
var vec__19198__19199 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-3.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-3.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-3.html");
})]));
var id_sym19196__19200 = cljs.core.nth.call(null,vec__19198__19199,0,null);
var pnod19197__19201 = cljs.core.nth.call(null,vec__19198__19199,1,null);
var pnod19197__19202 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod19197__19201):pnod19197__19201);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym19196__19200,pnod19197__19202);
return enfocus.core.remove_node_return_child.call(null,pnod19197__19202);
} else
{return pnod19197__19202;
}
});
enfocus.core.load_remote_dom.call(null,"slides/challenges-4.html");
prezo.core.slide30 = (function slide30(){
var vec__19205__19206 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-4.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-4.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-4.html");
})]));
var id_sym19203__19207 = cljs.core.nth.call(null,vec__19205__19206,0,null);
var pnod19204__19208 = cljs.core.nth.call(null,vec__19205__19206,1,null);
var pnod19204__19209 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod19204__19208):pnod19204__19208);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym19203__19207,pnod19204__19209);
return enfocus.core.remove_node_return_child.call(null,pnod19204__19209);
} else
{return pnod19204__19209;
}
});
enfocus.core.load_remote_dom.call(null,"slides/parting-advice.html");
prezo.core.slide31 = (function slide31(){
var vec__19212__19213 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/parting-advice.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/parting-advice.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/parting-advice.html");
})]));
var id_sym19210__19214 = cljs.core.nth.call(null,vec__19212__19213,0,null);
var pnod19211__19215 = cljs.core.nth.call(null,vec__19212__19213,1,null);
var pnod19211__19216 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod19211__19215):pnod19211__19215);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym19210__19214,pnod19211__19216);
return enfocus.core.remove_node_return_child.call(null,pnod19211__19216);
} else
{return pnod19211__19216;
}
});
enfocus.core.load_remote_dom.call(null,"slides/about-prezo.html");
prezo.core.slide32 = (function slide32(){
var vec__19219__19220 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/about-prezo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/about-prezo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/about-prezo.html");
})]));
var id_sym19217__19221 = cljs.core.nth.call(null,vec__19219__19220,0,null);
var pnod19218__19222 = cljs.core.nth.call(null,vec__19219__19220,1,null);
var pnod19218__19223 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod19218__19222):pnod19218__19222);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym19217__19221,pnod19218__19223);
return enfocus.core.remove_node_return_child.call(null,pnod19218__19223);
} else
{return pnod19218__19223;
}
});
enfocus.core.load_remote_dom.call(null,"slides/question.html");
prezo.core.slide33 = (function slide33(){
var vec__19226__19227 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
})]));
var id_sym19224__19228 = cljs.core.nth.call(null,vec__19226__19227,0,null);
var pnod19225__19229 = cljs.core.nth.call(null,vec__19226__19227,1,null);
var pnod19225__19230 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod19225__19229):pnod19225__19229);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym19224__19228,pnod19225__19230);
return enfocus.core.remove_node_return_child.call(null,pnod19225__19230);
} else
{return pnod19225__19230;
}
});
prezo.core.action_index = cljs.core.atom.call(null,0);
prezo.core.start_slides = (function start_slides(node){
prezo.core.transition_slide.call(null,prezo.core.slide14);
var nods__3046__auto____19232 = enfocus.core.nodes__GT_coll.call(null,node);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod19231){
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,enfocus.core.css_select.call(null,"",pnod19231,cljs.core.Vector.fromArray(["#mach-shop"])));
enfocus.core.en_fade_in.call(null,1000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod19231,cljs.core.Vector.fromArray([".slide"])));
return pnod19231;
}),nods__3046__auto____19232));
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
var nods__3046__auto____19234 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod19233){
enfocus.core.en_listen.call(null,"﷐'click",prezo.atom.persist_user_form).call(null,enfocus.core.css_select.call(null,"",pnod19233,cljs.core.Vector.fromArray(["#user-submit"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_listen.call(null,"﷐'focus",prezo.core.disable_nav_keys),enfocus.core.en_listen.call(null,"﷐'blur",prezo.core.enable_nav_keys)).call(null,enfocus.core.css_select.call(null,"",pnod19233,cljs.core.Vector.fromArray(["input"])));
return pnod19233;
}),nods__3046__auto____19234));
return document;
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide25);
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide25);
return prezo.animation.call_out.call(null,prezo.util.by_id.call(null,"graph"),"Shouldn't we cache this?",cljs.core.ObjMap.fromObject(["﷐'loc","﷐'size","﷐'font-offset","﷐'font-size"],{"﷐'loc":cljs.core.Vector.fromArray([300,80]),"﷐'size":cljs.core.Vector.fromArray([350,110]),"﷐'font-offset":cljs.core.Vector.fromArray([-5,-150]),"﷐'font-size":"2em"}));
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
var size__19235 = goog.dom.getViewportSize.call(null);

enfocus.core.en_do__GT_.call(null,enfocus.core.en_move.call(null,-300,(size__19235.height + 300),0,null,null),enfocus.core.en_set_style.call(null,"﷐'display",""),enfocus.core.chainable_standard.call(null,(function (pnod__3199__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__3046__auto____19237 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_move.call(null,(size__19235.width + 200),-300,2000,null,null));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod19236){
return pnod19236;
}),nods__3046__auto____19237));
return enfocus.core.en_move.call(null,(size__19235.width + 200),-300,2000,null,null);
})().call(null,pnod__3199__auto__);
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
if(cljs.core.truth_((cljs.core.truth_(cljs.core.contains_QMARK_.call(null,prezo.core.forward_key_codes,keycode))?cljs.core.swap_BANG_.call(null,prezo.core.action_index,(function (p1__19238_SHARP_){
return ((p1__19238_SHARP_ + 1) % cljs.core.count.call(null,prezo.core.actions));
})):(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,prezo.core.back_key_codes,keycode))?cljs.core.swap_BANG_.call(null,prezo.core.action_index,(function (p1__19239_SHARP_){
var idx__19240 = ((p1__19239_SHARP_ - 1) % cljs.core.count.call(null,prezo.core.actions));
var idx__19241 = (cljs.core.truth_((idx__19240 < 0))?(cljs.core.count.call(null,prezo.core.actions) + idx__19240):idx__19240);

return idx__19241;
})):(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,prezo.core.start_key_codes,keycode))?cljs.core.reset_BANG_.call(null,prezo.core.action_index,0):(cljs.core.truth_("﷐'else")?null:null))))))
{var func__19242 = cljs.core.nth.call(null,prezo.core.actions,cljs.core.deref.call(null,prezo.core.action_index));

return func__19242.call(null);
} else
{return null;
}
});
prezo.core.transition_slide = (function transition_slide(init_func){
var nods__3046__auto____19244 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod19243){
enfocus.core.en_fade_out.call(null,2000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod19243,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_content.call(null,init_func.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod19243,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_fade_in.call(null,1000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod19243,cljs.core.Vector.fromArray([".slide"])));
return pnod19243;
}),nods__3046__auto____19244));
return document;
});
prezo.core.reset_slide = (function reset_slide(init_func){
var nods__3046__auto____19246 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod19245){
enfocus.core.en_content.call(null,init_func.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod19245,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_set_style.call(null,"﷐'opacity","1.0").call(null,enfocus.core.css_select.call(null,"",pnod19245,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_set_style.call(null,"﷐'filter","alpha(opacity=100)").call(null,enfocus.core.css_select.call(null,"",pnod19245,cljs.core.Vector.fromArray([".slide"])));
return pnod19245;
}),nods__3046__auto____19246));
return document;
});
