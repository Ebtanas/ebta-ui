(ns ebta-ui.core
  (:require [goog.dom :as gdom]
            [goog.string :as gstring]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(enable-console-print!)

(def app-data {:title "Ebtanas"
               :top-nav [{:title "Halaman Utama"
                          :active true
                          :url "#"
                          :icon "icon-home"}
                         {:title "Koleksi Soal"
                          :active false
                          :url "#"
                          :icon "icon-library_books"}
                         {:title "Daftar Anggota"
                          :active false
                          :url "#"
                          :icon "icon-people"}
                         {:title "Masuk"
                          :active false
                          :url "#"
                          :icon "icon-exit_to_app"}]
               :bottom-nav [{:title "Kebijakan Privasi"
                             :url "#"}
                            {:title "Contekan"
                             :url "#"}
                            {:title "Misi Ebtanas"
                             :url "#"}]
               :subject ["Matematika"
                         "B. Indonesia"
                         "B. Inggris"
                         "Fisika"
                         "Kimia"
                         "Biologi"
                         "Sosiologi"
                         "Geografi"
                         "Ekonomi"
                         "Sejarah"]
               :message {:quote-msg "Any fool can make something complicated.
                                     It takes a genius to make it simple"
                         :author "Woody Guthrie"}
               :copyright {:year 2017
                           :by "Indonesia"}})

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

(defui Header
  Object
  (render [this]
    (dom/header #js {:className "navbar"}
      (dom/section #js {:className "navbar-section"}
        (dom/a #js {:className "navbar-brand"
                    :href "#"}
          (dom/i #js {:className "icon icon-pages"})
          (str " " (get-in app-data [:title]))))
      (dom/section #js {:className "navbar-section"}
        (dom/ul #js {:className "tab inline-flex"}
          (map nav-item (get-in app-data [:top-nav])))))))

(def header (om/factory Header))

(defui Body
  Object
  (render [this]
    (dom/section #js {:className "body section columns"}
      (dom/div #js {:className "container"}
        (dom/div #js {:className "search-form centered"}
          (dom/form #js {:className "form-horizontal"}
            (dom/div #js {:className "input-group"}
              (dom/select #js {:className "form-select select-lg"}
                (map option (cons "Semua" (get-in app-data [:subject]))))
              (dom/input #js {:className "form-input input-lg"
                              :type "text"
                              :placeholder "Cari di sini..."})
              (dom/button #js {:className "btn btn-primary input-group-btn btn-lg"}
                (dom/span #js {:className "icon icon-search"})))))
        (quote-msg (get-in app-data [:message]))))))

(def body (om/factory Body))

(defui Footer
  Object
  (render [this]
    (dom/footer #js {:className "aligncenter"}
      (dom/hr #js {:className "style14"})
      (dom/div nil
        (dom/ul #js {:className "tab inline-flex"}
          (map nav-item (get-in app-data [:bottom-nav]))))
      (dom/div #js {:className "xmargin-10"}
        (dom/span nil
          (str (gstring/unescapeEntities "&copy; ")
               (get-in app-data [:copyright :year])
               " - Hak Cipta "
               (get-in app-data [:copyright :by])))))))

(def footer (om/factory Footer))

(defui Root
  Object
  (render [this]
    (dom/div #js {:id "reactive"}
      (header)
      (body)
      (footer))))

(def root (om/factory Root))

(js/ReactDOM.render (root) (gdom/getElement "app"))
