const express = require("express");
const axios = require("axios").default;
const cors = require("cors");

const app = express();
const PORT = 3003;

app.use(cors());

app.get("/api/stock-prices", async (req, res) => {
  const options = {
    method: "GET",
    url:'https://latest-stock-price.p.rapidapi.com/any',
    params: { Indices: "NIFTY 50" },
    headers: {
      "x-rapidapi-host": "latest-stock-price.p.rapidapi.com",
      "x-rapidapi-key": "7289c9d769mshbb25829ecf700f4p125f47jsn1dc97e85a3d2" // Replace with your actual API key
    }
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json({ message: error.response.data });
    } else if (error.request) {
      res.status(500).json({ message: "No response received from API" });
    } else {
      res.status(500).json({ message: "Error setting up the request" });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server started successfully at port ${PORT}!`);
});
