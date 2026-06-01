const https = require('https');
const fs = require('fs');

https.get('https://arunkannaas.lovable.app/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    // find all img tags
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    let match;
    const urls = [];
    while ((match = imgRegex.exec(data)) !== null) {
      urls.push(match[1]);
    }
    console.log(urls);
  });
});
