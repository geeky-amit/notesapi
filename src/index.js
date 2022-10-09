const express = require('express');
const app = express();

const mongoose = require('mongoose');


const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

app.use(express.json());

app.use(cors());



app.use("/users", userRouter);
app.use("/note", noteRouter);


app.get('/', (req, res) => {
                res.send("Notes API from COCO");
});

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://coco:Cocosh_02@cluster0.akpuf4f.mongodb.net/notes_db?retryWrites=true&w=majority")
.then(() => {

    app.listen(PORT, () => {
        console.log("Server started on port  no. " + PORT);
    });

})
.catch((error) => {
    console.log(error);
})


