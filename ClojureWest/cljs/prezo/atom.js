goog.provide('prezo.atom');
goog.require('cljs.core');
goog.require('prezo.util');
goog.require('enfocus.core');
goog.require('goog.dom');
prezo.atom.FormException = {};
prezo.atom.get_errors = (function get_errors(this$){
if(cljs.core.truth_((function (){var and__3546__auto____18966 = this$;

if(cljs.core.truth_(and__3546__auto____18966))
{return this$.prezo$atom$FormException$get_errors;
} else
{return and__3546__auto____18966;
}
})()))
{return this$.prezo$atom$FormException$get_errors(this$);
} else
{return (function (){var or__3548__auto____18967 = (prezo.atom.get_errors[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____18967))
{return or__3548__auto____18967;
} else
{var or__3548__auto____18968 = (prezo.atom.get_errors["_"]);

if(cljs.core.truth_(or__3548__auto____18968))
{return or__3548__auto____18968;
} else
{throw cljs.core.missing_protocol.call(null,"FormException.get-errors",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
prezo.atom.FormError = (function (errors){
this.errors = errors;
})
prezo.atom.FormError.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"prezo.atom.FormError");
});
prezo.atom.FormError.prototype.prezo$atom$FormException$ = true;
prezo.atom.FormError.prototype.prezo$atom$FormException$get_errors = (function (this$){
var this__18969 = this;
return this__18969.errors;
});
prezo.atom.FormError;


/**
* @constructor
* @param {*} name
* @param {*} email
* @param {*} twitter
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
prezo.atom.UserModel = (function (name,email,twitter,__meta,__extmap){
this.name = name;
this.email = email;
this.twitter = twitter;
this.__meta = __meta;
this.__extmap = __extmap;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
prezo.atom.UserModel.prototype.cljs$core$IHash$ = true;
prezo.atom.UserModel.prototype.cljs$core$IHash$_hash = (function (this__376__auto__){
var this__18972 = this;
return cljs.core.hash_coll.call(null,this__376__auto__);
});
prezo.atom.UserModel.prototype.cljs$core$ILookup$ = true;
prezo.atom.UserModel.prototype.cljs$core$ILookup$_lookup = (function() {
var G__18991 = null;
var G__18991__18992 = (function (this__381__auto__,k__382__auto__){
var this__18973 = this;
return cljs.core._lookup.call(null,this__381__auto__,k__382__auto__,null);
});
var G__18991__18993 = (function (this__383__auto__,k__384__auto__,else__385__auto__){
var this__18974 = this;
return cljs.core.get.call(null,cljs.core.merge.call(null,cljs.core.hash_map.call(null,"﷐'name",this__18974.name,"﷐'email",this__18974.email,"﷐'twitter",this__18974.twitter),this__18974.__extmap),k__384__auto__,else__385__auto__);
});
G__18991 = function(this__383__auto__,k__384__auto__,else__385__auto__){
switch(arguments.length){
case  2 :
return G__18991__18992.call(this,this__383__auto__,k__384__auto__);
case  3 :
return G__18991__18993.call(this,this__383__auto__,k__384__auto__,else__385__auto__);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18991;
})()
;
prezo.atom.UserModel.prototype.cljs$core$IAssociative$ = true;
prezo.atom.UserModel.prototype.cljs$core$IAssociative$_assoc = (function (this__389__auto__,k__390__auto__,G__18970){
var this__18975 = this;
var pred__18976__18979 = cljs.core.identical_QMARK_;
var expr__18977__18980 = k__390__auto__;

if(cljs.core.truth_(pred__18976__18979.call(null,"﷐'name",expr__18977__18980)))
{return (new prezo.atom.UserModel(G__18970,this__18975.email,this__18975.twitter,this__18975.__meta,this__18975.__extmap));
} else
{if(cljs.core.truth_(pred__18976__18979.call(null,"﷐'email",expr__18977__18980)))
{return (new prezo.atom.UserModel(this__18975.name,G__18970,this__18975.twitter,this__18975.__meta,this__18975.__extmap));
} else
{if(cljs.core.truth_(pred__18976__18979.call(null,"﷐'twitter",expr__18977__18980)))
{return (new prezo.atom.UserModel(this__18975.name,this__18975.email,G__18970,this__18975.__meta,this__18975.__extmap));
} else
{return (new prezo.atom.UserModel(this__18975.name,this__18975.email,this__18975.twitter,this__18975.__meta,cljs.core.assoc.call(null,this__18975.__extmap,k__390__auto__,G__18970)));
}
}
}
});
prezo.atom.UserModel.prototype.cljs$core$IRecord$ = true;
prezo.atom.UserModel.prototype.cljs$core$ICollection$ = true;
prezo.atom.UserModel.prototype.cljs$core$ICollection$_conj = (function (this__387__auto__,entry__388__auto__){
var this__18981 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry__388__auto__)))
{return cljs.core._assoc.call(null,this__387__auto__,cljs.core._nth.call(null,entry__388__auto__,0),cljs.core._nth.call(null,entry__388__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__387__auto__,entry__388__auto__);
}
});
prezo.atom.UserModel.prototype.cljs$core$ISeqable$ = true;
prezo.atom.UserModel.prototype.cljs$core$ISeqable$_seq = (function (this__394__auto__){
var this__18982 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'name",this__18982.name),cljs.core.vector.call(null,"﷐'email",this__18982.email),cljs.core.vector.call(null,"﷐'twitter",this__18982.twitter)]),this__18982.__extmap));
});
prezo.atom.UserModel.prototype.cljs$core$IPrintable$ = true;
prezo.atom.UserModel.prototype.cljs$core$IPrintable$_pr_seq = (function (this__396__auto__,opts__397__auto__){
var this__18983 = this;
var pr_pair__398__auto____18984 = (function (keyval__399__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__397__auto__,keyval__399__auto__);
});

return cljs.core.pr_sequential.call(null,pr_pair__398__auto____18984,cljs.core.str.call(null,"#","prezo.atom.UserModel","{"),", ","}",opts__397__auto__,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'name",this__18983.name),cljs.core.vector.call(null,"﷐'email",this__18983.email),cljs.core.vector.call(null,"﷐'twitter",this__18983.twitter)]),this__18983.__extmap));
});
prezo.atom.UserModel.prototype.cljs$core$ICounted$ = true;
prezo.atom.UserModel.prototype.cljs$core$ICounted$_count = (function (this__386__auto__){
var this__18985 = this;
return (3 + cljs.core.count.call(null,this__18985.__extmap));
});
prezo.atom.UserModel.prototype.cljs$core$IEquiv$ = true;
prezo.atom.UserModel.prototype.cljs$core$IEquiv$_equiv = (function (this__377__auto__,other__378__auto__){
var this__18986 = this;
var and__3546__auto____18987 = (this__377__auto__.constructor === other__378__auto__.constructor);

if(cljs.core.truth_(and__3546__auto____18987))
{return cljs.core.equiv_map.call(null,this__377__auto__,other__378__auto__);
} else
{return and__3546__auto____18987;
}
});
prezo.atom.UserModel.prototype.cljs$core$IWithMeta$ = true;
prezo.atom.UserModel.prototype.cljs$core$IWithMeta$_with_meta = (function (this__380__auto__,G__18970){
var this__18988 = this;
return (new prezo.atom.UserModel(this__18988.name,this__18988.email,this__18988.twitter,G__18970,this__18988.__extmap));
});
prezo.atom.UserModel.prototype.cljs$core$IMeta$ = true;
prezo.atom.UserModel.prototype.cljs$core$IMeta$_meta = (function (this__379__auto__){
var this__18989 = this;
return this__18989.__meta;
});
prezo.atom.UserModel.prototype.cljs$core$IMap$ = true;
prezo.atom.UserModel.prototype.cljs$core$IMap$_dissoc = (function (this__391__auto__,k__392__auto__){
var this__18990 = this;
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set(["﷐'name","﷐'email","﷐'twitter"]),k__392__auto__)))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),this__391__auto__),this__18990.__meta),k__392__auto__);
} else
{return (new prezo.atom.UserModel(this__18990.name,this__18990.email,this__18990.twitter,this__18990.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__18990.__extmap,k__392__auto__))));
}
});
prezo.atom.UserModel.cljs$core$IPrintable$_pr_seq = (function (this__423__auto__){
return cljs.core.list.call(null,"prezo.atom.UserModel");
});
prezo.atom.__GT_UserModel = (function __GT_UserModel(name,email,twitter){
return (new prezo.atom.UserModel(name,email,twitter));
});
prezo.atom.map__GT_UserModel = (function map__GT_UserModel(G__18971){
return (new prezo.atom.UserModel("﷐'name".call(null,G__18971),"﷐'email".call(null,G__18971),"﷐'twitter".call(null,G__18971),null,cljs.core.dissoc.call(null,G__18971,"﷐'name","﷐'email","﷐'twitter")));
});
prezo.atom.UserModel;
prezo.atom.my_user = cljs.core.atom.call(null,(new prezo.atom.UserModel("Creighton Kirkendall","ckirkendall@gmail.com","@crkirkendall")));
prezo.atom.user_validator = (function user_validator(new_val){
var check_map__18995 = cljs.core.ObjMap.fromObject(["﷐'name","﷐'email","﷐'twitter"],{"﷐'name":cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.re_matches.call(null,/\S+.*/,"﷐'name".call(null,new_val)))),"﷐'email":cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.re_matches.call(null,/.+@.+\..+/,"﷐'email".call(null,new_val)))),"﷐'twitter":cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.re_matches.call(null,/@\S+/,"﷐'twitter".call(null,new_val))))});

if(cljs.core.truth_(cljs.core.not_every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.vals.call(null,check_map__18995))))
{throw (new prezo.atom.FormError(check_map__18995));
} else
{return new_val;
}
});
cljs.core.set_validator_BANG_.call(null,prezo.atom.my_user,prezo.atom.user_validator);
cljs.core.add_watch.call(null,prezo.atom.my_user,"﷐'user-view",(function (key,ref,old_val,new_val){
return prezo.atom.user_view.call(null,new_val);
}));
prezo.atom.user_view = (function user_view(user_val){
var nods__3046__auto____18998 = enfocus.core.nodes__GT_coll.call(null,prezo.util.by_id.call(null,"user-div"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod18997){
enfocus.core.en_content.call(null,"﷐'name".call(null,user_val)).call(null,enfocus.core.css_select.call(null,"",pnod18997,cljs.core.Vector.fromArray([".name"])));
enfocus.core.en_content.call(null,"﷐'email".call(null,user_val)).call(null,enfocus.core.css_select.call(null,"",pnod18997,cljs.core.Vector.fromArray([".email"])));
enfocus.core.en_content.call(null,"﷐'twitter".call(null,user_val)).call(null,enfocus.core.css_select.call(null,"",pnod18997,cljs.core.Vector.fromArray([".twitter"])));
return pnod18997;
}),nods__3046__auto____18998));
return prezo.util.by_id.call(null,"user-div");
});
prezo.atom.persist_user_form = (function persist_user_form(){
try{cljs.core.swap_BANG_.call(null,prezo.atom.my_user,cljs.core.merge,(function (){var nods__3057__auto____19005 = enfocus.core.nodes__GT_coll.call(null,document);
var map19004__19006 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var map_list__3058__auto____19007 = cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod19003){
cljs.core.swap_BANG_.call(null,map19004__19006,cljs.core.assoc,"﷐'name",enfocus.core.extr_multi_node.call(null,(function (pnod__3237__auto__){
return pnod__3237__auto__.value;
})).call(null,enfocus.core.css_select.call(null,"",pnod19003,cljs.core.Vector.fromArray(["#user-name"]))));
cljs.core.swap_BANG_.call(null,map19004__19006,cljs.core.assoc,"﷐'email",enfocus.core.extr_multi_node.call(null,(function (pnod__3237__auto__){
return pnod__3237__auto__.value;
})).call(null,enfocus.core.css_select.call(null,"",pnod19003,cljs.core.Vector.fromArray(["#user-email"]))));
cljs.core.swap_BANG_.call(null,map19004__19006,cljs.core.assoc,"﷐'twitter",enfocus.core.extr_multi_node.call(null,(function (pnod__3237__auto__){
return pnod__3237__auto__.value;
})).call(null,enfocus.core.css_select.call(null,"",pnod19003,cljs.core.Vector.fromArray(["#user-twitter"]))));
return pnod19003;
}),nods__3057__auto____19005));

return cljs.core.deref.call(null,map19004__19006);
})());
enfocus.core.en_content.call(null,"").call(null,prezo.util.by_id.call(null,"user-form-errors"));
return prezo.util.by_id.call(null,"user-form-errors");
}catch (e18999){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,prezo.atom.FormError,e18999)))
{var e__19000 = e18999;

var errors__19001 = prezo.atom.get_errors.call(null,e__19000);
var inv_flds__19002 = cljs.core.filter.call(null,(function (p1__18996_SHARP_){
return cljs.core.not.call(null,p1__18996_SHARP_.call(null,errors__19001));
}),cljs.core.keys.call(null,errors__19001));

enfocus.core.en_content.call(null,cljs.core.str.call(null,"The following fields where invalid:",cljs.core.pr_str.call(null,inv_flds__19002))).call(null,prezo.util.by_id.call(null,"user-form-errors"));
return prezo.util.by_id.call(null,"user-form-errors");
} else
{if(cljs.core.truth_("﷐'else"))
{throw e18999;
} else
{return null;
}
}
}});
