import { Triangle } from '../../src/triangle/triangle';
import { Shape } from '../../src/triangle/shape';

fdescribe('Triangle', () => {

    describe('if the 3 numbers passed can form a triangle', () => {

        it('the triangle should be formed', () => {
            const triangle: Shape = new Triangle([3, 6, 7]);
            expect(triangle.cannotForm()).toBe(false);
        });

        it('should have 3 sides', () => {
            const triangle: Shape = new Triangle([3, 6, 7]);
            expect(triangle.getRightNumberOfSides()).toBe(3);
        });

        describe('if it is passed more than 3 sides but actually 3 are defined', () => {

            it('should still form a triangle', () => {
                expect(() => {
                    new Triangle([3, 6, undefined, 4, null]);
                }).not.toThrow('Error: incorrect shape!');
            });

        });

    });

    describe('if it has not 3 defined sides', () => {

        it('should throw an exception because it\'s not a triangle', () => {
            expect(() => {
                new Triangle([3, 6, undefined]);
            }).toThrow('Error: incorrect shape!');
        });

    });

    describe('if it has too few input numbers', () => {

        it('should throw the same exception because not a triangle', () => {
            expect(() => {
                new Triangle([3, 6]);
            }).toThrow('Error: incorrect shape!');

        });

    });

    describe('if it has too many inputs', () => {

        it('should throw again the same exception because not a triangle', () => {
            expect(() => {
                new Triangle([3, 6, 5, 6, 7]);
            }).toThrow('Error: incorrect shape!');
        });

    });

    fdescribe('if the 3 numbers passed cannot form a triangle', () => {

        // it('should throw another exception', () => {
        //     expect(() => {
        //         new Triangle([3, 6, 1000]);
        //     }).toThrow('Error: these 3 sides cannot form a triangle!');
        // });

        it('triangle cannot be formed', () => {
            const cannotFormTriangle = new Triangle([3, 6, 1000]);
            expect(cannotFormTriangle.cannotForm()).toBe(true);
        });

    });

});
