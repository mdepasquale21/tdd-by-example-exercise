import { ASCIIConverter, TeXConverter, TextConverter, TextWidgetConverter } from './builders';
import { Text } from './models';

// the director
class RTFReader {

    // the director needs a builder that takes the responsibility of creating and assembling complex objects
    constructor(private textConverter: TextConverter) {
    }

    // the director is only responsible for parsing
    parseRTF(): Text {
        this.textConverter.convertCharacter('char');
        this.textConverter.convertFontChange('font');
        this.textConverter.convertParagraph();
        return this.textConverter.getConvertedText();
    }

}

console.log('Create a reader (director) with a given text format through text converters (builders)');

console.log('\n');
console.log('ASCII');
const aSCIIReader = new RTFReader(new ASCIIConverter());
const parsedASCII = aSCIIReader.parseRTF();
console.log(parsedASCII);

console.log('\n');
console.log('TeX');
const teXReader = new RTFReader(new TeXConverter());
const parsedTeX = teXReader.parseRTF();
console.log(parsedTeX);

console.log('\n');
console.log('TextWidget');
const textWidgetReader = new RTFReader(new TextWidgetConverter());
const parsedTextWidget = textWidgetReader.parseRTF();
console.log(parsedTextWidget);
