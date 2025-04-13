import { BufferEncoding } from "../types/options.js";
export declare class Tokens {
    /**
     * generates a snowflake id based on the epoch provided
     * @param epoch - The epoch to use for generating the snowflake. Default is 1420070400000 (January 1, 2015).
     * @returns snowflake id as a bigint
     * @throws TypeError if the epoch is not a number, bigint or Date
     * @example
     * ```ts
     * import { Snowflake } from "@byahri/utils";
     * const sknowflake = Snowflake.generate(); // 1360324839772000256n
     * console.log(snowflake.toString()); // 1360324839772000256
     * ```
     */
    static getSnowflake(epoch?: number | bigint | Date): bigint;
    /**
     * generates a random id / token
     * @param bytes length of the id to generate (default 16)
     * @param bufferEncoding encoding of the buffer (default hex)
     * @returns random id
     */
    static getRandomToken(bytes?: number, bufferEncoding?: BufferEncoding): string;
}
