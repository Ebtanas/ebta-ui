(ns ebta-ui.app-data)

(def init-data (atom {:title "Ebtanas"
                      :search/placeholder "Cari di sini..."
                      :nav-menu/by-id {1 {:nav-menu/id 1
                                          :nav-menu/name "Halaman Utama"
                                          :active true
                                          :icon "icon-home"
                                          :url "#"}
                                       2 {:nav-menu/id 2
                                          :nav-menu/name "Bank Soal"
                                          :active false
                                          :icon "icon-library_books"
                                          :url "#"}
                                       3 {:nav-menu/id 3
                                          :nav-menu/name "Daftar Member"
                                          :active false
                                          :icon "icon-people"
                                          :url "#"}
                                       4 {:nav-menu/id 4
                                          :nav-menu/name "Lojin"
                                          :active false
                                          :icon "icon-exit_to_app"
                                          :url "#"}
                                       5 {:nav-menu/id 5
                                          :nav-menu/name "Kebijakan Privasi"
                                          :url "#"}
                                       6 {:nav-menu/id 6
                                          :nav-menu/name "Contekan"
                                          :url "#"}
                                       7 {:nav-menu/id 7
                                          :nav-menu/name "Misi Ebtanas"
                                          :url "#"}}
                      :subjects [{:subject/name "Matematika"}
                                 {:subject/name "B. Indonesia"}
                                 {:subject/name "B. Inggris"}
                                 {:subject/name "Fisika"}
                                 {:subject/name "Kimia"}
                                 {:subject/name "Biologi"}
                                 {:subject/name "Sosiologi"}
                                 {:subject/name "Geografi"}
                                 {:subject/name "Ekonomi"}
                                 {:subject/name "Sejarah"}]
                      :messages [{:message/quote "Any fool can make something complicated. It takes a genius to make it simple"
                                  :message/author "Woody Guthrie"}]
                      :copyright {:copy "Hak Cipta"
                                  :year 2017
                                  :by "Indonesia"}}))