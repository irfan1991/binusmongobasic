db.products.insertMany([
    {
    _id : 6,
    kode : 'B006',
    nama : 'Mouse Wireless',
    harga : new NumberLong(15000),
    category : "komputer",
    tags : ["wireless" , "mouse", "accessories"]
  },

  {
    _id : 7,
      kode : 'B007',
      nama : 'TV LCD',
      harga : new NumberLong(10000000),
      category : "elektronik",
      tags : ["TV" , "elektronik", "LCD"]
    },

    {
        _id : 8,
        kode : 'B008',
        nama : 'samsung monitor',
        harga : new NumberLong(12000000),
        category : "komputer",
        tags : ["monitor" , "elektronik", "accessories"]
      },

]);

//select * from products where (tags = "elektronik" and tags = "monitor")
db.products.find({
    tags : {
        $all : ["elektronik", "monitor"]
    }
})

// select * from products where tags in ["elektronik" , "accessories"]
db.products.find({
    tags : {
        $elemMatch : {
            $in : ["elektronik", "accessories"]
        }
     
    }
});

// select * from products where size(tags) = 3
db.products.find({
    tags : {
        $size : 3
    }
})