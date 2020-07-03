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
            }).toThrow('Error: not a triangle!');

        });

    });

});
