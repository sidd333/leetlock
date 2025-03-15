import express from "express";
import cors from "cors";
import leetCodeRoutes from "./routes/leetcode";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/leetcode", leetCodeRoutes);

export default app;
