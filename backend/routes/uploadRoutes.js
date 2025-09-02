import express from "express"
import upload from "../middleware/multer/multer.js"
import {uploadMultiple} from "../middleware/upload/uploadMulitple.js"

const router = express.Router()

router.post("/upload", upload.array("images"), uploadMultiple);

export default router;