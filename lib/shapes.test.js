// Import the Shape module to be tested
const Shape = require('../lib/shapes');

// Test suite for the Shape module
describe('Shape Module', () => {

    // Test suite for the Circle class
    describe('Circle Class', () => {

        // Test case: Ensure circle creation
        describe('Creation', () => {
            it('should create an instance of Circle class', () => {
                const circle = new Shape.Circle();
                expect(circle).toBeInstanceOf(Shape.Circle);
            });
        });

        // Test case: Ensure text is entered correctly
        describe('Initialize Text', () => {
            it('should set text property correctly', () => {
                const logoText = 'BRY';
                const circle = new Shape.Circle(logoText);
                expect(circle.text).toBe(logoText);
            });
        });

        // Test case: Ensure color is entered correctly
        describe('Initialize Text Color', () => {
            it('should set text color property correctly', () => {
                const logoColor = 'brown';
                const circle = new Shape.Circle('', logoColor);
                expect(circle.color).toBe(logoColor);
            });
        });

        // Test case: Ensure fill is entered correctly
        describe('Initialize Fill Color', () => {
            it('should set fill color property correctly', () => {
                const logoFill = 'pink';
                const circle = new Shape.Circle('', '', logoFill);
                expect(circle.fill).toBe(logoFill);
            });
        });

    });

    // Test suite for the Square class
    describe('Square Class', () => {

        // Test case: Ensure square creation
        describe('Creation', () => {
            it('should create an instance of Square class', () => {
                const square = new Shape.Square();
                expect(square).toBeInstanceOf(Shape.Square);
            });
        });

        // Test case: Ensure text is entered correctly
        describe('Initialize Text', () => {
            it('should set text property correctly', () => {
                const logoText = 'BRY';
                const square = new Shape.Square(logoText);
                expect(square.text).toBe(logoText);
            });
        });

        // Test case: Ensure color is entered correctly
        describe('Initialize Text Color', () => {
            it('should set text color property correctly', () => {
                const logoColor = 'brown';
                const square = new Shape.Square('', logoColor);
                expect(square.color).toBe(logoColor);
            });
        });

        // Test case: Ensure fill is entered correctly
        describe('Initialize Fill Color', () => {
            it('should set fill color property correctly', () => {
                const logoFill = 'pink';
                const square = new Shape.Square('', '', logoFill);
                expect(square.fill).toBe(logoFill);
            });
        });

    });

    // Test suite for the Triangle class
    describe('Triangle Class', () => {

        // Test case: Ensure triangle creation
        describe('Creation', () => {
            it('should create an instance of Triangle class', () => {
                const triangle = new Shape.Triangle();
                expect(triangle).toBeInstanceOf(Shape.Triangle);
            });
        });

        // Test case: Ensure text is entered correctly
        describe('Initialize Text', () => {
            it('should set text property correctly', () => {
                const logoText = 'BRY';
                const triangle = new Shape.Triangle(logoText);
                expect(triangle.text).toBe(logoText);
            });
        });

        // Test case: Ensure color is entered correctly
        describe('Initialize Text Color', () => {
            it('should set text color property correctly', () => {
                const logoColor = 'brown';
                const triangle = new Shape.Triangle('', logoColor);
                expect(triangle.color).toBe(logoColor);
            });
        });

        // Test case: Ensure fill is entered correctly
        describe('Initialize Fill Color', () => {
            it('should set fill color property correctly', () => {
                const logoFill = 'pink';
                const triangle = new Shape.Triangle('', '', logoFill);
                expect(triangle.fill).toBe(logoFill);
            });
        });

    });

});
