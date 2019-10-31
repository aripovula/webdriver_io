import { expect } from 'chai';
import Events from '../pageObjects/events.page';

describe('Event form', () => {

    const testEvent = Events.testEventOne;

    it('should open Add event modal, add values and click modals Add button', () => {

        Events.open();
        Events.addButtonMain.click();
        Events.eventName.setValue(testEvent.name);
        // below is based on https://webdriver.io/docs/api/element/selectByAttribute.html
        Events.eventStatus.selectByAttribute('value', testEvent.status);
        Events.eventType.selectByAttribute('value', testEvent.type);
        Events.eventCountry.selectByAttribute('value', testEvent.country);
        Events.eventWindow.selectByAttribute('value', testEvent.window);
        Events.eventStartDate.setValue(testEvent.startDate);
        Events.eventEndDate.setValue(testEvent.endDate);
        browser.pause(3000);
        Events.addButtonModal.click();
        browser.pause(3000);
        expect(Events.genInfoPageH1.getText()).to.equal(testEvent.name);
    })

    browser.pause(3000);
});
