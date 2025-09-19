const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const data = require('./test_data.json');

// ✅ Proper login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = data.users[email];

    if (user && user.password === password) {
        res.json({ success: true, user });
    } else {
        res.status(401).json({ success: false, message: "Wrong email or password" });
    }
});

app.listen(PORT, () => console.log(` Server running on http://localhost:${PORT}`));
