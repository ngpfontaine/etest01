// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// Launch local app (Linux app & path)
const procChrome = require('child_process')
var child = procChrome.exec
// Local path per operating system
var executablePath = "/usr/bin/google-chrome"
var parameters = ["--incognito"];
var childProcess = child(executablePath, parameters, function(err, data) {
     console.log(err)
     console.log(data.toString())
})
// On exit
childProcess.on('exit', function (code) {
	   console.log('Child process exited with exit code '+code)
})

childProcess.send(console.log('foo'));