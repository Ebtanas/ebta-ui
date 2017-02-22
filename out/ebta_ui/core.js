// Compiled by ClojureScript 1.9.473 {}
goog.provide('ebta_ui.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('om.next');
goog.require('om.dom');
goog.require('ebta_ui.app_data');
goog.require('ebta_ui.parser');
cljs.core.enable_console_print_BANG_.call(null);
ebta_ui.core.nav_item = (function ebta_ui$core$nav_item(p__18437){
var map__18440 = p__18437;
var map__18440__$1 = ((((!((map__18440 == null)))?((((map__18440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18440.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18440):map__18440);
var title = cljs.core.get.call(null,map__18440__$1,new cljs.core.Keyword(null,"title","title",636505583));
var active = cljs.core.get.call(null,map__18440__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var url = cljs.core.get.call(null,map__18440__$1,new cljs.core.Keyword(null,"url","url",276297046));
var icon = cljs.core.get.call(null,map__18440__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return om.dom.li.call(null,({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("tab-item "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?"active":null))].join(''), "key": title}),om.dom.a.call(null,({"href": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('')}),(cljs.core.truth_(icon)?om.dom.span.call(null,({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("icon "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)].join('')})):null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join('')));
});
ebta_ui.core.option = (function ebta_ui$core$option(subject){
return om.dom.option.call(null,({"key": subject}),subject);
});
ebta_ui.core.quote_msg = (function ebta_ui$core$quote_msg(p__18442){
var map__18445 = p__18442;
var map__18445__$1 = ((((!((map__18445 == null)))?((((map__18445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18445.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18445):map__18445);
var quote_msg = cljs.core.get.call(null,map__18445__$1,new cljs.core.Keyword(null,"quote-msg","quote-msg",159539064));
var author = cljs.core.get.call(null,map__18445__$1,new cljs.core.Keyword(null,"author","author",2111686192));
return om.dom.div.call(null,({"className": "centered"}),om.dom.h2.call(null,null,om.dom.em.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(quote_msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join(''))),om.dom.h3.call(null,({"className": "text-right"}),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(author)].join('')));
});
ebta_ui.core.header = (function ebta_ui$core$header(){
return om.dom.header.call(null,({"className": "navbar"}),om.dom.section.call(null,({"className": "navbar-section"}),om.dom.a.call(null,({"className": "navbar-brand", "href": "#"}),om.dom.i.call(null,({"className": "icon icon-pages"})),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.deref.call(null,ebta_ui.app_data.init_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583)], null)))].join(''))),om.dom.section.call(null,({"className": "navbar-section"}),om.dom.ul.call(null,({"className": "tab inline-flex"}),cljs.core.map.call(null,ebta_ui.core.nav_item,cljs.core.get_in.call(null,cljs.core.deref.call(null,ebta_ui.app_data.init_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-nav","top-nav",675249516)], null))))));
});
ebta_ui.core.body = (function ebta_ui$core$body(){
return om.dom.section.call(null,({"className": "body section columns"}),om.dom.div.call(null,({"className": "container"}),om.dom.div.call(null,({"className": "search-form centered"}),om.dom.form.call(null,({"className": "form-horizontal"}),om.dom.div.call(null,({"className": "input-group"}),om.dom.select.call(null,({"className": "form-select select-lg"}),cljs.core.map.call(null,ebta_ui.core.option,cljs.core.cons.call(null,"Semua",cljs.core.get_in.call(null,cljs.core.deref.call(null,ebta_ui.app_data.init_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subject","subject",-1411880451)], null))))),om.dom.input.call(null,({"className": "form-input input-lg", "type": "text", "placeholder": "Cari di sini..."})),om.dom.button.call(null,({"className": "btn btn-primary input-group-btn btn-lg"}),om.dom.span.call(null,({"className": "icon icon-search"})))))),ebta_ui.core.quote_msg.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,ebta_ui.app_data.init_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null)))));
});
ebta_ui.core.footer = (function ebta_ui$core$footer(){
return om.dom.footer.call(null,({"className": "aligncenter"}),om.dom.hr.call(null,({"className": "style14"})),om.dom.div.call(null,null,om.dom.ul.call(null,({"className": "tab inline-flex"}),cljs.core.map.call(null,ebta_ui.core.nav_item,cljs.core.get_in.call(null,cljs.core.deref.call(null,ebta_ui.app_data.init_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bottom-nav","bottom-nav",647390047)], null))))),om.dom.div.call(null,({"className": "xmargin-10"}),om.dom.span.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.unescapeEntities("&copy; ")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.deref.call(null,ebta_ui.app_data.init_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"copyright","copyright",-1829660853),new cljs.core.Keyword(null,"year","year",335913393)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" - Hak Cipta "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.deref.call(null,ebta_ui.app_data.init_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"copyright","copyright",-1829660853),new cljs.core.Keyword(null,"by","by",30600856)], null)))].join(''))));
});
/**
 * @constructor
 */
ebta_ui.core.RootView = (function ebta_ui$core$RootView(){
var this__16290__auto__ = this;
React.Component.apply(this__16290__auto__,arguments);

if(!((this__16290__auto__.initLocalState == null))){
this__16290__auto__.state = this__16290__auto__.initLocalState();
} else {
this__16290__auto__.state = {};
}

return this__16290__auto__;
});

ebta_ui.core.RootView.prototype = goog.object.clone(React.Component.prototype);

var x18451_18461 = ebta_ui.core.RootView.prototype;
x18451_18461.componentWillUpdate = ((function (x18451_18461){
return (function (next_props__16145__auto__,next_state__16146__auto__){
var this__16144__auto__ = this;
if(((!((this__16144__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__16144__auto__.om$next$Ident$)))?true:false):false)){
var ident__16148__auto___18462 = om.next.ident.call(null,this__16144__auto__,om.next.props.call(null,this__16144__auto__));
var next_ident__16149__auto___18463 = om.next.ident.call(null,this__16144__auto__,om.next._next_props.call(null,next_props__16145__auto__,this__16144__auto__));
if(cljs.core.not_EQ_.call(null,ident__16148__auto___18462,next_ident__16149__auto___18463)){
var idxr__16150__auto___18464 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16144__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__16150__auto___18464 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__16150__auto___18464),((function (idxr__16150__auto___18464,ident__16148__auto___18462,next_ident__16149__auto___18463,this__16144__auto__,x18451_18461){
return (function (indexes__16151__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__16151__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__16148__auto___18462], null),cljs.core.disj,this__16144__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__16149__auto___18463], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__16144__auto__);
});})(idxr__16150__auto___18464,ident__16148__auto___18462,next_ident__16149__auto___18463,this__16144__auto__,x18451_18461))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__16144__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__16144__auto__);
});})(x18451_18461))
;

x18451_18461.shouldComponentUpdate = ((function (x18451_18461){
return (function (next_props__16145__auto__,next_state__16146__auto__){
var this__16144__auto__ = this;
var next_children__16147__auto__ = next_props__16145__auto__.children;
var next_props__16145__auto____$1 = goog.object.get(next_props__16145__auto__,"omcljs$value");
var next_props__16145__auto____$2 = (function (){var G__18453 = next_props__16145__auto____$1;
if((next_props__16145__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__18453);
} else {
return G__18453;
}
})();
var or__7262__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__16144__auto__),next_props__16145__auto____$2);
if(or__7262__auto__){
return or__7262__auto__;
} else {
var or__7262__auto____$1 = (function (){var and__7250__auto__ = this__16144__auto__.state;
if(cljs.core.truth_(and__7250__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__16144__auto__.state,"omcljs$state"),goog.object.get(next_state__16146__auto__,"omcljs$state"));
} else {
return and__7250__auto__;
}
})();
if(cljs.core.truth_(or__7262__auto____$1)){
return or__7262__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__16144__auto__.props.children,next_children__16147__auto__);
}
}
});})(x18451_18461))
;

x18451_18461.componentWillUnmount = ((function (x18451_18461){
return (function (){
var this__16144__auto__ = this;
var r__16155__auto__ = om.next.get_reconciler.call(null,this__16144__auto__);
var cfg__16156__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__16155__auto__);
var st__16157__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__16156__auto__);
var indexer__16154__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__16156__auto__);
if(cljs.core.truth_((function (){var and__7250__auto__ = !((st__16157__auto__ == null));
if(and__7250__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__16157__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__16144__auto__], null));
} else {
return and__7250__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__16157__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__16144__auto__);
} else {
}

if((indexer__16154__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__16154__auto__,this__16144__auto__);
}
});})(x18451_18461))
;

x18451_18461.componentDidUpdate = ((function (x18451_18461){
return (function (prev_props__16152__auto__,prev_state__16153__auto__){
var this__16144__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__16144__auto__);
});})(x18451_18461))
;

x18451_18461.isMounted = ((function (x18451_18461){
return (function (){
var this__16144__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__16144__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x18451_18461))
;

x18451_18461.componentWillMount = ((function (x18451_18461){
return (function (){
var this__16144__auto__ = this;
var indexer__16154__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__16144__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__16154__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__16154__auto__,this__16144__auto__);
}
});})(x18451_18461))
;

x18451_18461.render = ((function (x18451_18461){
return (function (){
var this__16143__auto__ = this;
var this$ = this__16143__auto__;
var _STAR_reconciler_STAR_18454 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_18455 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_18456 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_18457 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_18458 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__16143__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__16143__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__16143__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__16143__auto__);

om.next._STAR_parent_STAR_ = this__16143__auto__;

try{return om.dom.div.call(null,({"id": "reactive"}),ebta_ui.core.header.call(null),ebta_ui.core.body.call(null),ebta_ui.core.footer.call(null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_18458;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_18457;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_18456;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_18455;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_18454;
}});})(x18451_18461))
;


ebta_ui.core.RootView.prototype.constructor = ebta_ui.core.RootView;

ebta_ui.core.RootView.prototype.constructor.displayName = "ebta-ui.core/RootView";

ebta_ui.core.RootView.prototype.om$isComponent = true;

var x18459_18465 = ebta_ui.core.RootView;


var x18460_18466 = ebta_ui.core.RootView.prototype;


ebta_ui.core.RootView.cljs$lang$type = true;

ebta_ui.core.RootView.cljs$lang$ctorStr = "ebta-ui.core/RootView";

ebta_ui.core.RootView.cljs$lang$ctorPrWriter = (function (this__16293__auto__,writer__16294__auto__,opt__16295__auto__){
return cljs.core._write.call(null,writer__16294__auto__,"ebta-ui.core/RootView");
});
ebta_ui.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),ebta_ui.app_data.init_data,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),ebta_ui.parser.read], null))], null));
om.next.add_root_BANG_.call(null,ebta_ui.core.reconciler,ebta_ui.core.RootView,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map