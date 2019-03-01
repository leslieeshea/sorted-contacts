export function makeContactsTemplate(contact) {
    const currencyStyle = { style: 'currency', currency: 'USD' };
    const html = /*html*/
    `<tr>
        <td>${contact.isActive ? 'Yes' : 'No'}</td>
        <td>${contact.balance.toLocaleString('en-US', currencyStyle)}</td>
        <td>${contact.firstName}</td>
        <td>${contact.lastName}</td>
        <td><img src="${contact.picture}"></td>
        <td>${contact.age}</td>
        <td title="${contact.about}">${contact.company}</td>
        <td>${contact.email}</td>
        <td class="capitalize">${contact.favoriteFruit}</td>
    </tr>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const contactsTableNode = document.getElementById('contacts-table');

export default function loadContacts(contacts) {
    clearTable();
    contacts.forEach(contact => {
        const contactRow = makeContactsTemplate(contact);
        contactsTableNode.appendChild(contactRow);
    });
}

function clearTable() {
    while(contactsTableNode.firstChild) {
        contactsTableNode.firstChild.remove();
    }
}