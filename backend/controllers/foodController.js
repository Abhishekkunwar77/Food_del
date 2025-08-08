import foodModel from "../models/foodModel.js";
// import userModel from "../models/userModel.js";
import fs from "fs";

// add food items

const addFood = async (req, res) => {
  // Store with public URL or relative path
  const imagePath = `/images/${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: imagePath, // ✅ Now matches express.static("/images", "uploads")
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};


// all food list 
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data:foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
}

// remove food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    if (food?.image) {
      const imageFileName = food.image.replace("/images/", "");
      fs.unlink(`uploads/${imageFileName}`, (err) => {
        if (err) console.error("Error deleting image:", err);
      });
    }
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food removed" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { addFood, listFood, removeFood };
