export declare class Esm {
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
    static getDirname(importMetaUrl: string): string;
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
    static getFilename(importMetaUrl: string): string;
    /**
     *
     * @returns returns an object containing path info: dirname, filename, basename, and extension
     */
    static getPathInfo(importMetaUrl: string): {
        dirname: string;
        filename: string;
        basename: string;
        extension: string;
    };
}
