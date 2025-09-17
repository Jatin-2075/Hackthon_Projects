const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const data = require("./test_data.json");

app.get('/', (req, res) => {
    console.log("live");
    res.send("live");
});

// login route
app.post("/login_section", (req, res) => {
    const { email, password } = req.body;

    // find matching user
    const user = data.users.find(
        u => u.email === email && u.password === password
    );

    if (user) {
        res.json({ success: true, user });
    } else {
        res.status(401).json({ success: false, message: "Invalid credentials" });
    }
});

// ✅ only ONE listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
