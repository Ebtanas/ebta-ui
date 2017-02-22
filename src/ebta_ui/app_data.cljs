(ns ebta-ui.app-data)

(def app-data (atom {:title "Ebtanas"
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
                                 :by "Indonesia"}}))