// import { expect } from 'chai'
import assert from 'assert'
import EventProducts from '../pageObjects/eventProducts.page.js'

describe('Event Product form', () => {

    it('should open Add product modal, add values and click modals Add button', () => {
        EventProducts.open()
        EventProducts.addButtonMain.click()
        EventProducts.productName.setValue(EventProducts.eventProduct.name)
        EventProducts.spc.setValue(EventProducts.eventProduct.spc)
        EventProducts.gtin.setValue(EventProducts.eventProduct.gtin)
        EventProducts.supplier.setValue(EventProducts.eventProduct.supplier)
        EventProducts.addButtonModal.click()

        assert.strictEqual(EventProducts.newOrAmendedProduct.getText(), EventProducts.eventProduct.name)
    })

    it('should open "Delete product" modal and click modals Delete button', () => {
        EventProducts.open()
        EventProducts.newOrAmendedProduct.click()
        EventProducts.newOrAmendedProduct.waitForDisplayed(undefined)
        browser.pause(3000)
        let clickable = EventProducts.deleteButtonMain.isClickable();
        console.log('clickable - ', clickable);
        // let clickable2 = EventProducts.editButtonMain.isClickable();
        // console.log('clickable2 - ', clickable2);
        // EventProducts.deleteButtonMain.click()
        // browser.pause(3000)
        // EventProducts.deleteButtonModal.click()

        // assert.strictEqual(EventProducts.newOrAmendedProduct.getText(), EventProducts.eventProduct.name)
        browser.pause(3000)
    })
    browser.pause(3000);
})
