// select count(*) from products
db.products.find({}).count()

// select * from products limit 5
db.products.find({}).limit(5)

//select * from products offset 3
db.products.find({}).skip(3)

// select * from products limit 4 offest 2
db.products.find({}).limit(4).skip(2)

// select * from products order by nama asc , category desc
db.products.find({}).sort({
    nama : 1,
    category : -1
})