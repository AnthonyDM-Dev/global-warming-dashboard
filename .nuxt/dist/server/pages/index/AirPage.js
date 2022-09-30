exports.ids = [16,1,2,5,6,8,9,12,13,14];
exports.modules = Array(94).concat([
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(99);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4017d566", content, true, context)
};

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SpinnerLoader.vue?vue&type=template&id=6673b91a&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_vm._ssrNode("<div class=\"loadingio-spinner-spinner-mlxo459am8\" data-v-6673b91a><div class=\"ldio-bbrp5gztfbd\" data-v-6673b91a><div data-v-6673b91a></div><div data-v-6673b91a></div><div data-v-6673b91a></div><div data-v-6673b91a></div><div data-v-6673b91a></div><div data-v-6673b91a></div><div data-v-6673b91a></div><div data-v-6673b91a></div><div data-v-6673b91a></div><div data-v-6673b91a></div><div data-v-6673b91a></div><div data-v-6673b91a></div></div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SpinnerLoader.vue?vue&type=template&id=6673b91a&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SpinnerLoader.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(98)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6673b91a",
  "6763abd7"
  
)

/* harmony default export */ var SpinnerLoader = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoadingOverlay.vue?vue&type=template&id=26d690cd&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "loading-overlay"
  }, [_c('SpinnerLoader')], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LoadingOverlay.vue?vue&type=template&id=26d690cd&scoped=true&

// EXTERNAL MODULE: ./components/SpinnerLoader.vue + 2 modules
var SpinnerLoader = __webpack_require__(95);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoadingOverlay.vue?vue&type=script&lang=js&

/* harmony default export */ var LoadingOverlayvue_type_script_lang_js_ = ({
  name: 'LoadingOverlay',
  components: {
    SpinnerLoader: SpinnerLoader["default"]
  }
});
// CONCATENATED MODULE: ./components/LoadingOverlay.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LoadingOverlayvue_type_script_lang_js_ = (LoadingOverlayvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/LoadingOverlay.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(104)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LoadingOverlayvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "26d690cd",
  "a16cb28e"
  
)

/* harmony default export */ var LoadingOverlay = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SpinnerLoader: __webpack_require__(95).default})


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(105);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("13850443", content, true, context)
};

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerLoader_vue_vue_type_style_index_0_id_6673b91a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerLoader_vue_vue_type_style_index_0_id_6673b91a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerLoader_vue_vue_type_style_index_0_id_6673b91a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerLoader_vue_vue_type_style_index_0_id_6673b91a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerLoader_vue_vue_type_style_index_0_id_6673b91a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@-webkit-keyframes ldio-bbrp5gztfbd-6673b91a{0%{opacity:1}to{opacity:0}}@keyframes ldio-bbrp5gztfbd-6673b91a{0%{opacity:1}to{opacity:0}}.ldio-bbrp5gztfbd div[data-v-6673b91a]{left:46px;top:23px;position:absolute;-webkit-animation:ldio-bbrp5gztfbd-6673b91a 1s linear infinite;animation:ldio-bbrp5gztfbd-6673b91a 1s linear infinite;background:#ffb30f;width:8px;height:14px;border-radius:4px/7px;transform-origin:4px 27px}.ldio-bbrp5gztfbd div[data-v-6673b91a]:first-child{transform:rotate(0deg);-webkit-animation-delay:-.9166666667s;animation-delay:-.9166666667s;background:#ffb30f}.ldio-bbrp5gztfbd div[data-v-6673b91a]:nth-child(2){transform:rotate(30deg);-webkit-animation-delay:-.8333333333s;animation-delay:-.8333333333s;background:#ffb30f}.ldio-bbrp5gztfbd div[data-v-6673b91a]:nth-child(3){transform:rotate(60deg);-webkit-animation-delay:-.75s;animation-delay:-.75s;background:#ffb30f}.ldio-bbrp5gztfbd div[data-v-6673b91a]:nth-child(4){transform:rotate(90deg);-webkit-animation-delay:-.6666666667s;animation-delay:-.6666666667s;background:#ffb30f}.ldio-bbrp5gztfbd div[data-v-6673b91a]:nth-child(5){transform:rotate(120deg);-webkit-animation-delay:-.5833333333s;animation-delay:-.5833333333s;background:#ffb30f}.ldio-bbrp5gztfbd div[data-v-6673b91a]:nth-child(6){transform:rotate(150deg);-webkit-animation-delay:-.5s;animation-delay:-.5s;background:#ffb30f}.ldio-bbrp5gztfbd div[data-v-6673b91a]:nth-child(7){transform:rotate(180deg);-webkit-animation-delay:-.4166666667s;animation-delay:-.4166666667s;background:#ffb30f}.ldio-bbrp5gztfbd div[data-v-6673b91a]:nth-child(8){transform:rotate(210deg);-webkit-animation-delay:-.3333333333s;animation-delay:-.3333333333s;background:#ffb30f}.ldio-bbrp5gztfbd div[data-v-6673b91a]:nth-child(9){transform:rotate(240deg);-webkit-animation-delay:-.25s;animation-delay:-.25s;background:#ffb30f}.ldio-bbrp5gztfbd div[data-v-6673b91a]:nth-child(10){transform:rotate(270deg);-webkit-animation-delay:-.1666666667s;animation-delay:-.1666666667s;background:#ffb30f}.ldio-bbrp5gztfbd div[data-v-6673b91a]:nth-child(11){transform:rotate(300deg);-webkit-animation-delay:-.0833333333s;animation-delay:-.0833333333s;background:#ffb30f}.ldio-bbrp5gztfbd div[data-v-6673b91a]:nth-child(12){transform:rotate(330deg);-webkit-animation-delay:0s;animation-delay:0s;background:#ffb30f}.loadingio-spinner-spinner-mlxo459am8[data-v-6673b91a]{width:60px;height:60px;display:inline-block;overflow:hidden;background:transparent}.ldio-bbrp5gztfbd[data-v-6673b91a]{width:100%;height:100%;position:relative;transform:translateZ(0) scale(.6);-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:0 0}.ldio-bbrp5gztfbd div[data-v-6673b91a]{box-sizing:content-box}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(114);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("d6bd71bc", content, true, context)
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(116);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("52350642", content, true, context)
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(118);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("57f1b28b", content, true, context)
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(120);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("49897ecb", content, true, context)
};

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingOverlay_vue_vue_type_style_index_0_id_26d690cd_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingOverlay_vue_vue_type_style_index_0_id_26d690cd_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingOverlay_vue_vue_type_style_index_0_id_26d690cd_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingOverlay_vue_vue_type_style_index_0_id_26d690cd_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingOverlay_vue_vue_type_style_index_0_id_26d690cd_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loading-overlay[data-v-26d690cd]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.6);display:flex;justify-content:center;align-items:center}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);


const useChartFunctions = () => {
  const updateChartData = (settings, chartType, chartData) => {
    settings[chartType].data = chartData;
  };

  const updateMinY = (settings, array, fields, margin, initialValue, yAxis) => {
    const minValues = [];

    for (let i = 0; i < fields.length; i++) {
      minValues.push(array.reduce((accumulator, curr) => {
        return accumulator < Number(curr[fields[i]]) ? accumulator : Number(curr[fields[i]]);
      }, initialValue));
    }

    settings.lineChart.options.scales[yAxis].min = Math.min(...minValues) - margin;
  };

  const updateMaxY = (settings, array, fields, margin, initialValue, yAxis) => {
    const maxValues = [];

    for (let i = 0; i < fields.length; i++) {
      maxValues.push(array.reduce((accumulator, curr) => {
        return accumulator > Number(curr[fields[i]]) ? accumulator : Number(curr[fields[i]]);
      }, initialValue));
    }

    settings.lineChart.options.scales[yAxis].max = Math.max(...maxValues) + margin;
  };

  const getTreeValue = (data, keysArray, index) => {
    if (index < keysArray.length - 1) {
      return getTreeValue(data[keysArray[index]], keysArray, index + 1);
    } else {
      return data[keysArray[index]];
    }
  };

  const parseData = (data, xValue, yValue) => {
    if (Array.isArray(xValue) || Array.isArray(yValue)) {
      return data.map(r => ({
        x: getTreeValue(r, xValue, 0),
        y: getTreeValue(r, yValue, 0)
      }));
    } else {
      return data.map(r => ({
        x: r[xValue],
        y: r[yValue]
      }));
    }
  };

  const filterData = (data, axis, filterType, filterValue) => {
    if (filterValue === 'all') {
      return data;
    }

    switch (filterType) {
      case 'years':
        {
          const fromDay = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["getTime"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["sub"])(new Date(), {
            years: filterValue
          }));
          return data.filter(r => {
            return r[axis] >= fromDay;
          });
        }

      case 'months':
        {
          const fromDay = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["getTime"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["sub"])(new Date(), {
            months: filterValue
          }));
          return data.filter(r => {
            return r[axis] >= fromDay;
          });
        }

      default:
        {
          return data;
        }
    }
  };

  const removeNoise = (data, key, value) => {
    return data.filter(a => {
      return a[key] !== value;
    });
  };

  return {
    updateChartData,
    updateMaxY,
    updateMinY,
    parseData,
    filterData,
    removeNoise
  };
};

/* harmony default export */ __webpack_exports__["a"] = (useChartFunctions);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);


const useConverters = () => {
  const formatTime = (data, timeType, timeFields) => {
    const results = JSON.parse(JSON.stringify(data));

    if (timeType === 'number') {
      for (let i = 0; i < results.length; i++) {
        results[i].time = convertDecimalsToFullYear(results[i][timeFields[0]]);
      }
    } else if (timeType === 'splittedData') {
      for (let i = 0; i < results.length; i++) {
        results[i].time = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["getTime"])(new Date(Number(results[i][timeFields[0]]), Number(results[i][timeFields[1]]), Number(results[i][timeFields[2]]) || null));
      }
    } else if (timeType === 'unix') {
      for (let i = 0; i < results.length; i++) {
        results[i].time = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["getTime"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["fromUnixTime"])(results[i][timeFields[0]]));
      }
    }

    return results;
  };

  const convertDecimalsToFullYear = yearInDecimals => {
    const decimals = Number(yearInDecimals.split('.')[1]);
    const year = Number(yearInDecimals.split('.').shift());
    const month = Math.floor(decimals / 12) + 1;
    const day = 1; // Data are so big that know the specific day is negligible

    return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["getTime"])(new Date(year, month, day));
  };

  const convertDateToUnix = date => {
    return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["getUnixTime"])(date);
  };

  const subtractFromDate = (date, duration) => {
    return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["sub"])(date, duration);
  };

  const capitalize = string => {
    const words = string.split(' ');

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join(' ');
  };

  return {
    formatTime,
    convertDecimalsToFullYear,
    convertDateToUnix,
    subtractFromDate,
    capitalize
  };
};

/* harmony default export */ __webpack_exports__["a"] = (useConverters);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VideoHeader.vue?vue&type=template&id=adcde03c&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "heading"
  }, [_vm._ssrNode("<img" + _vm._ssrAttr("src", '/videos/' + _vm.video) + " class=\"heading__video\" data-v-adcde03c> <div class=\"heading__overlay\" data-v-adcde03c></div> <p class=\"heading__text\" data-v-adcde03c>" + _vm._ssrEscape("\n    " + _vm._s(_vm.title) + "\n  ") + "</p>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/VideoHeader.vue?vue&type=template&id=adcde03c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VideoHeader.vue?vue&type=script&lang=js&
/* harmony default export */ var VideoHeadervue_type_script_lang_js_ = ({
  name: 'VideoHeader',
  props: {
    title: {
      type: String,
      default: null
    },
    video: {
      type: String,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./components/VideoHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VideoHeadervue_type_script_lang_js_ = (VideoHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/VideoHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(113)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VideoHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "adcde03c",
  "7b4931f3"
  
)

/* harmony default export */ var VideoHeader = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LineChart.vue?vue&type=template&id=81d1cb20&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "line-chart"
  }, [_vm._ssrNode("<canvas" + _vm._ssrAttr("id", _vm.id) + _vm._ssrAttr("width", _vm.chartWidth) + _vm._ssrAttr("height", _vm.chartHeight) + " data-v-81d1cb20></canvas> " + (_vm.hasFilters ? "<div class=\"line-chart__filters\" data-v-81d1cb20><p data-v-81d1cb20>" + _vm._ssrEscape("Filter by " + _vm._s(_vm.filterType) + ": ") + "</p> <div class=\"line-chart__filters-wrapper\" data-v-81d1cb20>" + _vm._ssrList(_vm.filters, function (btn, i) {
    return "<button" + _vm._ssrClass("actions__button-filter", {
      'selected': _vm.filterSelected === btn.value
    }) + _vm._ssrStyle(null, {
      'color': _vm.filterSelected === btn.value ? 'white' : ''
    }, null) + " data-v-81d1cb20><p data-v-81d1cb20>" + _vm._ssrEscape(_vm._s(btn.label)) + "</p></button>";
  }) + "</div></div>" : "<!---->") + " "), _vm.hasLoader && _vm.isLoading ? _c('LoadingOverlay') : _vm._e()], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LineChart.vue?vue&type=template&id=81d1cb20&scoped=true&

// EXTERNAL MODULE: external "chart.js/auto"
var auto_ = __webpack_require__(91);
var auto_default = /*#__PURE__*/__webpack_require__.n(auto_);

// EXTERNAL MODULE: external "chartjs-adapter-date-fns"
var external_chartjs_adapter_date_fns_ = __webpack_require__(92);

// EXTERNAL MODULE: ./components/LoadingOverlay.vue + 4 modules
var LoadingOverlay = __webpack_require__(96);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LineChart.vue?vue&type=script&lang=js&



/* harmony default export */ var LineChartvue_type_script_lang_js_ = ({
  name: 'LineChart',
  components: {
    LoadingOverlay: LoadingOverlay["default"]
  },
  props: {
    id: {
      type: String,
      default: null
    },
    hasLoader: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    hasFilters: {
      type: Boolean,
      default: false
    },
    filters: {
      type: Array,
      default: null
    },
    filterType: {
      type: String,
      default: null
    },
    filterSelected: {
      type: [String, Number],
      default: null
    },
    chartWidth: {
      type: Number,
      default: 400
    },
    chartHeight: {
      type: Number,
      default: 250
    },
    settings: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      myChart: null
    };
  },

  watch: {
    settings: {
      handler(newVal) {
        if (!newVal) {
          return;
        }

        this.updateChart();
      },

      deep: true
    }
  },
  methods: {
    cloneObj(data) {
      return JSON.parse(JSON.stringify(data));
    },

    editData() {
      this.myChart.data.labels = this.cloneObj(this.settings.data.labels);
      this.myChart.data.datasets = this.cloneObj(this.settings.data.datasets);
      this.myChart.update();
    },

    updateChart() {
      const ctx = document.getElementById(this.id);

      if (this.myChart instanceof auto_default.a) {
        this.editData();
      } else {
        this.myChart = new auto_default.a(ctx, this.cloneObj(this.settings));
      }
    }

  }
});
// CONCATENATED MODULE: ./components/LineChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LineChartvue_type_script_lang_js_ = (LineChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/LineChart.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(115)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LineChartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "81d1cb20",
  "3f55e715"
  
)

/* harmony default export */ var LineChart = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingOverlay: __webpack_require__(96).default})


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/YoutubeVideo.vue?vue&type=template&id=428a587c&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "youtube-video"
  }, [_vm._ssrNode("<iframe width=\"622\" height=\"350\"" + _vm._ssrAttr("src", _vm.link) + " title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"allowfullscreen\" data-v-428a587c></iframe>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/YoutubeVideo.vue?vue&type=template&id=428a587c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/YoutubeVideo.vue?vue&type=script&lang=js&
/* harmony default export */ var YoutubeVideovue_type_script_lang_js_ = ({
  name: 'YoutubeVideo',
  props: {
    link: {
      type: String,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./components/YoutubeVideo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_YoutubeVideovue_type_script_lang_js_ = (YoutubeVideovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/YoutubeVideo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(117)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_YoutubeVideovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "428a587c",
  "5556139d"
  
)

/* harmony default export */ var YoutubeVideo = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 111 */
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
  
  var style0 = __webpack_require__(119)
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
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

const popup = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* ref */ "d"])({
  isVisible: false,
  title: 'Something went wrong.',
  description: 'Please check your internet connection or try again in few moments.',
  backgroundColor: '#c23131e8'
});

const usePopup = () => {
  const triggerPopup = async () => {
    popup.value.isVisible = true;
    await setTimeout(() => {
      popup.value.isVisible = false;
    }, 3000);
  };

  return {
    popup,
    triggerPopup
  };
};

/* harmony default export */ __webpack_exports__["a"] = (usePopup);

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoHeader_vue_vue_type_style_index_0_id_adcde03c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoHeader_vue_vue_type_style_index_0_id_adcde03c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoHeader_vue_vue_type_style_index_0_id_adcde03c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoHeader_vue_vue_type_style_index_0_id_adcde03c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoHeader_vue_vue_type_style_index_0_id_adcde03c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".heading[data-v-adcde03c]{position:relative;height:300px;overflow:hidden}.heading__video[data-v-adcde03c]{width:100%;-o-object-fit:cover;object-fit:cover}.heading__overlay[data-v-adcde03c]{position:absolute;top:0;left:0;width:100%;height:300px;background-color:rgba(0,0,0,.2)}.heading__text[data-v-adcde03c]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:60px;font-weight:200;color:#fff;text-align:center}@media screen and (max-width:1199px)and (min-width:768px){.heading[data-v-adcde03c]{height:230px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_style_index_0_id_81d1cb20_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_style_index_0_id_81d1cb20_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_style_index_0_id_81d1cb20_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_style_index_0_id_81d1cb20_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_style_index_0_id_81d1cb20_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".actions[data-v-81d1cb20]{position:relative;min-height:20px}.actions__button-filter[data-v-81d1cb20]{margin:5px 15px;font-size:16px;background-color:rgba(0,0,0,.4);color:#ffb30f;font-weight:700;padding:10px 15px;border:none;border-radius:15px;cursor:pointer;transition:font-size .6s}.actions__button-filter[data-v-81d1cb20]:hover{font-size:20px;transition:font-size .6s}.actions__button-back[data-v-81d1cb20]{position:absolute;top:-5%;left:50%;transform:translate(-50%,-50%);font-size:16px;font-weight:200;background-color:rgba(0,0,0,.4);color:#ffb30f;font-weight:700;padding:10px 15px;border:0;border-radius:15px;cursor:pointer;transition:font-size .6s}.actions__button-back[data-v-81d1cb20]:hover{font-size:20px;transition:font-size .6s}.actions__button-link[data-v-81d1cb20]{text-decoration:underline;font-size:16px;background-color:transparent;border:none;color:#ffdf0f;font-weight:100;padding:5px}.selected[data-v-81d1cb20]{font-size:20px;transition:font-size .6s}@media screen and (max-width:575px){.actions__button-filter[data-v-81d1cb20]{margin:5px;font-size:14px;font-weight:700;padding:7px}.actions__button[data-v-81d1cb20]:hover{font-size:16px;transition:font-size .6s}.selected[data-v-81d1cb20]{font-size:16px}}.line-chart[data-v-81d1cb20]{position:relative;background-color:hsla(0,0%,100%,.8)}.line-chart__filters[data-v-81d1cb20]{display:flex;font-size:20px;justify-content:center;align-items:center;background-color:transparent;border:0}.line-chart__filters-wrapper[data-v-81d1cb20]{display:flex}@media screen and (max-width:575px){.line-chart__filters[data-v-81d1cb20]{display:flex;flex-direction:column}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeVideo_vue_vue_type_style_index_0_id_428a587c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeVideo_vue_vue_type_style_index_0_id_428a587c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeVideo_vue_vue_type_style_index_0_id_428a587c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeVideo_vue_vue_type_style_index_0_id_428a587c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeVideo_vue_vue_type_style_index_0_id_428a587c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".youtube-video[data-v-428a587c]{width:100%;display:flex;justify-content:center;margin-bottom:40px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionButtons_vue_vue_type_style_index_0_id_e18e5fb4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionButtons_vue_vue_type_style_index_0_id_e18e5fb4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionButtons_vue_vue_type_style_index_0_id_e18e5fb4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionButtons_vue_vue_type_style_index_0_id_e18e5fb4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionButtons_vue_vue_type_style_index_0_id_e18e5fb4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".actions[data-v-e18e5fb4]{position:relative;min-height:20px}.actions__button-filter[data-v-e18e5fb4]{margin:5px 15px;font-size:16px;background-color:rgba(0,0,0,.4);color:#ffb30f;font-weight:700;padding:10px 15px;border:none;border-radius:15px;cursor:pointer;transition:font-size .6s}.actions__button-filter[data-v-e18e5fb4]:hover{font-size:20px;transition:font-size .6s}.actions__button-back[data-v-e18e5fb4]{position:absolute;top:-5%;left:50%;transform:translate(-50%,-50%);font-size:16px;font-weight:200;background-color:rgba(0,0,0,.4);color:#ffb30f;font-weight:700;padding:10px 15px;border:0;border-radius:15px;cursor:pointer;transition:font-size .6s}.actions__button-back[data-v-e18e5fb4]:hover{font-size:20px;transition:font-size .6s}.actions__button-link[data-v-e18e5fb4]{text-decoration:underline;font-size:16px;background-color:transparent;border:none;color:#ffdf0f;font-weight:100;padding:5px}.selected[data-v-e18e5fb4]{font-size:20px;transition:font-size .6s}@media screen and (max-width:575px){.actions__button-filter[data-v-e18e5fb4]{margin:5px;font-size:14px;font-weight:700;padding:7px}.actions__button[data-v-e18e5fb4]:hover{font-size:16px;transition:font-size .6s}.selected[data-v-e18e5fb4]{font-size:16px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _global_useConverters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(107);
/* harmony import */ var _useChartFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(106);



const {
  convertDateToUnix,
  subtractFromDate
} = Object(_global_useConverters__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();
const {
  parseData
} = Object(_useChartFunctions__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])();
const lineData = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* ref */ "d"])(null);
const lineFilteredData = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* ref */ "d"])(null);
const lineChartData = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* ref */ "d"])(null);
const hasLineFilteredData = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "a"])(() => {
  return lineFilteredData.value != null;
});

const useLineChart = () => {
  const startDate = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* ref */ "d"])(convertDateToUnix(new Date(2019, 10, 27)));
  const endDate = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* ref */ "d"])(convertDateToUnix(subtractFromDate(new Date(), {
    months: 1
  })));

  const setLineChartData = (config, mobileConfig, isMobile, fieldsToParse) => {
    lineChartData.value = config;

    if (isMobile) {
      setLineChartMobileData(mobileConfig);
    }

    setLineChartLabels(fieldsToParse);
    setFieldsToParse(fieldsToParse);
  };

  const setLineChartMobileData = mobileConfig => {
    if (!mobileConfig) {
      return;
    }

    for (let x = 0; x < mobileConfig.length; x++) {
      const keys = Object.keys(mobileConfig[x]);
      const values = Object.values(mobileConfig[x]);

      for (let y = 0; y < keys.length; y++) {
        lineChartData.value.datasets[keys[y]] = values[y];
      }
    }
  };

  const setLineChartLabels = fields => {
    const key = fields[0].x[0];
    lineChartData.value.labels = lineFilteredData.value.map(r => {
      return r[key];
    });
  };

  const setFieldsToParse = fields => {
    for (let x = 0; x < fields.length; x++) {
      lineChartData.value.datasets[x].data = parseData(lineFilteredData.value, fields[x].x, fields[x].y);
    }
  };

  const resetLineChart = () => {
    lineData.value = null;
  };

  Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* watch */ "h"])(lineData, newVal => {
    lineFilteredData.value = newVal;
  }, {
    deep: true
  });
  return {
    lineData,
    lineFilteredData,
    lineChartData,
    hasLineFilteredData,
    startDate,
    endDate,
    setLineChartData,
    resetLineChart
  };
};

/* harmony default export */ __webpack_exports__["a"] = (useLineChart);

/***/ }),
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(143);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("c1753f18", content, true, context)
};

/***/ }),
/* 129 */
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
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(147);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("13220dbe", content, true, context)
};

/***/ }),
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */
/***/ (function(module) {

module.exports = JSON.parse("[{\"code\":\"AF\",\"name\":\"Afghanistan\"},{\"code\":\"AX\",\"name\":\"Åland Islands\"},{\"code\":\"AL\",\"name\":\"Albania\"},{\"code\":\"DZ\",\"name\":\"Algeria\"},{\"code\":\"AS\",\"name\":\"American Samoa\"},{\"code\":\"AD\",\"name\":\"Andorra\"},{\"code\":\"AO\",\"name\":\"Angola\"},{\"code\":\"AI\",\"name\":\"Anguilla\"},{\"code\":\"AQ\",\"name\":\"Antarctica\"},{\"code\":\"AG\",\"name\":\"Antigua and Barbuda\"},{\"code\":\"AR\",\"name\":\"Argentina\"},{\"code\":\"AM\",\"name\":\"Armenia\"},{\"code\":\"AW\",\"name\":\"Aruba\"},{\"code\":\"AU\",\"name\":\"Australia\"},{\"code\":\"AT\",\"name\":\"Austria\"},{\"code\":\"AZ\",\"name\":\"Azerbaijan\"},{\"code\":\"BS\",\"name\":\"Bahamas\"},{\"code\":\"BH\",\"name\":\"Bahrain\"},{\"code\":\"BD\",\"name\":\"Bangladesh\"},{\"code\":\"BB\",\"name\":\"Barbados\"},{\"code\":\"BY\",\"name\":\"Belarus\"},{\"code\":\"BE\",\"name\":\"Belgium\"},{\"code\":\"BZ\",\"name\":\"Belize\"},{\"code\":\"BJ\",\"name\":\"Benin\"},{\"code\":\"BM\",\"name\":\"Bermuda\"},{\"code\":\"BT\",\"name\":\"Bhutan\"},{\"code\":\"BO\",\"name\":\"Bolivia, Plurinational State of\"},{\"code\":\"BQ\",\"name\":\"Bonaire, Sint Eustatius and Saba\"},{\"code\":\"BA\",\"name\":\"Bosnia and Herzegovina\"},{\"code\":\"BW\",\"name\":\"Botswana\"},{\"code\":\"BV\",\"name\":\"Bouvet Island\"},{\"code\":\"BR\",\"name\":\"Brazil\"},{\"code\":\"IO\",\"name\":\"British Indian Ocean Territory\"},{\"code\":\"BN\",\"name\":\"Brunei Darussalam\"},{\"code\":\"BG\",\"name\":\"Bulgaria\"},{\"code\":\"BF\",\"name\":\"Burkina Faso\"},{\"code\":\"BI\",\"name\":\"Burundi\"},{\"code\":\"KH\",\"name\":\"Cambodia\"},{\"code\":\"CM\",\"name\":\"Cameroon\"},{\"code\":\"CA\",\"name\":\"Canada\"},{\"code\":\"CV\",\"name\":\"Cape Verde\"},{\"code\":\"KY\",\"name\":\"Cayman Islands\"},{\"code\":\"CF\",\"name\":\"Central African Republic\"},{\"code\":\"TD\",\"name\":\"Chad\"},{\"code\":\"CL\",\"name\":\"Chile\"},{\"code\":\"CN\",\"name\":\"China\"},{\"code\":\"CX\",\"name\":\"Christmas Island\"},{\"code\":\"CC\",\"name\":\"Cocos (Keeling) Islands\"},{\"code\":\"CO\",\"name\":\"Colombia\"},{\"code\":\"KM\",\"name\":\"Comoros\"},{\"code\":\"CG\",\"name\":\"Congo\"},{\"code\":\"CD\",\"name\":\"Congo, the Democratic Republic of the\"},{\"code\":\"CK\",\"name\":\"Cook Islands\"},{\"code\":\"CR\",\"name\":\"Costa Rica\"},{\"code\":\"CI\",\"name\":\"Côte d'Ivoire\"},{\"code\":\"HR\",\"name\":\"Croatia\"},{\"code\":\"CU\",\"name\":\"Cuba\"},{\"code\":\"CW\",\"name\":\"Curaçao\"},{\"code\":\"CY\",\"name\":\"Cyprus\"},{\"code\":\"CZ\",\"name\":\"Czech Republic\"},{\"code\":\"DK\",\"name\":\"Denmark\"},{\"code\":\"DJ\",\"name\":\"Djibouti\"},{\"code\":\"DM\",\"name\":\"Dominica\"},{\"code\":\"DO\",\"name\":\"Dominican Republic\"},{\"code\":\"EC\",\"name\":\"Ecuador\"},{\"code\":\"EG\",\"name\":\"Egypt\"},{\"code\":\"SV\",\"name\":\"El Salvador\"},{\"code\":\"GQ\",\"name\":\"Equatorial Guinea\"},{\"code\":\"ER\",\"name\":\"Eritrea\"},{\"code\":\"EE\",\"name\":\"Estonia\"},{\"code\":\"ET\",\"name\":\"Ethiopia\"},{\"code\":\"FK\",\"name\":\"Falkland Islands (Malvinas)\"},{\"code\":\"FO\",\"name\":\"Faroe Islands\"},{\"code\":\"FJ\",\"name\":\"Fiji\"},{\"code\":\"FI\",\"name\":\"Finland\"},{\"code\":\"FR\",\"name\":\"France\"},{\"code\":\"GF\",\"name\":\"French Guiana\"},{\"code\":\"PF\",\"name\":\"French Polynesia\"},{\"code\":\"TF\",\"name\":\"French Southern Territories\"},{\"code\":\"GA\",\"name\":\"Gabon\"},{\"code\":\"GM\",\"name\":\"Gambia\"},{\"code\":\"GE\",\"name\":\"Georgia\"},{\"code\":\"DE\",\"name\":\"Germany\"},{\"code\":\"GH\",\"name\":\"Ghana\"},{\"code\":\"GI\",\"name\":\"Gibraltar\"},{\"code\":\"GR\",\"name\":\"Greece\"},{\"code\":\"GL\",\"name\":\"Greenland\"},{\"code\":\"GD\",\"name\":\"Grenada\"},{\"code\":\"GP\",\"name\":\"Guadeloupe\"},{\"code\":\"GU\",\"name\":\"Guam\"},{\"code\":\"GT\",\"name\":\"Guatemala\"},{\"code\":\"GG\",\"name\":\"Guernsey\"},{\"code\":\"GN\",\"name\":\"Guinea\"},{\"code\":\"GW\",\"name\":\"Guinea-Bissau\"},{\"code\":\"GY\",\"name\":\"Guyana\"},{\"code\":\"HT\",\"name\":\"Haiti\"},{\"code\":\"HM\",\"name\":\"Heard Island and McDonald Islands\"},{\"code\":\"VA\",\"name\":\"Holy See (Vatican City State)\"},{\"code\":\"HN\",\"name\":\"Honduras\"},{\"code\":\"HK\",\"name\":\"Hong Kong\"},{\"code\":\"HU\",\"name\":\"Hungary\"},{\"code\":\"IS\",\"name\":\"Iceland\"},{\"code\":\"IN\",\"name\":\"India\"},{\"code\":\"ID\",\"name\":\"Indonesia\"},{\"code\":\"IR\",\"name\":\"Iran, Islamic Republic of\"},{\"code\":\"IQ\",\"name\":\"Iraq\"},{\"code\":\"IE\",\"name\":\"Ireland\"},{\"code\":\"IM\",\"name\":\"Isle of Man\"},{\"code\":\"IL\",\"name\":\"Israel\"},{\"code\":\"IT\",\"name\":\"Italy\"},{\"code\":\"JM\",\"name\":\"Jamaica\"},{\"code\":\"JP\",\"name\":\"Japan\"},{\"code\":\"JE\",\"name\":\"Jersey\"},{\"code\":\"JO\",\"name\":\"Jordan\"},{\"code\":\"KZ\",\"name\":\"Kazakhstan\"},{\"code\":\"KE\",\"name\":\"Kenya\"},{\"code\":\"KI\",\"name\":\"Kiribati\"},{\"code\":\"KP\",\"name\":\"Korea, Democratic People's Republic of\"},{\"code\":\"KR\",\"name\":\"Korea, Republic of\"},{\"code\":\"KW\",\"name\":\"Kuwait\"},{\"code\":\"KG\",\"name\":\"Kyrgyzstan\"},{\"code\":\"LA\",\"name\":\"Lao People's Democratic Republic\"},{\"code\":\"LV\",\"name\":\"Latvia\"},{\"code\":\"LB\",\"name\":\"Lebanon\"},{\"code\":\"LS\",\"name\":\"Lesotho\"},{\"code\":\"LR\",\"name\":\"Liberia\"},{\"code\":\"LY\",\"name\":\"Libya\"},{\"code\":\"LI\",\"name\":\"Liechtenstein\"},{\"code\":\"LT\",\"name\":\"Lithuania\"},{\"code\":\"LU\",\"name\":\"Luxembourg\"},{\"code\":\"MO\",\"name\":\"Macao\"},{\"code\":\"MK\",\"name\":\"Macedonia, the Former Yugoslav Republic of\"},{\"code\":\"MG\",\"name\":\"Madagascar\"},{\"code\":\"MW\",\"name\":\"Malawi\"},{\"code\":\"MY\",\"name\":\"Malaysia\"},{\"code\":\"MV\",\"name\":\"Maldives\"},{\"code\":\"ML\",\"name\":\"Mali\"},{\"code\":\"MT\",\"name\":\"Malta\"},{\"code\":\"MH\",\"name\":\"Marshall Islands\"},{\"code\":\"MQ\",\"name\":\"Martinique\"},{\"code\":\"MR\",\"name\":\"Mauritania\"},{\"code\":\"MU\",\"name\":\"Mauritius\"},{\"code\":\"YT\",\"name\":\"Mayotte\"},{\"code\":\"MX\",\"name\":\"Mexico\"},{\"code\":\"FM\",\"name\":\"Micronesia, Federated States of\"},{\"code\":\"MD\",\"name\":\"Moldova, Republic of\"},{\"code\":\"MC\",\"name\":\"Monaco\"},{\"code\":\"MN\",\"name\":\"Mongolia\"},{\"code\":\"ME\",\"name\":\"Montenegro\"},{\"code\":\"MS\",\"name\":\"Montserrat\"},{\"code\":\"MA\",\"name\":\"Morocco\"},{\"code\":\"MZ\",\"name\":\"Mozambique\"},{\"code\":\"MM\",\"name\":\"Myanmar\"},{\"code\":\"NA\",\"name\":\"Namibia\"},{\"code\":\"NR\",\"name\":\"Nauru\"},{\"code\":\"NP\",\"name\":\"Nepal\"},{\"code\":\"NL\",\"name\":\"Netherlands\"},{\"code\":\"NC\",\"name\":\"New Caledonia\"},{\"code\":\"NZ\",\"name\":\"New Zealand\"},{\"code\":\"NI\",\"name\":\"Nicaragua\"},{\"code\":\"NE\",\"name\":\"Niger\"},{\"code\":\"NG\",\"name\":\"Nigeria\"},{\"code\":\"NU\",\"name\":\"Niue\"},{\"code\":\"NF\",\"name\":\"Norfolk Island\"},{\"code\":\"MP\",\"name\":\"Northern Mariana Islands\"},{\"code\":\"NO\",\"name\":\"Norway\"},{\"code\":\"OM\",\"name\":\"Oman\"},{\"code\":\"PK\",\"name\":\"Pakistan\"},{\"code\":\"PW\",\"name\":\"Palau\"},{\"code\":\"PS\",\"name\":\"Palestine, State of\"},{\"code\":\"PA\",\"name\":\"Panama\"},{\"code\":\"PG\",\"name\":\"Papua New Guinea\"},{\"code\":\"PY\",\"name\":\"Paraguay\"},{\"code\":\"PE\",\"name\":\"Peru\"},{\"code\":\"PH\",\"name\":\"Philippines\"},{\"code\":\"PN\",\"name\":\"Pitcairn\"},{\"code\":\"PL\",\"name\":\"Poland\"},{\"code\":\"PT\",\"name\":\"Portugal\"},{\"code\":\"PR\",\"name\":\"Puerto Rico\"},{\"code\":\"QA\",\"name\":\"Qatar\"},{\"code\":\"RE\",\"name\":\"Réunion\"},{\"code\":\"RO\",\"name\":\"Romania\"},{\"code\":\"RU\",\"name\":\"Russian Federation\"},{\"code\":\"RW\",\"name\":\"Rwanda\"},{\"code\":\"BL\",\"name\":\"Saint Barthélemy\"},{\"code\":\"SH\",\"name\":\"Saint Helena, Ascension and Tristan da Cunha\"},{\"code\":\"KN\",\"name\":\"Saint Kitts and Nevis\"},{\"code\":\"LC\",\"name\":\"Saint Lucia\"},{\"code\":\"MF\",\"name\":\"Saint Martin (French part)\"},{\"code\":\"PM\",\"name\":\"Saint Pierre and Miquelon\"},{\"code\":\"VC\",\"name\":\"Saint Vincent and the Grenadines\"},{\"code\":\"WS\",\"name\":\"Samoa\"},{\"code\":\"SM\",\"name\":\"San Marino\"},{\"code\":\"ST\",\"name\":\"Sao Tome and Principe\"},{\"code\":\"SA\",\"name\":\"Saudi Arabia\"},{\"code\":\"SN\",\"name\":\"Senegal\"},{\"code\":\"RS\",\"name\":\"Serbia\"},{\"code\":\"SC\",\"name\":\"Seychelles\"},{\"code\":\"SL\",\"name\":\"Sierra Leone\"},{\"code\":\"SG\",\"name\":\"Singapore\"},{\"code\":\"SX\",\"name\":\"Sint Maarten (Dutch part)\"},{\"code\":\"SK\",\"name\":\"Slovakia\"},{\"code\":\"SI\",\"name\":\"Slovenia\"},{\"code\":\"SB\",\"name\":\"Solomon Islands\"},{\"code\":\"SO\",\"name\":\"Somalia\"},{\"code\":\"ZA\",\"name\":\"South Africa\"},{\"code\":\"GS\",\"name\":\"South Georgia and the South Sandwich Islands\"},{\"code\":\"SS\",\"name\":\"South Sudan\"},{\"code\":\"ES\",\"name\":\"Spain\"},{\"code\":\"LK\",\"name\":\"Sri Lanka\"},{\"code\":\"SD\",\"name\":\"Sudan\"},{\"code\":\"SR\",\"name\":\"Suriname\"},{\"code\":\"SJ\",\"name\":\"Svalbard and Jan Mayen\"},{\"code\":\"SZ\",\"name\":\"Swaziland\"},{\"code\":\"SE\",\"name\":\"Sweden\"},{\"code\":\"CH\",\"name\":\"Switzerland\"},{\"code\":\"SY\",\"name\":\"Syrian Arab Republic\"},{\"code\":\"TW\",\"name\":\"Taiwan, Province of China\"},{\"code\":\"TJ\",\"name\":\"Tajikistan\"},{\"code\":\"TZ\",\"name\":\"Tanzania, United Republic of\"},{\"code\":\"TH\",\"name\":\"Thailand\"},{\"code\":\"TL\",\"name\":\"Timor-Leste\"},{\"code\":\"TG\",\"name\":\"Togo\"},{\"code\":\"TK\",\"name\":\"Tokelau\"},{\"code\":\"TO\",\"name\":\"Tonga\"},{\"code\":\"TT\",\"name\":\"Trinidad and Tobago\"},{\"code\":\"TN\",\"name\":\"Tunisia\"},{\"code\":\"TR\",\"name\":\"Turkey\"},{\"code\":\"TM\",\"name\":\"Turkmenistan\"},{\"code\":\"TC\",\"name\":\"Turks and Caicos Islands\"},{\"code\":\"TV\",\"name\":\"Tuvalu\"},{\"code\":\"UG\",\"name\":\"Uganda\"},{\"code\":\"UA\",\"name\":\"Ukraine\"},{\"code\":\"AE\",\"name\":\"United Arab Emirates\"},{\"code\":\"GB\",\"name\":\"United Kingdom\"},{\"code\":\"US\",\"name\":\"United States\"},{\"code\":\"UM\",\"name\":\"United States Minor Outlying Islands\"},{\"code\":\"UY\",\"name\":\"Uruguay\"},{\"code\":\"UZ\",\"name\":\"Uzbekistan\"},{\"code\":\"VU\",\"name\":\"Vanuatu\"},{\"code\":\"VE\",\"name\":\"Venezuela, Bolivarian Republic of\"},{\"code\":\"VN\",\"name\":\"Viet Nam\"},{\"code\":\"VG\",\"name\":\"Virgin Islands, British\"},{\"code\":\"VI\",\"name\":\"Virgin Islands, U.S.\"},{\"code\":\"WF\",\"name\":\"Wallis and Futuna\"},{\"code\":\"EH\",\"name\":\"Western Sahara\"},{\"code\":\"YE\",\"name\":\"Yemen\"},{\"code\":\"ZM\",\"name\":\"Zambia\"},{\"code\":\"ZW\",\"name\":\"Zimbabwe\"}]");

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirForm_vue_vue_type_style_index_0_id_74c470f8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirForm_vue_vue_type_style_index_0_id_74c470f8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirForm_vue_vue_type_style_index_0_id_74c470f8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirForm_vue_vue_type_style_index_0_id_74c470f8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirForm_vue_vue_type_style_index_0_id_74c470f8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".actions[data-v-74c470f8]{position:relative;min-height:20px}.actions__button-filter[data-v-74c470f8]{margin:5px 15px;font-size:16px;background-color:rgba(0,0,0,.4);color:#ffb30f;font-weight:700;padding:10px 15px;border:none;border-radius:15px;cursor:pointer;transition:font-size .6s}.actions__button-filter[data-v-74c470f8]:hover{font-size:20px;transition:font-size .6s}.actions__button-back[data-v-74c470f8]{position:absolute;top:-5%;left:50%;transform:translate(-50%,-50%);font-size:16px;font-weight:200;background-color:rgba(0,0,0,.4);color:#ffb30f;font-weight:700;padding:10px 15px;border:0;border-radius:15px;cursor:pointer;transition:font-size .6s}.actions__button-back[data-v-74c470f8]:hover{font-size:20px;transition:font-size .6s}.actions__button-link[data-v-74c470f8]{text-decoration:underline;font-size:16px;background-color:transparent;border:none;color:#ffdf0f;font-weight:100;padding:5px}.selected[data-v-74c470f8]{font-size:20px;transition:font-size .6s}@media screen and (max-width:575px){.actions__button-filter[data-v-74c470f8]{margin:5px;font-size:14px;font-weight:700;padding:7px}.actions__button[data-v-74c470f8]:hover{font-size:16px;transition:font-size .6s}.selected[data-v-74c470f8]{font-size:16px}}.air-form[data-v-74c470f8]{display:flex;flex-direction:column;align-items:center;color:#fff;padding:20px 0}.air-form input[data-v-74c470f8],.air-form select[data-v-74c470f8]{color:#fff;text-align:center;border:none;border-radius:10px;background-color:rgba(0,0,0,.3);padding:.4em 0;font-size:20px;line-height:1.2}.air-form input[data-v-74c470f8]:focus,.air-form select[data-v-74c470f8]:focus{outline:2px solid #fff}.air-form__heading[data-v-74c470f8]{font-size:24px;text-align:center}.air-form__select[data-v-74c470f8]{display:flex;flex-direction:column;align-items:center;margin-top:20px}.air-form__select select[data-v-74c470f8]{-webkit-appearance:none;-moz-appearance:none;appearance:none}.air-form__input[data-v-74c470f8]{display:flex;justify-content:center;margin-top:20px}.air-form__input input[data-v-74c470f8]::-moz-placeholder{color:#fff}.air-form__input input[data-v-74c470f8]::placeholder{color:#fff}.air-form__form[data-v-74c470f8]{position:relative;padding:0 10px;border-radius:15px;overflow:hidden}.air-form__form label[data-v-74c470f8]{font-size:20px}.air-form__submit[data-v-74c470f8]{margin-top:20px}.air-form__reset[data-v-74c470f8],.air-form__submit[data-v-74c470f8]{display:flex;justify-content:center}@media screen and (max-width:575px){.air-form input[data-v-74c470f8],.air-form select[data-v-74c470f8]{font-size:16px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartLegend_vue_vue_type_style_index_0_id_7d8d7338_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(129);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartLegend_vue_vue_type_style_index_0_id_7d8d7338_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartLegend_vue_vue_type_style_index_0_id_7d8d7338_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartLegend_vue_vue_type_style_index_0_id_7d8d7338_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartLegend_vue_vue_type_style_index_0_id_7d8d7338_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".legend[data-v-7d8d7338]{font-family:\"Raleway\",sans-serif;background-color:hsla(0,0%,100%,.8);padding:20px;display:flex;justify-content:center;align-items:center;flex-direction:column}.legend__description[data-v-7d8d7338]{padding-bottom:10px}.legend h3[data-v-7d8d7338],.legend table[data-v-7d8d7338]{text-align:center}.legend td[data-v-7d8d7338],.legend th[data-v-7d8d7338]{padding:5px;border:1px solid grey;border-collapse:collapse}.reverse-tr[data-v-7d8d7338]{float:left}.reverse-td[data-v-7d8d7338],.reverse-th[data-v-7d8d7338],.reverse-tr[data-v-7d8d7338]{display:block}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_style_index_0_id_66a8652e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(130);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_style_index_0_id_66a8652e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_style_index_0_id_66a8652e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_style_index_0_id_66a8652e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_style_index_0_id_66a8652e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".actions[data-v-66a8652e]{position:relative;min-height:20px}.actions__button-filter[data-v-66a8652e]{margin:5px 15px;font-size:16px;background-color:rgba(0,0,0,.4);color:#ffb30f;font-weight:700;padding:10px 15px;border:none;border-radius:15px;cursor:pointer;transition:font-size .6s}.actions__button-filter[data-v-66a8652e]:hover{font-size:20px;transition:font-size .6s}.actions__button-back[data-v-66a8652e]{position:absolute;top:-5%;left:50%;transform:translate(-50%,-50%);font-size:16px;font-weight:200;background-color:rgba(0,0,0,.4);color:#ffb30f;font-weight:700;padding:10px 15px;border:0;border-radius:15px;cursor:pointer;transition:font-size .6s}.actions__button-back[data-v-66a8652e]:hover{font-size:20px;transition:font-size .6s}.actions__button-link[data-v-66a8652e]{text-decoration:underline;font-size:16px;background-color:transparent;border:none;color:#ffdf0f;font-weight:100;padding:5px}.selected[data-v-66a8652e]{font-size:20px;transition:font-size .6s}@media screen and (max-width:575px){.actions__button-filter[data-v-66a8652e]{margin:5px;font-size:14px;font-weight:700;padding:7px}.actions__button[data-v-66a8652e]:hover{font-size:16px;transition:font-size .6s}.selected[data-v-66a8652e]{font-size:16px}}.line-chart[data-v-66a8652e]{position:relative;background-color:hsla(0,0%,100%,.8)}.line-chart__filters[data-v-66a8652e]{display:flex;font-size:20px;justify-content:center;align-items:center;background-color:transparent;border:0}.line-chart__filters-wrapper[data-v-66a8652e]{display:flex}@media screen and (max-width:575px){.line-chart__filters[data-v-66a8652e]{display:flex;flex-direction:column}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AirForm.vue?vue&type=template&id=74c470f8&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "air-form"
  }, [_vm._ssrNode("<p class=\"air-form__heading\" data-v-74c470f8>\n    Follow the steps appearing below and\n    <br data-v-74c470f8>explore air pollution around the world\n  </p> "), _vm._ssrNode("<form id=\"air\" name=\"air\" class=\"air-form__form\" data-v-74c470f8>", "</form>", [_vm._ssrNode("<div class=\"air-form__select\" data-v-74c470f8><select id=\"countries\" name=\"countries\" data-v-74c470f8><option value disabled=\"disabled\" selected=\"selected\" hidden=\"hidden\" data-v-74c470f8>\n          Click to select a country\n        </option> " + _vm._ssrList(_vm.countryCodes, function (country, i) {
    return "<option" + _vm._ssrAttr("value", country.code) + " data-v-74c470f8>" + _vm._ssrEscape("\n          " + _vm._s(country.name) + "\n        ") + "</option>";
  }) + "</select></div> " + (_vm.hasCountries ? "<div class=\"air-form__input\" data-v-74c470f8><input id=\"city\" type=\"text\" name=\"city\" placeholder=\"Search for a city\" data-v-74c470f8></div>" : "<!---->") + " " + (_vm.locations ? "<div class=\"air-form__select\" data-v-74c470f8><select id=\"locations\" name=\"locations\" data-v-74c470f8><option value disabled=\"disabled\" selected=\"selected\" hidden=\"hidden\" data-v-74c470f8>\n          Click to select a location\n        </option> " + _vm._ssrList(_vm.locations, function (location, i) {
    return "<option" + _vm._ssrAttr("value", i) + " data-v-74c470f8>" + _vm._ssrEscape("\n          " + _vm._s(location.name) + _vm._s(_vm._f("formatState")(location.state)) + _vm._s(_vm._f("formatCountry")(location.country)) + "\n        ") + "</option>";
  }) + "</select></div>" : "<!---->") + " " + (_vm.canSubmit ? "<div class=\"air-form__submit\" data-v-74c470f8><button type=\"submit\" class=\"actions__button-filter\" data-v-74c470f8><p data-v-74c470f8>GET AIR POLLUTION DATA</p></button></div>" : "<!---->") + " <div class=\"air-form__reset\" data-v-74c470f8><button type=\"button\" class=\"actions__button-link\" data-v-74c470f8>\n        Reset All\n      </button></div> "), _vm.hasLoader && _vm.isLoading ? _c('LoadingOverlay') : _vm._e()], 2)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AirForm.vue?vue&type=template&id=74c470f8&scoped=true&

// EXTERNAL MODULE: ./assets/ISO/ISO3166.json
var ISO3166 = __webpack_require__(141);

// EXTERNAL MODULE: ./components/LoadingOverlay.vue + 4 modules
var LoadingOverlay = __webpack_require__(96);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AirForm.vue?vue&type=script&lang=js&


/* harmony default export */ var AirFormvue_type_script_lang_js_ = ({
  name: 'AirForm',
  components: {
    LoadingOverlay: LoadingOverlay["default"]
  },
  filters: {
    formatState(value) {
      if (value) {
        return ', ' + value;
      }
    },

    formatCountry(value) {
      if (value) {
        return ' (' + value + ')';
      }
    }

  },
  props: {
    hasLoader: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: null
    },
    locations: {
      type: Array,
      default: null
    },
    airData: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      hints: null,
      hasCountries: false,
      canSubmit: false
    };
  },

  computed: {
    countryCodes() {
      return ISO3166;
    }

  },
  methods: {
    resetForm(event) {
      for (const el of event.target.closest('form')) {
        el.value = '';
      }

      this.hasCountries = false;
      this.canSubmit = false;
      this.$emit('reset-form');
    },

    searchCity(event) {
      this.$emit('search-city', event.target);
    },

    getCoordinates(event) {
      this.$emit('get-coordinates', document.forms.air);
    }

  }
});
// CONCATENATED MODULE: ./components/AirForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AirFormvue_type_script_lang_js_ = (AirFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AirForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(142)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AirFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "74c470f8",
  "1c9a8a8e"
  
)

/* harmony default export */ var AirForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingOverlay: __webpack_require__(96).default})


/***/ }),
/* 153 */
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

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BarChart.vue?vue&type=template&id=66a8652e&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "line-chart"
  }, [_vm._ssrNode("<canvas" + _vm._ssrAttr("id", _vm.id) + _vm._ssrAttr("width", _vm.chartWidth) + _vm._ssrAttr("height", _vm.chartHeight) + " data-v-66a8652e></canvas> " + (_vm.hasFilters ? "<div class=\"line-chart__filters\" data-v-66a8652e><p data-v-66a8652e>" + _vm._ssrEscape("Filter by " + _vm._s(_vm.filterType) + ": ") + "</p> <div class=\"line-chart__filters-wrapper\" data-v-66a8652e>" + _vm._ssrList(_vm.filters, function (btn, i) {
    return "<button" + _vm._ssrClass("actions__button-filter", {
      'selected': _vm.filterSelected === btn.value
    }) + _vm._ssrStyle(null, {
      'color': _vm.filterSelected === btn.value ? 'white' : ''
    }, null) + " data-v-66a8652e><p data-v-66a8652e>" + _vm._ssrEscape(_vm._s(btn.label)) + "</p></button>";
  }) + "</div></div>" : "<!---->") + " "), _vm.hasLoader && _vm.isLoading ? _c('LoadingOverlay') : _vm._e()], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/BarChart.vue?vue&type=template&id=66a8652e&scoped=true&

// EXTERNAL MODULE: external "chart.js/auto"
var auto_ = __webpack_require__(91);
var auto_default = /*#__PURE__*/__webpack_require__.n(auto_);

// EXTERNAL MODULE: external "chartjs-adapter-date-fns"
var external_chartjs_adapter_date_fns_ = __webpack_require__(92);

// EXTERNAL MODULE: ./components/LoadingOverlay.vue + 4 modules
var LoadingOverlay = __webpack_require__(96);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BarChart.vue?vue&type=script&lang=js&



/* harmony default export */ var BarChartvue_type_script_lang_js_ = ({
  name: 'LineChart',
  components: {
    LoadingOverlay: LoadingOverlay["default"]
  },
  props: {
    id: {
      type: String,
      default: null
    },
    hasLoader: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    hasFilters: {
      type: Boolean,
      default: false
    },
    filters: {
      type: Array,
      default: null
    },
    filterType: {
      type: String,
      default: null
    },
    filterSelected: {
      type: [String, Number],
      default: null
    },
    chartWidth: {
      type: Number,
      default: 400
    },
    chartHeight: {
      type: Number,
      default: 250
    },
    settings: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      myChart: null
    };
  },

  watch: {
    settings: {
      handler(newVal) {
        if (!newVal) {
          return;
        }

        this.updateChart();
      },

      deep: true
    }
  },
  methods: {
    cloneObj(data) {
      return JSON.parse(JSON.stringify(data));
    },

    editData() {
      this.myChart.data.labels = this.cloneObj(this.settings.data.labels);
      this.myChart.data.datasets = this.cloneObj(this.settings.data.datasets);
      this.myChart.update();
    },

    updateChart() {
      const ctx = document.getElementById(this.id);

      if (this.myChart instanceof auto_default.a) {
        this.editData();
      } else {
        this.myChart = new auto_default.a(ctx, this.cloneObj(this.settings));
      }
    }

  }
});
// CONCATENATED MODULE: ./components/BarChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BarChartvue_type_script_lang_js_ = (BarChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BarChart.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(146)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BarChartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "66a8652e",
  "cb99ade0"
  
)

/* harmony default export */ var BarChart = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingOverlay: __webpack_require__(96).default})


/***/ }),
/* 155 */,
/* 156 */,
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(169);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1be47400", content, true, context)
};

/***/ }),
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirPage_vue_vue_type_style_index_0_id_de866728_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(157);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirPage_vue_vue_type_style_index_0_id_de866728_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirPage_vue_vue_type_style_index_0_id_de866728_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirPage_vue_vue_type_style_index_0_id_de866728_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AirPage_vue_vue_type_style_index_0_id_de866728_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".child-page[data-v-de866728]{width:1200px;padding:20px;border-radius:10px;margin-bottom:30px}.description[data-v-de866728]{padding:20px;font-size:20px;color:#fff}.description ul[data-v-de866728]{padding-left:20px}.graphic[data-v-de866728]{margin-bottom:20px}.graphic__hidden[data-v-de866728]{height:0;overflow:hidden}@media screen and (max-width:1199px)and (min-width:768px){.child-page[data-v-de866728]{max-width:700px}}@media screen and (max-width:767px)and (min-width:576px){.child-page[data-v-de866728]{max-width:560px}}@media screen and (max-width:575px){.child-page[data-v-de866728]{max-width:400px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/AirPage.vue?vue&type=template&id=de866728&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "air-page child-page",
    style: {
      backgroundColor: _vm.color
    }
  }, [_vm.video ? _c('VideoHeader', {
    attrs: {
      "video": _vm.video,
      "title": _vm.title
    }
  }) : _vm._e(), _vm._ssrNode(" <div class=\"description\" data-v-de866728>" + _vm._s(_vm.pageDescription) + "</div> "), _vm._ssrNode("<div class=\"api-form\" data-v-de866728>", "</div>", [_c('AirForm', {
    attrs: {
      "has-loader": true,
      "is-loading": _vm.isPending,
      "locations": _vm.locations
    },
    on: {
      "get-coordinates": _vm.getCoordinates,
      "search-city": _vm.searchCity,
      "reset-form": _vm.resetForm
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("graphic", {
    'graphic__hidden': !_vm.hasLineFilteredData || !_vm.hasBarData
  }) + " data-v-de866728>", "</div>", [_c('LineChart', {
    attrs: {
      "id": "myChart0",
      "has-filters": true,
      "has-loader": false,
      "is-loading": _vm.isPending,
      "chart-width": 400,
      "chart-height": _vm.isMobile ? 400 : 250,
      "settings": _vm.settings.lineChart,
      "filters": _vm.filters.months,
      "filter-selected": _vm.filters.selected,
      "filter-type": 'time'
    },
    on: {
      "change-filter": _vm.changeFilter
    }
  }), _vm._ssrNode(" "), _c('ChartLegend', {
    attrs: {
      "title": "Air quality index levels",
      "description": "Pollutants concentration in μg/m3",
      "legend": _vm.legend,
      "is-mobile": _vm.isMobile
    }
  }), _vm._ssrNode(" "), _c('BarChart', {
    attrs: {
      "id": "myChart1",
      "has-filters": false,
      "has-loader": false,
      "is-loading": _vm.isPending,
      "chart-width": 400,
      "chart-height": _vm.isMobile ? 400 : 250,
      "settings": _vm.settings.barChart
    }
  })], 2), _vm._ssrNode(" "), _vm.youtubeLink ? _vm._ssrNode("<div class=\"other-contents\" data-v-de866728>", "</div>", [_c('YoutubeVideo', {
    attrs: {
      "link": _vm.youtubeLink
    }
  })], 1) : _vm._e(), _vm._ssrNode(" "), _c('ActionButtons', {
    on: {
      "go-back": function ($event) {
        return _vm.$emit('go-to');
      }
    }
  })], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index/AirPage.vue?vue&type=template&id=de866728&scoped=true&

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(6);

// CONCATENATED MODULE: ./composables/pages/index/air/chartConfig.js


const chartConfig = () => {
  const lineChartDataConfig = {
    labels: null,
    datasets: [{
      label: 'PM 10',
      borderColor: 'blue',
      backgroundColor: 'transparent',
      borderWidth: 1,
      radius: 2,
      showLine: false,
      data: null
    }, {
      label: 'PM 2.5',
      borderColor: '#a32525',
      backgroundColor: 'transparent',
      borderWidth: 1,
      radius: 2,
      showLine: false,
      data: null
    }]
  };
  const lineChartMobileConfig = [{
    radius: 0,
    showLine: true
  }, {
    radius: 0,
    showLine: true
  }];
  const lineFieldsToParse = [{
    x: ['time'],
    y: ['components', 'pm10']
  }, {
    x: ['time'],
    y: ['components', 'pm2_5']
  }];
  const barChartDataConfig = {
    labels: null,
    datasets: [{
      label: 'PM 10',
      borderColor: 'blue',
      backgroundColor: '#6f73f6ad',
      borderWidth: 1,
      radius: 2,
      showLine: false,
      data: null
    }, {
      label: 'PM 2.5',
      borderColor: '#a32525',
      backgroundColor: '#a32525ad',
      borderWidth: 1,
      radius: 2,
      showLine: false,
      data: null
    }]
  };
  const barChartMobileConfig = [{
    radius: 0,
    showLine: true
  }, {
    radius: 0,
    showLine: true
  }];
  const barFieldsToParse = [{
    x: ['city'],
    y: ['components', 'pm10']
  }, {
    x: ['city'],
    y: ['components', 'pm2_5']
  }];
  const filters = Object(runtime["d" /* ref */])({
    selected: 'all',
    months: [{
      label: '6 MONTHS',
      value: 6
    }, {
      label: '9 MONTHS',
      value: 9
    }, {
      label: '1 YEAR',
      value: 12
    }, {
      label: 'ALL',
      value: 'all'
    }]
  });
  const settings = Object(runtime["d" /* ref */])({
    lineChart: {
      type: 'line',
      data: null,
      options: {
        animation: false,
        parsing: false,
        layout: {
          padding: 20
        },
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'month'
            }
          },
          y: {
            type: 'linear',
            min: null,
            max: null,
            title: {
              display: true,
              text: 'Pollutants concentration (μg/m3)',
              font: {
                size: 16
              }
            }
          }
        },
        interaction: {
          mode: 'nearest',
          axis: 'x',
          intersect: false
        },
        plugins: {
          decimation: {
            enabled: true,
            algorithm: 'lttb',
            samples: 500
          },
          legend: {
            position: 'bottom',
            labels: {
              font: {
                size: 20,
                family: "'Raleway', 'sans-serif'"
              }
            }
          },
          tooltip: {
            enabled: false,
            backgroundColor: 'yellow'
          },
          title: {
            display: true,
            text: 'Particulates in the air',
            font: {
              size: 20,
              family: "'Raleway', 'sans-serif'",
              color: '#000000'
            }
          }
        }
      }
    },
    barChart: {
      type: 'bar',
      data: null,
      options: {
        layout: {
          padding: 20
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Pollutants concentration (μg/m3)',
              font: {
                size: 16
              }
            }
          }
        },
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: {
                size: 20,
                family: "'Raleway', 'sans-serif'"
              }
            }
          },
          title: {
            display: true,
            text: 'Comparison with most & less polluted city in the world',
            font: {
              size: 20,
              family: "'Raleway', 'sans-serif'",
              color: '#000000'
            }
          }
        }
      }
    }
  });
  const legend = {
    titles: ['Pollutants name', 'Good', 'Fair', 'Moderate', 'Poor', 'Very poor'],
    rows: [{
      name: 'PM 10',
      good: '0-25',
      fair: '25-50',
      moderate: '50-90',
      poor: '90-180',
      veryPoor: '>180'
    }, {
      name: 'PM 2.5',
      good: '0-15',
      fair: '15-30',
      moderate: '30-55',
      poor: '55-110',
      veryPoor: '>110'
    }]
  };
  return {
    lineChartDataConfig,
    lineChartMobileConfig,
    lineFieldsToParse,
    barChartDataConfig,
    barChartMobileConfig,
    barFieldsToParse,
    filters,
    settings,
    legend
  };
};

/* harmony default export */ var air_chartConfig = (chartConfig);
// CONCATENATED MODULE: ./composables/pages/index/air/airData.js

const {
  lineChartDataConfig: airData_lineChartDataConfig,
  lineChartMobileConfig: airData_lineChartMobileConfig,
  lineFieldsToParse: airData_lineFieldsToParse,
  barChartDataConfig: airData_barChartDataConfig,
  barChartMobileConfig: airData_barChartMobileConfig,
  barFieldsToParse: airData_barFieldsToParse,
  filters: airData_filters,
  settings: airData_settings,
  legend: airData_legend
} = air_chartConfig();

const airData = () => {
  const pageDescription = `
    <p>Air pollution refers to the release of pollutants into the air—pollutants which are detrimental to human health and the planet as a whole. According to the World Health Organization (WHO), each year air pollution is responsible for nearly seven million deaths around the globe.</p>
    <br>
    <p>Nine out of ten human beings currently breathe air that exceeds the WHO’s guideline limits for pollutants, with those living in low- and middle-income countries suffering the most. In the United States, the Clean Air Act, established in 1970, authorizes the U.S. Environmental Protection Agency (EPA) to safeguard public health by regulating the emissions of these harmful air pollutants.</p>
    <br>
    <p><strong>What is PM, and how does it get into the air?</strong></p>
    <p>PM stands for Particulate Matter. This term indicate a mixture of solid particles and liquid droplets found in the air.</p>
    <p>Particle pollution includes:</p>
    <ul>
      <li>PM 10: inhalable particles, with diameters that are generally 10 micrometers and smaller;</li>
      <li>PM 2.5: fine inhalable particles, with diameters that are generally 2.5 micrometers and smaller;</li>
    </ul>
    <br>
    <p><strong>What are the Harmful Effects of PM?</strong></p>
    <p>Particulate matter contains microscopic solids or liquid droplets that are so small that they can be inhaled, get deep into your lungs and cause serious health problems.</p>
  `;
  return {
    lineChartDataConfig: airData_lineChartDataConfig,
    lineChartMobileConfig: airData_lineChartMobileConfig,
    lineFieldsToParse: airData_lineFieldsToParse,
    barChartDataConfig: airData_barChartDataConfig,
    barChartMobileConfig: airData_barChartMobileConfig,
    barFieldsToParse: airData_barFieldsToParse,
    filters: airData_filters,
    settings: airData_settings,
    legend: airData_legend,
    pageDescription
  };
};

/* harmony default export */ var air_airData = (airData);
// EXTERNAL MODULE: ./composables/chartjs/useChartFunctions.js
var useChartFunctions = __webpack_require__(106);

// EXTERNAL MODULE: ./composables/global/useConverters.js
var useConverters = __webpack_require__(107);

// CONCATENATED MODULE: ./composables/chartjs/useComparisonData.js


const useComparisonData = () => {
  const startingDataset = Object(runtime["d" /* ref */])([{
    type: 'lessPolluted',
    city: 'Calgary',
    state: 'CA',
    lat: 51.0460954,
    lon: -114.065465,
    components: null
  }, {
    type: 'mostPolluted',
    city: 'Hotan City',
    state: 'CH',
    lat: 37.1126842,
    lon: 79.9111626,
    components: null
  }]);
  return {
    startingDataset
  };
};

/* harmony default export */ var chartjs_useComparisonData = (useComparisonData);
// CONCATENATED MODULE: ./composables/chartjs/useBarChart.js




const {
  parseData
} = Object(useChartFunctions["a" /* default */])();
const {
  startingDataset: useBarChart_startingDataset
} = chartjs_useComparisonData();
const {
  capitalize
} = Object(useConverters["a" /* default */])();
const useBarChart_barData = Object(runtime["d" /* ref */])(null);
const useBarChart_barChartData = Object(runtime["d" /* ref */])(null);
const barChartArray = Object(runtime["d" /* ref */])(useBarChart_startingDataset.value);
const useBarChart_hasBarData = Object(runtime["a" /* computed */])(() => {
  return useBarChart_barData.value != null;
});

const useBarChart = () => {
  const updateBarItemField = (type, key, value) => {
    const item = getBarItem(type);
    item[key] = value;
  };

  const getBarItem = type => {
    return barChartArray.value.find(item => {
      return item.type === type;
    });
  };

  const addToBarChartArray = (form, locations, apiResult) => {
    const itemToAdd = {
      type: 'searched',
      city: capitalize(form.city.value) + ' - (' + form.countries.value + ')',
      state: form.countries.value,
      lat: locations[form.locations.value].lat,
      lon: locations[form.locations.value].lon,
      components: apiResult.list[0].components
    };
    resetToDefaultArray();
    barChartArray.value.push(itemToAdd);
  };

  const resetToDefaultArray = () => {
    barChartArray.value = barChartArray.value.filter(location => {
      return location.type !== 'searched';
    });
  };

  const setBarChartData = (config, mobileConfig, isMobile, fieldsToParse) => {
    useBarChart_barChartData.value = config;

    if (isMobile) {
      setBarChartMobileData(mobileConfig);
    }

    setBarChartLabels(fieldsToParse);
    setFieldsToParse(fieldsToParse);
  };

  const setBarChartMobileData = mobileConfig => {
    for (let x = 0; x < mobileConfig.length; x++) {
      const keys = Object.keys(mobileConfig[x]);
      const values = Object.values(mobileConfig[x]);

      for (let y = 0; y < keys.length; y++) {
        useBarChart_barChartData.value.datasets[keys[y]] = values[y];
      }
    }
  };

  const setBarChartLabels = fields => {
    const key = fields[0].x[0];
    useBarChart_barChartData.value.labels = useBarChart_barData.value.map(r => {
      return r[key];
    });
  };

  const setFieldsToParse = fields => {
    for (let x = 0; x < fields.length; x++) {
      useBarChart_barChartData.value.datasets[x].data = parseData(useBarChart_barData.value, fields[x].x, fields[x].y);
    }
  };

  return {
    barData: useBarChart_barData,
    hasBarData: useBarChart_hasBarData,
    barChartData: useBarChart_barChartData,
    barChartArray,
    updateBarItemField,
    getBarItem,
    addToBarChartArray,
    resetToDefaultArray,
    setBarChartData
  };
};

/* harmony default export */ var chartjs_useBarChart = (useBarChart);
// EXTERNAL MODULE: ./composables/chartjs/useLineChart.js
var useLineChart = __webpack_require__(121);

// EXTERNAL MODULE: external "debounce"
var external_debounce_ = __webpack_require__(93);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./services/api/OWAirPollution.js

const apiClient = external_axios_default.a.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
apiClient.defaults.timeout = 15000;
/* harmony default export */ var OWAirPollution = ({
  getAirPollution(data) {
    return apiClient.get('/air_pollution?lat=' + data.location.lat + '&lon=' + data.location.lon + '&appid=' + "45c8a662a6c30d0cb6a1eb86fa75b343");
  },

  getAirHistory(data) {
    return apiClient.get('/air_pollution/history?lat=' + data.location.lat + '&lon=' + data.location.lon + '&start=' + data.startDate + '&end=' + data.endDate + '&appid=' + "45c8a662a6c30d0cb6a1eb86fa75b343");
  }

});
// CONCATENATED MODULE: ./composables/api/useAirAPI.js


const airResponse = Object(runtime["d" /* ref */])(null);
const airError = Object(runtime["d" /* ref */])(null);
const isAirPending = Object(runtime["d" /* ref */])(false);

const useAirAPI = () => {
  const fetchAirData = async options => {
    isAirPending.value = true;
    airResponse.value = null;
    airError.value = null;
    await OWAirPollution[options.service](options.parameters).then(res => {
      airResponse.value = res.data;
      isAirPending.value = false;
    }).catch(e => {
      airError.value = e;
      isAirPending.value = false;
    });
  };

  return {
    airResponse,
    airError,
    isAirPending,
    fetchAirData
  };
};

/* harmony default export */ var api_useAirAPI = (useAirAPI);
// CONCATENATED MODULE: ./services/api/OWGeocoding.js

const OWGeocoding_apiClient = external_axios_default.a.create({
  baseURL: "https://api.openweathermap.org/geo/1.0",
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
OWGeocoding_apiClient.defaults.timeout = 15000;
/* harmony default export */ var OWGeocoding = ({
  getCoordinates(dataObj) {
    return OWGeocoding_apiClient.get('/direct?q=' + dataObj.city + ',' + dataObj.country + '&limit=' + dataObj.limit + '&appid=' + "45c8a662a6c30d0cb6a1eb86fa75b343");
  }

});
// CONCATENATED MODULE: ./composables/api/useGeocodingAPI.js


const geoResponse = Object(runtime["d" /* ref */])(null);
const geoError = Object(runtime["d" /* ref */])(null);
const isGeoPending = Object(runtime["d" /* ref */])(false);

const useGeocodingAPI = () => {
  const fetchGeoData = async options => {
    isGeoPending.value = true;
    geoResponse.value = null;
    geoError.value = null;
    await OWGeocoding[options.service](options.parameters).then(res => {
      geoResponse.value = res.data;
      isGeoPending.value = false;
    }).catch(e => {
      geoError.value = e;
      isGeoPending.value = false;
    });
  };

  return {
    geoResponse,
    geoError,
    isGeoPending,
    fetchGeoData
  };
};

/* harmony default export */ var api_useGeocodingAPI = (useGeocodingAPI);
// EXTERNAL MODULE: ./composables/global/usePopup.js
var usePopup = __webpack_require__(112);

// CONCATENATED MODULE: ./composables/forms/useAirForm.js








const {
  formatTime
} = Object(useConverters["a" /* default */])();
const {
  updateBarItemField,
  getBarItem,
  barChartArray: useAirForm_barChartArray,
  addToBarChartArray,
  barData: useAirForm_barData
} = chartjs_useBarChart();
const {
  startDate,
  endDate,
  lineData: useAirForm_lineData
} = Object(useLineChart["a" /* default */])();
const {
  fetchAirData: useAirForm_fetchAirData,
  isAirPending: useAirForm_isAirPending,
  airError: useAirForm_airError,
  airResponse: useAirForm_airResponse
} = api_useAirAPI();
const {
  fetchGeoData: useAirForm_fetchGeoData,
  isGeoPending: useAirForm_isGeoPending,
  geoError: useAirForm_geoError,
  geoResponse: useAirForm_geoResponse
} = api_useGeocodingAPI();
const {
  triggerPopup
} = Object(usePopup["a" /* default */])();

const useAirForm = () => {
  const locations = Object(runtime["d" /* ref */])(null);
  const selectedLocation = Object(runtime["a" /* computed */])(() => {
    return document.forms.air.locations.value;
  });
  const locationData = Object(runtime["a" /* computed */])(() => {
    if (locations.value && selectedLocation.value) {
      return locations.value[selectedLocation.value];
    }

    return null;
  });
  const isPending = Object(runtime["a" /* computed */])(() => {
    return useAirForm_isAirPending.value || useAirForm_isGeoPending.value;
  });

  const resetForm = () => {
    locations.value = null;
  };

  const getCoordinates = Object(external_debounce_["debounce"])(async form => {
    if (!form.city.value || !form.countries.value) {
      return;
    }

    await useAirForm_fetchGeoData({
      service: 'getCoordinates',
      parameters: {
        city: form.city.value,
        country: form.countries.value,
        limit: 10
      }
    });

    if (!useAirForm_geoError.value) {
      locations.value = useAirForm_geoResponse.value;
    } else {
      triggerPopup();
    }
  }, 1000);
  const searchCity = Object(external_debounce_["debounce"])(async () => {
    if (locationData.value) {
      await loadBarChart();
      await loadLineChart();
    }
  }, 500);

  const loadBarChart = async () => {
    await useAirForm_fetchAirData({
      service: 'getAirPollution',
      parameters: {
        location: locationData.value
      }
    });

    if (!useAirForm_airError.value) {
      addToBarChartArray(document.forms.air, locations.value, useAirForm_airResponse.value);
      useAirForm_barData.value = useAirForm_barChartArray.value;
    } else {
      triggerPopup();
    }
  };

  const loadLineChart = async () => {
    await useAirForm_fetchAirData({
      service: 'getAirHistory',
      parameters: {
        location: locationData.value,
        startDate: startDate.value,
        endDate: endDate.value
      }
    });

    if (!useAirForm_airError.value) {
      useAirForm_lineData.value = formatTime(useAirForm_airResponse.value.list, 'unix', ['dt']);
    } else {
      triggerPopup();
    }
  };

  const fetchStartingDataset = async () => {
    await useAirForm_fetchAirData({
      service: 'getAirPollution',
      parameters: {
        location: getBarItem('lessPolluted')
      }
    });

    if (!useAirForm_airError.value) {
      updateBarItemField('lessPolluted', 'components', useAirForm_airResponse.value.list[0].components);
    }

    await useAirForm_fetchAirData({
      service: 'getAirPollution',
      parameters: {
        location: getBarItem('mostPolluted')
      }
    });

    if (!useAirForm_airError.value) {
      updateBarItemField('mostPolluted', 'components', useAirForm_airResponse.value.list[0].components);
    }
  };

  return {
    locations,
    resetForm,
    getCoordinates,
    searchCity,
    fetchStartingDataset,
    isPending,
    airResponse: useAirForm_airResponse
  };
};

/* harmony default export */ var forms_useAirForm = (useAirForm);
// EXTERNAL MODULE: ./components/VideoHeader.vue + 4 modules
var VideoHeader = __webpack_require__(108);

// EXTERNAL MODULE: ./components/AirForm.vue + 4 modules
var AirForm = __webpack_require__(152);

// EXTERNAL MODULE: ./components/ChartLegend.vue + 4 modules
var ChartLegend = __webpack_require__(153);

// EXTERNAL MODULE: ./components/LineChart.vue + 4 modules
var LineChart = __webpack_require__(109);

// EXTERNAL MODULE: ./components/BarChart.vue + 4 modules
var BarChart = __webpack_require__(154);

// EXTERNAL MODULE: ./components/YoutubeVideo.vue + 4 modules
var YoutubeVideo = __webpack_require__(110);

// EXTERNAL MODULE: ./components/ActionButtons.vue + 4 modules
var ActionButtons = __webpack_require__(111);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/AirPage.vue?vue&type=script&lang=js&
// Utilities

 // Composables




 // Components








/* harmony default export */ var AirPagevue_type_script_lang_js_ = ({
  name: 'AirPage',
  components: {
    VideoHeader: VideoHeader["default"],
    AirForm: AirForm["default"],
    ChartLegend: ChartLegend["default"],
    LineChart: LineChart["default"],
    BarChart: BarChart["default"],
    YoutubeVideo: YoutubeVideo["default"],
    ActionButtons: ActionButtons["default"]
  },
  props: {
    isMobile: {
      type: Boolean,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    video: {
      type: String,
      default: null
    },
    youtubeLink: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: null
    }
  },

  setup(props) {
    const {
      updateChartData,
      filterData
    } = Object(useChartFunctions["a" /* default */])();
    const {
      locations,
      resetForm,
      getCoordinates,
      fetchStartingDataset,
      isPending,
      searchCity
    } = forms_useAirForm();
    const {
      lineChartDataConfig,
      lineChartMobileConfig,
      lineFieldsToParse,
      filters,
      settings,
      legend,
      pageDescription,
      barChartDataConfig,
      barChartMobileConfig,
      barFieldsToParse
    } = air_airData();
    const {
      lineData,
      lineFilteredData,
      lineChartData,
      hasLineFilteredData,
      setLineChartData,
      resetLineChart
    } = Object(useLineChart["a" /* default */])();
    const {
      barData,
      hasBarData,
      barChartData,
      setBarChartData
    } = chartjs_useBarChart();

    const changeFilter = event => {
      filters.value.selected = event;
      lineFilteredData.value = filterData(lineData.value, 'time', 'months', filters.value.selected);
    };

    Object(runtime["h" /* watch */])(lineFilteredData, newVal => {
      if (!newVal) {
        return;
      }

      setLineChartData(lineChartDataConfig, lineChartMobileConfig, props.isMobile, lineFieldsToParse);
      updateChartData(settings.value, 'lineChart', lineChartData.value);
    });
    Object(runtime["h" /* watch */])(barData, newVal => {
      if (!newVal) {
        return;
      }

      setBarChartData(barChartDataConfig, barChartMobileConfig, props.isMobile, barFieldsToParse);
      updateChartData(settings.value, 'barChart', barChartData.value);
    }, {
      deep: true
    });
    Object(runtime["c" /* onMounted */])(async () => {
      resetLineChart();
      await fetchStartingDataset();
    });
    return {
      filters,
      settings,
      locations,
      resetForm,
      getCoordinates,
      searchCity,
      hasLineFilteredData,
      hasBarData,
      changeFilter,
      legend,
      pageDescription,
      isPending
    };
  }

});
// CONCATENATED MODULE: ./pages/index/AirPage.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_AirPagevue_type_script_lang_js_ = (AirPagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index/AirPage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(168)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_AirPagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "de866728",
  "f3b63fd4"
  
)

/* harmony default export */ var AirPage = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {VideoHeader: __webpack_require__(108).default,AirForm: __webpack_require__(152).default,LineChart: __webpack_require__(109).default,ChartLegend: __webpack_require__(153).default,BarChart: __webpack_require__(154).default,YoutubeVideo: __webpack_require__(110).default,ActionButtons: __webpack_require__(111).default})


/***/ })
]);;
//# sourceMappingURL=AirPage.js.map