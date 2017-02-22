(ns ebta-ui.app-data)

(def app-data (atom {:title "Ebtanas"
                     :top-nav/by-id {1 {:top-nav/id 1
                                        :top-nav/title "Halaman Utama"
                                        :top-nav/active true
                                        :top-nav/url "#"
                                        :top-nav/icon "icon-home"}
                                     2 {:top-nav/id 2
                                        :top-nav/title "Koleksi Soal"
                                        :top-nav/active false
                                        :top-nav/url "#"
                                        :top-nav/icon "icon-library_books"}
                                     3 {:top-nav/id 3
                                        :top-nav/title "Daftar Anggota"
                                        :top-nav/active false
                                        :top-nav/url "#"
                                        :top-nav/icon "icon-people"}
                                     4 {:top-nav/id 4
                                        :top-nav/title "Masuk"
                                        :top-nav/active false
                                        :top-nav/url "#"
                                        :top-nav/icon "icon-exit_to_app"}}
                     :bottom-nav/by-id {1 {:bottom-nav/id 1
                                           :bottom-nav/title "Kebijakan Privasi"
                                           :bottom-nav/url "#"}
                                        2 {:bottom-nav/id 2
                                           :bottom-nav/title "Contekan"
                                           :bottom-nav/url "#"}
                                        3 {:bottom-nav/id 3
                                           :bottom-nav/title "Misi Ebtanas"
                                           :bottom-nav/url "#"}}
                     :subject/by-id {1 {:subject/id 1
                                        :subject/name "Matematika"}
                                     2 {:subject/id 2
                                        :subject/name "B. Indonesia"}
                                     3 {:subject/id 3
                                        :subject/name "B. Inggris"}
                                     4 {:subject/id 4
                                        :subject/name "Fisika"}
                                     5 {:subject/id 5
                                        :subject/name "Kimia"}
                                     6 {:subject/id 6
                                        :subject/name "Biologi"}
                                     7 {:subject/id 7
                                        :subject/name "Sosiologi"}
                                     8 {:subject/id 8
                                        :subject/name "Geografi"}
                                     9 {:subject/id 9
                                        :subject/name "Ekonomi"}
                                     10 {:subject/id 10
                                         :subject/name "Sejarah"}}
                     :message {:quote-msg "Any fool can make something complicated.
                                           It takes a genius to make it simple"
                               :author "Woody Guthrie"}
                     :copyright {:year 2017
                                 :by "Indonesia"}}))