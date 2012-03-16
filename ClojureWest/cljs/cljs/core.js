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
var or__3548__auto____19247 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____19247))
{return or__3548__auto____19247;
} else
{var or__3548__auto____19248 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____19248))
{return or__3548__auto____19248;
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
var _invoke__19312 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____19249 = this$;

if(cljs.core.truth_(and__3546__auto____19249))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19249;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____19250 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19250))
{return or__3548__auto____19250;
} else
{var or__3548__auto____19251 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19251))
{return or__3548__auto____19251;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__19313 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____19252 = this$;

if(cljs.core.truth_(and__3546__auto____19252))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19252;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____19253 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19253))
{return or__3548__auto____19253;
} else
{var or__3548__auto____19254 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19254))
{return or__3548__auto____19254;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__19314 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____19255 = this$;

if(cljs.core.truth_(and__3546__auto____19255))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19255;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____19256 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19256))
{return or__3548__auto____19256;
} else
{var or__3548__auto____19257 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19257))
{return or__3548__auto____19257;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__19315 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____19258 = this$;

if(cljs.core.truth_(and__3546__auto____19258))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19258;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____19259 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19259))
{return or__3548__auto____19259;
} else
{var or__3548__auto____19260 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19260))
{return or__3548__auto____19260;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__19316 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____19261 = this$;

if(cljs.core.truth_(and__3546__auto____19261))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19261;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____19262 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19262))
{return or__3548__auto____19262;
} else
{var or__3548__auto____19263 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19263))
{return or__3548__auto____19263;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__19317 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____19264 = this$;

if(cljs.core.truth_(and__3546__auto____19264))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19264;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____19265 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19265))
{return or__3548__auto____19265;
} else
{var or__3548__auto____19266 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19266))
{return or__3548__auto____19266;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__19318 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____19267 = this$;

if(cljs.core.truth_(and__3546__auto____19267))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19267;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____19268 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19268))
{return or__3548__auto____19268;
} else
{var or__3548__auto____19269 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19269))
{return or__3548__auto____19269;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__19319 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____19270 = this$;

if(cljs.core.truth_(and__3546__auto____19270))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19270;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____19271 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19271))
{return or__3548__auto____19271;
} else
{var or__3548__auto____19272 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19272))
{return or__3548__auto____19272;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__19320 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____19273 = this$;

if(cljs.core.truth_(and__3546__auto____19273))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19273;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____19274 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19274))
{return or__3548__auto____19274;
} else
{var or__3548__auto____19275 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19275))
{return or__3548__auto____19275;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__19321 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____19276 = this$;

if(cljs.core.truth_(and__3546__auto____19276))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19276;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____19277 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19277))
{return or__3548__auto____19277;
} else
{var or__3548__auto____19278 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19278))
{return or__3548__auto____19278;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__19322 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____19279 = this$;

if(cljs.core.truth_(and__3546__auto____19279))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19279;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____19280 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19280))
{return or__3548__auto____19280;
} else
{var or__3548__auto____19281 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19281))
{return or__3548__auto____19281;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__19323 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____19282 = this$;

if(cljs.core.truth_(and__3546__auto____19282))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19282;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____19283 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19283))
{return or__3548__auto____19283;
} else
{var or__3548__auto____19284 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19284))
{return or__3548__auto____19284;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__19324 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____19285 = this$;

if(cljs.core.truth_(and__3546__auto____19285))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19285;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____19286 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19286))
{return or__3548__auto____19286;
} else
{var or__3548__auto____19287 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19287))
{return or__3548__auto____19287;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__19325 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____19288 = this$;

if(cljs.core.truth_(and__3546__auto____19288))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19288;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____19289 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19289))
{return or__3548__auto____19289;
} else
{var or__3548__auto____19290 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19290))
{return or__3548__auto____19290;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__19326 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____19291 = this$;

if(cljs.core.truth_(and__3546__auto____19291))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19291;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____19292 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19292))
{return or__3548__auto____19292;
} else
{var or__3548__auto____19293 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19293))
{return or__3548__auto____19293;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__19327 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____19294 = this$;

if(cljs.core.truth_(and__3546__auto____19294))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19294;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____19295 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19295))
{return or__3548__auto____19295;
} else
{var or__3548__auto____19296 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19296))
{return or__3548__auto____19296;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__19328 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____19297 = this$;

if(cljs.core.truth_(and__3546__auto____19297))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19297;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____19298 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19298))
{return or__3548__auto____19298;
} else
{var or__3548__auto____19299 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19299))
{return or__3548__auto____19299;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__19329 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____19300 = this$;

if(cljs.core.truth_(and__3546__auto____19300))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19300;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____19301 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19301))
{return or__3548__auto____19301;
} else
{var or__3548__auto____19302 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19302))
{return or__3548__auto____19302;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19330 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____19303 = this$;

if(cljs.core.truth_(and__3546__auto____19303))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19303;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____19304 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19304))
{return or__3548__auto____19304;
} else
{var or__3548__auto____19305 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19305))
{return or__3548__auto____19305;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__19331 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____19306 = this$;

if(cljs.core.truth_(and__3546__auto____19306))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19306;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____19307 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19307))
{return or__3548__auto____19307;
} else
{var or__3548__auto____19308 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19308))
{return or__3548__auto____19308;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__19332 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____19309 = this$;

if(cljs.core.truth_(and__3546__auto____19309))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19309;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____19310 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19310))
{return or__3548__auto____19310;
} else
{var or__3548__auto____19311 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19311))
{return or__3548__auto____19311;
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
return _invoke__19312.call(this,this$);
case  2 :
return _invoke__19313.call(this,this$,a);
case  3 :
return _invoke__19314.call(this,this$,a,b);
case  4 :
return _invoke__19315.call(this,this$,a,b,c);
case  5 :
return _invoke__19316.call(this,this$,a,b,c,d);
case  6 :
return _invoke__19317.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__19318.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__19319.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__19320.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__19321.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__19322.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__19323.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__19324.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__19325.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__19326.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__19327.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__19328.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__19329.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__19330.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__19331.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__19332.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____19334 = coll;

if(cljs.core.truth_(and__3546__auto____19334))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____19334;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____19335 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19335))
{return or__3548__auto____19335;
} else
{var or__3548__auto____19336 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____19336))
{return or__3548__auto____19336;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____19337 = coll;

if(cljs.core.truth_(and__3546__auto____19337))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____19337;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____19338 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19338))
{return or__3548__auto____19338;
} else
{var or__3548__auto____19339 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____19339))
{return or__3548__auto____19339;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____19340 = coll;

if(cljs.core.truth_(and__3546__auto____19340))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____19340;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____19341 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19341))
{return or__3548__auto____19341;
} else
{var or__3548__auto____19342 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____19342))
{return or__3548__auto____19342;
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
var _nth__19349 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____19343 = coll;

if(cljs.core.truth_(and__3546__auto____19343))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____19343;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____19344 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19344))
{return or__3548__auto____19344;
} else
{var or__3548__auto____19345 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____19345))
{return or__3548__auto____19345;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__19350 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____19346 = coll;

if(cljs.core.truth_(and__3546__auto____19346))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____19346;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____19347 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19347))
{return or__3548__auto____19347;
} else
{var or__3548__auto____19348 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____19348))
{return or__3548__auto____19348;
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
return _nth__19349.call(this,coll,n);
case  3 :
return _nth__19350.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____19352 = coll;

if(cljs.core.truth_(and__3546__auto____19352))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____19352;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____19353 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19353))
{return or__3548__auto____19353;
} else
{var or__3548__auto____19354 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____19354))
{return or__3548__auto____19354;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____19355 = coll;

if(cljs.core.truth_(and__3546__auto____19355))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____19355;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____19356 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19356))
{return or__3548__auto____19356;
} else
{var or__3548__auto____19357 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____19357))
{return or__3548__auto____19357;
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
var _lookup__19364 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____19358 = o;

if(cljs.core.truth_(and__3546__auto____19358))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____19358;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____19359 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19359))
{return or__3548__auto____19359;
} else
{var or__3548__auto____19360 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____19360))
{return or__3548__auto____19360;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__19365 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____19361 = o;

if(cljs.core.truth_(and__3546__auto____19361))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____19361;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____19362 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19362))
{return or__3548__auto____19362;
} else
{var or__3548__auto____19363 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____19363))
{return or__3548__auto____19363;
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
return _lookup__19364.call(this,o,k);
case  3 :
return _lookup__19365.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____19367 = coll;

if(cljs.core.truth_(and__3546__auto____19367))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____19367;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____19368 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19368))
{return or__3548__auto____19368;
} else
{var or__3548__auto____19369 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____19369))
{return or__3548__auto____19369;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____19370 = coll;

if(cljs.core.truth_(and__3546__auto____19370))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____19370;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____19371 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19371))
{return or__3548__auto____19371;
} else
{var or__3548__auto____19372 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____19372))
{return or__3548__auto____19372;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____19373 = coll;

if(cljs.core.truth_(and__3546__auto____19373))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____19373;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____19374 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19374))
{return or__3548__auto____19374;
} else
{var or__3548__auto____19375 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____19375))
{return or__3548__auto____19375;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____19376 = coll;

if(cljs.core.truth_(and__3546__auto____19376))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____19376;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____19377 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19377))
{return or__3548__auto____19377;
} else
{var or__3548__auto____19378 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____19378))
{return or__3548__auto____19378;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____19379 = coll;

if(cljs.core.truth_(and__3546__auto____19379))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____19379;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____19380 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19380))
{return or__3548__auto____19380;
} else
{var or__3548__auto____19381 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____19381))
{return or__3548__auto____19381;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____19382 = coll;

if(cljs.core.truth_(and__3546__auto____19382))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____19382;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____19383 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19383))
{return or__3548__auto____19383;
} else
{var or__3548__auto____19384 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____19384))
{return or__3548__auto____19384;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____19385 = coll;

if(cljs.core.truth_(and__3546__auto____19385))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____19385;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____19386 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19386))
{return or__3548__auto____19386;
} else
{var or__3548__auto____19387 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____19387))
{return or__3548__auto____19387;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____19388 = o;

if(cljs.core.truth_(and__3546__auto____19388))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____19388;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____19389 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19389))
{return or__3548__auto____19389;
} else
{var or__3548__auto____19390 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____19390))
{return or__3548__auto____19390;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____19391 = o;

if(cljs.core.truth_(and__3546__auto____19391))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____19391;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____19392 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19392))
{return or__3548__auto____19392;
} else
{var or__3548__auto____19393 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____19393))
{return or__3548__auto____19393;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____19394 = o;

if(cljs.core.truth_(and__3546__auto____19394))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____19394;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____19395 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19395))
{return or__3548__auto____19395;
} else
{var or__3548__auto____19396 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____19396))
{return or__3548__auto____19396;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____19397 = o;

if(cljs.core.truth_(and__3546__auto____19397))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____19397;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____19398 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19398))
{return or__3548__auto____19398;
} else
{var or__3548__auto____19399 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____19399))
{return or__3548__auto____19399;
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
var _reduce__19406 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____19400 = coll;

if(cljs.core.truth_(and__3546__auto____19400))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____19400;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____19401 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19401))
{return or__3548__auto____19401;
} else
{var or__3548__auto____19402 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____19402))
{return or__3548__auto____19402;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__19407 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____19403 = coll;

if(cljs.core.truth_(and__3546__auto____19403))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____19403;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____19404 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19404))
{return or__3548__auto____19404;
} else
{var or__3548__auto____19405 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____19405))
{return or__3548__auto____19405;
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
return _reduce__19406.call(this,coll,f);
case  3 :
return _reduce__19407.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____19409 = o;

if(cljs.core.truth_(and__3546__auto____19409))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____19409;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____19410 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19410))
{return or__3548__auto____19410;
} else
{var or__3548__auto____19411 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____19411))
{return or__3548__auto____19411;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____19412 = o;

if(cljs.core.truth_(and__3546__auto____19412))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____19412;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____19413 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19413))
{return or__3548__auto____19413;
} else
{var or__3548__auto____19414 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____19414))
{return or__3548__auto____19414;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____19415 = o;

if(cljs.core.truth_(and__3546__auto____19415))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____19415;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____19416 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19416))
{return or__3548__auto____19416;
} else
{var or__3548__auto____19417 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____19417))
{return or__3548__auto____19417;
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
if(cljs.core.truth_((function (){var and__3546__auto____19418 = o;

if(cljs.core.truth_(and__3546__auto____19418))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____19418;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____19419 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19419))
{return or__3548__auto____19419;
} else
{var or__3548__auto____19420 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____19420))
{return or__3548__auto____19420;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____19421 = d;

if(cljs.core.truth_(and__3546__auto____19421))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____19421;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____19422 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____19422))
{return or__3548__auto____19422;
} else
{var or__3548__auto____19423 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____19423))
{return or__3548__auto____19423;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____19424 = this$;

if(cljs.core.truth_(and__3546__auto____19424))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____19424;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____19425 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19425))
{return or__3548__auto____19425;
} else
{var or__3548__auto____19426 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____19426))
{return or__3548__auto____19426;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____19427 = this$;

if(cljs.core.truth_(and__3546__auto____19427))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____19427;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____19428 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19428))
{return or__3548__auto____19428;
} else
{var or__3548__auto____19429 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____19429))
{return or__3548__auto____19429;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____19430 = this$;

if(cljs.core.truth_(and__3546__auto____19430))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____19430;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____19431 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19431))
{return or__3548__auto____19431;
} else
{var or__3548__auto____19432 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____19432))
{return or__3548__auto____19432;
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
var G__19433 = null;
var G__19433__19434 = (function (o,k){
return null;
});
var G__19433__19435 = (function (o,k,not_found){
return not_found;
});
G__19433 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__19433__19434.call(this,o,k);
case  3 :
return G__19433__19435.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19433;
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
var G__19437 = null;
var G__19437__19438 = (function (_,f){
return f.call(null);
});
var G__19437__19439 = (function (_,f,start){
return start;
});
G__19437 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__19437__19438.call(this,_,f);
case  3 :
return G__19437__19439.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19437;
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
var G__19441 = null;
var G__19441__19442 = (function (_,n){
return null;
});
var G__19441__19443 = (function (_,n,not_found){
return not_found;
});
G__19441 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__19441__19442.call(this,_,n);
case  3 :
return G__19441__19443.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19441;
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
var ci_reduce__19451 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__19445 = cljs.core._nth.call(null,cicoll,0);
var n__19446 = 1;

while(true){
if(cljs.core.truth_((n__19446 < cljs.core._count.call(null,cicoll))))
{{
var G__19455 = f.call(null,val__19445,cljs.core._nth.call(null,cicoll,n__19446));
var G__19456 = (n__19446 + 1);
val__19445 = G__19455;
n__19446 = G__19456;
continue;
}
} else
{return val__19445;
}
break;
}
}
});
var ci_reduce__19452 = (function (cicoll,f,val){
var val__19447 = val;
var n__19448 = 0;

while(true){
if(cljs.core.truth_((n__19448 < cljs.core._count.call(null,cicoll))))
{{
var G__19457 = f.call(null,val__19447,cljs.core._nth.call(null,cicoll,n__19448));
var G__19458 = (n__19448 + 1);
val__19447 = G__19457;
n__19448 = G__19458;
continue;
}
} else
{return val__19447;
}
break;
}
});
var ci_reduce__19453 = (function (cicoll,f,val,idx){
var val__19449 = val;
var n__19450 = idx;

while(true){
if(cljs.core.truth_((n__19450 < cljs.core._count.call(null,cicoll))))
{{
var G__19459 = f.call(null,val__19449,cljs.core._nth.call(null,cicoll,n__19450));
var G__19460 = (n__19450 + 1);
val__19449 = G__19459;
n__19450 = G__19460;
continue;
}
} else
{return val__19449;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__19451.call(this,cicoll,f);
case  3 :
return ci_reduce__19452.call(this,cicoll,f,val);
case  4 :
return ci_reduce__19453.call(this,cicoll,f,val,idx);
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
var this__19461 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__19474 = null;
var G__19474__19475 = (function (_,f){
var this__19462 = this;
return cljs.core.ci_reduce.call(null,this__19462.a,f,(this__19462.a[this__19462.i]),(this__19462.i + 1));
});
var G__19474__19476 = (function (_,f,start){
var this__19463 = this;
return cljs.core.ci_reduce.call(null,this__19463.a,f,start,this__19463.i);
});
G__19474 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__19474__19475.call(this,_,f);
case  3 :
return G__19474__19476.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19474;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__19464 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__19465 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__19478 = null;
var G__19478__19479 = (function (coll,n){
var this__19466 = this;
var i__19467 = (n + this__19466.i);

if(cljs.core.truth_((i__19467 < this__19466.a.length)))
{return (this__19466.a[i__19467]);
} else
{return null;
}
});
var G__19478__19480 = (function (coll,n,not_found){
var this__19468 = this;
var i__19469 = (n + this__19468.i);

if(cljs.core.truth_((i__19469 < this__19468.a.length)))
{return (this__19468.a[i__19469]);
} else
{return not_found;
}
});
G__19478 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__19478__19479.call(this,coll,n);
case  3 :
return G__19478__19480.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19478;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__19470 = this;
return (this__19470.a.length - this__19470.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__19471 = this;
return (this__19471.a[this__19471.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__19472 = this;
if(cljs.core.truth_(((this__19472.i + 1) < this__19472.a.length)))
{return (new cljs.core.IndexedSeq(this__19472.a,(this__19472.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__19473 = this;
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
var G__19482 = null;
var G__19482__19483 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__19482__19484 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__19482 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__19482__19483.call(this,array,f);
case  3 :
return G__19482__19484.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19482;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__19486 = null;
var G__19486__19487 = (function (array,k){
return (array[k]);
});
var G__19486__19488 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__19486 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__19486__19487.call(this,array,k);
case  3 :
return G__19486__19488.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19486;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__19490 = null;
var G__19490__19491 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__19490__19492 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__19490 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__19490__19491.call(this,array,n);
case  3 :
return G__19490__19492.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19490;
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
var temp__3698__auto____19494 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____19494))
{var s__19495 = temp__3698__auto____19494;

return cljs.core._first.call(null,s__19495);
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
var G__19496 = cljs.core.next.call(null,s);
s = G__19496;
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
var s__19497 = cljs.core.seq.call(null,x);
var n__19498 = 0;

while(true){
if(cljs.core.truth_(s__19497))
{{
var G__19499 = cljs.core.next.call(null,s__19497);
var G__19500 = (n__19498 + 1);
s__19497 = G__19499;
n__19498 = G__19500;
continue;
}
} else
{return n__19498;
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
var conj__19501 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__19502 = (function() { 
var G__19504__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__19505 = conj.call(null,coll,x);
var G__19506 = cljs.core.first.call(null,xs);
var G__19507 = cljs.core.next.call(null,xs);
coll = G__19505;
x = G__19506;
xs = G__19507;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__19504 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19504__delegate.call(this, coll, x, xs);
};
G__19504.cljs$lang$maxFixedArity = 2;
G__19504.cljs$lang$applyTo = (function (arglist__19508){
var coll = cljs.core.first(arglist__19508);
var x = cljs.core.first(cljs.core.next(arglist__19508));
var xs = cljs.core.rest(cljs.core.next(arglist__19508));
return G__19504__delegate.call(this, coll, x, xs);
});
return G__19504;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__19501.call(this,coll,x);
default:
return conj__19502.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__19502.cljs$lang$applyTo;
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
var nth__19509 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__19510 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__19509.call(this,coll,n);
case  3 :
return nth__19510.call(this,coll,n,not_found);
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
var get__19512 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__19513 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__19512.call(this,o,k);
case  3 :
return get__19513.call(this,o,k,not_found);
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
var assoc__19516 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__19517 = (function() { 
var G__19519__delegate = function (coll,k,v,kvs){
while(true){
var ret__19515 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__19520 = ret__19515;
var G__19521 = cljs.core.first.call(null,kvs);
var G__19522 = cljs.core.second.call(null,kvs);
var G__19523 = cljs.core.nnext.call(null,kvs);
coll = G__19520;
k = G__19521;
v = G__19522;
kvs = G__19523;
continue;
}
} else
{return ret__19515;
}
break;
}
};
var G__19519 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19519__delegate.call(this, coll, k, v, kvs);
};
G__19519.cljs$lang$maxFixedArity = 3;
G__19519.cljs$lang$applyTo = (function (arglist__19524){
var coll = cljs.core.first(arglist__19524);
var k = cljs.core.first(cljs.core.next(arglist__19524));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19524)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19524)));
return G__19519__delegate.call(this, coll, k, v, kvs);
});
return G__19519;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__19516.call(this,coll,k,v);
default:
return assoc__19517.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__19517.cljs$lang$applyTo;
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
var dissoc__19526 = (function (coll){
return coll;
});
var dissoc__19527 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__19528 = (function() { 
var G__19530__delegate = function (coll,k,ks){
while(true){
var ret__19525 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__19531 = ret__19525;
var G__19532 = cljs.core.first.call(null,ks);
var G__19533 = cljs.core.next.call(null,ks);
coll = G__19531;
k = G__19532;
ks = G__19533;
continue;
}
} else
{return ret__19525;
}
break;
}
};
var G__19530 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19530__delegate.call(this, coll, k, ks);
};
G__19530.cljs$lang$maxFixedArity = 2;
G__19530.cljs$lang$applyTo = (function (arglist__19534){
var coll = cljs.core.first(arglist__19534);
var k = cljs.core.first(cljs.core.next(arglist__19534));
var ks = cljs.core.rest(cljs.core.next(arglist__19534));
return G__19530__delegate.call(this, coll, k, ks);
});
return G__19530;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__19526.call(this,coll);
case  2 :
return dissoc__19527.call(this,coll,k);
default:
return dissoc__19528.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__19528.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____19535 = o;

if(cljs.core.truth_((function (){var and__3546__auto____19536 = x__445__auto____19535;

if(cljs.core.truth_(and__3546__auto____19536))
{var and__3546__auto____19537 = x__445__auto____19535.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____19537))
{return cljs.core.not.call(null,x__445__auto____19535.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____19537;
}
} else
{return and__3546__auto____19536;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____19535);
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
var disj__19539 = (function (coll){
return coll;
});
var disj__19540 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__19541 = (function() { 
var G__19543__delegate = function (coll,k,ks){
while(true){
var ret__19538 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__19544 = ret__19538;
var G__19545 = cljs.core.first.call(null,ks);
var G__19546 = cljs.core.next.call(null,ks);
coll = G__19544;
k = G__19545;
ks = G__19546;
continue;
}
} else
{return ret__19538;
}
break;
}
};
var G__19543 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19543__delegate.call(this, coll, k, ks);
};
G__19543.cljs$lang$maxFixedArity = 2;
G__19543.cljs$lang$applyTo = (function (arglist__19547){
var coll = cljs.core.first(arglist__19547);
var k = cljs.core.first(cljs.core.next(arglist__19547));
var ks = cljs.core.rest(cljs.core.next(arglist__19547));
return G__19543__delegate.call(this, coll, k, ks);
});
return G__19543;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__19539.call(this,coll);
case  2 :
return disj__19540.call(this,coll,k);
default:
return disj__19541.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__19541.cljs$lang$applyTo;
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
{var x__445__auto____19548 = x;

if(cljs.core.truth_((function (){var and__3546__auto____19549 = x__445__auto____19548;

if(cljs.core.truth_(and__3546__auto____19549))
{var and__3546__auto____19550 = x__445__auto____19548.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____19550))
{return cljs.core.not.call(null,x__445__auto____19548.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____19550;
}
} else
{return and__3546__auto____19549;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____19548);
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
{var x__445__auto____19551 = x;

if(cljs.core.truth_((function (){var and__3546__auto____19552 = x__445__auto____19551;

if(cljs.core.truth_(and__3546__auto____19552))
{var and__3546__auto____19553 = x__445__auto____19551.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____19553))
{return cljs.core.not.call(null,x__445__auto____19551.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____19553;
}
} else
{return and__3546__auto____19552;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____19551);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____19554 = x;

if(cljs.core.truth_((function (){var and__3546__auto____19555 = x__445__auto____19554;

if(cljs.core.truth_(and__3546__auto____19555))
{var and__3546__auto____19556 = x__445__auto____19554.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____19556))
{return cljs.core.not.call(null,x__445__auto____19554.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____19556;
}
} else
{return and__3546__auto____19555;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____19554);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____19557 = x;

if(cljs.core.truth_((function (){var and__3546__auto____19558 = x__445__auto____19557;

if(cljs.core.truth_(and__3546__auto____19558))
{var and__3546__auto____19559 = x__445__auto____19557.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____19559))
{return cljs.core.not.call(null,x__445__auto____19557.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____19559;
}
} else
{return and__3546__auto____19558;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____19557);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____19560 = x;

if(cljs.core.truth_((function (){var and__3546__auto____19561 = x__445__auto____19560;

if(cljs.core.truth_(and__3546__auto____19561))
{var and__3546__auto____19562 = x__445__auto____19560.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____19562))
{return cljs.core.not.call(null,x__445__auto____19560.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____19562;
}
} else
{return and__3546__auto____19561;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____19560);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____19563 = x;

if(cljs.core.truth_((function (){var and__3546__auto____19564 = x__445__auto____19563;

if(cljs.core.truth_(and__3546__auto____19564))
{var and__3546__auto____19565 = x__445__auto____19563.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____19565))
{return cljs.core.not.call(null,x__445__auto____19563.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____19565;
}
} else
{return and__3546__auto____19564;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____19563);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____19566 = x;

if(cljs.core.truth_((function (){var and__3546__auto____19567 = x__445__auto____19566;

if(cljs.core.truth_(and__3546__auto____19567))
{var and__3546__auto____19568 = x__445__auto____19566.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____19568))
{return cljs.core.not.call(null,x__445__auto____19566.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____19568;
}
} else
{return and__3546__auto____19567;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____19566);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__19569 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__19569.push(key);
}));
return keys__19569;
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
{var x__445__auto____19570 = s;

if(cljs.core.truth_((function (){var and__3546__auto____19571 = x__445__auto____19570;

if(cljs.core.truth_(and__3546__auto____19571))
{var and__3546__auto____19572 = x__445__auto____19570.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____19572))
{return cljs.core.not.call(null,x__445__auto____19570.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____19572;
}
} else
{return and__3546__auto____19571;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____19570);
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
var and__3546__auto____19573 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____19573))
{return cljs.core.not.call(null,(function (){var or__3548__auto____19574 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____19574))
{return or__3548__auto____19574;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____19573;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____19575 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____19575))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____19575;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____19576 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____19576))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____19576;
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
var and__3546__auto____19577 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____19577))
{return (n == n.toFixed());
} else
{return and__3546__auto____19577;
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
if(cljs.core.truth_((function (){var and__3546__auto____19578 = coll;

if(cljs.core.truth_(and__3546__auto____19578))
{var and__3546__auto____19579 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____19579))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____19579;
}
} else
{return and__3546__auto____19578;
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
var distinct_QMARK___19584 = (function (x){
return true;
});
var distinct_QMARK___19585 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___19586 = (function() { 
var G__19588__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__19580 = cljs.core.set([y,x]);
var xs__19581 = more;

while(true){
var x__19582 = cljs.core.first.call(null,xs__19581);
var etc__19583 = cljs.core.next.call(null,xs__19581);

if(cljs.core.truth_(xs__19581))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__19580,x__19582)))
{return false;
} else
{{
var G__19589 = cljs.core.conj.call(null,s__19580,x__19582);
var G__19590 = etc__19583;
s__19580 = G__19589;
xs__19581 = G__19590;
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
var G__19588 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19588__delegate.call(this, x, y, more);
};
G__19588.cljs$lang$maxFixedArity = 2;
G__19588.cljs$lang$applyTo = (function (arglist__19591){
var x = cljs.core.first(arglist__19591);
var y = cljs.core.first(cljs.core.next(arglist__19591));
var more = cljs.core.rest(cljs.core.next(arglist__19591));
return G__19588__delegate.call(this, x, y, more);
});
return G__19588;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___19584.call(this,x);
case  2 :
return distinct_QMARK___19585.call(this,x,y);
default:
return distinct_QMARK___19586.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___19586.cljs$lang$applyTo;
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
var r__19592 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__19592)))
{return r__19592;
} else
{if(cljs.core.truth_(r__19592))
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
var sort__19594 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__19595 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__19593 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__19593,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__19593);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__19594.call(this,comp);
case  2 :
return sort__19595.call(this,comp,coll);
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
var sort_by__19597 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__19598 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__19597.call(this,keyfn,comp);
case  3 :
return sort_by__19598.call(this,keyfn,comp,coll);
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
var reduce__19600 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__19601 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__19600.call(this,f,val);
case  3 :
return reduce__19601.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__19607 = (function (f,coll){
var temp__3695__auto____19603 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____19603))
{var s__19604 = temp__3695__auto____19603;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__19604),cljs.core.next.call(null,s__19604));
} else
{return f.call(null);
}
});
var seq_reduce__19608 = (function (f,val,coll){
var val__19605 = val;
var coll__19606 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__19606))
{{
var G__19610 = f.call(null,val__19605,cljs.core.first.call(null,coll__19606));
var G__19611 = cljs.core.next.call(null,coll__19606);
val__19605 = G__19610;
coll__19606 = G__19611;
continue;
}
} else
{return val__19605;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__19607.call(this,f,val);
case  3 :
return seq_reduce__19608.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__19612 = null;
var G__19612__19613 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__19612__19614 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__19612 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__19612__19613.call(this,coll,f);
case  3 :
return G__19612__19614.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19612;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___19616 = (function (){
return 0;
});
var _PLUS___19617 = (function (x){
return x;
});
var _PLUS___19618 = (function (x,y){
return (x + y);
});
var _PLUS___19619 = (function() { 
var G__19621__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__19621 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19621__delegate.call(this, x, y, more);
};
G__19621.cljs$lang$maxFixedArity = 2;
G__19621.cljs$lang$applyTo = (function (arglist__19622){
var x = cljs.core.first(arglist__19622);
var y = cljs.core.first(cljs.core.next(arglist__19622));
var more = cljs.core.rest(cljs.core.next(arglist__19622));
return G__19621__delegate.call(this, x, y, more);
});
return G__19621;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___19616.call(this);
case  1 :
return _PLUS___19617.call(this,x);
case  2 :
return _PLUS___19618.call(this,x,y);
default:
return _PLUS___19619.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___19619.cljs$lang$applyTo;
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
var ___19623 = (function (x){
return (- x);
});
var ___19624 = (function (x,y){
return (x - y);
});
var ___19625 = (function() { 
var G__19627__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__19627 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19627__delegate.call(this, x, y, more);
};
G__19627.cljs$lang$maxFixedArity = 2;
G__19627.cljs$lang$applyTo = (function (arglist__19628){
var x = cljs.core.first(arglist__19628);
var y = cljs.core.first(cljs.core.next(arglist__19628));
var more = cljs.core.rest(cljs.core.next(arglist__19628));
return G__19627__delegate.call(this, x, y, more);
});
return G__19627;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___19623.call(this,x);
case  2 :
return ___19624.call(this,x,y);
default:
return ___19625.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___19625.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___19629 = (function (){
return 1;
});
var _STAR___19630 = (function (x){
return x;
});
var _STAR___19631 = (function (x,y){
return (x * y);
});
var _STAR___19632 = (function() { 
var G__19634__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__19634 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19634__delegate.call(this, x, y, more);
};
G__19634.cljs$lang$maxFixedArity = 2;
G__19634.cljs$lang$applyTo = (function (arglist__19635){
var x = cljs.core.first(arglist__19635);
var y = cljs.core.first(cljs.core.next(arglist__19635));
var more = cljs.core.rest(cljs.core.next(arglist__19635));
return G__19634__delegate.call(this, x, y, more);
});
return G__19634;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___19629.call(this);
case  1 :
return _STAR___19630.call(this,x);
case  2 :
return _STAR___19631.call(this,x,y);
default:
return _STAR___19632.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___19632.cljs$lang$applyTo;
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
var _SLASH___19636 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___19637 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___19638 = (function() { 
var G__19640__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__19640 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19640__delegate.call(this, x, y, more);
};
G__19640.cljs$lang$maxFixedArity = 2;
G__19640.cljs$lang$applyTo = (function (arglist__19641){
var x = cljs.core.first(arglist__19641);
var y = cljs.core.first(cljs.core.next(arglist__19641));
var more = cljs.core.rest(cljs.core.next(arglist__19641));
return G__19640__delegate.call(this, x, y, more);
});
return G__19640;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___19636.call(this,x);
case  2 :
return _SLASH___19637.call(this,x,y);
default:
return _SLASH___19638.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___19638.cljs$lang$applyTo;
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
var _LT___19642 = (function (x){
return true;
});
var _LT___19643 = (function (x,y){
return (x < y);
});
var _LT___19644 = (function() { 
var G__19646__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__19647 = y;
var G__19648 = cljs.core.first.call(null,more);
var G__19649 = cljs.core.next.call(null,more);
x = G__19647;
y = G__19648;
more = G__19649;
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
var G__19646 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19646__delegate.call(this, x, y, more);
};
G__19646.cljs$lang$maxFixedArity = 2;
G__19646.cljs$lang$applyTo = (function (arglist__19650){
var x = cljs.core.first(arglist__19650);
var y = cljs.core.first(cljs.core.next(arglist__19650));
var more = cljs.core.rest(cljs.core.next(arglist__19650));
return G__19646__delegate.call(this, x, y, more);
});
return G__19646;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___19642.call(this,x);
case  2 :
return _LT___19643.call(this,x,y);
default:
return _LT___19644.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___19644.cljs$lang$applyTo;
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
var _LT__EQ___19651 = (function (x){
return true;
});
var _LT__EQ___19652 = (function (x,y){
return (x <= y);
});
var _LT__EQ___19653 = (function() { 
var G__19655__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__19656 = y;
var G__19657 = cljs.core.first.call(null,more);
var G__19658 = cljs.core.next.call(null,more);
x = G__19656;
y = G__19657;
more = G__19658;
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
var G__19655 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19655__delegate.call(this, x, y, more);
};
G__19655.cljs$lang$maxFixedArity = 2;
G__19655.cljs$lang$applyTo = (function (arglist__19659){
var x = cljs.core.first(arglist__19659);
var y = cljs.core.first(cljs.core.next(arglist__19659));
var more = cljs.core.rest(cljs.core.next(arglist__19659));
return G__19655__delegate.call(this, x, y, more);
});
return G__19655;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___19651.call(this,x);
case  2 :
return _LT__EQ___19652.call(this,x,y);
default:
return _LT__EQ___19653.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___19653.cljs$lang$applyTo;
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
var _GT___19660 = (function (x){
return true;
});
var _GT___19661 = (function (x,y){
return (x > y);
});
var _GT___19662 = (function() { 
var G__19664__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__19665 = y;
var G__19666 = cljs.core.first.call(null,more);
var G__19667 = cljs.core.next.call(null,more);
x = G__19665;
y = G__19666;
more = G__19667;
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
var G__19664 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19664__delegate.call(this, x, y, more);
};
G__19664.cljs$lang$maxFixedArity = 2;
G__19664.cljs$lang$applyTo = (function (arglist__19668){
var x = cljs.core.first(arglist__19668);
var y = cljs.core.first(cljs.core.next(arglist__19668));
var more = cljs.core.rest(cljs.core.next(arglist__19668));
return G__19664__delegate.call(this, x, y, more);
});
return G__19664;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___19660.call(this,x);
case  2 :
return _GT___19661.call(this,x,y);
default:
return _GT___19662.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___19662.cljs$lang$applyTo;
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
var _GT__EQ___19669 = (function (x){
return true;
});
var _GT__EQ___19670 = (function (x,y){
return (x >= y);
});
var _GT__EQ___19671 = (function() { 
var G__19673__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__19674 = y;
var G__19675 = cljs.core.first.call(null,more);
var G__19676 = cljs.core.next.call(null,more);
x = G__19674;
y = G__19675;
more = G__19676;
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
var G__19673 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19673__delegate.call(this, x, y, more);
};
G__19673.cljs$lang$maxFixedArity = 2;
G__19673.cljs$lang$applyTo = (function (arglist__19677){
var x = cljs.core.first(arglist__19677);
var y = cljs.core.first(cljs.core.next(arglist__19677));
var more = cljs.core.rest(cljs.core.next(arglist__19677));
return G__19673__delegate.call(this, x, y, more);
});
return G__19673;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___19669.call(this,x);
case  2 :
return _GT__EQ___19670.call(this,x,y);
default:
return _GT__EQ___19671.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___19671.cljs$lang$applyTo;
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
var max__19678 = (function (x){
return x;
});
var max__19679 = (function (x,y){
return ((x > y) ? x : y);
});
var max__19680 = (function() { 
var G__19682__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__19682 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19682__delegate.call(this, x, y, more);
};
G__19682.cljs$lang$maxFixedArity = 2;
G__19682.cljs$lang$applyTo = (function (arglist__19683){
var x = cljs.core.first(arglist__19683);
var y = cljs.core.first(cljs.core.next(arglist__19683));
var more = cljs.core.rest(cljs.core.next(arglist__19683));
return G__19682__delegate.call(this, x, y, more);
});
return G__19682;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__19678.call(this,x);
case  2 :
return max__19679.call(this,x,y);
default:
return max__19680.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__19680.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__19684 = (function (x){
return x;
});
var min__19685 = (function (x,y){
return ((x < y) ? x : y);
});
var min__19686 = (function() { 
var G__19688__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__19688 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19688__delegate.call(this, x, y, more);
};
G__19688.cljs$lang$maxFixedArity = 2;
G__19688.cljs$lang$applyTo = (function (arglist__19689){
var x = cljs.core.first(arglist__19689);
var y = cljs.core.first(cljs.core.next(arglist__19689));
var more = cljs.core.rest(cljs.core.next(arglist__19689));
return G__19688__delegate.call(this, x, y, more);
});
return G__19688;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__19684.call(this,x);
case  2 :
return min__19685.call(this,x,y);
default:
return min__19686.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__19686.cljs$lang$applyTo;
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
var rem__19690 = (n % d);

return cljs.core.fix.call(null,((n - rem__19690) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__19691 = cljs.core.quot.call(null,n,d);

return (n - (d * q__19691));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__19692 = (function (){
return Math.random.call(null);
});
var rand__19693 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__19692.call(this);
case  1 :
return rand__19693.call(this,n);
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
var _EQ__EQ___19695 = (function (x){
return true;
});
var _EQ__EQ___19696 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___19697 = (function() { 
var G__19699__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__19700 = y;
var G__19701 = cljs.core.first.call(null,more);
var G__19702 = cljs.core.next.call(null,more);
x = G__19700;
y = G__19701;
more = G__19702;
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
var G__19699 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19699__delegate.call(this, x, y, more);
};
G__19699.cljs$lang$maxFixedArity = 2;
G__19699.cljs$lang$applyTo = (function (arglist__19703){
var x = cljs.core.first(arglist__19703);
var y = cljs.core.first(cljs.core.next(arglist__19703));
var more = cljs.core.rest(cljs.core.next(arglist__19703));
return G__19699__delegate.call(this, x, y, more);
});
return G__19699;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___19695.call(this,x);
case  2 :
return _EQ__EQ___19696.call(this,x,y);
default:
return _EQ__EQ___19697.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___19697.cljs$lang$applyTo;
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
var n__19704 = n;
var xs__19705 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____19706 = xs__19705;

if(cljs.core.truth_(and__3546__auto____19706))
{return (n__19704 > 0);
} else
{return and__3546__auto____19706;
}
})()))
{{
var G__19707 = (n__19704 - 1);
var G__19708 = cljs.core.next.call(null,xs__19705);
n__19704 = G__19707;
xs__19705 = G__19708;
continue;
}
} else
{return xs__19705;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__19713 = null;
var G__19713__19714 = (function (coll,n){
var temp__3695__auto____19709 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____19709))
{var xs__19710 = temp__3695__auto____19709;

return cljs.core.first.call(null,xs__19710);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__19713__19715 = (function (coll,n,not_found){
var temp__3695__auto____19711 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____19711))
{var xs__19712 = temp__3695__auto____19711;

return cljs.core.first.call(null,xs__19712);
} else
{return not_found;
}
});
G__19713 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__19713__19714.call(this,coll,n);
case  3 :
return G__19713__19715.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19713;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___19717 = (function (){
return "";
});
var str_STAR___19718 = (function (x){
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
var str_STAR___19719 = (function() { 
var G__19721__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__19722 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__19723 = cljs.core.next.call(null,more);
sb = G__19722;
more = G__19723;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__19721 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__19721__delegate.call(this, x, ys);
};
G__19721.cljs$lang$maxFixedArity = 1;
G__19721.cljs$lang$applyTo = (function (arglist__19724){
var x = cljs.core.first(arglist__19724);
var ys = cljs.core.rest(arglist__19724);
return G__19721__delegate.call(this, x, ys);
});
return G__19721;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___19717.call(this);
case  1 :
return str_STAR___19718.call(this,x);
default:
return str_STAR___19719.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___19719.cljs$lang$applyTo;
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
var str__19725 = (function (){
return "";
});
var str__19726 = (function (x){
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
var str__19727 = (function() { 
var G__19729__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__19729 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__19729__delegate.call(this, x, ys);
};
G__19729.cljs$lang$maxFixedArity = 1;
G__19729.cljs$lang$applyTo = (function (arglist__19730){
var x = cljs.core.first(arglist__19730);
var ys = cljs.core.rest(arglist__19730);
return G__19729__delegate.call(this, x, ys);
});
return G__19729;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__19725.call(this);
case  1 :
return str__19726.call(this,x);
default:
return str__19727.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__19727.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__19731 = (function (s,start){
return s.substring(start);
});
var subs__19732 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__19731.call(this,s,start);
case  3 :
return subs__19732.call(this,s,start,end);
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
var symbol__19734 = (function (name){
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
var symbol__19735 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__19734.call(this,ns);
case  2 :
return symbol__19735.call(this,ns,name);
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
var keyword__19737 = (function (name){
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
var keyword__19738 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__19737.call(this,ns);
case  2 :
return keyword__19738.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__19740 = cljs.core.seq.call(null,x);
var ys__19741 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__19740)))
{return cljs.core.nil_QMARK_.call(null,ys__19741);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__19741)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__19740),cljs.core.first.call(null,ys__19741))))
{{
var G__19742 = cljs.core.next.call(null,xs__19740);
var G__19743 = cljs.core.next.call(null,ys__19741);
xs__19740 = G__19742;
ys__19741 = G__19743;
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
return cljs.core.reduce.call(null,(function (p1__19744_SHARP_,p2__19745_SHARP_){
return cljs.core.hash_combine.call(null,p1__19744_SHARP_,cljs.core.hash.call(null,p2__19745_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__19746__19747 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__19746__19747))
{var G__19749__19751 = cljs.core.first.call(null,G__19746__19747);
var vec__19750__19752 = G__19749__19751;
var key_name__19753 = cljs.core.nth.call(null,vec__19750__19752,0,null);
var f__19754 = cljs.core.nth.call(null,vec__19750__19752,1,null);
var G__19746__19755 = G__19746__19747;

var G__19749__19756 = G__19749__19751;
var G__19746__19757 = G__19746__19755;

while(true){
var vec__19758__19759 = G__19749__19756;
var key_name__19760 = cljs.core.nth.call(null,vec__19758__19759,0,null);
var f__19761 = cljs.core.nth.call(null,vec__19758__19759,1,null);
var G__19746__19762 = G__19746__19757;

var str_name__19763 = cljs.core.name.call(null,key_name__19760);

obj[str_name__19763] = f__19761;
var temp__3698__auto____19764 = cljs.core.next.call(null,G__19746__19762);

if(cljs.core.truth_(temp__3698__auto____19764))
{var G__19746__19765 = temp__3698__auto____19764;

{
var G__19766 = cljs.core.first.call(null,G__19746__19765);
var G__19767 = G__19746__19765;
G__19749__19756 = G__19766;
G__19746__19757 = G__19767;
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
var this__19768 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__19769 = this;
return (new cljs.core.List(this__19769.meta,o,coll,(this__19769.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__19770 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__19771 = this;
return this__19771.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__19772 = this;
return this__19772.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__19773 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__19774 = this;
return this__19774.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__19775 = this;
return this__19775.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__19776 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__19777 = this;
return (new cljs.core.List(meta,this__19777.first,this__19777.rest,this__19777.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__19778 = this;
return this__19778.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__19779 = this;
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
var this__19780 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__19781 = this;
return (new cljs.core.List(this__19781.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__19782 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__19783 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__19784 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__19785 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__19786 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__19787 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__19788 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__19789 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__19790 = this;
return this__19790.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__19791 = this;
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
list.cljs$lang$applyTo = (function (arglist__19792){
var items = cljs.core.seq( arglist__19792 );;
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
var this__19793 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__19794 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__19795 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__19796 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__19796.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__19797 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__19798 = this;
return this__19798.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__19799 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__19799.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__19799.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__19800 = this;
return this__19800.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__19801 = this;
return (new cljs.core.Cons(meta,this__19801.first,this__19801.rest));
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
var G__19802 = null;
var G__19802__19803 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__19802__19804 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__19802 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__19802__19803.call(this,string,f);
case  3 :
return G__19802__19804.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19802;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__19806 = null;
var G__19806__19807 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__19806__19808 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__19806 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__19806__19807.call(this,string,k);
case  3 :
return G__19806__19808.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19806;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__19810 = null;
var G__19810__19811 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__19810__19812 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__19810 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__19810__19811.call(this,string,n);
case  3 :
return G__19810__19812.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19810;
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
var G__19814 = null;
var G__19814__19815 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__19814__19816 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__19814 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__19814__19815.call(this,this$,coll);
case  3 :
return G__19814__19816.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19814;
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
var x__19818 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__19818;
} else
{lazy_seq.x = x__19818.call(null);
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
var this__19819 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__19820 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__19821 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__19822 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__19822.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__19823 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__19824 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__19825 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__19826 = this;
return this__19826.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__19827 = this;
return (new cljs.core.LazySeq(meta,this__19827.realized,this__19827.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__19828 = cljs.core.array.call(null);

var s__19829 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__19829)))
{ary__19828.push(cljs.core.first.call(null,s__19829));
{
var G__19830 = cljs.core.next.call(null,s__19829);
s__19829 = G__19830;
continue;
}
} else
{return ary__19828;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__19831 = s;
var i__19832 = n;
var sum__19833 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____19834 = (i__19832 > 0);

if(cljs.core.truth_(and__3546__auto____19834))
{return cljs.core.seq.call(null,s__19831);
} else
{return and__3546__auto____19834;
}
})()))
{{
var G__19835 = cljs.core.next.call(null,s__19831);
var G__19836 = (i__19832 - 1);
var G__19837 = (sum__19833 + 1);
s__19831 = G__19835;
i__19832 = G__19836;
sum__19833 = G__19837;
continue;
}
} else
{return sum__19833;
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
var concat__19841 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__19842 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__19843 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__19838 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__19838))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__19838),concat.call(null,cljs.core.rest.call(null,s__19838),y));
} else
{return y;
}
})));
});
var concat__19844 = (function() { 
var G__19846__delegate = function (x,y,zs){
var cat__19840 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__19839 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__19839))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__19839),cat.call(null,cljs.core.rest.call(null,xys__19839),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__19840.call(null,concat.call(null,x,y),zs);
};
var G__19846 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19846__delegate.call(this, x, y, zs);
};
G__19846.cljs$lang$maxFixedArity = 2;
G__19846.cljs$lang$applyTo = (function (arglist__19847){
var x = cljs.core.first(arglist__19847);
var y = cljs.core.first(cljs.core.next(arglist__19847));
var zs = cljs.core.rest(cljs.core.next(arglist__19847));
return G__19846__delegate.call(this, x, y, zs);
});
return G__19846;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__19841.call(this);
case  1 :
return concat__19842.call(this,x);
case  2 :
return concat__19843.call(this,x,y);
default:
return concat__19844.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__19844.cljs$lang$applyTo;
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
var list_STAR___19848 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___19849 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___19850 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___19851 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___19852 = (function() { 
var G__19854__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__19854 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__19854__delegate.call(this, a, b, c, d, more);
};
G__19854.cljs$lang$maxFixedArity = 4;
G__19854.cljs$lang$applyTo = (function (arglist__19855){
var a = cljs.core.first(arglist__19855);
var b = cljs.core.first(cljs.core.next(arglist__19855));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19855)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19855))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19855))));
return G__19854__delegate.call(this, a, b, c, d, more);
});
return G__19854;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___19848.call(this,a);
case  2 :
return list_STAR___19849.call(this,a,b);
case  3 :
return list_STAR___19850.call(this,a,b,c);
case  4 :
return list_STAR___19851.call(this,a,b,c,d);
default:
return list_STAR___19852.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___19852.cljs$lang$applyTo;
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
var apply__19865 = (function (f,args){
var fixed_arity__19856 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__19856 + 1)) <= fixed_arity__19856)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__19866 = (function (f,x,args){
var arglist__19857 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__19858 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__19857,fixed_arity__19858) <= fixed_arity__19858)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__19857));
} else
{return f.cljs$lang$applyTo(arglist__19857);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__19857));
}
});
var apply__19867 = (function (f,x,y,args){
var arglist__19859 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__19860 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__19859,fixed_arity__19860) <= fixed_arity__19860)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__19859));
} else
{return f.cljs$lang$applyTo(arglist__19859);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__19859));
}
});
var apply__19868 = (function (f,x,y,z,args){
var arglist__19861 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__19862 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__19861,fixed_arity__19862) <= fixed_arity__19862)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__19861));
} else
{return f.cljs$lang$applyTo(arglist__19861);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__19861));
}
});
var apply__19869 = (function() { 
var G__19871__delegate = function (f,a,b,c,d,args){
var arglist__19863 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__19864 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__19863,fixed_arity__19864) <= fixed_arity__19864)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__19863));
} else
{return f.cljs$lang$applyTo(arglist__19863);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__19863));
}
};
var G__19871 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__19871__delegate.call(this, f, a, b, c, d, args);
};
G__19871.cljs$lang$maxFixedArity = 5;
G__19871.cljs$lang$applyTo = (function (arglist__19872){
var f = cljs.core.first(arglist__19872);
var a = cljs.core.first(cljs.core.next(arglist__19872));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19872)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19872))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19872)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19872)))));
return G__19871__delegate.call(this, f, a, b, c, d, args);
});
return G__19871;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__19865.call(this,f,a);
case  3 :
return apply__19866.call(this,f,a,b);
case  4 :
return apply__19867.call(this,f,a,b,c);
case  5 :
return apply__19868.call(this,f,a,b,c,d);
default:
return apply__19869.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__19869.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__19873){
var obj = cljs.core.first(arglist__19873);
var f = cljs.core.first(cljs.core.next(arglist__19873));
var args = cljs.core.rest(cljs.core.next(arglist__19873));
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
var not_EQ___19874 = (function (x){
return false;
});
var not_EQ___19875 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___19876 = (function() { 
var G__19878__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__19878 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19878__delegate.call(this, x, y, more);
};
G__19878.cljs$lang$maxFixedArity = 2;
G__19878.cljs$lang$applyTo = (function (arglist__19879){
var x = cljs.core.first(arglist__19879);
var y = cljs.core.first(cljs.core.next(arglist__19879));
var more = cljs.core.rest(cljs.core.next(arglist__19879));
return G__19878__delegate.call(this, x, y, more);
});
return G__19878;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___19874.call(this,x);
case  2 :
return not_EQ___19875.call(this,x,y);
default:
return not_EQ___19876.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___19876.cljs$lang$applyTo;
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
var G__19880 = pred;
var G__19881 = cljs.core.next.call(null,coll);
pred = G__19880;
coll = G__19881;
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
{var or__3548__auto____19882 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____19882))
{return or__3548__auto____19882;
} else
{{
var G__19883 = pred;
var G__19884 = cljs.core.next.call(null,coll);
pred = G__19883;
coll = G__19884;
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
var G__19885 = null;
var G__19885__19886 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__19885__19887 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__19885__19888 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__19885__19889 = (function() { 
var G__19891__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__19891 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19891__delegate.call(this, x, y, zs);
};
G__19891.cljs$lang$maxFixedArity = 2;
G__19891.cljs$lang$applyTo = (function (arglist__19892){
var x = cljs.core.first(arglist__19892);
var y = cljs.core.first(cljs.core.next(arglist__19892));
var zs = cljs.core.rest(cljs.core.next(arglist__19892));
return G__19891__delegate.call(this, x, y, zs);
});
return G__19891;
})()
;
G__19885 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__19885__19886.call(this);
case  1 :
return G__19885__19887.call(this,x);
case  2 :
return G__19885__19888.call(this,x,y);
default:
return G__19885__19889.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__19885.cljs$lang$maxFixedArity = 2;
G__19885.cljs$lang$applyTo = G__19885__19889.cljs$lang$applyTo;
return G__19885;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__19893__delegate = function (args){
return x;
};
var G__19893 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19893__delegate.call(this, args);
};
G__19893.cljs$lang$maxFixedArity = 0;
G__19893.cljs$lang$applyTo = (function (arglist__19894){
var args = cljs.core.seq( arglist__19894 );;
return G__19893__delegate.call(this, args);
});
return G__19893;
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
var comp__19898 = (function (){
return cljs.core.identity;
});
var comp__19899 = (function (f){
return f;
});
var comp__19900 = (function (f,g){
return (function() {
var G__19904 = null;
var G__19904__19905 = (function (){
return f.call(null,g.call(null));
});
var G__19904__19906 = (function (x){
return f.call(null,g.call(null,x));
});
var G__19904__19907 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__19904__19908 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__19904__19909 = (function() { 
var G__19911__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__19911 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19911__delegate.call(this, x, y, z, args);
};
G__19911.cljs$lang$maxFixedArity = 3;
G__19911.cljs$lang$applyTo = (function (arglist__19912){
var x = cljs.core.first(arglist__19912);
var y = cljs.core.first(cljs.core.next(arglist__19912));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19912)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19912)));
return G__19911__delegate.call(this, x, y, z, args);
});
return G__19911;
})()
;
G__19904 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__19904__19905.call(this);
case  1 :
return G__19904__19906.call(this,x);
case  2 :
return G__19904__19907.call(this,x,y);
case  3 :
return G__19904__19908.call(this,x,y,z);
default:
return G__19904__19909.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__19904.cljs$lang$maxFixedArity = 3;
G__19904.cljs$lang$applyTo = G__19904__19909.cljs$lang$applyTo;
return G__19904;
})()
});
var comp__19901 = (function (f,g,h){
return (function() {
var G__19913 = null;
var G__19913__19914 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__19913__19915 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__19913__19916 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__19913__19917 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__19913__19918 = (function() { 
var G__19920__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__19920 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19920__delegate.call(this, x, y, z, args);
};
G__19920.cljs$lang$maxFixedArity = 3;
G__19920.cljs$lang$applyTo = (function (arglist__19921){
var x = cljs.core.first(arglist__19921);
var y = cljs.core.first(cljs.core.next(arglist__19921));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19921)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19921)));
return G__19920__delegate.call(this, x, y, z, args);
});
return G__19920;
})()
;
G__19913 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__19913__19914.call(this);
case  1 :
return G__19913__19915.call(this,x);
case  2 :
return G__19913__19916.call(this,x,y);
case  3 :
return G__19913__19917.call(this,x,y,z);
default:
return G__19913__19918.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__19913.cljs$lang$maxFixedArity = 3;
G__19913.cljs$lang$applyTo = G__19913__19918.cljs$lang$applyTo;
return G__19913;
})()
});
var comp__19902 = (function() { 
var G__19922__delegate = function (f1,f2,f3,fs){
var fs__19895 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__19923__delegate = function (args){
var ret__19896 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__19895),args);
var fs__19897 = cljs.core.next.call(null,fs__19895);

while(true){
if(cljs.core.truth_(fs__19897))
{{
var G__19924 = cljs.core.first.call(null,fs__19897).call(null,ret__19896);
var G__19925 = cljs.core.next.call(null,fs__19897);
ret__19896 = G__19924;
fs__19897 = G__19925;
continue;
}
} else
{return ret__19896;
}
break;
}
};
var G__19923 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19923__delegate.call(this, args);
};
G__19923.cljs$lang$maxFixedArity = 0;
G__19923.cljs$lang$applyTo = (function (arglist__19926){
var args = cljs.core.seq( arglist__19926 );;
return G__19923__delegate.call(this, args);
});
return G__19923;
})()
;
};
var G__19922 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19922__delegate.call(this, f1, f2, f3, fs);
};
G__19922.cljs$lang$maxFixedArity = 3;
G__19922.cljs$lang$applyTo = (function (arglist__19927){
var f1 = cljs.core.first(arglist__19927);
var f2 = cljs.core.first(cljs.core.next(arglist__19927));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19927)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19927)));
return G__19922__delegate.call(this, f1, f2, f3, fs);
});
return G__19922;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__19898.call(this);
case  1 :
return comp__19899.call(this,f1);
case  2 :
return comp__19900.call(this,f1,f2);
case  3 :
return comp__19901.call(this,f1,f2,f3);
default:
return comp__19902.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__19902.cljs$lang$applyTo;
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
var partial__19928 = (function (f,arg1){
return (function() { 
var G__19933__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__19933 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19933__delegate.call(this, args);
};
G__19933.cljs$lang$maxFixedArity = 0;
G__19933.cljs$lang$applyTo = (function (arglist__19934){
var args = cljs.core.seq( arglist__19934 );;
return G__19933__delegate.call(this, args);
});
return G__19933;
})()
;
});
var partial__19929 = (function (f,arg1,arg2){
return (function() { 
var G__19935__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__19935 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19935__delegate.call(this, args);
};
G__19935.cljs$lang$maxFixedArity = 0;
G__19935.cljs$lang$applyTo = (function (arglist__19936){
var args = cljs.core.seq( arglist__19936 );;
return G__19935__delegate.call(this, args);
});
return G__19935;
})()
;
});
var partial__19930 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__19937__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__19937 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19937__delegate.call(this, args);
};
G__19937.cljs$lang$maxFixedArity = 0;
G__19937.cljs$lang$applyTo = (function (arglist__19938){
var args = cljs.core.seq( arglist__19938 );;
return G__19937__delegate.call(this, args);
});
return G__19937;
})()
;
});
var partial__19931 = (function() { 
var G__19939__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__19940__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__19940 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19940__delegate.call(this, args);
};
G__19940.cljs$lang$maxFixedArity = 0;
G__19940.cljs$lang$applyTo = (function (arglist__19941){
var args = cljs.core.seq( arglist__19941 );;
return G__19940__delegate.call(this, args);
});
return G__19940;
})()
;
};
var G__19939 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__19939__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__19939.cljs$lang$maxFixedArity = 4;
G__19939.cljs$lang$applyTo = (function (arglist__19942){
var f = cljs.core.first(arglist__19942);
var arg1 = cljs.core.first(cljs.core.next(arglist__19942));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19942)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19942))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19942))));
return G__19939__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__19939;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__19928.call(this,f,arg1);
case  3 :
return partial__19929.call(this,f,arg1,arg2);
case  4 :
return partial__19930.call(this,f,arg1,arg2,arg3);
default:
return partial__19931.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__19931.cljs$lang$applyTo;
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
var fnil__19943 = (function (f,x){
return (function() {
var G__19947 = null;
var G__19947__19948 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__19947__19949 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__19947__19950 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__19947__19951 = (function() { 
var G__19953__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__19953 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19953__delegate.call(this, a, b, c, ds);
};
G__19953.cljs$lang$maxFixedArity = 3;
G__19953.cljs$lang$applyTo = (function (arglist__19954){
var a = cljs.core.first(arglist__19954);
var b = cljs.core.first(cljs.core.next(arglist__19954));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19954)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19954)));
return G__19953__delegate.call(this, a, b, c, ds);
});
return G__19953;
})()
;
G__19947 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__19947__19948.call(this,a);
case  2 :
return G__19947__19949.call(this,a,b);
case  3 :
return G__19947__19950.call(this,a,b,c);
default:
return G__19947__19951.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__19947.cljs$lang$maxFixedArity = 3;
G__19947.cljs$lang$applyTo = G__19947__19951.cljs$lang$applyTo;
return G__19947;
})()
});
var fnil__19944 = (function (f,x,y){
return (function() {
var G__19955 = null;
var G__19955__19956 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__19955__19957 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__19955__19958 = (function() { 
var G__19960__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__19960 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19960__delegate.call(this, a, b, c, ds);
};
G__19960.cljs$lang$maxFixedArity = 3;
G__19960.cljs$lang$applyTo = (function (arglist__19961){
var a = cljs.core.first(arglist__19961);
var b = cljs.core.first(cljs.core.next(arglist__19961));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19961)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19961)));
return G__19960__delegate.call(this, a, b, c, ds);
});
return G__19960;
})()
;
G__19955 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__19955__19956.call(this,a,b);
case  3 :
return G__19955__19957.call(this,a,b,c);
default:
return G__19955__19958.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__19955.cljs$lang$maxFixedArity = 3;
G__19955.cljs$lang$applyTo = G__19955__19958.cljs$lang$applyTo;
return G__19955;
})()
});
var fnil__19945 = (function (f,x,y,z){
return (function() {
var G__19962 = null;
var G__19962__19963 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__19962__19964 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__19962__19965 = (function() { 
var G__19967__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__19967 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19967__delegate.call(this, a, b, c, ds);
};
G__19967.cljs$lang$maxFixedArity = 3;
G__19967.cljs$lang$applyTo = (function (arglist__19968){
var a = cljs.core.first(arglist__19968);
var b = cljs.core.first(cljs.core.next(arglist__19968));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19968)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19968)));
return G__19967__delegate.call(this, a, b, c, ds);
});
return G__19967;
})()
;
G__19962 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__19962__19963.call(this,a,b);
case  3 :
return G__19962__19964.call(this,a,b,c);
default:
return G__19962__19965.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__19962.cljs$lang$maxFixedArity = 3;
G__19962.cljs$lang$applyTo = G__19962__19965.cljs$lang$applyTo;
return G__19962;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__19943.call(this,f,x);
case  3 :
return fnil__19944.call(this,f,x,y);
case  4 :
return fnil__19945.call(this,f,x,y,z);
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
var mapi__19971 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____19969 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____19969))
{var s__19970 = temp__3698__auto____19969;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__19970)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__19970)));
} else
{return null;
}
})));
});

return mapi__19971.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____19972 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____19972))
{var s__19973 = temp__3698__auto____19972;

var x__19974 = f.call(null,cljs.core.first.call(null,s__19973));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__19974)))
{return keep.call(null,f,cljs.core.rest.call(null,s__19973));
} else
{return cljs.core.cons.call(null,x__19974,keep.call(null,f,cljs.core.rest.call(null,s__19973)));
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
var keepi__19984 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____19981 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____19981))
{var s__19982 = temp__3698__auto____19981;

var x__19983 = f.call(null,idx,cljs.core.first.call(null,s__19982));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__19983)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__19982));
} else
{return cljs.core.cons.call(null,x__19983,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__19982)));
}
} else
{return null;
}
})));
});

return keepi__19984.call(null,0,coll);
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
var every_pred__20029 = (function (p){
return (function() {
var ep1 = null;
var ep1__20034 = (function (){
return true;
});
var ep1__20035 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__20036 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19991 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____19991))
{return p.call(null,y);
} else
{return and__3546__auto____19991;
}
})());
});
var ep1__20037 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19992 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____19992))
{var and__3546__auto____19993 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____19993))
{return p.call(null,z);
} else
{return and__3546__auto____19993;
}
} else
{return and__3546__auto____19992;
}
})());
});
var ep1__20038 = (function() { 
var G__20040__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19994 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____19994))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____19994;
}
})());
};
var G__20040 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20040__delegate.call(this, x, y, z, args);
};
G__20040.cljs$lang$maxFixedArity = 3;
G__20040.cljs$lang$applyTo = (function (arglist__20041){
var x = cljs.core.first(arglist__20041);
var y = cljs.core.first(cljs.core.next(arglist__20041));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20041)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20041)));
return G__20040__delegate.call(this, x, y, z, args);
});
return G__20040;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__20034.call(this);
case  1 :
return ep1__20035.call(this,x);
case  2 :
return ep1__20036.call(this,x,y);
case  3 :
return ep1__20037.call(this,x,y,z);
default:
return ep1__20038.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__20038.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__20030 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__20042 = (function (){
return true;
});
var ep2__20043 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19995 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____19995))
{return p2.call(null,x);
} else
{return and__3546__auto____19995;
}
})());
});
var ep2__20044 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19996 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____19996))
{var and__3546__auto____19997 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____19997))
{var and__3546__auto____19998 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____19998))
{return p2.call(null,y);
} else
{return and__3546__auto____19998;
}
} else
{return and__3546__auto____19997;
}
} else
{return and__3546__auto____19996;
}
})());
});
var ep2__20045 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19999 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____19999))
{var and__3546__auto____20000 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____20000))
{var and__3546__auto____20001 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____20001))
{var and__3546__auto____20002 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____20002))
{var and__3546__auto____20003 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____20003))
{return p2.call(null,z);
} else
{return and__3546__auto____20003;
}
} else
{return and__3546__auto____20002;
}
} else
{return and__3546__auto____20001;
}
} else
{return and__3546__auto____20000;
}
} else
{return and__3546__auto____19999;
}
})());
});
var ep2__20046 = (function() { 
var G__20048__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____20004 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____20004))
{return cljs.core.every_QMARK_.call(null,(function (p1__19975_SHARP_){
var and__3546__auto____20005 = p1.call(null,p1__19975_SHARP_);

if(cljs.core.truth_(and__3546__auto____20005))
{return p2.call(null,p1__19975_SHARP_);
} else
{return and__3546__auto____20005;
}
}),args);
} else
{return and__3546__auto____20004;
}
})());
};
var G__20048 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20048__delegate.call(this, x, y, z, args);
};
G__20048.cljs$lang$maxFixedArity = 3;
G__20048.cljs$lang$applyTo = (function (arglist__20049){
var x = cljs.core.first(arglist__20049);
var y = cljs.core.first(cljs.core.next(arglist__20049));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20049)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20049)));
return G__20048__delegate.call(this, x, y, z, args);
});
return G__20048;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__20042.call(this);
case  1 :
return ep2__20043.call(this,x);
case  2 :
return ep2__20044.call(this,x,y);
case  3 :
return ep2__20045.call(this,x,y,z);
default:
return ep2__20046.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__20046.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__20031 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__20050 = (function (){
return true;
});
var ep3__20051 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____20006 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____20006))
{var and__3546__auto____20007 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____20007))
{return p3.call(null,x);
} else
{return and__3546__auto____20007;
}
} else
{return and__3546__auto____20006;
}
})());
});
var ep3__20052 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____20008 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____20008))
{var and__3546__auto____20009 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____20009))
{var and__3546__auto____20010 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____20010))
{var and__3546__auto____20011 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____20011))
{var and__3546__auto____20012 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____20012))
{return p3.call(null,y);
} else
{return and__3546__auto____20012;
}
} else
{return and__3546__auto____20011;
}
} else
{return and__3546__auto____20010;
}
} else
{return and__3546__auto____20009;
}
} else
{return and__3546__auto____20008;
}
})());
});
var ep3__20053 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____20013 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____20013))
{var and__3546__auto____20014 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____20014))
{var and__3546__auto____20015 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____20015))
{var and__3546__auto____20016 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____20016))
{var and__3546__auto____20017 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____20017))
{var and__3546__auto____20018 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____20018))
{var and__3546__auto____20019 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____20019))
{var and__3546__auto____20020 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____20020))
{return p3.call(null,z);
} else
{return and__3546__auto____20020;
}
} else
{return and__3546__auto____20019;
}
} else
{return and__3546__auto____20018;
}
} else
{return and__3546__auto____20017;
}
} else
{return and__3546__auto____20016;
}
} else
{return and__3546__auto____20015;
}
} else
{return and__3546__auto____20014;
}
} else
{return and__3546__auto____20013;
}
})());
});
var ep3__20054 = (function() { 
var G__20056__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____20021 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____20021))
{return cljs.core.every_QMARK_.call(null,(function (p1__19976_SHARP_){
var and__3546__auto____20022 = p1.call(null,p1__19976_SHARP_);

if(cljs.core.truth_(and__3546__auto____20022))
{var and__3546__auto____20023 = p2.call(null,p1__19976_SHARP_);

if(cljs.core.truth_(and__3546__auto____20023))
{return p3.call(null,p1__19976_SHARP_);
} else
{return and__3546__auto____20023;
}
} else
{return and__3546__auto____20022;
}
}),args);
} else
{return and__3546__auto____20021;
}
})());
};
var G__20056 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20056__delegate.call(this, x, y, z, args);
};
G__20056.cljs$lang$maxFixedArity = 3;
G__20056.cljs$lang$applyTo = (function (arglist__20057){
var x = cljs.core.first(arglist__20057);
var y = cljs.core.first(cljs.core.next(arglist__20057));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20057)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20057)));
return G__20056__delegate.call(this, x, y, z, args);
});
return G__20056;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__20050.call(this);
case  1 :
return ep3__20051.call(this,x);
case  2 :
return ep3__20052.call(this,x,y);
case  3 :
return ep3__20053.call(this,x,y,z);
default:
return ep3__20054.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__20054.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__20032 = (function() { 
var G__20058__delegate = function (p1,p2,p3,ps){
var ps__20024 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__20059 = (function (){
return true;
});
var epn__20060 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__19977_SHARP_){
return p1__19977_SHARP_.call(null,x);
}),ps__20024);
});
var epn__20061 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__19978_SHARP_){
var and__3546__auto____20025 = p1__19978_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____20025))
{return p1__19978_SHARP_.call(null,y);
} else
{return and__3546__auto____20025;
}
}),ps__20024);
});
var epn__20062 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__19979_SHARP_){
var and__3546__auto____20026 = p1__19979_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____20026))
{var and__3546__auto____20027 = p1__19979_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____20027))
{return p1__19979_SHARP_.call(null,z);
} else
{return and__3546__auto____20027;
}
} else
{return and__3546__auto____20026;
}
}),ps__20024);
});
var epn__20063 = (function() { 
var G__20065__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____20028 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____20028))
{return cljs.core.every_QMARK_.call(null,(function (p1__19980_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__19980_SHARP_,args);
}),ps__20024);
} else
{return and__3546__auto____20028;
}
})());
};
var G__20065 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20065__delegate.call(this, x, y, z, args);
};
G__20065.cljs$lang$maxFixedArity = 3;
G__20065.cljs$lang$applyTo = (function (arglist__20066){
var x = cljs.core.first(arglist__20066);
var y = cljs.core.first(cljs.core.next(arglist__20066));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20066)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20066)));
return G__20065__delegate.call(this, x, y, z, args);
});
return G__20065;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__20059.call(this);
case  1 :
return epn__20060.call(this,x);
case  2 :
return epn__20061.call(this,x,y);
case  3 :
return epn__20062.call(this,x,y,z);
default:
return epn__20063.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__20063.cljs$lang$applyTo;
return epn;
})()
};
var G__20058 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20058__delegate.call(this, p1, p2, p3, ps);
};
G__20058.cljs$lang$maxFixedArity = 3;
G__20058.cljs$lang$applyTo = (function (arglist__20067){
var p1 = cljs.core.first(arglist__20067);
var p2 = cljs.core.first(cljs.core.next(arglist__20067));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20067)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20067)));
return G__20058__delegate.call(this, p1, p2, p3, ps);
});
return G__20058;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__20029.call(this,p1);
case  2 :
return every_pred__20030.call(this,p1,p2);
case  3 :
return every_pred__20031.call(this,p1,p2,p3);
default:
return every_pred__20032.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__20032.cljs$lang$applyTo;
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
var some_fn__20107 = (function (p){
return (function() {
var sp1 = null;
var sp1__20112 = (function (){
return null;
});
var sp1__20113 = (function (x){
return p.call(null,x);
});
var sp1__20114 = (function (x,y){
var or__3548__auto____20069 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____20069))
{return or__3548__auto____20069;
} else
{return p.call(null,y);
}
});
var sp1__20115 = (function (x,y,z){
var or__3548__auto____20070 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____20070))
{return or__3548__auto____20070;
} else
{var or__3548__auto____20071 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____20071))
{return or__3548__auto____20071;
} else
{return p.call(null,z);
}
}
});
var sp1__20116 = (function() { 
var G__20118__delegate = function (x,y,z,args){
var or__3548__auto____20072 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____20072))
{return or__3548__auto____20072;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__20118 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20118__delegate.call(this, x, y, z, args);
};
G__20118.cljs$lang$maxFixedArity = 3;
G__20118.cljs$lang$applyTo = (function (arglist__20119){
var x = cljs.core.first(arglist__20119);
var y = cljs.core.first(cljs.core.next(arglist__20119));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20119)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20119)));
return G__20118__delegate.call(this, x, y, z, args);
});
return G__20118;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__20112.call(this);
case  1 :
return sp1__20113.call(this,x);
case  2 :
return sp1__20114.call(this,x,y);
case  3 :
return sp1__20115.call(this,x,y,z);
default:
return sp1__20116.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__20116.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__20108 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__20120 = (function (){
return null;
});
var sp2__20121 = (function (x){
var or__3548__auto____20073 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____20073))
{return or__3548__auto____20073;
} else
{return p2.call(null,x);
}
});
var sp2__20122 = (function (x,y){
var or__3548__auto____20074 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____20074))
{return or__3548__auto____20074;
} else
{var or__3548__auto____20075 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____20075))
{return or__3548__auto____20075;
} else
{var or__3548__auto____20076 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____20076))
{return or__3548__auto____20076;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__20123 = (function (x,y,z){
var or__3548__auto____20077 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____20077))
{return or__3548__auto____20077;
} else
{var or__3548__auto____20078 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____20078))
{return or__3548__auto____20078;
} else
{var or__3548__auto____20079 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____20079))
{return or__3548__auto____20079;
} else
{var or__3548__auto____20080 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____20080))
{return or__3548__auto____20080;
} else
{var or__3548__auto____20081 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____20081))
{return or__3548__auto____20081;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__20124 = (function() { 
var G__20126__delegate = function (x,y,z,args){
var or__3548__auto____20082 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____20082))
{return or__3548__auto____20082;
} else
{return cljs.core.some.call(null,(function (p1__19985_SHARP_){
var or__3548__auto____20083 = p1.call(null,p1__19985_SHARP_);

if(cljs.core.truth_(or__3548__auto____20083))
{return or__3548__auto____20083;
} else
{return p2.call(null,p1__19985_SHARP_);
}
}),args);
}
};
var G__20126 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20126__delegate.call(this, x, y, z, args);
};
G__20126.cljs$lang$maxFixedArity = 3;
G__20126.cljs$lang$applyTo = (function (arglist__20127){
var x = cljs.core.first(arglist__20127);
var y = cljs.core.first(cljs.core.next(arglist__20127));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20127)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20127)));
return G__20126__delegate.call(this, x, y, z, args);
});
return G__20126;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__20120.call(this);
case  1 :
return sp2__20121.call(this,x);
case  2 :
return sp2__20122.call(this,x,y);
case  3 :
return sp2__20123.call(this,x,y,z);
default:
return sp2__20124.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__20124.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__20109 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__20128 = (function (){
return null;
});
var sp3__20129 = (function (x){
var or__3548__auto____20084 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____20084))
{return or__3548__auto____20084;
} else
{var or__3548__auto____20085 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____20085))
{return or__3548__auto____20085;
} else
{return p3.call(null,x);
}
}
});
var sp3__20130 = (function (x,y){
var or__3548__auto____20086 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____20086))
{return or__3548__auto____20086;
} else
{var or__3548__auto____20087 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____20087))
{return or__3548__auto____20087;
} else
{var or__3548__auto____20088 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____20088))
{return or__3548__auto____20088;
} else
{var or__3548__auto____20089 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____20089))
{return or__3548__auto____20089;
} else
{var or__3548__auto____20090 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____20090))
{return or__3548__auto____20090;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__20131 = (function (x,y,z){
var or__3548__auto____20091 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____20091))
{return or__3548__auto____20091;
} else
{var or__3548__auto____20092 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____20092))
{return or__3548__auto____20092;
} else
{var or__3548__auto____20093 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____20093))
{return or__3548__auto____20093;
} else
{var or__3548__auto____20094 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____20094))
{return or__3548__auto____20094;
} else
{var or__3548__auto____20095 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____20095))
{return or__3548__auto____20095;
} else
{var or__3548__auto____20096 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____20096))
{return or__3548__auto____20096;
} else
{var or__3548__auto____20097 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____20097))
{return or__3548__auto____20097;
} else
{var or__3548__auto____20098 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____20098))
{return or__3548__auto____20098;
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
var sp3__20132 = (function() { 
var G__20134__delegate = function (x,y,z,args){
var or__3548__auto____20099 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____20099))
{return or__3548__auto____20099;
} else
{return cljs.core.some.call(null,(function (p1__19986_SHARP_){
var or__3548__auto____20100 = p1.call(null,p1__19986_SHARP_);

if(cljs.core.truth_(or__3548__auto____20100))
{return or__3548__auto____20100;
} else
{var or__3548__auto____20101 = p2.call(null,p1__19986_SHARP_);

if(cljs.core.truth_(or__3548__auto____20101))
{return or__3548__auto____20101;
} else
{return p3.call(null,p1__19986_SHARP_);
}
}
}),args);
}
};
var G__20134 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20134__delegate.call(this, x, y, z, args);
};
G__20134.cljs$lang$maxFixedArity = 3;
G__20134.cljs$lang$applyTo = (function (arglist__20135){
var x = cljs.core.first(arglist__20135);
var y = cljs.core.first(cljs.core.next(arglist__20135));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20135)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20135)));
return G__20134__delegate.call(this, x, y, z, args);
});
return G__20134;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__20128.call(this);
case  1 :
return sp3__20129.call(this,x);
case  2 :
return sp3__20130.call(this,x,y);
case  3 :
return sp3__20131.call(this,x,y,z);
default:
return sp3__20132.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__20132.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__20110 = (function() { 
var G__20136__delegate = function (p1,p2,p3,ps){
var ps__20102 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__20137 = (function (){
return null;
});
var spn__20138 = (function (x){
return cljs.core.some.call(null,(function (p1__19987_SHARP_){
return p1__19987_SHARP_.call(null,x);
}),ps__20102);
});
var spn__20139 = (function (x,y){
return cljs.core.some.call(null,(function (p1__19988_SHARP_){
var or__3548__auto____20103 = p1__19988_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____20103))
{return or__3548__auto____20103;
} else
{return p1__19988_SHARP_.call(null,y);
}
}),ps__20102);
});
var spn__20140 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__19989_SHARP_){
var or__3548__auto____20104 = p1__19989_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____20104))
{return or__3548__auto____20104;
} else
{var or__3548__auto____20105 = p1__19989_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____20105))
{return or__3548__auto____20105;
} else
{return p1__19989_SHARP_.call(null,z);
}
}
}),ps__20102);
});
var spn__20141 = (function() { 
var G__20143__delegate = function (x,y,z,args){
var or__3548__auto____20106 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____20106))
{return or__3548__auto____20106;
} else
{return cljs.core.some.call(null,(function (p1__19990_SHARP_){
return cljs.core.some.call(null,p1__19990_SHARP_,args);
}),ps__20102);
}
};
var G__20143 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20143__delegate.call(this, x, y, z, args);
};
G__20143.cljs$lang$maxFixedArity = 3;
G__20143.cljs$lang$applyTo = (function (arglist__20144){
var x = cljs.core.first(arglist__20144);
var y = cljs.core.first(cljs.core.next(arglist__20144));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20144)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20144)));
return G__20143__delegate.call(this, x, y, z, args);
});
return G__20143;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__20137.call(this);
case  1 :
return spn__20138.call(this,x);
case  2 :
return spn__20139.call(this,x,y);
case  3 :
return spn__20140.call(this,x,y,z);
default:
return spn__20141.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__20141.cljs$lang$applyTo;
return spn;
})()
};
var G__20136 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20136__delegate.call(this, p1, p2, p3, ps);
};
G__20136.cljs$lang$maxFixedArity = 3;
G__20136.cljs$lang$applyTo = (function (arglist__20145){
var p1 = cljs.core.first(arglist__20145);
var p2 = cljs.core.first(cljs.core.next(arglist__20145));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20145)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20145)));
return G__20136__delegate.call(this, p1, p2, p3, ps);
});
return G__20136;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__20107.call(this,p1);
case  2 :
return some_fn__20108.call(this,p1,p2);
case  3 :
return some_fn__20109.call(this,p1,p2,p3);
default:
return some_fn__20110.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__20110.cljs$lang$applyTo;
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
var map__20158 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____20146 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20146))
{var s__20147 = temp__3698__auto____20146;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__20147)),map.call(null,f,cljs.core.rest.call(null,s__20147)));
} else
{return null;
}
})));
});
var map__20159 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__20148 = cljs.core.seq.call(null,c1);
var s2__20149 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____20150 = s1__20148;

if(cljs.core.truth_(and__3546__auto____20150))
{return s2__20149;
} else
{return and__3546__auto____20150;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__20148),cljs.core.first.call(null,s2__20149)),map.call(null,f,cljs.core.rest.call(null,s1__20148),cljs.core.rest.call(null,s2__20149)));
} else
{return null;
}
})));
});
var map__20160 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__20151 = cljs.core.seq.call(null,c1);
var s2__20152 = cljs.core.seq.call(null,c2);
var s3__20153 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____20154 = s1__20151;

if(cljs.core.truth_(and__3546__auto____20154))
{var and__3546__auto____20155 = s2__20152;

if(cljs.core.truth_(and__3546__auto____20155))
{return s3__20153;
} else
{return and__3546__auto____20155;
}
} else
{return and__3546__auto____20154;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__20151),cljs.core.first.call(null,s2__20152),cljs.core.first.call(null,s3__20153)),map.call(null,f,cljs.core.rest.call(null,s1__20151),cljs.core.rest.call(null,s2__20152),cljs.core.rest.call(null,s3__20153)));
} else
{return null;
}
})));
});
var map__20161 = (function() { 
var G__20163__delegate = function (f,c1,c2,c3,colls){
var step__20157 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__20156 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__20156)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__20156),step.call(null,map.call(null,cljs.core.rest,ss__20156)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__20068_SHARP_){
return cljs.core.apply.call(null,f,p1__20068_SHARP_);
}),step__20157.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__20163 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__20163__delegate.call(this, f, c1, c2, c3, colls);
};
G__20163.cljs$lang$maxFixedArity = 4;
G__20163.cljs$lang$applyTo = (function (arglist__20164){
var f = cljs.core.first(arglist__20164);
var c1 = cljs.core.first(cljs.core.next(arglist__20164));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20164)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__20164))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__20164))));
return G__20163__delegate.call(this, f, c1, c2, c3, colls);
});
return G__20163;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__20158.call(this,f,c1);
case  3 :
return map__20159.call(this,f,c1,c2);
case  4 :
return map__20160.call(this,f,c1,c2,c3);
default:
return map__20161.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__20161.cljs$lang$applyTo;
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
{var temp__3698__auto____20165 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20165))
{var s__20166 = temp__3698__auto____20165;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__20166),take.call(null,(n - 1),cljs.core.rest.call(null,s__20166)));
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
var step__20169 = (function (n,coll){
while(true){
var s__20167 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____20168 = (n > 0);

if(cljs.core.truth_(and__3546__auto____20168))
{return s__20167;
} else
{return and__3546__auto____20168;
}
})()))
{{
var G__20170 = (n - 1);
var G__20171 = cljs.core.rest.call(null,s__20167);
n = G__20170;
coll = G__20171;
continue;
}
} else
{return s__20167;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__20169.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__20172 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__20173 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__20172.call(this,n);
case  2 :
return drop_last__20173.call(this,n,s);
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
var s__20175 = cljs.core.seq.call(null,coll);
var lead__20176 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__20176))
{{
var G__20177 = cljs.core.next.call(null,s__20175);
var G__20178 = cljs.core.next.call(null,lead__20176);
s__20175 = G__20177;
lead__20176 = G__20178;
continue;
}
} else
{return s__20175;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__20181 = (function (pred,coll){
while(true){
var s__20179 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____20180 = s__20179;

if(cljs.core.truth_(and__3546__auto____20180))
{return pred.call(null,cljs.core.first.call(null,s__20179));
} else
{return and__3546__auto____20180;
}
})()))
{{
var G__20182 = pred;
var G__20183 = cljs.core.rest.call(null,s__20179);
pred = G__20182;
coll = G__20183;
continue;
}
} else
{return s__20179;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__20181.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____20184 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20184))
{var s__20185 = temp__3698__auto____20184;

return cljs.core.concat.call(null,s__20185,cycle.call(null,s__20185));
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
var repeat__20186 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__20187 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__20186.call(this,n);
case  2 :
return repeat__20187.call(this,n,x);
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
var repeatedly__20189 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__20190 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__20189.call(this,n);
case  2 :
return repeatedly__20190.call(this,n,f);
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
var interleave__20196 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__20192 = cljs.core.seq.call(null,c1);
var s2__20193 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____20194 = s1__20192;

if(cljs.core.truth_(and__3546__auto____20194))
{return s2__20193;
} else
{return and__3546__auto____20194;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__20192),cljs.core.cons.call(null,cljs.core.first.call(null,s2__20193),interleave.call(null,cljs.core.rest.call(null,s1__20192),cljs.core.rest.call(null,s2__20193))));
} else
{return null;
}
})));
});
var interleave__20197 = (function() { 
var G__20199__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__20195 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__20195)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__20195),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__20195)));
} else
{return null;
}
})));
};
var G__20199 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__20199__delegate.call(this, c1, c2, colls);
};
G__20199.cljs$lang$maxFixedArity = 2;
G__20199.cljs$lang$applyTo = (function (arglist__20200){
var c1 = cljs.core.first(arglist__20200);
var c2 = cljs.core.first(cljs.core.next(arglist__20200));
var colls = cljs.core.rest(cljs.core.next(arglist__20200));
return G__20199__delegate.call(this, c1, c2, colls);
});
return G__20199;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__20196.call(this,c1,c2);
default:
return interleave__20197.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__20197.cljs$lang$applyTo;
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
var cat__20203 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____20201 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____20201))
{var coll__20202 = temp__3695__auto____20201;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__20202),cat.call(null,cljs.core.rest.call(null,coll__20202),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__20203.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__20204 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__20205 = (function() { 
var G__20207__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__20207 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__20207__delegate.call(this, f, coll, colls);
};
G__20207.cljs$lang$maxFixedArity = 2;
G__20207.cljs$lang$applyTo = (function (arglist__20208){
var f = cljs.core.first(arglist__20208);
var coll = cljs.core.first(cljs.core.next(arglist__20208));
var colls = cljs.core.rest(cljs.core.next(arglist__20208));
return G__20207__delegate.call(this, f, coll, colls);
});
return G__20207;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__20204.call(this,f,coll);
default:
return mapcat__20205.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__20205.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____20209 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20209))
{var s__20210 = temp__3698__auto____20209;

var f__20211 = cljs.core.first.call(null,s__20210);
var r__20212 = cljs.core.rest.call(null,s__20210);

if(cljs.core.truth_(pred.call(null,f__20211)))
{return cljs.core.cons.call(null,f__20211,filter.call(null,pred,r__20212));
} else
{return filter.call(null,pred,r__20212);
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
var walk__20214 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__20214.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__20213_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__20213_SHARP_));
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
var partition__20221 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__20222 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____20215 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20215))
{var s__20216 = temp__3698__auto____20215;

var p__20217 = cljs.core.take.call(null,n,s__20216);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__20217))))
{return cljs.core.cons.call(null,p__20217,partition.call(null,n,step,cljs.core.drop.call(null,step,s__20216)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__20223 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____20218 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20218))
{var s__20219 = temp__3698__auto____20218;

var p__20220 = cljs.core.take.call(null,n,s__20219);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__20220))))
{return cljs.core.cons.call(null,p__20220,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__20219)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__20220,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__20221.call(this,n,step);
case  3 :
return partition__20222.call(this,n,step,pad);
case  4 :
return partition__20223.call(this,n,step,pad,coll);
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
var get_in__20229 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__20230 = (function (m,ks,not_found){
var sentinel__20225 = cljs.core.lookup_sentinel;
var m__20226 = m;
var ks__20227 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__20227))
{var m__20228 = cljs.core.get.call(null,m__20226,cljs.core.first.call(null,ks__20227),sentinel__20225);

if(cljs.core.truth_((sentinel__20225 === m__20228)))
{return not_found;
} else
{{
var G__20232 = sentinel__20225;
var G__20233 = m__20228;
var G__20234 = cljs.core.next.call(null,ks__20227);
sentinel__20225 = G__20232;
m__20226 = G__20233;
ks__20227 = G__20234;
continue;
}
}
} else
{return m__20226;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__20229.call(this,m,ks);
case  3 :
return get_in__20230.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__20235,v){
var vec__20236__20237 = p__20235;
var k__20238 = cljs.core.nth.call(null,vec__20236__20237,0,null);
var ks__20239 = cljs.core.nthnext.call(null,vec__20236__20237,1);

if(cljs.core.truth_(ks__20239))
{return cljs.core.assoc.call(null,m,k__20238,assoc_in.call(null,cljs.core.get.call(null,m,k__20238),ks__20239,v));
} else
{return cljs.core.assoc.call(null,m,k__20238,v);
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
var update_in__delegate = function (m,p__20240,f,args){
var vec__20241__20242 = p__20240;
var k__20243 = cljs.core.nth.call(null,vec__20241__20242,0,null);
var ks__20244 = cljs.core.nthnext.call(null,vec__20241__20242,1);

if(cljs.core.truth_(ks__20244))
{return cljs.core.assoc.call(null,m,k__20243,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__20243),ks__20244,f,args));
} else
{return cljs.core.assoc.call(null,m,k__20243,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__20243),args));
}
};
var update_in = function (m,p__20240,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__20240, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__20245){
var m = cljs.core.first(arglist__20245);
var p__20240 = cljs.core.first(cljs.core.next(arglist__20245));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20245)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20245)));
return update_in__delegate.call(this, m, p__20240, f, args);
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
var this__20246 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__20273 = null;
var G__20273__20274 = (function (coll,k){
var this__20247 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__20273__20275 = (function (coll,k,not_found){
var this__20248 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__20273 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__20273__20274.call(this,coll,k);
case  3 :
return G__20273__20275.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20273;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__20249 = this;
var new_array__20250 = cljs.core.aclone.call(null,this__20249.array);

(new_array__20250[k] = v);
return (new cljs.core.Vector(this__20249.meta,new_array__20250));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__20277 = null;
var G__20277__20278 = (function (coll,k){
var this__20251 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__20277__20279 = (function (coll,k,not_found){
var this__20252 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__20277 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__20277__20278.call(this,coll,k);
case  3 :
return G__20277__20279.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20277;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__20253 = this;
var new_array__20254 = cljs.core.aclone.call(null,this__20253.array);

new_array__20254.push(o);
return (new cljs.core.Vector(this__20253.meta,new_array__20254));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__20281 = null;
var G__20281__20282 = (function (v,f){
var this__20255 = this;
return cljs.core.ci_reduce.call(null,this__20255.array,f);
});
var G__20281__20283 = (function (v,f,start){
var this__20256 = this;
return cljs.core.ci_reduce.call(null,this__20256.array,f,start);
});
G__20281 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__20281__20282.call(this,v,f);
case  3 :
return G__20281__20283.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20281;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__20257 = this;
if(cljs.core.truth_((this__20257.array.length > 0)))
{var vector_seq__20258 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__20257.array.length)))
{return cljs.core.cons.call(null,(this__20257.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__20258.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__20259 = this;
return this__20259.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__20260 = this;
var count__20261 = this__20260.array.length;

if(cljs.core.truth_((count__20261 > 0)))
{return (this__20260.array[(count__20261 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__20262 = this;
if(cljs.core.truth_((this__20262.array.length > 0)))
{var new_array__20263 = cljs.core.aclone.call(null,this__20262.array);

new_array__20263.pop();
return (new cljs.core.Vector(this__20262.meta,new_array__20263));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__20264 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__20265 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__20266 = this;
return (new cljs.core.Vector(meta,this__20266.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__20267 = this;
return this__20267.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__20285 = null;
var G__20285__20286 = (function (coll,n){
var this__20268 = this;
if(cljs.core.truth_((function (){var and__3546__auto____20269 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____20269))
{return (n < this__20268.array.length);
} else
{return and__3546__auto____20269;
}
})()))
{return (this__20268.array[n]);
} else
{return null;
}
});
var G__20285__20287 = (function (coll,n,not_found){
var this__20270 = this;
if(cljs.core.truth_((function (){var and__3546__auto____20271 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____20271))
{return (n < this__20270.array.length);
} else
{return and__3546__auto____20271;
}
})()))
{return (this__20270.array[n]);
} else
{return not_found;
}
});
G__20285 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__20285__20286.call(this,coll,n);
case  3 :
return G__20285__20287.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20285;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__20272 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__20272.meta);
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
vector.cljs$lang$applyTo = (function (arglist__20289){
var args = cljs.core.seq( arglist__20289 );;
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
var this__20290 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__20312 = null;
var G__20312__20313 = (function (coll,k){
var this__20291 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__20312__20314 = (function (coll,k,not_found){
var this__20292 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__20312 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__20312__20313.call(this,coll,k);
case  3 :
return G__20312__20314.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20312;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__20293 = this;
var v_pos__20294 = (this__20293.start + key);

return (new cljs.core.Subvec(this__20293.meta,cljs.core._assoc.call(null,this__20293.v,v_pos__20294,val),this__20293.start,((this__20293.end > (v_pos__20294 + 1)) ? this__20293.end : (v_pos__20294 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__20316 = null;
var G__20316__20317 = (function (coll,k){
var this__20295 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__20316__20318 = (function (coll,k,not_found){
var this__20296 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__20316 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__20316__20317.call(this,coll,k);
case  3 :
return G__20316__20318.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20316;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__20297 = this;
return (new cljs.core.Subvec(this__20297.meta,cljs.core._assoc_n.call(null,this__20297.v,this__20297.end,o),this__20297.start,(this__20297.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__20320 = null;
var G__20320__20321 = (function (coll,f){
var this__20298 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__20320__20322 = (function (coll,f,start){
var this__20299 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__20320 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__20320__20321.call(this,coll,f);
case  3 :
return G__20320__20322.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20320;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__20300 = this;
var subvec_seq__20301 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__20300.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__20300.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__20301.call(null,this__20300.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__20302 = this;
return (this__20302.end - this__20302.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__20303 = this;
return cljs.core._nth.call(null,this__20303.v,(this__20303.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__20304 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__20304.start,this__20304.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__20304.meta,this__20304.v,this__20304.start,(this__20304.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__20305 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__20306 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__20307 = this;
return (new cljs.core.Subvec(meta,this__20307.v,this__20307.start,this__20307.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__20308 = this;
return this__20308.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__20324 = null;
var G__20324__20325 = (function (coll,n){
var this__20309 = this;
return cljs.core._nth.call(null,this__20309.v,(this__20309.start + n));
});
var G__20324__20326 = (function (coll,n,not_found){
var this__20310 = this;
return cljs.core._nth.call(null,this__20310.v,(this__20310.start + n),not_found);
});
G__20324 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__20324__20325.call(this,coll,n);
case  3 :
return G__20324__20326.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20324;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__20311 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__20311.meta);
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
var subvec__20328 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__20329 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__20328.call(this,v,start);
case  3 :
return subvec__20329.call(this,v,start,end);
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
var this__20331 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__20332 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__20333 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__20334 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__20334.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__20335 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__20336 = this;
return cljs.core._first.call(null,this__20336.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__20337 = this;
var temp__3695__auto____20338 = cljs.core.next.call(null,this__20337.front);

if(cljs.core.truth_(temp__3695__auto____20338))
{var f1__20339 = temp__3695__auto____20338;

return (new cljs.core.PersistentQueueSeq(this__20337.meta,f1__20339,this__20337.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__20337.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__20337.meta,this__20337.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__20340 = this;
return this__20340.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__20341 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__20341.front,this__20341.rear));
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
var this__20342 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__20343 = this;
if(cljs.core.truth_(this__20343.front))
{return (new cljs.core.PersistentQueue(this__20343.meta,(this__20343.count + 1),this__20343.front,cljs.core.conj.call(null,(function (){var or__3548__auto____20344 = this__20343.rear;

if(cljs.core.truth_(or__3548__auto____20344))
{return or__3548__auto____20344;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__20343.meta,(this__20343.count + 1),cljs.core.conj.call(null,this__20343.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__20345 = this;
var rear__20346 = cljs.core.seq.call(null,this__20345.rear);

if(cljs.core.truth_((function (){var or__3548__auto____20347 = this__20345.front;

if(cljs.core.truth_(or__3548__auto____20347))
{return or__3548__auto____20347;
} else
{return rear__20346;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__20345.front,cljs.core.seq.call(null,rear__20346)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__20348 = this;
return this__20348.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__20349 = this;
return cljs.core._first.call(null,this__20349.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__20350 = this;
if(cljs.core.truth_(this__20350.front))
{var temp__3695__auto____20351 = cljs.core.next.call(null,this__20350.front);

if(cljs.core.truth_(temp__3695__auto____20351))
{var f1__20352 = temp__3695__auto____20351;

return (new cljs.core.PersistentQueue(this__20350.meta,(this__20350.count - 1),f1__20352,this__20350.rear));
} else
{return (new cljs.core.PersistentQueue(this__20350.meta,(this__20350.count - 1),cljs.core.seq.call(null,this__20350.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__20353 = this;
return cljs.core.first.call(null,this__20353.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__20354 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__20355 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__20356 = this;
return (new cljs.core.PersistentQueue(meta,this__20356.count,this__20356.front,this__20356.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__20357 = this;
return this__20357.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__20358 = this;
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
var this__20359 = this;
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
var len__20360 = array.length;

var i__20361 = 0;

while(true){
if(cljs.core.truth_((i__20361 < len__20360)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__20361]))))
{return i__20361;
} else
{{
var G__20362 = (i__20361 + incr);
i__20361 = G__20362;
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
var obj_map_contains_key_QMARK___20364 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___20365 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____20363 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____20363))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____20363;
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
return obj_map_contains_key_QMARK___20364.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___20365.call(this,k,strobj,true_val,false_val);
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
var this__20368 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__20389 = null;
var G__20389__20390 = (function (coll,k){
var this__20369 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__20389__20391 = (function (coll,k,not_found){
var this__20370 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__20370.strobj,(this__20370.strobj[k]),not_found);
});
G__20389 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__20389__20390.call(this,coll,k);
case  3 :
return G__20389__20391.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20389;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__20371 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__20372 = goog.object.clone.call(null,this__20371.strobj);
var overwrite_QMARK___20373 = new_strobj__20372.hasOwnProperty(k);

(new_strobj__20372[k] = v);
if(cljs.core.truth_(overwrite_QMARK___20373))
{return (new cljs.core.ObjMap(this__20371.meta,this__20371.keys,new_strobj__20372));
} else
{var new_keys__20374 = cljs.core.aclone.call(null,this__20371.keys);

new_keys__20374.push(k);
return (new cljs.core.ObjMap(this__20371.meta,new_keys__20374,new_strobj__20372));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__20371.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__20375 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__20375.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__20393 = null;
var G__20393__20394 = (function (coll,k){
var this__20376 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__20393__20395 = (function (coll,k,not_found){
var this__20377 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__20393 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__20393__20394.call(this,coll,k);
case  3 :
return G__20393__20395.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20393;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__20378 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__20379 = this;
if(cljs.core.truth_((this__20379.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__20367_SHARP_){
return cljs.core.vector.call(null,p1__20367_SHARP_,(this__20379.strobj[p1__20367_SHARP_]));
}),this__20379.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__20380 = this;
return this__20380.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__20381 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__20382 = this;
return (new cljs.core.ObjMap(meta,this__20382.keys,this__20382.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__20383 = this;
return this__20383.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__20384 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__20384.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__20385 = this;
if(cljs.core.truth_((function (){var and__3546__auto____20386 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____20386))
{return this__20385.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____20386;
}
})()))
{var new_keys__20387 = cljs.core.aclone.call(null,this__20385.keys);
var new_strobj__20388 = goog.object.clone.call(null,this__20385.strobj);

new_keys__20387.splice(cljs.core.scan_array.call(null,1,k,new_keys__20387),1);
cljs.core.js_delete.call(null,new_strobj__20388,k);
return (new cljs.core.ObjMap(this__20385.meta,new_keys__20387,new_strobj__20388));
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
var this__20398 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__20430 = null;
var G__20430__20431 = (function (coll,k){
var this__20399 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__20430__20432 = (function (coll,k,not_found){
var this__20400 = this;
var bucket__20401 = (this__20400.hashobj[cljs.core.hash.call(null,k)]);
var i__20402 = (cljs.core.truth_(bucket__20401)?cljs.core.scan_array.call(null,2,k,bucket__20401):null);

if(cljs.core.truth_(i__20402))
{return (bucket__20401[(i__20402 + 1)]);
} else
{return not_found;
}
});
G__20430 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__20430__20431.call(this,coll,k);
case  3 :
return G__20430__20432.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20430;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__20403 = this;
var h__20404 = cljs.core.hash.call(null,k);
var bucket__20405 = (this__20403.hashobj[h__20404]);

if(cljs.core.truth_(bucket__20405))
{var new_bucket__20406 = cljs.core.aclone.call(null,bucket__20405);
var new_hashobj__20407 = goog.object.clone.call(null,this__20403.hashobj);

(new_hashobj__20407[h__20404] = new_bucket__20406);
var temp__3695__auto____20408 = cljs.core.scan_array.call(null,2,k,new_bucket__20406);

if(cljs.core.truth_(temp__3695__auto____20408))
{var i__20409 = temp__3695__auto____20408;

(new_bucket__20406[(i__20409 + 1)] = v);
return (new cljs.core.HashMap(this__20403.meta,this__20403.count,new_hashobj__20407));
} else
{new_bucket__20406.push(k,v);
return (new cljs.core.HashMap(this__20403.meta,(this__20403.count + 1),new_hashobj__20407));
}
} else
{var new_hashobj__20410 = goog.object.clone.call(null,this__20403.hashobj);

(new_hashobj__20410[h__20404] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__20403.meta,(this__20403.count + 1),new_hashobj__20410));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__20411 = this;
var bucket__20412 = (this__20411.hashobj[cljs.core.hash.call(null,k)]);
var i__20413 = (cljs.core.truth_(bucket__20412)?cljs.core.scan_array.call(null,2,k,bucket__20412):null);

if(cljs.core.truth_(i__20413))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__20434 = null;
var G__20434__20435 = (function (coll,k){
var this__20414 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__20434__20436 = (function (coll,k,not_found){
var this__20415 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__20434 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__20434__20435.call(this,coll,k);
case  3 :
return G__20434__20436.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20434;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__20416 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__20417 = this;
if(cljs.core.truth_((this__20417.count > 0)))
{var hashes__20418 = cljs.core.js_keys.call(null,this__20417.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__20397_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__20417.hashobj[p1__20397_SHARP_])));
}),hashes__20418);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__20419 = this;
return this__20419.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__20420 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__20421 = this;
return (new cljs.core.HashMap(meta,this__20421.count,this__20421.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__20422 = this;
return this__20422.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__20423 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__20423.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__20424 = this;
var h__20425 = cljs.core.hash.call(null,k);
var bucket__20426 = (this__20424.hashobj[h__20425]);
var i__20427 = (cljs.core.truth_(bucket__20426)?cljs.core.scan_array.call(null,2,k,bucket__20426):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__20427)))
{return coll;
} else
{var new_hashobj__20428 = goog.object.clone.call(null,this__20424.hashobj);

if(cljs.core.truth_((3 > bucket__20426.length)))
{cljs.core.js_delete.call(null,new_hashobj__20428,h__20425);
} else
{var new_bucket__20429 = cljs.core.aclone.call(null,bucket__20426);

new_bucket__20429.splice(i__20427,2);
(new_hashobj__20428[h__20425] = new_bucket__20429);
}
return (new cljs.core.HashMap(this__20424.meta,(this__20424.count - 1),new_hashobj__20428));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__20438 = ks.length;

var i__20439 = 0;
var out__20440 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__20439 < len__20438)))
{{
var G__20441 = (i__20439 + 1);
var G__20442 = cljs.core.assoc.call(null,out__20440,(ks[i__20439]),(vs[i__20439]));
i__20439 = G__20441;
out__20440 = G__20442;
continue;
}
} else
{return out__20440;
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
var in$__20443 = cljs.core.seq.call(null,keyvals);
var out__20444 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__20443))
{{
var G__20445 = cljs.core.nnext.call(null,in$__20443);
var G__20446 = cljs.core.assoc.call(null,out__20444,cljs.core.first.call(null,in$__20443),cljs.core.second.call(null,in$__20443));
in$__20443 = G__20445;
out__20444 = G__20446;
continue;
}
} else
{return out__20444;
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
hash_map.cljs$lang$applyTo = (function (arglist__20447){
var keyvals = cljs.core.seq( arglist__20447 );;
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
{return cljs.core.reduce.call(null,(function (p1__20448_SHARP_,p2__20449_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____20450 = p1__20448_SHARP_;

if(cljs.core.truth_(or__3548__auto____20450))
{return or__3548__auto____20450;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__20449_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__20451){
var maps = cljs.core.seq( arglist__20451 );;
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
{var merge_entry__20454 = (function (m,e){
var k__20452 = cljs.core.first.call(null,e);
var v__20453 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__20452)))
{return cljs.core.assoc.call(null,m,k__20452,f.call(null,cljs.core.get.call(null,m,k__20452),v__20453));
} else
{return cljs.core.assoc.call(null,m,k__20452,v__20453);
}
});
var merge2__20456 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__20454,(function (){var or__3548__auto____20455 = m1;

if(cljs.core.truth_(or__3548__auto____20455))
{return or__3548__auto____20455;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__20456,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__20457){
var f = cljs.core.first(arglist__20457);
var maps = cljs.core.rest(arglist__20457);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__20459 = cljs.core.ObjMap.fromObject([],{});
var keys__20460 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__20460))
{var key__20461 = cljs.core.first.call(null,keys__20460);
var entry__20462 = cljs.core.get.call(null,map,key__20461,"﷐'user/not-found");

{
var G__20463 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__20462,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__20459,key__20461,entry__20462):ret__20459);
var G__20464 = cljs.core.next.call(null,keys__20460);
ret__20459 = G__20463;
keys__20460 = G__20464;
continue;
}
} else
{return ret__20459;
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
var this__20465 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__20480 = null;
var G__20480__20481 = (function (coll,v){
var this__20466 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__20480__20482 = (function (coll,v,not_found){
var this__20467 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__20467.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__20480 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__20480__20481.call(this,coll,v);
case  3 :
return G__20480__20482.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20480;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__20484 = null;
var G__20484__20485 = (function (coll,k){
var this__20468 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__20484__20486 = (function (coll,k,not_found){
var this__20469 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__20484 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__20484__20485.call(this,coll,k);
case  3 :
return G__20484__20486.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20484;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__20470 = this;
return (new cljs.core.Set(this__20470.meta,cljs.core.assoc.call(null,this__20470.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__20471 = this;
return cljs.core.keys.call(null,this__20471.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__20472 = this;
return (new cljs.core.Set(this__20472.meta,cljs.core.dissoc.call(null,this__20472.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__20473 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__20474 = this;
var and__3546__auto____20475 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____20475))
{var and__3546__auto____20476 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____20476))
{return cljs.core.every_QMARK_.call(null,(function (p1__20458_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__20458_SHARP_);
}),other);
} else
{return and__3546__auto____20476;
}
} else
{return and__3546__auto____20475;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__20477 = this;
return (new cljs.core.Set(meta,this__20477.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__20478 = this;
return this__20478.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__20479 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__20479.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__20489 = cljs.core.seq.call(null,coll);
var out__20490 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__20489))))
{{
var G__20491 = cljs.core.rest.call(null,in$__20489);
var G__20492 = cljs.core.conj.call(null,out__20490,cljs.core.first.call(null,in$__20489));
in$__20489 = G__20491;
out__20490 = G__20492;
continue;
}
} else
{return out__20490;
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
{var n__20493 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____20494 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____20494))
{var e__20495 = temp__3695__auto____20494;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__20495));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__20493,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__20488_SHARP_){
var temp__3695__auto____20496 = cljs.core.find.call(null,smap,p1__20488_SHARP_);

if(cljs.core.truth_(temp__3695__auto____20496))
{var e__20497 = temp__3695__auto____20496;

return cljs.core.second.call(null,e__20497);
} else
{return p1__20488_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__20505 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__20498,seen){
while(true){
var vec__20499__20500 = p__20498;
var f__20501 = cljs.core.nth.call(null,vec__20499__20500,0,null);
var xs__20502 = vec__20499__20500;

var temp__3698__auto____20503 = cljs.core.seq.call(null,xs__20502);

if(cljs.core.truth_(temp__3698__auto____20503))
{var s__20504 = temp__3698__auto____20503;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__20501)))
{{
var G__20506 = cljs.core.rest.call(null,s__20504);
var G__20507 = seen;
p__20498 = G__20506;
seen = G__20507;
continue;
}
} else
{return cljs.core.cons.call(null,f__20501,step.call(null,cljs.core.rest.call(null,s__20504),cljs.core.conj.call(null,seen,f__20501)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__20505.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__20508 = cljs.core.Vector.fromArray([]);
var s__20509 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__20509)))
{{
var G__20510 = cljs.core.conj.call(null,ret__20508,cljs.core.first.call(null,s__20509));
var G__20511 = cljs.core.next.call(null,s__20509);
ret__20508 = G__20510;
s__20509 = G__20511;
continue;
}
} else
{return cljs.core.seq.call(null,ret__20508);
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
{if(cljs.core.truth_((function (){var or__3548__auto____20512 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____20512))
{return or__3548__auto____20512;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__20513 = x.lastIndexOf("/");

if(cljs.core.truth_((i__20513 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__20513 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____20514 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____20514))
{return or__3548__auto____20514;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__20515 = x.lastIndexOf("/");

if(cljs.core.truth_((i__20515 > -1)))
{return cljs.core.subs.call(null,x,2,i__20515);
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
var map__20518 = cljs.core.ObjMap.fromObject([],{});
var ks__20519 = cljs.core.seq.call(null,keys);
var vs__20520 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____20521 = ks__20519;

if(cljs.core.truth_(and__3546__auto____20521))
{return vs__20520;
} else
{return and__3546__auto____20521;
}
})()))
{{
var G__20522 = cljs.core.assoc.call(null,map__20518,cljs.core.first.call(null,ks__20519),cljs.core.first.call(null,vs__20520));
var G__20523 = cljs.core.next.call(null,ks__20519);
var G__20524 = cljs.core.next.call(null,vs__20520);
map__20518 = G__20522;
ks__20519 = G__20523;
vs__20520 = G__20524;
continue;
}
} else
{return map__20518;
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
var max_key__20527 = (function (k,x){
return x;
});
var max_key__20528 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__20529 = (function() { 
var G__20531__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__20516_SHARP_,p2__20517_SHARP_){
return max_key.call(null,k,p1__20516_SHARP_,p2__20517_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__20531 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20531__delegate.call(this, k, x, y, more);
};
G__20531.cljs$lang$maxFixedArity = 3;
G__20531.cljs$lang$applyTo = (function (arglist__20532){
var k = cljs.core.first(arglist__20532);
var x = cljs.core.first(cljs.core.next(arglist__20532));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20532)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20532)));
return G__20531__delegate.call(this, k, x, y, more);
});
return G__20531;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__20527.call(this,k,x);
case  3 :
return max_key__20528.call(this,k,x,y);
default:
return max_key__20529.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__20529.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__20533 = (function (k,x){
return x;
});
var min_key__20534 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__20535 = (function() { 
var G__20537__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__20525_SHARP_,p2__20526_SHARP_){
return min_key.call(null,k,p1__20525_SHARP_,p2__20526_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__20537 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20537__delegate.call(this, k, x, y, more);
};
G__20537.cljs$lang$maxFixedArity = 3;
G__20537.cljs$lang$applyTo = (function (arglist__20538){
var k = cljs.core.first(arglist__20538);
var x = cljs.core.first(cljs.core.next(arglist__20538));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20538)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20538)));
return G__20537__delegate.call(this, k, x, y, more);
});
return G__20537;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__20533.call(this,k,x);
case  3 :
return min_key__20534.call(this,k,x,y);
default:
return min_key__20535.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__20535.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__20541 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__20542 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____20539 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20539))
{var s__20540 = temp__3698__auto____20539;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__20540),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__20540)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__20541.call(this,n,step);
case  3 :
return partition_all__20542.call(this,n,step,coll);
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
var temp__3698__auto____20544 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20544))
{var s__20545 = temp__3698__auto____20544;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__20545))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__20545),take_while.call(null,pred,cljs.core.rest.call(null,s__20545)));
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
var this__20546 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__20547 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__20563 = null;
var G__20563__20564 = (function (rng,f){
var this__20548 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__20563__20565 = (function (rng,f,s){
var this__20549 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__20563 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__20563__20564.call(this,rng,f);
case  3 :
return G__20563__20565.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20563;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__20550 = this;
var comp__20551 = (cljs.core.truth_((this__20550.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__20551.call(null,this__20550.start,this__20550.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__20552 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__20552.end - this__20552.start) / this__20552.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__20553 = this;
return this__20553.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__20554 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__20554.meta,(this__20554.start + this__20554.step),this__20554.end,this__20554.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__20555 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__20556 = this;
return (new cljs.core.Range(meta,this__20556.start,this__20556.end,this__20556.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__20557 = this;
return this__20557.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__20567 = null;
var G__20567__20568 = (function (rng,n){
var this__20558 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__20558.start + (n * this__20558.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____20559 = (this__20558.start > this__20558.end);

if(cljs.core.truth_(and__3546__auto____20559))
{return cljs.core._EQ_.call(null,this__20558.step,0);
} else
{return and__3546__auto____20559;
}
})()))
{return this__20558.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__20567__20569 = (function (rng,n,not_found){
var this__20560 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__20560.start + (n * this__20560.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____20561 = (this__20560.start > this__20560.end);

if(cljs.core.truth_(and__3546__auto____20561))
{return cljs.core._EQ_.call(null,this__20560.step,0);
} else
{return and__3546__auto____20561;
}
})()))
{return this__20560.start;
} else
{return not_found;
}
}
});
G__20567 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__20567__20568.call(this,rng,n);
case  3 :
return G__20567__20569.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20567;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__20562 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__20562.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__20571 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__20572 = (function (end){
return range.call(null,0,end,1);
});
var range__20573 = (function (start,end){
return range.call(null,start,end,1);
});
var range__20574 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__20571.call(this);
case  1 :
return range__20572.call(this,start);
case  2 :
return range__20573.call(this,start,end);
case  3 :
return range__20574.call(this,start,end,step);
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
var temp__3698__auto____20576 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20576))
{var s__20577 = temp__3698__auto____20576;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__20577),take_nth.call(null,n,cljs.core.drop.call(null,n,s__20577)));
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
var temp__3698__auto____20579 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20579))
{var s__20580 = temp__3698__auto____20579;

var fst__20581 = cljs.core.first.call(null,s__20580);
var fv__20582 = f.call(null,fst__20581);
var run__20583 = cljs.core.cons.call(null,fst__20581,cljs.core.take_while.call(null,(function (p1__20578_SHARP_){
return cljs.core._EQ_.call(null,fv__20582,f.call(null,p1__20578_SHARP_));
}),cljs.core.next.call(null,s__20580)));

return cljs.core.cons.call(null,run__20583,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__20583),s__20580))));
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
var reductions__20598 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____20594 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____20594))
{var s__20595 = temp__3695__auto____20594;

return reductions.call(null,f,cljs.core.first.call(null,s__20595),cljs.core.rest.call(null,s__20595));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__20599 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____20596 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20596))
{var s__20597 = temp__3698__auto____20596;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__20597)),cljs.core.rest.call(null,s__20597));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__20598.call(this,f,init);
case  3 :
return reductions__20599.call(this,f,init,coll);
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
var juxt__20602 = (function (f){
return (function() {
var G__20607 = null;
var G__20607__20608 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__20607__20609 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__20607__20610 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__20607__20611 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__20607__20612 = (function() { 
var G__20614__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__20614 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20614__delegate.call(this, x, y, z, args);
};
G__20614.cljs$lang$maxFixedArity = 3;
G__20614.cljs$lang$applyTo = (function (arglist__20615){
var x = cljs.core.first(arglist__20615);
var y = cljs.core.first(cljs.core.next(arglist__20615));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20615)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20615)));
return G__20614__delegate.call(this, x, y, z, args);
});
return G__20614;
})()
;
G__20607 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__20607__20608.call(this);
case  1 :
return G__20607__20609.call(this,x);
case  2 :
return G__20607__20610.call(this,x,y);
case  3 :
return G__20607__20611.call(this,x,y,z);
default:
return G__20607__20612.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__20607.cljs$lang$maxFixedArity = 3;
G__20607.cljs$lang$applyTo = G__20607__20612.cljs$lang$applyTo;
return G__20607;
})()
});
var juxt__20603 = (function (f,g){
return (function() {
var G__20616 = null;
var G__20616__20617 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__20616__20618 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__20616__20619 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__20616__20620 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__20616__20621 = (function() { 
var G__20623__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__20623 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20623__delegate.call(this, x, y, z, args);
};
G__20623.cljs$lang$maxFixedArity = 3;
G__20623.cljs$lang$applyTo = (function (arglist__20624){
var x = cljs.core.first(arglist__20624);
var y = cljs.core.first(cljs.core.next(arglist__20624));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20624)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20624)));
return G__20623__delegate.call(this, x, y, z, args);
});
return G__20623;
})()
;
G__20616 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__20616__20617.call(this);
case  1 :
return G__20616__20618.call(this,x);
case  2 :
return G__20616__20619.call(this,x,y);
case  3 :
return G__20616__20620.call(this,x,y,z);
default:
return G__20616__20621.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__20616.cljs$lang$maxFixedArity = 3;
G__20616.cljs$lang$applyTo = G__20616__20621.cljs$lang$applyTo;
return G__20616;
})()
});
var juxt__20604 = (function (f,g,h){
return (function() {
var G__20625 = null;
var G__20625__20626 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__20625__20627 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__20625__20628 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__20625__20629 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__20625__20630 = (function() { 
var G__20632__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__20632 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20632__delegate.call(this, x, y, z, args);
};
G__20632.cljs$lang$maxFixedArity = 3;
G__20632.cljs$lang$applyTo = (function (arglist__20633){
var x = cljs.core.first(arglist__20633);
var y = cljs.core.first(cljs.core.next(arglist__20633));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20633)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20633)));
return G__20632__delegate.call(this, x, y, z, args);
});
return G__20632;
})()
;
G__20625 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__20625__20626.call(this);
case  1 :
return G__20625__20627.call(this,x);
case  2 :
return G__20625__20628.call(this,x,y);
case  3 :
return G__20625__20629.call(this,x,y,z);
default:
return G__20625__20630.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__20625.cljs$lang$maxFixedArity = 3;
G__20625.cljs$lang$applyTo = G__20625__20630.cljs$lang$applyTo;
return G__20625;
})()
});
var juxt__20605 = (function() { 
var G__20634__delegate = function (f,g,h,fs){
var fs__20601 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__20635 = null;
var G__20635__20636 = (function (){
return cljs.core.reduce.call(null,(function (p1__20584_SHARP_,p2__20585_SHARP_){
return cljs.core.conj.call(null,p1__20584_SHARP_,p2__20585_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__20601);
});
var G__20635__20637 = (function (x){
return cljs.core.reduce.call(null,(function (p1__20586_SHARP_,p2__20587_SHARP_){
return cljs.core.conj.call(null,p1__20586_SHARP_,p2__20587_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__20601);
});
var G__20635__20638 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__20588_SHARP_,p2__20589_SHARP_){
return cljs.core.conj.call(null,p1__20588_SHARP_,p2__20589_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__20601);
});
var G__20635__20639 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__20590_SHARP_,p2__20591_SHARP_){
return cljs.core.conj.call(null,p1__20590_SHARP_,p2__20591_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__20601);
});
var G__20635__20640 = (function() { 
var G__20642__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__20592_SHARP_,p2__20593_SHARP_){
return cljs.core.conj.call(null,p1__20592_SHARP_,cljs.core.apply.call(null,p2__20593_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__20601);
};
var G__20642 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20642__delegate.call(this, x, y, z, args);
};
G__20642.cljs$lang$maxFixedArity = 3;
G__20642.cljs$lang$applyTo = (function (arglist__20643){
var x = cljs.core.first(arglist__20643);
var y = cljs.core.first(cljs.core.next(arglist__20643));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20643)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20643)));
return G__20642__delegate.call(this, x, y, z, args);
});
return G__20642;
})()
;
G__20635 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__20635__20636.call(this);
case  1 :
return G__20635__20637.call(this,x);
case  2 :
return G__20635__20638.call(this,x,y);
case  3 :
return G__20635__20639.call(this,x,y,z);
default:
return G__20635__20640.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__20635.cljs$lang$maxFixedArity = 3;
G__20635.cljs$lang$applyTo = G__20635__20640.cljs$lang$applyTo;
return G__20635;
})()
};
var G__20634 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20634__delegate.call(this, f, g, h, fs);
};
G__20634.cljs$lang$maxFixedArity = 3;
G__20634.cljs$lang$applyTo = (function (arglist__20644){
var f = cljs.core.first(arglist__20644);
var g = cljs.core.first(cljs.core.next(arglist__20644));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20644)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20644)));
return G__20634__delegate.call(this, f, g, h, fs);
});
return G__20634;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__20602.call(this,f);
case  2 :
return juxt__20603.call(this,f,g);
case  3 :
return juxt__20604.call(this,f,g,h);
default:
return juxt__20605.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__20605.cljs$lang$applyTo;
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
var dorun__20646 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__20649 = cljs.core.next.call(null,coll);
coll = G__20649;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__20647 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____20645 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____20645))
{return (n > 0);
} else
{return and__3546__auto____20645;
}
})()))
{{
var G__20650 = (n - 1);
var G__20651 = cljs.core.next.call(null,coll);
n = G__20650;
coll = G__20651;
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
return dorun__20646.call(this,n);
case  2 :
return dorun__20647.call(this,n,coll);
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
var doall__20652 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__20653 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__20652.call(this,n);
case  2 :
return doall__20653.call(this,n,coll);
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
var matches__20655 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__20655),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__20655),1)))
{return cljs.core.first.call(null,matches__20655);
} else
{return cljs.core.vec.call(null,matches__20655);
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
var matches__20656 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__20656)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__20656),1)))
{return cljs.core.first.call(null,matches__20656);
} else
{return cljs.core.vec.call(null,matches__20656);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__20657 = cljs.core.re_find.call(null,re,s);
var match_idx__20658 = s.search(re);
var match_str__20659 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__20657))?cljs.core.first.call(null,match_data__20657):match_data__20657);
var post_match__20660 = cljs.core.subs.call(null,s,(match_idx__20658 + cljs.core.count.call(null,match_str__20659)));

if(cljs.core.truth_(match_data__20657))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__20657,re_seq.call(null,re,post_match__20660));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__20661_SHARP_){
return print_one.call(null,p1__20661_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____20662 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____20662))
{var and__3546__auto____20666 = (function (){var x__445__auto____20663 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____20664 = x__445__auto____20663;

if(cljs.core.truth_(and__3546__auto____20664))
{var and__3546__auto____20665 = x__445__auto____20663.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____20665))
{return cljs.core.not.call(null,x__445__auto____20663.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____20665;
}
} else
{return and__3546__auto____20664;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____20663);
}
})();

if(cljs.core.truth_(and__3546__auto____20666))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____20666;
}
} else
{return and__3546__auto____20662;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____20667 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____20668 = x__445__auto____20667;

if(cljs.core.truth_(and__3546__auto____20668))
{var and__3546__auto____20669 = x__445__auto____20667.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____20669))
{return cljs.core.not.call(null,x__445__auto____20667.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____20669;
}
} else
{return and__3546__auto____20668;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____20667);
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
var first_obj__20670 = cljs.core.first.call(null,objs);
var sb__20671 = (new goog.string.StringBuffer());

var G__20672__20673 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__20672__20673))
{var obj__20674 = cljs.core.first.call(null,G__20672__20673);
var G__20672__20675 = G__20672__20673;

while(true){
if(cljs.core.truth_((obj__20674 === first_obj__20670)))
{} else
{sb__20671.append(" ");
}
var G__20676__20677 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__20674,opts));

if(cljs.core.truth_(G__20676__20677))
{var string__20678 = cljs.core.first.call(null,G__20676__20677);
var G__20676__20679 = G__20676__20677;

while(true){
sb__20671.append(string__20678);
var temp__3698__auto____20680 = cljs.core.next.call(null,G__20676__20679);

if(cljs.core.truth_(temp__3698__auto____20680))
{var G__20676__20681 = temp__3698__auto____20680;

{
var G__20684 = cljs.core.first.call(null,G__20676__20681);
var G__20685 = G__20676__20681;
string__20678 = G__20684;
G__20676__20679 = G__20685;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____20682 = cljs.core.next.call(null,G__20672__20675);

if(cljs.core.truth_(temp__3698__auto____20682))
{var G__20672__20683 = temp__3698__auto____20682;

{
var G__20686 = cljs.core.first.call(null,G__20672__20683);
var G__20687 = G__20672__20683;
obj__20674 = G__20686;
G__20672__20675 = G__20687;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__20671);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__20688 = cljs.core.first.call(null,objs);

var G__20689__20690 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__20689__20690))
{var obj__20691 = cljs.core.first.call(null,G__20689__20690);
var G__20689__20692 = G__20689__20690;

while(true){
if(cljs.core.truth_((obj__20691 === first_obj__20688)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__20693__20694 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__20691,opts));

if(cljs.core.truth_(G__20693__20694))
{var string__20695 = cljs.core.first.call(null,G__20693__20694);
var G__20693__20696 = G__20693__20694;

while(true){
cljs.core.string_print.call(null,string__20695);
var temp__3698__auto____20697 = cljs.core.next.call(null,G__20693__20696);

if(cljs.core.truth_(temp__3698__auto____20697))
{var G__20693__20698 = temp__3698__auto____20697;

{
var G__20701 = cljs.core.first.call(null,G__20693__20698);
var G__20702 = G__20693__20698;
string__20695 = G__20701;
G__20693__20696 = G__20702;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____20699 = cljs.core.next.call(null,G__20689__20692);

if(cljs.core.truth_(temp__3698__auto____20699))
{var G__20689__20700 = temp__3698__auto____20699;

{
var G__20703 = cljs.core.first.call(null,G__20689__20700);
var G__20704 = G__20689__20700;
obj__20691 = G__20703;
G__20689__20692 = G__20704;
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
pr_str.cljs$lang$applyTo = (function (arglist__20705){
var objs = cljs.core.seq( arglist__20705 );;
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
pr.cljs$lang$applyTo = (function (arglist__20706){
var objs = cljs.core.seq( arglist__20706 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__20707){
var objs = cljs.core.seq( arglist__20707 );;
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
println.cljs$lang$applyTo = (function (arglist__20708){
var objs = cljs.core.seq( arglist__20708 );;
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
prn.cljs$lang$applyTo = (function (arglist__20709){
var objs = cljs.core.seq( arglist__20709 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__20710 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__20710,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____20711 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____20711))
{var nspc__20712 = temp__3698__auto____20711;

return cljs.core.str.call(null,nspc__20712,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____20713 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____20713))
{var nspc__20714 = temp__3698__auto____20713;

return cljs.core.str.call(null,nspc__20714,"/");
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
var pr_pair__20715 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__20715,"{",", ","}",opts,coll);
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
var this__20716 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__20717 = this;
var G__20718__20719 = cljs.core.seq.call(null,this__20717.watches);

if(cljs.core.truth_(G__20718__20719))
{var G__20721__20723 = cljs.core.first.call(null,G__20718__20719);
var vec__20722__20724 = G__20721__20723;
var key__20725 = cljs.core.nth.call(null,vec__20722__20724,0,null);
var f__20726 = cljs.core.nth.call(null,vec__20722__20724,1,null);
var G__20718__20727 = G__20718__20719;

var G__20721__20728 = G__20721__20723;
var G__20718__20729 = G__20718__20727;

while(true){
var vec__20730__20731 = G__20721__20728;
var key__20732 = cljs.core.nth.call(null,vec__20730__20731,0,null);
var f__20733 = cljs.core.nth.call(null,vec__20730__20731,1,null);
var G__20718__20734 = G__20718__20729;

f__20733.call(null,key__20732,this$,oldval,newval);
var temp__3698__auto____20735 = cljs.core.next.call(null,G__20718__20734);

if(cljs.core.truth_(temp__3698__auto____20735))
{var G__20718__20736 = temp__3698__auto____20735;

{
var G__20743 = cljs.core.first.call(null,G__20718__20736);
var G__20744 = G__20718__20736;
G__20721__20728 = G__20743;
G__20718__20729 = G__20744;
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
var this__20737 = this;
return this$.watches = cljs.core.assoc.call(null,this__20737.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__20738 = this;
return this$.watches = cljs.core.dissoc.call(null,this__20738.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__20739 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__20739.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__20740 = this;
return this__20740.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__20741 = this;
return this__20741.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__20742 = this;
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
var atom__20751 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__20752 = (function() { 
var G__20754__delegate = function (x,p__20745){
var map__20746__20747 = p__20745;
var map__20746__20748 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__20746__20747))?cljs.core.apply.call(null,cljs.core.hash_map,map__20746__20747):map__20746__20747);
var validator__20749 = cljs.core.get.call(null,map__20746__20748,"﷐'validator");
var meta__20750 = cljs.core.get.call(null,map__20746__20748,"﷐'meta");

return (new cljs.core.Atom(x,meta__20750,validator__20749,null));
};
var G__20754 = function (x,var_args){
var p__20745 = null;
if (goog.isDef(var_args)) {
  p__20745 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__20754__delegate.call(this, x, p__20745);
};
G__20754.cljs$lang$maxFixedArity = 1;
G__20754.cljs$lang$applyTo = (function (arglist__20755){
var x = cljs.core.first(arglist__20755);
var p__20745 = cljs.core.rest(arglist__20755);
return G__20754__delegate.call(this, x, p__20745);
});
return G__20754;
})()
;
atom = function(x,var_args){
var p__20745 = var_args;
switch(arguments.length){
case  1 :
return atom__20751.call(this,x);
default:
return atom__20752.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__20752.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____20756 = a.validator;

if(cljs.core.truth_(temp__3698__auto____20756))
{var validate__20757 = temp__3698__auto____20756;

if(cljs.core.truth_(validate__20757.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__20758 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__20758,new_value);
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
var swap_BANG___20759 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___20760 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___20761 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___20762 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___20763 = (function() { 
var G__20765__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__20765 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__20765__delegate.call(this, a, f, x, y, z, more);
};
G__20765.cljs$lang$maxFixedArity = 5;
G__20765.cljs$lang$applyTo = (function (arglist__20766){
var a = cljs.core.first(arglist__20766);
var f = cljs.core.first(cljs.core.next(arglist__20766));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20766)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__20766))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__20766)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__20766)))));
return G__20765__delegate.call(this, a, f, x, y, z, more);
});
return G__20765;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___20759.call(this,a,f);
case  3 :
return swap_BANG___20760.call(this,a,f,x);
case  4 :
return swap_BANG___20761.call(this,a,f,x,y);
case  5 :
return swap_BANG___20762.call(this,a,f,x,y,z);
default:
return swap_BANG___20763.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___20763.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__20767){
var iref = cljs.core.first(arglist__20767);
var f = cljs.core.first(cljs.core.next(arglist__20767));
var args = cljs.core.rest(cljs.core.next(arglist__20767));
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
var gensym__20768 = (function (){
return gensym.call(null,"G__");
});
var gensym__20769 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__20768.call(this);
case  1 :
return gensym__20769.call(this,prefix_string);
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
var this__20771 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__20771.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__20772 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__20772.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__20772.state,this__20772.f);
}
return cljs.core.deref.call(null,this__20772.state);
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
delay.cljs$lang$applyTo = (function (arglist__20773){
var body = cljs.core.seq( arglist__20773 );;
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
var map__20774__20775 = options;
var map__20774__20776 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__20774__20775))?cljs.core.apply.call(null,cljs.core.hash_map,map__20774__20775):map__20774__20775);
var keywordize_keys__20777 = cljs.core.get.call(null,map__20774__20776,"﷐'keywordize-keys");
var keyfn__20778 = (cljs.core.truth_(keywordize_keys__20777)?cljs.core.keyword:cljs.core.str);
var f__20784 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____20783 = (function iter__20779(s__20780){
return (new cljs.core.LazySeq(null,false,(function (){
var s__20780__20781 = s__20780;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__20780__20781)))
{var k__20782 = cljs.core.first.call(null,s__20780__20781);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__20778.call(null,k__20782),thisfn.call(null,(x[k__20782]))]),iter__20779.call(null,cljs.core.rest.call(null,s__20780__20781)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____20783.call(null,cljs.core.js_keys.call(null,x));
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

return f__20784.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__20785){
var x = cljs.core.first(arglist__20785);
var options = cljs.core.rest(arglist__20785);
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
var mem__20786 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__20790__delegate = function (args){
var temp__3695__auto____20787 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__20786),args);

if(cljs.core.truth_(temp__3695__auto____20787))
{var v__20788 = temp__3695__auto____20787;

return v__20788;
} else
{var ret__20789 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__20786,cljs.core.assoc,args,ret__20789);
return ret__20789;
}
};
var G__20790 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__20790__delegate.call(this, args);
};
G__20790.cljs$lang$maxFixedArity = 0;
G__20790.cljs$lang$applyTo = (function (arglist__20791){
var args = cljs.core.seq( arglist__20791 );;
return G__20790__delegate.call(this, args);
});
return G__20790;
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
var trampoline__20793 = (function (f){
while(true){
var ret__20792 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__20792)))
{{
var G__20796 = ret__20792;
f = G__20796;
continue;
}
} else
{return ret__20792;
}
break;
}
});
var trampoline__20794 = (function() { 
var G__20797__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__20797 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__20797__delegate.call(this, f, args);
};
G__20797.cljs$lang$maxFixedArity = 1;
G__20797.cljs$lang$applyTo = (function (arglist__20798){
var f = cljs.core.first(arglist__20798);
var args = cljs.core.rest(arglist__20798);
return G__20797__delegate.call(this, f, args);
});
return G__20797;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__20793.call(this,f);
default:
return trampoline__20794.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__20794.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__20799 = (function (){
return rand.call(null,1);
});
var rand__20800 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__20799.call(this);
case  1 :
return rand__20800.call(this,n);
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
var k__20802 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__20802,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__20802,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___20811 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___20812 = (function (h,child,parent){
var or__3548__auto____20803 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____20803))
{return or__3548__auto____20803;
} else
{var or__3548__auto____20804 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____20804))
{return or__3548__auto____20804;
} else
{var and__3546__auto____20805 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____20805))
{var and__3546__auto____20806 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____20806))
{var and__3546__auto____20807 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____20807))
{var ret__20808 = true;
var i__20809 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____20810 = cljs.core.not.call(null,ret__20808);

if(cljs.core.truth_(or__3548__auto____20810))
{return or__3548__auto____20810;
} else
{return cljs.core._EQ_.call(null,i__20809,cljs.core.count.call(null,parent));
}
})()))
{return ret__20808;
} else
{{
var G__20814 = isa_QMARK_.call(null,h,child.call(null,i__20809),parent.call(null,i__20809));
var G__20815 = (i__20809 + 1);
ret__20808 = G__20814;
i__20809 = G__20815;
continue;
}
}
break;
}
} else
{return and__3546__auto____20807;
}
} else
{return and__3546__auto____20806;
}
} else
{return and__3546__auto____20805;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___20811.call(this,h,child);
case  3 :
return isa_QMARK___20812.call(this,h,child,parent);
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
var parents__20816 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__20817 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__20816.call(this,h);
case  2 :
return parents__20817.call(this,h,tag);
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
var ancestors__20819 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__20820 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__20819.call(this,h);
case  2 :
return ancestors__20820.call(this,h,tag);
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
var descendants__20822 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__20823 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__20822.call(this,h);
case  2 :
return descendants__20823.call(this,h,tag);
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
var derive__20833 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__20834 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__20828 = "﷐'parents".call(null,h);
var td__20829 = "﷐'descendants".call(null,h);
var ta__20830 = "﷐'ancestors".call(null,h);
var tf__20831 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____20832 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__20828.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__20830.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__20830.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__20828,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__20831.call(null,"﷐'ancestors".call(null,h),tag,td__20829,parent,ta__20830),"﷐'descendants":tf__20831.call(null,"﷐'descendants".call(null,h),parent,ta__20830,tag,td__20829)});
})());

if(cljs.core.truth_(or__3548__auto____20832))
{return or__3548__auto____20832;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__20833.call(this,h,tag);
case  3 :
return derive__20834.call(this,h,tag,parent);
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
var underive__20840 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__20841 = (function (h,tag,parent){
var parentMap__20836 = "﷐'parents".call(null,h);
var childsParents__20837 = (cljs.core.truth_(parentMap__20836.call(null,tag))?cljs.core.disj.call(null,parentMap__20836.call(null,tag),parent):cljs.core.set([]));
var newParents__20838 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__20837))?cljs.core.assoc.call(null,parentMap__20836,tag,childsParents__20837):cljs.core.dissoc.call(null,parentMap__20836,tag));
var deriv_seq__20839 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__20825_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__20825_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__20825_SHARP_),cljs.core.second.call(null,p1__20825_SHARP_)));
}),cljs.core.seq.call(null,newParents__20838)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__20836.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__20826_SHARP_,p2__20827_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__20826_SHARP_,p2__20827_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__20839));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__20840.call(this,h,tag);
case  3 :
return underive__20841.call(this,h,tag,parent);
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
var xprefs__20843 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____20845 = (cljs.core.truth_((function (){var and__3546__auto____20844 = xprefs__20843;

if(cljs.core.truth_(and__3546__auto____20844))
{return xprefs__20843.call(null,y);
} else
{return and__3546__auto____20844;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____20845))
{return or__3548__auto____20845;
} else
{var or__3548__auto____20847 = (function (){var ps__20846 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__20846) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__20846),prefer_table)))
{} else
{}
{
var G__20850 = cljs.core.rest.call(null,ps__20846);
ps__20846 = G__20850;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____20847))
{return or__3548__auto____20847;
} else
{var or__3548__auto____20849 = (function (){var ps__20848 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__20848) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__20848),y,prefer_table)))
{} else
{}
{
var G__20851 = cljs.core.rest.call(null,ps__20848);
ps__20848 = G__20851;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____20849))
{return or__3548__auto____20849;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____20852 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____20852))
{return or__3548__auto____20852;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__20861 = cljs.core.reduce.call(null,(function (be,p__20853){
var vec__20854__20855 = p__20853;
var k__20856 = cljs.core.nth.call(null,vec__20854__20855,0,null);
var ___20857 = cljs.core.nth.call(null,vec__20854__20855,1,null);
var e__20858 = vec__20854__20855;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__20856)))
{var be2__20860 = (cljs.core.truth_((function (){var or__3548__auto____20859 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____20859))
{return or__3548__auto____20859;
} else
{return cljs.core.dominates.call(null,k__20856,cljs.core.first.call(null,be),prefer_table);
}
})())?e__20858:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__20860),k__20856,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__20856," and ",cljs.core.first.call(null,be2__20860),", and neither is preferred")));
}
return be2__20860;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__20861))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__20861));
return cljs.core.second.call(null,best_entry__20861);
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
if(cljs.core.truth_((function (){var and__3546__auto____20862 = mf;

if(cljs.core.truth_(and__3546__auto____20862))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____20862;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____20863 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____20863))
{return or__3548__auto____20863;
} else
{var or__3548__auto____20864 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____20864))
{return or__3548__auto____20864;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____20865 = mf;

if(cljs.core.truth_(and__3546__auto____20865))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____20865;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____20866 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____20866))
{return or__3548__auto____20866;
} else
{var or__3548__auto____20867 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____20867))
{return or__3548__auto____20867;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____20868 = mf;

if(cljs.core.truth_(and__3546__auto____20868))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____20868;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____20869 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____20869))
{return or__3548__auto____20869;
} else
{var or__3548__auto____20870 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____20870))
{return or__3548__auto____20870;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____20871 = mf;

if(cljs.core.truth_(and__3546__auto____20871))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____20871;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____20872 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____20872))
{return or__3548__auto____20872;
} else
{var or__3548__auto____20873 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____20873))
{return or__3548__auto____20873;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____20874 = mf;

if(cljs.core.truth_(and__3546__auto____20874))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____20874;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____20875 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____20875))
{return or__3548__auto____20875;
} else
{var or__3548__auto____20876 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____20876))
{return or__3548__auto____20876;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____20877 = mf;

if(cljs.core.truth_(and__3546__auto____20877))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____20877;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____20878 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____20878))
{return or__3548__auto____20878;
} else
{var or__3548__auto____20879 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____20879))
{return or__3548__auto____20879;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____20880 = mf;

if(cljs.core.truth_(and__3546__auto____20880))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____20880;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____20881 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____20881))
{return or__3548__auto____20881;
} else
{var or__3548__auto____20882 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____20882))
{return or__3548__auto____20882;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____20883 = mf;

if(cljs.core.truth_(and__3546__auto____20883))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____20883;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____20884 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____20884))
{return or__3548__auto____20884;
} else
{var or__3548__auto____20885 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____20885))
{return or__3548__auto____20885;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__20886 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__20887 = cljs.core._get_method.call(null,mf,dispatch_val__20886);

if(cljs.core.truth_(target_fn__20887))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__20886)));
}
return cljs.core.apply.call(null,target_fn__20887,args);
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
var this__20888 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__20889 = this;
cljs.core.swap_BANG_.call(null,this__20889.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__20889.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__20889.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__20889.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__20890 = this;
cljs.core.swap_BANG_.call(null,this__20890.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__20890.method_cache,this__20890.method_table,this__20890.cached_hierarchy,this__20890.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__20891 = this;
cljs.core.swap_BANG_.call(null,this__20891.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__20891.method_cache,this__20891.method_table,this__20891.cached_hierarchy,this__20891.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__20892 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__20892.cached_hierarchy),cljs.core.deref.call(null,this__20892.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__20892.method_cache,this__20892.method_table,this__20892.cached_hierarchy,this__20892.hierarchy);
}
var temp__3695__auto____20893 = cljs.core.deref.call(null,this__20892.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____20893))
{var target_fn__20894 = temp__3695__auto____20893;

return target_fn__20894;
} else
{var temp__3695__auto____20895 = cljs.core.find_and_cache_best_method.call(null,this__20892.name,dispatch_val,this__20892.hierarchy,this__20892.method_table,this__20892.prefer_table,this__20892.method_cache,this__20892.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____20895))
{var target_fn__20896 = temp__3695__auto____20895;

return target_fn__20896;
} else
{return cljs.core.deref.call(null,this__20892.method_table).call(null,this__20892.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__20897 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__20897.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__20897.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__20897.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__20897.method_cache,this__20897.method_table,this__20897.cached_hierarchy,this__20897.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__20898 = this;
return cljs.core.deref.call(null,this__20898.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__20899 = this;
return cljs.core.deref.call(null,this__20899.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__20900 = this;
return cljs.core.do_dispatch.call(null,mf,this__20900.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__20901__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__20901 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__20901__delegate.call(this, _, args);
};
G__20901.cljs$lang$maxFixedArity = 1;
G__20901.cljs$lang$applyTo = (function (arglist__20902){
var _ = cljs.core.first(arglist__20902);
var args = cljs.core.rest(arglist__20902);
return G__20901__delegate.call(this, _, args);
});
return G__20901;
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
