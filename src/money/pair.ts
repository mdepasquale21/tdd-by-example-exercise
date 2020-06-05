export class Pair {
    private readonly pairingStringKey: string;

    constructor(private from: string,
                private to: string) {
        this.pairingStringKey = this.from + 'to' + this.to;
    }

    equals(otherPair: Pair): boolean {
        return this.from === otherPair.from && this.to === otherPair.to;
    }

    getPairingStringKey(): string {
        return this.pairingStringKey;
    }

    isSamePairingStringKey(otherPair: Pair): boolean {
        return this.getPairingStringKey() === otherPair.getPairingStringKey();
    }

}
