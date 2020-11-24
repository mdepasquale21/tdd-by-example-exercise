import { BigProduct, SmallProduct } from './products';
import { BigCreator, SmallCreator } from './creators';

console.log('Create a product with factory method (a.k.a. without anticipating its implementation)');

console.log('\n');
console.log('Small');
const smallProduct: SmallProduct = new SmallCreator().create();
smallProduct.doStuff();

console.log('\n');
console.log('Big');
const bigProduct: BigProduct = new BigCreator().create();
bigProduct.doStuff();
