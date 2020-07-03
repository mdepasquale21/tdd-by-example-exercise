import { Triangle } from '../../src/triangle/triangle';
import { Shape } from '../../src/triangle/shape';

fdescribe('Triangle', () => {

    it('should have 3 sides', () => {
        const triangle: Shape = new Triangle(3, 6, 7);
        expect(triangle.getNumberOfSides()).toBe(3);
    });

});
