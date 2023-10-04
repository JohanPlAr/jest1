/**
 * @jest-environment jsdom
 */
const addition = require("../calc");

describe("Calculator", () => {
  describe("Addition function", () => {
      test("should return 42 for 20 + 22", () => {
          expect(addition(20, 22)).toBe(42);
      });
      test("should return 30 for 14 + 16", () => {
        expect(addition(14, 16)).toBe(30);
    });
    test("should return 30 for 14 + 16", () => {
      expect(addition(14, 16)).toBe(30);
  });
    test("should return 30 for 14 + 16", () => {
      expect(addition(14, 16)).toBe(30);
  });
  });
  describe("Subtract function", () => {

  });
  describe("Multiply function", () => {

  });
  describe("Divide function", () => {

  });
});
