export abstract class Text {
    protected body: string;

    protected constructor() {
        this.setBody();
    }

    abstract setBody(): void;

}

export class ASCIIText extends Text {

    constructor() {
        super();
    }

    setBody(): void {
        this.body = this.getPlainText();
    }


    private getPlainText(): string {
        return 'ASCII Plain Text';
    }
}

export class TeXText extends Text {

    constructor() {
        super();
    }

    setBody(): void {
        this.body = this.getStyle() + ' ' + this.getText();
    }


    private getText(): string {
        return 'TeX Text';
    }

    private getStyle(): string {
        return 'TeX Style';
    }
}

export class TextWidget extends Text {

    constructor() {
        super();
    }

    setBody(): void {
        this.body = this.getWidget();
    }

    private getWidget(): string {
        return 'Text Widget';
    }
}
