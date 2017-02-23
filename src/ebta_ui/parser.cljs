(ns ebta-ui.parser
  (:require [om.next :as om]))

(defn- get-nav-item [st id] (get st id))

(defmulti read om/dispatch)

(defmethod read :default
  [{:keys [state parser query] :as env} key params]
  (let [st @state]
    (if-let [[_ value] (find st key)]
      {:value value}
      {:value :not-found})))

(defmethod read :nav-menu/by-id
  [{:keys [state] :as env} key {:keys [start end] :as params}]
  (let [st (key @state)]
    (if params
      {:value (into [] (map get-nav-item (repeat st) (range start (inc end))))}
      {:value (into [] (map get-nav-item (repeat st) (range 1 (inc (count st)))))})))
