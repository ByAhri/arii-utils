export declare class MyUtil {
    private static version;
    private id;
    protected name: string;
    constructor(id: string, name: string);
    static greet(name: string): string;
    getDetails(): string;
    get getId(): string;
    set setId(newId: string);
    get getVersion(): string;
    protected logName(): void;
    static add(a: number, b: number): number;
}
export declare class AdvancedUtil extends MyUtil {
    private extraFeature;
    constructor(id: string, name: string, extraFeature: string);
    getDetails(): string;
    logAdvancedDetails(): void;
}
