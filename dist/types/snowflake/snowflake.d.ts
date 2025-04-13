export declare class Snowflake {
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
    static generate(epoch?: number | bigint | Date): bigint;
}
