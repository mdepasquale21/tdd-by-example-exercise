// product created by factory method, with which to do some operations then

export abstract class Product {

    abstract doStuff();
}

export class SmallProduct extends Product {
    doStuff() {
        console.log('SMALL: Doing some stuff in concrete product SmallProduct');
    }
}

export class BigProduct extends Product {
    doStuff() {
        console.log('BIG: Doing some stuff in concrete product BigProduct');
    }
}
