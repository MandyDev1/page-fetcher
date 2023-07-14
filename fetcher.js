const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    return;
  }

  fs.writeFile(filePath, body, (error) => {
    if (error) {
      console.error('Error writing file:', error);
      return;
    }

    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
  })
})