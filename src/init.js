import "dotenv/config";
import app from "./server";
import "./db";
import "./models/video";
import "./models/User";
const PORT = 4000;

const handleListening = () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
};
app.listen(PORT, handleListening);