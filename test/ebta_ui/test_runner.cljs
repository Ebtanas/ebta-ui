(ns ebta-ui.test-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [ebta-ui.parser-test]))

(enable-console-print!)

(doo-tests 'ebta-ui.parser-test)