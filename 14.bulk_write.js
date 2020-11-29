db.customer.bulkWrite([
    {
        insertOne : {
            document : {
                _id : "nomor4",
                name : "Anggrit"
            }
        }
    },

    {
        insertOne : {
            document : {
                _id : "nomor5",
                name : "Kurniawan"
            }
        }
    },

    {
        updateMany : {
            filter : {
                _id : {
                    $in : ["nomor4" , "nomor5"]
                }
            },

            update : {
                $set : {
                    name : "Nama Peserta "
                }
            }
        }
    }

])