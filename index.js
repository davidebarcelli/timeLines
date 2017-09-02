const  express = require('express');
const app = express();
const path = require("path");

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/main.js', function (req, res) {
	res.sendFile(path.join(__dirname + '/main.js'));
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
