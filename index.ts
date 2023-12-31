const express = require("express")
import router from './src/routes';

const app = express();
const port = 9000;

const initialize = () => {
                  console.log(`server is running on port ${port}`);
}
router(app);
app.listen(port, initialize);