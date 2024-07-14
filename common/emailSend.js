const nodemailer = require("nodemailer")
const path = require("path")
const hbs = require("nodemailer-express-handlebars")

const handlebarsOption = {
    viewEngine: {
        extName: ".handlebars",
        partialsDir: path.resolve("./views"),
        defaultLayout: false,
    },
    viewPath: path.resolve("./views"),
    extName: ".handlebars",
}

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: "aatif13698@gmail.com",
        pass: "rnklewuogajnhsgt",
    }
})