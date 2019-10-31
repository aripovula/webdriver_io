import { expect } from 'chai';
import EventProducts from '../pageObjects/eventProducts.page';

describe('Event Product form', () => {

    const testProduct = EventProducts.eventProductOne;

    it('should open Add product modal, add values and click modals Add button', () => {
        EventProducts.open();
        EventProducts.addButtonMain.click();
        EventProducts.productName.setValue(testProduct.name);
        EventProducts.spc.setValue(testProduct.spc);
        EventProducts.gtin.setValue(testProduct.gtin);
        EventProducts.supplier.setValue(testProduct.supplier);
        EventProducts.addButtonModal.click();

        expect(EventProducts.newOrAmendedProduct.getText()).to.equal(testProduct.name);
    })

    it('should open "Delete product" modal and click modals Delete button', () => {
        EventProducts.open();
        EventProducts.newOrAmendedProduct.click();
        EventProducts.newOrAmendedProduct.waitForDisplayed(undefined);
        console.log('newOrAmendedProduct-', EventProducts.newOrAmendedProduct);
        EventProducts.deleteButtonMain.click();
        // browser.pause(3000);
        EventProducts.deleteButtonModal.waitForDisplayed(undefined);
        EventProducts.deleteButtonModal.click();

        // expect(EventProducts.newOrAmendedProduct).to.be.null;
        browser.pause(3000);
    })
    browser.pause(3000);
});
