// Zadanie 3
const student = require("./Student.js");

const FULLNAME = student.getStudentFullName();
const STUDENT_ID = student.getStudentId();

console.log(`My student name is ${FULLNAME}. My student ID is ${STUDENT_ID}`);

// Zadanie 4
const http = require("http");
const PORT = 3000;

let server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!\n");
});

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  console.log(`My name is ${FULLNAME}. My student ID is ${STUDENT_ID}.`);
});

// Zadanie 5
function requestListener() {
  server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>About student</title>
        </head>
        <body>
            <p>My name is ${FULLNAME}. My student ID is ${STUDENT_ID}.</p>
        </body>
        </html>
    `;
    res.end(htmlContent);
  });
  server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
}

