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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDhXQUE4VyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFlBQVksUUFBUSxNQUFNLFVBQVUsVUFBVSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxZQUFZLFlBQVksT0FBTyxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsWUFBWSxZQUFZLE9BQU8sS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsT0FBTyxN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Ozs7Ozs7O0FDcklNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zYXNzL21haW4uc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zYXNzL21haW4uc2Nzcz82YTE3Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5NDg3MjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI2hlYWRlciwgI21haW4sICNmb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuI2hlYWRlciAjaDEge1xuICBjb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1OTlweCkge1xuICAjaGVhZGVyICNoMSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG59XG5cbiNtYWluIHtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4jbWFpbiAjYmF0dGVsLWZpZWxkcyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICNtYWluICNiYXR0ZWwtZmllbGRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uLXJldmVyc2U7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICNtYWluICNiYXR0ZWwtZmllbGRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1OTlweCkge1xuICAjbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAzNzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5uYW1lIHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkICNyYW5kb21pc2Uge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZWZmZjtcbiAgY29sb3I6ICMyOTQ4NzI7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC01MHB4O1xufVxuI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkICNyYW5kb21pc2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExZjQ4O1xuICBjb2xvcjogI2ZmZjtcbn1cbiNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkyJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAuY2VsbCB7XG4gIHdpZHRoOiAxMCU7XG4gIGhlaWdodDogMTAlO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoNDMsIDE3NywgMjU0LCAwLjY2Mjc0NTA5OCk7XG4gIGN1cnNvcjogbW92ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbn1cbiNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAuYm90LWNlbGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAxNTcsIDE1Nyk7XG59XG4jbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgLnNoaXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDtcbn1cbiNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAjc2hpcC0xMSwgI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkICNzaGlwLTEyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAjc2hpcC0yLCAjbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgI3NoaXAtMjIsICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAjc2hpcC0yLWJvdCwgI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkICNzaGlwLTIyLWJvdCB7XG4gIHdpZHRoOiBjYWxjKDIwMCUgKyAxcHgpO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4jbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgLnNoaXAtMi1yb3RhdGUsICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAuc2hpcC0yMi1yb3RhdGUsICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAuc2hpcC0yLWJvdC1yb3RhdGUsICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAuc2hpcC0yMi1ib3Qtcm90YXRlIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKDAsIC0xMDAlKTtcbn1cbiNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAjc2hpcC0zLCAjbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgI3NoaXAtMzMsICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAjc2hpcC0zLWJvdCwgI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkICNzaGlwLTMzLWJvdCB7XG4gIHdpZHRoOiBjYWxjKDMwMCUgKyAzcHgpO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4jbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgLnNoaXAtMy1yb3RhdGUsICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAuc2hpcC0zMy1yb3RhdGUsICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAuc2hpcC0zLWJvdC1yb3RhdGUsICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAuc2hpcC0zMy1ib3Qtcm90YXRlIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKDAsIC0xMDAlKTtcbn1cbiNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAjc2hpcC00LCAjbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgI3NoaXAtNC1ib3Qge1xuICB3aWR0aDogY2FsYyg0MDAlICsgNXB4KTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkIC5zaGlwLTQtcm90YXRlLCAjbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgLnNoaXAtNC1ib3Qtcm90YXRlIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKDAsIC0xMDAlKTtcbn1cbiNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAjc2hpcC01LCAjbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgI3NoaXAtNS1ib3Qge1xuICB3aWR0aDogY2FsYyg1MDAlICsgNXB4KTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkIC5zaGlwLTUtcm90YXRlLCAjbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgLnNoaXAtNS1ib3Qtcm90YXRlIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKDAsIC0xMDAlKTtcbn1cbiNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDglO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAjbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAzNzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxufVxuI21haW4gI2JhdHRlbC1maWVsZHMgI2h1bWFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI21haW4gI3dpbm5lci1jYXJkLWJ0biwgI21haW4gI3BsYXkge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkQ3MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggcmdiYSgwLCAwLCA1MSwgMC4yKTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbiNtYWluICNwbGF5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWQ4ODtcbn1cblxuLndpbm5lci1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHBhZGRpbmc6IDMwcHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWQ4ODtcbiAgei1pbmRleDogMTAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpIHNjYWxlKDAuMSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRvcDogLTcwJTtcbn1cblxuI3dpbm5lci1jYXJkLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTQ4NzIgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi53aW5uZXItY2FyZC12aXNpYmxlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgxKTtcbn1cblxuI2Zvb3RlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4jZm9vdGVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZTFlZmZmO1xufVxuXG4uc2hvdCB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYW5pbWF0aW9uOiBoaXRFZmZlY3QgMXMgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgaGl0RWZmZWN0IHtcbiAgMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcbiAgfVxuICAyNSUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDEwcHggcmdiYSgyNTUsIDE2NSwgMTE3LCAwLjEpLCAwIDAgMTBweCAxMHB4IHJnYmEoMjU1LCAxNjQsIDY3LCAwLjEpLCAwIDAgMTBweCAxMHB4IHJnYmEoMjU1LCAxNjgsIDI3LCAwLjEpLCAwIDAgMTBweCAxMHB4IHJnYmEoMjU1LCAyMjIsIDkwLCAwLjEpO1xuICB9XG4gIDUwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggMjBweCByZ2JhKDI1NSwgMTg5LCAxMDgsIDAuMiksIDAgMCAyMHB4IDIwcHggcmdiYSgyNTUsIDE5NiwgNjAsIDAuMiksIDAgMCAyMHB4IDIwcHggcmdiYSgyNTUsIDE1OCwgMTMsIDAuMiksIDAgMCAyMHB4IDIwcHggcmdiYSgyNTUsIDE3NywgMzMsIDAuMik7XG4gIH1cbiAgNzUlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMzBweCAzMHB4IHJnYmEoMTYwLCAxMTEsIDQ2LCAwLjEpLCAwIDAgMzBweCAzMHB4IHJnYmEoMTM1LCA5MCwgMTcsIDAuMSksIDAgMCAzMHB4IDMwcHggcmdiYSgxMTMsIDg1LCAxLCAwLjEpLCAwIDAgMzBweCAzMHB4IHJnYmEoODcsIDYwLCAwLCAwLjEpO1xuICB9XG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoMCwgMCwgMCwgMCk7XG4gIH1cbn1cbi5zaG90OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwieFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIHotaW5kZXg6IDIwMDtcbn1cblxuLmZhaWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIwLCAxOTQsIDI1NSkgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYW5pbWF0aW9uOiBoaXRFZmZlY3QgMXMgZm9yd2FyZHM7XG59XG5cbi5ib3JkZXJzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDEyKSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9taXhpbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvbGF5b3V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9kZXZpY2VzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL21hYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2Zvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9hbmltYXRpb24uc2Nzc1wiXSxcIm5hbWVzXCI6W10s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O0FLdkNJO0VBQ0kseUJBQUE7QUx5Q1I7O0FLckNBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBTHdDSjs7QUtyQ0E7RUFDSSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUx3Q0o7O0FLckNBO0VBQ0ksbUJBQUE7RUFDQSxRQUFBO0VBQ0Esb0NBQUE7QUx3Q0o7O0FNdk9BO0VBQ0ksYUFBQTtBTjBPSjtBTXhPSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBTjBPUjs7QU8vT0E7RUFDSSxVQUFBO0VBQ0EsOENBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QVBrUEo7O0FPL09BO0VBQ0k7SUFDSSxvQ0FBQTtFUGtQTjtFT2hQRTtJQUNJLHVLQUFBO0VQa1BOO0VPN09FO0lBQ0ksdUtBQUE7RVArT047RU8xT0U7SUFDSSxnS0FBQTtFUDRPTjtFT3ZPRTtJQUNJLHFDQUFBO0VQeU9OO0FBQ0Y7QU90T0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsOENBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QVB3T0o7O0FPck9BO0VBQ0ksK0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7QVB3T0o7O0FPck9BO0VBQ0ksMENBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBUHdPSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5NDg3MjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgQGluY2x1ZGUgZmxleChjb2x1bW4sIHNwYWNlLWJldHdlZW4pO1xcbn1cXG5cIixcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5NDg3MjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2hlYWRlciwgI21haW4sICNmb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuI2hlYWRlciAjaDEge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1OTlweCkge1xcbiAgI2hlYWRlciAjaDEge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcbn1cXG5cXG4jbWFpbiB7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jbWFpbiAjYmF0dGVsLWZpZWxkcyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XFxuICAjbWFpbiAjYmF0dGVsLWZpZWxkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uLXJldmVyc2U7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcXG4gICNtYWluICNiYXR0ZWwtZmllbGRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHtcXG4gICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IDM3MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxufVxcbiNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAubmFtZSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkICNyYW5kb21pc2Uge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZWZmZjtcXG4gIGNvbG9yOiAjMjk0ODcyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC01MHB4O1xcbn1cXG4jbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgI3JhbmRvbWlzZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExZjQ4O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbiNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogOTIlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAuY2VsbCB7XFxuICB3aWR0aDogMTAlO1xcbiAgaGVpZ2h0OiAxMCU7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoNDMsIDE3NywgMjU0LCAwLjY2Mjc0NTA5OCk7XFxuICBjdXJzb3I6IG1vdmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxufVxcbiNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAuYm90LWNlbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgMTU3LCAxNTcpO1xcbn1cXG4jbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgLnNoaXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkICNzaGlwLTExLCAjbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgI3NoaXAtMTIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAjc2hpcC0yLCAjbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgI3NoaXAtMjIsICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAjc2hpcC0yLWJvdCwgI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkICNzaGlwLTIyLWJvdCB7XFxuICB3aWR0aDogY2FsYygyMDAlICsgMXB4KTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkIC5zaGlwLTItcm90YXRlLCAjbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgLnNoaXAtMjItcm90YXRlLCAjbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgLnNoaXAtMi1ib3Qtcm90YXRlLCAjbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgLnNoaXAtMjItYm90LXJvdGF0ZSB7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKDAsIC0xMDAlKTtcXG59XFxuI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkICNzaGlwLTMsICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAjc2hpcC0zMywgI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkICNzaGlwLTMtYm90LCAjbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgI3NoaXAtMzMtYm90IHtcXG4gIHdpZHRoOiBjYWxjKDMwMCUgKyAzcHgpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgLnNoaXAtMy1yb3RhdGUsICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAuc2hpcC0zMy1yb3RhdGUsICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAuc2hpcC0zLWJvdC1yb3RhdGUsICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAuc2hpcC0zMy1ib3Qtcm90YXRlIHtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoMCwgLTEwMCUpO1xcbn1cXG4jbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgI3NoaXAtNCwgI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkICNzaGlwLTQtYm90IHtcXG4gIHdpZHRoOiBjYWxjKDQwMCUgKyA1cHgpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgLnNoaXAtNC1yb3RhdGUsICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAuc2hpcC00LWJvdC1yb3RhdGUge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZSgwLCAtMTAwJSk7XFxufVxcbiNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAjc2hpcC01LCAjbWFpbiAjYmF0dGVsLWZpZWxkcyAuZmllbGQgLmdyaWQgI3NoaXAtNS1ib3Qge1xcbiAgd2lkdGg6IGNhbGMoNTAwJSArIDVweCk7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCAuZ3JpZCAuc2hpcC01LXJvdGF0ZSwgI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIC5ncmlkIC5zaGlwLTUtYm90LXJvdGF0ZSB7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKDAsIC0xMDAlKTtcXG59XFxuI21haW4gI2JhdHRlbC1maWVsZHMgLmZpZWxkIHAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiA4JTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcXG4gICNtYWluICNiYXR0ZWwtZmllbGRzIC5maWVsZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IDM3MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB9XFxufVxcbiNtYWluICNiYXR0ZWwtZmllbGRzICNodW1hbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbiNtYWluICN3aW5uZXItY2FyZC1idG4sICNtYWluICNwbGF5IHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZENzAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggcmdiYSgwLCAwLCA1MSwgMC4yKTtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcbiNtYWluICNwbGF5OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVkODg7XFxufVxcblxcbi53aW5uZXItY2FyZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDMwcHggMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVkODg7XFxuICB6LWluZGV4OiAxMDAwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKSBzY2FsZSgwLjEpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0b3A6IC03MCU7XFxufVxcblxcbiN3aW5uZXItY2FyZC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5NDg3MiAhaW1wb3J0YW50O1xcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ud2lubmVyLWNhcmQtdmlzaWJsZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMSk7XFxufVxcblxcbiNmb290ZXIge1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuI2Zvb3RlciBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjZTFlZmZmO1xcbn1cXG5cXG4uc2hvdCB7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDb3VyaWVyIE5ld1xcXCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBhbmltYXRpb246IGhpdEVmZmVjdCAxcyBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBoaXRFZmZlY3Qge1xcbiAgMCUge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMCk7XFxuICB9XFxuICAyNSUge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAxMHB4IHJnYmEoMjU1LCAxNjUsIDExNywgMC4xKSwgMCAwIDEwcHggMTBweCByZ2JhKDI1NSwgMTY0LCA2NywgMC4xKSwgMCAwIDEwcHggMTBweCByZ2JhKDI1NSwgMTY4LCAyNywgMC4xKSwgMCAwIDEwcHggMTBweCByZ2JhKDI1NSwgMjIyLCA5MCwgMC4xKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDIwcHggcmdiYSgyNTUsIDE4OSwgMTA4LCAwLjIpLCAwIDAgMjBweCAyMHB4IHJnYmEoMjU1LCAxOTYsIDYwLCAwLjIpLCAwIDAgMjBweCAyMHB4IHJnYmEoMjU1LCAxNTgsIDEzLCAwLjIpLCAwIDAgMjBweCAyMHB4IHJnYmEoMjU1LCAxNzcsIDMzLCAwLjIpO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDMwcHggMzBweCByZ2JhKDE2MCwgMTExLCA0NiwgMC4xKSwgMCAwIDMwcHggMzBweCByZ2JhKDEzNSwgOTAsIDE3LCAwLjEpLCAwIDAgMzBweCAzMHB4IHJnYmEoMTEzLCA4NSwgMSwgMC4xKSwgMCAwIDMwcHggMzBweCByZ2JhKDg3LCA2MCwgMCwgMC4xKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCByZ2JhKDAsIDAsIDAsIDApO1xcbiAgfVxcbn1cXG4uc2hvdDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcInhcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ291cmllciBOZXdcXFwiLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIHotaW5kZXg6IDIwMDtcXG59XFxuXFxuLmZhaWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMCwgMTk0LCAyNTUpICFpbXBvcnRhbnQ7XFxuICBmb250LWZhbWlseTogXFxcIkNvdXJpZXIgTmV3XFxcIiwgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFuaW1hdGlvbjogaGl0RWZmZWN0IDFzIGZvcndhcmRzO1xcbn1cXG5cXG4uYm9yZGVycyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMTIpICFpbXBvcnRhbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cIixcIkBtaXhpbiBmbGV4KCRmbG93LCAkanVzdGlmeSkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6ICRmbG93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xcbn1cXG5cIixcIiNoZWFkZXIsICNtYWluLCAjZm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIEBpbmNsdWRlIGZsZXgocm93LCBjZW50ZXIpO1xcbn1cXG5cIixcIkBpbXBvcnQgJ2RldmljZXMnO1xcblxcbiNoZWFkZXIge1xcbiAgICBAaW5jbHVkZSBmbGV4KHJvdywgY2VudGVyKTtcXG5cXG4gICAgI2gxIHtcXG4gICAgICAgIEBpbmNsdWRlIGRldmljZSg1OTlweCkgeyAgIFxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICB9XFxufVxcblwiLFwiQG1peGluIGRldmljZSgkc2l6ZSkge1xcbiAgICBAaWYkc2l6ZSA9PTU5OXB4IHtcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1OTlweCkge1xcbiAgICAgICAgICAgIEBjb250ZW50O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBlbHNlIGlmICRzaXplID09NjAwcHgge1xcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICAgICAgQGNvbnRlbnQ7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgQGVsc2UgaWYgJHNpemUgPT05MDBweCB7XFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcXG4gICAgICAgICAgICBAY29udGVudDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBAZWxzZSBpZiAkc2l6ZSA9PTEyMDBweCB7XFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAgICAgICAgICAgQGNvbnRlbnQ7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgQGVsc2UgaWYgJHNpemUgPT0xODAwcHgge1xcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE4MDBweCkge1xcbiAgICAgICAgICAgIEBjb250ZW50O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVwiLFwiQGltcG9ydCAnZGV2aWNlcyc7XFxuI21haW4ge1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIEBpbmNsdWRlIGZsZXgoY29sdW1uLCBjZW50ZXIpO1xcblxcbiAgICAjYmF0dGVsLWZpZWxkcyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIEBpbmNsdWRlIGRldmljZSg1OTlweCkge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIGZsZXgoY29sdW1uLXJldmVyc2UsIHNwYWNlLWFyb3VuZCk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAaW5jbHVkZSBkZXZpY2UoNjAwcHgpIHtcXG4gICAgICAgICAgICBAaW5jbHVkZSBmbGV4KHJvdywgc3BhY2UtYXJvdW5kKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5maWVsZCB7XFxuICAgICAgICAgICAgQGluY2x1ZGUgZGV2aWNlKDU5OXB4KSB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM3MHB4O1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5uYW1lIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAjcmFuZG9taXNlIHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmVmZmY7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjk0ODcyO1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgYm90dG9tOiAtNTBweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgI3JhbmRvbWlzZTpob3ZlcntcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMWY0ODtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICAgICAgfVxcblxcblxcbiAgICAgICAgICAgIC5ncmlkIHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogOTIlO1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGZsZXgocm93IHdyYXAsIGNlbnRlcik7XFxuXFxuICAgICAgICAgICAgICAgIC5jZWxsIHtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUvMTApO1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUvMTApO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMmJiMWZlYTk7XFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IG1vdmU7XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmJvdC1jZWxsOmhvdmVye1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgMTU3LCAxNTcpO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5zaGlwIHtcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgI3NoaXAtMTEsICNzaGlwLTEyIHtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICNzaGlwLTIsICNzaGlwLTIyLCAgI3NoaXAtMi1ib3QsICNzaGlwLTIyLWJvdCB7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygyMDAlICsgMXB4KTtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuc2hpcC0yLXJvdGF0ZSwgLnNoaXAtMjItcm90YXRlLCAuc2hpcC0yLWJvdC1yb3RhdGUsIC5zaGlwLTIyLWJvdC1yb3RhdGUge1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZSgwLCAtMTAwJSk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgI3NoaXAtMywgI3NoaXAtMzMsICNzaGlwLTMtYm90LCAjc2hpcC0zMy1ib3Qge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMzAwJSArIDNweCk7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLnNoaXAtMy1yb3RhdGUsIC5zaGlwLTMzLXJvdGF0ZSwgLnNoaXAtMy1ib3Qtcm90YXRlLCAuc2hpcC0zMy1ib3Qtcm90YXRlIHtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoMCwgLTEwMCUpO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICNzaGlwLTQsICNzaGlwLTQtYm90IHtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDQwMCUgKyA1cHgpO1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5zaGlwLTQtcm90YXRlLCAuc2hpcC00LWJvdC1yb3RhdGUge1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZSgwLCAtMTAwJSk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgI3NoaXAtNSwgI3NoaXAtNS1ib3Qge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTAwJSArIDVweCk7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLnNoaXAtNS1yb3RhdGUsIC5zaGlwLTUtYm90LXJvdGF0ZSB7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKDAsIC0xMDAlKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBwIHtcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgZmxleChyb3csIGNlbnRlcik7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogOCU7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBAaW5jbHVkZSBkZXZpY2UoNjAwcHgpIHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzUwcHg7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzcwcHg7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGZsZXgoY29sdW1uLCBzcGFjZS1hcm91bmQpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNodW1hbntcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgI3dpbm5lci1jYXJkLWJ0biwgI3BsYXkge1xcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkQ3MDA7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAjMDAzMztcXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIH1cXG5cXG4gICAgI3BsYXk6aG92ZXJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZDg4O1xcbiAgICB9XFxufVxcblxcbi53aW5uZXItY2FyZHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDMwcHggMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWQ4ODtcXG4gICAgei1pbmRleDogMTAwMDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpIHNjYWxlKC4xKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluLW91dDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB0b3A6IC03MCU7XFxufVxcblxcbiN3aW5uZXItY2FyZC1idG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTQ4NzIgIWltcG9ydGFudDtcXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi53aW5uZXItY2FyZC12aXNpYmxle1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlIDtcXG4gICAgdG9wOiA1MCUgO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMSkgO1xcbn1cXG5cIixcIiNmb290ZXIge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBhIHtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIGNvbG9yOiAjZTFlZmZmO1xcbiAgICB9XFxufVxcblwiLFwiLnNob3Qge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbmltYXRpb246IGhpdEVmZmVjdCAxcyBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBoaXRFZmZlY3Qge1xcbiAgICAwJSB7XFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIH1cXG4gICAgMjUlIHtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDEwcHggcmdiYSgyNTUsIDE2NSwgMTE3LCAwLjEpLCBcXG4gICAgICAgICAgICAgICAgICAgIDAgMCAxMHB4IDEwcHggcmdiYSgyNTUsIDE2NCwgNjcsIDAuMSksIFxcbiAgICAgICAgICAgICAgICAgICAgMCAwIDEwcHggMTBweCByZ2JhKDI1NSwgMTY4LCAyNywgMC4xKSwgXFxuICAgICAgICAgICAgICAgICAgICAwIDAgMTBweCAxMHB4IHJnYmEoMjU1LCAyMjIsIDkwLCAwLjEpO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCAyMHB4IHJnYmEoMjU1LCAxODksIDEwOCwgMC4yKSwgXFxuICAgICAgICAgICAgICAgICAgICAwIDAgMjBweCAyMHB4IHJnYmEoMjU1LCAxOTYsIDYwLCAwLjIpLCBcXG4gICAgICAgICAgICAgICAgICAgIDAgMCAyMHB4IDIwcHggcmdiYSgyNTUsIDE1OCwgMTMsIDAuMiksIFxcbiAgICAgICAgICAgICAgICAgICAgMCAwIDIwcHggMjBweCByZ2JhKDI1NSwgMTc3LCAzMywgMC4yKTtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDMwcHggMzBweCByZ2JhKDE2MCwgMTExLCA0NiwgMC4xKSwgXFxuICAgICAgICAgICAgICAgICAgICAwIDAgMzBweCAzMHB4IHJnYmEoMTM1LCA5MCwgMTcsIDAuMSksIFxcbiAgICAgICAgICAgICAgICAgICAgMCAwIDMwcHggMzBweCByZ2JhKDExMywgODUsIDEsIDAuMSksIFxcbiAgICAgICAgICAgICAgICAgICAgMCAwIDMwcHggMzBweCByZ2JhKDg3LCA2MCwgMCwgMC4xKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIH1cXG59XFxuXFxuLnNob3Q6OmFmdGVyIHtcXG4gICAgY29udGVudDogJ3gnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICB6LWluZGV4OiAyMDA7XFxufVxcblxcbi5mYWlsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMCwgMTk0LCAyNTUpICFpbXBvcnRhbnQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbmltYXRpb246IGhpdEVmZmVjdCAxcyBmb3J3YXJkcztcXG59XFxuXFxuLmJvcmRlcnMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMTIpICFpbXBvcnRhbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBCb3RCb2FyZCB9IGZyb20gJy4vR2FtZWJvYXJkJztcbmltcG9ydCB7IHJlc2V0R2FtZSwgc2V0dXBHYW1lIH0gZnJvbSAnLic7XG5pbXBvcnQgJy4vc2Fzcy9tYWluLnNjc3MnO1xuXG5jb25zdCBzaGlwc1BpY3MgPSBbXG4gICAgXCIuL2Fzc2V0cy9jYXJyaWVyLnN2Z1wiLFxuICAgIFwiLi9hc3NldHMvZGVzdHJveWVyLnN2Z1wiLFxuICAgIFwiLi9hc3NldHMvc3VibWFyaW5lLnN2Z1wiLFxuICAgIFwiLi9hc3NldHMvc3VibWFyaW5lLnN2Z1wiLFxuICAgIFwiLi9hc3NldHMvcGF0cm9sLnN2Z1wiLFxuICAgIFwiLi9hc3NldHMvcGF0cm9sLnN2Z1wiXG5dXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBncmlkQ2hpbGRyZW4ocGFyZW50LCBwbGF5ZXIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJywgYCR7cGxheWVyfS1jZWxsYCk7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQueCA9IGk7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQueSA9IGo7XG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldEF0dHJzKGVsZW0sIGF0dHJzLCB2YWx1ZXMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKGF0dHJzW2ldLCB2YWx1ZXNbaV0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlTaGlwcyhzaGlwcywgYm9hcmRDZWxscykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc2hpcEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgc2hpcEVsZW0uc3JjID0gc2hpcHNQaWNzW2ldXG4gICAgICAgIGJvYXJkQ2VsbHNbc2hpcHNbaV0uc3RhcnRbMF1dLmFwcGVuZENoaWxkKHNoaXBFbGVtKTtcbiAgICAgICAgc2V0QXR0cnMoc2hpcEVsZW0sIFsnY2xhc3MnLCAnZHJhZ2dhYmxlJywgJ2lkJ10sIFsnc2hpcCcsICd0cnVlJywgYHNoaXAtJHtzaGlwc1tpXS5JRH1gXSk7XG5cbiAgICAgICAgaWYgKHNoaXBzW2ldLnN0YXJ0WzFdIC0gc2hpcHNbaV0uc3RhcnRbMF0gPT09IDEwKSB7XG4gICAgICAgICAgICBzaGlwRWxlbS5jbGFzc0xpc3QuYWRkKGBzaGlwLSR7c2hpcHNbaV0uSUR9LXJvdGF0ZWApO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlTaGlwSW5Cb3RCYXJkKHNoaXApIHtcbiAgICBjb25zdCBzaGlwRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHNoaXAubGVuZ3RoID09PSA1ID8gc2hpcEVsZW1lbnQuc3JjID0gc2hpcHNQaWNzWzBdIDpcbiAgICAgICAgc2hpcC5sZW5ndGggPT09IDQgPyBzaGlwRWxlbWVudC5zcmMgPSBzaGlwc1BpY3NbMV0gOlxuICAgICAgICAgICAgc2hpcC5sZW5ndGggPT09IDMgPyBzaGlwRWxlbWVudC5zcmMgPSBzaGlwc1BpY3NbMl0gOlxuICAgICAgICAgICAgICAgIHNoaXBFbGVtZW50LnNyYyA9IHNoaXBzUGljc1s0XTtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3QtZ3JpZCcpO1xuICAgIGNvbnN0IGJvYXJkQ2VsbHMgPSBib2FyZC5jaGlsZHJlblxuICAgIGJvYXJkQ2VsbHNbc2hpcC5zdGFydFswXV0uYXBwZW5kQ2hpbGQoc2hpcEVsZW1lbnQpO1xuICAgIHNldEF0dHJzKHNoaXBFbGVtZW50LCBbJ2NsYXNzJywgJ2RyYWdnYWJsZScsICdpZCddLCBbJ3NoaXAnLCAndHJ1ZScsIGBzaGlwLSR7c2hpcC5JRH0tYm90YF0pO1xuXG4gICAgaWYgKHNoaXAuc3RhcnRbMV0gLSBzaGlwLnN0YXJ0WzBdID09PSAxMCkge1xuICAgICAgICBzaGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKGBzaGlwLSR7c2hpcC5JRH0tYm90LXJvdGF0ZWApO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNlbGwoY2VsbCwgcGxheWVyLCBoaXQpIHtcbiAgICBsZXQgZG9tQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3BsYXllcn0tZ3JpZCAuJHtwbGF5ZXJ9LWNlbGxbZGF0YS14PVwiJHtjZWxsLmNvcmRpbmF0ZXNbMF19XCJdW2RhdGEteT1cIiR7Y2VsbC5jb3JkaW5hdGVzWzFdfVwiXWApO1xuICAgIGlmIChoaXQpIHtcbiAgICAgICAgZG9tQ2VsbC5jbGFzc0xpc3QuYWRkKCdzaG90Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9tQ2VsbC5jbGFzc0xpc3QuYWRkKCdmYWlsJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFya0JvcmRlcnMoc2hpcCwgcGxheWVyKSB7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3BsYXllcn0tZ3JpZGApO1xuICAgIHNoaXAuYm9yZGVycy5mb3JFYWNoKGJvcmRlciA9PiB7XG4gICAgICAgIGNvbnN0IGJvcmRlckNlbGwgPSBncmlkLmNoaWxkcmVuW2JvcmRlcl1cbiAgICAgICAgY29uc29sZS5sb2coYm9yZGVyLCBib3JkZXJDZWxsKVxuICAgICAgICBib3JkZXJDZWxsLmNsYXNzTGlzdC5hZGQoJ2JvcmRlcnMnKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdpbm5lcih3aW5uZXIpIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbm5lci1jYXJkJyk7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lubmVyLWgxJyk7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbm5lci1jYXJkLWJ0bicpO1xuXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCd3aW5uZXItY2FyZC12aXNpYmxlJylcblxuICAgIGgxLnRleHRDb250ZW50ID0gYCR7d2lubmVyfSB3b24hYDtcblxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcmVzZXRHYW1lKCk7XG4gICAgICAgIHNldHVwR2FtZSgpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lubmVyLWNhcmQnKS5jbGFzc0xpc3QucmVtb3ZlKCd3aW5uZXItY2FyZC12aXNpYmxlJylcbiAgICB9KVxufVxuXG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5jbGFzcyBDZWxsIHtcbiAgICBjb25zdHJ1Y3Rvcihjb3JkaW5hdGVzLCBjbGlja2VkID0gZmFsc2UsIElEID0gbnVsbCkge1xuICAgICAgICB0aGlzLmNvcmRpbmF0ZXMgPSBjb3JkaW5hdGVzO1xuICAgICAgICB0aGlzLmNsaWNrZWQgPSBjbGlja2VkO1xuICAgICAgICB0aGlzLklEID0gSUQ7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJvYXJkID0gdGhpcy5jcmVhdGVCb2FyZCgpO1xuICAgICAgICB0aGlzLnNoaXBzID0gW1xuICAgICAgICAgICAgbmV3IFNoaXAoNSwgNSksXG4gICAgICAgICAgICBuZXcgU2hpcCg0LCA0KSxcbiAgICAgICAgICAgIG5ldyBTaGlwKDMsIDMpLFxuICAgICAgICAgICAgbmV3IFNoaXAoMywgMzMpLFxuICAgICAgICAgICAgbmV3IFNoaXAoMiwgMiksXG4gICAgICAgICAgICBuZXcgU2hpcCgyLCAyMiksXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMudGFyZ2V0cyA9IFtdO1xuICAgIH1cblxuICAgIGNyZWF0ZUJvYXJkKCkge1xuICAgICAgICBsZXQgYm9hcmQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZC5wdXNoKG5ldyBDZWxsKFtpLCBqXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG5cbiAgICBwbGFjZVNoaXAocG9zaXRpb24sIGxlbmd0aCwgZGlyZWN0aW9uLCBpZCkge1xuICAgICAgICBsZXQgYmFzZUNlbGwgPSB0aGlzLmJvYXJkLmZpbmQoY2VsbCA9PiBjZWxsLmNvcmRpbmF0ZXNbMF0gPT09IHBvc2l0aW9uWzBdICYmIGNlbGwuY29yZGluYXRlc1sxXSA9PT0gcG9zaXRpb25bMV0pO1xuICAgICAgICBsZXQgc3RhcnRJbmRleCA9IHRoaXMuYm9hcmQuaW5kZXhPZihiYXNlQ2VsbCk7XG4gICAgICAgIGxldCBwYXRoUmVzdWx0ID0gdGhpcy5jaGVja0NlbGxzKHN0YXJ0SW5kZXgsIGxlbmd0aCwgZGlyZWN0aW9uLCBpZCk7XG5cbiAgICAgICAgaWYgKHBhdGhSZXN1bHQgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHBhdGhSZXN1bHRbMF0uZm9yRWFjaChpbmRleCA9PiB0aGlzLmFkZCh0aGlzLmJvYXJkW2luZGV4XSwgaWQpKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQm9yZGVyc0ZvclNoaXAocGF0aFJlc3VsdFswXSwgaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHBhdGhSZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNoZWNrQ2VsbHMoc3RhcnRJbmRleCwgbGVuZ3RoLCBkaXJlY3Rpb24sIGlkKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yem50bCcpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IHRoaXMuYm9hcmRbc3RhcnRJbmRleCArIGldO1xuICAgICAgICAgICAgICAgIGlmICghY2VsbCB8fCBjZWxsLklEICE9PSBudWxsIHx8IGNlbGwuY29yZGluYXRlc1sxXSArIGxlbmd0aCA+IDEwKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwYXRoLnB1c2goc3RhcnRJbmRleCArIGkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd2cnRjbCcpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IHRoaXMuYm9hcmRbc3RhcnRJbmRleCArIChpICogMTApXTtcbiAgICAgICAgICAgICAgICBpZiAoIWNlbGwgfHwgY2VsbC5JRCAhPT0gbnVsbCB8fCBjZWxsLmNvcmRpbmF0ZXNbMF0gKyBsZW5ndGggPiAxMCkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgcGF0aC5wdXNoKHN0YXJ0SW5kZXggKyAoaSAqIDEwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF0aC5sZW5ndGggPT09IGxlbmd0aCA/IFtwYXRoXSA6IHRydWU7XG4gICAgfVxuXG4gICAgYWRkQm9yZGVyc0ZvclNoaXAoc2hpcENlbGxzLCBpZCkge1xuICAgICAgICBjb25zdCBzaGlwID0gdGhpcy5zaGlwcy5maW5kKHNoaXAgPT4gc2hpcC5JRCA9PSBpZClcbiAgICAgICAgY29uc3QgYm9yZGVycyA9IFtdO1xuICAgICAgICBzaGlwQ2VsbHMuZm9yRWFjaChpbmRleCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5ib2FyZFtpbmRleF07XG4gICAgICAgICAgICB0aGlzLmFkZEJvcmRlcnMoYm9yZGVycywgY2VsbC5jb3JkaW5hdGVzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdW5pcXVlQm9yZGVycyA9IEFycmF5LmZyb20obmV3IFNldChib3JkZXJzKSkuZmlsdGVyKGluZGV4ID0+ICFzaGlwQ2VsbHMuaW5jbHVkZXMoaW5kZXgpKTtcbiAgICAgICAgdW5pcXVlQm9yZGVycy5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgICAgICAgIGxldCBjZWxsID0gdGhpcy5ib2FyZFtpbmRleF07XG4gICAgICAgICAgICBpZiAoY2VsbC5JRCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNlbGwuSUQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBzaGlwLmJvcmRlcnMgPSB1bmlxdWVCb3JkZXJzXG4gICAgfVxuXG4gICAgYWRkQm9yZGVycyhib3JkZXJzLCBjb3JkaW5hdGVzKSB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IGNvcmRpbmF0ZXM7XG5cbiAgICAgICAgY29uc3QgYWRqYWNlbnRDZWxscyA9IFtcbiAgICAgICAgICAgIFt4IC0gMSwgeSAtIDFdLCBbeCAtIDEsIHldLCBbeCAtIDEsIHkgKyAxXSxcbiAgICAgICAgICAgIFt4LCB5IC0gMV0sIFt4LCB5ICsgMV0sXG4gICAgICAgICAgICBbeCArIDEsIHkgLSAxXSwgW3ggKyAxLCB5XSwgW3ggKyAxLCB5ICsgMV1cbiAgICAgICAgXTtcblxuICAgICAgICBhZGphY2VudENlbGxzLmZvckVhY2goKFthZGpYLCBhZGpZXSkgPT4ge1xuICAgICAgICAgICAgaWYgKGFkalggPj0gMCAmJiBhZGpYIDwgMTAgJiYgYWRqWSA+PSAwICYmIGFkalkgPCAxMCkge1xuICAgICAgICAgICAgICAgIGxldCBhZGpDZWxsID0gdGhpcy5ib2FyZC5maW5kKGNlbGwgPT4gY2VsbC5jb3JkaW5hdGVzWzBdID09PSBhZGpYICYmIGNlbGwuY29yZGluYXRlc1sxXSA9PT0gYWRqWSk7XG4gICAgICAgICAgICAgICAgaWYgKGFkakNlbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVycy5wdXNoKHRoaXMuYm9hcmQuaW5kZXhPZihhZGpDZWxsKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGQoY2VsbCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGNlbGwgJiYgY2VsbC5JRCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY2VsbC5JRCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmFuZG9taXplKCkge1xuICAgICAgICB0aGlzLnNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBsZXQgcGxhY2VkID0gZmFsc2U7XG4gICAgICAgICAgICB3aGlsZSAoIXBsYWNlZCkge1xuICAgICAgICAgICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRvbUNlbGwgPSB0aGlzLmJvYXJkW3JhbmRvbUluZGV4XTtcbiAgICAgICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/ICdob3J6bnRsJyA6ICd2cnRjbCc7XG4gICAgICAgICAgICAgICAgcGxhY2VkID0gdGhpcy5wbGFjZVNoaXAocmFuZG9tQ2VsbC5jb3JkaW5hdGVzLCBzaGlwLmxlbmd0aCwgZGlyZWN0aW9uLCBzaGlwLklEKTtcbiAgICAgICAgICAgICAgICBpZiAocGxhY2VkKSBzaGlwLnN0YXJ0ID0gcGxhY2VkWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKGNlbGwpIHtcbiAgICAgICAgaWYgKGNlbGwuY2xpY2tlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zb2xlLmxvZyhjZWxsLmNsaWNrZWQpXG4gICAgICAgIGNlbGwuY2xpY2tlZCA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKGNlbGwuY2xpY2tlZClcblxuXG4gICAgICAgIGlmIChjZWxsLklEICE9PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgaGl0U2hpcCA9IHRoaXMuc2hpcHMuZmluZChzaGlwID0+IHNoaXAuSUQgPT09IGNlbGwuSUQpO1xuICAgICAgICAgICAgaWYgKGhpdFNoaXApIHtcbiAgICAgICAgICAgICAgICBoaXRTaGlwLmhpdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkU3Vycm91bmRpbmdDZWxsc1RvVGFyZ2V0cyhjZWxsKVxuICAgICAgICAgICAgICAgIGlmIChoaXRTaGlwLnN1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgaGl0U2hpcC5ib3JkZXJzLmZvckVhY2goYm9yZGVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYm9yZGVyXS5jbGlja2VkID0gdHJ1ZVxuXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGhpdDogdHJ1ZSwgc3VuazogdHJ1ZSwgc2hpcDogaGl0U2hpcCB9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB7IGhpdDogdHJ1ZSwgc3VuazogZmFsc2UsIHNoaXA6IGhpdFNoaXAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGhpdDogZmFsc2UsIHN1bms6IGZhbHNlLCBzaGlwOiBudWxsIH07XG4gICAgfVxuXG4gICAgYWRkU3Vycm91bmRpbmdDZWxsc1RvVGFyZ2V0cyhjZWxsKSB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IGNlbGwuY29yZGluYXRlcztcbiAgICAgICAgY29uc3Qgc3Vycm91bmRpbmdDZWxscyA9IFtcbiAgICAgICAgICAgIFt4IC0gMSwgeV0sIFt4ICsgMSwgeV0sIFt4LCB5IC0gMV0sIFt4LCB5ICsgMV1cbiAgICAgICAgXTtcblxuICAgICAgICBzdXJyb3VuZGluZ0NlbGxzLmZvckVhY2goKFthZGpYLCBhZGpZXSkgPT4ge1xuICAgICAgICAgICAgaWYgKGFkalggPj0gMCAmJiBhZGpYIDwgMTAgJiYgYWRqWSA+PSAwICYmIGFkalkgPCAxMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkakNlbGwgPSB0aGlzLmJvYXJkLmZpbmQoY2VsbCA9PiBjZWxsLmNvcmRpbmF0ZXNbMF0gPT09IGFkalggJiYgY2VsbC5jb3JkaW5hdGVzWzFdID09PSBhZGpZKTtcbiAgICAgICAgICAgICAgICBpZiAoYWRqQ2VsbCAmJiAhYWRqQ2VsbC5jbGlja2VkICYmIGFkakNlbGwuSUQgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXRzLnB1c2goYWRqQ2VsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBib3RBdHRhY2soKSB7XG4gICAgICAgIGxldCB0YXJnZXRDZWxsO1xuICAgICAgICBsZXQgcmFuZG9tSW5kZXhcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0YXJnZXRDZWxsID0gdGhpcy50YXJnZXRzLnNoaWZ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgICAgICAgICAgIHRhcmdldENlbGwgPSB0aGlzLmJvYXJkW3JhbmRvbUluZGV4XVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldENlbGwpXG4gICAgICAgICAgICB9IHdoaWxlICghdGFyZ2V0Q2VsbCB8fCB0YXJnZXRDZWxsLmNsaWNrZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldENlbGw7XG4gICAgfVxuICAgIGFsbFN1bmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KHNoaXAgPT4gc2hpcC5zdW5rKCkpO1xuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtpXS5JRCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW2ldLmNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRhcmdldHMgPSBbXVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEdhbWVCb2FyZCA9IG5ldyBCb2FyZCgpO1xuZXhwb3J0IGNvbnN0IEJvdEJvYXJkID0gbmV3IEJvYXJkKCk7XG5cbmNvbnNvbGUubG9nKEdhbWVCb2FyZClcbiIsImltcG9ydCAnLi9ET00uanMnO1xuaW1wb3J0IHsgZ3JpZENoaWxkcmVuLCBkaXNwbGF5U2hpcHMsIHVwZGF0ZUNlbGwsIG1hcmtCb3JkZXJzLCBkaXNwbGF5U2hpcEluQm90QmFyZCwgd2lubmVyIH0gZnJvbSAnLi9ET00uanMnO1xuaW1wb3J0IHsgQm90Qm9hcmQsIEdhbWVCb2FyZCB9IGZyb20gJy4vR2FtZWJvYXJkLmpzJztcblxubGV0IHVzZXJUdXJuID0gdHJ1ZTtcbmxldCBzdGFydGVkID0gZmFsc2U7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXR1cEdhbWUoKSB7XG4gICAgYXdhaXQgZ3JpZENoaWxkcmVuKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1hbi1ncmlkJyksICdodW1hbicpO1xuICAgIEdhbWVCb2FyZC5yYW5kb21pemUoKTtcbiAgICBkaXNwbGF5U2hpcHMoR2FtZUJvYXJkLnNoaXBzLCBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdodW1hbi1jZWxsJykpO1xuXG4gICAgYXdhaXQgZ3JpZENoaWxkcmVuKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3QtZ3JpZCcpLCAnYm90Jyk7XG4gICAgQm90Qm9hcmQucmFuZG9taXplKCk7XG5cbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3QtZ3JpZCcpLmNoaWxkcmVuO1xuICAgIGNvbnN0IHNvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3Qtc291bmQnKTtcbiAgICBjb25zdCBvdmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXItc291bmQnKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjZWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlXG4gICAgICAgICAgICBpZiAoIXVzZXJUdXJuKSByZXR1cm47XG5cbiAgICAgICAgICAgIGlmICghY2VsbHNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG90JykgJiYgIWNlbGxzW2ldLmNsYXNzTGlzdC5jb250YWlucygnZmFpbCcpICYmICFjZWxsc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2JvcmRlcnMnKSkge1xuICAgICAgICAgICAgICAgIHNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gQm90Qm9hcmQucmVjZWl2ZUF0dGFjayhCb3RCb2FyZC5ib2FyZFtpXSwgJ2JvdCcpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNlbGwoQm90Qm9hcmQuYm9hcmRbaV0sICdib3QnLCByZXN1bHQuaGl0KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3Vuaykge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5U2hpcEluQm90QmFyZChyZXN1bHQuc2hpcClcbiAgICAgICAgICAgICAgICAgICAgbWFya0JvcmRlcnMocmVzdWx0LnNoaXAsICdib3QnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoQm90Qm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgIG92ZXIucGxheSgpXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gd2lubmVyKCd5b3UnKSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGFydGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdXNlclR1cm4gPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsID0gR2FtZUJvYXJkLmJvdEF0dGFjaygpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gR2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soY2VsbCwgJ2h1bWFuJyk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUNlbGwoY2VsbCwgJ2h1bWFuJywgcmVzdWx0LmhpdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdW5rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrQm9yZGVycyhyZXN1bHQuc2hpcCwgJ2h1bWFuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoR2FtZUJvYXJkLmFsbFN1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3Zlci5wbGF5KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gd2lubmVyKCdib3QnKSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclR1cm4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgNzAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRHYW1lKCkge1xuICAgIGNvbnN0IGh1bWFuR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1hbi1ncmlkJyk7XG4gICAgY29uc3QgYm90R3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3QtZ3JpZCcpO1xuXG4gICAgd2hpbGUgKGh1bWFuR3JpZC5maXJzdENoaWxkKSB7XG4gICAgICAgIGh1bWFuR3JpZC5yZW1vdmVDaGlsZChodW1hbkdyaWQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHdoaWxlIChib3RHcmlkLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgYm90R3JpZC5yZW1vdmVDaGlsZChib3RHcmlkLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGNsZWFyQ2xhc3NlcyhodW1hbkdyaWQpO1xuICAgIGNsZWFyQ2xhc3Nlcyhib3RHcmlkKTtcblxuICAgIEdhbWVCb2FyZC5ib2FyZCA9IEdhbWVCb2FyZC5jcmVhdGVCb2FyZCgpO1xuICAgIEJvdEJvYXJkLmJvYXJkID0gQm90Qm9hcmQuY3JlYXRlQm9hcmQoKTtcblxuICAgIEdhbWVCb2FyZC5zaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICBzaGlwLmhpdHMgPSAwO1xuICAgICAgICBzaGlwLnN0YXJ0ID0gW107XG4gICAgICAgIHNoaXAuYm9yZGVycyA9IFtdO1xuICAgIH0pO1xuICAgIEJvdEJvYXJkLnNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgIHNoaXAuaGl0cyA9IDA7XG4gICAgICAgIHNoaXAuc3RhcnQgPSBbXTtcbiAgICAgICAgc2hpcC5ib3JkZXJzID0gW107XG4gICAgfSk7XG5cbiAgICB1c2VyVHVybiA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ2xhc3NlcyhncmlkKSB7XG4gICAgY29uc3QgY2VsbHMgPSBncmlkLmNoaWxkcmVuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2VsbHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdCcsICdmYWlsJywgJ2JvcmRlcnMnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlUmFuZG9taXNlKCkge1xuICAgIGlmICghc3RhcnRlZCkge1xuICAgICAgICBHYW1lQm9hcmQucmVzdGFydCgpO1xuICAgICAgICBHYW1lQm9hcmQucmFuZG9taXplKCk7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWFuLWdyaWQnKTtcbiAgICAgICAgY29uc3QgY2VsbHMgPSBib2FyZC5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY2VsbHNbaV0uaGFzQ2hpbGROb2RlcygpID8gY2VsbHNbaV0uZmlyc3RDaGlsZCA6ICdkb2VzbnQnKVxuICAgICAgICAgICAgY2VsbHNbaV0uaGFzQ2hpbGROb2RlcygpID8gY2VsbHNbaV0ucmVtb3ZlQ2hpbGQoY2VsbHNbaV0uZmlyc3RDaGlsZCkgOiBudWxsO1xuICAgICAgICAgICAgd2hpbGUgKGNlbGxzW2ldLmNsYXNzTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbaV0uY2xhc3NMaXN0LnJlbW92ZShjZWxsc1tpXS5jbGFzc0xpc3QuaXRlbSgwKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNlbGxzW2ldLmNsYXNzTGlzdC5hZGQoJ2NlbGwnLCBgaHVtYW4tY2VsbGApXG4gICAgICAgIH1cbiAgICAgICAgZGlzcGxheVNoaXBzKEdhbWVCb2FyZC5zaGlwcywgYm9hcmQuY2hpbGRyZW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbWlzZScpLnN0eWxlLmN1cnNvciA9ICdub3QtYWxsb3dlZCdcbiAgICB9XG59XG5cbnNldHVwR2FtZSgpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9taXNlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZVJhbmRvbWlzZSgpKVxuXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVzZXRHYW1lKCk7XG4gICAgc2V0dXBHYW1lKClcbn0pXG5cbiIsImV4cG9ydCBjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgsIElELCBib3JkZXJzKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmhpdHMgPSAwO1xuICAgICAgICB0aGlzLklEID0gSUQ7XG4gICAgICAgIHRoaXMuYm9yZGVycyA9IGJvcmRlcnNcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0cysrO1xuICAgIH1cblxuICAgIHN1bmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9