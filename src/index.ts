import express from "express";
import { connectDB } from "./database";
import apiRoutes from './routes'; // Import the routes from the routes folder

const app = express();
app.use(express.json());

app.use(apiRoutes); // Use the routes

const PORT = process.env.SERVER_PORT || 5000;

console.log('Starting app!');
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
