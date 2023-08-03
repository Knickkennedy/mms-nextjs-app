"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/packageselection.js":
/*!****************************************!*\
  !*** ./components/packageselection.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PackageSelection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ \"./components/header.js\");\n/* harmony import */ var _public_wedding_pack_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/wedding_pack.png */ \"./public/wedding_pack.png\");\n/* harmony import */ var _public_party_pack_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/party_pack.png */ \"./public/party_pack.png\");\n/* harmony import */ var _public_mini_bottles_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/mini_bottles.png */ \"./public/mini_bottles.png\");\n/* harmony import */ var _public_bulk_candy_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/bulk_candy.png */ \"./public/bulk_candy.png\");\n/* harmony import */ var _public_giftjar_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/giftjar.png */ \"./public/giftjar.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction PackageSelection(param) {\n    let { incomingMms } = param;\n    _s();\n    const [packaging, setPackaging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: \"BK0001\",\n            src: _public_bulk_candy_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            name: \"Bulk Candy 2lbs\",\n            available: true,\n            availabilityDate: \"\",\n            chosen: \"\"\n        },\n        {\n            id: \"BK0001_05\",\n            src: _public_bulk_candy_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            name: \"Bulk Candy 5lbs\",\n            available: true,\n            availabilityDate: \"\",\n            chosen: \"\"\n        },\n        {\n            id: \"GJ0001\",\n            src: _public_giftjar_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            name: \"Gift Jar Red\",\n            available: true,\n            availabilityDate: \"\",\n            chosen: \"border-solid border-4 border-black\"\n        },\n        {\n            id: \"PF0001\",\n            src: _public_party_pack_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            name: \"Party Favor Packs\",\n            available: true,\n            availabilityDate: \"\",\n            chosen: \"\"\n        },\n        {\n            id: \"DIY0001\",\n            src: _public_mini_bottles_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            name: \"DIY Mini Occasion Bottle Party Favor Kit\",\n            available: true,\n            availabilityDate: \"\",\n            chosen: \"\"\n        },\n        {\n            id: \"WR0001\",\n            src: _public_wedding_pack_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            name: \"Wedding Ring Party Favors\",\n            available: true,\n            availabilityDate: \"\",\n            chosen: \"\"\n        }\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        for(const index in packaging){\n            fetch(\"https://api.watsoncommerce.ibm.com/inventory/us-1bbb91c7/v2/availability/network\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    distributionGroupId: \"DIAB_ALL\",\n                    lines: [\n                        {\n                            lineId: \"1\",\n                            itemId: packaging[index].id,\n                            unitOfMeasure: \"EACH\"\n                        }\n                    ],\n                    segment: \"\",\n                    segmentType: \"\",\n                    considerSafetyStock: false\n                }),\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"Authorization\": \"Bearer \" + \"ZWIBmbJJrZJkJx6y76MpHOXL5raxKzYb\"\n                }\n            }).then((res)=>res.json()).then((data)=>{\n                console.log(data.lines[0].networkAvailabilities[0].futureAvailability);\n                if (data.lines[0].networkAvailabilities[0].currentAvailability.availableQuantity <= 0) {\n                    if (data.lines[0].networkAvailabilities[0].futureAvailability.length > 0) {\n                        if (data.lines[0].networkAvailabilities[0].futureAvailability[0].availableQuantity > 0) {\n                            console.log(\"available soon\");\n                            updateAvailability(index, data.lines[0].networkAvailabilities[0].futureAvailability[0].toTs);\n                        }\n                    }\n                }\n            /* if (data.lines[0].networkAvailabilities[0].onhandAvailableQuantity <= 0) {\n                        updateAvailability(index, data.lines[0].networkAvailabilities[0].futureEarliestShipTs)\n                    } */ });\n        }\n    }, []);\n    function updateAvailability(ind, date) {\n        const newpackaging = packaging.map((pack, i)=>{\n            if (i == ind) {\n                pack.available = false;\n                pack.availabilityDate = dayjs__WEBPACK_IMPORTED_MODULE_9___default()(date).format(\"MMMM D, YYYY\");\n                console.log(pack.availabilityDate);\n                return pack;\n            } else {\n                return pack;\n            }\n        });\n        setPackaging(newpackaging);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-96\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                firstLine: \"Select your packaging\",\n                secondLine: \"Tap to select available packaging.\"\n            }, void 0, false, {\n                fileName: \"/Users/knicholas.kennedyibm.com/Documents/projects/mms-nextjs-app/components/packageselection.js\",\n                lineNumber: 121,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row flex-wrap justify-center\",\n                children: packaging.map((pack, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-2 rounded-full aspect-square h-fit flex flex-col w-1/4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                src: pack.src,\n                                alt: pack.name,\n                                className: \"m-2 rounded-xl aspect-square h-20 w-fit \".concat(pack.chosen)\n                            }, void 0, false, {\n                                fileName: \"/Users/knicholas.kennedyibm.com/Documents/projects/mms-nextjs-app/components/packageselection.js\",\n                                lineNumber: 131,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-xs text-center flex-wrap \".concat(pack.available ? \"\" : \"opacity-25\"),\n                                children: pack.name\n                            }, void 0, false, {\n                                fileName: \"/Users/knicholas.kennedyibm.com/Documents/projects/mms-nextjs-app/components/packageselection.js\",\n                                lineNumber: 136,\n                                columnNumber: 29\n                            }, this),\n                            !pack.available && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-xs text-center flex-wrap\",\n                                children: [\n                                    \"Available on \",\n                                    pack.availabilityDate\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/knicholas.kennedyibm.com/Documents/projects/mms-nextjs-app/components/packageselection.js\",\n                                lineNumber: 137,\n                                columnNumber: 49\n                            }, this)\n                        ]\n                    }, pack.id, true, {\n                        fileName: \"/Users/knicholas.kennedyibm.com/Documents/projects/mms-nextjs-app/components/packageselection.js\",\n                        lineNumber: 128,\n                        columnNumber: 25\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/knicholas.kennedyibm.com/Documents/projects/mms-nextjs-app/components/packageselection.js\",\n                lineNumber: 125,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/knicholas.kennedyibm.com/Documents/projects/mms-nextjs-app/components/packageselection.js\",\n        lineNumber: 120,\n        columnNumber: 9\n    }, this);\n}\n_s(PackageSelection, \"yKM4oUbp6ZF7KnT5Rgz8hUOobGA=\");\n_c = PackageSelection;\nvar _c;\n$RefreshReg$(_c, \"PackageSelection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxLQUFLTCxLQUFJO2dCQUNSSSxLQUFLdEMsU0FBUyxHQUFHO2dCQUNqQnNDLEtBQUtyQyxnQkFBZ0IsR0FBR1QsNENBQUtBLENBQUMyQyxNQUFNSyxNQUFNLENBQUM7Z0JBQzNDZixRQUFRQyxHQUFHLENBQUNZLEtBQUtyQyxnQkFBZ0I7Z0JBQ2pDLE9BQU9xQztZQUNYLE9BQ0k7Z0JBQ0EsT0FBT0E7WUFDWDtRQUNKO1FBRUExQyxhQUFhd0M7SUFDakI7SUFFQSxxQkFDSSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUN6RCwrQ0FBTUE7Z0JBQ0gwRCxXQUFVO2dCQUNWQyxZQUFXOzs7Ozs7MEJBRWYsOERBQUNIO2dCQUFJQyxXQUFVOzBCQUVQL0MsVUFBVTBDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNbkMsc0JBQ2pCLDhEQUFDc0M7d0JBQ0dDLFdBQVU7OzBDQUVWLDhEQUFDbkQsbURBQUtBO2dDQUNGTyxLQUFLd0MsS0FBS3hDLEdBQUc7Z0NBQ2IrQyxLQUFLUCxLQUFLdkMsSUFBSTtnQ0FDZDJDLFdBQVcsMkNBQXVELE9BQVpKLEtBQUtwQyxNQUFNOzs7Ozs7MENBRXJFLDhEQUFDNEM7Z0NBQUtKLFdBQVcsaUNBQW9FLE9BQW5DSixLQUFLdEMsU0FBUyxHQUFHLEtBQUs7MENBQWlCc0MsS0FBS3ZDLElBQUk7Ozs7Ozs0QkFDakcsQ0FBQ3VDLEtBQUt0QyxTQUFTLGtCQUFJLDhEQUFDOEM7Z0NBQUtKLFdBQVU7O29DQUFnQztvQ0FBY0osS0FBS3JDLGdCQUFnQjs7Ozs7Ozs7dUJBUGxHcUMsS0FBS3pDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjeEM7R0FySXdCSjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3BhY2thZ2VzZWxlY3Rpb24uanM/ZjA5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCJcbmltcG9ydCBXZWRkaW5nUmluZyBmcm9tICcuLi9wdWJsaWMvd2VkZGluZ19wYWNrLnBuZydcbmltcG9ydCBQYXJ0eVBhY2sgZnJvbSAnLi4vcHVibGljL3BhcnR5X3BhY2sucG5nJ1xuaW1wb3J0IE1pbmlCb3R0bGVzIGZyb20gJy4uL3B1YmxpYy9taW5pX2JvdHRsZXMucG5nJ1xuaW1wb3J0IEJ1bGtDYW5keSBmcm9tICcuLi9wdWJsaWMvYnVsa19jYW5keS5wbmcnXG5pbXBvcnQgR2lmdGphciBmcm9tICcuLi9wdWJsaWMvZ2lmdGphci5wbmcnXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhY2thZ2VTZWxlY3Rpb24oeyBpbmNvbWluZ01tcyB9KSB7XG4gICAgY29uc3QgW3BhY2thZ2luZywgc2V0UGFja2FnaW5nXSA9IHVzZVN0YXRlKFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdCSzAwMDEnLFxuICAgICAgICAgICAgc3JjOiBCdWxrQ2FuZHksXG4gICAgICAgICAgICBuYW1lOiAnQnVsayBDYW5keSAybGJzJyxcbiAgICAgICAgICAgIGF2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGF2YWlsYWJpbGl0eURhdGU6ICcnLFxuICAgICAgICAgICAgY2hvc2VuOiAnJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ0JLMDAwMV8wNScsXG4gICAgICAgICAgICBzcmM6IEJ1bGtDYW5keSxcbiAgICAgICAgICAgIG5hbWU6ICdCdWxrIENhbmR5IDVsYnMnLFxuICAgICAgICAgICAgYXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgYXZhaWxhYmlsaXR5RGF0ZTogJycsXG4gICAgICAgICAgICBjaG9zZW46ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnR0owMDAxJyxcbiAgICAgICAgICAgIHNyYzogR2lmdGphcixcbiAgICAgICAgICAgIG5hbWU6ICdHaWZ0IEphciBSZWQnLFxuICAgICAgICAgICAgYXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgYXZhaWxhYmlsaXR5RGF0ZTogJycsXG4gICAgICAgICAgICBjaG9zZW46ICdib3JkZXItc29saWQgYm9yZGVyLTQgYm9yZGVyLWJsYWNrJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ1BGMDAwMScsXG4gICAgICAgICAgICBzcmM6IFBhcnR5UGFjayxcbiAgICAgICAgICAgIG5hbWU6ICdQYXJ0eSBGYXZvciBQYWNrcycsXG4gICAgICAgICAgICBhdmFpbGFibGU6IHRydWUsXG4gICAgICAgICAgICBhdmFpbGFiaWxpdHlEYXRlOiAnJyxcbiAgICAgICAgICAgIGNob3NlbjogJydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdESVkwMDAxJyxcbiAgICAgICAgICAgIHNyYzogTWluaUJvdHRsZXMsXG4gICAgICAgICAgICBuYW1lOiAnRElZIE1pbmkgT2NjYXNpb24gQm90dGxlIFBhcnR5IEZhdm9yIEtpdCcsXG4gICAgICAgICAgICBhdmFpbGFibGU6IHRydWUsXG4gICAgICAgICAgICBhdmFpbGFiaWxpdHlEYXRlOiAnJyxcbiAgICAgICAgICAgIGNob3NlbjogJydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdXUjAwMDEnLFxuICAgICAgICAgICAgc3JjOiBXZWRkaW5nUmluZyxcbiAgICAgICAgICAgIG5hbWU6ICdXZWRkaW5nIFJpbmcgUGFydHkgRmF2b3JzJyxcbiAgICAgICAgICAgIGF2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGF2YWlsYWJpbGl0eURhdGU6ICcnLFxuICAgICAgICAgICAgY2hvc2VuOiAnJ1xuICAgICAgICB9XG4gICAgXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgaW5kZXggaW4gcGFja2FnaW5nKSB7XG4gICAgICAgICAgICBmZXRjaCgnaHR0cHM6Ly9hcGkud2F0c29uY29tbWVyY2UuaWJtLmNvbS9pbnZlbnRvcnkvdXMtMWJiYjkxYzcvdjIvYXZhaWxhYmlsaXR5L25ldHdvcmsnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICBkaXN0cmlidXRpb25Hcm91cElkOiBcIkRJQUJfQUxMXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUlkOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtSWQ6IHBhY2thZ2luZ1tpbmRleF0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pdE9mTWVhc3VyZTogXCJFQUNIXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudFR5cGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnNpZGVyU2FmZXR5U3RvY2s6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JFQVJFUl9UT0tFTlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmxpbmVzWzBdLm5ldHdvcmtBdmFpbGFiaWxpdGllc1swXS5mdXR1cmVBdmFpbGFiaWxpdHkpXG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGEubGluZXNbMF0ubmV0d29ya0F2YWlsYWJpbGl0aWVzWzBdLmN1cnJlbnRBdmFpbGFiaWxpdHkuYXZhaWxhYmxlUXVhbnRpdHkgPD0gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLmxpbmVzWzBdLm5ldHdvcmtBdmFpbGFiaWxpdGllc1swXS5mdXR1cmVBdmFpbGFiaWxpdHkubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5saW5lc1swXS5uZXR3b3JrQXZhaWxhYmlsaXRpZXNbMF0uZnV0dXJlQXZhaWxhYmlsaXR5WzBdLmF2YWlsYWJsZVF1YW50aXR5ID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXZhaWxhYmxlIHNvb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQXZhaWxhYmlsaXR5KGluZGV4LCBkYXRhLmxpbmVzWzBdLm5ldHdvcmtBdmFpbGFiaWxpdGllc1swXS5mdXR1cmVBdmFpbGFiaWxpdHlbMF0udG9UcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLyogaWYgKGRhdGEubGluZXNbMF0ubmV0d29ya0F2YWlsYWJpbGl0aWVzWzBdLm9uaGFuZEF2YWlsYWJsZVF1YW50aXR5IDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUF2YWlsYWJpbGl0eShpbmRleCwgZGF0YS5saW5lc1swXS5uZXR3b3JrQXZhaWxhYmlsaXRpZXNbMF0uZnV0dXJlRWFybGllc3RTaGlwVHMpXG4gICAgICAgICAgICAgICAgICAgIH0gKi9cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSwgW10pXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVBdmFpbGFiaWxpdHkoaW5kLCBkYXRlKXtcbiAgICAgICAgY29uc3QgbmV3cGFja2FnaW5nID0gcGFja2FnaW5nLm1hcCgocGFjaywgaSkgPT4ge1xuICAgICAgICAgICAgaWYoaSA9PSBpbmQpe1xuICAgICAgICAgICAgICAgIHBhY2suYXZhaWxhYmxlID0gZmFsc2VcbiAgICAgICAgICAgICAgICBwYWNrLmF2YWlsYWJpbGl0eURhdGUgPSBkYXlqcyhkYXRlKS5mb3JtYXQoJ01NTU0gRCwgWVlZWScpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGFjay5hdmFpbGFiaWxpdHlEYXRlKVxuICAgICAgICAgICAgICAgIHJldHVybiBwYWNrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBwYWNrXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgc2V0UGFja2FnaW5nKG5ld3BhY2thZ2luZylcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtOTZcIj5cbiAgICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgICAgICBmaXJzdExpbmU9J1NlbGVjdCB5b3VyIHBhY2thZ2luZydcbiAgICAgICAgICAgICAgICBzZWNvbmRMaW5lPSdUYXAgdG8gc2VsZWN0IGF2YWlsYWJsZSBwYWNrYWdpbmcuJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhY2thZ2luZy5tYXAoKHBhY2ssIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm0tMiByb3VuZGVkLWZ1bGwgYXNwZWN0LXNxdWFyZSBoLWZpdCBmbGV4IGZsZXgtY29sIHctMS80XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3BhY2suaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3BhY2suc3JjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3BhY2submFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbS0yIHJvdW5kZWQteGwgYXNwZWN0LXNxdWFyZSBoLTIwIHctZml0ICR7cGFjay5jaG9zZW59YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRleHQteHMgdGV4dC1jZW50ZXIgZmxleC13cmFwICR7cGFjay5hdmFpbGFibGUgPyAnJyA6ICdvcGFjaXR5LTI1J31gfT57cGFjay5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXBhY2suYXZhaWxhYmxlICYmIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1jZW50ZXIgZmxleC13cmFwXCI+QXZhaWxhYmxlIG9uIHtwYWNrLmF2YWlsYWJpbGl0eURhdGV9PC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZGVyIiwiV2VkZGluZ1JpbmciLCJQYXJ0eVBhY2siLCJNaW5pQm90dGxlcyIsIkJ1bGtDYW5keSIsIkdpZnRqYXIiLCJJbWFnZSIsImRheWpzIiwiUGFja2FnZVNlbGVjdGlvbiIsImluY29taW5nTW1zIiwicGFja2FnaW5nIiwic2V0UGFja2FnaW5nIiwiaWQiLCJzcmMiLCJuYW1lIiwiYXZhaWxhYmxlIiwiYXZhaWxhYmlsaXR5RGF0ZSIsImNob3NlbiIsImluZGV4IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRpc3RyaWJ1dGlvbkdyb3VwSWQiLCJsaW5lcyIsImxpbmVJZCIsIml0ZW1JZCIsInVuaXRPZk1lYXN1cmUiLCJzZWdtZW50Iiwic2VnbWVudFR5cGUiLCJjb25zaWRlclNhZmV0eVN0b2NrIiwiaGVhZGVycyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CRUFSRVJfVE9LRU4iLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibmV0d29ya0F2YWlsYWJpbGl0aWVzIiwiZnV0dXJlQXZhaWxhYmlsaXR5IiwiY3VycmVudEF2YWlsYWJpbGl0eSIsImF2YWlsYWJsZVF1YW50aXR5IiwibGVuZ3RoIiwidXBkYXRlQXZhaWxhYmlsaXR5IiwidG9UcyIsImluZCIsImRhdGUiLCJuZXdwYWNrYWdpbmciLCJtYXAiLCJwYWNrIiwiaSIsImZvcm1hdCIsImRpdiIsImNsYXNzTmFtZSIsImZpcnN0TGluZSIsInNlY29uZExpbmUiLCJhbHQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/packageselection.js\n"));

/***/ })

});