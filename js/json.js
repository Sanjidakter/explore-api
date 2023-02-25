const user = {id: 1, name: 'Gorib Aamir', job: 'actor'};
// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);
/* 
{ id: 1, name: 'Gorib Aamir', job: 'actor' }
{"id":1,"name":"Gorib Aamir","job":"actor"}
*/

const shop = {
    owner : 'Alia',
    address: {
        street : 'kochukhet tintola voot er goli',
        city:'Dhaka',
        country : 'BD',
    },
    products : ['laptop','mic','monitor','keyboard'],
    revenue: 45000,
    isOpen:true,
    isNew: false
};

const shopJson = JSON.stringify(shop);

// console.log(shopJson);
// console.log(shop);

const shopObj = JSON.parse(shopJson);
console.log(shopObj);
console.log(typeof(shopObj));