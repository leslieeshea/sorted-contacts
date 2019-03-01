export default function sortContacts(contacts, sortChoice) {
    const property = sortChoice.property;
    return contacts.sort((a, b) => {
        if(a[property] === b[property]) {
            return 0;
        }
        if(a[property] > b[property]) {
            return 1;
        }
        return -1;

    });
}