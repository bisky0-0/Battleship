/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: #294872;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
}

#header, #main, #footer {
  width: 100%;
  padding: 10px;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
}

#header {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
}
#header #h1 {
  color: #fff;
}
@media (max-width: 599px) {
  #header #h1 {
    font-size: 2rem;
    color: #fff;
  }
}

#main {
  padding: 10px 10px;
  margin-bottom: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}
#main #battel-fields {
  width: 100%;
}
@media (max-width: 599px) {
  #main #battel-fields {
    display: flex;
    flex-flow: column-reverse;
    align-items: center;
    justify-content: space-around;
  }
}
@media (min-width: 600px) {
  #main #battel-fields {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-around;
  }
}
@media (max-width: 599px) {
  #main #battel-fields .field {
    width: 100%;
    max-width: 350px;
    height: 370px;
    margin-bottom: 20px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }
}
#main #battel-fields .field .name {
  color: #fff;
  margin-top: 10px;
  font-size: 1.3rem;
}
#main #battel-fields .field #randomise {
  width: 150px;
  height: 40px;
  background-color: #e2efff;
  color: #294872;
  border: none;
  outline: none;
  font-size: 1rem;
  border-radius: 10px;
  cursor: pointer;
  align-self: center;
  position: absolute;
  bottom: -50px;
}
#main #battel-fields .field #randomise:hover {
  background-color: #011f48;
  color: #fff;
}
#main #battel-fields .field .grid {
  width: 100%;
  height: 92%;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}
#main #battel-fields .field .grid .cell {
  width: 10%;
  height: 10%;
  border: 0.5px solid rgba(43, 177, 254, 0.662745098);
  cursor: move;
  position: relative;
  background-color: #fff;
  transition: background-color 0.3s ease;
}
#main #battel-fields .field .grid .bot-cell:hover {
  background-color: rgb(239, 157, 157);
}
#main #battel-fields .field .grid .ship {
  position: absolute;
  left: 0;
  z-index: 100;
}
#main #battel-fields .field .grid #ship-11, #main #battel-fields .field .grid #ship-12 {
  width: 100%;
  height: 100%;
}
#main #battel-fields .field .grid #ship-2, #main #battel-fields .field .grid #ship-22, #main #battel-fields .field .grid #ship-2-bot, #main #battel-fields .field .grid #ship-22-bot {
  width: calc(200% + 1px);
  height: 100%;
}
#main #battel-fields .field .grid .ship-2-rotate, #main #battel-fields .field .grid .ship-22-rotate, #main #battel-fields .field .grid .ship-2-bot-rotate, #main #battel-fields .field .grid .ship-22-bot-rotate {
  transform-origin: 0 0;
  transform: rotate(90deg) translate(0, -100%);
}
#main #battel-fields .field .grid #ship-3, #main #battel-fields .field .grid #ship-33, #main #battel-fields .field .grid #ship-3-bot, #main #battel-fields .field .grid #ship-33-bot {
  width: calc(300% + 3px);
  height: 100%;
}
#main #battel-fields .field .grid .ship-3-rotate, #main #battel-fields .field .grid .ship-33-rotate, #main #battel-fields .field .grid .ship-3-bot-rotate, #main #battel-fields .field .grid .ship-33-bot-rotate {
  transform-origin: 0 0;
  transform: rotate(90deg) translate(0, -100%);
}
#main #battel-fields .field .grid #ship-4, #main #battel-fields .field .grid #ship-4-bot {
  width: calc(400% + 5px);
  height: 100%;
}
#main #battel-fields .field .grid .ship-4-rotate, #main #battel-fields .field .grid .ship-4-bot-rotate {
  transform-origin: 0 0;
  transform: rotate(90deg) translate(0, -100%);
}
#main #battel-fields .field .grid #ship-5, #main #battel-fields .field .grid #ship-5-bot {
  width: calc(500% + 5px);
  height: 100%;
}
#main #battel-fields .field .grid .ship-5-rotate, #main #battel-fields .field .grid .ship-5-bot-rotate {
  transform-origin: 0 0;
  transform: rotate(90deg) translate(0, -100%);
}
#main #battel-fields .field p {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  height: 8%;
  font-size: 1.3rem;
}
@media (min-width: 600px) {
  #main #battel-fields .field {
    width: 100%;
    max-width: 350px;
    height: 370px;
    margin-bottom: 20px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
  }
}
#main #battel-fields #human {
  position: relative;
}
#main #winner-card-btn, #main #play {
  width: 120px;
  height: 35px;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  background-color: #FFD700;
  cursor: pointer;
  box-shadow: 1px 1px 4px rgba(0, 0, 51, 0.2);
  margin-top: 50px;
}
#main #play:hover {
  background-color: #ffed88;
}

.winner-card {
  position: absolute;
  width: 300px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column;
  padding: 30px 10px;
  background-color: #ffed88;
  z-index: 10000;
  border-radius: 10px;
  transform: translateY(50%) scale(0.1);
  transition: all 0.4s ease-in-out;
  visibility: hidden;
  top: -70%;
}

#winner-card-btn {
  background-color: #294872 !important;
  color: #fff !important;
  margin-top: 0px !important;
}

.winner-card-visible {
  visibility: visible;
  top: 50%;
  transform: translateY(-50%) scale(1);
}

#footer {
  padding: 10px;
}
#footer a {
  text-decoration: none;
  color: #e1efff;
}

.shot {
  color: red;
  font-family: "Courier New", Courier, monospace;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: hitEffect 1s forwards;
}

@keyframes hitEffect {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  25% {
    box-shadow: 0 0 10px 10px rgba(255, 165, 117, 0.1), 0 0 10px 10px rgba(255, 164, 67, 0.1), 0 0 10px 10px rgba(255, 168, 27, 0.1), 0 0 10px 10px rgba(255, 222, 90, 0.1);
  }
  50% {
    box-shadow: 0 0 20px 20px rgba(255, 189, 108, 0.2), 0 0 20px 20px rgba(255, 196, 60, 0.2), 0 0 20px 20px rgba(255, 158, 13, 0.2), 0 0 20px 20px rgba(255, 177, 33, 0.2);
  }
  75% {
    box-shadow: 0 0 30px 30px rgba(160, 111, 46, 0.1), 0 0 30px 30px rgba(135, 90, 17, 0.1), 0 0 30px 30px rgba(113, 85, 1, 0.1), 0 0 30px 30px rgba(87, 60, 0, 0.1);
  }
  100% {
    box-shadow: 0 0 40px rgba(0, 0, 0, 0);
  }
}
.shot::after {
  content: "x";
  position: absolute;
  color: red;
  font-family: "Courier New", Courier, monospace;
  font-size: 2.5rem;
  z-index: 200;
}

.fail {
  background-color: rgb(120, 194, 255) !important;
  font-family: "Courier New", Courier, monospace;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: hitEffect 1s forwards;
}

.borders {
  background-color: rgb(0, 0, 12) !important;
  display: flex;
  align-items: center;
  justify-content: center;
}`, "",{"version":3,"sources":["webpack://./src/sass/base.scss","webpack://./src/sass/main.scss","webpack://./src/sass/mixins.scss","webpack://./src/sass/layout.scss","webpack://./src/sass/header.scss","webpack://./src/sass/devices.scss","webpack://./src/sass/maain.scss","webpack://./src/sass/footer.scss","webpack://./src/sass/animation.scss"],"names":[],"mappings":"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","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: #294872;\n    position: relative;\n    min-height: 100vh;\n    @include flex(column, space-between);\n}\n","* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #294872;\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: space-between;\n}\n\n#header, #main, #footer {\n  width: 100%;\n  padding: 10px;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: center;\n}\n\n#header {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: center;\n}\n#header #h1 {\n  color: #fff;\n}\n@media (max-width: 599px) {\n  #header #h1 {\n    font-size: 2rem;\n    color: #fff;\n  }\n}\n\n#main {\n  padding: 10px 10px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n}\n#main #battel-fields {\n  width: 100%;\n}\n@media (max-width: 599px) {\n  #main #battel-fields {\n    display: flex;\n    flex-flow: column-reverse;\n    align-items: center;\n    justify-content: space-around;\n  }\n}\n@media (min-width: 600px) {\n  #main #battel-fields {\n    display: flex;\n    flex-flow: row;\n    align-items: center;\n    justify-content: space-around;\n  }\n}\n@media (max-width: 599px) {\n  #main #battel-fields .field {\n    width: 100%;\n    max-width: 350px;\n    height: 370px;\n    margin-bottom: 20px;\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    justify-content: center;\n  }\n}\n#main #battel-fields .field .name {\n  color: #fff;\n  margin-top: 10px;\n  font-size: 1.3rem;\n}\n#main #battel-fields .field #randomise {\n  width: 150px;\n  height: 40px;\n  background-color: #e2efff;\n  color: #294872;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  border-radius: 10px;\n  cursor: pointer;\n  align-self: center;\n  position: absolute;\n  bottom: -50px;\n}\n#main #battel-fields .field #randomise:hover {\n  background-color: #011f48;\n  color: #fff;\n}\n#main #battel-fields .field .grid {\n  width: 100%;\n  height: 92%;\n  position: relative;\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: center;\n}\n#main #battel-fields .field .grid .cell {\n  width: 10%;\n  height: 10%;\n  border: 0.5px solid rgba(43, 177, 254, 0.662745098);\n  cursor: move;\n  position: relative;\n  background-color: #fff;\n  transition: background-color 0.3s ease;\n}\n#main #battel-fields .field .grid .bot-cell:hover {\n  background-color: rgb(239, 157, 157);\n}\n#main #battel-fields .field .grid .ship {\n  position: absolute;\n  left: 0;\n  z-index: 100;\n}\n#main #battel-fields .field .grid #ship-11, #main #battel-fields .field .grid #ship-12 {\n  width: 100%;\n  height: 100%;\n}\n#main #battel-fields .field .grid #ship-2, #main #battel-fields .field .grid #ship-22, #main #battel-fields .field .grid #ship-2-bot, #main #battel-fields .field .grid #ship-22-bot {\n  width: calc(200% + 1px);\n  height: 100%;\n}\n#main #battel-fields .field .grid .ship-2-rotate, #main #battel-fields .field .grid .ship-22-rotate, #main #battel-fields .field .grid .ship-2-bot-rotate, #main #battel-fields .field .grid .ship-22-bot-rotate {\n  transform-origin: 0 0;\n  transform: rotate(90deg) translate(0, -100%);\n}\n#main #battel-fields .field .grid #ship-3, #main #battel-fields .field .grid #ship-33, #main #battel-fields .field .grid #ship-3-bot, #main #battel-fields .field .grid #ship-33-bot {\n  width: calc(300% + 3px);\n  height: 100%;\n}\n#main #battel-fields .field .grid .ship-3-rotate, #main #battel-fields .field .grid .ship-33-rotate, #main #battel-fields .field .grid .ship-3-bot-rotate, #main #battel-fields .field .grid .ship-33-bot-rotate {\n  transform-origin: 0 0;\n  transform: rotate(90deg) translate(0, -100%);\n}\n#main #battel-fields .field .grid #ship-4, #main #battel-fields .field .grid #ship-4-bot {\n  width: calc(400% + 5px);\n  height: 100%;\n}\n#main #battel-fields .field .grid .ship-4-rotate, #main #battel-fields .field .grid .ship-4-bot-rotate {\n  transform-origin: 0 0;\n  transform: rotate(90deg) translate(0, -100%);\n}\n#main #battel-fields .field .grid #ship-5, #main #battel-fields .field .grid #ship-5-bot {\n  width: calc(500% + 5px);\n  height: 100%;\n}\n#main #battel-fields .field .grid .ship-5-rotate, #main #battel-fields .field .grid .ship-5-bot-rotate {\n  transform-origin: 0 0;\n  transform: rotate(90deg) translate(0, -100%);\n}\n#main #battel-fields .field p {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: center;\n  height: 8%;\n  font-size: 1.3rem;\n}\n@media (min-width: 600px) {\n  #main #battel-fields .field {\n    width: 100%;\n    max-width: 350px;\n    height: 370px;\n    margin-bottom: 20px;\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    justify-content: space-around;\n  }\n}\n#main #battel-fields #human {\n  position: relative;\n}\n#main #winner-card-btn, #main #play {\n  width: 120px;\n  height: 35px;\n  font-size: 1rem;\n  border: none;\n  border-radius: 10px;\n  background-color: #FFD700;\n  cursor: pointer;\n  box-shadow: 1px 1px 4px rgba(0, 0, 51, 0.2);\n  margin-top: 50px;\n}\n#main #play:hover {\n  background-color: #ffed88;\n}\n\n.winner-card {\n  position: absolute;\n  width: 300px;\n  height: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: column;\n  padding: 30px 10px;\n  background-color: #ffed88;\n  z-index: 10000;\n  border-radius: 10px;\n  transform: translateY(50%) scale(0.1);\n  transition: all 0.4s ease-in-out;\n  visibility: hidden;\n  top: -70%;\n}\n\n#winner-card-btn {\n  background-color: #294872 !important;\n  color: #fff !important;\n  margin-top: 0px !important;\n}\n\n.winner-card-visible {\n  visibility: visible;\n  top: 50%;\n  transform: translateY(-50%) scale(1);\n}\n\n#footer {\n  padding: 10px;\n}\n#footer a {\n  text-decoration: none;\n  color: #e1efff;\n}\n\n.shot {\n  color: red;\n  font-family: \"Courier New\", Courier, monospace;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  animation: hitEffect 1s forwards;\n}\n\n@keyframes hitEffect {\n  0% {\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n  25% {\n    box-shadow: 0 0 10px 10px rgba(255, 165, 117, 0.1), 0 0 10px 10px rgba(255, 164, 67, 0.1), 0 0 10px 10px rgba(255, 168, 27, 0.1), 0 0 10px 10px rgba(255, 222, 90, 0.1);\n  }\n  50% {\n    box-shadow: 0 0 20px 20px rgba(255, 189, 108, 0.2), 0 0 20px 20px rgba(255, 196, 60, 0.2), 0 0 20px 20px rgba(255, 158, 13, 0.2), 0 0 20px 20px rgba(255, 177, 33, 0.2);\n  }\n  75% {\n    box-shadow: 0 0 30px 30px rgba(160, 111, 46, 0.1), 0 0 30px 30px rgba(135, 90, 17, 0.1), 0 0 30px 30px rgba(113, 85, 1, 0.1), 0 0 30px 30px rgba(87, 60, 0, 0.1);\n  }\n  100% {\n    box-shadow: 0 0 40px rgba(0, 0, 0, 0);\n  }\n}\n.shot::after {\n  content: \"x\";\n  position: absolute;\n  color: red;\n  font-family: \"Courier New\", Courier, monospace;\n  font-size: 2.5rem;\n  z-index: 200;\n}\n\n.fail {\n  background-color: rgb(120, 194, 255) !important;\n  font-family: \"Courier New\", Courier, monospace;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: hitEffect 1s forwards;\n}\n\n.borders {\n  background-color: rgb(0, 0, 12) !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}","@mixin flex($flow, $justify) {\n    display: flex;\n    flex-flow: $flow;\n    align-items: center;\n    justify-content: $justify;\n}\n","#header, #main, #footer {\n    width: 100%;\n    padding: 10px;\n    @include flex(row, center);\n}\n","@import 'devices';\n\n#header {\n    @include flex(row, center);\n\n    #h1 {\n        @include device(599px) {   \n            font-size: 2rem;\n            color: #fff;\n        }\n\n        color: #fff;\n    }\n}\n","@mixin device($size) {\n    @if$size ==599px {\n        @media (max-width: 599px) {\n            @content;\n        }\n    }\n\n    @else if $size ==600px {\n        @media (min-width: 600px) {\n            @content;\n        }\n    }\n\n    @else if $size ==900px {\n        @media (min-width: 900px) {\n            @content;\n        }\n    }\n\n    @else if $size ==1200px {\n        @media (min-width: 1200px) {\n            @content;\n        }\n    }\n\n    @else if $size ==1800px {\n        @media (min-width: 1800px) {\n            @content;\n        }\n    }\n}","@import 'devices';\n#main {\n    padding: 10px 10px;\n    margin-bottom: 20px;\n    @include flex(column, center);\n\n    #battel-fields {\n        width: 100%;\n        @include device(599px) {\n            @include flex(column-reverse, space-around);\n        }\n\n        @include device(600px) {\n            @include flex(row, space-around);\n        }\n\n        .field {\n            @include device(599px) {\n                width: 100%;\n                max-width: 350px;\n                height: 370px;\n                margin-bottom: 20px;\n                display: flex;\n                flex-flow: column;\n                align-items: center;\n                justify-content: center;\n            }\n\n            .name {\n                color: #fff;\n                margin-top: 10px;\n                font-size: 1.3rem;\n            }\n\n            #randomise {\n                width: 150px;\n                height: 40px;\n                background-color: #e2efff;\n                color: #294872;\n                border: none;\n                outline: none;\n                font-size: 1rem;\n                border-radius: 10px;\n                cursor: pointer;\n                align-self: center;\n                position: absolute;\n                bottom: -50px;\n            }\n\n            #randomise:hover{\n                background-color: #011f48;\n                color: #fff;\n            }\n\n\n            .grid {\n                width: 100%;\n                height: 92%;\n                position: relative;\n                @include flex(row wrap, center);\n\n                .cell {\n                    width: calc(100%/10);\n                    height: calc(100%/10);\n                    border: 0.5px solid #2bb1fea9;\n                    cursor: move;\n                    position: relative;\n                    background-color: #fff;\n                    transition: background-color 0.3s ease;\n                }\n\n                .bot-cell:hover{\n                    background-color: rgb(239, 157, 157);\n                }\n\n                .ship {\n                    position: absolute;\n                    left: 0;\n                    z-index: 100;\n                }\n\n                #ship-11, #ship-12 {\n                    width: 100%;\n                    height: 100%;\n                }\n\n                #ship-2, #ship-22,  #ship-2-bot, #ship-22-bot {\n                    width: calc(200% + 1px);\n                    height: 100%;\n                }\n\n                .ship-2-rotate, .ship-22-rotate, .ship-2-bot-rotate, .ship-22-bot-rotate {\n                    transform-origin: 0 0;\n                    transform: rotate(90deg) translate(0, -100%);\n                }\n\n                #ship-3, #ship-33, #ship-3-bot, #ship-33-bot {\n                    width: calc(300% + 3px);\n                    height: 100%;\n                }\n\n                .ship-3-rotate, .ship-33-rotate, .ship-3-bot-rotate, .ship-33-bot-rotate {\n                    transform-origin: 0 0;\n                    transform: rotate(90deg) translate(0, -100%);\n                }\n\n                #ship-4, #ship-4-bot {\n                    width: calc(400% + 5px);\n                    height: 100%;\n                }\n\n                .ship-4-rotate, .ship-4-bot-rotate {\n                    transform-origin: 0 0;\n                    transform: rotate(90deg) translate(0, -100%);\n                }\n\n                #ship-5, #ship-5-bot {\n                    width: calc(500% + 5px);\n                    height: 100%;\n                }\n\n                .ship-5-rotate, .ship-5-bot-rotate {\n                    transform-origin: 0 0;\n                    transform: rotate(90deg) translate(0, -100%);\n                }\n            }\n\n            p {\n                @include flex(row, center);\n                height: 8%;\n                font-size: 1.3rem;\n            }\n\n            @include device(600px) {\n                width: 100%;\n                max-width: 350px;\n                height: 370px;\n                margin-bottom: 20px;\n                @include flex(column, space-around);\n            }\n        }\n\n        #human{\n            position: relative;\n        }\n    }\n\n    #winner-card-btn, #play {\n        width: 120px;\n        height: 35px;\n        font-size: 1rem;\n        border: none;\n        border-radius: 10px;\n        background-color: #FFD700;\n        cursor: pointer;\n        box-shadow: 1px 1px 4px #0033;\n        margin-top: 50px;\n    }\n\n    #play:hover{\n        background-color: #ffed88;\n    }\n}\n\n.winner-card{\n    position: absolute;\n    width: 300px;\n    height: 150px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-flow: column;\n    padding: 30px 10px;\n    background-color: #ffed88;\n    z-index: 10000;\n    border-radius: 10px;\n    transform: translateY(50%) scale(.1);\n    transition: all .4s ease-in-out;\n    visibility: hidden;\n    top: -70%;\n}\n\n#winner-card-btn{\n    background-color: #294872 !important;\n    color: #fff !important;\n    margin-top: 0px !important;\n}\n\n.winner-card-visible{\n    visibility: visible ;\n    top: 50% ;\n    transform: translateY(-50%) scale(1) ;\n}\n","#footer {\n    padding: 10px;\n\n    a {\n        text-decoration: none;\n        color: #e1efff;\n    }\n}\n",".shot {\n    color: red;\n    font-family: 'Courier New', Courier, monospace;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    animation: hitEffect 1s forwards;\n}\n\n@keyframes hitEffect {\n    0% {\n        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n    }\n    25% {\n        box-shadow: 0 0 10px 10px rgba(255, 165, 117, 0.1), \n                    0 0 10px 10px rgba(255, 164, 67, 0.1), \n                    0 0 10px 10px rgba(255, 168, 27, 0.1), \n                    0 0 10px 10px rgba(255, 222, 90, 0.1);\n    }\n    50% {\n        box-shadow: 0 0 20px 20px rgba(255, 189, 108, 0.2), \n                    0 0 20px 20px rgba(255, 196, 60, 0.2), \n                    0 0 20px 20px rgba(255, 158, 13, 0.2), \n                    0 0 20px 20px rgba(255, 177, 33, 0.2);\n    }\n    75% {\n        box-shadow: 0 0 30px 30px rgba(160, 111, 46, 0.1), \n                    0 0 30px 30px rgba(135, 90, 17, 0.1), \n                    0 0 30px 30px rgba(113, 85, 1, 0.1), \n                    0 0 30px 30px rgba(87, 60, 0, 0.1);\n    }\n    100% {\n        box-shadow: 0 0 40px rgba(0, 0, 0, 0);\n    }\n}\n\n.shot::after {\n    content: 'x';\n    position: absolute;\n    color: red;\n    font-family: 'Courier New', Courier, monospace;\n    font-size: 2.5rem;\n    z-index: 200;\n}\n\n.fail {\n    background-color: rgb(120, 194, 255) !important;\n    font-family: 'Courier New', Courier, monospace;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    animation: hitEffect 1s forwards;\n}\n\n.borders {\n    background-color: rgb(0, 0, 12) !important;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayShipInBotBard: () => (/* binding */ displayShipInBotBard),
/* harmony export */   displayShips: () => (/* binding */ displayShips),
/* harmony export */   gridChildren: () => (/* binding */ gridChildren),
/* harmony export */   markBorders: () => (/* binding */ markBorders),
/* harmony export */   updateCell: () => (/* binding */ updateCell),
/* harmony export */   winner: () => (/* binding */ winner)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sass/main.scss */ "./src/sass/main.scss");




const shipsPics = [
    "./assets/carrier.svg",
    "./assets/destroyer.svg",
    "./assets/submarine.svg",
    "./assets/submarine.svg",
    "./assets/patrol.svg",
    "./assets/patrol.svg"
]

async function gridChildren(parent, player) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell', `${player}-cell`);
            cell.dataset.x = i;
            cell.dataset.y = j;
            parent.appendChild(cell);
        }
    }
}

function setAttrs(elem, attrs, values) {
    for (let i = 0; i < attrs.length; i++) {
        elem.setAttribute(attrs[i], values[i]);
    }
}

function displayShips(ships, boardCells) {
    for (let i = 0; i < ships.length; i++) {
        const shipElem = document.createElement('img');
        shipElem.src = shipsPics[i]
        boardCells[ships[i].start[0]].appendChild(shipElem);
        setAttrs(shipElem, ['class', 'draggable', 'id'], ['ship', 'true', `ship-${ships[i].ID}`]);

        if (ships[i].start[1] - ships[i].start[0] === 10) {
            shipElem.classList.add(`ship-${ships[i].ID}-rotate`);
        }
    };
}

function displayShipInBotBard(ship) {
    const shipElement = document.createElement('img');
    ship.length === 5 ? shipElement.src = shipsPics[0] :
        ship.length === 4 ? shipElement.src = shipsPics[1] :
            ship.length === 3 ? shipElement.src = shipsPics[2] :
                shipElement.src = shipsPics[4];
    const board = document.getElementById('bot-grid');
    const boardCells = board.children
    boardCells[ship.start[0]].appendChild(shipElement);
    setAttrs(shipElement, ['class', 'draggable', 'id'], ['ship', 'true', `ship-${ship.ID}-bot`]);

    if (ship.start[1] - ship.start[0] === 10) {
        shipElement.classList.add(`ship-${ship.ID}-bot-rotate`);
    }
}

function updateCell(cell, player, hit) {
    let domCell = document.querySelector(`#${player}-grid .${player}-cell[data-x="${cell.cordinates[0]}"][data-y="${cell.cordinates[1]}"]`);
    if (hit) {
        domCell.classList.add('shot');
    } else {
        domCell.classList.add('fail');
    }
}

function markBorders(ship, player) {
    const grid = document.getElementById(`${player}-grid`);
    ship.borders.forEach(border => {
        const borderCell = grid.children[border]
        console.log(border, borderCell)
        borderCell.classList.add('borders');
    });
}

function winner(winner) {
    const card = document.getElementById('winner-card');
    const h1 = document.getElementById('winner-h1');
    const btn = document.getElementById('winner-card-btn');

    card.classList.add('winner-card-visible')

    h1.textContent = `${winner} won!`;

    btn.addEventListener('click', () => {
        (0,___WEBPACK_IMPORTED_MODULE_1__.resetGame)();
        (0,___WEBPACK_IMPORTED_MODULE_1__.setupGame)();
        document.getElementById('winner-card').classList.remove('winner-card-visible')
    })
}



/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Board: () => (/* binding */ Board),
/* harmony export */   BotBoard: () => (/* binding */ BotBoard),
/* harmony export */   GameBoard: () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


class Cell {
    constructor(cordinates, clicked = false, ID = null) {
        this.cordinates = cordinates;
        this.clicked = clicked;
        this.ID = ID;
    }
}

class Board {
    constructor() {
        this.board = this.createBoard();
        this.ships = [
            new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(5, 5),
            new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(4, 4),
            new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(3, 3),
            new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(3, 33),
            new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(2, 2),
            new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(2, 22),
        ];
        this.targets = [];
    }

    createBoard() {
        let board = [];
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                board.push(new Cell([i, j]));
            }
        }
        return board;
    }

    placeShip(position, length, direction, id) {
        let baseCell = this.board.find(cell => cell.cordinates[0] === position[0] && cell.cordinates[1] === position[1]);
        let startIndex = this.board.indexOf(baseCell);
        let pathResult = this.checkCells(startIndex, length, direction, id);

        if (pathResult !== true) {
            pathResult[0].forEach(index => this.add(this.board[index], id));
            this.addBordersForShip(pathResult[0], id);
            return pathResult;
        }
        return false;
    }

    checkCells(startIndex, length, direction, id) {
        const path = [];

        for (let i = 0; i < length; i++) {
            if (direction === 'horzntl') {
                let cell = this.board[startIndex + i];
                if (!cell || cell.ID !== null || cell.cordinates[1] + length > 10) return true;
                path.push(startIndex + i);
            } else if (direction === 'vrtcl') {
                let cell = this.board[startIndex + (i * 10)];
                if (!cell || cell.ID !== null || cell.cordinates[0] + length > 10) return true;
                path.push(startIndex + (i * 10));
            }
        }

        return path.length === length ? [path] : true;
    }

    addBordersForShip(shipCells, id) {
        const ship = this.ships.find(ship => ship.ID == id)
        const borders = [];
        shipCells.forEach(index => {
            const cell = this.board[index];
            this.addBorders(borders, cell.cordinates);
        });

        const uniqueBorders = Array.from(new Set(borders)).filter(index => !shipCells.includes(index));
        uniqueBorders.forEach(index => {
            let cell = this.board[index];
            if (cell.ID === null) {
                cell.ID = 0;
            }
        });

        ship.borders = uniqueBorders
    }

    addBorders(borders, cordinates) {
        const [x, y] = cordinates;

        const adjacentCells = [
            [x - 1, y - 1], [x - 1, y], [x - 1, y + 1],
            [x, y - 1], [x, y + 1],
            [x + 1, y - 1], [x + 1, y], [x + 1, y + 1]
        ];

        adjacentCells.forEach(([adjX, adjY]) => {
            if (adjX >= 0 && adjX < 10 && adjY >= 0 && adjY < 10) {
                let adjCell = this.board.find(cell => cell.cordinates[0] === adjX && cell.cordinates[1] === adjY);
                if (adjCell) {
                    borders.push(this.board.indexOf(adjCell));
                }
            }
        });
    }

    add(cell, value) {
        if (cell && cell.ID === null) {
            cell.ID = value;
        }
    }

    randomize() {
        this.ships.forEach(ship => {
            let placed = false;
            while (!placed) {
                let randomIndex = Math.floor(Math.random() * 100);
                let randomCell = this.board[randomIndex];
                let direction = Math.random() < 0.5 ? 'horzntl' : 'vrtcl';
                placed = this.placeShip(randomCell.cordinates, ship.length, direction, ship.ID);
                if (placed) ship.start = placed[0];
            }
        });
    }

    receiveAttack(cell) {
        if (cell.clicked) return false;
        console.log(cell.clicked)
        cell.clicked = true;
        console.log(cell.clicked)


        if (cell.ID !== null) {
            let hitShip = this.ships.find(ship => ship.ID === cell.ID);
            if (hitShip) {
                hitShip.hit();
                this.addSurroundingCellsToTargets(cell)
                if (hitShip.sunk()) {
                    this.targets = [];
                    hitShip.borders.forEach(border => {
                        this.board[border].clicked = true

                    })
                    return { hit: true, sunk: true, ship: hitShip };
                }

                return { hit: true, sunk: false, ship: hitShip };
            }
        }

        return { hit: false, sunk: false, ship: null };
    }

    addSurroundingCellsToTargets(cell) {
        const [x, y] = cell.cordinates;
        const surroundingCells = [
            [x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]
        ];

        surroundingCells.forEach(([adjX, adjY]) => {
            if (adjX >= 0 && adjX < 10 && adjY >= 0 && adjY < 10) {
                const adjCell = this.board.find(cell => cell.cordinates[0] === adjX && cell.cordinates[1] === adjY);
                if (adjCell && !adjCell.clicked && adjCell.ID !== 0) {
                    this.targets.push(adjCell);
                }
            }
        });
    }

    botAttack() {
        let targetCell;
        let randomIndex
        if (this.targets.length > 0) {
            targetCell = this.targets.shift();
        } else {
            do {
                randomIndex = Math.floor(Math.random() * 100);
                targetCell = this.board[randomIndex]
                console.log(targetCell)
            } while (!targetCell || targetCell.clicked);
        }

        return targetCell;
    }
    allSunk() {
        return this.ships.every(ship => ship.sunk());
    }

    restart() {
        for (let i = 0; i < this.board.length; i++) {
            this.board[i].ID = null;
            this.board[i].clicked = false;
        }
        this.targets = []
    }
}

const GameBoard = new Board();
const BotBoard = new Board();

console.log(GameBoard)


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resetGame: () => (/* binding */ resetGame),
/* harmony export */   setupGame: () => (/* binding */ setupGame)
/* harmony export */ });
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard.js */ "./src/Gameboard.js");




let userTurn = true;
let started = false;

async function setupGame() {
    await (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.gridChildren)(document.getElementById('human-grid'), 'human');
    _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.GameBoard.randomize();
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.displayShips)(_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.GameBoard.ships, document.getElementsByClassName('human-cell'));

    await (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.gridChildren)(document.getElementById('bot-grid'), 'bot');
    _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.BotBoard.randomize();

    const cells = document.getElementById('bot-grid').children;
    const sound = document.getElementById('shot-sound');
    const over = document.getElementById('over-sound')

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', function () {
            started = true
            if (!userTurn) return;

            if (!cells[i].classList.contains('shot') && !cells[i].classList.contains('fail') && !cells[i].classList.contains('borders')) {
                sound.play();
                let result = _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.BotBoard.receiveAttack(_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.BotBoard.board[i], 'bot');
                (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.updateCell)(_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.BotBoard.board[i], 'bot', result.hit);

                if (result.sunk) {
                    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.displayShipInBotBard)(result.ship)
                    ;(0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.markBorders)(result.ship, 'bot');
                }

                if (_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.BotBoard.allSunk()) {
                    over.play()
                    setTimeout(() => (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.winner)('you'), 1000);
                    return started = false;
                }

                userTurn = false;

                setTimeout(() => {
                    sound.play();
                    let cell = _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.GameBoard.botAttack();
                    let result = _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.GameBoard.receiveAttack(cell, 'human');
                    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.updateCell)(cell, 'human', result.hit);

                    if (result.sunk) {
                        (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.markBorders)(result.ship, 'human');
                    }

                    if (_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.GameBoard.allSunk()) {
                        over.play()
                        setTimeout(() => (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.winner)('bot'), 1000);
                        return started = false;
                    } else {
                        userTurn = true;
                    }
                }, 700);
            }
        });
    }
}

function resetGame() {
    const humanGrid = document.getElementById('human-grid');
    const botGrid = document.getElementById('bot-grid');

    while (humanGrid.firstChild) {
        humanGrid.removeChild(humanGrid.firstChild);
    }
    while (botGrid.firstChild) {
        botGrid.removeChild(botGrid.firstChild);
    }

    clearClasses(humanGrid);
    clearClasses(botGrid);

    _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.GameBoard.board = _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.GameBoard.createBoard();
    _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.BotBoard.board = _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.BotBoard.createBoard();

    _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.GameBoard.ships.forEach(ship => {
        ship.hits = 0;
        ship.start = [];
        ship.borders = [];
    });
    _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.BotBoard.ships.forEach(ship => {
        ship.hits = 0;
        ship.start = [];
        ship.borders = [];
    });

    userTurn = true;
    started = false;
}

function clearClasses(grid) {
    const cells = grid.children;
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove('shot', 'fail', 'borders');
    }
}

function reRandomise() {
    if (!started) {
        _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.GameBoard.restart();
        _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.GameBoard.randomize();
        const board = document.getElementById('human-grid');
        const cells = board.children;
        for (let i = 0; i < cells.length; i++) {
            console.log(cells[i].hasChildNodes() ? cells[i].firstChild : 'doesnt')
            cells[i].hasChildNodes() ? cells[i].removeChild(cells[i].firstChild) : null;
            while (cells[i].classList.length > 0) {
                cells[i].classList.remove(cells[i].classList.item(0));
            }

            cells[i].classList.add('cell', `human-cell`)
        }
        (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.displayShips)(_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.GameBoard.ships, board.children);
    }
    else {
        document.getElementById('randomise').style.cursor = 'not-allowed'
    }
}

setupGame();

document.getElementById('randomise').addEventListener('click', () => reRandomise())


document.getElementById('play').addEventListener('click', () => {
    resetGame();
    setupGame()
})



/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
    constructor(length, ID, borders) {
        this.length = length;
        this.hits = 0;
        this.ID = ID;
        this.borders = borders
    }

    hit() {
        this.hits++;
    }

    sunk() {
        return this.hits === this.length;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDhXQUE4VyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFlBQVksUUFBUSxNQUFNLFVBQVUsVUFBVSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxZQUFZLFlBQVksT0FBTyxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsWUFBWSxZQUFZLE9BQU8sS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsT0FBTyxN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Ozs7Ozs7Ozs7Ozs7QUN0SU07QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3Nhc3MvbWFpbi5zY3NzPzZhMTciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk0ODcyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4jaGVhZGVyLCAjbWFpbiwgI2Zvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNoZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4jaGVhZGVyICNoMSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICNoZWFkZXIgI2gxIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuI21haW4ge1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiNtYWluICNiYXR0ZWwtZmllbGRzIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgI21haW4gI2JhdHRlbC1maWVsZHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4tcmV2ZXJzZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgI21haW4gI2JhdHRlbC1maWVsZHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgICBoZWlnaHQ6IDM3MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG4jbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLm5hbWUge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG4jbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgI3JhbmRvbWlzZSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlZmZmO1xuICBjb2xvcjogIzI5NDg3MjtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTUwcHg7XG59XG4jbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgI3JhbmRvbWlzZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTFmNDg7XG4gIGNvbG9yOiAjZmZmO1xufVxuI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTIlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkIC5jZWxsIHtcbiAgd2lkdGg6IDEwJTtcbiAgaGVpZ2h0OiAxMCU7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiYSg0MywgMTc3LCAyNTQsIDAuNjYyNzQ1MDk4KTtcbiAgY3Vyc29yOiBtb3ZlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xufVxuI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkIC5ib3QtY2VsbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDE1NywgMTU3KTtcbn1cbiNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAuc2hpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAwO1xufVxuI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkICNzaGlwLTExLCAjbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgI3NoaXAtMTIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkICNzaGlwLTIsICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAjc2hpcC0yMiwgI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkICNzaGlwLTItYm90LCAjbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgI3NoaXAtMjItYm90IHtcbiAgd2lkdGg6IGNhbGMoMjAwJSArIDFweCk7XG4gIGhlaWdodDogMTAwJTtcbn1cbiNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAuc2hpcC0yLXJvdGF0ZSwgI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkIC5zaGlwLTIyLXJvdGF0ZSwgI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkIC5zaGlwLTItYm90LXJvdGF0ZSwgI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkIC5zaGlwLTIyLWJvdC1yb3RhdGUge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoMCwgLTEwMCUpO1xufVxuI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkICNzaGlwLTMsICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAjc2hpcC0zMywgI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkICNzaGlwLTMtYm90LCAjbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgI3NoaXAtMzMtYm90IHtcbiAgd2lkdGg6IGNhbGMoMzAwJSArIDNweCk7XG4gIGhlaWdodDogMTAwJTtcbn1cbiNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAuc2hpcC0zLXJvdGF0ZSwgI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkIC5zaGlwLTMzLXJvdGF0ZSwgI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkIC5zaGlwLTMtYm90LXJvdGF0ZSwgI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkIC5zaGlwLTMzLWJvdC1yb3RhdGUge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoMCwgLTEwMCUpO1xufVxuI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkICNzaGlwLTQsICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAjc2hpcC00LWJvdCB7XG4gIHdpZHRoOiBjYWxjKDQwMCUgKyA1cHgpO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4jbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgLnNoaXAtNC1yb3RhdGUsICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAuc2hpcC00LWJvdC1yb3RhdGUge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoMCwgLTEwMCUpO1xufVxuI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkICNzaGlwLTUsICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAjc2hpcC01LWJvdCB7XG4gIHdpZHRoOiBjYWxjKDUwMCUgKyA1cHgpO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4jbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgLnNoaXAtNS1yb3RhdGUsICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAuc2hpcC01LWJvdC1yb3RhdGUge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoMCwgLTEwMCUpO1xufVxuI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogOCU7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgICBoZWlnaHQ6IDM3MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB9XG59XG4jbWFpbiAjYmF0dGVsLWZpZWxkcyAjaHVtYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jbWFpbiAjd2lubmVyLWNhcmQtYnRuLCAjbWFpbiAjcGxheSB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDcwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDAsIDAsIDUxLCAwLjIpO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuI21haW4gI3BsYXk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZDg4O1xufVxuXG4ud2lubmVyLWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgcGFkZGluZzogMzBweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZDg4O1xuICB6LWluZGV4OiAxMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSkgc2NhbGUoMC4xKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdG9wOiAtNzAlO1xufVxuXG4jd2lubmVyLWNhcmQtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5NDg3MiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLndpbm5lci1jYXJkLXZpc2libGUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDEpO1xufVxuXG4jZm9vdGVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbiNmb290ZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNlMWVmZmY7XG59XG5cbi5zaG90IHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbmltYXRpb246IGhpdEVmZmVjdCAxcyBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBoaXRFZmZlY3Qge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApO1xuICB9XG4gIDI1JSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMTBweCByZ2JhKDI1NSwgMTY1LCAxMTcsIDAuMSksIDAgMCAxMHB4IDEwcHggcmdiYSgyNTUsIDE2NCwgNjcsIDAuMSksIDAgMCAxMHB4IDEwcHggcmdiYSgyNTUsIDE2OCwgMjcsIDAuMSksIDAgMCAxMHB4IDEwcHggcmdiYSgyNTUsIDIyMiwgOTAsIDAuMSk7XG4gIH1cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAyMHB4IHJnYmEoMjU1LCAxODksIDEwOCwgMC4yKSwgMCAwIDIwcHggMjBweCByZ2JhKDI1NSwgMTk2LCA2MCwgMC4yKSwgMCAwIDIwcHggMjBweCByZ2JhKDI1NSwgMTU4LCAxMywgMC4yKSwgMCAwIDIwcHggMjBweCByZ2JhKDI1NSwgMTc3LCAzMywgMC4yKTtcbiAgfVxuICA3NSUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAzMHB4IDMwcHggcmdiYSgxNjAsIDExMSwgNDYsIDAuMSksIDAgMCAzMHB4IDMwcHggcmdiYSgxMzUsIDkwLCAxNywgMC4xKSwgMCAwIDMwcHggMzBweCByZ2JhKDExMywgODUsIDEsIDAuMSksIDAgMCAzMHB4IDMwcHggcmdiYSg4NywgNjAsIDAsIDAuMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDQwcHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgfVxufVxuLnNob3Q6OmFmdGVyIHtcbiAgY29udGVudDogXCJ4XCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgei1pbmRleDogMjAwO1xufVxuXG4uZmFpbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDE5NCwgMjU1KSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbmltYXRpb246IGhpdEVmZmVjdCAxcyBmb3J3YXJkcztcbn1cblxuLmJvcmRlcnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMTIpICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Nhc3MvYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9sYXlvdXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvaGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2RldmljZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvbWFhaW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2FuaW1hdGlvbi5zY3NzXCJdLFwibmFtZXNc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QUwwQ1I7QUt2Q0k7RUFDSSx5QkFBQTtBTHlDUjs7QUtyQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FMd0NKOztBS3JDQTtFQUNJLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBTHdDSjs7QUtyQ0E7RUFDSSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtBTHdDSjs7QU12T0E7RUFDSSxhQUFBO0FOME9KO0FNeE9JO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FOME9SOztBTy9PQTtFQUNJLFVBQUE7RUFDQSw4Q0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBUGtQSjs7QU8vT0E7RUFDSTtJQUNJLG9DQUFBO0VQa1BOO0VPaFBFO0lBQ0ksdUtBQUE7RVBrUE47RU83T0U7SUFDSSx1S0FBQTtFUCtPTjtFTzFPRTtJQUNJLGdLQUFBO0VQNE9OO0VPdk9FO0lBQ0kscUNBQUE7RVB5T047QUFDRjtBT3RPQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSw4Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBUHdPSjs7QU9yT0E7RUFDSSwrQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBUHdPSjs7QU9yT0E7RUFDSSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FQd09KXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk0ODcyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBAaW5jbHVkZSBmbGV4KGNvbHVtbiwgc3BhY2UtYmV0d2Vlbik7XFxufVxcblwiLFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk0ODcyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jaGVhZGVyLCAjbWFpbiwgI2Zvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jaGVhZGVyICNoMSB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XFxuICAjaGVhZGVyICNoMSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxufVxcblxcbiNtYWluIHtcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiNtYWluICNiYXR0ZWwtZmllbGRzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHtcXG4gICNtYWluICNiYXR0ZWwtZmllbGRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgI21haW4gI2JhdHRlbC1maWVsZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1OTlweCkge1xcbiAgI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogMzcwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG59XFxuI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5uYW1lIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG4jbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgI3JhbmRvbWlzZSB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlZmZmO1xcbiAgY29sb3I6ICMyOTQ4NzI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTUwcHg7XFxufVxcbiNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAjcmFuZG9taXNlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTFmNDg7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA5MiU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkIC5jZWxsIHtcXG4gIHdpZHRoOiAxMCU7XFxuICBoZWlnaHQ6IDEwJTtcXG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiYSg0MywgMTc3LCAyNTQsIDAuNjYyNzQ1MDk4KTtcXG4gIGN1cnNvcjogbW92ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXG59XFxuI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkIC5ib3QtY2VsbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAxNTcsIDE1Nyk7XFxufVxcbiNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAuc2hpcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG4jbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgI3NoaXAtMTEsICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAjc2hpcC0xMiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkICNzaGlwLTIsICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAjc2hpcC0yMiwgI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkICNzaGlwLTItYm90LCAjbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgI3NoaXAtMjItYm90IHtcXG4gIHdpZHRoOiBjYWxjKDIwMCUgKyAxcHgpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgLnNoaXAtMi1yb3RhdGUsICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAuc2hpcC0yMi1yb3RhdGUsICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAuc2hpcC0yLWJvdC1yb3RhdGUsICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAuc2hpcC0yMi1ib3Qtcm90YXRlIHtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoMCwgLTEwMCUpO1xcbn1cXG4jbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgI3NoaXAtMywgI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkICNzaGlwLTMzLCAjbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgI3NoaXAtMy1ib3QsICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAjc2hpcC0zMy1ib3Qge1xcbiAgd2lkdGg6IGNhbGMoMzAwJSArIDNweCk7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAuc2hpcC0zLXJvdGF0ZSwgI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkIC5zaGlwLTMzLXJvdGF0ZSwgI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkIC5zaGlwLTMtYm90LXJvdGF0ZSwgI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkIC5zaGlwLTMzLWJvdC1yb3RhdGUge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZSgwLCAtMTAwJSk7XFxufVxcbiNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAjc2hpcC00LCAjbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgI3NoaXAtNC1ib3Qge1xcbiAgd2lkdGg6IGNhbGMoNDAwJSArIDVweCk7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAuc2hpcC00LXJvdGF0ZSwgI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkIC5zaGlwLTQtYm90LXJvdGF0ZSB7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKDAsIC0xMDAlKTtcXG59XFxuI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkICNzaGlwLTUsICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAjc2hpcC01LWJvdCB7XFxuICB3aWR0aDogY2FsYyg1MDAlICsgNXB4KTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkIC5zaGlwLTUtcm90YXRlLCAjbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgLnNoaXAtNS1ib3Qtcm90YXRlIHtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoMCwgLTEwMCUpO1xcbn1cXG4jbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDglO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogMzcwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG59XFxuI21haW4gI2JhdHRlbC1maWVsZHMgI2h1bWFuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuI21haW4gI3dpbm5lci1jYXJkLWJ0biwgI21haW4gI3BsYXkge1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkQ3MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDAsIDAsIDUxLCAwLjIpO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuI21haW4gI3BsYXk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWQ4ODtcXG59XFxuXFxuLndpbm5lci1jYXJkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgcGFkZGluZzogMzBweCAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWQ4ODtcXG4gIHotaW5kZXg6IDEwMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpIHNjYWxlKDAuMSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRvcDogLTcwJTtcXG59XFxuXFxuI3dpbm5lci1jYXJkLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk0ODcyICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi53aW5uZXItY2FyZC12aXNpYmxlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgxKTtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4jZm9vdGVyIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNlMWVmZmY7XFxufVxcblxcbi5zaG90IHtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LWZhbWlseTogXFxcIkNvdXJpZXIgTmV3XFxcIiwgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFuaW1hdGlvbjogaGl0RWZmZWN0IDFzIGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGhpdEVmZmVjdCB7XFxuICAwJSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDEwcHggcmdiYSgyNTUsIDE2NSwgMTE3LCAwLjEpLCAwIDAgMTBweCAxMHB4IHJnYmEoMjU1LCAxNjQsIDY3LCAwLjEpLCAwIDAgMTBweCAxMHB4IHJnYmEoMjU1LCAxNjgsIDI3LCAwLjEpLCAwIDAgMTBweCAxMHB4IHJnYmEoMjU1LCAyMjIsIDkwLCAwLjEpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggMjBweCByZ2JhKDI1NSwgMTg5LCAxMDgsIDAuMiksIDAgMCAyMHB4IDIwcHggcmdiYSgyNTUsIDE5NiwgNjAsIDAuMiksIDAgMCAyMHB4IDIwcHggcmdiYSgyNTUsIDE1OCwgMTMsIDAuMiksIDAgMCAyMHB4IDIwcHggcmdiYSgyNTUsIDE3NywgMzMsIDAuMik7XFxuICB9XFxuICA3NSUge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMzBweCAzMHB4IHJnYmEoMTYwLCAxMTEsIDQ2LCAwLjEpLCAwIDAgMzBweCAzMHB4IHJnYmEoMTM1LCA5MCwgMTcsIDAuMSksIDAgMCAzMHB4IDMwcHggcmdiYSgxMTMsIDg1LCAxLCAwLjEpLCAwIDAgMzBweCAzMHB4IHJnYmEoODcsIDYwLCAwLCAwLjEpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoMCwgMCwgMCwgMCk7XFxuICB9XFxufVxcbi5zaG90OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwieFxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDb3VyaWVyIE5ld1xcXCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgei1pbmRleDogMjAwO1xcbn1cXG5cXG4uZmFpbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIwLCAxOTQsIDI1NSkgIWltcG9ydGFudDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ291cmllciBOZXdcXFwiLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYW5pbWF0aW9uOiBoaXRFZmZlY3QgMXMgZm9yd2FyZHM7XFxufVxcblxcbi5ib3JkZXJzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAxMikgIWltcG9ydGFudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVwiLFwiQG1peGluIGZsZXgoJGZsb3csICRqdXN0aWZ5KSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogJGZsb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XFxufVxcblwiLFwiI2hlYWRlciwgI21haW4sICNmb290ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgQGluY2x1ZGUgZmxleChyb3csIGNlbnRlcik7XFxufVxcblwiLFwiQGltcG9ydCAnZGV2aWNlcyc7XFxuXFxuI2hlYWRlciB7XFxuICAgIEBpbmNsdWRlIGZsZXgocm93LCBjZW50ZXIpO1xcblxcbiAgICAjaDEge1xcbiAgICAgICAgQGluY2x1ZGUgZGV2aWNlKDU5OXB4KSB7ICAgXFxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgIH1cXG59XFxuXCIsXCJAbWl4aW4gZGV2aWNlKCRzaXplKSB7XFxuICAgIEBpZiRzaXplID09NTk5cHgge1xcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XFxuICAgICAgICAgICAgQGNvbnRlbnQ7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgQGVsc2UgaWYgJHNpemUgPT02MDBweCB7XFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgICAgICBAY29udGVudDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBAZWxzZSBpZiAkc2l6ZSA9PTkwMHB4IHtcXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xcbiAgICAgICAgICAgIEBjb250ZW50O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBlbHNlIGlmICRzaXplID09MTIwMHB4IHtcXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgICAgICAgICBAY29udGVudDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBAZWxzZSBpZiAkc2l6ZSA9PTE4MDBweCB7XFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTgwMHB4KSB7XFxuICAgICAgICAgICAgQGNvbnRlbnQ7XFxuICAgICAgICB9XFxuICAgIH1cXG59XCIsXCJAaW1wb3J0ICdkZXZpY2VzJztcXG4jbWFpbiB7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgQGluY2x1ZGUgZmxleChjb2x1bW4sIGNlbnRlcik7XFxuXFxuICAgICNiYXR0ZWwtZmllbGRzIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgQGluY2x1ZGUgZGV2aWNlKDU5OXB4KSB7XFxuICAgICAgICAgICAgQGluY2x1ZGUgZmxleChjb2x1bW4tcmV2ZXJzZSwgc3BhY2UtYXJvdW5kKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBpbmNsdWRlIGRldmljZSg2MDBweCkge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIGZsZXgocm93LCBzcGFjZS1hcm91bmQpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmZpZWxkIHtcXG4gICAgICAgICAgICBAaW5jbHVkZSBkZXZpY2UoNTk5cHgpIHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzUwcHg7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzcwcHg7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLm5hbWUge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICNyYW5kb21pc2Uge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZWZmZjtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyOTQ4NzI7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICBib3R0b206IC01MHB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAjcmFuZG9taXNlOmhvdmVye1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExZjQ4O1xcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgICAgICB9XFxuXFxuXFxuICAgICAgICAgICAgLmdyaWQge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MiU7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgZmxleChyb3cgd3JhcCwgY2VudGVyKTtcXG5cXG4gICAgICAgICAgICAgICAgLmNlbGwge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJS8xMCk7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJS8xMCk7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICMyYmIxZmVhOTtcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogbW92ZTtcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuYm90LWNlbGw6aG92ZXJ7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAxNTcsIDE1Nyk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLnNoaXAge1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAjc2hpcC0xMSwgI3NoaXAtMTIge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgI3NoaXAtMiwgI3NoaXAtMjIsICAjc2hpcC0yLWJvdCwgI3NoaXAtMjItYm90IHtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDIwMCUgKyAxcHgpO1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5zaGlwLTItcm90YXRlLCAuc2hpcC0yMi1yb3RhdGUsIC5zaGlwLTItYm90LXJvdGF0ZSwgLnNoaXAtMjItYm90LXJvdGF0ZSB7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKDAsIC0xMDAlKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAjc2hpcC0zLCAjc2hpcC0zMywgI3NoaXAtMy1ib3QsICNzaGlwLTMzLWJvdCB7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygzMDAlICsgM3B4KTtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuc2hpcC0zLXJvdGF0ZSwgLnNoaXAtMzMtcm90YXRlLCAuc2hpcC0zLWJvdC1yb3RhdGUsIC5zaGlwLTMzLWJvdC1yb3RhdGUge1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZSgwLCAtMTAwJSk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgI3NoaXAtNCwgI3NoaXAtNC1ib3Qge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoNDAwJSArIDVweCk7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLnNoaXAtNC1yb3RhdGUsIC5zaGlwLTQtYm90LXJvdGF0ZSB7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKDAsIC0xMDAlKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAjc2hpcC01LCAjc2hpcC01LWJvdCB7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyg1MDAlICsgNXB4KTtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuc2hpcC01LXJvdGF0ZSwgLnNoaXAtNS1ib3Qtcm90YXRlIHtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoMCwgLTEwMCUpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHAge1xcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBmbGV4KHJvdywgY2VudGVyKTtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4JTtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIEBpbmNsdWRlIGRldmljZSg2MDBweCkge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNzBweDtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgZmxleChjb2x1bW4sIHNwYWNlLWFyb3VuZCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2h1bWFue1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAjd2lubmVyLWNhcmQtYnRuLCAjcGxheSB7XFxuICAgICAgICB3aWR0aDogMTIwcHg7XFxuICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDcwMDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4ICMwMDMzO1xcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgfVxcblxcbiAgICAjcGxheTpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVkODg7XFxuICAgIH1cXG59XFxuXFxuLndpbm5lci1jYXJke1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMzBweCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZDg4O1xcbiAgICB6LWluZGV4OiAxMDAwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSkgc2NhbGUoLjEpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UtaW4tb3V0O1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHRvcDogLTcwJTtcXG59XFxuXFxuI3dpbm5lci1jYXJkLWJ0bntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5NDg3MiAhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcXG59XFxuXFxuLndpbm5lci1jYXJkLXZpc2libGV7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGUgO1xcbiAgICB0b3A6IDUwJSA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgxKSA7XFxufVxcblwiLFwiI2Zvb3RlciB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIGEge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgY29sb3I6ICNlMWVmZmY7XFxuICAgIH1cXG59XFxuXCIsXCIuc2hvdCB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFuaW1hdGlvbjogaGl0RWZmZWN0IDFzIGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGhpdEVmZmVjdCB7XFxuICAgIDAlIHtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgfVxcbiAgICAyNSUge1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggMTBweCByZ2JhKDI1NSwgMTY1LCAxMTcsIDAuMSksIFxcbiAgICAgICAgICAgICAgICAgICAgMCAwIDEwcHggMTBweCByZ2JhKDI1NSwgMTY0LCA2NywgMC4xKSwgXFxuICAgICAgICAgICAgICAgICAgICAwIDAgMTBweCAxMHB4IHJnYmEoMjU1LCAxNjgsIDI3LCAwLjEpLCBcXG4gICAgICAgICAgICAgICAgICAgIDAgMCAxMHB4IDEwcHggcmdiYSgyNTUsIDIyMiwgOTAsIDAuMSk7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDIwcHggcmdiYSgyNTUsIDE4OSwgMTA4LCAwLjIpLCBcXG4gICAgICAgICAgICAgICAgICAgIDAgMCAyMHB4IDIwcHggcmdiYSgyNTUsIDE5NiwgNjAsIDAuMiksIFxcbiAgICAgICAgICAgICAgICAgICAgMCAwIDIwcHggMjBweCByZ2JhKDI1NSwgMTU4LCAxMywgMC4yKSwgXFxuICAgICAgICAgICAgICAgICAgICAwIDAgMjBweCAyMHB4IHJnYmEoMjU1LCAxNzcsIDMzLCAwLjIpO1xcbiAgICB9XFxuICAgIDc1JSB7XFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMzBweCAzMHB4IHJnYmEoMTYwLCAxMTEsIDQ2LCAwLjEpLCBcXG4gICAgICAgICAgICAgICAgICAgIDAgMCAzMHB4IDMwcHggcmdiYSgxMzUsIDkwLCAxNywgMC4xKSwgXFxuICAgICAgICAgICAgICAgICAgICAwIDAgMzBweCAzMHB4IHJnYmEoMTEzLCA4NSwgMSwgMC4xKSwgXFxuICAgICAgICAgICAgICAgICAgICAwIDAgMzBweCAzMHB4IHJnYmEoODcsIDYwLCAwLCAwLjEpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDQwcHggcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgfVxcbn1cXG5cXG4uc2hvdDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAneCc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIHotaW5kZXg6IDIwMDtcXG59XFxuXFxuLmZhaWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIwLCAxOTQsIDI1NSkgIWltcG9ydGFudDtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFuaW1hdGlvbjogaGl0RWZmZWN0IDFzIGZvcndhcmRzO1xcbn1cXG5cXG4uYm9yZGVycyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAxMikgIWltcG9ydGFudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IEJvdEJvYXJkIH0gZnJvbSAnLi9HYW1lYm9hcmQnO1xuaW1wb3J0IHsgcmVzZXRHYW1lLCBzZXR1cEdhbWUgfSBmcm9tICcuJztcbmltcG9ydCAnLi9zYXNzL21haW4uc2Nzcyc7XG5cbmNvbnN0IHNoaXBzUGljcyA9IFtcbiAgICBcIi4vYXNzZXRzL2NhcnJpZXIuc3ZnXCIsXG4gICAgXCIuL2Fzc2V0cy9kZXN0cm95ZXIuc3ZnXCIsXG4gICAgXCIuL2Fzc2V0cy9zdWJtYXJpbmUuc3ZnXCIsXG4gICAgXCIuL2Fzc2V0cy9zdWJtYXJpbmUuc3ZnXCIsXG4gICAgXCIuL2Fzc2V0cy9wYXRyb2wuc3ZnXCIsXG4gICAgXCIuL2Fzc2V0cy9wYXRyb2wuc3ZnXCJcbl1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdyaWRDaGlsZHJlbihwYXJlbnQsIHBsYXllcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnLCBgJHtwbGF5ZXJ9LWNlbGxgKTtcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC54ID0gaTtcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC55ID0gajtcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0QXR0cnMoZWxlbSwgYXR0cnMsIHZhbHVlcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoYXR0cnNbaV0sIHZhbHVlc1tpXSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVNoaXBzKHNoaXBzLCBib2FyZENlbGxzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzaGlwRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBzaGlwRWxlbS5zcmMgPSBzaGlwc1BpY3NbaV1cbiAgICAgICAgYm9hcmRDZWxsc1tzaGlwc1tpXS5zdGFydFswXV0uYXBwZW5kQ2hpbGQoc2hpcEVsZW0pO1xuICAgICAgICBzZXRBdHRycyhzaGlwRWxlbSwgWydjbGFzcycsICdkcmFnZ2FibGUnLCAnaWQnXSwgWydzaGlwJywgJ3RydWUnLCBgc2hpcC0ke3NoaXBzW2ldLklEfWBdKTtcblxuICAgICAgICBpZiAoc2hpcHNbaV0uc3RhcnRbMV0gLSBzaGlwc1tpXS5zdGFydFswXSA9PT0gMTApIHtcbiAgICAgICAgICAgIHNoaXBFbGVtLmNsYXNzTGlzdC5hZGQoYHNoaXAtJHtzaGlwc1tpXS5JRH0tcm90YXRlYCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVNoaXBJbkJvdEJhcmQoc2hpcCkge1xuICAgIGNvbnN0IHNoaXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc2hpcC5sZW5ndGggPT09IDUgPyBzaGlwRWxlbWVudC5zcmMgPSBzaGlwc1BpY3NbMF0gOlxuICAgICAgICBzaGlwLmxlbmd0aCA9PT0gNCA/IHNoaXBFbGVtZW50LnNyYyA9IHNoaXBzUGljc1sxXSA6XG4gICAgICAgICAgICBzaGlwLmxlbmd0aCA9PT0gMyA/IHNoaXBFbGVtZW50LnNyYyA9IHNoaXBzUGljc1syXSA6XG4gICAgICAgICAgICAgICAgc2hpcEVsZW1lbnQuc3JjID0gc2hpcHNQaWNzWzRdO1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvdC1ncmlkJyk7XG4gICAgY29uc3QgYm9hcmRDZWxscyA9IGJvYXJkLmNoaWxkcmVuXG4gICAgYm9hcmRDZWxsc1tzaGlwLnN0YXJ0WzBdXS5hcHBlbmRDaGlsZChzaGlwRWxlbWVudCk7XG4gICAgc2V0QXR0cnMoc2hpcEVsZW1lbnQsIFsnY2xhc3MnLCAnZHJhZ2dhYmxlJywgJ2lkJ10sIFsnc2hpcCcsICd0cnVlJywgYHNoaXAtJHtzaGlwLklEfS1ib3RgXSk7XG5cbiAgICBpZiAoc2hpcC5zdGFydFsxXSAtIHNoaXAuc3RhcnRbMF0gPT09IDEwKSB7XG4gICAgICAgIHNoaXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoYHNoaXAtJHtzaGlwLklEfS1ib3Qtcm90YXRlYCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ2VsbChjZWxsLCBwbGF5ZXIsIGhpdCkge1xuICAgIGxldCBkb21DZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cGxheWVyfS1ncmlkIC4ke3BsYXllcn0tY2VsbFtkYXRhLXg9XCIke2NlbGwuY29yZGluYXRlc1swXX1cIl1bZGF0YS15PVwiJHtjZWxsLmNvcmRpbmF0ZXNbMV19XCJdYCk7XG4gICAgaWYgKGhpdCkge1xuICAgICAgICBkb21DZWxsLmNsYXNzTGlzdC5hZGQoJ3Nob3QnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb21DZWxsLmNsYXNzTGlzdC5hZGQoJ2ZhaWwnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXJrQm9yZGVycyhzaGlwLCBwbGF5ZXIpIHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGxheWVyfS1ncmlkYCk7XG4gICAgc2hpcC5ib3JkZXJzLmZvckVhY2goYm9yZGVyID0+IHtcbiAgICAgICAgY29uc3QgYm9yZGVyQ2VsbCA9IGdyaWQuY2hpbGRyZW5bYm9yZGVyXVxuICAgICAgICBjb25zb2xlLmxvZyhib3JkZXIsIGJvcmRlckNlbGwpXG4gICAgICAgIGJvcmRlckNlbGwuY2xhc3NMaXN0LmFkZCgnYm9yZGVycycpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2lubmVyKHdpbm5lcikge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lubmVyLWNhcmQnKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5uZXItaDEnKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lubmVyLWNhcmQtYnRuJyk7XG5cbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3dpbm5lci1jYXJkLXZpc2libGUnKVxuXG4gICAgaDEudGV4dENvbnRlbnQgPSBgJHt3aW5uZXJ9IHdvbiFgO1xuXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByZXNldEdhbWUoKTtcbiAgICAgICAgc2V0dXBHYW1lKCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5uZXItY2FyZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3dpbm5lci1jYXJkLXZpc2libGUnKVxuICAgIH0pXG59XG5cbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmNsYXNzIENlbGwge1xuICAgIGNvbnN0cnVjdG9yKGNvcmRpbmF0ZXMsIGNsaWNrZWQgPSBmYWxzZSwgSUQgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuY29yZGluYXRlcyA9IGNvcmRpbmF0ZXM7XG4gICAgICAgIHRoaXMuY2xpY2tlZCA9IGNsaWNrZWQ7XG4gICAgICAgIHRoaXMuSUQgPSBJRDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSB0aGlzLmNyZWF0ZUJvYXJkKCk7XG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXG4gICAgICAgICAgICBuZXcgU2hpcCg1LCA1KSxcbiAgICAgICAgICAgIG5ldyBTaGlwKDQsIDQpLFxuICAgICAgICAgICAgbmV3IFNoaXAoMywgMyksXG4gICAgICAgICAgICBuZXcgU2hpcCgzLCAzMyksXG4gICAgICAgICAgICBuZXcgU2hpcCgyLCAyKSxcbiAgICAgICAgICAgIG5ldyBTaGlwKDIsIDIyKSxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy50YXJnZXRzID0gW107XG4gICAgfVxuXG4gICAgY3JlYXRlQm9hcmQoKSB7XG4gICAgICAgIGxldCBib2FyZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGJvYXJkLnB1c2gobmV3IENlbGwoW2ksIGpdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH1cblxuICAgIHBsYWNlU2hpcChwb3NpdGlvbiwgbGVuZ3RoLCBkaXJlY3Rpb24sIGlkKSB7XG4gICAgICAgIGxldCBiYXNlQ2VsbCA9IHRoaXMuYm9hcmQuZmluZChjZWxsID0+IGNlbGwuY29yZGluYXRlc1swXSA9PT0gcG9zaXRpb25bMF0gJiYgY2VsbC5jb3JkaW5hdGVzWzFdID09PSBwb3NpdGlvblsxXSk7XG4gICAgICAgIGxldCBzdGFydEluZGV4ID0gdGhpcy5ib2FyZC5pbmRleE9mKGJhc2VDZWxsKTtcbiAgICAgICAgbGV0IHBhdGhSZXN1bHQgPSB0aGlzLmNoZWNrQ2VsbHMoc3RhcnRJbmRleCwgbGVuZ3RoLCBkaXJlY3Rpb24sIGlkKTtcblxuICAgICAgICBpZiAocGF0aFJlc3VsdCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgcGF0aFJlc3VsdFswXS5mb3JFYWNoKGluZGV4ID0+IHRoaXMuYWRkKHRoaXMuYm9hcmRbaW5kZXhdLCBpZCkpO1xuICAgICAgICAgICAgdGhpcy5hZGRCb3JkZXJzRm9yU2hpcChwYXRoUmVzdWx0WzBdLCBpZCk7XG4gICAgICAgICAgICByZXR1cm4gcGF0aFJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY2hlY2tDZWxscyhzdGFydEluZGV4LCBsZW5ndGgsIGRpcmVjdGlvbiwgaWQpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3J6bnRsJykge1xuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gdGhpcy5ib2FyZFtzdGFydEluZGV4ICsgaV07XG4gICAgICAgICAgICAgICAgaWYgKCFjZWxsIHx8IGNlbGwuSUQgIT09IG51bGwgfHwgY2VsbC5jb3JkaW5hdGVzWzFdICsgbGVuZ3RoID4gMTApIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIHBhdGgucHVzaChzdGFydEluZGV4ICsgaSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZydGNsJykge1xuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gdGhpcy5ib2FyZFtzdGFydEluZGV4ICsgKGkgKiAxMCldO1xuICAgICAgICAgICAgICAgIGlmICghY2VsbCB8fCBjZWxsLklEICE9PSBudWxsIHx8IGNlbGwuY29yZGluYXRlc1swXSArIGxlbmd0aCA+IDEwKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwYXRoLnB1c2goc3RhcnRJbmRleCArIChpICogMTApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXRoLmxlbmd0aCA9PT0gbGVuZ3RoID8gW3BhdGhdIDogdHJ1ZTtcbiAgICB9XG5cbiAgICBhZGRCb3JkZXJzRm9yU2hpcChzaGlwQ2VsbHMsIGlkKSB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLnNoaXBzLmZpbmQoc2hpcCA9PiBzaGlwLklEID09IGlkKVxuICAgICAgICBjb25zdCBib3JkZXJzID0gW107XG4gICAgICAgIHNoaXBDZWxscy5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmJvYXJkW2luZGV4XTtcbiAgICAgICAgICAgIHRoaXMuYWRkQm9yZGVycyhib3JkZXJzLCBjZWxsLmNvcmRpbmF0ZXMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB1bmlxdWVCb3JkZXJzID0gQXJyYXkuZnJvbShuZXcgU2V0KGJvcmRlcnMpKS5maWx0ZXIoaW5kZXggPT4gIXNoaXBDZWxscy5pbmNsdWRlcyhpbmRleCkpO1xuICAgICAgICB1bmlxdWVCb3JkZXJzLmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICAgICAgbGV0IGNlbGwgPSB0aGlzLmJvYXJkW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChjZWxsLklEID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5JRCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNoaXAuYm9yZGVycyA9IHVuaXF1ZUJvcmRlcnNcbiAgICB9XG5cbiAgICBhZGRCb3JkZXJzKGJvcmRlcnMsIGNvcmRpbmF0ZXMpIHtcbiAgICAgICAgY29uc3QgW3gsIHldID0gY29yZGluYXRlcztcblxuICAgICAgICBjb25zdCBhZGphY2VudENlbGxzID0gW1xuICAgICAgICAgICAgW3ggLSAxLCB5IC0gMV0sIFt4IC0gMSwgeV0sIFt4IC0gMSwgeSArIDFdLFxuICAgICAgICAgICAgW3gsIHkgLSAxXSwgW3gsIHkgKyAxXSxcbiAgICAgICAgICAgIFt4ICsgMSwgeSAtIDFdLCBbeCArIDEsIHldLCBbeCArIDEsIHkgKyAxXVxuICAgICAgICBdO1xuXG4gICAgICAgIGFkamFjZW50Q2VsbHMuZm9yRWFjaCgoW2FkalgsIGFkalldKSA9PiB7XG4gICAgICAgICAgICBpZiAoYWRqWCA+PSAwICYmIGFkalggPCAxMCAmJiBhZGpZID49IDAgJiYgYWRqWSA8IDEwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFkakNlbGwgPSB0aGlzLmJvYXJkLmZpbmQoY2VsbCA9PiBjZWxsLmNvcmRpbmF0ZXNbMF0gPT09IGFkalggJiYgY2VsbC5jb3JkaW5hdGVzWzFdID09PSBhZGpZKTtcbiAgICAgICAgICAgICAgICBpZiAoYWRqQ2VsbCkge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXJzLnB1c2godGhpcy5ib2FyZC5pbmRleE9mKGFkakNlbGwpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZChjZWxsLCB2YWx1ZSkge1xuICAgICAgICBpZiAoY2VsbCAmJiBjZWxsLklEID09PSBudWxsKSB7XG4gICAgICAgICAgICBjZWxsLklEID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByYW5kb21pemUoKSB7XG4gICAgICAgIHRoaXMuc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHdoaWxlICghcGxhY2VkKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tQ2VsbCA9IHRoaXMuYm9hcmRbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgICAgIGxldCBkaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gJ2hvcnpudGwnIDogJ3ZydGNsJztcbiAgICAgICAgICAgICAgICBwbGFjZWQgPSB0aGlzLnBsYWNlU2hpcChyYW5kb21DZWxsLmNvcmRpbmF0ZXMsIHNoaXAubGVuZ3RoLCBkaXJlY3Rpb24sIHNoaXAuSUQpO1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZWQpIHNoaXAuc3RhcnQgPSBwbGFjZWRbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soY2VsbCkge1xuICAgICAgICBpZiAoY2VsbC5jbGlja2VkKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKGNlbGwuY2xpY2tlZClcbiAgICAgICAgY2VsbC5jbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coY2VsbC5jbGlja2VkKVxuXG5cbiAgICAgICAgaWYgKGNlbGwuSUQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBoaXRTaGlwID0gdGhpcy5zaGlwcy5maW5kKHNoaXAgPT4gc2hpcC5JRCA9PT0gY2VsbC5JRCk7XG4gICAgICAgICAgICBpZiAoaGl0U2hpcCkge1xuICAgICAgICAgICAgICAgIGhpdFNoaXAuaGl0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTdXJyb3VuZGluZ0NlbGxzVG9UYXJnZXRzKGNlbGwpXG4gICAgICAgICAgICAgICAgaWYgKGhpdFNoaXAuc3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBoaXRTaGlwLmJvcmRlcnMuZm9yRWFjaChib3JkZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtib3JkZXJdLmNsaWNrZWQgPSB0cnVlXG5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgaGl0OiB0cnVlLCBzdW5rOiB0cnVlLCBzaGlwOiBoaXRTaGlwIH07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaGl0OiB0cnVlLCBzdW5rOiBmYWxzZSwgc2hpcDogaGl0U2hpcCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgaGl0OiBmYWxzZSwgc3VuazogZmFsc2UsIHNoaXA6IG51bGwgfTtcbiAgICB9XG5cbiAgICBhZGRTdXJyb3VuZGluZ0NlbGxzVG9UYXJnZXRzKGNlbGwpIHtcbiAgICAgICAgY29uc3QgW3gsIHldID0gY2VsbC5jb3JkaW5hdGVzO1xuICAgICAgICBjb25zdCBzdXJyb3VuZGluZ0NlbGxzID0gW1xuICAgICAgICAgICAgW3ggLSAxLCB5XSwgW3ggKyAxLCB5XSwgW3gsIHkgLSAxXSwgW3gsIHkgKyAxXVxuICAgICAgICBdO1xuXG4gICAgICAgIHN1cnJvdW5kaW5nQ2VsbHMuZm9yRWFjaCgoW2FkalgsIGFkalldKSA9PiB7XG4gICAgICAgICAgICBpZiAoYWRqWCA+PSAwICYmIGFkalggPCAxMCAmJiBhZGpZID49IDAgJiYgYWRqWSA8IDEwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWRqQ2VsbCA9IHRoaXMuYm9hcmQuZmluZChjZWxsID0+IGNlbGwuY29yZGluYXRlc1swXSA9PT0gYWRqWCAmJiBjZWxsLmNvcmRpbmF0ZXNbMV0gPT09IGFkalkpO1xuICAgICAgICAgICAgICAgIGlmIChhZGpDZWxsICYmICFhZGpDZWxsLmNsaWNrZWQgJiYgYWRqQ2VsbC5JRCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldHMucHVzaChhZGpDZWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJvdEF0dGFjaygpIHtcbiAgICAgICAgbGV0IHRhcmdldENlbGw7XG4gICAgICAgIGxldCByYW5kb21JbmRleFxuICAgICAgICBpZiAodGhpcy50YXJnZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRhcmdldENlbGwgPSB0aGlzLnRhcmdldHMuc2hpZnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Q2VsbCA9IHRoaXMuYm9hcmRbcmFuZG9tSW5kZXhdXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0Q2VsbClcbiAgICAgICAgICAgIH0gd2hpbGUgKCF0YXJnZXRDZWxsIHx8IHRhcmdldENlbGwuY2xpY2tlZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0Q2VsbDtcbiAgICB9XG4gICAgYWxsU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hpcHMuZXZlcnkoc2hpcCA9PiBzaGlwLnN1bmsoKSk7XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW2ldLklEID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbaV0uY2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGFyZ2V0cyA9IFtdXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgR2FtZUJvYXJkID0gbmV3IEJvYXJkKCk7XG5leHBvcnQgY29uc3QgQm90Qm9hcmQgPSBuZXcgQm9hcmQoKTtcblxuY29uc29sZS5sb2coR2FtZUJvYXJkKVxuIiwiaW1wb3J0ICcuL0RPTS5qcyc7XG5pbXBvcnQgeyBncmlkQ2hpbGRyZW4sIGRpc3BsYXlTaGlwcywgdXBkYXRlQ2VsbCwgbWFya0JvcmRlcnMsIGRpc3BsYXlTaGlwSW5Cb3RCYXJkLCB3aW5uZXIgfSBmcm9tICcuL0RPTS5qcyc7XG5pbXBvcnQgeyBCb3RCb2FyZCwgR2FtZUJvYXJkIH0gZnJvbSAnLi9HYW1lYm9hcmQuanMnO1xuXG5sZXQgdXNlclR1cm4gPSB0cnVlO1xubGV0IHN0YXJ0ZWQgPSBmYWxzZTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldHVwR2FtZSgpIHtcbiAgICBhd2FpdCBncmlkQ2hpbGRyZW4oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWFuLWdyaWQnKSwgJ2h1bWFuJyk7XG4gICAgR2FtZUJvYXJkLnJhbmRvbWl6ZSgpO1xuICAgIGRpc3BsYXlTaGlwcyhHYW1lQm9hcmQuc2hpcHMsIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2h1bWFuLWNlbGwnKSk7XG5cbiAgICBhd2FpdCBncmlkQ2hpbGRyZW4oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvdC1ncmlkJyksICdib3QnKTtcbiAgICBCb3RCb2FyZC5yYW5kb21pemUoKTtcblxuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvdC1ncmlkJykuY2hpbGRyZW47XG4gICAgY29uc3Qgc291bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvdC1zb3VuZCcpO1xuICAgIGNvbnN0IG92ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Zlci1zb3VuZCcpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IHRydWVcbiAgICAgICAgICAgIGlmICghdXNlclR1cm4pIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKCFjZWxsc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3QnKSAmJiAhY2VsbHNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmYWlsJykgJiYgIWNlbGxzW2ldLmNsYXNzTGlzdC5jb250YWlucygnYm9yZGVycycpKSB7XG4gICAgICAgICAgICAgICAgc291bmQucGxheSgpO1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBCb3RCb2FyZC5yZWNlaXZlQXR0YWNrKEJvdEJvYXJkLmJvYXJkW2ldLCAnYm90Jyk7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ2VsbChCb3RCb2FyZC5ib2FyZFtpXSwgJ2JvdCcsIHJlc3VsdC5oaXQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdW5rKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlTaGlwSW5Cb3RCYXJkKHJlc3VsdC5zaGlwKVxuICAgICAgICAgICAgICAgICAgICBtYXJrQm9yZGVycyhyZXN1bHQuc2hpcCwgJ2JvdCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChCb3RCb2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3Zlci5wbGF5KClcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB3aW5uZXIoJ3lvdScpLCAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1c2VyVHVybiA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBHYW1lQm9hcmQuYm90QXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBHYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhjZWxsLCAnaHVtYW4nKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ2VsbChjZWxsLCAnaHVtYW4nLCByZXN1bHQuaGl0KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN1bmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtCb3JkZXJzKHJlc3VsdC5zaGlwLCAnaHVtYW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChHYW1lQm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyLnBsYXkoKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB3aW5uZXIoJ2JvdCcpLCAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGFydGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyVHVybiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCA3MDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEdhbWUoKSB7XG4gICAgY29uc3QgaHVtYW5HcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWFuLWdyaWQnKTtcbiAgICBjb25zdCBib3RHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvdC1ncmlkJyk7XG5cbiAgICB3aGlsZSAoaHVtYW5HcmlkLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgaHVtYW5HcmlkLnJlbW92ZUNoaWxkKGh1bWFuR3JpZC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgd2hpbGUgKGJvdEdyaWQuZmlyc3RDaGlsZCkge1xuICAgICAgICBib3RHcmlkLnJlbW92ZUNoaWxkKGJvdEdyaWQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgY2xlYXJDbGFzc2VzKGh1bWFuR3JpZCk7XG4gICAgY2xlYXJDbGFzc2VzKGJvdEdyaWQpO1xuXG4gICAgR2FtZUJvYXJkLmJvYXJkID0gR2FtZUJvYXJkLmNyZWF0ZUJvYXJkKCk7XG4gICAgQm90Qm9hcmQuYm9hcmQgPSBCb3RCb2FyZC5jcmVhdGVCb2FyZCgpO1xuXG4gICAgR2FtZUJvYXJkLnNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgIHNoaXAuaGl0cyA9IDA7XG4gICAgICAgIHNoaXAuc3RhcnQgPSBbXTtcbiAgICAgICAgc2hpcC5ib3JkZXJzID0gW107XG4gICAgfSk7XG4gICAgQm90Qm9hcmQuc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgc2hpcC5oaXRzID0gMDtcbiAgICAgICAgc2hpcC5zdGFydCA9IFtdO1xuICAgICAgICBzaGlwLmJvcmRlcnMgPSBbXTtcbiAgICB9KTtcblxuICAgIHVzZXJUdXJuID0gdHJ1ZTtcbiAgICBzdGFydGVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ2xhc3NlcyhncmlkKSB7XG4gICAgY29uc3QgY2VsbHMgPSBncmlkLmNoaWxkcmVuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2VsbHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdCcsICdmYWlsJywgJ2JvcmRlcnMnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlUmFuZG9taXNlKCkge1xuICAgIGlmICghc3RhcnRlZCkge1xuICAgICAgICBHYW1lQm9hcmQucmVzdGFydCgpO1xuICAgICAgICBHYW1lQm9hcmQucmFuZG9taXplKCk7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWFuLWdyaWQnKTtcbiAgICAgICAgY29uc3QgY2VsbHMgPSBib2FyZC5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY2VsbHNbaV0uaGFzQ2hpbGROb2RlcygpID8gY2VsbHNbaV0uZmlyc3RDaGlsZCA6ICdkb2VzbnQnKVxuICAgICAgICAgICAgY2VsbHNbaV0uaGFzQ2hpbGROb2RlcygpID8gY2VsbHNbaV0ucmVtb3ZlQ2hpbGQoY2VsbHNbaV0uZmlyc3RDaGlsZCkgOiBudWxsO1xuICAgICAgICAgICAgd2hpbGUgKGNlbGxzW2ldLmNsYXNzTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbaV0uY2xhc3NMaXN0LnJlbW92ZShjZWxsc1tpXS5jbGFzc0xpc3QuaXRlbSgwKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNlbGxzW2ldLmNsYXNzTGlzdC5hZGQoJ2NlbGwnLCBgaHVtYW4tY2VsbGApXG4gICAgICAgIH1cbiAgICAgICAgZGlzcGxheVNoaXBzKEdhbWVCb2FyZC5zaGlwcywgYm9hcmQuY2hpbGRyZW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbWlzZScpLnN0eWxlLmN1cnNvciA9ICdub3QtYWxsb3dlZCdcbiAgICB9XG59XG5cbnNldHVwR2FtZSgpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9taXNlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZVJhbmRvbWlzZSgpKVxuXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVzZXRHYW1lKCk7XG4gICAgc2V0dXBHYW1lKClcbn0pXG5cbiIsImV4cG9ydCBjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgsIElELCBib3JkZXJzKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmhpdHMgPSAwO1xuICAgICAgICB0aGlzLklEID0gSUQ7XG4gICAgICAgIHRoaXMuYm9yZGVycyA9IGJvcmRlcnNcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0cysrO1xuICAgIH1cblxuICAgIHN1bmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9