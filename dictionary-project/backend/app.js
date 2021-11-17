const express = require('express');
const cors = require('cors');
const entries = require("./enty.controller");



const app = express();
const port = 4000;
const urlencodedParser = express.urlencoded({ extended: false })
app.use(cors({
    origin: '*'
}));
app.get('/', urlencodedParser, entries.findByWord);

app.listen(port, () => {
    
    console.log(`listening on port ${port}!`)
});