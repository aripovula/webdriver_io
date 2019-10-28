import Page from './page'

export eventProduct = {
    name: 'ABC',
    spc: "S124",
    gtin: "G24",
    supplier: "S136"
}

class EventProducts extends Page {

    get addButtonMain() { return $('button=Add a product') }
    get productName() { return $('#product-name') }
    get spc() { return $('#spc') }
    get gtin() { return $('#gtin') }
    get supplier() { return $('#supplier') }
    get addButtonModal() { return $('button=Add product') }
    get newOrAmendedProduct() { return $(`label.list-group__item-title=${eventProduct.name}`) }

    open() {
        super.open('http://localhost:5000/events/1/products')
    }

    submit() {
        this.submitBtn.click()
    }

}

export default new EventProducts()