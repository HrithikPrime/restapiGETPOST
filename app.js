const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());


let highestAlphabet = '';

app.get('/bfhl', (req, res) => {
    
    res.status(200).json({ operation_code: 1 });
});

app.post('/bfhl', (req, res) => {
    
    const {
        full_name,
        dob,
        email,
        roll_number,
        numbers,
        alphabets
    } = req.body;

   
    highestAlphabet = alphabets.reduce((max, current) => {
        return current > max ? current : max;
    }, '');

   
    const user_id = `${full_name}_${dob.replace(/\//g, '')}`;

    
    const response = {
        user_id,
        college_email: email,
        college_roll_number: roll_number,
        numbers,
        alphabets,
        highest_alphabet,
        is_success: true  
    };

    res.status(200).json(response);
});


app.listen(port, () => {
    console.log(`Server Port: ${port}`);
});