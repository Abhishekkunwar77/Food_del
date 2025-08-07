import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
 import subscriberRoute from "./routes/subscriberRoute.js"
// app config
const app = express();
const port = 4000;

//middlewares
app.use(express.json());
app.use(
  cors({
    origin: "https://food-del-rr63.vercel.app", // Replace with your actual frontend URL
    credentials: true,
  })
);


// DB connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/subscriber", subscriberRoute); // New route


app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
