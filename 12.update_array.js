// update products set ratings = [90, 80, 70]
db.products.updateMany({},{
    $set : {
        ratings : [90,80,70]
    }
})

// element pertama
db.products.updateMany({
    ratings : 90
},{
    $set : {
        "ratings.$" : 100
    }
})

db.products.updateMany({
   
},{
    $set : {
        "ratings.$[]" : 100
    }
})

db.products.updateMany({},{
    $set : {
        "ratings.$[element]" : 100
    }
},{
    arrayFilters : [{
        element : {
            $gte  :80
        }
    }
    ]})


    db.products.updateMany({},{
        $set : {
            "ratings.0" : 50,
            "ratings.1" : 50,
        }
    })

    db.products.updateOne({
        _id : 3
    },{
        $addToSet : {
            tags : "es"
        }
    })

    db.products.updateMany({},{
        $pop : {
            ratings : -1
        }
    })

    db.products.updateMany({},{
        $pull : {
            ratings : {
                $gte : 80
            }
        }
    })

    db.products.updateMany({},{
        $push : {
            ratings : 100
        }
    })

    db.products.updateMany({},{
        $pullAll: {
            ratings : [100]
        }
    })

    db.products.updateMany({},{
        $push : {
            ratings : {
                $each : [100,200, 300]
            }
        }
    })

    db.products.updateMany({},{
        $addToSet : {
            tags : {
                $each : ["es", "manis"]
            }
        }
    })

    db.products.updateMany({},{
        $push : {
            tags : {
                $each : ["hot"],
                $position : 1
            }
        }
    })

    db.products.updateMany({},{
        $push : {
            ratings : {
                $each : [100,200,300,400,500],
                $slice : -1
            }
        }
    })