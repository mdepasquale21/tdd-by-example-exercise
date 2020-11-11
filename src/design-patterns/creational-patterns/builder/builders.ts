import { ASCIIText, Text, TeXText, TextWidget } from './models';

// abstract builder
// must be general enough to allow the construction of products for all kind of concrete builders

export abstract class TextConverter {
    protected textParagraph: string;
    protected textCharacter: string;
    protected textFont: string;

    // these methods below or some of them might not be abstract
    // they could be empty instead, to allow subclasses to override only the operations they need
    // e.g. in this case ASCIIConverter does not need all methods to build ASCIIText

    abstract convertCharacter(char: string): TextConverter;

    abstract convertFontChange(font: string): TextConverter;

    abstract convertParagraph(): TextConverter;

    abstract getConvertedText(): Text;
}

// concrete builders

export class ASCIIConverter extends TextConverter {

    convertParagraph(): ASCIIConverter {
        this.textParagraph = 'ASCII CONVERTER: do nothing to paragraph';
        return this;
    }

    convertCharacter(char: string): ASCIIConverter {
        this.textCharacter = char + ' ASCII CONVERTER: convert character to ASCII Plain Text';
        return this;
    }

    convertFontChange(font: string): ASCIIConverter {
        this.textFont = font + ' ASCII CONVERTER: do nothing to font';
        return this;
    }

    getConvertedText(): ASCIIText {
        return this.getASCIIText();
    }

    // hide complex implementation
    private getASCIIText(): ASCIIText {
        return new ASCIIText(this.textParagraph, this.textCharacter, this.textFont);
    }
}

export class TeXConverter extends TextConverter {

    convertParagraph(): TeXConverter {
        this.textParagraph = 'in TeX Converter: convert paragraph';
        return this;
    }

    convertCharacter(char: string): TeXConverter {
        this.textCharacter = char + ' in TeX Converter: convert character';
        return this;
    }

    convertFontChange(font: string): TeXConverter {
        this.textFont = font + ' in TeX Converter: convert font';
        return this;
    }

    getConvertedText(): TeXText {
        return this.getTeXText();
    }

    // hide complex implementation
    private getTeXText(): TeXText {
        return new TeXText(this.textParagraph, this.textCharacter, this.textFont);
    }
}

export class TextWidgetConverter extends TextConverter {
    convertParagraph(): TextWidgetConverter {
        this.textParagraph = 'in Text Widget Converter: convert paragraph';
        return this;
    }

    convertCharacter(char: string): TextWidgetConverter {
        this.textCharacter = char + ' in Text Widget Converter: convert character';
        return this;
    }

    convertFontChange(font: string): TextWidgetConverter {
        this.textFont = font + ' in Text Widget Converter: convert font';
        return this;
    }

    getConvertedText(): TextWidget {
        return this.getTextWidget();
    }

    // hide complex implementation
    private getTextWidget(): TextWidget {
        return new TextWidget(this.textParagraph, this.textCharacter, this.textFont);
    }
}
