import sortContacts from '../src/sort-contacts.js';
const test = QUnit.test;

QUnit.module('sort contacts');

const contacts = [
    { firstName: 'Robert', age: 40 },
    { firstName: 'Helen', age: 30 },
    { firstName: 'Troy', age: 21 },
];

test('sort contacts by name', assert => {
    const sortChoice = { property: 'firstName' };
    const sortResult = sortContacts(contacts, sortChoice);
    
    const expected = [
        { firstName: 'Helen', age: 30 },
        { firstName: 'Robert', age: 40 },
        { firstName: 'Troy', age: 21 },
    ];

    assert.deepEqual(sortResult, expected);
});

test('sort contacts by age', assert => {
    const sortChoice = { property: 'age' };
    const sortResult = sortContacts(contacts, sortChoice);
    
    const expected = [
        { firstName: 'Troy', age: 21 },
        { firstName: 'Helen', age: 30 },
        { firstName: 'Robert', age: 40 },
    ];

    assert.deepEqual(sortResult, expected);
});