(ns ebta-ui.parser-test
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [om.next :as om]
            [ebta-ui.parser :as p]
            [ebta-ui.app-data :refer [init-data]]))

(enable-console-print!)

(def parser-tester (om/parser {:read p/read}))

(deftest test-test
  (testing "Testing test work or not."
    (is (= 1 0))))

(deftest read-test
  (testing "One dimentional read test."
    (is (= {:title "Ebtanas"} (parser-tester {:state init-data} '[:title])))))

