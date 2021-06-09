const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs')
require('dotenv/config')

const app = express();
app.use(bodyParser.json());


app.post('/', (req, res) => {
    const tests = req.body['tests']
    final_list = [];
    for (test_cases of tests) {
        const obj = {
            correct_answers: [test_cases['output'].slice(0, -1)],
            test: test_cases['input']
        }
        final_list.push(obj);
    }
    fs.writeFileSync(process.env.FILE_PATH, JSON.stringify(final_list, null, 4));
    res.sendStatus(200);
})

app.listen(12345, () => {
    console.log('Listening on port 12345');
})

