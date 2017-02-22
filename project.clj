(defproject ebta-ui "0.1.0-SNAPSHOT"
  :description "Ebtanas UI"
  :dependencies [[org.clojure/clojure "1.9.0-alpha14"]
                 [org.clojure/clojurescript "1.9.473"]
                 [org.omcljs/om "1.0.0-alpha47"]
                 [datascript "0.15.5"]
                 [figwheel-sidecar "0.5.9" :scope "test"]]
  :plugins [[lein-cljsbuild "1.1.5"]
            [lein-figwheel "0.5.9"]
            [lein-doo "0.1.7"]]
  :figwheel {:css-dirs ["resources/public/css"]}
  :cljsbuild {:builds [{:id "test"
                        :source-paths ["src" "test"]
                        :compiler {:main 'ebta-ui.test-runner
                                   :output-to "resources/public/js/compiled/testing_test.js"
                                   :output-dir "target"
                                   :optimizations :none
                                   :target :nodejs}}]})