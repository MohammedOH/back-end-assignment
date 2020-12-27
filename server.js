const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/greeting/:name', (req, res) => {
    var result = {
        message: `Hello ${req.params.name}`
    };
    res.send(result);
});

app.post('/data', (req, res) => {
    var result = JSON.parse(req.body.json_data);
    result['name'] = 'Mohammed AlHabbash';
    res.send(result);
});

app.listen(port);
