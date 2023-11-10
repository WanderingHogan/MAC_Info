const execSync = require("child_process").execSync;

function get_device_ids() {
    // get all interfaces, sed command to just strip out names, awk to make a comma delimited file, final sed command to remove trailing comma
    let device_ids = execSync(`ifconfig -a | sed -E 's/[[:space:]:].*//;/^$/d' | awk 'BEGIN { ORS="," }; {print $NF}' | sed 's/.$//'`);
    return device_ids.toString();
}

exports.get_all_interface_names = () => get_device_ids();

exports.get_all_mac_addresses = function () {
    return "TODO"
}