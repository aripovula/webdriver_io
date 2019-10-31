import Page from './page';

const testEventOne = {
    name: 'Mega event',
    status: 'New',
    type: 'NationalPromotion',
    country: 'UnitedStates',
    window: 'W2',
    startDate: '02/01/2020',
    endDate: '03/01/2020'
};

const testEventTwo = {
    name: 'Super Event',
    status: 'Confirmed',
    type: 'Premium Promotion',
    country: 'Puerto Rico',
    window: 'W4',
    startDate: '02/01/2030',
    endDate: '03/01/2030'
};

class Events extends Page {
    get addButtonMain() { return $('.button=Create a new event') }
    get eventName() { return $('#event-name-field') }
    get eventStatus() { return $('#event-status-field') }
    get eventType() { return $('#event-type-field') }
    get eventCountry() { return $('#event-country-field') }
    get eventWindow() { return $('#event-window-field') }
    get eventStartDate() { return $('#event-start-date') }
    get eventEndDate() { return $('#event-end-date') }
    get addButtonModal() { return $("button[type=submit]") }
    get genInfoPageH1() { return $('h1') }
    get testEventOne() { return testEventOne; }
    get testEventTwo() { return testEventTwo; }

    open() {
        super.open('https://localhost:5001/events')
    }

}

export default new Events()

