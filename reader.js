// reader.js — non-blocking file read with fs/promises
const { readFile } = require('node:fs/promises');
const path = require('node:path');

(async () => {
  try {
    const filePath = path.join(__dirname, 'text.txt'); // keep files together
    const data = await readFile(filePath, 'utf8');     // non-blocking
    console.log(data);
  } catch (err) {
    console.error('Error reading file:', err.message);
    process.exit(1);
  }
})();
