// Compiled by ClojureScript 1.9.473 {}
goog.provide('ebta_ui.parser');
goog.require('cljs.core');
ebta_ui.parser.get_nav_item = (function ebta_ui$parser$get_nav_item(st,id){
return cljs.core.get.call(null,st,id);
});
if(typeof ebta_ui.parser.read !== 'undefined'){
} else {
ebta_ui.parser.read = (function (){var method_table__8293__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8294__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8295__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8296__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8297__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ebta-ui.parser","read"),((function (method_table__8293__auto__,prefer_table__8294__auto__,method_cache__8295__auto__,cached_hierarchy__8296__auto__,hierarchy__8297__auto__){
return (function (env,key,params){
return key;
});})(method_table__8293__auto__,prefer_table__8294__auto__,method_cache__8295__auto__,cached_hierarchy__8296__auto__,hierarchy__8297__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8297__auto__,method_table__8293__auto__,prefer_table__8294__auto__,method_cache__8295__auto__,cached_hierarchy__8296__auto__));
})();
}
cljs.core._add_method.call(null,ebta_ui.parser.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__15670,key,params){
var map__15671 = p__15670;
var map__15671__$1 = ((((!((map__15671 == null)))?((((map__15671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15671.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15671):map__15671);
var env = map__15671__$1;
var state = cljs.core.get.call(null,map__15671__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__6751__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__6751__auto__)){
var vec__15673 = temp__6751__auto__;
var _ = cljs.core.nth.call(null,vec__15673,(0),null);
var value = cljs.core.nth.call(null,vec__15673,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
cljs.core._add_method.call(null,ebta_ui.parser.read,new cljs.core.Keyword("subject","by-id","subject/by-id",804030903),(function (p__15676,key,params){
var map__15677 = p__15676;
var map__15677__$1 = ((((!((map__15677 == null)))?((((map__15677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15677.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15677):map__15677);
var env = map__15677__$1;
var state = cljs.core.get.call(null,map__15677__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var parser = cljs.core.get.call(null,map__15677__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var st = cljs.core.deref.call(null,state);
return params;
}));

//# sourceMappingURL=parser.js.map