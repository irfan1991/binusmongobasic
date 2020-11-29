db.customers.createIndex({
    "data.$**" : 1
})

db.customers.insertMany([
    {
        _id : "nomor6",
        name : "latif",
        data : {
            hobby : "Main Game",
            university : "Binus"
        }

    },
    {
        _id : "nomor7",
        name : "handi",
        data : {
            passion : "Wirausaha",
            university : "Binus"
        }

    }
])