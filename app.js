const express = require("express")
const app = express()
const cors = require("cors")
const connectDb = require("./config/DbConnection")
require("dotenv").config()
const DATABASE_URL = process.env.DATABASE_URL
const Roles = require("./model/role/role")
const port = process.env.PORT
connectDb(DATABASE_URL)
const path = require('path');
const superAdminRoutes = require("./routes/superAdmin")

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(cors())
app.use(express.json())
app.use(express.static('public'))

// routes

app.use("/api/superAdmin", superAdminRoutes.router)
const roles = [
    { id: 1, name: "super admin" },
    { id: 2, name: "admin" },
    { id: 3, name: "inventory" },
    // {id:1,name:"super admin"},
    // {id:1,name:"super admin"},
]


// inserting Role

Roles.countDocuments({})
    .exec()
    .then(count => {
        if (count === 0) {
            // Insert predefined roles into the Role collection
            return Roles.insertMany(roles)
        }
    })
    .catch(err => {
        console.log(err, "error")
    })
    .finally(() => { })

app.listen(port, () => {
    console.log("App Started Sucessfully")
})

