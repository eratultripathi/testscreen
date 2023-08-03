// server.js
const express = require('express');
const cors = require('cors');
const screenshot = require('screenshot-desktop');






const app = express()
app.use(cors())
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))


const port = 3001; // Change this port number as per your preference

app.get('/screenshot', async (req, res) => {
  try {
    const imageBuffer = await screenshot({ format: 'png' });
    res.set('Content-Type', 'image/png');
    res.send(imageBuffer);
  } catch (error) {
    console.error('Error capturing screenshot:', error);
    res.status(500).json({ error: 'Could not capture screenshot' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



