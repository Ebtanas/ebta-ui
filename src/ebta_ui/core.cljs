(ns ebta-ui.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            ;[compassus.core :as c]
            [ebta-ui.app-data :refer [init-data]]
            [ebta-ui.parser :as p]
            [ebta-ui.views.home :as hm :refer [header footer]]
            [ebta-ui.views.login :as ln]
            [cljs.pprint :refer [pprint]]))

(enable-console-print!)

(defui RootView
  static om/IQuery
  (query [this]
    (into []
     (concat
       [:title
        :nav-menu/by-id
        :copyright]
       (om/get-query hm/Home)
       (om/get-query ln/Login))))
  Object
  (render [this]
    (let [{:keys [title copyright] :as env} (om/props this)
          menus (:nav-menu/by-id env)]
      (dom/div #js {:id "reactive"}
        ;(pprint env)
        (header title (subvec menus 0 4))
        (ln/login (:login-page env))
        ;(hm/home env)
        (footer copyright (subvec menus 4 7))))))

(def reconciler
  (om/reconciler {:state init-data
                  :parser (om/parser {:read p/read})}))

(om/add-root! reconciler
              RootView (gdom/getElement "app"))
