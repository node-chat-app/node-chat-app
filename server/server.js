const express = require ('express');

const path = require('path');

const app = express();

// app.get('/', (req, res) => {
//     res.send('good');
// })

const publicPath = path.join(__dirname, '../public');


app.use(express.static(publicPath));

const port = 1000;

app.listen(port, () => {
console.log(`Server started on port ${port}`);
})