const test = QUnit.test;

QUnit.module('make contacts table');

const contact = {
    'isActive': true,
    'balance': 2599.99,
    'firstName': 'Cantu',
    'lastName': 'Sullivan',
    'picture': 'http://placehold.it/32x32',
    'age': 28,
    'company': 'IDETICA',
    'email': 'cantu.sullivan@idetica.com',
    'about': 'Minim exercitation nisi ullamco consequat fugiat aute sit amet aute eu nisi. Nulla ad dolor ut fugiat sit sint commodo. Sint duis ullamco labore aute pariatur aute velit consequat elit proident sit aute est. In in culpa velit quis enim occaecat. Veniam esse laboris irure consequat. Laborum dolore nulla excepteur aute sit minim sit voluptate labore non esse cupidatat exercitation. Eiusmod incididunt consectetur quis proident.',
    'favoriteFruit': 'banana'
};

function makeContactsTemplate(contact) {
    const currencyStyle = {style: 'currency', currency: 'USD'}
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

test('make template for contacts table rows', assert => {
    const result = makeContactsTemplate(contact);
    const expected = /*html*/
    `<tr>
        <td>Yes</td>
        <td>$2,599.99</td>
        <td>Cantu</td>
        <td>Sullivan</td>
        <td><img src="http://placehold.it/32x32"></td>
        <td>28</td>
        <td title="Minim exercitation nisi ullamco consequat fugiat aute sit amet aute eu nisi. Nulla ad dolor ut fugiat sit sint commodo. Sint duis ullamco labore aute pariatur aute velit consequat elit proident sit aute est. In in culpa velit quis enim occaecat. Veniam esse laboris irure consequat. Laborum dolore nulla excepteur aute sit minim sit voluptate labore non esse cupidatat exercitation. Eiusmod incididunt consectetur quis proident.">IDETICA</td>
        <td>cantu.sullivan@idetica.com</td>
        <td class="capitalize">banana</td>
    </tr>`;

    assert.htmlEqual(result, expected);
});