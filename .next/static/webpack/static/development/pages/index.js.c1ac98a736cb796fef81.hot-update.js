webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu/style/css */ "./node_modules/antd/lib/menu/style/css.js");
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/layout/style/css */ "./node_modules/antd/lib/layout/style/css.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var _components_examples__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/examples */ "./components/examples.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../index.js */ "./index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_14__);









var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;






var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_8___default.a.Header,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_8___default.a.Content,
    Footer = antd_lib_layout__WEBPACK_IMPORTED_MODULE_8___default.a.Footer;

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          dispatch = _this$props.dispatch,
          GOLD_LIST = _this$props.GOLD_LIST;
      console.log(GOLD_LIST);
      this.timer = Object(_store__WEBPACK_IMPORTED_MODULE_11__["startClock"])(dispatch); // dispatch(getGoldList({
      //   category: "frontend",
      //   limit: 30,
      //   offset: 0,
      //   order: "time"
      // }))
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          GOLD_LIST = _this$props2.GOLD_LIST,
          state = _this$props2.state;
      console.log(GOLD_LIST);
      console.log(state);
      return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "components-layout-demo-fixed"
      }, __jsx(Header, {
        style: {
          position: 'fixed',
          zIndex: 1,
          width: '100%'
        }
      }, __jsx("div", {
        className: "logo"
      }), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a, {
        theme: "dark",
        mode: "horizontal",
        defaultSelectedKeys: ['2'],
        style: {
          lineHeight: '64px'
        }
      }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        key: "1"
      }, "nav 1"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        key: "2"
      }, "nav 2"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        key: "3"
      }, "nav 3"))), __jsx("div", {
        className: "main-area"
      }, __jsx("div", {
        className: "source gold-source"
      }, __jsx("div", {
        className: "entry-list"
      }, __jsx(_components_examples__WEBPACK_IMPORTED_MODULE_12__["default"], null), __jsx("ul", {
        className: "list"
      }, __jsx("li", {
        className: "item"
      }, "11", __jsx("div", {
        className: "item-content"
      }, "11"))))), __jsx("div", {
        className: "source other-source"
      }, __jsx("div", {
        className: "entry-list"
      }, __jsx("ul", {
        className: "list"
      }, __jsx("li", {
        className: "item-row"
      }, "33"))))), __jsx(Footer, {
        style: {
          textAlign: 'center'
        }
      }, "Ant Design \xA92018 Created by Ant UED"));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var reduxStore = _ref.reduxStore,
          req = _ref.req;
      var isServer = !!req;
      reduxStore.dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_11__["serverRenderClock"])(isServer));
      var GET_LIST = 'INDEX/GET_GOLD_LIST';

      var changGoldList = function changGoldList(list) {
        return {
          type: GET_LIST,
          list: list
        };
      };

      return _store__WEBPACK_IMPORTED_MODULE_11__["Axios"].post('https://extension-ms.juejin.im/resources/gold', {
        category: "frontend",
        limit: 30,
        offset: 0,
        order: "time"
      }).then(function (res) {
        var data = res.data.data;
        reduxStore.dispatch(changGoldList(data));
        return {
          GOLD_LIST: reduxStore.getState()['GOLD_LIST']
        };
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(function (state) {
  return {
    GOLD_LIST: state.GOLD_LIST,
    state: state
  };
})(Index));

/***/ })

})
//# sourceMappingURL=index.js.c1ac98a736cb796fef81.hot-update.js.map