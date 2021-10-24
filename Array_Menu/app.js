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

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return (
        '<div>' + item.name + ' is ' +  item.age + ' years old.' + '</div>'
    );
})

info.innerHTML = details.join('\n');