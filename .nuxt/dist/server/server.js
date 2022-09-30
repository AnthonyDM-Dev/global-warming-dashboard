module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/action-buttons","2":"components/air-form","3":"components/alert-popup","4":"components/banner-cover","5":"components/bar-chart","6":"components/chart-legend","7":"components/earth-model","8":"components/line-chart","9":"components/loading-overlay","10":"components/nav-bar","11":"components/property-card","12":"components/spinner-loader","13":"components/video-header","14":"components/youtube-video","15":"pages/index","16":"pages/index/AirPage","17":"pages/index/CarbondioxidePage","18":"pages/index/MethanePage","19":"pages/index/NitrousoxidePage","20":"pages/index/PolaricePage","21":"pages/index/TemperaturePage"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ external_vue_["computed"]; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ external_vue_["onMounted"]; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ external_vue_["ref"]; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ external_vue_["watch"]; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ globalPlugin; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ setMetaPlugin; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ useRoute; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ useRouter; });

// UNUSED EXPORTS: customRef, del, effectScope, getCurrentInstance, getCurrentScope, h, inject, isProxy, isReactive, isReadonly, isRef, isShallow, markRaw, nextTick, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onRenderTracked, onRenderTriggered, onScopeDispose, onServerPrefetch, onUnmounted, onUpdated, provide, proxyRefs, reactive, readonly, set, shallowReactive, shallowReadonly, shallowRef, toRaw, toRef, toRefs, triggerRef, unref, useAttrs, useCSSModule, useCssModule, useCssVars, useSlots, version, watchEffect, watchPostEffect, watchSyncEffect, createApp, createRef, defineAsyncComponent, defineComponent, defineNuxtMiddleware, defineNuxtPlugin, isRaw, onGlobalSetup, reqRef, reqSsrRef, setSSRContext, shallowSsrRef, ssrPromise, ssrRef, useAsync, useContext, useFetch, useMeta, useStatic, useStore, warn, withContext, wrapProperty

// EXTERNAL MODULE: external "core-js/modules/esnext.weak-map.delete-all.js"
var esnext_weak_map_delete_all_js_ = __webpack_require__(57);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.delete-all.js"
var esnext_map_delete_all_js_ = __webpack_require__(58);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.every.js"
var esnext_map_every_js_ = __webpack_require__(59);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.filter.js"
var esnext_map_filter_js_ = __webpack_require__(60);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find.js"
var esnext_map_find_js_ = __webpack_require__(61);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find-key.js"
var esnext_map_find_key_js_ = __webpack_require__(62);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.includes.js"
var esnext_map_includes_js_ = __webpack_require__(63);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.key-of.js"
var esnext_map_key_of_js_ = __webpack_require__(64);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-keys.js"
var esnext_map_map_keys_js_ = __webpack_require__(65);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-values.js"
var esnext_map_map_values_js_ = __webpack_require__(66);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.merge.js"
var esnext_map_merge_js_ = __webpack_require__(67);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.reduce.js"
var esnext_map_reduce_js_ = __webpack_require__(68);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.some.js"
var esnext_map_some_js_ = __webpack_require__(69);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.update.js"
var esnext_map_update_js_ = __webpack_require__(70);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.add-all.js"
var esnext_set_add_all_js_ = __webpack_require__(71);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.delete-all.js"
var esnext_set_delete_all_js_ = __webpack_require__(72);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.difference.js"
var esnext_set_difference_js_ = __webpack_require__(73);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.every.js"
var esnext_set_every_js_ = __webpack_require__(74);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.filter.js"
var esnext_set_filter_js_ = __webpack_require__(75);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.find.js"
var esnext_set_find_js_ = __webpack_require__(76);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.intersection.js"
var esnext_set_intersection_js_ = __webpack_require__(77);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-disjoint-from.js"
var esnext_set_is_disjoint_from_js_ = __webpack_require__(78);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-subset-of.js"
var esnext_set_is_subset_of_js_ = __webpack_require__(79);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-superset-of.js"
var esnext_set_is_superset_of_js_ = __webpack_require__(80);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.join.js"
var esnext_set_join_js_ = __webpack_require__(81);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.map.js"
var esnext_set_map_js_ = __webpack_require__(82);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.reduce.js"
var esnext_set_reduce_js_ = __webpack_require__(83);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.some.js"
var esnext_set_some_js_ = __webpack_require__(84);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.symmetric-difference.js"
var esnext_set_symmetric_difference_js_ = __webpack_require__(85);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.union.js"
var esnext_set_union_js_ = __webpack_require__(86);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);

// CONCATENATED MODULE: ./.nuxt/composition-api/globals.mjs
const isFullStatic = false;
const staticPath = "C:/Users/adeimedi/Desktop/Progetti personali/Start2Impact/s2iProject_Final_Project_Front-end/world-status-tracker/.nuxt/static-json";
const publicPath = "/";
const globalContext = "__NUXT__";
const globalNuxt = "$nuxt";
// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(7);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs




































function validateKey(key) {
  if (!key) {
    throw new Error("You must provide a key. You can have it generated automatically by adding '@nuxtjs/composition-api/dist/babel-plugin' to your Babel plugins.");
  }
}

const getCurrentInstance = () => {
  const vm = Object(external_vue_["getCurrentInstance"])();
  if (!vm) return;
  return vm.proxy;
};

function getValue(value) {
  if (value instanceof Function) return value();
  return value;
}

let globalRefs = {};

function setSSRContext(app) {
  globalRefs = Object.assign({}, {});
  app.context.ssrContext.nuxt.globalRefs = globalRefs;
}

const useServerData = () => {
  const vm = getCurrentInstance();
  const type = vm ? "ssrRefs" : "globalRefs";
  let ssrRefs;

  if (vm && true) {
    const ssrContext = (vm[globalNuxt] || vm.$options).context.ssrContext;
    ssrRefs = ssrContext.nuxt.ssrRefs = ssrContext.nuxt.ssrRefs || {};
  }

  const setData = (key, val) => {
    const refs = ssrRefs || globalRefs;
    refs[key] = sanitise(val);
  };

  return {
    type,
    setData
  };
};

const isProxyable = val => !!val && typeof val === "object";

const sanitise = val => val && JSON.parse(JSON.stringify(val)) || val;

const ssrValue = (value, key, type = "globalRefs") => {
  var _a, _b, _c, _d;

  if (false) {}

  return getValue(value);
};

const ssrRef = (value, key) => {
  validateKey(key);
  const {
    type,
    setData
  } = useServerData();
  let val = ssrValue(value, key, type);
  if (false) {}
  if (value instanceof Function) setData(key, val);

  const getProxy = (track, trigger, observable) => new Proxy(observable, {
    get(target, prop) {
      track();
      if (isProxyable(target[prop])) return getProxy(track, trigger, target[prop]);
      const value2 = Reflect.get(target, prop);
      return typeof value2 === "function" ? value2.bind(target) : value2;
    },

    set(obj, prop, newVal) {
      const result = Reflect.set(obj, prop, newVal);
      setData(key, val);
      trigger();
      return result;
    }

  });

  const proxy = Object(external_vue_["customRef"])((track, trigger) => ({
    get: () => {
      track();
      if (isProxyable(val)) return getProxy(track, trigger, val);
      return val;
    },
    set: v => {
      setData(key, v);
      val = v;
      trigger();
    }
  }));
  return proxy;
};

const shallowSsrRef = (value, key) => {
  validateKey(key);
  const {
    type,
    setData
  } = useServerData();
  if (false) {}

  const _val = getValue(value);

  if (value instanceof Function) {
    setData(key, _val);
  }

  return Object(external_vue_["customRef"])((track, trigger) => ({
    get() {
      track();
      return _val;
    },

    set(newValue) {
      setData(key, newValue);
      value = newValue;
      trigger();
    }

  }));
};

const ssrPromise = (value, key) => {
  validateKey(key);
  const {
    type,
    setData
  } = useServerData();
  const val = ssrValue(value, key, type);
  if (false) {}
  Object(external_vue_["onServerPrefetch"])(async () => {
    setData(key, await val);
  });
  return val;
};

const useAsync = (cb, key) => {
  var _a;

  validateKey(key);

  const _ref = Object(external_vue_["isRef"])(key) ? key : ssrRef(null, key);

  if (!_ref.value ||  false && (false)) {
    const p = Promise.resolve(cb());

    if (true) {
      Object(external_vue_["onServerPrefetch"])(async () => {
        _ref.value = await p;
      });
    } else {}
  }

  return _ref;
};

function createEmptyMeta() {
  return {
    titleTemplate: null,
    __dangerouslyDisableSanitizers: [],
    __dangerouslyDisableSanitizersByTagID: {},
    title: void 0,
    htmlAttrs: {},
    headAttrs: {},
    bodyAttrs: {},
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: [],
    noscript: [],
    changed: void 0,
    afterNavigation: void 0
  };
}

const getHeadOptions = options => {
  const head = function () {
    const optionHead = options.head instanceof Function ? options.head.call(this) : options.head;
    if (!this._computedHead) return optionHead;

    const computedHead = this._computedHead.map(h => {
      if (Object(external_vue_["isReactive"])(h)) return Object(external_vue_["toRaw"])(h);
      if (Object(external_vue_["isRef"])(h)) return h.value;
      return h;
    });

    return external_defu_default()({}, ...computedHead.reverse(), optionHead);
  };

  return {
    head
  };
};

const useMeta = init => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error("useMeta must be called within a component.");
  if (!("head" in vm.$options)) throw new Error("In order to enable `useMeta`, please make sure you include `head: {}` within your component definition, and you are using the `defineComponent` exported from @nuxtjs/composition-api.");

  const refreshMeta = () => vm.$meta().refresh();

  if (!vm._computedHead) {
    const metaRefs = Object(external_vue_["reactive"])(createEmptyMeta());
    vm._computedHead = [metaRefs];
    vm._metaRefs = Object(external_vue_["toRefs"])(metaRefs);

    if (false) {}
  }

  if (init) {
    const initRef = init instanceof Function ? Object(external_vue_["computed"])(init) : Object(external_vue_["ref"])(init);

    vm._computedHead.push(initRef);

    if (false) {}
  }

  return vm._metaRefs;
};

const defineComponent = options => {
  if (!("head" in options)) return options;
  return { ...options,
    ...getHeadOptions(options)
  };
};

const withContext = callback => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error("This must be called within a setup function.");
  callback((vm[globalNuxt] || vm.$options).context);
};

const useContext = () => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error("This must be called within a setup function.");
  return { ...(vm[globalNuxt] || vm.$options).context,
    route: Object(external_vue_["computed"])(() => vm.$route),
    query: Object(external_vue_["computed"])(() => vm.$route.query),
    from: Object(external_vue_["computed"])(() => (vm[globalNuxt] || vm.$options).context.from),
    params: Object(external_vue_["computed"])(() => vm.$route.params)
  };
};

const defineNuxtPlugin = plugin => plugin;

const defineNuxtMiddleware = middleware => middleware;

const nuxtState =  false && false;

function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === "string")) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}

function createGetCounter(counterObject, defaultKey = "") {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === void 0) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}

const fetches = new WeakMap();
const fetchPromises = new Map();

const isSsrHydration = vm => {
  var _a, _b, _c;

  return (_c = (_b = (_a = vm.$vnode) == null ? void 0 : _a.elm) == null ? void 0 : _b.dataset) == null ? void 0 : _c.fetchKey;
};

function registerCallback(vm, callback) {
  const callbacks = fetches.get(vm) || [];
  fetches.set(vm, [...callbacks, callback]);
}

async function callFetches() {
  const fetchesToCall = fetches.get(this);
  if (!fetchesToCall) return;
  this[globalNuxt].nbFetching++;
  this.$fetchState.pending = true;
  this.$fetchState.error = null;
  this._hydrated = false;
  let error = null;
  const startTime = Date.now();

  try {
    await Promise.all(fetchesToCall.map(fetch => {
      if (fetchPromises.has(fetch)) return fetchPromises.get(fetch);
      const promise = Promise.resolve(fetch(this)).finally(() => fetchPromises.delete(fetch));
      fetchPromises.set(fetch, promise);
      return promise;
    }));
  } catch (err) {
    if (false) {}

    error = normalizeError(err);
  }

  const delayLeft = (this._fetchDelay || 0) - (Date.now() - startTime);

  if (delayLeft > 0) {
    await new Promise(resolve => setTimeout(resolve, delayLeft));
  }

  this.$fetchState.error = error;
  this.$fetchState.pending = false;
  this.$fetchState.timestamp = Date.now();
  this.$nextTick(() => this[globalNuxt].nbFetching--);
}

const setFetchState = vm => {
  vm.$fetchState = vm.$fetchState || Object(external_vue_["reactive"])({
    error: null,
    pending: false,
    timestamp: 0
  });
};

const mergeDataOnMount = data => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error("This must be called within a setup function.");
  Object(external_vue_["onBeforeMount"])(() => {
    const vmData = vm._setupProxy || vm;

    for (const key in data) {
      try {
        if (key in vmData) {
          const _key = key;
          if (vmData[_key] === data[key]) continue;
          if (typeof vmData[_key] === "function") continue;

          if (Object(external_vue_["isReactive"])(vmData[_key])) {
            for (const k in vmData[_key]) {
              if (!(k in data[key])) {
                delete vmData[_key][k];
              }
            }

            Object.assign(vmData[_key], data[key]);
            continue;
          }
        }

        Object(external_vue_["set"])(vmData, key, data[key]);
      } catch (e) {
        if (false) {}
      }
    }
  });
};

const loadFullStatic = vm => {
  vm._fetchKey = getKey(vm);
  const {
    fetchOnServer
  } = vm.$options;
  const fetchedOnServer = typeof fetchOnServer === "function" ? fetchOnServer.call(vm) !== false : fetchOnServer !== false;
  const nuxt = vm[globalNuxt];

  if (!fetchedOnServer || (nuxt == null ? void 0 : nuxt.isPreview) || !(nuxt == null ? void 0 : nuxt._pagePayload)) {
    return;
  }

  vm._hydrated = true;
  const data = nuxt._pagePayload.fetch[vm._fetchKey];

  if (data && data._error) {
    vm.$fetchState.error = data._error;
    return;
  }

  mergeDataOnMount(data);
};

async function serverPrefetch(vm) {
  if (!vm._fetchOnServer) return;
  setFetchState(vm);

  try {
    await callFetches.call(vm);
  } catch (err) {
    if (false) {}

    vm.$fetchState.error = normalizeError(err);
  }

  vm.$fetchState.pending = false;
  vm._fetchKey = "push" in vm.$ssrContext.nuxt.fetch ? vm.$ssrContext.nuxt.fetch.length : vm._fetchKey || vm.$ssrContext.fetchCounters[""]++;
  if (!vm.$vnode.data) vm.$vnode.data = {};
  const attrs = vm.$vnode.data.attrs = vm.$vnode.data.attrs || {};
  attrs["data-fetch-key"] = vm._fetchKey;
  const data = Object.fromEntries(Object.entries((vm == null ? void 0 : vm._setupProxy) || (vm == null ? void 0 : vm._setupState)).filter(([_key, val]) => !(val && typeof val === "object" && "_compiled" in val || val instanceof Function || val instanceof Promise)).map(([key, val]) => [key, Object(external_vue_["isRef"])(val) ? val.value : val]));
  const content = vm.$fetchState.error ? {
    _error: vm.$fetchState.error
  } : JSON.parse(JSON.stringify(data));

  if ("push" in vm.$ssrContext.nuxt.fetch) {
    vm.$ssrContext.nuxt.fetch.push(content);
  } else {
    vm.$ssrContext.nuxt.fetch[vm._fetchKey] = content;
  }
}

function getKey(vm) {
  const nuxtState2 = vm[globalNuxt];

  if ( true && "push" in vm.$ssrContext.nuxt.fetch) {
    return void 0;
  } else if (false) {}

  const defaultKey = vm.$options._scopeId || vm.$options.name || "";
  const getCounter = createGetCounter( true ? vm.$ssrContext.fetchCounters : undefined, defaultKey);
  const options = vm.$options;

  if (typeof options.fetchKey === "function") {
    return options.fetchKey.call(vm, getCounter);
  } else {
    const key = typeof options.fetchKey === "string" ? options.fetchKey : defaultKey;
    return key ? key + ":" + getCounter(key) : String(getCounter(key));
  }
}

const useFetch = callback => {
  var _a;

  const vm = getCurrentInstance();
  if (!vm) throw new Error("This must be called within a setup function.");
  registerCallback(vm, callback);

  if (typeof vm.$options.fetchOnServer === "function") {
    vm._fetchOnServer = vm.$options.fetchOnServer.call(vm) !== false;
  } else {
    vm._fetchOnServer = vm.$options.fetchOnServer !== false;
  }

  if (true) {
    vm._fetchKey = getKey(vm);
  }

  setFetchState(vm);
  Object(external_vue_["onServerPrefetch"])(() => serverPrefetch(vm));

  function result() {
    return {
      fetch: vm.$fetch,
      fetchState: vm.$fetchState,
      $fetch: vm.$fetch,
      $fetchState: vm.$fetchState
    };
  }

  vm._fetchDelay = typeof vm.$options.fetchDelay === "number" ? vm.$options.fetchDelay : 0;
  vm.$fetch = callFetches.bind(vm);
  Object(external_vue_["onBeforeMount"])(() => !vm._hydrated && callFetches.call(vm));

  if (true) {
    if (false) {}
    return result();
  }

  vm._hydrated = true;
  vm._fetchKey = ((_a = vm.$vnode.elm) == null ? void 0 : _a.dataset.fetchKey) || getKey(vm);
  const data = nuxtState.fetch[vm._fetchKey];

  if (data && data._error) {
    vm.$fetchState.error = data._error;
    return result();
  }

  mergeDataOnMount(data);
  return result();
};

const reqRefs = new Set();

const reqRef = initialValue => {
  const _ref = Object(external_vue_["ref"])(initialValue);

  if (true) reqRefs.add(() => _ref.value = initialValue);
  return _ref;
};

const reqSsrRef = (initialValue, key) => {
  const _ref = ssrRef(initialValue, key);

  if (true) reqRefs.add(() => {
    _ref.value = initialValue instanceof Function ? sanitise(initialValue()) : initialValue;
  });
  return _ref;
};

let globalSetup;

const onGlobalSetup = fn => {
  globalSetup.add(fn);
};

const setMetaPlugin = context => {
  const {
    head
  } = context.app;
  Object.assign(context.app, getHeadOptions({
    head
  }));
};

const globalPlugin = context => {
  if (true) {
    reqRefs.forEach(reset => reset());
    setSSRContext(context.app);
  }

  const {
    setup
  } = context.app;
  globalSetup = new Set();

  context.app.setup = function (...args) {
    let result = {};

    if (setup instanceof Function) {
      result = setup(...args) || {};
    }

    for (const fn of globalSetup) {
      result = { ...result,
        ...(fn.call(this, ...args) || {})
      };
    }

    return result;
  };
};

const staticCache = {};

function writeFile(key, value) {
  if (true) return;
  const {
    writeFileSync
  } =  false ? undefined : __webpack_require__(87);
  const {
    join
  } =  false ? undefined : __webpack_require__(88);

  try {
    writeFileSync(join(staticPath, `${key}.json`), value);
  } catch (e) {
    console.log(e);
  }
}

const useStatic = (factory, param = Object(external_vue_["ref"])(""), keyBase) => {
  var _a, _b;

  const key = Object(external_vue_["computed"])(() => `${keyBase}-${param.value}`);
  const result = ssrRef(null, key.value);
  if (result.value) staticCache[key.value] = result.value;

  if (false) {} else {
    if (key.value in staticCache) {
      result.value = staticCache[key.value];
      return result;
    }

    Object(external_vue_["onServerPrefetch"])(async () => {
      const [_key, _param] = [key.value, param.value];
      result.value = await factory(_param, _key);
      staticCache[_key] = result.value;
      writeFile(_key, JSON.stringify(result.value));
    });
  }

  return result;
};

const wrapProperty = (property, makeComputed) => {
  return () => {
    const vm = getCurrentInstance();
    if (!vm) throw new Error("This must be called within a setup function.");
    return makeComputed !== false ? Object(external_vue_["computed"])(() => vm[property]) : vm[property];
  };
};

const useRouter = wrapProperty("$router", false);
const useRoute = wrapProperty("$route");

const useStore = key => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error("This must be called within a setup function.");
  return vm.$store;
};

const warn = () => console.warn("`warn` is not exported by Vue 2.7");

const createApp = () => console.warn("`createApp` is not exported by Vue 2.7");

const createRef = () => console.warn("`createRef` is not exported by Vue 2.7");

const defineAsyncComponent = () => console.warn("`defineAsyncComponent` is not exported by Vue 2.7");

const isRaw = () => console.warn("`isRaw` is not exported by Vue 2.7");



/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5465dd90", content, true, context)
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("88712f82", content, true, context)
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4705178b", content, true, context)
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(17);
module.exports = __webpack_require__(89);


/***/ }),
/* 17 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("ebc51c06", content, true)

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(24);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(25);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(26);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(27);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(28);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(29);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(30);
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(31);
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(32);
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(33);
var ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(34);
var ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(35);
var ___CSS_LOADER_URL_IMPORT_11___ = __webpack_require__(36);
var ___CSS_LOADER_URL_IMPORT_12___ = __webpack_require__(37);
var ___CSS_LOADER_URL_IMPORT_13___ = __webpack_require__(38);
var ___CSS_LOADER_URL_IMPORT_14___ = __webpack_require__(39);
var ___CSS_LOADER_URL_IMPORT_15___ = __webpack_require__(40);
var ___CSS_LOADER_URL_IMPORT_16___ = __webpack_require__(41);
var ___CSS_LOADER_URL_IMPORT_17___ = __webpack_require__(42);
var ___CSS_LOADER_URL_IMPORT_18___ = __webpack_require__(43);
var ___CSS_LOADER_URL_IMPORT_19___ = __webpack_require__(44);
var ___CSS_LOADER_URL_IMPORT_20___ = __webpack_require__(45);
var ___CSS_LOADER_URL_IMPORT_21___ = __webpack_require__(46);
var ___CSS_LOADER_URL_IMPORT_22___ = __webpack_require__(47);
var ___CSS_LOADER_URL_IMPORT_23___ = __webpack_require__(48);
var ___CSS_LOADER_URL_IMPORT_24___ = __webpack_require__(49);
var ___CSS_LOADER_URL_IMPORT_25___ = __webpack_require__(50);
var ___CSS_LOADER_URL_IMPORT_26___ = __webpack_require__(51);
var ___CSS_LOADER_URL_IMPORT_27___ = __webpack_require__(52);
var ___CSS_LOADER_URL_IMPORT_28___ = __webpack_require__(53);
var ___CSS_LOADER_URL_IMPORT_29___ = __webpack_require__(54);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_20___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_21___);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_22___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_23___);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_24___);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_25___);
var ___CSS_LOADER_URL_REPLACEMENT_26___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_26___);
var ___CSS_LOADER_URL_REPLACEMENT_27___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_27___);
var ___CSS_LOADER_URL_REPLACEMENT_28___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_28___);
var ___CSS_LOADER_URL_REPLACEMENT_29___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_29___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"Raleway\";font-style:italic;font-weight:100;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\");unicode-range:u+0460-052f,u+1c80-1c88,u+20b4,u+2de0-2dff,u+a640-a69f,u+fe2e-fe2f}@font-face{font-family:\"Raleway\";font-style:italic;font-weight:100;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\");unicode-range:u+0301,u+0400-045f,u+0490-0491,u+04b0-04b1,u+2116}@font-face{font-family:\"Raleway\";font-style:italic;font-weight:100;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+1ea0-1ef9,u+20ab}@font-face{font-family:\"Raleway\";font-style:italic;font-weight:100;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff2\");unicode-range:u+0100-024f,u+0259,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-family:\"Raleway\";font-style:italic;font-weight:100;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-family:\"Raleway\";font-style:italic;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff2\");unicode-range:u+0460-052f,u+1c80-1c88,u+20b4,u+2de0-2dff,u+a640-a69f,u+fe2e-fe2f}@font-face{font-family:\"Raleway\";font-style:italic;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"woff2\");unicode-range:u+0301,u+0400-045f,u+0490-0491,u+04b0-04b1,u+2116}@font-face{font-family:\"Raleway\";font-style:italic;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"woff2\");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+1ea0-1ef9,u+20ab}@font-face{font-family:\"Raleway\";font-style:italic;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"woff2\");unicode-range:u+0100-024f,u+0259,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-family:\"Raleway\";font-style:italic;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"woff2\");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-family:\"Raleway\";font-style:italic;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") format(\"woff2\");unicode-range:u+0460-052f,u+1c80-1c88,u+20b4,u+2de0-2dff,u+a640-a69f,u+fe2e-fe2f}@font-face{font-family:\"Raleway\";font-style:italic;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format(\"woff2\");unicode-range:u+0301,u+0400-045f,u+0490-0491,u+04b0-04b1,u+2116}@font-face{font-family:\"Raleway\";font-style:italic;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ") format(\"woff2\");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+1ea0-1ef9,u+20ab}@font-face{font-family:\"Raleway\";font-style:italic;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ") format(\"woff2\");unicode-range:u+0100-024f,u+0259,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-family:\"Raleway\";font-style:italic;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ") format(\"woff2\");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-family:\"Raleway\";font-style:normal;font-weight:100;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ") format(\"woff2\");unicode-range:u+0460-052f,u+1c80-1c88,u+20b4,u+2de0-2dff,u+a640-a69f,u+fe2e-fe2f}@font-face{font-family:\"Raleway\";font-style:normal;font-weight:100;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ") format(\"woff2\");unicode-range:u+0301,u+0400-045f,u+0490-0491,u+04b0-04b1,u+2116}@font-face{font-family:\"Raleway\";font-style:normal;font-weight:100;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ") format(\"woff2\");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+1ea0-1ef9,u+20ab}@font-face{font-family:\"Raleway\";font-style:normal;font-weight:100;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ") format(\"woff2\");unicode-range:u+0100-024f,u+0259,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-family:\"Raleway\";font-style:normal;font-weight:100;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ") format(\"woff2\");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-family:\"Raleway\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ") format(\"woff2\");unicode-range:u+0460-052f,u+1c80-1c88,u+20b4,u+2de0-2dff,u+a640-a69f,u+fe2e-fe2f}@font-face{font-family:\"Raleway\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ") format(\"woff2\");unicode-range:u+0301,u+0400-045f,u+0490-0491,u+04b0-04b1,u+2116}@font-face{font-family:\"Raleway\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ") format(\"woff2\");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+1ea0-1ef9,u+20ab}@font-face{font-family:\"Raleway\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ") format(\"woff2\");unicode-range:u+0100-024f,u+0259,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-family:\"Raleway\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_24___ + ") format(\"woff2\");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-family:\"Raleway\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_25___ + ") format(\"woff2\");unicode-range:u+0460-052f,u+1c80-1c88,u+20b4,u+2de0-2dff,u+a640-a69f,u+fe2e-fe2f}@font-face{font-family:\"Raleway\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_26___ + ") format(\"woff2\");unicode-range:u+0301,u+0400-045f,u+0490-0491,u+04b0-04b1,u+2116}@font-face{font-family:\"Raleway\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_27___ + ") format(\"woff2\");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+1ea0-1ef9,u+20ab}@font-face{font-family:\"Raleway\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_28___ + ") format(\"woff2\");unicode-range:u+0100-024f,u+0259,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-family:\"Raleway\";font-style:normal;font-weight:700;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_29___ + ") format(\"woff2\");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-100-1.003daf4.woff2";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-100-2.781647e.woff2";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-100-3.8588067.woff2";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-100-4.01ecd25.woff2";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-100-5.3fd988e.woff2";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-400-6.003daf4.woff2";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-400-7.781647e.woff2";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-400-8.8588067.woff2";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-400-9.01ecd25.woff2";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-400-10.3fd988e.woff2";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-700-11.003daf4.woff2";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-700-12.781647e.woff2";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-700-13.8588067.woff2";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-700-14.01ecd25.woff2";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-700-15.3fd988e.woff2";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-100-16.a5a2bf4.woff2";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-100-17.c116b53.woff2";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-100-18.238fe9a.woff2";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-100-19.2eca811.woff2";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-100-20.a2a53b6.woff2";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-400-21.a5a2bf4.woff2";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-400-22.c116b53.woff2";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-400-23.238fe9a.woff2";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-400-24.2eca811.woff2";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-400-25.a2a53b6.woff2";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-700-26.a5a2bf4.woff2";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-700-27.c116b53.woff2";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-700-28.238fe9a.woff2";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-700-29.2eca811.woff2";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-700-30.a2a53b6.woff2";

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_754361ca_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_754361ca_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_754361ca_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_754361ca_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_754361ca_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--fade-in-duration:1.5s;--fade-out-duration:1.5s;--slide-left-duration:1.5s;--slide-right-duration:1.5s;--pulsate-duration:2s}.fade-in{-webkit-animation:fadeIn 1.5s ease-out;animation:fadeIn 1.5s ease-out;-webkit-animation:fadeIn var(--fade-in-duration) ease-out;animation:fadeIn var(--fade-in-duration) ease-out}.fade-in-slide-left{-webkit-animation:fadeIn 1.5s ease-out forwards,slideLeft 1.5s ease-out forwards;animation:fadeIn 1.5s ease-out forwards,slideLeft 1.5s ease-out forwards;-webkit-animation:fadeIn var(--fade-in-duration) forwards ease-out,slideLeft var(--slide-left-duration) forwards ease-out;animation:fadeIn var(--fade-in-duration) forwards ease-out,slideLeft var(--slide-left-duration) forwards ease-out}.fade-in-slide-right{-webkit-animation:fadeIn 1.5s ease-out forwards,slideRight 1.5s ease-out forwards;animation:fadeIn 1.5s ease-out forwards,slideRight 1.5s ease-out forwards;-webkit-animation:fadeIn var(--fade-in-duration) forwards ease-out,slideRight var(--slide-right-duration) forwards ease-out;animation:fadeIn var(--fade-in-duration) forwards ease-out,slideRight var(--slide-right-duration) forwards ease-out}.fade-out{-webkit-animation:fadeOut 1.5s ease-out forwards;animation:fadeOut 1.5s ease-out forwards;-webkit-animation:fadeOut var(--fade-out-duration) forwards ease-out;animation:fadeOut var(--fade-out-duration) forwards ease-out}.fade-out-slide-left{-webkit-animation:fadeOut 1.5s ease-out forwards,slideLeft 1.5s ease-out forwards;animation:fadeOut 1.5s ease-out forwards,slideLeft 1.5s ease-out forwards;-webkit-animation:fadeOut var(--slide-left-duration) forwards ease-out,slideLeft var(--slide-left-duration) forwards ease-out;animation:fadeOut var(--slide-left-duration) forwards ease-out,slideLeft var(--slide-left-duration) forwards ease-out}.fade-out-slide-right{-webkit-animation:fadeOut 1.5s ease-out forwards,slideRight 1.5s ease-out forwards;animation:fadeOut 1.5s ease-out forwards,slideRight 1.5s ease-out forwards;-webkit-animation:fadeOut var(--slide-right-duration) forwards ease-out,slideRight var(--slide-right-duration) forwards ease-out;animation:fadeOut var(--slide-right-duration) forwards ease-out,slideRight var(--slide-right-duration) forwards ease-out}.slide-left{-webkit-animation:slideLeft 1.5s ease-out forwards;animation:slideLeft 1.5s ease-out forwards;-webkit-animation:slideLeft var(--slide-left-duration) forwards ease-out;animation:slideLeft var(--slide-left-duration) forwards ease-out}.slide-right{-webkit-animation:slideRight 1.5s ease-out forwards;animation:slideRight 1.5s ease-out forwards;-webkit-animation:slideRight var(--slide-right-duration) forwards ease-out;animation:slideRight var(--slide-right-duration) forwards ease-out}.pulsate{-webkit-animation:pulsate 2s ease-in-out infinite;animation:pulsate 2s ease-in-out infinite;-webkit-animation:pulsate var(--pulsate-duration) infinite ease-in-out;animation:pulsate var(--pulsate-duration) infinite ease-in-out}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{to{opacity:0}}@keyframes fadeOut{to{opacity:0}}@-webkit-keyframes slideLeft{to{transform:translate(-3%)}}@keyframes slideLeft{to{transform:translate(-3%)}}@-webkit-keyframes slideRight{to{transform:translate(3%)}}@keyframes slideRight{to{transform:translate(3%)}}@-webkit-keyframes pulsate{0%{transform:scale(.95);text-shadow:0}70%{transform:scale(1);text-shadow:-2px 2px 0 #000,2px 2px 0 #000,2px -2px 0 #000,-2px -2px 0 #000}to{transform:scale(.95);text-shadow:0}}@keyframes pulsate{0%{transform:scale(.95);text-shadow:0}70%{transform:scale(1);text-shadow:-2px 2px 0 #000,2px 2px 0 #000,2px -2px 0 #000,-2px -2px 0 #000}to{transform:scale(.95);text-shadow:0}}*{margin:0;padding:0;box-sizing:border-box}h1,h2,h3,h4,h5,h6,input,label,li,p,select{font-family:\"Raleway\",sans-serif}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.weak-map.delete-all.js");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.delete-all.js");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.every.js");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.filter.js");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.find.js");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.find-key.js");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.includes.js");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.key-of.js");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.map-keys.js");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.map-values.js");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.merge.js");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.reduce.js");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.some.js");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.update.js");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.add-all.js");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.delete-all.js");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.difference.js");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.every.js");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.filter.js");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.find.js");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.intersection.js");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-disjoint-from.js");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-subset-of.js");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-superset-of.js");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.join.js");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.map.js");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.reduce.js");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.some.js");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.symmetric-difference.js");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.union.js");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("pathe");

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "ActionButtons", function() { return ActionButtons; });
__webpack_require__.d(components_namespaceObject, "AirForm", function() { return AirForm; });
__webpack_require__.d(components_namespaceObject, "AlertPopup", function() { return AlertPopup; });
__webpack_require__.d(components_namespaceObject, "BannerCover", function() { return BannerCover; });
__webpack_require__.d(components_namespaceObject, "BarChart", function() { return BarChart; });
__webpack_require__.d(components_namespaceObject, "ChartLegend", function() { return ChartLegend; });
__webpack_require__.d(components_namespaceObject, "EarthModel", function() { return EarthModel; });
__webpack_require__.d(components_namespaceObject, "LineChart", function() { return LineChart; });
__webpack_require__.d(components_namespaceObject, "LoadingOverlay", function() { return LoadingOverlay; });
__webpack_require__.d(components_namespaceObject, "NavBar", function() { return NavBar; });
__webpack_require__.d(components_namespaceObject, "PropertyCard", function() { return PropertyCard; });
__webpack_require__.d(components_namespaceObject, "SpinnerLoader", function() { return SpinnerLoader; });
__webpack_require__.d(components_namespaceObject, "VideoHeader", function() { return VideoHeader; });
__webpack_require__.d(components_namespaceObject, "YoutubeVideo", function() { return YoutubeVideo; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(14);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {
        "API_GLOBAL_WARMING_LINK": "https://global-warming.org/api",
        "API_OPENWEATHER_GEOCODING_LINK": "https://api.openweathermap.org/geo/1.0",
        "API_OPENWEATHER_AIRPOLLUTION_LINK": "https://api.openweathermap.org/data/2.5",
        "API_OPENWEATHER_KEY": "45c8a662a6c30d0cb6a1eb86fa75b343"
      }
    }; // Only set once

    if (context.req) {
      app.context.req = context.req;
    }

    if (context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(15);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(9);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(8);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(10);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _46dd1b90 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 15).then(__webpack_require__.bind(null, 181)));

const _2dafc379 = () => interopDefault(__webpack_require__.e(/* import() | pages/index/AirPage */ 16).then(__webpack_require__.bind(null, 180)));

const _9c35f844 = () => interopDefault(__webpack_require__.e(/* import() | pages/index/CarbondioxidePage */ 17).then(__webpack_require__.bind(null, 182)));

const _5f0e670a = () => interopDefault(__webpack_require__.e(/* import() | pages/index/MethanePage */ 18).then(__webpack_require__.bind(null, 183)));

const _31c1b4cc = () => interopDefault(__webpack_require__.e(/* import() | pages/index/NitrousoxidePage */ 19).then(__webpack_require__.bind(null, 184)));

const _e08b2c28 = () => interopDefault(__webpack_require__.e(/* import() | pages/index/PolaricePage */ 20).then(__webpack_require__.bind(null, 185)));

const _559c5da3 = () => interopDefault(__webpack_require__.e(/* import() | pages/index/TemperaturePage */ 21).then(__webpack_require__.bind(null, 186)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/",
    component: _46dd1b90,
    name: "index",
    children: [{
      path: "AirPage",
      component: _2dafc379,
      name: "index-AirPage"
    }, {
      path: "CarbondioxidePage",
      component: _9c35f844,
      name: "index-CarbondioxidePage"
    }, {
      path: "MethanePage",
      component: _5f0e670a,
      name: "index-MethanePage"
    }, {
      path: "NitrousoxidePage",
      component: _31c1b4cc,
      name: "index-NitrousoxidePage"
    }, {
      path: "PolaricePage",
      component: _e08b2c28,
      name: "index-PolaricePage"
    }, {
      path: "TemperaturePage",
      component: _559c5da3,
      name: "index-TemperaturePage"
    }]
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "__nuxt-error-page"
  }, [_vm._ssrNode("<div class=\"error\">", "</div>", [_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">" + _vm._ssrEscape(_vm._s(_vm.message)) + "</div> "), _vm.statusCode === 404 ? _vm._ssrNode("<p class=\"description\">", "</p>", [typeof _vm.$route === 'undefined' ? _vm._ssrNode("<a href=\"/\" class=\"error-link\">", "</a>") : _c('NuxtLink', {
    staticClass: "error-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back to the home page")])], 1) : _vm._e(), _vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(18)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5e005638"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(20)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "559aa56c"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/.cache/nuxt-google-fonts/css/nuxt-google-fonts.css
var nuxt_google_fonts = __webpack_require__(22);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=754361ca&
var defaultvue_type_template_id_754361ca_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_c('Nuxt')], 1);
};

var defaultvue_type_template_id_754361ca_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=754361ca&

// CONCATENATED MODULE: ./layouts/default.vue

var script = {}
function default_injectStyles (context) {
  
  var style0 = __webpack_require__(55)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_754361ca_render,
  defaultvue_type_template_id_754361ca_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "796f684d"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js







const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/components/index.js
const ActionButtons = () => __webpack_require__.e(/* import() | components/action-buttons */ 1).then(__webpack_require__.bind(null, 111)).then(c => wrapFunctional(c.default || c));
const AirForm = () => __webpack_require__.e(/* import() | components/air-form */ 2).then(__webpack_require__.bind(null, 152)).then(c => wrapFunctional(c.default || c));
const AlertPopup = () => __webpack_require__.e(/* import() | components/alert-popup */ 3).then(__webpack_require__.bind(null, 163)).then(c => wrapFunctional(c.default || c));
const BannerCover = () => __webpack_require__.e(/* import() | components/banner-cover */ 4).then(__webpack_require__.bind(null, 151)).then(c => wrapFunctional(c.default || c));
const BarChart = () => __webpack_require__.e(/* import() | components/bar-chart */ 5).then(__webpack_require__.bind(null, 154)).then(c => wrapFunctional(c.default || c));
const ChartLegend = () => __webpack_require__.e(/* import() | components/chart-legend */ 6).then(__webpack_require__.bind(null, 153)).then(c => wrapFunctional(c.default || c));
const EarthModel = () => __webpack_require__.e(/* import() | components/earth-model */ 7).then(__webpack_require__.bind(null, 148)).then(c => wrapFunctional(c.default || c));
const LineChart = () => __webpack_require__.e(/* import() | components/line-chart */ 8).then(__webpack_require__.bind(null, 109)).then(c => wrapFunctional(c.default || c));
const LoadingOverlay = () => __webpack_require__.e(/* import() | components/loading-overlay */ 9).then(__webpack_require__.bind(null, 96)).then(c => wrapFunctional(c.default || c));
const NavBar = () => __webpack_require__.e(/* import() | components/nav-bar */ 10).then(__webpack_require__.bind(null, 149)).then(c => wrapFunctional(c.default || c));
const PropertyCard = () => __webpack_require__.e(/* import() | components/property-card */ 11).then(__webpack_require__.bind(null, 150)).then(c => wrapFunctional(c.default || c));
const SpinnerLoader = () => __webpack_require__.e(/* import() | components/spinner-loader */ 12).then(__webpack_require__.bind(null, 95)).then(c => wrapFunctional(c.default || c));
const VideoHeader = () => __webpack_require__.e(/* import() | components/video-header */ 13).then(__webpack_require__.bind(null, 108)).then(c => wrapFunctional(c.default || c));
const YoutubeVideo = () => __webpack_require__.e(/* import() | components/youtube-video */ 14).then(__webpack_require__.bind(null, 110)).then(c => wrapFunctional(c.default || c)); // nuxt/nuxt.js#8607

function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js



for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(6);

// CONCATENATED MODULE: ./.nuxt/composition-api/plugin.mjs

/* harmony default export */ var composition_api_plugin = (runtime["b" /* globalPlugin */]);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(7);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Intercept to apply default headers

  axios.onRequest(config => {
    config.headers = { ...axios.defaults.headers.common,
      ...config.headers
    };
  }); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || '/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// CONCATENATED MODULE: ./.nuxt/composition-api/meta.mjs

/* harmony default export */ var meta = (runtime["e" /* setMetaPlugin */]);
// CONCATENATED MODULE: ./.nuxt/index.js










/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')

 // Source: .\\composition-api\\plugin.mjs (mode: 'all')

 // Source: .\\axios.js (mode: 'all')

 // Source: .\\composition-api\\meta.mjs (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "iEarth",
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }, {
        "name": "format-detection",
        "content": "telephone=no"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002F*",
        "href": "\u002Ffavicon.png"
      }],
      "script": [{
        "src": "https:\u002F\u002Fkit.fontawesome.com\u002F9a2c4fe4ba.js",
        "crossorigin": "anonymous"
      }, {
        "src": "https:\u002F\u002Fpolyfill.io\u002Fv3\u002Fpolyfill.min.js?features=window.scroll%2Csmoothscroll%2Cwindow.scrollBy%2Cscroll",
        "body": true
      }],
      "style": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Check if plugin not already installed


    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config); // Add enablePreview(previewData = {}) in context for plugins

  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof composition_api_plugin === 'function') {
    await composition_api_plugin(app.context, inject);
  }

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (typeof meta === 'function') {
    await meta(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}

    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target
  // Public runtime config

  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Call global middleware (nuxt.config.js)
  */

  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("chart.js/auto");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("chartjs-adapter-date-fns");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("debounce");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map