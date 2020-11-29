// update products set category = "food" where _id = 5
db.products.updateOne({
    _id : 5
},{
    $set : {
        category : "food"
    }
})

// update products set category = "food" where _id = 5
db.products.updateOne({
    _id : "5fbf2f4ced76df5f28889c61"
},{
    $set : {
        category : "food"
    }
})

//update products set tags = ["food"] where category = "food" and tags is null
db.products.updateMany({
    $and: [
        {
            category : {
                $eq : "food"
            }
        },
        {
            tags : {
                $exists : false
            }
        }
    ]
}, {
    $set : {
        tags : ["food"]
    }
})

//update products set category = "food", tags = ["foods"] WHERE _id in ["5fbf2f4ced76df5f28889c61","5fbf2f4ced76df5f28889c62"]

db.products.updateMany({
    category : {
        $exists : false
    }

},{
 $set : {
    category :"food",
    tags : ["foods"]
 }
})

db.products.updateMany({},
    [
        {
            $set : {
                wrong : "wrong"
            }
        }
    ]
)

db.products.updateMany({},
    [
        {
            $set : {
                wrong : null
            }
        }
    ]
)
db.products.updateMany({},
    [
        {
           $unset : ["wrong"]
        }
    ]
)

db.products.replaceOne({
    kode : "B002"
}, {
    nama : "Ice Cream",
    harga : new NumberLong(3000),
    category : "food",
    tags : ["ice" , "manis", "makanan"]
})