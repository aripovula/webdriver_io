// import { expect } from 'chai'
import EventProducts from '../pageObjects/eventProducts.page.js'
import { eventProduct } from '../pageObjects/eventProducts.page.js'


describe('login form', () => {
    it('should deny access with wrong creds', () => {
        EventProducts.open()
        EventProducts.addButtonMain.click()
        EventProducts.productName.setValue(eventProduct.name)
        EventProducts.spc.setValue(eventProduct.spc)
        EventProducts.gtin.setValue(eventProduct.gtin)
        EventProducts.supplier.setValue(eventProduct.supplier)
        EventProducts.addButtonModal.click()

        assert.strictEqual(EventProducts.newOrAmendedProduct.getText(), eventProduct.name)

        // expect(EventProducts.flash.getText()).to.contain('Your username is invalid!')
    })

    // it('should allow access with correct creds', () => {
    //     EventProducts.open()
    //     EventProducts.username.setValue('tomsmith')
    //     EventProducts.password.setValue('SuperSecretPassword!')
    //     EventProducts.submit()

    //     expect(EventProducts.flash.getText()).to.contain('You logged into a secure area!')
    // })
})