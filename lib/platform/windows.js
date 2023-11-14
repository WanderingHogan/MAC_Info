const execSync = require('child_process').execSync;

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

exports.get_all_mac_addresses = function() {
    let mac_object = execSync('getmac /V /FO csv')
    return csvToArray(mac_object.toString())
}

exports.get_all_interface_names = () => {
  return "TODO"
}