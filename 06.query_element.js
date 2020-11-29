// select * from products where category is null
db.products.find({
    category : {
        $exists : false
    }
});

//select * from products where type(category) = "string"
db.products.find({
    category : {
        $type: "string"
    }
});

// select * from products where type(harga) in ("int", "long")
db.products.find({
    harga : {
        $type: ["int", "long"]
    }
})