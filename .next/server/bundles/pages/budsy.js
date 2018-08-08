module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/herminiogarcia/Folders/personal/interviews/personal-next/components/Footer.js";

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "container medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    className: "major last",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Questions or comments?")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Please reach out for any reason! I am more than happy to answer anything you may be curious about!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
    method: "post",
    action: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-6 col-12-mobilep",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    type: "text",
    name: "name",
    placeholder: "Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-6 col-12-mobilep",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    type: "email",
    name: "email",
    placeholder: "Email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
    name: "message",
    placeholder: "Message",
    rows: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "actions special",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    type: "submit",
    value: "Send Message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "icon fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "Twitter"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "icon fa-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "Facebook"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "icon fa-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "Instagram"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "icon fa-github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "Github"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "icon fa-dribbble",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "Dribbble"))))));
});

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/Users/herminiogarcia/Folders/personal/interviews/personal-next/components/Header.js";


var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Home")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/budsy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Budsy")));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer__ = __webpack_require__("./components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
var _jsxFileName = "/Users/herminiogarcia/Folders/personal/interviews/personal-next/components/Layout.js";




var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Herminio Garcia"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    charset: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, user-scalable=no",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "static/css/main.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "is-preload",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), props.children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./pages/budsy.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
var _jsxFileName = "/Users/herminiogarcia/Folders/personal/interviews/personal-next/pages/budsy.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "logo icon fa-leaf",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Budsy")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    id: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "box alt container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    className: "feature left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://vimeo.com/283833042",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "image list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "static/images/budsyapp.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Customer Application"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Giving a responsive interface for customers to order marijuana through pickup or delivery."))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    className: "feature right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://vimeo.com/283838463",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "image list",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "static/images/budsydashboard.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Dashboard Application"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Used to process the incoming orders for the customers."))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    className: "feature left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "http://www.budsy.io",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "image list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "static/images/budsywebsite.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "Landing Page"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "Gives the user an introduction to the service to allow for easy onboarding."))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    className: "feature right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://vimeo.com/283841207",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "image list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "static/images/budsynative.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "Native Application"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "Allows us to bring the non-transactional aspects of customer application to app store to avoid infringing on App Store/ Play Store policies of cannabis ordering limitations.")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "box container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, "About")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, "Customer App")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, "Using Create-React-App as the React rendering engine, I was responsible for this application capable of interacting with our Django backend web services. The designs are based on initial UX wireframes that were adapted to fit unexpected app screens."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, "The application uses server-side events to render incoming orders in real time."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, "The application was originally deployed using Vagrant to manage a controlled environment but proved to be much too memory intesive to keep using as our main deployment strategy. We are currently migrating to Docker to leverage the performance and cost savings of containers deployed on our IBM Bluemix Cloud instances."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, "The application uses a portion of Redux to manage pieces of state that span multiple layers of components."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, "Using Jest and Puppeteer, we are able to run unit tests and end-to-end integration tests for key aspects of design.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, "Dashboard App")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, "Again, using Create-React-App, we developed an application that was going to be our back office management for incoming orders."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, "Using this application, we are able to add strains for dispensaries, add deals for dispensaries, check the status of each order, process each order, and approve customers based on identification card and/or medical recommendations."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, "We currently deploy the application as a standalone Node project onto IBM Bluemix but we are working on implementing Docker to better manage the code enviroment"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, "The application uses a portion of Redux to manage pieces of state that span multiple layers of components.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, "Landing Page")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, "This static application is responsible for educating the public and potential parters about our service and value proposition"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, "Using SCSS, we are able to efficiently process the resulting CSS to minimize redudant code.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, "Native Application")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, "As a personal contribution to the team, I was responsible for developing the first AI system that we use for our recommendation engine. The inital Node application that did the recommendations was adapted to become the engine for this application."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, "Because the App Store/ Play Store don't allow cannabis transactions, we were initially weary about developing on native platforms."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, "We later decided to provide an insight into our recommendation system by allowing people to try it out and hopefully get driven to our web application."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, "I am using React Native, react-navigation, and Expo to develop the application. I am also working on a Node/Express backend to provide the necessary web services to power the application"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, "Mostly leveraging statistical javascript libraries, we are starting to incorporate user feedback and behavior. New development is using python though numpy and sklearn to develop basic models."))))));
});

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/budsy.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=budsy.js.map