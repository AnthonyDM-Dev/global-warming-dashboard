exports.ids = [1];
exports.modules = {

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(119);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("49897ecb", content, true, context)
};

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ActionButtons.vue?vue&type=template&id=e18e5fb4&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "actions"
  }, [_vm._ssrNode("<button class=\"actions__button-back\" data-v-e18e5fb4><p data-v-e18e5fb4>GO BACK</p></button>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ActionButtons.vue?vue&type=template&id=e18e5fb4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ActionButtons.vue?vue&type=script&lang=js&
/* harmony default export */ var ActionButtonsvue_type_script_lang_js_ = ({
  name: 'ActionButtons'
});
// CONCATENATED MODULE: ./components/ActionButtons.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ActionButtonsvue_type_script_lang_js_ = (ActionButtonsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ActionButtons.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(118)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ActionButtonsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e18e5fb4",
  "13209d36"
  
)

/* harmony default export */ var ActionButtons = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionButtons_vue_vue_type_style_index_0_id_e18e5fb4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionButtons_vue_vue_type_style_index_0_id_e18e5fb4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionButtons_vue_vue_type_style_index_0_id_e18e5fb4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionButtons_vue_vue_type_style_index_0_id_e18e5fb4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionButtons_vue_vue_type_style_index_0_id_e18e5fb4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".actions[data-v-e18e5fb4]{position:relative;min-height:20px}.actions__button-filter[data-v-e18e5fb4]{margin:5px 15px;font-size:16px;background-color:rgba(0,0,0,.4);color:#ffb30f;font-weight:700;padding:10px 15px;border:none;border-radius:15px;cursor:pointer;transition:font-size .6s}.actions__button-filter[data-v-e18e5fb4]:hover{font-size:20px;transition:font-size .6s}.actions__button-back[data-v-e18e5fb4]{position:absolute;top:-5%;left:50%;transform:translate(-50%,-50%);font-size:16px;font-weight:200;background-color:rgba(0,0,0,.4);color:#ffb30f;font-weight:700;padding:10px 15px;border:0;border-radius:15px;cursor:pointer;transition:font-size .6s}.actions__button-back[data-v-e18e5fb4]:hover{font-size:20px;transition:font-size .6s}.actions__button-link[data-v-e18e5fb4]{text-decoration:underline;font-size:16px;background-color:transparent;border:none;color:#ffdf0f;font-weight:100;padding:5px}.selected[data-v-e18e5fb4]{font-size:20px;transition:font-size .6s}@media screen and (max-width:575px){.actions__button-filter[data-v-e18e5fb4]{margin:5px;font-size:14px;font-weight:700;padding:7px}.actions__button[data-v-e18e5fb4]:hover{font-size:16px;transition:font-size .6s}.selected[data-v-e18e5fb4]{font-size:16px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=action-buttons.js.map