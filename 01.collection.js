// membuat collection products
db.createCollection('products');

db.createCollection('customers');
db.createCollection('orders');

// select * from products
db.products.find().pretty();

db.products.count();

db.products.drop();