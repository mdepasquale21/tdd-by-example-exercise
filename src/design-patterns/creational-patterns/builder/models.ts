// actually in many cases, the products (here the texts) produced by the concrete builders
// differ so greatly in their representations that there is little to gain
// from giving them a common parent class
// so here Text abstract class might be removed since text format might be very different in practice

export abstract class Text {

    protected constructor(
        protected paragraph: string,
        protected character: string,
        protected font: string
    ) {
    }

}

export class ASCIIText extends Text {
    private readonly asciiStuff;

    constructor(
        paragraph: string,
        character: string,
        font: string
    ) {
        super(paragraph, character, font);
        this.asciiStuff = 'ASCII STUFF';
    }
}

export class TeXText extends Text {
    private readonly texStuff;

    constructor(
        paragraph: string,
        character: string,
        font: string
    ) {
        super(paragraph, character, font);
        this.texStuff = 'TEX STUFF';
    }

}

export class TextWidget extends Text {
    private readonly textWidgetStuff;

    constructor(
        paragraph: string,
        character: string,
        font: string
    ) {
        super(paragraph, character, font);
        this.textWidgetStuff = 'TEXT WIDGET';
    }
}
