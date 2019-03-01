import contacts from '../data/contacts.js';
import loadContacts from '../src/contacts-component.js';
import loadSort from '../src/sort-component.js';
import sortContacts from '../src/sort-contacts.js';

loadContacts(contacts);

loadSort(sortChoices => {
    const sortedContacts = sortContacts(contacts, sortChoices);
    loadContacts(sortedContacts);
});