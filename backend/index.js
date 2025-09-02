import express from "express";
import dotenv from "dotenv"
import uploadRoute from "./routes/uploadRoutes.js"
import cors from "cors"

dotenv.config();
const app = express()
app.use(express.json())
app.use(cors({ origin: "http://localhost:5173" }));

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World")
})

// Routes
app.use("/api/users", uploadRoute);

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`)
})