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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Home = function() {\n    var signGenericMessage = function signGenericMessage() {\n        if (!(signer === null || signer === void 0 ? void 0 : signer._isSigner)) return;\n        signer.signMessage(\"0x6101406040523480156200001257600080fd5b506040518060400160405280600781526020017f4d79546f6b656e00000000000000000000000000000000000000000000000000815250806040518060400160405280600181526020017f31000000000000000000000000000000000000000000000000000000000000008152506040518060400160405280600781526020017f4d79546f6b656e00000000000000000000000000000000000000000000000000\").then(function(signature) {\n            console.log(\"Signature: \", signature);\n            setSignedMessage(signature);\n        }).catch(function(error) {\n            console.log(\"Error: \", error);\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"0\"), balance = ref[0], setBalance = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"No Message Set\"), signedMessage = ref1[0], setSignedMessage = ref1[1];\n    var ref2 = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useSigner)(), signer = ref2.data, isError = ref2.isError, isLoading = ref2.isLoading;\n    var contractAddress = \"0xaDf1e5171Bbc1605Bf746B490ED925cEc6479B1d\";\n    var abi = [\n        \"function balanceOf(address) public view returns (uint256)\", \n    ];\n    var providerUrl = \"https://eth-goerli.g.alchemy.com/v2/cWbSiG2tHrQ1Np3VpcUnStJUsxE7BEze\";\n    var contract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(contractAddress, abi, new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.JsonRpcProvider(providerUrl));\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var getBalance = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n                var address, balance;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            if (!(signer === null || signer === void 0 ? void 0 : signer._isSigner)) return [\n                                2\n                            ];\n                            return [\n                                4,\n                                signer === null || signer === void 0 ? void 0 : signer.getAddress()\n                            ];\n                        case 1:\n                            address = _state.sent();\n                            console.log(\"Address: \", address);\n                            return [\n                                4,\n                                contract.balanceOf(address)\n                            ];\n                        case 2:\n                            balance = _state.sent();\n                            setBalance(ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.formatEther(balance));\n                            console.log(balance);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function getBalance() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getBalance();\n    }, [\n        signer\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Signature App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"An small app to demonstrate how to sign messages.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__.ConnectButton, {}, void 0, false, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                        children: [\n                            \"Welcome to the \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"\",\n                                children: \"Signature\"\n                            }, void 0, false, {\n                                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 26\n                            }, _this),\n                            \" Express!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                        children: \"Choose a signing method to see how signatures work\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                onClick: function() {\n                                    return signGenericMessage();\n                                },\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Sign Message\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Click this to see an old school message\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://wagmi.sh\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"EIP-712 Signature\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"See how an EIP-712 Signature looks like\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://goerli.etherscan.io/address/0xadf1e5171bbc1605bf746b490ed925cec6479b1d\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"MyToken Balance →\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"You have \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: balance\n                                            }, void 0, false, {\n                                                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 25\n                                            }, _this),\n                                            \" MyTokens in your wallet\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://rainbow.me\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: \"Made with ❤️ by your frens at \\uD83C\\uDF08\"\n                }, void 0, false, {\n                    fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/josephroc/Documents/Solidity/Permit2/frontend/demo-signatures/pages/index.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"Jcv3n3rBrH7sl+XT6uo7vSUg17E=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useSigner\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNELEdBQUM7Z0NBQUNILElBQUksRUFBQyxnRkFBZ0Y7Z0NBQUNSLFNBQVMsRUFBRW5DLHFFQUFXOztrREFDN0csOERBQUNvRCxJQUFFO2tEQUFDLG1CQUFzQjs7Ozs7NkNBQUs7a0RBQy9CLDhEQUFDTCxHQUFDOzs0Q0FBQyxXQUFTOzBEQUFBLDhEQUFDTSxHQUFDOzBEQUFFdEMsT0FBTzs7Ozs7cURBQUs7NENBQUEsMEJBQXdCOzs7Ozs7NkNBQUk7Ozs7OztxQ0FDdEQ7Ozs7Ozs2QkFDQTs7Ozs7O3FCQUVEOzBCQUVQLDhEQUFDdUMsUUFBTTtnQkFBQ25CLFNBQVMsRUFBRW5DLHVFQUFhOzBCQUM5Qiw0RUFBQzhDLEdBQUM7b0JBQUNILElBQUksRUFBQyxvQkFBb0I7b0JBQUNZLE1BQU0sRUFBQyxRQUFRO29CQUFDYixHQUFHLEVBQUMscUJBQXFCOzhCQUFDLDRDQUV2RTs7Ozs7eUJBQUk7Ozs7O3FCQUNHOzs7Ozs7YUFDTCxDQUNOO0FBQ0osQ0FBQztHQTFGS3ZDLElBQUk7O1FBSXFDTiw0Q0FBUzs7O0FBSmxETSxLQUFBQSxJQUFJO0FBNEZWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29ubmVjdEJ1dHRvbiB9IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnO1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgdXNlU2lnbmVyIH0gZnJvbSAnd2FnbWknO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoXCIwXCIpO1xuICBjb25zdCBbc2lnbmVkTWVzc2FnZSwgc2V0U2lnbmVkTWVzc2FnZV0gPSB1c2VTdGF0ZShcIk5vIE1lc3NhZ2UgU2V0XCIpO1xuXG4gIGNvbnN0IHsgZGF0YTogc2lnbmVyLCBpc0Vycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVNpZ25lcigpO1xuXG4gIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IFwiMHhhRGYxZTUxNzFCYmMxNjA1QmY3NDZCNDkwRUQ5MjVjRWM2NDc5QjFkXCI7XG4gIGNvbnN0IGFiaSA9IFtcbiAgICAgIFwiZnVuY3Rpb24gYmFsYW5jZU9mKGFkZHJlc3MpIHB1YmxpYyB2aWV3IHJldHVybnMgKHVpbnQyNTYpXCIsXG4gIF1cbiAgY29uc3QgcHJvdmlkZXJVcmwgPSBcImh0dHBzOi8vZXRoLWdvZXJsaS5nLmFsY2hlbXkuY29tL3YyL2NXYlNpRzJ0SHJRMU5wM1ZwY1VuU3RKVXN4RTdCRXplXCJcbiAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgY29udHJhY3RBZGRyZXNzLFxuICAgICAgYWJpLFxuICAgICAgbmV3IGV0aGVycy5wcm92aWRlcnMuSnNvblJwY1Byb3ZpZGVyKHByb3ZpZGVyVXJsKVxuICApO1xuXG4gIGZ1bmN0aW9uIHNpZ25HZW5lcmljTWVzc2FnZSgpIHtcbiAgICBpZiAoIXNpZ25lcj8uX2lzU2lnbmVyKSByZXR1cm47XG4gICAgc2lnbmVyXG4gICAgICAuc2lnbk1lc3NhZ2UoXCIweDYxMDE0MDYwNDA1MjM0ODAxNTYyMDAwMDEyNTc2MDAwODBmZDViNTA2MDQwNTE4MDYwNDAwMTYwNDA1MjgwNjAwNzgxNTI2MDIwMDE3ZjRkNzk1NDZmNmI2NTZlMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA4MTUyNTA4MDYwNDA1MTgwNjA0MDAxNjA0MDUyODA2MDAxODE1MjYwMjAwMTdmMzEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDgxNTI1MDYwNDA1MTgwNjA0MDAxNjA0MDUyODA2MDA3ODE1MjYwMjAwMTdmNGQ3OTU0NmY2YjY1NmUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFwiKVxuICAgICAgLnRoZW4oKHNpZ25hdHVyZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnU2lnbmF0dXJlOiAnLCBzaWduYXR1cmUpO1xuICAgICAgICBzZXRTaWduZWRNZXNzYWdlKHNpZ25hdHVyZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCFzaWduZXI/Ll9pc1NpZ25lcikgcmV0dXJuO1xuICAgICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IHNpZ25lcj8uZ2V0QWRkcmVzcygpO1xuICAgICAgY29uc29sZS5sb2coXCJBZGRyZXNzOiBcIiwgYWRkcmVzcylcbiAgICAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCBjb250cmFjdC5iYWxhbmNlT2YoYWRkcmVzcyk7XG4gICAgICBzZXRCYWxhbmNlKGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihiYWxhbmNlKSlcbiAgICAgIGNvbnNvbGUubG9nKGJhbGFuY2UpO1xuICAgIH1cbiAgICBnZXRCYWxhbmNlKCk7XG4gIH0sIFtzaWduZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U2lnbmF0dXJlIEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiQW4gc21hbGwgYXBwIHRvIGRlbW9uc3RyYXRlIGhvdyB0byBzaWduIG1lc3NhZ2VzLlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxDb25uZWN0QnV0dG9uIC8+XG5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBXZWxjb21lIHRvIHRoZSA8YSBocmVmPVwiXCI+U2lnbmF0dXJlPC9hPiBFeHByZXNzIVxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBDaG9vc2UgYSBzaWduaW5nIG1ldGhvZCB0byBzZWUgaG93IHNpZ25hdHVyZXMgd29ya1xuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBzaWduR2VuZXJpY01lc3NhZ2UoKX0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8aDI+U2lnbiBNZXNzYWdlPC9oMj5cbiAgICAgICAgICAgIDxwPkNsaWNrIHRoaXMgdG8gc2VlIGFuIG9sZCBzY2hvb2wgbWVzc2FnZTwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93YWdtaS5zaFwiIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGgyPkVJUC03MTIgU2lnbmF0dXJlPC9oMj5cbiAgICAgICAgICAgIDxwPlNlZSBob3cgYW4gRUlQLTcxMiBTaWduYXR1cmUgbG9va3MgbGlrZTwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9nb2VybGkuZXRoZXJzY2FuLmlvL2FkZHJlc3MvMHhhZGYxZTUxNzFiYmMxNjA1YmY3NDZiNDkwZWQ5MjVjZWM2NDc5YjFkXCIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8aDI+TXlUb2tlbiBCYWxhbmNlICZyYXJyOzwvaDI+XG4gICAgICAgICAgICA8cD5Zb3UgaGF2ZSA8Yj57YmFsYW5jZX08L2I+IE15VG9rZW5zIGluIHlvdXIgd2FsbGV0PC9wPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yYWluYm93Lm1lXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgIE1hZGUgd2l0aCDinaTvuI8gYnkgeW91ciBmcmVucyBhdCDwn4yIXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJDb25uZWN0QnV0dG9uIiwidXNlU2lnbmVyIiwiZXRoZXJzIiwiSGVhZCIsInN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsInNpZ25HZW5lcmljTWVzc2FnZSIsInNpZ25lciIsIl9pc1NpZ25lciIsInNpZ25NZXNzYWdlIiwidGhlbiIsInNpZ25hdHVyZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTaWduZWRNZXNzYWdlIiwiY2F0Y2giLCJlcnJvciIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwic2lnbmVkTWVzc2FnZSIsImRhdGEiLCJpc0Vycm9yIiwiaXNMb2FkaW5nIiwiY29udHJhY3RBZGRyZXNzIiwiYWJpIiwicHJvdmlkZXJVcmwiLCJjb250cmFjdCIsIkNvbnRyYWN0IiwicHJvdmlkZXJzIiwiSnNvblJwY1Byb3ZpZGVyIiwiZ2V0QmFsYW5jZSIsImFkZHJlc3MiLCJnZXRBZGRyZXNzIiwiYmFsYW5jZU9mIiwidXRpbHMiLCJmb3JtYXRFdGhlciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaDEiLCJhIiwicCIsImRlc2NyaXB0aW9uIiwiZ3JpZCIsIm9uQ2xpY2siLCJjYXJkIiwiaDIiLCJiIiwiZm9vdGVyIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});