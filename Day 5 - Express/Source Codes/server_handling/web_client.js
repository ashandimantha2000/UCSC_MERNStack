var http = require("http");
var fs = require("fs");

// Options to be used by request
var options = {
  host: "localhost",
  port: "8080",
  path: "/index.html",
};

// Callback function is used to deal with response
var callback = function (response) {
  // Continuously update stream with data
  var body = "";
  response.on("data", function (data) {
    body += data;
  });

  response.on("end", async function () {
    // Data received completely.
    // Save it to a temporary file
    fs.writeFileSync("temp.html", body);

    // Dynamically import the 'open' module
    const openModule = await import("open");
    const open = openModule.default;

    // Automatically open it in the default web browser
    open("temp.html");
  });
};

// Make a request to the server
var req = http.request(options, callback);

// Error handling for the request
req.on("error", function (err) {
  console.error("Error:", err);
});
