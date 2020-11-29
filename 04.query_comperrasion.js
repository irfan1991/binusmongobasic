// select * from customers where _id = 'number01'
db.customers.find({
    _id : {
        $eq: 'nomor1'
    }
});


// select * from products where price > 1000
db.products.find({
    harga : {
        $gt : 1000
    }
});

db.products.insertMany([
    {
    _id : 3,
    kode : 'B003',
    nama : 'Pop Ice',
    harga : new NumberLong(5000),
    category : "food"
  },

  {
    _id : 4,
      kode : 'B004',
      nama : 'Kulkas',
      harga : new NumberLong(3202000),
      category : "elektronik"
    },

    {
        _id : 5,
        kode : 'B005',
        nama : 'Acer Laptop',
        harga : new NumberLong(12000000),
        category : "komputer"
      },

]);

// select * from products where category in ('elektronik', 'komputer) and harga > 1000000
db.products.find({
    category  :{
        $in: ["elektronik","komputer"]
    },
    harga : {
        $gt : 1000000
    }
});