"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snowflake = void 0;
const snowflake_1 = require("@sapphire/snowflake");
class Snowflake {
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
    static generate(epoch = 1420070400000) {
        let snowflake;
        // check if epoch is a number, bigint or date
        if (typeof epoch !== "number" && typeof epoch !== "bigint" && !(epoch instanceof Date)) {
            throw new TypeError("Epoch must be a number, bigint or Date.");
        }
        const sapphireSnowflake = new snowflake_1.Snowflake(epoch);
        try {
            snowflake = sapphireSnowflake.generate();
        }
        catch (error) {
            throw error;
        }
        return snowflake;
    }
}
exports.Snowflake = Snowflake;
