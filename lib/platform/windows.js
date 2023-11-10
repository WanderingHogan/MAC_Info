const { exec } = require('node:child_process');

/* 
    Modified from here: https://gist.github.com/nabeelvalley/57f73478b444251f25621c5d82bd878e
*/
const csvToArray = (text) => {
    // remove double quotes, remove extra newline from end, replace returns with newlines
    const [header, ...lines] = text.replace(/['"]+/g, '').replace(/\n$/, "").replace(/\r/g, '').split('\n')
  
    const objHeaders = header.split(',')
  
    const mergeObjects = (oArr) => Object.assign({}, ...oArr)
  
    const extractObjPartial = (row, i) => ({ [objHeaders[i]]: row })
  
    const lineToObject = (line) =>
      mergeObjects(line.split(',').map(extractObjPartial))
  
    const table = lines.map(lineToObject)
  
    return table
  }

exports.getAllMacs = function() {
    exec('getmac /V /FO csv', (err, stdout, stderr) => {
        if (err) {
          return;
        }
      
        return csvToArray(stdout)
      });
}