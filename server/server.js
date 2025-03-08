import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
const app = express();
const port = process.env.PORT || 4000;

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:4000",
  })
);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.use("/api/auth", authRoutes);
app.use("/api/user" , userRouter)

app.listen(port, () => console.log(`Server started on PORT: ${port}`));
