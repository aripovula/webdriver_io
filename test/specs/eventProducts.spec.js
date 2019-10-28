// import { expect } from 'chai'
const assert = require('assert')
import EventProducts from '../pageObjects/eventProducts.page.js'
// import { eventProduct } from '../pageObjects/eventProducts.page.js'


describe('login form', () => {
    
    it('should deny access with wrong creds', () => {
        EventProducts.open()
        EventProducts.addButtonMain.click()
        EventProducts.productName.setValue(EventProducts.eventProduct.name)
        EventProducts.spc.setValue(EventProducts.eventProduct.spc)
        EventProducts.gtin.setValue(EventProducts.eventProduct.gtin)
        EventProducts.supplier.setValue(EventProducts.eventProduct.supplier)
        EventProducts.addButtonModal.click()

        assert.strictEqual(EventProducts.newOrAmendedProduct.getText(), EventProducts.eventProduct.name)

        // expect(EventProducts.newOrAmendedProduct.getText()).to.contain(eventProduct.name)
    })

    // it('should allow access with correct creds', () => {
    //     EventProducts.open()
    //     EventProducts.username.setValue('tomsmith')
    //     EventProducts.password.setValue('SuperSecretPassword!')
    //     EventProducts.submit()

    //     expect(EventProducts.flash.getText()).to.contain('You logged into a secure area!')
    // })
})