(ns ebta-ui.app-data)

(def init-data (atom {:title "Ebtanas"
                      :search/placeholder "Cari di sini..."
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
                      :message/by-id {1 {:message/id 1
                                         :message/quote "Any fool can make something complicated.
                                                         It takes a genius to make it simple"
                                         :message/author "Woody Guthrie"}}
                      :copyright {:copy "Hak Cipta"
                                  :year 2017
                                  :by "Indonesia"}}))