/**
 * Created by Sir_Coop on 6/3/2015.
 */
var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
    name:'Hello World',
    description: 'The nodejs.org example web server.',
    script: 'C:\\path\\to\\helloworld.js'
    //env: {
    //    name: "HOME",
    //    value: process.env["USERPROFILE"] // service is now able to access the user who created its' home directory
    //}
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
    svc.start();
});

svc.install();

//  to set environment variables
