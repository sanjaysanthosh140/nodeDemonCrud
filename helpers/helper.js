let mngDb=require("../config/config")

module.exports = {
    async ddNwePro(proDetals, cb) {
        try {
            const data = await mngDb.getDb().collection('NewPrd').insertOne(proDetals);
             console.log("id:" +data.insertedId)
             cb(data.insertedId)
        } catch (err) {
            console.error(err);
            cb(err);
        }
    },

    getAllproD(){
        return  new Promise ( async(resolve,reject)=>{
          let  product = await mngDb.getDb().collection('NewPrd').find().toArray()
            resolve(product)
        })
    
    }
}


