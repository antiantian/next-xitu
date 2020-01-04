module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  children
}) => __jsx("div", {
  style: {
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  className: "jsx-3261881544"
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  className: "jsx-3261881544"
}), __jsx("meta", {
  charSet: "utf-8",
  className: "jsx-3261881544"
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  href: "https://e-gold-cdn.xitu.io/static/favicons/favicon-32x32.png",
  sizes: "32x32",
  className: "jsx-3261881544"
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  href: "https://e-gold-cdn.xitu.io/static/favicons/favicon-16x16.png",
  sizes: "16x16",
  className: "jsx-3261881544"
}), __jsx("link", {
  rel: "manifest",
  href: "https://e-gold-cdn.xitu.io/static/favicons/manifest.json",
  className: "jsx-3261881544"
}), __jsx("link", {
  rel: "mask-icon",
  href: "https://e-gold-cdn.xitu.io/static/favicons/safari-pinned-tab.svg",
  color: "#007fff",
  className: "jsx-3261881544"
}), __jsx("link", {
  rel: "shortcut icon",
  href: "https://e-gold-cdn.xitu.io/static/favicons/favicon.ico",
  className: "jsx-3261881544"
}), __jsx("meta", {
  name: "msapplication-config",
  content: "https://e-gold-cdn.xitu.io/static/favicons/browserconfig.xml",
  className: "jsx-3261881544"
}), __jsx("meta", {
  name: "theme-color",
  content: "#007fff",
  className: "jsx-3261881544"
}), __jsx("meta", {
  name: "description",
  content: "\u4E3A\u8BBE\u8BA1\u5E08\u3001\u7A0B\u5E8F\u5458\u3001\u4EA7\u54C1\u7ECF\u7406\u6BCF\u65E5\u53D1\u73B0\u4F18\u8D28\u5185\u5BB9\u3002\u5305\u542BAndroid\u3001\u524D\u7AEF\u3001\u4EA7\u54C1\u3001\u8BBE\u8BA1\u3001iOS\u3001\u540E\u7AEF\u516D\u5927\u9891\u9053\uFF0C\u6BCF\u4E2A\u9891\u9053\u5185\u90FD\u6709\u4E00\u5230\u591A\u4E2A\r \u4E3A\u4F60\u7CBE\u5FC3\u51C6\u5907\u7684\u4F18\u8D28\u5185\u5BB9\u6E90\u3002",
  className: "jsx-3261881544"
}), __jsx("meta", {
  name: "keywords",
  content: "\u8BBE\u8BA1\u5E08,\u7A0B\u5E8F\u5458,\u4EA7\u54C1\u7ECF\u7406,\u5185\u5BB9,android,\u524D\u7AEF,\u8BBE\u8BA1,ios,\u540E\u7AEF,\u805A\u5408,github,\u56FE\u7247,\u5DE5\u5177,\u8D44\u6E90,\u5E93,\u6587\u7AE0,\u5B89\u5353,\u5F00\u53D1,\u5F00\u6E90",
  className: "jsx-3261881544"
}), __jsx("title", {
  className: "jsx-3261881544"
}, "\u6398\u91D1\u9171")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3261881544"
}, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx6Y3lcXDIwMTk4MjIyXFxuZXh0LXhpdHVcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCdUIiLCJmaWxlIjoiRDpcXHpjeVxcMjAxOTgyMjJcXG5leHQteGl0dVxcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuIH0pID0+XHJcbiAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJ319PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyAvPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxyXG4gICBcclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCJodHRwczovL2UtZ29sZC1jZG4ueGl0dS5pby9zdGF0aWMvZmF2aWNvbnMvZmF2aWNvbi0zMngzMi5wbmdcIiBzaXplcz1cIjMyeDMyXCIvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgaHJlZj1cImh0dHBzOi8vZS1nb2xkLWNkbi54aXR1LmlvL3N0YXRpYy9mYXZpY29ucy9mYXZpY29uLTE2eDE2LnBuZ1wiIHNpemVzPVwiMTZ4MTZcIi8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiaHR0cHM6Ly9lLWdvbGQtY2RuLnhpdHUuaW8vc3RhdGljL2Zhdmljb25zL21hbmlmZXN0Lmpzb25cIi8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwibWFzay1pY29uXCIgaHJlZj1cImh0dHBzOi8vZS1nb2xkLWNkbi54aXR1LmlvL3N0YXRpYy9mYXZpY29ucy9zYWZhcmktcGlubmVkLXRhYi5zdmdcIiBjb2xvcj1cIiMwMDdmZmZcIi8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCJodHRwczovL2UtZ29sZC1jZG4ueGl0dS5pby9zdGF0aWMvZmF2aWNvbnMvZmF2aWNvbi5pY29cIi8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tY29uZmlnXCIgY29udGVudD1cImh0dHBzOi8vZS1nb2xkLWNkbi54aXR1LmlvL3N0YXRpYy9mYXZpY29ucy9icm93c2VyY29uZmlnLnhtbFwiIC8+IFxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMDA3ZmZmXCIgLz4gXHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIuS4uuiuvuiuoeW4iOOAgeeoi+W6j+WRmOOAgeS6p+WTgee7j+eQhuavj+aXpeWPkeeOsOS8mOi0qOWGheWuueOAguWMheWQq0FuZHJvaWTjgIHliY3nq6/jgIHkuqflk4HjgIHorr7orqHjgIFpT1PjgIHlkI7nq6/lha3lpKfpopHpgZPvvIzmr4/kuKrpopHpgZPlhoXpg73mnInkuIDliLDlpJrkuKpcclxuICAgICAgICDkuLrkvaDnsr7lv4Plh4blpIfnmoTkvJjotKjlhoXlrrnmupDjgIJcIi8+IFxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCLorr7orqHluIgs56iL5bqP5ZGYLOS6p+WTgee7j+eQhizlhoXlrrksYW5kcm9pZCzliY3nq68s6K6+6K6hLGlvcyzlkI7nq68s6IGa5ZCILGdpdGh1Yizlm77niYcs5bel5YW3LOi1hOa6kCzlupMs5paH56ugLOWuieWNkyzlvIDlj5Es5byA5rqQXCIvPiBcclxuICAgICAgICA8dGl0bGU+5o6Y6YeR6YWxPC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgPC9kaXY+Il19 */\n/*@ sourceURL=D:\\\\zcy\\\\20198222\\\\next-xitu\\\\index.js */"), children));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.css":
/*!*************************!*\
  !*** ./pages/index.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/layout/style/css */ "antd/lib/layout/style/css");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/select/style/css */ "antd/lib/select/style/css");
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../index.js */ "./index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_16__);












var __jsx = react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }






const {
  Option
} = antd_lib_select__WEBPACK_IMPORTED_MODULE_11___default.a;
const {
  Header,
  Content,
  Footer
} = antd_lib_layout__WEBPACK_IMPORTED_MODULE_9___default.a;

let getlist = (url, param) => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default.a((resolve, reject) => {
    _store__WEBPACK_IMPORTED_MODULE_14__["Axios"].post(url, param).then(res => {
      const {
        data
      } = res.data;
      resolve(data);
    });
  });
};

class Index extends react__WEBPACK_IMPORTED_MODULE_12___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "getlist_gold", obj => {
      const {
        dispatch,
        params_gold
      } = this.props;
      dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_14__["getGoldList"])(_objectSpread({}, params_gold, {}, obj)));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "getlist_git", obj => {
      const {
        dispatch,
        params_git
      } = this.props;
      dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_14__["getGitList"])(_objectSpread({}, params_git, {}, obj)));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "handleChange", category => {
      console.log(`selected ${category}`);
      this.getlist_gold({
        category
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "HOTc", order => {
      this.getlist_gold({
        order
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "handlecategoryChange", category => {
      this.getlist_git({
        category
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "handleperiodChange", period => {
      this.getlist_git({
        period
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "handlelangChange", lang => {
      this.getlist_git({
        lang
      });
    });
  }

  static getInitialProps({
    reduxStore,
    req
  }) {
    const isServer = !!req;
    const {
      params_gold,
      params_git
    } = reduxStore.getState();
    reduxStore.dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_14__["serverRenderClock"])(isServer));
    let p1 = getlist('https://extension-ms.juejin.im/resources/gold', params_gold);
    let p2 = getlist('https://extension-ms.juejin.im/resources/github', params_git);
    return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default.a.all([p1, p2]).then(result => {
      //['成功了', 'success']
      reduxStore.dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_14__["changGoldList"])(result[0]));
      reduxStore.dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_14__["changGitList"])(result[1]));
      return {
        GOLD_LIST: reduxStore.getState()['GOLD_LIST'],
        GIT_LIST: reduxStore.getState()['GIT_LIST']
      };
    }).catch(error => {
      console.log(error);
    });
    return _store__WEBPACK_IMPORTED_MODULE_14__["Axios"].post('https://extension-ms.juejin.im/resources/gold', {
      category: "frontend",
      limit: 30,
      offset: 0,
      order: "time"
    }).then(res => {
      const {
        data
      } = res.data;
      reduxStore.dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_14__["changGoldList"])(data));
      return {
        GOLD_LIST: reduxStore.getState()['GOLD_LIST']
      };
    });
  }

  componentDidMount() {
    const {
      dispatch,
      GOLD_LIST,
      GIT_LIST
    } = this.props;
  }

  componentWillUnmount() {}

  render() {
    const {
      GOLD_LIST,
      state,
      GIT_LIST,
      params_gold,
      params_git
    } = this.props;
    console.log(state);
    return __jsx(_index_js__WEBPACK_IMPORTED_MODULE_15__["default"], null, __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_9___default.a, {
      id: "components-layout-demo-fixed"
    }, __jsx(Header, {
      style: {
        position: 'fixed',
        zIndex: 1,
        width: '100%'
      }
    }, __jsx("div", {
      className: "logo"
    })), __jsx("div", {
      className: "main-area"
    }, __jsx("div", {
      className: "source gold-source"
    }, __jsx("div", {
      className: "source-navbar"
    }, __jsx("div", {
      className: "title",
      style: {
        color: '#044aab'
      }
    }, __jsx("img", {
      className: "icon source-icon",
      "_v-7022f083": "",
      src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgWDcgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iOC4zODU3bW0iIGhlaWdodD0iOC4xOTIzbW0iIHZlcnNpb249IjEuMSIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIgp2aWV3Qm94PSIwIDAgNTA5IDQ5NyIKIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiAgIDwhW0NEQVRBWwogICAgLmZpbDAge2ZpbGw6IzAwNkNGRn0KICAgIC5maWwxIHtmaWxsOndoaXRlfQogICBdXT4KICA8L3N0eWxlPgogPC9kZWZzPgogPGcgaWQ9IuWbvuWxgl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxyZWN0IGNsYXNzPSJmaWwwIiB3aWR0aD0iNTA5IiBoZWlnaHQ9IjQ5NyIvPgogIDxwYXRoIGlkPSJGaWxsLTEtQ29weSIgY2xhc3M9ImZpbDEiIGQ9Ik0yODUgMTM4bC0zMSAtMjQgLTMzIDI1IC0yIDIgMzUgMjcgMzQgLTI3IC0zIC0zem0xMTkgOTVsLTE1MCAxMTYgLTE1MSAtMTE2IC0yMiAxNyAxNzMgMTM0IDE3MyAtMTM0IC0yMyAtMTd6bS0xNTAgOWwtODIgLTYzIC0yMyAxNyAxMDUgODEgMTA0IC04MSAtMjIgLTE3IC04MiA2M3oiLz4KIDwvZz4KPC9zdmc+Cg=="
    }), "\u6398\u91D1"), __jsx("div", {
      className: "category-box"
    }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_11___default.a, {
      defaultValue: "frontend",
      style: {
        width: 120
      },
      onChange: this.handleChange
    }, __jsx(Option, {
      value: "all"
    }, "\u9996\u9875"), __jsx(Option, {
      value: "frontend"
    }, "\u524D\u7AEF"), __jsx(Option, {
      value: "backend"
    }, "\u540E\u7AEF"), __jsx(Option, {
      value: "android"
    }, "Android"), __jsx(Option, {
      value: "ios"
    }, "iOS"), __jsx(Option, {
      value: "ai"
    }, "\u4EBA\u5DE5\u667A\u80FD"), __jsx(Option, {
      value: "article"
    }, "\u9605\u8BFB"))), __jsx("div", {
      className: "order-selector"
    }, __jsx("div", {
      className: ["hottest ", params_gold.order === 'heat' ? 'active' : ''].join(''),
      onClick: () => this.HOTc('heat')
    }, "\u70ED\u95E8"), __jsx("div", {
      className: ["latest ", params_gold.order === 'time' ? 'active' : ''].join(''),
      onClick: () => {
        this.HOTc('time');
      }
    }, "\u6700\u65B0"))), __jsx("div", {
      className: "entry-list"
    }, __jsx("ul", {
      className: "list"
    }, GOLD_LIST.map(item => {
      return __jsx("li", {
        key: item.id,
        className: "item"
      }, __jsx("a", {
        href: item.url,
        target: "_blank",
        className: "item-content"
      }, __jsx("div", {
        className: "badge",
        title: '至少已有' + item.collectionCount + '人喜欢'
      }, __jsx("div", {
        className: "icon ion-arrow-up-b"
      }), __jsx("div", {
        className: "text"
      }, item.collectionCount)), __jsx("div", {
        className: "entry-info"
      }, __jsx("div", {
        className: "title",
        title: item.title
      }, item.title), __jsx("div", {
        className: "meta"
      }, __jsx("div", {
        className: "list"
      }, __jsx("div", {
        className: "meta-item"
      }, __jsx("span", {
        className: "text",
        title: "Fri, 03 Jan 2020 14:02:46 GMT"
      }, "2\u5C0F\u65F6\u524D")), __jsx("div", {
        className: "meta-item"
      }, __jsx("span", {
        className: "text",
        title: '访问' + item.user.username + '的主页'
      }, item.user.username)))))));
    })))), __jsx("div", {
      className: "source other-source"
    }, __jsx("div", {
      className: "source-navbar"
    }, __jsx("div", {
      className: "title",
      style: {
        color: '#000000'
      }
    }, __jsx("img", {
      className: "icon source-icon",
      src: "https://e-gold-cdn.xitu.io/static/github.png?9140c37"
    }), " GitHub"), __jsx("div", {
      className: "category-box"
    }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_11___default.a, {
      defaultValue: "upcome",
      style: {
        width: 100
      },
      onChange: this.handlecategoryChange
    }, __jsx(Option, {
      value: "upcome"
    }, "\u65B0\u751F"), __jsx(Option, {
      value: "trending"
    }, "\u70ED\u95E8")), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_11___default.a, {
      defaultValue: "day",
      style: {
        width: 100
      },
      onChange: this.handleperiodChange
    }, __jsx(Option, {
      value: "day"
    }, "\u4ECA\u65E5"), __jsx(Option, {
      value: "week"
    }, "\u672C\u5468"), __jsx(Option, {
      value: "month"
    }, "\u672C\u6708"))), __jsx("div", null, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_11___default.a, {
      defaultValue: "javascript",
      style: {
        width: 200,
        marginRight: 5
      },
      onChange: this.handlelangChange
    }, __jsx(Option, {
      value: "javascript"
    }, "JavaScript"), __jsx(Option, {
      value: "css"
    }, "CSS"), __jsx(Option, {
      value: "html"
    }, "HTML"), __jsx(Option, {
      value: "typescript"
    }, "TypeScript"), __jsx(Option, {
      value: "coffeescript"
    }, "CoffeeScript"), __jsx(Option, {
      value: "vue"
    }, "Vue")))), __jsx("div", {
      className: "entry-list"
    }, __jsx("ul", {
      className: "list"
    }, GIT_LIST.map(item => {
      return __jsx("li", {
        key: item.id,
        className: "item-row"
      }, __jsx("div", {
        className: "item-box"
      }, __jsx("div", {
        className: "item"
      }, __jsx("div", {
        className: "repo-content"
      }, __jsx("div", {
        className: "repo-header"
      }, __jsx("h2", {
        className: "title"
      }, __jsx("a", {
        className: "title-text",
        href: item.url,
        target: "_blank"
      }, __jsx("span", {
        className: "author"
      }, item.username), __jsx("span", {
        className: "divider"
      }, " / "), __jsx("span", {
        className: "name"
      }, item.reponame)))), __jsx("div", {
        className: "repo-desc"
      }, __jsx("div", {
        className: "desc",
        title: item.description
      }, item.description)), __jsx("div", {
        className: "repo-meta"
      }, __jsx("span", {
        className: "star"
      }, __jsx("i", {
        className: "icon ion-android-star"
      }), item.starCount), __jsx("span", {
        className: "fork"
      }, __jsx("i", {
        className: "icon ion-fork-repo"
      }), item.forkCount), __jsx("span", {
        className: "lang"
      }, __jsx("i", {
        className: "icon lang-color",
        style: {
          backgroundColor: 'rgb(241, 224, 90)'
        }
      }), __jsx("span", null, item.lang)))))));
    })))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(state => ({
  GOLD_LIST: state.GOLD_LIST,
  state,
  GIT_LIST: state.GIT_LIST,
  params_gold: state.params_gold,
  params_git: state.params_git
}))(Index));

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: Axios, GET_LIST, GET_GIT_LIST, changGoldList, changGitList, getGoldList, getGitList, actionTypes, reducer, serverRenderClock, startClock, incrementCount, changeGold, changeGit, decrementCount, resetCount, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Axios", function() { return Axios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LIST", function() { return GET_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_GIT_LIST", function() { return GET_GIT_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changGoldList", function() { return changGoldList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changGitList", function() { return changGitList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGoldList", function() { return getGoldList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGitList", function() { return getGitList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverRenderClock", function() { return serverRenderClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startClock", function() { return startClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementCount", function() { return incrementCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeGold", function() { return changeGold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeGit", function() { return changeGit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementCount", function() { return decrementCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCount", function() { return resetCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);






const Axios = axios__WEBPACK_IMPORTED_MODULE_5___default.a.create({
  baseURL: '/api'
}); //import    {Axios,serverAxios} from './request'

const jueapi = 'https://extension-ms.juejin.im';
const GET_LIST = 'INDEX/GET_GOLD_LIST';
const GET_GIT_LIST = 'INDEX/GET_GIT_LIST';
const changGoldList = list => ({
  type: GET_LIST,
  list
});
const changGitList = list => ({
  type: GET_GIT_LIST,
  list
});
const getGoldList = (param, isServer) => {
  return (dispatch, getState) => {
    let url = '/resources/gold';

    if (isServer) {
      url = jueapi + url;
    }

    return Axios.post(url, param).then(res => {
      const {
        data
      } = res.data;
      dispatch(changGoldList(data));
      dispatch(changeGold(param));
    });
  };
};
const getGitList = (param, isServer) => {
  return (dispatch, getState) => {
    let url = '/resources/github';

    if (isServer) {
      url = jueapi + url;
    }

    return Axios.post(url, param).then(res => {
      const {
        data
      } = res.data;
      dispatch(changGitList(data));
      dispatch(changeGit(param));
    });
  };
};
const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  GOLD_LIST: [],
  GIT_LIST: [],
  params_gold: {
    category: "frontend",
    limit: 30,
    offset: 0,
    order: "time"
  },
  params_git: {
    "category": "upcome",
    "period": "day",
    "lang": "javascript",
    "offset": 0,
    "limit": 30
  }
};
const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  CHANGE_GOLD: 'CHANGE_GOLD',
  CHANGE_GIT: 'CHANGE_GIT'
}; // REDUCERS

const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      });

    case actionTypes.INCREMENT:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
        count: state.count + 1
      });

    case actionTypes.DECREMENT:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
        count: state.count - 1
      });

    case actionTypes.RESET:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
        count: exampleInitialState.count
      });

    case GET_LIST:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
        GOLD_LIST: action.list
      });

    case GET_GIT_LIST:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
        GIT_LIST: action.list
      });

    case actionTypes.CHANGE_GOLD:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
        params_gold: action.param
      });

    case actionTypes.CHANGE_GIT:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
        params_git: action.param
      });

    default:
      return state;
  }
}; // ACTIONS

const serverRenderClock = isServer => dispatch => {
  return dispatch({
    type: actionTypes.TICK,
    light: !isServer,
    ts: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()
  });
};
const startClock = dispatch => {
  return setInterval(() => {
    // Dispatch `TICK` every 1 second
    dispatch({
      type: actionTypes.TICK,
      light: true,
      ts: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()
    });
  }, 1000);
};
const incrementCount = () => dispatch => {
  return dispatch({
    type: actionTypes.INCREMENT
  });
};
const changeGold = param => dispatch => {
  return dispatch({
    type: actionTypes.CHANGE_GOLD,
    param
  });
};
const changeGit = param => dispatch => {
  return dispatch({
    type: actionTypes.CHANGE_GIT,
    param
  });
};
const decrementCount = () => dispatch => {
  return setInterval(() => {
    // Dispatch `TICK` every 1 second
    dispatch({
      type: actionTypes.DECREMENT
    });
  }, 5000);
};
const resetCount = () => dispatch => {
  return dispatch({
    type: actionTypes.RESET
  });
};
function initializeStore(initialState = exampleInitialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4___default.a)));
}

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\zcy\20198222\next-xitu\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "antd/lib/layout":
/*!**********************************!*\
  !*** external "antd/lib/layout" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/layout/style/css":
/*!********************************************!*\
  !*** external "antd/lib/layout/style/css" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout/style/css");

/***/ }),

/***/ "antd/lib/select":
/*!**********************************!*\
  !*** external "antd/lib/select" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),

/***/ "antd/lib/select/style/css":
/*!********************************************!*\
  !*** external "antd/lib/select/style/css" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select/style/css");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map