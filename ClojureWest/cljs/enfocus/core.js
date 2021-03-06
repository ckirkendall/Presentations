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
if(cljs.core.truth_((function (){var and__3546__auto____184611 = enfocus.core.debug;

if(cljs.core.truth_(and__3546__auto____184611))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____184611;
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
{if(cljs.core.truth_((function (){var or__3548__auto____184613 = cljs.core.instance_QMARK_.call(null,Array,nl);

if(cljs.core.truth_(or__3548__auto____184613))
{return or__3548__auto____184613;
} else
{return cljs.core.coll_QMARK_.call(null,nl);
}
})()))
{return nl;
} else
{if(cljs.core.truth_(enfocus.core.nodelist_QMARK_.call(null,nl)))
{var iter__509__auto____184618 = (function iter__184614(s__184615){
return (new cljs.core.LazySeq(null,false,(function (){
var s__184615__184616 = s__184615;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__184615__184616)))
{var x__184617 = cljs.core.first.call(null,s__184615__184616);

return cljs.core.cons.call(null,(nl[x__184617]),iter__184614.call(null,cljs.core.rest.call(null,s__184615__184616)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____184618.call(null,cljs.core.range.call(null,0,nl.length));
} else
{return null;
}
}
}
}
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){
return cljs.core.mapcat.call(null,(function (p1__184612_SHARP_){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__184612_SHARP_)))
{return cljs.core.Vector.fromArray([goog.dom.createTextNode.call(null,p1__184612_SHARP_)]);
} else
{if(cljs.core.truth_("﷐'else"))
{return enfocus.core.nodes__GT_coll.call(null,p1__184612_SHARP_);
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
var G__184619__184620 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));

if(cljs.core.truth_(G__184619__184620))
{var G__184622__184624 = cljs.core.first.call(null,G__184619__184620);
var vec__184623__184625 = G__184622__184624;
var attr__184626 = cljs.core.nth.call(null,vec__184623__184625,0,null);
var value__184627 = cljs.core.nth.call(null,vec__184623__184625,1,null);
var G__184619__184628 = G__184619__184620;

var G__184622__184629 = G__184622__184624;
var G__184619__184630 = G__184619__184628;

while(true){
var vec__184631__184632 = G__184622__184629;
var attr__184633 = cljs.core.nth.call(null,vec__184631__184632,0,null);
var value__184634 = cljs.core.nth.call(null,vec__184631__184632,1,null);
var G__184619__184635 = G__184619__184630;

goog.style.setStyle.call(null,obj,cljs.core.name.call(null,attr__184633),value__184634);
var temp__3698__auto____184636 = cljs.core.next.call(null,G__184619__184635);

if(cljs.core.truth_(temp__3698__auto____184636))
{var G__184619__184637 = temp__3698__auto____184636;

{
var G__184638 = cljs.core.first.call(null,G__184619__184637);
var G__184639 = G__184619__184637;
G__184622__184629 = G__184638;
G__184619__184630 = G__184639;
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
var G__184640__184641 = cljs.core.seq.call(null,values);

if(cljs.core.truth_(G__184640__184641))
{var attr__184642 = cljs.core.first.call(null,G__184640__184641);
var G__184640__184643 = G__184640__184641;

while(true){
if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle.call(null,obj,cljs.core.name.call(null,attr__184642),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr__184642));
}
var temp__3698__auto____184644 = cljs.core.next.call(null,G__184640__184643);

if(cljs.core.truth_(temp__3698__auto____184644))
{var G__184640__184645 = temp__3698__auto____184644;

{
var G__184646 = cljs.core.first.call(null,G__184640__184645);
var G__184647 = G__184640__184645;
attr__184642 = G__184646;
G__184640__184643 = G__184647;
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
var G__184648 = parent;
var G__184649 = child.parentNode;
parent = G__184648;
child = G__184649;
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
var re__184650 = e.relatedTarget;
var this$__184651 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____184652 = cljs.core.not.call(null,(re__184650 === this$__184651));

if(cljs.core.truth_(and__3546__auto____184652))
{return cljs.core.not.call(null,enfocus.core.child_of_QMARK_.call(null,this$__184651,re__184650));
} else
{return and__3546__auto____184652;
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
var add_map_attrs__184672 = (function (elem,ats){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,ats)))
{var G__184653__184654 = cljs.core.seq.call(null,ats);

if(cljs.core.truth_(G__184653__184654))
{var G__184656__184658 = cljs.core.first.call(null,G__184653__184654);
var vec__184657__184659 = G__184656__184658;
var k__184660 = cljs.core.nth.call(null,vec__184657__184659,0,null);
var v__184661 = cljs.core.nth.call(null,vec__184657__184659,1,null);
var G__184653__184662 = G__184653__184654;

var G__184656__184663 = G__184656__184658;
var G__184653__184664 = G__184653__184662;

while(true){
var vec__184665__184666 = G__184656__184663;
var k__184667 = cljs.core.nth.call(null,vec__184665__184666,0,null);
var v__184668 = cljs.core.nth.call(null,vec__184665__184666,1,null);
var G__184653__184669 = G__184653__184664;

add_map_attrs.call(null,elem,k__184667,v__184668);
var temp__3698__auto____184670 = cljs.core.next.call(null,G__184653__184669);

if(cljs.core.truth_(temp__3698__auto____184670))
{var G__184653__184671 = temp__3698__auto____184670;

{
var G__184675 = cljs.core.first.call(null,G__184653__184671);
var G__184676 = G__184653__184671;
G__184656__184663 = G__184675;
G__184653__184664 = G__184676;
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
var add_map_attrs__184673 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
add_map_attrs = function(elem,k,v){
switch(arguments.length){
case  2 :
return add_map_attrs__184672.call(this,elem,k);
case  3 :
return add_map_attrs__184673.call(this,elem,k,v);
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
var div__184677 = goog.dom.createDom.call(null,"div",enfocus.core.hide_style);

div__184677.appendChild(child);
goog.dom.appendChild.call(null,goog.dom.getDocument.call(null).body,div__184677);
return div__184677;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child__184678 = div.childNodes;
var frag__184679 = document.createDocumentFragment();

goog.dom.append.call(null,frag__184679,child__184678);
goog.dom.removeNode.call(null,div);
return frag__184679;
});
/**
* replaces all the ids in a string html fragement/template with a generated
* symbol appended on to a existing id this is done to make sure we don't have
* id colisions during the transformation process
*/
enfocus.core.replace_ids = (function replace_ids(text){
var re__184681 = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
var sym__184682 = cljs.core.str.call(null,cljs.core.name.call(null,cljs.core.gensym.call(null,"id")),"_");

return cljs.core.Vector.fromArray([cljs.core.str.call(null,sym__184682),text.replace(re__184681,(function (a,b,c,d){
return cljs.core.str.call(null,b,sym__184682,c,d);
}))]);
});
/**
* before adding the dom back into the live dom we reset the masked ids to orig vals
*/
enfocus.core.reset_ids = (function reset_ids(sym,nod){
var id_nodes__184683 = enfocus.core.css_select.call(null,nod,"*[id]");
var nod_col__184684 = enfocus.core.nodes__GT_coll.call(null,id_nodes__184683);

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__184680_SHARP_){
var id__184685 = p1__184680_SHARP_.getAttribute("id");
var rid__184686 = id__184685.replace(sym,"");

return p1__184680_SHARP_.setAttribute("id",rid__184686);
}),nod_col__184684));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri))))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req__184687 = (new goog.net.XhrIo());
var callback__184697 = (function (req){
var text__184689 = req.getResponseText();
var vec__184688__184690 = enfocus.core.replace_ids.call(null,text__184689);
var sym__184691 = cljs.core.nth.call(null,vec__184688__184690,0,null);
var txt__184692 = cljs.core.nth.call(null,vec__184688__184690,1,null);
var data__184693 = goog.dom.htmlToDocumentFragment.call(null,txt__184692);
var body__184694 = cljs.core.first.call(null,enfocus.core.nodes__GT_coll.call(null,enfocus.core.css_select.call(null,data__184693,"body")));

if(cljs.core.truth_(body__184694))
{var frag__184695 = document.createDocumentFragment();
var childs__184696 = frag__184695.childNodes;

goog.dom.append.call(null,frag__184695,childs__184696);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__184691,frag__184695]));
} else
{return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__184691,data__184693]));
}
});

goog.events.listen.call(null,req__184687,goog.net.EventType.COMPLETE,(function (){
callback__184697.call(null,req__184687);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
}));
return req__184687.send(uri,"GET");
} else
{return null;
}
});
/**
* returns and dom from the cache and symbol used to scope the ids
*/
enfocus.core.get_cached_dom = (function get_cached_dom(uri){
var nod__184698 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);

if(cljs.core.truth_(nod__184698))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,nod__184698),cljs.core.second.call(null,nod__184698).cloneNode(true)]);
} else
{return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){
var sel_str__184699 = enfocus.core.create_sel_str.call(null,sel);
var cache__184700 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,cljs.core.str.call(null,uri.call(null,sel_str__184699)));

if(cljs.core.truth_(cache__184700))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,cache__184700),cljs.core.second.call(null,cache__184700).cloneNode(true)]);
} else
{var vec__184701__184702 = enfocus.core.get_cached_dom.call(null,uri);
var sym__184703 = cljs.core.nth.call(null,vec__184701__184702,0,null);
var tdom__184704 = cljs.core.nth.call(null,vec__184701__184702,1,null);
var dom__184705 = enfocus.core.create_hidden_dom.call(null,tdom__184704);
var tsnip__184706 = enfocus.core.css_select.call(null,dom__184705,sel_str__184699);
var snip__184707 = (cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Array,tsnip__184706))?cljs.core.first.call(null,tsnip__184706):tsnip__184706);

enfocus.core.remove_node_return_child.call(null,dom__184705);
cljs.core.assoc.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache),cljs.core.str.call(null,uri,sel_str__184699),cljs.core.Vector.fromArray([sym__184703,snip__184707]));
return cljs.core.Vector.fromArray([sym__184703,snip__184707]);
}
});
/**
* wrapper function for extractors that maps the extraction to all nodes returned by the selector
*/
enfocus.core.extr_multi_node = (function extr_multi_node(func){
return (function trans(pnodes){
var pnod_col__184708 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var result__184709 = cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__184708));

if(cljs.core.truth_((cljs.core.count.call(null,result__184709) <= 1)))
{return cljs.core.first.call(null,result__184709);
} else
{return result__184709;
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
var trans__184712 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__184713 = (function (pnodes,chain){
var pnod_col__184711 = enfocus.core.nodes__GT_coll.call(null,pnodes);

cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__184711));
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,chain))))
{return chain.call(null,pnodes);
} else
{return null;
}
});
trans = function(pnodes,chain){
switch(arguments.length){
case  1 :
return trans__184712.call(this,pnodes);
case  2 :
return trans__184713.call(this,pnodes,chain);
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
var trans__184719 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__184720 = (function (pnodes,chain){
var pnod_col__184716 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var cnt__184717 = cljs.core.atom.call(null,cljs.core.count.call(null,pnod_col__184716));
var partial_cback__184718 = (function (){
cljs.core.swap_BANG_.call(null,cnt__184717,cljs.core.dec);
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,cnt__184717))))
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

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__184710_SHARP_){
return func.call(null,p1__184710_SHARP_,partial_cback__184718);
}),pnod_col__184716));
});
trans = function(pnodes,chain){
switch(arguments.length){
case  1 :
return trans__184719.call(this,pnodes);
case  2 :
return trans__184720.call(this,pnodes,chain);
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
var fnodes__184722 = enfocus.core.flatten_nodes_coll.call(null,values);

return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__184723 = document.createDocumentFragment();

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__184715_SHARP_){
return goog.dom.appendChild.call(null,frag__184723,p1__184715_SHARP_.cloneNode(true));
}),fnodes__184722));
return func.call(null,pnod,frag__184723);
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
en_content.cljs$lang$applyTo = (function (arglist__184724){
var values = cljs.core.seq( arglist__184724 );;
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
var frag__184725 = goog.dom.htmlToDocumentFragment.call(null,txt);

goog.dom.removeChildren.call(null,pnod);
return goog.dom.append.call(null,pnod,frag__184725);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.en_set_attr = (function() { 
var en_set_attr__delegate = function (values){
var at_lst__184727 = cljs.core.partition.call(null,2,values);

return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__184728){
var vec__184729__184730 = p__184728;
var a__184731 = cljs.core.nth.call(null,vec__184729__184730,0,null);
var v__184732 = cljs.core.nth.call(null,vec__184729__184730,1,null);

return pnod.setAttribute(cljs.core.name.call(null,a__184731),v__184732);
}),at_lst__184727));
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
en_set_attr.cljs$lang$applyTo = (function (arglist__184733){
var values = cljs.core.seq( arglist__184733 );;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__184726_SHARP_){
return pnod.removeAttribute(cljs.core.name.call(null,p1__184726_SHARP_));
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
en_remove_attr.cljs$lang$applyTo = (function (arglist__184734){
var values = cljs.core.seq( arglist__184734 );;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__184735_SHARP_){
return goog.dom.classes.add.call(null,pnod,p1__184735_SHARP_);
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
en_add_class.cljs$lang$applyTo = (function (arglist__184737){
var values = cljs.core.seq( arglist__184737 );;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__184736_SHARP_){
return goog.dom.classes.remove.call(null,pnod,p1__184736_SHARP_);
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
en_remove_class.cljs$lang$applyTo = (function (arglist__184739){
var values = cljs.core.seq( arglist__184739 );;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__184738_SHARP_){
return p1__184738_SHARP_.call(null,pnod);
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
en_do__GT_.cljs$lang$applyTo = (function (arglist__184740){
var forms = cljs.core.seq( arglist__184740 );;
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
en_append.cljs$lang$applyTo = (function (arglist__184741){
var values = cljs.core.seq( arglist__184741 );;
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
var nod__184742 = pnod.firstChild;

return pnod.insertBefore(frag,nod__184742);
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
en_prepend.cljs$lang$applyTo = (function (arglist__184743){
var values = cljs.core.seq( arglist__184743 );;
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
en_before.cljs$lang$applyTo = (function (arglist__184744){
var values = cljs.core.seq( arglist__184744 );;
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
en_after.cljs$lang$applyTo = (function (arglist__184745){
var values = cljs.core.seq( arglist__184745 );;
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
en_substitute.cljs$lang$applyTo = (function (arglist__184746){
var values = cljs.core.seq( arglist__184746 );;
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
en_remove_node.cljs$lang$applyTo = (function (arglist__184747){
var values = cljs.core.seq( arglist__184747 );;
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
var elem__184748 = goog.dom.createElement.call(null,cljs.core.name.call(null,elm));

enfocus.core.add_map_attrs.call(null,elem__184748,mattr);
enfocus.core.en_content.call(null,pnod.cloneNode(true)).call(null,elem__184748);
elem__184748;
enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,elem__184748),enfocus.core.en_remove_node.call(null)).call(null,pnod);
return pnod;
}));
});
/**
* replaces a node with all its children
*/
enfocus.core.en_unwrap = (function en_unwrap(){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__184749 = document.createDocumentFragment();

enfocus.core.en_append.call(null,pnod.childNodes).call(null,frag__184749);
frag__184749;
return goog.dom.replaceNode.call(null,frag__184749,pnod);
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
en_set_style.cljs$lang$applyTo = (function (arglist__184750){
var values = cljs.core.seq( arglist__184750 );;
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
en_remove_style.cljs$lang$applyTo = (function (arglist__184751){
var values = cljs.core.seq( arglist__184751 );;
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
var obj__184752 = (new Object());

obj__184752.listen = (function (elm,func,opt_cap,opt_scope,opt_handler){
var callback__184753 = enfocus.core.mouse_enter_leave.call(null,func);

callback__184753.listen = func;
callback__184753.scope = opt_scope;
if(cljs.core.truth_(enfocus.core.op_handler))
{return opt_handler.listen(elm,cljs.core.name.call(null,event),callback__184753);
} else
{return goog.events.listen.call(null,elm,cljs.core.name.call(null,event),callback__184753);
}
});
obj__184752.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){
var listeners__184754 = goog.events.getListeners.call(null,elm,cljs.core.name.call(null,event),false);

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__184755 = obj.listener;

if(cljs.core.truth_((function (){var and__3546__auto____184757 = (function (){var or__3548__auto____184756 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____184756))
{return or__3548__auto____184756;
} else
{return cljs.core._EQ_.call(null,listener__184755.listen,func);
}
})();

if(cljs.core.truth_(and__3546__auto____184757))
{var or__3548__auto____184758 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____184758))
{return or__3548__auto____184758;
} else
{return cljs.core._EQ_.call(null,listener__184755.scope,opt_scope);
}
} else
{return and__3546__auto____184757;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener__184755);
} else
{return goog.events.unlisten.call(null,elm,cljs.core.name.call(null,event),listener__184755);
}
} else
{return null;
}
}),listeners__184754));
});
return obj__184752;
});
enfocus.core.wrapper_register = cljs.core.ObjMap.fromObject(["﷐'mouseenter","﷐'mouseleave"],{"﷐'mouseenter":enfocus.core.gen_enter_leave_wrapper.call(null,"﷐'mouseover"),"﷐'mouseleave":enfocus.core.gen_enter_leave_wrapper.call(null,"﷐'mouseout")});
/**
* adding an event to the selected nodes
*/
enfocus.core.en_listen = (function en_listen(event,func){
var wrapper__184759 = enfocus.core.wrapper_register.call(null,event);

return enfocus.core.chainable_standard.call(null,(function (pnod){
if(cljs.core.truth_((function (){var and__3546__auto____184760 = cljs.core._EQ_.call(null,"﷐'resize",event);

if(cljs.core.truth_(and__3546__auto____184760))
{return (window === pnod);
} else
{return and__3546__auto____184760;
}
})()))
{return goog.events.listen.call(null,enfocus.core.get_vp_monitor.call(null),"resize",func);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__184759)))
{return goog.events.listen.call(null,pnod,cljs.core.name.call(null,event),func);
} else
{return goog.events.listenWithWrapper.call(null,pnod,wrapper__184759,func);
}
}
}));
});
/**
* removing a specific event from the selected nodes
*/
enfocus.core.en_unlisten = (function en_unlisten(event,func){
var wrapper__184763 = enfocus.core.wrapper_register.call(null,event);

return enfocus.core.chainable_standard.call(null,(function (pnod){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__184763)))
{return goog.events.unlisten.call(null,pnod,cljs.core.name.call(null,event),func);
} else
{return goog.events.unlistenWithWrapper.call(null,pnod,wrapper__184763,func);
}
}));
});
/**
* adding an event to the selected nodes
* @param {...*} var_args
*/
enfocus.core.en_remove_listeners = (function() { 
var en_remove_listeners__delegate = function (event_list){
var get_name__184764 = (function (p1__184761_SHARP_){
return cljs.core.name.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,p1__184761_SHARP_,"﷐'mouseenter"))?"﷐'mouseover":(cljs.core.truth_(cljs.core._EQ_.call(null,p1__184761_SHARP_,"﷐'mouseleave"))?"﷐'mouseout":(cljs.core.truth_("﷐'else")?p1__184761_SHARP_:null))));
});

return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__184762_SHARP_){
return goog.events.removeAll.call(null,pnod,get_name__184764.call(null,p1__184762_SHARP_));
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
en_remove_listeners.cljs$lang$applyTo = (function (arglist__184765){
var event_list = cljs.core.seq( arglist__184765 );;
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
var anim__184766 = (new goog.fx.dom.FadeOut(pnod,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,pcallback))))
{goog.events.listen.call(null,anim__184766,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__184766.play();
}),callback);
});
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_in = (function en_fade_in(ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var anim__184767 = (new goog.fx.dom.FadeIn(pnod,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,pcallback))))
{goog.events.listen.call(null,anim__184767,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__184767.play();
}),callback);
});
/**
* resizes the selected elements to a width and height in px optional time series data
*/
enfocus.core.en_resize = (function en_resize(wth,hgt,ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var csize__184768 = goog.style.getSize.call(null,pnod);
var start__184769 = cljs.core.array.call(null,csize__184768.width,csize__184768.height);
var wth__184770 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curwidth",wth))?csize__184768.width:wth);
var hgt__184771 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curheight",hgt))?csize__184768.height:hgt);
var end__184772 = cljs.core.array.call(null,wth__184770,hgt__184771);
var anim__184773 = (new goog.fx.dom.Resize(pnod,start__184769,end__184772,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,pcallback))))
{goog.events.listen.call(null,anim__184773,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__184773.play();
}),callback);
});
/**
* moves the selected elements to a x and y in px optional time series data
*/
enfocus.core.en_move = (function en_move(xpos,ypos,ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var cpos__184774 = goog.style.getPosition.call(null,pnod);
var start__184775 = cljs.core.array.call(null,cpos__184774.x,cpos__184774.y);
var xpos__184776 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curx"))?cpos__184774.x:xpos);
var ypos__184777 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'cury"))?cpos__184774.y:ypos);
var end__184778 = cljs.core.array.call(null,xpos__184776,ypos__184777);
var anim__184779 = (new goog.fx.dom.Slide(pnod,start__184775,end__184778,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,pcallback))))
{goog.events.listen.call(null,anim__184779,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__184779.play();
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
var filt__184783 = (function (pnodes){
return filt.call(null,pnodes,null);
});
var filt__184784 = (function (pnodes,chain){
var pnod_col__184780 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var ttest__184781 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,tst))?cljs.core.deref.call(null,enfocus.core.reg_filt).call(null,tst):tst);
var res__184782 = cljs.core.filter.call(null,ttest__184781,pnod_col__184780);

enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,res__184782));
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,chain)))
{return trans.call(null,res__184782);
} else
{return trans.call(null,res__184782,chain);
}
});
filt = function(pnodes,chain){
switch(arguments.length){
case  1 :
return filt__184783.call(this,pnodes);
case  2 :
return filt__184784.call(this,pnodes,chain);
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
var create_sel_str__184787 = (function (css_sel){
return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__184788 = (function (id_mask_sym,css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__184786_SHARP_){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,p1__184786_SHARP_)))
{return enfocus.core.css_syms.call(null,p1__184786_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,p1__184786_SHARP_)))
{return cljs.core.str.call(null," ",cljs.core.name.call(null,p1__184786_SHARP_).replace("#",cljs.core.str.call(null,"#",id_mask_sym)));
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,p1__184786_SHARP_)))
{return create_sel_str.call(null,p1__184786_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__184786_SHARP_)))
{return p1__184786_SHARP_.replace("#",cljs.core.str.call(null,"#",id_mask_sym));
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
return create_sel_str__184787.call(this,id_mask_sym);
case  2 :
return create_sel_str__184788.call(this,id_mask_sym,css_sel);
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
var css_select__184792 = (function (css_sel){
return css_select.call(null,"",document,css_sel);
});
var css_select__184793 = (function (dom_node,css_sel){
return css_select.call(null,"",dom_node,css_sel);
});
var css_select__184794 = (function (id_mask_sym,dom_node,css_sel){
var sel__184790 = clojure.string.trim.call(null,clojure.string.replace.call(null,enfocus.core.create_sel_str.call(null,id_mask_sym,css_sel)," :",":"));
var ret__184791 = goog.dom.query.call(null,sel__184790,dom_node);

return ret__184791;
});
css_select = function(id_mask_sym,dom_node,css_sel){
switch(arguments.length){
case  1 :
return css_select__184792.call(this,id_mask_sym);
case  2 :
return css_select__184793.call(this,id_mask_sym,dom_node);
case  3 :
return css_select__184794.call(this,id_mask_sym,dom_node,css_sel);
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p1__184796_SHARP_){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,p1__184796_SHARP_),"]");
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
attr_QMARK_.cljs$lang$applyTo = (function (arglist__184797){
var kys = cljs.core.seq( arglist__184797 );;
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
var attr_EQ___184798 = (function (){
return "";
});
var attr_EQ___184799 = (function() { 
var G__184801__delegate = function (ky,txt,forms){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,ky),"='",txt,"']",cljs.core.apply.call(null,attr_EQ_,forms));
};
var G__184801 = function (ky,txt,var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__184801__delegate.call(this, ky, txt, forms);
};
G__184801.cljs$lang$maxFixedArity = 2;
G__184801.cljs$lang$applyTo = (function (arglist__184802){
var ky = cljs.core.first(arglist__184802);
var txt = cljs.core.first(cljs.core.next(arglist__184802));
var forms = cljs.core.rest(cljs.core.next(arglist__184802));
return G__184801__delegate.call(this, ky, txt, forms);
});
return G__184801;
})()
;
attr_EQ_ = function(ky,txt,var_args){
var forms = var_args;
switch(arguments.length){
case  0 :
return attr_EQ___184798.call(this);
default:
return attr_EQ___184799.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
attr_EQ_.cljs$lang$maxFixedArity = 2;
attr_EQ_.cljs$lang$applyTo = attr_EQ___184799.cljs$lang$applyTo;
return attr_EQ_;
})()
;
/**
* Matches any E element that is the n-th child of its parent:
* css -> E:nth-child(x) or E:nth-child(xn+y)
*/
enfocus.core.nth_child = (function() {
var nth_child = null;
var nth_child__184803 = (function (x){
return cljs.core.str.call(null,":nth-child(",x,")");
});
var nth_child__184804 = (function (x,y){
return cljs.core.str.call(null,":nth-child(",x,"n+",y,")");
});
nth_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_child__184803.call(this,x);
case  2 :
return nth_child__184804.call(this,x,y);
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
var nth_of_type__184806 = (function (x){
return cljs.core.str.call(null,":nth-of-type(",x,")");
});
var nth_of_type__184807 = (function (x,y){
return cljs.core.str.call(null,":nth-of-type(",x,"n+",y,")");
});
nth_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_of_type__184806.call(this,x);
case  2 :
return nth_of_type__184807.call(this,x,y);
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
var nth_last_child__184809 = (function (x){
return cljs.core.str.call(null,":nth-last-child(",x,")");
});
var nth_last_child__184810 = (function (x,y){
return cljs.core.str.call(null,":nth-last-child(",x,"n+",y,")");
});
nth_last_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_child__184809.call(this,x);
case  2 :
return nth_last_child__184810.call(this,x,y);
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
var nth_last_of_type__184812 = (function (x){
return cljs.core.str.call(null,":nth-last-of-type(",x,")");
});
var nth_last_of_type__184813 = (function (x,y){
return cljs.core.str.call(null,":nth-last-of-type(",x,"n+",y,")");
});
nth_last_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_of_type__184812.call(this,x);
case  2 :
return nth_last_of_type__184813.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_of_type;
})()
;
