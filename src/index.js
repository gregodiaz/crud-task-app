import "dotenv/config";
import app from "./app";
import { syncTables } from "./models";

const PORT = process.env.PORT || 2225;
// syncTables();

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
