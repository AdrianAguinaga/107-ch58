let catalog = [
    {
        "title":"Chocolate",
        "category":"fruit",
        "price": 15, 
        "image":"1.webp", //this is a picture, you can use a link to a real image
        "_id":"1" //the id should be unique, (it cannot be repeated)
    },
    {
        "title":"milk",
        "category":"candy",
        "price": 15, 
        "image":"milk.webp", //this is a picture, you can use a link to a real image
        "_id":"2" //the id should be unique, (it cannot be repeated)
    },
    {
        "title":"orange",
        "category":"dairy",
        "price": 15, 
        "image":"oranges.webp", //this is a picture, you can use a link to a real image
        "_id":"3" //the id should be unique, (it cannot be repeated)
    },
  
];

class DataService {
    getProducts()
    {
        return catalog;
    }
}

export default DataService;