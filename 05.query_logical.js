
// select * from products where category in ('elektronik', 'komputer) and harga > 1000000
db.products.find({
    $and: [
        {
            category  :{
                $in: ["elektronik","komputer"]
            }
        },
        {
            harga : {
                $gt : 1000000
            }
        }
        
    ]
   
});

// select * from products where category not in ["elektronik", "komputer"]
db.products.find({
    category : {
        $not : {
            $in: ["elektronik", "komputer"]
        }
    }
});

//select * from products where price between 1000000 and 2000000 and category != 'food'
db.products.find({
    $and : [
        {
            harga : {
                $gte: 1000000,
                $lte: 4000000
            }
        },
        {
            category : {
                $ne: "food"
            }
        }
    ]
});