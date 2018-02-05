//jasmine
import { Calculator } from './math';

describe("Calculator ", () => {
    var calc;

    beforeEach(function () {
        //Arrange phase
        calc = new Calculator();
    });

    //red green refactoring
    describe("add()", () => {
        it("should add two numbers and return result", () => {
            var result = calc.add(10, 20);
            expect(result).toBe(30);
        });

        it("should return zero when first parameter is zero", () => {
            var result = calc.add(0, 100);
            expect(result).toBe(0);
        });

        it("should return -1 when second parameter is zero", () => {
            var result = calc.add(100, 0);
            expect(result).toBe(-1);
        });
    });

    describe("sub()", () => {
        it("should subtract two numbers and return result", () => {
            var result = calc.sub(200, 100);
            expect(result).toBe(100);
        });
    });

    afterEach(function () {
        calc = null;
    });
});