"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AriiError = void 0;
class AriiError extends Error {
    code;
    constructor(message, code = 0, name = "AriiError", options) {
        super(message, options); // Call the parent Error constructor
        this.name = name; // Set the custom error name
        this.code = code; // Add a custom error code
        // Ensure the prototype chain is correct (important for custom errors)
        Object.setPrototypeOf(this, AriiError.prototype);
        // Capture the stack trace (optional, but useful for debugging)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, AriiError);
        }
    }
}
exports.AriiError = AriiError;
