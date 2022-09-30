exports.ids = [6];
exports.modules = {

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(145);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4b7bd48d", content, true, context)
};

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartLegend_vue_vue_type_style_index_0_id_7d8d7338_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(129);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartLegend_vue_vue_type_style_index_0_id_7d8d7338_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartLegend_vue_vue_type_style_index_0_id_7d8d7338_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartLegend_vue_vue_type_style_index_0_id_7d8d7338_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartLegend_vue_vue_type_style_index_0_id_7d8d7338_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".legend[data-v-7d8d7338]{font-family:\"Raleway\",sans-serif;background-color:hsla(0,0%,100%,.8);padding:20px;display:flex;justify-content:center;align-items:center;flex-direction:column}.legend__description[data-v-7d8d7338]{padding-bottom:10px}.legend h3[data-v-7d8d7338],.legend table[data-v-7d8d7338]{text-align:center}.legend td[data-v-7d8d7338],.legend th[data-v-7d8d7338]{padding:5px;border:1px solid grey;border-collapse:collapse}.reverse-tr[data-v-7d8d7338]{float:left}.reverse-td[data-v-7d8d7338],.reverse-th[data-v-7d8d7338],.reverse-tr[data-v-7d8d7338]{display:block}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChartLegend.vue?vue&type=template&id=7d8d7338&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "legend"
  }, [_vm._ssrNode("<h3 class=\"legend__title\" data-v-7d8d7338>" + _vm._ssrEscape("\n    " + _vm._s(_vm.title) + "\n  ") + "</h3> <p class=\"legend__description\" data-v-7d8d7338>" + _vm._ssrEscape("\n    " + _vm._s(_vm.description) + "\n  ") + "</p> <table data-v-7d8d7338><tr" + _vm._ssrClass(null, {
    'reverse-tr': _vm.isMobile
  }) + " data-v-7d8d7338>" + _vm._ssrList(_vm.legend.titles, function (legendTitle, x) {
    return "<th" + _vm._ssrClass(null, {
      'reverse-th': _vm.isMobile
    }) + " data-v-7d8d7338>" + _vm._ssrEscape("\n        " + _vm._s(legendTitle) + "\n      ") + "</th>";
  }) + "</tr> " + _vm._ssrList(_vm.legend.rows, function (row, y) {
    return "<tr" + _vm._ssrClass(null, {
      'reverse-tr': _vm.isMobile
    }) + " data-v-7d8d7338><td" + _vm._ssrClass(null, {
      'reverse-td': _vm.isMobile
    }) + " data-v-7d8d7338>" + _vm._ssrEscape("\n        " + _vm._s(row.name) + "\n      ") + "</td> <td" + _vm._ssrClass(null, {
      'reverse-td': _vm.isMobile
    }) + " data-v-7d8d7338>" + _vm._ssrEscape("\n        " + _vm._s(row.good) + "\n      ") + "</td> <td" + _vm._ssrClass(null, {
      'reverse-td': _vm.isMobile
    }) + " data-v-7d8d7338>" + _vm._ssrEscape("\n        " + _vm._s(row.fair) + "\n      ") + "</td> <td" + _vm._ssrClass(null, {
      'reverse-td': _vm.isMobile
    }) + " data-v-7d8d7338>" + _vm._ssrEscape("\n        " + _vm._s(row.moderate) + "\n      ") + "</td> <td" + _vm._ssrClass(null, {
      'reverse-td': _vm.isMobile
    }) + " data-v-7d8d7338>" + _vm._ssrEscape("\n        " + _vm._s(row.poor) + "\n      ") + "</td> <td" + _vm._ssrClass(null, {
      'reverse-td': _vm.isMobile
    }) + " data-v-7d8d7338>" + _vm._ssrEscape("\n        " + _vm._s(row.veryPoor) + "\n      ") + "</td></tr>";
  }) + "</table>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ChartLegend.vue?vue&type=template&id=7d8d7338&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ChartLegend.vue?vue&type=script&lang=js&
/* harmony default export */ var ChartLegendvue_type_script_lang_js_ = ({
  name: 'ChartLegend',
  props: {
    isMobile: {
      type: Boolean,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    legend: {
      type: Object,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./components/ChartLegend.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ChartLegendvue_type_script_lang_js_ = (ChartLegendvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ChartLegend.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(144)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ChartLegendvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7d8d7338",
  "1a0091d4"
  
)

/* harmony default export */ var ChartLegend = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=chart-legend.js.map