import { Triangle } from '../../src/triangle/triangle';

describe('Triangle', () => {

    describe('if the 3 numbers passed can form a triangle', () => {

        it('the triangle should be formed', () => {
            expect(() => {
                new Triangle([3, 6, 7]);
            }).not.toThrow();
        });

        describe('if it is passed more than 3 sides but actually 3 are defined', () => {

            it('should still form a triangle if they can form a triangle', () => {
                expect(() => {
                    new Triangle([3, 6, undefined, 4, null]);
                }).not.toThrow();
            });

            it('should not form a triangle if they cannot form a triangle', () => {
                expect(() => {
                    new Triangle([3, 6, undefined, 40, null]);
                }).toThrow(Triangle.cannotFormATriangleErrorMessage());
            });

        });

    });

    describe('if it has not 3 defined sides', () => {

        it('should throw an exception because it\'s not a triangle', () => {
            expect(() => {
                new Triangle([3, 6, undefined]);
            }).toThrow(Triangle.incorrectInputErrorMessage());
        });

    });

    describe('if it has too few input numbers', () => {

        it('should throw the same exception because not a triangle', () => {
            expect(() => {
                new Triangle([3, 6]);
            }).toThrow(Triangle.incorrectInputErrorMessage());

        });

    });

    describe('if it has too many inputs', () => {

        it('should throw again the same exception because not a triangle', () => {
            expect(() => {
                new Triangle([3, 6, 5, 6, 7]);
            }).toThrow(Triangle.incorrectInputErrorMessage());
        });

    });

    describe('if the 3 numbers passed cannot form a triangle', () => {

        it('should throw another exception', () => {
            expect(() => {
                new Triangle([3, 6, 1000]);
            }).toThrow(Triangle.cannotFormATriangleErrorMessage());
        });

    });

    describe('if a negative number is passed', () => {

        describe('if there are 3 other positive numbers in input', () => {

            it('should form the triangle if those 3 can form', () => {
                expect(() => {
                    new Triangle([3, 6, 7, -2, undefined]);
                }).not.toThrow();
            });

            it('should not form the triangle if those 3 cannot form', () => {
                expect(() => {
                    new Triangle([3, 6, 70, -2, undefined]);
                }).toThrow(Triangle.cannotFormATriangleErrorMessage());
            });

        });

        describe('if there are not 3 positive numbers in input', () => {

            it('should throw an error', () => {
                expect(() => {
                    new Triangle([3, 6, -2, undefined]);
                }).toThrow(Triangle.incorrectInputErrorMessage());
            });

        });

    });

    describe('if 0 is passed', () => {

        describe('if there are other 3 strictly positive numbers in input', () => {

            it('should form the triangle if those 3 can form', () => {
                expect(() => {
                    new Triangle([4, 5, 7, 0, 0]);
                }).not.toThrow();
            });

            it('should not form if those 3 cannot form', () => {
                expect(() => {
                    new Triangle([3, 6, 1000, 0]);
                }).toThrow(Triangle.cannotFormATriangleErrorMessage());
            });

        });

        describe('if there are no other 3 strictly positive numbers in input', () => {

            it('should throw an exception', () => {
                expect(() => {
                    new Triangle([3, 6, -2, 0, null, 0, 0]);
                }).toThrow(Triangle.incorrectInputErrorMessage());
            });

            it('should throw an exception even if full 0', () => {
                expect(() => {
                    new Triangle([0, 0, 0]);
                }).toThrow(Triangle.incorrectInputErrorMessage());
            });

        });

    });

    describe('if equilateral', () => {

        it('should return 1', () => {
            const triangle = new Triangle([5, 5, 5]);
            expect(triangle.getType()).toBe(1);
        });

    });

    describe('if isosceles', () => {

        it('should return 2', () => {
            const triangle = new Triangle([5, 4, 5]);
            expect(triangle.getType()).toBe(2);
        });

        it('should return 2', () => {
            const triangle = new Triangle([3, 3, 5]);
            expect(triangle.getType()).toBe(2);
        });

    });

    describe('if scalene', () => {

        it('should return 3', () => {
            const triangle = new Triangle([4, 7, 9]);
            expect(triangle.getType()).toBe(3);
        });

    });

    describe('try non integer numbers', () => {

        describe('same rules', () => {

            it('should form if can form', () => {
                expect(() => {
                    new Triangle([2.5, 3.43, 5.32145]);
                }).not.toThrow();
            });

            it('should not form if cannot', () => {
                expect(() => {
                    new Triangle([0.5, 0.67, 10.4356]);
                }).toThrow(Triangle.cannotFormATriangleErrorMessage());
            });

        });

    });

});
