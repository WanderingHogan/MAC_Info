## Library Comparison
### [getmac](https://www.npmjs.com/package/getmac)
#### Pro's
- Simple, only 2 methods.
    - getMAC - gets the first item in the list networkInterfaces returns? need to verify*** (on mac ap1)

- Build on os.networkInterfaces, meaning it does not rely on any libraries that should be bundled with an OS
#### Con's
- Built on on os.networkInterfaces


## [os.networkInterfaces()](https://nodejs.org/api/os.html#osnetworkinterfaces)
#### Pros
#### Cons
- Only shows interfaces that are online

## [network](https://www.npmjs.com/package/network)
#### Pros
#### Cons
- If a package is not installed, eg WMIC - will not work
- - WMIC itself is deprecated, they are pushing [windows powershell wmi](https://learn.microsoft.com/en-us/windows/win32/wmisdk/wmic)