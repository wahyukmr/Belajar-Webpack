/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cekInputValid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cekInputValid.js */ "./src/utils/cekInputValid.js");
/* harmony import */ var _utils_parseInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/parseInput.js */ "./src/utils/parseInput.js");



const run = (alertService, calculatorService, jokesService) => {
  alertService.sembunyikanError();

  calculatorService.onClick(() => {
    alertService.sembunyikanError();
    const input = calculatorService.getInput();
    const angka = (0,_utils_parseInput_js__WEBPACK_IMPORTED_MODULE_1__["default"])(...input);
    if ((0,_utils_cekInputValid_js__WEBPACK_IMPORTED_MODULE_0__["default"])(...angka)) {
      const [angka1, angka2] = angka;
      calculatorService.setResult(angka1, angka2);
    } else {
      calculatorService.setResult("");
      alertService.tampilkanErrorPenjumlahan(input, angka);
    }
  });

  jokesService.onClick(() => {
    fetch("https://candaan-api.vercel.app/api/text/random")
      .then((response) => response.json())
      .then((data) => {
        jokesService.setModal(data.data);
      });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (run);


/***/ }),

/***/ "./src/services/alert.service.js":
/*!***************************************!*\
  !*** ./src/services/alert.service.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cekInputValid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cekInputValid.js */ "./src/utils/cekInputValid.js");

class AlertService {
  constructor() {
    this.error = document.querySelector("#error");
  }

  tampilkanErrorPenjumlahan(input, angka) {
    const hasil = input.reduce((pesan, nilai, index) => {
      if ((0,_utils_cekInputValid_js__WEBPACK_IMPORTED_MODULE_0__["default"])(angka[index])) {
        return pesan + "";
      } else {
        return pesan + `${nilai} itu bukan angka! `;
      }
    }, "Silahkan masukkan angka yang benar: ");

    this.error.classList.remove("d-none");
    this.error.innerText = hasil;
  }

  sembunyikanError() {
    this.error.classList.add("d-none");
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AlertService());


/***/ }),

/***/ "./src/services/calculator.service.js":
/*!********************************************!*\
  !*** ./src/services/calculator.service.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class CalculatorService {
  constructor() {
    this.operand1 = document.querySelector("#operand1");
    this.operand2 = document.querySelector("#operand2");
    this.tombolTambah = document.querySelector("#tombol-tambah");
    this.hasil = document.querySelector("#hasil");
  }

  getInput() {
    return [this.operand1.value, this.operand2.value];
  }

  setResult(angka1, angka2) {
    this.hasil.innerText = angka1 + angka2;
  }

  onClick(cb) {
    this.tombolTambah.addEventListener("click", cb);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new CalculatorService());


/***/ }),

/***/ "./src/services/jokes.service.js":
/*!***************************************!*\
  !*** ./src/services/jokes.service.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class JokesService {
  constructor() {
    this.tombolJokes = document.querySelector("#jokes-receh");
    this.modalBody = document.querySelector(".modal-body");
  }

  setModal(str) {
    this.modalBody.innerHTML = str;
  }

  onClick(cb) {
    this.tombolJokes.addEventListener("click", cb);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new JokesService());


/***/ }),

/***/ "./src/utils/cekInputValid.js":
/*!************************************!*\
  !*** ./src/utils/cekInputValid.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const cekInputValid = (...angka) => {
  return angka.every((num) => typeof num === "number" && !isNaN(num));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cekInputValid);


/***/ }),

/***/ "./src/utils/parseInput.js":
/*!*********************************!*\
  !*** ./src/utils/parseInput.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const parseInput = (...input) => {
  return input.map((str) => parseInt(str));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseInput);


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app.js */ "./src/js/app.js");
/* harmony import */ var _services_alert_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/alert.service.js */ "./src/services/alert.service.js");
/* harmony import */ var _services_calculator_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/calculator.service.js */ "./src/services/calculator.service.js");
/* harmony import */ var _services_jokes_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/jokes.service.js */ "./src/services/jokes.service.js");





(0,_js_app_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_services_alert_service_js__WEBPACK_IMPORTED_MODULE_1__["default"], _services_calculator_service_js__WEBPACK_IMPORTED_MODULE_2__["default"], _services_jokes_service_js__WEBPACK_IMPORTED_MODULE_3__["default"]);

/******/ })()
;