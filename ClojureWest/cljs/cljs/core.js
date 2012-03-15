goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____182955 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____182955))
{return or__3548__auto____182955;
} else
{var or__3548__auto____182956 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____182956))
{return or__3548__auto____182956;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return (array[i]);
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__183020 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____182957 = this$;

if(cljs.core.truth_(and__3546__auto____182957))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____182957;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____182958 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____182958))
{return or__3548__auto____182958;
} else
{var or__3548__auto____182959 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____182959))
{return or__3548__auto____182959;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__183021 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____182960 = this$;

if(cljs.core.truth_(and__3546__auto____182960))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____182960;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____182961 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____182961))
{return or__3548__auto____182961;
} else
{var or__3548__auto____182962 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____182962))
{return or__3548__auto____182962;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__183022 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____182963 = this$;

if(cljs.core.truth_(and__3546__auto____182963))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____182963;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____182964 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____182964))
{return or__3548__auto____182964;
} else
{var or__3548__auto____182965 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____182965))
{return or__3548__auto____182965;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__183023 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____182966 = this$;

if(cljs.core.truth_(and__3546__auto____182966))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____182966;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____182967 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____182967))
{return or__3548__auto____182967;
} else
{var or__3548__auto____182968 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____182968))
{return or__3548__auto____182968;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__183024 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____182969 = this$;

if(cljs.core.truth_(and__3546__auto____182969))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____182969;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____182970 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____182970))
{return or__3548__auto____182970;
} else
{var or__3548__auto____182971 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____182971))
{return or__3548__auto____182971;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__183025 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____182972 = this$;

if(cljs.core.truth_(and__3546__auto____182972))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____182972;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____182973 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____182973))
{return or__3548__auto____182973;
} else
{var or__3548__auto____182974 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____182974))
{return or__3548__auto____182974;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__183026 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____182975 = this$;

if(cljs.core.truth_(and__3546__auto____182975))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____182975;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____182976 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____182976))
{return or__3548__auto____182976;
} else
{var or__3548__auto____182977 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____182977))
{return or__3548__auto____182977;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__183027 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____182978 = this$;

if(cljs.core.truth_(and__3546__auto____182978))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____182978;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____182979 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____182979))
{return or__3548__auto____182979;
} else
{var or__3548__auto____182980 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____182980))
{return or__3548__auto____182980;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__183028 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____182981 = this$;

if(cljs.core.truth_(and__3546__auto____182981))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____182981;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____182982 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____182982))
{return or__3548__auto____182982;
} else
{var or__3548__auto____182983 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____182983))
{return or__3548__auto____182983;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__183029 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____182984 = this$;

if(cljs.core.truth_(and__3546__auto____182984))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____182984;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____182985 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____182985))
{return or__3548__auto____182985;
} else
{var or__3548__auto____182986 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____182986))
{return or__3548__auto____182986;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__183030 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____182987 = this$;

if(cljs.core.truth_(and__3546__auto____182987))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____182987;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____182988 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____182988))
{return or__3548__auto____182988;
} else
{var or__3548__auto____182989 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____182989))
{return or__3548__auto____182989;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__183031 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____182990 = this$;

if(cljs.core.truth_(and__3546__auto____182990))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____182990;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____182991 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____182991))
{return or__3548__auto____182991;
} else
{var or__3548__auto____182992 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____182992))
{return or__3548__auto____182992;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__183032 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____182993 = this$;

if(cljs.core.truth_(and__3546__auto____182993))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____182993;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____182994 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____182994))
{return or__3548__auto____182994;
} else
{var or__3548__auto____182995 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____182995))
{return or__3548__auto____182995;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__183033 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____182996 = this$;

if(cljs.core.truth_(and__3546__auto____182996))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____182996;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____182997 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____182997))
{return or__3548__auto____182997;
} else
{var or__3548__auto____182998 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____182998))
{return or__3548__auto____182998;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__183034 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____182999 = this$;

if(cljs.core.truth_(and__3546__auto____182999))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____182999;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____183000 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____183000))
{return or__3548__auto____183000;
} else
{var or__3548__auto____183001 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____183001))
{return or__3548__auto____183001;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__183035 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____183002 = this$;

if(cljs.core.truth_(and__3546__auto____183002))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____183002;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____183003 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____183003))
{return or__3548__auto____183003;
} else
{var or__3548__auto____183004 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____183004))
{return or__3548__auto____183004;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__183036 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____183005 = this$;

if(cljs.core.truth_(and__3546__auto____183005))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____183005;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____183006 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____183006))
{return or__3548__auto____183006;
} else
{var or__3548__auto____183007 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____183007))
{return or__3548__auto____183007;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__183037 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____183008 = this$;

if(cljs.core.truth_(and__3546__auto____183008))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____183008;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____183009 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____183009))
{return or__3548__auto____183009;
} else
{var or__3548__auto____183010 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____183010))
{return or__3548__auto____183010;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__183038 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____183011 = this$;

if(cljs.core.truth_(and__3546__auto____183011))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____183011;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____183012 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____183012))
{return or__3548__auto____183012;
} else
{var or__3548__auto____183013 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____183013))
{return or__3548__auto____183013;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__183039 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____183014 = this$;

if(cljs.core.truth_(and__3546__auto____183014))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____183014;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____183015 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____183015))
{return or__3548__auto____183015;
} else
{var or__3548__auto____183016 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____183016))
{return or__3548__auto____183016;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__183040 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____183017 = this$;

if(cljs.core.truth_(and__3546__auto____183017))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____183017;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____183018 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____183018))
{return or__3548__auto____183018;
} else
{var or__3548__auto____183019 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____183019))
{return or__3548__auto____183019;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__183020.call(this,this$);
case  2 :
return _invoke__183021.call(this,this$,a);
case  3 :
return _invoke__183022.call(this,this$,a,b);
case  4 :
return _invoke__183023.call(this,this$,a,b,c);
case  5 :
return _invoke__183024.call(this,this$,a,b,c,d);
case  6 :
return _invoke__183025.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__183026.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__183027.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__183028.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__183029.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__183030.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__183031.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__183032.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__183033.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__183034.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__183035.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__183036.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__183037.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__183038.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__183039.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__183040.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____183042 = coll;

if(cljs.core.truth_(and__3546__auto____183042))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____183042;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____183043 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____183043))
{return or__3548__auto____183043;
} else
{var or__3548__auto____183044 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____183044))
{return or__3548__auto____183044;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____183045 = coll;

if(cljs.core.truth_(and__3546__auto____183045))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____183045;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____183046 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____183046))
{return or__3548__auto____183046;
} else
{var or__3548__auto____183047 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____183047))
{return or__3548__auto____183047;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____183048 = coll;

if(cljs.core.truth_(and__3546__auto____183048))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____183048;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____183049 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____183049))
{return or__3548__auto____183049;
} else
{var or__3548__auto____183050 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____183050))
{return or__3548__auto____183050;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__183057 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____183051 = coll;

if(cljs.core.truth_(and__3546__auto____183051))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____183051;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____183052 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____183052))
{return or__3548__auto____183052;
} else
{var or__3548__auto____183053 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____183053))
{return or__3548__auto____183053;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__183058 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____183054 = coll;

if(cljs.core.truth_(and__3546__auto____183054))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____183054;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____183055 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____183055))
{return or__3548__auto____183055;
} else
{var or__3548__auto____183056 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____183056))
{return or__3548__auto____183056;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__183057.call(this,coll,n);
case  3 :
return _nth__183058.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____183060 = coll;

if(cljs.core.truth_(and__3546__auto____183060))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____183060;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____183061 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____183061))
{return or__3548__auto____183061;
} else
{var or__3548__auto____183062 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____183062))
{return or__3548__auto____183062;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____183063 = coll;

if(cljs.core.truth_(and__3546__auto____183063))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____183063;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____183064 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____183064))
{return or__3548__auto____183064;
} else
{var or__3548__auto____183065 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____183065))
{return or__3548__auto____183065;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__183072 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____183066 = o;

if(cljs.core.truth_(and__3546__auto____183066))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____183066;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____183067 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____183067))
{return or__3548__auto____183067;
} else
{var or__3548__auto____183068 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____183068))
{return or__3548__auto____183068;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__183073 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____183069 = o;

if(cljs.core.truth_(and__3546__auto____183069))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____183069;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____183070 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____183070))
{return or__3548__auto____183070;
} else
{var or__3548__auto____183071 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____183071))
{return or__3548__auto____183071;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__183072.call(this,o,k);
case  3 :
return _lookup__183073.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____183075 = coll;

if(cljs.core.truth_(and__3546__auto____183075))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____183075;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____183076 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____183076))
{return or__3548__auto____183076;
} else
{var or__3548__auto____183077 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____183077))
{return or__3548__auto____183077;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____183078 = coll;

if(cljs.core.truth_(and__3546__auto____183078))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____183078;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____183079 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____183079))
{return or__3548__auto____183079;
} else
{var or__3548__auto____183080 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____183080))
{return or__3548__auto____183080;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____183081 = coll;

if(cljs.core.truth_(and__3546__auto____183081))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____183081;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____183082 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____183082))
{return or__3548__auto____183082;
} else
{var or__3548__auto____183083 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____183083))
{return or__3548__auto____183083;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____183084 = coll;

if(cljs.core.truth_(and__3546__auto____183084))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____183084;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____183085 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____183085))
{return or__3548__auto____183085;
} else
{var or__3548__auto____183086 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____183086))
{return or__3548__auto____183086;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____183087 = coll;

if(cljs.core.truth_(and__3546__auto____183087))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____183087;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____183088 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____183088))
{return or__3548__auto____183088;
} else
{var or__3548__auto____183089 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____183089))
{return or__3548__auto____183089;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____183090 = coll;

if(cljs.core.truth_(and__3546__auto____183090))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____183090;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____183091 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____183091))
{return or__3548__auto____183091;
} else
{var or__3548__auto____183092 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____183092))
{return or__3548__auto____183092;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____183093 = coll;

if(cljs.core.truth_(and__3546__auto____183093))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____183093;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____183094 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____183094))
{return or__3548__auto____183094;
} else
{var or__3548__auto____183095 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____183095))
{return or__3548__auto____183095;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____183096 = o;

if(cljs.core.truth_(and__3546__auto____183096))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____183096;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____183097 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____183097))
{return or__3548__auto____183097;
} else
{var or__3548__auto____183098 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____183098))
{return or__3548__auto____183098;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____183099 = o;

if(cljs.core.truth_(and__3546__auto____183099))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____183099;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____183100 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____183100))
{return or__3548__auto____183100;
} else
{var or__3548__auto____183101 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____183101))
{return or__3548__auto____183101;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____183102 = o;

if(cljs.core.truth_(and__3546__auto____183102))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____183102;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____183103 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____183103))
{return or__3548__auto____183103;
} else
{var or__3548__auto____183104 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____183104))
{return or__3548__auto____183104;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____183105 = o;

if(cljs.core.truth_(and__3546__auto____183105))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____183105;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____183106 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____183106))
{return or__3548__auto____183106;
} else
{var or__3548__auto____183107 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____183107))
{return or__3548__auto____183107;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__183114 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____183108 = coll;

if(cljs.core.truth_(and__3546__auto____183108))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____183108;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____183109 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____183109))
{return or__3548__auto____183109;
} else
{var or__3548__auto____183110 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____183110))
{return or__3548__auto____183110;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__183115 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____183111 = coll;

if(cljs.core.truth_(and__3546__auto____183111))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____183111;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____183112 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____183112))
{return or__3548__auto____183112;
} else
{var or__3548__auto____183113 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____183113))
{return or__3548__auto____183113;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__183114.call(this,coll,f);
case  3 :
return _reduce__183115.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____183117 = o;

if(cljs.core.truth_(and__3546__auto____183117))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____183117;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____183118 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____183118))
{return or__3548__auto____183118;
} else
{var or__3548__auto____183119 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____183119))
{return or__3548__auto____183119;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____183120 = o;

if(cljs.core.truth_(and__3546__auto____183120))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____183120;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____183121 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____183121))
{return or__3548__auto____183121;
} else
{var or__3548__auto____183122 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____183122))
{return or__3548__auto____183122;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____183123 = o;

if(cljs.core.truth_(and__3546__auto____183123))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____183123;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____183124 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____183124))
{return or__3548__auto____183124;
} else
{var or__3548__auto____183125 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____183125))
{return or__3548__auto____183125;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____183126 = o;

if(cljs.core.truth_(and__3546__auto____183126))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____183126;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____183127 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____183127))
{return or__3548__auto____183127;
} else
{var or__3548__auto____183128 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____183128))
{return or__3548__auto____183128;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____183129 = d;

if(cljs.core.truth_(and__3546__auto____183129))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____183129;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____183130 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____183130))
{return or__3548__auto____183130;
} else
{var or__3548__auto____183131 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____183131))
{return or__3548__auto____183131;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____183132 = this$;

if(cljs.core.truth_(and__3546__auto____183132))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____183132;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____183133 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____183133))
{return or__3548__auto____183133;
} else
{var or__3548__auto____183134 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____183134))
{return or__3548__auto____183134;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____183135 = this$;

if(cljs.core.truth_(and__3546__auto____183135))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____183135;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____183136 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____183136))
{return or__3548__auto____183136;
} else
{var or__3548__auto____183137 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____183137))
{return or__3548__auto____183137;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____183138 = this$;

if(cljs.core.truth_(and__3546__auto____183138))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____183138;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____183139 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____183139))
{return or__3548__auto____183139;
} else
{var or__3548__auto____183140 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____183140))
{return or__3548__auto____183140;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
*/
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
cljs.core.type = (function type(x){
return (x).constructor;
});
Function.prototype.cljs$core$IPrintable$ = true;
Function.prototype.cljs$core$IPrintable$_pr_seq = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__183141 = null;
var G__183141__183142 = (function (o,k){
return null;
});
var G__183141__183143 = (function (o,k,not_found){
return not_found;
});
G__183141 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__183141__183142.call(this,o,k);
case  3 :
return G__183141__183143.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183141;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__183145 = null;
var G__183145__183146 = (function (_,f){
return f.call(null);
});
var G__183145__183147 = (function (_,f,start){
return start;
});
G__183145 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__183145__183146.call(this,_,f);
case  3 :
return G__183145__183147.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183145;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__183149 = null;
var G__183149__183150 = (function (_,n){
return null;
});
var G__183149__183151 = (function (_,n,not_found){
return not_found;
});
G__183149 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__183149__183150.call(this,_,n);
case  3 :
return G__183149__183151.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183149;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__183159 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__183153 = cljs.core._nth.call(null,cicoll,0);
var n__183154 = 1;

while(true){
if(cljs.core.truth_((n__183154 < cljs.core._count.call(null,cicoll))))
{{
var G__183163 = f.call(null,val__183153,cljs.core._nth.call(null,cicoll,n__183154));
var G__183164 = (n__183154 + 1);
val__183153 = G__183163;
n__183154 = G__183164;
continue;
}
} else
{return val__183153;
}
break;
}
}
});
var ci_reduce__183160 = (function (cicoll,f,val){
var val__183155 = val;
var n__183156 = 0;

while(true){
if(cljs.core.truth_((n__183156 < cljs.core._count.call(null,cicoll))))
{{
var G__183165 = f.call(null,val__183155,cljs.core._nth.call(null,cicoll,n__183156));
var G__183166 = (n__183156 + 1);
val__183155 = G__183165;
n__183156 = G__183166;
continue;
}
} else
{return val__183155;
}
break;
}
});
var ci_reduce__183161 = (function (cicoll,f,val,idx){
var val__183157 = val;
var n__183158 = idx;

while(true){
if(cljs.core.truth_((n__183158 < cljs.core._count.call(null,cicoll))))
{{
var G__183167 = f.call(null,val__183157,cljs.core._nth.call(null,cicoll,n__183158));
var G__183168 = (n__183158 + 1);
val__183157 = G__183167;
n__183158 = G__183168;
continue;
}
} else
{return val__183157;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__183159.call(this,cicoll,f);
case  3 :
return ci_reduce__183160.call(this,cicoll,f,val);
case  4 :
return ci_reduce__183161.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__183169 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__183182 = null;
var G__183182__183183 = (function (_,f){
var this__183170 = this;
return cljs.core.ci_reduce.call(null,this__183170.a,f,(this__183170.a[this__183170.i]),(this__183170.i + 1));
});
var G__183182__183184 = (function (_,f,start){
var this__183171 = this;
return cljs.core.ci_reduce.call(null,this__183171.a,f,start,this__183171.i);
});
G__183182 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__183182__183183.call(this,_,f);
case  3 :
return G__183182__183184.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183182;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__183172 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__183173 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__183186 = null;
var G__183186__183187 = (function (coll,n){
var this__183174 = this;
var i__183175 = (n + this__183174.i);

if(cljs.core.truth_((i__183175 < this__183174.a.length)))
{return (this__183174.a[i__183175]);
} else
{return null;
}
});
var G__183186__183188 = (function (coll,n,not_found){
var this__183176 = this;
var i__183177 = (n + this__183176.i);

if(cljs.core.truth_((i__183177 < this__183176.a.length)))
{return (this__183176.a[i__183177]);
} else
{return not_found;
}
});
G__183186 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__183186__183187.call(this,coll,n);
case  3 :
return G__183186__183188.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183186;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__183178 = this;
return (this__183178.a.length - this__183178.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__183179 = this;
return (this__183179.a[this__183179.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__183180 = this;
if(cljs.core.truth_(((this__183180.i + 1) < this__183180.a.length)))
{return (new cljs.core.IndexedSeq(this__183180.a,(this__183180.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__183181 = this;
return this$;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__183190 = null;
var G__183190__183191 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__183190__183192 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__183190 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__183190__183191.call(this,array,f);
case  3 :
return G__183190__183192.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183190;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__183194 = null;
var G__183194__183195 = (function (array,k){
return (array[k]);
});
var G__183194__183196 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__183194 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__183194__183195.call(this,array,k);
case  3 :
return G__183194__183196.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183194;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__183198 = null;
var G__183198__183199 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__183198__183200 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__183198 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__183198__183199.call(this,array,n);
case  3 :
return G__183198__183200.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183198;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____183202 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____183202))
{var s__183203 = temp__3698__auto____183202;

return cljs.core._first.call(null,s__183203);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__183204 = cljs.core.next.call(null,s);
s = G__183204;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__183205 = cljs.core.seq.call(null,x);
var n__183206 = 0;

while(true){
if(cljs.core.truth_(s__183205))
{{
var G__183207 = cljs.core.next.call(null,s__183205);
var G__183208 = (n__183206 + 1);
s__183205 = G__183207;
n__183206 = G__183208;
continue;
}
} else
{return n__183206;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__183209 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__183210 = (function() { 
var G__183212__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__183213 = conj.call(null,coll,x);
var G__183214 = cljs.core.first.call(null,xs);
var G__183215 = cljs.core.next.call(null,xs);
coll = G__183213;
x = G__183214;
xs = G__183215;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__183212 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__183212__delegate.call(this, coll, x, xs);
};
G__183212.cljs$lang$maxFixedArity = 2;
G__183212.cljs$lang$applyTo = (function (arglist__183216){
var coll = cljs.core.first(arglist__183216);
var x = cljs.core.first(cljs.core.next(arglist__183216));
var xs = cljs.core.rest(cljs.core.next(arglist__183216));
return G__183212__delegate.call(this, coll, x, xs);
});
return G__183212;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__183209.call(this,coll,x);
default:
return conj__183210.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__183210.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__183217 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__183218 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__183217.call(this,coll,n);
case  3 :
return nth__183218.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__183220 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__183221 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__183220.call(this,o,k);
case  3 :
return get__183221.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__183224 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__183225 = (function() { 
var G__183227__delegate = function (coll,k,v,kvs){
while(true){
var ret__183223 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__183228 = ret__183223;
var G__183229 = cljs.core.first.call(null,kvs);
var G__183230 = cljs.core.second.call(null,kvs);
var G__183231 = cljs.core.nnext.call(null,kvs);
coll = G__183228;
k = G__183229;
v = G__183230;
kvs = G__183231;
continue;
}
} else
{return ret__183223;
}
break;
}
};
var G__183227 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__183227__delegate.call(this, coll, k, v, kvs);
};
G__183227.cljs$lang$maxFixedArity = 3;
G__183227.cljs$lang$applyTo = (function (arglist__183232){
var coll = cljs.core.first(arglist__183232);
var k = cljs.core.first(cljs.core.next(arglist__183232));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183232)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__183232)));
return G__183227__delegate.call(this, coll, k, v, kvs);
});
return G__183227;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__183224.call(this,coll,k,v);
default:
return assoc__183225.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__183225.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__183234 = (function (coll){
return coll;
});
var dissoc__183235 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__183236 = (function() { 
var G__183238__delegate = function (coll,k,ks){
while(true){
var ret__183233 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__183239 = ret__183233;
var G__183240 = cljs.core.first.call(null,ks);
var G__183241 = cljs.core.next.call(null,ks);
coll = G__183239;
k = G__183240;
ks = G__183241;
continue;
}
} else
{return ret__183233;
}
break;
}
};
var G__183238 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__183238__delegate.call(this, coll, k, ks);
};
G__183238.cljs$lang$maxFixedArity = 2;
G__183238.cljs$lang$applyTo = (function (arglist__183242){
var coll = cljs.core.first(arglist__183242);
var k = cljs.core.first(cljs.core.next(arglist__183242));
var ks = cljs.core.rest(cljs.core.next(arglist__183242));
return G__183238__delegate.call(this, coll, k, ks);
});
return G__183238;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__183234.call(this,coll);
case  2 :
return dissoc__183235.call(this,coll,k);
default:
return dissoc__183236.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__183236.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__445__auto____183243 = o;

if(cljs.core.truth_((function (){var and__3546__auto____183244 = x__445__auto____183243;

if(cljs.core.truth_(and__3546__auto____183244))
{var and__3546__auto____183245 = x__445__auto____183243.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____183245))
{return cljs.core.not.call(null,x__445__auto____183243.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____183245;
}
} else
{return and__3546__auto____183244;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____183243);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__183247 = (function (coll){
return coll;
});
var disj__183248 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__183249 = (function() { 
var G__183251__delegate = function (coll,k,ks){
while(true){
var ret__183246 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__183252 = ret__183246;
var G__183253 = cljs.core.first.call(null,ks);
var G__183254 = cljs.core.next.call(null,ks);
coll = G__183252;
k = G__183253;
ks = G__183254;
continue;
}
} else
{return ret__183246;
}
break;
}
};
var G__183251 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__183251__delegate.call(this, coll, k, ks);
};
G__183251.cljs$lang$maxFixedArity = 2;
G__183251.cljs$lang$applyTo = (function (arglist__183255){
var coll = cljs.core.first(arglist__183255);
var k = cljs.core.first(cljs.core.next(arglist__183255));
var ks = cljs.core.rest(cljs.core.next(arglist__183255));
return G__183251__delegate.call(this, coll, k, ks);
});
return G__183251;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__183247.call(this,coll);
case  2 :
return disj__183248.call(this,coll,k);
default:
return disj__183249.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__183249.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____183256 = x;

if(cljs.core.truth_((function (){var and__3546__auto____183257 = x__445__auto____183256;

if(cljs.core.truth_(and__3546__auto____183257))
{var and__3546__auto____183258 = x__445__auto____183256.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____183258))
{return cljs.core.not.call(null,x__445__auto____183256.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____183258;
}
} else
{return and__3546__auto____183257;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____183256);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____183259 = x;

if(cljs.core.truth_((function (){var and__3546__auto____183260 = x__445__auto____183259;

if(cljs.core.truth_(and__3546__auto____183260))
{var and__3546__auto____183261 = x__445__auto____183259.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____183261))
{return cljs.core.not.call(null,x__445__auto____183259.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____183261;
}
} else
{return and__3546__auto____183260;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____183259);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____183262 = x;

if(cljs.core.truth_((function (){var and__3546__auto____183263 = x__445__auto____183262;

if(cljs.core.truth_(and__3546__auto____183263))
{var and__3546__auto____183264 = x__445__auto____183262.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____183264))
{return cljs.core.not.call(null,x__445__auto____183262.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____183264;
}
} else
{return and__3546__auto____183263;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____183262);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____183265 = x;

if(cljs.core.truth_((function (){var and__3546__auto____183266 = x__445__auto____183265;

if(cljs.core.truth_(and__3546__auto____183266))
{var and__3546__auto____183267 = x__445__auto____183265.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____183267))
{return cljs.core.not.call(null,x__445__auto____183265.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____183267;
}
} else
{return and__3546__auto____183266;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____183265);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____183268 = x;

if(cljs.core.truth_((function (){var and__3546__auto____183269 = x__445__auto____183268;

if(cljs.core.truth_(and__3546__auto____183269))
{var and__3546__auto____183270 = x__445__auto____183268.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____183270))
{return cljs.core.not.call(null,x__445__auto____183268.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____183270;
}
} else
{return and__3546__auto____183269;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____183268);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____183271 = x;

if(cljs.core.truth_((function (){var and__3546__auto____183272 = x__445__auto____183271;

if(cljs.core.truth_(and__3546__auto____183272))
{var and__3546__auto____183273 = x__445__auto____183271.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____183273))
{return cljs.core.not.call(null,x__445__auto____183271.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____183273;
}
} else
{return and__3546__auto____183272;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____183271);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____183274 = x;

if(cljs.core.truth_((function (){var and__3546__auto____183275 = x__445__auto____183274;

if(cljs.core.truth_(and__3546__auto____183275))
{var and__3546__auto____183276 = x__445__auto____183274.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____183276))
{return cljs.core.not.call(null,x__445__auto____183274.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____183276;
}
} else
{return and__3546__auto____183275;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____183274);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__183277 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__183277.push(key);
}));
return keys__183277;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__445__auto____183278 = s;

if(cljs.core.truth_((function (){var and__3546__auto____183279 = x__445__auto____183278;

if(cljs.core.truth_(and__3546__auto____183279))
{var and__3546__auto____183280 = x__445__auto____183278.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____183280))
{return cljs.core.not.call(null,x__445__auto____183278.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____183280;
}
} else
{return and__3546__auto____183279;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____183278);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____183281 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____183281))
{return cljs.core.not.call(null,(function (){var or__3548__auto____183282 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____183282))
{return or__3548__auto____183282;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____183281;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____183283 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____183283))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____183283;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____183284 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____183284))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____183284;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____183285 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____183285))
{return (n == n.toFixed());
} else
{return and__3546__auto____183285;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____183286 = coll;

if(cljs.core.truth_(and__3546__auto____183286))
{var and__3546__auto____183287 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____183287))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____183287;
}
} else
{return and__3546__auto____183286;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___183292 = (function (x){
return true;
});
var distinct_QMARK___183293 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___183294 = (function() { 
var G__183296__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__183288 = cljs.core.set([y,x]);
var xs__183289 = more;

while(true){
var x__183290 = cljs.core.first.call(null,xs__183289);
var etc__183291 = cljs.core.next.call(null,xs__183289);

if(cljs.core.truth_(xs__183289))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__183288,x__183290)))
{return false;
} else
{{
var G__183297 = cljs.core.conj.call(null,s__183288,x__183290);
var G__183298 = etc__183291;
s__183288 = G__183297;
xs__183289 = G__183298;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__183296 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__183296__delegate.call(this, x, y, more);
};
G__183296.cljs$lang$maxFixedArity = 2;
G__183296.cljs$lang$applyTo = (function (arglist__183299){
var x = cljs.core.first(arglist__183299);
var y = cljs.core.first(cljs.core.next(arglist__183299));
var more = cljs.core.rest(cljs.core.next(arglist__183299));
return G__183296__delegate.call(this, x, y, more);
});
return G__183296;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___183292.call(this,x);
case  2 :
return distinct_QMARK___183293.call(this,x,y);
default:
return distinct_QMARK___183294.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___183294.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__183300 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__183300)))
{return r__183300;
} else
{if(cljs.core.truth_(r__183300))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__183302 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__183303 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__183301 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__183301,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__183301);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__183302.call(this,comp);
case  2 :
return sort__183303.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__183305 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__183306 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__183305.call(this,keyfn,comp);
case  3 :
return sort_by__183306.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__183308 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__183309 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__183308.call(this,f,val);
case  3 :
return reduce__183309.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__183315 = (function (f,coll){
var temp__3695__auto____183311 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____183311))
{var s__183312 = temp__3695__auto____183311;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__183312),cljs.core.next.call(null,s__183312));
} else
{return f.call(null);
}
});
var seq_reduce__183316 = (function (f,val,coll){
var val__183313 = val;
var coll__183314 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__183314))
{{
var G__183318 = f.call(null,val__183313,cljs.core.first.call(null,coll__183314));
var G__183319 = cljs.core.next.call(null,coll__183314);
val__183313 = G__183318;
coll__183314 = G__183319;
continue;
}
} else
{return val__183313;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__183315.call(this,f,val);
case  3 :
return seq_reduce__183316.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__183320 = null;
var G__183320__183321 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__183320__183322 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__183320 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__183320__183321.call(this,coll,f);
case  3 :
return G__183320__183322.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183320;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___183324 = (function (){
return 0;
});
var _PLUS___183325 = (function (x){
return x;
});
var _PLUS___183326 = (function (x,y){
return (x + y);
});
var _PLUS___183327 = (function() { 
var G__183329__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__183329 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__183329__delegate.call(this, x, y, more);
};
G__183329.cljs$lang$maxFixedArity = 2;
G__183329.cljs$lang$applyTo = (function (arglist__183330){
var x = cljs.core.first(arglist__183330);
var y = cljs.core.first(cljs.core.next(arglist__183330));
var more = cljs.core.rest(cljs.core.next(arglist__183330));
return G__183329__delegate.call(this, x, y, more);
});
return G__183329;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___183324.call(this);
case  1 :
return _PLUS___183325.call(this,x);
case  2 :
return _PLUS___183326.call(this,x,y);
default:
return _PLUS___183327.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___183327.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___183331 = (function (x){
return (- x);
});
var ___183332 = (function (x,y){
return (x - y);
});
var ___183333 = (function() { 
var G__183335__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__183335 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__183335__delegate.call(this, x, y, more);
};
G__183335.cljs$lang$maxFixedArity = 2;
G__183335.cljs$lang$applyTo = (function (arglist__183336){
var x = cljs.core.first(arglist__183336);
var y = cljs.core.first(cljs.core.next(arglist__183336));
var more = cljs.core.rest(cljs.core.next(arglist__183336));
return G__183335__delegate.call(this, x, y, more);
});
return G__183335;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___183331.call(this,x);
case  2 :
return ___183332.call(this,x,y);
default:
return ___183333.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___183333.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___183337 = (function (){
return 1;
});
var _STAR___183338 = (function (x){
return x;
});
var _STAR___183339 = (function (x,y){
return (x * y);
});
var _STAR___183340 = (function() { 
var G__183342__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__183342 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__183342__delegate.call(this, x, y, more);
};
G__183342.cljs$lang$maxFixedArity = 2;
G__183342.cljs$lang$applyTo = (function (arglist__183343){
var x = cljs.core.first(arglist__183343);
var y = cljs.core.first(cljs.core.next(arglist__183343));
var more = cljs.core.rest(cljs.core.next(arglist__183343));
return G__183342__delegate.call(this, x, y, more);
});
return G__183342;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___183337.call(this);
case  1 :
return _STAR___183338.call(this,x);
case  2 :
return _STAR___183339.call(this,x,y);
default:
return _STAR___183340.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___183340.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___183344 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___183345 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___183346 = (function() { 
var G__183348__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__183348 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__183348__delegate.call(this, x, y, more);
};
G__183348.cljs$lang$maxFixedArity = 2;
G__183348.cljs$lang$applyTo = (function (arglist__183349){
var x = cljs.core.first(arglist__183349);
var y = cljs.core.first(cljs.core.next(arglist__183349));
var more = cljs.core.rest(cljs.core.next(arglist__183349));
return G__183348__delegate.call(this, x, y, more);
});
return G__183348;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___183344.call(this,x);
case  2 :
return _SLASH___183345.call(this,x,y);
default:
return _SLASH___183346.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___183346.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___183350 = (function (x){
return true;
});
var _LT___183351 = (function (x,y){
return (x < y);
});
var _LT___183352 = (function() { 
var G__183354__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__183355 = y;
var G__183356 = cljs.core.first.call(null,more);
var G__183357 = cljs.core.next.call(null,more);
x = G__183355;
y = G__183356;
more = G__183357;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__183354 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__183354__delegate.call(this, x, y, more);
};
G__183354.cljs$lang$maxFixedArity = 2;
G__183354.cljs$lang$applyTo = (function (arglist__183358){
var x = cljs.core.first(arglist__183358);
var y = cljs.core.first(cljs.core.next(arglist__183358));
var more = cljs.core.rest(cljs.core.next(arglist__183358));
return G__183354__delegate.call(this, x, y, more);
});
return G__183354;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___183350.call(this,x);
case  2 :
return _LT___183351.call(this,x,y);
default:
return _LT___183352.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___183352.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___183359 = (function (x){
return true;
});
var _LT__EQ___183360 = (function (x,y){
return (x <= y);
});
var _LT__EQ___183361 = (function() { 
var G__183363__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__183364 = y;
var G__183365 = cljs.core.first.call(null,more);
var G__183366 = cljs.core.next.call(null,more);
x = G__183364;
y = G__183365;
more = G__183366;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__183363 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__183363__delegate.call(this, x, y, more);
};
G__183363.cljs$lang$maxFixedArity = 2;
G__183363.cljs$lang$applyTo = (function (arglist__183367){
var x = cljs.core.first(arglist__183367);
var y = cljs.core.first(cljs.core.next(arglist__183367));
var more = cljs.core.rest(cljs.core.next(arglist__183367));
return G__183363__delegate.call(this, x, y, more);
});
return G__183363;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___183359.call(this,x);
case  2 :
return _LT__EQ___183360.call(this,x,y);
default:
return _LT__EQ___183361.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___183361.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___183368 = (function (x){
return true;
});
var _GT___183369 = (function (x,y){
return (x > y);
});
var _GT___183370 = (function() { 
var G__183372__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__183373 = y;
var G__183374 = cljs.core.first.call(null,more);
var G__183375 = cljs.core.next.call(null,more);
x = G__183373;
y = G__183374;
more = G__183375;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__183372 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__183372__delegate.call(this, x, y, more);
};
G__183372.cljs$lang$maxFixedArity = 2;
G__183372.cljs$lang$applyTo = (function (arglist__183376){
var x = cljs.core.first(arglist__183376);
var y = cljs.core.first(cljs.core.next(arglist__183376));
var more = cljs.core.rest(cljs.core.next(arglist__183376));
return G__183372__delegate.call(this, x, y, more);
});
return G__183372;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___183368.call(this,x);
case  2 :
return _GT___183369.call(this,x,y);
default:
return _GT___183370.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___183370.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___183377 = (function (x){
return true;
});
var _GT__EQ___183378 = (function (x,y){
return (x >= y);
});
var _GT__EQ___183379 = (function() { 
var G__183381__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__183382 = y;
var G__183383 = cljs.core.first.call(null,more);
var G__183384 = cljs.core.next.call(null,more);
x = G__183382;
y = G__183383;
more = G__183384;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__183381 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__183381__delegate.call(this, x, y, more);
};
G__183381.cljs$lang$maxFixedArity = 2;
G__183381.cljs$lang$applyTo = (function (arglist__183385){
var x = cljs.core.first(arglist__183385);
var y = cljs.core.first(cljs.core.next(arglist__183385));
var more = cljs.core.rest(cljs.core.next(arglist__183385));
return G__183381__delegate.call(this, x, y, more);
});
return G__183381;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___183377.call(this,x);
case  2 :
return _GT__EQ___183378.call(this,x,y);
default:
return _GT__EQ___183379.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___183379.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__183386 = (function (x){
return x;
});
var max__183387 = (function (x,y){
return ((x > y) ? x : y);
});
var max__183388 = (function() { 
var G__183390__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__183390 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__183390__delegate.call(this, x, y, more);
};
G__183390.cljs$lang$maxFixedArity = 2;
G__183390.cljs$lang$applyTo = (function (arglist__183391){
var x = cljs.core.first(arglist__183391);
var y = cljs.core.first(cljs.core.next(arglist__183391));
var more = cljs.core.rest(cljs.core.next(arglist__183391));
return G__183390__delegate.call(this, x, y, more);
});
return G__183390;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__183386.call(this,x);
case  2 :
return max__183387.call(this,x,y);
default:
return max__183388.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__183388.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__183392 = (function (x){
return x;
});
var min__183393 = (function (x,y){
return ((x < y) ? x : y);
});
var min__183394 = (function() { 
var G__183396__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__183396 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__183396__delegate.call(this, x, y, more);
};
G__183396.cljs$lang$maxFixedArity = 2;
G__183396.cljs$lang$applyTo = (function (arglist__183397){
var x = cljs.core.first(arglist__183397);
var y = cljs.core.first(cljs.core.next(arglist__183397));
var more = cljs.core.rest(cljs.core.next(arglist__183397));
return G__183396__delegate.call(this, x, y, more);
});
return G__183396;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__183392.call(this,x);
case  2 :
return min__183393.call(this,x,y);
default:
return min__183394.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__183394.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__183398 = (n % d);

return cljs.core.fix.call(null,((n - rem__183398) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__183399 = cljs.core.quot.call(null,n,d);

return (n - (d * q__183399));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__183400 = (function (){
return Math.random.call(null);
});
var rand__183401 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__183400.call(this);
case  1 :
return rand__183401.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___183403 = (function (x){
return true;
});
var _EQ__EQ___183404 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___183405 = (function() { 
var G__183407__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__183408 = y;
var G__183409 = cljs.core.first.call(null,more);
var G__183410 = cljs.core.next.call(null,more);
x = G__183408;
y = G__183409;
more = G__183410;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__183407 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__183407__delegate.call(this, x, y, more);
};
G__183407.cljs$lang$maxFixedArity = 2;
G__183407.cljs$lang$applyTo = (function (arglist__183411){
var x = cljs.core.first(arglist__183411);
var y = cljs.core.first(cljs.core.next(arglist__183411));
var more = cljs.core.rest(cljs.core.next(arglist__183411));
return G__183407__delegate.call(this, x, y, more);
});
return G__183407;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___183403.call(this,x);
case  2 :
return _EQ__EQ___183404.call(this,x,y);
default:
return _EQ__EQ___183405.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___183405.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__183412 = n;
var xs__183413 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____183414 = xs__183413;

if(cljs.core.truth_(and__3546__auto____183414))
{return (n__183412 > 0);
} else
{return and__3546__auto____183414;
}
})()))
{{
var G__183415 = (n__183412 - 1);
var G__183416 = cljs.core.next.call(null,xs__183413);
n__183412 = G__183415;
xs__183413 = G__183416;
continue;
}
} else
{return xs__183413;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__183421 = null;
var G__183421__183422 = (function (coll,n){
var temp__3695__auto____183417 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____183417))
{var xs__183418 = temp__3695__auto____183417;

return cljs.core.first.call(null,xs__183418);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__183421__183423 = (function (coll,n,not_found){
var temp__3695__auto____183419 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____183419))
{var xs__183420 = temp__3695__auto____183419;

return cljs.core.first.call(null,xs__183420);
} else
{return not_found;
}
});
G__183421 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__183421__183422.call(this,coll,n);
case  3 :
return G__183421__183423.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183421;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___183425 = (function (){
return "";
});
var str_STAR___183426 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___183427 = (function() { 
var G__183429__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__183430 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__183431 = cljs.core.next.call(null,more);
sb = G__183430;
more = G__183431;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__183429 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__183429__delegate.call(this, x, ys);
};
G__183429.cljs$lang$maxFixedArity = 1;
G__183429.cljs$lang$applyTo = (function (arglist__183432){
var x = cljs.core.first(arglist__183432);
var ys = cljs.core.rest(arglist__183432);
return G__183429__delegate.call(this, x, ys);
});
return G__183429;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___183425.call(this);
case  1 :
return str_STAR___183426.call(this,x);
default:
return str_STAR___183427.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___183427.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__183433 = (function (){
return "";
});
var str__183434 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__183435 = (function() { 
var G__183437__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__183437 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__183437__delegate.call(this, x, ys);
};
G__183437.cljs$lang$maxFixedArity = 1;
G__183437.cljs$lang$applyTo = (function (arglist__183438){
var x = cljs.core.first(arglist__183438);
var ys = cljs.core.rest(arglist__183438);
return G__183437__delegate.call(this, x, ys);
});
return G__183437;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__183433.call(this);
case  1 :
return str__183434.call(this,x);
default:
return str__183435.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__183435.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__183439 = (function (s,start){
return s.substring(start);
});
var subs__183440 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__183439.call(this,s,start);
case  3 :
return subs__183440.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__183442 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"﷑","'",name);
});
var symbol__183443 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__183442.call(this,ns);
case  2 :
return symbol__183443.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__183445 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str_STAR_.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__183446 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__183445.call(this,ns);
case  2 :
return keyword__183446.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__183448 = cljs.core.seq.call(null,x);
var ys__183449 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__183448)))
{return cljs.core.nil_QMARK_.call(null,ys__183449);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__183449)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__183448),cljs.core.first.call(null,ys__183449))))
{{
var G__183450 = cljs.core.next.call(null,xs__183448);
var G__183451 = cljs.core.next.call(null,ys__183449);
xs__183448 = G__183450;
ys__183449 = G__183451;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__183452_SHARP_,p2__183453_SHARP_){
return cljs.core.hash_combine.call(null,p1__183452_SHARP_,cljs.core.hash.call(null,p2__183453_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__183454__183455 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__183454__183455))
{var G__183457__183459 = cljs.core.first.call(null,G__183454__183455);
var vec__183458__183460 = G__183457__183459;
var key_name__183461 = cljs.core.nth.call(null,vec__183458__183460,0,null);
var f__183462 = cljs.core.nth.call(null,vec__183458__183460,1,null);
var G__183454__183463 = G__183454__183455;

var G__183457__183464 = G__183457__183459;
var G__183454__183465 = G__183454__183463;

while(true){
var vec__183466__183467 = G__183457__183464;
var key_name__183468 = cljs.core.nth.call(null,vec__183466__183467,0,null);
var f__183469 = cljs.core.nth.call(null,vec__183466__183467,1,null);
var G__183454__183470 = G__183454__183465;

var str_name__183471 = cljs.core.name.call(null,key_name__183468);

obj[str_name__183471] = f__183469;
var temp__3698__auto____183472 = cljs.core.next.call(null,G__183454__183470);

if(cljs.core.truth_(temp__3698__auto____183472))
{var G__183454__183473 = temp__3698__auto____183472;

{
var G__183474 = cljs.core.first.call(null,G__183454__183473);
var G__183475 = G__183454__183473;
G__183457__183464 = G__183474;
G__183454__183465 = G__183475;
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
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__183476 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__183477 = this;
return (new cljs.core.List(this__183477.meta,o,coll,(this__183477.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__183478 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__183479 = this;
return this__183479.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__183480 = this;
return this__183480.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__183481 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__183482 = this;
return this__183482.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__183483 = this;
return this__183483.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__183484 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__183485 = this;
return (new cljs.core.List(meta,this__183485.first,this__183485.rest,this__183485.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__183486 = this;
return this__183486.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__183487 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__183488 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__183489 = this;
return (new cljs.core.List(this__183489.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__183490 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__183491 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__183492 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__183493 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__183494 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__183495 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__183496 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__183497 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__183498 = this;
return this__183498.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__183499 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__183500){
var items = cljs.core.seq( arglist__183500 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__183501 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__183502 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__183503 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__183504 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__183504.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__183505 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__183506 = this;
return this__183506.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__183507 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__183507.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__183507.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__183508 = this;
return this__183508.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__183509 = this;
return (new cljs.core.Cons(meta,this__183509.first,this__183509.rest));
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__183510 = null;
var G__183510__183511 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__183510__183512 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__183510 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__183510__183511.call(this,string,f);
case  3 :
return G__183510__183512.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183510;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__183514 = null;
var G__183514__183515 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__183514__183516 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__183514 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__183514__183515.call(this,string,k);
case  3 :
return G__183514__183516.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183514;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__183518 = null;
var G__183518__183519 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__183518__183520 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__183518 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__183518__183519.call(this,string,n);
case  3 :
return G__183518__183520.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183518;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__183522 = null;
var G__183522__183523 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__183522__183524 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__183522 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__183522__183523.call(this,this$,coll);
case  3 :
return G__183522__183524.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183522;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__183526 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__183526;
} else
{lazy_seq.x = x__183526.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__183527 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__183528 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__183529 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__183530 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__183530.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__183531 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__183532 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__183533 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__183534 = this;
return this__183534.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__183535 = this;
return (new cljs.core.LazySeq(meta,this__183535.realized,this__183535.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__183536 = cljs.core.array.call(null);

var s__183537 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__183537)))
{ary__183536.push(cljs.core.first.call(null,s__183537));
{
var G__183538 = cljs.core.next.call(null,s__183537);
s__183537 = G__183538;
continue;
}
} else
{return ary__183536;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__183539 = s;
var i__183540 = n;
var sum__183541 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____183542 = (i__183540 > 0);

if(cljs.core.truth_(and__3546__auto____183542))
{return cljs.core.seq.call(null,s__183539);
} else
{return and__3546__auto____183542;
}
})()))
{{
var G__183543 = cljs.core.next.call(null,s__183539);
var G__183544 = (i__183540 - 1);
var G__183545 = (sum__183541 + 1);
s__183539 = G__183543;
i__183540 = G__183544;
sum__183541 = G__183545;
continue;
}
} else
{return sum__183541;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__183549 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__183550 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__183551 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__183546 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__183546))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__183546),concat.call(null,cljs.core.rest.call(null,s__183546),y));
} else
{return y;
}
})));
});
var concat__183552 = (function() { 
var G__183554__delegate = function (x,y,zs){
var cat__183548 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__183547 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__183547))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__183547),cat.call(null,cljs.core.rest.call(null,xys__183547),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__183548.call(null,concat.call(null,x,y),zs);
};
var G__183554 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__183554__delegate.call(this, x, y, zs);
};
G__183554.cljs$lang$maxFixedArity = 2;
G__183554.cljs$lang$applyTo = (function (arglist__183555){
var x = cljs.core.first(arglist__183555);
var y = cljs.core.first(cljs.core.next(arglist__183555));
var zs = cljs.core.rest(cljs.core.next(arglist__183555));
return G__183554__delegate.call(this, x, y, zs);
});
return G__183554;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__183549.call(this);
case  1 :
return concat__183550.call(this,x);
case  2 :
return concat__183551.call(this,x,y);
default:
return concat__183552.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__183552.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___183556 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___183557 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___183558 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___183559 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___183560 = (function() { 
var G__183562__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__183562 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__183562__delegate.call(this, a, b, c, d, more);
};
G__183562.cljs$lang$maxFixedArity = 4;
G__183562.cljs$lang$applyTo = (function (arglist__183563){
var a = cljs.core.first(arglist__183563);
var b = cljs.core.first(cljs.core.next(arglist__183563));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183563)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__183563))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__183563))));
return G__183562__delegate.call(this, a, b, c, d, more);
});
return G__183562;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___183556.call(this,a);
case  2 :
return list_STAR___183557.call(this,a,b);
case  3 :
return list_STAR___183558.call(this,a,b,c);
case  4 :
return list_STAR___183559.call(this,a,b,c,d);
default:
return list_STAR___183560.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___183560.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__183573 = (function (f,args){
var fixed_arity__183564 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__183564 + 1)) <= fixed_arity__183564)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__183574 = (function (f,x,args){
var arglist__183565 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__183566 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__183565,fixed_arity__183566) <= fixed_arity__183566)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__183565));
} else
{return f.cljs$lang$applyTo(arglist__183565);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__183565));
}
});
var apply__183575 = (function (f,x,y,args){
var arglist__183567 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__183568 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__183567,fixed_arity__183568) <= fixed_arity__183568)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__183567));
} else
{return f.cljs$lang$applyTo(arglist__183567);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__183567));
}
});
var apply__183576 = (function (f,x,y,z,args){
var arglist__183569 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__183570 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__183569,fixed_arity__183570) <= fixed_arity__183570)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__183569));
} else
{return f.cljs$lang$applyTo(arglist__183569);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__183569));
}
});
var apply__183577 = (function() { 
var G__183579__delegate = function (f,a,b,c,d,args){
var arglist__183571 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__183572 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__183571,fixed_arity__183572) <= fixed_arity__183572)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__183571));
} else
{return f.cljs$lang$applyTo(arglist__183571);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__183571));
}
};
var G__183579 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__183579__delegate.call(this, f, a, b, c, d, args);
};
G__183579.cljs$lang$maxFixedArity = 5;
G__183579.cljs$lang$applyTo = (function (arglist__183580){
var f = cljs.core.first(arglist__183580);
var a = cljs.core.first(cljs.core.next(arglist__183580));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183580)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__183580))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__183580)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__183580)))));
return G__183579__delegate.call(this, f, a, b, c, d, args);
});
return G__183579;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__183573.call(this,f,a);
case  3 :
return apply__183574.call(this,f,a,b);
case  4 :
return apply__183575.call(this,f,a,b,c);
case  5 :
return apply__183576.call(this,f,a,b,c,d);
default:
return apply__183577.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__183577.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__183581){
var obj = cljs.core.first(arglist__183581);
var f = cljs.core.first(cljs.core.next(arglist__183581));
var args = cljs.core.rest(cljs.core.next(arglist__183581));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___183582 = (function (x){
return false;
});
var not_EQ___183583 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___183584 = (function() { 
var G__183586__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__183586 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__183586__delegate.call(this, x, y, more);
};
G__183586.cljs$lang$maxFixedArity = 2;
G__183586.cljs$lang$applyTo = (function (arglist__183587){
var x = cljs.core.first(arglist__183587);
var y = cljs.core.first(cljs.core.next(arglist__183587));
var more = cljs.core.rest(cljs.core.next(arglist__183587));
return G__183586__delegate.call(this, x, y, more);
});
return G__183586;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___183582.call(this,x);
case  2 :
return not_EQ___183583.call(this,x,y);
default:
return not_EQ___183584.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___183584.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__183588 = pred;
var G__183589 = cljs.core.next.call(null,coll);
pred = G__183588;
coll = G__183589;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____183590 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____183590))
{return or__3548__auto____183590;
} else
{{
var G__183591 = pred;
var G__183592 = cljs.core.next.call(null,coll);
pred = G__183591;
coll = G__183592;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__183593 = null;
var G__183593__183594 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__183593__183595 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__183593__183596 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__183593__183597 = (function() { 
var G__183599__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__183599 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__183599__delegate.call(this, x, y, zs);
};
G__183599.cljs$lang$maxFixedArity = 2;
G__183599.cljs$lang$applyTo = (function (arglist__183600){
var x = cljs.core.first(arglist__183600);
var y = cljs.core.first(cljs.core.next(arglist__183600));
var zs = cljs.core.rest(cljs.core.next(arglist__183600));
return G__183599__delegate.call(this, x, y, zs);
});
return G__183599;
})()
;
G__183593 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__183593__183594.call(this);
case  1 :
return G__183593__183595.call(this,x);
case  2 :
return G__183593__183596.call(this,x,y);
default:
return G__183593__183597.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__183593.cljs$lang$maxFixedArity = 2;
G__183593.cljs$lang$applyTo = G__183593__183597.cljs$lang$applyTo;
return G__183593;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__183601__delegate = function (args){
return x;
};
var G__183601 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__183601__delegate.call(this, args);
};
G__183601.cljs$lang$maxFixedArity = 0;
G__183601.cljs$lang$applyTo = (function (arglist__183602){
var args = cljs.core.seq( arglist__183602 );;
return G__183601__delegate.call(this, args);
});
return G__183601;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__183606 = (function (){
return cljs.core.identity;
});
var comp__183607 = (function (f){
return f;
});
var comp__183608 = (function (f,g){
return (function() {
var G__183612 = null;
var G__183612__183613 = (function (){
return f.call(null,g.call(null));
});
var G__183612__183614 = (function (x){
return f.call(null,g.call(null,x));
});
var G__183612__183615 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__183612__183616 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__183612__183617 = (function() { 
var G__183619__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__183619 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__183619__delegate.call(this, x, y, z, args);
};
G__183619.cljs$lang$maxFixedArity = 3;
G__183619.cljs$lang$applyTo = (function (arglist__183620){
var x = cljs.core.first(arglist__183620);
var y = cljs.core.first(cljs.core.next(arglist__183620));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183620)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__183620)));
return G__183619__delegate.call(this, x, y, z, args);
});
return G__183619;
})()
;
G__183612 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__183612__183613.call(this);
case  1 :
return G__183612__183614.call(this,x);
case  2 :
return G__183612__183615.call(this,x,y);
case  3 :
return G__183612__183616.call(this,x,y,z);
default:
return G__183612__183617.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__183612.cljs$lang$maxFixedArity = 3;
G__183612.cljs$lang$applyTo = G__183612__183617.cljs$lang$applyTo;
return G__183612;
})()
});
var comp__183609 = (function (f,g,h){
return (function() {
var G__183621 = null;
var G__183621__183622 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__183621__183623 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__183621__183624 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__183621__183625 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__183621__183626 = (function() { 
var G__183628__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__183628 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__183628__delegate.call(this, x, y, z, args);
};
G__183628.cljs$lang$maxFixedArity = 3;
G__183628.cljs$lang$applyTo = (function (arglist__183629){
var x = cljs.core.first(arglist__183629);
var y = cljs.core.first(cljs.core.next(arglist__183629));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183629)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__183629)));
return G__183628__delegate.call(this, x, y, z, args);
});
return G__183628;
})()
;
G__183621 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__183621__183622.call(this);
case  1 :
return G__183621__183623.call(this,x);
case  2 :
return G__183621__183624.call(this,x,y);
case  3 :
return G__183621__183625.call(this,x,y,z);
default:
return G__183621__183626.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__183621.cljs$lang$maxFixedArity = 3;
G__183621.cljs$lang$applyTo = G__183621__183626.cljs$lang$applyTo;
return G__183621;
})()
});
var comp__183610 = (function() { 
var G__183630__delegate = function (f1,f2,f3,fs){
var fs__183603 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__183631__delegate = function (args){
var ret__183604 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__183603),args);
var fs__183605 = cljs.core.next.call(null,fs__183603);

while(true){
if(cljs.core.truth_(fs__183605))
{{
var G__183632 = cljs.core.first.call(null,fs__183605).call(null,ret__183604);
var G__183633 = cljs.core.next.call(null,fs__183605);
ret__183604 = G__183632;
fs__183605 = G__183633;
continue;
}
} else
{return ret__183604;
}
break;
}
};
var G__183631 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__183631__delegate.call(this, args);
};
G__183631.cljs$lang$maxFixedArity = 0;
G__183631.cljs$lang$applyTo = (function (arglist__183634){
var args = cljs.core.seq( arglist__183634 );;
return G__183631__delegate.call(this, args);
});
return G__183631;
})()
;
};
var G__183630 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__183630__delegate.call(this, f1, f2, f3, fs);
};
G__183630.cljs$lang$maxFixedArity = 3;
G__183630.cljs$lang$applyTo = (function (arglist__183635){
var f1 = cljs.core.first(arglist__183635);
var f2 = cljs.core.first(cljs.core.next(arglist__183635));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183635)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__183635)));
return G__183630__delegate.call(this, f1, f2, f3, fs);
});
return G__183630;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__183606.call(this);
case  1 :
return comp__183607.call(this,f1);
case  2 :
return comp__183608.call(this,f1,f2);
case  3 :
return comp__183609.call(this,f1,f2,f3);
default:
return comp__183610.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__183610.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__183636 = (function (f,arg1){
return (function() { 
var G__183641__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__183641 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__183641__delegate.call(this, args);
};
G__183641.cljs$lang$maxFixedArity = 0;
G__183641.cljs$lang$applyTo = (function (arglist__183642){
var args = cljs.core.seq( arglist__183642 );;
return G__183641__delegate.call(this, args);
});
return G__183641;
})()
;
});
var partial__183637 = (function (f,arg1,arg2){
return (function() { 
var G__183643__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__183643 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__183643__delegate.call(this, args);
};
G__183643.cljs$lang$maxFixedArity = 0;
G__183643.cljs$lang$applyTo = (function (arglist__183644){
var args = cljs.core.seq( arglist__183644 );;
return G__183643__delegate.call(this, args);
});
return G__183643;
})()
;
});
var partial__183638 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__183645__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__183645 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__183645__delegate.call(this, args);
};
G__183645.cljs$lang$maxFixedArity = 0;
G__183645.cljs$lang$applyTo = (function (arglist__183646){
var args = cljs.core.seq( arglist__183646 );;
return G__183645__delegate.call(this, args);
});
return G__183645;
})()
;
});
var partial__183639 = (function() { 
var G__183647__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__183648__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__183648 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__183648__delegate.call(this, args);
};
G__183648.cljs$lang$maxFixedArity = 0;
G__183648.cljs$lang$applyTo = (function (arglist__183649){
var args = cljs.core.seq( arglist__183649 );;
return G__183648__delegate.call(this, args);
});
return G__183648;
})()
;
};
var G__183647 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__183647__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__183647.cljs$lang$maxFixedArity = 4;
G__183647.cljs$lang$applyTo = (function (arglist__183650){
var f = cljs.core.first(arglist__183650);
var arg1 = cljs.core.first(cljs.core.next(arglist__183650));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183650)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__183650))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__183650))));
return G__183647__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__183647;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__183636.call(this,f,arg1);
case  3 :
return partial__183637.call(this,f,arg1,arg2);
case  4 :
return partial__183638.call(this,f,arg1,arg2,arg3);
default:
return partial__183639.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__183639.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__183651 = (function (f,x){
return (function() {
var G__183655 = null;
var G__183655__183656 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__183655__183657 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__183655__183658 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__183655__183659 = (function() { 
var G__183661__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__183661 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__183661__delegate.call(this, a, b, c, ds);
};
G__183661.cljs$lang$maxFixedArity = 3;
G__183661.cljs$lang$applyTo = (function (arglist__183662){
var a = cljs.core.first(arglist__183662);
var b = cljs.core.first(cljs.core.next(arglist__183662));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183662)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__183662)));
return G__183661__delegate.call(this, a, b, c, ds);
});
return G__183661;
})()
;
G__183655 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__183655__183656.call(this,a);
case  2 :
return G__183655__183657.call(this,a,b);
case  3 :
return G__183655__183658.call(this,a,b,c);
default:
return G__183655__183659.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__183655.cljs$lang$maxFixedArity = 3;
G__183655.cljs$lang$applyTo = G__183655__183659.cljs$lang$applyTo;
return G__183655;
})()
});
var fnil__183652 = (function (f,x,y){
return (function() {
var G__183663 = null;
var G__183663__183664 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__183663__183665 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__183663__183666 = (function() { 
var G__183668__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__183668 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__183668__delegate.call(this, a, b, c, ds);
};
G__183668.cljs$lang$maxFixedArity = 3;
G__183668.cljs$lang$applyTo = (function (arglist__183669){
var a = cljs.core.first(arglist__183669);
var b = cljs.core.first(cljs.core.next(arglist__183669));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183669)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__183669)));
return G__183668__delegate.call(this, a, b, c, ds);
});
return G__183668;
})()
;
G__183663 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__183663__183664.call(this,a,b);
case  3 :
return G__183663__183665.call(this,a,b,c);
default:
return G__183663__183666.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__183663.cljs$lang$maxFixedArity = 3;
G__183663.cljs$lang$applyTo = G__183663__183666.cljs$lang$applyTo;
return G__183663;
})()
});
var fnil__183653 = (function (f,x,y,z){
return (function() {
var G__183670 = null;
var G__183670__183671 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__183670__183672 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__183670__183673 = (function() { 
var G__183675__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__183675 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__183675__delegate.call(this, a, b, c, ds);
};
G__183675.cljs$lang$maxFixedArity = 3;
G__183675.cljs$lang$applyTo = (function (arglist__183676){
var a = cljs.core.first(arglist__183676);
var b = cljs.core.first(cljs.core.next(arglist__183676));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183676)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__183676)));
return G__183675__delegate.call(this, a, b, c, ds);
});
return G__183675;
})()
;
G__183670 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__183670__183671.call(this,a,b);
case  3 :
return G__183670__183672.call(this,a,b,c);
default:
return G__183670__183673.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__183670.cljs$lang$maxFixedArity = 3;
G__183670.cljs$lang$applyTo = G__183670__183673.cljs$lang$applyTo;
return G__183670;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__183651.call(this,f,x);
case  3 :
return fnil__183652.call(this,f,x,y);
case  4 :
return fnil__183653.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__183679 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____183677 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____183677))
{var s__183678 = temp__3698__auto____183677;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__183678)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__183678)));
} else
{return null;
}
})));
});

return mapi__183679.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____183680 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____183680))
{var s__183681 = temp__3698__auto____183680;

var x__183682 = f.call(null,cljs.core.first.call(null,s__183681));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__183682)))
{return keep.call(null,f,cljs.core.rest.call(null,s__183681));
} else
{return cljs.core.cons.call(null,x__183682,keep.call(null,f,cljs.core.rest.call(null,s__183681)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__183692 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____183689 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____183689))
{var s__183690 = temp__3698__auto____183689;

var x__183691 = f.call(null,idx,cljs.core.first.call(null,s__183690));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__183691)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__183690));
} else
{return cljs.core.cons.call(null,x__183691,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__183690)));
}
} else
{return null;
}
})));
});

return keepi__183692.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__183737 = (function (p){
return (function() {
var ep1 = null;
var ep1__183742 = (function (){
return true;
});
var ep1__183743 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__183744 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____183699 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____183699))
{return p.call(null,y);
} else
{return and__3546__auto____183699;
}
})());
});
var ep1__183745 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____183700 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____183700))
{var and__3546__auto____183701 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____183701))
{return p.call(null,z);
} else
{return and__3546__auto____183701;
}
} else
{return and__3546__auto____183700;
}
})());
});
var ep1__183746 = (function() { 
var G__183748__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____183702 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____183702))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____183702;
}
})());
};
var G__183748 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__183748__delegate.call(this, x, y, z, args);
};
G__183748.cljs$lang$maxFixedArity = 3;
G__183748.cljs$lang$applyTo = (function (arglist__183749){
var x = cljs.core.first(arglist__183749);
var y = cljs.core.first(cljs.core.next(arglist__183749));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183749)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__183749)));
return G__183748__delegate.call(this, x, y, z, args);
});
return G__183748;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__183742.call(this);
case  1 :
return ep1__183743.call(this,x);
case  2 :
return ep1__183744.call(this,x,y);
case  3 :
return ep1__183745.call(this,x,y,z);
default:
return ep1__183746.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__183746.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__183738 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__183750 = (function (){
return true;
});
var ep2__183751 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____183703 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____183703))
{return p2.call(null,x);
} else
{return and__3546__auto____183703;
}
})());
});
var ep2__183752 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____183704 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____183704))
{var and__3546__auto____183705 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____183705))
{var and__3546__auto____183706 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____183706))
{return p2.call(null,y);
} else
{return and__3546__auto____183706;
}
} else
{return and__3546__auto____183705;
}
} else
{return and__3546__auto____183704;
}
})());
});
var ep2__183753 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____183707 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____183707))
{var and__3546__auto____183708 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____183708))
{var and__3546__auto____183709 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____183709))
{var and__3546__auto____183710 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____183710))
{var and__3546__auto____183711 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____183711))
{return p2.call(null,z);
} else
{return and__3546__auto____183711;
}
} else
{return and__3546__auto____183710;
}
} else
{return and__3546__auto____183709;
}
} else
{return and__3546__auto____183708;
}
} else
{return and__3546__auto____183707;
}
})());
});
var ep2__183754 = (function() { 
var G__183756__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____183712 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____183712))
{return cljs.core.every_QMARK_.call(null,(function (p1__183683_SHARP_){
var and__3546__auto____183713 = p1.call(null,p1__183683_SHARP_);

if(cljs.core.truth_(and__3546__auto____183713))
{return p2.call(null,p1__183683_SHARP_);
} else
{return and__3546__auto____183713;
}
}),args);
} else
{return and__3546__auto____183712;
}
})());
};
var G__183756 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__183756__delegate.call(this, x, y, z, args);
};
G__183756.cljs$lang$maxFixedArity = 3;
G__183756.cljs$lang$applyTo = (function (arglist__183757){
var x = cljs.core.first(arglist__183757);
var y = cljs.core.first(cljs.core.next(arglist__183757));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183757)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__183757)));
return G__183756__delegate.call(this, x, y, z, args);
});
return G__183756;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__183750.call(this);
case  1 :
return ep2__183751.call(this,x);
case  2 :
return ep2__183752.call(this,x,y);
case  3 :
return ep2__183753.call(this,x,y,z);
default:
return ep2__183754.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__183754.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__183739 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__183758 = (function (){
return true;
});
var ep3__183759 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____183714 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____183714))
{var and__3546__auto____183715 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____183715))
{return p3.call(null,x);
} else
{return and__3546__auto____183715;
}
} else
{return and__3546__auto____183714;
}
})());
});
var ep3__183760 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____183716 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____183716))
{var and__3546__auto____183717 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____183717))
{var and__3546__auto____183718 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____183718))
{var and__3546__auto____183719 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____183719))
{var and__3546__auto____183720 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____183720))
{return p3.call(null,y);
} else
{return and__3546__auto____183720;
}
} else
{return and__3546__auto____183719;
}
} else
{return and__3546__auto____183718;
}
} else
{return and__3546__auto____183717;
}
} else
{return and__3546__auto____183716;
}
})());
});
var ep3__183761 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____183721 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____183721))
{var and__3546__auto____183722 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____183722))
{var and__3546__auto____183723 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____183723))
{var and__3546__auto____183724 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____183724))
{var and__3546__auto____183725 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____183725))
{var and__3546__auto____183726 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____183726))
{var and__3546__auto____183727 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____183727))
{var and__3546__auto____183728 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____183728))
{return p3.call(null,z);
} else
{return and__3546__auto____183728;
}
} else
{return and__3546__auto____183727;
}
} else
{return and__3546__auto____183726;
}
} else
{return and__3546__auto____183725;
}
} else
{return and__3546__auto____183724;
}
} else
{return and__3546__auto____183723;
}
} else
{return and__3546__auto____183722;
}
} else
{return and__3546__auto____183721;
}
})());
});
var ep3__183762 = (function() { 
var G__183764__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____183729 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____183729))
{return cljs.core.every_QMARK_.call(null,(function (p1__183684_SHARP_){
var and__3546__auto____183730 = p1.call(null,p1__183684_SHARP_);

if(cljs.core.truth_(and__3546__auto____183730))
{var and__3546__auto____183731 = p2.call(null,p1__183684_SHARP_);

if(cljs.core.truth_(and__3546__auto____183731))
{return p3.call(null,p1__183684_SHARP_);
} else
{return and__3546__auto____183731;
}
} else
{return and__3546__auto____183730;
}
}),args);
} else
{return and__3546__auto____183729;
}
})());
};
var G__183764 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__183764__delegate.call(this, x, y, z, args);
};
G__183764.cljs$lang$maxFixedArity = 3;
G__183764.cljs$lang$applyTo = (function (arglist__183765){
var x = cljs.core.first(arglist__183765);
var y = cljs.core.first(cljs.core.next(arglist__183765));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183765)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__183765)));
return G__183764__delegate.call(this, x, y, z, args);
});
return G__183764;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__183758.call(this);
case  1 :
return ep3__183759.call(this,x);
case  2 :
return ep3__183760.call(this,x,y);
case  3 :
return ep3__183761.call(this,x,y,z);
default:
return ep3__183762.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__183762.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__183740 = (function() { 
var G__183766__delegate = function (p1,p2,p3,ps){
var ps__183732 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__183767 = (function (){
return true;
});
var epn__183768 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__183685_SHARP_){
return p1__183685_SHARP_.call(null,x);
}),ps__183732);
});
var epn__183769 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__183686_SHARP_){
var and__3546__auto____183733 = p1__183686_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____183733))
{return p1__183686_SHARP_.call(null,y);
} else
{return and__3546__auto____183733;
}
}),ps__183732);
});
var epn__183770 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__183687_SHARP_){
var and__3546__auto____183734 = p1__183687_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____183734))
{var and__3546__auto____183735 = p1__183687_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____183735))
{return p1__183687_SHARP_.call(null,z);
} else
{return and__3546__auto____183735;
}
} else
{return and__3546__auto____183734;
}
}),ps__183732);
});
var epn__183771 = (function() { 
var G__183773__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____183736 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____183736))
{return cljs.core.every_QMARK_.call(null,(function (p1__183688_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__183688_SHARP_,args);
}),ps__183732);
} else
{return and__3546__auto____183736;
}
})());
};
var G__183773 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__183773__delegate.call(this, x, y, z, args);
};
G__183773.cljs$lang$maxFixedArity = 3;
G__183773.cljs$lang$applyTo = (function (arglist__183774){
var x = cljs.core.first(arglist__183774);
var y = cljs.core.first(cljs.core.next(arglist__183774));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183774)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__183774)));
return G__183773__delegate.call(this, x, y, z, args);
});
return G__183773;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__183767.call(this);
case  1 :
return epn__183768.call(this,x);
case  2 :
return epn__183769.call(this,x,y);
case  3 :
return epn__183770.call(this,x,y,z);
default:
return epn__183771.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__183771.cljs$lang$applyTo;
return epn;
})()
};
var G__183766 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__183766__delegate.call(this, p1, p2, p3, ps);
};
G__183766.cljs$lang$maxFixedArity = 3;
G__183766.cljs$lang$applyTo = (function (arglist__183775){
var p1 = cljs.core.first(arglist__183775);
var p2 = cljs.core.first(cljs.core.next(arglist__183775));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183775)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__183775)));
return G__183766__delegate.call(this, p1, p2, p3, ps);
});
return G__183766;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__183737.call(this,p1);
case  2 :
return every_pred__183738.call(this,p1,p2);
case  3 :
return every_pred__183739.call(this,p1,p2,p3);
default:
return every_pred__183740.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__183740.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__183815 = (function (p){
return (function() {
var sp1 = null;
var sp1__183820 = (function (){
return null;
});
var sp1__183821 = (function (x){
return p.call(null,x);
});
var sp1__183822 = (function (x,y){
var or__3548__auto____183777 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____183777))
{return or__3548__auto____183777;
} else
{return p.call(null,y);
}
});
var sp1__183823 = (function (x,y,z){
var or__3548__auto____183778 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____183778))
{return or__3548__auto____183778;
} else
{var or__3548__auto____183779 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____183779))
{return or__3548__auto____183779;
} else
{return p.call(null,z);
}
}
});
var sp1__183824 = (function() { 
var G__183826__delegate = function (x,y,z,args){
var or__3548__auto____183780 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____183780))
{return or__3548__auto____183780;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__183826 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__183826__delegate.call(this, x, y, z, args);
};
G__183826.cljs$lang$maxFixedArity = 3;
G__183826.cljs$lang$applyTo = (function (arglist__183827){
var x = cljs.core.first(arglist__183827);
var y = cljs.core.first(cljs.core.next(arglist__183827));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183827)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__183827)));
return G__183826__delegate.call(this, x, y, z, args);
});
return G__183826;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__183820.call(this);
case  1 :
return sp1__183821.call(this,x);
case  2 :
return sp1__183822.call(this,x,y);
case  3 :
return sp1__183823.call(this,x,y,z);
default:
return sp1__183824.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__183824.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__183816 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__183828 = (function (){
return null;
});
var sp2__183829 = (function (x){
var or__3548__auto____183781 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____183781))
{return or__3548__auto____183781;
} else
{return p2.call(null,x);
}
});
var sp2__183830 = (function (x,y){
var or__3548__auto____183782 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____183782))
{return or__3548__auto____183782;
} else
{var or__3548__auto____183783 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____183783))
{return or__3548__auto____183783;
} else
{var or__3548__auto____183784 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____183784))
{return or__3548__auto____183784;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__183831 = (function (x,y,z){
var or__3548__auto____183785 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____183785))
{return or__3548__auto____183785;
} else
{var or__3548__auto____183786 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____183786))
{return or__3548__auto____183786;
} else
{var or__3548__auto____183787 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____183787))
{return or__3548__auto____183787;
} else
{var or__3548__auto____183788 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____183788))
{return or__3548__auto____183788;
} else
{var or__3548__auto____183789 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____183789))
{return or__3548__auto____183789;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__183832 = (function() { 
var G__183834__delegate = function (x,y,z,args){
var or__3548__auto____183790 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____183790))
{return or__3548__auto____183790;
} else
{return cljs.core.some.call(null,(function (p1__183693_SHARP_){
var or__3548__auto____183791 = p1.call(null,p1__183693_SHARP_);

if(cljs.core.truth_(or__3548__auto____183791))
{return or__3548__auto____183791;
} else
{return p2.call(null,p1__183693_SHARP_);
}
}),args);
}
};
var G__183834 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__183834__delegate.call(this, x, y, z, args);
};
G__183834.cljs$lang$maxFixedArity = 3;
G__183834.cljs$lang$applyTo = (function (arglist__183835){
var x = cljs.core.first(arglist__183835);
var y = cljs.core.first(cljs.core.next(arglist__183835));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183835)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__183835)));
return G__183834__delegate.call(this, x, y, z, args);
});
return G__183834;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__183828.call(this);
case  1 :
return sp2__183829.call(this,x);
case  2 :
return sp2__183830.call(this,x,y);
case  3 :
return sp2__183831.call(this,x,y,z);
default:
return sp2__183832.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__183832.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__183817 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__183836 = (function (){
return null;
});
var sp3__183837 = (function (x){
var or__3548__auto____183792 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____183792))
{return or__3548__auto____183792;
} else
{var or__3548__auto____183793 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____183793))
{return or__3548__auto____183793;
} else
{return p3.call(null,x);
}
}
});
var sp3__183838 = (function (x,y){
var or__3548__auto____183794 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____183794))
{return or__3548__auto____183794;
} else
{var or__3548__auto____183795 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____183795))
{return or__3548__auto____183795;
} else
{var or__3548__auto____183796 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____183796))
{return or__3548__auto____183796;
} else
{var or__3548__auto____183797 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____183797))
{return or__3548__auto____183797;
} else
{var or__3548__auto____183798 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____183798))
{return or__3548__auto____183798;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__183839 = (function (x,y,z){
var or__3548__auto____183799 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____183799))
{return or__3548__auto____183799;
} else
{var or__3548__auto____183800 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____183800))
{return or__3548__auto____183800;
} else
{var or__3548__auto____183801 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____183801))
{return or__3548__auto____183801;
} else
{var or__3548__auto____183802 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____183802))
{return or__3548__auto____183802;
} else
{var or__3548__auto____183803 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____183803))
{return or__3548__auto____183803;
} else
{var or__3548__auto____183804 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____183804))
{return or__3548__auto____183804;
} else
{var or__3548__auto____183805 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____183805))
{return or__3548__auto____183805;
} else
{var or__3548__auto____183806 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____183806))
{return or__3548__auto____183806;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__183840 = (function() { 
var G__183842__delegate = function (x,y,z,args){
var or__3548__auto____183807 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____183807))
{return or__3548__auto____183807;
} else
{return cljs.core.some.call(null,(function (p1__183694_SHARP_){
var or__3548__auto____183808 = p1.call(null,p1__183694_SHARP_);

if(cljs.core.truth_(or__3548__auto____183808))
{return or__3548__auto____183808;
} else
{var or__3548__auto____183809 = p2.call(null,p1__183694_SHARP_);

if(cljs.core.truth_(or__3548__auto____183809))
{return or__3548__auto____183809;
} else
{return p3.call(null,p1__183694_SHARP_);
}
}
}),args);
}
};
var G__183842 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__183842__delegate.call(this, x, y, z, args);
};
G__183842.cljs$lang$maxFixedArity = 3;
G__183842.cljs$lang$applyTo = (function (arglist__183843){
var x = cljs.core.first(arglist__183843);
var y = cljs.core.first(cljs.core.next(arglist__183843));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183843)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__183843)));
return G__183842__delegate.call(this, x, y, z, args);
});
return G__183842;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__183836.call(this);
case  1 :
return sp3__183837.call(this,x);
case  2 :
return sp3__183838.call(this,x,y);
case  3 :
return sp3__183839.call(this,x,y,z);
default:
return sp3__183840.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__183840.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__183818 = (function() { 
var G__183844__delegate = function (p1,p2,p3,ps){
var ps__183810 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__183845 = (function (){
return null;
});
var spn__183846 = (function (x){
return cljs.core.some.call(null,(function (p1__183695_SHARP_){
return p1__183695_SHARP_.call(null,x);
}),ps__183810);
});
var spn__183847 = (function (x,y){
return cljs.core.some.call(null,(function (p1__183696_SHARP_){
var or__3548__auto____183811 = p1__183696_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____183811))
{return or__3548__auto____183811;
} else
{return p1__183696_SHARP_.call(null,y);
}
}),ps__183810);
});
var spn__183848 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__183697_SHARP_){
var or__3548__auto____183812 = p1__183697_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____183812))
{return or__3548__auto____183812;
} else
{var or__3548__auto____183813 = p1__183697_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____183813))
{return or__3548__auto____183813;
} else
{return p1__183697_SHARP_.call(null,z);
}
}
}),ps__183810);
});
var spn__183849 = (function() { 
var G__183851__delegate = function (x,y,z,args){
var or__3548__auto____183814 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____183814))
{return or__3548__auto____183814;
} else
{return cljs.core.some.call(null,(function (p1__183698_SHARP_){
return cljs.core.some.call(null,p1__183698_SHARP_,args);
}),ps__183810);
}
};
var G__183851 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__183851__delegate.call(this, x, y, z, args);
};
G__183851.cljs$lang$maxFixedArity = 3;
G__183851.cljs$lang$applyTo = (function (arglist__183852){
var x = cljs.core.first(arglist__183852);
var y = cljs.core.first(cljs.core.next(arglist__183852));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183852)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__183852)));
return G__183851__delegate.call(this, x, y, z, args);
});
return G__183851;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__183845.call(this);
case  1 :
return spn__183846.call(this,x);
case  2 :
return spn__183847.call(this,x,y);
case  3 :
return spn__183848.call(this,x,y,z);
default:
return spn__183849.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__183849.cljs$lang$applyTo;
return spn;
})()
};
var G__183844 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__183844__delegate.call(this, p1, p2, p3, ps);
};
G__183844.cljs$lang$maxFixedArity = 3;
G__183844.cljs$lang$applyTo = (function (arglist__183853){
var p1 = cljs.core.first(arglist__183853);
var p2 = cljs.core.first(cljs.core.next(arglist__183853));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183853)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__183853)));
return G__183844__delegate.call(this, p1, p2, p3, ps);
});
return G__183844;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__183815.call(this,p1);
case  2 :
return some_fn__183816.call(this,p1,p2);
case  3 :
return some_fn__183817.call(this,p1,p2,p3);
default:
return some_fn__183818.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__183818.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__183866 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____183854 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____183854))
{var s__183855 = temp__3698__auto____183854;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__183855)),map.call(null,f,cljs.core.rest.call(null,s__183855)));
} else
{return null;
}
})));
});
var map__183867 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__183856 = cljs.core.seq.call(null,c1);
var s2__183857 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____183858 = s1__183856;

if(cljs.core.truth_(and__3546__auto____183858))
{return s2__183857;
} else
{return and__3546__auto____183858;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__183856),cljs.core.first.call(null,s2__183857)),map.call(null,f,cljs.core.rest.call(null,s1__183856),cljs.core.rest.call(null,s2__183857)));
} else
{return null;
}
})));
});
var map__183868 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__183859 = cljs.core.seq.call(null,c1);
var s2__183860 = cljs.core.seq.call(null,c2);
var s3__183861 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____183862 = s1__183859;

if(cljs.core.truth_(and__3546__auto____183862))
{var and__3546__auto____183863 = s2__183860;

if(cljs.core.truth_(and__3546__auto____183863))
{return s3__183861;
} else
{return and__3546__auto____183863;
}
} else
{return and__3546__auto____183862;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__183859),cljs.core.first.call(null,s2__183860),cljs.core.first.call(null,s3__183861)),map.call(null,f,cljs.core.rest.call(null,s1__183859),cljs.core.rest.call(null,s2__183860),cljs.core.rest.call(null,s3__183861)));
} else
{return null;
}
})));
});
var map__183869 = (function() { 
var G__183871__delegate = function (f,c1,c2,c3,colls){
var step__183865 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__183864 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__183864)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__183864),step.call(null,map.call(null,cljs.core.rest,ss__183864)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__183776_SHARP_){
return cljs.core.apply.call(null,f,p1__183776_SHARP_);
}),step__183865.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__183871 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__183871__delegate.call(this, f, c1, c2, c3, colls);
};
G__183871.cljs$lang$maxFixedArity = 4;
G__183871.cljs$lang$applyTo = (function (arglist__183872){
var f = cljs.core.first(arglist__183872);
var c1 = cljs.core.first(cljs.core.next(arglist__183872));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183872)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__183872))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__183872))));
return G__183871__delegate.call(this, f, c1, c2, c3, colls);
});
return G__183871;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__183866.call(this,f,c1);
case  3 :
return map__183867.call(this,f,c1,c2);
case  4 :
return map__183868.call(this,f,c1,c2,c3);
default:
return map__183869.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__183869.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____183873 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____183873))
{var s__183874 = temp__3698__auto____183873;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__183874),take.call(null,(n - 1),cljs.core.rest.call(null,s__183874)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__183877 = (function (n,coll){
while(true){
var s__183875 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____183876 = (n > 0);

if(cljs.core.truth_(and__3546__auto____183876))
{return s__183875;
} else
{return and__3546__auto____183876;
}
})()))
{{
var G__183878 = (n - 1);
var G__183879 = cljs.core.rest.call(null,s__183875);
n = G__183878;
coll = G__183879;
continue;
}
} else
{return s__183875;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__183877.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__183880 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__183881 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__183880.call(this,n);
case  2 :
return drop_last__183881.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__183883 = cljs.core.seq.call(null,coll);
var lead__183884 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__183884))
{{
var G__183885 = cljs.core.next.call(null,s__183883);
var G__183886 = cljs.core.next.call(null,lead__183884);
s__183883 = G__183885;
lead__183884 = G__183886;
continue;
}
} else
{return s__183883;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__183889 = (function (pred,coll){
while(true){
var s__183887 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____183888 = s__183887;

if(cljs.core.truth_(and__3546__auto____183888))
{return pred.call(null,cljs.core.first.call(null,s__183887));
} else
{return and__3546__auto____183888;
}
})()))
{{
var G__183890 = pred;
var G__183891 = cljs.core.rest.call(null,s__183887);
pred = G__183890;
coll = G__183891;
continue;
}
} else
{return s__183887;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__183889.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____183892 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____183892))
{var s__183893 = temp__3698__auto____183892;

return cljs.core.concat.call(null,s__183893,cycle.call(null,s__183893));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__183894 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__183895 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__183894.call(this,n);
case  2 :
return repeat__183895.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__183897 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__183898 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__183897.call(this,n);
case  2 :
return repeatedly__183898.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__183904 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__183900 = cljs.core.seq.call(null,c1);
var s2__183901 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____183902 = s1__183900;

if(cljs.core.truth_(and__3546__auto____183902))
{return s2__183901;
} else
{return and__3546__auto____183902;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__183900),cljs.core.cons.call(null,cljs.core.first.call(null,s2__183901),interleave.call(null,cljs.core.rest.call(null,s1__183900),cljs.core.rest.call(null,s2__183901))));
} else
{return null;
}
})));
});
var interleave__183905 = (function() { 
var G__183907__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__183903 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__183903)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__183903),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__183903)));
} else
{return null;
}
})));
};
var G__183907 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__183907__delegate.call(this, c1, c2, colls);
};
G__183907.cljs$lang$maxFixedArity = 2;
G__183907.cljs$lang$applyTo = (function (arglist__183908){
var c1 = cljs.core.first(arglist__183908);
var c2 = cljs.core.first(cljs.core.next(arglist__183908));
var colls = cljs.core.rest(cljs.core.next(arglist__183908));
return G__183907__delegate.call(this, c1, c2, colls);
});
return G__183907;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__183904.call(this,c1,c2);
default:
return interleave__183905.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__183905.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__183911 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____183909 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____183909))
{var coll__183910 = temp__3695__auto____183909;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__183910),cat.call(null,cljs.core.rest.call(null,coll__183910),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__183911.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__183912 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__183913 = (function() { 
var G__183915__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__183915 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__183915__delegate.call(this, f, coll, colls);
};
G__183915.cljs$lang$maxFixedArity = 2;
G__183915.cljs$lang$applyTo = (function (arglist__183916){
var f = cljs.core.first(arglist__183916);
var coll = cljs.core.first(cljs.core.next(arglist__183916));
var colls = cljs.core.rest(cljs.core.next(arglist__183916));
return G__183915__delegate.call(this, f, coll, colls);
});
return G__183915;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__183912.call(this,f,coll);
default:
return mapcat__183913.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__183913.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____183917 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____183917))
{var s__183918 = temp__3698__auto____183917;

var f__183919 = cljs.core.first.call(null,s__183918);
var r__183920 = cljs.core.rest.call(null,s__183918);

if(cljs.core.truth_(pred.call(null,f__183919)))
{return cljs.core.cons.call(null,f__183919,filter.call(null,pred,r__183920));
} else
{return filter.call(null,pred,r__183920);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__183922 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__183922.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__183921_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__183921_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__183929 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__183930 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____183923 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____183923))
{var s__183924 = temp__3698__auto____183923;

var p__183925 = cljs.core.take.call(null,n,s__183924);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__183925))))
{return cljs.core.cons.call(null,p__183925,partition.call(null,n,step,cljs.core.drop.call(null,step,s__183924)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__183931 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____183926 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____183926))
{var s__183927 = temp__3698__auto____183926;

var p__183928 = cljs.core.take.call(null,n,s__183927);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__183928))))
{return cljs.core.cons.call(null,p__183928,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__183927)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__183928,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__183929.call(this,n,step);
case  3 :
return partition__183930.call(this,n,step,pad);
case  4 :
return partition__183931.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__183937 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__183938 = (function (m,ks,not_found){
var sentinel__183933 = cljs.core.lookup_sentinel;
var m__183934 = m;
var ks__183935 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__183935))
{var m__183936 = cljs.core.get.call(null,m__183934,cljs.core.first.call(null,ks__183935),sentinel__183933);

if(cljs.core.truth_((sentinel__183933 === m__183936)))
{return not_found;
} else
{{
var G__183940 = sentinel__183933;
var G__183941 = m__183936;
var G__183942 = cljs.core.next.call(null,ks__183935);
sentinel__183933 = G__183940;
m__183934 = G__183941;
ks__183935 = G__183942;
continue;
}
}
} else
{return m__183934;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__183937.call(this,m,ks);
case  3 :
return get_in__183938.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__183943,v){
var vec__183944__183945 = p__183943;
var k__183946 = cljs.core.nth.call(null,vec__183944__183945,0,null);
var ks__183947 = cljs.core.nthnext.call(null,vec__183944__183945,1);

if(cljs.core.truth_(ks__183947))
{return cljs.core.assoc.call(null,m,k__183946,assoc_in.call(null,cljs.core.get.call(null,m,k__183946),ks__183947,v));
} else
{return cljs.core.assoc.call(null,m,k__183946,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__183948,f,args){
var vec__183949__183950 = p__183948;
var k__183951 = cljs.core.nth.call(null,vec__183949__183950,0,null);
var ks__183952 = cljs.core.nthnext.call(null,vec__183949__183950,1);

if(cljs.core.truth_(ks__183952))
{return cljs.core.assoc.call(null,m,k__183951,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__183951),ks__183952,f,args));
} else
{return cljs.core.assoc.call(null,m,k__183951,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__183951),args));
}
};
var update_in = function (m,p__183948,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__183948, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__183953){
var m = cljs.core.first(arglist__183953);
var p__183948 = cljs.core.first(cljs.core.next(arglist__183953));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__183953)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__183953)));
return update_in__delegate.call(this, m, p__183948, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__183954 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__183981 = null;
var G__183981__183982 = (function (coll,k){
var this__183955 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__183981__183983 = (function (coll,k,not_found){
var this__183956 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__183981 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__183981__183982.call(this,coll,k);
case  3 :
return G__183981__183983.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183981;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__183957 = this;
var new_array__183958 = cljs.core.aclone.call(null,this__183957.array);

(new_array__183958[k] = v);
return (new cljs.core.Vector(this__183957.meta,new_array__183958));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__183985 = null;
var G__183985__183986 = (function (coll,k){
var this__183959 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__183985__183987 = (function (coll,k,not_found){
var this__183960 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__183985 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__183985__183986.call(this,coll,k);
case  3 :
return G__183985__183987.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183985;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__183961 = this;
var new_array__183962 = cljs.core.aclone.call(null,this__183961.array);

new_array__183962.push(o);
return (new cljs.core.Vector(this__183961.meta,new_array__183962));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__183989 = null;
var G__183989__183990 = (function (v,f){
var this__183963 = this;
return cljs.core.ci_reduce.call(null,this__183963.array,f);
});
var G__183989__183991 = (function (v,f,start){
var this__183964 = this;
return cljs.core.ci_reduce.call(null,this__183964.array,f,start);
});
G__183989 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__183989__183990.call(this,v,f);
case  3 :
return G__183989__183991.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183989;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__183965 = this;
if(cljs.core.truth_((this__183965.array.length > 0)))
{var vector_seq__183966 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__183965.array.length)))
{return cljs.core.cons.call(null,(this__183965.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__183966.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__183967 = this;
return this__183967.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__183968 = this;
var count__183969 = this__183968.array.length;

if(cljs.core.truth_((count__183969 > 0)))
{return (this__183968.array[(count__183969 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__183970 = this;
if(cljs.core.truth_((this__183970.array.length > 0)))
{var new_array__183971 = cljs.core.aclone.call(null,this__183970.array);

new_array__183971.pop();
return (new cljs.core.Vector(this__183970.meta,new_array__183971));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__183972 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__183973 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__183974 = this;
return (new cljs.core.Vector(meta,this__183974.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__183975 = this;
return this__183975.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__183993 = null;
var G__183993__183994 = (function (coll,n){
var this__183976 = this;
if(cljs.core.truth_((function (){var and__3546__auto____183977 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____183977))
{return (n < this__183976.array.length);
} else
{return and__3546__auto____183977;
}
})()))
{return (this__183976.array[n]);
} else
{return null;
}
});
var G__183993__183995 = (function (coll,n,not_found){
var this__183978 = this;
if(cljs.core.truth_((function (){var and__3546__auto____183979 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____183979))
{return (n < this__183978.array.length);
} else
{return and__3546__auto____183979;
}
})()))
{return (this__183978.array[n]);
} else
{return not_found;
}
});
G__183993 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__183993__183994.call(this,coll,n);
case  3 :
return G__183993__183995.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__183993;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__183980 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__183980.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__183997){
var args = cljs.core.seq( arglist__183997 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__183998 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__184020 = null;
var G__184020__184021 = (function (coll,k){
var this__183999 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__184020__184022 = (function (coll,k,not_found){
var this__184000 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__184020 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__184020__184021.call(this,coll,k);
case  3 :
return G__184020__184022.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__184020;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__184001 = this;
var v_pos__184002 = (this__184001.start + key);

return (new cljs.core.Subvec(this__184001.meta,cljs.core._assoc.call(null,this__184001.v,v_pos__184002,val),this__184001.start,((this__184001.end > (v_pos__184002 + 1)) ? this__184001.end : (v_pos__184002 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__184024 = null;
var G__184024__184025 = (function (coll,k){
var this__184003 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__184024__184026 = (function (coll,k,not_found){
var this__184004 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__184024 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__184024__184025.call(this,coll,k);
case  3 :
return G__184024__184026.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__184024;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__184005 = this;
return (new cljs.core.Subvec(this__184005.meta,cljs.core._assoc_n.call(null,this__184005.v,this__184005.end,o),this__184005.start,(this__184005.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__184028 = null;
var G__184028__184029 = (function (coll,f){
var this__184006 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__184028__184030 = (function (coll,f,start){
var this__184007 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__184028 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__184028__184029.call(this,coll,f);
case  3 :
return G__184028__184030.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__184028;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__184008 = this;
var subvec_seq__184009 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__184008.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__184008.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__184009.call(null,this__184008.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__184010 = this;
return (this__184010.end - this__184010.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__184011 = this;
return cljs.core._nth.call(null,this__184011.v,(this__184011.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__184012 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__184012.start,this__184012.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__184012.meta,this__184012.v,this__184012.start,(this__184012.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__184013 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__184014 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__184015 = this;
return (new cljs.core.Subvec(meta,this__184015.v,this__184015.start,this__184015.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__184016 = this;
return this__184016.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__184032 = null;
var G__184032__184033 = (function (coll,n){
var this__184017 = this;
return cljs.core._nth.call(null,this__184017.v,(this__184017.start + n));
});
var G__184032__184034 = (function (coll,n,not_found){
var this__184018 = this;
return cljs.core._nth.call(null,this__184018.v,(this__184018.start + n),not_found);
});
G__184032 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__184032__184033.call(this,coll,n);
case  3 :
return G__184032__184034.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__184032;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__184019 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__184019.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__184036 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__184037 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__184036.call(this,v,start);
case  3 :
return subvec__184037.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__184039 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__184040 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__184041 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__184042 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__184042.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__184043 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__184044 = this;
return cljs.core._first.call(null,this__184044.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__184045 = this;
var temp__3695__auto____184046 = cljs.core.next.call(null,this__184045.front);

if(cljs.core.truth_(temp__3695__auto____184046))
{var f1__184047 = temp__3695__auto____184046;

return (new cljs.core.PersistentQueueSeq(this__184045.meta,f1__184047,this__184045.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__184045.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__184045.meta,this__184045.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__184048 = this;
return this__184048.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__184049 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__184049.front,this__184049.rear));
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__184050 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__184051 = this;
if(cljs.core.truth_(this__184051.front))
{return (new cljs.core.PersistentQueue(this__184051.meta,(this__184051.count + 1),this__184051.front,cljs.core.conj.call(null,(function (){var or__3548__auto____184052 = this__184051.rear;

if(cljs.core.truth_(or__3548__auto____184052))
{return or__3548__auto____184052;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__184051.meta,(this__184051.count + 1),cljs.core.conj.call(null,this__184051.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__184053 = this;
var rear__184054 = cljs.core.seq.call(null,this__184053.rear);

if(cljs.core.truth_((function (){var or__3548__auto____184055 = this__184053.front;

if(cljs.core.truth_(or__3548__auto____184055))
{return or__3548__auto____184055;
} else
{return rear__184054;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__184053.front,cljs.core.seq.call(null,rear__184054)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__184056 = this;
return this__184056.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__184057 = this;
return cljs.core._first.call(null,this__184057.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__184058 = this;
if(cljs.core.truth_(this__184058.front))
{var temp__3695__auto____184059 = cljs.core.next.call(null,this__184058.front);

if(cljs.core.truth_(temp__3695__auto____184059))
{var f1__184060 = temp__3695__auto____184059;

return (new cljs.core.PersistentQueue(this__184058.meta,(this__184058.count - 1),f1__184060,this__184058.rear));
} else
{return (new cljs.core.PersistentQueue(this__184058.meta,(this__184058.count - 1),cljs.core.seq.call(null,this__184058.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__184061 = this;
return cljs.core.first.call(null,this__184061.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__184062 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__184063 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__184064 = this;
return (new cljs.core.PersistentQueue(meta,this__184064.count,this__184064.front,this__184064.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__184065 = this;
return this__184065.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__184066 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.Vector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__184067 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__184068 = array.length;

var i__184069 = 0;

while(true){
if(cljs.core.truth_((i__184069 < len__184068)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__184069]))))
{return i__184069;
} else
{{
var G__184070 = (i__184069 + incr);
i__184069 = G__184070;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___184072 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___184073 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____184071 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____184071))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____184071;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___184072.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___184073.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__184076 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__184097 = null;
var G__184097__184098 = (function (coll,k){
var this__184077 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__184097__184099 = (function (coll,k,not_found){
var this__184078 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__184078.strobj,(this__184078.strobj[k]),not_found);
});
G__184097 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__184097__184098.call(this,coll,k);
case  3 :
return G__184097__184099.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__184097;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__184079 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__184080 = goog.object.clone.call(null,this__184079.strobj);
var overwrite_QMARK___184081 = new_strobj__184080.hasOwnProperty(k);

(new_strobj__184080[k] = v);
if(cljs.core.truth_(overwrite_QMARK___184081))
{return (new cljs.core.ObjMap(this__184079.meta,this__184079.keys,new_strobj__184080));
} else
{var new_keys__184082 = cljs.core.aclone.call(null,this__184079.keys);

new_keys__184082.push(k);
return (new cljs.core.ObjMap(this__184079.meta,new_keys__184082,new_strobj__184080));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__184079.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__184083 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__184083.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__184101 = null;
var G__184101__184102 = (function (coll,k){
var this__184084 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__184101__184103 = (function (coll,k,not_found){
var this__184085 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__184101 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__184101__184102.call(this,coll,k);
case  3 :
return G__184101__184103.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__184101;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__184086 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__184087 = this;
if(cljs.core.truth_((this__184087.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__184075_SHARP_){
return cljs.core.vector.call(null,p1__184075_SHARP_,(this__184087.strobj[p1__184075_SHARP_]));
}),this__184087.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__184088 = this;
return this__184088.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__184089 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__184090 = this;
return (new cljs.core.ObjMap(meta,this__184090.keys,this__184090.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__184091 = this;
return this__184091.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__184092 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__184092.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__184093 = this;
if(cljs.core.truth_((function (){var and__3546__auto____184094 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____184094))
{return this__184093.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____184094;
}
})()))
{var new_keys__184095 = cljs.core.aclone.call(null,this__184093.keys);
var new_strobj__184096 = goog.object.clone.call(null,this__184093.strobj);

new_keys__184095.splice(cljs.core.scan_array.call(null,1,k,new_keys__184095),1);
cljs.core.js_delete.call(null,new_strobj__184096,k);
return (new cljs.core.ObjMap(this__184093.meta,new_keys__184095,new_strobj__184096));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__184106 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__184138 = null;
var G__184138__184139 = (function (coll,k){
var this__184107 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__184138__184140 = (function (coll,k,not_found){
var this__184108 = this;
var bucket__184109 = (this__184108.hashobj[cljs.core.hash.call(null,k)]);
var i__184110 = (cljs.core.truth_(bucket__184109)?cljs.core.scan_array.call(null,2,k,bucket__184109):null);

if(cljs.core.truth_(i__184110))
{return (bucket__184109[(i__184110 + 1)]);
} else
{return not_found;
}
});
G__184138 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__184138__184139.call(this,coll,k);
case  3 :
return G__184138__184140.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__184138;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__184111 = this;
var h__184112 = cljs.core.hash.call(null,k);
var bucket__184113 = (this__184111.hashobj[h__184112]);

if(cljs.core.truth_(bucket__184113))
{var new_bucket__184114 = cljs.core.aclone.call(null,bucket__184113);
var new_hashobj__184115 = goog.object.clone.call(null,this__184111.hashobj);

(new_hashobj__184115[h__184112] = new_bucket__184114);
var temp__3695__auto____184116 = cljs.core.scan_array.call(null,2,k,new_bucket__184114);

if(cljs.core.truth_(temp__3695__auto____184116))
{var i__184117 = temp__3695__auto____184116;

(new_bucket__184114[(i__184117 + 1)] = v);
return (new cljs.core.HashMap(this__184111.meta,this__184111.count,new_hashobj__184115));
} else
{new_bucket__184114.push(k,v);
return (new cljs.core.HashMap(this__184111.meta,(this__184111.count + 1),new_hashobj__184115));
}
} else
{var new_hashobj__184118 = goog.object.clone.call(null,this__184111.hashobj);

(new_hashobj__184118[h__184112] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__184111.meta,(this__184111.count + 1),new_hashobj__184118));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__184119 = this;
var bucket__184120 = (this__184119.hashobj[cljs.core.hash.call(null,k)]);
var i__184121 = (cljs.core.truth_(bucket__184120)?cljs.core.scan_array.call(null,2,k,bucket__184120):null);

if(cljs.core.truth_(i__184121))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__184142 = null;
var G__184142__184143 = (function (coll,k){
var this__184122 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__184142__184144 = (function (coll,k,not_found){
var this__184123 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__184142 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__184142__184143.call(this,coll,k);
case  3 :
return G__184142__184144.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__184142;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__184124 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__184125 = this;
if(cljs.core.truth_((this__184125.count > 0)))
{var hashes__184126 = cljs.core.js_keys.call(null,this__184125.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__184105_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__184125.hashobj[p1__184105_SHARP_])));
}),hashes__184126);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__184127 = this;
return this__184127.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__184128 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__184129 = this;
return (new cljs.core.HashMap(meta,this__184129.count,this__184129.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__184130 = this;
return this__184130.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__184131 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__184131.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__184132 = this;
var h__184133 = cljs.core.hash.call(null,k);
var bucket__184134 = (this__184132.hashobj[h__184133]);
var i__184135 = (cljs.core.truth_(bucket__184134)?cljs.core.scan_array.call(null,2,k,bucket__184134):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__184135)))
{return coll;
} else
{var new_hashobj__184136 = goog.object.clone.call(null,this__184132.hashobj);

if(cljs.core.truth_((3 > bucket__184134.length)))
{cljs.core.js_delete.call(null,new_hashobj__184136,h__184133);
} else
{var new_bucket__184137 = cljs.core.aclone.call(null,bucket__184134);

new_bucket__184137.splice(i__184135,2);
(new_hashobj__184136[h__184133] = new_bucket__184137);
}
return (new cljs.core.HashMap(this__184132.meta,(this__184132.count - 1),new_hashobj__184136));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__184146 = ks.length;

var i__184147 = 0;
var out__184148 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__184147 < len__184146)))
{{
var G__184149 = (i__184147 + 1);
var G__184150 = cljs.core.assoc.call(null,out__184148,(ks[i__184147]),(vs[i__184147]));
i__184147 = G__184149;
out__184148 = G__184150;
continue;
}
} else
{return out__184148;
}
break;
}
});
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__184151 = cljs.core.seq.call(null,keyvals);
var out__184152 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__184151))
{{
var G__184153 = cljs.core.nnext.call(null,in$__184151);
var G__184154 = cljs.core.assoc.call(null,out__184152,cljs.core.first.call(null,in$__184151),cljs.core.second.call(null,in$__184151));
in$__184151 = G__184153;
out__184152 = G__184154;
continue;
}
} else
{return out__184152;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__184155){
var keyvals = cljs.core.seq( arglist__184155 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__184156_SHARP_,p2__184157_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____184158 = p1__184156_SHARP_;

if(cljs.core.truth_(or__3548__auto____184158))
{return or__3548__auto____184158;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__184157_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__184159){
var maps = cljs.core.seq( arglist__184159 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__184162 = (function (m,e){
var k__184160 = cljs.core.first.call(null,e);
var v__184161 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__184160)))
{return cljs.core.assoc.call(null,m,k__184160,f.call(null,cljs.core.get.call(null,m,k__184160),v__184161));
} else
{return cljs.core.assoc.call(null,m,k__184160,v__184161);
}
});
var merge2__184164 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__184162,(function (){var or__3548__auto____184163 = m1;

if(cljs.core.truth_(or__3548__auto____184163))
{return or__3548__auto____184163;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__184164,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__184165){
var f = cljs.core.first(arglist__184165);
var maps = cljs.core.rest(arglist__184165);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__184167 = cljs.core.ObjMap.fromObject([],{});
var keys__184168 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__184168))
{var key__184169 = cljs.core.first.call(null,keys__184168);
var entry__184170 = cljs.core.get.call(null,map,key__184169,"﷐'user/not-found");

{
var G__184171 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__184170,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__184167,key__184169,entry__184170):ret__184167);
var G__184172 = cljs.core.next.call(null,keys__184168);
ret__184167 = G__184171;
keys__184168 = G__184172;
continue;
}
} else
{return ret__184167;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__184173 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__184188 = null;
var G__184188__184189 = (function (coll,v){
var this__184174 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__184188__184190 = (function (coll,v,not_found){
var this__184175 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__184175.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__184188 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__184188__184189.call(this,coll,v);
case  3 :
return G__184188__184190.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__184188;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__184192 = null;
var G__184192__184193 = (function (coll,k){
var this__184176 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__184192__184194 = (function (coll,k,not_found){
var this__184177 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__184192 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__184192__184193.call(this,coll,k);
case  3 :
return G__184192__184194.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__184192;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__184178 = this;
return (new cljs.core.Set(this__184178.meta,cljs.core.assoc.call(null,this__184178.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__184179 = this;
return cljs.core.keys.call(null,this__184179.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__184180 = this;
return (new cljs.core.Set(this__184180.meta,cljs.core.dissoc.call(null,this__184180.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__184181 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__184182 = this;
var and__3546__auto____184183 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____184183))
{var and__3546__auto____184184 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____184184))
{return cljs.core.every_QMARK_.call(null,(function (p1__184166_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__184166_SHARP_);
}),other);
} else
{return and__3546__auto____184184;
}
} else
{return and__3546__auto____184183;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__184185 = this;
return (new cljs.core.Set(meta,this__184185.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__184186 = this;
return this__184186.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__184187 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__184187.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__184197 = cljs.core.seq.call(null,coll);
var out__184198 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__184197))))
{{
var G__184199 = cljs.core.rest.call(null,in$__184197);
var G__184200 = cljs.core.conj.call(null,out__184198,cljs.core.first.call(null,in$__184197));
in$__184197 = G__184199;
out__184198 = G__184200;
continue;
}
} else
{return out__184198;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__184201 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____184202 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____184202))
{var e__184203 = temp__3695__auto____184202;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__184203));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__184201,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__184196_SHARP_){
var temp__3695__auto____184204 = cljs.core.find.call(null,smap,p1__184196_SHARP_);

if(cljs.core.truth_(temp__3695__auto____184204))
{var e__184205 = temp__3695__auto____184204;

return cljs.core.second.call(null,e__184205);
} else
{return p1__184196_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__184213 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__184206,seen){
while(true){
var vec__184207__184208 = p__184206;
var f__184209 = cljs.core.nth.call(null,vec__184207__184208,0,null);
var xs__184210 = vec__184207__184208;

var temp__3698__auto____184211 = cljs.core.seq.call(null,xs__184210);

if(cljs.core.truth_(temp__3698__auto____184211))
{var s__184212 = temp__3698__auto____184211;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__184209)))
{{
var G__184214 = cljs.core.rest.call(null,s__184212);
var G__184215 = seen;
p__184206 = G__184214;
seen = G__184215;
continue;
}
} else
{return cljs.core.cons.call(null,f__184209,step.call(null,cljs.core.rest.call(null,s__184212),cljs.core.conj.call(null,seen,f__184209)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__184213.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__184216 = cljs.core.Vector.fromArray([]);
var s__184217 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__184217)))
{{
var G__184218 = cljs.core.conj.call(null,ret__184216,cljs.core.first.call(null,s__184217));
var G__184219 = cljs.core.next.call(null,s__184217);
ret__184216 = G__184218;
s__184217 = G__184219;
continue;
}
} else
{return cljs.core.seq.call(null,ret__184216);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____184220 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____184220))
{return or__3548__auto____184220;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__184221 = x.lastIndexOf("/");

if(cljs.core.truth_((i__184221 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__184221 + 1));
}
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____184222 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____184222))
{return or__3548__auto____184222;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__184223 = x.lastIndexOf("/");

if(cljs.core.truth_((i__184223 > -1)))
{return cljs.core.subs.call(null,x,2,i__184223);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__184226 = cljs.core.ObjMap.fromObject([],{});
var ks__184227 = cljs.core.seq.call(null,keys);
var vs__184228 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____184229 = ks__184227;

if(cljs.core.truth_(and__3546__auto____184229))
{return vs__184228;
} else
{return and__3546__auto____184229;
}
})()))
{{
var G__184230 = cljs.core.assoc.call(null,map__184226,cljs.core.first.call(null,ks__184227),cljs.core.first.call(null,vs__184228));
var G__184231 = cljs.core.next.call(null,ks__184227);
var G__184232 = cljs.core.next.call(null,vs__184228);
map__184226 = G__184230;
ks__184227 = G__184231;
vs__184228 = G__184232;
continue;
}
} else
{return map__184226;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__184235 = (function (k,x){
return x;
});
var max_key__184236 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__184237 = (function() { 
var G__184239__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__184224_SHARP_,p2__184225_SHARP_){
return max_key.call(null,k,p1__184224_SHARP_,p2__184225_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__184239 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__184239__delegate.call(this, k, x, y, more);
};
G__184239.cljs$lang$maxFixedArity = 3;
G__184239.cljs$lang$applyTo = (function (arglist__184240){
var k = cljs.core.first(arglist__184240);
var x = cljs.core.first(cljs.core.next(arglist__184240));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184240)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__184240)));
return G__184239__delegate.call(this, k, x, y, more);
});
return G__184239;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__184235.call(this,k,x);
case  3 :
return max_key__184236.call(this,k,x,y);
default:
return max_key__184237.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__184237.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__184241 = (function (k,x){
return x;
});
var min_key__184242 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__184243 = (function() { 
var G__184245__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__184233_SHARP_,p2__184234_SHARP_){
return min_key.call(null,k,p1__184233_SHARP_,p2__184234_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__184245 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__184245__delegate.call(this, k, x, y, more);
};
G__184245.cljs$lang$maxFixedArity = 3;
G__184245.cljs$lang$applyTo = (function (arglist__184246){
var k = cljs.core.first(arglist__184246);
var x = cljs.core.first(cljs.core.next(arglist__184246));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184246)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__184246)));
return G__184245__delegate.call(this, k, x, y, more);
});
return G__184245;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__184241.call(this,k,x);
case  3 :
return min_key__184242.call(this,k,x,y);
default:
return min_key__184243.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__184243.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__184249 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__184250 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____184247 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____184247))
{var s__184248 = temp__3698__auto____184247;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__184248),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__184248)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__184249.call(this,n,step);
case  3 :
return partition_all__184250.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____184252 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____184252))
{var s__184253 = temp__3698__auto____184252;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__184253))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__184253),take_while.call(null,pred,cljs.core.rest.call(null,s__184253)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__184254 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__184255 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__184271 = null;
var G__184271__184272 = (function (rng,f){
var this__184256 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__184271__184273 = (function (rng,f,s){
var this__184257 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__184271 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__184271__184272.call(this,rng,f);
case  3 :
return G__184271__184273.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__184271;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__184258 = this;
var comp__184259 = (cljs.core.truth_((this__184258.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__184259.call(null,this__184258.start,this__184258.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__184260 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__184260.end - this__184260.start) / this__184260.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__184261 = this;
return this__184261.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__184262 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__184262.meta,(this__184262.start + this__184262.step),this__184262.end,this__184262.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__184263 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__184264 = this;
return (new cljs.core.Range(meta,this__184264.start,this__184264.end,this__184264.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__184265 = this;
return this__184265.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__184275 = null;
var G__184275__184276 = (function (rng,n){
var this__184266 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__184266.start + (n * this__184266.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____184267 = (this__184266.start > this__184266.end);

if(cljs.core.truth_(and__3546__auto____184267))
{return cljs.core._EQ_.call(null,this__184266.step,0);
} else
{return and__3546__auto____184267;
}
})()))
{return this__184266.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__184275__184277 = (function (rng,n,not_found){
var this__184268 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__184268.start + (n * this__184268.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____184269 = (this__184268.start > this__184268.end);

if(cljs.core.truth_(and__3546__auto____184269))
{return cljs.core._EQ_.call(null,this__184268.step,0);
} else
{return and__3546__auto____184269;
}
})()))
{return this__184268.start;
} else
{return not_found;
}
}
});
G__184275 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__184275__184276.call(this,rng,n);
case  3 :
return G__184275__184277.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__184275;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__184270 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__184270.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__184279 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__184280 = (function (end){
return range.call(null,0,end,1);
});
var range__184281 = (function (start,end){
return range.call(null,start,end,1);
});
var range__184282 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__184279.call(this);
case  1 :
return range__184280.call(this,start);
case  2 :
return range__184281.call(this,start,end);
case  3 :
return range__184282.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____184284 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____184284))
{var s__184285 = temp__3698__auto____184284;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__184285),take_nth.call(null,n,cljs.core.drop.call(null,n,s__184285)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____184287 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____184287))
{var s__184288 = temp__3698__auto____184287;

var fst__184289 = cljs.core.first.call(null,s__184288);
var fv__184290 = f.call(null,fst__184289);
var run__184291 = cljs.core.cons.call(null,fst__184289,cljs.core.take_while.call(null,(function (p1__184286_SHARP_){
return cljs.core._EQ_.call(null,fv__184290,f.call(null,p1__184286_SHARP_));
}),cljs.core.next.call(null,s__184288)));

return cljs.core.cons.call(null,run__184291,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__184291),s__184288))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__184306 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____184302 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____184302))
{var s__184303 = temp__3695__auto____184302;

return reductions.call(null,f,cljs.core.first.call(null,s__184303),cljs.core.rest.call(null,s__184303));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__184307 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____184304 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____184304))
{var s__184305 = temp__3698__auto____184304;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__184305)),cljs.core.rest.call(null,s__184305));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__184306.call(this,f,init);
case  3 :
return reductions__184307.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__184310 = (function (f){
return (function() {
var G__184315 = null;
var G__184315__184316 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__184315__184317 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__184315__184318 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__184315__184319 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__184315__184320 = (function() { 
var G__184322__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__184322 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__184322__delegate.call(this, x, y, z, args);
};
G__184322.cljs$lang$maxFixedArity = 3;
G__184322.cljs$lang$applyTo = (function (arglist__184323){
var x = cljs.core.first(arglist__184323);
var y = cljs.core.first(cljs.core.next(arglist__184323));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184323)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__184323)));
return G__184322__delegate.call(this, x, y, z, args);
});
return G__184322;
})()
;
G__184315 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__184315__184316.call(this);
case  1 :
return G__184315__184317.call(this,x);
case  2 :
return G__184315__184318.call(this,x,y);
case  3 :
return G__184315__184319.call(this,x,y,z);
default:
return G__184315__184320.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__184315.cljs$lang$maxFixedArity = 3;
G__184315.cljs$lang$applyTo = G__184315__184320.cljs$lang$applyTo;
return G__184315;
})()
});
var juxt__184311 = (function (f,g){
return (function() {
var G__184324 = null;
var G__184324__184325 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__184324__184326 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__184324__184327 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__184324__184328 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__184324__184329 = (function() { 
var G__184331__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__184331 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__184331__delegate.call(this, x, y, z, args);
};
G__184331.cljs$lang$maxFixedArity = 3;
G__184331.cljs$lang$applyTo = (function (arglist__184332){
var x = cljs.core.first(arglist__184332);
var y = cljs.core.first(cljs.core.next(arglist__184332));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184332)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__184332)));
return G__184331__delegate.call(this, x, y, z, args);
});
return G__184331;
})()
;
G__184324 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__184324__184325.call(this);
case  1 :
return G__184324__184326.call(this,x);
case  2 :
return G__184324__184327.call(this,x,y);
case  3 :
return G__184324__184328.call(this,x,y,z);
default:
return G__184324__184329.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__184324.cljs$lang$maxFixedArity = 3;
G__184324.cljs$lang$applyTo = G__184324__184329.cljs$lang$applyTo;
return G__184324;
})()
});
var juxt__184312 = (function (f,g,h){
return (function() {
var G__184333 = null;
var G__184333__184334 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__184333__184335 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__184333__184336 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__184333__184337 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__184333__184338 = (function() { 
var G__184340__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__184340 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__184340__delegate.call(this, x, y, z, args);
};
G__184340.cljs$lang$maxFixedArity = 3;
G__184340.cljs$lang$applyTo = (function (arglist__184341){
var x = cljs.core.first(arglist__184341);
var y = cljs.core.first(cljs.core.next(arglist__184341));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184341)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__184341)));
return G__184340__delegate.call(this, x, y, z, args);
});
return G__184340;
})()
;
G__184333 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__184333__184334.call(this);
case  1 :
return G__184333__184335.call(this,x);
case  2 :
return G__184333__184336.call(this,x,y);
case  3 :
return G__184333__184337.call(this,x,y,z);
default:
return G__184333__184338.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__184333.cljs$lang$maxFixedArity = 3;
G__184333.cljs$lang$applyTo = G__184333__184338.cljs$lang$applyTo;
return G__184333;
})()
});
var juxt__184313 = (function() { 
var G__184342__delegate = function (f,g,h,fs){
var fs__184309 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__184343 = null;
var G__184343__184344 = (function (){
return cljs.core.reduce.call(null,(function (p1__184292_SHARP_,p2__184293_SHARP_){
return cljs.core.conj.call(null,p1__184292_SHARP_,p2__184293_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__184309);
});
var G__184343__184345 = (function (x){
return cljs.core.reduce.call(null,(function (p1__184294_SHARP_,p2__184295_SHARP_){
return cljs.core.conj.call(null,p1__184294_SHARP_,p2__184295_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__184309);
});
var G__184343__184346 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__184296_SHARP_,p2__184297_SHARP_){
return cljs.core.conj.call(null,p1__184296_SHARP_,p2__184297_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__184309);
});
var G__184343__184347 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__184298_SHARP_,p2__184299_SHARP_){
return cljs.core.conj.call(null,p1__184298_SHARP_,p2__184299_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__184309);
});
var G__184343__184348 = (function() { 
var G__184350__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__184300_SHARP_,p2__184301_SHARP_){
return cljs.core.conj.call(null,p1__184300_SHARP_,cljs.core.apply.call(null,p2__184301_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__184309);
};
var G__184350 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__184350__delegate.call(this, x, y, z, args);
};
G__184350.cljs$lang$maxFixedArity = 3;
G__184350.cljs$lang$applyTo = (function (arglist__184351){
var x = cljs.core.first(arglist__184351);
var y = cljs.core.first(cljs.core.next(arglist__184351));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184351)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__184351)));
return G__184350__delegate.call(this, x, y, z, args);
});
return G__184350;
})()
;
G__184343 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__184343__184344.call(this);
case  1 :
return G__184343__184345.call(this,x);
case  2 :
return G__184343__184346.call(this,x,y);
case  3 :
return G__184343__184347.call(this,x,y,z);
default:
return G__184343__184348.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__184343.cljs$lang$maxFixedArity = 3;
G__184343.cljs$lang$applyTo = G__184343__184348.cljs$lang$applyTo;
return G__184343;
})()
};
var G__184342 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__184342__delegate.call(this, f, g, h, fs);
};
G__184342.cljs$lang$maxFixedArity = 3;
G__184342.cljs$lang$applyTo = (function (arglist__184352){
var f = cljs.core.first(arglist__184352);
var g = cljs.core.first(cljs.core.next(arglist__184352));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184352)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__184352)));
return G__184342__delegate.call(this, f, g, h, fs);
});
return G__184342;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__184310.call(this,f);
case  2 :
return juxt__184311.call(this,f,g);
case  3 :
return juxt__184312.call(this,f,g,h);
default:
return juxt__184313.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__184313.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__184354 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__184357 = cljs.core.next.call(null,coll);
coll = G__184357;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__184355 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____184353 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____184353))
{return (n > 0);
} else
{return and__3546__auto____184353;
}
})()))
{{
var G__184358 = (n - 1);
var G__184359 = cljs.core.next.call(null,coll);
n = G__184358;
coll = G__184359;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__184354.call(this,n);
case  2 :
return dorun__184355.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__184360 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__184361 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__184360.call(this,n);
case  2 :
return doall__184361.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__184363 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__184363),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__184363),1)))
{return cljs.core.first.call(null,matches__184363);
} else
{return cljs.core.vec.call(null,matches__184363);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__184364 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__184364)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__184364),1)))
{return cljs.core.first.call(null,matches__184364);
} else
{return cljs.core.vec.call(null,matches__184364);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__184365 = cljs.core.re_find.call(null,re,s);
var match_idx__184366 = s.search(re);
var match_str__184367 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__184365))?cljs.core.first.call(null,match_data__184365):match_data__184365);
var post_match__184368 = cljs.core.subs.call(null,s,(match_idx__184366 + cljs.core.count.call(null,match_str__184367)));

if(cljs.core.truth_(match_data__184365))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__184365,re_seq.call(null,re,post_match__184368));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__184369_SHARP_){
return print_one.call(null,p1__184369_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____184370 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____184370))
{var and__3546__auto____184374 = (function (){var x__445__auto____184371 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____184372 = x__445__auto____184371;

if(cljs.core.truth_(and__3546__auto____184372))
{var and__3546__auto____184373 = x__445__auto____184371.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____184373))
{return cljs.core.not.call(null,x__445__auto____184371.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____184373;
}
} else
{return and__3546__auto____184372;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____184371);
}
})();

if(cljs.core.truth_(and__3546__auto____184374))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____184374;
}
} else
{return and__3546__auto____184370;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____184375 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____184376 = x__445__auto____184375;

if(cljs.core.truth_(and__3546__auto____184376))
{var and__3546__auto____184377 = x__445__auto____184375.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____184377))
{return cljs.core.not.call(null,x__445__auto____184375.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____184377;
}
} else
{return and__3546__auto____184376;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____184375);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__184378 = cljs.core.first.call(null,objs);
var sb__184379 = (new goog.string.StringBuffer());

var G__184380__184381 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__184380__184381))
{var obj__184382 = cljs.core.first.call(null,G__184380__184381);
var G__184380__184383 = G__184380__184381;

while(true){
if(cljs.core.truth_((obj__184382 === first_obj__184378)))
{} else
{sb__184379.append(" ");
}
var G__184384__184385 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__184382,opts));

if(cljs.core.truth_(G__184384__184385))
{var string__184386 = cljs.core.first.call(null,G__184384__184385);
var G__184384__184387 = G__184384__184385;

while(true){
sb__184379.append(string__184386);
var temp__3698__auto____184388 = cljs.core.next.call(null,G__184384__184387);

if(cljs.core.truth_(temp__3698__auto____184388))
{var G__184384__184389 = temp__3698__auto____184388;

{
var G__184392 = cljs.core.first.call(null,G__184384__184389);
var G__184393 = G__184384__184389;
string__184386 = G__184392;
G__184384__184387 = G__184393;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____184390 = cljs.core.next.call(null,G__184380__184383);

if(cljs.core.truth_(temp__3698__auto____184390))
{var G__184380__184391 = temp__3698__auto____184390;

{
var G__184394 = cljs.core.first.call(null,G__184380__184391);
var G__184395 = G__184380__184391;
obj__184382 = G__184394;
G__184380__184383 = G__184395;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__184379);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__184396 = cljs.core.first.call(null,objs);

var G__184397__184398 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__184397__184398))
{var obj__184399 = cljs.core.first.call(null,G__184397__184398);
var G__184397__184400 = G__184397__184398;

while(true){
if(cljs.core.truth_((obj__184399 === first_obj__184396)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__184401__184402 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__184399,opts));

if(cljs.core.truth_(G__184401__184402))
{var string__184403 = cljs.core.first.call(null,G__184401__184402);
var G__184401__184404 = G__184401__184402;

while(true){
cljs.core.string_print.call(null,string__184403);
var temp__3698__auto____184405 = cljs.core.next.call(null,G__184401__184404);

if(cljs.core.truth_(temp__3698__auto____184405))
{var G__184401__184406 = temp__3698__auto____184405;

{
var G__184409 = cljs.core.first.call(null,G__184401__184406);
var G__184410 = G__184401__184406;
string__184403 = G__184409;
G__184401__184404 = G__184410;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____184407 = cljs.core.next.call(null,G__184397__184400);

if(cljs.core.truth_(temp__3698__auto____184407))
{var G__184397__184408 = temp__3698__auto____184407;

{
var G__184411 = cljs.core.first.call(null,G__184397__184408);
var G__184412 = G__184397__184408;
obj__184399 = G__184411;
G__184397__184400 = G__184412;
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
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__184413){
var objs = cljs.core.seq( arglist__184413 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__184414){
var objs = cljs.core.seq( arglist__184414 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__184415){
var objs = cljs.core.seq( arglist__184415 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__184416){
var objs = cljs.core.seq( arglist__184416 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__184417){
var objs = cljs.core.seq( arglist__184417 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__184418 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__184418,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____184419 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____184419))
{var nspc__184420 = temp__3698__auto____184419;

return cljs.core.str.call(null,nspc__184420,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____184421 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____184421))
{var nspc__184422 = temp__3698__auto____184421;

return cljs.core.str.call(null,nspc__184422,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__184423 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__184423,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__184424 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__184425 = this;
var G__184426__184427 = cljs.core.seq.call(null,this__184425.watches);

if(cljs.core.truth_(G__184426__184427))
{var G__184429__184431 = cljs.core.first.call(null,G__184426__184427);
var vec__184430__184432 = G__184429__184431;
var key__184433 = cljs.core.nth.call(null,vec__184430__184432,0,null);
var f__184434 = cljs.core.nth.call(null,vec__184430__184432,1,null);
var G__184426__184435 = G__184426__184427;

var G__184429__184436 = G__184429__184431;
var G__184426__184437 = G__184426__184435;

while(true){
var vec__184438__184439 = G__184429__184436;
var key__184440 = cljs.core.nth.call(null,vec__184438__184439,0,null);
var f__184441 = cljs.core.nth.call(null,vec__184438__184439,1,null);
var G__184426__184442 = G__184426__184437;

f__184441.call(null,key__184440,this$,oldval,newval);
var temp__3698__auto____184443 = cljs.core.next.call(null,G__184426__184442);

if(cljs.core.truth_(temp__3698__auto____184443))
{var G__184426__184444 = temp__3698__auto____184443;

{
var G__184451 = cljs.core.first.call(null,G__184426__184444);
var G__184452 = G__184426__184444;
G__184429__184436 = G__184451;
G__184426__184437 = G__184452;
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
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__184445 = this;
return this$.watches = cljs.core.assoc.call(null,this__184445.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__184446 = this;
return this$.watches = cljs.core.dissoc.call(null,this__184446.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__184447 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__184447.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__184448 = this;
return this__184448.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__184449 = this;
return this__184449.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__184450 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__184459 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__184460 = (function() { 
var G__184462__delegate = function (x,p__184453){
var map__184454__184455 = p__184453;
var map__184454__184456 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__184454__184455))?cljs.core.apply.call(null,cljs.core.hash_map,map__184454__184455):map__184454__184455);
var validator__184457 = cljs.core.get.call(null,map__184454__184456,"﷐'validator");
var meta__184458 = cljs.core.get.call(null,map__184454__184456,"﷐'meta");

return (new cljs.core.Atom(x,meta__184458,validator__184457,null));
};
var G__184462 = function (x,var_args){
var p__184453 = null;
if (goog.isDef(var_args)) {
  p__184453 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__184462__delegate.call(this, x, p__184453);
};
G__184462.cljs$lang$maxFixedArity = 1;
G__184462.cljs$lang$applyTo = (function (arglist__184463){
var x = cljs.core.first(arglist__184463);
var p__184453 = cljs.core.rest(arglist__184463);
return G__184462__delegate.call(this, x, p__184453);
});
return G__184462;
})()
;
atom = function(x,var_args){
var p__184453 = var_args;
switch(arguments.length){
case  1 :
return atom__184459.call(this,x);
default:
return atom__184460.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__184460.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____184464 = a.validator;

if(cljs.core.truth_(temp__3698__auto____184464))
{var validate__184465 = temp__3698__auto____184464;

if(cljs.core.truth_(validate__184465.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__184466 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__184466,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___184467 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___184468 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___184469 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___184470 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___184471 = (function() { 
var G__184473__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__184473 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__184473__delegate.call(this, a, f, x, y, z, more);
};
G__184473.cljs$lang$maxFixedArity = 5;
G__184473.cljs$lang$applyTo = (function (arglist__184474){
var a = cljs.core.first(arglist__184474);
var f = cljs.core.first(cljs.core.next(arglist__184474));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__184474)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__184474))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__184474)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__184474)))));
return G__184473__delegate.call(this, a, f, x, y, z, more);
});
return G__184473;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___184467.call(this,a,f);
case  3 :
return swap_BANG___184468.call(this,a,f,x);
case  4 :
return swap_BANG___184469.call(this,a,f,x,y);
case  5 :
return swap_BANG___184470.call(this,a,f,x,y,z);
default:
return swap_BANG___184471.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___184471.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__184475){
var iref = cljs.core.first(arglist__184475);
var f = cljs.core.first(cljs.core.next(arglist__184475));
var args = cljs.core.rest(cljs.core.next(arglist__184475));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__184476 = (function (){
return gensym.call(null,"G__");
});
var gensym__184477 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__184476.call(this);
case  1 :
return gensym__184477.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__184479 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__184479.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__184480 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__184480.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__184480.state,this__184480.f);
}
return cljs.core.deref.call(null,this__184480.state);
});
cljs.core.Delay;
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__184481){
var body = cljs.core.seq( arglist__184481 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__184482__184483 = options;
var map__184482__184484 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__184482__184483))?cljs.core.apply.call(null,cljs.core.hash_map,map__184482__184483):map__184482__184483);
var keywordize_keys__184485 = cljs.core.get.call(null,map__184482__184484,"﷐'keywordize-keys");
var keyfn__184486 = (cljs.core.truth_(keywordize_keys__184485)?cljs.core.keyword:cljs.core.str);
var f__184492 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____184491 = (function iter__184487(s__184488){
return (new cljs.core.LazySeq(null,false,(function (){
var s__184488__184489 = s__184488;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__184488__184489)))
{var k__184490 = cljs.core.first.call(null,s__184488__184489);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__184486.call(null,k__184490),thisfn.call(null,(x[k__184490]))]),iter__184487.call(null,cljs.core.rest.call(null,s__184488__184489)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____184491.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__184492.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__184493){
var x = cljs.core.first(arglist__184493);
var options = cljs.core.rest(arglist__184493);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__184494 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__184498__delegate = function (args){
var temp__3695__auto____184495 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__184494),args);

if(cljs.core.truth_(temp__3695__auto____184495))
{var v__184496 = temp__3695__auto____184495;

return v__184496;
} else
{var ret__184497 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__184494,cljs.core.assoc,args,ret__184497);
return ret__184497;
}
};
var G__184498 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__184498__delegate.call(this, args);
};
G__184498.cljs$lang$maxFixedArity = 0;
G__184498.cljs$lang$applyTo = (function (arglist__184499){
var args = cljs.core.seq( arglist__184499 );;
return G__184498__delegate.call(this, args);
});
return G__184498;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__184501 = (function (f){
while(true){
var ret__184500 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__184500)))
{{
var G__184504 = ret__184500;
f = G__184504;
continue;
}
} else
{return ret__184500;
}
break;
}
});
var trampoline__184502 = (function() { 
var G__184505__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__184505 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__184505__delegate.call(this, f, args);
};
G__184505.cljs$lang$maxFixedArity = 1;
G__184505.cljs$lang$applyTo = (function (arglist__184506){
var f = cljs.core.first(arglist__184506);
var args = cljs.core.rest(arglist__184506);
return G__184505__delegate.call(this, f, args);
});
return G__184505;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__184501.call(this,f);
default:
return trampoline__184502.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__184502.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__184507 = (function (){
return rand.call(null,1);
});
var rand__184508 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__184507.call(this);
case  1 :
return rand__184508.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__184510 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__184510,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__184510,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___184519 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___184520 = (function (h,child,parent){
var or__3548__auto____184511 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____184511))
{return or__3548__auto____184511;
} else
{var or__3548__auto____184512 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____184512))
{return or__3548__auto____184512;
} else
{var and__3546__auto____184513 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____184513))
{var and__3546__auto____184514 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____184514))
{var and__3546__auto____184515 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____184515))
{var ret__184516 = true;
var i__184517 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____184518 = cljs.core.not.call(null,ret__184516);

if(cljs.core.truth_(or__3548__auto____184518))
{return or__3548__auto____184518;
} else
{return cljs.core._EQ_.call(null,i__184517,cljs.core.count.call(null,parent));
}
})()))
{return ret__184516;
} else
{{
var G__184522 = isa_QMARK_.call(null,h,child.call(null,i__184517),parent.call(null,i__184517));
var G__184523 = (i__184517 + 1);
ret__184516 = G__184522;
i__184517 = G__184523;
continue;
}
}
break;
}
} else
{return and__3546__auto____184515;
}
} else
{return and__3546__auto____184514;
}
} else
{return and__3546__auto____184513;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___184519.call(this,h,child);
case  3 :
return isa_QMARK___184520.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__184524 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__184525 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__184524.call(this,h);
case  2 :
return parents__184525.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__184527 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__184528 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__184527.call(this,h);
case  2 :
return ancestors__184528.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__184530 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__184531 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__184530.call(this,h);
case  2 :
return descendants__184531.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__184541 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__184542 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__184536 = "﷐'parents".call(null,h);
var td__184537 = "﷐'descendants".call(null,h);
var ta__184538 = "﷐'ancestors".call(null,h);
var tf__184539 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____184540 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__184536.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__184538.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__184538.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__184536,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__184539.call(null,"﷐'ancestors".call(null,h),tag,td__184537,parent,ta__184538),"﷐'descendants":tf__184539.call(null,"﷐'descendants".call(null,h),parent,ta__184538,tag,td__184537)});
})());

if(cljs.core.truth_(or__3548__auto____184540))
{return or__3548__auto____184540;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__184541.call(this,h,tag);
case  3 :
return derive__184542.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__184548 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__184549 = (function (h,tag,parent){
var parentMap__184544 = "﷐'parents".call(null,h);
var childsParents__184545 = (cljs.core.truth_(parentMap__184544.call(null,tag))?cljs.core.disj.call(null,parentMap__184544.call(null,tag),parent):cljs.core.set([]));
var newParents__184546 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__184545))?cljs.core.assoc.call(null,parentMap__184544,tag,childsParents__184545):cljs.core.dissoc.call(null,parentMap__184544,tag));
var deriv_seq__184547 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__184533_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__184533_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__184533_SHARP_),cljs.core.second.call(null,p1__184533_SHARP_)));
}),cljs.core.seq.call(null,newParents__184546)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__184544.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__184534_SHARP_,p2__184535_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__184534_SHARP_,p2__184535_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__184547));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__184548.call(this,h,tag);
case  3 :
return underive__184549.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__184551 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____184553 = (cljs.core.truth_((function (){var and__3546__auto____184552 = xprefs__184551;

if(cljs.core.truth_(and__3546__auto____184552))
{return xprefs__184551.call(null,y);
} else
{return and__3546__auto____184552;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____184553))
{return or__3548__auto____184553;
} else
{var or__3548__auto____184555 = (function (){var ps__184554 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__184554) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__184554),prefer_table)))
{} else
{}
{
var G__184558 = cljs.core.rest.call(null,ps__184554);
ps__184554 = G__184558;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____184555))
{return or__3548__auto____184555;
} else
{var or__3548__auto____184557 = (function (){var ps__184556 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__184556) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__184556),y,prefer_table)))
{} else
{}
{
var G__184559 = cljs.core.rest.call(null,ps__184556);
ps__184556 = G__184559;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____184557))
{return or__3548__auto____184557;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____184560 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____184560))
{return or__3548__auto____184560;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__184569 = cljs.core.reduce.call(null,(function (be,p__184561){
var vec__184562__184563 = p__184561;
var k__184564 = cljs.core.nth.call(null,vec__184562__184563,0,null);
var ___184565 = cljs.core.nth.call(null,vec__184562__184563,1,null);
var e__184566 = vec__184562__184563;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__184564)))
{var be2__184568 = (cljs.core.truth_((function (){var or__3548__auto____184567 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____184567))
{return or__3548__auto____184567;
} else
{return cljs.core.dominates.call(null,k__184564,cljs.core.first.call(null,be),prefer_table);
}
})())?e__184566:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__184568),k__184564,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__184564," and ",cljs.core.first.call(null,be2__184568),", and neither is preferred")));
}
return be2__184568;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__184569))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__184569));
return cljs.core.second.call(null,best_entry__184569);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____184570 = mf;

if(cljs.core.truth_(and__3546__auto____184570))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____184570;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____184571 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____184571))
{return or__3548__auto____184571;
} else
{var or__3548__auto____184572 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____184572))
{return or__3548__auto____184572;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____184573 = mf;

if(cljs.core.truth_(and__3546__auto____184573))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____184573;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____184574 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____184574))
{return or__3548__auto____184574;
} else
{var or__3548__auto____184575 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____184575))
{return or__3548__auto____184575;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____184576 = mf;

if(cljs.core.truth_(and__3546__auto____184576))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____184576;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____184577 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____184577))
{return or__3548__auto____184577;
} else
{var or__3548__auto____184578 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____184578))
{return or__3548__auto____184578;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____184579 = mf;

if(cljs.core.truth_(and__3546__auto____184579))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____184579;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____184580 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____184580))
{return or__3548__auto____184580;
} else
{var or__3548__auto____184581 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____184581))
{return or__3548__auto____184581;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____184582 = mf;

if(cljs.core.truth_(and__3546__auto____184582))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____184582;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____184583 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____184583))
{return or__3548__auto____184583;
} else
{var or__3548__auto____184584 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____184584))
{return or__3548__auto____184584;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____184585 = mf;

if(cljs.core.truth_(and__3546__auto____184585))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____184585;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____184586 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____184586))
{return or__3548__auto____184586;
} else
{var or__3548__auto____184587 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____184587))
{return or__3548__auto____184587;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____184588 = mf;

if(cljs.core.truth_(and__3546__auto____184588))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____184588;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____184589 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____184589))
{return or__3548__auto____184589;
} else
{var or__3548__auto____184590 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____184590))
{return or__3548__auto____184590;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____184591 = mf;

if(cljs.core.truth_(and__3546__auto____184591))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____184591;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____184592 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____184592))
{return or__3548__auto____184592;
} else
{var or__3548__auto____184593 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____184593))
{return or__3548__auto____184593;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__184594 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__184595 = cljs.core._get_method.call(null,mf,dispatch_val__184594);

if(cljs.core.truth_(target_fn__184595))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__184594)));
}
return cljs.core.apply.call(null,target_fn__184595,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__184596 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__184597 = this;
cljs.core.swap_BANG_.call(null,this__184597.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__184597.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__184597.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__184597.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__184598 = this;
cljs.core.swap_BANG_.call(null,this__184598.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__184598.method_cache,this__184598.method_table,this__184598.cached_hierarchy,this__184598.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__184599 = this;
cljs.core.swap_BANG_.call(null,this__184599.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__184599.method_cache,this__184599.method_table,this__184599.cached_hierarchy,this__184599.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__184600 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__184600.cached_hierarchy),cljs.core.deref.call(null,this__184600.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__184600.method_cache,this__184600.method_table,this__184600.cached_hierarchy,this__184600.hierarchy);
}
var temp__3695__auto____184601 = cljs.core.deref.call(null,this__184600.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____184601))
{var target_fn__184602 = temp__3695__auto____184601;

return target_fn__184602;
} else
{var temp__3695__auto____184603 = cljs.core.find_and_cache_best_method.call(null,this__184600.name,dispatch_val,this__184600.hierarchy,this__184600.method_table,this__184600.prefer_table,this__184600.method_cache,this__184600.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____184603))
{var target_fn__184604 = temp__3695__auto____184603;

return target_fn__184604;
} else
{return cljs.core.deref.call(null,this__184600.method_table).call(null,this__184600.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__184605 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__184605.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__184605.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__184605.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__184605.method_cache,this__184605.method_table,this__184605.cached_hierarchy,this__184605.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__184606 = this;
return cljs.core.deref.call(null,this__184606.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__184607 = this;
return cljs.core.deref.call(null,this__184607.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__184608 = this;
return cljs.core.do_dispatch.call(null,mf,this__184608.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__184609__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__184609 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__184609__delegate.call(this, _, args);
};
G__184609.cljs$lang$maxFixedArity = 1;
G__184609.cljs$lang$applyTo = (function (arglist__184610){
var _ = cljs.core.first(arglist__184610);
var args = cljs.core.rest(arglist__184610);
return G__184609__delegate.call(this, _, args);
});
return G__184609;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
