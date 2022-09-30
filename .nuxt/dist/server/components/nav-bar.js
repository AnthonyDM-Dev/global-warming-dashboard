exports.ids = [10];
exports.modules = {

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(134);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1938d110", content, true, context)
};

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_04831ec3_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(124);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_04831ec3_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_04831ec3_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_04831ec3_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_04831ec3_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nav-bar[data-v-04831ec3]{width:100%;display:flex;justify-content:space-between;align-items:center}.nav-bar-side[data-v-04831ec3]{width:60px}.site-logo__text[data-v-04831ec3]{cursor:pointer;color:#fff;padding:20px;font-size:50px;font-weight:100;text-shadow:-2px 2px 0 #fff,2px 2px 0 #fff,2px -2px 0 #fff,-2px -2px 0 #fff}.volume[data-v-04831ec3]{color:#fff;font-size:30px}.volume i[data-v-04831ec3]{cursor:pointer}.volume__mobile[data-v-04831ec3]{position:fixed;bottom:25px;right:25px;z-index:3}@media screen and (max-width:767px){.nav-bar[data-v-04831ec3]{justify-content:center}.nav-bar-side[data-v-04831ec3]{display:none}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NavBar.vue?vue&type=template&id=04831ec3&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "nav-bar"
  }, [_vm._ssrNode("<div class=\"nav-bar-side empty\" data-v-04831ec3></div> <div class=\"site-logo\" data-v-04831ec3><p class=\"site-logo__text\" data-v-04831ec3>\n      iEarth\n    </p></div> " + (!_vm.isMobile ? "<div class=\"nav-bar-side volume\" data-v-04831ec3>" + (_vm.audio.isMuted ? "<i class=\"fa-solid fa-volume-xmark\" data-v-04831ec3></i>" : "<i class=\"fa-solid fa-volume-high\" data-v-04831ec3></i>") + "</div>" : "<!---->"))]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/NavBar.vue?vue&type=template&id=04831ec3&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NavBar.vue?vue&type=script&lang=js&
/* harmony default export */ var NavBarvue_type_script_lang_js_ = ({
  props: {
    isMobile: {
      type: Boolean,
      default: null
    },
    audio: {
      type: Object,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./components/NavBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NavBarvue_type_script_lang_js_ = (NavBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/NavBar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(133)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NavBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "04831ec3",
  "47b36b96"
  
)

/* harmony default export */ var NavBar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=nav-bar.js.map