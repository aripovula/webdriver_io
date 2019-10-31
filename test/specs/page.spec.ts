import { expect } from 'chai';

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('http://localhost:5000/events');
        const title = browser.getTitle();
        expect(title).to.equal("Inventory Management");
    });
});