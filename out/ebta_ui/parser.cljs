(ns ebta-ui.parser)

(defn- get-nav-item [st id] (get st id))

(defmulti read (fn [env key params] key))

(defmethod read :default
  [{:keys [state] :as env} key params]
  (let [st @state]
    (if-let [[_ value] (find st key)]
      {:value value}
      {:value :not-found})))

(defmethod read :subject/by-id
  [{:keys [state parser] :as env} key params]
  (let [st @state]
    params))
    ;(if-let [{:keys [start end]} params]
    ;  (into [] (map get-nav-item (repeat st) (range start (inc end)))))))

