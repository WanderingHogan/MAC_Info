let active_platform;
switch (process.platform) {
    case 'win32':
        console.log('Windows Found')
        active_platform = require('./platform/windows')
        break;
    case 'linux':
        console.log('Linux Found')
        active_platform = require('./platform/linux')
        break;
    case 'darwin':
        console.log('Mac Found')
        active_platform = require('./platform/mac')
        break;
    default:
        console.log('Operating System Not Supported')
        break;
}

exports.get_all_interface_names = function(cb) {
    return active_platform.get_all_interface_names()
  };


exports.get_all_mac_addresses = function() {
  return active_platform.get_all_mac_addresses()
}
  