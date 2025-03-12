import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import path from "path";

const __dirname = path.resolve();


const app = express();
const port = process.env.PORT || 4000;


connectDB();

const allowedOrigins = [
  "http://localhost:5173",
  
];

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], 
    allowedHeaders: ["Content-Type", "Authorization"], 
  })
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "dist", "index.html"));
  });
}



app.get("/", (req, res) => {
  res.send("API Working");
});

app.use("/api/auth", authRoutes);
app.use("/api/user", userRouter);

app.listen(port, () => console.log(`Server started on PORT: ${port}`));
