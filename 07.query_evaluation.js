// select * from products where harga > 10000
db.products.find({
    $expr : {
        $gt : ["$harga", 10000]
    }
});

//select * from customers where toUpper(_id) = 'NOMOR1'
db.customers.find({
    $expr:{
        $eq :[
            {$toUpper : "$_id"}, "NOMOR1"
        ]
    }
});

//select * from products where name is not null and category is not null
db.products.find({
    $jsonSchema : {
        required:["nama", "category"]
    }
});

// select * from products where nama is not null and type(nama) = 'string' and type(harga) = 'long'
db.products.find({
    $jsonSchema : {
        required:["nama"],
        properties : {
            nama : {
                bsonType : "string"
            },
            harga : {
                bsonType : "long"
            },
        }
    }
});

// select * from products where price % 5 = 0
db.products.find({
    harga : {
        $mod : [5, 0]
    }
});

// select * from products where nama like "%mie%"
db.products.find({
    nama : {
        $regex  : /mie/,
        $options : "i"
    }
});

//select * from products where nama like "Mie%"
db.products.find({
    nama : {
        $regex: /^Mie/
    }
});

//create index  on products 
db.products.createIndex({
    nama : "text"
});

// select * from products where (nama like "%mie%" or nama like "%sedap%" )
db.products.find({
    $text : {
        $search : "mie sedap"
    }
});

// select * from customers where _id = "nomor1"
db.customers.find({
    $where : function () {
        return this._id == "nomor1"
    }
})