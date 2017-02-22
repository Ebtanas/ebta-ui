// Compiled by ClojureScript 1.9.473 {}
goog.provide('ebta_ui.parser_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('om.next');
goog.require('ebta_ui.parser');
goog.require('ebta_ui.app_data');
cljs.core.enable_console_print_BANG_.call(null);
ebta_ui.parser_test.parser_tester = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),ebta_ui.parser.read], null));
ebta_ui.parser_test.test_test = (function ebta_ui$parser_test$test_test(){
return cljs.test.test_var.call(null,ebta_ui.parser_test.test_test.cljs$lang$var);
});
ebta_ui.parser_test.test_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing test work or not.");

try{try{var values__11395__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(1));
var result__11396__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__11395__auto__);
if(cljs.core.truth_(result__11396__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__11395__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8196__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11395__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8196__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__11396__auto__;
}catch (e18392){var t__11433__auto__ = e18392;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__11433__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

ebta_ui.parser_test.test_test.cljs$lang$var = new cljs.core.Var(function(){return ebta_ui.parser_test.test_test;},new cljs.core.Symbol("ebta-ui.parser-test","test-test","ebta-ui.parser-test/test-test",-890687587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ebta-ui.parser-test","ebta-ui.parser-test",-743162884,null),new cljs.core.Symbol(null,"test-test","test-test",-1805561578,null),"test/ebta_ui/parser_test.cljs",19,1,11,11,cljs.core.List.EMPTY,null,(cljs.core.truth_(ebta_ui.parser_test.test_test)?ebta_ui.parser_test.test_test.cljs$lang$test:null)]));
ebta_ui.parser_test.read_test = (function ebta_ui$parser_test$read_test(){
return cljs.test.test_var.call(null,ebta_ui.parser_test.read_test.cljs$lang$var);
});
ebta_ui.parser_test.read_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"One dimentional read test.");

try{try{var values__11395__auto__ = (function (){var x__8196__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Ebtanas"], null);
return cljs.core._conj.call(null,(function (){var x__8196__auto____$1 = ebta_ui.parser_test.parser_tester.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),ebta_ui.app_data.init_data], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8196__auto____$1);
})(),x__8196__auto__);
})();
var result__11396__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__11395__auto__);
if(cljs.core.truth_(result__11396__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Ebtanas"], null),cljs.core.list(new cljs.core.Symbol(null,"parser-tester","parser-tester",1858297634,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol(null,"init-data","init-data",2013342775,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583)], null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__11395__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Ebtanas"], null),cljs.core.list(new cljs.core.Symbol(null,"parser-tester","parser-tester",1858297634,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol(null,"init-data","init-data",2013342775,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583)], null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8196__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11395__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8196__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__11396__auto__;
}catch (e18393){var t__11433__auto__ = e18393;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Ebtanas"], null),cljs.core.list(new cljs.core.Symbol(null,"parser-tester","parser-tester",1858297634,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol(null,"init-data","init-data",2013342775,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583)], null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__11433__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

ebta_ui.parser_test.read_test.cljs$lang$var = new cljs.core.Var(function(){return ebta_ui.parser_test.read_test;},new cljs.core.Symbol("ebta-ui.parser-test","read-test","ebta-ui.parser-test/read-test",415058773,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ebta-ui.parser-test","ebta-ui.parser-test",-743162884,null),new cljs.core.Symbol(null,"read-test","read-test",-884625956,null),"test/ebta_ui/parser_test.cljs",19,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(ebta_ui.parser_test.read_test)?ebta_ui.parser_test.read_test.cljs$lang$test:null)]));

//# sourceMappingURL=parser_test.js.map