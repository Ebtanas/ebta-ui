(ns ebta-ui.views.login)
  ;(:require [om.next :as om :refer-macros [defui]]
  ;          [om.dom :as dom]))

;(defn- form-group
;  [{:keys [label1] :as env} form-fn & args]
;  (dom/div #js {:className "form-group"}
;    (dom/div #js {:className "col-4"}
;      (when label1
;        (dom/label #js {:className "form-label"} label1)))
;    (dom/div #js {:className (if (empty? args) "col-8" (first args))}
;      (form-fn env))))
;
;(defn- email-input-fn [{:keys [placeholder]}]
;  (dom/input #js {:className "form-input"
;                  :type "email"
;                  :placeholder placeholder}))
;
;(defn- remember-me-fn [{:keys [label2]}]
;  (dom/label #js {:className "form-checkbox"}
;    (dom/input #js {:type "checkbox"}
;      (dom/i #js {:className "form-icon"} label2))))
;
;(defn- submit-label-fn [{:keys [submit forgot]}]
;  (dom/div nil
;    (dom/button #js {:className "btn btn-primary"
;                     :type "submit"} submit)
;    (dom/a #js {:href "#"} forgot)))
;
;(defui Login
;  static om/IQuery
;  (query [this]
;    '[:login-page])
;  Object
;  (render [this]
;    (let [{:keys [email
;                  password
;                  remember-me
;                  submit-btn
;                  forgot-pwd] :as env}
;          (:form (om/props this))]
;      (dom/div #js {:className "column col-6 centered"}
;        (dom/form #js {:className "form-horizontal"}
;          (form-group env #(dom/h3 nil (:title %)))
;          (form-group email email-input-fn "col-6")
;          (form-group remember-me remember-me-fn)
;          (form-group {:submit (:label2 submit-btn)
;                       :forgot (:label2 forgot-pwd)}
;                      submit-label-fn))))))
;
;(def login (om/factory Login))