import { ASCIIConverter, TeXConverter, TextConverter, TextWidgetConverter } from './builders';
import { Text } from './models';

// the director
class RTFReader {

    // the director needs a builder that takes the responsibility of creating and assembling complex objects
    constructor(private textConverter: TextConverter) {
    }

    // the director is only responsible for parsing (delegating complex building to the builder that knows!)
    parseRTF(): void {
        this.textConverter
            .convertParagraph()
            .convertCharacter('char')
            .convertFontChange('font')
    }

    // ... and getting the result from the builder
    getResult(): Text {
        return this.textConverter.getConvertedText();
    }

}

console.log('Create a reader (director) with a given text format through text converters (builders)');

console.log('\n');
console.log('ASCII');
const aSCIIReader = new RTFReader(new ASCIIConverter());
aSCIIReader.parseRTF();
const parsedASCII = aSCIIReader.getResult();
console.log(parsedASCII);

console.log('\n');
console.log('TeX');
const teXReader = new RTFReader(new TeXConverter());
teXReader.parseRTF();
const parsedTeX = teXReader.getResult();
console.log(parsedTeX);

console.log('\n');
console.log('TextWidget');
const textWidgetReader = new RTFReader(new TextWidgetConverter());
textWidgetReader.parseRTF();
const parsedTextWidget = textWidgetReader.getResult();
console.log(parsedTextWidget);
