webpackHotUpdate("static\\development\\pages\\_app.js",{

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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);






var Axios = axios__WEBPACK_IMPORTED_MODULE_5___default.a.create({
  baseURL: '/api'
}); //import    {Axios,serverAxios} from './request'

var jueapi = 'https://extension-ms.juejin.im';
var GET_LIST = 'INDEX/GET_GOLD_LIST';
var GET_GIT_LIST = 'INDEX/GET_GIT_LIST';
var changGoldList = function changGoldList(list) {
  return {
    type: GET_LIST,
    list: list
  };
};
var changGitList = function changGitList(list) {
  return {
    type: GET_GIT_LIST,
    list: list
  };
};
var getGoldList = function getGoldList(param, isServer) {
  console.log('getGoldList-------'); //  const  HttpGet = server?serverAxios:Axios;

  return function (dispatch, getState) {
    //http://localhost:9090
    var url = '/resources/gold';

    if (isServer) {
      url = jueapi + url;
    }

    return Axios.post(url, param).then(function (res) {
      var data = res.data.data;
      dispatch(changGoldList(data));
      dispatch(changGoldList(data));
    });
  };
};
var getGitList = function getGitList(param) {
  //  const  HttpGet = server?serverAxios:Axios;
  return function (dispatch, getState) {
    //http://localhost:9090
    return Axios.get('/resources/github').then(function (res) {
      var list = res.data.list;
      dispatch(changeList(list));
    });
  };
};
var exampleInitialState = {
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
var actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  CHANGE_GOLD: 'CHANGE_GOLD',
  CHANGE_GIT: 'CHANGE_GIT'
}; // REDUCERS

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

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

var serverRenderClock = function serverRenderClock(isServer) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.TICK,
      light: !isServer,
      ts: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()
    });
  };
};
var startClock = function startClock(dispatch) {
  return setInterval(function () {
    // Dispatch `TICK` every 1 second
    dispatch({
      type: actionTypes.TICK,
      light: true,
      ts: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()
    });
  }, 1000);
};
var incrementCount = function incrementCount() {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.INCREMENT
    });
  };
};
var changeGold = function changeGold(param) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.CHANGE_GOLD,
      param: param
    });
  };
};
var changeGit = function changeGit(param) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.CHANGE_GIT,
      param: param
    });
  };
};
var decrementCount = function decrementCount() {
  return function (dispatch) {
    return setInterval(function () {
      // Dispatch `TICK` every 1 second
      dispatch({
        type: actionTypes.DECREMENT
      });
    }, 5000);
  };
};
var resetCount = function resetCount() {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.RESET
    });
  };
};
function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4__["default"])));
}

/***/ })

})
//# sourceMappingURL=_app.js.78e862806dc49cdb7eac.hot-update.js.map