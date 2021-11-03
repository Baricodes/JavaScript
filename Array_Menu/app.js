let data = [
    {
        name: 'Matero',
        age: '30'
    },
    {
        name: 'Max',
        age: '15'
    },
    {
        name: 'Gwen',
        age: '19'
    },
    {
        name: 'Lcuy',
        age: '41'
    },
    {
        name: 'Mike',
        age: '21'
    },
    {
        name: 'Charles',
        age: '29'
    },  
];

// Selecting the div element with the info id
const info = document.querySelector('#info');

// Adding each object in the data array to the HTML
// page within <div> tags
let details = data.map(function(item) {
    return (
        '<div>' + item.name + ' is ' +  item.age + ' years old.' + '</div>'
    );
})

info.innerHTML = details.join('\n');