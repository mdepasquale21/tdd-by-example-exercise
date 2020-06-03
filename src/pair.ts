export interface IPair {
    from: string;
    to: string;
}

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

    getPlain(): IPair {
        return {
            from: this.from,
            to: this.to
        }
    }

}
