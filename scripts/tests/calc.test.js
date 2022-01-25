const addition = require("../calc");

describe("Calculator", () => {
  describe("Addition function", () => {
    test("should return 42 for 20 + 22", () => {
      expect(addition(20, 22)).toBe(42);
    });
    test("should return 73 for 23 + 50", () => {
      expect(addition(23, 50)).toBe(73);
    });
    test("should return 171 for 99 + 72", () => {
      expect(addition(99, 72)).toBe(171);
    });
    test("should return a negative number(-2) for -20 + 18", () => {
      expect(addition(-20, 18)).toBe(-2);
    });
  });
  describe("Subtraction function", () => {
    // test("should return 2 for 22 - 20", () => {
    //   expect(subtraction(22, 20)).toBe(2);
    // });
  });
  describe("Multiplication function", () => {});
  describe("Division function", () => {});
});
