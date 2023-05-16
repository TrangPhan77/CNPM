import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const publicPath = path.join(__dirname + "../../../", "Front-End/public");

export default publicPath;
