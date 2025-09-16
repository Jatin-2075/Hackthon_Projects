const express = require('express')
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const data =  require("./test_data.json");

app.get("/login_section", (req, res) => {
    const cred = data.map(({email, password}) => ({email, password}));
    res.json(cred );
});

app.get("/user_info", (req, res) => {
    const cred = 
})

app.listen(5000, () => console.log("Server is running at http://localhost:5000"));
