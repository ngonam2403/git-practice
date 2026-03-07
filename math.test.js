const { add, subtract, multiply, divide } = require("./math");

describe("Math functions", () => {
    test("add: 2 + 3 = 5", () => {
        expect(add(2, 3)).toBe(5);
    });

    test("subtract: 5 - 3 = 2", () => {
        expect(subtract(5, 3)).toBe(2);
    });

    test("multiply: 4 * 3 = 12", () => {
        expect(multiply(4, 3)).toBe(12);
    });

    test("divide: 10 / 2 = 5", () => {
        expect(divide(10, 2)).toBe(5);
    });

    test("divide: throws on zero", () => {
        expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
    });
});
