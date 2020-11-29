// select * from customers where _id = 'number01'
db.customers.find({
    _id : 'nomor1'
});

// select * from customers where nama = 'Andika Pratama'
db.customers.find({
    name : 'Andika Pratama'
});

//select * from orders where items.kode_product = 'B001'
db.orders.find({
    "items.kode_product" : 'B001'
});