(ns ebta-ui.core
  (:require [goog.dom :as gdom]
            [goog.string :as gstring]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [ebta-ui.app-data :refer [init-data]]
            [ebta-ui.parser :as p]
            [ebta-ui.view.home :refer [header home-body footer]]))

(enable-console-print!)

;(defn nav-item
;  [{:keys [nav-menu/name active icon url]}]
;  (dom/li #js {:className (str "tab-item " (when active "active"))
;               :key name}
;    (dom/a #js {:href (str url)}
;      (when icon (dom/span #js {:className (str "icon " icon)}))
;      (str " " name))))
;
;(defn option [{:keys [subject/name]}]
;  (dom/option #js {:key name} name))
;
;(defn pick-random [messages]
;  (get messages (rand-int (inc (count messages)))))
;
;(defn quote-msg [messages]
;  (let [{:keys [message/quote message/author]} (pick-random messages)]
;    (dom/div #js {:className "centered"}
;      (dom/h2 nil (dom/em nil (str \" quote \")))
;      (dom/h3 #js {:className "text-right"} (str "-" author)))))
;
;(defn header [title top-nav-menus]
;  (dom/header #js {:className "navbar"}
;    (dom/section #js {:className "navbar-section"}
;      (dom/a #js {:className "navbar-brand"
;                  :href "#"}
;        (dom/i #js {:className "icon icon-pages"})
;        (str " " title)))
;    (dom/section #js {:className "navbar-section"}
;      (dom/ul #js {:className "tab inline-flex"}
;        (map nav-item top-nav-menus)))))
;
;(defn home-body [subjects placeholder messages]
;  (dom/section #js {:className "body section columns"}
;    (dom/div #js {:className "container"}
;      (dom/div #js {:className "search-form centered"}
;        (dom/form #js {:className "form-horizontal"}
;          (dom/div #js {:className "input-group"}
;            (dom/select #js {:className "form-select select-lg"}
;              (map option subjects))
;            (dom/input #js {:className "form-input input-lg"
;                            :type "text"
;                            :placeholder placeholder})
;            (dom/button #js {:className "btn btn-primary input-group-btn btn-lg"}
;              (dom/span #js {:className "icon icon-search"})))))
;      (quote-msg messages))))
;
;(defn footer [copyright bottom-nav-menus]
;  (let [{:keys [copy year by]} copyright]
;    (dom/footer #js {:className "aligncenter"}
;      (dom/hr #js {:className "style14"})
;      (dom/div nil
;        (dom/ul #js {:className "tab inline-flex"}
;          (map nav-item bottom-nav-menus)))
;      (dom/div #js {:className "xmargin-10"}
;        (dom/span nil
;          (str (gstring/unescapeEntities "&copy; ")
;               (str copy " " year " - " by)))))))

(defui RootView
  static om/IQuery
  (query [this]
    `[:title
      :nav-menu/by-id
      :search/placeholder
      :subjects
      :messages
      :copyright])
  Object
  (render [this]
    (let [{:keys [title subjects search/placeholder messages copyright] :as env} (om/props this)
          top-nav-menus (subvec (:nav-menu/by-id env) 0 4)
          bottom-nav-menus (subvec (:nav-menu/by-id env) 4 7)]
      (dom/div #js {:id "reactive"}
        (header title top-nav-menus)
        (home-body subjects placeholder messages)
        (footer copyright bottom-nav-menus)))))

(def reconciler
  (om/reconciler {:state init-data
                  :parser (om/parser {:read p/read})}))

(om/add-root! reconciler
              RootView (gdom/getElement "app"))
