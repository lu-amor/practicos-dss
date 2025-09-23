// filepath: /mock-payment/mock-payment/src/mock-payment.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/payments', (req, res) => {
    console.log('=== Mock Payment received ===');
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    res.status(200).json({ ok: true, received: true, note: 'mock payment processed' });
});

const PORT = 8090;
app.listen(PORT, () => console.log(`Mock payment server listening on http://127.0.0.1:${PORT}`));