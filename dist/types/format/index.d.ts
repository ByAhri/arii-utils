export declare class Format {
    /**
     * formats a number from normal (77777) to formatted (77.7k)
     * @param number number to format
     * @returns formatted number
     */
    static formatNumber(number: number): string;
    /**
     * replaces uppercases with spaces and lowercases them
     * @param textOrTexts string or array of strings to convert
     * @example upperCaseToSpace("helloWorld") // hello world
     * @example upperCaseToSpace(["helloWorld", "helloWorld2"]) // ["hello world", "hello world2"]
     * @returns converted string or array of strings
     */
    static upperCaseToSpace(textOrTexts: string | string[]): string | string[];
    /**
     * converts seconds to HH:MM:SS
     * @param d seconds
     */
    static secondsToHms(d: number | string): string;
    /**
     * convert a number (1) to ordinal string (1st)
     * @param n number to convert
     * @returns ordinal string
     * @example numberToOrdinal(1) // 1st
     */
    static numberToOrdinal(n: number): string;
    /**
     * @param t time in milliseconds
     * @param includeSeconds whether to include seconds in the output (default false)
     * @returns formatted time string
     */
    static simpleTimeFormat(t: number, includeSeconds?: boolean): string;
}
