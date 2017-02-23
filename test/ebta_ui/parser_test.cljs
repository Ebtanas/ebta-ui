(ns ebta-ui.parser-test
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [om.next :as om]
            [ebta-ui.parser :as p]
            [ebta-ui.app-data :refer [init-data]]))

(enable-console-print!)

(def parser-tester (om/parser {:read p/read}))

(deftest read-test
  (testing "One dimentional read test."
    (is (= {:title "Ebtanas"}
           (parser-tester {:state init-data} '[:title])))
    (is (= {:subjects [{:subject/name "Matematika"}
                       {:subject/name "B. Indonesia"}
                       {:subject/name "B. Inggris"}
                       {:subject/name "Fisika"}
                       {:subject/name "Kimia"}
                       {:subject/name "Biologi"}
                       {:subject/name "Sosiologi"}
                       {:subject/name "Geografi"}
                       {:subject/name "Ekonomi"}
                       {:subject/name "Sejarah"}]}
           (parser-tester {:state init-data} '[{:home-page [:subjects]}])))
    (is (= {:copyright {:copy "Hak Cipta" :year 2017 :by "Indonesia"}}
           (parser-tester {:state init-data} '[:copyright]))))
  (testing "Get nav-menu/item by range."
    (is (= {:nav-menu/by-id [{:nav-menu/id 1
                              :nav-menu/name "Halaman Utama"
                              :active true
                              :icon "icon-home"
                              :url "/"}
                             {:nav-menu/id 2
                              :nav-menu/name "Bank Soal"
                              :active false
                              :icon "icon-library_books"
                              :url "#"}
                             {:nav-menu/id 3
                              :nav-menu/name "Daftar Member"
                              :active false
                              :icon "icon-people"
                              :url "#"}
                             {:nav-menu/id 4
                              :nav-menu/name "Lojin"
                              :active false
                              :icon "icon-exit_to_app"
                              :url "/lojin"}]}
           (parser-tester {:state init-data} '[(:nav-menu/by-id {:start 1 :end 4})])))
    (is (= {:nav-menu/by-id [{:nav-menu/id 5
                              :nav-menu/name "Kebijakan Privasi"
                              :url "#"}
                             {:nav-menu/id 6
                              :nav-menu/name "Contekan"
                              :url "#"}
                             {:nav-menu/id 7
                              :nav-menu/name "Misi Ebtanas"
                              :url "#"}]}
           (parser-tester {:state init-data} '[(:nav-menu/by-id {:start 5 :end 7})])))))


