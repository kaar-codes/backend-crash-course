import http from "node:http";

http
  .createServer((req, res) => {
    if (req.url === "/about") {
      res.writeHead(200, {
        "Content-type": "text/html",
      });
      res.write("<h1>About Page</h1>");
    } else if (req.url === "/products") {
      res.writeHead(200, {
        "Content-type": "text/html",
      });
      res.write("<h1>Products Page</h1>");
    } else {
      res.writeHead(404, { "Content-type": "text/html" });
      res.write("404 Page Not Found");
    }
    res.end();
  })
  .listen(8000, "127.0.0.1", () =>
    console.log("Started my server on http://127.0.0.1:8000"),
  );
