"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./util/util.js"), exports);
__exportStar(require("./snowflake/snowflake.js"), exports);
// export * from "./error/error.js";
__exportStar(require("./types/options.js"), exports);
__exportStar(require("./functions.js"), exports);
const snowflake_js_1 = require("./snowflake/snowflake.js");
const util_js_1 = require("./util/util.js");
exports.default = { AriiUtils: util_js_1.AriiUtils, Snowflake: snowflake_js_1.Snowflake };
