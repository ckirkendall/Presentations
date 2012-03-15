goog.provide('prezo.atom');
goog.require('cljs.core');
goog.require('prezo.util');
goog.require('enfocus.core');
goog.require('goog.dom');
prezo.atom.FormException = {};
prezo.atom.get_errors = (function get_errors(this$){
if(cljs.core.truth_((function (){var and__3546__auto____182674 = this$;

if(cljs.core.truth_(and__3546__auto____182674))
{return this$.prezo$atom$FormException$get_errors;
} else
{return and__3546__auto____182674;
}
})()))
{return this$.prezo$atom$FormException$get_errors(this$);
} else
{return (function (){var or__3548__auto____182675 = (prezo.atom.get_errors[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____182675))
{return or__3548__auto____182675;
} else
{var or__3548__auto____182676 = (prezo.atom.get_errors["_"]);

if(cljs.core.truth_(or__3548__auto____182676))
{return or__3548__auto____182676;
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
var this__182677 = this;
return this__182677.errors;
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
var this__182680 = this;
return cljs.core.hash_coll.call(null,this__376__auto__);
});
prezo.atom.UserModel.prototype.cljs$core$ILookup$ = true;
prezo.atom.UserModel.prototype.cljs$core$ILookup$_lookup = (function() {
var G__182699 = null;
var G__182699__182700 = (function (this__381__auto__,k__382__auto__){
var this__182681 = this;
return cljs.core._lookup.call(null,this__381__auto__,k__382__auto__,null);
});
var G__182699__182701 = (function (this__383__auto__,k__384__auto__,else__385__auto__){
var this__182682 = this;
return cljs.core.get.call(null,cljs.core.merge.call(null,cljs.core.hash_map.call(null,"﷐'name",this__182682.name,"﷐'email",this__182682.email,"﷐'twitter",this__182682.twitter),this__182682.__extmap),k__384__auto__,else__385__auto__);
});
G__182699 = function(this__383__auto__,k__384__auto__,else__385__auto__){
switch(arguments.length){
case  2 :
return G__182699__182700.call(this,this__383__auto__,k__384__auto__);
case  3 :
return G__182699__182701.call(this,this__383__auto__,k__384__auto__,else__385__auto__);
}
throw('Invalid arity: ' + arguments.length);
};
return G__182699;
})()
;
prezo.atom.UserModel.prototype.cljs$core$IAssociative$ = true;
prezo.atom.UserModel.prototype.cljs$core$IAssociative$_assoc = (function (this__389__auto__,k__390__auto__,G__182678){
var this__182683 = this;
var pred__182684__182687 = cljs.core.identical_QMARK_;
var expr__182685__182688 = k__390__auto__;

if(cljs.core.truth_(pred__182684__182687.call(null,"﷐'name",expr__182685__182688)))
{return (new prezo.atom.UserModel(G__182678,this__182683.email,this__182683.twitter,this__182683.__meta,this__182683.__extmap));
} else
{if(cljs.core.truth_(pred__182684__182687.call(null,"﷐'email",expr__182685__182688)))
{return (new prezo.atom.UserModel(this__182683.name,G__182678,this__182683.twitter,this__182683.__meta,this__182683.__extmap));
} else
{if(cljs.core.truth_(pred__182684__182687.call(null,"﷐'twitter",expr__182685__182688)))
{return (new prezo.atom.UserModel(this__182683.name,this__182683.email,G__182678,this__182683.__meta,this__182683.__extmap));
} else
{return (new prezo.atom.UserModel(this__182683.name,this__182683.email,this__182683.twitter,this__182683.__meta,cljs.core.assoc.call(null,this__182683.__extmap,k__390__auto__,G__182678)));
}
}
}
});
prezo.atom.UserModel.prototype.cljs$core$IRecord$ = true;
prezo.atom.UserModel.prototype.cljs$core$ICollection$ = true;
prezo.atom.UserModel.prototype.cljs$core$ICollection$_conj = (function (this__387__auto__,entry__388__auto__){
var this__182689 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry__388__auto__)))
{return cljs.core._assoc.call(null,this__387__auto__,cljs.core._nth.call(null,entry__388__auto__,0),cljs.core._nth.call(null,entry__388__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__387__auto__,entry__388__auto__);
}
});
prezo.atom.UserModel.prototype.cljs$core$ISeqable$ = true;
prezo.atom.UserModel.prototype.cljs$core$ISeqable$_seq = (function (this__394__auto__){
var this__182690 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'name",this__182690.name),cljs.core.vector.call(null,"﷐'email",this__182690.email),cljs.core.vector.call(null,"﷐'twitter",this__182690.twitter)]),this__182690.__extmap));
});
prezo.atom.UserModel.prototype.cljs$core$IPrintable$ = true;
prezo.atom.UserModel.prototype.cljs$core$IPrintable$_pr_seq = (function (this__396__auto__,opts__397__auto__){
var this__182691 = this;
var pr_pair__398__auto____182692 = (function (keyval__399__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__397__auto__,keyval__399__auto__);
});

return cljs.core.pr_sequential.call(null,pr_pair__398__auto____182692,cljs.core.str.call(null,"#","prezo.atom.UserModel","{"),", ","}",opts__397__auto__,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'name",this__182691.name),cljs.core.vector.call(null,"﷐'email",this__182691.email),cljs.core.vector.call(null,"﷐'twitter",this__182691.twitter)]),this__182691.__extmap));
});
prezo.atom.UserModel.prototype.cljs$core$ICounted$ = true;
prezo.atom.UserModel.prototype.cljs$core$ICounted$_count = (function (this__386__auto__){
var this__182693 = this;
return (3 + cljs.core.count.call(null,this__182693.__extmap));
});
prezo.atom.UserModel.prototype.cljs$core$IEquiv$ = true;
prezo.atom.UserModel.prototype.cljs$core$IEquiv$_equiv = (function (this__377__auto__,other__378__auto__){
var this__182694 = this;
var and__3546__auto____182695 = (this__377__auto__.constructor === other__378__auto__.constructor);

if(cljs.core.truth_(and__3546__auto____182695))
{return cljs.core.equiv_map.call(null,this__377__auto__,other__378__auto__);
} else
{return and__3546__auto____182695;
}
});
prezo.atom.UserModel.prototype.cljs$core$IWithMeta$ = true;
prezo.atom.UserModel.prototype.cljs$core$IWithMeta$_with_meta = (function (this__380__auto__,G__182678){
var this__182696 = this;
return (new prezo.atom.UserModel(this__182696.name,this__182696.email,this__182696.twitter,G__182678,this__182696.__extmap));
});
prezo.atom.UserModel.prototype.cljs$core$IMeta$ = true;
prezo.atom.UserModel.prototype.cljs$core$IMeta$_meta = (function (this__379__auto__){
var this__182697 = this;
return this__182697.__meta;
});
prezo.atom.UserModel.prototype.cljs$core$IMap$ = true;
prezo.atom.UserModel.prototype.cljs$core$IMap$_dissoc = (function (this__391__auto__,k__392__auto__){
var this__182698 = this;
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set(["﷐'name","﷐'email","﷐'twitter"]),k__392__auto__)))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),this__391__auto__),this__182698.__meta),k__392__auto__);
} else
{return (new prezo.atom.UserModel(this__182698.name,this__182698.email,this__182698.twitter,this__182698.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__182698.__extmap,k__392__auto__))));
}
});
prezo.atom.UserModel.cljs$core$IPrintable$_pr_seq = (function (this__423__auto__){
return cljs.core.list.call(null,"prezo.atom.UserModel");
});
prezo.atom.__GT_UserModel = (function __GT_UserModel(name,email,twitter){
return (new prezo.atom.UserModel(name,email,twitter));
});
prezo.atom.map__GT_UserModel = (function map__GT_UserModel(G__182679){
return (new prezo.atom.UserModel("﷐'name".call(null,G__182679),"﷐'email".call(null,G__182679),"﷐'twitter".call(null,G__182679),null,cljs.core.dissoc.call(null,G__182679,"﷐'name","﷐'email","﷐'twitter")));
});
prezo.atom.UserModel;
prezo.atom.my_user = cljs.core.atom.call(null,(new prezo.atom.UserModel("Creighton Kirkendall","ckirkendall@gmail.com","@crkirkendall")));
prezo.atom.user_validator = (function user_validator(new_val){
var check_map__182703 = cljs.core.ObjMap.fromObject(["﷐'name","﷐'email","﷐'twitter"],{"﷐'name":cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.re_matches.call(null,/\S+.*/,"﷐'name".call(null,new_val)))),"﷐'email":cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.re_matches.call(null,/.+@.+\..+/,"﷐'email".call(null,new_val)))),"﷐'twitter":cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.re_matches.call(null,/@\S+/,"﷐'twitter".call(null,new_val))))});

if(cljs.core.truth_(cljs.core.not_every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.vals.call(null,check_map__182703))))
{throw (new prezo.atom.FormError(check_map__182703));
} else
{return new_val;
}
});
cljs.core.set_validator_BANG_.call(null,prezo.atom.my_user,prezo.atom.user_validator);
cljs.core.add_watch.call(null,prezo.atom.my_user,"﷐'user-view",(function (key,ref,old_val,new_val){
return prezo.atom.user_view.call(null,new_val);
}));
prezo.atom.user_view = (function user_view(user_val){
var nods__3015__auto____182706 = enfocus.core.nodes__GT_coll.call(null,prezo.util.by_id.call(null,"user-div"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod182705){
enfocus.core.en_content.call(null,"﷐'name".call(null,user_val)).call(null,enfocus.core.css_select.call(null,"",pnod182705,cljs.core.Vector.fromArray([".name"])));
enfocus.core.en_content.call(null,"﷐'email".call(null,user_val)).call(null,enfocus.core.css_select.call(null,"",pnod182705,cljs.core.Vector.fromArray([".email"])));
enfocus.core.en_content.call(null,"﷐'twitter".call(null,user_val)).call(null,enfocus.core.css_select.call(null,"",pnod182705,cljs.core.Vector.fromArray([".twitter"])));
return pnod182705;
}),nods__3015__auto____182706));
return prezo.util.by_id.call(null,"user-div");
});
prezo.atom.persist_user_form = (function persist_user_form(){
try{cljs.core.swap_BANG_.call(null,prezo.atom.my_user,cljs.core.merge,(function (){var nods__3026__auto____182713 = enfocus.core.nodes__GT_coll.call(null,document);
var map182712__182714 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var map_list__3027__auto____182715 = cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod182711){
cljs.core.swap_BANG_.call(null,map182712__182714,cljs.core.assoc,"﷐'name",enfocus.core.extr_multi_node.call(null,(function (pnod__3206__auto__){
return pnod__3206__auto__.value;
})).call(null,enfocus.core.css_select.call(null,"",pnod182711,cljs.core.Vector.fromArray(["#user-name"]))));
cljs.core.swap_BANG_.call(null,map182712__182714,cljs.core.assoc,"﷐'email",enfocus.core.extr_multi_node.call(null,(function (pnod__3206__auto__){
return pnod__3206__auto__.value;
})).call(null,enfocus.core.css_select.call(null,"",pnod182711,cljs.core.Vector.fromArray(["#user-email"]))));
cljs.core.swap_BANG_.call(null,map182712__182714,cljs.core.assoc,"﷐'twitter",enfocus.core.extr_multi_node.call(null,(function (pnod__3206__auto__){
return pnod__3206__auto__.value;
})).call(null,enfocus.core.css_select.call(null,"",pnod182711,cljs.core.Vector.fromArray(["#user-twitter"]))));
return pnod182711;
}),nods__3026__auto____182713));

return cljs.core.deref.call(null,map182712__182714);
})());
enfocus.core.en_content.call(null,"").call(null,prezo.util.by_id.call(null,"user-form-errors"));
return prezo.util.by_id.call(null,"user-form-errors");
}catch (e182707){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,prezo.atom.FormError,e182707)))
{var e__182708 = e182707;

var errors__182709 = prezo.atom.get_errors.call(null,e__182708);
var inv_flds__182710 = cljs.core.filter.call(null,(function (p1__182704_SHARP_){
return cljs.core.not.call(null,p1__182704_SHARP_.call(null,errors__182709));
}),cljs.core.keys.call(null,errors__182709));

enfocus.core.en_content.call(null,cljs.core.str.call(null,"The following fields where invalid:",cljs.core.pr_str.call(null,inv_flds__182710))).call(null,prezo.util.by_id.call(null,"user-form-errors"));
return prezo.util.by_id.call(null,"user-form-errors");
} else
{if(cljs.core.truth_("﷐'else"))
{throw e182707;
} else
{return null;
}
}
}});
