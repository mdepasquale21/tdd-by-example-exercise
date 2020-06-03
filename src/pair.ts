export class Pair {

    constructor(private from: string,
                private to: string) {
    }

    equals(otherPair: Pair): boolean {
        return this.from === otherPair.from && this.to === otherPair.to;
    }

    hashCode(): number {
        return 0;
    }

}
