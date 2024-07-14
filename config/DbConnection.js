const mongoose = require("mongoose")

const connectDb = async (DATABASE_URL) => {
    try {
        const DB_OPTION = {
            dbName: 'vPharmacy'
        }
        await mongoose.connect(DATABASE_URL, DB_OPTION);
        console.log("mongodb connected Sucessfully")
    } catch (error) {
        console.log(error, "error")
    }
}
module.exports = connectDb