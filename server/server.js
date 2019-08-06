const express = require ('express');

const path = require ('path');

const publicPath = path.join(__dirname, '../public');

const app = express();

app.use(express.static(publicPath));

const port = 1000;

app.listen(port, () => {
console.log(`Server started on port ${port}`);
})