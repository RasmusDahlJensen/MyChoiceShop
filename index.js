import dotenv from "dotenv";
import { initRouter } from "./routes/init.sequelize.js";

dotenv.config();

const app = express()

app.use(initRouter)

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Start the server
app.listen(port, () => {
	console.log(`Express app http://localhost:${port}`);
});

// Parse request bodies as JSON
app.use(express.json());

// Parse URL-encoded request bodies
app.use(
	express.urlencoded({
		extended: true,
	})
);


// Products route
app.get("/products", (req, res) => {
	res.send("Products");
});

// Register UserRouter for handling user-related routes
app.use(ProductRouter);
