// Define a base class for shapes
class Shape {
    // Constructor to initialize common properties of shapes
    constructor(text, color, fill) {
        this.text = text;   // Text associated with the shape
        this.color = color; // Color of the shape
        this.fill = fill;   // Fill color of the shape
    }
}

// Define a subclass Triangle that extends from Shape
class Triangle extends Shape {
    // Constructor to initialize Triangle properties
    constructor(text, color, fill) {
        super(text, color, fill); // Call the constructor of the base class using super()
    }

    // Method to render the Triangle as SVG markup
    render() {
        return `<polygon points="0, 200 150, 0 300, 200" fill='${this.fill}' />

<text x="150" y="125" font-size="60" text-anchor="middle" fill='${this.color}'>${this.text}</text>`;
    }
}

// Define a subclass Square that extends from Shape
class Square extends Shape {
    // Constructor to initialize Square properties
    constructor(text, color, fill) {
        super(text, color, fill); // Call the constructor of the base class using super()
    }

    // Method to render the Square as SVG markup
    render() {
        return `<rect width="100%" height="100%" fill='${this.fill}' />
        
<text x="150" y="125" font-size="60" text-anchor="middle" fill='${this.color}'>${this.text}</text>`;
    }
}

// Define a subclass Circle that extends from Shape
class Circle extends Shape {
    // Constructor to initialize Circle properties
    constructor(text, color, fill) {
        super(text, color, fill); // Call the constructor of the base class using super()
    }

    // Method to render the Circle as SVG markup
    render() {
        return `<circle cx="150" cy="100" r="80" fill='${this.fill}' />

<text x="150" y="125" font-size="60" text-anchor="middle" fill='${this.color}'>${this.text}</text>`;
    }
}

// Export the classes for use in other modules
module.exports = { Shape, Triangle, Square, Circle };