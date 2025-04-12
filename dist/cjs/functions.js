"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snowflake = snowflake;
const snowflake_1 = require("@sapphire/snowflake");
function snowflake(epoch = 1420070400000) {
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
