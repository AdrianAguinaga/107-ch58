let catalog = [
    {
        "title":"orange",
        "category":"fruit",
        "price": 15, 
        "image":"picture",
        "_id":"1" //the id should be unique, (it cannot be repeated)
    },
    {
        "title":"chocolate",
        "category":"candy",
        "price": 15, 
        "image":"picture",
        "_id":"2" //the id should be unique, (it cannot be repeated)
    },
    {
        "title":"milk",
        "category":"dairy",
        "price": 15, 
        "image":"picture",
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