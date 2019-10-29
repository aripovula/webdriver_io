import Page from './page';

const eventProduct = {
    name: 'ABC12',
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
    get editButtonMain() { return $('.button--outline=Edit Product') }
    // get deleteButtonMain() { return $('.button--danger=Remove Product') }
    get deleteButtonModal() { return $('button=Remove product')}
    get newOrAmendedProduct() { return $(`label.list-group__item-title=${eventProduct.name}`) }
    get deleteButtonMain() { return $('.list-group .list-group__item--expandable:nth-child(1)').$('button*=Remove') }
    get eventProduct() { return eventProduct; }

    open() {
        super.open('http://localhost:5000/events/1/products')
    }

    submit() {
        this.submitBtn.click()
    }
}

export default new EventProducts()

