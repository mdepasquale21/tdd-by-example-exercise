import { BigProduct, Product, SmallProduct } from './products';

// creators that create and do stuff with products

export abstract class Creator {
    abstract create(): Product;
}

export class SmallCreator extends Creator {
    create(): SmallProduct {
        return new SmallProduct();
    }
}

export class BigCreator extends Creator {
    create(): BigProduct {
        return new BigProduct();
    }
}
