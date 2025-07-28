import { sum } from "../sum"

test("Test sum function which adds two numbers", () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
    // expect(sum(10, 20)).toBe(30);
});