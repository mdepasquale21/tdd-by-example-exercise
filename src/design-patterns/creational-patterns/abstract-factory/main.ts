import { MotifWidgetFactory, PMWidgetFactory, WidgetFactory } from './factories';
import { ScrollBar, Window } from './models';

class Client {
    private readonly scrollbar: ScrollBar;
    private readonly window: Window;

    constructor(factory: WidgetFactory) {
        this.scrollbar = factory.createScrollBar();
        this.window = factory.createWindow();
    }

    getScrollBar(): ScrollBar {
        return this.scrollbar;
    }

    getWindow(): Window {
        return this.window;
    }
}

console.log('Create client with given UI (decoupled from implementation, consistent, accessed only via factory')

console.log('\n')

console.log('1')
const motifClient = new Client(new MotifWidgetFactory());

motifClient.getScrollBar().scroll();
motifClient.getWindow().show();

console.log('\n')

console.log('2')
const PMClient = new Client(new PMWidgetFactory());

PMClient.getScrollBar().scroll();
PMClient.getWindow().show();
