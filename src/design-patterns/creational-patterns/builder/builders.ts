// abstract builder

import { ASCIIText, Text, TeXText, TextWidget } from './models';

export abstract class TextConverter {
    abstract convertCharacter(char: string);

    abstract convertFontChange(font: string);

    abstract convertParagraph();

    abstract getConvertedText(): Text;
}

// concrete builders

export class ASCIIConverter extends TextConverter {
    convertParagraph() {
        console.log('ASCII CONVERTER: do nothing to paragraph');
    }

    convertCharacter(char: string) {
        console.log('ASCII CONVERTER: convert character to ASCII Plain Text');
    }

    convertFontChange(font: string) {
        console.log('ASCII CONVERTER: do nothing to font');
    }

    getConvertedText(): ASCIIText {
        return this.getASCIIText();
    }

    // hide complex implementation
    private getASCIIText(): ASCIIText {
        return new ASCIIText();
    }
}

export class TeXConverter extends TextConverter {
    convertParagraph() {
        console.log('in TeX Converter: convert paragraph');
    }

    convertCharacter(char: string) {
        console.log('in TeX Converter: convert character');
    }

    convertFontChange(font: string) {
        console.log('in TeX Converter: convert font');
    }

    getConvertedText(): TeXText {
        return this.getTeXText();
    }

    // hide complex implementation
    private getTeXText(): TeXText {
        return new TeXText();
    }
}

export class TextWidgetConverter extends TextConverter {
    convertParagraph() {
        console.log('in Text Widget Converter: convert paragraph');
    }

    convertCharacter(char: string) {
        console.log('in Text Widget Converter: convert character');
    }

    convertFontChange(font: string) {
        console.log('in Text Widget Converter: convert font');
    }

    getConvertedText(): TextWidget {
        return this.getTextWidget();
    }

    // hide complex implementation
    private getTextWidget(): TextWidget {
        return new TextWidget();
    }
}
