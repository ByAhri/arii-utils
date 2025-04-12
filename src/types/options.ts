// Define an interface for the options
export interface AriiUtilsOptions {
    id: string;
    name: string;
    extraFeature?: string; // Optional property for flexibility
}


export interface AriiErrorOptions {
    message: string;
    name?: string; // Optional property for flexibility
    code?: number; // Optional property for flexibility
}