// /*
// Notes
// - 10, 172, 192 are all private network addresses
// -  - 10 is class a (up to 16m addresses)
// -  - 172 is class b (up to 65k addresses)
// -  - 192 is class c (up to 255 addresses)
// - Most homes/consumer grade routers uses 192, and most professional networks something else (especially if they offer vpn service in/out)
// */


// import getMAC, { isMAC } from 'getmac'
// import os from 'os';
// // networkInterfaces only returns currently active devices, there is a fair amount of criticism of this online
// import network from 'network';
// // network has utilities to get public ip addresses we could rip out
// // utilizes different native os libraries/packages to see network information, has win32, mac, linux https://github.com/tomas/network/tree/master/lib
// // might require checking and installing more packages if bundled inside a docker container

// // globals for test
// // // windows
// // const offline_adaptor = "Wi-Fi";
// // const online_adaptor = "Ethernet";

// // // mac
// const offline_adaptor = "en0";
// const online_adaptor = "en1";

// // getMAC
// // Fetch the computer's MAC address
// let active_mac_address = getMAC();

// // // Fetch the computer's MAC address for a specific interface
// // getMAC cannot get mac from inactive 
// try {
//     console.log('getMAC', active_mac_address)
// } catch (e) {
//     console.log(e)
// }


// // os.networkInterfaces
// // List Network Interface Details
// let networkDeviceObject = os.networkInterfaces();
// for (const [key, value] of Object.entries(networkDeviceObject)) {
//     console.log(`\n\n${key}`);    
//     console.table(value)
// }



// // network
// async function get_interfaces() {
//     let response = await network.get_interfaces_list((err, obj) => {
//         if(err) {
//             console.log(err)
//             return
//         }
//         return obj
//     })
//     const interface_object = await new Promise((resolve, reject) => {
//         network.get_interfaces_list((err, obj) => {
//           if (err) {
//             reject(err);
//             return;
//           }
  
//           resolve(obj);
//         });
//       });
//       return interface_object;
// }
  
// const interface_list = await get_interfaces();
// console.table(interface_list);



// // return interfaces
// let offline_filtered_interface = interface_list.filter((interface_obj) => {
//     return interface_obj.name == offline_adaptor
// })
// let online_filtered_interface = interface_list.filter((interface_obj) => {
//     return interface_obj.name == online_adaptor
// })

// console.log('offline_filtered_interface', offline_filtered_interface)
// console.log('online_filtered_interface', online_filtered_interface)