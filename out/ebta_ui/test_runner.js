// Compiled by ClojureScript 1.9.473 {}
goog.provide('ebta_ui.test_runner');
goog.require('cljs.core');
goog.require('doo.runner');
goog.require('ebta_ui.parser_test');
cljs.core.enable_console_print_BANG_.call(null);
ebta_ui.test_runner.run_all_tests = (function ebta_ui$test_runner$run_all_tests(){
return doo.runner.set_entry_point_BANG_.call(null,(cljs.core.truth_(doo.runner.karma_QMARK_.call(null))?(function (tc__18419__auto__){
jx.reporter.karma.start.call(null,tc__18419__auto__,2);

return cljs.test.run_block.call(null,(function (){var env18431 = cljs.test.empty_env.call(null,new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826));
var summary18432 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env18431,summary18432){
return (function (){
cljs.test.set_env_BANG_.call(null,env18431);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"ebta-ui.parser-test","ebta-ui.parser-test",-743162884,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__11501__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__11501__auto__,env18431,summary18432){
return (function (){
if((env__11501__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__11501__auto__,env18431,summary18432))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return ebta_ui.parser_test.test_test;},new cljs.core.Symbol("ebta-ui.parser-test","test-test","ebta-ui.parser-test/test-test",-890687587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ebta-ui.parser-test","ebta-ui.parser-test",-743162884,null),new cljs.core.Symbol(null,"test-test","test-test",-1805561578,null),"test/ebta_ui/parser_test.cljs",19,1,11,11,cljs.core.List.EMPTY,null,(cljs.core.truth_(ebta_ui.parser_test.test_test)?ebta_ui.parser_test.test_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return ebta_ui.parser_test.read_test;},new cljs.core.Symbol("ebta-ui.parser-test","read-test","ebta-ui.parser-test/read-test",415058773,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ebta-ui.parser-test","ebta-ui.parser-test",-743162884,null),new cljs.core.Symbol(null,"read-test","read-test",-884625956,null),"test/ebta_ui/parser_test.cljs",19,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(ebta_ui.parser_test.read_test)?ebta_ui.parser_test.read_test.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__11501__auto__,env18431,summary18432){
return (function (){
if((env__11501__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__11501__auto__,env18431,summary18432))
], null));
})());
});})(env18431,summary18432))
,((function (env18431,summary18432){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"ebta-ui.parser-test","ebta-ui.parser-test",-743162884,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env18431,summary18432))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env18431,summary18432){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary18432,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary18432),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env18431,summary18432))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env18431,summary18432){
return (function (){
cljs.test.set_env_BANG_.call(null,env18431);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary18432));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary18432),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env18431,summary18432))
], null));
})());
}):(function (){
return cljs.test.run_block.call(null,(function (){var env18433 = cljs.test.empty_env.call(null);
var summary18434 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env18433,summary18434){
return (function (){
cljs.test.set_env_BANG_.call(null,env18433);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"ebta-ui.parser-test","ebta-ui.parser-test",-743162884,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__11501__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__11501__auto__,env18433,summary18434){
return (function (){
if((env__11501__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__11501__auto__,env18433,summary18434))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return ebta_ui.parser_test.test_test;},new cljs.core.Symbol("ebta-ui.parser-test","test-test","ebta-ui.parser-test/test-test",-890687587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ebta-ui.parser-test","ebta-ui.parser-test",-743162884,null),new cljs.core.Symbol(null,"test-test","test-test",-1805561578,null),"test/ebta_ui/parser_test.cljs",19,1,11,11,cljs.core.List.EMPTY,null,(cljs.core.truth_(ebta_ui.parser_test.test_test)?ebta_ui.parser_test.test_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return ebta_ui.parser_test.read_test;},new cljs.core.Symbol("ebta-ui.parser-test","read-test","ebta-ui.parser-test/read-test",415058773,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ebta-ui.parser-test","ebta-ui.parser-test",-743162884,null),new cljs.core.Symbol(null,"read-test","read-test",-884625956,null),"test/ebta_ui/parser_test.cljs",19,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(ebta_ui.parser_test.read_test)?ebta_ui.parser_test.read_test.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__11501__auto__,env18433,summary18434){
return (function (){
if((env__11501__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__11501__auto__,env18433,summary18434))
], null));
})());
});})(env18433,summary18434))
,((function (env18433,summary18434){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"ebta-ui.parser-test","ebta-ui.parser-test",-743162884,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env18433,summary18434))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env18433,summary18434){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary18434,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary18434),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env18433,summary18434))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env18433,summary18434){
return (function (){
cljs.test.set_env_BANG_.call(null,env18433);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary18434));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary18434),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env18433,summary18434))
], null));
})());
})));
});

//# sourceMappingURL=test_runner.js.map