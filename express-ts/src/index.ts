import express, { Request, Response } from "express";
import router from "./routes";
import productRouter from "./routes/productRoutes";

const app = express();

app.use(express.json());

app.use('/api',router)
app.use('/api',productRouter)

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;
