import Page from './page';

const eventProductOne = {
    name: 'ABC12',
    spc: 'S124',
    gtin: 'G24',
    supplier: 'S136'
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
    get deleteButtonMain() { return $('.list-group__item--expandable:nth-child(1)') }
    get deleteButtonModal() { return $('.button*=Remove')}
    get newOrAmendedProduct() { return $(`label.list-group__item-title=${eventProductOne.name}`) }
    get eventProductOne() { return eventProductOne; }

    open() {
        super.open('http://localhost:5000/events/1/products')
    }

}

export default new EventProducts();
