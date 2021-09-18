const express = require("express"); // Create an express app
const app = express(); // Create a new route

// REMEMBER SECURITY, PERFORMANCE, AND EDGE CASES !!!

// CRUD => POST, GET, PUT, DELETE

const slash = (req, res) => {
  res.sendStatus(200);
  res.send(["Hello", "World"]); // res.send() is like a return statement
};

/*
    HTTP response status codes:
    1xx Informational
    2xx Success
    3xx Redirection
    4xx Client Error
    5xx Server Error
*/

/* 
    200 OK
    201 Created
    400 Bad Request
    404 Not Found
    500 Internal Server Error
*/

const json = (req, res) => {
  // In a response we usually send status as well as message
  res.sendStatus(200); // 200 OK response
  res.json({ first_name: "Dhruv", last_name: "Garg" }); // Specify the response as JSON (most commonly used)
};

app.get("/", slash);
app.post("/", slash);
app.put("/", slash);
app.delete("/", slash);

app.get("/json", json);

app.get("/products", (req, res) => {
  res.send(req.query);
});

// "?" is used for optional parameters
app.get("/ab?cd", (req, res) => {
  res.send("abcd");
});

// "*" is used for ab ke baad kuch bhi and then last mai cd hona chahiye
app.get("/ab*cd", (req, res) => {
  res.send("abcd");
});

// We can use regex for the url as well

// ":" is used for assigning query inputs to query parameters
app.get("/user/:userId/book/:bookId", (req, res) => {
  res.send(req.params);
});

app.listen(5000); // Start the server
