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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1), balance = ref[0], setBalance = ref[1];\n    var ref1 = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useSigner)(), signer = ref1.data, isError = ref1.isError, isLoading = ref1.isLoading;\n    var contractAddress = \"0x6b4B530656c450c685a46816751e6c8211483b77\";\n    var abi = [\n        \"function balanceOf(address) public view returns (uint256)\", \n    ];\n    var providerUrl = \"https://eth-goerli.g.alchemy.com/v2/cWbSiG2tHrQ1Np3VpcUnStJUsxE7BEze\";\n    var contract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(contractAddress, abi, new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.JsonRpcProvider(providerUrl));\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var getBalance = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n                var balance, _;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _ = contract.balanceOf;\n                            return [\n                                4,\n                                signer === null || signer === void 0 ? void 0 : signer.getAddress()\n                            ];\n                        case 1:\n                            return [\n                                4,\n                                _.apply(contract, [\n                                    _state.sent()\n                                ])\n                            ];\n                        case 2:\n                            balance = _state.sent();\n                            console.log(balance);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function getBalance() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getBalance();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Signature App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"An small app to demonstrate how to sign messages.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__.ConnectButton, {}, void 0, false, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                        children: [\n                            \"Welcome to the \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"\",\n                                children: \"Signature\"\n                            }, void 0, false, {\n                                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 26\n                            }, _this),\n                            \" Express!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                        children: \"Choose a signing method to see how signatures work\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://rainbowkit.com\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Sign Message\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Click this to see an old school message\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://wagmi.sh\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"EIP-712 Signature\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"See how an EIP-712 Signature looks like\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://rainbowkit.com\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"MyToken Balance\"\n                            }, void 0, false, {\n                                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"You have \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {}, void 0, false, {\n                                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 25\n                                    }, _this),\n                                    \" MyTokens in your wallet\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://rainbow.me\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: \"Made with ❤️ by your frens at \\uD83C\\uDF08\"\n                }, void 0, false, {\n                    fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"1IwCS3ywgkNP7Mxc7c1PzpACtjg=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useSigner\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUVBQVc7O2tEQUMvQyw4REFBQ3VDLElBQUU7a0RBQUMsbUJBQWlCOzs7Ozs2Q0FBSztrREFDMUIsOERBQUNKLEdBQUM7a0RBQUMseUNBQXVDOzs7Ozs2Q0FBSTs7Ozs7O3FDQUM1Qzs7Ozs7OzZCQUdBO2tDQUNOLDhEQUFDRCxHQUFDO3dCQUFDSCxJQUFJLEVBQUMsd0JBQXdCO3dCQUFDUixTQUFTLEVBQUV2QixxRUFBVzs7MENBQ25ELDhEQUFDdUMsSUFBRTswQ0FBQyxpQkFBZTs7Ozs7cUNBQUs7MENBQ3hCLDhEQUFDSixHQUFDOztvQ0FBQyxXQUFTO2tEQUFBLDhEQUFDSyxHQUFDOzs7OzZDQUFPO29DQUFBLDBCQUF3Qjs7Ozs7O3FDQUFJOzs7Ozs7NkJBQy9DOzs7Ozs7cUJBQ0Q7MEJBRVAsOERBQUNDLFFBQU07Z0JBQUNsQixTQUFTLEVBQUV2Qix1RUFBYTswQkFDOUIsNEVBQUNrQyxHQUFDO29CQUFDSCxJQUFJLEVBQUMsb0JBQW9CO29CQUFDVyxNQUFNLEVBQUMsUUFBUTtvQkFBQ1osR0FBRyxFQUFDLHFCQUFxQjs4QkFBQyw0Q0FFdkU7Ozs7O3lCQUFJOzs7OztxQkFDRzs7Ozs7O2FBQ0wsQ0FDTjtBQUNKLENBQUM7R0F4RUszQixJQUFJOztRQUdxQ04sNENBQVM7OztBQUhsRE0sS0FBQUEsSUFBSTtBQTBFViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbm5lY3RCdXR0b24gfSBmcm9tICdAcmFpbmJvdy1tZS9yYWluYm93a2l0JztcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IHVzZVNpZ25lciB9IGZyb20gJ3dhZ21pJztcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKDEpO1xuXG4gIGNvbnN0IHsgZGF0YTogc2lnbmVyLCBpc0Vycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVNpZ25lcigpO1xuXG4gIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IFwiMHg2YjRCNTMwNjU2YzQ1MGM2ODVhNDY4MTY3NTFlNmM4MjExNDgzYjc3XCI7XG4gIGNvbnN0IGFiaSA9IFtcbiAgICAgIFwiZnVuY3Rpb24gYmFsYW5jZU9mKGFkZHJlc3MpIHB1YmxpYyB2aWV3IHJldHVybnMgKHVpbnQyNTYpXCIsXG4gIF1cbiAgY29uc3QgcHJvdmlkZXJVcmwgPSBcImh0dHBzOi8vZXRoLWdvZXJsaS5nLmFsY2hlbXkuY29tL3YyL2NXYlNpRzJ0SHJRMU5wM1ZwY1VuU3RKVXN4RTdCRXplXCJcbiAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgY29udHJhY3RBZGRyZXNzLFxuICAgICAgYWJpLFxuICAgICAgbmV3IGV0aGVycy5wcm92aWRlcnMuSnNvblJwY1Byb3ZpZGVyKHByb3ZpZGVyVXJsKVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0QmFsYW5jZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCBjb250cmFjdC5iYWxhbmNlT2YoYXdhaXQgc2lnbmVyPy5nZXRBZGRyZXNzKCkpO1xuICAgICAgY29uc29sZS5sb2coYmFsYW5jZSk7XG4gICAgfVxuICAgIGdldEJhbGFuY2UoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TaWduYXR1cmUgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJBbiBzbWFsbCBhcHAgdG8gZGVtb25zdHJhdGUgaG93IHRvIHNpZ24gbWVzc2FnZXMuXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPENvbm5lY3RCdXR0b24gLz5cblxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIFdlbGNvbWUgdG8gdGhlIDxhIGhyZWY9XCJcIj5TaWduYXR1cmU8L2E+IEV4cHJlc3MhXG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIENob29zZSBhIHNpZ25pbmcgbWV0aG9kIHRvIHNlZSBob3cgc2lnbmF0dXJlcyB3b3JrXG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JhaW5ib3draXQuY29tXCIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8aDI+U2lnbiBNZXNzYWdlPC9oMj5cbiAgICAgICAgICAgIDxwPkNsaWNrIHRoaXMgdG8gc2VlIGFuIG9sZCBzY2hvb2wgbWVzc2FnZTwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93YWdtaS5zaFwiIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGgyPkVJUC03MTIgU2lnbmF0dXJlPC9oMj5cbiAgICAgICAgICAgIDxwPlNlZSBob3cgYW4gRUlQLTcxMiBTaWduYXR1cmUgbG9va3MgbGlrZTwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JhaW5ib3draXQuY29tXCIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8aDI+TXlUb2tlbiBCYWxhbmNlPC9oMj5cbiAgICAgICAgICAgIDxwPllvdSBoYXZlIDxiPnt9PC9iPiBNeVRva2VucyBpbiB5b3VyIHdhbGxldDwvcD5cbiAgICAgICAgICA8L2E+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcmFpbmJvdy5tZVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICBNYWRlIHdpdGgg4p2k77iPIGJ5IHlvdXIgZnJlbnMgYXQg8J+MiFxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiQ29ubmVjdEJ1dHRvbiIsInVzZVNpZ25lciIsImV0aGVycyIsIkhlYWQiLCJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImRhdGEiLCJzaWduZXIiLCJpc0Vycm9yIiwiaXNMb2FkaW5nIiwiY29udHJhY3RBZGRyZXNzIiwiYWJpIiwicHJvdmlkZXJVcmwiLCJjb250cmFjdCIsIkNvbnRyYWN0IiwicHJvdmlkZXJzIiwiSnNvblJwY1Byb3ZpZGVyIiwiZ2V0QmFsYW5jZSIsImJhbGFuY2VPZiIsImdldEFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsImEiLCJwIiwiZGVzY3JpcHRpb24iLCJncmlkIiwiY2FyZCIsImgyIiwiYiIsImZvb3RlciIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});