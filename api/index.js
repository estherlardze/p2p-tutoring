import express from "express";
import fileUpload from "express-fileupload"
import pdfParse from "pdf-parse"
import cors from "cors"

const app = express()

const corsOptions = {
    origin: ["http://localhost:3000"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", 
    credentials: true,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

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

app.listen(4000)