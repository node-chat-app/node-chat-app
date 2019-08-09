const express = require ('express');

const path = require('path');

const app = express();

const publicPath = path.join(__dirname, '../public');


app.use(express.static(publicPath));

const port = process.env.PORT || 1000;

app.listen(port, () => {
console.log(`Server started on port ${port}`);
});