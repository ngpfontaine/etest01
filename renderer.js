// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// Launch local app (Linux app & path)
var child = require('child_process').execFile
var executablePath = "/usr/bin/google-chrome"
var parameters = ["--incognito"];
child(executablePath, parameters, function(err, data) {
     console.log(err)
     console.log(data.toString())
})

