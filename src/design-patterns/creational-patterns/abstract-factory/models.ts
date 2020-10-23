// abstract

// maybe these two could also be interfaces
export abstract class ScrollBar {
    abstract scroll(): void
}

export abstract class Window {
    abstract show(): void
}

// concrete

export class MotifScrollBar extends ScrollBar {
    scroll(): void {
        console.log('Motif scrollbar scroll');
    }
}

export class MotifWindow extends Window {
    show(): void {
        console.log('Motif window show');
    }
}

export class PMScrollBar extends ScrollBar {
    scroll(): void {
        console.log('PM scrollbar scroll');
    }
}

export class PMWindow extends Window {
    show(): void {
        console.log('PM window show');
    }
}
