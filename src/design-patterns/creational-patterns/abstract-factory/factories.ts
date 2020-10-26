import { MotifScrollBar, MotifWindow, PMScrollBar, PMWindow, ScrollBar, Window } from './models';

// abstract factory

// maybe this could also be an interface
// or it could be a concrete factory with a default implementation
export abstract class WidgetFactory {

    protected constructor() {
    }

    abstract createScrollBar(): ScrollBar;

    abstract createWindow(): Window;
}

// concrete factories

export class MotifWidgetFactory extends WidgetFactory {

    constructor() {
        super();
    }

    createScrollBar(): MotifScrollBar {
        return new MotifScrollBar();
    }

    createWindow(): MotifWindow {
        return new MotifWindow();
    }

}

export class PMWidgetFactory extends WidgetFactory {

    constructor() {
        super();
    }

    createScrollBar(): PMScrollBar {
        return new PMScrollBar();
    }

    createWindow(): PMWindow {
        return new PMWindow();
    }

}
