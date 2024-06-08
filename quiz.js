const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware for CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Utility function to get the current time with hour, minute, second, and millisecond
const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const milliseconds = now.getMilliseconds().toString().padStart(3, '0');
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
};

app.post('/', (req, res) => {
    const requestTime = getCurrentTime();
    let schoolName = req.body.school;
    console.log(schoolName, requestTime);
    res.json({ schoolName, requestTime });
});

app.get("/", (req, res) => {
  console.log("cat");
  res.send("Hello World");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
