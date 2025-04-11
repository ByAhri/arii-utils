export class MyUtil {
    // Static property (class-level data)
    static version = "1.0.0";
    // Instance properties
    id;
    name;
    // Constructor to initialize instance properties
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    // Static method (class-level functionality)
    static greet(name) {
        return `Hello, ${name}!`;
    }
    // Instance method
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
    // Getter for the private property
    get getId() {
        return this.id;
    }
    // Setter for the private property
    set setId(newId) {
        this.id = newId;
    }
    get getVersion() {
        return MyUtil.version;
    }
    // Protected method (accessible in derived classes)
    logName() {
        console.log(`Name: ${this.name}`);
    }
    // Static utility method
    static add(a, b) {
        return a + b;
    }
}
// Example of inheritance
export class AdvancedUtil extends MyUtil {
    extraFeature;
    constructor(id, name, extraFeature) {
        super(id, name); // Call the parent class constructor
        this.extraFeature = extraFeature;
    }
    // Override a method
    getDetails() {
        return `${super.getDetails()}, Extra Feature: ${this.extraFeature}`;
    }
    // Access protected method from the parent class
    logAdvancedDetails() {
        this.logName();
        console.log(`Extra Feature: ${this.extraFeature}`);
    }
}
