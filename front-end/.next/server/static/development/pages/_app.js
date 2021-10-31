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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Shared/GoTop.jsx":
/*!*************************************!*\
  !*** ./components/Shared/GoTop.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const GoTop = props => {
  const [thePosition, setThePosition] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const timeoutRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        setThePosition(true);
      } else {
        setThePosition(false);
      }
    });
  }, []);

  const onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(timeoutRef.current);
    }

    window.scroll(0, window.pageYOffset - props.scrollStepInPx);
  };

  const scrollToTop = () => {
    timeoutRef.current = setInterval(onScrollStep, props.delayInMs);
  };

  const renderGoTopIcon = () => {
    return __jsx("div", {
      className: `go-top ${thePosition ? 'active' : ''}`,
      onClick: scrollToTop
    }, __jsx("i", {
      className: "bx bx-up-arrow-alt"
    }));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, renderGoTopIcon());
};

/* harmony default export */ __webpack_exports__["default"] = (GoTop);

/***/ }),

/***/ "./components/_App/Layout.jsx":
/*!************************************!*\
  !*** ./components/_App/Layout.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared_GoTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shared/GoTop */ "./components/Shared/GoTop.jsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = ({
  children
}) => {
  const [loader, setLoader] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    setTimeout(() => setLoader(false), 2000);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Livani - React Next eCommerce Template"), __jsx("meta", {
    name: "description",
    content: "Livani - React Next eCommerce Template. This has been built with React, Next.js, Express.js, and ES6+"
  }), __jsx("meta", {
    name: "og:title",
    property: "og:title",
    content: "Livani - React Next eCommerce Template"
  }), __jsx("meta", {
    name: "twitter:card",
    content: "Livani - React Next eCommerce Template"
  }), __jsx("link", {
    rel: "canonical",
    href: "https://livani-react.envytheme.com/"
  }), __jsx("meta", {
    property: "og:image",
    content: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-2-1589216093113.jpg"
  })), loader ? 'Loading' : children, __jsx(_Shared_GoTop__WEBPACK_IMPORTED_MODULE_2__["default"], {
    scrollStepInPx: "100",
    delayInMs: "10.50"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./firebase/index.jsx":
/*!****************************!*\
  !*** ./firebase/index.jsx ***!
  \****************************/
/*! exports provided: auth, firebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "firebase", function() { return firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);


 // Need to update below config

const config = {
  apiKey: "api_key",
  authDomain: "example_id.firebaseapp.com",
  databaseURL: "database-url.firebaseio.com",
  projectId: "project-id",
  storageBucket: "bucket-id.appspot.com",
  messagingSenderId: "321313132",
  appId: "12313131313323"
};

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
}

const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();


/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.scss */ "./styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_reducers_cartReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/reducers/cartReducer */ "./store/reducers/cartReducer.jsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_App_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/_App/Layout */ "./components/_App/Layout.jsx");
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/actions/cartActions */ "./store/actions/cartActions.jsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const MyApp = ({
  Component,
  pageProps,
  store
}) => {
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    store.dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_7__["checkUserLogin"])());
    store.dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_7__["addProducts"])());
  });
  return __jsx(_components_App_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], null, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__["ToastContainer"], null), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: store
  }, __jsx(Component, pageProps)));
};

MyApp.getInitialProps = async ({
  Component,
  ctx
}) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(_store_reducers_cartReducer__WEBPACK_IMPORTED_MODULE_4__["initStore"])(MyApp));

/***/ }),

/***/ "./store/actions/cartActions.jsx":
/*!***************************************!*\
  !*** ./store/actions/cartActions.jsx ***!
  \***************************************/
/*! exports provided: checkUserLogin, userLogout, userLogin, addProducts, addToCart, removeItem, subtractQuantity, addQuantity, addQuantityWithNumber, resetCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUserLogin", function() { return checkUserLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogout", function() { return userLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogin", function() { return userLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProducts", function() { return addProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtractQuantity", function() { return subtractQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addQuantity", function() { return addQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addQuantityWithNumber", function() { return addQuantityWithNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCart", function() { return resetCart; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../types */ "./store/types.jsx");
 //CHECK_USRER_LOGIN

const checkUserLogin = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].CHECK_USRER_LOGIN
  };
}; // USRER_LOGOUT

const userLogout = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].USRER_LOGOUT
  };
}; // USRER_LOGIN

const userLogin = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].USRER_LOGIN
  };
}; //add products

const addProducts = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_PRODUCTS
  };
}; //add cart action

const addToCart = id => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_TO_CART,
    id
  };
}; //remove item action

const removeItem = id => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].REMOVE_ITEM,
    id
  };
}; //subtract qt action

const subtractQuantity = id => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].SUB_QUANTITY,
    id
  };
}; //add qt action

const addQuantity = id => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_QUANTITY,
    id
  };
}; //add qt action with quantity number

const addQuantityWithNumber = (id, qty) => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_QUANTITY_WITH_NUMBER,
    id,
    qty
  };
}; // Reset cart after form submit

const resetCart = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].RESET_CART
  };
};

/***/ }),

/***/ "./store/reducers/cartReducer.jsx":
/*!****************************************!*\
  !*** ./store/reducers/cartReducer.jsx ***!
  \****************************************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase */ "./firebase/index.jsx");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../types */ "./store/types.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const db = _firebase__WEBPACK_IMPORTED_MODULE_3__["firebase"].firestore();
const dbOrderRef = db.collection('products');


const token = '76483461103103918uhkjdkjc';
const initState = {
  products: [],
  addedItems: [],
  total: 0,
  shipping: 0,
  login: false
};

const cartReducer = (state = initState, action) => {
  // User Logout
  if (action.type === _types__WEBPACK_IMPORTED_MODULE_5__["default"].USRER_LOGOUT) {
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('_livani_token_');
    return _objectSpread(_objectSpread({}, state), {}, {
      login: false
    });
  } // Check if user login


  if (action.type === _types__WEBPACK_IMPORTED_MODULE_5__["default"].CHECK_USRER_LOGIN) {
    const getToken = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('_livani_token_');

    if (getToken == token) {
      return _objectSpread(_objectSpread({}, state), {}, {
        login: true
      });
    } else {
      return _objectSpread(_objectSpread({}, state), {}, {
        login: false
      });
    }
  } // User Login


  if (action.type === _types__WEBPACK_IMPORTED_MODULE_5__["default"].USRER_LOGIN) {
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set('_livani_token_', token);
    const getToken = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('_livani_token_'); // console.log('token', getToken)

    if (getToken == token) {
      return _objectSpread(_objectSpread({}, state), {}, {
        login: true
      });
    } else {
      return _objectSpread(_objectSpread({}, state), {}, {
        login: false
      });
    }
  }

  if (action.type === _types__WEBPACK_IMPORTED_MODULE_5__["default"].ADD_PRODUCTS) {
    let productsArray = [];
    dbOrderRef.get().then(res => {
      res.forEach(doc => {
        let productsObj = doc.data();
        productsObj.id = doc.id;
        productsArray.push(productsObj);
      });
    }); // console.log('www', productsArray)

    return _objectSpread(_objectSpread({}, state), {}, {
      products: productsArray
    });
  }

  if (action.type === _types__WEBPACK_IMPORTED_MODULE_5__["default"].ADD_TO_CART) {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += 1;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.newPrice
      });
    } else {
      addedItem.quantity = 1; //calculating the total

      let newTotal = state.total + addedItem.newPrice;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === _types__WEBPACK_IMPORTED_MODULE_5__["default"].ADD_QUANTITY_WITH_NUMBER) {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.newPrice * action.qty
      });
    } else {
      addedItem.quantity = action.qty; //calculating the total

      let newTotal = state.total + addedItem.newPrice * action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === _types__WEBPACK_IMPORTED_MODULE_5__["default"].REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id); //calculating the total

    let newTotal = state.total - itemToRemove.newPrice * itemToRemove.quantity;
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: new_items,
      total: newTotal
    });
  }

  if (action.type === _types__WEBPACK_IMPORTED_MODULE_5__["default"].ADD_QUANTITY) {
    let addedItem = state.products.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.newPrice;
    return _objectSpread(_objectSpread({}, state), {}, {
      total: newTotal
    });
  }

  if (action.type === _types__WEBPACK_IMPORTED_MODULE_5__["default"].SUB_QUANTITY) {
    let addedItem = state.products.find(item => item.id === action.id); //if the qt == 0 then it should be removed

    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.newPrice;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: new_items,
        total: newTotal
      });
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.newPrice;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: newTotal
      });
    }
  }

  if (action.type === _types__WEBPACK_IMPORTED_MODULE_5__["default"].ADD_SHIPPING) {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping += 30
    });
  }

  if (action.type === 'SUB_SHIPPING') {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping -= 30
    });
  }

  if (action.type === _types__WEBPACK_IMPORTED_MODULE_5__["default"].RESET_CART) {
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: [],
      total: 0,
      shipping: 0
    });
  } else {
    return state;
  }
};

const initStore = (initialState = initState) => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(cartReducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a)));
};

/***/ }),

/***/ "./store/types.jsx":
/*!*************************!*\
  !*** ./store/types.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
const TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_ITEM: 'REMOVE_ITEM',
  SUB_QUANTITY: 'SUB_QUANTITY',
  ADD_QUANTITY: 'ADD_QUANTITY',
  ADD_SHIPPING: 'ADD_SHIPPING',
  ADD_QUANTITY_WITH_NUMBER: 'ADD_QUANTITY_WITH_NUMBER',
  ORDER_FORM: 'ORDER_FORM',
  CHECKOUT_CHARGE: 'CHECKOUT_CHARGE',
  RESET_CART: 'RESET_CART',
  ADD_PRODUCTS: 'ADD_PRODUCTS',
  USRER_LOGIN: 'USRER_LOGIN',
  CHECK_USRER_LOGIN: 'CHECK_USRER_LOGIN',
  USRER_LOGOUT: 'USRER_LOGOUT'
};
/* harmony default export */ __webpack_exports__["default"] = (TYPES);

/***/ }),

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./pages/_app.jsx");


/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

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

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaGFyZWQvR29Ub3AuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvX0FwcC9MYXlvdXQuanN4Iiwid2VicGFjazovLy8uL2ZpcmViYXNlL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL2NhcnRBY3Rpb25zLmpzeCIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9jYXJ0UmVkdWNlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdHlwZXMuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiR29Ub3AiLCJwcm9wcyIsInRoZVBvc2l0aW9uIiwic2V0VGhlUG9zaXRpb24iLCJSZWFjdCIsInVzZVN0YXRlIiwidGltZW91dFJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsInNjcm9sbFkiLCJvblNjcm9sbFN0ZXAiLCJwYWdlWU9mZnNldCIsImNsZWFySW50ZXJ2YWwiLCJjdXJyZW50Iiwic2Nyb2xsIiwic2Nyb2xsU3RlcEluUHgiLCJzY3JvbGxUb1RvcCIsInNldEludGVydmFsIiwiZGVsYXlJbk1zIiwicmVuZGVyR29Ub3BJY29uIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJsb2FkZXIiLCJzZXRMb2FkZXIiLCJzZXRUaW1lb3V0IiwiY29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiYXV0aCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJkaXNwYXRjaCIsImNoZWNrVXNlckxvZ2luIiwiYWRkUHJvZHVjdHMiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJ3aXRoUmVkdXgiLCJpbml0U3RvcmUiLCJ0eXBlIiwiVFlQRVMiLCJDSEVDS19VU1JFUl9MT0dJTiIsInVzZXJMb2dvdXQiLCJVU1JFUl9MT0dPVVQiLCJ1c2VyTG9naW4iLCJVU1JFUl9MT0dJTiIsIkFERF9QUk9EVUNUUyIsImFkZFRvQ2FydCIsImlkIiwiQUREX1RPX0NBUlQiLCJyZW1vdmVJdGVtIiwiUkVNT1ZFX0lURU0iLCJzdWJ0cmFjdFF1YW50aXR5IiwiU1VCX1FVQU5USVRZIiwiYWRkUXVhbnRpdHkiLCJBRERfUVVBTlRJVFkiLCJhZGRRdWFudGl0eVdpdGhOdW1iZXIiLCJxdHkiLCJBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIiLCJyZXNldENhcnQiLCJSRVNFVF9DQVJUIiwiZGIiLCJmaXJlc3RvcmUiLCJkYk9yZGVyUmVmIiwiY29sbGVjdGlvbiIsInRva2VuIiwiaW5pdFN0YXRlIiwicHJvZHVjdHMiLCJhZGRlZEl0ZW1zIiwidG90YWwiLCJzaGlwcGluZyIsImxvZ2luIiwiY2FydFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImNvb2tpZSIsInJlbW92ZSIsImdldFRva2VuIiwiZ2V0Iiwic2V0IiwicHJvZHVjdHNBcnJheSIsInRoZW4iLCJyZXMiLCJmb3JFYWNoIiwiZG9jIiwicHJvZHVjdHNPYmoiLCJkYXRhIiwicHVzaCIsImFkZGVkSXRlbSIsImZpbmQiLCJpdGVtIiwiZXhpc3RlZF9pdGVtIiwicXVhbnRpdHkiLCJuZXdQcmljZSIsIm5ld1RvdGFsIiwiaXRlbVRvUmVtb3ZlIiwibmV3X2l0ZW1zIiwiZmlsdGVyIiwiQUREX1NISVBQSU5HIiwiaW5pdGlhbFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJPUkRFUl9GT1JNIiwiQ0hFQ0tPVVRfQ0hBUkdFIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtR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Ozs7Ozs7Ozs7O0FDdE5QO0FBQUE7QUFDQSxNQUFNL0QsS0FBSyxHQUFHO0FBQ1ZTLGFBQVcsRUFBRSxhQURIO0FBRVZFLGFBQVcsRUFBRSxhQUZIO0FBR1ZFLGNBQVksRUFBRSxjQUhKO0FBSVZFLGNBQVksRUFBRSxjQUpKO0FBS1YyQyxjQUFZLEVBQUUsY0FMSjtBQU1WeEMsMEJBQXdCLEVBQUUsMEJBTmhCO0FBT1Y4QyxZQUFVLEVBQUUsWUFQRjtBQVFWQyxpQkFBZSxFQUFFLGlCQVJQO0FBU1Y3QyxZQUFVLEVBQUUsWUFURjtBQVVWZCxjQUFZLEVBQUUsY0FWSjtBQVdWRCxhQUFXLEVBQUUsYUFYSDtBQVlWSixtQkFBaUIsRUFBRSxtQkFaVDtBQWFWRSxjQUFZLEVBQUU7QUFiSixDQUFkO0FBZ0JlSCxvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgR29Ub3AgPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnN0IFt0aGVQb3NpdGlvbiwgc2V0VGhlUG9zaXRpb25dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHRpbWVvdXRSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDE3MCkge1xuICAgICAgICAgICAgICAgIHNldFRoZVBvc2l0aW9uKHRydWUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRoZVBvc2l0aW9uKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgW10pXG4gICAgXG4gICAgY29uc3Qgb25TY3JvbGxTdGVwID0gKCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID09PSAwKXtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZW91dFJlZi5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIHdpbmRvdy5wYWdlWU9mZnNldCAtIHByb3BzLnNjcm9sbFN0ZXBJblB4KTtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcbiAgICAgICAgdGltZW91dFJlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwob25TY3JvbGxTdGVwLCBwcm9wcy5kZWxheUluTXMpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckdvVG9wSWNvbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZ28tdG9wICR7dGhlUG9zaXRpb24gPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9e3Njcm9sbFRvVG9wfT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieC11cC1hcnJvdy1hbHRcIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHtyZW5kZXJHb1RvcEljb24oKX1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdvVG9wOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgR29Ub3AgZnJvbSAnLi4vU2hhcmVkL0dvVG9wJztcblxuY29uc3QgTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldExvYWRlcihmYWxzZSksIDIwMDApO1xuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+TGl2YW5pIC0gUmVhY3QgTmV4dCBlQ29tbWVyY2UgVGVtcGxhdGU8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJMaXZhbmkgLSBSZWFjdCBOZXh0IGVDb21tZXJjZSBUZW1wbGF0ZS4gVGhpcyBoYXMgYmVlbiBidWlsdCB3aXRoIFJlYWN0LCBOZXh0LmpzLCBFeHByZXNzLmpzLCBhbmQgRVM2K1wiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJMaXZhbmkgLSBSZWFjdCBOZXh0IGVDb21tZXJjZSBUZW1wbGF0ZVwiPjwvbWV0YT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cIkxpdmFuaSAtIFJlYWN0IE5leHQgZUNvbW1lcmNlIFRlbXBsYXRlXCI+PC9tZXRhPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL2xpdmFuaS1yZWFjdC5lbnZ5dGhlbWUuY29tL1wiPjwvbGluaz5cbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vY2QxOS0yLTE1ODkyMTYwOTMxMTMuanBnXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIHtsb2FkZXIgPyAnTG9hZGluZycgOiBjaGlsZHJlbn1cbiAgICAgICAgICAgIDxHb1RvcCBzY3JvbGxTdGVwSW5QeD1cIjEwMFwiIGRlbGF5SW5Ncz1cIjEwLjUwXCIgLz5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuXG4vLyBOZWVkIHRvIHVwZGF0ZSBiZWxvdyBjb25maWdcbmNvbnN0IGNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiYXBpX2tleVwiLFxuICAgIGF1dGhEb21haW46IFwiZXhhbXBsZV9pZC5maXJlYmFzZWFwcC5jb21cIixcbiAgICBkYXRhYmFzZVVSTDogXCJkYXRhYmFzZS11cmwuZmlyZWJhc2Vpby5jb21cIixcbiAgICBwcm9qZWN0SWQ6IFwicHJvamVjdC1pZFwiLFxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiYnVja2V0LWlkLmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMzIxMzEzMTMyXCIsXG4gICAgYXBwSWQ6IFwiMTIzMTMxMzEzMTMzMjNcIlxufTtcbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XG59XG5jb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xuZXhwb3J0IHtcbiAgICBhdXRoLFxuICAgIGZpcmViYXNlXG59OyIsImltcG9ydCAnLi4vc3R5bGVzLnNjc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IHsgaW5pdFN0b3JlIH0gZnJvbSAnLi4vc3RvcmUvcmVkdWNlcnMvY2FydFJlZHVjZXInO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvX0FwcC9MYXlvdXQnO1xuaW1wb3J0IHsgY2hlY2tVc2VyTG9naW4sIGFkZFByb2R1Y3RzIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9jYXJ0QWN0aW9ucyc7XG5cbmNvbnN0IE15QXBwID0gKHtDb21wb25lbnQsIHBhZ2VQcm9wcywgc3RvcmV9KSA9PiB7XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goY2hlY2tVc2VyTG9naW4oKSlcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWRkUHJvZHVjdHMoKSlcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICA8L0xheW91dD5cbiAgICApO1xufVxuXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBDb21wb25lbnQsIGN0eCB9KSA9PiB7XG4gICAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xuICAgIGlmKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpe1xuICAgICAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcbiAgICB9XG4gICAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGluaXRTdG9yZSkoTXlBcHApIiwiaW1wb3J0IFRZUEVTIGZyb20gJy4vLi4vdHlwZXMnXG5cbi8vQ0hFQ0tfVVNSRVJfTE9HSU5cbmV4cG9ydCBjb25zdCBjaGVja1VzZXJMb2dpbiA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBUWVBFUy5DSEVDS19VU1JFUl9MT0dJTlxuICAgIH1cbn1cblxuLy8gVVNSRVJfTE9HT1VUXG5leHBvcnQgY29uc3QgdXNlckxvZ291dCA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBUWVBFUy5VU1JFUl9MT0dPVVRcbiAgICB9XG59XG5cbi8vIFVTUkVSX0xPR0lOXG5leHBvcnQgY29uc3QgdXNlckxvZ2luID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFRZUEVTLlVTUkVSX0xPR0lOXG4gICAgfVxufVxuXG4vL2FkZCBwcm9kdWN0c1xuZXhwb3J0IGNvbnN0IGFkZFByb2R1Y3RzID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFRZUEVTLkFERF9QUk9EVUNUU1xuICAgIH1cbn1cbi8vYWRkIGNhcnQgYWN0aW9uXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0ID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogVFlQRVMuQUREX1RPX0NBUlQsXG4gICAgICAgIGlkXG4gICAgfVxufVxuLy9yZW1vdmUgaXRlbSBhY3Rpb25cbmV4cG9ydCBjb25zdCByZW1vdmVJdGVtID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogVFlQRVMuUkVNT1ZFX0lURU0sXG4gICAgICAgIGlkXG4gICAgfVxufVxuLy9zdWJ0cmFjdCBxdCBhY3Rpb25cbmV4cG9ydCBjb25zdCBzdWJ0cmFjdFF1YW50aXR5ID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogVFlQRVMuU1VCX1FVQU5USVRZLFxuICAgICAgICBpZFxuICAgIH1cbn1cbi8vYWRkIHF0IGFjdGlvblxuZXhwb3J0IGNvbnN0IGFkZFF1YW50aXR5ID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogVFlQRVMuQUREX1FVQU5USVRZLFxuICAgICAgICBpZFxuICAgIH1cbn1cblxuLy9hZGQgcXQgYWN0aW9uIHdpdGggcXVhbnRpdHkgbnVtYmVyXG5leHBvcnQgY29uc3QgYWRkUXVhbnRpdHlXaXRoTnVtYmVyID0gKGlkLCBxdHkpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBUWVBFUy5BRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIsXG4gICAgICAgIGlkLFxuICAgICAgICBxdHlcbiAgICB9XG59XG5cbi8vIFJlc2V0IGNhcnQgYWZ0ZXIgZm9ybSBzdWJtaXRcbmV4cG9ydCBjb25zdCByZXNldENhcnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogVFlQRVMuUkVTRVRfQ0FSVFxuICAgIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XG5pbXBvcnQgeyBmaXJlYmFzZSB9IGZyb20gJy4uLy4uL2ZpcmViYXNlJztcbmNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XG5jb25zdCBkYk9yZGVyUmVmID0gZGIuY29sbGVjdGlvbigncHJvZHVjdHMnKTtcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcblxuaW1wb3J0IFRZUEVTIGZyb20gJy4vLi4vdHlwZXMnXG5cbmNvbnN0IHRva2VuID0gJzc2NDgzNDYxMTAzMTAzOTE4dWhramRramMnO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG4gICAgcHJvZHVjdHM6IFtdLFxuICAgIGFkZGVkSXRlbXM6W10sXG4gICAgdG90YWw6IDAsXG4gICAgc2hpcHBpbmc6IDAsXG4gICAgbG9naW46IGZhbHNlXG59XG5cbmNvbnN0IGNhcnRSZWR1Y2VyID0gKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pID0+IHtcblxuICAgIC8vIFVzZXIgTG9nb3V0XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBUWVBFUy5VU1JFUl9MT0dPVVQpe1xuICAgICAgICBjb29raWUucmVtb3ZlKCdfbGl2YW5pX3Rva2VuXycpXG4gICAgICAgIHJldHVybntcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgbG9naW46IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB1c2VyIGxvZ2luXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBUWVBFUy5DSEVDS19VU1JFUl9MT0dJTil7XG4gICAgICAgIGNvbnN0IGdldFRva2VuID0gY29va2llLmdldCgnX2xpdmFuaV90b2tlbl8nKVxuXG4gICAgICAgIGlmIChnZXRUb2tlbiA9PSB0b2tlbil7XG4gICAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbG9naW46IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBsb2dpbjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVzZXIgTG9naW5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gVFlQRVMuVVNSRVJfTE9HSU4pe1xuICAgICAgICBjb29raWUuc2V0KCdfbGl2YW5pX3Rva2VuXycsIHRva2VuKTtcblxuICAgICAgICBjb25zdCBnZXRUb2tlbiA9IGNvb2tpZS5nZXQoJ19saXZhbmlfdG9rZW5fJylcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygndG9rZW4nLCBnZXRUb2tlbilcblxuICAgICAgICBpZiAoZ2V0VG9rZW4gPT0gdG9rZW4pe1xuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGxvZ2luOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbG9naW46IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IFRZUEVTLkFERF9QUk9EVUNUUyl7XG4gICAgICAgIGxldCBwcm9kdWN0c0FycmF5ID0gW107XG4gICAgICAgIGRiT3JkZXJSZWYuZ2V0KClcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHJlcy5mb3JFYWNoKGRvYyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2R1Y3RzT2JqID0gZG9jLmRhdGEoKTtcbiAgICAgICAgICAgICAgICBwcm9kdWN0c09iai5pZCA9IGRvYy5pZDtcbiAgICAgICAgICAgICAgICBwcm9kdWN0c0FycmF5LnB1c2gocHJvZHVjdHNPYmopXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3d3dycsIHByb2R1Y3RzQXJyYXkpXG4gICAgICAgIFxuICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0c0FycmF5XG4gICAgICAgIH1cbiAgICB9XG4gICBcbiAgICBpZihhY3Rpb24udHlwZSA9PT0gVFlQRVMuQUREX1RPX0NBUlQpe1xuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xuICAgICAgICBsZXQgZXhpc3RlZF9pdGVtPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbT0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcbiAgICAgICAgaWYoZXhpc3RlZF9pdGVtKVxuICAgICAgICB7XG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gMSBcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdG90YWw6IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlIFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ID0gMTtcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZSBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBbLi4uc3RhdGUuYWRkZWRJdGVtcywgYWRkZWRJdGVtXSxcbiAgICAgICAgICAgICAgICB0b3RhbCA6IG5ld1RvdGFsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGFjdGlvbi50eXBlID09PSBUWVBFUy5BRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIpe1xuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xuICAgICAgICBsZXQgZXhpc3RlZF9pdGVtPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbT0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcbiAgICAgICAgaWYoZXhpc3RlZF9pdGVtKVxuICAgICAgICB7XG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gYWN0aW9uLnF0eVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2UgKiBhY3Rpb24ucXR5XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgPSBhY3Rpb24ucXR5O1xuICAgICAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlICogYWN0aW9uLnF0eVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxuICAgICAgICAgICAgICAgIHRvdGFsIDogbmV3VG90YWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IFRZUEVTLlJFTU9WRV9JVEVNKXtcbiAgICAgICAgbGV0IGl0ZW1Ub1JlbW92ZT0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW09PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXG4gICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtPT4gYWN0aW9uLmlkICE9PSBpdGVtLmlkKVxuICAgICAgICBcbiAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSAoaXRlbVRvUmVtb3ZlLm5ld1ByaWNlICogaXRlbVRvUmVtb3ZlLnF1YW50aXR5ICk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxuICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gVFlQRVMuQUREX1FVQU5USVRZKXtcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbT0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IDEgXG4gICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IFRZUEVTLlNVQl9RVUFOVElUWSl7ICBcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbT0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZCkgXG4gICAgICAgIC8vaWYgdGhlIHF0ID09IDAgdGhlbiBpdCBzaG91bGQgYmUgcmVtb3ZlZFxuICAgICAgICBpZihhZGRlZEl0ZW0ucXVhbnRpdHkgPT09IDEpe1xuICAgICAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW09Pml0ZW0uaWQgIT09IGFjdGlvbi5pZClcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gYWRkZWRJdGVtLm5ld1ByaWNlXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IG5ld19pdGVtcyxcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSAtPSAxXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIGFkZGVkSXRlbS5uZXdQcmljZVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gVFlQRVMuQUREX1NISVBQSU5HKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgc2hpcHBpbmc6IHN0YXRlLnNoaXBwaW5nICs9IDMwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gJ1NVQl9TSElQUElORycpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcgLT0gMzBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGFjdGlvbi50eXBlID09PSBUWVBFUy5SRVNFVF9DQVJUKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgYWRkZWRJdGVtczogW10sXG4gICAgICAgICAgICB0b3RhbDogMCxcbiAgICAgICAgICAgIHNoaXBwaW5nOiAwXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGluaXRTdG9yZSA9IChpbml0aWFsU3RhdGUgPSBpbml0U3RhdGUpID0+IHtcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgICAgIGNhcnRSZWR1Y2VyLFxuICAgICAgICBpbml0aWFsU3RhdGUsXG4gICAgICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rKSlcbiAgICApXG59IiwiLy9UeXBlcyBzaG91bGQgYmUgaW4gY29uc3QgdG8gYXZvaWQgdHlwb3MgYW5kIGR1cGxpY2F0aW9uIHNpbmNlIGl0J3MgYSBzdHJpbmcgYW5kIGNvdWxkIGJlIGVhc2lseSBtaXNzIHNwZWxsZWRcbmNvbnN0IFRZUEVTID0geyBcbiAgICBBRERfVE9fQ0FSVDogJ0FERF9UT19DQVJUJyxcbiAgICBSRU1PVkVfSVRFTTogJ1JFTU9WRV9JVEVNJyxcbiAgICBTVUJfUVVBTlRJVFk6ICdTVUJfUVVBTlRJVFknLFxuICAgIEFERF9RVUFOVElUWTogJ0FERF9RVUFOVElUWScsXG4gICAgQUREX1NISVBQSU5HOiAnQUREX1NISVBQSU5HJyxcbiAgICBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVI6ICdBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVInLFxuICAgIE9SREVSX0ZPUk06ICdPUkRFUl9GT1JNJyxcbiAgICBDSEVDS09VVF9DSEFSR0U6ICdDSEVDS09VVF9DSEFSR0UnLFxuICAgIFJFU0VUX0NBUlQ6ICdSRVNFVF9DQVJUJyxcbiAgICBBRERfUFJPRFVDVFM6ICdBRERfUFJPRFVDVFMnLFxuICAgIFVTUkVSX0xPR0lOOiAnVVNSRVJfTE9HSU4nLFxuICAgIENIRUNLX1VTUkVSX0xPR0lOOiAnQ0hFQ0tfVVNSRVJfTE9HSU4nLFxuICAgIFVTUkVSX0xPR09VVDogJ1VTUkVSX0xPR09VVCdcbn1cblxuZXhwb3J0IGRlZmF1bHQgVFlQRVMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9maXJlc3RvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=