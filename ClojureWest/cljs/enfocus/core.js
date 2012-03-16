goog.provide('enfocus.core');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('goog.async.Delay');
goog.require('goog.dom.classes');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('goog.fx.dom');
goog.require('goog.Timer');
goog.require('goog.style');
goog.require('goog.net.XhrIo');
goog.require('goog.fx');
enfocus.core.debug = true;
enfocus.core.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____20903 = enfocus.core.debug;

if(cljs.core.truth_(and__3546__auto____20903))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____20903;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
enfocus.core.setTimeout = (function setTimeout(func,ttime){
return goog.Timer.callOnce.call(null,func,ttime);
});
enfocus.core.node_QMARK_ = (function node_QMARK_(tst){
return goog.dom.isNodeLike.call(null,tst);
});
enfocus.core.nodelist_QMARK_ = (function nodelist_QMARK_(tst){
return cljs.core.instance_QMARK_.call(null,NodeList,tst);
});
/**
* coverts a nodelist, node into a collection
*/
enfocus.core.nodes__GT_coll = (function nodes__GT_coll(nl){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,nl)))
{return cljs.core.Vector.fromArray([]);
} else
{if(cljs.core.truth_(enfocus.core.node_QMARK_.call(null,nl)))
{return cljs.core.Vector.fromArray([nl]);
} else
{if(cljs.core.truth_((window === nl)))
{return cljs.core.Vector.fromArray([nl]);
} else
{if(cljs.core.truth_((function (){var or__3548__auto____20905 = cljs.core.instance_QMARK_.call(null,Array,nl);

if(cljs.core.truth_(or__3548__auto____20905))
{return or__3548__auto____20905;
} else
{return cljs.core.coll_QMARK_.call(null,nl);
}
})()))
{return nl;
} else
{if(cljs.core.truth_(enfocus.core.nodelist_QMARK_.call(null,nl)))
{var iter__509__auto____20910 = (function iter__20906(s__20907){
return (new cljs.core.LazySeq(null,false,(function (){
var s__20907__20908 = s__20907;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__20907__20908)))
{var x__20909 = cljs.core.first.call(null,s__20907__20908);

return cljs.core.cons.call(null,(nl[x__20909]),iter__20906.call(null,cljs.core.rest.call(null,s__20907__20908)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____20910.call(null,cljs.core.range.call(null,0,nl.length));
} else
{return null;
}
}
}
}
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){
return cljs.core.mapcat.call(null,(function (p1__20904_SHARP_){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__20904_SHARP_)))
{return cljs.core.Vector.fromArray([goog.dom.createTextNode.call(null,p1__20904_SHARP_)]);
} else
{if(cljs.core.truth_("﷐'else"))
{return enfocus.core.nodes__GT_coll.call(null,p1__20904_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){
var G__20911__20912 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));

if(cljs.core.truth_(G__20911__20912))
{var G__20914__20916 = cljs.core.first.call(null,G__20911__20912);
var vec__20915__20917 = G__20914__20916;
var attr__20918 = cljs.core.nth.call(null,vec__20915__20917,0,null);
var value__20919 = cljs.core.nth.call(null,vec__20915__20917,1,null);
var G__20911__20920 = G__20911__20912;

var G__20914__20921 = G__20914__20916;
var G__20911__20922 = G__20911__20920;

while(true){
var vec__20923__20924 = G__20914__20921;
var attr__20925 = cljs.core.nth.call(null,vec__20923__20924,0,null);
var value__20926 = cljs.core.nth.call(null,vec__20923__20924,1,null);
var G__20911__20927 = G__20911__20922;

goog.style.setStyle.call(null,obj,cljs.core.name.call(null,attr__20925),value__20926);
var temp__3698__auto____20928 = cljs.core.next.call(null,G__20911__20927);

if(cljs.core.truth_(temp__3698__auto____20928))
{var G__20911__20929 = temp__3698__auto____20928;

{
var G__20930 = cljs.core.first.call(null,G__20911__20929);
var G__20931 = G__20911__20929;
G__20914__20921 = G__20930;
G__20911__20922 = G__20931;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});
/**
* removes the property value from an elements style obj.
*/
enfocus.core.style_remove = (function style_remove(obj,values){
var G__20932__20933 = cljs.core.seq.call(null,values);

if(cljs.core.truth_(G__20932__20933))
{var attr__20934 = cljs.core.first.call(null,G__20932__20933);
var G__20932__20935 = G__20932__20933;

while(true){
if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle.call(null,obj,cljs.core.name.call(null,attr__20934),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr__20934));
}
var temp__3698__auto____20936 = cljs.core.next.call(null,G__20932__20935);

if(cljs.core.truth_(temp__3698__auto____20936))
{var G__20932__20937 = temp__3698__auto____20936;

{
var G__20938 = cljs.core.first.call(null,G__20932__20937);
var G__20939 = G__20932__20937;
attr__20934 = G__20938;
G__20932__20935 = G__20939;
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
enfocus.core.get_eff_prop_name = (function get_eff_prop_name(etype){
return cljs.core.str.call(null,"__ef_effect_",etype);
});
enfocus.core.get_mills = (function get_mills(){
return (new Date()).getMilliseconds();
});
/**
* returns true if the node(child) is a child of parent
*/
enfocus.core.child_of_QMARK_ = (function child_of_QMARK_(parent,child){
while(true){
if(cljs.core.truth_(cljs.core.not.call(null,child)))
{return false;
} else
{if(cljs.core.truth_((parent === child)))
{return false;
} else
{if(cljs.core.truth_((child.parentNode === parent)))
{return true;
} else
{if(cljs.core.truth_("﷐'else"))
{{
var G__20940 = parent;
var G__20941 = child.parentNode;
parent = G__20940;
child = G__20941;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* this is used to build cross browser versions of :mouseenter and :mouseleave events
*/
enfocus.core.mouse_enter_leave = (function mouse_enter_leave(func){
return (function (e){
var re__20942 = e.relatedTarget;
var this$__20943 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____20944 = cljs.core.not.call(null,(re__20942 === this$__20943));

if(cljs.core.truth_(and__3546__auto____20944))
{return cljs.core.not.call(null,enfocus.core.child_of_QMARK_.call(null,this$__20943,re__20942));
} else
{return and__3546__auto____20944;
}
})()))
{return func.call(null,e);
} else
{return null;
}
});
});
enfocus.core.pix_round = (function pix_round(step){
if(cljs.core.truth_((step < 0)))
{return Math.floor.call(null,step);
} else
{return Math.ceil.call(null,step);
}
});
enfocus.core.add_map_attrs = (function() {
var add_map_attrs = null;
var add_map_attrs__20964 = (function (elem,ats){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,ats)))
{var G__20945__20946 = cljs.core.seq.call(null,ats);

if(cljs.core.truth_(G__20945__20946))
{var G__20948__20950 = cljs.core.first.call(null,G__20945__20946);
var vec__20949__20951 = G__20948__20950;
var k__20952 = cljs.core.nth.call(null,vec__20949__20951,0,null);
var v__20953 = cljs.core.nth.call(null,vec__20949__20951,1,null);
var G__20945__20954 = G__20945__20946;

var G__20948__20955 = G__20948__20950;
var G__20945__20956 = G__20945__20954;

while(true){
var vec__20957__20958 = G__20948__20955;
var k__20959 = cljs.core.nth.call(null,vec__20957__20958,0,null);
var v__20960 = cljs.core.nth.call(null,vec__20957__20958,1,null);
var G__20945__20961 = G__20945__20956;

add_map_attrs.call(null,elem,k__20959,v__20960);
var temp__3698__auto____20962 = cljs.core.next.call(null,G__20945__20961);

if(cljs.core.truth_(temp__3698__auto____20962))
{var G__20945__20963 = temp__3698__auto____20962;

{
var G__20967 = cljs.core.first.call(null,G__20945__20963);
var G__20968 = G__20945__20963;
G__20948__20955 = G__20967;
G__20945__20956 = G__20968;
continue;
}
} else
{}
break;
}
} else
{}
return elem;
} else
{return null;
}
} else
{return null;
}
});
var add_map_attrs__20965 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
add_map_attrs = function(elem,k,v){
switch(arguments.length){
case  2 :
return add_map_attrs__20964.call(this,elem,k);
case  3 :
return add_map_attrs__20965.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return add_map_attrs;
})()
;
/**
* this is incremented everytime a remote template is loaded and decremented when
* it is added to the dom cache
*/
enfocus.core.tpl_load_cnt = cljs.core.atom.call(null,0);
/**
* cache for the remote templates
*/
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
enfocus.core.hide_style = cljs.core.ObjMap.fromObject(["style"],{"style":"display: none; width: 0px; height: 0px"}).strobj;
/**
* Add a hidden div to hold the dom as we are transforming it this has to be done
* because css selectors do not work unless we have it in the main dom
*/
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){
var div__20969 = goog.dom.createDom.call(null,"div",enfocus.core.hide_style);

div__20969.appendChild(child);
goog.dom.appendChild.call(null,goog.dom.getDocument.call(null).body,div__20969);
return div__20969;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child__20970 = div.childNodes;
var frag__20971 = document.createDocumentFragment();

goog.dom.append.call(null,frag__20971,child__20970);
goog.dom.removeNode.call(null,div);
return frag__20971;
});
/**
* replaces all the ids in a string html fragement/template with a generated
* symbol appended on to a existing id this is done to make sure we don't have
* id colisions during the transformation process
*/
enfocus.core.replace_ids = (function replace_ids(text){
var re__20973 = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
var sym__20974 = cljs.core.str.call(null,cljs.core.name.call(null,cljs.core.gensym.call(null,"id")),"_");

return cljs.core.Vector.fromArray([cljs.core.str.call(null,sym__20974),text.replace(re__20973,(function (a,b,c,d){
return cljs.core.str.call(null,b,sym__20974,c,d);
}))]);
});
/**
* before adding the dom back into the live dom we reset the masked ids to orig vals
*/
enfocus.core.reset_ids = (function reset_ids(sym,nod){
var id_nodes__20975 = enfocus.core.css_select.call(null,nod,"*[id]");
var nod_col__20976 = enfocus.core.nodes__GT_coll.call(null,id_nodes__20975);

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__20972_SHARP_){
var id__20977 = p1__20972_SHARP_.getAttribute("id");
var rid__20978 = id__20977.replace(sym,"");

return p1__20972_SHARP_.setAttribute("id",rid__20978);
}),nod_col__20976));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri))))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req__20979 = (new goog.net.XhrIo());
var callback__20989 = (function (req){
var text__20981 = req.getResponseText();
var vec__20980__20982 = enfocus.core.replace_ids.call(null,text__20981);
var sym__20983 = cljs.core.nth.call(null,vec__20980__20982,0,null);
var txt__20984 = cljs.core.nth.call(null,vec__20980__20982,1,null);
var data__20985 = goog.dom.htmlToDocumentFragment.call(null,txt__20984);
var body__20986 = cljs.core.first.call(null,enfocus.core.nodes__GT_coll.call(null,enfocus.core.css_select.call(null,data__20985,"body")));

if(cljs.core.truth_(body__20986))
{var frag__20987 = document.createDocumentFragment();
var childs__20988 = frag__20987.childNodes;

goog.dom.append.call(null,frag__20987,childs__20988);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__20983,frag__20987]));
} else
{return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__20983,data__20985]));
}
});

goog.events.listen.call(null,req__20979,goog.net.EventType.COMPLETE,(function (){
callback__20989.call(null,req__20979);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
}));
return req__20979.send(uri,"GET");
} else
{return null;
}
});
/**
* returns and dom from the cache and symbol used to scope the ids
*/
enfocus.core.get_cached_dom = (function get_cached_dom(uri){
var nod__20990 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);

if(cljs.core.truth_(nod__20990))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,nod__20990),cljs.core.second.call(null,nod__20990).cloneNode(true)]);
} else
{return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){
var sel_str__20991 = enfocus.core.create_sel_str.call(null,sel);
var cache__20992 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,cljs.core.str.call(null,uri.call(null,sel_str__20991)));

if(cljs.core.truth_(cache__20992))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,cache__20992),cljs.core.second.call(null,cache__20992).cloneNode(true)]);
} else
{var vec__20993__20994 = enfocus.core.get_cached_dom.call(null,uri);
var sym__20995 = cljs.core.nth.call(null,vec__20993__20994,0,null);
var tdom__20996 = cljs.core.nth.call(null,vec__20993__20994,1,null);
var dom__20997 = enfocus.core.create_hidden_dom.call(null,tdom__20996);
var tsnip__20998 = enfocus.core.css_select.call(null,dom__20997,sel_str__20991);
var snip__20999 = (cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Array,tsnip__20998))?cljs.core.first.call(null,tsnip__20998):tsnip__20998);

enfocus.core.remove_node_return_child.call(null,dom__20997);
cljs.core.assoc.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache),cljs.core.str.call(null,uri,sel_str__20991),cljs.core.Vector.fromArray([sym__20995,snip__20999]));
return cljs.core.Vector.fromArray([sym__20995,snip__20999]);
}
});
/**
* wrapper function for extractors that maps the extraction to all nodes returned by the selector
*/
enfocus.core.extr_multi_node = (function extr_multi_node(func){
return (function trans(pnodes){
var pnod_col__21000 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var result__21001 = cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__21000));

if(cljs.core.truth_((cljs.core.count.call(null,result__21001) <= 1)))
{return cljs.core.first.call(null,result__21001);
} else
{return result__21001;
}
});
});
/**
* wrapper function for transforms, maps the transform to all nodes returned
* by the selector and provides the ability to chain transforms with the chain command.
*/
enfocus.core.chainable_standard = (function chainable_standard(func){
return (function() {
var trans = null;
var trans__21004 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__21005 = (function (pnodes,chain){
var pnod_col__21003 = enfocus.core.nodes__GT_coll.call(null,pnodes);

cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__21003));
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,chain))))
{return chain.call(null,pnodes);
} else
{return null;
}
});
trans = function(pnodes,chain){
switch(arguments.length){
case  1 :
return trans__21004.call(this,pnodes);
case  2 :
return trans__21005.call(this,pnodes,chain);
}
throw('Invalid arity: ' + arguments.length);
};
return trans;
})()
});
/**
* wrapper function for effects, maps the effect to all nodes returned by the
* selector and provides chaining and callback functionality
*/
enfocus.core.chainable_effect = (function chainable_effect(func,callback){
return (function() {
var trans = null;
var trans__21011 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__21012 = (function (pnodes,chain){
var pnod_col__21008 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var cnt__21009 = cljs.core.atom.call(null,cljs.core.count.call(null,pnod_col__21008));
var partial_cback__21010 = (function (){
cljs.core.swap_BANG_.call(null,cnt__21009,cljs.core.dec);
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,cnt__21009))))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,callback))))
{callback.call(null,pnodes);
} else
{}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,chain))))
{return chain.call(null,pnodes);
} else
{return null;
}
} else
{return null;
}
});

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__21002_SHARP_){
return func.call(null,p1__21002_SHARP_,partial_cback__21010);
}),pnod_col__21008));
});
trans = function(pnodes,chain){
switch(arguments.length){
case  1 :
return trans__21011.call(this,pnodes);
case  2 :
return trans__21012.call(this,pnodes,chain);
}
throw('Invalid arity: ' + arguments.length);
};
return trans;
})()
});
/**
* HOF to remove the duplicate code in transformation that handle creating a
* fragment and applying it in some way to the selected node
*/
enfocus.core.content_based_trans = (function content_based_trans(values,func){
var fnodes__21014 = enfocus.core.flatten_nodes_coll.call(null,values);

return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__21015 = document.createDocumentFragment();

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__21007_SHARP_){
return goog.dom.appendChild.call(null,frag__21015,p1__21007_SHARP_.cloneNode(true));
}),fnodes__21014));
return func.call(null,pnod,frag__21015);
}));
});
/**
* Replaces the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.en_content = (function() { 
var en_content__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
goog.dom.removeChildren.call(null,pnod);
return goog.dom.appendChild.call(null,pnod,frag);
}));
};
var en_content = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_content__delegate.call(this, values);
};
en_content.cljs$lang$maxFixedArity = 0;
en_content.cljs$lang$applyTo = (function (arglist__21016){
var values = cljs.core.seq( arglist__21016 );;
return en_content__delegate.call(this, values);
});
return en_content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.en_html_content = (function en_html_content(txt){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__21017 = goog.dom.htmlToDocumentFragment.call(null,txt);

goog.dom.removeChildren.call(null,pnod);
return goog.dom.append.call(null,pnod,frag__21017);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.en_set_attr = (function() { 
var en_set_attr__delegate = function (values){
var at_lst__21019 = cljs.core.partition.call(null,2,values);

return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__21020){
var vec__21021__21022 = p__21020;
var a__21023 = cljs.core.nth.call(null,vec__21021__21022,0,null);
var v__21024 = cljs.core.nth.call(null,vec__21021__21022,1,null);

return pnod.setAttribute(cljs.core.name.call(null,a__21023),v__21024);
}),at_lst__21019));
}));
};
var en_set_attr = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_set_attr__delegate.call(this, values);
};
en_set_attr.cljs$lang$maxFixedArity = 0;
en_set_attr.cljs$lang$applyTo = (function (arglist__21025){
var values = cljs.core.seq( arglist__21025 );;
return en_set_attr__delegate.call(this, values);
});
return en_set_attr;
})()
;
/**
* Dissocs attributes on the selected element.
* @param {...*} var_args
*/
enfocus.core.en_remove_attr = (function() { 
var en_remove_attr__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__21018_SHARP_){
return pnod.removeAttribute(cljs.core.name.call(null,p1__21018_SHARP_));
}),values));
}));
};
var en_remove_attr = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_attr__delegate.call(this, values);
};
en_remove_attr.cljs$lang$maxFixedArity = 0;
en_remove_attr.cljs$lang$applyTo = (function (arglist__21026){
var values = cljs.core.seq( arglist__21026 );;
return en_remove_attr__delegate.call(this, values);
});
return en_remove_attr;
})()
;
/**
* returns true if the element has a given class
*/
enfocus.core.has_class = (function has_class(el,cls){
return goog.dom.classes.hasClass.call(null,el,cls);
});
/**
* Adds the specified classes to the selected element.
* @param {...*} var_args
*/
enfocus.core.en_add_class = (function() { 
var en_add_class__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__21027_SHARP_){
return goog.dom.classes.add.call(null,pnod,p1__21027_SHARP_);
}),values));
}));
};
var en_add_class = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_add_class__delegate.call(this, values);
};
en_add_class.cljs$lang$maxFixedArity = 0;
en_add_class.cljs$lang$applyTo = (function (arglist__21029){
var values = cljs.core.seq( arglist__21029 );;
return en_add_class__delegate.call(this, values);
});
return en_add_class;
})()
;
/**
* Removes the specified classes from the selected element.
* @param {...*} var_args
*/
enfocus.core.en_remove_class = (function() { 
var en_remove_class__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__21028_SHARP_){
return goog.dom.classes.remove.call(null,pnod,p1__21028_SHARP_);
}),values));
}));
};
var en_remove_class = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_class__delegate.call(this, values);
};
en_remove_class.cljs$lang$maxFixedArity = 0;
en_remove_class.cljs$lang$applyTo = (function (arglist__21031){
var values = cljs.core.seq( arglist__21031 );;
return en_remove_class__delegate.call(this, values);
});
return en_remove_class;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.en_do__GT_ = (function() { 
var en_do__GT___delegate = function (forms){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__21030_SHARP_){
return p1__21030_SHARP_.call(null,pnod);
}),forms));
}));
};
var en_do__GT_ = function (var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_do__GT___delegate.call(this, forms);
};
en_do__GT_.cljs$lang$maxFixedArity = 0;
en_do__GT_.cljs$lang$applyTo = (function (arglist__21032){
var forms = cljs.core.seq( arglist__21032 );;
return en_do__GT___delegate.call(this, forms);
});
return en_do__GT_;
})()
;
/**
* Appends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.en_append = (function() { 
var en_append__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
return goog.dom.appendChild.call(null,pnod,frag);
}));
};
var en_append = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_append__delegate.call(this, values);
};
en_append.cljs$lang$maxFixedArity = 0;
en_append.cljs$lang$applyTo = (function (arglist__21033){
var values = cljs.core.seq( arglist__21033 );;
return en_append__delegate.call(this, values);
});
return en_append;
})()
;
/**
* Prepends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.en_prepend = (function() { 
var en_prepend__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
var nod__21034 = pnod.firstChild;

return pnod.insertBefore(frag,nod__21034);
}));
};
var en_prepend = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_prepend__delegate.call(this, values);
};
en_prepend.cljs$lang$maxFixedArity = 0;
en_prepend.cljs$lang$applyTo = (function (arglist__21035){
var values = cljs.core.seq( arglist__21035 );;
return en_prepend__delegate.call(this, values);
});
return en_prepend;
})()
;
/**
* inserts the content before the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.en_before = (function() { 
var en_before__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
return goog.dom.insertSiblingBefore.call(null,frag,pnod);
}));
};
var en_before = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_before__delegate.call(this, values);
};
en_before.cljs$lang$maxFixedArity = 0;
en_before.cljs$lang$applyTo = (function (arglist__21036){
var values = cljs.core.seq( arglist__21036 );;
return en_before__delegate.call(this, values);
});
return en_before;
})()
;
/**
* inserts the content after the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.en_after = (function() { 
var en_after__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
return goog.dom.insertSiblingAfter.call(null,frag,pnod);
}));
};
var en_after = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_after__delegate.call(this, values);
};
en_after.cljs$lang$maxFixedArity = 0;
en_after.cljs$lang$applyTo = (function (arglist__21037){
var values = cljs.core.seq( arglist__21037 );;
return en_after__delegate.call(this, values);
});
return en_after;
})()
;
/**
* substitutes the content for the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.en_substitute = (function() { 
var en_substitute__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
return goog.dom.replaceNode.call(null,frag,pnod);
}));
};
var en_substitute = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_substitute__delegate.call(this, values);
};
en_substitute.cljs$lang$maxFixedArity = 0;
en_substitute.cljs$lang$applyTo = (function (arglist__21038){
var values = cljs.core.seq( arglist__21038 );;
return en_substitute__delegate.call(this, values);
});
return en_substitute;
})()
;
/**
* removes the selected nodes from the dom
* @param {...*} var_args
*/
enfocus.core.en_remove_node = (function() { 
var en_remove_node__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return goog.dom.removeNode.call(null,pnod);
}));
};
var en_remove_node = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_node__delegate.call(this, values);
};
en_remove_node.cljs$lang$maxFixedArity = 0;
en_remove_node.cljs$lang$applyTo = (function (arglist__21039){
var values = cljs.core.seq( arglist__21039 );;
return en_remove_node__delegate.call(this, values);
});
return en_remove_node;
})()
;
/**
* wrap and element in a new element defined as :div {:class 'temp'}
*/
enfocus.core.en_wrap = (function en_wrap(elm,mattr){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var elem__21040 = goog.dom.createElement.call(null,cljs.core.name.call(null,elm));

enfocus.core.add_map_attrs.call(null,elem__21040,mattr);
enfocus.core.en_content.call(null,pnod.cloneNode(true)).call(null,elem__21040);
elem__21040;
enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,elem__21040),enfocus.core.en_remove_node.call(null)).call(null,pnod);
return pnod;
}));
});
/**
* replaces a node with all its children
*/
enfocus.core.en_unwrap = (function en_unwrap(){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__21041 = document.createDocumentFragment();

enfocus.core.en_append.call(null,pnod.childNodes).call(null,frag__21041);
frag__21041;
return goog.dom.replaceNode.call(null,frag__21041,pnod);
}));
});
/**
* set a list of style elements from the selected nodes
* @param {...*} var_args
*/
enfocus.core.en_set_style = (function() { 
var en_set_style__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return enfocus.core.style_set.call(null,pnod,values);
}));
};
var en_set_style = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_set_style__delegate.call(this, values);
};
en_set_style.cljs$lang$maxFixedArity = 0;
en_set_style.cljs$lang$applyTo = (function (arglist__21042){
var values = cljs.core.seq( arglist__21042 );;
return en_set_style__delegate.call(this, values);
});
return en_set_style;
})()
;
/**
* remove a list style elements from the selected nodes. note: you can only remove styles that are inline
* @param {...*} var_args
*/
enfocus.core.en_remove_style = (function() { 
var en_remove_style__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return enfocus.core.style_remove.call(null,pnod,values);
}));
};
var en_remove_style = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_style__delegate.call(this, values);
};
en_remove_style.cljs$lang$maxFixedArity = 0;
en_remove_style.cljs$lang$applyTo = (function (arglist__21043){
var values = cljs.core.seq( arglist__21043 );;
return en_remove_style__delegate.call(this, values);
});
return en_remove_style;
})()
;
enfocus.core.view_port_monitor = cljs.core.atom.call(null,null);
/**
* needed to support window :resize
*/
enfocus.core.get_vp_monitor = (function get_vp_monitor(){
if(cljs.core.truth_(cljs.core.deref.call(null,enfocus.core.view_port_monitor)))
{return cljs.core.deref.call(null,enfocus.core.view_port_monitor);
} else
{cljs.core.swap_BANG_.call(null,enfocus.core.view_port_monitor,(function (){
return (new goog.dom.ViewportSizeMonitor());
}));
return cljs.core.deref.call(null,enfocus.core.view_port_monitor);
}
});
enfocus.core.gen_enter_leave_wrapper = (function gen_enter_leave_wrapper(event){
var obj__21044 = (new Object());

obj__21044.listen = (function (elm,func,opt_cap,opt_scope,opt_handler){
var callback__21045 = enfocus.core.mouse_enter_leave.call(null,func);

callback__21045.listen = func;
callback__21045.scope = opt_scope;
if(cljs.core.truth_(enfocus.core.op_handler))
{return opt_handler.listen(elm,cljs.core.name.call(null,event),callback__21045);
} else
{return goog.events.listen.call(null,elm,cljs.core.name.call(null,event),callback__21045);
}
});
obj__21044.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){
var listeners__21046 = goog.events.getListeners.call(null,elm,cljs.core.name.call(null,event),false);

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__21047 = obj.listener;

if(cljs.core.truth_((function (){var and__3546__auto____21049 = (function (){var or__3548__auto____21048 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____21048))
{return or__3548__auto____21048;
} else
{return cljs.core._EQ_.call(null,listener__21047.listen,func);
}
})();

if(cljs.core.truth_(and__3546__auto____21049))
{var or__3548__auto____21050 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____21050))
{return or__3548__auto____21050;
} else
{return cljs.core._EQ_.call(null,listener__21047.scope,opt_scope);
}
} else
{return and__3546__auto____21049;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener__21047);
} else
{return goog.events.unlisten.call(null,elm,cljs.core.name.call(null,event),listener__21047);
}
} else
{return null;
}
}),listeners__21046));
});
return obj__21044;
});
enfocus.core.wrapper_register = cljs.core.ObjMap.fromObject(["﷐'mouseenter","﷐'mouseleave"],{"﷐'mouseenter":enfocus.core.gen_enter_leave_wrapper.call(null,"﷐'mouseover"),"﷐'mouseleave":enfocus.core.gen_enter_leave_wrapper.call(null,"﷐'mouseout")});
/**
* adding an event to the selected nodes
*/
enfocus.core.en_listen = (function en_listen(event,func){
var wrapper__21051 = enfocus.core.wrapper_register.call(null,event);

return enfocus.core.chainable_standard.call(null,(function (pnod){
if(cljs.core.truth_((function (){var and__3546__auto____21052 = cljs.core._EQ_.call(null,"﷐'resize",event);

if(cljs.core.truth_(and__3546__auto____21052))
{return (window === pnod);
} else
{return and__3546__auto____21052;
}
})()))
{return goog.events.listen.call(null,enfocus.core.get_vp_monitor.call(null),"resize",func);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__21051)))
{return goog.events.listen.call(null,pnod,cljs.core.name.call(null,event),func);
} else
{return goog.events.listenWithWrapper.call(null,pnod,wrapper__21051,func);
}
}
}));
});
/**
* removing a specific event from the selected nodes
*/
enfocus.core.en_unlisten = (function en_unlisten(event,func){
var wrapper__21055 = enfocus.core.wrapper_register.call(null,event);

return enfocus.core.chainable_standard.call(null,(function (pnod){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__21055)))
{return goog.events.unlisten.call(null,pnod,cljs.core.name.call(null,event),func);
} else
{return goog.events.unlistenWithWrapper.call(null,pnod,wrapper__21055,func);
}
}));
});
/**
* adding an event to the selected nodes
* @param {...*} var_args
*/
enfocus.core.en_remove_listeners = (function() { 
var en_remove_listeners__delegate = function (event_list){
var get_name__21056 = (function (p1__21053_SHARP_){
return cljs.core.name.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,p1__21053_SHARP_,"﷐'mouseenter"))?"﷐'mouseover":(cljs.core.truth_(cljs.core._EQ_.call(null,p1__21053_SHARP_,"﷐'mouseleave"))?"﷐'mouseout":(cljs.core.truth_("﷐'else")?p1__21053_SHARP_:null))));
});

return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__21054_SHARP_){
return goog.events.removeAll.call(null,pnod,get_name__21056.call(null,p1__21054_SHARP_));
}),event_list));
}));
};
var en_remove_listeners = function (var_args){
var event_list = null;
if (goog.isDef(var_args)) {
  event_list = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_listeners__delegate.call(this, event_list);
};
en_remove_listeners.cljs$lang$maxFixedArity = 0;
en_remove_listeners.cljs$lang$applyTo = (function (arglist__21057){
var event_list = cljs.core.seq( arglist__21057 );;
return en_remove_listeners__delegate.call(this, event_list);
});
return en_remove_listeners;
})()
;
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_out = (function en_fade_out(ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var anim__21058 = (new goog.fx.dom.FadeOut(pnod,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,pcallback))))
{goog.events.listen.call(null,anim__21058,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__21058.play();
}),callback);
});
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_in = (function en_fade_in(ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var anim__21059 = (new goog.fx.dom.FadeIn(pnod,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,pcallback))))
{goog.events.listen.call(null,anim__21059,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__21059.play();
}),callback);
});
/**
* resizes the selected elements to a width and height in px optional time series data
*/
enfocus.core.en_resize = (function en_resize(wth,hgt,ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var csize__21060 = goog.style.getSize.call(null,pnod);
var start__21061 = cljs.core.array.call(null,csize__21060.width,csize__21060.height);
var wth__21062 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curwidth",wth))?csize__21060.width:wth);
var hgt__21063 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curheight",hgt))?csize__21060.height:hgt);
var end__21064 = cljs.core.array.call(null,wth__21062,hgt__21063);
var anim__21065 = (new goog.fx.dom.Resize(pnod,start__21061,end__21064,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,pcallback))))
{goog.events.listen.call(null,anim__21065,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__21065.play();
}),callback);
});
/**
* moves the selected elements to a x and y in px optional time series data
*/
enfocus.core.en_move = (function en_move(xpos,ypos,ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var cpos__21066 = goog.style.getPosition.call(null,pnod);
var start__21067 = cljs.core.array.call(null,cpos__21066.x,cpos__21066.y);
var xpos__21068 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curx"))?cpos__21066.x:xpos);
var ypos__21069 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'cury"))?cpos__21066.y:ypos);
var end__21070 = cljs.core.array.call(null,xpos__21068,ypos__21069);
var anim__21071 = (new goog.fx.dom.Slide(pnod,start__21067,end__21070,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,pcallback))))
{goog.events.listen.call(null,anim__21071,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__21071.play();
}),callback);
});
/**
* returns the attribute on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.en_get_attr = (function en_get_attr(attr){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return pnod.getAttribute(cljs.core.name.call(null,attr));
}));
});
/**
* returns the attribute on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.en_get_attr = (function en_get_attr(attr){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return pnod.getAttribute(cljs.core.name.call(null,attr));
}));
});
/**
* returns the attribute on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.en_get_text = (function en_get_text(){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return goog.dom.getTextContent.call(null,pnod);
}));
});
enfocus.core.reg_filt = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
/**
* filter allows you to apply function to futhur scope down what is returned by a selector
*/
enfocus.core.en_filter = (function en_filter(tst,trans){
return (function() {
var filt = null;
var filt__21075 = (function (pnodes){
return filt.call(null,pnodes,null);
});
var filt__21076 = (function (pnodes,chain){
var pnod_col__21072 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var ttest__21073 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,tst))?cljs.core.deref.call(null,enfocus.core.reg_filt).call(null,tst):tst);
var res__21074 = cljs.core.filter.call(null,ttest__21073,pnod_col__21072);

enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,res__21074));
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,chain)))
{return trans.call(null,res__21074);
} else
{return trans.call(null,res__21074,chain);
}
});
filt = function(pnodes,chain){
switch(arguments.length){
case  1 :
return filt__21075.call(this,pnodes);
case  2 :
return filt__21076.call(this,pnodes,chain);
}
throw('Invalid arity: ' + arguments.length);
};
return filt;
})()
});
/**
* registers a filter for a given keyword
*/
enfocus.core.register_filter = (function register_filter(ky,func){
return cljs.core.swap_BANG_.call(null,enfocus.core.reg_filt,cljs.core.assoc,ky,func);
});
/**
* takes a list of options and returns the selected ones.
*/
enfocus.core.selected_options = (function selected_options(pnod){
return pnod.selected;
});
/**
* takes a list of radio or checkboxes and returns the checked ones
*/
enfocus.core.checked_radio_checkbox = (function checked_radio_checkbox(pnod){
return pnod.checked;
});
enfocus.core.register_filter.call(null,"﷐'selected",enfocus.core.selected_options);
enfocus.core.register_filter.call(null,"﷐'checked",enfocus.core.checked_radio_checkbox);
/**
* converts keywords, symbols and strings used in the enlive selector
* syntax to a string representing a standard css selector.  It also
* applys id masking if mask provided
*/
enfocus.core.create_sel_str = (function() {
var create_sel_str = null;
var create_sel_str__21079 = (function (css_sel){
return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__21080 = (function (id_mask_sym,css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__21078_SHARP_){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,p1__21078_SHARP_)))
{return enfocus.core.css_syms.call(null,p1__21078_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,p1__21078_SHARP_)))
{return cljs.core.str.call(null," ",cljs.core.name.call(null,p1__21078_SHARP_).replace("#",cljs.core.str.call(null,"#",id_mask_sym)));
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,p1__21078_SHARP_)))
{return create_sel_str.call(null,p1__21078_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__21078_SHARP_)))
{return p1__21078_SHARP_.replace("#",cljs.core.str.call(null,"#",id_mask_sym));
} else
{return null;
}
}
}
}
}),css_sel));
});
create_sel_str = function(id_mask_sym,css_sel){
switch(arguments.length){
case  1 :
return create_sel_str__21079.call(this,id_mask_sym);
case  2 :
return create_sel_str__21080.call(this,id_mask_sym,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
return create_sel_str;
})()
;
/**
* takes either an enlive selector or a css3 selector and returns a set of nodes that match the selector
*/
enfocus.core.css_select = (function() {
var css_select = null;
var css_select__21084 = (function (css_sel){
return css_select.call(null,"",document,css_sel);
});
var css_select__21085 = (function (dom_node,css_sel){
return css_select.call(null,"",dom_node,css_sel);
});
var css_select__21086 = (function (id_mask_sym,dom_node,css_sel){
var sel__21082 = clojure.string.trim.call(null,clojure.string.replace.call(null,enfocus.core.create_sel_str.call(null,id_mask_sym,css_sel)," :",":"));
var ret__21083 = goog.dom.query.call(null,sel__21082,dom_node);

return ret__21083;
});
css_select = function(id_mask_sym,dom_node,css_sel){
switch(arguments.length){
case  1 :
return css_select__21084.call(this,id_mask_sym);
case  2 :
return css_select__21085.call(this,id_mask_sym,dom_node);
case  3 :
return css_select__21086.call(this,id_mask_sym,dom_node,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
return css_select;
})()
;
enfocus.core.css_syms = cljs.core.HashMap.fromArrays(["﷑'first-child","﷑'last-child"],[" *:first-child"," *:last-child"]);
/**
* Matches any E element that contains att attribute: css -> E[att][att2]...
* @param {...*} var_args
*/
enfocus.core.attr_QMARK_ = (function() { 
var attr_QMARK___delegate = function (kys){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p1__21088_SHARP_){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,p1__21088_SHARP_),"]");
}),kys));
};
var attr_QMARK_ = function (var_args){
var kys = null;
if (goog.isDef(var_args)) {
  kys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return attr_QMARK___delegate.call(this, kys);
};
attr_QMARK_.cljs$lang$maxFixedArity = 0;
attr_QMARK_.cljs$lang$applyTo = (function (arglist__21089){
var kys = cljs.core.seq( arglist__21089 );;
return attr_QMARK___delegate.call(this, kys);
});
return attr_QMARK_;
})()
;
/**
* Matches any E element whose att attribute value equals 'val':
* css -> E[att=val][att2=val2]...
* @param {...*} var_args
*/
enfocus.core.attr_EQ_ = (function() {
var attr_EQ_ = null;
var attr_EQ___21090 = (function (){
return "";
});
var attr_EQ___21091 = (function() { 
var G__21093__delegate = function (ky,txt,forms){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,ky),"='",txt,"']",cljs.core.apply.call(null,attr_EQ_,forms));
};
var G__21093 = function (ky,txt,var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21093__delegate.call(this, ky, txt, forms);
};
G__21093.cljs$lang$maxFixedArity = 2;
G__21093.cljs$lang$applyTo = (function (arglist__21094){
var ky = cljs.core.first(arglist__21094);
var txt = cljs.core.first(cljs.core.next(arglist__21094));
var forms = cljs.core.rest(cljs.core.next(arglist__21094));
return G__21093__delegate.call(this, ky, txt, forms);
});
return G__21093;
})()
;
attr_EQ_ = function(ky,txt,var_args){
var forms = var_args;
switch(arguments.length){
case  0 :
return attr_EQ___21090.call(this);
default:
return attr_EQ___21091.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
attr_EQ_.cljs$lang$maxFixedArity = 2;
attr_EQ_.cljs$lang$applyTo = attr_EQ___21091.cljs$lang$applyTo;
return attr_EQ_;
})()
;
/**
* Matches any E element that is the n-th child of its parent:
* css -> E:nth-child(x) or E:nth-child(xn+y)
*/
enfocus.core.nth_child = (function() {
var nth_child = null;
var nth_child__21095 = (function (x){
return cljs.core.str.call(null,":nth-child(",x,")");
});
var nth_child__21096 = (function (x,y){
return cljs.core.str.call(null,":nth-child(",x,"n+",y,")");
});
nth_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_child__21095.call(this,x);
case  2 :
return nth_child__21096.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_child;
})()
;
/**
* Matches any E element that is the n-th sibling of its type:
* css -> E:nth-of-type(x) or E:nth-of-type(xn+y)
*/
enfocus.core.nth_of_type = (function() {
var nth_of_type = null;
var nth_of_type__21098 = (function (x){
return cljs.core.str.call(null,":nth-of-type(",x,")");
});
var nth_of_type__21099 = (function (x,y){
return cljs.core.str.call(null,":nth-of-type(",x,"n+",y,")");
});
nth_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_of_type__21098.call(this,x);
case  2 :
return nth_of_type__21099.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_of_type;
})()
;
/**
* Matches any E element that is the n-th child of its parent, counting from the last child
* css -> E:nth-last-child(x) or E:nth-last-child(xn+y)
*/
enfocus.core.nth_last_child = (function() {
var nth_last_child = null;
var nth_last_child__21101 = (function (x){
return cljs.core.str.call(null,":nth-last-child(",x,")");
});
var nth_last_child__21102 = (function (x,y){
return cljs.core.str.call(null,":nth-last-child(",x,"n+",y,")");
});
nth_last_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_child__21101.call(this,x);
case  2 :
return nth_last_child__21102.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_child;
})()
;
/**
* Matches any E element that is the n-th sibling of its type counting from the last child:
* css -> E:nth-last-of-type(x) or E:nth-last-of-type(xn+y)
*/
enfocus.core.nth_last_of_type = (function() {
var nth_last_of_type = null;
var nth_last_of_type__21104 = (function (x){
return cljs.core.str.call(null,":nth-last-of-type(",x,")");
});
var nth_last_of_type__21105 = (function (x,y){
return cljs.core.str.call(null,":nth-last-of-type(",x,"n+",y,")");
});
nth_last_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_of_type__21104.call(this,x);
case  2 :
return nth_last_of_type__21105.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_of_type;
})()
;
