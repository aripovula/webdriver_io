export default class Page {
    constructor() {
        this.title = 'Inventory Management';
    }

    open(path) {
        browser.url(path)
    }
}