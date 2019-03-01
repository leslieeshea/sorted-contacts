const sortSelectionNode = document.getElementById('sort-selection');

export default function loadSort(callback) {
    sortSelectionNode.addEventListener('change', () => {
        const sortChoices = {
            property: sortSelectionNode.value
        };
        callback(sortChoices);

    });
}