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
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/layout/style/css */ "./node_modules/antd/lib/layout/style/css.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var _components_examples__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/examples */ "./components/examples.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../index.js */ "./index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_15__);










var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;






var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_9___default.a.Header,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_9___default.a.Content,
    Footer = antd_lib_layout__WEBPACK_IMPORTED_MODULE_9___default.a.Footer;

var getlist = function getlist(url, param) {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default.a(function (resolve, reject) {
    _store__WEBPACK_IMPORTED_MODULE_12__["Axios"].post(url, param).then(function (res) {
      var data = res.data.data;
      resolve(data);
    });
  });
};

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
          GOLD_LIST = _this$props.GOLD_LIST,
          GIT_LIST = _this$props.GIT_LIST; // this.timer = startClock(dispatch)
      // dispatch(getGoldList({
      //   category: "frontend",
      //   limit: 30,
      //   offset: 0,
      //   order: "time"
      // }))
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {//clearInterval(this.timer)
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          GOLD_LIST = _this$props2.GOLD_LIST,
          state = _this$props2.state,
          GIT_LIST = _this$props2.GIT_LIST;
      console.log(state);
      return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_9___default.a, {
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
        className: "source-navbar"
      }, __jsx("div", {
        className: "title",
        style: {
          color: '#044aab'
        }
      }, "\u6398\u91D1"), __jsx("div", {
        className: "order-selector"
      }, __jsx("div", {
        className: "hottest active"
      }, "\u70ED\u95E8"), __jsx("div", {
        className: "latest"
      }, "\u6700\u65B0"))), __jsx("div", {
        className: "entry-list"
      }, __jsx("ul", {
        className: "list"
      }, GOLD_LIST.map(function (item) {
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
        className: "entry-list"
      }, __jsx("ul", {
        className: "list"
      }, GIT_LIST.map(function (item) {
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
      }))))), __jsx(Footer, {
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
      reduxStore.dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_12__["serverRenderClock"])(isServer));
      var p1 = getlist('https://extension-ms.juejin.im/resources/gold', {
        category: "frontend",
        limit: 30,
        offset: 0,
        order: "time"
      });
      var p2 = getlist('https://extension-ms.juejin.im/resources/github', {
        "category": "upcome",
        "period": "day",
        "lang": "javascript",
        "offset": 0,
        "limit": 30
      });
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default.a.all([p1, p2]).then(function (result) {
        //['成功了', 'success']
        reduxStore.dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_12__["changGoldList"])(result[0]));
        reduxStore.dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_12__["changGitList"])(result[1]));
        return {
          GOLD_LIST: reduxStore.getState()['GOLD_LIST'],
          GIT_LIST: reduxStore.getState()['GIT_LIST']
        };
      })["catch"](function (error) {
        console.log(error);
      });
      return _store__WEBPACK_IMPORTED_MODULE_12__["Axios"].post('https://extension-ms.juejin.im/resources/gold', {
        category: "frontend",
        limit: 30,
        offset: 0,
        order: "time"
      }).then(function (res) {
        var data = res.data.data;
        reduxStore.dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_12__["changGoldList"])(data));
        return {
          GOLD_LIST: reduxStore.getState()['GOLD_LIST']
        };
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(function (state) {
  return {
    GOLD_LIST: state.GOLD_LIST,
    state: state,
    GIT_LIST: state.GIT_LIST
  };
})(Index));

/***/ })

})
//# sourceMappingURL=index.js.05053533d6c245e2d4db.hot-update.js.map