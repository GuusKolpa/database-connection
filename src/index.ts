import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database";
import apiRoutes from './routes'; // Import the routes from the routes folder


dotenv.config();

const app = express();
app.use(express.json());

app.use(apiRoutes); // Use the routes

const PORT = process.env.SERVER_PORT || 5000;
    
// Log database connection attempt instead of server start
connectDB().then(() => {
    console.log('Connecting to the database...');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch((error) => {
    console.error('Database connection failed:', error);
});


export default app;
