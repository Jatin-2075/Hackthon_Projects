const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
import OpenAI from "openai";
const client = new OpenAI();

app.use(cors());
app.use(express.json());

const data = require('./test_data.json');

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = data.users[email];

    if(user && user.password === password){
        res.json({ success: true, user });
    } else {
        res.json({ success: false, message: "Wrong email or password" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
