db.createCollection("prize" , {
    validationAction : "error",
    validator : {
        $jsonSchema : {
            bsonType : "object",
            required : ["name"],
            properties : {
                name : {
                    bsonType : "string",
                    description : "Harus berupa string"
                }
            }
        }
    }
})