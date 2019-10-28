// import { expect } from 'chai'
import assert from 'assert'
import EventProducts from '../pageObjects/eventProducts.page.js'

describe('Add Event Product form', () => {
    
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

    // it('should allow access with correct creds', () => {
    //     EventProducts.open()
    //     EventProducts.username.setValue('tomsmith')
    //     EventProducts.password.setValue('SuperSecretPassword!')
    //     EventProducts.submit()

    //     expect(EventProducts.flash.getText()).to.contain('You logged into a secure area!')
    // })
})