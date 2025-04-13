"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Esm = void 0;
const url_1 = require("url");
const path_1 = require("path");
class Esm {
    /**
     *
     * @param importMetaUrl - the url of the module (import.meta.url)
     * @returns returns the __dirname value for ESM environments
     * @example
     * ```ts
     * import { AriiEsm } from "@byahri/utils";
     * const __dirname = AriiEsm.getDirname(import.meta.url);
     * console.log(__dirname); // /path/to/your/module
     * ```
     */
    static getDirname(importMetaUrl) {
        return (0, path_1.dirname)(this.getFilename(importMetaUrl));
    }
    ;
    /**
     *
     * @param importMetaUrl - the url of the module (import.meta.url)
     * @returns returns the __filename value for ESM environments
     * @example
     * ```ts
     * import { AriiEsm } from "@byahri/utils";
     * const __filename = AriiEsm.getFilename(import.meta.url);
     * console.log(__filename); // /path/to/your/module/index.js
     * ```
     */
    static getFilename(importMetaUrl) {
        // Define __filename for ESM modules
        return (0, url_1.fileURLToPath)(importMetaUrl);
    }
    ;
    /**
     *
     * @returns returns an object containing path info: dirname, filename, basename, and extension
     */
    static getPathInfo(importMetaUrl) {
        const filename = this.getFilename(importMetaUrl);
        return {
            dirname: (0, path_1.dirname)(filename),
            filename,
            basename: (0, path_1.basename)(filename),
            extension: (0, path_1.extname)(filename),
        };
    }
    ;
}
exports.Esm = Esm;
