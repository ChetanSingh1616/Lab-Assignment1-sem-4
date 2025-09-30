// reader.js — non-blocking file read (callback style)
const fs = require('node:fs');
const path = require('node:path');

const filePath = path.join(__dirname, 'text.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('read error:', err.message);
    process.exit(1);
  }
  // Print the file content as-is (trim trailing newlines to keep console tidy)
  console.log(data.trimEnd());
});
