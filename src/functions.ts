import { Snowflake as SN } from "@sapphire/snowflake";

function snowflake(epoch: number | bigint | Date = 1420070400000): bigint {
    let snowflake: bigint;
    // check if epoch is a number, bigint or date
    if (typeof epoch !== "number" && typeof epoch !== "bigint" && !(epoch instanceof Date)) {
        throw new TypeError("Epoch must be a number, bigint or Date.");
    }
    const sapphireSnowflake = new SN(epoch);
    try {
        snowflake = sapphireSnowflake.generate();
    } catch (error) {
        throw error;
    }
    return snowflake;
}

export {
    snowflake
}