import { Triangle } from '../../src/triangle/triangle';
import { Shape } from '../../src/triangle/shape';

fdescribe('Triangle', () => {

    it('should have 3 sides', () => {
        const triangle: Shape = new Triangle([3, 6, 7]);
        expect(triangle.getNumberOfSides()).toBe(3);
    });

    describe('if it has not 3 defined sides', () => {

        it('should throw an exception because it\'s not a triangle', () => {
            expect(() => {
                new Triangle([3, 6, undefined]);
            }).toThrow('Error: incorrect shape!');

            expect(() => {
                new Triangle([3, 6]);
            }).toThrow('Error: incorrect shape!');

            expect(() => {
                new Triangle([3, 6, 5, 6, 7]);
            }).toThrow('Error: incorrect shape!');
        });

    });

    describe('if it is passed more than 3 sides but actually 3 are defined', () => {

        it('should still form a triangle', () => {
            expect(() => {
                new Triangle([3, 6, undefined, 4, null]);
            }).not.toThrow('Error: incorrect shape!');
        });

    });

});
