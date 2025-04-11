export class MyUtil {
    // Static property (class-level data)
    private static version = "1.0.0";

    // Instance properties
    private id: string;
    protected name: string;

    // Constructor to initialize instance properties
    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    // Static method (class-level functionality)
    static greet(name: string): string {
        return `Hello, ${name}!`;
    }

    // Instance method
    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}`;
    }

    // Getter for the private property
    get getId(): string {
        return this.id;
    }

    // Setter for the private property
    set setId(newId: string) {
        this.id = newId;
    }

    get getVersion() {
        return MyUtil.version;
    }

    // Protected method (accessible in derived classes)
    protected logName(): void {
        console.log(`Name: ${this.name}`);
    }

    // Static utility method
    static add(a: number, b: number): number {
        return a + b;
    }
}

// Example of inheritance
export class AdvancedUtil extends MyUtil {
    private extraFeature: string;

    constructor(id: string, name: string, extraFeature: string) {
        super(id, name); // Call the parent class constructor
        this.extraFeature = extraFeature;
    }

    // Override a method
    getDetails(): string {
        return `${super.getDetails()}, Extra Feature: ${this.extraFeature}`;
    }

    // Access protected method from the parent class
    logAdvancedDetails(): void {
        this.logName();
        console.log(`Extra Feature: ${this.extraFeature}`);
    }
}