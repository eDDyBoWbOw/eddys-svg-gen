// Import the Shapes module
const ShapesLibrary = require('./shapes');

// Define a class for creating custom SVG shapes
class CustomSVG extends ShapesLibrary.Shape {
    // Constructor for the CustomSVG class
    constructor(text, color, fill, shapeType) {
        // Call the constructor of the parent class (Shape)
        super(text, color, fill);
        // Initialize a new property to store the type of shape
        this.shapeType = shapeType;
    }

    // Method to create a custom shape based on the specified shape type
    createCustomShape() {
        // Declare a variable to store the created custom shape
        let customShape;

        // Determine the shape type and create the corresponding shape
        if (this.shapeType === 'circle') {
            customShape = new ShapesLibrary.Circle(this.text, this.color, this.fill);
        } else if (this.shapeType === 'square') {
            customShape = new ShapesLibrary.Square(this.text, this.color, this.fill);
        } else {
            customShape = new ShapesLibrary.Triangle(this.text, this.color, this.fill);
        }

        // Return the rendered representation of the created shape
        return customShape.render();
    }

    // Method to generate HTML containing the custom SVG shape
    generateHTML() {
        // Return an SVG element containing the custom shape
        return `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">

            ${this.createCustomShape()}

        </svg>`;
    }
}

// Export the CustomSVG class for external use
module.exports = CustomSVG;