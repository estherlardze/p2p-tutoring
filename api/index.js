const express = require("express");
const fileUpload = require("express-fileupload")
const pdfParse = require("pdf-parse")
const cors = require("cors")
const sendmail = require("./sendail")

const app = express()

const corsOptions = {
    origin: ["http://localhost:3000"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", 
    credentials: true,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(fileUpload())

app.post("/extract-text", (request, response) => {
    if (!request.files && !request.files.pdfFile) {
        response.status(400)
        response.end()
    }

    pdfParse(request.files.pdfFile)
     .then(result => {
        response.send(result.text)
     })
})
app.use("/", sendmail)



app.listen(4000, () => {
    console.log("server is running on port 4000")
})