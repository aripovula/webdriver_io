const assert = require('assert')

const inputValue = 'WebdriverIO2245';

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('http://localhost:5000/events/1/products')
        const title = browser.getTitle()
        assert.strictEqual(title, "Inventory Management")
    })

    // it('adds new product', () => {
    //     browser.url('http://localhost:5000/events/1/products')

    //     const button = $('button=Add a product')
    //     button.click()

    //     $('#product-name').setValue(inputValue)
    //     $('#spc').setValue(inputValue)
    //     $('#gtin').setValue(inputValue)
    //     $('#supplier').setValue(inputValue)
    //     $('button=Add product').click()

    //     const newItem = $(`label.list-group__item-title=${inputValue}`)
    //     console.log('newItem - ', newItem)
    //     assert.strictEqual(newItem.getText(), inputValue)
    // })

    // it('deletes selected product', () => {
    //     browser.url('http://localhost:5000/events/1/products')

    //     const aProduct = $(`label.list-group__item-title=${inputValue}`)
    //     aProduct.click()

    //     const button = $('button=Remove Product')
    //     button.click()
        
    //     const button2 = $('button=Remove product')
    //     button2.click()

    // })
})