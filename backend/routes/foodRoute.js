import express from "express";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";
import multer from "multer";
// import authMiddleware from "../middleware/auth.js";

const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.post("/", async (req, res) => {
  console.log("POST /api/food hit");
  console.log("Body:", req.body);
  try {
    // your create logic here
    res.status(201).json({ success: true });
  } catch (error) {
    console.error("Error creating food:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove",  removeFood);

export default foodRouter;
