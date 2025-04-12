export declare class AriiError extends Error {
    code: number;
    constructor(message: string, code: number | undefined, name: string | undefined, options: ErrorOptions);
}
