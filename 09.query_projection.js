// select _id , nama , category from products 
db.products.find({},{
    nama : 1,
    category : 1
})

//select _id , nama , category , harga from products
db.products.find({}, {
    deskripsi : 0,
    tags : 0
})

// select _id, nama , category , harga , tags[first] from products where tags in ("elektronik", "accesories")
db.products.find({
    tags : {

        $elemMatch  :{
            $in : ["elektronik", "accessories"]
        }
    }
} , {
    nama : 1,
    category : 1,
    harga : 1,
    "tags.$" : 1
});

//select _id , nama , category , harga , tags (in ("elektronik", "accessories")) from products
db.products.find({},{
    nama : 1,
    category : 1,
    harga : 1,
    tags : {
        $elemMatch : {
            $in : ["elektronik", "accessories"]
        }
    }
});

//select * , score from products where $search like "monitor"
db.products.find({
    $text : {
        $search:"monitor"
    }
    }, {
        score : {
            $meta : "textScore"
        }
    }
)