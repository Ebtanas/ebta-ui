(ns ebta-ui.core
  (:require [goog.dom :as gdom]
            [goog.string :as gstring]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [ebta-ui.app-data :refer [init-data]]
            [ebta-ui.parser :as p]))

(enable-console-print!)

(defn nav-item
  [{:keys [title active url icon]}]
  (dom/li #js {:className (str "tab-item " (when active "active"))
               :key title}
    (dom/a #js {:href (str url)}
      (when icon (dom/span #js {:className (str "icon " icon)}))
      (str " " title))))

(defn option [subject]
  (dom/option #js {:key subject} subject))

(defn quote-msg [{:keys [quote-msg author]}]
  (dom/div #js {:className "centered"}
    (dom/h2 nil
      (dom/em nil (str \" quote-msg \")))
    (dom/h3 #js {:className "text-right"} (str "-" author))))

(defn header []
  (dom/header #js {:className "navbar"}
    (dom/section #js {:className "navbar-section"}
      (dom/a #js {:className "navbar-brand"
                  :href "#"}
        (dom/i #js {:className "icon icon-pages"})
        (str " " (get-in @init-data [:title]))))
    (dom/section #js {:className "navbar-section"}
      (dom/ul #js {:className "tab inline-flex"}
        (map nav-item (get-in @init-data [:top-nav]))))))

(defn body []
  (dom/section #js {:className "body section columns"}
    (dom/div #js {:className "container"}
      (dom/div #js {:className "search-form centered"}
        (dom/form #js {:className "form-horizontal"}
          (dom/div #js {:className "input-group"}
            (dom/select #js {:className "form-select select-lg"}
              (map option (cons "Semua" (get-in @init-data [:subject]))))
            (dom/input #js {:className "form-input input-lg"
                            :type "text"
                            :placeholder "Cari di sini..."})
            (dom/button #js {:className "btn btn-primary input-group-btn btn-lg"}
              (dom/span #js {:className "icon icon-search"})))))
      (quote-msg (get-in @init-data [:message])))))

(defn footer []
  (dom/footer #js {:className "aligncenter"}
    (dom/hr #js {:className "style14"})
    (dom/div nil
      (dom/ul #js {:className "tab inline-flex"}
        (map nav-item (get-in @init-data [:bottom-nav]))))
    (dom/div #js {:className "xmargin-10"}
      (dom/span nil
        (str (gstring/unescapeEntities "&copy; ")
             (get-in @init-data [:copyright :year])
             " - Hak Cipta "
             (get-in @init-data [:copyright :by]))))))

(defui RootView
  Object
  (render [this]
    (dom/div #js {:id "reactive"}
      (header)
      (body)
      (footer))))

(def reconciler
  (om/reconciler {:state init-data
                  :parser (om/parser {:read p/read})}))

(om/add-root! reconciler
              RootView (gdom/getElement "app"))
