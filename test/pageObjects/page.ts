export default class Page {
    
    private title: string;
    
    constructor() {
        this.title = 'Inventory Management';
    };

    open(path: string) {
        browser.url(path)
    };
}