import { MotifWidgetFactory, PMWidgetFactory, WidgetFactory } from './factories';
import { ScrollBar, Window } from './models';

class Client {
    private scrollbar: ScrollBar;
    private window: Window;

    constructor(factory: WidgetFactory) {
        this.scrollbar = factory.createScrollBar();
        this.window = factory.createWindow();
    }
}

const motifClient = new Client(new MotifWidgetFactory())
const PMClient = new Client(new PMWidgetFactory())
