  db.customers.insertOne({
      _id : "nomor1",
      name : "Andika Pratama"
  });

  db.products.insertMany([
      {
      kode : 'B001',
      nama : 'Pensil',
      harga : new NumberLong(6000),
      deskripsi : 'Kualitas Super'
    },
  
    {
        kode : 'B002',
        nama : 'Mie Sedap',
        harga : new NumberLong(2000),
        order : [
            {

            }
        ],
        categ
        
      }]);

      db.orders.insertOne({
          _id : new ObjectId(),
          total : new NumberLong(8000),
          items : [

            {
                kode_product  :'B001',
                harga : new NumberLong(6000),
                jumlah : new NumberInt(3)
            },

            {
                kode_product  :'B002',
                harga : new NumberLong(2000),
                jumlah : new NumberInt(4)
            },
          ]
      })